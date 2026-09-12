---
"@sv443/betterytm": minor
---

Internal Changes:
  - Added `Logger` class to tag every log with a category, in preparation for a future log filtering feature.
  - Refactored logging system to use new `Logger` class instances.
  - Added new properties to the object returned by `BYTM.getInternals()`:
    - `globservers` - Object of all `SelectorObserver` instances used by BYTM.
    - `getSerializerStores()` - Returns all `DataStore` instances that contain user-configured data.
    - `getSerializerStoresFull()` - Returns all `DataStore` instances, including those that are only used for caching.
