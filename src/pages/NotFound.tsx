import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteSeo from "@/components/seo/SiteSeo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: no content for route", location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SiteSeo
        title="Page Not Found"
        description="The page you requested could not be found on Lottery Parakeet."
        path={location.pathname}
        noIndex
      />
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          404
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-brand-950">
          Page not found
        </h1>
        <p className="mt-3 text-brand-800/90">
          No page matches{" "}
          <span className="font-medium">{location.pathname}</span>.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
