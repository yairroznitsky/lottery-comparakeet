import BallRow from "@/components/lottery/BallRow";
import PlayTicketsCta from "@/components/lottery/PlayTicketsCta";
import { formatDateTimeDisplay, formatDrawDate } from "@/lib/formatDateTime";
import type { DrawResultView } from "@/types/lottery";

interface LatestDrawCardProps {
  draw: DrawResultView;
  playHref: string;
  playLabel: string;
  as?: "div" | "section";
  className?: string;
}

const LatestDrawCard = ({
  draw,
  playHref,
  playLabel,
  as: Tag = "div",
  className = "",
}: LatestDrawCardProps) => {
  return (
    <Tag
      className={`rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-4 shadow-sm sm:p-6 ${className}`.trim()}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            Latest draw
          </p>
          <time
            dateTime={draw.drawDate}
            className="block text-sm font-medium text-brand-900 sm:text-base"
          >
            {formatDrawDate(draw.drawDate)}
          </time>
        </div>
        {draw.jackpot ? (
          <div className="shrink-0 text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Jackpot
            </p>
            <p className="font-display text-lg font-semibold text-brand-900 sm:text-xl">
              {draw.jackpot}
            </p>
          </div>
        ) : null}
      </div>
      <div className="mt-3 border-t border-brand-100 pt-3 sm:mt-4 sm:pt-4">
        <BallRow balls={draw.balls} size="responsive" />
      </div>
      {draw.nextDraw ? (
        <p className="mt-3 text-xs text-brand-700 sm:text-sm">
          Next draw:{" "}
          <time dateTime={draw.nextDraw}>
            {formatDateTimeDisplay(draw.nextDraw)}
          </time>
        </p>
      ) : null}
      <div className="mt-4 sm:mt-5">
        <PlayTicketsCta href={playHref} label={playLabel} />
      </div>
    </Tag>
  );
};

export default LatestDrawCard;
