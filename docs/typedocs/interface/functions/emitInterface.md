[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [interface](../README.md) / emitInterface

# Function: emitInterface()

> **emitInterface**\<`TEvt`, `TDetail`\>(`type`, ...`detail`): `void`

Defined in: [src/interface.ts:262](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L262)

Emits an event on the BYTM interface

## Type Parameters

### TEvt

`TEvt` *extends* keyof [`InterfaceEvents`](../type-aliases/InterfaceEvents.md)

### TDetail

`TDetail` *extends* `string` \| `void` \| [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) \| \{ `locale`: `"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`; `pluginId?`: `string`; \} \| (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md) \| (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md) \| \{ `artists`: `string`; `title`: `string`; `type`: `"current"` \| `"queue"`; `url`: `string`; \} \| \{ `entry`: [`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md); `type`: `"best"` \| `"penalized"`; \} \| `undefined`

## Parameters

### type

`TEvt` | `"bytm:siteEvent:recreateCfgMenu"` | `"bytm:siteEvent:configChanged"` | `"bytm:siteEvent:configHeaderSelected"` | `"bytm:siteEvent:configOptionChanged"` | `"bytm:siteEvent:rebuildCfgMenu"` | `"bytm:siteEvent:cfgMenuMounted"` | `"bytm:siteEvent:cfgMenuClosed"` | `"bytm:siteEvent:welcomeMenuClosed"` | `"bytm:siteEvent:hotkeyInputActive"` | `"bytm:siteEvent:queueChanged"` | `"bytm:siteEvent:autoplayQueueChanged"` | `"bytm:siteEvent:songTitleChanged"` | `"bytm:siteEvent:watchIdChanged"` | `"bytm:siteEvent:pathChanged"` | `"bytm:siteEvent:fullscreenToggled"` | `"bytm:siteEvent:updateVolumeSliderLabel"` | `"bytm:siteEvent:autoLikeChannelsUpdated"` | `"bytm:siteEvent:voteLabelsAdded"`

### detail

...`TDetail` *extends* `undefined` ? \[`undefined`?\] : \[`TDetail`\]

## Returns

`void`
