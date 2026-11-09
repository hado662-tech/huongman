import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const source = await readFile(new URL("../js/site.js", import.meta.url), "utf8");
function environment() {
  const events = {};
  const backgrounds = [{ inert: false }, { inert: false }];
  const attributes = { "aria-expanded": "false" };
  const backdrop = { hidden: true };
  const toggle = {
    setAttribute: (name, value) => { attributes[name] = value; },
    getAttribute: (name) => attributes[name],
    querySelector: () => ({ setAttribute() {} }),
    addEventListener: (_, fn) => { events.toggle = fn; },
    focus: () => { document.activeElement = toggle; },
  };
  const links = [0, 1].map((i) => ({
    addEventListener: (_, fn) => { events[`link${i}`] = fn; },
    focus() { document.activeElement = this; },
  }));
  const menu = { hidden: true, querySelectorAll: () => links };
  const document = {
    activeElement: toggle,
    body: { classList: { add() {}, remove() {} } },
    addEventListener: (name, fn) => { events[name] = fn; },
    querySelector: (selector) => ({
      "[data-menu-toggle]": toggle, "[data-mobile-menu]": menu,
      "[data-menu-backdrop]": backdrop,
    })[selector] ?? null,
    querySelectorAll: (selector) => selector.startsWith("main,") ? backgrounds : [],
  };
  runInNewContext(source, {
    document,
    matchMedia: () => ({ matches: true, addEventListener() {} }),
  });
  return { menu, backdrop, backgrounds, attributes, events, document, toggle, links };
}

test("mobile menu blocks background focus and Escape restores it", () => {
  const s = environment();
  s.events.toggle();
  assert.equal(s.menu.hidden, false);
  assert.equal(s.backdrop.hidden, false);
  assert.ok(s.backgrounds.every((el) => el.inert));
  s.events.keydown({ key: "Escape" });
  assert.equal(s.menu.hidden, true);
  assert.equal(s.backdrop.hidden, true);
  assert.ok(s.backgrounds.every((el) => !el.inert));
  assert.equal(s.document.activeElement, s.toggle);
});

test("mobile menu traps Tab and restores state after link or outside click", () => {
  const s = environment();
  let prevented = false;
  s.events.toggle();
  s.events.keydown({ key: "Tab", shiftKey: true, preventDefault: () => { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(s.document.activeElement, s.links[1]);
  s.events.link0();
  assert.equal(s.attributes["aria-expanded"], "false");
  s.events.toggle();
  s.events.click({ target: { closest: () => null } });
  assert.equal(s.menu.hidden, true);
  assert.equal(s.document.activeElement, s.toggle);
});
