import { getDirname, path } from "@vuepress/utils";
import { deepmerge } from "deepmerge-ts";
import { MetingPluginsOptionsDefault } from "./type.js";

import type { PluginFunction} from "@vuepress/core";
import type { MetingPluginsOptions } from "./type.js";

const __dirname = getDirname(import.meta.url);

const MetingPlugins = (options?: MetingPluginsOptions): PluginFunction => {
  options = deepmerge(MetingPluginsOptionsDefault, options);
  return (_app) => {
    return {
      name: "vuepress-plugin-meting2",
      define: {
        metingOptions: options,
      },
      multiple: false,
      clientConfigFile: path.resolve(__dirname, "./client/index.ts"),
    };
  };
};

// const MetingPlugins = (options: MetingPluginsOptions = {}): Plugin => {
//   options = deepmerge(MetingPluginsOptionsDefault, options);
//   return {
//     name: "vuepress-plugin-music",
//     async onPrepared(app: App) {
//       await app.writeTemp("MettingOptions.json", JSON.stringify(options));
//     },
//     clientConfigFile: path.resolve(__dirname, "client.js"),
//     extendsBundlerOptions: (bundlerOptions, app) => {
//       // 修改 @vuepress/bundler-vite 的配置项
//       if (app.options.bundler.name === "@vuepress/bundler-vite") {
//         bundlerOptions.viteOptions ??= {};
//         bundlerOptions.viteOptions.optimizeDeps ??= {};
//         bundlerOptions.viteOptions.optimizeDeps.include ??= [];
//         bundlerOptions.viteOptions.optimizeDeps.include = [
//           ...bundlerOptions.viteOptions.optimizeDeps.include,
//           "aplayer/dist/APlayer.min.js",
//           "hls.js/dist/hls.min.js",
//         ];
//       }
//     },
//   };
// };

export default MetingPlugins;
