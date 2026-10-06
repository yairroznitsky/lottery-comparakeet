import {
  normalizeSlug,
  splitBrandRegionGame,
} from "@/lib/parseDrawResults";
import { isUsJurisdictionSlug } from "@/lib/stateGames";
import type {
  CountryView,
  InternationalCountryRecord,
  TopJackpotApiRecord,
} from "@/types/lottery";

const US_NATIONAL_REGION_SLUGS = new Set(["u-s", "usa", "united-states"]);

function isUsNationalRegionSlug(regionSlug: string): boolean {
  return US_NATIONAL_REGION_SLUGS.has(normalizeSlug(regionSlug));
}

function isUsMegaMillionsOrPowerballFamilyGame(gameSlug: string): boolean {
  const game = normalizeSlug(gameSlug);
  if (game === "mega-millions" || game === "megamillions") {
    return true;
  }
  if (game === "powerball" || game.startsWith("powerball-")) {
    return true;
  }
  return false;
}

/**
 * Omit state-level Mega Millions / Powerball copies and U.S. Powerball add-ons
 * from aggregated listings (not from state result pages).
 */
export function shouldOmitMegaPowerballListing(
  regionSlug: string,
  gameSlug: string,
): boolean {
  const region = normalizeSlug(regionSlug);
  const game = normalizeSlug(gameSlug);

  if (!isUsMegaMillionsOrPowerballFamilyGame(game)) {
    return false;
  }

  if (isUsNationalRegionSlug(region)) {
    if (
      game === "powerball" ||
      game === "mega-millions" ||
      game === "megamillions"
    ) {
      return false;
    }
    return true;
  }

  if (isUsJurisdictionSlug(region)) {
    return true;
  }

  return false;
}

export function regionGameSlugsFromJackpotRecord(
  record: TopJackpotApiRecord,
): { regionSlug: string; gameSlug: string } | null {
  const state = record.state?.trim();
  const game = record.Game_Name?.trim();
  if (state && game) {
    return {
      regionSlug: normalizeSlug(state),
      gameSlug: normalizeSlug(game),
    };
  }
  const brand = (record.Game_Brand ?? record.title ?? record.name ?? "").trim();
  const split = splitBrandRegionGame(brand);
  if (!split) {
    return null;
  }
  return {
    regionSlug: normalizeSlug(split.region),
    gameSlug: normalizeSlug(split.game),
  };
}

export function shouldOmitJackpotFromListings(
  record: TopJackpotApiRecord,
): boolean {
  const parts = regionGameSlugsFromJackpotRecord(record);
  if (!parts) {
    return false;
  }
  return shouldOmitMegaPowerballListing(parts.regionSlug, parts.gameSlug);
}

export function shouldOmitCountryFromListings(
  record: InternationalCountryRecord | CountryView,
): boolean {
  if ("regionSlug" in record && "gameSlug" in record) {
    return shouldOmitMegaPowerballListing(record.regionSlug, record.gameSlug);
  }
  const split = splitBrandRegionGame(record.name);
  if (!split) {
    return false;
  }
  return shouldOmitMegaPowerballListing(
    normalizeSlug(split.region),
    normalizeSlug(split.game),
  );
}
