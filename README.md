# lottery-comparakeet

Static site for lottery results and comparisons (React + Vite + vite-react-ssg + Tailwind).

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (see `.nvmrc` for the team default: 22)

## Setup

```bash
npm ci
npm run dev
```

Optionally copy `.env.example` to `.env` if you need custom URLs or affiliate IDs (defaults are fine for local dev).

Open [http://localhost:5173](http://localhost:5173). Lottery API calls go to `/api`, which Vite proxies to the backend (see `vite.config.ts`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run typecheck` | TypeScript check only |
| `npm run build` | Sitemap, typecheck, static site generation → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run sync:state-content` | Refresh state FAQs + games JSON from APIs |
| `npm run sync:intl-content` | Refresh international FAQs + games |
| `npm run sync:brand-reviews` | Refresh brand review content from WordPress |

Sync scripts accept env vars documented in `.env.example` (`LOTTERY_API_BASE`, `WORDPRESS_API_BASE`, etc.).

## Environment

Copy `.env.example` to `.env` and uncomment values as needed. Vite exposes only variables prefixed with `VITE_`.
