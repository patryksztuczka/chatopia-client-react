import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import { ROUTES } from "../utils/constants";
import ProtectedRoute from "../auth/protected-route";
import PublicRoute from "../auth/public-route";
import ErrorPage from "../components/pages/error-page";

const ChatPage = lazy(() => import("../components/pages/chat-page"));
const LoginPage = lazy(() => import("../components/pages/login-page"));

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.chat,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ChatPage />
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
