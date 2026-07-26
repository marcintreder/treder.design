import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

/**
 * Render post bodies to HTML.
 *
 * Content is trusted: the only way a row reaches this function is through the
 * MCP endpoint, which requires the bearer token. We therefore allow inline HTML
 * so posts can embed figures — but that also means the token is the security
 * boundary for the blog, and it should be treated like a password.
 */
export const renderMarkdown = (md: string): string => marked.parse(md, { async: false }) as string;

/** First paragraph, flattened — used when a post has no explicit excerpt. */
export const autoExcerpt = (md: string, max = 220): string => {
  const firstPara = md
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .find((b) => b && !b.startsWith('#') && !b.startsWith('!['));
  if (!firstPara) return '';
  const text = firstPara.replace(/[*_`>#]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1').trim();
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
};
