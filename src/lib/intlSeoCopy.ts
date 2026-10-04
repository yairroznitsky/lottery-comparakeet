import {
  formatGameTitle,
  formatStateTitle,
} from "@/lib/parseDrawResults";

const currentYear = () => new Date().getFullYear();

export function intlGameSeoTitle(
  regionSlug: string,
  gameSlug: string,
  period: "lastTen" | "lastYear",
): string {
  const title = `${formatStateTitle(regionSlug)} ${formatGameTitle(gameSlug)}`;
  const span = period === "lastYear" ? "Last Year" : "Latest";
  return `${title} ${span} Results & Winning Numbers (${currentYear()})`;
}

export function intlGameSeoDescription(
  regionSlug: string,
  gameSlug: string,
  period: "lastTen" | "lastYear",
): string {
  const region = formatStateTitle(regionSlug);
  const game = formatGameTitle(gameSlug);
  const span =
    period === "lastYear" ? "the past year of draws" : "the latest 10 draws";
  return `${region} ${game} lottery results: ${span}, winning numbers, jackpots, and draw dates. FAQ and draw history for international players on Lottery Parakeet.`;
}

export function intlGameIntroShort(
  regionSlug: string,
  gameSlug: string,
): string {
  const region = formatStateTitle(regionSlug);
  const game = formatGameTitle(gameSlug);
  return `Latest ${region} ${game} winning numbers, jackpots, and draw history — updated after each draw.`;
}

export function internationalHubSeoTitle(): string {
  return `International Lottery Results & Winning Numbers (${currentYear()})`;
}

export function internationalHubSeoDescription(): string {
  return "International lottery results by country and game — EuroMillions, Eurojackpot, UK Lotto, and hundreds more. Latest winning numbers and jackpots.";
}
