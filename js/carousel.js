// Native scrolling remains available without JavaScript; no autoplay or timers.
(() => {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  for (const carousel of document.querySelectorAll("[data-carousel]")) {
    const track = carousel.querySelector("[data-carousel-track]");
    const controls = carousel.querySelector("[data-carousel-controls]");
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const counter = carousel.querySelector("[data-carousel-count]");
    if (!track || !controls || !previous || !next || !counter) continue;
    const cards = [...track.children];
    if (!cards.length) continue;
    let index = 0;
    let frame = 0;

    function positions() {
      const origin = track.getBoundingClientRect().left;
      return cards.map((card) =>
        Math.min(
          track.scrollWidth - track.clientWidth,
          Math.max(0, card.getBoundingClientRect().left - origin + track.scrollLeft),
        ),
      );
    }

    function update() {
      frame = 0;
      const scrollable = track.scrollWidth > track.clientWidth + 2;
      controls.hidden = !scrollable;
      track.tabIndex = scrollable ? 0 : -1;
      const stops = positions();
      index = stops.reduce((closest, left, i) =>
        Math.abs(left - track.scrollLeft) < Math.abs(stops[closest] - track.scrollLeft)
          ? i : closest, 0);
      previous.disabled = index === 0;
      next.disabled = index === cards.length - 1;
      const label = `${index + 1} / ${cards.length}`;
      if (counter.textContent !== label) counter.textContent = label;
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function goTo(target) {
      index = Math.max(0, Math.min(cards.length - 1, target));
      track.scrollTo({
        left: positions()[index],
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    }

    previous.addEventListener("click", () => goTo(index - 1));
    next.addEventListener("click", () => goTo(index + 1));
    track.addEventListener("scroll", scheduleUpdate, { passive: true });
    track.addEventListener("keydown", (event) => {
      if (event.target !== track || controls.hidden) return;
      const destinations = {
        ArrowLeft: index - 1, ArrowRight: index + 1,
        Home: 0, End: cards.length - 1,
      };
      if (!(event.key in destinations)) return;
      event.preventDefault();
      goTo(destinations[event.key]);
    });
    if ("ResizeObserver" in window) new ResizeObserver(scheduleUpdate).observe(track);
    else window.addEventListener("resize", scheduleUpdate, { passive: true });
    update();
  }
})();
