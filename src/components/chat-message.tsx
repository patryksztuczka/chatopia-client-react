import clsx from 'clsx';

import { TMessage } from '../lib/types/message.types';

interface IChatMessageProps {
  message: TMessage;
  isCurrentUserMessage: boolean;
}

const ChatMessage = ({ message, isCurrentUserMessage }: IChatMessageProps) => {
  const { messageContent } = message;
  return (
    <div
      className={clsx(
        'w-fit max-w-[70%] cursor-pointer  rounded-3xl bg-white px-3 py-2 text-sm text-black shadow-md',
        isCurrentUserMessage ? 'self-end' : 'self-start',
      )}
    >
      {messageContent}
    </div>
  );
};

export default ChatMessage;
