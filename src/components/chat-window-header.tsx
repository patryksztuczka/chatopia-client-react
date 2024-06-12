import SecondaryHeading from './secondary-heading';
import { Button } from './ui/button';

interface IChatWindowHeaderProps {
  conversationName: string;
  returnToConversations: () => void;
}

const ChatWindowHeader = ({
  conversationName,
  returnToConversations,
}: IChatWindowHeaderProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button type="button" variant="ghost" onClick={returnToConversations}>
        &larr;
      </Button>
      <div className="h-12 w-12 min-w-12 rounded-full bg-slate-200" />
      <div className="flex flex-col gap-1">
        <SecondaryHeading text={conversationName} />
        <span className="text-sm">Offline</span>
      </div>
    </div>
  );
};

export default ChatWindowHeader;
