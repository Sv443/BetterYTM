[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / fetchVideoVotes

# Function: fetchVideoVotes()

> **fetchVideoVotes**(`videoID`): `Promise`\<\{ `dislikes`: `number`; `id`: `string`; `likes`: `number`; `rating`: `number`; `timestamp`: `number`; \} \| `undefined`\>

Defined in: [src/utils/xhr.ts:87](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/xhr.ts#L87)

Fetches the votes object for a YouTube video from the [Return YouTube Dislike API.](https://returnyoutubedislike.com/docs)

## Parameters

### videoID

`string`

The video ID of the video

## Returns

`Promise`\<\{ `dislikes`: `number`; `id`: `string`; `likes`: `number`; `rating`: `number`; `timestamp`: `number`; \} \| `undefined`\>
