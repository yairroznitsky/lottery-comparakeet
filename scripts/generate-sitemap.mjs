import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getIntlGamePathsFromDisk,
  getManifestGeneratedAt,
  getUsaStateGamePathsFromDisk,
  getUsaStateSlugsFromDisk,
  getWordPressSlugsFromDisk,
} from "./lib/readPrerenderManifests.mjs";
import {
  HREFLANG,
  localesForPath,
  localizeUrl,
  readTranslationIndex,
} from "./lib/translationIndex.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = (process.env.VITE_SITE_URL ?? "https://lottery.comparakeet.com").replace(
  /\/$/,
  "",
);

const lastmod = getManifestGeneratedAt()?.slice(0, 10) ?? new Date().toISOString().slice(0, 10);
const translationIndex = readTranslationIndex();

const staticPaths = [
  { path: "", priority: "1.0", changefreq: "daily" },
  { path: "top-jackpots", priority: "0.9", changefreq: "daily" },
  { path: "usa-lottery", priority: "0.9", changefreq: "weekly" },
  { path: "international-results", priority: "0.8", changefreq: "weekly" },
  { path: "best-online-lottery-sites", priority: "0.7", changefreq: "monthly" },
];

const stateSlugs = getUsaStateSlugsFromDisk();
const usaGamePaths = getUsaStateGamePathsFromDisk();
const intlGamePaths = getIntlGamePathsFromDisk();
const gamePaths = [...new Set([...usaGamePaths, ...intlGamePaths])].sort();
const wordpressSlugs = getWordPressSlugsFromDisk().filter(
  (slug) => slug !== "best-online-lottery-sites",
);

/** @type {{ logicalPath: string; priority: string; changefreq: string }[]} */
const logicalEntries = [
  ...staticPaths.map((s) => ({
    logicalPath: s.path,
    priority: s.priority,
    changefreq: s.changefreq,
  })),
  ...stateSlugs.map((slug) => ({
    logicalPath: slug,
    priority: "0.7",
    changefreq: "weekly",
  })),
  ...gamePaths.map((p) => ({
    logicalPath: p,
    priority: "0.6",
    changefreq: "daily",
  })),
  ...wordpressSlugs.map((slug) => ({
    logicalPath: slug,
    priority: "0.5",
    changefreq: "monthly",
  })),
];

function alternateLinks(logicalPath) {
  const locales = localesForPath(translationIndex, logicalPath);
  return locales
    .map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${HREFLANG[locale]}" href="${localizeUrl(siteUrl, logicalPath, locale)}" />`,
    )
    .concat(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizeUrl(siteUrl, logicalPath, "en")}" />`,
    )
    .join("\n");
}

function urlEntry(logicalPath, priority, changefreq) {
  const locales = localesForPath(translationIndex, logicalPath);
  return locales
    .map((locale) => {
      const loc = localizeUrl(siteUrl, logicalPath, locale);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternateLinks(logicalPath)}
  </url>`;
    })
    .join("\n");
}

const entries = logicalEntries
  .map((e) => urlEntry(e.logicalPath, e.priority, e.changefreq))
  .join("\n");

const urlCount = logicalEntries.reduce(
  (n, e) => n + localesForPath(translationIndex, e.logicalPath).length,
  0,
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

writeFileSync(join(root, "public", "sitemap.xml"), xml, "utf8");
console.log(
  `Wrote sitemap.xml for ${siteUrl} (${logicalEntries.length} logical pages, ${urlCount} localized URLs)`,
);
