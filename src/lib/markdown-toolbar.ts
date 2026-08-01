/**
 * The Markdown formatting toolbar's brain.
 *
 * Deliberately DOM-free: every button is a pure function from a textarea's
 * state — the text plus where the selection sits — to a description of the edit
 * to make. That keeps the interesting behaviour (toggling, prefix replacement,
 * where the caret lands) testable in plain node, and it keeps the component's
 * inline script down to "ask for an edit, splice it in, restore the selection".
 *
 * The edit is expressed as a *range replacement* rather than a whole new value
 * on purpose: the component hands `[from, to]` to `setSelectionRange` and lets
 * `document.execCommand('insertText')` write the text, which is the only way to
 * change a textarea and leave the browser's own undo stack intact.
 */

export interface Selection {
  value: string;
  /** Selection anchor, as `textarea.selectionStart`. */
  start: number;
  /** Selection focus, as `textarea.selectionEnd`. Equal to `start` for a caret. */
  end: number;
}

export interface Edit {
  /** Replace `value.slice(from, to)` … */
  from: number;
  to: number;
  /** … with this. */
  text: string;
  /** Where the selection should sit afterwards, in the *new* value. */
  selStart: number;
  selEnd: number;
}

export type ToolbarAction =
  | 'bold'
  | 'italic'
  | 'code'
  | 'h2'
  | 'h3'
  | 'quote'
  | 'ul'
  | 'ol'
  | 'link'
  | 'codeblock'
  | 'hr';

/** Apply an edit. Used by the tests; the component goes through execCommand. */
export const applyEdit = (state: Selection, edit: Edit): Selection => ({
  value: state.value.slice(0, edit.from) + edit.text + state.value.slice(edit.to),
  start: edit.selStart,
  end: edit.selEnd,
});

/** A no-op edit, for the cases where there is nothing sensible to do. */
const keep = (s: Selection): Edit => ({
  from: s.start,
  to: s.end,
  text: s.value.slice(s.start, s.end),
  selStart: s.start,
  selEnd: s.end,
});

/* -------------------------------------------------------------- inline wraps */

/**
 * Wrap, unwrap or open a pair of inline markers.
 *
 * Trailing spaces are pushed outside the markers first: `**hello **` is not
 * bold in any Markdown flavour, and double-clicking a word routinely selects
 * the space after it.
 */
const wrapInline = (s: Selection, marker: string): Edit => {
  const { value } = s;
  const m = marker.length;

  let start = s.start;
  let end = s.end;
  while (start < end && /\s/.test(value[start])) start += 1;
  while (end > start && /\s/.test(value[end - 1])) end -= 1;

  const selected = value.slice(start, end);

  // Already wrapped, markers inside the selection — `**hello**` → `hello`.
  if (selected.length >= 2 * m && selected.startsWith(marker) && selected.endsWith(marker)) {
    const inner = selected.slice(m, -m);
    return { from: start, to: end, text: inner, selStart: start, selEnd: start + inner.length };
  }

  // Already wrapped, markers just outside it — the user selected `hello` in
  // `**hello**`. Same intent, so take them off rather than nesting.
  if (
    selected &&
    start >= m &&
    value.slice(start - m, start) === marker &&
    value.slice(end, end + m) === marker
  ) {
    return {
      from: start - m,
      to: end + m,
      text: selected,
      selStart: start - m,
      selEnd: start - m + selected.length,
    };
  }

  // No selection: open the pair and sit the caret in the middle.
  if (!selected) {
    return {
      from: start,
      to: end,
      text: marker + marker,
      selStart: start + m,
      selEnd: start + m,
    };
  }

  return {
    from: start,
    to: end,
    text: marker + selected + marker,
    selStart: start + m,
    selEnd: start + m + selected.length,
  };
};

/* --------------------------------------------------------------- line blocks */

/**
 * Every block prefix this toolbar knows how to write. A line carries at most
 * one of them, which is what makes H2-over-H3 a replacement instead of a
 * stack — and what stops six presses of Quote from producing `> > > > > >`.
 */
const BLOCK_PREFIX = /^([ \t]*)((?:#{1,6} +)|(?:> ?)|(?:[-*+] +)|(?:\d+\. +))?/;

const LINE_KINDS = {
  h2: { test: /^[ \t]*## +/, write: () => '## ' },
  h3: { test: /^[ \t]*### +/, write: () => '### ' },
  quote: { test: /^[ \t]*> ?/, write: () => '> ' },
  ul: { test: /^[ \t]*[-*+] +/, write: () => '- ' },
  ol: { test: /^[ \t]*\d+\. +/, write: (n: number) => `${n}. ` },
} as const;

type LineKind = keyof typeof LINE_KINDS;

/** Expand a selection to whole lines. */
const lineRange = (value: string, start: number, end: number): [number, number] => {
  const from = value.lastIndexOf('\n', start - 1) + 1;
  // A selection that ends exactly on a line break should not drag in the line
  // after it — that is the line the user stopped short of.
  const searchFrom = end > start && value[end - 1] === '\n' ? end - 1 : end;
  const to = value.indexOf('\n', searchFrom);
  return [from, to === -1 ? value.length : to];
};

const applyLineKind = (s: Selection, kind: LineKind): Edit => {
  const { value } = s;
  const [from, to] = lineRange(value, s.start, s.end);
  const lines = value.slice(from, to).split('\n');
  const { test, write } = LINE_KINDS[kind];

  // Blank lines inside a multi-line selection are the gaps *between*
  // paragraphs — bulleting them would be nonsense. A selection that is nothing
  // but blank lines is the caret sitting on an empty line, which is exactly
  // where someone starts a list.
  const allBlank = lines.every((l) => l.trim() === '');
  const touched = lines.map((l) => allBlank || l.trim() !== '');

  // Toggle off only when every line the press applies to already has this
  // exact prefix. Otherwise it is a conversion, and the old prefix goes.
  const off = lines.filter((_, i) => touched[i]).every((l) => test.test(l));

  let n = 0;
  const rewritten = lines.map((line, i) => {
    if (!touched[i]) return line;
    const match = line.match(BLOCK_PREFIX);
    const indent = match?.[1] ?? '';
    const bare = line.slice(match?.[0].length ?? 0);
    if (off) return indent + bare;
    n += 1;
    return indent + write(n) + bare;
  });

  const text = rewritten.join('\n');

  // A caret keeps its place in the line it was on; a real selection ends up
  // spanning the whole block, so the next line button can be pressed straight
  // away without re-selecting.
  if (s.start === s.end) {
    let lineStart = from;
    let index = 0;
    while (index < lines.length && lineStart + lines[index].length < s.start) {
      lineStart += lines[index].length + 1;
      index += 1;
    }
    let newLineStart = from;
    for (let i = 0; i < index; i += 1) newLineStart += rewritten[i].length + 1;

    const offsetInLine = s.start - lineStart;
    const delta = rewritten[index].length - lines[index].length;
    const caret = Math.min(
      newLineStart + rewritten[index].length,
      Math.max(newLineStart, newLineStart + offsetInLine + delta)
    );
    return { from, to, text, selStart: caret, selEnd: caret };
  }

  return { from, to, text, selStart: from, selEnd: from + text.length };
};

/* ---------------------------------------------------------------------- link */

/**
 * Does this selection read as a destination rather than as link text?
 *
 * A heuristic, and it only decides which of the two empty slots the caret
 * lands in — a wrong guess costs one click, never any text.
 */
export const looksLikeUrl = (text: string): boolean => {
  const t = text.trim();
  if (!t || /\s/.test(t)) return false;
  if (/^(?:[a-z][\w+.-]*:)?\/\/\S+$/i.test(t)) return true; // https://…, //…
  if (/^(?:mailto:|tel:)\S+$/i.test(t)) return true;
  if (/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(t)) return true; // bare address
  if (/^\/\S*$/.test(t)) return true; // site-root path
  return /^(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,24}(?:[/?#]\S*)?$/i.test(t);
};

const makeLink = (s: Selection): Edit => {
  const { value } = s;

  let start = s.start;
  let end = s.end;
  while (start < end && /\s/.test(value[start])) start += 1;
  while (end > start && /\s/.test(value[end - 1])) end -= 1;
  const selected = value.slice(start, end);

  // Selected an existing link — take it apart rather than nesting one inside
  // the other.
  const existing = selected.match(/^\[([^\]]*)\]\(([^)\s]*)\)$/);
  if (existing) {
    const inner = existing[1] || existing[2];
    return { from: start, to: end, text: inner, selStart: start, selEnd: start + inner.length };
  }

  // A URL is the half the user already has, so the caret goes to the text.
  if (selected && looksLikeUrl(selected)) {
    const text = `[](${selected})`;
    return { from: start, to: end, text, selStart: start + 1, selEnd: start + 1 };
  }

  // Words: they become the label, and the caret waits in the empty URL slot.
  if (selected) {
    const text = `[${selected}]()`;
    const caret = start + selected.length + 3;
    return { from: start, to: end, text, selStart: caret, selEnd: caret };
  }

  // Nothing selected: both slots are empty, so start at the beginning.
  return { from: start, to: end, text: '[]()', selStart: start + 1, selEnd: start + 1 };
};

/* --------------------------------------------------------------- own-line blocks */

/**
 * Blank lines around a block-level insert, adding only the ones that are
 * actually missing so dropping a rule mid-document does not rewrap it. Same
 * rule the image uploader in PostForm uses.
 */
const blockPad = (value: string, from: number, to: number) => {
  const before = value.slice(0, from);
  const after = value.slice(to);
  return {
    lead: before === '' || before.endsWith('\n\n') ? '' : before.endsWith('\n') ? '\n' : '\n\n',
    trail: after === '' || after.startsWith('\n\n') ? '' : after.startsWith('\n') ? '\n' : '\n\n',
  };
};

const FENCE = '```';

const makeCodeBlock = (s: Selection): Edit => {
  const { value, start, end } = s;
  const selected = value.slice(start, end);

  // Already fenced — unwrap.
  const fenced = selected.match(/^```[^\n]*\n([\s\S]*?)\n?```$/);
  if (fenced) {
    const inner = fenced[1];
    return { from: start, to: end, text: inner, selStart: start, selEnd: start + inner.length };
  }

  const { lead, trail } = blockPad(value, start, end);
  const text = `${lead}${FENCE}\n${selected}\n${FENCE}${trail}`;
  const innerStart = start + lead.length + FENCE.length + 1;
  return {
    from: start,
    to: end,
    text,
    selStart: innerStart,
    selEnd: innerStart + selected.length,
  };
};

const makeRule = (s: Selection): Edit => {
  // A rule never eats a selection; it lands after it.
  const at = s.end;
  const { lead, trail } = blockPad(s.value, at, at);
  const text = `${lead}---${trail}`;
  const caret = at + text.length;
  return { from: at, to: at, text, selStart: caret, selEnd: caret };
};

/* -------------------------------------------------------------------- public */

/**
 * What a toolbar button (or its keyboard shortcut) should do to the field.
 * Never throws and never loses text: the worst case is the no-op `keep`.
 */
export const runAction = (action: ToolbarAction, state: Selection): Edit => {
  const s: Selection = {
    value: state.value,
    start: Math.min(state.start, state.end),
    end: Math.max(state.start, state.end),
  };

  switch (action) {
    case 'bold':
      return wrapInline(s, '**');
    case 'italic':
      return wrapInline(s, '_');
    case 'code':
      return wrapInline(s, '`');
    case 'h2':
    case 'h3':
    case 'quote':
    case 'ul':
    case 'ol':
      return applyLineKind(s, action);
    case 'link':
      return makeLink(s);
    case 'codeblock':
      return makeCodeBlock(s);
    case 'hr':
      return makeRule(s);
    default:
      return keep(s);
  }
};

/** The bar, in order. Kept here so the markup and the script cannot drift. */
export const TOOLBAR_BUTTONS: {
  action: ToolbarAction;
  label: string;
  glyph: string;
  hint?: string;
}[] = [
  { action: 'bold', label: 'Bold', glyph: 'B', hint: '⌘B' },
  { action: 'italic', label: 'Italic', glyph: 'I', hint: '⌘I' },
  { action: 'h2', label: 'Heading 2', glyph: 'H2' },
  { action: 'h3', label: 'Heading 3', glyph: 'H3' },
  { action: 'link', label: 'Link', glyph: 'Link', hint: '⌘K' },
  { action: 'ul', label: 'Bulleted list', glyph: '•' },
  { action: 'ol', label: 'Numbered list', glyph: '1.' },
  { action: 'quote', label: 'Blockquote', glyph: '>' },
  { action: 'code', label: 'Inline code', glyph: '`' },
  { action: 'codeblock', label: 'Code block', glyph: '```' },
  { action: 'hr', label: 'Horizontal rule', glyph: '---' },
];

/** Cmd/Ctrl shortcuts. Only these three — nothing else is captured. */
export const SHORTCUTS: Record<string, ToolbarAction> = {
  b: 'bold',
  i: 'italic',
  k: 'link',
};
