import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://goldengrowth.agency",
  integrations: [tailwind(), icon(), lottie()],
  styles: ["./src/styles/index.css"],
});
