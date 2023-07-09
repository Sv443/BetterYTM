## Some things I've learned about YT and YTM:

### The problem with userscripts and SPAs:
YTM is an SPA (single page application), meaning navigating to a different part of the site doesn't trigger the website, and by extension userscripts, to entirely reload like traditional redirects on MPAs (multi-page applications).  
This means userscripts like BetterYTM rely on detecting changes in the DOM using something like the [MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) (see `initSiteEvents()` in [`src/events.ts`](../events.ts)).  
This causes a LOT of headaches (race conditions, detecting navigation, state consistency and more) but it's the only option as far as I'm aware.

<br>

### Difference between YT songs and YTM songs:
YT and YTM kinda run on the same system. What I mean by that is that "YTM songs" are technically regular YT videos, but they automatically have comments disabled and the video only displays the static cover art instead of a video.  
The problem comes from "YT video songs" having wildly inconsistent titles. Usually (but not always!) the artist is actually the name of the uploader's channel and the actual song artist is included in the video title, separated from the song name by a hyphen. This makes fetching the lyrics URL consistently and with a tiny error margin basically impossible.  
  
**Detecting the difference:**  
For "YT video songs" the selector `ytmusic-player` has an attribute `video-mode_`, for "YTM songs" it doesn't exist.

<br>

### Song thumbnails on YTM:
The [difference between YT and YTM songs](#difference-between-yt-songs-and-ytm-songs) also extends to thumbnails. I've noticed "YT video songs" load their thumbs from `i.ytimg.com`, while "YTM songs" load theirs from `*.googleusercontent.com`  
This is about the only reliable way I've found to discern the two without relying on subtle DOM differences like I had to do with the currently active song.

<br>

### Why read song info from the DOM?
I've searched far and wide but haven't been able to locate any variable I could tap into to grab the song title and artist. As far as I know this is all done in a lower scope, so I can't access it from the level of a userscript. That'd possibly need a modified browser and most definitely humongous amounts of reverse-engineering.  
So instead I have to entirely rely on the text that's displayed to the user, which might seem like it would be enough, but as mentioned in [difference between YT and YTM songs](#difference-between-yt-songs-and-ytm-songs), it's wildly inconsistent.
