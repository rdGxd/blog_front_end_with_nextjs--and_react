import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: "../dist",
  },
  publicDir: "../public",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["../.test/setup.ts"],
    include: ["**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache", "templates", "contexts", "graphql", "Comments"],
    // coverage: {
    //   reporter: ['clover', 'json', 'lcov'],
    // },
  },
});
