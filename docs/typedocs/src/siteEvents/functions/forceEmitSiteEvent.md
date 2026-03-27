[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/siteEvents](../README.md) / forceEmitSiteEvent

# Function: forceEmitSiteEvent()

> **forceEmitSiteEvent**\<`TKey`\>(`key`, ...`args`): `void`

Defined in: [src/siteEvents.ts:283](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/siteEvents.ts#L283)

Forcefully emits a site event with the given key and arguments, even if `bytm:allReady` has not been emitted yet.  
Temporary workaround for `bytm:allReady` event queueing issues in [`()`](emitSiteEvent.md).

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
