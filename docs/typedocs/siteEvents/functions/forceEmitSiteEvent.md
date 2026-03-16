[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [siteEvents](../README.md) / forceEmitSiteEvent

# Function: forceEmitSiteEvent()

> **forceEmitSiteEvent**\<`TKey`\>(`key`, ...`args`): `void`

Defined in: [src/siteEvents.ts:283](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/siteEvents.ts#L283)

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
