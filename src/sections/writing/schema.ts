import { z } from 'zod';

export const schema = z.object({
  kicker: z.string(),
  title: z.string(),
  body: z.string(),
  slots: z.number().int().min(0).default(2),
  slotLabel: z.string(),
  soonLabel: z.string(),
});
export type WritingContent = z.infer<typeof schema>;
