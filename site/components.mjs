import { brand, topics } from "./config.mjs";
export const escape = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const url = (path) =>
  path === "index.html" || path === "/"
    ? "/"
    : "/" + path.replace(/^\//, "").replace(/\.html(?=#|$)/, "");
export const absolute = (path) => brand.url + url(path);
export const icon = (name = "arrow") =>
  `<svg viewBox="0 0 24 24" aria-hidden="true">${{ arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', phone: '<path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z"/>', leaf: '<path d="M20 3C9 2 3 8 5 15c2 7 16 5 15-12Z"/><path d="M3 21 16 8M9 15v-5M13 11h4"/>', spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>', chat: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2V11.5a9.5 9.5 0 0 1 19 0Z"/><path d="M7 10h9M7 14h6"/>', pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>', check: '<path d="m5 12 4 4L19 6"/>', calendar: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 11h16M8 15h3"/>' }[name] || ""}</svg>`;
export const lotus = () =>
  `<svg class="brand-lotus" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5c-9 11-13 19 0 30C45 24 41 16 32 5Z"/><path d="M22 16 15 12c-1 13 2 23 17 29 15-6 18-16 17-29l-7 4M17 27 7 23c1 15 8 22 25 25 17-3 24-10 25-25l-10 4M12 40l-8 1c6 11 16 13 28 12 12 1 22-1 28-12l-8-1M32 35v25M19 58l13-5 13 5"/></svg>`;
export const brandMark = () =>
  `<a class="brand" href="/" aria-label="Hương Mận, trang chủ">${lotus()}<span><small>Thẩm mỹ viện</small><span class="brand-name">Hương Mận</span></span></a>`;
const nav = [
  ["/", "Trang chủ"],
  ["/gioi-thieu", "Giới thiệu"],
  ["/dich-vu", "Dịch vụ"],
  ["/bang-gia", "Bảng giá"],
  ["/#customers", "Khách hàng"],
  ["/blog", "Cẩm nang"],
  ["/lien-he", "Liên hệ"],
];
export function header(path) {
  const active = path.startsWith("blog")
    ? "/blog"
    : /^(derma|surgery|plastic-surgery|dich-vu)/.test(path)
      ? "/dich-vu"
      : url(path);
  const links = nav
    .map(
      ([href, label]) =>
        `<a href="${href}"${active === href ? ' aria-current="page"' : ""}>${label}</a>`,
    )
    .join("");
  return `<a href="#main" class="skip-link">Đến nội dung chính</a><header class="site-header"><div class="container header-inner"><button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Mở menu">${icon("menu")}</button>${brandMark()}<nav class="desktop-nav" aria-label="Điều hướng chính">${links}</nav><a class="button header-book" href="/lien-he">${icon("calendar")} Đặt lịch tư vấn</a><a class="header-call" href="${brand.phoneHref}" aria-label="Gọi Hương Mận: ${brand.phone}">${icon("phone")}</a></div><div id="mobile-menu" class="mobile-menu" data-mobile-menu hidden><nav aria-label="Điều hướng di động">${links}<a href="/products">Chăm sóc tại nhà</a></nav><a class="button" href="${brand.phoneHref}">${icon("phone")} ${brand.phone}</a></div></header>`;
}
export function footer() {
  return `<footer class="site-footer"><div class="container"><div class="footer-grid"><div>${brandMark()}<p>Mỗi lựa chọn làm đẹp đều bắt đầu từ sự thấu hiểu. Tìm hiểu, trao đổi và chọn điều phù hợp với chính bạn.</p><a class="text-link" href="${brand.facebook}" target="_blank" rel="noopener noreferrer">Kết nối trên Facebook ${icon("arrow")}</a></div><div><h2>Khám phá</h2><ul><li><a href="/gioi-thieu">Về Hương Mận</a></li><li><a href="/dich-vu">Danh mục dịch vụ</a></li><li><a href="/products">Chăm sóc tại nhà</a></li><li><a href="/blog">Cẩm nang làm đẹp</a></li></ul></div><div><h2>Bạn đang quan tâm</h2><ul><li><a href="/derma/tri-nam">Trị nám Thái Nguyên</a></li><li><a href="/derma/tri-mun-chuyen-sau">Trị mụn Thái Nguyên</a></li><li><a href="/surgery/nang-mui-tong-hop">Tư vấn nâng mũi</a></li><li><a href="/surgery/tao-mi-mat-doi">Tư vấn thẩm mỹ mắt</a></li></ul></div><div><h2>Ghé Hương Mận</h2><p>${brand.address}</p><ul><li><a href="${brand.phoneHref}">${brand.phone}</a></li><li>Thứ 2 – Thứ 6: 09:00 – 20:00</li><li>Thứ 7 – CN: 09:00 – 18:00</li><li><a href="${brand.maps}" target="_blank" rel="noopener noreferrer">Chỉ đường đến Hương Mận ↗</a></li></ul></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Hương Mận. Tất cả quyền được bảo lưu.</span><span><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a> · <a href="/nguyen-tac-noi-dung">Nguyên tắc nội dung</a></span></div></div></footer><nav class="mobile-dock" aria-label="Liên hệ nhanh"><a href="${brand.phoneHref}">${icon("phone")} Gọi tư vấn</a><a href="/lien-he">${icon("calendar")} Đặt lịch hẹn</a></nav>`;
}
export function contactBand() {
  return `<section class="contact-band"><div class="container"><div><span class="eyebrow">Hương Mận luôn sẵn sàng lắng nghe</span><h2>Bắt đầu từ một cuộc trò chuyện.</h2><p>Chia sẻ điều bạn quan tâm, cùng tìm hiểu lựa chọn phù hợp.</p></div><a class="button" href="/lien-he">Trao đổi với Hương Mận ${icon("arrow")}</a></div></section>`;
}
export const breadcrumb = (items) =>
  `<nav class="container breadcrumb" aria-label="Đường dẫn"><a href="/">Trang chủ</a>${items.map(([label, path]) => `<span aria-hidden="true">/</span>${path ? `<a href="${url(path)}">${escape(label)}</a>` : `<span aria-current="page">${escape(label)}</span>`}`).join("")}</nav>`;
export const imagePath = (key) =>
  key === "care"
    ? "/images/brand/care.webp"
    : key === "skin"
      ? "/images/brand/skin.webp"
      : "/images/brand/portrait.webp";
export const imageLabel = (key) =>
  key === "care"
    ? "Ảnh minh họa sản phẩm và không gian chăm sóc da"
    : "Ảnh minh họa vẻ đẹp tự nhiên, tạo bằng AI";
export function picture(key = "portrait", opts = {}) {
  const src = imagePath(key);
  return `<img src="${src}"${key === "portrait" ? ' srcset="/images/brand/portrait-small.webp 480w, /images/brand/portrait.webp 1000w" sizes="(max-width: 560px) 90vw, 45vw"' : ""} alt="${escape(opts.alt ?? imageLabel(key))}" width="1000" height="${key === "portrait" ? 1250 : 667}" ${opts.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${opts.className ? ` class="${opts.className}"` : ""}>`;
}
export const faq = (entries) =>
  `<div class="faq-list">${entries.map((q) => `<details><summary>${escape(q.question)}</summary><div class="faq-answer">${escape(q.answer)}</div></details>`).join("")}</div>`;
export function articleCard(article) {
  const key = article.topic === "skin" ? "care" : "portrait";
  return `<article class="article-card" data-topic="${article.topic}"><a href="${url(article.path)}"><div class="card-media">${picture(key, { alt: "Ảnh minh họa cho bài viết: " + article.title })}</div><div class="card-body"><span class="article-tag">${escape(article.tag)}</span><h3>${escape(article.title)}</h3><p>${escape(article.description)}</p><span class="text-link">Đọc bài viết ${icon("arrow")}</span></div></a></article>`;
}
export function filters(kind) {
  return `<div class="filters"><div class="filter-buttons" aria-label="Lọc theo chủ đề">${Object.entries(
    topics,
  )
    .filter(([key]) => kind === "articles" || key !== "guide")
    .map(
      ([key, label]) =>
        `<button class="pill" type="button" data-filter="${key}" aria-pressed="${key === "all"}">${label}</button>`,
    )
    .join(
      "",
    )}</div><label class="search-input">${icon("search")}<input type="search" placeholder="${kind === "articles" ? "Tìm bài viết, chủ đề…" : "Tìm dịch vụ…"}" aria-label="${kind === "articles" ? "Tìm bài viết" : "Tìm dịch vụ"}"></label></div>`;
}
export function head({
  path,
  title,
  description,
  type = "website",
  schemas = [],
  noindex = false,
}) {
  const canonical = absolute(path);
  return `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#c79a4b"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}"><link rel="canonical" href="${canonical}"><link rel="icon" href="/images/brand/favicon.svg" type="image/svg+xml"><meta property="og:type" content="${type}"><meta property="og:locale" content="vi_VN"><meta property="og:site_name" content="${brand.name}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${brand.url}/images/brand/social.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${brand.url}/images/brand/social.jpg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="/css/theme.css?v=20261101-gold"><script src="/js/site.js?v=20261101-gold" defer></script>${schemas.length ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": schemas }).replace(/</g, "\\u003c")}</script>` : ""}`;
}
export function page(options, body) {
  return `<!doctype html>\n<html lang="vi"><head>${head(options)}</head><body>${header(options.path)}<main id="main">${body}</main>${footer()}</body></html>\n`;
}
export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Trang chủ", item: brand.url + "/" },
      ...items.map(([name, path]) => ({ name, item: absolute(path) })),
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      ...item,
    })),
  };
}
export const organization = {
  "@type": "LocalBusiness",
  "@id": brand.url + "/#business",
  name: brand.name,
  url: brand.url + "/",
  telephone: "+84383119119",
  image: brand.url + "/images/brand/social.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "402 Lương Ngọc Quyến, Phan Đình Phùng",
    addressLocality: "Thái Nguyên",
    addressCountry: "VN",
  },
  areaServed: { "@type": "Place", name: "Thái Nguyên" },
  sameAs: [brand.facebook],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};
