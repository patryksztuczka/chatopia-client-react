import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { ROUTES } from '../lib/constants';
import ProtectedRoute from '../auth/protected-route';
import PublicRoute from '../auth/public-route';
import ErrorPage from '../components/pages/error-page';
import RootLayout from '../components/layouts/root-layout';

const ConversationsPage = lazy(
  () => import('../components/pages/conversations-page'),
);
const LoginPage = lazy(() => import('../components/pages/login-page'));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.chat,
            element: (
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <ConversationsPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: ROUTES.login,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
