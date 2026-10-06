import { parseLotteryDateTime } from "@/lib/formatDateTime";
import { buildTopJackpotsFromApiRecords } from "@/services/lotteryResultsApi";
import type {
  InternationalCountryRecord,
  TopJackpotApiRecord,
  TopJackpotView,
} from "@/types/lottery";

interface BundledTopJackpotsCache {
  fetchedAt: string;
  rows: TopJackpotApiRecord[];
  countryRows: InternationalCountryRecord[];
}

export interface TopJackpotsCacheSnapshot {
  fetchedAt: number;
  jackpots: TopJackpotView[];
}

const STORAGE_KEY = "lottery:top-jackpots:v1";

const bundledModules = import.meta.glob("../../content/top-jackpots/jackpots.json", {
  eager: true,
  import: "default",
}) as Record<string, BundledTopJackpotsCache>;

function readBundledRaw(): BundledTopJackpotsCache | null {
  const entry = Object.values(bundledModules)[0];
  if (!entry?.rows?.length) {
    return null;
  }
  return entry;
}

function processRawCache(raw: BundledTopJackpotsCache): TopJackpotsCacheSnapshot {
  return {
    fetchedAt: Date.parse(raw.fetchedAt) || 0,
    jackpots: buildTopJackpotsFromApiRecords(raw.rows, raw.countryRows ?? []),
  };
}

export function readPersistedTopJackpots(): TopJackpotsCacheSnapshot | null {
  if (typeof localStorage === "undefined") {
    return null;
  }
  try {
    const text = localStorage.getItem(STORAGE_KEY);
    if (!text) {
      return null;
    }
    const parsed = JSON.parse(text) as TopJackpotsCacheSnapshot;
    if (!Array.isArray(parsed.jackpots) || parsed.jackpots.length === 0) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function persistTopJackpots(snapshot: TopJackpotsCacheSnapshot): void {
  if (typeof localStorage === "undefined") {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Quota or private mode — ignore.
  }
}

export function getBootstrapTopJackpots(): TopJackpotsCacheSnapshot | null {
  const persisted = readPersistedTopJackpots();
  const bundled = readBundledRaw();

  if (persisted && bundled) {
    return persisted.fetchedAt >= Date.parse(bundled.fetchedAt)
      ? persisted
      : processRawCache(bundled);
  }
  if (persisted) {
    return persisted;
  }
  if (bundled) {
    return processRawCache(bundled);
  }
  return null;
}

export function topJackpotsFingerprint(list: TopJackpotView[]): string {
  return list
    .map(
      (j) =>
        `${j.id}:${j.jackpotUsd}:${j.jackpotDisplay}:${j.nextDrawClose ?? ""}:${j.nextDrawAt ?? ""}`,
    )
    .join("|");
}

function jackpotDrawTimeMs(jackpot: TopJackpotView): number | null {
  const raw = jackpot.nextDrawAt ?? jackpot.nextDrawClose;
  if (!raw) {
    return null;
  }
  const parsed = parseLotteryDateTime(raw);
  return parsed ? parsed.getTime() : null;
}

/** True once any cached jackpot's scheduled draw time has passed. */
export function isTopJackpotsListStale(
  jackpots: TopJackpotView[],
  nowMs = Date.now(),
): boolean {
  if (jackpots.length === 0) {
    return true;
  }
  const drawTimes = jackpots
    .map(jackpotDrawTimeMs)
    .filter((t): t is number => t != null);
  if (drawTimes.length === 0) {
    return false;
  }
  return drawTimes.some((t) => nowMs >= t);
}

/** Ms until the soonest upcoming draw; `false` when nothing is scheduled. */
export function msUntilNextJackpotDraw(
  jackpots: TopJackpotView[],
  nowMs = Date.now(),
): number | false {
  const upcoming = jackpots
    .map(jackpotDrawTimeMs)
    .filter((t): t is number => t != null && t > nowMs);
  if (upcoming.length === 0) {
    return false;
  }
  return Math.min(...upcoming) - nowMs + 1000;
}
