/**
 * The page, top to bottom. Reorder lines to reorder sections.
 *
 * type     folder in src/sections/ (hero, experience, work, ...)
 * variant  file in that folder (lit-room, credits, ...). Drop a new .astro file
 *          next to the others and name it here; no other registration needed.
 *          All variants of a type share one content shape (see its schema.ts).
 * theme    optional name from theme.ts. Omit it to use the default theme.
 * nav      optional label; sections with one appear in the top navigation.
 * id       optional anchor; defaults to `type`.
 * content  optional key in content.yaml; defaults to `type`. Lets two sections
 *          of one type show different content.
 */
export interface PageEntry {
  type: string;
  variant: string;
  theme?: string;
  nav?: string;
  id?: string;
  content?: string;
}

export const page: PageEntry[] = [
  { type: 'hero', variant: 'lit-room' },
  { type: 'experience', variant: 'credits', nav: 'Experience' },
  { type: 'work', variant: 'list', nav: 'Work' },
  { type: 'about', variant: 'editorial', nav: 'About' },
  { type: 'writing', variant: 'coming-soon', nav: 'Writing' },
  { type: 'contact', variant: 'big-talk', nav: 'Contact' },
];
