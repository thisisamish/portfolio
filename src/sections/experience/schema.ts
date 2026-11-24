import { z } from 'zod';

export const schema = z.object({
  kicker: z.string(),
  draft: z.boolean().default(false),
  credits: z.array(z.object({ verb: z.string(), text: z.string() })).min(1),
});
export type ExperienceContent = z.infer<typeof schema>;
