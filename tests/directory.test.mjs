import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const source = await readFile(
  new URL("../js/site.js", import.meta.url),
  "utf8",
);

function directory() {
  const cards = ["Phun môi", "Phun mày", "Trị nám"].map((title, index) => ({
    title,
    dataset: { topic: index < 2 ? "pmu" : "skin" },
    textContent: "Phun môi & lông mày " + title,
    querySelectorAll: () => [{ textContent: title }],
    hidden: false,
  }));
  const buttons = ["all", "pmu", "skin"].map((filter) => ({
    dataset: { filter },
    addEventListener(_, callback) {
      this.click = callback;
    },
    setAttribute() {},
  }));
  const search = {
    value: "",
    addEventListener(_, callback) {
      this.input = callback;
    },
  };
  const status = { textContent: "" };
  const empty = { hidden: true };
  const element = {
    dataset: { directory: "services" },
    querySelectorAll: (selector) =>
      selector === "[data-filter]" ? buttons : cards,
    querySelector: (selector) =>
      ({
        "input[type=search]": search,
        "[data-result-count]": status,
        "[data-empty]": empty,
      })[selector],
  };
  runInNewContext(source, {
    document: {
      querySelector: () => null,
      querySelectorAll: () => [element],
      addEventListener() {},
    },
    matchMedia: () => ({ matches: true, addEventListener() {} }),
  });
  return { cards, buttons, search, status, empty };
}

test("Vietnamese search ignores shared category text and normalizes accents", () => {
  const state = directory();
  for (const query of ["phun moi", "PHUN MÔI", "  Phun môi  "]) {
    state.search.value = query;
    state.search.input();
    assert.deepEqual(
      state.cards.filter((card) => !card.hidden).map((card) => card.title),
      ["Phun môi"],
    );
    assert.equal(state.status.textContent, "1 dịch vụ");
  }
});

test("category selection combines with search and restores after clearing", () => {
  const state = directory();
  state.buttons[1].click();
  assert.equal(state.status.textContent, "2 dịch vụ");
  state.search.value = "khong-co-dich-vu-nay";
  state.search.input();
  assert.equal(state.status.textContent, "0 dịch vụ");
  assert.equal(state.empty.hidden, false);
  state.search.value = "";
  state.search.input();
  assert.equal(state.status.textContent, "2 dịch vụ");
  assert.equal(state.empty.hidden, true);
});
