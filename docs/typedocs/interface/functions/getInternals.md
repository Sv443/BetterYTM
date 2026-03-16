[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / getInternals

# Function: getInternals()

> **getInternals**(`token`): \{ `addSelectorListener`: \<`TElem`, `TDomain`\>(`observerName`, `selector`, `options`) => `void`; `constants`: [`constants`](../../constants/README.md); `disableDiscardBeforeUnload`: () => `void`; `emitInterface`: \<`TEvt`, `TDetail`\>(`type`, ...`detail`) => `void`; `emitSiteEvent`: \<`TKey`\>(`key`, ...`args`) => `void`; `enableDiscardBeforeUnload`: () => `void`; `setGlobalProp`: \<`TKey`, `TValue`\>(`key`, `value`) => `void`; `showPrompt`: \{(`props`): `Promise`\<`boolean`\>; (`props`): `Promise`\<`true`\>; (`props`): `Promise`\<`string` \| `null`\>; \}; `siteEvents`: `NanoEmitter`\<\{ `autoLikeChannelsUpdated`: () => `void`; `autoplayQueueChanged`: (`queueElement`) => `void`; `broadcast`: (`type`, `packet`) => `void`; `broadcast:custom`: (`packet`) => `void`; `broadcast:dataStoreUpdate`: (`packet`) => `void`; `broadcast:discoverSessions`: (`packet`) => `void`; `broadcast:discoverSessionsReply`: (`packet`) => `void`; `broadcast:reloadTabs`: (`packet`) => `void`; `cfgMenuClosed`: () => `void`; `cfgMenuMounted`: () => `void`; `configChanged`: (`newConfig`) => `void`; `configHeaderSelected`: (`name`) => `void`; `configOptionChanged`: \<`TFeatKey`\>(`key`, `oldValue`, `newValue`) => `void`; `fullscreenToggled`: (`isFullscreen`) => `void`; `hotkeyInputActive`: (`active`) => `void`; `pathChanged`: (`newPath`, `oldPath`) => `void`; `queueChanged`: (`queueElement`) => `void`; `rebuildCfgMenu`: (`newConfig`) => `void`; `recreateCfgMenu`: () => `void`; `songTitleChanged`: (`newTitle`, `oldTitle`) => `void`; `updateVolumeSliderLabel`: () => `void`; `voteLabelsAdded`: () => `void`; `watchIdChanged`: (`newId`, `oldId`) => `void`; `welcomeMenuClosed`: () => `void`; \}\>; \} \| `undefined`

Defined in: [src/interface.ts:698](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/interface.ts#L698)

Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins.

## Parameters

### token

`string` | `undefined`

## Returns

\{ `addSelectorListener`: \<`TElem`, `TDomain`\>(`observerName`, `selector`, `options`) => `void`; `constants`: [`constants`](../../constants/README.md); `disableDiscardBeforeUnload`: () => `void`; `emitInterface`: \<`TEvt`, `TDetail`\>(`type`, ...`detail`) => `void`; `emitSiteEvent`: \<`TKey`\>(`key`, ...`args`) => `void`; `enableDiscardBeforeUnload`: () => `void`; `setGlobalProp`: \<`TKey`, `TValue`\>(`key`, `value`) => `void`; `showPrompt`: \{(`props`): `Promise`\<`boolean`\>; (`props`): `Promise`\<`true`\>; (`props`): `Promise`\<`string` \| `null`\>; \}; `siteEvents`: `NanoEmitter`\<\{ `autoLikeChannelsUpdated`: () => `void`; `autoplayQueueChanged`: (`queueElement`) => `void`; `broadcast`: (`type`, `packet`) => `void`; `broadcast:custom`: (`packet`) => `void`; `broadcast:dataStoreUpdate`: (`packet`) => `void`; `broadcast:discoverSessions`: (`packet`) => `void`; `broadcast:discoverSessionsReply`: (`packet`) => `void`; `broadcast:reloadTabs`: (`packet`) => `void`; `cfgMenuClosed`: () => `void`; `cfgMenuMounted`: () => `void`; `configChanged`: (`newConfig`) => `void`; `configHeaderSelected`: (`name`) => `void`; `configOptionChanged`: \<`TFeatKey`\>(`key`, `oldValue`, `newValue`) => `void`; `fullscreenToggled`: (`isFullscreen`) => `void`; `hotkeyInputActive`: (`active`) => `void`; `pathChanged`: (`newPath`, `oldPath`) => `void`; `queueChanged`: (`queueElement`) => `void`; `rebuildCfgMenu`: (`newConfig`) => `void`; `recreateCfgMenu`: () => `void`; `songTitleChanged`: (`newTitle`, `oldTitle`) => `void`; `updateVolumeSliderLabel`: () => `void`; `voteLabelsAdded`: () => `void`; `watchIdChanged`: (`newId`, `oldId`) => `void`; `welcomeMenuClosed`: () => `void`; \}\>; \}

### addSelectorListener()

> **addSelectorListener**: \<`TElem`, `TDomain`\>(`observerName`, `selector`, `options`) => `void`

Interface function for adding listeners to the `globservers`  
If the observers haven't been initialized yet, the function will queue calls until the `bytm:observersReady` event is emitted

#### Type Parameters

##### TElem

`TElem` *extends* `0` \| `HTMLElement` = `HTMLElement`

The type of the element that the listener will be attached to. If set to `0`, the default type `HTMLElement` will be used.

##### TDomain

`TDomain` *extends* [`Domain`](../../types/type-aliases/Domain.md) = `"ytm"`

This restricts which observers are available with the current domain

#### Parameters

##### observerName

`ObserverNameByDomain`\<`TDomain`\>

##### selector

`string`

Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!

##### options

`SelectorListenerOptions`\<`TElem` *extends* `0` ? `HTMLElement` : `TElem`\>

Options for the listener

#### Returns

`void`

### constants

> **constants**: [`constants`](../../constants/README.md)

### disableDiscardBeforeUnload()

> **disableDiscardBeforeUnload**: () => `void`

(Re-)enables the popup before leaving the site

#### Returns

`void`

### emitInterface()

> **emitInterface**: \<`TEvt`, `TDetail`\>(`type`, ...`detail`) => `void`

Emits an event on the BYTM interface

#### Type Parameters

##### TEvt

`TEvt` *extends* keyof [`InterfaceEvents`](../type-aliases/InterfaceEvents.md)

##### TDetail

`TDetail` *extends* `string` \| `void` \| [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) \| \{ `locale`: `"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`; `pluginId?`: `string`; \} \| (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md) \| (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md) \| \{ `artists`: `string`; `title`: `string`; `type`: `"current"` \| `"queue"`; `url`: `string`; \} \| \{ `entry`: [`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md); `type`: `"best"` \| `"penalized"`; \} \| \{ `album`: `string`; `artist`: `string`; `entry`: `ArtCacheEntry`; \} \| `undefined`

#### Parameters

##### type

`TEvt` | `"bytm:siteEvent:broadcast:dataStoreUpdate"` | `"bytm:siteEvent:broadcast:reloadTabs"` | `"bytm:siteEvent:broadcast:discoverSessions"` | `"bytm:siteEvent:broadcast:discoverSessionsReply"` | `"bytm:siteEvent:broadcast:custom"` | `"bytm:siteEvent:configChanged"` | `"bytm:siteEvent:configHeaderSelected"` | `"bytm:siteEvent:configOptionChanged"` | `"bytm:siteEvent:rebuildCfgMenu"` | `"bytm:siteEvent:cfgMenuMounted"` | `"bytm:siteEvent:recreateCfgMenu"` | `"bytm:siteEvent:cfgMenuClosed"` | `"bytm:siteEvent:welcomeMenuClosed"` | `"bytm:siteEvent:hotkeyInputActive"` | `"bytm:siteEvent:queueChanged"` | `"bytm:siteEvent:autoplayQueueChanged"` | `"bytm:siteEvent:songTitleChanged"` | `"bytm:siteEvent:watchIdChanged"` | `"bytm:siteEvent:pathChanged"` | `"bytm:siteEvent:fullscreenToggled"` | `"bytm:siteEvent:updateVolumeSliderLabel"` | `"bytm:siteEvent:autoLikeChannelsUpdated"` | `"bytm:siteEvent:voteLabelsAdded"` | `"bytm:siteEvent:broadcast"`

##### detail

...`TDetail` *extends* `undefined` ? \[`undefined`?\] : \[`TDetail`\]

#### Returns

`void`

### emitSiteEvent()

> **emitSiteEvent**: \<`TKey`\>(`key`, ...`args`) => `void`

Emits a site event with the given key and arguments - if `bytm:allReady` has not been emitted yet, all events will be queued until it is

#### Type Parameters

##### TKey

`TKey` *extends* `"broadcast:dataStoreUpdate"` \| `"broadcast:reloadTabs"` \| `"broadcast:discoverSessions"` \| `"broadcast:discoverSessionsReply"` \| `"broadcast:custom"` \| `"configChanged"` \| `"configHeaderSelected"` \| `"configOptionChanged"` \| `"rebuildCfgMenu"` \| `"cfgMenuMounted"` \| `"recreateCfgMenu"` \| `"cfgMenuClosed"` \| `"welcomeMenuClosed"` \| `"hotkeyInputActive"` \| `"queueChanged"` \| `"autoplayQueueChanged"` \| `"songTitleChanged"` \| `"watchIdChanged"` \| `"pathChanged"` \| `"fullscreenToggled"` \| `"updateVolumeSliderLabel"` \| `"autoLikeChannelsUpdated"` \| `"voteLabelsAdded"` \| `"broadcast"`

#### Parameters

##### key

`TKey`

##### args

...`Parameters`\<`object`\[`TKey`\]\>

#### Returns

`void`

### enableDiscardBeforeUnload()

> **enableDiscardBeforeUnload**: () => `void`

Disables the popup before leaving the site

#### Returns

`void`

### setGlobalProp()

> **setGlobalProp**: \<`TKey`, `TValue`\>(`key`, `value`) => `void`

Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page!

#### Type Parameters

##### TKey

`TKey` *extends* `string` \| `number`

##### TValue

`TValue` = [`BytmObject`](../../types/type-aliases/BytmObject.md)\[`TKey`\]

#### Parameters

##### key

`string` & `object` | `TKey`

##### value

`TValue`

#### Returns

`void`

### showPrompt()

> **showPrompt**: \{(`props`): `Promise`\<`boolean`\>; (`props`): `Promise`\<`true`\>; (`props`): `Promise`\<`string` \| `null`\>; \}

#### Call Signature

> (`props`): `Promise`\<`boolean`\>

Shows a `confirm()`-like prompt dialog with the specified message and resolves true if the user confirms it or false if they deny or cancel it

##### Parameters

###### props

[`ConfirmRenderProps`](../../dialogs/prompt/type-aliases/ConfirmRenderProps.md)

##### Returns

`Promise`\<`boolean`\>

#### Call Signature

> (`props`): `Promise`\<`true`\>

Shows an `alert()`-like prompt dialog with the specified message and always resolves true once the user dismisses it - for this type, only the close button will exist

##### Parameters

###### props

[`AlertRenderProps`](../../dialogs/prompt/type-aliases/AlertRenderProps.md)

##### Returns

`Promise`\<`true`\>

#### Call Signature

> (`props`): `Promise`\<`string` \| `null`\>

Shows a `prompt()`-like dialog with the specified message and default value and resolves the entered value if the user confirms it or null if they cancel it

##### Parameters

###### props

[`PromptRenderProps`](../../dialogs/prompt/type-aliases/PromptRenderProps.md)

##### Returns

`Promise`\<`string` \| `null`\>

### siteEvents

> **siteEvents**: `NanoEmitter`\<\{ `autoLikeChannelsUpdated`: () => `void`; `autoplayQueueChanged`: (`queueElement`) => `void`; `broadcast`: (`type`, `packet`) => `void`; `broadcast:custom`: (`packet`) => `void`; `broadcast:dataStoreUpdate`: (`packet`) => `void`; `broadcast:discoverSessions`: (`packet`) => `void`; `broadcast:discoverSessionsReply`: (`packet`) => `void`; `broadcast:reloadTabs`: (`packet`) => `void`; `cfgMenuClosed`: () => `void`; `cfgMenuMounted`: () => `void`; `configChanged`: (`newConfig`) => `void`; `configHeaderSelected`: (`name`) => `void`; `configOptionChanged`: \<`TFeatKey`\>(`key`, `oldValue`, `newValue`) => `void`; `fullscreenToggled`: (`isFullscreen`) => `void`; `hotkeyInputActive`: (`active`) => `void`; `pathChanged`: (`newPath`, `oldPath`) => `void`; `queueChanged`: (`queueElement`) => `void`; `rebuildCfgMenu`: (`newConfig`) => `void`; `recreateCfgMenu`: () => `void`; `songTitleChanged`: (`newTitle`, `oldTitle`) => `void`; `updateVolumeSliderLabel`: () => `void`; `voteLabelsAdded`: () => `void`; `watchIdChanged`: (`newId`, `oldId`) => `void`; `welcomeMenuClosed`: () => `void`; \}\>

EventEmitter instance that is used to detect various changes to the site and userscript

`undefined`
