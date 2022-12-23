import { resolve } from 'path'
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/matter-dom-plugin.js"),
      name: 'MatterKrijuar',
      fileName: "matter-dom-plugin",
    },
  },
  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ["matter-js"],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        Matter: "Matter",
      },
    },
  },
});
