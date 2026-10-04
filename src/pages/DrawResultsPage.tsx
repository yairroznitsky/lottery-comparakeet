import { useMemo } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import BallRow from "@/components/lottery/BallRow";
import IntlGameSidebar from "@/components/lottery/IntlGameSidebar";
import StateFaqSection from "@/components/lottery/StateFaqSection";
import StateQuickFacts from "@/components/lottery/StateQuickFacts";
import ResultsTable from "@/components/lottery/ResultsTable";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import PageErrorState from "@/components/wordpress/PageErrorState";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import {
  useInternationalResults,
  useUsaResults,
  useUsaStates,
} from "@/hooks/useLotteryData";
import SiteSeo from "@/components/seo/SiteSeo";
import {
  formatDrawDate,
  formatGameTitle,
  formatStateTitle,
} from "@/lib/parseDrawResults";
import { getIntlFaqItems, intlFaqPathsWithContent } from "@/lib/intlFaqs";
import { getIntlGamePaths, getIntlRegionGames } from "@/lib/intlGames";
import {
  intlGameIntroShort,
  intlGameSeoDescription,
  intlGameSeoTitle,
} from "@/lib/intlSeoCopy";
import {
  getAllGamePrerenderPaths,
  getUsaStatePrerenderSlugs,
} from "@/lib/prerenderRoutes";
import { buildFaqPageJsonLd } from "@/lib/seo";
import {
  gameResultsCanonicalPath,
  gameResultsSeoDescription,
} from "@/lib/stateSeoCopy";
import {
  getWordPressIntlGameOptional,
  getWordPressOptional,
} from "@/lib/wordpressContent";
import type { DrawResultView, ResultsPeriod } from "@/types/lottery";
import {
  fetchInternationalResults,
  fetchUsaResults,
} from "@/services/lotteryResultsApi";
import WordPressContent from "@/components/wordpress/WordPressContent";

export interface DrawResultsLoaderData {
  rows: DrawResultView[];
  period: ResultsPeriod;
  isUsa: boolean;
}

export function getDrawResultsStaticPaths() {
  return getAllGamePrerenderPaths();
}

export function getDrawResultsLastYearStaticPaths() {
  return getAllGamePrerenderPaths();
}

export async function drawResultsLoader({
  params,
  request,
}: {
  params: { region?: string; game?: string };
  request: Request;
}): Promise<DrawResultsLoaderData | null> {
  const region = params.region;
  const game = params.game;
  if (!region || !game) {
    return null;
  }
  const pathname = new URL(request.url).pathname;
  const period: ResultsPeriod = pathname.endsWith("/last-year")
    ? "lastYear"
    : "lastTen";

  const isUsa =
    getUsaStatePrerenderSlugs().includes(region) || region === "us";

  if (!import.meta.env.SSR) {
    return { rows: [], period, isUsa };
  }

  let rows: DrawResultView[] = [];
  try {
    rows = isUsa
      ? await fetchUsaResults(region, game, period)
      : await fetchInternationalResults(region, game, period);
  } catch {
    rows = [];
  }

  return { rows, period, isUsa };
}

const DrawResultsPage = () => {
  const { region, game } = useParams<{
    region: string;
    game: string;
  }>();
  const location = useLocation();
  const loaderData = useLoaderData() as DrawResultsLoaderData | null | undefined;
  const period: ResultsPeriod =
    loaderData?.period ??
    (location.pathname.endsWith("/last-year") ? "lastYear" : "lastTen");

  const { data: states, isPending: statesPending } = useUsaStates();
  const isUsa =
    region !== undefined &&
    (states?.includes(region) ||
      region === "us" ||
      loaderData?.isUsa === true);

  const usaQuery = useUsaResults(region, game, period, Boolean(isUsa && region && game));
  const intlQuery = useInternationalResults(
    region,
    game,
    period,
    Boolean(!statesPending && region && game && !isUsa),
  );

  const activeQuery = isUsa ? usaQuery : intlQuery;

  const wpContent =
    region && game && !statesPending
      ? isUsa
        ? getWordPressOptional(game)
        : getWordPressIntlGameOptional(region, game)
      : null;

  const intlFeaturedPaths = useMemo(() => {
    if (!region || !game) {
      return [];
    }
    const current = `${region}/${game}`;
    const fromFaq = intlFaqPathsWithContent().filter((p) => p !== current);
    if (fromFaq.length >= 3) {
      return fromFaq.slice(0, 5);
    }
    return getIntlGamePaths().filter((p) => p !== current).slice(0, 5);
  }, [region, game]);

  if (!region || !game) {
    return null;
  }

  const rows =
    activeQuery.data ??
    (loaderData?.rows?.length ? loaderData.rows : undefined);
  const loading =
    (statesPending || activeQuery.isPending) &&
    (!rows || rows.length === 0);

  if (loading) {
    return <PageLoadingState />;
  }

  if (activeQuery.isError && !rows?.length) {
    return (
      <PageErrorState
        error={activeQuery.error}
        onRetry={() => {
          void activeQuery.refetch();
        }}
      />
    );
  }

  const resultRows = rows ?? [];
  const latest = resultRows[0];
  const title = `${formatStateTitle(region)} ${formatGameTitle(game)}`;
  const lastYearPath = `/${region}/${game}/last-year`;
  const latestPath = `/${region}/${game}`;

  const canonicalPath = gameResultsCanonicalPath(region, game, period);
  const seoTitle = isUsa
    ? `${title} ${period === "lastYear" ? "Last Year" : "Latest"} Results`
    : intlGameSeoTitle(region, game, period);
  const seoDescription = isUsa
    ? gameResultsSeoDescription(region, game, period)
    : intlGameSeoDescription(region, game, period);
  const parentPath = isUsa ? "/usa-lottery" : "/international-results";
  const parentName = isUsa ? "USA Lottery" : "International Lottery";
  const stateHubPath = isUsa ? `/${region}` : parentPath;
  const intlFaqItems = isUsa ? [] : getIntlFaqItems(region, game);
  const faqJsonLd = buildFaqPageJsonLd(intlFaqItems);
  const hasAbout = Boolean(wpContent);
  const regionGames = isUsa ? [] : getIntlRegionGames(region);

  if (!isUsa) {
    return (
      <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SiteSeo
          title={seoTitle}
          description={seoDescription}
          path={canonicalPath}
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: parentName, path: parentPath },
            { name: title, path: `/${region}/${game}` },
          ]}
          jsonLd={faqJsonLd ? [faqJsonLd] : undefined}
        />
        <nav className="mb-4 text-sm text-brand-700" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-900">
            Home
          </Link>
          {" · "}
          <Link to="/international-results" className="hover:text-brand-900">
            International
          </Link>
          {" · "}
          <span className="text-brand-950">{title}</span>
        </nav>

        <header className="mb-8 border-b border-brand-200 pb-6">
          <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
            {title} {period === "lastYear" ? "Last Year" : "Latest"} Results
          </h1>
          <p className="mt-3 max-w-3xl text-brand-800">
            {intlGameIntroShort(region, game)}
          </p>
          <StateQuickFacts
            gamesCount={resultRows.length}
            latestDrawDate={latest?.drawDate ?? null}
            countLabel="Draws shown"
            hubLabel="Browse international lotteries"
            hubTo="/international-results"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to={latestPath}
              className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastTen" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
            >
              Latest 10
            </Link>
            <Link
              to={lastYearPath}
              className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastYear" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
            >
              Last year
            </Link>
          </div>
        </header>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-10">
          <div className="min-w-0 space-y-10">
            <section id="results" className="scroll-mt-28">
              <h2 className="font-display mb-4 text-xl font-semibold text-brand-950">
                Latest results
              </h2>
              {latest ? (
                <div className="mb-6 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
                  <p className="text-sm font-medium uppercase text-brand-600">
                    Latest draw · {formatDrawDate(latest.drawDate)}
                  </p>
                  <div className="mt-4">
                    <BallRow balls={latest.balls} size="lg" />
                  </div>
                  {latest.jackpot ? (
                    <p className="mt-4 text-lg font-semibold text-brand-900">
                      Jackpot: {latest.jackpot}
                    </p>
                  ) : null}
                  {latest.nextDraw ? (
                    <p className="mt-1 text-sm text-brand-700">
                      Next draw: {new Date(latest.nextDraw).toLocaleString()}
                    </p>
                  ) : null}
                </div>
              ) : null}
              <ResultsTable rows={resultRows} />
            </section>

            {hasAbout ? (
              <div id="about" className="scroll-mt-28">
                <CollapsibleSection
                  title={`About ${title}`}
                  defaultOpen
                >
                  <WordPressContent
                    content={wpContent!}
                    variant="embedded"
                  />
                </CollapsibleSection>
              </div>
            ) : null}

            {intlFaqItems.length > 0 ? (
              <StateFaqSection stateTitle={title} items={intlFaqItems} />
            ) : null}
          </div>

          <IntlGameSidebar
            regionSlug={region}
            gameSlug={game}
            siblingGames={regionGames}
            featuredPaths={intlFeaturedPaths}
            showAboutLink={hasAbout}
          />
        </div>
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteSeo
        title={seoTitle}
        description={seoDescription}
        path={canonicalPath}
        canonical={undefined}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: parentName, path: parentPath },
          ...(isUsa
            ? [{ name: formatStateTitle(region), path: stateHubPath }]
            : []),
          { name: title, path: `/${region}/${game}` },
        ]}
      />
      <nav className="mb-4 text-sm text-brand-700" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-brand-900">
          Home
        </Link>
        {" · "}
        <Link to={isUsa ? "/usa-lottery" : "/international-results"} className="hover:text-brand-900">
          {isUsa ? "US Lottery" : "International"}
        </Link>
        {isUsa ? (
          <>
            {" · "}
            <Link to={stateHubPath} className="hover:text-brand-900">
              {formatStateTitle(region)}
            </Link>
          </>
        ) : null}
        {" · "}
        <span className="text-brand-950">{title}</span>
      </nav>

      <header className="mb-8 border-b border-brand-200 pb-6">
        <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
          {title} {period === "lastYear" ? "Last Year" : "Latest"} Results
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to={latestPath}
            className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastTen" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
          >
            Latest 10
          </Link>
          <Link
            to={lastYearPath}
            className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastYear" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
          >
            Last year
          </Link>
        </div>
      </header>

      {latest ? (
        <section className="mb-8 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase text-brand-600">
            Latest draw · {formatDrawDate(latest.drawDate)}
          </p>
          <div className="mt-4">
            <BallRow balls={latest.balls} size="lg" />
          </div>
          {latest.jackpot ? (
            <p className="mt-4 text-lg font-semibold text-brand-900">
              Jackpot: {latest.jackpot}
            </p>
          ) : null}
          {latest.nextDraw ? (
            <p className="mt-1 text-sm text-brand-700">
              Next draw: {new Date(latest.nextDraw).toLocaleString()}
            </p>
          ) : null}
        </section>
      ) : null}

      <ResultsTable rows={resultRows} />

      {wpContent ? (
        <div className="mt-12 border-t border-brand-200 pt-10">
          <WordPressContent content={wpContent} />
        </div>
      ) : null}
    </article>
  );
};

export default DrawResultsPage;
