const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-mobile-menu]");
const backdrop = document.querySelector("[data-menu-backdrop]");
const menuBackground = document.querySelectorAll(
  "main, .location-section, .site-footer, .mobile-dock, .header-inner .brand, .header-call",
);
function setMenuBackground(open) {
  if (backdrop) backdrop.hidden = !open;
  for (const element of menuBackground) element.inert = open;
  toggle?.querySelector("path")?.setAttribute(
    "d", open ? "M6 6L18 18M6 18L18 6" : "M4 7h16M4 12h16M4 17h16",
  );
}
function closeMenu() {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Mở menu");
  menu.hidden = true;
  document.body.classList.remove("menu-open");
  setMenuBackground(false);
}
toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  if (open) closeMenu();
  else {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Đóng menu");
    menu.hidden = false;
    document.body.classList.add("menu-open");
    setMenuBackground(true);
  }
});
menu
  ?.querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    toggle?.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    toggle.focus();
  }
  if (event.key !== "Tab" || menu?.hidden !== false) return;
  const focusable = [toggle, ...menu.querySelectorAll("a")];
  if (event.shiftKey && document.activeElement === focusable[0]) {
    event.preventDefault();
    focusable.at(-1).focus();
  } else if (!event.shiftKey && document.activeElement === focusable.at(-1)) {
    event.preventDefault();
    toggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header") && menu?.hidden === false) {
    closeMenu();
    toggle.focus();
  }
});
matchMedia("(min-width: 951px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
for (const directory of document.querySelectorAll("[data-directory]")) {
  const buttons = [...directory.querySelectorAll("[data-filter]")];
  const cards = [...directory.querySelectorAll("[data-topic]")];
  // Search the actual title/description, not shared category labels or CTAs.
  const searchContent = new Map(
    cards.map((card) => [
      card,
      normalize(
        [...card.querySelectorAll("h2, h3, p")]
          .map((node) => node.textContent)
          .join(" "),
      ),
    ]),
  );
  const search = directory.querySelector("input[type=search]");
  let category = "all";
  function filter() {
    const query = normalize(search?.value.trim() || "");
    let count = 0;
    for (const card of cards) {
      card.hidden =
        !(category === "all" || card.dataset.topic === category) ||
        !searchContent.get(card).includes(query);
      if (!card.hidden) count++;
    }
    const status = directory.querySelector("[data-result-count]");
    if (status)
      status.textContent = `${count} ${directory.dataset.directory === "articles" ? "bài viết" : "dịch vụ"}`;
    const empty = directory.querySelector("[data-empty]");
    if (empty) empty.hidden = count > 0;
    for (const button of buttons)
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === category),
      );
  }
  for (const button of buttons)
    button.addEventListener("click", () => {
      category = button.dataset.filter;
      filter();
    });
  search?.addEventListener("input", filter);
}

const service = document.querySelector("#consult-service");
const serviceLink = document.querySelector("[data-selected-service]");
if (service && serviceLink) {
  service.addEventListener("change", () => {
    serviceLink.href = service.value || "/dich-vu";
    serviceLink.textContent = service.value
      ? `Tìm hiểu ${service.selectedOptions[0].text.toLowerCase()}`
      : "Xem tất cả dịch vụ";
  });
}

// Animate only on entry; content stays visible if JS or motion is disabled.
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const revealed = new WeakSet();
const activeAnimations = new Set();
let revealObserver;
function setupReveals() {
  revealObserver?.disconnect();
  for (const animation of activeAnimations) animation.cancel();
  activeAnimations.clear();
  if (
    reducedMotion.matches ||
    navigator.connection?.saveData ||
    !("IntersectionObserver" in window) ||
    typeof Element.prototype.animate !== "function"
  )
    return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      let stagger = 0;
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting || target.hidden || revealed.has(target)) continue;
        revealed.add(target);
        revealObserver.unobserve(target);
        const animation = target.animate(
          [
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 480,
            delay: (stagger++ % 3) * 55,
            easing: "cubic-bezier(.2,.7,.25,1)",
            fill: "backwards",
          },
        );
        activeAnimations.add(animation);
        animation.finished
          .catch(() => {})
          .finally(() => activeAnimations.delete(animation));
      }
    },
    { threshold: 0.08 },
  );

  document
    .querySelectorAll(
      "[data-reveal], .section-heading, .featured-service, .question-card, .service-index-item, .article-card, .original-gallery figure, .why-card",
    )
    .forEach((element) => {
      if (!revealed.has(element)) revealObserver.observe(element);
    });
}
setupReveals();
reducedMotion.addEventListener("change", setupReveals);
