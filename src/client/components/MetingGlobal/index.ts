import { defineComponent, h } from "vue";
import Meting from "../Meting/meting.js";

import type { VNode } from "vue";
import type { APlayerComponentsOptions, MetingOptions, MetingPluginsOptions } from "../../../type.js";

declare const metingOptions: MetingPluginsOptions;


export default defineComponent({
  setup() {
    if (
      (metingOptions.aplayerGlobalAudios && metingOptions.aplayerGlobalAudios.length > 0) ||
      metingOptions.metingOptions?.id ||
      (metingOptions.metingOptions?.list && metingOptions.metingOptions.list.length > 0)
    ) {
      const src = {
        ...metingOptions.metingOptions,
        ...metingOptions.aplayerGlobalOptions,
        audio: metingOptions.aplayerGlobalAudios,
      } as MetingOptions & APlayerComponentsOptions;
      return (): VNode => h(Meting, { src });
    } else {
      return (): VNode => h("div");
    }
  },
});
