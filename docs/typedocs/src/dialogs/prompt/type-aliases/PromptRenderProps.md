[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/dialogs/prompt](../README.md) / PromptRenderProps

# Type Alias: PromptRenderProps

> **PromptRenderProps** = [`BaseRenderProps`](BaseRenderProps.md) & `object`

Defined in: [src/dialogs/prompt.ts:29](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/dialogs/prompt.ts#L29)

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
