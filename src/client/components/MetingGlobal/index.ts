import { defineComponent, h } from "vue";
import Meting from "../Meting/meting.js";

import type { VNode } from "vue";
import type {
  APlayerComponentsOptions,
  MetingOptions,
  MetingPluginsOptions,
} from "../../../export.js";

declare const METING_PLUGIN_OPTIONS: MetingPluginsOptions;
const metingPluginOptions = METING_PLUGIN_OPTIONS;
export default defineComponent({
  setup() {
    if (
      // 如果全局设置为true，且附加音频列表不为空，或者metingOptions.mid存在，或者metingOptions.list不为空
      metingPluginOptions.metingOptions?.global === true &&
      ((metingPluginOptions.additionalAudios &&
        metingPluginOptions.additionalAudios.length > 0) ||
        metingPluginOptions.metingOptions?.mid ||
        (metingPluginOptions.metingOptions?.list &&
          metingPluginOptions.metingOptions.list.length > 0))
    ) {
      const src = {
        ...metingPluginOptions.metingOptions,
        ...metingPluginOptions.metingOptions?.aplayerOptions,
        audio: metingPluginOptions.additionalAudios,
      } as MetingOptions & APlayerComponentsOptions;
      return (): VNode => h(Meting, { src });
    } else {
      return (): VNode => h("div");
    }
  },
});
