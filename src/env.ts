import { defineConfig } from "@julr/vite-plugin-validate-env";
import { z } from "zod";

export default defineConfig({
  validator: "zod",
  schema: {
    VITE_SUPABASE_URL: z.string().url(),
    VITE_SUPABASE_ANON_KEY: z.string(),
    VITE_SOCKET_SERVER_URL: z.string().url(),
  },
});
