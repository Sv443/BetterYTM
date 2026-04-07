[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / sendRequest

# Function: sendRequest()

> **sendRequest**\<`T`\>(`details`): `Promise`\<`Response`\<`T`\>\>

Defined in: [src/utils/xhr.ts:38](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/xhr.ts#L38)

Sends a request with the specified parameters and returns the response as a Promise.  
Ignores [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), contrary to fetch and fetchAdvanced.

## Type Parameters

### T

`T` = `any`

## Parameters

### details

#### anonymous?

`boolean`

Don't send cookies with the requests (enforces `fetch` mode)

#### binary?

`boolean`

Send the data string in binary mode

#### context?

`T`

Property which will be added to the response object

#### cookie?

`string`

A cookie to be patched into the sent cookie set

#### cookiePartition?

\{ `topLevelSite?`: `string`; \}

Object containing the partition key to be used for sent and received partitioned cookies

#### cookiePartition.topLevelSite?

`string`

String representing the top frame site for partitioned cookies

#### data?

`string` \| `object` \| `any`[] \| `URLSearchParams` \| `Blob` \| `File` \| `FormData`

Data to send via a POST or PUT request

#### fetch?

`boolean`

(Beta) Use a fetch instead of a xhr request (at Chrome this causes
`xhr.abort`, `details.timeout` and `xhr.onprogress` to not work and
makes `xhr.onreadystatechange` receive only readyState 4 events)

#### headers?

`RequestHeaders`

i.e. user-agent, referer... (some special headers are not supported
by Safari and Android browsers)

#### method?

`"GET"` \| `"HEAD"` \| `"POST"` \| `"PUT"` \| `"DELETE"`

#### nocache?

`boolean`

Don't cache the resource

#### onloadstart?

`RequestEventListener`\<`Response`\<`T`\>\>

Callback to be executed if the request started to load

#### onprogress?

`RequestEventListener`\<`ProgressResponse`\<`T`\>\>

Callback to be executed if the request made some progress

#### onreadystatechange?

`RequestEventListener`\<`Response`\<`T`\>\>

Callback to be executed if the request's ready state changed

#### overrideMimeType?

`string`

MIME type for the request

#### password?

`string`

Password for authentication

#### redirect?

`"error"` \| `"follow"` \| `"manual"`

Controls what to happen when a redirect is detected (build 6180+, enforces fetch mode).

#### responseType?

`"arraybuffer"` \| `"blob"` \| `"json"` \| `"stream"`

#### revalidate?

`boolean`

Revalidate maybe cached content

#### timeout?

`number`

Timeout in ms

#### url

`string` \| `URL`

The destination URL

#### user?

`string`

Username for authentication

## Returns

`Promise`\<`Response`\<`T`\>\>
