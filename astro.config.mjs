// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL ?? 'https://oscarrodar.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), react(), sitemap()],
  markdown: {
    // ```mermaid blocks are left as plain code and rendered client-side (see Mermaid.astro).
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid', 'math'] },
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
