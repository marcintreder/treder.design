// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// Static by default — every marketing/portfolio page is prerendered at build
// time. Pages that need a request (the blog, which reads from Neon, and the
// password-gated case studies) opt out individually with `prerender = false`.
export default defineConfig({
  site: 'https://treder.design',
  output: 'static',
  adapter: netlify(),
  build: { inlineStylesheets: 'auto' },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
