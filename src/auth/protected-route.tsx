import { Navigate, Outlet } from 'react-router-dom';

import { useSession } from '../context/auth-context';
import { ROUTES } from '../lib/constants';

const ProtectedRoute = () => {
  const session = useSession();

  if (session == null || session === undefined) {
    return <Navigate to={ROUTES.login} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
