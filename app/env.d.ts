// This is to avoid needing to specify the @deno-types directive for every react and react-dom import.
declare module "react" {
  // @deno-types="@types/react"
  import React from "npm:react";
  // @ts-expect-error deno export assignment deprecation
  export = React;
}
declare module "react-dom" {
  // @deno-types="@types/react-dom"
  export * from "npm:react-dom";
}
