import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint"; //导入包
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()]
});
