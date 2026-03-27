[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [siteEvents](../README.md) / emitSiteEvent

# Function: emitSiteEvent()

> **emitSiteEvent**\<`TKey`\>(`key`, ...`args`): `void`

Defined in: [src/siteEvents.ts:247](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/siteEvents.ts#L247)

Emits a site event with the given key and arguments - if `bytm:allReady` has not been emitted yet, all events will be queued until it is

## Type Parameters

### TKey

`TKey` *extends* `"broadcast:dataStoreUpdate"` \| `"broadcast:reloadTabs"` \| `"broadcast:discoverSessions"` \| `"broadcast:discoverSessionsReply"` \| `"broadcast:custom"` \| `"configChanged"` \| `"configHeaderSelected"` \| `"configOptionChanged"` \| `"rebuildCfgMenu"` \| `"cfgMenuMounted"` \| `"recreateCfgMenu"` \| `"cfgMenuClosed"` \| `"welcomeMenuClosed"` \| `"hotkeyInputActive"` \| `"queueChanged"` \| `"autoplayQueueChanged"` \| `"songTitleChanged"` \| `"watchIdChanged"` \| `"pathChanged"` \| `"fullscreenToggled"` \| `"updateVolumeSliderLabel"` \| `"autoLikeChannelsUpdated"` \| `"voteLabelsAdded"` \| `"broadcast"`

## Parameters

### key

`TKey`

### args

...`Parameters`\<`object`\[`TKey`\]\>

## Returns

`void`
