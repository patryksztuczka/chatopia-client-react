import { RouterProvider } from "react-router-dom";

import { AuthProvider } from "../context/auth-context";
import { router } from "./router-provider";

const Providers = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default Providers;
