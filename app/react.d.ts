declare module "react" {
  // @ts-types="@types/react"
  import React from "npm:react";
  // @ts-expect-error export assignment :(
  export = React;
}
