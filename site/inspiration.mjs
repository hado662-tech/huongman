import { icon } from "./components.mjs";

const inspirations = [
  {
    number: "01",
    image: "lip-colour-v1",
    alt: "Chân dung người mẫu hư cấu với sắc môi hồng nhẹ, ảnh minh họa tạo bằng AI",
    eyebrow: "Cảm hứng sắc môi",
    title: "Một sắc môi.<br>Một nét riêng.",
    description:
      "Hồng nhẹ hay sắc trầm? Mang theo màu bạn yêu thích để cùng trao đổi về nền môi và phong cách thường ngày.",
    link: "/phun-xam/phun-moi",
    linkText: "Tìm hiểu phun môi",
  },
  {
    number: "02",
    image: "brow-style-v1",
    alt: "Chân dung người mẫu hư cấu với lông mày cong nhẹ và sợi mày tự nhiên, ảnh minh họa AI",
    eyebrow: "Cảm hứng dáng mày",
    title: "Đường nét mềm.<br>Thần thái riêng.",
    description:
      "Dáng cong nhẹ hay đường mày thanh thoát? Bắt đầu từ gương mặt, thói quen trang điểm và điều bạn muốn thay đổi.",
    link: "/phun-xam/phun-may",
    linkText: "Tìm hiểu phun mày",
  },
];

export function inspirationSection() {
  return `<section class="section inspiration-section" id="cam-hung-moi-may" data-editorial-inspiration aria-labelledby="inspiration-title">
    <div class="container">
      <header class="section-heading" data-reveal><div><span class="eyebrow">Góc cảm hứng làm đẹp</span><h2 id="inspiration-title">Gợi ý sắc môi & dáng mày</h2></div><p>Một chút cảm hứng.<br>Một cuộc hẹn để hiểu rõ hơn.</p></header>
      <div class="inspiration-grid">${inspirations
        .map(
          (item) => `<article class="inspiration-card" data-reveal>
        <div class="inspiration-media"><img src="/images/inspiration/${item.image}-960.webp" srcset="/images/inspiration/${item.image}-480.webp 480w, /images/inspiration/${item.image}-960.webp 960w" sizes="(max-width: 600px) calc(100vw - 36px), (max-width: 950px) 46vw, 24vw" alt="${item.alt}" width="960" height="960" loading="lazy" decoding="async" data-generated-image></div>
        <div class="inspiration-copy"><span class="inspiration-number" aria-hidden="true">${item.number}</span><span class="eyebrow">${item.eyebrow}</span><h3>${item.title}</h3><p>${item.description}</p><a class="text-link" href="${item.link}">${item.linkText} ${icon("arrow")}</a></div>
      </article>`,
        )
        .join("")}</div>
      <p class="inspiration-disclaimer">Hình ảnh sáng tạo bằng AI, dùng để tham khảo phong cách, không thể hiện khách hàng hay kết quả thực tế. Màu môi và dáng mày được tư vấn riêng cho bạn.</p>
    </div>
  </section>`;
}
