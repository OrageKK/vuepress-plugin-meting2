import { PropType, defineComponent, h } from "vue";
import APlayer from "../Meting/meting.js";

import type { VNode } from "vue";
import type { APlayerComponentsOptions, MetingPluginsOptions } from "../../../export.js";
import type { APlayerOptions } from "aplayer/dist/APlayer.min.js";

declare const metingPluginOptions: MetingPluginsOptions;

export default defineComponent({
  props: {
    fixed: {
      type: Boolean,
      default: metingPluginOptions.aplayerOptions?.fixed,
    },
    mini: {
      type: Boolean,
      default: metingPluginOptions.aplayerOptions?.mini,
    },
    autoplay: {
      type: Boolean,
      default: metingPluginOptions.aplayerOptions?.autoplay,
    },
    theme: {
      type: String,
      default: metingPluginOptions.aplayerOptions?.theme,
    },
    loop: {
      type: String as PropType<"all" | "one" | "none">,
      default: metingPluginOptions.aplayerOptions?.loop,
    },
    order: {
      type: String as PropType<"list" | "random">,
      default: metingPluginOptions.aplayerOptions?.order,
    },
    preload: {
      type: String as PropType<"none" | "metadata" | "auto">,
      default: metingPluginOptions.aplayerOptions?.preload,
    },
    volume: { type: Number, default: metingPluginOptions.aplayerOptions?.volume },
    mutex: { type: Boolean, default: metingPluginOptions.aplayerOptions?.mutex },
    listFolded: { type: Boolean, default: metingPluginOptions.aplayerOptions?.listFolded },
    listMaxHeight: {
      type: String,
      default: metingPluginOptions.aplayerOptions?.listMaxHeight,
    },
    lrcType: {
      type: Number as PropType<1 | 2 | 3>,
      default: metingPluginOptions.aplayerOptions?.lrcType,
    },
    audio: {
      type: [Object, Array],
      required: true,
    },
    storageName: { type: String, default: metingPluginOptions.aplayerOptions?.storageName },
    customAudioType: {
      type: Object as PropType<Record<string, void>>,
      default: () => metingPluginOptions.aplayerOptions?.customAudioType,
    },
    customInit: {
      type: Object as PropType<
        (player: any, src: APlayerOptions) => Promise<any>
      >,
      default: () => metingPluginOptions.aplayerOptions?.customAudioType,
    },
  },
  setup(props) {
    const src: APlayerComponentsOptions = {
      ...props,
    } as APlayerComponentsOptions;

    return (): VNode => h(APlayer, { src });
  },
});
