import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
);

function readJson(relativePath) {
  const full = path.join(ROOT, relativePath);
  if (!fs.existsSync(full)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(full, "utf8"));
}

export function getUsaStateSlugsFromDisk() {
  const faqs = readJson("content/state-faqs/manifest.json");
  const games = readJson("content/state-games/manifest.json");
  const slugs = new Set([
    ...Object.keys(faqs?.states ?? {}),
    ...Object.keys(games?.states ?? {}),
  ]);
  return [...slugs].filter(Boolean).sort();
}

export function getUsaStateGamePathsFromDisk() {
  const games = readJson("content/state-games/manifest.json");
  if (!games?.states) {
    return [];
  }
  const paths = [];
  for (const [state, entry] of Object.entries(games.states)) {
    const list = entry?.games ?? [];
    for (const game of list) {
      if (game) {
        paths.push(`${state}/${game}`);
      }
    }
  }
  return paths.sort();
}

export function getIntlGamePathsFromDisk() {
  const intl = readJson("content/intl-games/manifest.json");
  return [...(intl?.paths ?? [])].sort();
}

export function getManifestGeneratedAt() {
  const games = readJson("content/state-games/manifest.json");
  const faqs = readJson("content/state-faqs/manifest.json");
  const intl = readJson("content/intl-games/manifest.json");
  const wp = readJson("content/wordpress/manifest.json");
  return (
    games?.generatedAt ??
    faqs?.generatedAt ??
    intl?.generatedAt ??
    wp?.generatedAt ??
    null
  );
}

function isLegacyMirrorWordPressSlug(slug) {
  if (slug.startsWith("https-lottery-comparakeet-com-")) {
    return true;
  }
  if (/results-winning-numbers/i.test(slug)) {
    return true;
  }
  if (/winning-numbers-for/i.test(slug)) {
    return true;
  }
  if (/last-year-results/i.test(slug)) {
    return true;
  }
  if (/-latest-results/i.test(slug)) {
    return true;
  }
  return false;
}

export function getWordPressSlugsFromDisk() {
  const wp = readJson("content/wordpress/manifest.json");
  if (!wp) {
    return [];
  }
  const stateSlugs = new Set(getUsaStateSlugsFromDisk());
  const slugs = new Set([
    ...(wp.pages ?? []).map((p) => p.slug),
    ...(wp.posts ?? []).map((p) => p.slug),
  ]);
  return [...slugs]
    .filter(
      (s) => s && !stateSlugs.has(s) && !isLegacyMirrorWordPressSlug(s),
    )
    .sort();
}
