import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const source = await readFile(new URL("../js/carousel.js", import.meta.url), "utf8");

function environment(reduced = false) {
  const events = {};
  let resize;
  let pendingFrame;
  const previous = { addEventListener: (_, fn) => { events.previous = fn; } };
  const next = { addEventListener: (_, fn) => { events.next = fn; } };
  const counter = { textContent: "" };
  const controls = { hidden: true };
  const track = {
    scrollLeft: 0,
    clientWidth: 300,
    scrollWidth: 840,
    getBoundingClientRect: () => ({ left: 20 }),
    addEventListener: (name, fn) => { events[name] = fn; },
    scrollTo(options) {
      this.lastScroll = options;
      this.scrollLeft = options.left;
      events.scroll();
    },
  };
  track.children = [0, 280, 560].map((left) => ({
    getBoundingClientRect: () => ({ left: 20 + left - track.scrollLeft }),
  }));
  const elements = {
    "[data-carousel-track]": track,
    "[data-carousel-controls]": controls,
    "[data-carousel-prev]": previous,
    "[data-carousel-next]": next,
    "[data-carousel-count]": counter,
  };
  runInNewContext(source, {
    matchMedia: () => ({ matches: reduced }),
    requestAnimationFrame: (fn) => { pendingFrame = fn; return 1; },
    window: { ResizeObserver: true },
    ResizeObserver: class {
      constructor(fn) { resize = fn; }
      observe() {}
    },
    document: { querySelectorAll: () => [{ querySelector: (key) => elements[key] }] },
  });
  return {
    track, controls, counter, previous, next, events,
    flush: () => pendingFrame?.(),
    resize: () => resize(),
  };
}

test("carousel moves both directions and clamps its last stop", () => {
  const s = environment();
  assert.equal(s.controls.hidden, false);
  assert.equal(s.previous.disabled, true);
  s.events.next(); s.flush();
  assert.equal(s.counter.textContent, "2 / 3");
  assert.equal(s.track.scrollLeft, 280);
  s.events.next(); s.flush();
  assert.equal(s.track.scrollLeft, 540);
  assert.equal(s.counter.textContent, "3 / 3");
  assert.equal(s.next.disabled, true);
  s.events.previous(); s.flush();
  assert.equal(s.counter.textContent, "2 / 3");
});

test("swiping synchronizes controls; desktop resize removes unnecessary controls", () => {
  const s = environment();
  s.track.scrollLeft = 540;
  s.events.scroll(); s.flush();
  assert.equal(s.next.disabled, true);
  s.track.clientWidth = 840;
  s.track.scrollLeft = 0;
  s.resize(); s.flush();
  assert.equal(s.controls.hidden, true);
  assert.equal(s.track.tabIndex, -1);
});

test("keyboard scrolling respects reduced motion and leaves nested links alone", () => {
  const s = environment(true);
  let prevented = 0;
  const key = (value, target = s.track) => {
    s.events.keydown({ key: value, target, preventDefault: () => prevented++ });
    s.flush();
  };
  key("End");
  assert.equal(s.track.lastScroll.behavior, "instant");
  assert.equal(s.counter.textContent, "3 / 3");
  key("Home");
  assert.equal(s.counter.textContent, "1 / 3");
  key("ArrowRight", {});
  assert.equal(prevented, 2);
  key("ArrowRight");
  assert.equal(s.counter.textContent, "2 / 3");
});
