import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteSeo from "@/components/seo/SiteSeo";
import PageErrorState from "@/components/wordpress/PageErrorState";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import LotteryLogo from "@/components/lottery/LotteryLogo";
import PlayTicketsCta from "@/components/lottery/PlayTicketsCta";
import { useTopJackpots } from "@/hooks/useLotteryData";
import {
  regionGameFromResultsPath,
  resolveTheLotterPlayUrl,
} from "@/lib/theLotterLinks";
type SortKey = "jackpotUsd" | "brand";

const TopJackpotsPage = () => {
  const { data, isPending, isError, error, refetch } = useTopJackpots(50);
  const [currency, setCurrency] = useState<string>("All");
  const [sortKey, setSortKey] = useState<SortKey>("jackpotUsd");
  const [sortAsc, setSortAsc] = useState(false);

  const currencies = useMemo(() => {
    const set = new Set((data ?? []).map((j) => j.currencyGroup));
    return ["All", ...Array.from(set).sort()];
  }, [data]);

  const rows = useMemo(() => {
    let list = [...(data ?? [])];
    if (currency !== "All") {
      list = list.filter((j) => j.currencyGroup === currency);
    }
    list.sort((a, b) => {
      if (sortKey === "brand") {
        return sortAsc
          ? a.brand.localeCompare(b.brand)
          : b.brand.localeCompare(a.brand);
      }
      return sortAsc
        ? a.jackpotUsd - b.jackpotUsd
        : b.jackpotUsd - a.jackpotUsd;
    });
    return list;
  }, [data, currency, sortKey, sortAsc]);

  if (isPending) {
    return <PageLoadingState />;
  }

  if (isError) {
    return (
      <PageErrorState
        error={error}
        onRetry={() => {
          void refetch();
        }}
      />
    );
  }

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteSeo
        title="Top Jackpots"
        description="See the biggest upcoming lottery jackpots worldwide, sorted by prize pool with live updates and draw dates."
        path="/top-jackpots"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Top Jackpots", path: "/top-jackpots" },
        ]}
      />
      <header className="mb-8 border-b border-brand-200 pb-6">
        <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
          Top Jackpots
        </h1>
        <p className="mt-2 max-w-2xl text-brand-800">
          Upcoming jackpots from lotteries worldwide, updated from live draw
          data.
        </p>
      </header>

      <div className="mb-4 flex flex-wrap gap-2">
        {currencies.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCurrency(c)}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              currency === c
                ? "bg-brand-600 text-white"
                : "bg-brand-100 text-brand-800 hover:bg-brand-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mb-3 flex flex-wrap gap-2 md:hidden">
        <button
          type="button"
          onClick={() => toggleSort("jackpotUsd")}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            sortKey === "jackpotUsd"
              ? "bg-brand-600 text-white"
              : "bg-brand-100 text-brand-800"
          }`}
        >
          Sort by jackpot
        </button>
        <button
          type="button"
          onClick={() => toggleSort("brand")}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            sortKey === "brand"
              ? "bg-brand-600 text-white"
              : "bg-brand-100 text-brand-800"
          }`}
        >
          Sort by lottery
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm">
        <ul className="divide-y divide-brand-200 md:hidden">
          {rows.map((row, index) => (
            <li key={row.id} className="space-y-3 px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800 ring-1 ring-brand-200">
                  {index + 1}
                </span>
                <LotteryLogo src={row.logoUrl} brand={row.brand} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Lottery
                </p>
                <p className="mt-0.5 font-medium text-brand-950">{row.brand}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Jackpot
                </p>
                <p className="font-display mt-0.5 text-xl font-semibold text-brand-900">
                  {row.jackpotDisplay}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Next close
                </p>
                <p className="mt-0.5 text-sm text-brand-800">
                  {row.nextDrawClose
                    ? new Date(row.nextDrawClose).toLocaleString()
                    : "—"}
                </p>
              </div>
              {row.playLink ? (
                <PlayTicketsCta
                  href={resolveTheLotterPlayUrl({
                    playLink: row.playLink,
                    ...regionGameFromResultsPath(row.resultsPath),
                    jackpots: data,
                  })}
                  label="Buy tickets"
                  className="w-full"
                />
              ) : null}
            </li>
          ))}
        </ul>

        <div className="hidden overflow-x-auto md:block">
          <table className="lottery-comparison-table w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brand-200 bg-brand-50/90">
                <th className="px-4 py-3 font-semibold">#</th>
                <th className="px-4 py-3 font-semibold">
                  <button type="button" onClick={() => toggleSort("brand")}>
                    Lottery
                  </button>
                </th>
                <th className="px-4 py-3 font-semibold">
                  <button type="button" onClick={() => toggleSort("jackpotUsd")}>
                    Jackpot
                  </button>
                </th>
                <th className="px-4 py-3 font-semibold">Next close</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className="border-b border-brand-100 last:border-0 hover:bg-brand-25/80"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <LotteryLogo src={row.logoUrl} brand={row.brand} />
                      <span className="font-medium text-brand-950">{row.brand}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-brand-800">
                    {row.jackpotDisplay}
                  </td>
                  <td className="px-4 py-3 text-brand-700">
                    {row.nextDrawClose
                      ? new Date(row.nextDrawClose).toLocaleString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {row.playLink ? (
                      <PlayTicketsCta
                        href={resolveTheLotterPlayUrl({
                          playLink: row.playLink,
                          ...regionGameFromResultsPath(row.resultsPath),
                          jackpots: data,
                        })}
                        label="Buy tickets"
                        variant="compact"
                      />
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-6 text-sm text-brand-700">
        <Link to="/best-online-lottery-sites" className="font-medium text-brand-600 hover:text-brand-800">
          Compare the best online lottery sites
        </Link>
      </p>
    </article>
  );
};

export default TopJackpotsPage;
