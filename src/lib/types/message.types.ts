import { z } from 'zod';

import { MessageSchema } from '../schemas/message-schemas';

export type TMessage = z.infer<typeof MessageSchema>;
