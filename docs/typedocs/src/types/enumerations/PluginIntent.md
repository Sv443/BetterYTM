[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / PluginIntent

# Enumeration: PluginIntent

Defined in: [src/types.ts:326](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L326)

Intents (permissions) BYTM has to grant your plugin for it to be able to access certain features.  
TODO: this feature is unfinished, but you should still specify the intents your plugin needs.  
Never request more permissions than you need, as this is a bad practice and can lead to your plugin being rejected.

## Enumeration Members

### CreateModalDialogs

> **CreateModalDialogs**: `32`

Defined in: [src/types.ts:338](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L338)

Plugin can create modal dialogs

***

### FullAccess

> **FullAccess**: `512`

Defined in: [src/types.ts:346](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L346)

Grants all other intents

***

### InternalAccess

> **InternalAccess**: `256`

Defined in: [src/types.ts:344](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L344)

Plugin has access to deeply internal functions and instances

***

### ReadAutoLikeData

> **ReadAutoLikeData**: `64`

Defined in: [src/types.ts:340](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L340)

Plugin can read auto-like data

***

### ReadFeatureConfig

> **ReadFeatureConfig**: `1`

Defined in: [src/types.ts:328](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L328)

Plugin can read the feature configuration

***

### SeeHiddenConfigValues

> **SeeHiddenConfigValues**: `4`

Defined in: [src/types.ts:332](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L332)

Plugin has access to hidden config values

***

### WriteAutoLikeData

> **WriteAutoLikeData**: `128`

Defined in: [src/types.ts:342](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L342)

Plugin can write to auto-like data

***

### WriteFeatureConfig

> **WriteFeatureConfig**: `2`

Defined in: [src/types.ts:330](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L330)

Plugin can write to the feature configuration

***

### WriteLyricsCache

> **WriteLyricsCache**: `8`

Defined in: [src/types.ts:334](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L334)

Plugin can write to the lyrics cache

***

### WriteTranslations

> **WriteTranslations**: `16`

Defined in: [src/types.ts:336](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L336)

Plugin can add new translations and overwrite existing ones
