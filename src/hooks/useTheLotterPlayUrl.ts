import { useMemo } from "react";
import { useTopJackpots } from "@/hooks/useLotteryData";
import { formatGameTitle } from "@/lib/parseDrawResults";
import { resolveTheLotterPlayUrl } from "@/lib/theLotterLinks";

interface UseTheLotterPlayUrlInput {
  playLink?: string | null;
  region?: string;
  game?: string;
  enabled?: boolean;
}

export function useTheLotterPlayUrl({
  playLink,
  region,
  game,
  enabled = true,
}: UseTheLotterPlayUrlInput) {
  const jackpotsQuery = useTopJackpots(80, enabled);
  const jackpots = jackpotsQuery.data;

  const href = useMemo(
    () =>
      resolveTheLotterPlayUrl({
        playLink,
        region,
        game,
        jackpots,
      }),
    [playLink, region, game, jackpots],
  );

  const label = game
    ? `Play ${formatGameTitle(game)} at theLotter`
    : "Play at theLotter";

  return { href, label, isLoading: jackpotsQuery.isPending && !playLink };
}
