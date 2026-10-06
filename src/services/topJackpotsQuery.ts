import {
  getBootstrapTopJackpots,
  persistTopJackpots,
  topJackpotsFingerprint,
} from "@/lib/topJackpotsCache";
import { fetchTopJackpotsList } from "@/services/lotteryResultsApi";
import type { TopJackpotView } from "@/types/lottery";

export function getTopJackpotsQueryDefaults():
  | { initialData: TopJackpotView[]; initialDataUpdatedAt: number }
  | Record<string, never> {
  const bootstrap = getBootstrapTopJackpots();
  if (!bootstrap) {
    return {};
  }
  return {
    initialData: bootstrap.jackpots,
    initialDataUpdatedAt: bootstrap.fetchedAt,
  };
}

export async function fetchTopJackpotsListWithCache() {
  const fresh = await fetchTopJackpotsList();
  const previous = getBootstrapTopJackpots();
  const changed =
    !previous ||
    topJackpotsFingerprint(previous.jackpots) !==
      topJackpotsFingerprint(fresh);

  if (changed || !previous) {
    persistTopJackpots({ fetchedAt: Date.now(), jackpots: fresh });
  } else {
    persistTopJackpots({ fetchedAt: Date.now(), jackpots: previous.jackpots });
  }

  return fresh;
}
