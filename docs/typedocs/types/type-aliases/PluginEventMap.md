[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / PluginEventMap

# Type Alias: PluginEventMap

> **PluginEventMap** = `object` & [`SiteEventsMapPrefixed`](../../siteEvents/type-aliases/SiteEventsMapPrefixed.md) & [`InterfaceEventsMap`](../../interface/type-aliases/InterfaceEventsMap.md)

Defined in: [src/types.ts:377](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L377)

All events that are dispatched to plugins individually, including everything in SiteEventsMap and [`InterfaceEventsMap`](../../interface/type-aliases/InterfaceEventsMap.md) - these don't have a prefix since they can't conflict with other events

## Type Declaration

### pluginRegistered()

> **pluginRegistered**: (`info`) => `void`

Emitted when a plugin is registered on BYTM's side and can make use of authenticated API calls

#### Parameters

##### info

[`PluginInfo`](PluginInfo.md)

#### Returns

`void`
