import { Link } from "react-router-dom";
import BallRow from "@/components/lottery/BallRow";
import LotteryLogo from "@/components/lottery/LotteryLogo";
import PlayTicketsCta from "@/components/lottery/PlayTicketsCta";
import {
  regionGameFromResultsPath,
  resolveTheLotterPlayUrl,
} from "@/lib/theLotterLinks";
import type { TopJackpotView } from "@/types/lottery";

interface JackpotCardProps {
  jackpot: TopJackpotView;
  rank?: number;
  jackpots?: TopJackpotView[] | null;
}

const formatCloseDate = (iso: string) => {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
};

const JackpotCard = ({ jackpot, rank, jackpots }: JackpotCardProps) => {
  const { region, game } = regionGameFromResultsPath(jackpot.resultsPath);
  const playHref = resolveTheLotterPlayUrl({
    playLink: jackpot.playLink,
    region,
    game,
    jackpots,
  });

  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3">
        {rank !== undefined ? (
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800 ring-1 ring-brand-200">
            {rank}
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex min-h-8 items-center">
            <LotteryLogo
              src={jackpot.logoUrl}
              brand={jackpot.brand}
              className="h-8 max-w-[140px] object-contain"
            />
          </div>
          <h3 className="line-clamp-2 text-sm font-medium leading-snug text-brand-800">
            {jackpot.brand}
          </h3>
          <p className="font-display mt-2 text-2xl font-semibold tracking-tight text-brand-700">
            {jackpot.jackpotDisplay || "—"}
          </p>
          {jackpot.nextDrawClose ? (
            <p className="mt-2 text-xs text-brand-600">
              Ticket sales close{" "}
              <time dateTime={jackpot.nextDrawClose}>
                {formatCloseDate(jackpot.nextDrawClose)}
              </time>
            </p>
          ) : null}
        </div>
      </div>
      {jackpot.lastDrawResults ? (
        <div className="mt-4 border-t border-brand-100 pt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-500">
            Last winning numbers
          </p>
          <BallRow balls={jackpot.lastDrawResults} size="sm" />
        </div>
      ) : null}
      <div className="mt-auto pt-4">
        {jackpot.playLink ? (
          <PlayTicketsCta
            href={playHref}
            label="Buy tickets"
            className="w-full"
          />
        ) : (
          <Link
            to="/top-jackpots"
            className="inline-flex w-full justify-center rounded-lg border border-brand-300 bg-brand-25 px-3 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
          >
            View all jackpots
          </Link>
        )}
      </div>
    </article>
  );
};

export default JackpotCard;
