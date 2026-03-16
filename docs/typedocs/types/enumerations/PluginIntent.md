[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / PluginIntent

# Enumeration: PluginIntent

Defined in: [src/types.ts:275](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L275)

Intents (permissions) BYTM has to grant your plugin for it to be able to access certain features.  
TODO: this feature is unfinished, but you should still specify the intents your plugin needs.  
Never request more permissions than you need, as this is a bad practice and can lead to your plugin being rejected.

## Enumeration Members

### CreateModalDialogs

> **CreateModalDialogs**: `32`

Defined in: [src/types.ts:287](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L287)

Plugin can create modal dialogs

***

### FullAccess

> **FullAccess**: `512`

Defined in: [src/types.ts:295](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L295)

Grants all other intents

***

### InternalAccess

> **InternalAccess**: `256`

Defined in: [src/types.ts:293](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L293)

Plugin has access to deeply internal functions and instances

***

### ReadAutoLikeData

> **ReadAutoLikeData**: `64`

Defined in: [src/types.ts:289](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L289)

Plugin can read auto-like data

***

### ReadFeatureConfig

> **ReadFeatureConfig**: `1`

Defined in: [src/types.ts:277](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L277)

Plugin can read the feature configuration

***

### SeeHiddenConfigValues

> **SeeHiddenConfigValues**: `4`

Defined in: [src/types.ts:281](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L281)

Plugin has access to hidden config values

***

### WriteAutoLikeData

> **WriteAutoLikeData**: `128`

Defined in: [src/types.ts:291](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L291)

Plugin can write to auto-like data

***

### WriteFeatureConfig

> **WriteFeatureConfig**: `2`

Defined in: [src/types.ts:279](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L279)

Plugin can write to the feature configuration

***

### WriteLyricsCache

> **WriteLyricsCache**: `8`

Defined in: [src/types.ts:283](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L283)

Plugin can write to the lyrics cache

***

### WriteTranslations

> **WriteTranslations**: `16`

Defined in: [src/types.ts:285](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L285)

Plugin can add new translations and overwrite existing ones
