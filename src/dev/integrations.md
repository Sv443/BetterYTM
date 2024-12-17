## Integrations with other extensions and tools
BetterYTM integrates with other extensions and tools to provide a smoother experience:
- (Any other userscript)
  - BYTM has a plugin system that allows users to write their own userscripts to extend the functionality of BYTM and benefit from its APIs - [you can read about it here.](../../contributing.md#developing-a-plugin-that-interfaces-with-betterytm)
- [Dark Reader](https://darkreader.org/)
  - BYTM disables Dark Reader entirely in YTM because the page doesn't even have a light theme.
  - Dark Reader is also disabled for a few elements on YT, because it would break BYTM's styling.
- [Enhancer for YouTube](https://www.mrfdev.com/enhancer-for-youtube)
  - BYTM adjusts itself on YT to make its own UI elements fit the configured theme better.
- [Return YouTube Dislike](https://returnyoutubedislike.com/)
  - BYTM shows the like and dislike counts of songs on YTM.
  - This functionality is also exposed on the interface for plugins to use - [see the documentation here.](../../contributing.md#fetchvideovotes)
- [SponsorBlock](https://sponsor.ajay.app/)
  - The positioning of SponsorBlock's popup element had to be adjusted so that it works better with the UI.
- [ThemeSong](https://github.com/KristofferTroncoso/ThemeSong)
  - BYTM adjusts the colors it uses throughout the YTM page to fit the theme configured in the ThemeSong extension.
  - There is a feature in the BYTM config menu that can be enabled for even better integration with ThemeSong.
