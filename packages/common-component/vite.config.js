import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: false,
    lib: {
      entry: fileURLToPath(new URL("./src/index.js", import.meta.url)),
      name: "CommenComponent",
      fileName: "common-component",
    },
  },

  logLevel: "info",
});
