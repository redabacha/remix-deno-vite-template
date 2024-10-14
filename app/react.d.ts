declare module "react" {
  // @ts-types="@types/react"
  import React from "npm:react";
  // @ts-expect-error export assignment :(
  export = React;
}

declare module "react-dom" {
  // @ts-types="@types/react-dom"
  export * from "npm:react-dom";
}

declare module "react-dom/client" {
  // @ts-types="@types/react-dom/client"
  export * from "npm:react-dom/client";
}

declare module "react-dom/server.browser" {
  // @ts-types="@types/react-dom/server"
  export * from "npm:react-dom/server";
}
