# NOTES

This template has been tested with Deno v2.1.0+.
[Live deployment here](https://huge-badger-89.deno.dev/) hosted on
[Deno Deploy](https://deno.com/deploy).

## Using this template

Run the following command:

```zsh
deno init --npm react-router --no-install --template redabacha/react-router-deno-template
```

And then run `deno install` in the created directory.

## Using JSR and HTTPS imports

Thanks to the [@deno/vite-plugin](https://github.com/denoland/deno-vite-plugin),
it's possible to use packages from JSR and imports from HTTPS URLs (via the
[deno.json `imports` field](https://docs.deno.com/runtime/fundamentals/modules/#managing-third-party-modules-and-libraries))
within the `app/` directory which will get included in the server and/or browser
bundles as needed.

## Using the Typescript type checker instead of Deno

Currently this template uses the Typescript type checker for files within the
app directory - only files outside the app directory will be typechecked by
Deno. This is because of the following open issues which is negatively impacting
the developer experience of using the Deno type checker for the app directory:

- https://github.com/denoland/deno/issues/26871
- https://github.com/denoland/deno/issues/26224

As a caveat of using the Typescript type checker, if you are using imports
defined in your `deno.json` within the app directory, you must declare these
imports as [seen here](./app/env.d.ts#L10) for example.

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications
using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
deno install
```

### Development

Start the development server with HMR:

```bash
deno task dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
deno task build
```

## Deployment

### Deno Deploy

Deployment can be done using the
[deployctl](https://github.com/denoland/deployctl) CLI:

```bash
deployctl deploy --entrypoint ./server.production.ts
```

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run --init -p 8000:8000 my-app
```

The containerized application can be deployed to any platform that supports
Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Deno applications, the built-in app server is
production-ready.

Make sure to deploy the output of `deno task build`

```
├── package.json
├── deno.json
├── deno.lock
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
├── server.production.ts # Entrypoint
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already
configured for a simple default starting experience. You can use whatever CSS
framework you prefer.

---

Built with ❤️ using React Router.
