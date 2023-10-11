# vuepress-plugin-Meting2

:cake: A simple plugin Support vuepress2.x based on Aplayer+Meting

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-meting2.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-meting2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/oragekk/vuepress-plugin-meting2"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-meting2.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-meting2.svg"></a>
   <a href="https://github.com/oragekk/vuepress-plugin-meting2/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/oragekk/vuepress-plugin-meting2"></a>
</p>

## Install

```bash
npm i vuepress-plugin-meting2 -D
# or use pnpm
pnpm add vuepress-plugin-meting2 -D
```

## Usage
```javascript
plugins: [
    metingPlugin({
      metingOptions: {
        global:true, // 开启关闭全局播放器
        server: "tencent",
        api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        type: "playlist",
        mid: "851947617",
      },
    }),
];
```
使用该插件后将自动注册 `<Meting/>` 组件与 `<APlayer/>` 组件，你可以在任意位置使用它们

-  `<Meting/>` 组件支持 `meting` Options 和 `aplayer` Options，其中 `aplayer` 的 `audio` 选项将自动通过 metingApi 获取，如果想要额外添加 `audio` 的话，可以通过 `additionalAudios` 选项实现
-  `<APlayer/>` 组件支持 `aplayer` Options，当然，你需要自行提供 `audio` 音乐源

## Options

Options 分为 `aplayerOptions`、`metingOptions`、`additionalAudios` 三部分

### aplayerOptions
> 详情见 [aplayer 文档](https://aplayer.js.org/#/zh-Hans/)

#### 参数

| 名称            | 默认值                             | 描述                                                         |
| --------------- | ---------------------------------- | ------------------------------------------------------------ |
| container       | document.querySelector('.aplayer') | 播放器容器元素                                               |
| fixed           | false                              | 开启吸底模式, [详情](https://aplayer.js.org/#/home?id=fixed-mode) |
| mini            | false                              | 开启迷你模式, [详情](https://aplayer.js.org/#/home?id=mini-mode) |
| autoplay        | false                              | 音频自动播放                                                 |
| theme           | '#b7daff'                          | 主题色                                                       |
| loop            | 'all'                              | 音频循环播放, 可选值: 'all', 'one', 'none'                   |
| order           | 'list'                             | 音频循环顺序, 可选值: 'list', 'random'                       |
| preload         | 'auto'                             | 预加载，可选值: 'none', 'metadata', 'auto'                   |
| volume          | 0.7                                | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效 |
| audio           | -                                  | 音频信息, 应该是一个对象或对象数组                           |
| audio.name      | -                                  | 音频名称                                                     |
| audio.artist    | -                                  | 音频艺术家                                                   |
| audio.url       | -                                  | 音频链接                                                     |
| audio.cover     | -                                  | 音频封面                                                     |
| audio.lrc       | -                                  | [详情](https://aplayer.js.org/#/home?id=lrc)                 |
| audio.theme     | -                                  | 切换到此音频时的主题色，比上面的 theme 优先级高              |
| audio.type      | 'auto'                             | 可选值: 'auto', 'hls', 'normal' 或其他自定义类型, [详情](https://aplayer.js.org/#/home?id=mse-support) |
| customAudioType | -                                  | 自定义类型，[详情](https://aplayer.js.org/#/home?id=mse-support) |
| mutex           | true                               | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 |
| lrcType         | 0                                  | [详情](https://aplayer.js.org/#/home?id=lrc)                 |
| listFolded      | false                              | 列表默认折叠                                                 |
| listMaxHeight   | -                                  | 列表最大高度                                                 |
| storageName     | 'aplayer-setting'                  | 存储播放器设置的 localStorage key                            |

### metingOptions

| 名称           | 默认值                                                       | 描述                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| global         | false                                                        | 是否启用全局播放器                                           |
| mid            | -                                                            | MetingApi 中的 id 参数，即资源 ID                            |
| server         | netease                                                      | MetingApi 中的 server 参数，即音乐平台                       |
| type           | song                                                         | MetingApi 中的 type 参数，即资源类型（播放列表、单曲、专辑等） |
| auto           |                                                              | 资源 url，填写后可通过资源 url 自动解析资源平台、类型、ID，上述三个选项将被覆盖（本参数仅支持 netease、tencent、xiami 三平台） |
| auth           | auth                                                         |                                                              |
| api            | https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r | Meting APi 服务地址(如不可用自行替换)                        |
| list           | []                                                           | 数组，除 list 外其他所有项                                   |
| aplayerOptions | -                                                            | 全局Meting的APlayer配置                                      |

### additionalAudios

-  additionalAudios

   -  类型：`Array<Audio>`
   -  默认值：`[]`
   -  描述：除 Meting 解析的 audio 外额外添加的 audio

### Examples

```html
<Meting id="6838211960" server="netease" type="playlist" />
<!-- 这样就可以在页面单独引入一个播放器咯～ -->
```

