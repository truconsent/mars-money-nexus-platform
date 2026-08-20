import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    // @truconsent/consent-notice is a local `file:` link (../truKIT-NPM) for
    // local SDK development — Vite's dep optimizer can't reliably pre-bundle
    // a linked package's dist output, so exclude it and let it load from
    // source-built dist/ directly on every change.
    exclude: ["@truconsent/consent-notice"],
  },
}));
