[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getLikeDislikeBtns

# Function: getLikeDislikeBtns()

> **getLikeDislikeBtns**(): `object`

Defined in: [src/utils/dom.ts:176](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/dom.ts#L176)

Returns the like/dislike button elements based on the current domain and the current like state ("LIKE" / "DISLIKE" / "INDIFFERENT").  
The btnRenderer element is a parent of both buttons.

## Returns

`object`

### btnRenderer

> **btnRenderer**: `HTMLElement` \| `undefined`

### dislikeBtn

> **dislikeBtn**: `HTMLButtonElement` \| `undefined`

### likeBtn

> **likeBtn**: `HTMLButtonElement` \| `undefined`

### likeState

> **likeState**: [`LikeDislikeState`](../../types/type-aliases/LikeDislikeState.md) \| `undefined`
