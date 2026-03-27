[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [components/toast](../README.md) / showIconToast

# Function: showIconToast()

> **showIconToast**(`__namedParameters`): `Promise`\<`void` \| `HTMLDivElement`\>

Defined in: [src/components/toast.ts:73](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/components/toast.ts#L73)

Shows a toast message with an icon.

## Parameters

### \_\_namedParameters

[`IconToastProps`](../type-aliases/IconToastProps.md)

## Returns

`Promise`\<`void` \| `HTMLDivElement`\>

The toast element if it could be immediately shown, otherwise `void` (like when it was queued to be shown later)
