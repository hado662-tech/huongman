import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, extname } from "node:path";
import { load } from "cheerio";
import { services } from "../site/services.mjs";
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
  if ($('script[src*="ai-config"]').length)
    fail("private configuration referenced");
  if (/0123456789|YOUR_FACEBOOK_APP_ID|an toàn tuyệt đối/i.test($.html()))
    fail("placeholder or absolute medical guarantee");
}
let checkedLinks = 0;
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
