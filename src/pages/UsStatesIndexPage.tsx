import { Link } from "react-router-dom";
import SiteSeo from "@/components/seo/SiteSeo";
import PageErrorState from "@/components/wordpress/PageErrorState";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import WordPressContent from "@/components/wordpress/WordPressContent";
import { useUsaStates } from "@/hooks/useLotteryData";
import { formatStateTitle } from "@/lib/parseDrawResults";
import { useWordPressSlug } from "@/hooks/useLocalWordPressContent";

const UsStatesIndexPage = () => {
  const statesQuery = useUsaStates();
  const usaLotteryQuery = useWordPressSlug("usa-lottery");
  const usaLotteryContent = usaLotteryQuery.data;

  if (statesQuery.isPending) {
    return <PageLoadingState />;
  }

  if (statesQuery.isError) {
    return (
      <PageErrorState
        error={statesQuery.error}
        onRetry={() => {
          void statesQuery.refetch();
        }}
      />
    );
  }

  const states = statesQuery.data ?? [];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteSeo
        title="USA Lottery Results"
        description="Browse US state lottery results, winning numbers, and games for Powerball, Mega Millions, and local draws."
        path="/usa-lottery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "USA Lottery", path: "/usa-lottery" },
        ]}
      />
      <header className="mb-8 border-b border-brand-200 pb-6">
        <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
          USA Lottery Results
        </h1>
        <p className="mt-2 text-brand-800">
          Pick a state to view games, latest draws, and local lottery information.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {states.map((state) => (
          <Link
            key={state}
            to={`/${state}`}
            className="rounded-xl bg-white px-3 py-3 text-center text-sm font-medium text-brand-800 shadow-sm ring-1 ring-brand-200 hover:bg-brand-50"
          >
            {formatStateTitle(state)}
          </Link>
        ))}
      </div>

      {usaLotteryContent ? (
        <div className="mt-12 border-t border-brand-200 pt-10">
          <WordPressContent content={usaLotteryContent} />
        </div>
      ) : null}
    </article>
  );
};

export default UsStatesIndexPage;
