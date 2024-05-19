import { axiosClient } from '../libs/axios/config';
import { GetConversationsSchema } from '../utils/schemas/conversation-schemas';
import { GetMessagesSchema } from '../utils/schemas/message-schemas';

export const getConversations = async (userId: string | undefined) => {
  if (!userId) return;
  const res = await axiosClient.get(`/users/${userId}/conversations`);
  const validatedData = GetConversationsSchema.parse(res.data);
  return validatedData.data;
};

export const getMessages = async (conversationId: string | undefined) => {
  if (!conversationId) return;
  const res = await axiosClient.get(
    `/conversations/${conversationId}/messages`,
  );
  const validatedData = GetMessagesSchema.parse(res.data);
  return validatedData.data;
};
