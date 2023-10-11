import { defineComponent, h } from "vue";
import Meting from "../Meting/meting.js";

import type { VNode } from "vue";
import type {
  APlayerComponentsOptions,
  MetingOptions,
  MetingPluginsOptions,
} from "../../../export.js";

declare const metingPluginOptions: MetingPluginsOptions;

export default defineComponent({
  setup() {
    if (
      (metingPluginOptions.additionalAudios &&
        metingPluginOptions.additionalAudios.length > 0) ||
      metingPluginOptions.metingOptions?.mid ||
      (metingPluginOptions.metingOptions?.list &&
        metingPluginOptions.metingOptions.list.length > 0 &&
        metingPluginOptions.metingOptions.global)
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
