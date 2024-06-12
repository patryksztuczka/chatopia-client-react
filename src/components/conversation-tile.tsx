import { TConversation } from '../lib/types/conversation.types';

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
      className="flex cursor-pointer items-center gap-2 px-2 py-1 duration-150 hover:bg-slate-100 sm:rounded-sm"
      onClick={onClick}
    >
      <div className="relative h-10 w-10 min-w-10 rounded-full bg-slate-200">
        <div className="absolute bottom-0.5 right-0 h-3 w-3 min-w-3 rounded-full bg-red-500" />
      </div>
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
