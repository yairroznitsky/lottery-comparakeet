const SSR_LOTTERY_API = "http://34.222.9.46/api";

/** Same-origin lottery results API (proxied to http://34.222.9.46 in dev via Vite). */
export function getLotteryApiBaseUrl(): string {
  const configured = import.meta.env.VITE_LOTTERY_API_URL?.replace(/\/$/, "");
  if (configured) {
    return configured;
  }
  if (import.meta.env.SSR) {
    return SSR_LOTTERY_API;
  }
  return "/api";
}
