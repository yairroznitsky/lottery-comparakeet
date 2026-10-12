import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resolveLegacyPathRedirect } from "@/lib/legacyPathRedirects";

/** Client-side permanent URL moves (production 301s live in vercel.json). */
const LegacyPathRedirect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const target = resolveLegacyPathRedirect(pathname);
    if (target && target !== pathname.replace(/\/+$/, "")) {
      navigate(`${target}${window.location.search}${window.location.hash}`, {
        replace: true,
      });
    }
  }, [pathname, navigate]);

  return null;
};

export default LegacyPathRedirect;
