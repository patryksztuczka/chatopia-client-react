import { Outlet } from 'react-router-dom';

import { ModeToggle } from '../mode-toggle';
import { Separator } from '../ui/separator';
import { UserDropdownMenu } from '../user-dropdown-menu';
import { useSession } from '@/context/auth-context';

const RootLayout = () => {
  const session = useSession();
  return (
    <div className="h-dvh px-4 py-5">
      <div className="flex justify-end gap-4">
        <ModeToggle />
        {session ? <UserDropdownMenu /> : null}
      </div>
      <Separator className="my-4" />
      <Outlet />
    </div>
  );
};

export default RootLayout;
