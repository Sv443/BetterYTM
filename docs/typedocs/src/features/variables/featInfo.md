[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / featInfo

# Variable: featInfo

> `const` **featInfo**: `object`

Defined in: [src/features/index.ts:216](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/features/index.ts#L216)

Contains all possible features with their default values and other configuration.  
  
**Required props:**
<!--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
| Property:                      | Description:                                                                                                                        |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `type: string`                 | Type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`.                         |
| `category: string`             | Category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`.                                            |
| `group: string`                | Shared group name for features related to each other - usually the name of the "main feature". Is used to group features in the config menu - don't use a single group across multiple categories! |
| `supportedSites: Domain[]`     | On which sites the feature is active - values can be `"yt"` or `"ytm"`.                                                             |
| `since: string`                | Semver version since when this feature key was added - adds a "new" adornment to the config menu item for a while.                  |
| `default: unknown`             | Default value of the feature - type of the value depends on the given `type`.                                                       |
| `enable(value: unknown): void` | (required if `reloadRequired = false`) - function that will be called when the feature is enabled / initialized for the first time. |
<!--------------------------------------------------------------------------------------------------------------------------------------------------------------------->

**Optional props:**
<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
| Property:                                                          | Description:                                                                                                                                        |
| :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------|
| `disable(newValue: unknown): void`                                 | For type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function.                 |
| `change(key: string, prevValue: unknown, newValue: unknown): void` | For types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed.                                  |
| `click(): void`                                                    | For type `button` only - function that will be called when the button is clicked.                                                                   |
| `helpText: string \| () => string`                                 | If undefined, translation with key `feature_helptext.<featKey>` will be used. If set, needs to be a function that returns an HTML string or the literal string itself that will be the help text for this feature - this is useful for pluralizing or inserting values into the translation at runtime. |
| `adornments: AdornFunc[] \| (() => AdornFunc[])`                   | Array of functions that return HTML strings that will be prepended to the label of the feature in the config menu - used to add icons.              |
| `unit: string \| (val: number) => string`                          | For types `number` or `slider` only - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added too! |
| `min: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `min` property of the HTML input element.                                       |
| `max: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `max` property of the HTML input element.                                       |
| `step: number`                                                     | For types `number` or `slider` only - Overwrites the default of the `step` property of the HTML input element.                                      |
| `options: SelectOption[] \| () => SelectOption[]`                  | For type `select` only - function that returns an array of objects with `value` and `label` properties.                                             |
| `reloadRequired: boolean`                                          | If true (default), the page needs to be reloaded for the changes to take effect - if false, `enable()` needs to be provided.                        |
| `advanced: boolean`                                                | If true, the feature will only be shown if the advanced mode feature has been turned on.                                                            |
| `hidden: boolean`                                                  | If true, the feature will not be shown in the settings - default is undefined (false).                                                              |
| `valueHidden: boolean`                                             | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false).                       |
| `normalize(val: unknown): unknown`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations.                    |
| `renderValue(val: string): string`                                 | If provided, is used to render the value's label in the config menu.                                                                                |
<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

## Type Declaration

### aboveQueueBtnsSticky

> `readonly` **aboveQueueBtnsSticky**: `object`

#### aboveQueueBtnsSticky.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### aboveQueueBtnsSticky.advanced

> `readonly` **advanced**: `true` = `true`

#### aboveQueueBtnsSticky.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### aboveQueueBtnsSticky.default

> `readonly` **default**: `true` = `true`

#### aboveQueueBtnsSticky.group

> `readonly` **group**: `"aboveQueueButtons"` = `"aboveQueueButtons"`

#### aboveQueueBtnsSticky.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### aboveQueueBtnsSticky.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### aboveQueueBtnsSticky.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### advancedMode

> `readonly` **advancedMode**: `object`

#### advancedMode.category

> `readonly` **category**: `"general"` = `"general"`

#### advancedMode.change()

> `readonly` **change**: (`_key`, `prevValue`, `newValue`) => `false` \| `void`

##### Parameters

###### \_key

keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

###### prevValue

[`FeatureConfigValue`](../../types/type-aliases/FeatureConfigValue.md)

###### newValue

[`FeatureConfigValue`](../../types/type-aliases/FeatureConfigValue.md)

##### Returns

`false` \| `void`

#### advancedMode.default

> `readonly` **default**: `false` = `false`

#### advancedMode.group

> `readonly` **group**: `"advancedMode"` = `"advancedMode"`

#### advancedMode.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### advancedMode.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### advancedMode.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### anchorImprovements

> `readonly` **anchorImprovements**: `object`

#### anchorImprovements.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### anchorImprovements.category

> `readonly` **category**: `"input"` = `"input"`

#### anchorImprovements.default

> `readonly` **default**: `true` = `true`

#### anchorImprovements.group

> `readonly` **group**: `"anchorImprovements"` = `"anchorImprovements"`

#### anchorImprovements.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### anchorImprovements.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### anchorImprovements.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### arrowKeySkipBy

> `readonly` **arrowKeySkipBy**: `object`

#### arrowKeySkipBy.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### arrowKeySkipBy.category

> `readonly` **category**: `"input"` = `"input"`

#### arrowKeySkipBy.default

> `readonly` **default**: `5` = `5`

#### arrowKeySkipBy.group

> `readonly` **group**: `"arrowKeySupport"` = `"arrowKeySupport"`

#### arrowKeySkipBy.min

> `readonly` **min**: `0.1` = `0.1`

#### arrowKeySkipBy.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### arrowKeySkipBy.since

> `readonly` **since**: `"1.1.0"` = `"1.1.0"`

#### arrowKeySkipBy.step

> `readonly` **step**: `0.1` = `0.1`

#### arrowKeySkipBy.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### arrowKeySkipBy.type

> `readonly` **type**: `"number"` = `"number"`

#### arrowKeySkipBy.unit

> `readonly` **unit**: `"s"` = `"s"`

### arrowKeySupport

> `readonly` **arrowKeySupport**: `object`

#### arrowKeySupport.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### arrowKeySupport.category

> `readonly` **category**: `"input"` = `"input"`

#### arrowKeySupport.default

> `readonly` **default**: `true` = `true`

#### arrowKeySupport.group

> `readonly` **group**: `"arrowKeySupport"` = `"arrowKeySupport"`

#### arrowKeySupport.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### arrowKeySupport.since

> `readonly` **since**: `"0.1.0"` = `"0.1.0"`

#### arrowKeySupport.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### arrowKeySupport.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### arrowKeyVolumeStep

> `readonly` **arrowKeyVolumeStep**: `object`

#### arrowKeyVolumeStep.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### arrowKeyVolumeStep.category

> `readonly` **category**: `"input"` = `"input"`

#### arrowKeyVolumeStep.default

> `readonly` **default**: `2` = `2`

#### arrowKeyVolumeStep.group

> `readonly` **group**: `"arrowKeySupport"` = `"arrowKeySupport"`

#### arrowKeyVolumeStep.max

> `readonly` **max**: `25` = `25`

#### arrowKeyVolumeStep.min

> `readonly` **min**: `1` = `1`

#### arrowKeyVolumeStep.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### arrowKeyVolumeStep.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### arrowKeyVolumeStep.step

> `readonly` **step**: `1` = `1`

#### arrowKeyVolumeStep.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### arrowKeyVolumeStep.type

> `readonly` **type**: `"slider"` = `"slider"`

#### arrowKeyVolumeStep.unit

> `readonly` **unit**: `"%"` = `"%"`

### autoCloseToasts

> `readonly` **autoCloseToasts**: `object`

#### autoCloseToasts.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### autoCloseToasts.default

> `readonly` **default**: `true` = `true`

#### autoCloseToasts.group

> `readonly` **group**: `"autoCloseToasts"` = `"autoCloseToasts"`

#### autoCloseToasts.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### autoCloseToasts.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### autoCloseToasts.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### autoCloseToasts.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### autoLikeChannels

> `readonly` **autoLikeChannels**: `object`

#### autoLikeChannels.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string` \| `undefined`\>\]

#### autoLikeChannels.category

> `readonly` **category**: `"autoLike"` = `"autoLike"`

#### autoLikeChannels.default

> `readonly` **default**: `true` = `true`

#### autoLikeChannels.group

> `readonly` **group**: `"autoLikeChannels"` = `"autoLikeChannels"`

#### autoLikeChannels.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### autoLikeChannels.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### autoLikeChannels.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### autoLikeChannelToggleBtn

> `readonly` **autoLikeChannelToggleBtn**: `object`

#### autoLikeChannelToggleBtn.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### autoLikeChannelToggleBtn.advanced

> `readonly` **advanced**: `true` = `true`

#### autoLikeChannelToggleBtn.category

> `readonly` **category**: `"autoLike"` = `"autoLike"`

#### autoLikeChannelToggleBtn.default

> `readonly` **default**: `true` = `true`

#### autoLikeChannelToggleBtn.group

> `readonly` **group**: `"autoLikeChannels"` = `"autoLikeChannels"`

#### autoLikeChannelToggleBtn.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### autoLikeChannelToggleBtn.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### autoLikeChannelToggleBtn.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### autoLikeChannelToggleBtn.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### autoLikeOpenMgmtDialog

> `readonly` **autoLikeOpenMgmtDialog**: `object`

#### autoLikeOpenMgmtDialog.category

> `readonly` **category**: `"autoLike"` = `"autoLike"`

#### autoLikeOpenMgmtDialog.click()

> `readonly` **click**: () => `Promise`\<`void` \| `HTMLElement`\>

##### Returns

`Promise`\<`void` \| `HTMLElement`\>

#### autoLikeOpenMgmtDialog.group

> `readonly` **group**: `"autoLikeChannels"` = `"autoLikeChannels"`

#### autoLikeOpenMgmtDialog.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### autoLikeOpenMgmtDialog.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### autoLikeOpenMgmtDialog.type

> `readonly` **type**: `"button"` = `"button"`

### autoLikeShowToast

> `readonly` **autoLikeShowToast**: `object`

#### autoLikeShowToast.category

> `readonly` **category**: `"autoLike"` = `"autoLike"`

#### autoLikeShowToast.default

> `readonly` **default**: `true` = `true`

#### autoLikeShowToast.group

> `readonly` **group**: `"autoLikeChannels"` = `"autoLikeChannels"`

#### autoLikeShowToast.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### autoLikeShowToast.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### autoLikeShowToast.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### autoLikeShowToast.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### autoLikeTimeout

> `readonly` **autoLikeTimeout**: `object`

#### autoLikeTimeout.category

> `readonly` **category**: `"autoLike"` = `"autoLike"`

#### autoLikeTimeout.default

> `readonly` **default**: `5` = `5`

#### autoLikeTimeout.group

> `readonly` **group**: `"autoLikeChannels"` = `"autoLikeChannels"`

#### autoLikeTimeout.max

> `readonly` **max**: `30` = `30`

#### autoLikeTimeout.min

> `readonly` **min**: `3` = `3`

#### autoLikeTimeout.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### autoLikeTimeout.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### autoLikeTimeout.step

> `readonly` **step**: `0.5` = `0.5`

#### autoLikeTimeout.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### autoLikeTimeout.type

> `readonly` **type**: `"slider"` = `"slider"`

#### autoLikeTimeout.unit

> `readonly` **unit**: `"s"` = `"s"`

### autoScrollToActiveSongMode

> `readonly` **autoScrollToActiveSongMode**: `object`

#### autoScrollToActiveSongMode.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### autoScrollToActiveSongMode.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### autoScrollToActiveSongMode.default

> `readonly` **default**: `"videoChangeManual"` = `"videoChangeManual"`

#### autoScrollToActiveSongMode.group

> `readonly` **group**: `"autoScrollToActiveSongMode"` = `"autoScrollToActiveSongMode"`

#### autoScrollToActiveSongMode.options()

> `readonly` **options**: () => `object`[]

##### Returns

`object`[]

#### autoScrollToActiveSongMode.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### autoScrollToActiveSongMode.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### autoScrollToActiveSongMode.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### autoScrollToActiveSongMode.type

> `readonly` **type**: `"select"` = `"select"`

### checkVersionNow

> `readonly` **checkVersionNow**: `object`

#### checkVersionNow.category

> `readonly` **category**: `"general"` = `"general"`

#### checkVersionNow.click()

> `readonly` **click**: () => `Promise`\<`true` \| `undefined`\>

##### Returns

`Promise`\<`true` \| `undefined`\>

#### checkVersionNow.group

> `readonly` **group**: `"versionCheck"` = `"versionCheck"`

#### checkVersionNow.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### checkVersionNow.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### checkVersionNow.type

> `readonly` **type**: `"button"` = `"button"`

### clearLyricsCache

> `readonly` **clearLyricsCache**: `object`

#### clearLyricsCache.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### clearLyricsCache.advanced

> `readonly` **advanced**: `true` = `true`

#### clearLyricsCache.category

> `readonly` **category**: `"lyrics"` = `"lyrics"`

#### clearLyricsCache.group

> `readonly` **group**: `"lyricsCache"` = `"lyricsCache"`

#### clearLyricsCache.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### clearLyricsCache.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### clearLyricsCache.type

> `readonly` **type**: `"button"` = `"button"`

#### clearLyricsCache.click()

> `readonly` **click**(): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

### clearQueueBtn

> `readonly` **clearQueueBtn**: `object`

#### clearQueueBtn.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### clearQueueBtn.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### clearQueueBtn.default

> `readonly` **default**: `true` = `true`

#### clearQueueBtn.group

> `readonly` **group**: `"aboveQueueButtons"` = `"aboveQueueButtons"`

#### clearQueueBtn.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### clearQueueBtn.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### clearQueueBtn.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### clearSearchBarHotkey

> `readonly` **clearSearchBarHotkey**: `object`

#### clearSearchBarHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### clearSearchBarHotkey.default

> `readonly` **default**: `object`

#### clearSearchBarHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### clearSearchBarHotkey.default.code

> `readonly` **code**: `"Delete"` = `"Delete"`

#### clearSearchBarHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### clearSearchBarHotkey.default.shift

> `readonly` **shift**: `true` = `true`

#### clearSearchBarHotkey.group

> `readonly` **group**: `"clearSearchBarHotkey"` = `"clearSearchBarHotkey"`

#### clearSearchBarHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### clearSearchBarHotkey.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### clearSearchBarHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### clearSearchBarHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### clearSearchBarHotkeyEnabled

> `readonly` **clearSearchBarHotkeyEnabled**: `object`

#### clearSearchBarHotkeyEnabled.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### clearSearchBarHotkeyEnabled.default

> `readonly` **default**: `true` = `true`

#### clearSearchBarHotkeyEnabled.group

> `readonly` **group**: `"clearSearchBarHotkey"` = `"clearSearchBarHotkey"`

#### clearSearchBarHotkeyEnabled.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### clearSearchBarHotkeyEnabled.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### clearSearchBarHotkeyEnabled.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### clearSearchBarHotkeyEnabled.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### closeToastsTimeout

> `readonly` **closeToastsTimeout**: `object`

#### closeToastsTimeout.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### closeToastsTimeout.default

> `readonly` **default**: `3` = `3`

#### closeToastsTimeout.group

> `readonly` **group**: `"autoCloseToasts"` = `"autoCloseToasts"`

#### closeToastsTimeout.max

> `readonly` **max**: `30` = `30`

#### closeToastsTimeout.min

> `readonly` **min**: `0.5` = `0.5`

#### closeToastsTimeout.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### closeToastsTimeout.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### closeToastsTimeout.step

> `readonly` **step**: `0.5` = `0.5`

#### closeToastsTimeout.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### closeToastsTimeout.type

> `readonly` **type**: `"slider"` = `"slider"`

#### closeToastsTimeout.unit

> `readonly` **unit**: `"s"` = `"s"`

### currentLyricsHotkey

> `readonly` **currentLyricsHotkey**: `object`

#### currentLyricsHotkey.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### currentLyricsHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### currentLyricsHotkey.default

> `readonly` **default**: `object`

#### currentLyricsHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### currentLyricsHotkey.default.code

> `readonly` **code**: `"KeyO"` = `"KeyO"`

#### currentLyricsHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### currentLyricsHotkey.default.shift

> `readonly` **shift**: `false` = `false`

#### currentLyricsHotkey.group

> `readonly` **group**: `"currentLyricsHotkeyEnabled"` = `"currentLyricsHotkeyEnabled"`

#### currentLyricsHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### currentLyricsHotkey.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### currentLyricsHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### currentLyricsHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### currentLyricsHotkeyEnabled

> `readonly` **currentLyricsHotkeyEnabled**: `object`

#### currentLyricsHotkeyEnabled.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### currentLyricsHotkeyEnabled.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### currentLyricsHotkeyEnabled.default

> `readonly` **default**: `true` = `true`

#### currentLyricsHotkeyEnabled.group

> `readonly` **group**: `"currentLyricsHotkeyEnabled"` = `"currentLyricsHotkeyEnabled"`

#### currentLyricsHotkeyEnabled.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### currentLyricsHotkeyEnabled.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### currentLyricsHotkeyEnabled.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### currentLyricsHotkeyEnabled.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### defaultObserverDebounce

> `readonly` **defaultObserverDebounce**: `object`

#### defaultObserverDebounce.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### defaultObserverDebounce.advanced

> `readonly` **advanced**: `true` = `true`

#### defaultObserverDebounce.category

> `readonly` **category**: `"general"` = `"general"`

#### defaultObserverDebounce.default

> `readonly` **default**: `150` = `150`

#### defaultObserverDebounce.group

> `readonly` **group**: `"bytmInternal"` = `"bytmInternal"`

#### defaultObserverDebounce.max

> `readonly` **max**: `1000` = `1000`

#### defaultObserverDebounce.min

> `readonly` **min**: `10` = `10`

#### defaultObserverDebounce.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### defaultObserverDebounce.step

> `readonly` **step**: `5` = `5`

#### defaultObserverDebounce.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### defaultObserverDebounce.type

> `readonly` **type**: `"number"` = `"number"`

#### defaultObserverDebounce.unit

> `readonly` **unit**: `"ms"` = `"ms"`

### deleteFromQueueButton

> `readonly` **deleteFromQueueButton**: `object`

#### deleteFromQueueButton.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### deleteFromQueueButton.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### deleteFromQueueButton.default

> `readonly` **default**: `true` = `true`

#### deleteFromQueueButton.group

> `readonly` **group**: `"queueButtons"` = `"queueButtons"`

#### deleteFromQueueButton.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### deleteFromQueueButton.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### deleteFromQueueButton.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### disableBeforeUnloadPopup

> `readonly` **disableBeforeUnloadPopup**: `object`

#### disableBeforeUnloadPopup.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### disableBeforeUnloadPopup.default

> `readonly` **default**: `false` = `false`

#### disableBeforeUnloadPopup.group

> `readonly` **group**: `"disableBeforeUnloadPopup"` = `"disableBeforeUnloadPopup"`

#### disableBeforeUnloadPopup.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### disableBeforeUnloadPopup.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### disableBeforeUnloadPopup.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### disableBeforeUnloadPopup.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### disableDarkReaderSites

> `readonly` **disableDarkReaderSites**: `object`

#### disableDarkReaderSites.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string` \| `undefined`\>\]

#### disableDarkReaderSites.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### disableDarkReaderSites.default

> `readonly` **default**: `"all"` = `"all"`

#### disableDarkReaderSites.group

> `readonly` **group**: `"darkReader"` = `"darkReader"`

#### disableDarkReaderSites.options()

> `readonly` **options**: () => (\{ `label`: `string`; `value`: `"all"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \} \| \{ `label`: `string`; `value`: `"ytm"`; \} \| \{ `label`: `string`; `value`: `"none"`; \})[] = `options.siteSelectionOrNone`

##### Returns

(\{ `label`: `string`; `value`: `"all"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \} \| \{ `label`: `string`; `value`: `"ytm"`; \} \| \{ `label`: `string`; `value`: `"none"`; \})[]

#### disableDarkReaderSites.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### disableDarkReaderSites.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### disableDarkReaderSites.type

> `readonly` **type**: `"select"` = `"select"`

### dislikeHotkey

> `readonly` **dislikeHotkey**: `object`

#### dislikeHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### dislikeHotkey.default

> `readonly` **default**: `object`

#### dislikeHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### dislikeHotkey.default.code

> `readonly` **code**: `"KeyD"` = `"KeyD"`

#### dislikeHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### dislikeHotkey.default.shift

> `readonly` **shift**: `true` = `true`

#### dislikeHotkey.group

> `readonly` **group**: `"likeDislikeHotkeys"` = `"likeDislikeHotkeys"`

#### dislikeHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### dislikeHotkey.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### dislikeHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### dislikeHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### errorOnLyricsNotFound

> `readonly` **errorOnLyricsNotFound**: `object`

#### errorOnLyricsNotFound.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### errorOnLyricsNotFound.category

> `readonly` **category**: `"lyrics"` = `"lyrics"`

#### errorOnLyricsNotFound.default

> `readonly` **default**: `false` = `false`

#### errorOnLyricsNotFound.group

> `readonly` **group**: `"geniusLyrics"` = `"geniusLyrics"`

#### errorOnLyricsNotFound.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### errorOnLyricsNotFound.since

> `readonly` **since**: `"2.1.0-preview.1"` = `"2.1.0-preview.1"`

#### errorOnLyricsNotFound.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### errorOnLyricsNotFound.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### fixHdrIssues

> `readonly` **fixHdrIssues**: `object`

#### fixHdrIssues.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### fixHdrIssues.advanced

> `readonly` **advanced**: `true` = `true`

#### fixHdrIssues.category

> `readonly` **category**: `"layout"` = `"layout"`

#### fixHdrIssues.default

> `readonly` **default**: `true` = `true`

#### fixHdrIssues.group

> `readonly` **group**: `"fixHdrIssues"` = `"fixHdrIssues"`

#### fixHdrIssues.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### fixHdrIssues.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### fixHdrIssues.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### fixSpacing

> `readonly` **fixSpacing**: `object`

#### fixSpacing.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### fixSpacing.advanced

> `readonly` **advanced**: `true` = `true`

#### fixSpacing.category

> `readonly` **category**: `"layout"` = `"layout"`

#### fixSpacing.default

> `readonly` **default**: `true` = `true`

#### fixSpacing.group

> `readonly` **group**: `"fixLayout"` = `"fixLayout"`

#### fixSpacing.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### fixSpacing.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### fixSpacing.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### focusSearchBarHotkey

> `readonly` **focusSearchBarHotkey**: `object`

#### focusSearchBarHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### focusSearchBarHotkey.default

> `readonly` **default**: `object`

#### focusSearchBarHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### focusSearchBarHotkey.default.code

> `readonly` **code**: `"KeyF"` = `"KeyF"`

#### focusSearchBarHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### focusSearchBarHotkey.default.shift

> `readonly` **shift**: `true` = `true`

#### focusSearchBarHotkey.group

> `readonly` **group**: `"focusSearchBarHotkey"` = `"focusSearchBarHotkey"`

#### focusSearchBarHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### focusSearchBarHotkey.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### focusSearchBarHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### focusSearchBarHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### focusSearchBarHotkeyEnabled

> `readonly` **focusSearchBarHotkeyEnabled**: `object`

#### focusSearchBarHotkeyEnabled.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### focusSearchBarHotkeyEnabled.default

> `readonly` **default**: `true` = `true`

#### focusSearchBarHotkeyEnabled.group

> `readonly` **group**: `"focusSearchBarHotkey"` = `"focusSearchBarHotkey"`

#### focusSearchBarHotkeyEnabled.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### focusSearchBarHotkeyEnabled.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### focusSearchBarHotkeyEnabled.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### focusSearchBarHotkeyEnabled.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### frameSkip

> `readonly` **frameSkip**: `object`

#### frameSkip.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### frameSkip.category

> `readonly` **category**: `"input"` = `"input"`

#### frameSkip.default

> `readonly` **default**: `true` = `true`

#### frameSkip.group

> `readonly` **group**: `"frameSkip"` = `"frameSkip"`

#### frameSkip.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### frameSkip.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### frameSkip.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### frameSkip.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### frameSkipAmount

> `readonly` **frameSkipAmount**: `object`

#### frameSkipAmount.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### frameSkipAmount.advanced

> `readonly` **advanced**: `true` = `true`

#### frameSkipAmount.category

> `readonly` **category**: `"input"` = `"input"`

#### frameSkipAmount.default

> `readonly` **default**: `0.0166` = `0.0166`

#### frameSkipAmount.group

> `readonly` **group**: `"frameSkip"` = `"frameSkip"`

#### frameSkipAmount.min

> `readonly` **min**: `0` = `0`

#### frameSkipAmount.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### frameSkipAmount.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### frameSkipAmount.step

> `readonly` **step**: `0.0001` = `0.0001`

#### frameSkipAmount.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### frameSkipAmount.type

> `readonly` **type**: `"number"` = `"number"`

#### frameSkipAmount.unit

> `readonly` **unit**: `"s"` = `"s"`

### frameSkipWhilePlaying

> `readonly` **frameSkipWhilePlaying**: `object`

#### frameSkipWhilePlaying.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### frameSkipWhilePlaying.category

> `readonly` **category**: `"input"` = `"input"`

#### frameSkipWhilePlaying.default

> `readonly` **default**: `false` = `false`

#### frameSkipWhilePlaying.group

> `readonly` **group**: `"frameSkip"` = `"frameSkip"`

#### frameSkipWhilePlaying.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### frameSkipWhilePlaying.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### frameSkipWhilePlaying.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### frameSkipWhilePlaying.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### geniUrlBase

> `readonly` **geniUrlBase**: `object`

#### geniUrlBase.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### geniUrlBase.advanced

> `readonly` **advanced**: `true` = `true`

#### geniUrlBase.category

> `readonly` **category**: `"lyrics"` = `"lyrics"`

#### geniUrlBase.default

> `readonly` **default**: `"https://api.sv443.net/geniurl"` = `"https://api.sv443.net/geniurl"`

#### geniUrlBase.group

> `readonly` **group**: `"geniURL"` = `"geniURL"`

#### geniUrlBase.normalize()

> `readonly` **normalize**: (`val`) => `string`

##### Parameters

###### val

`string`

##### Returns

`string`

#### geniUrlBase.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### geniUrlBase.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### geniUrlBase.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### geniUrlBase.type

> `readonly` **type**: `"text"` = `"text"`

### geniUrlToken

> `readonly` **geniUrlToken**: `object`

#### geniUrlToken.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### geniUrlToken.advanced

> `readonly` **advanced**: `true` = `true`

#### geniUrlToken.category

> `readonly` **category**: `"lyrics"` = `"lyrics"`

#### geniUrlToken.default

> `readonly` **default**: `""` = `""`

#### geniUrlToken.group

> `readonly` **group**: `"geniURL"` = `"geniURL"`

#### geniUrlToken.normalize()

> `readonly` **normalize**: (`val`) => `string`

##### Parameters

###### val

`string`

##### Returns

`string`

#### geniUrlToken.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### geniUrlToken.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### geniUrlToken.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### geniUrlToken.type

> `readonly` **type**: `"text"` = `"text"`

#### geniUrlToken.valueHidden

> `readonly` **valueHidden**: `true` = `true`

### geniusLyrics

> `readonly` **geniusLyrics**: `object`

#### geniusLyrics.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### geniusLyrics.category

> `readonly` **category**: `"lyrics"` = `"lyrics"`

#### geniusLyrics.default

> `readonly` **default**: `true` = `true`

#### geniusLyrics.group

> `readonly` **group**: `"geniusLyrics"` = `"geniusLyrics"`

#### geniusLyrics.since

> `readonly` **since**: `"0.2.0"` = `"0.2.0"`

#### geniusLyrics.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### geniusLyrics.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### hideCursorOnIdle

> `readonly` **hideCursorOnIdle**: `object`

#### hideCursorOnIdle.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### hideCursorOnIdle.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### hideCursorOnIdle.default

> `readonly` **default**: `true` = `true`

#### hideCursorOnIdle.group

> `readonly` **group**: `"hideCursorOnIdle"` = `"hideCursorOnIdle"`

#### hideCursorOnIdle.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### hideCursorOnIdle.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### hideCursorOnIdle.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### hideCursorOnIdle.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### hideCursorOnIdleDelay

> `readonly` **hideCursorOnIdleDelay**: `object`

#### hideCursorOnIdleDelay.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### hideCursorOnIdleDelay.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### hideCursorOnIdleDelay.default

> `readonly` **default**: `3` = `3`

#### hideCursorOnIdleDelay.group

> `readonly` **group**: `"hideCursorOnIdle"` = `"hideCursorOnIdle"`

#### hideCursorOnIdleDelay.max

> `readonly` **max**: `10` = `10`

#### hideCursorOnIdleDelay.min

> `readonly` **min**: `0.5` = `0.5`

#### hideCursorOnIdleDelay.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### hideCursorOnIdleDelay.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### hideCursorOnIdleDelay.step

> `readonly` **step**: `0.25` = `0.25`

#### hideCursorOnIdleDelay.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### hideCursorOnIdleDelay.type

> `readonly` **type**: `"slider"` = `"slider"`

#### hideCursorOnIdleDelay.unit

> `readonly` **unit**: `"s"` = `"s"`

### hidePlayerBarOnIdleInFullscreen

> `readonly` **hidePlayerBarOnIdleInFullscreen**: `object`

#### hidePlayerBarOnIdleInFullscreen.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### hidePlayerBarOnIdleInFullscreen.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### hidePlayerBarOnIdleInFullscreen.default

> `readonly` **default**: `true` = `true`

#### hidePlayerBarOnIdleInFullscreen.group

> `readonly` **group**: `"hideCursorOnIdle"` = `"hideCursorOnIdle"`

#### hidePlayerBarOnIdleInFullscreen.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### hidePlayerBarOnIdleInFullscreen.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### hidePlayerBarOnIdleInFullscreen.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### hidePlayerBarOnIdleInFullscreen.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### initialTabVolumeLevel

> `readonly` **initialTabVolumeLevel**: `object`

#### initialTabVolumeLevel.adornments()

> `readonly` **adornments**: () => (`Promise`\<`string`\> \| () => `Promise`\<`string` \| `undefined`\>)[]

##### Returns

(`Promise`\<`string`\> \| () => `Promise`\<`string` \| `undefined`\>)[]

#### initialTabVolumeLevel.category

> `readonly` **category**: `"volume"` = `"volume"`

#### initialTabVolumeLevel.default

> `readonly` **default**: `100` = `100`

#### initialTabVolumeLevel.group

> `readonly` **group**: `"initialTabVolume"` = `"initialTabVolume"`

#### initialTabVolumeLevel.max

> `readonly` **max**: `100` = `100`

#### initialTabVolumeLevel.min

> `readonly` **min**: `0` = `0`

#### initialTabVolumeLevel.renderValue()

> `readonly` **renderValue**: (`value`) => `string`

##### Parameters

###### value

`string`

##### Returns

`string`

#### initialTabVolumeLevel.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### initialTabVolumeLevel.step

> `readonly` **step**: `1` = `1`

#### initialTabVolumeLevel.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### initialTabVolumeLevel.type

> `readonly` **type**: `"number"` = `"number"`

#### initialTabVolumeLevel.unit

> `readonly` **unit**: `"%"` = `"%"`

### initTimeout

> `readonly` **initTimeout**: `object`

#### initTimeout.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### initTimeout.advanced

> `readonly` **advanced**: `true` = `true`

#### initTimeout.category

> `readonly` **category**: `"general"` = `"general"`

#### initTimeout.default

> `readonly` **default**: `3000` = `3_000`

#### initTimeout.group

> `readonly` **group**: `"bytmInternal"` = `"bytmInternal"`

#### initTimeout.max

> `readonly` **max**: `10000` = `10_000`

#### initTimeout.min

> `readonly` **min**: `100` \| `1000`

#### initTimeout.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### initTimeout.step

> `readonly` **step**: `100` = `100`

#### initTimeout.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### initTimeout.type

> `readonly` **type**: `"number"` = `"number"`

#### initTimeout.unit

> `readonly` **unit**: `"ms"` = `"ms"`

### likeDislikeHotkeys

> `readonly` **likeDislikeHotkeys**: `object`

#### likeDislikeHotkeys.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### likeDislikeHotkeys.default

> `readonly` **default**: `true` = `true`

#### likeDislikeHotkeys.group

> `readonly` **group**: `"likeDislikeHotkeys"` = `"likeDislikeHotkeys"`

#### likeDislikeHotkeys.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### likeDislikeHotkeys.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### likeDislikeHotkeys.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### likeDislikeHotkeys.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### likeDislikeHotkeysToggle

> `readonly` **likeDislikeHotkeysToggle**: `object`

#### likeDislikeHotkeysToggle.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### likeDislikeHotkeysToggle.default

> `readonly` **default**: `false` = `false`

#### likeDislikeHotkeysToggle.group

> `readonly` **group**: `"likeDislikeHotkeys"` = `"likeDislikeHotkeys"`

#### likeDislikeHotkeysToggle.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### likeDislikeHotkeysToggle.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### likeDislikeHotkeysToggle.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### likeDislikeHotkeysToggle.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### likeHotkey

> `readonly` **likeHotkey**: `object`

#### likeHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### likeHotkey.default

> `readonly` **default**: `object`

#### likeHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### likeHotkey.default.code

> `readonly` **code**: `"KeyL"` = `"KeyL"`

#### likeHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### likeHotkey.default.shift

> `readonly` **shift**: `true` = `true`

#### likeHotkey.group

> `readonly` **group**: `"likeDislikeHotkeys"` = `"likeDislikeHotkeys"`

#### likeHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### likeHotkey.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### likeHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### likeHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### listButtonsPlacement

> `readonly` **listButtonsPlacement**: `object`

#### listButtonsPlacement.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### listButtonsPlacement.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### listButtonsPlacement.default

> `readonly` **default**: `"everywhere"` = `"everywhere"`

#### listButtonsPlacement.group

> `readonly` **group**: `"queueButtons"` = `"queueButtons"`

#### listButtonsPlacement.options()

> `readonly` **options**: () => (\{ `label`: `string`; `value`: `"currentQueue"`; \} \| \{ `label`: `string`; `value`: `"genericLists"`; \} \| \{ `label`: `string`; `value`: `"everywhere"`; \})[] = `options.songListType`

##### Returns

(\{ `label`: `string`; `value`: `"currentQueue"`; \} \| \{ `label`: `string`; `value`: `"genericLists"`; \} \| \{ `label`: `string`; `value`: `"everywhere"`; \})[]

#### listButtonsPlacement.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### listButtonsPlacement.since

> `readonly` **since**: `"1.1.0"` = `"1.1.0"`

#### listButtonsPlacement.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### listButtonsPlacement.type

> `readonly` **type**: `"select"` = `"select"`

### locale

> `readonly` **locale**: `object`

#### locale.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### locale.category

> `readonly` **category**: `"general"` = `"general"`

#### locale.default

> `readonly` **default**: `"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`

#### locale.group

> `readonly` **group**: `"locale"` = `"locale"`

#### locale.options()

> `readonly` **options**: () => `SelectOption`\<`string` \| `number`\>[] = `options.locale`

##### Returns

`SelectOption`\<`string` \| `number`\>[]

#### locale.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### locale.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### locale.type

> `readonly` **type**: `"select"` = `"select"`

### localeFallback

> `readonly` **localeFallback**: `object`

#### localeFallback.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### localeFallback.advanced

> `readonly` **advanced**: `true` = `true`

#### localeFallback.category

> `readonly` **category**: `"general"` = `"general"`

#### localeFallback.default

> `readonly` **default**: `true` = `true`

#### localeFallback.group

> `readonly` **group**: `"locale"` = `"locale"`

#### localeFallback.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### localeFallback.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### localeFallback.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### logEvents

> `readonly` **logEvents**: `object`

#### logEvents.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### logEvents.advanced

> `readonly` **advanced**: `true` = `true`

#### logEvents.category

> `readonly` **category**: `"general"` = `"general"`

#### logEvents.default

> `readonly` **default**: `boolean`

#### logEvents.group

> `readonly` **group**: `"logging"` = `"logging"`

#### logEvents.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### logEvents.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### logEvents.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### logHttp

> `readonly` **logHttp**: `object`

#### logHttp.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### logHttp.advanced

> `readonly` **advanced**: `true` = `true`

#### logHttp.category

> `readonly` **category**: `"general"` = `"general"`

#### logHttp.default

> `readonly` **default**: `boolean`

#### logHttp.group

> `readonly` **group**: `"logging"` = `"logging"`

#### logHttp.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### logHttp.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### logHttp.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### logLevel

> `readonly` **logLevel**: `object`

#### logLevel.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### logLevel.advanced

> `readonly` **advanced**: `true` = `true`

#### logLevel.category

> `readonly` **category**: `"general"` = `"general"`

#### logLevel.default

> `readonly` **default**: [`Info`](../../types/enumerations/LogLevel.md#info) = `LogLevel.Info`

#### logLevel.group

> `readonly` **group**: `"logging"` = `"logging"`

#### logLevel.options()

> `readonly` **options**: () => `object`[]

##### Returns

`object`[]

#### logLevel.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### logLevel.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### logLevel.type

> `readonly` **type**: `"select"` = `"select"`

### lyricsCacheMaxSize

> `readonly` **lyricsCacheMaxSize**: `object`

#### lyricsCacheMaxSize.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### lyricsCacheMaxSize.advanced

> `readonly` **advanced**: `true` = `true`

#### lyricsCacheMaxSize.category

> `readonly` **category**: `"lyrics"` = `"lyrics"`

#### lyricsCacheMaxSize.default

> `readonly` **default**: `10000` = `10_000`

#### lyricsCacheMaxSize.group

> `readonly` **group**: `"lyricsCache"` = `"lyricsCache"`

#### lyricsCacheMaxSize.max

> `readonly` **max**: `25000` = `25_000`

#### lyricsCacheMaxSize.min

> `readonly` **min**: `1000` = `1000`

#### lyricsCacheMaxSize.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### lyricsCacheMaxSize.renderValue()

> `readonly` **renderValue**: (`val`) => `string`

##### Parameters

###### val

`string`

##### Returns

`string`

#### lyricsCacheMaxSize.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### lyricsCacheMaxSize.step

> `readonly` **step**: `500` = `500`

#### lyricsCacheMaxSize.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### lyricsCacheMaxSize.type

> `readonly` **type**: `"slider"` = `"slider"`

#### lyricsCacheMaxSize.unit()

> `readonly` **unit**: (`val`) => `string`

##### Parameters

###### val

`number`

##### Returns

`string`

### lyricsCacheTTL

> `readonly` **lyricsCacheTTL**: `object`

#### lyricsCacheTTL.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### lyricsCacheTTL.advanced

> `readonly` **advanced**: `true` = `true`

#### lyricsCacheTTL.category

> `readonly` **category**: `"lyrics"` = `"lyrics"`

#### lyricsCacheTTL.default

> `readonly` **default**: `30` = `30`

#### lyricsCacheTTL.group

> `readonly` **group**: `"lyricsCache"` = `"lyricsCache"`

#### lyricsCacheTTL.max

> `readonly` **max**: `100` = `100`

#### lyricsCacheTTL.min

> `readonly` **min**: `5` = `5`

#### lyricsCacheTTL.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### lyricsCacheTTL.renderValue()

> `readonly` **renderValue**: (`val`) => `string`

##### Parameters

###### val

`string`

##### Returns

`string`

#### lyricsCacheTTL.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### lyricsCacheTTL.step

> `readonly` **step**: `1` = `1`

#### lyricsCacheTTL.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### lyricsCacheTTL.type

> `readonly` **type**: `"slider"` = `"slider"`

#### lyricsCacheTTL.unit()

> `readonly` **unit**: (`val`) => `string`

##### Parameters

###### val

`number`

##### Returns

`string`

### lyricsQueueButton

> `readonly` **lyricsQueueButton**: `object`

#### lyricsQueueButton.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### lyricsQueueButton.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### lyricsQueueButton.default

> `readonly` **default**: `true` = `true`

#### lyricsQueueButton.group

> `readonly` **group**: `"queueButtons"` = `"queueButtons"`

#### lyricsQueueButton.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### lyricsQueueButton.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### lyricsQueueButton.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### nextHotkey

> `readonly` **nextHotkey**: `object`

#### nextHotkey.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### nextHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### nextHotkey.default

> `readonly` **default**: `object`

#### nextHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### nextHotkey.default.code

> `readonly` **code**: `"KeyN"` = `"KeyN"`

#### nextHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### nextHotkey.default.shift

> `readonly` **shift**: `true` = `true`

#### nextHotkey.group

> `readonly` **group**: `"rebindNextAndPrevious"` = `"rebindNextAndPrevious"`

#### nextHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### nextHotkey.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### nextHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### nextHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### numbersFormat

> `readonly` **numbersFormat**: `object`

#### numbersFormat.category

> `readonly` **category**: `"general"` = `"general"`

#### numbersFormat.default

> `readonly` **default**: `"short"` = `"short"`

#### numbersFormat.group

> `readonly` **group**: `"numbersFormat"` = `"numbersFormat"`

#### numbersFormat.options()

> `readonly` **options**: () => `object`[]

##### Returns

`object`[]

#### numbersFormat.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### numbersFormat.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### numbersFormat.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### numbersFormat.type

> `readonly` **type**: `"select"` = `"select"`

### numKeysSkipToTime

> `readonly` **numKeysSkipToTime**: `object`

#### numKeysSkipToTime.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### numKeysSkipToTime.category

> `readonly` **category**: `"input"` = `"input"`

#### numKeysSkipToTime.default

> `readonly` **default**: `true` = `true`

#### numKeysSkipToTime.group

> `readonly` **group**: `"numKeysSkipToTime"` = `"numKeysSkipToTime"`

#### numKeysSkipToTime.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### numKeysSkipToTime.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### numKeysSkipToTime.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### numKeysSkipToTime.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### numKeysSkipToTimeDoublePress

> `readonly` **numKeysSkipToTimeDoublePress**: `object`

#### numKeysSkipToTimeDoublePress.category

> `readonly` **category**: `"input"` = `"input"`

#### numKeysSkipToTimeDoublePress.default

> `readonly` **default**: `0` = `0`

#### numKeysSkipToTimeDoublePress.group

> `readonly` **group**: `"numKeysSkipToTime"` = `"numKeysSkipToTime"`

#### numKeysSkipToTimeDoublePress.max

> `readonly` **max**: `3000` = `3_000`

#### numKeysSkipToTimeDoublePress.min

> `readonly` **min**: `0` = `0`

#### numKeysSkipToTimeDoublePress.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### numKeysSkipToTimeDoublePress.renderValue()

> `readonly` **renderValue**: (`value`) => `string`

##### Parameters

###### value

`string`

##### Returns

`string`

#### numKeysSkipToTimeDoublePress.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### numKeysSkipToTimeDoublePress.step

> `readonly` **step**: `100` = `100`

#### numKeysSkipToTimeDoublePress.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### numKeysSkipToTimeDoublePress.type

> `readonly` **type**: `"slider"` = `"slider"`

### numKeysSkipToTimeDoublePressBuffer

> `readonly` **numKeysSkipToTimeDoublePressBuffer**: `object`

#### numKeysSkipToTimeDoublePressBuffer.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### numKeysSkipToTimeDoublePressBuffer.advanced

> `readonly` **advanced**: `true` = `true`

#### numKeysSkipToTimeDoublePressBuffer.category

> `readonly` **category**: `"input"` = `"input"`

#### numKeysSkipToTimeDoublePressBuffer.default

> `readonly` **default**: `5` = `5`

#### numKeysSkipToTimeDoublePressBuffer.group

> `readonly` **group**: `"numKeysSkipToTime"` = `"numKeysSkipToTime"`

#### numKeysSkipToTimeDoublePressBuffer.max

> `readonly` **max**: `30` = `30`

#### numKeysSkipToTimeDoublePressBuffer.min

> `readonly` **min**: `0` = `0`

#### numKeysSkipToTimeDoublePressBuffer.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### numKeysSkipToTimeDoublePressBuffer.renderValue()

> `readonly` **renderValue**: (`value`) => `string`

##### Parameters

###### value

`string`

##### Returns

`string`

#### numKeysSkipToTimeDoublePressBuffer.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### numKeysSkipToTimeDoublePressBuffer.step

> `readonly` **step**: `0.5` = `0.5`

#### numKeysSkipToTimeDoublePressBuffer.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### numKeysSkipToTimeDoublePressBuffer.type

> `readonly` **type**: `"slider"` = `"slider"`

### openPluginDiscoverySite

> `readonly` **openPluginDiscoverySite**: `object`

#### openPluginDiscoverySite.category

> `readonly` **category**: `"plugins"` = `"plugins"`

#### openPluginDiscoverySite.click()

> `readonly` **click**: () => `void`

##### Returns

`void`

#### openPluginDiscoverySite.default

> `readonly` **default**: `undefined` = `undefined`

#### openPluginDiscoverySite.group

> `readonly` **group**: `"pluginList"` = `"pluginList"`

#### openPluginDiscoverySite.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### openPluginDiscoverySite.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### openPluginDiscoverySite.type

> `readonly` **type**: `"button"` = `"button"`

### openPluginList

> `readonly` **openPluginList**: `object`

#### openPluginList.category

> `readonly` **category**: `"plugins"` = `"plugins"`

#### openPluginList.click()

> `readonly` **click**: () => `Promise`\<`void` \| `HTMLElement`\>

##### Returns

`Promise`\<`void` \| `HTMLElement`\>

#### openPluginList.default

> `readonly` **default**: `undefined` = `undefined`

#### openPluginList.group

> `readonly` **group**: `"pluginList"` = `"pluginList"`

#### openPluginList.since

> `readonly` **since**: `"2.1.0-preview.1"` = `"2.1.0-preview.1"`

#### openPluginList.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### openPluginList.type

> `readonly` **type**: `"button"` = `"button"`

### playPauseHotkey

> `readonly` **playPauseHotkey**: `object`

#### playPauseHotkey.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### playPauseHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### playPauseHotkey.default

> `readonly` **default**: `object`

#### playPauseHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### playPauseHotkey.default.code

> `readonly` **code**: `"Pause"` = `"Pause"`

#### playPauseHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### playPauseHotkey.default.shift

> `readonly` **shift**: `false` = `false`

#### playPauseHotkey.group

> `readonly` **group**: `"rebindPlayPause"` = `"rebindPlayPause"`

#### playPauseHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### playPauseHotkey.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### playPauseHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### playPauseHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### previousHotkey

> `readonly` **previousHotkey**: `object`

#### previousHotkey.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### previousHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### previousHotkey.default

> `readonly` **default**: `object`

#### previousHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### previousHotkey.default.code

> `readonly` **code**: `"KeyP"` = `"KeyP"`

#### previousHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### previousHotkey.default.shift

> `readonly` **shift**: `true` = `true`

#### previousHotkey.group

> `readonly` **group**: `"rebindNextAndPrevious"` = `"rebindNextAndPrevious"`

#### previousHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### previousHotkey.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### previousHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### previousHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### rebindNextAndPrevious

> `readonly` **rebindNextAndPrevious**: `object`

#### rebindNextAndPrevious.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### rebindNextAndPrevious.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### rebindNextAndPrevious.default

> `readonly` **default**: `false` = `false`

#### rebindNextAndPrevious.group

> `readonly` **group**: `"rebindNextAndPrevious"` = `"rebindNextAndPrevious"`

#### rebindNextAndPrevious.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### rebindNextAndPrevious.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### rebindNextAndPrevious.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### rebindNextAndPrevious.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### rebindPlayPause

> `readonly` **rebindPlayPause**: `object`

#### rebindPlayPause.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### rebindPlayPause.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### rebindPlayPause.default

> `readonly` **default**: `false` = `false`

#### rebindPlayPause.group

> `readonly` **group**: `"rebindPlayPause"` = `"rebindPlayPause"`

#### rebindPlayPause.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### rebindPlayPause.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### rebindPlayPause.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### rebindPlayPause.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### rememberSongTime

> `readonly` **rememberSongTime**: `object`

#### rememberSongTime.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string` \| `undefined`\>\]

#### rememberSongTime.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### rememberSongTime.default

> `readonly` **default**: `true` = `true`

#### rememberSongTime.group

> `readonly` **group**: `"rememberSongTime"` = `"rememberSongTime"`

#### rememberSongTime.helpText()

> `readonly` **helpText**: () => `string`

##### Returns

`string`

#### rememberSongTime.since

> `readonly` **since**: `"1.1.0"` = `"1.1.0"`

#### rememberSongTime.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### rememberSongTime.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### rememberSongTimeDuration

> `readonly` **rememberSongTimeDuration**: `object`

#### rememberSongTimeDuration.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### rememberSongTimeDuration.default

> `readonly` **default**: `180` = `180`

#### rememberSongTimeDuration.group

> `readonly` **group**: `"rememberSongTime"` = `"rememberSongTime"`

#### rememberSongTimeDuration.max

> `readonly` **max**: `number`

#### rememberSongTimeDuration.min

> `readonly` **min**: `1` = `1`

#### rememberSongTimeDuration.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### rememberSongTimeDuration.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### rememberSongTimeDuration.step

> `readonly` **step**: `1` = `1`

#### rememberSongTimeDuration.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### rememberSongTimeDuration.type

> `readonly` **type**: `"number"` = `"number"`

#### rememberSongTimeDuration.unit

> `readonly` **unit**: `"s"` = `"s"`

### rememberSongTimeMinPlayTime

> `readonly` **rememberSongTimeMinPlayTime**: `object`

#### rememberSongTimeMinPlayTime.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### rememberSongTimeMinPlayTime.default

> `readonly` **default**: `5` = `5`

#### rememberSongTimeMinPlayTime.group

> `readonly` **group**: `"rememberSongTime"` = `"rememberSongTime"`

#### rememberSongTimeMinPlayTime.max

> `readonly` **max**: `30` = `30`

#### rememberSongTimeMinPlayTime.min

> `readonly` **min**: `1` = `1`

#### rememberSongTimeMinPlayTime.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### rememberSongTimeMinPlayTime.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### rememberSongTimeMinPlayTime.step

> `readonly` **step**: `0.5` = `0.5`

#### rememberSongTimeMinPlayTime.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### rememberSongTimeMinPlayTime.type

> `readonly` **type**: `"slider"` = `"slider"`

#### rememberSongTimeMinPlayTime.unit

> `readonly` **unit**: `"s"` = `"s"`

### rememberSongTimeReduction

> `readonly` **rememberSongTimeReduction**: `object`

#### rememberSongTimeReduction.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### rememberSongTimeReduction.default

> `readonly` **default**: `0.2` = `0.2`

#### rememberSongTimeReduction.group

> `readonly` **group**: `"rememberSongTime"` = `"rememberSongTime"`

#### rememberSongTimeReduction.min

> `readonly` **min**: `0` = `0`

#### rememberSongTimeReduction.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### rememberSongTimeReduction.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### rememberSongTimeReduction.step

> `readonly` **step**: `0.01` = `0.01`

#### rememberSongTimeReduction.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### rememberSongTimeReduction.type

> `readonly` **type**: `"number"` = `"number"`

#### rememberSongTimeReduction.unit

> `readonly` **unit**: `"s"` = `"s"`

### rememberSongTimeSites

> `readonly` **rememberSongTimeSites**: `object`

#### rememberSongTimeSites.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string` \| `undefined`\>\]

#### rememberSongTimeSites.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### rememberSongTimeSites.default

> `readonly` **default**: `"all"` = `"all"`

#### rememberSongTimeSites.group

> `readonly` **group**: `"rememberSongTime"` = `"rememberSongTime"`

#### rememberSongTimeSites.options()

> `readonly` **options**: () => (\{ `label`: `string`; `value`: `"all"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \} \| \{ `label`: `string`; `value`: `"ytm"`; \})[] = `options.siteSelection`

##### Returns

(\{ `label`: `string`; `value`: `"all"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \} \| \{ `label`: `string`; `value`: `"ytm"`; \})[]

#### rememberSongTimeSites.since

> `readonly` **since**: `"1.1.0"` = `"1.1.0"`

#### rememberSongTimeSites.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### rememberSongTimeSites.type

> `readonly` **type**: `"select"` = `"select"`

### removeShareTrackingParam

> `readonly` **removeShareTrackingParam**: `object`

#### removeShareTrackingParam.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string` \| `undefined`\>\]

#### removeShareTrackingParam.category

> `readonly` **category**: `"layout"` = `"layout"`

#### removeShareTrackingParam.default

> `readonly` **default**: `true` = `true`

#### removeShareTrackingParam.group

> `readonly` **group**: `"removeShareTrackingParam"` = `"removeShareTrackingParam"`

#### removeShareTrackingParam.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### removeShareTrackingParam.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### removeShareTrackingParam.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### removeShareTrackingParamSites

> `readonly` **removeShareTrackingParamSites**: `object`

#### removeShareTrackingParamSites.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### removeShareTrackingParamSites.advanced

> `readonly` **advanced**: `true` = `true`

#### removeShareTrackingParamSites.category

> `readonly` **category**: `"layout"` = `"layout"`

#### removeShareTrackingParamSites.default

> `readonly` **default**: `"all"` = `"all"`

#### removeShareTrackingParamSites.group

> `readonly` **group**: `"removeShareTrackingParam"` = `"removeShareTrackingParam"`

#### removeShareTrackingParamSites.options()

> `readonly` **options**: () => (\{ `label`: `string`; `value`: `"all"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \} \| \{ `label`: `string`; `value`: `"ytm"`; \})[] = `options.siteSelection`

##### Returns

(\{ `label`: `string`; `value`: `"all"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \} \| \{ `label`: `string`; `value`: `"ytm"`; \})[]

#### removeShareTrackingParamSites.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### removeShareTrackingParamSites.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### removeShareTrackingParamSites.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### removeShareTrackingParamSites.type

> `readonly` **type**: `"select"` = `"select"`

### removeThumbnailRatingBar

> `readonly` **removeThumbnailRatingBar**: `object`

#### removeThumbnailRatingBar.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### removeThumbnailRatingBar.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### removeThumbnailRatingBar.default

> `readonly` **default**: `true` = `true`

#### removeThumbnailRatingBar.group

> `readonly` **group**: `"thumbnailRatingBar"` = `"thumbnailRatingBar"`

#### removeThumbnailRatingBar.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### removeThumbnailRatingBar.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### removeThumbnailRatingBar.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### resetConfig

> `readonly` **resetConfig**: `object`

#### resetConfig.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string` \| `undefined`\>\]

#### resetConfig.category

> `readonly` **category**: `"general"` = `"general"`

#### resetConfig.click()

> `readonly` **click**: () => `Promise`\<`void`\> = `promptResetConfig`

Shows a confirmation prompt to reset the config

##### Returns

`Promise`\<`void`\>

#### resetConfig.group

> `readonly` **group**: `"resetData"` = `"resetData"`

#### resetConfig.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### resetConfig.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### resetConfig.type

> `readonly` **type**: `"button"` = `"button"`

### resetEverything

> `readonly` **resetEverything**: `object`

#### resetEverything.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### resetEverything.advanced

> `readonly` **advanced**: `true` = `true`

#### resetEverything.category

> `readonly` **category**: `"general"` = `"general"`

#### resetEverything.click()

> `readonly` **click**: () => `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### resetEverything.group

> `readonly` **group**: `"resetData"` = `"resetData"`

#### resetEverything.since

> `readonly` **since**: `"2.2.0"` = `"2.2.0"`

#### resetEverything.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### resetEverything.type

> `readonly` **type**: `"button"` = `"button"`

### scrollToActiveSongBtn

> `readonly` **scrollToActiveSongBtn**: `object`

#### scrollToActiveSongBtn.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### scrollToActiveSongBtn.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### scrollToActiveSongBtn.default

> `readonly` **default**: `true` = `true`

#### scrollToActiveSongBtn.group

> `readonly` **group**: `"aboveQueueButtons"` = `"aboveQueueButtons"`

#### scrollToActiveSongBtn.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### scrollToActiveSongBtn.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### scrollToActiveSongBtn.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### setInitialTabVolume

> `readonly` **setInitialTabVolume**: `object`

#### setInitialTabVolume.adornments()

> `readonly` **adornments**: () => (`Promise`\<`string`\> \| () => `Promise`\<`string` \| `undefined`\>)[]

##### Returns

(`Promise`\<`string`\> \| () => `Promise`\<`string` \| `undefined`\>)[]

#### setInitialTabVolume.category

> `readonly` **category**: `"volume"` = `"volume"`

#### setInitialTabVolume.default

> `readonly` **default**: `false` = `false`

#### setInitialTabVolume.group

> `readonly` **group**: `"initialTabVolume"` = `"initialTabVolume"`

#### setInitialTabVolume.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### setInitialTabVolume.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### setInitialTabVolume.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### showToastOnGenericError

> `readonly` **showToastOnGenericError**: `object`

#### showToastOnGenericError.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### showToastOnGenericError.advanced

> `readonly` **advanced**: `true` = `true`

#### showToastOnGenericError.category

> `readonly` **category**: `"general"` = `"general"`

#### showToastOnGenericError.change()

> `readonly` **change**: (`_k`, `_iV`, `newVal`) => `void`

##### Parameters

###### \_k

keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

###### \_iV

[`FeatureConfigValue`](../../types/type-aliases/FeatureConfigValue.md)

###### newVal

[`FeatureConfigValue`](../../types/type-aliases/FeatureConfigValue.md)

##### Returns

`void`

#### showToastOnGenericError.default

> `readonly` **default**: `true` = `true`

#### showToastOnGenericError.group

> `readonly` **group**: `"toasts"` = `"toasts"`

#### showToastOnGenericError.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### showToastOnGenericError.since

> `readonly` **since**: `"2.1.0-preview.1"` = `"2.1.0-preview.1"`

#### showToastOnGenericError.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### showToastOnGenericError.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### showVotes

> `readonly` **showVotes**: `object`

#### showVotes.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### showVotes.category

> `readonly` **category**: `"layout"` = `"layout"`

#### showVotes.default

> `readonly` **default**: `true` = `true`

#### showVotes.group

> `readonly` **group**: `"votes"` = `"votes"`

#### showVotes.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### showVotes.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### showVotes.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### skipToRemTimeHotkey

> `readonly` **skipToRemTimeHotkey**: `object`

#### skipToRemTimeHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### skipToRemTimeHotkey.default

> `readonly` **default**: `object`

#### skipToRemTimeHotkey.default.alt

> `readonly` **alt**: `true` = `true`

#### skipToRemTimeHotkey.default.code

> `readonly` **code**: `"KeyR"` = `"KeyR"`

#### skipToRemTimeHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### skipToRemTimeHotkey.default.shift

> `readonly` **shift**: `false` = `false`

#### skipToRemTimeHotkey.group

> `readonly` **group**: `"skipToRemTimeHotkeyEnabled"` = `"skipToRemTimeHotkeyEnabled"`

#### skipToRemTimeHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### skipToRemTimeHotkey.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### skipToRemTimeHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### skipToRemTimeHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### skipToRemTimeHotkeyEnabled

> `readonly` **skipToRemTimeHotkeyEnabled**: `object`

#### skipToRemTimeHotkeyEnabled.adornments()

> `readonly` **adornments**: () => () => `Promise`\<`string`\>[]

##### Returns

() => `Promise`\<`string`\>[]

#### skipToRemTimeHotkeyEnabled.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### skipToRemTimeHotkeyEnabled.default

> `readonly` **default**: `true` = `true`

#### skipToRemTimeHotkeyEnabled.enable()

> `readonly` **enable**: () => `false` \| `Promise`\<`void` \| `HTMLDivElement`\>

##### Returns

`false` \| `Promise`\<`void` \| `HTMLDivElement`\>

#### skipToRemTimeHotkeyEnabled.group

> `readonly` **group**: `"skipToRemTimeHotkeyEnabled"` = `"skipToRemTimeHotkeyEnabled"`

#### skipToRemTimeHotkeyEnabled.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### skipToRemTimeHotkeyEnabled.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### skipToRemTimeHotkeyEnabled.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### skipToRemTimeHotkeyEnabled.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### songListTrackNumbers

> `readonly` **songListTrackNumbers**: `object`

#### songListTrackNumbers.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### songListTrackNumbers.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### songListTrackNumbers.default

> `readonly` **default**: `"genericLists"` = `"genericLists"`

#### songListTrackNumbers.group

> `readonly` **group**: `"songListTrackNumbers"` = `"songListTrackNumbers"`

#### songListTrackNumbers.options()

> `readonly` **options**: () => (\{ `label`: `string`; `value`: `"currentQueue"`; \} \| \{ `label`: `string`; `value`: `"genericLists"`; \} \| \{ `label`: `string`; `value`: `"everywhere"`; \})[] = `options.songListType`

##### Returns

(\{ `label`: `string`; `value`: `"currentQueue"`; \} \| \{ `label`: `string`; `value`: `"genericLists"`; \} \| \{ `label`: `string`; `value`: `"everywhere"`; \})[]

#### songListTrackNumbers.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### songListTrackNumbers.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### songListTrackNumbers.type

> `readonly` **type**: `"select"` = `"select"`

### songListTrackNumbersEnabled

> `readonly` **songListTrackNumbersEnabled**: `object`

#### songListTrackNumbersEnabled.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### songListTrackNumbersEnabled.category

> `readonly` **category**: `"songLists"` = `"songLists"`

#### songListTrackNumbersEnabled.default

> `readonly` **default**: `true` = `true`

#### songListTrackNumbersEnabled.group

> `readonly` **group**: `"songListTrackNumbers"` = `"songListTrackNumbers"`

#### songListTrackNumbersEnabled.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### songListTrackNumbersEnabled.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### songListTrackNumbersEnabled.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### sponsorBlockIntegration

> `readonly` **sponsorBlockIntegration**: `object`

#### sponsorBlockIntegration.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### sponsorBlockIntegration.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### sponsorBlockIntegration.default

> `readonly` **default**: `true` = `true`

#### sponsorBlockIntegration.group

> `readonly` **group**: `"sponsorBlock"` = `"sponsorBlock"`

#### sponsorBlockIntegration.since

> `readonly` **since**: `"2.1.0-preview.1"` = `"2.1.0-preview.1"`

#### sponsorBlockIntegration.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### sponsorBlockIntegration.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### swapLikeDislikeButtons

> `readonly` **swapLikeDislikeButtons**: `object`

#### swapLikeDislikeButtons.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### swapLikeDislikeButtons.category

> `readonly` **category**: `"layout"` = `"layout"`

#### swapLikeDislikeButtons.default

> `readonly` **default**: `false` = `false`

#### swapLikeDislikeButtons.group

> `readonly` **group**: `"votes"` = `"votes"`

#### swapLikeDislikeButtons.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### swapLikeDislikeButtons.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### swapLikeDislikeButtons.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### switchBetweenSites

> `readonly` **switchBetweenSites**: `object`

#### switchBetweenSites.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### switchBetweenSites.default

> `readonly` **default**: `true` = `true`

#### switchBetweenSites.group

> `readonly` **group**: `"switchBetweenSites"` = `"switchBetweenSites"`

#### switchBetweenSites.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### switchBetweenSites.since

> `readonly` **since**: `"0.2.0"` = `"0.2.0"`

#### switchBetweenSites.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### switchBetweenSites.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### switchSitesHotkey

> `readonly` **switchSitesHotkey**: `object`

#### switchSitesHotkey.category

> `readonly` **category**: `"hotkeys"` = `"hotkeys"`

#### switchSitesHotkey.default

> `readonly` **default**: `object`

#### switchSitesHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### switchSitesHotkey.default.code

> `readonly` **code**: `"F9"` = `"F9"`

#### switchSitesHotkey.default.ctrl

> `readonly` **ctrl**: `false` = `false`

#### switchSitesHotkey.default.shift

> `readonly` **shift**: `false` = `false`

#### switchSitesHotkey.group

> `readonly` **group**: `"switchBetweenSites"` = `"switchBetweenSites"`

#### switchSitesHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### switchSitesHotkey.since

> `readonly` **since**: `"1.1.0"` = `"1.1.0"`

#### switchSitesHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### switchSitesHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### themeSongIntegration

> `readonly` **themeSongIntegration**: `object`

#### themeSongIntegration.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### themeSongIntegration.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### themeSongIntegration.default

> `readonly` **default**: `false` = `false`

#### themeSongIntegration.group

> `readonly` **group**: `"themeSong"` = `"themeSong"`

#### themeSongIntegration.since

> `readonly` **since**: `"2.1.0-preview.1"` = `"2.1.0-preview.1"`

#### themeSongIntegration.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### themeSongIntegration.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### themeSongLightness

> `readonly` **themeSongLightness**: `object`

#### themeSongLightness.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### themeSongLightness.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### themeSongLightness.default

> `readonly` **default**: `"darker"` = `"darker"`

#### themeSongLightness.group

> `readonly` **group**: `"themeSong"` = `"themeSong"`

#### themeSongLightness.options()

> `readonly` **options**: () => (\{ `label`: `string`; `value`: `"darker"`; \} \| \{ `label`: `string`; `value`: `"normal"`; \} \| \{ `label`: `string`; `value`: `"lighter"`; \})[] = `options.colorLightness`

##### Returns

(\{ `label`: `string`; `value`: `"darker"`; \} \| \{ `label`: `string`; `value`: `"normal"`; \} \| \{ `label`: `string`; `value`: `"lighter"`; \})[]

#### themeSongLightness.since

> `readonly` **since**: `"2.1.0-preview.1"` = `"2.1.0-preview.1"`

#### themeSongLightness.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### themeSongLightness.type

> `readonly` **type**: `"select"` = `"select"`

### themeSongVisualizerHotkey

> `readonly` **themeSongVisualizerHotkey**: `object`

#### themeSongVisualizerHotkey.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### themeSongVisualizerHotkey.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### themeSongVisualizerHotkey.default

> `readonly` **default**: `object`

#### themeSongVisualizerHotkey.default.alt

> `readonly` **alt**: `false` = `false`

#### themeSongVisualizerHotkey.default.code

> `readonly` **code**: `"KeyV"` = `"KeyV"`

#### themeSongVisualizerHotkey.default.ctrl

> `readonly` **ctrl**: `true` = `true`

#### themeSongVisualizerHotkey.default.shift

> `readonly` **shift**: `true` = `true`

#### themeSongVisualizerHotkey.group

> `readonly` **group**: `"themeSongVisualizer"` = `"themeSongVisualizer"`

#### themeSongVisualizerHotkey.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### themeSongVisualizerHotkey.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### themeSongVisualizerHotkey.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### themeSongVisualizerHotkey.type

> `readonly` **type**: `"hotkey"` = `"hotkey"`

### themeSongVisualizerHotkeyEnabled

> `readonly` **themeSongVisualizerHotkeyEnabled**: `object`

#### themeSongVisualizerHotkeyEnabled.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### themeSongVisualizerHotkeyEnabled.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### themeSongVisualizerHotkeyEnabled.default

> `readonly` **default**: `false` = `false`

#### themeSongVisualizerHotkeyEnabled.group

> `readonly` **group**: `"themeSongVisualizer"` = `"themeSongVisualizer"`

#### themeSongVisualizerHotkeyEnabled.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### themeSongVisualizerHotkeyEnabled.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### themeSongVisualizerHotkeyEnabled.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### themeSongVisualizerOpacity

> `readonly` **themeSongVisualizerOpacity**: `object`

#### themeSongVisualizerOpacity.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### themeSongVisualizerOpacity.category

> `readonly` **category**: `"integrations"` = `"integrations"`

#### themeSongVisualizerOpacity.default

> `readonly` **default**: `100` = `100`

#### themeSongVisualizerOpacity.group

> `readonly` **group**: `"themeSongVisualizer"` = `"themeSongVisualizer"`

#### themeSongVisualizerOpacity.max

> `readonly` **max**: `100` = `100`

#### themeSongVisualizerOpacity.min

> `readonly` **min**: `0` = `0`

#### themeSongVisualizerOpacity.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### themeSongVisualizerOpacity.step

> `readonly` **step**: `1` = `1`

#### themeSongVisualizerOpacity.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### themeSongVisualizerOpacity.type

> `readonly` **type**: `"number"` = `"number"`

#### themeSongVisualizerOpacity.unit

> `readonly` **unit**: `"%"` = `"%"`

### thumbnailOverlayAlbumArtCacheMaxSize

> `readonly` **thumbnailOverlayAlbumArtCacheMaxSize**: `object`

#### thumbnailOverlayAlbumArtCacheMaxSize.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### thumbnailOverlayAlbumArtCacheMaxSize.advanced

> `readonly` **advanced**: `true` = `true`

#### thumbnailOverlayAlbumArtCacheMaxSize.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayAlbumArtCacheMaxSize.default

> `readonly` **default**: `10000` = `10_000`

#### thumbnailOverlayAlbumArtCacheMaxSize.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayAlbumArtCacheMaxSize.max

> `readonly` **max**: `25000` = `25_000`

#### thumbnailOverlayAlbumArtCacheMaxSize.min

> `readonly` **min**: `500` = `500`

#### thumbnailOverlayAlbumArtCacheMaxSize.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### thumbnailOverlayAlbumArtCacheMaxSize.renderValue()

> `readonly` **renderValue**: (`val`) => `string`

##### Parameters

###### val

`string`

##### Returns

`string`

#### thumbnailOverlayAlbumArtCacheMaxSize.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### thumbnailOverlayAlbumArtCacheMaxSize.step

> `readonly` **step**: `500` = `500`

#### thumbnailOverlayAlbumArtCacheMaxSize.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayAlbumArtCacheMaxSize.type

> `readonly` **type**: `"slider"` = `"slider"`

#### thumbnailOverlayAlbumArtCacheMaxSize.unit()

> `readonly` **unit**: (`val`) => `string`

##### Parameters

###### val

`number`

##### Returns

`string`

### thumbnailOverlayAlbumArtCacheTTL

> `readonly` **thumbnailOverlayAlbumArtCacheTTL**: `object`

#### thumbnailOverlayAlbumArtCacheTTL.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>\]

#### thumbnailOverlayAlbumArtCacheTTL.advanced

> `readonly` **advanced**: `true` = `true`

#### thumbnailOverlayAlbumArtCacheTTL.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayAlbumArtCacheTTL.default

> `readonly` **default**: `30` = `30`

#### thumbnailOverlayAlbumArtCacheTTL.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayAlbumArtCacheTTL.max

> `readonly` **max**: `100` = `100`

#### thumbnailOverlayAlbumArtCacheTTL.min

> `readonly` **min**: `5` = `5`

#### thumbnailOverlayAlbumArtCacheTTL.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### thumbnailOverlayAlbumArtCacheTTL.renderValue()

> `readonly` **renderValue**: (`val`) => `string`

##### Parameters

###### val

`string`

##### Returns

`string`

#### thumbnailOverlayAlbumArtCacheTTL.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### thumbnailOverlayAlbumArtCacheTTL.step

> `readonly` **step**: `1` = `1`

#### thumbnailOverlayAlbumArtCacheTTL.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayAlbumArtCacheTTL.type

> `readonly` **type**: `"slider"` = `"slider"`

#### thumbnailOverlayAlbumArtCacheTTL.unit()

> `readonly` **unit**: (`val`) => `string`

##### Parameters

###### val

`number`

##### Returns

`string`

### thumbnailOverlayBehavior

> `readonly` **thumbnailOverlayBehavior**: `object`

#### thumbnailOverlayBehavior.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### thumbnailOverlayBehavior.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayBehavior.default

> `readonly` **default**: `"songsOnly"` = `"songsOnly"`

#### thumbnailOverlayBehavior.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayBehavior.options()

> `readonly` **options**: () => `object`[]

##### Returns

`object`[]

#### thumbnailOverlayBehavior.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### thumbnailOverlayBehavior.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### thumbnailOverlayBehavior.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayBehavior.type

> `readonly` **type**: `"select"` = `"select"`

### thumbnailOverlayIndicatorOpacity

> `readonly` **thumbnailOverlayIndicatorOpacity**: `object`

#### thumbnailOverlayIndicatorOpacity.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### thumbnailOverlayIndicatorOpacity.advanced

> `readonly` **advanced**: `true` = `true`

#### thumbnailOverlayIndicatorOpacity.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayIndicatorOpacity.default

> `readonly` **default**: `25` = `25`

#### thumbnailOverlayIndicatorOpacity.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayIndicatorOpacity.max

> `readonly` **max**: `100` = `100`

#### thumbnailOverlayIndicatorOpacity.min

> `readonly` **min**: `5` = `5`

#### thumbnailOverlayIndicatorOpacity.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### thumbnailOverlayIndicatorOpacity.step

> `readonly` **step**: `5` = `5`

#### thumbnailOverlayIndicatorOpacity.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayIndicatorOpacity.type

> `readonly` **type**: `"slider"` = `"slider"`

#### thumbnailOverlayIndicatorOpacity.unit

> `readonly` **unit**: `"%"` = `"%"`

### thumbnailOverlayITunesImgRes

> `readonly` **thumbnailOverlayITunesImgRes**: `object`

#### thumbnailOverlayITunesImgRes.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### thumbnailOverlayITunesImgRes.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayITunesImgRes.default

> `readonly` **default**: `2000` = `2000`

#### thumbnailOverlayITunesImgRes.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayITunesImgRes.max

> `readonly` **max**: `3000` = `3000`

#### thumbnailOverlayITunesImgRes.min

> `readonly` **min**: `100` = `100`

#### thumbnailOverlayITunesImgRes.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### thumbnailOverlayITunesImgRes.renderValue()

> `readonly` **renderValue**: (`n`) => `string`

##### Parameters

###### n

`string`

##### Returns

`string`

#### thumbnailOverlayITunesImgRes.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### thumbnailOverlayITunesImgRes.step

> `readonly` **step**: `100` = `100`

#### thumbnailOverlayITunesImgRes.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayITunesImgRes.type

> `readonly` **type**: `"slider"` = `"slider"`

### thumbnailOverlayPreferredSource

> `readonly` **thumbnailOverlayPreferredSource**: `object`

#### thumbnailOverlayPreferredSource.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### thumbnailOverlayPreferredSource.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayPreferredSource.default

> `readonly` **default**: `"am"` = `"am"`

#### thumbnailOverlayPreferredSource.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayPreferredSource.options()

> `readonly` **options**: () => (\{ `label`: `string`; `value`: `"am"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \})[] = `options.thumbOverlaySources`

##### Returns

(\{ `label`: `string`; `value`: `"am"`; \} \| \{ `label`: `string`; `value`: `"yt"`; \})[]

#### thumbnailOverlayPreferredSource.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### thumbnailOverlayPreferredSource.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### thumbnailOverlayPreferredSource.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayPreferredSource.type

> `readonly` **type**: `"select"` = `"select"`

### thumbnailOverlayShowIndicator

> `readonly` **thumbnailOverlayShowIndicator**: `object`

#### thumbnailOverlayShowIndicator.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### thumbnailOverlayShowIndicator.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayShowIndicator.default

> `readonly` **default**: `true` = `true`

#### thumbnailOverlayShowIndicator.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayShowIndicator.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### thumbnailOverlayShowIndicator.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayShowIndicator.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### thumbnailOverlayToggleBtnShown

> `readonly` **thumbnailOverlayToggleBtnShown**: `object`

#### thumbnailOverlayToggleBtnShown.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### thumbnailOverlayToggleBtnShown.category

> `readonly` **category**: `"layout"` = `"layout"`

#### thumbnailOverlayToggleBtnShown.default

> `readonly` **default**: `true` = `true`

#### thumbnailOverlayToggleBtnShown.group

> `readonly` **group**: `"thumbnailOverlay"` = `"thumbnailOverlay"`

#### thumbnailOverlayToggleBtnShown.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### thumbnailOverlayToggleBtnShown.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### thumbnailOverlayToggleBtnShown.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### toastDuration

> `readonly` **toastDuration**: `object`

#### toastDuration.category

> `readonly` **category**: `"general"` = `"general"`

#### toastDuration.change()

> `readonly` **change**: (`_k`, `_iV`, `newVal`) => `Promise`\<`void`\>

##### Parameters

###### \_k

keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

###### \_iV

[`FeatureConfigValue`](../../types/type-aliases/FeatureConfigValue.md)

###### newVal

[`FeatureConfigValue`](../../types/type-aliases/FeatureConfigValue.md)

##### Returns

`Promise`\<`void`\>

#### toastDuration.default

> `readonly` **default**: `4` = `4`

#### toastDuration.group

> `readonly` **group**: `"toasts"` = `"toasts"`

#### toastDuration.max

> `readonly` **max**: `15` = `15`

#### toastDuration.min

> `readonly` **min**: `0` = `0`

#### toastDuration.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### toastDuration.renderValue()

> `readonly` **renderValue**: (`val`) => `string`

##### Parameters

###### val

`string`

##### Returns

`string`

#### toastDuration.since

> `readonly` **since**: `"2.1.0"` = `"2.1.0"`

#### toastDuration.step

> `readonly` **step**: `0.5` = `0.5`

#### toastDuration.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### toastDuration.type

> `readonly` **type**: `"slider"` = `"slider"`

### truncatePlayerBarSubtitles

> `readonly` **truncatePlayerBarSubtitles**: `object`

#### truncatePlayerBarSubtitles.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### truncatePlayerBarSubtitles.category

> `readonly` **category**: `"layout"` = `"layout"`

#### truncatePlayerBarSubtitles.default

> `readonly` **default**: `true` = `true`

#### truncatePlayerBarSubtitles.group

> `readonly` **group**: `"fixLayout"` = `"fixLayout"`

#### truncatePlayerBarSubtitles.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### truncatePlayerBarSubtitles.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### truncatePlayerBarSubtitles.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### versionCheck

> `readonly` **versionCheck**: `object`

#### versionCheck.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string` \| `undefined`\>\]

#### versionCheck.category

> `readonly` **category**: `"general"` = `"general"`

#### versionCheck.default

> `readonly` **default**: `true` = `true`

#### versionCheck.group

> `readonly` **group**: `"versionCheck"` = `"versionCheck"`

#### versionCheck.since

> `readonly` **since**: `"1.1.0"` = `"1.1.0"`

#### versionCheck.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`, `"yt"`\]

#### versionCheck.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### volumeSharedBetweenTabs

> `readonly` **volumeSharedBetweenTabs**: `object`

#### volumeSharedBetweenTabs.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### volumeSharedBetweenTabs.category

> `readonly` **category**: `"volume"` = `"volume"`

#### volumeSharedBetweenTabs.default

> `readonly` **default**: `false` = `false`

#### volumeSharedBetweenTabs.group

> `readonly` **group**: `"volumeSharedBetweenTabs"` = `"volumeSharedBetweenTabs"`

#### volumeSharedBetweenTabs.since

> `readonly` **since**: `"2.0.0"` = `"2.0.0"`

#### volumeSharedBetweenTabs.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### volumeSharedBetweenTabs.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### volumeSliderExponential

> `readonly` **volumeSliderExponential**: `object`

#### volumeSliderExponential.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### volumeSliderExponential.category

> `readonly` **category**: `"volume"` = `"volume"`

#### volumeSliderExponential.default

> `readonly` **default**: `"linear"` = `"linear"`

#### volumeSliderExponential.group

> `readonly` **group**: `"volumeSlider"` = `"volumeSlider"`

#### volumeSliderExponential.options()

> `readonly` **options**: () => `object`[]

##### Returns

`object`[]

#### volumeSliderExponential.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### volumeSliderExponential.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### volumeSliderExponential.type

> `readonly` **type**: `"select"` = `"select"`

### volumeSliderExponentialLabelType

> `readonly` **volumeSliderExponentialLabelType**: `object`

#### volumeSliderExponentialLabelType.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>\]

#### volumeSliderExponentialLabelType.category

> `readonly` **category**: `"volume"` = `"volume"`

#### volumeSliderExponentialLabelType.default

> `readonly` **default**: `"valueBased"` = `"valueBased"`

#### volumeSliderExponentialLabelType.group

> `readonly` **group**: `"volumeSlider"` = `"volumeSlider"`

#### volumeSliderExponentialLabelType.options()

> `readonly` **options**: () => `object`[]

##### Returns

`object`[]

#### volumeSliderExponentialLabelType.reloadRequired

> `readonly` **reloadRequired**: `false` = `false`

#### volumeSliderExponentialLabelType.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### volumeSliderExponentialLabelType.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### volumeSliderExponentialLabelType.type

> `readonly` **type**: `"select"` = `"select"`

### volumeSliderLabel

> `readonly` **volumeSliderLabel**: `object`

#### volumeSliderLabel.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### volumeSliderLabel.category

> `readonly` **category**: `"volume"` = `"volume"`

#### volumeSliderLabel.default

> `readonly` **default**: `true` = `true`

#### volumeSliderLabel.group

> `readonly` **group**: `"volumeSlider"` = `"volumeSlider"`

#### volumeSliderLabel.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### volumeSliderLabel.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### volumeSliderLabel.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### volumeSliderScrollStep

> `readonly` **volumeSliderScrollStep**: `object`

#### volumeSliderScrollStep.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### volumeSliderScrollStep.category

> `readonly` **category**: `"volume"` = `"volume"`

#### volumeSliderScrollStep.default

> `readonly` **default**: `4` = `4`

#### volumeSliderScrollStep.group

> `readonly` **group**: `"volumeSlider"` = `"volumeSlider"`

#### volumeSliderScrollStep.max

> `readonly` **max**: `25` = `25`

#### volumeSliderScrollStep.min

> `readonly` **min**: `1` = `1`

#### volumeSliderScrollStep.since

> `readonly` **since**: `"1.1.0"` = `"1.1.0"`

#### volumeSliderScrollStep.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### volumeSliderScrollStep.type

> `readonly` **type**: `"slider"` = `"slider"`

#### volumeSliderScrollStep.unit

> `readonly` **unit**: `"%"` = `"%"`

### volumeSliderSize

> `readonly` **volumeSliderSize**: `object`

#### volumeSliderSize.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### volumeSliderSize.category

> `readonly` **category**: `"volume"` = `"volume"`

#### volumeSliderSize.default

> `readonly` **default**: `150` = `150`

#### volumeSliderSize.group

> `readonly` **group**: `"volumeSlider"` = `"volumeSlider"`

#### volumeSliderSize.max

> `readonly` **max**: `500` = `500`

#### volumeSliderSize.min

> `readonly` **min**: `50` = `50`

#### volumeSliderSize.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### volumeSliderSize.step

> `readonly` **step**: `1` = `1`

#### volumeSliderSize.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### volumeSliderSize.type

> `readonly` **type**: `"number"` = `"number"`

#### volumeSliderSize.unit

> `readonly` **unit**: `"px"` = `"px"`

### volumeSliderStep

> `readonly` **volumeSliderStep**: `object`

#### volumeSliderStep.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### volumeSliderStep.category

> `readonly` **category**: `"volume"` = `"volume"`

#### volumeSliderStep.default

> `readonly` **default**: `2` = `2`

#### volumeSliderStep.group

> `readonly` **group**: `"volumeSlider"` = `"volumeSlider"`

#### volumeSliderStep.max

> `readonly` **max**: `25` = `25`

#### volumeSliderStep.min

> `readonly` **min**: `1` = `1`

#### volumeSliderStep.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### volumeSliderStep.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### volumeSliderStep.type

> `readonly` **type**: `"slider"` = `"slider"`

#### volumeSliderStep.unit

> `readonly` **unit**: `"%"` = `"%"`

### watchPageFullSize

> `readonly` **watchPageFullSize**: `object`

#### watchPageFullSize.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### watchPageFullSize.category

> `readonly` **category**: `"layout"` = `"layout"`

#### watchPageFullSize.default

> `readonly` **default**: `true` = `true`

#### watchPageFullSize.group

> `readonly` **group**: `"watchPageFullSize"` = `"watchPageFullSize"`

#### watchPageFullSize.since

> `readonly` **since**: `"3.0.0"` = `"3.0.0"`

#### watchPageFullSize.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### watchPageFullSize.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### watermarkEnabled

> `readonly` **watermarkEnabled**: `object`

#### watermarkEnabled.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### watermarkEnabled.category

> `readonly` **category**: `"layout"` = `"layout"`

#### watermarkEnabled.default

> `readonly` **default**: `true` = `true`

#### watermarkEnabled.group

> `readonly` **group**: `"watermarkEnabled"` = `"watermarkEnabled"`

#### watermarkEnabled.since

> `readonly` **since**: `"1.0.0"` = `"1.0.0"`

#### watermarkEnabled.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### watermarkEnabled.type

> `readonly` **type**: `"toggle"` = `"toggle"`

### yesImStillThere

> `readonly` **yesImStillThere**: `object`

#### yesImStillThere.adornments

> `readonly` **adornments**: \[() => `Promise`\<`string`\>, () => `Promise`\<`string` \| `undefined`\>\]

#### yesImStillThere.category

> `readonly` **category**: `"behavior"` = `"behavior"`

#### yesImStillThere.default

> `readonly` **default**: `true` = `true`

#### yesImStillThere.group

> `readonly` **group**: `"yesImStillThere"` = `"yesImStillThere"`

#### yesImStillThere.since

> `readonly` **since**: `"3.1.0"` = `"3.1.0"`

#### yesImStillThere.supportedSites

> `readonly` **supportedSites**: \[`"ytm"`\]

#### yesImStillThere.type

> `readonly` **type**: `"toggle"` = `"toggle"`
