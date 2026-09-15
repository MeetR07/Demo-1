import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Replace with the real domain once it's pointed at Cloudflare Pages —
// the sitemap and canonical URLs are generated from this value.
export default defineConfig({
  site: "https://www.example-photostudio.com",
  integrations: [mdx(), sitemap(), tailwind({ applyBaseStyles: false })],
});
