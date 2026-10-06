import { Link } from "react-router-dom";
import SiteSeo, { DEFAULT_DESCRIPTION } from "@/components/seo/SiteSeo";
import JackpotCard from "@/components/lottery/JackpotCard";
import LotteryLogo from "@/components/lottery/LotteryLogo";
import PlayTicketsCta from "@/components/lottery/PlayTicketsCta";
import SectionSkeleton from "@/components/lottery/SectionSkeleton";
import BallRow from "@/components/lottery/BallRow";
import {
  useInternationalCountries,
  useTopJackpots,
  useUsaStates,
} from "@/hooks/useLotteryData";
import { parseBestOnlineLotterySitesHtml } from "@/lib/parseBestOnlineLotterySites";
import {
  regionGameFromResultsPath,
  resolveTheLotterPlayUrl,
} from "@/lib/theLotterLinks";
import { formatStateTitle } from "@/lib/parseDrawResults";
import { useWordPressSlug } from "@/hooks/useLocalWordPressContent";
import {
  getRecentPostSummaries,
  postSummaryDisplayDate,
} from "@/lib/wordpressContent";

const HomePage = () => {
  const jackpotsQuery = useTopJackpots(12);
  const statesQuery = useUsaStates();
  const countriesQuery = useInternationalCountries();

  const bestSitesQuery = useWordPressSlug("best-online-lottery-sites");
  const recentPosts = getRecentPostSummaries(6);

  const parsedBest =
    bestSitesQuery.data &&
    parseBestOnlineLotterySitesHtml(bestSitesQuery.data.contentHtml);
  const topSites = parsedBest?.comparison.slice(0, 3) ?? [];

  const jackpotCards = (jackpotsQuery.data ?? []).slice(0, 6);
  const recentDraws = (jackpotsQuery.data ?? [])
    .filter((j) => j.lastDrawResults && j.lastDrawResults.main.length > 0)
    .slice(0, 6);

  return (
    <div>
      <SiteSeo
        title="Lottery Numbers, Jackpots, and Resources"
        description={DEFAULT_DESCRIPTION}
        path="/"
      />
      <section className="hero-lottery-banner px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl bg-brand-700/80 px-6 py-10 text-center shadow-lg backdrop-blur-sm sm:px-10 sm:py-12">
            <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem]">
              Lottery Numbers, Jackpots, and Resources
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Live results, prize trackers, and trusted reviews — updated daily.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/top-jackpots"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50"
              >
                Top Jackpots
              </Link>
              <Link
                to="/international-results"
                className="rounded-md border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                International Lottery
              </Link>
              <Link
                to="/usa-lottery"
                className="rounded-md border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                USA Lottery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
        <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-700 hover:underline">
            Home
          </Link>
        </nav>
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-neutral-800 sm:text-2xl">
                Biggest upcoming jackpots
              </h2>
              <p className="mt-1 text-sm text-brand-700">
                Ranked by prize pool — updated throughout the day.
              </p>
            </div>
            <Link
              to="/top-jackpots"
              className="text-sm font-medium text-accent-600 hover:text-brand-700"
            >
              View all
            </Link>
          </div>
          {jackpotsQuery.isPending ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SectionSkeleton lines={4} />
              <SectionSkeleton lines={4} />
              <SectionSkeleton lines={4} />
            </div>
          ) : jackpotsQuery.isError ? (
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
              Jackpots could not be loaded.{" "}
              <button
                type="button"
                className="font-semibold underline"
                onClick={() => void jackpotsQuery.refetch()}
              >
                Try again
              </button>
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {jackpotCards.map((j, i) => (
                <JackpotCard
                  key={j.id}
                  jackpot={j}
                  rank={i + 1}
                  jackpots={jackpotsQuery.data}
                />
              ))}
            </div>
          )}
        </section>

        {recentDraws.length > 0 ? (
          <section>
            <div className="mb-4">
              <h2 className="font-display text-2xl font-semibold text-brand-950">
                Latest winning numbers
              </h2>
              <p className="mt-1 text-sm text-brand-700">
                Recent draws from games with the largest jackpots right now.
              </p>
            </div>
            <ul className="divide-y divide-brand-200 rounded-2xl border border-brand-200 bg-white shadow-sm">
              {recentDraws.map((row) => (
                <li
                  key={row.id}
                  className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-brand-950">{row.brand}</span>
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <BallRow balls={row.lastDrawResults!} size="sm" />
                    {row.playLink ? (
                      <PlayTicketsCta
                        href={resolveTheLotterPlayUrl({
                          playLink: row.playLink,
                          ...regionGameFromResultsPath(row.resultsPath),
                          jackpots: jackpotsQuery.data,
                        })}
                        label="Buy tickets"
                        variant="compact"
                      />
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {topSites.length > 0 ? (
          <section>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-display text-2xl font-semibold text-brand-950">
                Top-rated lottery sites
              </h2>
              <Link
                to="/best-online-lottery-sites"
                className="text-sm font-medium text-accent-600 hover:text-brand-700"
              >
                Full comparison
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {topSites.map((site) => (
                <article
                  key={site.rank}
                  className="rounded-2xl border border-brand-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-bold uppercase text-brand-600">
                    #{site.rank}
                  </p>
                  <h3 className="mt-1 font-semibold text-brand-950">{site.name}</h3>
                  <p className="mt-2 text-sm text-brand-800">{site.highlight}</p>
                  <a
                    href={site.visitUrl}
                    className="mt-3 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-800"
                  >
                    Visit site
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : bestSitesQuery.isPending ? (
          <SectionSkeleton lines={2} />
        ) : null}

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display mb-4 text-xl font-semibold text-brand-950">
              US states
            </h2>
            {statesQuery.isPending ? (
              <SectionSkeleton lines={4} />
            ) : statesQuery.isError ? (
              <p className="text-sm text-brand-700">
                <Link to="/usa-lottery" className="font-medium text-brand-600 underline">
                  Browse US lottery results
                </Link>
              </p>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {(statesQuery.data ?? []).slice(0, 12).map((state) => (
                    <Link
                      key={state}
                      to={`/${state}`}
                      className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-800 ring-1 ring-brand-200 hover:bg-brand-100"
                    >
                      {formatStateTitle(state)}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/usa-lottery"
                  className="mt-3 inline-block text-sm font-medium text-brand-600"
                >
                  All US states
                </Link>
              </>
            )}
          </div>
          <div>
            <h2 className="font-display mb-4 text-xl font-semibold text-brand-950">
              International lotteries
            </h2>
            {countriesQuery.isPending ? (
              <SectionSkeleton lines={4} />
            ) : countriesQuery.isError ? (
              <p className="text-sm text-brand-700">
                <Link
                  to="/international-results"
                  className="font-medium text-brand-600 underline"
                >
                  Browse international results
                </Link>
              </p>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2">
                  {(countriesQuery.data ?? []).slice(0, 8).map((c) => (
                    <Link
                      key={c.slug}
                      to={`/${c.regionSlug}/${c.gameSlug}`}
                      className="flex items-center gap-2 rounded-lg bg-white px-2 py-2 text-sm ring-1 ring-brand-200 hover:bg-brand-50"
                    >
                      <LotteryLogo
                        src={c.logo}
                        brand={c.name}
                        regionSlug={c.regionSlug}
                        gameSlug={c.gameSlug}
                        className="h-6 w-6 shrink-0 object-contain"
                      />
                      <span className="line-clamp-2 text-brand-800">{c.name}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/international-results"
                  className="mt-3 inline-block text-sm font-medium text-brand-600"
                >
                  Browse all countries
                </Link>
              </>
            )}
          </div>
        </section>

        {recentPosts.length > 0 ? (
          <section id="guides">
            <h2 className="font-display mb-4 text-xl font-bold uppercase tracking-wide text-neutral-800 sm:text-2xl">
              Guides &amp; articles
            </h2>
            <ul className="divide-y divide-brand-200 rounded-2xl border border-brand-200 bg-white">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/${post.slug}`}
                    className="flex flex-col gap-1 px-4 py-4 hover:bg-brand-25 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-brand-950">
                      {post.title}
                    </span>
                    <span className="text-sm text-brand-600">
                      {new Date(
                        postSummaryDisplayDate(post),
                      ).toLocaleDateString()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
