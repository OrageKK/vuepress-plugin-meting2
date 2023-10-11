import type { APlayerOptions, Audio } from "aplayer/dist/APlayer.min.js";

export interface APlayerComponentsOptions
  extends Omit<APlayerOptions, "container"> {}

export interface MetingOptions {
  id?: string;
  server?: string;
  type?: string;
  auto?: string;
  auth?: string;
  api?: string;
  list?: Array<Omit<MetingOptions, "list">>;
}

export interface MetingPluginsOptions {
  aplayerOptions?: APlayerComponentsOptions;
  aplayerGlobalOptions?: APlayerComponentsOptions;
  metingOptions?: MetingOptions;
  aplayerGlobalAudios?: Array<Audio>;
}

export const MetingPluginsOptionsDefault: MetingPluginsOptions = {
  aplayerOptions: {
    fixed: false,
    mini: false,
    autoplay: false,
    theme: "#2980b9",
    loop: "all",
    order: "list",
    preload: "auto",
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: "340px",
    storageName: "vuepress-plugin-sbaudio",
  },
  aplayerGlobalOptions: {
    fixed: true,
    mini: true,
    autoplay: false,
    theme: "#2980b9",
    loop: "all",
    order: "list",
    preload: "auto",
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: "540px",
    storageName: "vuepress-plugin-sbaudio",
  },
  aplayerGlobalAudios: [],
  metingOptions: {
    server: "netease",
    type: "song",
    auth: "auth",
    api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
  },
};
