import { formatStateTitle } from "@/lib/parseDrawResults";
import { absoluteUrl } from "@/config/site";
import { getMessagesForLocale } from "@/i18n/loadMessages";
import type { Locale } from "@/i18n/locales";
import { createTranslator } from "@/i18n/translate";
import { localizePath } from "@/i18n/paths";

const currentYear = () => new Date().getFullYear();

function tFor(locale: Locale) {
  return createTranslator(getMessagesForLocale(locale));
}

export function stateLandingSeoTitle(
  stateSlug: string,
  locale: Locale = "en",
): string {
  const t = tFor(locale);
  return t("seo.state.title", {
    state: formatStateTitle(stateSlug),
    year: currentYear(),
  });
}

export function stateLandingSeoDescription(
  stateSlug: string,
  gameSlugs: string[],
  locale: Locale = "en",
): string {
  const t = tFor(locale);
  const name = formatStateTitle(stateSlug);
  const sample = gameSlugs
    .slice(0, 4)
    .map((g) => g.replace(/-/g, " "))
    .join(", ");
  const gamesPhrase = sample
    ? t("seo.state.gamesIncluding", {
        sample,
        more: gameSlugs.length > 4 ? ", and more" : "",
      })
    : t("seo.state.gamesDefault");
  return t("seo.state.description", {
    state: name,
    gamesPhrase,
  });
}

export function stateLandingIntroShort(
  stateSlug: string,
  locale: Locale = "en",
): string {
  const t = tFor(locale);
  return t("seo.state.introShort", { state: formatStateTitle(stateSlug) });
}

export function stateLandingIntroParagraph(
  stateSlug: string,
  _gameSlugs?: string[],
  locale: Locale = "en",
): string {
  return stateLandingIntroShort(stateSlug, locale);
}

export function gameResultsSeoDescription(
  regionSlug: string,
  gameSlug: string,
  period: "lastTen" | "lastYear",
  locale: Locale = "en",
): string {
  const t = tFor(locale);
  const region = formatStateTitle(regionSlug);
  const game = gameSlug.replace(/-/g, " ");
  const span =
    period === "lastYear"
      ? t("seo.game.spanLastYear")
      : t("seo.game.spanLastTen");
  return t("seo.game.usDescription", { region, game, span });
}

export function gameResultsCanonicalPath(
  region: string,
  game: string,
  period: "lastTen" | "lastYear",
  locale: Locale = "en",
): string {
  const base =
    period === "lastYear"
      ? `/${region}/${game}/last-year`
      : `/${region}/${game}`;
  return localizePath(base, locale);
}

export function stateLandingCanonicalUrl(
  stateSlug: string,
  locale: Locale = "en",
): string {
  return absoluteUrl(localizePath(`/${stateSlug}`, locale));
}
