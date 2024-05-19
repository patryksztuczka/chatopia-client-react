import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.number(),
  messageContent: z.string(),
  conversationId: z.string().uuid(),
  userId: z.string().uuid(),
  createdAt: z.string(),
});

export const GetMessagesSchema = z.object({
  data: z.array(MessageSchema),
});
