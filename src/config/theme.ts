/**
 * The design system. Every visual decision lives here and nowhere else.
 *
 * - `fonts`   registry of font families (one entry per family you might use).
 * - `themes`  a full `default` theme plus any number of named overrides.
 *             An override lists only what it changes; the rest is inherited.
 *
 * Assign a theme to a section in `page.ts` (`theme: 'diwali'`). That section
 * (and nothing else) gets the overrides. Sections read CSS variables only, so
 * they never need to know which theme they are wearing.
 */

export type FontId = keyof typeof fonts;

export const fonts = {
  'big-shoulders': {
    stack: '"Big Shoulders Display", "Arial Narrow", Impact, sans-serif',
    google: 'Big+Shoulders+Display:wght@700;900',
  },
  geist: {
    stack: '"Geist", system-ui, -apple-system, "Segoe UI", sans-serif',
    google: 'Geist:wght@400;500;600',
  },
  'geist-mono': {
    stack: '"Geist Mono", ui-monospace, Menlo, monospace',
    google: 'Geist+Mono:wght@400;500',
  },
  'rozha-one': {
    stack: '"Rozha One", Georgia, serif',
    google: 'Rozha+One',
  },
} as const;

export interface Palette {
  bg: string;
  bg2: string;
  ink: string;
  muted: string;
  /** the "unlit" colour of big display text */
  base: string;
  /** the "lit" colour of big display text */
  lamp: string;
  accent: string;
  /** text on top of accent-coloured buttons */
  btnFg: string;
  line: string;
  halo: string;
  /** portrait placeholder gradient */
  phA: string;
  phB: string;
}

export interface Tokens {
  fonts: { display: FontId; body: FontId; mono: FontId };
  type: {
    displayWeight: string;
    displayTransform: string;
    displayTracking: string;
    displayLeading: string;
    sizeHero: string;
    sizeVerb: string;
    sizeSectionTitle: string;
    sizeContact: string;
    sizeBody: string;
    leadingBody: string;
  };
  layout: {
    maxWidth: string;
    gutter: string;
    radius: string;
    navHeight: string;
  };
  fx: {
    lampRadius: string;
    haloRadius: string;
    /** lowest brightness of a credit line that is out of the spotlight (0 to 1) */
    creditFloor: string;
  };
  light: Palette;
  dark: Palette;
}

export type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

export const defaultTheme: Tokens = {
  fonts: { display: 'big-shoulders', body: 'geist', mono: 'geist-mono' },
  type: {
    displayWeight: '900',
    displayTransform: 'uppercase',
    displayTracking: '-0.005em',
    displayLeading: '0.9',
    sizeHero: 'clamp(3.2rem, 12.5vw, 12rem)',
    sizeVerb: 'clamp(2.6rem, 8.5vw, 7rem)',
    sizeSectionTitle: 'clamp(2.4rem, 6vw, 4.4rem)',
    sizeContact: 'clamp(3rem, 11vw, 9rem)',
    sizeBody: '17px',
    leadingBody: '1.65',
  },
  layout: { maxWidth: '1240px', gutter: 'max(20px, env(safe-area-inset-left, 0px))', radius: '4px', navHeight: '70px' },
  fx: { lampRadius: '300px', haloRadius: '520px', creditFloor: '0.2' },
  light: {
    bg: '#EEECE5',
    bg2: '#E6E3DA',
    ink: '#16130E',
    muted: '#615C51',
    base: '#8E8676',
    lamp: '#16130E',
    accent: '#A85A00',
    btnFg: '#FFF8EC',
    line: '#CCC7B9',
    halo: 'rgba(217, 142, 4, 0.14)',
    phA: '#2A241B',
    phB: '#C9A56A',
  },
  dark: {
    bg: '#0B0907',
    bg2: '#12100C',
    ink: '#EFE6D6',
    muted: '#A09584',
    base: '#7A6E5D',
    lamp: '#FFD79A',
    accent: '#F5A93A',
    btnFg: '#1A1209',
    line: '#2A241C',
    halo: 'rgba(245, 169, 58, 0.15)',
    phA: '#15110C',
    phB: '#B98A45',
  },
};

/** Named overrides. Unused themes cost nothing: their CSS and fonts are only emitted when `page.ts` uses them. */
export const themes: Record<string, DeepPartial<Tokens>> = {
  // Example of a festive "frankenstein" section: its own display font and warmer colours.
  diwali: {
    fonts: { display: 'rozha-one' },
    type: { displayWeight: '400', displayTransform: 'none', displayTracking: '0', displayLeading: '1' },
    light: { accent: '#B3261E', base: '#A8794A', lamp: '#3A0F0B', halo: 'rgba(214, 120, 20, 0.2)' },
    dark: { bg: '#14070A', bg2: '#1C0A0E', accent: '#FFB02E', base: '#8A5A3A', lamp: '#FFE2A8', halo: 'rgba(255, 150, 40, 0.22)' },
  },
};
