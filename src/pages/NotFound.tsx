import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteSeo from "@/components/seo/SiteSeo";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useT } from "@/i18n/LocaleContext";

const NotFound = () => {
  const t = useT();
  const location = useLocation();

  useEffect(() => {
    console.warn("404: no content for route", location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SiteSeo
        title={t("notFound.seoTitle")}
        description={t("notFound.seoDescription")}
        path={location.pathname}
        noIndex
      />
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          {t("common.notFound404")}
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-brand-950">
          {t("notFound.heading")}
        </h1>
        <p className="mt-3 text-brand-800/90">
          {t("notFound.body", { path: location.pathname })}
        </p>
        <LocalizedLink
          to="/"
          className="mt-6 inline-flex rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          {t("common.backToHome")}
        </LocalizedLink>
      </div>
    </div>
  );
};

export default NotFound;
