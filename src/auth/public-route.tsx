import { Navigate, Outlet } from 'react-router-dom';

import { useSession } from '../context/auth-context';
import { ROUTES } from '../lib/constants';

const PublicRoute = () => {
  const session = useSession();

  if (session != null && session !== undefined) {
    return <Navigate to={ROUTES.chat} />;
  }
  return <Outlet />;
};

export default PublicRoute;
