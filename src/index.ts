import { getDirname, path } from "@vuepress/utils";
import { deepmerge } from "deepmerge-ts";
import { MetingPluginsOptionsDefault } from "./export.js";

import type { PluginFunction} from "@vuepress/core";
import type { MetingPluginsOptions } from "./export.js";

const __dirname = getDirname(import.meta.url);
const MetingPlugins = (options?: MetingPluginsOptions): PluginFunction => {
  options = deepmerge(MetingPluginsOptionsDefault, options);
  return (_app) => {
    return {
      name: "vuepress-plugin-meting2",
      define: {
        METING_PLUGIN_OPTIONS: options,
      },
      multiple: false,
      clientConfigFile: path.resolve(__dirname, "./client/"),
    };
  };
};
export default MetingPlugins;

