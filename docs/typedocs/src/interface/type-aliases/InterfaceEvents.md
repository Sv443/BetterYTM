[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / InterfaceEvents

# Type Alias: InterfaceEvents

> **InterfaceEvents** = `object`

Defined in: [src/interface.ts:34](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L34)

All events that can be emitted on the BYTM interface and the data they provide

## Properties

### bytm:allReady

> **bytm:allReady**: `undefined`

Defined in: [src/interface.ts:69](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L69)

Emitted when all features have been initialized or initialization has timed out.

***

### bytm:artworkCacheEntryAdded

> **bytm:artworkCacheEntryAdded**: `object`

Defined in: [src/interface.ts:97](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L97)

Emitted when an entry is added to the artwork cache. Note: `entry.url` will be the *template URL* with a default resolution of 100x100. Use a simple string replacement to get any other resolution

#### album

> **album**: `string`

#### artist

> **artist**: `string`

#### entry

> **entry**: [`ArtCacheEntry`](../../features/type-aliases/ArtCacheEntry.md)

***

### bytm:configReady

> **bytm:configReady**: `undefined`

Defined in: [src/interface.ts:39](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L39)

Emitted as soon as the feature config has finished loading and can be accessed via `unsafeWindow.BYTM.getFeatures(token)`

***

### bytm:dialogClosed

> **bytm:dialogClosed**: [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) \| `undefined`

Defined in: [src/interface.ts:86](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L86)

Emitted when a dialog was closed - returns the dialog's instance (or undefined in the case of the config menu)

***

### bytm:dialogClosed:id

> **bytm:dialogClosed:id**: [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) \| `undefined`

Defined in: [src/interface.ts:88](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L88)

Emitted when the dialog with the specified ID was closed - returns the dialog's instance (or undefined in the case of the config menu) - in TS, use `"bytm:dialogClosed:myIdWhatever" as "bytm:dialogClosed:id"` to make the error go away

***

### bytm:dialogOpened

> **bytm:dialogOpened**: [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) \| `undefined`

Defined in: [src/interface.ts:82](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L82)

Emitted when a dialog was opened - returns the dialog's instance (or undefined in the case of the config menu)

***

### bytm:dialogOpened:id

> **bytm:dialogOpened:id**: [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) \| `undefined`

Defined in: [src/interface.ts:84](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L84)

Emitted when the dialog with the specified ID was opened - returns the dialog's instance (or undefined in the case of the config menu) - in TS, use `"bytm:dialogOpened:myIdWhatever" as "bytm:dialogOpened:id"` to make the error go away

***

### bytm:fatalError

> **bytm:fatalError**: `string`

Defined in: [src/interface.ts:79](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L79)

Emitted when a fatal error occurs and the script can't continue to run.  
Returns a short error description that's not really meant to be displayed to the user (console is fine).  
But may be helpful in plugin development if the plugin causes an internal error.

***

### bytm:featureInitialized

> **bytm:featureInitialized**: `string`

Defined in: [src/interface.ts:61](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L61)

Emitted when a feature has been initialized. The data is the feature's key as seen in `onDomLoad()` of `src/index.ts`

***

### bytm:featureInitialized:id

> **bytm:featureInitialized:id**: `void`

Defined in: [src/interface.ts:63](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L63)

Emitted when the feature with the specified key has been initialized - in TS, use `"bytm:featureInitialized:myFeatureKey" as "bytm:featureInitialized:id"` to make the error go away

***

### bytm:featureInitStarted

> **bytm:featureInitStarted**: `undefined`

Defined in: [src/interface.ts:59](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L59)

Emitted when the feature initialization has started.  
This is the last event that is emitted before the `bytm:ready` event.  
As soon as this is emitted, you cannot register any more plugins.

***

### bytm:lyricsCacheCleared

> **bytm:lyricsCacheCleared**: `undefined`

Defined in: [src/interface.ts:93](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L93)

Emitted when the lyrics cache has been cleared

***

### bytm:lyricsCacheEntryAdded

> **bytm:lyricsCacheEntryAdded**: `object`

Defined in: [src/interface.ts:95](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L95)

Emitted when an entry is added to the lyrics cache - "penalized" entries get removed from cache faster because they were less related in lyrics lookups, opposite to the "best" entries

#### entry

> **entry**: [`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md)

#### type

> **type**: `"best"` \| `"penalized"`

***

### bytm:lyricsCacheReady

> **bytm:lyricsCacheReady**: `undefined`

Defined in: [src/interface.ts:41](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L41)

Emitted when the lyrics cache has been loaded

***

### bytm:lyricsLoaded

> **bytm:lyricsLoaded**: `object`

Defined in: [src/interface.ts:91](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L91)

Emitted whenever the lyrics URL for a song is loaded

#### artists

> **artists**: `string`

#### title

> **title**: `string`

#### type

> **type**: `"current"` \| `"queue"`

#### url

> **url**: `string`

***

### bytm:observersReady

> **bytm:observersReady**: `undefined`

Defined in: [src/interface.ts:52](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L52)

Emitted whenever the SelectorObserver instances have been initialized and can be used to listen for DOM changes and wait for elements to be available.  
Use `unsafeWindow.BYTM.addObserverListener(name, selector, opts)` to add custom listener functions to the observers (see contributing guide).

***

### bytm:preInitPlugin()

> **bytm:preInitPlugin**: (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md)

Defined in: [src/interface.ts:45](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L45)

When this is emitted, plugins may register themselves at a much earlier stage, before things like the feature config are even loaded

#### Parameters

##### pluginDef

[`PluginDef`](../../types/type-aliases/PluginDef.md)

#### Returns

[`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md)

***

### bytm:ready

> **bytm:ready**: `undefined`

Defined in: [src/interface.ts:67](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L67)

Emitted when BYTM has finished general initialization.

***

### bytm:registerPlugin()

> **bytm:registerPlugin**: (`pluginDef`) => [`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md)

Defined in: [src/interface.ts:47](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L47)

When this is emitted, this is your call to register your plugin using the function passed as the sole argument

#### Parameters

##### pluginDef

[`PluginDef`](../../types/type-aliases/PluginDef.md)

#### Returns

[`PluginRegisterResult`](../../types/type-aliases/PluginRegisterResult.md)

***

### bytm:setLocale

> **bytm:setLocale**: `object`

Defined in: [src/interface.ts:43](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L43)

Emitted whenever the locale is changed - if a plugin changed the locale, the plugin ID is provided as well

#### locale

> **locale**: [`TrLocale`](../../utils/type-aliases/TrLocale.md)

#### pluginId?

> `optional` **pluginId**: `string`
