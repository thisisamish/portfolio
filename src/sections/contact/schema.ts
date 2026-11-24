import { z } from 'zod';

export const schema = z.object({
  heading: z.string(),
  links: z.array(z.object({ label: z.string(), href: z.string() })),
});
export type ContactContent = z.infer<typeof schema>;
