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

/**
 * First paragraph, flattened — a fallback for listings and meta descriptions
 * when a post has no excerpt of its own.
 *
 * Cuts at a sentence end where there is one near the limit, and otherwise at a
 * word boundary. The earlier version sliced at exactly `max` characters, which
 * produced endings like "…I always liked writing Rea…".
 */
export const autoExcerpt = (md: string, max = 220): string => {
  const firstPara = md
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .find((b) => b && !b.startsWith('#') && !b.startsWith('!['));
  if (!firstPara) return '';

  const text = firstPara
    .replace(/[*_`>#]/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= max) return text;

  const window = text.slice(0, max + 1);

  // Prefer ending on a complete sentence, if one finishes in the back half.
  const sentenceEnd = Math.max(
    window.lastIndexOf('. '),
    window.lastIndexOf('! '),
    window.lastIndexOf('? ')
  );
  if (sentenceEnd > max * 0.5) return window.slice(0, sentenceEnd + 1);

  // Otherwise cut at the last whole word.
  const lastSpace = window.lastIndexOf(' ');
  const cut = lastSpace > 0 ? window.slice(0, lastSpace) : window.slice(0, max);
  return `${cut.replace(/[),.;:—-]+$/, '').trimEnd()}…`;
};
