import { Welcome } from "~/welcome/welcome.tsx";
import type { Route } from "./+types/home.ts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader() {
  return {
    message: `Hello from Deno ${
      Deno.version.deno ? `v${Deno.version.deno}` : "Deploy"
    }`,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
