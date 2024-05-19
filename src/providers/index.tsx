import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "../context/auth-context";
import { router } from "./router-provider";
import { queryClient } from "../libs/react-query/config";

const Providers = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default Providers;
