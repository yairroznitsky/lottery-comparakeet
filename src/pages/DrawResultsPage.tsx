import { useMemo } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useLocale, useT } from "@/i18n/LocaleContext";
import { localizePath } from "@/i18n/paths";
import IntlGameSidebar from "@/components/lottery/IntlGameSidebar";
import LatestDrawCard from "@/components/lottery/LatestDrawCard";
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
import { useTheLotterPlayUrl } from "@/hooks/useTheLotterPlayUrl";
import SiteSeo from "@/components/seo/SiteSeo";
import { formatGameTitle, formatStateTitle } from "@/lib/parseDrawResults";
import {
  getIntlFaqItems,
  intlFaqPathsWithContent,
  loadIntlFaqItems,
} from "@/lib/intlFaqs";
import { localeFromPathname } from "@/i18n/paths";
import type { IntlFaqItem } from "@/types/intlFaq";
import { getIntlGamePaths, getIntlRegionGameEntries } from "@/lib/intlGames";
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
  useWordPressIntlGame,
  useWordPressSlug,
} from "@/hooks/useLocalWordPressContent";
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
  faqItems: IntlFaqItem[];
}

export function getDrawResultsStaticPaths() {
  return getAllGamePrerenderPaths();
}

export function getDrawResultsLastYearStaticPaths() {
  return [];
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
  const locale = localeFromPathname(pathname);
  const faqItems = isUsa
    ? []
    : await loadIntlFaqItems(region, game, locale);

  if (!import.meta.env.SSR) {
    return { rows: [], period, isUsa, faqItems };
  }

  let rows: DrawResultView[] = [];
  try {
    rows = isUsa
      ? await fetchUsaResults(region, game, period)
      : await fetchInternationalResults(region, game, period);
  } catch {
    rows = [];
  }

  return { rows, period, isUsa, faqItems };
}

const DrawResultsPage = () => {
  const locale = useLocale();
  const t = useT();
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

  const wpEnabled = Boolean(region && game && !statesPending);
  const usaWpQuery = useWordPressSlug(game, wpEnabled && isUsa);
  const intlWpQuery = useWordPressIntlGame(
    region,
    game,
    wpEnabled && !isUsa,
  );
  const wpContent = isUsa ? usaWpQuery.data : intlWpQuery.data;

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

  const rowsPreview =
    activeQuery.data ??
    (loaderData?.rows?.length ? loaderData.rows : undefined);
  const playUrl = useTheLotterPlayUrl({
    playLink: rowsPreview?.[0]?.playLink,
    region,
    game,
    enabled: Boolean(region && game),
  });

  if (!region || !game) {
    return null;
  }

  const rows = rowsPreview;
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
  const lastYearPath = localizePath(`/${region}/${game}/last-year`, locale);
  const latestPath = localizePath(`/${region}/${game}`, locale);

  const canonicalPath = gameResultsCanonicalPath(region, game, period, locale);
  const spanLabel =
    period === "lastYear"
      ? t("seo.intl.spanLastYear")
      : t("seo.intl.spanLatest");
  const seoTitle = isUsa
    ? t("seo.game.usTitle", { title, span: spanLabel })
    : intlGameSeoTitle(region, game, period, locale);
  const seoDescription = isUsa
    ? gameResultsSeoDescription(region, game, period, locale)
    : intlGameSeoDescription(region, game, period, locale);
  const parentPath = isUsa ? "/usa-lottery" : "/international-results";
  const parentName = isUsa
    ? t("drawResults.usaLottery")
    : t("drawResults.internationalLottery");
  const stateHubPath = isUsa ? `/${region}` : parentPath;
  const intlFaqItems = isUsa
    ? []
    : (loaderData?.faqItems ??
      getIntlFaqItems(region, game, locale));
  const faqJsonLd = buildFaqPageJsonLd(intlFaqItems);
  const hasAbout = Boolean(wpContent);
  const regionGameEntries = isUsa ? [] : getIntlRegionGameEntries(region);

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
        <nav className="mb-4 text-sm text-brand-700" aria-label={t("common.breadcrumb")}>
          <LocalizedLink to="/" className="hover:text-brand-900">
            {t("common.home")}
          </LocalizedLink>
          {" · "}
          <LocalizedLink to="/international-results" className="hover:text-brand-900">
            {t("drawResults.international")}
          </LocalizedLink>
          {" · "}
          <span className="text-brand-950">{title}</span>
        </nav>

        <header className="mb-8 border-b border-brand-200 pb-6">
          <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
            {title} {period === "lastYear" ? "Last Year" : "Latest"} Results
          </h1>
          <p className="mt-3 max-w-3xl text-brand-800">
            {intlGameIntroShort(region, game, locale)}
          </p>
          <StateQuickFacts
            gamesCount={resultRows.length}
            latestDrawDate={latest?.drawDate ?? null}
            countLabel={t("drawResults.drawsShown")}
            hubLabel={t("drawResults.browseIntl")}
            hubTo="/international-results"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <LocalizedLink
              to={latestPath}
              className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastTen" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
            >
              Latest 10
            </LocalizedLink>
            <LocalizedLink
              to={lastYearPath}
              className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastYear" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
            >
              Last year
            </LocalizedLink>
          </div>
        </header>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-10">
          <div className="min-w-0 space-y-10">
            <section id="results" className="scroll-mt-28">
              <h2 className="font-display mb-4 text-xl font-semibold text-brand-950">
                Latest results
              </h2>
              {latest ? (
                <LatestDrawCard
                  draw={latest}
                  playHref={playUrl.href}
                  playLabel={playUrl.label}
                  className="mb-6"
                />
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
            siblingGames={regionGameEntries}
            featuredPaths={intlFeaturedPaths}
            showAboutLink={hasAbout}
            playHref={playUrl.href}
            playLabel={playUrl.label}
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
      <nav className="mb-4 text-sm text-brand-700" aria-label={t("common.breadcrumb")}>
        <LocalizedLink to="/" className="hover:text-brand-900">
          {t("common.home")}
        </LocalizedLink>
        {" · "}
        <LocalizedLink to={isUsa ? "/usa-lottery" : "/international-results"} className="hover:text-brand-900">
          {isUsa ? t("drawResults.usLottery") : t("drawResults.international")}
        </LocalizedLink>
        {isUsa ? (
          <>
            {" · "}
            <LocalizedLink to={stateHubPath} className="hover:text-brand-900">
              {formatStateTitle(region)}
            </LocalizedLink>
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
          <LocalizedLink
            to={latestPath}
            className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastTen" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
          >
            Latest 10
          </LocalizedLink>
          <LocalizedLink
            to={lastYearPath}
            className={`rounded-full px-3 py-1 text-sm font-medium ${period === "lastYear" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`}
          >
            Last year
          </LocalizedLink>
        </div>
      </header>

      {latest ? (
        <LatestDrawCard
          as="section"
          draw={latest}
          playHref={playUrl.href}
          playLabel={playUrl.label}
          className="mb-8"
        />
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
