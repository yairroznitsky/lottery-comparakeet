/** Shared “last refreshed” timestamp for brand comparison + review snapshots. */
export function brandContentModifiedIso(date = new Date()) {
  return date.toISOString().slice(0, 19);
}

export const COMPARISON_PAGE_SLUG = "best-online-lottery-sites";
