import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resolveBrandReviewRedirect } from "@/lib/brandReviewRedirects";

/** Client-side permanent URL moves (production 301s live in vercel.json). */
const BrandReviewRedirect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const target = resolveBrandReviewRedirect(pathname);
    if (target && target !== pathname.replace(/\/+$/, "")) {
      navigate(`${target}${window.location.search}${window.location.hash}`, {
        replace: true,
      });
    }
  }, [pathname, navigate]);

  return null;
};

export default BrandReviewRedirect;
