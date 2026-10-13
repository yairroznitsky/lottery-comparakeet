import "flag-icons/css/flag-icons.min.css";
import "@/index.css";
import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "@/routes";

export const createRoot = ViteReactSSG({ routes });
