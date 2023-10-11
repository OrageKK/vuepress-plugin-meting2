import type { APlayerOptions, Audio } from "aplayer/dist/APlayer.min.js";

export interface APlayerComponentsOptions
  extends Omit<APlayerOptions, "container"> {}

export type MusicPlatform = ResourcesPlatform | "kugou" | "baidu";
export type ResourcesPlatform = "netease" | "tencent" | "xiami";
export type MetingApiType = "song" | "playlist" | "album" | "search" | "artist";
export interface MetingOptions {
  /**
   * 是否启用全局播放器
   */
  global?: boolean;
  /**
   * MetingApi 中的 id 参数，即资源 ID
   */
  mid?: string;
  /**
   * MetingApi 中的 server 参数，即音乐平台
   */
  server?: MusicPlatform;
  /**
   * MetingApi 中的 type 参数，即资源类型（播放列表、单曲、专辑等）
   */
  type?: MetingApiType;
  /**
   * 资源 url，填写后可通过资源 url 自动解析资源平台、类型、ID，上述三个选项将被覆盖（本参数仅支持 netease、tencent、xiami 三平台）
   */
  auto?: ResourcesPlatform;
  auth?: string;
  /**
   * Meting APi 服务地址
   */
  api?: string;
  /**
   * 数组，除 list 外其他所有项
   */
  list?: Array<Omit<MetingOptions, "list">>;
  /**
   * 全局Meting的APlayer配置
   */
  aplayerOptions?: APlayerComponentsOptions;
}

export interface MetingPluginsOptions {
  /**
   * APlayer的配置
   */
  aplayerOptions?: APlayerComponentsOptions;
  /**
   * Meting配置
   */
  metingOptions?: MetingOptions;
  /**
   * 使用Meting组件需要额外添加 audio 的话，可以通过此选项实现
   */
  additionalAudios?: Array<Audio>;
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
    storageName: "vuepress-plugin-meting2",
  },
  additionalAudios: [],
  metingOptions: {
    global:false,
    server: "netease",
    type: "song",
    auth: "auth",
    api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
    aplayerOptions: {
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
      storageName: "vuepress-plugin-meting2",
    },
  },
};
