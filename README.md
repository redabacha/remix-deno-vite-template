# NOTES

This is a fork from the
[remix-run/templates/classic-remix-compiler/deno](https://github.com/remix-run/remix/tree/6edd56211c5b256e2e78f781695fdb39a037463e/templates/classic-remix-compiler/deno)
template which modernizes it to use Remix v2 with Vite. I have opted to use
[Yarn v4](https://yarnpkg.com/) instead of npm for this template but this is
ultimately a personal preference - any package manager should work fine here.

There are two servers:

- `server.dev.ts`: used for development, it pairs the vite dev server in
  middleware mode with express (so HMR works out of the box)
- `server.prod.ts`: used in production, it uses `Deno.serve` directly for
  maximum performance

Additionally this template uses a React 18.3 canary as older React versions do
not allow you to import `renderToReadableStream` from `react-dom/server` in
Node.js environments, see
[this issue](https://github.com/facebook/react/issues/26906) for more details.
React 18.3 solves this by introducing the `react-dom/server.edge` export which
includes `renderToReadableStream`.

This template has been tested with Deno v1.42.1 and relies on the unstable
`byonm` flag to function which will come enabled by default in Deno 2,
https://github.com/denoland/deno/issues/23151.

# Remix + Deno

Welcome to the Deno template for Remix! 🦕

For more, check out the [Remix docs](https://remix.run/docs).

## Managing dependencies

- ✅ You should use `yarn` to add packages
  ```sh
  yarn add react
  ```
  ```ts
  import { useState } from "react";
  ```
- ✅ You may use inlined URL imports, JSR imports or NPM imports for Deno
  modules.
  ```ts
  import { copy } from "https://deno.land/std@0.138.0/streams/conversion.ts";
  ```

## Development

From your terminal:

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Production

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

## Deployment

Building the Deno app (`yarn build`) results in two outputs:

- `build/` (server bundle)
- `public/build/` (browser bundle)

You can deploy these bundles to any host that runs Deno, but here we'll focus on
deploying to [Deno Deploy](https://deno.com/deploy).

### Setting up Deno Deploy

1. [Sign up](https://dash.deno.com/signin) for Deno Deploy.

2. [Create a new Deno Deploy project](https://dash.deno.com/new) for this app.

3. Replace `<your deno deploy project>` in the `deploy` script in `package.json`
   with your Deno Deploy project name:

```json filename=package.json
{
  "scripts": {
    "deploy": "deployctl deploy --project=<your deno deploy project> --include=build,server-prod.ts ./server.prod.ts"
  }
}
```

4. [Create a personal access token](https://dash.deno.com/account) for the Deno
   Deploy API and export it as `DENO_DEPLOY_TOKEN`:

```sh
export DENO_DEPLOY_TOKEN=<your Deno Deploy API token>
```

You may want to add this to your `rc` file (e.g. `.bashrc` or `.zshrc`) to make
it available for new terminal sessions, but make sure you don't commit this
token into `git`. If you want to use this token in GitHub Actions, set it as a
GitHub secret.

5. Install the Deno Deploy CLI,
   [`deployctl`](https://github.com/denoland/deployctl):

```sh
deno install -Arf jsr:@deno/deployctl
```

6. If you have previously installed the Deno Deploy CLI, you should update it to
   the latest version:

```sh
deployctl upgrade
```

### Deploying to Deno Deploy

After you've set up Deno Deploy, run:

```sh
yarn deploy
```
