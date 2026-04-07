[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / initBeforeUnloadHook

# Function: initBeforeUnloadHook()

> **initBeforeUnloadHook**(): `Promise`\<`void`\>

Defined in: [src/features/behavior.ts:29](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/features/behavior.ts#L29)

Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site

## Returns

`Promise`\<`void`\>
