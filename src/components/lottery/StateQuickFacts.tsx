import { Link } from "react-router-dom";
import { formatDrawDate } from "@/lib/parseDrawResults";

interface StateQuickFactsProps {
  gamesCount: number;
  latestDrawDate: string | null;
  hubLabel?: string;
  hubTo?: string;
  countLabel?: string;
}

const StateQuickFacts = ({
  gamesCount,
  latestDrawDate,
  hubLabel = "Browse all states",
  hubTo = "/usa-lottery",
  countLabel = "Games tracked",
}: StateQuickFactsProps) => {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-brand-200 bg-brand-50/80 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {countLabel}
        </p>
        <p className="mt-1 font-display text-xl font-semibold text-brand-950">
          {gamesCount > 0 ? gamesCount : "—"}
        </p>
      </div>
      <div className="rounded-xl border border-brand-200 bg-brand-50/80 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Latest draw
        </p>
        <p className="mt-1 text-sm font-medium text-brand-950">
          {latestDrawDate ? formatDrawDate(latestDrawDate) : "Updating…"}
        </p>
      </div>
      <div className="rounded-xl border border-brand-200 bg-brand-50/80 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Lottery hub
        </p>
        <Link
          to={hubTo}
          className="mt-1 inline-block text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline"
        >
          {hubLabel}
        </Link>
      </div>
    </div>
  );
};

export default StateQuickFacts;
