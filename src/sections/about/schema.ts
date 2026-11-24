import { z } from 'zod';

export const schema = z.object({
  kicker: z.string(),
  draft: z.boolean().default(false),
  portrait: z.object({ src: z.string().optional(), alt: z.string(), caption: z.string().optional() }),
  lead: z.string(),
  paragraphs: z.array(z.string()),
  filmsLabel: z.string(),
  films: z.array(z.object({ title: z.string(), year: z.string() })),
});
export type AboutContent = z.infer<typeof schema>;
