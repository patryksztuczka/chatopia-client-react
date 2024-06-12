import { atom } from 'jotai';

import { TConversation } from '../lib/types/conversation.types';

export const currentConversationAtom = atom<TConversation | null>(null);
