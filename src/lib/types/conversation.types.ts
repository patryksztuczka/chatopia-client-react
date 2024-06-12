import { z } from 'zod';

import { ConversationSchema } from '../schemas/conversation-schemas';

export type TConversation = z.infer<typeof ConversationSchema>;
