import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  isTopJackpotsListStale,
  msUntilNextJackpotDraw,
} from "@/lib/topJackpotsCache";
import {
  fetchTopJackpotsListWithCache,
  getTopJackpotsQueryDefaults,
} from "@/services/topJackpotsQuery";
import {
  fetchInternationalCountries,
  fetchInternationalResults,
  fetchUsaResults,
  fetchUsaStateGames,
  fetchUsaStates,
} from "@/services/lotteryResultsApi";
import type { ResultsPeriod } from "@/types/lottery";

export const lotteryQueryKeys = {
  states: ["lottery", "usa", "states"] as const,
  stateGames: (state: string) => ["lottery", "usa", "games", state] as const,
  usaResults: (state: string | undefined, game: string | undefined, period: ResultsPeriod) =>
    ["lottery", "usa", "results", state ?? "", game ?? "", period] as const,
  countries: ["lottery", "international", "countries"] as const,
  intlResults: (state: string | undefined, game: string | undefined, period: ResultsPeriod) =>
    ["lottery", "intl", "results", state ?? "", game ?? "", period] as const,
  topJackpots: ["lottery", "topJackpots"] as const,
};

export function useUsaStates(enabled = true) {
  return useQuery({
    queryKey: lotteryQueryKeys.states,
    queryFn: fetchUsaStates,
    staleTime: 60 * 60 * 1000,
    retry: 1,
    enabled,
  });
}

export function useStateGames(state: string) {
  return useQuery({
    queryKey: lotteryQueryKeys.stateGames(state),
    queryFn: () => fetchUsaStateGames(state),
    enabled: Boolean(state),
  });
}

export function useUsaResults(
  state: string | undefined,
  game: string | undefined,
  period: ResultsPeriod,
  enabled = true,
) {
  return useQuery({
    queryKey: lotteryQueryKeys.usaResults(state, game, period),
    queryFn: () => fetchUsaResults(state, game, period),
    enabled,
  });
}

export function useInternationalCountries(enabled = true) {
  return useQuery({
    queryKey: lotteryQueryKeys.countries,
    queryFn: fetchInternationalCountries,
    staleTime: 60 * 60 * 1000,
    enabled,
  });
}

export function useInternationalResults(
  state: string | undefined,
  game: string | undefined,
  period: ResultsPeriod,
  enabled = true,
) {
  return useQuery({
    queryKey: lotteryQueryKeys.intlResults(state, game, period),
    queryFn: () => fetchInternationalResults(state, game, period),
    enabled,
  });
}

export function useTopJackpots(count?: number, enabled = true) {
  const bootstrap = useMemo(
    () => getTopJackpotsQueryDefaults(),
    [],
  );

  const query = useQuery({
    queryKey: lotteryQueryKeys.topJackpots,
    queryFn: fetchTopJackpotsListWithCache,
    staleTime: Number.POSITIVE_INFINITY,
    enabled,
    refetchInterval: (q) => {
      const list = q.state.data;
      if (!list?.length) {
        return false;
      }
      if (isTopJackpotsListStale(list)) {
        return 60_000;
      }
      return msUntilNextJackpotDraw(list);
    },
    refetchOnWindowFocus: (q) => {
      const list = q.state.data;
      return Boolean(list?.length && isTopJackpotsListStale(list));
    },
    ...bootstrap,
  });

  useEffect(() => {
    if (!enabled || !query.data?.length || query.isFetching) {
      return;
    }
    if (isTopJackpotsListStale(query.data)) {
      void query.refetch();
    }
  }, [enabled, query.data, query.isFetching, query.refetch]);

  const data = useMemo(
    () =>
      count != null ? query.data?.slice(0, count) : query.data,
    [query.data, count],
  );

  return { ...query, data };
}
