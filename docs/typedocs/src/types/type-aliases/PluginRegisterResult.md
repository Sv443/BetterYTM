[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / PluginRegisterResult

# Type Alias: PluginRegisterResult

> **PluginRegisterResult** = `object`

Defined in: [src/types.ts:350](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L350)

Result of a plugin registration

## Properties

### events

> **events**: `NanoEmitter`\<[`PluginEventMap`](PluginEventMap.md)\>

Defined in: [src/types.ts:354](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L354)

NanoEmitter instance for plugin events - see [`PluginEventMap`](PluginEventMap.md) for a list of events

***

### info

> **info**: [`PluginInfo`](PluginInfo.md)

Defined in: [src/types.ts:352](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L352)

Public info about the registered plugin

***

### permissions

> **permissions**: `object`

Defined in: [src/types.ts:358](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L358)

Permissions granted to the plugin - this is a bitwise OR of [`PluginIntent`](../enumerations/PluginIntent.md) values under the `int` prop, or an array of them under the `array` prop

#### array

> **array**: [`PluginIntent`](../enumerations/PluginIntent.md)[]

#### int

> **int**: `number`

***

### token

> **token**: `string`

Defined in: [src/types.ts:356](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L356)

Authentication token for the plugin to use in certain restricted function calls
