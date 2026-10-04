/** theLotter affiliate program defaults (override via Vite env). */
export const THELOTTER_AFF_ID =
  import.meta.env.VITE_THELOTTER_AFF_ID?.trim() || "11798";

export const THELOTTER_GEO_HOME_BASE =
  import.meta.env.VITE_THELOTTER_GEO_URL?.trim() || "https://lnk.to/TLHP";

export const THELOTTER_GEO_FT =
  import.meta.env.VITE_THELOTTER_GEO_FT?.trim() || "5";

export const THELOTTER_PRODUCT_BASE = "https://www.thelotter.com/lottery-tickets";
