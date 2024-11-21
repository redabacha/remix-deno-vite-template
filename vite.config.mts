import deno from "@deno/vite-plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    deno(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
  resolve: { alias: { "~/": fileURLToPath(import.meta.resolve("./app/")) } },
});
