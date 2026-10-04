import { formatStateTitle } from "@/lib/parseDrawResults";
import { absoluteUrl } from "@/config/site";

const currentYear = () => new Date().getFullYear();

export function stateLandingSeoTitle(stateSlug: string): string {
  const name = formatStateTitle(stateSlug);
  return `${name} Lottery Results & Winning Numbers (${currentYear()})`;
}

export function stateLandingSeoDescription(
  stateSlug: string,
  gameSlugs: string[],
): string {
  const name = formatStateTitle(stateSlug);
  const sample = gameSlugs
    .slice(0, 4)
    .map((g) => g.replace(/-/g, " "))
    .join(", ");
  const gamesPhrase = sample
    ? ` including ${sample}${gameSlugs.length > 4 ? ", and more" : ""}`
    : " including Powerball and Mega Millions";
  return `See the latest ${name} lottery winning numbers${gamesPhrase}. Updated draw results, jackpots, and FAQs for ${name} players.`;
}

export function stateLandingIntroShort(stateSlug: string): string {
  const name = formatStateTitle(stateSlug);
  return `Latest ${name} lottery winning numbers, jackpots, and draw history — updated after each draw.`;
}

export function stateLandingIntroParagraph(
  stateSlug: string,
  _gameSlugs?: string[],
): string {
  return stateLandingIntroShort(stateSlug);
}

export function gameResultsSeoDescription(
  regionSlug: string,
  gameSlug: string,
  period: "lastTen" | "lastYear",
): string {
  const region = formatStateTitle(regionSlug);
  const game = gameSlug.replace(/-/g, " ");
  const span =
    period === "lastYear" ? "the past year of draws" : "the latest 10 draws";
  return `${region} ${game} lottery results: ${span}, winning numbers, jackpots, and draw dates. Updated regularly on Lottery Parakeet.`;
}

export function gameResultsCanonicalPath(
  region: string,
  game: string,
  period: "lastTen" | "lastYear",
): string {
  return period === "lastYear"
    ? `/${region}/${game}/last-year`
    : `/${region}/${game}`;
}

export function stateLandingCanonicalUrl(stateSlug: string): string {
  return absoluteUrl(`/${stateSlug}`);
}
