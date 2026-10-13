import {
  formatGameTitle,
  formatStateTitle,
} from "@/lib/parseDrawResults";
import { getMessagesForLocale } from "@/i18n/loadMessages";
import type { Locale } from "@/i18n/locales";
import { createTranslator } from "@/i18n/translate";

const currentYear = () => new Date().getFullYear();

function tFor(locale: Locale) {
  return createTranslator(getMessagesForLocale(locale));
}

export function intlGameSeoTitle(
  regionSlug: string,
  gameSlug: string,
  period: "lastTen" | "lastYear",
  locale: Locale = "en",
): string {
  const t = tFor(locale);
  const title = `${formatStateTitle(regionSlug)} ${formatGameTitle(gameSlug)}`;
  const span =
    period === "lastYear"
      ? t("seo.intl.spanLastYear")
      : t("seo.intl.spanLatest");
  return t("seo.intl.title", { title, span, year: currentYear() });
}

export function intlGameSeoDescription(
  regionSlug: string,
  gameSlug: string,
  period: "lastTen" | "lastYear",
  locale: Locale = "en",
): string {
  const t = tFor(locale);
  const region = formatStateTitle(regionSlug);
  const game = formatGameTitle(gameSlug);
  const span =
    period === "lastYear"
      ? t("seo.game.spanLastYear")
      : t("seo.game.spanLastTen");
  return t("seo.intl.description", { region, game, span });
}

export function intlGameIntroShort(
  regionSlug: string,
  gameSlug: string,
  locale: Locale = "en",
): string {
  const t = tFor(locale);
  const region = formatStateTitle(regionSlug);
  const game = formatGameTitle(gameSlug);
  return t("seo.intl.introShort", { region, game });
}

export function internationalHubSeoTitle(locale: Locale = "en"): string {
  const t = tFor(locale);
  return t("intlIndex.seoTitle", { year: currentYear() });
}

export function internationalHubSeoDescription(locale: Locale = "en"): string {
  return tFor(locale)("intlIndex.seoDescription");
}
