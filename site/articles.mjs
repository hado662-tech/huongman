import { readFileSync } from "node:fs";
import { lipArticles } from "./content/pmu-lips.mjs";
import { browArticles } from "./content/pmu-brows.mjs";
import { guideArticles } from "./content/pmu-guides.mjs";
import { articlePath, hubSlug, link } from "./content/pmu-shared.mjs";

const legacyArticles = JSON.parse(
  readFileSync(new URL("./articles.json", import.meta.url), "utf8"),
);

function servicePathsFor(cluster) {
  if (cluster === "moi") return ["phun-xam/phun-moi.html"];
  if (cluster === "may") return ["phun-xam/phun-may.html"];
  return ["phun-xam/phun-moi.html", "phun-xam/phun-may.html"];
}

export const pmuArticles = [
  guideArticles[0],
  ...lipArticles,
  ...browArticles,
  ...guideArticles.slice(1),
].map((article) => ({
  ...article,
  path: articlePath(article.slug),
  datePublished: "2026-11-18",
  topic: "pmu",
  tag: "Phun môi & lông mày",
  imageKey: article.imageKey || (article.cluster === "may" ? "brows" : "team"),
  relatedPaths: article.relatedSlugs.map(articlePath),
  servicePaths: servicePathsFor(article.cluster),
  content: article.content + (article.slug === hubSlug ? "" : `<p class="editorial-note">Đọc theo nhu cầu trong ${link(hubSlug, "cẩm nang phun môi, phun mày Thái Nguyên")}.</p>`),
}));

const publicTags = new Map([
  ["Local SEO", "Kinh nghiệm làm đẹp"],
  ["SEO thương hiệu", "Địa chỉ & liên hệ"],
  ["Trust", "Lựa chọn cơ sở"],
]);

export const articles = [...pmuArticles, ...legacyArticles].map((article) => ({
  ...article,
  tag: publicTags.get(article.tag) ?? article.tag,
}));

const paths = new Set();
for (const article of articles) {
  if (paths.has(article.path)) throw new Error(`Duplicate article: ${article.path}`);
  paths.add(article.path);
}
