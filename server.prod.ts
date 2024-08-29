// @remix-run/deno npm package is broken (ships ts instead of js) hence esm.sh import
import { createRequestHandlerWithStaticFiles } from "https://esm.sh/@remix-run/deno@2.11.2";

export default {
  fetch: createRequestHandlerWithStaticFiles({
    build: await import("./build/server/index.js"),
    getLoadContext: () => ({}),
    mode: "production",
    staticFiles: {
      assetsPublicPath: "/build/",
      publicDir: "./build/client",
    },
  }),
} satisfies Deno.ServeDefaultExport;
