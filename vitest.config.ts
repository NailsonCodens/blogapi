import { defineConfig } from "vite";

export default defineConfig({
  test: {
    exclude: ["mongo", "prisma", "generated", "node_modules"],
  },
});
