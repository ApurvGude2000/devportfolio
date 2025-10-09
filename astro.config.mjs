// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // TODO: Replace `<your-github-username>` with your actual GitHub username.
  site: "https://apurvgude2000.github.io",
  base: "/devportfolio",

  vite: {
    plugins: [tailwindcss()],
  },
});