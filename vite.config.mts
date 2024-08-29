import { vitePlugin as remix } from "@remix-run/dev";
import process from "node:process";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  ...(process.env.NODE_ENV === "production" && {
    define: { "process.env.NODE_ENV": JSON.stringify("production") },
    ssr: { noExternal: true },
  }),
});
