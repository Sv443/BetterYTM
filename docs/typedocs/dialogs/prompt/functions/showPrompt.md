[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [dialogs/prompt](../README.md) / showPrompt

# Function: showPrompt()

Custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions

## Call Signature

> **showPrompt**(`props`): `Promise`\<`boolean`\>

Defined in: [src/dialogs/prompt.ts:275](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L275)

Shows a `confirm()`-like prompt dialog with the specified message and resolves true if the user confirms it or false if they deny or cancel it

### Parameters

#### props

[`ConfirmRenderProps`](../type-aliases/ConfirmRenderProps.md)

### Returns

`Promise`\<`boolean`\>

## Call Signature

> **showPrompt**(`props`): `Promise`\<`true`\>

Defined in: [src/dialogs/prompt.ts:277](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L277)

Shows an `alert()`-like prompt dialog with the specified message and always resolves true once the user dismisses it - for this type, only the close button will exist

### Parameters

#### props

[`AlertRenderProps`](../type-aliases/AlertRenderProps.md)

### Returns

`Promise`\<`true`\>

## Call Signature

> **showPrompt**(`props`): `Promise`\<`string` \| `null`\>

Defined in: [src/dialogs/prompt.ts:279](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L279)

Shows a `prompt()`-like dialog with the specified message and default value and resolves the entered value if the user confirms it or null if they cancel it

### Parameters

#### props

[`PromptRenderProps`](../type-aliases/PromptRenderProps.md)

### Returns

`Promise`\<`string` \| `null`\>
