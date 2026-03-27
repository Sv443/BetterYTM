[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / emitInterface

# Function: emitInterface()

> **emitInterface**\<`TEvt`, `TDetail`\>(`type`, ...`detail`): `void`

Defined in: [src/interface.ts:267](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L267)

Emits an event on the BYTM interface

## Type Parameters

### TEvt

`TEvt` *extends* keyof [`InterfaceEvents`](../type-aliases/InterfaceEvents.md)

### TDetail

`TDetail` *extends* `string` \| `void` \| [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) \| \{ `locale`: `"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`; `pluginId?`: `string`; \} \| (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md) \| (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md) \| \{ `artists`: `string`; `title`: `string`; `type`: `"current"` \| `"queue"`; `url`: `string`; \} \| \{ `entry`: [`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md); `type`: `"best"` \| `"penalized"`; \} \| \{ `album`: `string`; `artist`: `string`; `entry`: [`ArtCacheEntry`](../../features/type-aliases/ArtCacheEntry.md); \} \| `undefined`

## Parameters

### type

`TEvt` | `"bytm:siteEvent:broadcast:dataStoreUpdate"` | `"bytm:siteEvent:broadcast:reloadTabs"` | `"bytm:siteEvent:broadcast:discoverSessions"` | `"bytm:siteEvent:broadcast:discoverSessionsReply"` | `"bytm:siteEvent:broadcast:custom"` | `"bytm:siteEvent:configChanged"` | `"bytm:siteEvent:configHeaderSelected"` | `"bytm:siteEvent:configOptionChanged"` | `"bytm:siteEvent:rebuildCfgMenu"` | `"bytm:siteEvent:cfgMenuMounted"` | `"bytm:siteEvent:recreateCfgMenu"` | `"bytm:siteEvent:cfgMenuClosed"` | `"bytm:siteEvent:welcomeMenuClosed"` | `"bytm:siteEvent:hotkeyInputActive"` | `"bytm:siteEvent:queueChanged"` | `"bytm:siteEvent:autoplayQueueChanged"` | `"bytm:siteEvent:songTitleChanged"` | `"bytm:siteEvent:watchIdChanged"` | `"bytm:siteEvent:pathChanged"` | `"bytm:siteEvent:fullscreenToggled"` | `"bytm:siteEvent:updateVolumeSliderLabel"` | `"bytm:siteEvent:autoLikeChannelsUpdated"` | `"bytm:siteEvent:voteLabelsAdded"` | `"bytm:siteEvent:broadcast"`

### detail

...`TDetail` *extends* `undefined` ? \[`undefined`?\] : \[`TDetail`\]

## Returns

`void`
