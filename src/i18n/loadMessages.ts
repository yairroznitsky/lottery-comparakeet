import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import type { Messages } from "@/i18n/translate";
import en from "@/i18n/messages/en.json";

const localeModules = import.meta.glob("./messages/*.json", {
  eager: true,
  import: "default",
}) as Record<string, Messages>;

const messagesByLocale = new Map<Locale, Messages>();

function loadLocaleFile(locale: Locale): Messages | undefined {
  return localeModules[`./messages/${locale}.json`];
}

export function getMessagesForLocale(locale: Locale): Messages {
  if (locale === DEFAULT_LOCALE) {
    return en as Messages;
  }
  const cached = messagesByLocale.get(locale);
  if (cached) {
    return cached;
  }
  const loaded = loadLocaleFile(locale);
  const merged = loaded
    ? { ...(en as Messages), ...loaded }
    : (en as Messages);
  messagesByLocale.set(locale, merged);
  return merged;
}

export function hasLocaleMessagesFile(locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) {
    return true;
  }
  return Boolean(loadLocaleFile(locale));
}
