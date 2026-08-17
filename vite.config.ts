import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Project Pages URL is https://<user>.github.io/my-cowork-homepage/
  base: process.env.GITHUB_ACTIONS ? "/my-cowork-homepage/" : "/",
});
