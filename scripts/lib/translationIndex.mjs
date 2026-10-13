import fs from "node:fs";
import path from "node:path";
import { LEGACY_INDEX_PATH, ROOT } from "./i18nPaths.mjs";

const UI_HUB_PATHS = new Set([
  "",
  "top-jackpots",
  "usa-lottery",
  "international-results",
]);

const LOCALES = ["es", "pt", "fr", "de", "it"];

function readLocaleIndex(locale) {
  const perLocale = path.join(ROOT, "content/i18n", locale, "index.json");
  if (fs.existsSync(perLocale)) {
    return JSON.parse(fs.readFileSync(perLocale, "utf8"));
  }
  return null;
}

export function readTranslationIndex() {
  const legacy = fs.existsSync(LEGACY_INDEX_PATH)
    ? JSON.parse(fs.readFileSync(LEGACY_INDEX_PATH, "utf8"))
    : { uiReady: {}, paths: {} };

  const uiReady = { ...(legacy.uiReady ?? {}) };
  const paths = { ...(legacy.paths ?? {}) };

  for (const locale of LOCALES) {
    const idx = readLocaleIndex(locale);
    if (!idx) {
      continue;
    }
    if (idx.uiReady) {
      uiReady[locale] = true;
    }
    if (idx.paths) {
      paths[locale] = idx.paths;
    }
  }

  return { uiReady, paths };
}

export function isPathTranslated(index, logicalPath, locale) {
  if (locale === "en") {
    return true;
  }
  const pathKey = logicalPath.replace(/^\/+|\/+$/g, "") || "";
  if (index.paths?.[locale]?.includes(pathKey)) {
    return true;
  }
  if (UI_HUB_PATHS.has(pathKey) && index.uiReady?.[locale]) {
    return true;
  }
  return false;
}

export function localesForPath(index, logicalPath) {
  const locales = ["en"];
  for (const locale of LOCALES) {
    if (isPathTranslated(index, logicalPath, locale)) {
      locales.push(locale);
    }
  }
  return locales;
}

export const HREFLANG = {
  en: "en",
  es: "es",
  pt: "pt-BR",
  fr: "fr",
  de: "de",
  it: "it",
};

export function localizeUrl(siteUrl, logicalPath, locale) {
  const base = siteUrl.replace(/\/$/, "");
  const pathKey = logicalPath.replace(/^\/+|\/+$/g, "") || "";
  if (locale === "en") {
    return pathKey ? `${base}/${pathKey}` : `${base}/`;
  }
  return pathKey ? `${base}/${locale}/${pathKey}` : `${base}/${locale}`;
}
