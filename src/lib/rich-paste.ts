/**
 * Rich text → Markdown, for the post editor's paste handler.
 *
 * The author drafts in Google Docs. Google's clipboard HTML is dirty in
 * specific, well-known ways — the whole document arrives wrapped in a
 * `<b style="font-weight:normal">`, emphasis is carried on `<span>` styles
 * rather than `<b>`/`<em>`, and images are `googleusercontent.com` URLs that
 * stop resolving before long. Turndown alone would turn the first into a
 * document-sized `**bold**` run, drop the second entirely, and embed the third
 * as if it were a real asset. Everything here exists to fix one of those.
 *
 * Word and ordinary web pages come through the same path; the Word-specific
 * bits are limited to its `mso-list` bullet noise.
 *
 * Kept free of DOM APIs of its own so it runs unchanged in the browser and
 * under `node` in a test — Turndown supplies the parser at both ends.
 */
import TurndownService from 'turndown';
// @ts-expect-error — turndown-plugin-gfm ships no type declarations.
import { strikethrough, tables } from 'turndown-plugin-gfm';

export interface ConvertedPaste {
  /** Markdown ready to drop at the caret. */
  markdown: string;
  /**
   * How many images referenced a source that will not survive — Google's
   * temporary CDN, a `data:`/`blob:` URI, a local file. Each one is left in the
   * text as a `REPLACE-ME-image-N` placeholder rather than a broken embed.
   */
  volatileImages: number;
}

/** The href written into the body for an image that has to be re-uploaded. */
const PLACEHOLDER = (index: number) => `REPLACE-ME-image-${index}`;

type El = HTMLElement;

/** Read one declaration out of an inline `style` attribute. */
const styleOf = (node: El, property: string): string => {
  const raw = typeof node.getAttribute === 'function' ? node.getAttribute('style') : null;
  if (!raw) return '';
  const found = new RegExp(`(?:^|;)\\s*${property}\\s*:\\s*([^;]*)`, 'i').exec(raw);
  return found ? found[1].trim().toLowerCase() : '';
};

const isBoldWeight = (weight: string): boolean => {
  if (!weight) return false;
  if (weight === 'bold' || weight === 'bolder') return true;
  const numeric = Number.parseInt(weight, 10);
  return Number.isFinite(numeric) && numeric >= 600;
};

const isBoldSpan = (node: El): boolean =>
  node.nodeName === 'SPAN' && isBoldWeight(styleOf(node, 'font-weight'));

const isItalicSpan = (node: El): boolean =>
  node.nodeName === 'SPAN' && styleOf(node, 'font-style') === 'italic';

const isStruckSpan = (node: El): boolean =>
  node.nodeName === 'SPAN' && /line-through/.test(styleOf(node, 'text-decoration'));

/**
 * Google's outer `<b style="font-weight:normal">` (and the `docs-internal-guid`
 * wrapper it usually carries) is markup, not emphasis. Word emits the same
 * shape occasionally. Treat it as transparent.
 */
const isFakeBold = (node: El): boolean => {
  if (node.nodeName !== 'B' && node.nodeName !== 'STRONG') return false;
  const weight = styleOf(node, 'font-weight');
  const id = typeof node.getAttribute === 'function' ? node.getAttribute('id') || '' : '';
  if (id.startsWith('docs-internal-guid')) return true;
  return weight !== '' && !isBoldWeight(weight);
};

const ancestors = function* (node: El): Generator<El> {
  let current = node.parentNode as El | null;
  while (current && current.nodeName !== 'BODY' && current.nodeName !== '#document') {
    yield current;
    current = current.parentNode as El | null;
  }
};

const insideHeading = (node: El): boolean => {
  for (const parent of ancestors(node)) if (/^H[1-6]$/.test(parent.nodeName)) return true;
  return false;
};

/** Already inside emphasis of the same kind? Then adding markers again nests them. */
const alreadyBold = (node: El): boolean => {
  for (const parent of ancestors(node)) {
    if (isBoldSpan(parent)) return true;
    if ((parent.nodeName === 'B' || parent.nodeName === 'STRONG') && !isFakeBold(parent)) return true;
  }
  return false;
};

const alreadyItalic = (node: El): boolean => {
  for (const parent of ancestors(node)) {
    if (isItalicSpan(parent)) return true;
    if (parent.nodeName === 'I' || parent.nodeName === 'EM') return true;
  }
  return false;
};

/**
 * Google routes some links through `google.com/url?q=…`. Those work, but they
 * are noise in the source and they die with the redirector, so unwrap them.
 */
const cleanHref = (href: string): string => {
  const trimmed = href.trim();
  const redirect = /^https?:\/\/(?:www\.)?google\.com\/url\?(.+)$/i.exec(trimmed);
  if (redirect) {
    const target = /(?:^|&)(?:q|url)=([^&]+)/.exec(redirect[1]);
    if (target) {
      try {
        return decodeURIComponent(target[1]);
      } catch {
        return target[1];
      }
    }
  }
  return trimmed;
};

/** Sources that will not still resolve when the post goes out. */
const isVolatileSource = (src: string): boolean =>
  src === '' ||
  /^(?:data|blob|file|cid):/i.test(src) ||
  /^https?:\/\/[^/]*googleusercontent\.com\//i.test(src) ||
  /^https?:\/\/[^/]*\.google(?:usercontent)?\.com\/.*\/copy\//i.test(src);

/** Word marks the literal bullet glyph it printed into the HTML. It is noise. */
const isWordBulletGlyph = (node: El): boolean =>
  node.nodeName === 'SPAN' && /ignore/i.test(styleOf(node, 'mso-list'));

/** Word's list paragraphs carry `mso-list: l0 level2 lfo1` instead of `<ul>`. */
const wordListLevel = (node: El): number => {
  if (node.nodeName !== 'P') return 0;
  const mso = styleOf(node, 'mso-list');
  if (!mso || /ignore/i.test(mso)) return 0;
  const level = /level(\d+)/.exec(mso);
  return level ? Math.max(1, Number.parseInt(level[1], 10)) : 1;
};

const wrap = (content: string, marker: string): string =>
  content.trim() ? marker + content + marker : content;

/**
 * Convert clipboard HTML to Markdown.
 *
 * Pure: no DOM of the host page is touched, nothing is inserted anywhere. The
 * caller decides what to do with the result and with `volatileImages`.
 */
export function htmlToMarkdown(html: string): ConvertedPaste {
  let volatileImages = 0;

  const service = new TurndownService({
    headingStyle: 'atx',
    hr: '---',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
    strongDelimiter: '**',
    linkStyle: 'inlined',
  });

  service.use([strikethrough, tables]);

  // Style sheets and scripts ride along in Google's and Word's clipboard HTML;
  // without this their text content lands in the post body.
  service.remove(['style', 'script', 'head', 'meta', 'link', 'title', 'noscript']);

  service.addRule('fakeBold', {
    filter: (node) => isFakeBold(node),
    replacement: (content) => content,
  });

  service.addRule('wordBulletGlyph', {
    filter: (node) => isWordBulletGlyph(node),
    replacement: () => '',
  });

  service.addRule('styledSpan', {
    filter: (node) => isBoldSpan(node) || isItalicSpan(node) || isStruckSpan(node),
    replacement: (content, node) => {
      if (!content.trim()) return content;
      let out = content;
      if (isStruckSpan(node)) out = wrap(out, '~~');
      if (isItalicSpan(node) && !alreadyItalic(node)) out = wrap(out, '_');
      if (isBoldSpan(node) && !alreadyBold(node)) out = wrap(out, '**');
      return out;
    },
  });

  // Added after `styledSpan` so it wins: Turndown gives the most recently
  // added rule precedence. A heading already reads as a heading, and the
  // emphasis Google styles inside it is not the author's — `## **Title**`.
  service.addRule('emphasisInHeading', {
    filter: (node) =>
      insideHeading(node) &&
      (node.nodeName === 'B' ||
        node.nodeName === 'STRONG' ||
        node.nodeName === 'I' ||
        node.nodeName === 'EM' ||
        node.nodeName === 'SPAN'),
    replacement: (content) => content,
  });

  service.addRule('wordListParagraph', {
    filter: (node) => wordListLevel(node) > 0,
    replacement: (content, node) => {
      const body = content.trim().replace(/^[•·▪o§-]\s*/, '');
      if (!body) return '';
      const indent = '    '.repeat(wordListLevel(node) - 1);
      return `\n${indent}- ${body}\n`;
    },
  });

  // Turndown pads bullets to four columns (`-   item`) and Google wraps every
  // item's text in a `<p>`, which opens a blank line between items. Neither is
  // wrong, both are unlike everything else in this blog's source.
  service.addRule('listItem', {
    filter: 'li',
    replacement: (content, node, options) => {
      const body = content
        .replace(/^\n+/, '')
        .replace(/\n+$/, '')
        .replace(/\n{2,}(?=\s*[-*+\d])/g, '\n') // sub-lists, not new paragraphs
        .replace(/\n/g, '\n  ');
      if (!body) return '';

      const parent = node.parentNode as El | null;
      let prefix = `${options.bulletListMarker} `;
      if (parent && parent.nodeName === 'OL') {
        const start = Number.parseInt(parent.getAttribute('start') || '1', 10);
        const index = Array.prototype.indexOf.call(parent.children, node);
        prefix = `${(Number.isFinite(start) ? start : 1) + Math.max(index, 0)}. `;
      }
      return `${prefix}${body}\n`;
    },
  });

  // The GFM plugin emits a single tilde; every other Markdown tool here reads
  // the doubled form.
  service.addRule('strikethrough', {
    filter: ['del', 's'],
    replacement: (content) => wrap(content, '~~'),
  });

  service.addRule('anchor', {
    filter: (node) => node.nodeName === 'A' && !!node.getAttribute('href'),
    replacement: (content, node) => {
      const href = cleanHref(node.getAttribute('href') || '');
      const text = content.trim();
      if (!href || href.startsWith('#')) return content;
      if (!text) return '';
      return `[${text}](${href})`;
    },
  });

  service.addRule('image', {
    filter: 'img',
    replacement: (_content, node) => {
      const src = (node.getAttribute('src') || '').trim();
      const alt = (node.getAttribute('alt') || '').trim();
      if (!isVolatileSource(src)) return `![${alt}](${src})`;
      volatileImages += 1;
      return `![${alt || `image ${volatileImages}`}](${PLACEHOLDER(volatileImages)})`;
    },
  });

  const markdown = tidy(service.turndown(html));
  return { markdown, volatileImages };
}

/**
 * Whitespace only. Smart quotes and dashes are left exactly as Google wrote
 * them — that is correct typography and the author wants to keep it.
 */
function tidy(markdown: string): string {
  return markdown
    .replace(/[\u00a0\u2007\u202f]/g, ' ') // non-breaking spaces are invisible landmines
    .replace(/[\u200b\ufeff]/g, '') // zero width space, from Docs and from web pages
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Exported for the paste handler's warning copy, and for tests. */
export const PLACEHOLDER_PREFIX = 'REPLACE-ME-image-';
