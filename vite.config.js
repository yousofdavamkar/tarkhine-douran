import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: false,
    host: true,
  },
  plugins: [tailwindcss()],
});
