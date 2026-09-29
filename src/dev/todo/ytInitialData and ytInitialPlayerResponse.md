# Potential integrations for `YTInitialData` / `YTInitialPlayerResponse`

Both types are defined in `src/types.ts` but are currently only actually read in one place
(`src/utils/domain.ts`, for `videoDetails.channelId`). Below are locations where using page-provided
data instead of hardcoded values / DOM scraping / guesswork could be beneficial.

## `YTInitialPlayerResponse.videoDetails`

1. **Thumbnail URLs** - `src/utils/pure.ts` (`getThumbnailUrl()`) and `src/utils/misc.ts`
   (`getBestThumbnailUrl()`) construct `https://img.youtube.com/vi/${videoID}/${quality}.jpg` and
   probe qualities via trial-and-error requests. `videoDetails.thumbnail.thumbnails[]` already lists
   the real available resolutions/URLs for the current video - the thumbnail overlay feature
   (`src/features/layout.ts`, around `initThumbnailOverlay()`) could use these directly instead of
   guessing/probing.
2. **Song/artist title parsing** - `src/features/lyrics.ts` (~lines 32 and 126) reads
   `.content-info-wrapper > yt-formatted-string`'s `title` attribute and re-parses it to split
   song/artist. `videoDetails.title` + `videoDetails.author` (or
   `microformat.playerMicroformatRenderer.ownerChannelName`) give this directly without DOM
   scraping/string-splitting heuristics.
3. **Channel ID for site-switch / auto-like** - `src/utils/domain.ts` already uses
   `ytInitialPlayerResponse.videoDetails.channelId` on YT only. `src/features/autoLike.ts` still
   scrapes channel ID/name from anchor `href`s and multiple selector fallbacks on YTM -
   `videoDetails.channelId`/`author` could reduce/replace some of that selector fan-out.
4. **Duration** - anywhere BYTM currently reads video length from the DOM/player element could
   instead use `videoDetails.lengthSeconds` (or `microformat...lengthSeconds`) as a faster,
   pre-DOM-ready source.
5. **Live-stream detection** - `videoDetails.isLiveContent` / `playabilityStatus.status` could
   replace or supplement any DOM-based "is this a livestream" checks (relevant to features like
   `frameSkip`/`frameSkipWhilePlaying`, `rememberSongTime`, which likely want to no-op on
   livestreams).
6. **Like/dislike & ratings availability** - `microformat.playerMicroformatRenderer.likeCount` and
   `videoDetails.allowRatings` could seed `showVotes`/like-hotkey logic with an initial value or an
   early "ratings disabled" check before/alongside the RYD API fetch in `fetchVideoVotes`
   (`src/utils/xhr.ts`), reducing a network round-trip or avoiding showing like/dislike UI when
   `allowRatings` is false.
7. **View count** - `videoDetails.viewCount` (or `microformat...`) as an immediate value wherever
   view counts are displayed/formatted via `formatNumber`, without waiting for the corresponding DOM
   element.
8. **Playability/error state** - `playabilityStatus.status`/`reason` (e.g. `LOGIN_REQUIRED`,
   `AGE_CHECK_REQUIRED`, `UNPLAYABLE`) could drive smarter feature gating instead of relying purely
   on DOM state (e.g. skip auto-like, thumbnail overlay, or lyrics fetch for unplayable videos), or
   power a clearer error toast (`showToastOnGenericError`).

## `YTInitialData`

9. **Hotkey conflict detection / defaults** - `topbar.desktopTopbarRenderer.hotkeyDialog` lists YT's
   own native hotkeys (e.g. arrow keys, `j`/`k`, `,`/`.`). This could be used to detect conflicts with
   BYTM's configurable hotkeys (`switchSitesHotkey`, `likeHotkey`, `dislikeHotkey`, `nextHotkey`,
   `previousHotkey`, `playPauseHotkey`, `frameSkip` keys, `arrowKeySupport`, etc. - all in
   `src/types.ts` under the `FeatureConfig` "hotkeys" region) at config-menu render time, warning the
   user or excluding taken keys, rather than only relying on the hardcoded defaults in
   `src/features/featDefaults.ts`.
10. **Search box placeholder / presence** -
    `topbar.desktopTopbarRenderer.searchbox.fusionSearchboxRenderer.placeholderText` could inform the
    `focusSearchBarHotkey`/`clearSearchBarHotkey` features (`src/features/hotkeys.ts`, ~lines
    244-273) - e.g. detecting whether a search box actually exists on the current page/layout instead
    of only relying on `getSearchBarInput()` DOM lookups (useful for future-proofing against YT
    layout changes).
11. **Country code** - `topbar.desktopTopbarRenderer.countryCode` could feed `getPreferredLocale()`
    (`src/utils/locale.ts`) as an additional signal (alongside `navigator.language`/
    `navigator.languages`) for choosing a default locale, since YT's own detected region may be more
    accurate than the browser's locale in some setups.

## Note

Most of the above are genuine "use the page's own data instead of re-deriving it via DOM scraping or
guesswork" opportunities rather than purely hypothetical ones, since both types are already fairly
richly typed in `src/types.ts` but barely used elsewhere in the codebase.
