import { Link } from "react-router-dom";
import SiteSeo from "@/components/seo/SiteSeo";
import JackpotCard from "@/components/lottery/JackpotCard";
import PageErrorState from "@/components/wordpress/PageErrorState";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import {
  useInternationalCountries,
  useTopJackpots,
} from "@/hooks/useLotteryData";
import {
  internationalHubSeoDescription,
  internationalHubSeoTitle,
} from "@/lib/intlSeoCopy";

const InternationalIndexPage = () => {
  const countriesQuery = useInternationalCountries();
  const jackpotsQuery = useTopJackpots(6);

  if (countriesQuery.isPending || jackpotsQuery.isPending) {
    return <PageLoadingState />;
  }

  if (countriesQuery.isError) {
    return (
      <PageErrorState
        error={countriesQuery.error}
        onRetry={() => {
          void countriesQuery.refetch();
        }}
      />
    );
  }

  const countries = countriesQuery.data ?? [];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteSeo
        title={internationalHubSeoTitle()}
        description={internationalHubSeoDescription()}
        path="/international-results"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "International Lottery", path: "/international-results" },
        ]}
      />
      <header className="mb-8 border-b border-brand-200 pb-6">
        <h1 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
          International Lottery Results
        </h1>
        <p className="mt-2 text-brand-800">
          Browse lotteries by country and view the latest winning numbers.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="font-display mb-4 text-xl font-semibold text-brand-950">
          Featured upcoming jackpots
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(jackpotsQuery.data ?? []).slice(0, 3).map((j) => (
            <JackpotCard key={j.id} jackpot={j} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display mb-4 text-xl font-semibold text-brand-950">
          All lotteries
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <Link
              key={country.slug}
              to={`/${country.regionSlug}/${country.gameSlug}`}
              className="flex items-center gap-3 rounded-xl border border-brand-200 bg-white p-3 shadow-sm hover:bg-brand-25"
            >
              <img
                src={country.logo}
                alt=""
                className="h-10 w-10 shrink-0 object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-brand-900">{country.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};

export default InternationalIndexPage;
