import SiteSeo from "@/components/seo/SiteSeo";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useLocale, useT } from "@/i18n/LocaleContext";
import { localizePath } from "@/i18n/paths";
import StateFaqSection from "@/components/lottery/StateFaqSection";
import StateLandingSidebar from "@/components/lottery/StateLandingSidebar";
import StateQuickFacts from "@/components/lottery/StateQuickFacts";
import ResultsTable from "@/components/lottery/ResultsTable";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import PageErrorState from "@/components/wordpress/PageErrorState";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import WordPressContent from "@/components/wordpress/WordPressContent";
import {
  useStateGames,
  useUsaResults,
  useUsaStates,
} from "@/hooks/useLotteryData";
import { formatStateTitle } from "@/lib/parseDrawResults";
import { buildFaqPageJsonLd, buildItemListJsonLd } from "@/lib/seo";
import { getStateGames } from "@/lib/stateGames";
import { getStateFaqItems } from "@/lib/stateFaqs";
import {
  stateLandingIntroShort,
  stateLandingSeoDescription,
  stateLandingSeoTitle,
} from "@/lib/stateSeoCopy";
import { absoluteUrl } from "@/config/site";
import { listPopularUsaStatesExcept } from "@/constants/navPopular";
import { useWordPressSlug } from "@/hooks/useLocalWordPressContent";
import { useTheLotterPlayUrl } from "@/hooks/useTheLotterPlayUrl";
import type { DrawResultView } from "@/types/lottery";
import type { StateFaqItem } from "@/types/stateFaq";

interface StateLandingPageProps {
  stateSlug: string;
  initialGames?: string[];
  initialResults?: DrawResultView[];
  initialFaqItems?: StateFaqItem[];
}

const POPULAR_GAME_SLUGS = ["powerball", "mega-millions", "megamillions"];

function pickPopularGames(games: string[], limit = 5): string[] {
  const rank = (slug: string) => {
    const i = POPULAR_GAME_SLUGS.indexOf(slug);
    return i === -1 ? 100 + games.indexOf(slug) : i;
  };
  return [...games].sort((a, b) => rank(a) - rank(b)).slice(0, limit);
}

const StateLandingPage = ({
  stateSlug,
  initialGames,
  initialResults,
  initialFaqItems,
}: StateLandingPageProps) => {
  const locale = useLocale();
  const t = useT();
  const manifestGames = getStateGames(stateSlug);
  const gamesQuery = useStateGames(stateSlug);
  const resultsQuery = useUsaResults(stateSlug, undefined, "lastTen");
  const statesQuery = useUsaStates(true);
  const aboutQuery = useWordPressSlug(stateSlug);
  const aboutContent = aboutQuery.data;

  const games =
    gamesQuery.data ?? initialGames ?? manifestGames ?? [];
  const results =
    resultsQuery.data ?? initialResults ?? [];
  const gamesLoading = gamesQuery.isPending && games.length === 0;
  const resultsLoading = resultsQuery.isPending && results.length === 0;
  const popularGamesPreview = pickPopularGames(games);
  const primaryGamePreview = popularGamesPreview[0] ?? games[0];
  const playUrl = useTheLotterPlayUrl({
    playLink: results.find((r) => r.playLink)?.playLink ?? null,
    region: stateSlug,
    game: primaryGamePreview,
    enabled: Boolean(stateSlug && primaryGamePreview),
  });

  if (gamesQuery.isError && resultsQuery.isError) {
    return (
      <PageErrorState
        error={gamesQuery.error ?? resultsQuery.error}
        onRetry={() => {
          void gamesQuery.refetch();
          void resultsQuery.refetch();
        }}
      />
    );
  }

  if (gamesLoading && resultsLoading) {
    return <PageLoadingState />;
  }

  const title = formatStateTitle(stateSlug);
  const faqItems =
    initialFaqItems ?? getStateFaqItems(stateSlug, locale);
  const faqJsonLd = buildFaqPageJsonLd(faqItems);
  const gamesListJsonLd = buildItemListJsonLd(
    games.map((game) => ({
      name: game.replace(/-/g, " "),
      url: absoluteUrl(`/${stateSlug}/${game}`),
    })),
  );
  const jsonLd = [faqJsonLd, gamesListJsonLd].filter(Boolean);

  const pagePath = localizePath(`/${stateSlug}`, locale);
  const seoTitle = stateLandingSeoTitle(stateSlug, locale);
  const seoDescription = stateLandingSeoDescription(stateSlug, games, locale);
  const intro = stateLandingIntroShort(stateSlug, locale);
  const latestDrawDate = results[0]?.drawDate ?? null;

  const siblingStates = listPopularUsaStatesExcept(
    stateSlug,
    statesQuery.data,
  );

  const popularGames = popularGamesPreview;
  const hasAbout = Boolean(aboutContent);
  const primaryGame = primaryGamePreview;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteSeo
        title={seoTitle}
        description={seoDescription}
        path={pagePath}
        breadcrumbs={[
          { name: t("common.home"), path: "/" },
          { name: t("usaIndex.breadcrumb"), path: "/usa-lottery" },
          { name: title, path: `/${stateSlug}` },
        ]}
        jsonLd={jsonLd.length > 0 ? jsonLd : undefined}
      />
      <nav className="mb-4 text-sm text-brand-700" aria-label={t("common.breadcrumb")}>
        <LocalizedLink to="/" className="hover:text-brand-900">
          {t("common.home")}
        </LocalizedLink>
        {" · "}
        <LocalizedLink to="/usa-lottery" className="hover:text-brand-900">
          {t("usaIndex.breadcrumb")}
        </LocalizedLink>
        {" · "}
        <span className="text-brand-950">{title}</span>
      </nav>

      <header className="mb-8 border-b border-brand-200 pb-6">
        <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
          {title} Lottery Results
        </h1>
        <p className="mt-3 max-w-3xl text-brand-800">{intro}</p>
        <StateQuickFacts
          gamesCount={games.length}
          latestDrawDate={latestDrawDate}
        />
      </header>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-10">
        <div className="min-w-0 space-y-10">
          <section id="results" className="scroll-mt-28">
            <h2 className="font-display mb-4 text-xl font-semibold text-brand-950">
              Latest results
            </h2>
            {resultsLoading ? (
              <PageLoadingState />
            ) : (
              <ResultsTable rows={results} showGame />
            )}
          </section>

          {games.length > 0 ? (
            <section id="games" className="scroll-mt-28">
              <h2 className="font-display mb-3 text-xl font-semibold text-brand-950">
                Games in {title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {games.map((game) => {
                  const emphasized = POPULAR_GAME_SLUGS.includes(game);
                  return (
                    <LocalizedLink
                      key={game}
                      to={`/${stateSlug}/${game}`}
                      className={
                        emphasized
                          ? "rounded-full bg-brand-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-800"
                          : "rounded-full bg-white px-3 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50"
                      }
                    >
                      {game.replace(/-/g, " ")}
                    </LocalizedLink>
                  );
                })}
              </div>
            </section>
          ) : null}

          {hasAbout ? (
            <div id="about" className="scroll-mt-28">
              <CollapsibleSection
                title={`About ${title} lottery`}
                defaultOpen
              >
                <WordPressContent
                  content={aboutContent!}
                  variant="embedded"
                />
              </CollapsibleSection>
            </div>
          ) : null}

          {faqItems.length > 0 ? (
            <StateFaqSection stateTitle={title} items={faqItems} />
          ) : null}
        </div>

        <StateLandingSidebar
          stateSlug={stateSlug}
          stateTitle={title}
          popularGames={popularGames}
          relatedStates={siblingStates}
          showAboutLink={hasAbout}
          playHref={playUrl.href}
          playLabel={
            primaryGame
              ? playUrl.label
              : "Play at theLotter"
          }
        />
      </div>
    </article>
  );
};

export default StateLandingPage;
