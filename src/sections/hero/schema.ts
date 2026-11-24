import { z } from 'zod';

export const schema = z.object({
  headline: z.string(),
  subline: z.string(),
  cta: z.object({ label: z.string(), href: z.string() }),
  hint: z.string().optional(),
  touchHint: z.string().optional(),
});
export type HeroContent = z.infer<typeof schema>;
