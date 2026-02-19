[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [interface](../README.md) / emitOnPlugins

# Function: emitOnPlugins()

> **emitOnPlugins**\<`TEvtKey`\>(`event`, `predicate?`, ...`data`): `void`

Defined in: [src/interface.ts:436](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L436)

Emits an event on all plugins that match the predicate (all plugins by default)

## Type Parameters

### TEvtKey

`TEvtKey` *extends* keyof InterfaceEvents \| `"bytm:siteEvent:recreateCfgMenu"` \| `"bytm:siteEvent:configChanged"` \| `"bytm:siteEvent:configHeaderSelected"` \| `"bytm:siteEvent:configOptionChanged"` \| `"bytm:siteEvent:rebuildCfgMenu"` \| `"bytm:siteEvent:cfgMenuMounted"` \| `"bytm:siteEvent:cfgMenuClosed"` \| `"bytm:siteEvent:welcomeMenuClosed"` \| `"bytm:siteEvent:hotkeyInputActive"` \| `"bytm:siteEvent:queueChanged"` \| `"bytm:siteEvent:autoplayQueueChanged"` \| `"bytm:siteEvent:songTitleChanged"` \| `"bytm:siteEvent:watchIdChanged"` \| `"bytm:siteEvent:pathChanged"` \| `"bytm:siteEvent:fullscreenToggled"` \| `"bytm:siteEvent:updateVolumeSliderLabel"` \| `"bytm:siteEvent:autoLikeChannelsUpdated"` \| `"bytm:siteEvent:voteLabelsAdded"` \| `"pluginRegistered"`

## Parameters

### event

`TEvtKey`

### predicate?

`boolean` | (`def`) => `boolean`

### data

...`Parameters`\<[`PluginEventMap`](../../types/type-aliases/PluginEventMap.md)\[`TEvtKey`\]\>

## Returns

`void`
