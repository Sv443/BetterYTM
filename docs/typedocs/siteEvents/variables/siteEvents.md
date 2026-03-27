[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [siteEvents](../README.md) / siteEvents

# Variable: siteEvents

> `const` **siteEvents**: `NanoEmitter`\<\{ `autoLikeChannelsUpdated`: () => `void`; `autoplayQueueChanged`: (`queueElement`) => `void`; `broadcast`: (`type`, `packet`) => `void`; `broadcast:custom`: (`packet`) => `void`; `broadcast:dataStoreUpdate`: (`packet`) => `void`; `broadcast:discoverSessions`: (`packet`) => `void`; `broadcast:discoverSessionsReply`: (`packet`) => `void`; `broadcast:reloadTabs`: (`packet`) => `void`; `cfgMenuClosed`: () => `void`; `cfgMenuMounted`: () => `void`; `configChanged`: (`newConfig`) => `void`; `configHeaderSelected`: (`name`) => `void`; `configOptionChanged`: \<`TFeatKey`\>(`key`, `oldValue`, `newValue`) => `void`; `fullscreenToggled`: (`isFullscreen`) => `void`; `hotkeyInputActive`: (`active`) => `void`; `pathChanged`: (`newPath`, `oldPath`) => `void`; `queueChanged`: (`queueElement`) => `void`; `rebuildCfgMenu`: (`newConfig`) => `void`; `recreateCfgMenu`: () => `void`; `songTitleChanged`: (`newTitle`, `oldTitle`) => `void`; `updateVolumeSliderLabel`: () => `void`; `voteLabelsAdded`: () => `void`; `watchIdChanged`: (`newId`, `oldId`) => `void`; `welcomeMenuClosed`: () => `void`; \}\>

Defined in: [src/siteEvents.ts:108](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/siteEvents.ts#L108)

EventEmitter instance that is used to detect various changes to the site and userscript
