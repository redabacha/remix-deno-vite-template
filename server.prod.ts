// @remix-run/deno npm package is broken (ships ts instead of js) hence esm.sh import
import { createRequestHandlerWithStaticFiles } from "https://esm.sh/@remix-run/deno@2.11.2";

Deno.serve(
  {
    port: Number(Deno.env.get("PORT")) || 8000,
    onListen: ({ hostname, port }) =>
      console.log(`👉 http://${hostname}:${port}`),
  },
  createRequestHandlerWithStaticFiles({
    build: await import("./build/server/index.js"),
    getLoadContext: () => ({}),
    mode: "production",
    staticFiles: {
      assetsPublicPath: "/build/",
      publicDir: "./build/client",
    },
  }),
);
