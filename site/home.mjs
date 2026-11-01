import { brand } from "./config.mjs";
import { icon, articleCard, faq, contactBand } from "./components.mjs";
import { homeFaq } from "./config.mjs";

const featuredServices = [
  {
    title: "Nâng mũi",
    label: "Hài hòa đường nét",
    description: "Tìm hiểu dáng mũi phù hợp với gương mặt.",
    path: "/surgery/nang-mui-tong-hop",
    image: "nose",
  },
  {
    title: "Thẩm mỹ mắt",
    label: "Rạng rỡ ánh nhìn",
    description: "Tư vấn nếp mí và những điều cần biết.",
    path: "/surgery/tao-mi-mat-doi",
    image: "eyes",
  },
  {
    title: "Chăm sóc nám",
    label: "Hiểu đúng làn da",
    description: "Tìm hiểu tình trạng da và hướng chăm sóc.",
    path: "/derma/tri-nam",
    image: "care",
  },
  {
    title: "Trẻ hóa da",
    label: "Nâng niu nét đẹp",
    description: "Khám phá lựa chọn chăm sóc theo nhu cầu.",
    path: "/surgery/nang-co-sieu-am",
    image: "skin",
  },
];

export function homepage(articles) {
  return `<div class="reference-home">
    <section class="lux-hero" aria-labelledby="hero-title">
      <picture class="lux-hero-image"><source media="(max-width: 600px)" srcset="/images/brand/champagne-hero-mobile.webp"><img src="/images/brand/champagne-hero.webp" alt="Ảnh minh họa người mẫu và không gian tông kem vàng, được tạo bằng AI" width="1600" height="900" fetchpriority="high" decoding="async"></picture>
      <div class="container lux-hero-inner">
        <div class="lux-hero-copy reveal">
          <span class="location-badge">${icon("pin")} Đồng hành cùng vẻ đẹp tại Thái Nguyên</span>
          <h1 id="hero-title">Thẩm mỹ Hương Mận</h1>
          <p>Nơi nét đẹp riêng được nâng niu.<br>Cùng bạn tìm hiểu, lựa chọn và chăm sóc vẻ đẹp tự nhiên.</p>
          <div class="hero-values">
            <div>${icon("chat")}<span>Lắng nghe nhu cầu<small>Tư vấn theo từng người</small></span></div>
            <div>${icon("leaf")}<span>Vẻ đẹp hài hòa<small>Tôn trọng nét riêng</small></span></div>
            <div>${icon("check")}<span>Thông tin rõ ràng<small>Hiểu trước khi chọn</small></span></div>
          </div>
          <div class="button-row"><a class="button" href="/lien-he">${icon("calendar")} Đặt lịch tư vấn</a><a class="hero-about" href="/gioi-thieu"><span>${icon("arrow")}</span> Tìm hiểu Hương Mận</a></div>
        </div>
        <a class="hero-location" href="/lien-he">${icon("pin")}<span><strong>Thẩm mỹ viện Hương Mận</strong><small>${brand.address}</small><span class="hero-location-phone">Tư vấn & đặt lịch: ${brand.phone}</span></span></a>
      </div>
      <span class="hero-art-note">Hình ảnh minh họa</span>
    </section>

    <section class="home-overview container" id="services">
      <div class="overview-main">
        <header class="center-heading"><span class="eyebrow">Dịch vụ nổi bật</span><h2>Chăm chút từng nét đẹp</h2></header>
        <div class="featured-service-list">${featuredServices.map((s) => `<article class="featured-service"><a href="${s.path}"><img src="/images/brand/service-${s.image}.webp" alt="Ảnh minh họa ${s.title.toLowerCase()}" width="220" height="280" loading="lazy" decoding="async"><div><h3>${s.title}</h3><p>${s.description}</p><span class="text-link">Xem chi tiết ${icon("arrow")}</span></div><span class="service-mobile-arrow">${icon("arrow")}</span></a></article>`).join("")}</div>
        <a class="all-services" href="/dich-vu">Khám phá danh mục dịch vụ ${icon("arrow")}</a>

        <section class="customer-section" id="customers" aria-labelledby="customer-title">
          <header class="center-heading"><span class="eyebrow">Lắng nghe & thấu hiểu</span><h2 id="customer-title">Điều khách hàng quan tâm</h2></header>
          <div class="customer-grid">
            <a class="beauty-feature" href="/gioi-thieu"><img src="/images/brand/service-nose.webp" alt="Chân dung minh họa nét đẹp tự nhiên" width="220" height="280" loading="lazy" decoding="async"><span><small>Đẹp theo cách của bạn</small><strong>Hài hòa.<br>Tự nhiên.<br>Là chính mình.</strong>${icon("arrow")}</span></a>
            <article class="question-card"><span class="quote-mark">“</span><h3>Chi phí đã bao gồm những gì?</h3><p>Tìm hiểu phương án, các khoản đi kèm và chính sách theo dõi trước khi quyết định.</p><a href="/bang-gia">Tìm hiểu chi phí ${icon("arrow")}</a></article>
            <article class="question-card"><span class="quote-mark">“</span><h3>Chọn phương pháp nào phù hợp?</h3><p>Bắt đầu từ nhu cầu và tình trạng của bạn. Chuẩn bị câu hỏi cho buổi tư vấn riêng.</p><a href="/dich-vu">Khám phá dịch vụ ${icon("arrow")}</a></article>
            <article class="question-card"><span class="quote-mark">“</span><h3>Cần chuẩn bị gì trước cuộc hẹn?</h3><p>Ghi lại điều muốn cải thiện, dịch vụ đã làm và những băn khoăn cần giải đáp.</p><a href="/lien-he">Trao đổi với Hương Mận ${icon("arrow")}</a></article>
          </div>
        </section>
      </div>
      <aside class="home-reassurance">
        <div class="why-card"><span class="eyebrow">Cùng Hương Mận</span><h2>Hiểu rõ hơn.<br>An tâm lựa chọn.</h2><ul><li>${icon("chat")}<span>Trao đổi trực tiếp về nhu cầu của bạn</span></li><li>${icon("leaf")}<span>Tìm hiểu phương án phù hợp từng trường hợp</span></li><li>${icon("check")}<span>Làm rõ chi phí và các bước cần chuẩn bị</span></li><li>${icon("phone")}<span>Dễ dàng liên hệ khi có câu hỏi</span></li></ul></div>
        <a class="aside-appointment" href="/lien-he"><img src="/images/brand/care.webp" alt="Không gian chăm sóc da minh họa" width="1000" height="667" loading="lazy" decoding="async"><span><small>Một cuộc hẹn dành riêng cho bạn</small><strong>Tư vấn cùng Hương Mận ${icon("arrow")}</strong></span></a>
      </aside>
    </section>

    <section class="container appointment-ribbon" id="contact"><span class="ribbon-icon">${icon("phone")}</span><div><span class="eyebrow">Tư vấn theo nhu cầu</span><strong>Cùng bạn tìm hiểu lựa chọn phù hợp</strong></div><p>Chia sẻ mong muốn.<br>Chuẩn bị rõ ràng trước mỗi quyết định.</p><a class="button" href="/lien-he">Đặt lịch tư vấn ngay ${icon("arrow")}</a></section>

    <section class="section home-journal"><div class="container"><header class="section-heading"><div><span class="eyebrow">Cẩm nang Hương Mận</span><h2>Hiểu về làm đẹp. Chọn cho chính mình.</h2></div><a class="text-link" href="/blog">Xem tất cả bài viết ${icon("arrow")}</a></header><div class="article-grid">${articles.map(articleCard).join("")}</div></div></section>
    <section class="section home-faq"><div class="container faq-layout"><div class="faq-intro"><span class="eyebrow">Hương Mận giải đáp</span><h2>Trước khi bạn đến.</h2><p>Thông tin về địa chỉ, đặt lịch và cách tìm hiểu chi phí tại Thái Nguyên.</p><a class="text-link" href="/lien-he">Liên hệ tư vấn ${icon("arrow")}</a></div>${faq(homeFaq)}</div></section>
    ${contactBand()}
  </div>`;
}
