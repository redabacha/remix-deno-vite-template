/// <reference types="vite/client" />

var Deno: typeof import("@deno/types").Deno;

declare module "react-dom/server.edge" {
  export * from "react-dom/server";
}
