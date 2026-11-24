import { defaultTheme, fonts, themes, type DeepPartial, type Tokens } from '../config/theme';

const kebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
const prefixes = { type: 't', layout: 'l', fx: 'fx' } as const;

const block = (sel: string, body: string) => (body ? `${sel}{${body}}` : '');

function sharedDecls(t: DeepPartial<Tokens>): string {
  let out = '';
  for (const [role, id] of Object.entries(t.fonts ?? {})) out += `--f-${role}:${fonts[id as keyof typeof fonts].stack};`;
  for (const group of ['type', 'layout', 'fx'] as const)
    for (const [k, v] of Object.entries(t[group] ?? {})) out += `--${prefixes[group]}-${kebab(k)}:${v};`;
  return out;
}

function paletteDecls(p: DeepPartial<Tokens['light']> | undefined, scheme: 'light' | 'dark'): string {
  if (!p || Object.keys(p).length === 0) return '';
  return Object.entries(p).map(([k, v]) => `--c-${kebab(k)}:${v};`).join('') + `color-scheme:${scheme};`;
}

/** CSS for one theme. `default` sets :root; every other theme is scoped to [data-theme-scope="name"]. */
export function themeCss(name: string, t: DeepPartial<Tokens>): string {
  const scoped = name !== 'default';
  const sel = scoped ? `[data-theme-scope="${name}"]` : '';
  const at = (root: string) => (scoped ? `${root} ${sel}` : root);
  const light = paletteDecls(t.light, 'light');
  const dark = paletteDecls(t.dark, 'dark');

  return [
    block(scoped ? sel : ':root', sharedDecls(t)),
    block(at(':root[data-mode="light"]'), light),
    light && `@media (prefers-color-scheme: light){${block(at(':root:not([data-mode="dark"])'), light)}}`,
    block(at(':root[data-mode="dark"]'), dark),
    dark && `@media (prefers-color-scheme: dark){${block(at(':root:not([data-mode="light"])'), dark)}}`,
  ].join('\n');
}

/** CSS + Google Fonts URL for the default theme and the given scoped themes. */
export function buildTheme(used: string[]) {
  const names = ['default', ...new Set(used.filter((n) => n !== 'default'))];
  const defs = names.map((n) => {
    const def = n === 'default' ? defaultTheme : themes[n];
    if (!def) throw new Error(`Unknown theme "${n}". Defined themes: default, ${Object.keys(themes).join(', ')}`);
    return [n, def] as const;
  });

  const families = new Set<string>();
  for (const [, def] of defs)
    for (const id of Object.values(def.fonts ?? {})) families.add(fonts[id as keyof typeof fonts].google);

  return {
    css: defs.map(([n, d]) => themeCss(n, d)).join('\n'),
    fontsUrl: `https://fonts.googleapis.com/css2?${[...families].map((f) => `family=${f}`).join('&')}&display=swap`,
  };
}
