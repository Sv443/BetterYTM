[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/dialogs/prompt](../README.md) / showPrompt

# Function: showPrompt()

Custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions

## Call Signature

> **showPrompt**(`props`): `Promise`\<`boolean`\>

Defined in: [src/dialogs/prompt.ts:297](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L297)

Shows a `confirm()`-like prompt dialog with the specified message and resolves true if the user confirms it or false if they deny or cancel it

### Parameters

#### props

[`ConfirmRenderProps`](../type-aliases/ConfirmRenderProps.md)

### Returns

`Promise`\<`boolean`\>

## Call Signature

> **showPrompt**(`props`): `Promise`\<`true`\>

Defined in: [src/dialogs/prompt.ts:299](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L299)

Shows an `alert()`-like prompt dialog with the specified message and always resolves true once the user dismisses it - for this type, only the close button will exist

### Parameters

#### props

[`AlertRenderProps`](../type-aliases/AlertRenderProps.md)

### Returns

`Promise`\<`true`\>

## Call Signature

> **showPrompt**(`props`): `Promise`\<`string` \| `null`\>

Defined in: [src/dialogs/prompt.ts:301](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L301)

Shows a `prompt()`-like dialog with the specified message and default value and resolves the entered value if the user confirms it or null if they cancel it

### Parameters

#### props

[`PromptRenderProps`](../type-aliases/PromptRenderProps.md)

### Returns

`Promise`\<`string` \| `null`\>
