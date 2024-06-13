import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { Send } from 'lucide-react';

import { currentConversationAtom } from '../atoms/conversation';
import { useSession } from '../context/auth-context';
import { getMessages } from '../api';
import ChatWindowHeader from './chat-window-header';
import ChatMessage from './chat-message';
import { Input } from './ui/input';
import { Button } from './ui/button';

const ChatWindow = () => {
  const session = useSession();

  const [currentConversation, setCurrentConversation] = useAtom(
    currentConversationAtom,
  );

  const { data } = useQuery({
    queryKey: ['messages', currentConversation?.id],
    queryFn: () => getMessages(currentConversation?.id),
    enabled: !!currentConversation?.id,
    refetchOnWindowFocus: false,
  });

  if (!currentConversation) {
    return (
      <div className="hidden sm:flex sm:flex-1 sm:flex-col sm:gap-5 sm:rounded-lg sm:p-6">
        Select a conversation
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-5 p-4 sm:rounded-lg">
      <ChatWindowHeader
        conversationName={currentConversation.name}
        returnToConversations={() => setCurrentConversation(null)}
      />
      <div className="flex flex-1 flex-col justify-end gap-2">
        {data?.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUserMessage={message.userId === session?.user.id}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <Input type="text" placeholder="Aa" />
        <Button type="submit" size="icon" variant="secondary">
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default ChatWindow;
