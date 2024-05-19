import { atom } from "jotai";

import { TConversation } from "../utils/types/conversation.types";

export const currentConversationAtom = atom<TConversation | null>(null);
