import { ClientConfig } from "@vuepress/client";
import MetingGlobal from "./components/MetingGlobal/index.js";
import Meting from "./components/Meting/index.js";
import APlayer from "./components/APlayer/index.js";
declare const defineClientConfig: (clientConfig?: ClientConfig) => ClientConfig;
export default defineClientConfig({
  async enhance({ app }) {
    app.component("APlayer", APlayer);
    app.component("Meting", Meting);
  },
  rootComponents: [MetingGlobal],
}) as ClientConfig;
