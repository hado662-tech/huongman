import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { load } from "cheerio";
import { articles, pmuArticles } from "../site/articles.mjs";
import { services } from "../site/services.mjs";
import { articlePath, hubSlug } from "../site/content/pmu-shared.mjs";
import { brand } from "../site/config.mjs";

const built = (path) => load(readFileSync(new URL(`../dist/${path}`, import.meta.url), "utf8"));

test("new PMU collection preserves legacy copy and has distinct search intents", () => {
  const legacy = JSON.parse(readFileSync(new URL("../site/articles.json", import.meta.url), "utf8"));
  assert.equal(pmuArticles.length, 12);
  assert.equal(articles.length, legacy.length + pmuArticles.length);
  for (const original of legacy) {
    assert.equal(articles.find((article) => article.path === original.path)?.content, original.content);
  }
  for (const key of ["path", "title", "description", "keyword", "intent"]) {
    assert.equal(new Set(pmuArticles.map((article) => article[key])).size, pmuArticles.length, key);
  }
  for (const article of pmuArticles) {
    assert.ok(article.description.length >= 80 && article.description.length <= 180, article.slug);
    const $ = load(article.content);
    assert.equal($("h1").length, 0);
    assert.ok($("h2").length >= 4, article.slug);
  }
});

test("hub and spokes connect in both directions with relevant service destinations", () => {
  const hub = pmuArticles.find((article) => article.slug === hubSlug);
  const $hub = load(hub.content);
  for (const article of pmuArticles) {
    const $ = load(article.content);
    if (article !== hub) {
      assert.equal($hub(`a[href="/blog/${article.slug}"]`).length, 1, article.slug);
      assert.ok($(`a[href="/blog/${hubSlug}"]`).length > 0, article.slug);
    }
    for (const path of article.relatedPaths) {
      assert.notEqual(path, article.path);
      assert.ok(articles.some((candidate) => candidate.path === path), path);
    }
    for (const path of article.servicePaths) assert.ok(services.some((service) => service.path === path));
  }
});

test("rendered PMU metadata, original photographs and structured data agree", () => {
  for (const article of pmuArticles) {
    const $ = built(article.path);
    const canonical = brand.url + "/" + article.path.replace(/\.html$/, "");
    assert.equal($("h1").text(), article.title);
    assert.equal($('link[rel="canonical"]').attr("href"), canonical);
    const schemas = JSON.parse($('script[type="application/ld+json"]').text())["@graph"];
    const posting = schemas.find((item) => item["@type"] === "BlogPosting");
    assert.equal(posting.mainEntityOfPage, canonical);
    assert.equal(posting.image, $('meta[property="og:image"]').attr("content"));
    assert.equal(posting.image, brand.url + $(".article-cover img").attr("src"));
    assert.equal(posting.image, $('meta[name="twitter:image"]').attr("content"));
    assert.equal(posting.author["@type"], "Organization");
    assert.ok(!posting.aggregateRating && !posting.review);
    assert.equal(posting.datePublished, "2026-11-18");
    assert.equal($(".byline time").attr("datetime"), posting.datePublished);
    assert.equal($(".toc ol a").length, $(".article-body .prose h2").length);
    assert.ok(!$(".article-body").text().includes(article.intent));
  }
});

test("PMU articles are discoverable from the directory, services and sitemap", () => {
  const $ = built("blog.html");
  assert.equal($('button[data-filter="pmu"]').text(), "Phun môi & lông mày");
  assert.equal($('.article-card[data-topic="pmu"]').length, pmuArticles.length);
  const sitemap = readFileSync(new URL("../dist/sitemap.xml", import.meta.url), "utf8");
  for (const article of pmuArticles) assert.ok(sitemap.includes(article.path.replace(/\.html$/, "")));
  for (const service of services.filter((item) => item.category === "pmu")) {
    const doc = built(service.path);
    assert.ok(doc(`a[href="/blog/${hubSlug}"]`).length > 0);
    assert.ok(service.relatedArticles.length >= 2);
  }
  assert.equal(articlePath(hubSlug), pmuArticles[0].path);
});

test("health explanations link to primary references, not fabricated endorsements", () => {
  const healthSlugs = [
    "cham-soc-sau-phun-moi-can-kieng-gi",
    "phun-moi-bao-lau-len-mau-khi-nao-dam",
    "long-may-cu-tro-do-tro-xanh-co-phun-chong-duoc-khong",
  ];
  for (const slug of healthSlugs) {
    const article = pmuArticles.find((item) => item.slug === slug);
    const $ = load(article.content);
    const references = $('a[href^="https:"]').toArray().map((el) => new URL($(el).attr("href")).hostname);
    assert.ok(references.some((host) => /(?:fda\.gov|aad\.org|nhs\.uk)$/.test(host)), slug);
    assert.ok($("body").text().includes("bác sĩ"), slug);
  }
});
