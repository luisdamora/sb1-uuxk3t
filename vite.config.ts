import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { customPluginCopyAssets } from "./customPluginCopyAssets.ts";

export default defineConfig({
  plugins: [react(), customPluginCopyAssets()],
  // base: "sb1-uuxk3t",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
