import { parse } from 'yaml';
import { z } from 'zod';
import { bannedWords } from '../config/guardrails';
import raw from '../content/content.yaml?raw';

const siteSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  lang: z.string().default('en'),
  navCta: z.object({ label: z.string(), href: z.string() }).optional(),
});

const fileSchema = z.object({
  site: siteSchema,
  sections: z.record(z.string(), z.unknown()),
});

export type SiteContent = z.infer<typeof siteSchema>;

let cached: z.infer<typeof fileSchema> | undefined;

/** Parses and checks content.yaml once. Throws (failing the build) on a banned word or a malformed file. */
export function getContent() {
  if (cached) return cached;

  const hits = bannedWords.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(raw));
  if (hits.length) throw new Error(`content.yaml contains banned word(s): ${hits.join(', ')} (see src/config/guardrails.ts)`);

  const result = fileSchema.safeParse(parse(raw));
  if (!result.success) throw new Error('content.yaml is malformed:\n' + z.prettifyError(result.error));
  return (cached = result.data);
}
