[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / PluginRegisterResult

# Type Alias: PluginRegisterResult

> **PluginRegisterResult** = `object`

Defined in: [src/types.ts:297](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L297)

Result of a plugin registration

## Properties

### events

> **events**: `NanoEmitter`\<[`PluginEventMap`](PluginEventMap.md)\>

Defined in: [src/types.ts:301](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L301)

NanoEmitter instance for plugin events - see [`PluginEventMap`](PluginEventMap.md) for a list of events

***

### info

> **info**: [`PluginInfo`](PluginInfo.md)

Defined in: [src/types.ts:299](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L299)

Public info about the registered plugin

***

### permissions

> **permissions**: `object`

Defined in: [src/types.ts:305](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L305)

Permissions granted to the plugin - this is a bitwise OR of [`PluginIntent`](../enumerations/PluginIntent.md) values under the `int` prop, or an array of them under the `array` prop

#### array

> **array**: [`PluginIntent`](../enumerations/PluginIntent.md)[]

#### int

> **int**: `number`

***

### token

> **token**: `string`

Defined in: [src/types.ts:303](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L303)

Authentication token for the plugin to use in certain restricted function calls
