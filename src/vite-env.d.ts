/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_LOTTERY_API_URL?: string;
  readonly VITE_THELOTTER_AFF_ID?: string;
  readonly VITE_THELOTTER_GEO_URL?: string;
  readonly VITE_THELOTTER_GEO_FT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly ssr?: boolean;
}
