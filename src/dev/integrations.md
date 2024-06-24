## Integrations with other extensions and tools
BetterYTM integrates with other extensions and tools to provide a smoother experience:
- (Any other userscript)
  - BYTM has a plugin system that allows users to write their own userscripts to extend the functionality of BYTM and benefit from its APIs
- ReturnYoutubeDislike
  - BYTM shows the like and dislike counts of songs in YTM
  - This functionality is also exposed on the interface for plugins to use
- Enhancer for YouTube
  - BYTM integrates the set theme in its own UI elements
- Dark Reader
  - BYTM disables the extension entirely in YTM because the site doesn't even have a light theme
  - Dark Reader is disabled for some elements, as it breaks BYTM's precise styling
- SponsorBlock
  - The overlay had to have its z-index adjusted so that it works better with BYTM's and YTM's UI
