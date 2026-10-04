import type { RouteRecord } from "vite-react-ssg";
import AppLayout from "@/components/layout/AppLayout";
import DrawResultsPage, {
  drawResultsLoader,
  getDrawResultsStaticPaths,
  getDrawResultsLastYearStaticPaths,
} from "@/pages/DrawResultsPage";
import HomePage from "@/pages/HomePage";
import InternationalIndexPage from "@/pages/InternationalIndexPage";
import InternationalResultsPage from "@/pages/InternationalResultsPage";
import SlugOrStatePage, {
  getSlugOrStateStaticPaths,
  slugOrStateLoader,
} from "@/pages/SlugOrStatePage";
import TopJackpotsPage from "@/pages/TopJackpotsPage";
import UsStatesIndexPage from "@/pages/UsStatesIndexPage";
import WordPressPage, {
  getWordPressCatchAllStaticPaths,
} from "@/pages/WordPressPage";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <AppLayout />,
    entry: "src/components/layout/AppLayout.tsx",
    children: [
      {
        index: true,
        Component: HomePage,
        entry: "src/pages/HomePage.tsx",
      },
      {
        path: "best-online-lottery-sites",
        Component: WordPressPage,
        entry: "src/pages/WordPressPage.tsx",
      },
      {
        path: "top-jackpots",
        Component: TopJackpotsPage,
        entry: "src/pages/TopJackpotsPage.tsx",
      },
      {
        path: "usa-lottery",
        Component: UsStatesIndexPage,
        entry: "src/pages/UsStatesIndexPage.tsx",
      },
      {
        path: "international-results",
        Component: InternationalIndexPage,
        entry: "src/pages/InternationalIndexPage.tsx",
      },
      {
        path: "international-results/:lottery",
        Component: InternationalResultsPage,
        entry: "src/pages/InternationalResultsPage.tsx",
      },
      {
        path: ":region/:game/last-year",
        Component: DrawResultsPage,
        entry: "src/pages/DrawResultsPage.tsx",
        loader: drawResultsLoader,
        getStaticPaths: getDrawResultsLastYearStaticPaths,
      },
      {
        path: ":region/:game",
        Component: DrawResultsPage,
        entry: "src/pages/DrawResultsPage.tsx",
        loader: drawResultsLoader,
        getStaticPaths: getDrawResultsStaticPaths,
      },
      {
        path: ":slug",
        Component: SlugOrStatePage,
        entry: "src/pages/SlugOrStatePage.tsx",
        loader: slugOrStateLoader,
        getStaticPaths: getSlugOrStateStaticPaths,
      },
      {
        path: "*",
        Component: WordPressPage,
        entry: "src/pages/WordPressPage.tsx",
        getStaticPaths: getWordPressCatchAllStaticPaths,
      },
    ],
  },
];
