import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";
import { customPluginCopyAssets } from "./customPluginCopyAssets.ts";

export default defineConfig({
  plugins: [react(), customPluginCopyAssets(), vercel()],
  // base: "sb1-uuxk3t",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
