[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [dialogs/prompt](../README.md) / BaseRenderProps

# Type Alias: BaseRenderProps

> **BaseRenderProps** = `object`

Defined in: [src/dialogs/prompt.ts:41](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L41)

Base props for rendering any type of prompt dialog - see [`()`](../functions/showPrompt.md)

## Properties

### confirmBtnText?

> `optional` **confirmBtnText**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:43](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L43)

***

### confirmBtnTooltip?

> `optional` **confirmBtnTooltip**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:44](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L44)

***

### denyBtnText?

> `optional` **denyBtnText**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:45](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L45)

***

### denyBtnTooltip?

> `optional` **denyBtnTooltip**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:46](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L46)

***

### dialogOptions?

> `optional` **dialogOptions**: `Partial`\<`Omit`\<[`BytmDialogOptions`](../../../components/BytmDialog/type-aliases/BytmDialogOptions.md), `"id"` \| `"renderBody"` \| `"renderHeader"` \| `"renderFooter"`\>\>

Defined in: [src/dialogs/prompt.ts:56](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L56)

Partial override of the underlying [`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md) options (except `id` and render functions)

***

### extraButtons?

> `optional` **extraButtons**: (`dialog`) => `Promise`\<`HTMLButtonElement`\> \| `HTMLButtonElement`[]

Defined in: [src/dialogs/prompt.ts:52](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L52)

Array of functions that create extra button elements appended to the footer row - placement controlled by [`extraButtonsPosition`](#extrabuttonsposition)  
Function gets passed the dialog instance as a parameter.  
Note: these are completely unmanaged by the prompt dialog, so they won't make it resolve, and also won't close it when clicked.

#### Parameters

##### dialog

[`PromptDialog`](../classes/PromptDialog.md)

#### Returns

`Promise`\<`HTMLButtonElement`\> \| `HTMLButtonElement`

***

### extraButtonsPosition?

> `optional` **extraButtonsPosition**: [`ExtraButtonsPosition`](ExtraButtonsPosition.md)

Defined in: [src/dialogs/prompt.ts:54](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L54)

Where to place [`extraButtons`](#extrabuttons) relative to the built-in confirm/close buttons - defaults to `"between"`

***

### message

> **message**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:42](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/dialogs/prompt.ts#L42)
