import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { useSession } from '../context/auth-context';
import { getConversations } from '../api';
import { currentConversationAtom } from '../atoms/conversation';
import ConversationTile from './conversation-tile';
import { TypographyH4 } from './ui/typography-h4';

const ConversationsList = () => {
  const session = useSession();

  const [currentConversation, setCurrentConversation] = useAtom(
    currentConversationAtom,
  );

  const { data, error, isFetching, isLoading } = useQuery({
    queryKey: ['conversations', session?.user.id],
    queryFn: () => getConversations(session?.user.id),
    enabled: !!session?.user.id,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isFetching) return <div>Fetching...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="h-full p-4 sm:rounded-sm sm:shadow-md">
      <TypographyH4>Conversations</TypographyH4>
      <div className="mt-4 flex flex-col gap-4">
        {data?.map((conversation) => (
          <ConversationTile
            key={conversation.id}
            conversation={conversation}
            onClick={() => setCurrentConversation(conversation)}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;
