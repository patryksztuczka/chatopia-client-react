import { z } from 'zod';

export const ConversationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export const GetConversationsSchema = z.object({
  data: z.array(ConversationSchema),
});
