[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/dialogs/prompt](../README.md) / PromptRenderProps

# Type Alias: PromptRenderProps

> **PromptRenderProps** = [`BaseRenderProps`](BaseRenderProps.md) & `ConfirmBtnProps` & `object`

Defined in: [src/dialogs/prompt.ts:28](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L28)

Props for rendering a `prompt()`-like dialog - see [`()`](../functions/showPrompt.md)

## Type Declaration

### defaultValue?

> `optional` **defaultValue**: `StringGen`

Initial value of the text input field - defaults to an empty string if not provided

### textarea?

> `optional` **textarea**: `boolean`

Whether to render the text input as a textarea - defaults to false (single line input)

### type

> **type**: `"prompt"`
