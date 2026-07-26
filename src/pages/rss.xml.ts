import type { APIRoute } from 'astro';
import { listPosts, kindLabel } from '../lib/posts';
import { renderMarkdown, autoExcerpt } from '../lib/markdown';
import { site } from '../lib/site';

/* Reads Postgres on every request so a freshly published post is in the feed
   immediately, with no rebuild. */
export const prerender = false;

/** XML text-node / attribute escaping. */
const esc = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

/** CDATA that survives a `]]>` appearing inside the payload. */
const cdata = (value: string): string => `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;

const rfc822 = (iso: string | null): string => (iso ? new Date(iso).toUTCString() : '');

export const GET: APIRoute = async () => {
  const posts = await listPosts({ limit: 50 });

  const items = posts
    .map((post) => {
      const url = new URL(`/blog/${post.slug}`, site.url).href;
      const description = post.excerpt ?? autoExcerpt(post.bodyMd);
      const pubDate = rfc822(post.publishedAt ?? post.createdAt);

      return [
        '    <item>',
        `      <title>${esc(post.title)}</title>`,
        `      <link>${esc(url)}</link>`,
        `      <guid isPermaLink="true">${esc(url)}</guid>`,
        pubDate ? `      <pubDate>${esc(pubDate)}</pubDate>` : '',
        `      <category>${esc(kindLabel(post.kind))}</category>`,
        ...post.tags.map((tag) => `      <category>${esc(tag)}</category>`),
        description ? `      <description>${esc(description)}</description>` : '',
        `      <content:encoded>${cdata(renderMarkdown(post.bodyMd))}</content:encoded>`,
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  const latest = posts[0]?.publishedAt ?? posts[0]?.createdAt ?? null;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(`${site.title} — Blog`)}</title>
    <link>${esc(`${site.url}/blog`)}</link>
    <atom:link href="${esc(`${site.url}/rss.xml`)}" rel="self" type="application/rss+xml" />
    <description>${esc(site.description)}</description>
    <language>en-us</language>
    <copyright>${esc(`Copyright ${new Date().getFullYear()} ${site.author}`)}</copyright>
    <managingEditor>${esc(site.author)}</managingEditor>
${latest ? `    <lastBuildDate>${esc(rfc822(latest))}</lastBuildDate>\n` : ''}${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
