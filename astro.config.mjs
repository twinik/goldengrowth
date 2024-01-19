import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [tailwind(), icon(), lottie()],
});
