[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / PluginRegisterResult

# Type Alias: PluginRegisterResult

> **PluginRegisterResult** = `object`

Defined in: [src/types.ts:299](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L299)

Result of a plugin registration

## Properties

### events

> **events**: `NanoEmitter`\<[`PluginEventMap`](PluginEventMap.md)\>

Defined in: [src/types.ts:303](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L303)

NanoEmitter instance for plugin events - see [`PluginEventMap`](PluginEventMap.md) for a list of events

***

### info

> **info**: [`PluginInfo`](PluginInfo.md)

Defined in: [src/types.ts:301](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L301)

Public info about the registered plugin

***

### permissions

> **permissions**: `object`

Defined in: [src/types.ts:307](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L307)

Permissions granted to the plugin - this is a bitwise OR of [`PluginIntent`](../enumerations/PluginIntent.md) values under the `int` prop, or an array of them under the `array` prop

#### array

> **array**: [`PluginIntent`](../enumerations/PluginIntent.md)[]

#### int

> **int**: `number`

***

### token

> **token**: `string`

Defined in: [src/types.ts:305](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L305)

Authentication token for the plugin to use in certain restricted function calls
