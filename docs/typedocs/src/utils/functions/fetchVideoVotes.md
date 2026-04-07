[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / fetchVideoVotes

# Function: fetchVideoVotes()

> **fetchVideoVotes**(`videoID`): `Promise`\<\{ `dislikes`: `number`; `id`: `string`; `likes`: `number`; `rating`: `number`; `timestamp`: `number`; \} \| `undefined`\>

Defined in: [src/utils/xhr.ts:87](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/xhr.ts#L87)

Fetches the votes object for a YouTube video from the [Return YouTube Dislike API.](https://returnyoutubedislike.com/docs)

## Parameters

### videoID

`string`

The video ID of the video

## Returns

`Promise`\<\{ `dislikes`: `number`; `id`: `string`; `likes`: `number`; `rating`: `number`; `timestamp`: `number`; \} \| `undefined`\>
