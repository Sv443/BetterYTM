[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / waitVideoElementReady

# Function: waitVideoElementReady()

> **waitVideoElementReady**(): `Promise`\<`HTMLVideoElement`\>

Defined in: [src/utils/dom.ts:141](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/dom.ts#L141)

Waits for the DOM to be loaded and the video element to be in its readyState 4 or until the "canplay" event is emitted and then returns it.  
Could take a very long time to resolve if the `/watch` page isn't open.  
Resolves immediately if the video element is already ready.

## Returns

`Promise`\<`HTMLVideoElement`\>
