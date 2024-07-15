import { defineConfig } from 'vite';
import next from "next/vite";

export default defineConfig({
  plugins: [
    next({
      routeDir: "src/app"
    })
  ],
});
