export type ResultsPeriod = "lastTen" | "lastYear";

export interface UsaStateRecord {
  state: string;
}

export interface UsaGameRecord {
  Game_Name: string;
}

export interface UsaDrawApiRecord {
  id?: number;
  game_id?: number;
  drawdate: string;
  results: string;
  multiplier?: string | null;
  jackpot?: string | null;
  state: string;
  Game_Name: string;
  nextdraw?: string | null;
  estjackpot?: string | null;
  s3_url?: string | null;
  logoURL?: string | null;
  url?: string | null;
  lastscraped?: string | null;
  retired?: number;
}

/** International by-game history rows (e.g. `/byGame/byState/...`). */
export interface InternationalDrawApiRecord {
  id?: number;
  name?: string;
  last_draw_date?: string;
  last_draw_results?: string;
  last_draw_jackpot?: string;
  next_draw_date?: string;
  next_draw_jackpot?: string;
  logo?: string;
  play_link?: string;
}

export interface InternationalCountryRecord {
  name: string;
  logo: string;
}

export interface TopJackpotApiRecord {
  id: number;
  lottery_id?: number;
  name: string;
  title: string;
  Game_Brand: string;
  Game_Name?: string;
  state?: string;
  logo?: string;
  link?: string;
  play_link?: string;
  last_draw_date?: string;
  last_draw_results?: string;
  next_draw_date?: string;
  next_draw_jackpot?: string;
  next_draw_jackpot_usd?: number;
  next_draw_close_date?: string;
  next_draw_timestamp?: string;
  content?: string;
}

export interface ParsedBalls {
  main: number[];
  bonus: number[];
}

export interface DrawResultView {
  id: string;
  drawDate: string;
  balls: ParsedBalls;
  jackpot: string | null;
  gameName: string;
  state: string;
  logoUrl: string | null;
  nextDraw: string | null;
  estimatedJackpot: string | null;
}

export interface TopJackpotView {
  id: number;
  brand: string;
  jackpotDisplay: string;
  jackpotUsd: number;
  logoUrl: string | null;
  playLink: string | null;
  nextDrawClose: string | null;
  lastDrawResults: ParsedBalls | null;
  currencyGroup: string;
  /** In-app results route when state/game are known from the API. */
  resultsPath: string;
}

export interface CountryView {
  name: string;
  logo: string;
  slug: string;
  regionSlug: string;
  gameSlug: string;
}
