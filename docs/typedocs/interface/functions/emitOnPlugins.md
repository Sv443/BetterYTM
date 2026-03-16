[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / emitOnPlugins

# Function: emitOnPlugins()

> **emitOnPlugins**\<`TEvtKey`\>(`event`, `predicate?`, ...`data`): `void`

Defined in: [src/interface.ts:439](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/interface.ts#L439)

Emits an event on all plugins that match the predicate (all plugins by default)

## Type Parameters

### TEvtKey

`TEvtKey` *extends* keyof InterfaceEvents \| `"bytm:siteEvent:broadcast:dataStoreUpdate"` \| `"bytm:siteEvent:broadcast:reloadTabs"` \| `"bytm:siteEvent:broadcast:discoverSessions"` \| `"bytm:siteEvent:broadcast:discoverSessionsReply"` \| `"bytm:siteEvent:broadcast:custom"` \| `"bytm:siteEvent:configChanged"` \| `"bytm:siteEvent:configHeaderSelected"` \| `"bytm:siteEvent:configOptionChanged"` \| `"bytm:siteEvent:rebuildCfgMenu"` \| `"bytm:siteEvent:cfgMenuMounted"` \| `"bytm:siteEvent:recreateCfgMenu"` \| `"bytm:siteEvent:cfgMenuClosed"` \| `"bytm:siteEvent:welcomeMenuClosed"` \| `"bytm:siteEvent:hotkeyInputActive"` \| `"bytm:siteEvent:queueChanged"` \| `"bytm:siteEvent:autoplayQueueChanged"` \| `"bytm:siteEvent:songTitleChanged"` \| `"bytm:siteEvent:watchIdChanged"` \| `"bytm:siteEvent:pathChanged"` \| `"bytm:siteEvent:fullscreenToggled"` \| `"bytm:siteEvent:updateVolumeSliderLabel"` \| `"bytm:siteEvent:autoLikeChannelsUpdated"` \| `"bytm:siteEvent:voteLabelsAdded"` \| `"bytm:siteEvent:broadcast"` \| `"pluginRegistered"`

## Parameters

### event

`TEvtKey`

### predicate?

`boolean` | (`def`) => `boolean`

### data

...`Parameters`\<[`PluginEventMap`](../../types/type-aliases/PluginEventMap.md)\[`TEvtKey`\]\>

## Returns

`void`
