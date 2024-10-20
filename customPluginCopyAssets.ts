import path from "path";
import fs from "fs-extra";
// import { defineConfig } from "vite";

export function customPluginCopyAssets() {
  return {
    name: "copy-assets",
    writeBundle() {
      fs.copySync(
        path.resolve(__dirname, "src/assets"),
        path.resolve(__dirname, "dist/assets"),
      );
    },
  };
}
