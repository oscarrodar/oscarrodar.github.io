// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your real domain once it's connected.
const SITE_URL = process.env.SITE_URL ?? 'https://oscarrodar.github.io';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), react(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
