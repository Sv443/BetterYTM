[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/config](../README.md) / cfgMigrations

# Variable: cfgMigrations

> `const` **cfgMigrations**: `DataMigrationsDict`

Defined in: [src/config.ts:42](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/config.ts#L42)

Config data format migration functions.  
Each key is the version to migrate *to*, and the value is a function that takes the old data as an argument and returns the new data.  
  
Some helper functions are used to make writing migration functions easier and less error-prone:
- **When a new feature was added,** the migration function should use `useNewDefaults()` to set the new feature to its default value, while keeping all other values from the old config.  
- **When a feature's default value was changed,** the migration function should use `useNewDefaultsIfUnchanged()` to set the feature to its new default value, but only if the user hasn't changed it from its old default value. This way, a user's preference will be respected instead of being reset without their knowledge.
- **When a feature's valid value range was changed,** the migration function should use `useNewRanges()` to clamp the feature's value to the new valid range. This only applies to numeric features with a `min` and `max` property defined in the [`featInfo`](../../features/variables/featInfo.md) object.
