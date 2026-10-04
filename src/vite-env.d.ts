/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_LOTTERY_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly ssr?: boolean;
}
