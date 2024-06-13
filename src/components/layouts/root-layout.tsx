import { Outlet } from 'react-router-dom';
import { MessageCircle, Users } from 'lucide-react';

import { ModeToggle } from '../mode-toggle';
import { Separator } from '../ui/separator';
import { UserDropdownMenu } from '../user-dropdown-menu';
import { useSession } from '@/context/auth-context';
import { TypographyH4 } from '../ui/typography-h4';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { Button } from '../ui/button';

const RootLayout = () => {
  const session = useSession();
  return (
    <div className="h-dvh py-5">
      <div className="mx-4 flex items-center justify-between gap-4">
        <TypographyH4>chatopia</TypographyH4>
        <div className="flex gap-4">
          <ModeToggle />
          {session ? <UserDropdownMenu /> : null}
        </div>
      </div>
      <Separator className="mt-4" />
      <div className="flex h-[calc(100%-40px)]">
        {session ? (
          <>
            <div className="flex flex-col gap-2 px-2 py-4">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MessageCircle />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Conversations</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Users />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Groups</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Separator orientation="vertical" className="hidden sm:block" />
          </>
        ) : null}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
