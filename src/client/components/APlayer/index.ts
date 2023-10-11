import { PropType, defineComponent, h } from "vue";
import APlayer from "../Meting/meting.js";

import type { VNode } from "vue";
import type { APlayerComponentsOptions, MetingPluginsOptions } from "../../../type.js";
import type { APlayerOptions } from "aplayer/dist/APlayer.min.js";

declare const metingOptions: MetingPluginsOptions;

export default defineComponent({
  props: {
    fixed: {
      type: Boolean,
      default: metingOptions.aplayerOptions?.fixed,
    },
    mini: {
      type: Boolean,
      default: metingOptions.aplayerOptions?.mini,
    },
    autoplay: {
      type: Boolean,
      default: metingOptions.aplayerOptions?.autoplay,
    },
    theme: {
      type: String,
      default: metingOptions.aplayerOptions?.theme,
    },
    loop: {
      type: String as PropType<"all" | "one" | "none">,
      default: metingOptions.aplayerOptions?.loop,
    },
    order: {
      type: String as PropType<"list" | "random">,
      default: metingOptions.aplayerOptions?.order,
    },
    preload: {
      type: String as PropType<"none" | "metadata" | "auto">,
      default: metingOptions.aplayerOptions?.preload,
    },
    volume: { type: Number, default: metingOptions.aplayerOptions?.volume },
    mutex: { type: Boolean, default: metingOptions.aplayerOptions?.mutex },
    listFolded: { type: Boolean, default: metingOptions.aplayerOptions?.listFolded },
    listMaxHeight: {
      type: String,
      default: metingOptions.aplayerOptions?.listMaxHeight,
    },
    lrcType: {
      type: Number as PropType<1 | 2 | 3>,
      default: metingOptions.aplayerOptions?.lrcType,
    },
    audio: {
      type: [Object, Array],
      required: true,
    },
    storageName: { type: String, default: metingOptions.aplayerOptions?.storageName },
    customAudioType: {
      type: Object as PropType<Record<string, void>>,
      default: () => metingOptions.aplayerOptions?.customAudioType,
    },
    customInit: {
      type: Object as PropType<
        (player: any, src: APlayerOptions) => Promise<any>
      >,
      default: () => metingOptions.aplayerOptions?.customAudioType,
    },
  },
  setup(props) {
    const src: APlayerComponentsOptions = {
      ...props,
    } as APlayerComponentsOptions;

    return (): VNode => h(APlayer, { src });
  },
});
