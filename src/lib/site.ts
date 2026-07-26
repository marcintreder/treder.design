/** Site-wide constants: one place to change a URL or a piece of chrome. */

export const site = {
  title: 'Marcin Treder',
  tagline: 'Design, Product and AI',
  description:
    'Marcin Treder — Director of UX, Product & Strategy at Google Play, founding CEO of UXPin, and author of The AI Handbook for Product Design.',
  location: 'San Francisco Bay Area',
  url: 'https://treder.design',
  author: 'Marcin Treder',
} as const;

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book', href: '/book' },
] as const;

export const elsewhere = {
  substack: 'https://marcintreder.substack.com',
  linkedin: 'https://linkedin.com/in/marcintreder',
  github: 'https://github.com/marcintreder',
} as const;

/** True when `href` is the current section, including its child pages. */
export const isActive = (href: string, pathname: string): boolean =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
