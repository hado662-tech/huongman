import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const source = await readFile(
  new URL("../js/site.js", import.meta.url),
  "utf8",
);

function environment({
  reduced = false,
  supported = true,
  saveData = false,
} = {}) {
  const observers = [];
  const animations = [];
  let onMotionChange;
  const preference = {
    matches: reduced,
    addEventListener: (_, callback) => {
      onMotionChange = callback;
    },
  };
  class Element {
    hidden = false;
    animate(keyframes, options) {
      const animation = {
        keyframes,
        options,
        cancelled: false,
        finished: Promise.resolve(),
        cancel() {
          this.cancelled = true;
        },
      };
      animations.push(animation);
      return animation;
    }
  }
  const card = new Element();
  class Observer {
    observed = new Set();
    disconnected = false;
    constructor(callback) {
      this.callback = callback;
      observers.push(this);
    }
    observe(target) {
      this.observed.add(target);
    }
    unobserve(target) {
      this.observed.delete(target);
    }
    disconnect() {
      this.disconnected = true;
    }
  }
  const window = supported ? { IntersectionObserver: Observer } : {};
  runInNewContext(source, {
    window,
    Element,
    IntersectionObserver: Observer,
    navigator: { connection: { saveData } },
    matchMedia: (query) =>
      query.includes("prefers-reduced-motion")
        ? preference
        : { addEventListener() {} },
    document: {
      querySelector: () => null,
      querySelectorAll: (selector) =>
        selector === "[data-directory]" ? [] : [card],
      addEventListener() {},
    },
  });
  return {
    observers,
    animations,
    card,
    preference,
    changeMotion: () => onMotionChange(),
  };
}

test("reduced motion, save-data, and unsupported browsers remain static", () => {
  for (const options of [
    { reduced: true },
    { saveData: true },
    { supported: false },
  ]) {
    const state = environment(options);
    assert.equal(state.observers.length, 0);
    assert.equal(state.animations.length, 0);
    assert.equal(state.card.hidden, false);
  }
});

test("reveals only on entry, once per element, without hiding content", () => {
  const { observers, animations, card } = environment();
  const observer = observers[0];
  observer.callback([{ target: card, isIntersecting: false }]);
  assert.equal(animations.length, 0);
  card.hidden = true;
  observer.callback([{ target: card, isIntersecting: true }]);
  assert.equal(animations.length, 0);
  card.hidden = false;
  observer.callback([{ target: card, isIntersecting: true }]);
  observer.callback([{ target: card, isIntersecting: true }]);
  assert.equal(animations.length, 1);
  assert.equal(observer.observed.has(card), false);
  assert.equal(card.hidden, false);
  assert.equal(animations[0].options.fill, "backwards");
});

test("changing motion preference cancels in-flight effects", () => {
  const state = environment();
  state.observers[0].callback([{ target: state.card, isIntersecting: true }]);
  state.preference.matches = true;
  state.changeMotion();
  assert.equal(state.animations[0].cancelled, true);
  assert.equal(state.observers[0].disconnected, true);
  assert.equal(state.card.hidden, false);
});
