import { ChevronLeft } from 'lucide-react';

import SecondaryHeading from './secondary-heading';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { TypographyLarge } from './ui/typography-large';
import { TypographyMuted } from './ui/typography-muted';

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
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={returnToConversations}
      >
        <ChevronLeft />
      </Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <TypographyLarge>{conversationName}</TypographyLarge>
        <TypographyMuted>Active now</TypographyMuted>
      </div>
    </div>
  );
};

export default ChatWindowHeader;
