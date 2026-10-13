import SiteSeo from "@/components/seo/SiteSeo";
import { useLocale, useT } from "@/i18n/LocaleContext";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { localizePath } from "@/i18n/paths";
import PageErrorState from "@/components/wordpress/PageErrorState";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import { useUsaStates } from "@/hooks/useLotteryData";
import { formatStateTitle } from "@/lib/parseDrawResults";

const UsStatesIndexPage = () => {
  const t = useT();
  const locale = useLocale();
  const statesQuery = useUsaStates();

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
        title={t("usaIndex.seoTitle")}
        description={t("usaIndex.seoDescription")}
        path={localizePath("/usa-lottery", locale)}
        breadcrumbs={[
          { name: t("common.home"), path: "/" },
          { name: t("usaIndex.breadcrumb"), path: "/usa-lottery" },
        ]}
      />
      <header className="mb-8 border-b border-brand-200 pb-6">
        <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
          {t("usaIndex.seoTitle")}
        </h1>
        <p className="mt-2 text-brand-800">
          Pick a state to view games, latest draws, and local lottery information.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {states.map((state) => (
          <LocalizedLink
            key={state}
            to={`/${state}`}
            className="rounded-xl bg-white px-3 py-3 text-center text-sm font-medium text-brand-800 shadow-sm ring-1 ring-brand-200 hover:bg-brand-50"
          >
            {formatStateTitle(state)}
          </LocalizedLink>
        ))}
      </div>
    </article>
  );
};

export default UsStatesIndexPage;
