import { defineConfig } from "$fresh/server.ts";
import plugins from "https://denopkg.com/deco-sites/std@1.22.0/plugins/mod.ts";
import manifest from "./manifest.gen.ts";
import { islands } from "$plugins/mod.ts";

export default defineConfig({
  plugins: [...plugins({ manifest }), islands()],
});
