import { defineConfig } from "vite";
import { ValidateEnv } from "@julr/vite-plugin-validate-env";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ValidateEnv({ configFile: "src/env" })],
});
