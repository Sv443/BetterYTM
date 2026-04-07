[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / log

# Function: log()

> **log**(...`args`): `void`

Defined in: [src/utils/logging.ts:103](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/logging.ts#L103)

Logs all passed values to the console, as long as the log level is sufficient.

## Parameters

### args

...`unknown`[]

Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.

## Returns

`void`
