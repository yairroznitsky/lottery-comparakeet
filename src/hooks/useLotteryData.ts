import { useQuery } from "@tanstack/react-query";
import {
  fetchInternationalCountries,
  fetchInternationalResults,
  fetchTopJackpots,
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
  topJackpots: (count: number) => ["lottery", "topJackpots", count] as const,
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

export function useTopJackpots(count: number, enabled = true) {
  return useQuery({
    queryKey: lotteryQueryKeys.topJackpots(count),
    queryFn: () => fetchTopJackpots(count),
    staleTime: 5 * 60 * 1000,
    enabled,
  });
}
