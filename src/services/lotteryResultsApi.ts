import { getLotteryApiBaseUrl } from "@/config/lotteryApi";
import { buildLotteryLogoLookup } from "@/lib/lotteryLogos";
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

export async function fetchInternationalCountries(): Promise<CountryView[]> {
  const rows = await lotteryGet<InternationalCountryRecord[]>(
    "/international/lottery/countries",
  );
  return rows
    .filter((row) => !shouldOmitCountryFromListings(row))
    .map(parseCountryRecord);
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

const TOP_JACKPOTS_OVERFETCH = 200;

export async function fetchTopJackpots(count: number): Promise<TopJackpotView[]> {
  const apiLimit = count + TOP_JACKPOTS_OVERFETCH;
  const [rows, countryRows] = await Promise.all([
    lotteryGet<TopJackpotApiRecord[]>(
      `/international/lottery/topUpcoming/${apiLimit}`,
    ),
    lotteryGet<InternationalCountryRecord[]>(
      "/international/lottery/countries",
    ).catch(() => [] as InternationalCountryRecord[]),
  ]);
  const logoLookup = buildLotteryLogoLookup(countryRows);
  return rows
    .filter((row) => !shouldOmitJackpotFromListings(row))
    .slice(0, count)
    .map((row) => mapTopJackpot(row, logoLookup));
}
