import { readFile, writeFile, mkdir, cp, readdir } from "node:fs/promises";
import { dirname } from "node:path";
import { load } from "cheerio";
import { brand, topics, homeFaq } from "../site/config.mjs";
import { services } from "../site/services.mjs";
import { homepage } from "../site/home.mjs";
import { inspirationSection } from "../site/inspiration.mjs";
import {
  escape as e,
  url,
  absolute,
  icon,
  picture,
  imagePath,
  imageCaption,
  faq,
  page,
  breadcrumb,
  breadcrumbSchema,
  articleCard,
  filters,
  contactBand,
  organization,
} from "../site/components.mjs";

const articles = JSON.parse(await readFile("site/articles.json", "utf8")).map(
  (article) => ({
    ...article,
    tag: article.tag === "Local SEO" ? "Kinh nghiệm làm đẹp" : article.tag,
  }),
);
const emitted = new Map();
const sectionHead = (eyebrow, title, extra = "") =>
  `<div class="section-heading"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div>${extra}</div>`;
const pageHero = (eyebrow, title, description) =>
  `<section class="page-hero"><div class="container"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div></section>`;
const intro = `<p class="editorial-note">Nội dung giúp bạn chuẩn bị cho buổi tư vấn, không thay thế việc thăm khám hay chỉ định chuyên môn. Hiệu quả, chi phí và thời gian hồi phục cần được trao đổi theo từng trường hợp.</p>`;
const blogLink = (path) => articles.find((a) => a.path.includes(path));
const featured = [
  blogLink("dich-vu-noi-bat-cua-tham-my-huong-man"),
  blogLink("dat-lich-tu-van-tham-my-huong-man-thai-nguyen"),
  blogLink("tham-my-vien-uy-tin-thai-nguyen-5-tieu-chi"),
].filter(Boolean);
async function emit(path, title, description, body, options = {}) {
  const html = page({ path, title, description, ...options }, body);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, html.replace(/[ \t]+$/gm, ""));
  emitted.set(path, { title, description, noindex: options.noindex });
}

const home = homepage();
await emit(
  "index.html",
  "Thẩm mỹ Hương Mận | Phun môi, phun mày Thái Nguyên",
  `Thẩm mỹ Hương Mận tại Thái Nguyên: phun môi, phun mày và chăm sóc da. Tư vấn màu môi, dáng mày, chi phí và đặt lịch qua ${brand.phone}.`,
  home,
  {
    schemas: [
      organization,
      {
        "@type": "WebSite",
        "@id": brand.url + "/#website",
        url: brand.url + "/",
        name: brand.name,
        inLanguage: "vi-VN",
      },
    ],
  },
);

await emit(
  "bang-gia.html",
  "Bảng giá dịch vụ thẩm mỹ Hương Mận | Tư vấn chi phí",
  "Tìm hiểu chi phí phun môi, phun mày và chăm sóc da tại Thái Nguyên. Liên hệ Hương Mận để xác nhận phương án, các khoản đi kèm và báo giá.",
  `${breadcrumb([["Bảng giá & chi phí"]])}${pageHero("Thông tin chi phí", "Hiểu rõ chi phí.<br>Chủ động lựa chọn.", "Giá cần được xác nhận theo tình trạng và phương án cụ thể. Hương Mận tiếp nhận nhu cầu qua điện thoại hoặc Facebook để trao đổi trước buổi tư vấn.")}<section class="section"><div class="container"><div class="pricing-grid">${[
    [
      "Phun môi",
      "Màu môi và nền môi từng thực hiện",
      "Phương án, tình trạng nền môi, hướng dẫn chăm sóc và điều kiện dặm lại nếu có.",
      "/phun-xam/phun-moi",
    ],
    [
      "Phun mày",
      "Dáng lông mày, màu sắc và nền mày cũ",
      "Kỹ thuật được đề xuất, việc xử lý nền mày cũ nếu cần và lịch kiểm tra lại.",
      "/phun-xam/phun-may",
    ],
    [
      "Chăm sóc da & dịch vụ khác",
      "Làn da và các nhu cầu làm đẹp",
      "Tình trạng hiện tại, phương án, số buổi và sản phẩm chăm sóc đi kèm.",
      "/dich-vu",
    ],
  ]
    .map(
      ([name, scope, details, path]) =>
        `<article class="price-card"><span class="eyebrow">Tư vấn theo nhu cầu</span><h2>${name}</h2><p>${scope}</p><span class="price-status">Liên hệ để xác nhận báo giá</span><p>${details}</p><a class="text-link" href="${path}">Tìm hiểu phương án ${icon("arrow")}</a><a class="button" href="/lien-he">Hỏi chi phí ${icon("arrow")}</a></article>`,
    )
    .join(
      "",
    )}</div><article class="prose" style="max-width:850px;margin:55px auto 0"><h2>Những khoản nên hỏi rõ trong báo giá</h2><ul><li>Chi phí tư vấn hoặc thăm khám ban đầu, nếu có.</li><li>Phương án được đề xuất và từng hạng mục đã bao gồm.</li><li>Thuốc, sản phẩm chăm sóc, tái khám và các khoản có thể phát sinh.</li><li>Điều kiện ưu đãi, đặt cọc, đổi lịch và hoàn phí nếu áp dụng.</li></ul><p>Chi phí được xác nhận sau khi trao đổi nhu cầu và phương án phù hợp. Trước khi quyết định, bạn hãy hỏi rõ các hạng mục đã bao gồm, điều kiện áp dụng và khoản có thể phát sinh.</p></article></div></section>${contactBand()}`,
  { schemas: [breadcrumbSchema([["Bảng giá & chi phí", "bang-gia.html"]])] },
);

function serviceTile(s) {
  return `<article class="service-index-item" data-topic="${s.category}"><span class="article-tag">${topics[s.category]}</span><h2><a href="${url(s.path)}">${e(s.name)}</a></h2><p>${e(s.description)}</p><a class="text-link" href="${url(s.path)}">Tìm hiểu dịch vụ ${icon("arrow")}</a></article>`;
}
for (const [path, title, description, subset] of [
  [
    "dich-vu.html",
    "Dịch vụ thẩm mỹ tại Thái Nguyên | Hương Mận",
    "Khám phá phun môi, phun mày và chăm sóc da tại Hương Mận Thái Nguyên. Tìm hiểu màu môi, dáng lông mày, chi phí và cách đặt lịch tư vấn.",
    services,
  ],
  [
    "plastic-surgery.html",
    "Tư vấn phẫu thuật thẩm mỹ Thái Nguyên | Hương Mận",
    "Tìm hiểu thẩm mỹ mắt, nâng mũi, căng da mặt và những điều cần hỏi về cơ sở thực hiện, người phụ trách, chi phí và hồi phục trước khi quyết định.",
    services.filter((s) => s.path.startsWith("surgery/")),
  ],
]) {
  await emit(
    path,
    title,
    description,
    `${breadcrumb([["Dịch vụ"]])}${pageHero("Tìm hiểu trước khi lựa chọn", path === "dich-vu.html" ? "Dịch vụ dành cho nét đẹp của bạn." : "Tìm hiểu thẩm mỹ gương mặt & cơ thể.", description)}${path === "dich-vu.html" ? inspirationSection() : ""}<section class="section" data-directory="services"><div class="container">${filters("services")}<p class="result-count" data-result-count role="status">${subset.length} dịch vụ</p><div class="service-index">${subset.map(serviceTile).join("")}</div><p class="empty-state" data-empty hidden>Chưa tìm thấy dịch vụ phù hợp. Thử một từ khóa ngắn hơn hoặc chọn “Tất cả”.</p><p class="editorial-note">Thông tin trên website giúp bạn tìm hiểu và chuẩn bị câu hỏi. Với can thiệp y khoa hoặc phẫu thuật, cần xác nhận chỉ định, người thực hiện và cơ sở có phạm vi chuyên môn phù hợp trước khi quyết định.</p></div></section>${contactBand()}`,
    { schemas: [breadcrumbSchema([["Dịch vụ", path]])] },
  );
}

await emit(
  "blog.html",
  "Cẩm nang thẩm mỹ Hương Mận | Làm đẹp tại Thái Nguyên",
  "Tìm hiểu chi phí, cách đọc review, chăm sóc da và các câu hỏi trước khi làm đẹp tại Thái Nguyên. Cẩm nang dịch vụ và thông tin Hương Mận.",
  `${breadcrumb([["Cẩm nang"]])}${pageHero("Cẩm nang Hương Mận", "Đẹp hơn, từ những điều hiểu rõ.", "Thông tin thiết thực về lựa chọn làm đẹp, chi phí và những câu hỏi trước khi quyết định. Tìm chủ đề bạn quan tâm, theo cách dễ hiểu hơn.")}<section class="section" data-directory="articles"><div class="container">${filters("articles")}<p class="result-count" data-result-count role="status">${articles.length} bài viết</p><div class="article-grid">${[...featured, ...articles.filter((a) => !featured.includes(a))].map(articleCard).join("")}</div><p class="empty-state" data-empty hidden>Chưa tìm thấy bài viết. Bạn có thể tìm không dấu, ví dụ “tri nam”, hoặc chọn lại “Tất cả”.</p></div></section>${contactBand()}`,
  {
    schemas: [
      breadcrumbSchema([["Cẩm nang", "blog.html"]]),
      {
        "@type": "CollectionPage",
        name: "Cẩm nang Hương Mận",
        url: absolute("blog.html"),
        inLanguage: "vi-VN",
      },
    ],
  },
);

for (const article of articles) {
  const $ = load(`<div id="copy">${article.content}</div>`, null, false);
  $("#copy a[href]").each((_, el) => {
    const a = $(el);
    const href = a.attr("href");
    if (href.startsWith("/")) a.attr("href", url(href));
  });
  const headings = [];
  $("#copy h2").each((i, el) => {
    const id = `muc-${i + 1}`;
    $(el).attr("id", id);
    headings.push([id, $(el).text()]);
  });
  const copy = $("#copy").html();
  const wordCount = ($("#copy").text() + " " + article.lead).split(
    /\s+/,
  ).length;
  const related = articles
    .filter((a) => a !== article && a.topic === article.topic)
    .slice(0, 3);
  const candidates = services.filter((s) =>
    (s.relatedArticles || []).some((p) => p === article.path),
  );
  const relatedServices = (
    candidates.length
      ? candidates
      : services.filter((s) => s.category === article.topic)
  ).slice(0, 3);
  const relatedServiceHtml = relatedServices.length
    ? `<div class="editorial-note"><strong>Tìm hiểu dịch vụ liên quan</strong><ul>${relatedServices.map((s) => `<li><a href="${url(s.path)}">${e(s.name)} tại Thái Nguyên</a></li>`).join("")}</ul></div>`
    : "";
  const key = article.imageKey || (article.topic === "skin" ? "care" : "team");
  const body = `${breadcrumb([["Cẩm nang", "blog.html"], [article.tag]])}<div class="container page-article"><header class="article-header"><span class="eyebrow">${e(article.tag)} · Cẩm nang Hương Mận</span><h1>${e(article.title)}</h1><p class="lead">${e(article.lead)}</p><div class="byline"><span>Ban biên tập Hương Mận</span><span>${Math.max(2, Math.ceil(wordCount / 210))} phút đọc</span><a href="/nguyen-tac-noi-dung">Nguyên tắc nội dung</a></div></header><div class="article-layout"><article class="article-body"><figure class="article-cover">${picture(key, { eager: true })}<figcaption>${imageCaption}</figcaption></figure><div class="prose">${copy}${/review|co-tot-khong/.test(article.path) ? '<p class="editorial-note">Bài viết hướng dẫn cách tìm hiểu và đánh giá dịch vụ, không phải lời chứng thực của khách hàng hoặc kết luận chất lượng đã được kiểm chứng độc lập.</p>' : ""}${intro}${relatedServiceHtml}</div></article><aside class="article-aside"><div class="toc"><h2>Trong bài viết này</h2><ol>${headings.map(([id, label]) => `<li><a href="#${id}">${e(label)}</a></li>`).join("")}</ol><div class="aside-contact"><p>Bạn có câu hỏi riêng về nhu cầu của mình?</p><a class="button" href="/lien-he">Trao đổi cùng Hương Mận ${icon("arrow")}</a></div></div></aside></div></div><section class="section journal"><div class="container"><h2 class="related-heading">Có thể bạn muốn đọc</h2><div class="article-grid">${related.map(articleCard).join("")}</div></div></section>${contactBand()}`;
  await emit(
    article.path,
    /hương mận/i.test(article.title)
      ? article.title
      : article.title + " | Hương Mận",
    article.description,
    body,
    {
      type: "article",
      schemas: [
        breadcrumbSchema([
          ["Cẩm nang", "blog.html"],
          [article.title, article.path],
        ]),
        {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.description,
          url: absolute(article.path),
          mainEntityOfPage: absolute(article.path),
          image: brand.url + imagePath(key),
          inLanguage: "vi-VN",
          author: {
            "@type": "Organization",
            name: "Ban biên tập Hương Mận",
            url: brand.url + "/nguyen-tac-noi-dung",
          },
          publisher: {
            "@type": "Organization",
            "@id": brand.url + "/#business",
            name: brand.name,
            url: brand.url + "/",
          },
        },
      ],
    },
  );
}

for (const s of services) {
  const related = articles
    .filter((a) => (s.relatedArticles || []).includes(a.path))
    .slice(0, 3);
  const headings = s.sections.map((x, i) => [`dich-vu-${i + 1}`, x.heading]);
  const content = s.sections
    .map(
      (x, i) =>
        `<section id="dich-vu-${i + 1}"><h2>${e(x.heading)}</h2>${x.paragraphs.map((p) => `<p>${e(p)}</p>`).join("")}</section>`,
    )
    .join("");
  await emit(
    s.path,
    s.title,
    s.description,
    `${breadcrumb([["Dịch vụ", "dich-vu.html"], [s.name]])}<section class="page-hero"><div class="container service-intro"><div><span class="eyebrow">${topics[s.category]} · Thái Nguyên</span><h1>${e(s.name)}<br><span style="color:var(--gold)">Tư vấn theo nhu cầu của bạn.</span></h1><p>${e(s.intro)}</p><a class="button" href="/lien-he">Đặt lịch tư vấn ${icon("arrow")}</a><div class="service-highlights">${s.concerns.map((x) => `<span>${e(x)}</span>`).join("")}</div></div><figure style="margin:0">${picture(s.imageKey, { eager: true })}<figcaption class="image-caption">${imageCaption}</figcaption></figure></div></section><section class="section"><div class="container service-content-grid"><article><div class="prose">${content}${intro}</div><h2 class="related-heading" style="margin-top:40px">Câu hỏi thường gặp</h2>${faq(s.faq)}</article><aside class="article-aside"><div class="toc"><h2>Nội dung bạn cần biết</h2><ol>${headings.map(([id, label]) => `<li><a href="#${id}">${e(label)}</a></li>`).join("")}</ol><div class="aside-contact"><p>${brand.address}</p><a class="button" href="${brand.phoneHref}">${icon("phone")} ${brand.phone}</a></div></div></aside></div></section>${related.length ? `<section class="section journal"><div class="container"><h2 class="related-heading">Tìm hiểu thêm về ${e(s.name.toLowerCase())}</h2><div class="article-grid">${related.map(articleCard).join("")}</div></div></section>` : ""}${contactBand()}`,
    {
      schemas: [
        breadcrumbSchema([
          ["Dịch vụ", "dich-vu.html"],
          [s.name, s.path],
        ]),
        {
          "@type": "WebPage",
          name: s.title,
          description: s.description,
          url: absolute(s.path),
          inLanguage: "vi-VN",
          about: { "@type": "Thing", name: s.name },
        },
      ],
    },
  );
}

await emit(
  "gioi-thieu.html",
  "Về Thẩm mỹ Hương Mận tại Thái Nguyên",
  "Khám phá Hương Mận tại Thái Nguyên: phun môi, phun mày, chăm sóc da và tư vấn theo nhu cầu. Xem địa chỉ, không gian và cách đặt lịch.",
  `${breadcrumb([["Về Hương Mận"]])}${pageHero("Về Hương Mận", "Nâng niu nét đẹp.<br>Bắt đầu từ lắng nghe.", "Ghé Hương Mận tại 402 Lương Ngọc Quyến, Thái Nguyên để chia sẻ mong muốn về sắc môi, dáng mày và làn da. Mỗi cuộc hẹn bắt đầu bằng việc lắng nghe điều bạn quan tâm.")}<section class="section story"><div class="container story-grid"><figure class="story-image">${picture("portrait")}<figcaption>Đội ngũ Hương Mận tại Thái Nguyên.</figcaption></figure><div class="story-copy"><span class="eyebrow">Lựa chọn dành cho bạn</span><h2>Mỗi mong muốn<br>đều đáng được lắng nghe.</h2><p>Chúng tôi mong bạn đến buổi tư vấn với thông tin rõ ràng: bạn muốn thay đổi điều gì, còn băn khoăn ở đâu và cần biết gì trước khi lựa chọn.</p><p>Với phun môi và phun mày, chúng tôi cùng bạn trao đổi về màu sắc bạn yêu thích, dáng mày mong muốn, nền môi hoặc mày đã từng làm và các khoản chi phí cần làm rõ. Bạn cũng có thể tìm hiểu thêm về chăm sóc da và các nhu cầu làm đẹp khác. Đối với những phương pháp có can thiệp chuyên môn, hãy xác nhận cơ sở thực hiện, người phụ trách, chỉ định và chi phí trong buổi trao đổi.</p><a class="button" href="/lien-he">Liên hệ Hương Mận ${icon("arrow")}</a></div></div></section><section class="section"><div class="container faq-layout"><div class="faq-intro"><span class="eyebrow">Thông tin thiết thực</span><h2>Trước khi bạn đến.</h2></div>${faq(homeFaq)}</div></section>${contactBand()}`,
  { schemas: [breadcrumbSchema([["Về Hương Mận", "gioi-thieu.html"]])] },
);

await emit(
  "lien-he.html",
  "Liên hệ & đặt lịch Thẩm mỹ Hương Mận Thái Nguyên",
  `Liên hệ Hương Mận: ${brand.phone}, 402 Lương Ngọc Quyến, Thái Nguyên. Xem giờ làm việc, chỉ đường và đặt lịch tư vấn qua điện thoại hoặc Facebook.`,
  `${breadcrumb([["Liên hệ & đặt lịch"]])}${pageHero("Một cuộc trò chuyện, một khởi đầu", "Hương Mận lắng nghe bạn.", "Gọi điện hoặc nhắn Facebook để chia sẻ nhu cầu và xác nhận lịch hẹn trước khi đến.")}<section class="section"><div class="container contact-grid"><div><h2>Ghé thăm Hương Mận</h2><div class="contact-detail">${icon("pin")}<div><strong>Địa chỉ</strong><p>${brand.address}</p><a class="text-link" href="${brand.maps}" target="_blank" rel="noopener noreferrer">Mở chỉ đường ${icon("arrow")}</a></div></div><div class="contact-detail">${icon("phone")}<div><strong>Hotline tư vấn</strong><a href="${brand.phoneHref}">${brand.phone}</a></div></div><div class="contact-detail">${icon("clock")}<div><strong>Giờ làm việc</strong><p>Thứ 2 – Thứ 6: 09:00 – 20:00<br>Thứ 7 – Chủ nhật: 09:00 – 18:00</p></div></div><div class="contact-detail">${icon("chat")}<div><strong>Kết nối Facebook</strong><a class="text-link" href="${brand.facebook}" target="_blank" rel="noopener noreferrer">Thẩm mỹ Hương Mận Thái Nguyên ${icon("arrow")}</a></div></div></div><div class="consult-card"><span class="eyebrow">Chuẩn bị cho cuộc hẹn</span><h2>Bạn đang quan tâm điều gì?</h2><label for="consult-service">Chủ đề muốn tìm hiểu</label><select id="consult-service"><option value="">Chọn chủ đề của bạn</option>${services.map((s) => `<option value="${url(s.path)}">${e(s.name)}</option>`).join("")}</select><a class="text-link" href="/dich-vu" data-selected-service>Xem tất cả dịch vụ</a><p style="margin-top:24px">Khi liên hệ, bạn có thể nói rõ chủ đề quan tâm và khung giờ thuận tiện. Hương Mận sẽ trao đổi để xác nhận lịch hẹn với bạn.</p><a class="button" href="${brand.phoneHref}">${icon("phone")} Gọi ${brand.phone}</a><a class="button secondary" href="${brand.facebook}" target="_blank" rel="noopener noreferrer">Nhắn qua Facebook ${icon("arrow")}</a><div class="consult-note">Lịch hẹn được xác nhận trực tiếp qua điện thoại hoặc tin nhắn. Vui lòng chờ xác nhận khung giờ trước khi đến.</div></div></div></section>`,
  {
    schemas: [
      breadcrumbSchema([["Liên hệ", "lien-he.html"]]),
      {
        "@type": "ContactPage",
        name: "Liên hệ Hương Mận",
        url: absolute("lien-he.html"),
        about: { "@id": brand.url + "/#business" },
      },
    ],
  },
);

await emit(
  "products.html",
  "Chăm sóc da tại nhà | Cẩm nang Hương Mận",
  "Chuẩn bị thông tin về sản phẩm chăm sóc da đang dùng, hỏi hướng dẫn phù hợp và tìm hiểu các bài viết chăm sóc da từ Hương Mận.",
  `${breadcrumb([["Chăm sóc tại nhà"]])}${pageHero("Chăm sóc mỗi ngày", "Dành sự quan tâm<br>cho làn da của bạn.", "Tìm hiểu cách chuẩn bị một danh sách chăm sóc da rõ ràng trước khi trao đổi với người có chuyên môn. Liên hệ trực tiếp để xác nhận sản phẩm đang có và giá hiện tại.")}<section class="section"><div class="container story-grid"><figure class="story-image">${picture("care")}<figcaption>Không gian chăm sóc sắc đẹp tại Hương Mận.</figcaption></figure><div class="story-copy"><span class="eyebrow">Thông tin trước khi lựa chọn</span><h2>Bắt đầu từ những gì<br>bạn đang sử dụng.</h2><div class="story-points">${[
    [
      "Ghi lại sản phẩm hiện tại",
      "Chuẩn bị tên sản phẩm, thành phần và cách bạn đang sử dụng để trao đổi khi tư vấn.",
    ],
    [
      "Chia sẻ điều bạn băn khoăn",
      "Cho biết trải nghiệm của bạn với sản phẩm trước đây và điều bạn muốn tìm hiểu thêm.",
    ],
    [
      "Hỏi hướng dẫn rõ ràng",
      "Xác nhận cách dùng, lưu ý, chi phí và nơi liên hệ nếu có vấn đề trong quá trình sử dụng.",
    ],
  ]
    .map(
      ([h, p], i) =>
        `<div class="story-point"><span>0${i + 1}</span><div><strong>${h}</strong><p>${p}</p></div></div>`,
    )
    .join(
      "",
    )}</div><a class="button" href="/lien-he">Hỏi về chăm sóc da ${icon("arrow")}</a></div></div></section><section class="section journal"><div class="container"><h2 class="related-heading">Đọc thêm về chăm sóc da</h2><div class="article-grid">${articles
    .filter((a) => a.topic === "skin")
    .slice(0, 3)
    .map(articleCard)
    .join("")}</div></div></section>${contactBand()}`,
);

for (const [path, title, lead, content] of [
  [
    "chinh-sach-bao-mat.html",
    "Chính sách bảo mật",
    "Cách website xử lý thông tin khi bạn truy cập và liên hệ.",
    `<h2>Thông tin trên website</h2><p>Website hiện không có tài khoản người dùng, thanh toán trực tuyến hay biểu mẫu gửi thông tin cá nhân. Công cụ tìm kiếm bài viết và chọn chủ đề hoạt động ngay trong trình duyệt, không gửi nội dung bạn nhập về máy chủ.</p><h2>Khi bạn liên hệ</h2><p>Nút gọi mở ứng dụng điện thoại. Nút Facebook và chỉ đường mở dịch vụ của bên thứ ba; dữ liệu tại các dịch vụ này chịu chính sách riêng của nhà cung cấp. Bạn nên chỉ chia sẻ thông tin cần thiết cho cuộc trao đổi.</p><h2>Tài nguyên bên ngoài</h2><p>Phông chữ được tải từ Google Fonts. Bản đồ nhúng ở cuối trang được cung cấp bởi Google Maps và có thể tải khi bạn cuộn gần đến bản đồ. Google có thể tiếp nhận địa chỉ IP, thông tin trình duyệt và sử dụng cookie theo chính sách của Google khi nội dung nhúng được tải; website không tự yêu cầu vị trí thiết bị của bạn. Nhà cung cấp lưu trữ website có thể xử lý dữ liệu kỹ thuật như địa chỉ IP và yêu cầu truy cập để vận hành và bảo vệ dịch vụ. Website không cài thêm mã quảng cáo hoặc công cụ phân tích hành vi riêng.</p><h2>Liên hệ</h2><p>Để trao đổi về thông tin bạn đã cung cấp khi liên hệ trực tiếp, gọi <a href="${brand.phoneHref}">${brand.phone}</a>.</p>`,
  ],
  [
    "nguyen-tac-noi-dung.html",
    "Nguyên tắc nội dung",
    "Thông tin rõ ràng để bạn chủ động trước mỗi lựa chọn làm đẹp.",
    `<h2>Mục đích của cẩm nang</h2><p>Bài viết trên website cung cấp thông tin tham khảo và gợi ý câu hỏi trước khi tìm hiểu dịch vụ. Nội dung không thay thế thăm khám, chẩn đoán hoặc chỉ định của người có chuyên môn phù hợp.</p><h2>Giá, review và hiệu quả</h2><p>Giá và phạm vi dịch vụ cần được xác nhận trực tiếp theo từng thời điểm và trường hợp. Bài viết có từ “review” hướng dẫn cách đọc thông tin và đặt câu hỏi, không phải trải nghiệm của một khách hàng được xác minh. Bạn nên kết hợp thông tin tham khảo với buổi tư vấn trực tiếp trước khi lựa chọn.</p><h2>Hình ảnh trên website</h2><p>Hình ảnh giới thiệu không gian và hoạt động của Hương Mận. Riêng mục “Gợi ý sắc môi & dáng mày” sử dụng hình ảnh sáng tạo bằng AI để tham khảo phong cách, không đại diện cho khách hàng thật hay kết quả thực hiện dịch vụ. Hình ảnh không phải cam kết hiệu quả hay bằng chứng kết quả trước và sau; ảnh hoạt động không đại diện cho một dịch vụ cụ thể nếu không có mô tả xác nhận.</p><h2>Góp ý hoặc yêu cầu cập nhật</h2><p>Nếu thấy thông tin chưa rõ, bạn có thể <a href="/lien-he">liên hệ Hương Mận</a> để được giải thích hoặc đề nghị kiểm tra lại.</p>`,
  ],
])
  await emit(
    path,
    title + " | Hương Mận",
    lead,
    `${breadcrumb([[title]])}${pageHero("Thông tin website", title, lead)}<section class="section"><div class="container"><article class="prose" style="max-width:800px">${content}</article></div></section>`,
  );

await emit(
  "404.html",
  "Không tìm thấy trang | Hương Mận",
  "Trang bạn đang tìm không còn tồn tại. Khám phá dịch vụ hoặc trở về trang chủ Hương Mận.",
  `${pageHero("404 · Trang không tồn tại", "Mình bắt đầu lại nhé.", "Đường dẫn có thể đã thay đổi. Bạn có thể trở về trang chủ hoặc tìm chủ đề mình quan tâm trong cẩm nang.")}<section class="section"><div class="container button-row"><a class="button" href="/">Về trang chủ ${icon("arrow")}</a><a class="button secondary" href="/blog">Đọc cẩm nang</a></div></section>`,
  { noindex: true },
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
  ...emitted,
]
  .filter(([, p]) => !p.noindex)
  .map(([path]) => `  <url><loc>${absolute(path)}</loc></url>`)
  .join("\n")}\n</urlset>\n`;
await writeFile("sitemap.xml", sitemap);
await writeFile(
  "robots.txt",
  `User-agent: *\nAllow: /\nDisallow: /site/\nDisallow: /scripts/\nDisallow: /design-reference/\nDisallow: /seo-content/\n\nSitemap: ${brand.url}/sitemap.xml\n`,
);
await writeFile(
  "schema.json",
  JSON.stringify(
    { "@context": "https://schema.org", ...organization },
    null,
    2,
  ) + "\n",
);
// Deploy an allowlist only, never the checkout or the ignored local AI credentials.
await mkdir("dist", { recursive: true });
for (const file of [
  ...emitted.keys(),
  "sitemap.xml",
  "robots.txt",
  "schema.json",
  "_headers",
  "_redirects",
]) {
  await mkdir(dirname("dist/" + file), { recursive: true });
  await cp(file, "dist/" + file);
}
for (const dir of ["css", "js", "images/original", "images/inspiration"])
  await mkdir("dist/" + dir, { recursive: true });
await cp("css/theme.css", "dist/css/theme.css");
await cp("css/experience.css", "dist/css/experience.css");
await cp("js/site.js", "dist/js/site.js");
await cp("js/carousel.js", "dist/js/carousel.js");
for (const file of await readdir("images/original"))
  if (file.endsWith(".jpg"))
    await cp("images/original/" + file, "dist/images/original/" + file);
for (const file of await readdir("images/inspiration"))
  if (file.endsWith(".webp"))
    await cp("images/inspiration/" + file, "dist/images/inspiration/" + file);
console.log(
  `Built ${emitted.size} pages: ${articles.length} articles, ${services.length} services. Deploy: dist/`,
);
