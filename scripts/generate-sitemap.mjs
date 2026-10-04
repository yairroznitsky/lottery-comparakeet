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

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = (process.env.VITE_SITE_URL ?? "https://lottery.comparakeet.com").replace(
  /\/$/,
  "",
);

const lastmod = getManifestGeneratedAt()?.slice(0, 10) ?? new Date().toISOString().slice(0, 10);

const staticPaths = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/top-jackpots", priority: "0.9", changefreq: "daily" },
  { path: "/usa-lottery", priority: "0.9", changefreq: "weekly" },
  { path: "/international-results", priority: "0.8", changefreq: "weekly" },
  { path: "/best-online-lottery-sites", priority: "0.7", changefreq: "monthly" },
];

const stateSlugs = getUsaStateSlugsFromDisk();
const usaGamePaths = getUsaStateGamePathsFromDisk();
const intlGamePaths = getIntlGamePathsFromDisk();
const gamePaths = [...new Set([...usaGamePaths, ...intlGamePaths])].sort();
const wordpressSlugs = getWordPressSlugsFromDisk().filter(
  (slug) => slug !== "best-online-lottery-sites",
);

function urlEntry(path, priority, changefreq) {
  const loc = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries = [
  ...staticPaths.map((s) => urlEntry(s.path, s.priority, s.changefreq)),
  ...stateSlugs.map((slug) => urlEntry(`/${slug}`, "0.7", "weekly")),
  ...gamePaths.map((p) => urlEntry(`/${p}`, "0.6", "daily")),
  ...wordpressSlugs.map((slug) => urlEntry(`/${slug}`, "0.5", "monthly")),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

writeFileSync(join(root, "public", "sitemap.xml"), xml, "utf8");
console.log(
  `Wrote sitemap.xml for ${siteUrl} (${staticPaths.length} static + ${stateSlugs.length} states + ${gamePaths.length} games [${usaGamePaths.length} US + ${intlGamePaths.length} intl] + ${wordpressSlugs.length} content pages = ${entries.length} URLs)`,
);
