import { defineClientConfig } from "@vuepress/client";
import MetingGlobal from "./components/MetingGlobal/index.js";
import Meting from "./components/Meting/index.js";
import APlayer from "./components/APlayer/index.js";

export default defineClientConfig({
  async enhance({ app }) {
    app.component("Aplayer", APlayer);
    app.component("Meting", Meting);
  },
  rootComponents: [MetingGlobal],
});
