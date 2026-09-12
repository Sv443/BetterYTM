---
"@sv443/betterytm": minor
---

Turned features that had a combined toggle and mode selection into two separate features, to allow for more flexible configuration and easier toggling:
  - `thumbnailOverlayBehavior: "never"` - replaced with `thumbnailOverlayEnabled`.
    - Setting the thumbnail overlay mode to `never` will now disable only the automatic thumbnail overlay, allowing for the toggle button to be used independently.
  - `autoScrollToActiveSongMode: "never"` - replaced with `autoScrollToActiveSongEnabled`.