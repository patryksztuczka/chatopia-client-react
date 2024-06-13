import { TConversation } from '../lib/types/conversation.types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';

interface IConversationTileProps {
  conversation: TConversation;
  onClick: () => void;
}

const ConversationTile = ({
  conversation,
  onClick,
}: IConversationTileProps) => {
  const { name } = conversation;
  return (
    <div
      className="flex cursor-pointer items-center gap-2 duration-150 sm:rounded-sm"
      onClick={onClick}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-md font-medium">{name}</span>
        <span className="line-clamp-1 text-sm">
          Last message goes here asdasd asds dasd...
        </span>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-sm">12:34</span>
        <div className="flex h-5 w-5 min-w-5 items-center justify-center rounded-full bg-blue-400 text-xs font-medium text-white">
          2
        </div>
      </div>
    </div>
  );
};

export default ConversationTile;
