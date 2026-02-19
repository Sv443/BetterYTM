[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [siteEvents](../README.md) / SiteEventsMap

# Type Alias: SiteEventsMap

> **SiteEventsMap** = `object`

Defined in: [src/siteEvents.ts:8](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L8)

Map of all site events and their arguments

## Properties

### autoLikeChannelsUpdated()

> **autoLikeChannelsUpdated**: () => `void`

Defined in: [src/siteEvents.ts:57](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L57)

Emitted whenever a channel was added, edited or removed from the auto-like list

#### Returns

`void`

***

### autoplayQueueChanged()

> **autoplayQueueChanged**: (`queueElement`) => `void`

Defined in: [src/siteEvents.ts:33](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L33)

Emitted whenever child nodes are added to or removed from the autoplay queue underneath the song queue

#### Parameters

##### queueElement

`HTMLElement`

#### Returns

`void`

***

### cfgMenuClosed()

> **cfgMenuClosed**: () => `void`

Defined in: [src/siteEvents.ts:23](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L23)

Emitted whenever the config menu is closed

#### Returns

`void`

***

### cfgMenuMounted()

> **cfgMenuMounted**: () => `void`

Defined in: [src/siteEvents.ts:19](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L19)

Emitted whenever the config menu is mounted in the DOM

#### Returns

`void`

***

### configChanged()

> **configChanged**: (`newConfig`) => `void`

Defined in: [src/siteEvents.ts:11](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L11)

Emitted whenever the feature config is changed - initialization is not counted

#### Parameters

##### newConfig

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

#### Returns

`void`

***

### configHeaderSelected()

> **configHeaderSelected**: (`name`) => `void`

Defined in: [src/siteEvents.ts:13](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L13)

Emitted whenever a config header is selected in the config menu. Gets passed its ID which is either a feature category or extra information section ID.

#### Parameters

##### name

`LooseUnion`\<[`FeatureCategory`](../../types/type-aliases/FeatureCategory.md)\>

#### Returns

`void`

***

### configOptionChanged()

> **configOptionChanged**: \<`TFeatKey`\>(`key`, `oldValue`, `newValue`) => `void`

Defined in: [src/siteEvents.ts:15](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L15)

Emitted whenever a config option is changed - contains the old and new value

#### Type Parameters

##### TFeatKey

`TFeatKey` *extends* keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

#### Parameters

##### key

`TFeatKey`

##### oldValue

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TFeatKey`\]

##### newValue

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TFeatKey`\]

#### Returns

`void`

***

### fullscreenToggled()

> **fullscreenToggled**: (`isFullscreen`) => `void`

Defined in: [src/siteEvents.ts:51](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L51)

Emitted whenever the player enters or exits fullscreen mode

#### Parameters

##### isFullscreen

`boolean`

#### Returns

`void`

***

### hotkeyInputActive()

> **hotkeyInputActive**: (`active`) => `void`

Defined in: [src/siteEvents.ts:27](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L27)

Emitted whenever the user interacts with a hotkey input, used so other keyboard input event listeners don't get called while mid-input

#### Parameters

##### active

`boolean`

#### Returns

`void`

***

### pathChanged()

> **pathChanged**: (`newPath`, `oldPath`) => `void`

Defined in: [src/siteEvents.ts:49](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L49)

Emitted whenever the URL path (`location.pathname`) changes.  
If `oldPath` is `null`, this is the first path in the session.

#### Parameters

##### newPath

`string`

##### oldPath

`string` | `null`

#### Returns

`void`

***

### queueChanged()

> **queueChanged**: (`queueElement`) => `void`

Defined in: [src/siteEvents.ts:31](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L31)

Emitted whenever child nodes are added to or removed from the song queue

#### Parameters

##### queueElement

`HTMLElement`

#### Returns

`void`

***

### rebuildCfgMenu()

> **rebuildCfgMenu**: (`newConfig`) => `void`

Defined in: [src/siteEvents.ts:17](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L17)

Emitted whenever the config menu should be rebuilt, like when a config was imported

#### Parameters

##### newConfig

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

#### Returns

`void`

***

### recreateCfgMenu()

> **recreateCfgMenu**: () => `void`

Defined in: [src/siteEvents.ts:21](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L21)

Emitted whenever the config menu should be unmounted and recreated in the DOM

#### Returns

`void`

***

### songTitleChanged()

> **songTitleChanged**: (`newTitle`, `oldTitle`) => `void`

Defined in: [src/siteEvents.ts:39](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L39)

Emitted whenever the current song title changes.  
Uses the DOM element `yt-formatted-string.title` to detect changes and emit instantaneously.  
If `oldTitle` is `null`, this is the first song played in the session.

#### Parameters

##### newTitle

`string`

##### oldTitle

`string` | `null`

#### Returns

`void`

***

### updateVolumeSliderLabel()

> **updateVolumeSliderLabel**: () => `void`

Defined in: [src/siteEvents.ts:53](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L53)

Call to force the volume slider label to update. Set `round` to false to allow setting values outside `volumeSliderStep`.

#### Returns

`void`

***

### voteLabelsAdded()

> **voteLabelsAdded**: () => `void`

Defined in: [src/siteEvents.ts:59](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L59)

Emitted after the Return YouTube Dislike vote labels were added to the DOM

#### Returns

`void`

***

### watchIdChanged()

> **watchIdChanged**: (`newId`, `oldId`) => `void`

Defined in: [src/siteEvents.ts:44](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L44)

Emitted whenever the current song's watch/video ID changes.  
If `oldId` is `null`, this is the first song played in the session.

#### Parameters

##### newId

`string`

##### oldId

`string` | `null`

#### Returns

`void`

***

### welcomeMenuClosed()

> **welcomeMenuClosed**: () => `void`

Defined in: [src/siteEvents.ts:25](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L25)

Emitted when the welcome menu is closed

#### Returns

`void`
