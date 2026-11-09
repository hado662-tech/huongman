import { brand, homeFaq } from "./config.mjs";
import { icon, picture, faq, contactBand } from "./components.mjs";
import { inspirationSection } from "./inspiration.mjs";

const featuredServices = [
  {
    title: "Phun môi",
    description: "Tư vấn màu môi, nền môi cũ và sắc độ bạn yêu thích.",
    path: "/phun-xam/phun-moi",
    image: "team",
  },
  {
    title: "Phun mày",
    description: "Cùng tìm hiểu dáng mày và màu sắc hài hòa gương mặt.",
    path: "/phun-xam/phun-may",
    image: "brows",
  },
  {
    title: "Chăm sóc da mụn",
    description: "Lắng nghe nhu cầu, trao đổi hướng chăm sóc riêng.",
    path: "/derma/tri-mun-chuyen-sau",
    image: "clinic",
  },
  {
    title: "Chăm sóc nám",
    description: "Hiểu tình trạng da trước khi lựa chọn phương án.",
    path: "/derma/tri-nam",
    image: "event",
  },
];

export function homepage() {
  return `<div class="reference-home pmu-home">
    <section class="pmu-hero" aria-labelledby="hero-title">
      <div class="container pmu-hero-grid">
        <div class="pmu-hero-copy reveal">
          <span class="location-badge">${icon("pin")} Hương Mận · Thái Nguyên</span>
          <span class="eyebrow">Thẩm mỹ Hương Mận</span>
          <h1 id="hero-title">Môi xinh. Mày thanh.<br><em>Nâng niu nét riêng.</em></h1>
          <p>Phun môi, phun mày tại Thái Nguyên. Tư vấn sắc màu và đường nét hài hòa với nét riêng của bạn.</p>
          <div class="pmu-service-links"><a href="/phun-xam/phun-moi">Phun môi ${icon("arrow")}</a><a href="/phun-xam/phun-may">Phun mày ${icon("arrow")}</a></div>
          <div class="button-row"><a class="button" href="/lien-he">${icon("calendar")} Đặt lịch tư vấn</a><a class="text-link" href="/gioi-thieu">Về Hương Mận ${icon("arrow")}</a></div>
          <p class="pmu-hero-address">${icon("pin")} ${brand.address}</p>
        </div>
        <figure class="pmu-hero-photo reveal">${picture("team", { eager: true })}<figcaption><span>Hương Mận, một địa chỉ quen thuộc</span><strong>Gặp gỡ. Lắng nghe. Chăm chút.</strong><small>Cùng bạn chăm chút vẻ đẹp mỗi ngày.</small></figcaption></figure>
      </div>
    </section>

    <nav class="home-shortcuts container" aria-label="Khám phá nhanh"><a href="#services"><span>01</span>Dịch vụ ${icon("arrow")}</a><a href="#cam-hung-moi-may"><span>02</span>Cảm hứng ${icon("arrow")}</a><a href="#giai-dap"><span>03</span>Giải đáp ${icon("arrow")}</a></nav>

    <section class="home-overview container" id="services">
      <div class="overview-main">
        <header class="center-heading"><span class="eyebrow">Phun môi & lông mày</span><h2>Chăm chút từ những nét nhỏ</h2></header>
        <div class="featured-service-list">${featuredServices.map((s) => `<article class="featured-service"><a href="${s.path}">${picture(s.image)}<div><h3>${s.title}</h3><p>${s.description}</p><span class="text-link">Tìm hiểu ${icon("arrow")}</span></div><span class="service-mobile-arrow">${icon("arrow")}</span></a></article>`).join("")}</div>
        <a class="all-services" href="/dich-vu">Xem tất cả dịch vụ ${icon("arrow")}</a>
        <section class="customer-section" id="customers" aria-labelledby="customer-title" data-carousel>
          <header class="center-heading"><span class="eyebrow">Trước cuộc hẹn của bạn</span><h2 id="customer-title">Hiểu rõ hơn, lựa chọn nhẹ nhàng hơn</h2></header>
          <div class="customer-grid pmu-questions" id="questions-track" data-carousel-track tabindex="0" role="region" aria-label="Câu hỏi trước cuộc hẹn">
            <article class="question-card"><span class="quote-mark">01</span><h3>Phun môi chọn màu nào?</h3><p>Bắt đầu từ nền môi, phong cách thường ngày và sắc màu bạn yêu thích. Ảnh tham khảo không thay thế buổi tư vấn.</p><a href="/phun-xam/phun-moi">Tìm hiểu phun môi ${icon("arrow")}</a></article>
            <article class="question-card"><span class="quote-mark">02</span><h3>Mày cũ có làm lại được không?</h3><p>Chia sẻ màu mày hiện tại, thời điểm đã làm và phần muốn thay đổi để được tư vấn trực tiếp.</p><a href="/phun-xam/phun-may">Tìm hiểu phun mày ${icon("arrow")}</a></article>
            <article class="question-card"><span class="quote-mark">03</span><h3>Chi phí gồm những gì?</h3><p>Hỏi rõ phương án, hướng dẫn chăm sóc và điều kiện kiểm tra, dặm lại nếu có trước khi quyết định.</p><a href="/bang-gia">Tìm hiểu chi phí ${icon("arrow")}</a></article>
          </div>
          <div class="carousel-controls" data-carousel-controls hidden><span>Chạm để khám phá <span data-carousel-count aria-live="polite" aria-atomic="true">1 / 3</span></span><div><button type="button" data-carousel-prev aria-label="Câu hỏi trước" aria-controls="questions-track" disabled>${icon("arrow")}</button><button type="button" data-carousel-next aria-label="Câu hỏi tiếp theo" aria-controls="questions-track">${icon("arrow")}</button></div></div>
        </section>
      </div>
      <aside class="home-reassurance"><div class="why-card"><span class="eyebrow">Cùng Hương Mận</span><h2>Đẹp theo cách<br>của chính bạn.</h2><ul><li>${icon("chat")}<span>Lắng nghe mong muốn về môi và dáng mày</span></li><li>${icon("leaf")}<span>Trao đổi lựa chọn phù hợp với nét riêng</span></li><li>${icon("check")}<span>Làm rõ chi phí và hướng dẫn chăm sóc</span></li><li>${icon("phone")}<span>Dễ dàng liên hệ khi có câu hỏi</span></li></ul></div><a class="aside-appointment" href="/gioi-thieu">${picture("clinic")}<span><small>Góc quen thuộc tại Hương Mận</small><strong>Khám phá không gian ${icon("arrow")}</strong></span></a></aside>
    </section>

    <section class="container appointment-ribbon" id="contact"><span class="ribbon-icon">${icon("phone")}</span><div><span class="eyebrow">Tư vấn môi & mày</span><strong>Một cuộc hẹn dành riêng cho bạn</strong></div><p>Chia sẻ mong muốn.<br>Làm rõ lựa chọn trước khi quyết định.</p><a class="button" href="/lien-he">Đặt lịch tư vấn ${icon("arrow")}</a></section>

    <section class="section original-gallery"><div class="container"><header class="section-heading"><div><span class="eyebrow">Những hình ảnh thân quen</span><h2>Hương Mận, qua từng khoảnh khắc.</h2></div><a class="text-link" href="/gioi-thieu">Về Hương Mận ${icon("arrow")}</a></header><div class="original-gallery-grid"><figure>${picture("founder")}<figcaption>Chị Giang Thị Hương Mận.</figcaption></figure><figure>${picture("event")}<figcaption>Hương Mận kết nối tại hội nghị ngành làm đẹp.</figcaption></figure></div></div></section>
    ${inspirationSection()}
    <section class="section home-faq" id="giai-dap"><div class="container faq-layout"><div class="faq-intro"><span class="eyebrow">Hương Mận giải đáp</span><h2>Bạn hỏi, mình cùng tìm hiểu.</h2><p>Phun môi, phun mày, chi phí và đặt lịch tại Thái Nguyên.</p><a class="text-link" href="/blog">Đọc thêm cẩm nang ${icon("arrow")}</a></div>${faq(homeFaq)}</div></section>
    ${contactBand()}
  </div>`;
}
