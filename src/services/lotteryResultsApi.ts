import { getLotteryApiBaseUrl } from "@/config/lotteryApi";
import { resolveListingLogo } from "@/lib/lotteryLocalIcons";
import { buildLotteryLogoLookup, pickBetterLotteryLogoUrl } from "@/lib/lotteryLogos";
import {
  shouldOmitCountryFromListings,
  shouldOmitJackpotFromListings,
} from "@/lib/nationalUsLotteryFilter";
import {
  mapTopJackpot,
  mapUsaDraw,
  parseCountryRecord,
} from "@/lib/parseDrawResults";
import { LotteryApiError } from "@/services/lotteryErrors";
import type {
  CountryView,
  DrawResultView,
  InternationalCountryRecord,
  InternationalDrawApiRecord,
  ResultsPeriod,
  TopJackpotApiRecord,
  TopJackpotView,
  UsaDrawApiRecord,
  UsaGameRecord,
  UsaStateRecord,
} from "@/types/lottery";

function apiUrl(path: string): string {
  const base = getLotteryApiBaseUrl().replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

async function lotteryGet<T>(path: string): Promise<T> {
  const url = apiUrl(path);
  let response: Response;
  try {
    response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(25_000),
    });
  } catch {
    throw new LotteryApiError(
      "Unable to reach the lottery results API.",
      0,
      url,
    );
  }
  if (!response.ok) {
    throw new LotteryApiError(
      `Lottery API request failed (${response.status}).`,
      response.status,
      url,
    );
  }
  const text = await response.text();
  if (!text.trim()) {
    return [] as T;
  }
  return JSON.parse(text) as T;
}

export async function fetchUsaStates(): Promise<string[]> {
  const rows = await lotteryGet<UsaStateRecord[]>("/usa/lottery/getStates");
  return rows.map((r) => r.state);
}

export async function fetchUsaStateGames(state: string): Promise<string[]> {
  const rows = await lotteryGet<UsaGameRecord[]>(
    `/usa/lottery/${encodeURIComponent(state)}/uniqueGames`,
  );
  return rows.map((r) => r.Game_Name);
}

export async function fetchUsaResults(
  state: string | undefined,
  game: string | undefined,
  period: ResultsPeriod,
): Promise<DrawResultView[]> {
  let path: string;
  if (state && game) {
    path = `/usa/lottery/${encodeURIComponent(state)}/${encodeURIComponent(game)}/${period}`;
  } else if (state) {
    path = `/usa/lottery/${encodeURIComponent(state)}/get/${period}`;
  } else {
    path = `/usa/lottery/${period}`;
  }
  const rows = await lotteryGet<UsaDrawApiRecord[]>(path);
  return rows.map(mapUsaDraw);
}

function mergeInternationalCountryRows(
  rows: InternationalCountryRecord[],
): InternationalCountryRecord[] {
  const bySlug = new Map<string, InternationalCountryRecord>();
  for (const row of rows) {
    const view = parseCountryRecord(row);
    const key = `${view.regionSlug}/${view.gameSlug}`;
    const existing = bySlug.get(key);
    if (!existing) {
      bySlug.set(key, row);
      continue;
    }
    bySlug.set(key, {
      name: existing.name || row.name,
      logo: pickBetterLotteryLogoUrl(existing.logo, row.logo),
    });
  }
  return [...bySlug.values()];
}

export async function fetchInternationalCountries(): Promise<CountryView[]> {
  const rows = await lotteryGet<InternationalCountryRecord[]>(
    "/international/lottery/countries",
  );
  return mergeInternationalCountryRows(
    rows.filter((row) => !shouldOmitCountryFromListings(row)),
  )
    .map(parseCountryRecord)
    .map((country) => ({
      ...country,
      logo: resolveListingLogo(country),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function fetchInternationalResults(
  state: string | undefined,
  game: string | undefined,
  period: ResultsPeriod,
): Promise<DrawResultView[]> {
  let path: string;
  if (state && game) {
    path = `/international/lottery/byGame/byState/${period}/${encodeURIComponent(state)}/${encodeURIComponent(game)}`;
  } else {
    path = `/international/lottery/${period}`;
  }
  const rows = await lotteryGet<
    (UsaDrawApiRecord | InternationalDrawApiRecord)[]
  >(path);
  return rows.map(mapUsaDraw);
}

export const TOP_JACKPOTS_OVERFETCH = 200;
/** Largest slice any caller requests (play-link lookup). */
export const TOP_JACKPOTS_MAX_COUNT = 80;
export const TOP_JACKPOTS_API_LIMIT =
  TOP_JACKPOTS_MAX_COUNT + TOP_JACKPOTS_OVERFETCH;

export function buildTopJackpotsFromApiRecords(
  rows: TopJackpotApiRecord[],
  countryRows: InternationalCountryRecord[],
  maxCount = TOP_JACKPOTS_API_LIMIT,
): TopJackpotView[] {
  const logoLookup = buildLotteryLogoLookup(countryRows);
  return rows
    .filter((row) => !shouldOmitJackpotFromListings(row))
    .slice(0, maxCount)
    .map((row) => mapTopJackpot(row, logoLookup));
}

async function fetchTopJackpotsApiPayload(): Promise<{
  rows: TopJackpotApiRecord[];
  countryRows: InternationalCountryRecord[];
}> {
  const [rows, countryRows] = await Promise.all([
    lotteryGet<TopJackpotApiRecord[]>(
      `/international/lottery/topUpcoming/${TOP_JACKPOTS_API_LIMIT}`,
    ),
    lotteryGet<InternationalCountryRecord[]>(
      "/international/lottery/countries",
    ).catch(() => [] as InternationalCountryRecord[]),
  ]);
  return { rows, countryRows };
}

export async function fetchTopJackpotsList(): Promise<TopJackpotView[]> {
  const { rows, countryRows } = await fetchTopJackpotsApiPayload();
  return buildTopJackpotsFromApiRecords(rows, countryRows);
}

export async function fetchTopJackpots(count: number): Promise<TopJackpotView[]> {
  const list = await fetchTopJackpotsList();
  return list.slice(0, count);
}
