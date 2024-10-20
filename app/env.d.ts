// This is set again here to override the Deno types.
/// <reference lib="dom" />

// This isn't declared by the @types/react-dom package but exists as an export of react-dom.
declare module "react-dom/server.browser" {
  export * from "react-dom/server";
}

// Imports from deno.json must be declared here manually as tsc isn't aware of them.
// TODO: create a script to declare these modules based on deno.json with typings
declare module '@std/text';
