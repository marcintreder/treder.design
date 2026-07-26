# treder.design

Portfolio, writing and book of Marcin Treder.

Built with [Astro](https://astro.build), deployed on Netlify. Most of the site is
static HTML; the blog and the confidential case studies render per request.

```bash
npm install
cp .env.example .env   # then fill it in — see below
npm run dev            # http://localhost:4321
```

## How it fits together

| Route | Rendering | Source |
|---|---|---|
| `/`, `/about`, `/book`, `/portfolio`, `/404` | Prerendered at build | `src/data/*.ts` |
| `/portfolio/[slug]` | On demand | `src/data/cases.ts` (+ password gate) |
| `/blog`, `/blog/[slug]`, `/rss.xml` | On demand | Neon Postgres |
| `/admin` | On demand | Neon Postgres (password gated) |
| `/api/mcp` | On demand | MCP server for publishing |

Case studies, the book outline and the ethos cards are **content in the repo** —
they change rarely and belong in version control. Blog posts live in **Postgres**,
so publishing does not require a rebuild.

```
src/
  components/   UI pieces (header, footer, logo, case rows, post cards…)
  data/         case studies, book structure, ethos — typed, committed
  layouts/      BaseLayout: <head>, header, footer, SEO/OG tags
  lib/          db, posts, markdown, mcp, and the two auth gates
  pages/        routes
  styles/       tokens.css (design tokens) + global.css (base + utilities)
migrations/     SQL schema and the seed data for the original six posts
scripts/seed.mjs
```

### Styling

`src/styles/tokens.css` holds every colour, weight and size the design uses.
Components reference the variables, never raw hex. If a brand colour changes,
it changes in one place.

## Environment

Set these in **Netlify → Site configuration → Environment variables**, and in a
local `.env` for development. `.env` is gitignored — none of these belong in the repo.

| Variable | What it does |
|---|---|
| `DATABASE_URL` | Neon Postgres connection string (blog storage) |
| `BLOG_API_TOKEN` | Bearer token Claude presents to publish. Treat as a password. |
| `ADMIN_PASSWORD` | Password for `/admin` |
| `CASE_STUDY_PASSWORD` | Unlocks the confidential Google case studies |
| `SESSION_SECRET` | Signs the admin and case-study cookies |

Generate the secrets with `openssl rand -hex 32`.

Every gate **fails closed**: if a variable is missing, the thing it protects stays
locked rather than falling open.

## Publishing from Claude

`/api/mcp` is a [Model Context Protocol](https://modelcontextprotocol.io) server.
Add it once in claude.ai under **Settings → Connectors → Add custom connector**:

```
https://treder.design/api/mcp?k=YOUR_BLOG_API_TOKEN
```

Then, in any chat: *"publish this to my blog as a book note."*

Tools exposed: `list_posts`, `get_post`, `publish_post`, `update_post`,
`unpublish_post`, `delete_post`. Post bodies are Markdown. A published post is
live immediately — the blog reads the database on each request.

> The token in that URL **is** the credential, because MCP clients cannot always
> send custom headers. Anyone with the URL can publish. Do not share it; rotate
> it by changing `BLOG_API_TOKEN` in Netlify. The endpoint also accepts a normal
> `Authorization: Bearer <token>` header, which is preferable where supported.

Prefer a browser? `/admin` does the same things with buttons, including deletion
with a two-step confirmation.

## Database

```bash
psql "$DATABASE_URL" -f migrations/001_init.sql   # schema
DATABASE_URL="…" node scripts/seed.mjs            # original six posts, idempotent
```

## The confidential case studies

Two case studies (Google Play, Google Cloud) are marked `confidential` in
`src/data/cases.ts`. Their body is **never sent to the browser** unless the
request carries a valid unlock cookie — the check is server-side, responses are
`Cache-Control: private, no-store`, and the password is not present in any
client bundle.

## Deploying

Netlify builds from `netlify.toml` (`npm run build` → `dist`). Pull requests get
a Deploy Preview; `master` publishes to production.
