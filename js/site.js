const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-mobile-menu]");
function closeMenu() {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Mở menu");
  menu.hidden = true;
  document.body.classList.remove("menu-open");
}
toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  if (open) closeMenu();
  else {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Đóng menu");
    menu.hidden = false;
    document.body.classList.add("menu-open");
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
  if (!event.target.closest(".site-header") && menu?.hidden === false)
    closeMenu();
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
  const search = directory.querySelector("input[type=search]");
  let category = "all";
  function filter() {
    const query = normalize(search?.value.trim() || "");
    let count = 0;
    for (const card of cards) {
      card.hidden =
        !(category === "all" || card.dataset.topic === category) ||
        !normalize(card.textContent).includes(query);
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
