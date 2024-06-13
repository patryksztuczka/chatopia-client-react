import clsx from 'clsx';

import { TMessage } from '../lib/types/message.types';
import { TypographyP } from './ui/typography-p';

interface IChatMessageProps {
  message: TMessage;
  isCurrentUserMessage: boolean;
}

const ChatMessage = ({ message, isCurrentUserMessage }: IChatMessageProps) => {
  const { messageContent } = message;
  return (
    <div
      className={clsx(
        'w-fit max-w-[70%] cursor-pointer rounded-3xl bg-slate-900 px-3 py-2 text-slate-300 shadow-md',
        isCurrentUserMessage ? 'self-end' : 'self-start',
      )}
    >
      <TypographyP>{messageContent}</TypographyP>
    </div>
  );
};

export default ChatMessage;
