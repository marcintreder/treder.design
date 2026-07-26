// @ts-check
import { defineConfig, envField } from 'astro/config';
import netlify from '@astrojs/netlify';

// Static by default — every marketing/portfolio page is prerendered at build
// time. Pages that need a request (the blog, which reads from Neon, and the
// password-gated case studies) opt out individually with `prerender = false`.
export default defineConfig({
  site: 'https://treder.design',
  output: 'static',
  adapter: netlify(),
  build: { inlineStylesheets: 'auto' },

  // Declared as server-side secrets so Astro reads them from the runtime
  // environment instead of letting Vite inline the literal values into the
  // built server bundle. That keeps the deploy artifacts free of credentials,
  // lets Netlify's "contains secret values" scanning pass, and means rotating
  // a secret takes effect without a rebuild.
  //
  // `optional: true` on every field is deliberate: a missing variable must
  // leave the feature it guards locked, not crash the whole site at boot.
  env: {
    schema: {
      DATABASE_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      BLOG_API_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      ADMIN_PASSWORD: envField.string({ context: 'server', access: 'secret', optional: true }),
      CASE_STUDY_PASSWORD: envField.string({ context: 'server', access: 'secret', optional: true }),
      SESSION_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
