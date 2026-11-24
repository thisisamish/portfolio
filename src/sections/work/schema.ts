import { z } from 'zod';

export const schema = z.object({
  kicker: z.string(),
  projects: z
    .array(z.object({ name: z.string(), description: z.string(), href: z.string().optional(), placeholder: z.boolean().default(false) }))
    .min(1),
});
export type WorkContent = z.infer<typeof schema>;
