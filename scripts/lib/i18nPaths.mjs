import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
);

export const LOCK_PATH = path.join(ROOT, "content/i18n/.migrate.lock");
export const LEGACY_HASH_PATH = path.join(ROOT, "content/i18n/.source-hashes.json");
export const LEGACY_INDEX_PATH = path.join(ROOT, "content/i18n/translation-index.json");

export const UI_HUB_PATHS = [
  "",
  "top-jackpots",
  "usa-lottery",
  "international-results",
];

export const FAQ_MERGED_FILES = {
  "intl-faqs": "intl-faqs.json",
  "state-faqs": "state-faqs.json",
  "brand-review-faqs": "brand-review-faqs.json",
};

export function localeDir(locale) {
  return path.join(ROOT, "content/i18n", locale);
}

export function localeHashPath(locale) {
  return path.join(localeDir(locale), ".source-hashes.json");
}

export function localeIndexPath(locale) {
  return path.join(localeDir(locale), "index.json");
}

export function mergedFaqPath(locale, category) {
  return path.join(localeDir(locale), FAQ_MERGED_FILES[category]);
}

export function loadDotEnv() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const eq = trimmed.indexOf("=");
    if (eq <= 0) {
      continue;
    }
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = val;
    }
  }
}
