import { Link, Navigate, useParams } from "react-router-dom";
import { useInternationalCountries } from "@/hooks/useLotteryData";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import NotFound from "@/pages/NotFound";

const InternationalResultsPage = () => {
  const { lottery } = useParams<{ lottery: string }>();
  const { data: countries, isPending } = useInternationalCountries();

  if (isPending) {
    return <PageLoadingState />;
  }

  if (!lottery) {
    return <NotFound />;
  }

  const match = countries?.find(
    (c) =>
      c.slug === lottery ||
      `${c.regionSlug}-${c.gameSlug}` === lottery ||
      c.slug.startsWith(lottery),
  );

  if (!match) {
    return (
      <article className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-brand-800">
          Could not match lottery &quot;{lottery}&quot;.{" "}
          <Link to="/international-results" className="text-brand-600 underline">
            Browse international lotteries
          </Link>
        </p>
      </article>
    );
  }

  return (
    <Navigate to={`/${match.regionSlug}/${match.gameSlug}`} replace />
  );
};

export default InternationalResultsPage;
