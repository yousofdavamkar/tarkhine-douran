import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        shoppincart: "shoppingcart.html",
      },
    },
  },
});
