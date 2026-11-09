import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, extname } from "node:path";
import { load } from "cheerio";
import { services } from "../site/services.mjs";
import { brand } from "../site/config.mjs";
const root = resolve("dist");
const errors = [];
async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = dir + "/" + entry.name;
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}
const paths = await walk(root);
const pages = paths.filter((p) => p.endsWith(".html"));
const articles = JSON.parse(await readFile("site/articles.json", "utf8"));
const expected = new Set([
  "index.html",
  "blog.html",
  "dich-vu.html",
  "plastic-surgery.html",
  "gioi-thieu.html",
  "lien-he.html",
  "products.html",
  "bang-gia.html",
  "chinh-sach-bao-mat.html",
  "nguyen-tac-noi-dung.html",
  "404.html",
  ...articles.map((article) => article.path),
  ...services.map((service) => service.path),
]);
for (const file of pages) {
  const name = file.slice(root.length + 1).replaceAll("\\", "/");
  if (!expected.delete(name))
    errors.push(`Unexpected or stale deployed page: ${name}`);
}
for (const name of expected) errors.push(`Missing deployed page: ${name}`);
const titles = new Map(),
  canonicals = new Map();
const parsed = new Map();
for (const file of pages) {
  const $ = load(await readFile(file, "utf8"));
  parsed.set(file, $);
  const name = file.slice(root.length + 1);
  const fail = (x) => errors.push(`${name}: ${x}`);
  if ($("h1").length !== 1) fail(`expected one H1, got ${$("h1").length}`);
  if ($("main").length !== 1) fail("expected one main landmark");
  if (!$("meta[name=description]").attr("content")) fail("missing description");
  if (!$("html").attr("lang")?.startsWith("vi"))
    fail("missing Vietnamese language");
  const title = $("title").text();
  if (titles.has(title)) fail("duplicate title: " + titles.get(title));
  titles.set(title, name);
  const canonical = $("link[rel=canonical]").attr("href");
  if (!canonical?.startsWith("https://thammyhuongman.com/"))
    fail("invalid canonical");
  if (canonicals.has(canonical)) fail("duplicate canonical");
  canonicals.set(canonical, name);
  const ids = new Set();
  $("[id]").each((_, el) => {
    const id = $(el).attr("id");
    if (ids.has(id)) fail("duplicate id " + id);
    ids.add(id);
  });
  $("img").each((_, el) => {
    const image = $(el);
    if (!image.attr("alt")) fail("missing image alt");
    if (!image.attr("width") || !image.attr("height"))
      fail("missing image dimensions");
  });
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      JSON.parse($(el).text());
    } catch {
      fail("invalid JSON-LD");
    }
  });
  if ($("[onclick]").length) fail("inline onclick handler retained");
  if (
    $(".brand-lotus").length ||
    $('link[rel="icon"][href*="images/brand"]').length
  )
    fail("replacement lotus logo retained instead of original wordmark");
  if ($('img[src*="/images/brand/"], meta[content*="/images/brand/"]').length)
    fail("new AI brand assets retained instead of original photos");
  $('img[src*="/images/inspiration/"]').each((_, el) => {
    const image = $(el);
    if (!image.closest("[data-editorial-inspiration]").length)
      fail("new illustration used outside the separate inspiration section");
    if (
      !image.attr("alt")?.includes("AI") ||
      !image
        .closest("[data-editorial-inspiration]")
        .find(".inspiration-disclaimer")
        .text()
        .includes("AI")
    )
      fail("new illustration must retain its section disclosure and descriptive alt");
    if (image.attr("loading") !== "lazy" || !image.attr("srcset"))
      fail("new illustration must use lazy loading and responsive sources");
  });
  if ($('script[src*="ai-config"]').length)
    fail("private configuration referenced");
  if ($(".illustration-label").length) fail("removed image badge retained");
  const mapFrame = $("#chi-duong iframe");
  if (
    mapFrame.length !== 1 ||
    mapFrame.attr("src") !== brand.mapEmbed ||
    mapFrame.attr("loading") !== "lazy" ||
    !mapFrame.attr("title")?.includes("Hương Mận") ||
    !$('#chi-duong a').toArray().some((el) => $(el).attr("href") === brand.maps)
  ) fail("Missing accessible lazy-loaded map or directions link");
  $('a[href^="tel:"]').each((_, el) => {
    if ($(el).attr("href") !== brand.phoneHref) fail("outdated telephone link");
  });
  if (
    /0383[ .-]?119[ .-]?119|84383119119|website cũ|website trước đây|bộ ảnh trước đây|bộ ảnh[^<.]*đã sử dụng|Với từ khóa|\bkeyword\b|\bintent\b|hệ thống nội dung|cấu trúc website/i.test(
      $.html(),
    )
  )
    fail("outdated phone or internal/editorial wording retained");
  if (
    !$(`.site-footer a[href="${brand.phoneHref}"]`)
      .text()
      .includes(brand.phone)
  )
    fail("footer must display the current telephone number");
  if (/0123456789|YOUR_FACEBOOK_APP_ID|an toàn tuyệt đối/i.test($.html()))
    fail("placeholder or absolute medical guarantee");
}
let checkedLinks = 0;
const home = load(await readFile(root + "/index.html", "utf8"));
const schema = JSON.parse(await readFile(root + "/schema.json", "utf8"));
const homeSchema = JSON.parse(home('script[type="application/ld+json"]').text());
for (const business of [
  schema,
  ...homeSchema["@graph"].filter((item) => item["@type"] === "LocalBusiness"),
])
  if (business.telephone !== brand.phoneHref.replace("tel:", ""))
    errors.push("Business schema must use the current telephone number");
const originalHomeImages = home('img[src^="/images/original/"]')
  .toArray()
  .map((el) => home(el).attr("src"));
const expectedOriginalImages = [
  "team.jpg",
  "team.jpg",
  "brows.jpg",
  "clinic.jpg",
  "event.jpg",
  "clinic.jpg",
  "huong-man.jpg",
  "event.jpg",
].map((file) => "/images/original/" + file);
if (
  JSON.stringify(originalHomeImages) !== JSON.stringify(expectedOriginalImages)
)
  errors.push("Original homepage photographs must remain in the same order");
for (const path of ["index.html", "dich-vu.html"]) {
  const $ = load(await readFile(root + "/" + path, "utf8"));
  if ($("[data-editorial-inspiration] [data-generated-image]").length !== 2)
    errors.push(`${path}: expected two new images in the inspiration section`);
}
const featured = home(".featured-service h3")
  .toArray()
  .map((el) => home(el).text());
if (featured[0] !== "Phun môi" || featured[1] !== "Phun mày")
  errors.push("Homepage must prioritize lip and brow services");
const contact = load(await readFile(root + "/lien-he.html", "utf8"));
const options = contact("#consult-service option")
  .toArray()
  .slice(1, 3)
  .map((el) => contact(el).text());
if (options.join("|") !== "Phun môi|Phun mày")
  errors.push("Contact service options must prioritize lip and brow services");
for (const [file, $] of parsed) {
  const references = $("a[href],img[src],script[src],link[href]")
    .toArray()
    .map((el) => $(el).attr("href") || $(el).attr("src"));
  for (const el of $("[srcset]").toArray()) {
    references.push(
      ...$(el)
        .attr("srcset")
        .split(",")
        .map((part) => part.trim().split(/\s+/)[0]),
    );
  }
  for (const value of references) {
    if (!value || /^(https?:|tel:|mailto:|data:)/.test(value)) continue;
    const current = "/" + file.slice(root.length + 1).replaceAll("\\", "/");
    const target = new URL(value, "http://local" + current);
    let targetPath = target.pathname === "/" ? "/index.html" : target.pathname;
    if (!extname(targetPath)) targetPath += ".html";
    const absolute = resolve(root, "." + decodeURIComponent(targetPath));
    try {
      await stat(absolute);
    } catch {
      errors.push(`${current}: missing ${value}`);
      continue;
    }
    if (target.hash && absolute.endsWith(".html")) {
      const targetDoc =
        parsed.get(absolute) || load(await readFile(absolute, "utf8"));
      if (
        !targetDoc("[id]")
          .toArray()
          .some(
            (x) =>
              targetDoc(x).attr("id") ===
              decodeURIComponent(target.hash.slice(1)),
          )
      )
        errors.push(`${current}: missing anchor ${value}`);
    }
    checkedLinks++;
  }
}
const sitemap = await readFile(root + "/sitemap.xml", "utf8");
const sx = load(sitemap, { xmlMode: true });
const listed = sx("loc")
  .toArray()
  .map((x) => sx(x).text());
for (const [canonical, name] of canonicals)
  if (name !== "404.html" && !listed.includes(canonical))
    errors.push(`${name}: absent from sitemap`);
if (new Set(listed).size !== listed.length)
  errors.push("Duplicate sitemap URLs");
if (paths.some((p) => /ai-config|node_modules|\.env/.test(p)))
  errors.push("Private/development files in deploy output");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `PASS: ${pages.length} HTML pages, ${listed.length} sitemap URLs, ${checkedLinks} internal links/assets. Unique H1/titles/canonicals, image attributes and JSON-LD valid.`,
  );
