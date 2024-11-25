// This is set again here to override the Deno types.
/// <reference lib="dom" />

// This isn't declared by the @types/react-dom package but exists as an export of react-dom.
declare module "react-dom/server.browser" {
  export * from "react-dom/server";
}

// Imports from deno.json must be declared here manually as tsc won't be aware of them.
// e.g. declare module "@std/text";
