import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  ssgOptions: {
    concurrency: 3,
  },
  server: {
    host: "::",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://34.222.9.46",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
