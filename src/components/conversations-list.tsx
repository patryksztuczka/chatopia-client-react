import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { useSession } from '../context/auth-context';
import { getConversations } from '../api';
import { currentConversationAtom } from '../atoms/conversation';
import PrimaryHeading from './primary-heading';
import ConversationTile from './conversation-tile';

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
    <div className="h-full bg-white py-2 sm:rounded-sm sm:shadow-md">
      <PrimaryHeading text="Conversations" />
      <div className="flex flex-col gap-4">
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
