import BallRow from "@/components/lottery/BallRow";
import { formatDrawDate } from "@/lib/parseDrawResults";
import type { DrawResultView } from "@/types/lottery";

interface ResultsTableProps {
  rows: DrawResultView[];
  showGame?: boolean;
}

const ResultsTable = ({ rows, showGame = false }: ResultsTableProps) => {
  if (rows.length === 0) {
    return (
      <p className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-6 text-sm text-brand-800">
        No draw results available yet.
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-brand-200 bg-brand-50/90">
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                Draw date
              </th>
              {showGame ? (
                <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                  Game
                </th>
              ) : null}
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                Winning numbers
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                Jackpot
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-brand-100 last:border-0 hover:bg-brand-25/80"
              >
                <td className="whitespace-nowrap px-4 py-3 text-brand-800">
                  {formatDrawDate(row.drawDate)}
                </td>
                {showGame ? (
                  <td className="px-4 py-3 font-medium capitalize text-brand-950">
                    {row.gameName.replace(/-/g, " ")}
                  </td>
                ) : null}
                <td className="px-4 py-3">
                  <BallRow balls={row.balls} size="sm" />
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-brand-800">
                  {row.jackpot ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;
