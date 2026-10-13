/**
 * Writes dist/spa-shell.html: the built homepage minus its prerendered body and
 * page-specific SEO tags. Vercel serves it for URLs without a prerendered file,
 * so crawlers never see homepage title/canonical on unrelated URLs.
 */
import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(import.meta.dirname, "..", "dist");
const source = path.join(distDir, "index.html");
const target = path.join(distDir, "spa-shell.html");

let html = fs.readFileSync(source, "utf8");

html = html.replace(/<(title|script)\b[^>]*data-rh="true"[^>]*>[\s\S]*?<\/\1>/g, "");
html = html.replace(/<(meta|link)\b[^>]*data-rh="true"[^>]*\/?>/g, "");
html = html.replace("</head>", "<title>Lottery Parakeet</title></head>");

const rootOpen = html.match(/<div id="root"[^>]*>/);
const hashScript = html.indexOf("<script>window.__VITE_REACT_SSG_HASH__");
if (!rootOpen || rootOpen.index === undefined || hashScript === -1) {
  throw new Error("write-spa-shell: could not locate #root or SSG hash script in dist/index.html");
}
html =
  html.slice(0, rootOpen.index) +
  '<div id="root"></div>\n' +
  html.slice(hashScript);

fs.writeFileSync(target, html);
console.log(`Wrote ${path.relative(process.cwd(), target)}`);
