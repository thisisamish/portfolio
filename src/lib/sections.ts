import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { ZodType } from 'zod';
import { page, type PageEntry } from '../config/page';
import { getContent } from './content';

const components = import.meta.glob<{ default: AstroComponentFactory }>('../sections/*/*.astro', { eager: true });
const schemas = import.meta.glob<{ schema: ZodType }>('../sections/*/schema.ts', { eager: true });

const variants = new Map<string, AstroComponentFactory>();
for (const [path, mod] of Object.entries(components)) {
  const [, type, file] = path.match(/sections\/([^/]+)\/([^/]+)\.astro$/)!;
  variants.set(`${type}/${file}`, mod.default);
}

const schemaFor = new Map<string, ZodType>();
for (const [path, mod] of Object.entries(schemas)) schemaFor.set(path.match(/sections\/([^/]+)\//)![1], mod.schema);

export interface ResolvedSection {
  id: string;
  type: string;
  theme: string | undefined;
  nav: string | undefined;
  Component: AstroComponentFactory;
  content: unknown;
}

/** Turns page.ts into renderable sections, failing the build with a readable message if anything does not line up. */
export function resolveSections(entries: PageEntry[] = page): ResolvedSection[] {
  const sections = getContent().sections;
  return entries.map((e) => {
    const where = `page.ts entry ${e.type}/${e.variant}`;
    const Component = variants.get(`${e.type}/${e.variant}`);
    if (!Component) {
      const known = [...variants.keys()].filter((k) => k.startsWith(e.type + '/')).map((k) => k.split('/')[1]);
      throw new Error(`${where}: no such variant. Available for "${e.type}": ${known.join(', ') || 'none (unknown type?)'}`);
    }
    const schema = schemaFor.get(e.type);
    if (!schema) throw new Error(`${where}: src/sections/${e.type}/schema.ts is missing`);

    const key = e.content ?? e.type;
    const parsed = schema.safeParse(sections[key]);
    if (!parsed.success) {
      const issues = parsed.error.issues.map((i) => `  - sections.${key}.${i.path.join('.')}: ${i.message}`).join('\n');
      throw new Error(`${where}: content.yaml does not match the ${e.type} schema\n${issues}`);
    }
    return { id: e.id ?? e.type, type: e.type, theme: e.theme, nav: e.nav, Component, content: parsed.data };
  });
}
