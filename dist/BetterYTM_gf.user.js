// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           3.1.0
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-or-later
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@4ad4ea85/assets/images/logo/logo_48.png
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
// @description       Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:de-DE Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de    Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-AT Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-BE Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-CH Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-LI Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-LU Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:en-US Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en    Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-CA Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-GB Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-AU Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-IE Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-NZ Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-ZA Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:es-ES Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™
// @description:es    Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™
// @description:es-MX Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™
// @description:fr-FR Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr    Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-CA Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-BE Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-CH Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-LU Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:hi-IN YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार
// @description:hi    YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार
// @description:hi-NP YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार
// @description:ja-JP YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上
// @description:ja    YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上
// @description:pt-BR Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™
// @description:pt    Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™
// @description:pt-PT Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™
// @description:zh-CN YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh    YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh-TW YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh-HK YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh-SG YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @antifeature       tracking Some of the used services will temporarily log your IP address and the songs you listen to. You can disable these features in the settings.
// @antifeature:de-DE tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos die du anschaust protokollieren. Du kannst diese Fuktionen in den Einstellungen deaktivieren.
// @antifeature:de    tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos die du anschaust protokollieren. Du kannst diese Fuktionen in den Einstellungen deaktivieren.
// @antifeature:de-AT tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos die du anschaust protokollieren. Du kannst diese Fuktionen in den Einstellungen deaktivieren.
// @antifeature:de-BE tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos die du anschaust protokollieren. Du kannst diese Fuktionen in den Einstellungen deaktivieren.
// @antifeature:de-CH tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos die du anschaust protokollieren. Du kannst diese Fuktionen in den Einstellungen deaktivieren.
// @antifeature:de-LI tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos die du anschaust protokollieren. Du kannst diese Fuktionen in den Einstellungen deaktivieren.
// @antifeature:de-LU tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos die du anschaust protokollieren. Du kannst diese Fuktionen in den Einstellungen deaktivieren.
// @antifeature:en-US tracking Some of the used services will temporarily log your IP address and the songs you listen to. You can disable these features in the settings.
// @antifeature:en    tracking Some of the used services will temporarily log your IP address and the songs you listen to. You can disable these features in the settings.
// @antifeature:en-CA tracking Some of the used services will temporarily log your IP address and the songs you listen to. You can disable these features in the settings.
// @antifeature:es-ES tracking Algunos de los servicios utilizados registrarán temporalmente tu dirección IP y las canciones que escuchas. Puedes desactivar estas funciones en la configuración.
// @antifeature:es    tracking Algunos de los servicios utilizados registrarán temporalmente tu dirección IP y las canciones que escuchas. Puedes desactivar estas funciones en la configuración.
// @antifeature:es-MX tracking Algunos de los servicios utilizados registrarán temporalmente tu dirección IP y las canciones que escuchas. Puedes desactivar estas funciones en la configuración.
// @antifeature:fr-FR tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les chansons que vous écoutez. Vous pouvez désactiver ces fonctionnalités dans les paramètres.
// @antifeature:fr    tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les chansons que vous écoutez. Vous pouvez désactiver ces fonctionnalités dans les paramètres.
// @antifeature:fr-CA tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les chansons que vous écoutez. Vous pouvez désactiver ces fonctionnalités dans les paramètres.
// @antifeature:fr-BE tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les chansons que vous écoutez. Vous pouvez désactiver ces fonctionnalités dans les paramètres.
// @antifeature:fr-CH tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les chansons que vous écoutez. Vous pouvez désactiver ces fonctionnalités dans les paramètres.
// @antifeature:fr-LU tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les chansons que vous écoutez. Vous pouvez désactiver ces fonctionnalités dans les paramètres.
// @antifeature:hi-IN tracking कुछ सेवाएं अस्थायी रूप से आपके आईपी पते और आप जो गाने सुनते हैं, उन्हें लॉग करेंगी। आप इन सुविधाओं को सेटिंग्स में अक्षम कर सकते हैं।
// @antifeature:hi    tracking कुछ सेवाएं अस्थायी रूप से आपके आईपी पते और आप जो गाने सुनते हैं, उन्हें लॉग करेंगी। आप इन सुविधाओं को सेटिंग्स में अक्षम कर सकते हैं।
// @antifeature:hi-NP tracking कुछ सेवाएं अस्थायी रूप से आपके आईपी पते और आप जो गाने सुनते हैं, उन्हें लॉग करेंगी। आप इन सुविधाओं को सेटिंग्स में अक्षम कर सकते हैं।
// @antifeature:ja-JP tracking 一部のサービスは、あなたのIPアドレスと聞いた曲を一時的に記録します。これらの機能は設定で無効にできます。
// @antifeature:ja    tracking 一部のサービスは、あなたのIPアドレスと聞いた曲を一時的に記録します。これらの機能は設定で無効にできます。
// @antifeature:pt-BR tracking Alguns dos serviços utilizados registrarão temporariamente o seu endereço IP e as músicas que você ouve. Você pode desativar esses recursos nas configurações.
// @antifeature:pt    tracking Alguns dos serviços utilizados registrarão temporariamente o seu endereço IP e as músicas que você ouve. Você pode desativar esses recursos nas configurações.
// @antifeature:pt-PT tracking Alguns dos serviços utilizados registrarão temporariamente o seu endereço IP e as músicas que você ouve. Você pode desativar esses recursos nas configurações.
// @antifeature:zh-CN tracking 某些使用的服务将暂时记录您的 IP 地址和您收听的歌曲。您可以在设置中禁用这些功能。
// @antifeature:zh    tracking 某些使用的服务将暂时记录您的 IP 地址和您收听的歌曲。您可以在设置中禁用这些功能。
// @antifeature:zh-TW tracking 某些使用的服务将暂时记录您的 IP 地址和您收听的歌曲。您可以在设置中禁用这些功能。
// @antifeature:zh-HK tracking 某些使用的服务将暂时记录您的 IP 地址和您收听的歌曲。您可以在设置中禁用这些功能。
// @antifeature:zh-SG tracking 某些使用的服务将暂时记录您的 IP 地址和您收听的歌曲。您可以在设置中禁用这些功能。
// @connect           api.sv443.net
// @connect           github.com
// @connect           raw.githubusercontent.com
// @connect           youtube.com
// @connect           i.ytimg.com
// @connect           returnyoutubedislikeapi.com
// @connect           itunes.apple.com
// @noframes
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/refs/heads/main/dist/BetterYTM_gf.user.js
// @downloadURL       https://update.greasyfork.org/scripts/475682/BetterYTM.user.js
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.listValues
// @grant             GM.addValueChangeListener
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             GM.xmlHttpRequest
// @grant             GM.openInTab
// @grant             GM.registerMenuCommand
// @grant             unsafeWindow
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/coreutils@3.5.1/dist/CoreUtils.umd.js
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/userutils@10.3.1/dist/UserUtils.umd.js
// @require           https://cdn.jsdelivr.net/npm/marked@17.0.4/lib/marked.umd.js
// @require           https://cdn.jsdelivr.net/npm/compare-versions@6.1.1/lib/umd/index.js
// @require           https://cdn.jsdelivr.net/npm/dompurify@3.3.3
// ==/UserScript==
/*
▄▄▄      ▄   ▄         ▄   ▄▄▄▄▄▄   ▄
█  █ ▄▄▄ █   █   ▄█▄ ▄ ▄█ █  █  █▀▄▀█
█▀▀▄ █▄█ █▀  █▀  █▄█ █▀  █   █  █   █
█▄▄▀ ▀▄▄ ▀▄▄ ▀▄▄ ▀▄▄ █   █   █  █   █

        Made with ❤️ by Sv443
I welcome every contribution on GitHub!
  https://github.com/Sv443/BetterYTM


You can install the latest in-development version here:
https://github.com/Sv443/BetterYTM/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen

*/

/* Disclaimer: I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */

/*
  Note: The GreasyFork version has to fit within a size limit of 500kB, so comments had to be removed.
  If you want install the full, unmodified version, please use one of these sources instead:
    - GitHub: https://github.com/Sv443/BetterYTM
    - OpenUserJS: https://openuserjs.org/scripts/Sv443/BetterYTM
*/


(function(CoreUtils, UserUtils, DOMPurify, marked, compareVersions) {
  "use strict";
  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }
  var CoreUtils__namespace = /*#__PURE__*/ _interopNamespaceDefault(CoreUtils);
  var UserUtils__namespace = /*#__PURE__*/ _interopNamespaceDefault(UserUtils);
  var compareVersions__namespace = /*#__PURE__*/ _interopNamespaceDefault(compareVersions);
  var preloadAssetPattern = "^(icon|img)-";
  var resources = {
    "css-above_queue_btns": "styles/aboveQueueBtns.css",
    "css-above_queue_btns_sticky": "styles/aboveQueueBtnsSticky.css",
    "css-anchor_improvements": "styles/anchorImprovements.css",
    "css-auto_like": "styles/autoLike.css",
    "css-bundle": "/dist/BetterYTM.css",
    "css-fix_hdr": "styles/fixHDR.css",
    "css-fix_playerpage_theming": "styles/fixPlayerPageTheming.css",
    "css-fix_spacing": "styles/fixSpacing.css",
    "css-fix_sponsorblock": "styles/fixSponsorBlock.css",
    "css-hide_themesong_logo": "styles/hideThemeSongLogo.css",
    "css-remove_thumb_rating_bar": "styles/removeThumbRatingBar.css",
    "css-show_votes": "styles/showVotes.css",
    "css-swap_like_dislike_btns": "styles/swapLikeDislikeBtns.css",
    "css-themesong_visualizer_opacity": "styles/themeSongVisualizerOpacity.css",
    "css-track_numbers_current_queue": "styles/trackNumbersCurrentQueue.css",
    "css-track_numbers_song_lists": "styles/trackNumbersSongLists.css",
    "css-truncate_player_bar_subtitles": "styles/truncatePlayerBarSubtitles.css",
    "css-vol_slider_size": "styles/volSliderSize.css",
    "css-watch_page_full_size": "styles/watchPageFullSize.css",
    "doc-data": {
      path: "data.json",
      ref: "main",
      integrity: false
    },
    "doc-license": {
      path: "/LICENSE.txt",
      ref: "$BRANCH",
      integrity: false
    },
    "font-cousine_ttf": "fonts/external/Cousine/Cousine-Regular.ttf",
    "font-cousine_woff": "fonts/external/Cousine/Cousine-Regular.woff",
    "font-cousine_woff2": "fonts/external/Cousine/Cousine-Regular.woff2",
    "icon-advanced_mode": "icons/plus_circle_small.svg",
    "icon-advanced_mode_large": "icons/plus_circle.svg",
    "icon-alert": "icons/alert.svg",
    "icon-arrow_down": "icons/arrow_down.svg",
    "icon-auto_like_enabled": "icons/auto_like_enabled.svg",
    "icon-auto_like": "icons/auto_like.svg",
    "icon-clear_list": "icons/clear_list.svg",
    "icon-copy": "icons/copy.svg",
    "icon-delete": "icons/delete.svg",
    "icon-edit": "icons/edit.svg",
    "icon-error": "icons/error.svg",
    "icon-experimental": "icons/beaker_small.svg",
    "icon-globe_small": "icons/globe_small.svg",
    "icon-globe": "icons/globe.svg",
    "icon-help": "icons/help.svg",
    "icon-image_filled_am": "icons/image_filled_am.svg",
    "icon-image_filled_yt": "icons/image_filled_yt.svg",
    "icon-image_filled": "icons/image_filled.svg",
    "icon-image": "icons/image.svg",
    "icon-link": "icons/link.svg",
    "icon-lyrics": "icons/lyrics.svg",
    "icon-new": "icons/new.svg",
    "icon-prompt": "icons/help.svg",
    "icon-reload": "icons/refresh.svg",
    "icon-history": "icons/history.svg",
    "icon-skip_to": "icons/skip_to.svg",
    "icon-speed": "icons/speed.svg",
    "icon-spinner": "icons/spinner.svg",
    "icon-upload": "icons/upload.svg",
    "icon-ytm": "icons/ytm.svg",
    "img-close": "images/close.png",
    "img-discord": "images/external/discord.png",
    "img-github": "images/external/github.png",
    "img-greasyfork": "images/external/greasyfork.png",
    "img-logo_dev": "images/logo/logo_dev_48.png",
    "img-logo": "images/logo/logo_48.png",
    "img-openuserjs": "images/external/openuserjs.png",
    "trans-de-DE": "translations/de-DE.json",
    "trans-en-GB": "translations/en-GB.json",
    "trans-en-US": "translations/en-US.json",
    "trans-es-ES": "translations/es-ES.json",
    "trans-fr-FR": "translations/fr-FR.json",
    "trans-hi-IN": "translations/hi-IN.json",
    "trans-ja-JP": "translations/ja-JP.json",
    "trans-pt-BR": "translations/pt-BR.json",
    "trans-zh-CN": "translations/zh-CN.json"
  };
  var resourcesJson = {
    preloadAssetPattern: preloadAssetPattern,
    resources: resources
  };
  var localesJson = {
    "de-DE": {
      name: "Deutsch (Deutschland)",
      nameEnglish: "German (Germany)",
      emoji: "🇩🇪",
      userscriptDesc: "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™",
      authors: [ "Sv443" ],
      altLocales: [ "de", "de-AT", "de-BE", "de-CH", "de-LI", "de-LU" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: ".",
      sentenceTerminators: [ ".", "!", "?" ]
    },
    "en-US": {
      name: "English (United States)",
      nameEnglish: "English (United States)",
      emoji: "🇺🇸",
      userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
      authors: [ "Sv443" ],
      altLocales: [ "en", "en-CA" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: ".",
      sentenceTerminators: [ ".", "!", "?" ]
    },
    "en-GB": {
      name: "English (Great Britain)",
      nameEnglish: "English (Great Britain)",
      emoji: "🇬🇧",
      userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
      authors: [ "Sv443" ],
      altLocales: [ "en-AU", "en-IE", "en-NZ", "en-ZA" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: ".",
      sentenceTerminators: [ ".", "!", "?" ]
    },
    "es-ES": {
      name: "Español (España)",
      nameEnglish: "Spanish (Spain)",
      emoji: "🇪🇸",
      userscriptDesc: "Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™",
      authors: [ "Sv443" ],
      altLocales: [ "es", "es-MX" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: ".",
      sentenceTerminators: [ ".", "!", "?" ]
    },
    "fr-FR": {
      name: "Français (France)",
      nameEnglish: "French (France)",
      emoji: "🇫🇷",
      userscriptDesc: "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™",
      authors: [ "Sv443" ],
      altLocales: [ "fr", "fr-CA", "fr-BE", "fr-CH", "fr-LU" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: ".",
      sentenceTerminators: [ ".", "!", "?" ]
    },
    "hi-IN": {
      name: "हिंदी (भारत)",
      nameEnglish: "Hindi (India)",
      emoji: "🇮🇳",
      userscriptDesc: "YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार",
      authors: [ "Sv443" ],
      altLocales: [ "hi", "hi-NP" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: "।",
      sentenceTerminators: [ "।", ".", "!", "?" ]
    },
    "ja-JP": {
      name: "日本語 (日本)",
      nameEnglish: "Japanese (Japan)",
      emoji: "🇯🇵",
      userscriptDesc: "YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上",
      authors: [ "Sv443" ],
      altLocales: [ "ja" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: "。",
      sentenceTerminators: [ "。", "！", "？", ".", "!", "?" ]
    },
    "pt-BR": {
      name: "Português (Brasil)",
      nameEnglish: "Portuguese (Brazil)",
      emoji: "🇧🇷",
      userscriptDesc: "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™",
      authors: [ "Sv443" ],
      altLocales: [ "pt", "pt-PT" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: ".",
      sentenceTerminators: [ ".", "!", "?" ]
    },
    "zh-CN": {
      name: "中文（简化，中国）",
      nameEnglish: "Chinese (Simplified, China)",
      emoji: "🇨🇳",
      userscriptDesc: "YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进",
      authors: [ "Sv443" ],
      altLocales: [ "zh", "zh-TW", "zh-HK", "zh-SG" ],
      textDir: "ltr",
      sentenceTerminatorNeutral: "。",
      sentenceTerminators: [ "。", "！", "？", ".", "!", "?" ]
    }
  };
  var LogLevel;
  (function(LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
  })(LogLevel || (LogLevel = {}));
  var PluginIntent;
  (function(PluginIntent) {
    PluginIntent[PluginIntent["ReadFeatureConfig"] = 1] = "ReadFeatureConfig";
    PluginIntent[PluginIntent["WriteFeatureConfig"] = 2] = "WriteFeatureConfig";
    PluginIntent[PluginIntent["SeeHiddenConfigValues"] = 4] = "SeeHiddenConfigValues";
    PluginIntent[PluginIntent["WriteLyricsCache"] = 8] = "WriteLyricsCache";
    PluginIntent[PluginIntent["WriteTranslations"] = 16] = "WriteTranslations";
    PluginIntent[PluginIntent["CreateModalDialogs"] = 32] = "CreateModalDialogs";
    PluginIntent[PluginIntent["ReadAutoLikeData"] = 64] = "ReadAutoLikeData";
    PluginIntent[PluginIntent["WriteAutoLikeData"] = 128] = "WriteAutoLikeData";
    PluginIntent[PluginIntent["InternalAccess"] = 256] = "InternalAccess";
    PluginIntent[PluginIntent["FullAccess"] = 512] = "FullAccess";
  })(PluginIntent || (PluginIntent = {}));
  const rawConsts = {
    mode: "production",
    branch: "main",
    host: "greasyfork",
    buildNumber: "4ad4ea85",
    buildTimestamp: "1775247278851",
    assetSource: "jsdelivr",
    devServerPort: "8710"
  };
  const getConst = (constKey, defaultVal) => {
    const val = rawConsts[constKey];
    return val.match(/^#{{.+}}$/) ? defaultVal : val;
  };
  const repo = "Sv443/BetterYTM";
  const mode$1 = getConst("mode", "production");
  const branch$1 = getConst("branch", "main");
  const host$1 = getConst("host", "github");
  const buildNumber$1 = getConst("buildNumber", "!BUILD_ERROR!");
  const buildTimestamp = Number(getConst("buildTimestamp", 0));
  const assetSource = getConst("assetSource", "jsdelivr");
  const devServerPort = Number(getConst("devServerPort", 8710));
  const changelogUrl = assetSource === "local" ? `http://localhost:${devServerPort}/changelog.md?build=${buildNumber$1}` : `https://raw.githubusercontent.com/${repo}/${mode$1 === "development" ? "develop" : "main"}/changelog.md?build=${buildNumber$1}`;
  const initialParams$1 = new URL(location.href).searchParams;
  const initTime = Date.now();
  const platformNames = CoreUtils.pureObj({
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS"
  });
  const compressionFormat$1 = "deflate-raw";
  const sessionStorageAvailable$1 = typeof sessionStorage?.setItem === "function" && (() => {
    try {
      const key = `_bytm_test_${CoreUtils.randomId(6, 36, false, true)}`;
      sessionStorage.setItem(key, "test");
      sessionStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  })();
  const defaultLogLevel = mode$1 === "production" ? LogLevel.Info : LogLevel.Debug;
  const scriptInfo$1 = CoreUtils.pureObj({
    name: GM_info.script.name,
    version: GM_info.script.version,
    namespace: GM_info.script.namespace
  });
  const newFeatureAdornmentMaxSessionCount = 20;
  var constants = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    assetSource: assetSource,
    branch: branch$1,
    buildNumber: buildNumber$1,
    buildTimestamp: buildTimestamp,
    changelogUrl: changelogUrl,
    compressionFormat: compressionFormat$1,
    defaultLogLevel: defaultLogLevel,
    devServerPort: devServerPort,
    host: host$1,
    initTime: initTime,
    initialParams: initialParams$1,
    mode: mode$1,
    newFeatureAdornmentMaxSessionCount: newFeatureAdornmentMaxSessionCount,
    platformNames: platformNames,
    repo: repo,
    scriptInfo: scriptInfo$1,
    sessionStorageAvailable: sessionStorageAvailable$1
  });
  const lyricsCacheStore = new CoreUtils.DataStore({
    id: "bytm-lyrics-cache",
    defaultData: {
      cache: []
    },
    formatVersion: 2,
    engine: new UserUtils.GMStorageEngine,
    compressionFormat: compressionFormat$1,
    migrations: {
      2: oldData => {
        oldData.cache = oldData.cache.map(entry => ({
          artist: entry.artist,
          song: entry.song,
          path: "path" in entry ? entry.path : new URL(String("url" in entry ? entry.url : entry.path)).pathname,
          added: Math.floor(entry.added / 1e3),
          viewed: Math.floor(entry.viewed / 1e3)
        }));
        return oldData;
      }
    }
  });
  async function initLyricsCache() {
    const data = await lyricsCacheStore.loadData();
    log(`Initialized lyrics cache (${data.cache.length} entries)`);
    emitInterface("bytm:lyricsCacheReady");
    return data;
  }
  function resolveLyricsUrl(path) {
    const url = new URL("https://genius.com");
    url.pathname = path.startsWith("/") ? path : `/${path}`;
    return String(url);
  }
  function getLyricsCacheEntry(artist, song, refreshEntry = true) {
    const {cache: cache} = lyricsCacheStore.getData();
    const entry = cache.find(e => e.artist === artist && e.song === song);
    if (entry && Date.now() - (entry?.added ?? 0) * 1e3 > getFeature("lyricsCacheTTL") * 1e3 * 60 * 60 * 24) {
      deleteLyricsCacheEntry(artist, song);
      return undefined;
    }
    if (entry && refreshEntry) updateLyricsCacheEntry(artist, song);
    return entry;
  }
  async function updateLyricsCacheEntry(artist, song) {
    const {cache: cache} = lyricsCacheStore.getData();
    const idx = cache.findIndex(e => e.artist === artist && e.song === song);
    if (idx !== -1) {
      const newEntry = cache.splice(idx, 1)[0];
      newEntry.viewed = Math.floor(Date.now() / 1e3);
      return await lyricsCacheStore.setData({
        cache: [ newEntry, ...cache ]
      });
    }
  }
  async function deleteLyricsCacheEntry(artist, song) {
    const {cache: cache} = lyricsCacheStore.getData();
    const idx = cache.findIndex(e => e.artist === artist && e.song === song);
    if (idx !== -1) {
      cache.splice(idx, 1);
      return await lyricsCacheStore.setData({
        cache: cache
      });
    }
  }
  async function clearLyricsCache() {
    emitInterface("bytm:lyricsCacheCleared");
    return await lyricsCacheStore.setData({
      cache: []
    });
  }
  function getLyricsCache() {
    return lyricsCacheStore.getData().cache;
  }
  async function addLyricsCacheEntryBest(artist, song, path) {
    const cachedEntry = getLyricsCacheEntry(artist, song, true);
    if (cachedEntry) return;
    const {cache: cache} = lyricsCacheStore.getData();
    const entry = {
      artist: artist,
      song: song,
      path: path,
      viewed: Math.floor(Date.now() / 1e3),
      added: Math.floor(Date.now() / 1e3)
    };
    cache.push(entry);
    cache.sort((a, b) => b.viewed - a.viewed);
    cache.splice(getFeature("lyricsCacheMaxSize"));
    log("Added lyrics cache entry for best result:", entry);
    emitInterface("bytm:lyricsCacheEntryAdded", {
      entry: entry,
      type: "best"
    });
    return lyricsCacheStore.setData({
      cache: cache
    });
  }
  const initializedLocales = new Set;
  let activeLocale = "en-US";
  let activeLocaleDir = "ltr";
  UserUtils.tr.addTransform(UserUtils.tr.transforms.percent);
  UserUtils.tr.addTransform(UserUtils.tr.transforms.templateLiteral);
  const devMarkTrKeyUsed = async key => {};
  async function initTranslations(locale) {
    if (initializedLocales.has(locale)) return;
    initializedLocales.add(locale);
    try {
      const transFile = await fetchTranslationResource(locale);
      let fallbackTrans = {};
      if (getFeature("localeFallback")) {
        UserUtils.tr.setFallbackLanguage("en-US");
        fallbackTrans = await fetchTranslationResource("en-US");
      }
      const baseTransFile = typeof transFile?.meta === "object" && "base" in transFile.meta && typeof transFile.meta.base === "string" ? await fetchTranslationResource(transFile.meta.base) : undefined;
      const translations = {
        ...fallbackTrans ?? {},
        ...baseTransFile ?? {},
        ...transFile
      };
      const {meta: {authors: _authors, ...meta}, ...trans} = translations;
      UserUtils.tr.addTranslations(locale, {
        ...meta,
        ...trans
      });
      info(`Loaded translations for locale '${locale}'`);
    } catch (err) {
      const errStr = `Couldn't load translations for locale '${locale}'`;
      error(errStr, err);
      throw new Error(errStr, {
        cause: err
      });
    }
  }
  async function fetchTranslationResource(locale) {
    const url = await getResourceUrl(`trans-${locale}`);
    const res = await CoreUtils.fetchAdvanced(url);
    const bodyTxt = await res.text();
    getFeature("logHttp") && log(`Fetched translation resource for locale '${locale}' with status ${res.status}`);
    if (res.status < 200 || res.status >= 300) throw new Error(`Failed to fetch translation resource for locale '${locale}'`);
    return JSON.parse(bodyTxt);
  }
  function setLocale(locale) {
    activeLocale = locale;
    activeLocaleDir = localesJson[locale]?.textDir ?? "ltr";
    setGlobalProp("locale", locale);
    emitInterface("bytm:setLocale", {
      locale: locale
    });
  }
  function getLocale() {
    return activeLocale;
  }
  async function hasKey(key) {
    return await hasKeyFor(getLocale(), key);
  }
  async function hasKeyFor(locale, key) {
    devMarkTrKeyUsed();
    if (!initializedLocales.has(locale)) await initTranslations(locale);
    return typeof UserUtils.tr.getTranslations(locale)?.[key] === "string";
  }
  function t(key, ...args) {
    return tl(getLocale(), key, ...args);
  }
  function tp(key, num, ...args) {
    return tlp(getLocale(), key, num, ...args);
  }
  function tl(locale, key, ...args) {
    if (locale === "en-US") hasKeyFor(locale, key).then(hasKey => !hasKey && warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);
    devMarkTrKeyUsed();
    return UserUtils.tr.for(locale, key, ...args);
  }
  function tlp(locale, key, num, ...args) {
    if (typeof num !== "number") num = num.length;
    const tlKey = `${key}-${num === 1 ? "1" : "n"}`;
    devMarkTrKeyUsed();
    if (locale === "en-US") hasKeyFor(locale, tlKey).then(hasKey => !hasKey && warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);
    const trans = tl(locale, tlKey, ...args);
    if (trans === key) return t(key, ...args);
    return trans;
  }
  function resolveTranslatable(trnsl) {
    return trnsl[getLocale()] ?? trnsl["en-US"] ?? `<MISSING TRANSLATIONS: ${JSON.stringify(trnsl)}>`;
  }
  let dialogsInitialized = false;
  let dialogContainer;
  let currentDialogId = null;
  const openDialogs = [];
  const setCurrentDialogId = id => currentDialogId = id;
  class BytmDialog extends CoreUtils.NanoEmitter {
    constructor(options) {
      super();
      Object.defineProperty(this, "options", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "id", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "dialogOpen", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: false
      });
      Object.defineProperty(this, "dialogMounted", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: false
      });
      BytmDialog.initDialogs();
      this.options = {
        closeOnBgClick: true,
        closeOnEscPress: true,
        closeBtnEnabled: true,
        destroyOnClose: false,
        unmountOnClose: true,
        removeListenersOnDestroy: true,
        smallHeader: false,
        verticalAlign: "center",
        ...options
      };
      this.id = options.id;
    }
    async mount() {
      if (this.dialogMounted) return;
      this.dialogMounted = true;
      const bgElem = document.createElement("div");
      bgElem.id = `bytm-${this.id}-dialog-bg`;
      bgElem.classList.add("bytm-dialog-bg");
      if (this.options.closeOnBgClick) bgElem.ariaLabel = bgElem.title = t("close_menu_tooltip");
      bgElem.style.setProperty("--bytm-dialog-width-max", `${this.options.width}px`);
      bgElem.style.setProperty("--bytm-dialog-height-max", `${this.options.height}px`);
      bgElem.style.visibility = "hidden";
      bgElem.style.display = "none";
      bgElem.inert = true;
      try {
        bgElem.appendChild(await this.getDialogContent());
        if (dialogContainer) dialogContainer.appendChild(bgElem); else document.addEventListener("DOMContentLoaded", () => dialogContainer?.appendChild(bgElem), {
          once: true
        });
      } catch (e) {
        return error("Failed to render dialog content:", e);
      }
      this.attachListeners(bgElem);
      this.events.emit("render");
      return bgElem;
    }
    unmount() {
      this.close();
      this.dialogMounted = false;
      const clearSelectors = [ `#bytm-${this.id}-dialog-bg` ];
      for (const sel of clearSelectors) {
        const elem = document.querySelector(sel);
        elem?.hasChildNodes() && clearInner(elem);
        document.querySelector(sel)?.remove();
      }
      this.events.emit("clear");
    }
    async remount() {
      this.unmount();
      await this.mount();
    }
    isMounted() {
      return this.dialogMounted;
    }
    async open(e) {
      e?.preventDefault();
      e?.stopImmediatePropagation();
      if (this.isOpen()) return;
      this.dialogOpen = true;
      if (openDialogs.includes(this.id)) {
        openDialogs.splice(openDialogs.indexOf(this.id), 1);
        currentDialogId = openDialogs[0] ?? null;
        this.removeBgInert();
        this.close();
        throw new Error(`A dialog with the same ID of '${this.id}' already exists and is open!`);
      }
      if (!this.isMounted()) await this.mount();
      this.setBgInert();
      const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
      if (!dialogBg) return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
      dialogBg.style.visibility = "visible";
      dialogBg.style.display = "block";
      currentDialogId = this.id;
      openDialogs.unshift(this.id);
      this.events.emit("open");
      emitInterface("bytm:dialogOpened", this);
      emitInterface(`bytm:dialogOpened:${this.id}`, this);
      return dialogBg;
    }
    close(e) {
      e?.preventDefault();
      e?.stopImmediatePropagation();
      if (!this.isOpen()) return;
      this.dialogOpen = false;
      const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
      if (!dialogBg) return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
      dialogBg.style.visibility = "hidden";
      dialogBg.style.display = "none";
      const oidx = openDialogs.indexOf(this.id);
      if (oidx > -1) openDialogs.splice(oidx, 1);
      currentDialogId = openDialogs[0] ?? null;
      this.events.emit("close");
      emitInterface("bytm:dialogClosed", this);
      emitInterface(`bytm:dialogClosed:${this.id}`, this);
      if (this.options.destroyOnClose) this.destroy(); else if (this.options.unmountOnClose) this.unmount();
      this.removeBgInert();
    }
    isOpen() {
      return this.dialogOpen;
    }
    destroy() {
      this.unmount();
      this.events.emit("destroy");
      this.options.removeListenersOnDestroy && this.unsubscribeAll();
    }
    static initDialogs() {
      if (dialogsInitialized) return;
      dialogsInitialized = true;
      const createContainer = () => {
        const bytmDialogCont = dialogContainer = document.createElement("div");
        bytmDialogCont.id = "bytm-dialog-container";
        document.body.appendChild(bytmDialogCont);
      };
      if (!UserUtils.isDomLoaded()) document.addEventListener("DOMContentLoaded", createContainer, {
        once: true
      }); else createContainer();
    }
    static getCurrentDialogId() {
      return currentDialogId;
    }
    static getOpenDialogs() {
      return openDialogs;
    }
    removeBgInert() {
      if (currentDialogId) {
        if (currentDialogId === "cfg-menu") document.querySelector("#bytm-cfg-menu-bg")?.removeAttribute("inert"); else document.querySelector(`#bytm-${currentDialogId}-dialog-bg`)?.removeAttribute("inert");
      }
      if (openDialogs.length === 0) {
        document.body.classList.remove("bytm-disable-scroll");
        document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
      }
      const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
      dialogBg?.setAttribute("inert", "true");
    }
    setBgInert() {
      for (const dialogId of openDialogs) {
        if (dialogId !== this.id) {
          if (dialogId === "cfg-menu") document.querySelector("#bytm-cfg-menu-bg")?.setAttribute("inert", "true"); else document.querySelector(`#bytm-${dialogId}-dialog-bg`)?.setAttribute("inert", "true");
        }
      }
      document.body.classList.add("bytm-disable-scroll");
      document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.setAttribute("inert", "true");
      const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
      dialogBg?.removeAttribute("inert");
    }
    attachListeners(bgElem) {
      if (this.options.closeOnBgClick) {
        bgElem.addEventListener("click", e => {
          if (this.isOpen() && e.target?.id === `bytm-${this.id}-dialog-bg`) this.close(e);
        });
      }
      if (this.options.closeOnEscPress) {
        document.body.addEventListener("keydown", e => {
          if (e.key === "Escape" && this.isOpen() && BytmDialog.getCurrentDialogId() === this.id) this.close(e);
        });
      }
    }
    async getDialogContent() {
      const header = this.options.renderHeader?.();
      const footer = this.options.renderFooter?.();
      const dialogWrapperEl = document.createElement("div");
      dialogWrapperEl.id = `bytm-${this.id}-dialog`;
      dialogWrapperEl.classList.add("bytm-dialog");
      dialogWrapperEl.ariaLabel = dialogWrapperEl.title = "";
      dialogWrapperEl.role = "dialog";
      dialogWrapperEl.setAttribute("aria-labelledby", `bytm-${this.id}-dialog-title`);
      dialogWrapperEl.setAttribute("aria-describedby", `bytm-${this.id}-dialog-body`);
      if (this.options.verticalAlign !== "center") dialogWrapperEl.classList.add(`align-${this.options.verticalAlign}`);
      const headerWrapperEl = document.createElement("div");
      headerWrapperEl.classList.add("bytm-dialog-header");
      this.options.small && headerWrapperEl.classList.add("small");
      if (header) {
        const headerTitleWrapperEl = document.createElement("div");
        headerTitleWrapperEl.id = `bytm-${this.id}-dialog-title`;
        headerTitleWrapperEl.classList.add("bytm-dialog-title-wrapper");
        headerTitleWrapperEl.role = "heading";
        headerTitleWrapperEl.ariaLevel = "1";
        headerTitleWrapperEl.appendChild(await header);
        headerWrapperEl.appendChild(headerTitleWrapperEl);
      } else {
        const padEl = document.createElement("div");
        padEl.classList.add("bytm-dialog-header-pad");
        this.options.small && padEl.classList.add("small");
        headerWrapperEl.appendChild(padEl);
      }
      if (this.options.closeBtnEnabled) {
        const closeBtnEl = document.createElement("img");
        closeBtnEl.classList.add("bytm-dialog-close");
        this.options.small && closeBtnEl.classList.add("small");
        closeBtnEl.src = await getResourceUrl("img-close");
        closeBtnEl.role = "button";
        closeBtnEl.tabIndex = 0;
        closeBtnEl.alt = closeBtnEl.title = closeBtnEl.ariaLabel = t("close_menu_tooltip");
        onInteraction(closeBtnEl, e => this.close(e));
        headerWrapperEl.appendChild(closeBtnEl);
      }
      dialogWrapperEl.appendChild(headerWrapperEl);
      const dialogBodyElem = document.createElement("div");
      dialogBodyElem.id = `bytm-${this.id}-dialog-body`;
      dialogBodyElem.classList.add("bytm-dialog-body");
      this.options.small && dialogBodyElem.classList.add("small");
      dialogBodyElem.appendChild(await this.options.renderBody());
      dialogWrapperEl.appendChild(dialogBodyElem);
      if (footer) {
        const footerWrapper = document.createElement("div");
        footerWrapper.classList.add("bytm-dialog-footer-cont");
        this.options.small && footerWrapper.classList.add("small");
        dialogWrapperEl.appendChild(footerWrapper);
        footerWrapper.appendChild(await footer);
      }
      return dialogWrapperEl;
    }
  }
  async function createToggleInput({onChange: onChange, initialValue: initialValue = false, id: id = CoreUtils.randomId(6, 36), labelPos: labelPos = "left"}) {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("bytm-toggle-wrapper", "bytm-no-select");
    wrapperEl.role = "switch";
    wrapperEl.tabIndex = 0;
    wrapperEl.ariaChecked = String(initialValue);
    const labelEl = labelPos !== "off" ? document.createElement("label") : undefined;
    if (labelEl) {
      labelEl.id = `bytm-toggle-label-${id}`;
      labelEl.classList.add("bytm-toggle-label");
      labelEl.textContent = t(`toggled_${initialValue ? "on" : "off"}`);
      if (id) labelEl.htmlFor = `bytm-toggle-${id}`;
      wrapperEl.setAttribute("aria-labelledby", labelEl.id);
    }
    const toggleEl = document.createElement("label");
    toggleEl.classList.add("bytm-toggle");
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.checked = initialValue;
    checkboxEl.classList.add("bytm-toggle-checkbox");
    checkboxEl.tabIndex = -1;
    if (id) checkboxEl.id = `bytm-toggle-${id}`;
    const toggleSwitchEl = document.createElement("div");
    toggleSwitchEl.classList.add("bytm-toggle-switch");
    const handleToggle = e => {
      e.preventDefault();
      e.stopPropagation();
      onChange(checkboxEl.checked);
      if (labelEl) labelEl.textContent = t(`toggled_${checkboxEl.checked ? "on" : "off"}`);
      wrapperEl.ariaChecked = String(checkboxEl.checked);
    };
    checkboxEl.addEventListener("change", handleToggle, {
      capture: true
    });
    wrapperEl.addEventListener("keydown", e => {
      if ([ "Space", " ", "Enter" ].includes(e.code)) {
        e.preventDefault();
        e.stopPropagation();
        checkboxEl.checked = !checkboxEl.checked;
        handleToggle(e);
      }
    }, {
      capture: true
    });
    wrapperEl.addEventListener("click", e => {
      if (e.target !== checkboxEl) {
        checkboxEl.checked = !checkboxEl.checked;
        handleToggle(e);
      }
    });
    toggleEl.appendChild(checkboxEl);
    toggleEl.appendChild(toggleSwitchEl);
    labelEl && labelPos === "left" && wrapperEl.appendChild(labelEl);
    wrapperEl.appendChild(toggleEl);
    labelEl && labelPos === "right" && wrapperEl.appendChild(labelEl);
    return wrapperEl;
  }
  const siteEvents = new CoreUtils.NanoEmitter({
    publicEmit: true
  });
  let observers = [];
  let lastVidId = null;
  let lastPathname = null;
  let lastFullscreen;
  function initSiteEvents() {
    try {
      if (getDomain() === "ytm") {
        const queueObs = new MutationObserver(([{addedNodes: addedNodes, removedNodes: removedNodes, target: target}]) => {
          if (addedNodes.length > 0 || removedNodes.length > 0) {
            info(`Detected queue change - added nodes: ${[ ...addedNodes.values() ].length} - removed nodes: ${[ ...removedNodes.values() ].length}`);
            emitSiteEvent("queueChanged", target);
          }
        });
        addSelectorListener("sidePanel", "#contents.ytmusic-player-queue", {
          listener: el => {
            queueObs.observe(el, {
              childList: true
            });
          }
        });
        const autoplayObs = new MutationObserver(([{addedNodes: addedNodes, removedNodes: removedNodes, target: target}]) => {
          if (addedNodes.length > 0 || removedNodes.length > 0) {
            info(`Detected autoplay queue change - added nodes: ${[ ...addedNodes.values() ].length} - removed nodes: ${[ ...removedNodes.values() ].length}`);
            emitSiteEvent("autoplayQueueChanged", target);
          }
        });
        addSelectorListener("sidePanel", "ytmusic-player-queue #automix-contents", {
          listener: el => {
            autoplayObs.observe(el, {
              childList: true
            });
          }
        });
        let lastTitle = null;
        addSelectorListener("playerBarInfo", "yt-formatted-string.title", {
          continuous: true,
          listener: titleElem => {
            const oldTitle = lastTitle;
            const newTitle = titleElem.textContent;
            if (newTitle === lastTitle || !newTitle) return;
            lastTitle = newTitle;
            info(`Detected song change - old title: "${oldTitle}" - new title: "${newTitle}"`);
            emitSiteEvent("songTitleChanged", newTitle, oldTitle);
            runIntervalChecks();
          }
        });
        info("Successfully initialized SiteEvents observers");
        observers = observers.concat([ queueObs, autoplayObs ]);
        const playerFullscreenObs = new MutationObserver(([{target: target}]) => {
          const isFullscreen = target.getAttribute("player-ui-state")?.toUpperCase() === "FULLSCREEN";
          if (lastFullscreen !== isFullscreen || typeof lastFullscreen === "undefined") {
            emitSiteEvent("fullscreenToggled", isFullscreen);
            lastFullscreen = isFullscreen;
          }
        });
        const registerFullScreenObs = () => addSelectorListener("mainPanel", "ytmusic-player#player", {
          listener: el => {
            playerFullscreenObs.observe(el, {
              attributeFilter: [ "player-ui-state" ]
            });
          }
        });
        if (globserversReady) registerFullScreenObs(); else window.addEventListener("bytm:observersReady", registerFullScreenObs, {
          once: true
        });
      }
      CoreUtils.createRecurringTask({
        timeout: 150,
        task: runIntervalChecks
      });
      if (getDomain() === "ytm") {
        addSelectorListener("mainPanel", "ytmusic-player #song-video #movie_player .ytp-title-text > a", {
          listener(el) {
            const urlRefObs = new MutationObserver(([{target: target}]) => {
              if (!target || !target?.href?.includes("/watch")) return;
              const videoID = new URL(target.href).searchParams.get("v");
              checkVideoIdChange(videoID);
            });
            urlRefObs.observe(el, {
              attributeFilter: [ "href" ]
            });
          }
        });
      }
      getDomain() === "ytm" && CoreUtils.createRecurringTask({
        timeout: 250,
        task: () => checkVideoIdChange()
      });
    } catch (err) {
      error("Couldn't initialize site event observers due to an error:\n", err);
    }
  }
  let bytmReady = false;
  window.addEventListener("bytm:allReady", () => bytmReady = true, {
    once: true
  });
  function emitSiteEvent(key, ...args) {
    try {
      const logEmit = () => {
        if (getFeature("logEvents")) {
          args.length > 0 ? log(`Emitted site event 'bytm:siteEvent:${key}' with ${args.length} ${CoreUtils.autoPlural("argument", args)}:`, ...args) : log(`Emitted site event 'bytm:siteEvent:${key}' (without data)`);
        }
      };
      if (!bytmReady) {
        const startTs = Date.now();
        window.addEventListener("bytm:ready", () => {
          bytmReady = true;
          forceEmitSiteEvent(key, ...args);
          logEmit();
          if (Date.now() - startTs > 500) warn(`Slow siteEvent '${key}'! - took ${Date.now() - startTs}ms from initial emit to "bytm:ready"`);
        }, {
          once: true
        });
        return;
      } else {
        forceEmitSiteEvent(key, ...args);
        logEmit();
      }
    } catch (err) {
      error(`Couldn't emit site event "${key}" due to an error:\n`, err);
    }
  }
  function forceEmitSiteEvent(key, ...args) {
    try {
      siteEvents.emit(key, ...args);
      emitInterface(`bytm:siteEvent:${key}`, args);
    } catch (err) {
      error(`Couldn't emit site event "${key}" due to an error:\n`, err);
    }
  }
  function checkVideoIdChange(newID) {
    newID ?? (newID = new URL(location.href).searchParams.get("v"));
    if (newID && newID !== lastVidId) {
      info(`Detected watch ID change - old ID: "${lastVidId}" - new ID: "${newID}"`);
      emitSiteEvent("watchIdChanged", newID, lastVidId);
      lastVidId = newID;
    }
  }
  function runIntervalChecks() {
    if (!lastVidId) checkVideoIdChange();
    if (location.pathname !== lastPathname) {
      emitSiteEvent("pathChanged", String(location.pathname), lastPathname);
      lastPathname = String(location.pathname);
    }
  }
  var version = "3.1.0";
  var license = "AGPL-3.0-or-later";
  var homepage = "https://github.com/Sv443/BetterYTM";
  var namespace = "https://github.com/Sv443/BetterYTM";
  var pluginDiscoveryUrl = "https://github.com/Sv443/BetterYTM/blob/main/README.md#plugins";
  var specialThanksUrl = "https://github.com/Sv443/BetterYTM/blob/main/README.md#special-thanks";
  var devVersionUrl = "https://github.com/Sv443/BetterYTM/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen";
  var author = {
    name: "Sv443",
    url: "https://github.com/Sv443"
  };
  var bugs = {
    url: "https://github.com/Sv443/BetterYTM/issues"
  };
  var funding = {
    url: "https://github.com/sponsors/Sv443"
  };
  var hosts = {
    github: "https://github.com/Sv443/BetterYTM",
    greasyfork: "https://greasyfork.org/en/scripts/475682-betterytm",
    openuserjs: "https://openuserjs.org/scripts/Sv443/BetterYTM"
  };
  var updates = {
    github: "https://github.com/Sv443/BetterYTM/releases",
    greasyfork: "https://greasyfork.org/en/scripts/475682-betterytm",
    openuserjs: "https://openuserjs.org/scripts/Sv443/BetterYTM"
  };
  var packageJson = {
    version: version,
    license: license,
    homepage: homepage,
    namespace: namespace,
    pluginDiscoveryUrl: pluginDiscoveryUrl,
    specialThanksUrl: specialThanksUrl,
    devVersionUrl: devVersionUrl,
    author: author,
    bugs: bugs,
    funding: funding,
    hosts: hosts,
    updates: updates
  };
  let verNotifDialog = null;
  async function getVersionNotifDialog({latestTag: latestTag}) {
    if (!verNotifDialog) {
      const changelogMdFull = await getChangelogMd();
      const changelogMd = changelogMdFull.split('<div class="split">')[1];
      const changelogHtml = await parseMarkdown(changelogMd);
      verNotifDialog = new BytmDialog({
        id: "version-notif",
        width: 600,
        height: 800,
        closeBtnEnabled: false,
        closeOnBgClick: false,
        closeOnEscPress: true,
        destroyOnClose: true,
        small: true,
        renderHeader: renderHeader$4,
        renderBody: () => renderBody$4({
          latestTag: latestTag,
          changelogHtml: changelogHtml
        })
      });
    }
    return verNotifDialog;
  }
  async function renderHeader$4() {
    const logoEl = document.createElement("img");
    logoEl.classList.add("bytm-dialog-header-img", "bytm-no-select");
    logoEl.src = await getResourceUrl(mode$1 === "development" ? "img-logo_dev" : "img-logo");
    logoEl.alt = "BetterYTM logo";
    return logoEl;
  }
  let disableUpdateCheck = false;
  async function renderBody$4({latestTag: latestTag, changelogHtml: changelogHtml}) {
    disableUpdateCheck = false;
    const wrapperEl = document.createElement("div");
    const pEl = document.createElement("p");
    pEl.textContent = t("new_version_available", scriptInfo$1.name, scriptInfo$1.version, latestTag, platformNames[host$1]);
    wrapperEl.appendChild(pEl);
    const changelogDetailsEl = document.createElement("details");
    changelogDetailsEl.id = "bytm-version-notif-changelog-details";
    changelogDetailsEl.open = false;
    const changelogSummaryEl = document.createElement("summary");
    changelogSummaryEl.role = "button";
    changelogSummaryEl.tabIndex = 0;
    changelogSummaryEl.ariaLabel = changelogSummaryEl.title = changelogSummaryEl.textContent = t("expand_release_notes");
    changelogDetailsEl.appendChild(changelogSummaryEl);
    changelogDetailsEl.addEventListener("toggle", () => {
      changelogSummaryEl.ariaLabel = changelogSummaryEl.title = changelogSummaryEl.textContent = changelogDetailsEl.open ? t("collapse_release_notes") : t("expand_release_notes");
    });
    const changelogEl = document.createElement("p");
    changelogEl.id = "bytm-version-notif-changelog-cont";
    changelogEl.classList.add("bytm-markdown-container");
    setInnerHtml(changelogEl, changelogHtml);
    changelogEl.querySelectorAll("a").forEach(a => {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
    changelogDetailsEl.appendChild(changelogEl);
    wrapperEl.appendChild(changelogDetailsEl);
    const disableUpdCheckEl = document.createElement("div");
    disableUpdCheckEl.id = "bytm-disable-update-check-wrapper";
    if (!getFeature("versionCheck")) disableUpdateCheck = true;
    const disableToggleEl = await createToggleInput({
      id: "disable-update-check",
      initialValue: disableUpdateCheck,
      labelPos: "off",
      onChange(checked) {
        disableUpdateCheck = checked;
        if (checked) btnClose.textContent = t("close_and_ignore_until_reenabled"); else btnClose.textContent = t("close_and_ignore_for_24h");
      }
    });
    const labelWrapperEl = document.createElement("div");
    labelWrapperEl.classList.add("bytm-disable-update-check-toggle-label-wrapper");
    const labelEl = document.createElement("label");
    labelEl.htmlFor = "bytm-toggle-disable-update-check";
    labelEl.textContent = t("disable_update_check");
    const secondaryLabelEl = document.createElement("span");
    secondaryLabelEl.classList.add("bytm-secondary-label");
    secondaryLabelEl.textContent = t("reenable_in_config_menu");
    labelWrapperEl.appendChild(labelEl);
    labelWrapperEl.appendChild(secondaryLabelEl);
    disableUpdCheckEl.appendChild(disableToggleEl);
    disableUpdCheckEl.appendChild(labelWrapperEl);
    wrapperEl.appendChild(disableUpdCheckEl);
    verNotifDialog?.on("close", async () => {
      const config = getFeatures();
      const recreateCfgMenu = config.versionCheck === disableUpdateCheck;
      if (config.versionCheck && disableUpdateCheck) config.versionCheck = false; else if (!config.versionCheck && !disableUpdateCheck) config.versionCheck = true;
      await setFeatures(config);
      recreateCfgMenu && emitSiteEvent("recreateCfgMenu");
    });
    const btnWrapper = document.createElement("div");
    btnWrapper.id = "bytm-version-notif-dialog-btns";
    const btnUpdate = document.createElement("button");
    btnUpdate.classList.add("bytm-btn");
    btnUpdate.tabIndex = 0;
    btnUpdate.textContent = t("open_update_page_install_manually", platformNames[host$1]);
    onInteraction(btnUpdate, () => {
      window.open(packageJson.updates[host$1]);
      verNotifDialog?.close();
    });
    const btnClose = document.createElement("button");
    btnClose.classList.add("bytm-btn");
    btnClose.tabIndex = 0;
    btnClose.textContent = t("close_and_ignore_for_24h");
    onInteraction(btnClose, () => verNotifDialog?.close());
    btnWrapper.appendChild(btnUpdate);
    btnWrapper.appendChild(btnClose);
    wrapperEl.appendChild(btnWrapper);
    return wrapperEl;
  }
  let promptDialog = null;
  const promptDialogId = "prompt-dialog";
  class PromptDialog extends BytmDialog {
    constructor(props) {
      super({
        id: promptDialogId,
        width: 500,
        height: 400,
        destroyOnClose: true,
        closeBtnEnabled: true,
        closeOnBgClick: props.type !== "prompt",
        closeOnEscPress: true,
        small: true,
        ...props.dialogOptions,
        renderHeader: () => this.renderHeader(props),
        renderBody: () => this.renderBody(props),
        renderFooter: () => this.renderFooter(props)
      });
      Object.defineProperty(this, "type", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this.type = props.type;
      this.on("render", () => this.focusOnRender());
    }
    emitResolve(val) {
      this.events.emit("resolve", val);
    }
    getInputValue() {
      if (this.type !== "prompt") return undefined;
      return document.querySelector("#bytm-dialog-container #bytm-prompt-dialog-input")?.value?.trim() ?? null;
    }
    async renderHeader({type: type}) {
      const headerEl = document.createElement("div");
      headerEl.id = "bytm-prompt-dialog-header";
      setInnerHtml(headerEl, await resourceAsString(type === "alert" ? "icon-alert" : "icon-prompt"));
      return headerEl;
    }
    async renderBody({type: type, message: message, ...rest}) {
      const contElem = document.createElement("div");
      contElem.classList.add(`bytm-prompt-type-${type}`);
      const upperContElem = document.createElement("div");
      upperContElem.id = "bytm-prompt-dialog-upper-cont";
      contElem.appendChild(upperContElem);
      const messageElem = document.createElement("p");
      messageElem.id = "bytm-prompt-dialog-message";
      messageElem.role = "alert";
      messageElem.ariaLive = "polite";
      messageElem.tabIndex = 0;
      messageElem.textContent = String(message);
      upperContElem.appendChild(messageElem);
      if (type === "prompt") {
        const isTA = "textarea" in rest && rest.textarea;
        const inputElem = document.createElement(isTA ? "textarea" : "input");
        inputElem.id = "bytm-prompt-dialog-input";
        if (isTA) {
          inputElem.wrap = "off";
          inputElem.rows = 4;
        } else inputElem.type = "text";
        inputElem.autofocus = true;
        inputElem.autocomplete = "off";
        inputElem.spellcheck = false;
        inputElem.value = "defaultValue" in rest && rest.defaultValue ? await CoreUtils.consumeStringGen(rest.defaultValue) : "";
        const inputEnterListener = e => {
          if ("key" in e && e.key === "Enter") {
            inputElem.removeEventListener("keydown", inputEnterListener);
            this.emitResolve(inputElem?.value?.trim() ?? null);
            promptDialog?.close();
          }
        };
        inputElem.addEventListener("keydown", inputEnterListener);
        promptDialog?.once("close", () => inputElem.removeEventListener("keydown", inputEnterListener));
        upperContElem.appendChild(inputElem);
      }
      return contElem;
    }
    async renderFooter({type: type, ...rest}) {
      const buttonsWrapper = document.createElement("div");
      buttonsWrapper.id = "bytm-prompt-dialog-button-wrapper";
      const buttonsCont = document.createElement("div");
      buttonsCont.id = "bytm-prompt-dialog-buttons-cont";
      const confirmBtn = (type === "confirm" || type === "prompt") && ("confirmBtnEnabled" in rest && rest.confirmBtnEnabled === false ? undefined : document.createElement("button"));
      if (confirmBtn && "confirmBtnEnabled" in rest) {
        confirmBtn.id = "bytm-prompt-dialog-confirm";
        confirmBtn.classList.add("bytm-prompt-dialog-button");
        confirmBtn.textContent = await this.consumePromptStringGen(type, rest.confirmBtnText, t("prompt_confirm"));
        confirmBtn.ariaLabel = confirmBtn.title = await this.consumePromptStringGen(type, rest.confirmBtnTooltip, t("click_to_confirm_tooltip"));
        confirmBtn.tabIndex = 0;
        if (type === "confirm") confirmBtn.autofocus = true;
        confirmBtn.addEventListener("click", () => {
          this.emitResolve(type === "confirm" ? true : document.querySelector("#bytm-prompt-dialog-input")?.value?.trim() ?? null);
          promptDialog?.close();
        }, {
          once: true
        });
      }
      const closeBtn = rest.denyBtnEnabled === false ? undefined : document.createElement("button");
      if (closeBtn) {
        closeBtn.id = "bytm-prompt-dialog-close";
        closeBtn.classList.add("bytm-prompt-dialog-button");
        closeBtn.textContent = await this.consumePromptStringGen(type, rest.denyBtnText, t(type === "alert" ? "prompt_close" : "prompt_cancel"));
        closeBtn.ariaLabel = closeBtn.title = await this.consumePromptStringGen(type, rest.denyBtnTooltip, t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip"));
        closeBtn.tabIndex = 0;
        if (type === "alert") closeBtn.autofocus = true;
        closeBtn.addEventListener("click", () => {
          const resVals = {
            alert: true,
            confirm: false,
            prompt: null
          };
          this.emitResolve(resVals[type]);
          promptDialog?.close();
        }, {
          once: true
        });
      }
      const {extraButtons: extraButtons = [], extraButtonsPosition: extraButtonsPosition = "between"} = rest;
      const isMac = getOS() === "mac";
      const appendExtraButtons = async () => {
        for (const getBtnFn of extraButtons) {
          const btn = await getBtnFn(this);
          if (btn instanceof HTMLButtonElement) buttonsCont.appendChild(btn);
        }
      };
      if (extraButtonsPosition === "before") await appendExtraButtons();
      if (!isMac) {
        confirmBtn && buttonsCont.appendChild(confirmBtn);
        if (extraButtonsPosition === "between") await appendExtraButtons();
        closeBtn && buttonsCont.appendChild(closeBtn);
      } else {
        closeBtn && buttonsCont.appendChild(closeBtn);
        if (extraButtonsPosition === "between") await appendExtraButtons();
        confirmBtn && buttonsCont.appendChild(confirmBtn);
      }
      if (extraButtonsPosition === "after") await appendExtraButtons();
      buttonsWrapper.appendChild(buttonsCont);
      return buttonsWrapper;
    }
    async consumePromptStringGen(curPromptType, stringGen, fallback) {
      if (typeof stringGen === "function") return await stringGen(curPromptType);
      return String(stringGen ?? fallback);
    }
    focusOnRender() {
      const inputElem = document.querySelector("#bytm-prompt-dialog-input");
      if (inputElem) return inputElem.focus();
      let captureEnterKey = true;
      document.addEventListener("keydown", e => {
        if (e.key === "Enter" && captureEnterKey) {
          const confBtn = document.querySelector("#bytm-prompt-dialog-confirm");
          const closeBtn = document.querySelector("#bytm-prompt-dialog-close");
          if (confBtn || closeBtn) {
            confBtn && "click" in confBtn ? confBtn.click() : closeBtn?.click();
            captureEnterKey = false;
          }
        }
      }, {
        capture: true,
        once: true
      });
    }
  }
  function showPrompt({type: type, ...rest}) {
    return new Promise(resolve => {
      if (BytmDialog.getOpenDialogs().includes(promptDialogId)) promptDialog?.close();
      promptDialog = new PromptDialog({
        type: type,
        ...rest
      });
      promptDialog.once("open", () => document.querySelector(`#bytm-prompt-dialog-${type === "alert" ? "close" : "confirm"}`)?.focus());
      promptDialog.once("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
      promptDialog.once("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));
      let resolveVal;
      const tryResolve = () => resolve(typeof resolveVal !== "undefined" ? resolveVal : false);
      let closeUnsub;
      const resolveUnsub = promptDialog.on("resolve", val => {
        resolveUnsub();
        if (resolveVal !== undefined) return;
        resolveVal = val;
        tryResolve();
        closeUnsub?.();
      });
      closeUnsub = promptDialog.on("close", () => {
        closeUnsub();
        if (resolveVal !== undefined) return;
        resolveVal = type === "alert";
        if (type === "prompt") resolveVal = null;
        tryResolve();
        resolveUnsub();
      });
      promptDialog.open();
    });
  }
  const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";
  async function initVersionCheck() {
    try {
      if (getFeature("versionCheck") === false) return info("Version check is disabled");
      const lastCheck = await GM.getValue("bytm-version-check", 0);
      if (Date.now() - lastCheck < 1e3 * 60 * 60 * 24) return;
      await doVersionCheck(false);
    } catch (err) {
      error("Version check failed:", err);
    }
  }
  async function doVersionCheck(notifyNoNewVerFound = false) {
    await GM.setValue("bytm-version-check", Date.now());
    const res = await sendRequest({
      method: "GET",
      url: releaseURL
    });
    const noNewVerFound = () => notifyNoNewVerFound ? showPrompt({
      type: "alert",
      message: t("no_new_version_found")
    }) : undefined;
    const latestTag = res.finalUrl.split("/").pop()?.replace(/[a-zA-Z]/g, "");
    if (!latestTag) return await noNewVerFound();
    info("Version check - current version:", scriptInfo$1.version, "- latest version:", latestTag, LogLevel.Info);
    if (compareVersions.compare(scriptInfo$1.version, latestTag, "<")) {
      const dialog = await getVersionNotifDialog({
        latestTag: latestTag
      });
      await dialog.open();
      return;
    }
    return await noNewVerFound();
  }
  async function initVolumeFeatures() {
    let listenerOnce = false;
    const onSliderElExists = async (type, sliderElem) => {
      const volSliderCont = document.createElement("div");
      volSliderCont.classList.add("bytm-vol-slider-cont");
      sliderElem.setAttribute("step", "1");
      if (getFeature("volumeSliderScrollStep") !== featInfo.volumeSliderScrollStep.default) initScrollStep(volSliderCont, sliderElem);
      UserUtils.addParent(sliderElem, volSliderCont);
      if (getFeature("volumeSliderLabel")) await addVolumeSliderLabel(type, sliderElem, volSliderCont);
      const updateSliderVal = step => {
        if (step && step > 0) {
          const roundedValue = Math.round(Number(sliderElem.value) / step) * step;
          if (roundedValue !== Number(sliderElem.value)) {
            sliderElem.value = sliderElem.dataset.scrollVal = String(roundedValue);
            sliderElem.setAttribute("aria-valuenow", String(roundedValue));
            sliderElem.dispatchEvent(new Event("change", {
              bubbles: true
            }));
            siteEvents.emit("updateVolumeSliderLabel");
          }
        }
      };
      sliderElem.addEventListener("mousedown", () => {
        sliderElem.dataset.dragging = "true";
      });
      sliderElem.addEventListener("mouseup", () => {
        delete sliderElem.dataset.dragging;
        if (getFeature("volumeSharedBetweenTabs")) sharedVolumeChanged(Number(sliderElem.value));
        updateSliderVal(getFeature("volumeSliderStep"));
      });
      sliderElem.addEventListener("scrollend", () => {
        if (getFeature("volumeSharedBetweenTabs")) sharedVolumeChanged(Number(sliderElem.value));
        updateSliderVal(getFeature("volumeSliderScrollStep"));
      });
      if (listenerOnce) return;
      listenerOnce = true;
      await setInitialTabVolume(sliderElem);
      if (typeof getFeature("volumeSliderSize") === "number") setVolSliderSize();
      if (getFeature("volumeSharedBetweenTabs")) checkSharedVolume();
    };
    addSelectorListener("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
      listener: el => onSliderElExists("normal", el)
    });
    let sizeSmOnce = false;
    const onResize = () => {
      if (sizeSmOnce || window.innerWidth >= 1150) return;
      sizeSmOnce = true;
      addSelectorListener("playerBarRightControls", "ytmusic-player-expanding-menu tp-yt-paper-slider#expand-volume-slider", {
        listener: el => onSliderElExists("expand", el)
      });
    };
    window.addEventListener("resize", CoreUtils.debounce(onResize, Math.floor(1e3 / 6)));
    waitVideoElementReady().then(onResize);
    onResize();
  }
  const {get: nativeGetVolume, set: nativeSetVolume} = Object.getOwnPropertyDescriptor(UserUtils.getUnsafeWindow().HTMLMediaElement.prototype, "volume") ?? {};
  function initExponentialVolume() {
    if (getDomain() !== "ytm" || getFeature("volumeSliderExponential") === "linear") return;
    Object.defineProperty(UserUtils.getUnsafeWindow().HTMLMediaElement.prototype, "volume", {
      get() {
        const actual = nativeGetVolume?.call(this);
        if (typeof actual !== "number" || isNaN(actual)) return actual;
        return expVolFnInv(actual);
      },
      set(value) {
        if (typeof value !== "number" || isNaN(value)) return nativeSetVolume?.call(this, value);
        return nativeSetVolume?.call(this, expVolFn(value));
      }
    });
  }
  function expVolClamp(x) {
    return Math.min(1, Math.max(0, x));
  }
  function expVolFn(x) {
    switch (getFeature("volumeSliderExponential")) {
     case "x^2":
      return expVolClamp(Math.pow(expVolClamp(x), 2));

     case "x^3":
      return expVolClamp(Math.pow(expVolClamp(x), 3));

     case "x^4":
      return expVolClamp(Math.pow(expVolClamp(x), 4));

     case "x^5":
      return expVolClamp(Math.pow(expVolClamp(x), 5));

     case "linear":
     default:
      return expVolClamp(x);
    }
  }
  function expVolFnInv(y) {
    switch (getFeature("volumeSliderExponential")) {
     case "x^2":
      return expVolClamp(Math.pow(expVolClamp(y), 1 / 2));

     case "x^3":
      return expVolClamp(Math.pow(expVolClamp(y), 1 / 3));

     case "x^4":
      return expVolClamp(Math.pow(expVolClamp(y), 1 / 4));

     case "x^5":
      return expVolClamp(Math.pow(expVolClamp(y), 1 / 5));

     case "linear":
     default:
      return expVolClamp(y);
    }
  }
  function initScrollStep(volSliderCont, sliderElem) {
    for (const evtName of [ "wheel", "scroll", "mousewheel", "DOMMouseScroll" ]) {
      volSliderCont.addEventListener(evtName, e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const delta = Number(e.deltaY ?? e?.detail ?? 1);
        if (isNaN(delta)) return warn("Invalid scroll delta:", delta);
        const volumeDir = -Math.sign(delta);
        const newVolume = String(Number(sliderElem.value) + getFeature("volumeSliderScrollStep") * volumeDir);
        sliderElem.value = newVolume;
        sliderElem.setAttribute("aria-valuenow", newVolume);
        sliderElem.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      }, {
        capture: true
      });
    }
  }
  async function addVolumeSliderLabel(type, sliderElem, sliderContainer) {
    const labelContElem = document.createElement("div");
    labelContElem.classList.add("bytm-vol-slider-label");
    labelContElem.style.display = "none";
    labelContElem.setAttribute("aria-hidden", "true");
    const volShared = getFeature("volumeSharedBetweenTabs");
    if (volShared) {
      const linkIconHtml = await resourceAsString("icon-link");
      if (linkIconHtml) {
        const linkIconElem = document.createElement("div");
        linkIconElem.classList.add("bytm-vol-slider-shared");
        setInnerHtml(linkIconElem, linkIconHtml);
        linkIconElem.role = "alert";
        linkIconElem.ariaLive = "polite";
        linkIconElem.title = linkIconElem.ariaLabel = t("volume_shared_tooltip");
        labelContElem.classList.add("has-icon");
        labelContElem.appendChild(linkIconElem);
      }
    }
    const getAdjustedVolValue = val => {
      if (isNaN(val)) return String(val);
      val = CoreUtils.clamp(val, 0, 100);
      const valAdjusted = (expVolFn(val / 100) * 100).toFixed(1);
      const fixedPtVal = [ "0.0", "100.0" ].includes(valAdjusted) ? valAdjusted.slice(0, -2) : valAdjusted;
      return fixedPtVal;
    };
    const getLabel = value => {
      const step = Number(getFeature(sliderElem.hasAttribute("pressed") ? "volumeSliderStep" : "volumeSliderScrollStep", Number(sliderElem.step)));
      const roundedValue = Math.round(Number(value) / step) * step;
      let label = `${roundedValue}%`;
      labelContElem.classList.remove("wide");
      if (getFeature("volumeSliderExponential") !== "linear") {
        const fixedPtVal = getAdjustedVolValue(Number(value));
        const lblType = getFeature("volumeSliderExponentialLabelType");
        if (lblType === "both") {
          label += ` (${fixedPtVal}%)`;
          labelContElem.classList.add("wide");
        } else if (lblType === "valueBased") label = `${fixedPtVal}%`;
      }
      return label;
    };
    const labelElem = document.createElement("div");
    labelElem.classList.add("label");
    labelElem.textContent = getLabel(sliderElem.value);
    labelContElem.appendChild(labelElem);
    labelContElem.addEventListener("click", e => e.stopPropagation());
    labelContElem.addEventListener("keydown", e => [ "Enter", "Space", " " ].includes(e.key) && e.stopPropagation());
    const getSliderTooltip = slider => t("volume_tooltip", {
      volumePercent: getAdjustedVolValue(Number(slider.value))
    });
    const labelFull = getSliderTooltip(sliderElem);
    sliderContainer.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);
    const updateLabel = () => {
      const labelFull = getSliderTooltip(sliderElem);
      sliderContainer.setAttribute("title", labelFull);
      sliderElem.setAttribute("title", labelFull);
      sliderElem.setAttribute("aria-valuetext", labelFull);
      if (!isNaN(Number(sliderElem.dataset.scrollVal)) && Number(sliderElem.dataset.scrollVal) % getFeature("volumeSliderStep") !== 0) sliderElem.dataset.scrollVal = "";
      const labelElem2 = document.querySelectorAll(".bytm-vol-slider-label div.label");
      for (const el of labelElem2) el.textContent = getLabel(sliderElem.value);
    };
    sliderElem.addEventListener("change", () => updateLabel());
    siteEvents.on("updateVolumeSliderLabel", () => updateLabel());
    siteEvents.on("configChanged", () => updateLabel());
    addSelectorListener("playerBarRightControls", type === "normal" ? ".bytm-vol-slider-cont" : "ytmusic-player-expanding-menu .bytm-vol-slider-cont", {
      listener: volumeCont => volumeCont.appendChild(labelContElem)
    });
    let lastSliderVal = Number(sliderElem.value);
    const setThemeSongContHidden = (hidden = true) => {
      const contEl = document.querySelector("#ts-panel-container");
      contEl?.classList[hidden ? "add" : "remove"]("bytm-hidden");
    };
    const sliderHoverObserver = new MutationObserver(() => {
      if (sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem) {
        labelContElem.style.display = "initial";
        labelContElem.setAttribute("aria-hidden", "false");
        labelContElem.classList.add("bytm-visible");
        setThemeSongContHidden();
      } else if (labelContElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem) {
        labelContElem.addEventListener("transitionend", () => {
          labelContElem.style.display = "none";
          labelContElem.setAttribute("aria-hidden", "true");
          setThemeSongContHidden(false);
        }, {
          once: true
        });
        labelContElem.classList.remove("bytm-visible");
      }
      if (Number(sliderElem.value) !== lastSliderVal) {
        lastSliderVal = Number(sliderElem.value);
        updateLabel();
      }
    });
    sliderHoverObserver.observe(sliderElem, {
      attributes: true
    });
  }
  function setVolSliderSize() {
    const size = getFeature("volumeSliderSize");
    if (typeof size !== "number" || isNaN(Number(size))) return error("Invalid volume slider size:", size);
    setGlobalCssVar("vol-slider-size", `${size}px`);
    addStyleFromResource("css-vol_slider_size");
  }
  async function sharedVolumeChanged(vol) {
    try {
      await GM.setValue("bytm-shared-volume", String(lastCheckedSharedVolume = ignoreVal = vol));
    } catch (err) {
      error("Couldn't save shared volume level due to an error:", err);
    }
  }
  let ignoreVal = -1;
  let lastCheckedSharedVolume = -1;
  async function checkSharedVolume() {
    try {
      const vol = await GM.getValue("bytm-shared-volume");
      if (vol && lastCheckedSharedVolume !== Number(vol)) {
        if (ignoreVal === Number(vol)) return;
        lastCheckedSharedVolume = Number(vol);
        const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider");
        if (sliderElem) {
          sliderElem.value = String(vol);
          sliderElem.dispatchEvent(new Event("change", {
            bubbles: true
          }));
        }
      }
      setTimeout(checkSharedVolume, 333);
    } catch (err) {
      error("Couldn't check for shared volume level due to an error:", err);
    }
  }
  async function setInitialTabVolume(sliderElem) {
    const reloadTabVol = Number((await getReloadTabData())?.volume);
    if ((isNaN(reloadTabVol) || reloadTabVol === 0) && !getFeature("setInitialTabVolume")) return;
    const vidElem = await waitVideoElementReady();
    const initialVol = Math.round(!isNaN(reloadTabVol) && reloadTabVol > 0 ? reloadTabVol : getFeature("initialTabVolumeLevel"));
    if (isNaN(initialVol) || initialVol < 0 || initialVol > 100) return;
    if (getFeature("volumeSharedBetweenTabs")) {
      lastCheckedSharedVolume = ignoreVal = initialVol;
      if (getFeature("volumeSharedBetweenTabs")) GM.setValue("bytm-shared-volume", String(initialVol)).catch(err => error("Couldn't save shared volume level due to an error:", err));
    }
    sliderElem.value = String(initialVol);
    vidElem.volume = initialVol / 100;
    sliderElem.dispatchEvent(new Event("change", {
      bubbles: true
    }));
    const nonLinVol = getFeature("volumeSliderExponential") !== "linear";
    log(`Set initial tab volume to ${initialVol}%${nonLinVol ? ` (${(expVolFn(initialVol / 100) * 100).toFixed(1)}%)` : ""}${reloadTabVol > 0 ? " from GM storage (reload)" : " from configuration (initial load)"}`);
  }
  const maxToastDuration = 15e3;
  const toastQueue = [];
  let showingToast = false;
  let timeout;
  async function showIconToast({duration: duration, position: position = "tr", iconPos: iconPos = "left", ...rest}) {
    if (typeof duration !== "number" || isNaN(duration)) duration = getFeature("toastDuration") * 1e3;
    if (duration <= 0) return info("Toast duration is <= 0, so it won't be shown");
    if (showingToast) return void toastQueue.push(() => showIconToast({
      duration: duration,
      position: position,
      iconPos: iconPos,
      ...rest
    }));
    showingToast = true;
    const toastWrapper = document.createElement("div");
    toastWrapper.classList.add("bytm-toast-flex-wrapper");
    let toastIcon;
    if ("iconSrc" in rest) {
      toastIcon = document.createElement("img");
      toastIcon.classList.add("bytm-toast-icon", "img");
      toastIcon.src = await rest.iconSrc;
    } else {
      toastIcon = document.createElement("div");
      toastIcon.classList.add("bytm-toast-icon");
      const iconHtml = await resourceAsString(rest.icon);
      if (iconHtml) setInnerHtml(toastIcon, iconHtml);
      if ("iconFill" in rest && rest.iconFill) toastIcon.style.setProperty("--toast-icon-fill", rest.iconFill);
    }
    const toastMessage = document.createElement("div");
    toastMessage.classList.add("bytm-toast-message");
    if ("message" in rest) {
      toastMessage.textContent = rest.message;
      if ("subtitle" in rest && rest.subtitle) {
        const subtitleEl = document.createElement("div");
        subtitleEl.classList.add("bytm-toast-subtitle");
        subtitleEl.textContent = rest.subtitle;
        toastMessage.appendChild(subtitleEl);
      }
    } else toastMessage.appendChild(rest.element);
    iconPos === "left" && toastWrapper.appendChild(toastIcon);
    toastWrapper.appendChild(toastMessage);
    iconPos === "right" && toastWrapper.appendChild(toastIcon);
    const elem = await showToast({
      duration: duration,
      position: position,
      element: toastWrapper,
      title: "message" in rest ? rest.message : rest.title,
      onClick: rest.onClick
    });
    if (toastQueue.length > 0) {
      return new Promise(resolve => {
        elem?.addEventListener("transitionend", async () => {
          const nextToast = toastQueue.shift();
          showingToast = false;
          return resolve(void await nextToast());
        }, {
          once: true
        });
      });
    } else {
      showingToast = false;
      return elem;
    }
  }
  async function showToast(arg) {
    const props = typeof arg === "string" ? {
      message: arg,
      duration: getFeature("toastDuration") * 1e3
    } : arg;
    const {duration: durationMs = getFeature("toastDuration") * 1e3, onClick: onClick, position: position = "tr", ...rest} = props;
    if (durationMs <= 0) return info("Toast duration is <= 0, so it won't be shown");
    if (showingToast) return void toastQueue.push(() => showToast(props));
    showingToast = true;
    if (document.querySelector("#bytm-toast")) await closeToast();
    const toastElem = document.createElement("div");
    toastElem.classList.add(`pos-${position.toLowerCase()}`);
    onClick && toastElem.classList.add("clickable");
    toastElem.id = "bytm-toast";
    toastElem.role = "alert";
    toastElem.ariaLive = "polite";
    toastElem.ariaAtomic = "true";
    toastElem.addEventListener("click", async e => {
      onClick?.(e);
      await closeToast();
    }, {
      once: true
    });
    if ("message" in rest) toastElem.title = toastElem.ariaLabel = toastElem.textContent = rest.message; else {
      toastElem.appendChild(rest.element);
      toastElem.title = toastElem.ariaLabel = rest.title;
    }
    document.body.appendChild(toastElem);
    CoreUtils.pauseFor(100).then(() => {
      toastElem.classList.add("visible");
      if (durationMs < Number.POSITIVE_INFINITY && durationMs > 0) {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(closeToast, CoreUtils.clamp(durationMs, 250, maxToastDuration));
      }
    });
    if (toastQueue.length > 0) {
      return new Promise(resolve => {
        toastElem?.addEventListener("transitionend", async () => {
          const nextToast = toastQueue.shift();
          showingToast = false;
          return resolve(void await nextToast());
        }, {
          once: true
        });
      });
    } else {
      showingToast = false;
      return toastElem;
    }
  }
  async function closeToast() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
    const toastEls = document.querySelectorAll("#bytm-toast");
    if (toastEls.length === 0) return;
    await Promise.allSettled(Array.from(toastEls).map(async toastEl => {
      toastEl.addEventListener("transitionend", async () => toastEl.remove(), {
        once: true
      });
      toastEl.classList.remove("visible");
    }));
  }
  class MarkdownDialog extends BytmDialog {
    constructor(options) {
      super({
        ...options,
        id: `md-${options.id}`,
        renderBody: () => this.renderBody()
      });
      Object.defineProperty(this, "opts", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this.opts = options;
    }
    static async parseMd(md) {
      return await marked.marked.parse(md, {
        async: true,
        gfm: true,
        breaks: true
      });
    }
    async renderBody() {
      const bodyEl = document.createElement("div");
      bodyEl.classList.add("bytm-md-dialog-body");
      const mdCont = await CoreUtils.consumeStringGen(this.opts.body);
      const markdownEl = document.createElement("div");
      markdownEl.classList.add("bytm-markdown-dialog-content", "bytm-markdown-container");
      markdownEl.tabIndex = 0;
      setInnerHtml(markdownEl, await MarkdownDialog.parseMd(mdCont));
      if (this.opts.modifyBodyElements) await this.opts.modifyBodyElements(bodyEl, markdownEl);
      bodyEl.appendChild(markdownEl);
      return bodyEl;
    }
  }
  const interactionKeys = [ "Enter", " ", "Space" ];
  function onInteraction(elem, listener, listenerOptions) {
    const {preventDefault: preventDefault = true, stopPropagation: stopPropagation = true, ...listenerOpts} = listenerOptions ?? {};
    const proxListener = e => {
      if (e instanceof KeyboardEvent) {
        if (interactionKeys.includes(e.key)) {
          preventDefault && e.preventDefault();
          stopPropagation && e.stopPropagation();
        } else return;
      } else if (e instanceof MouseEvent) {
        preventDefault && e.preventDefault();
        stopPropagation && e.stopPropagation();
      }
      listenerOpts?.once && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOpts);
      listenerOpts?.once && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOpts);
      listener(e);
    };
    elem.addEventListener("click", proxListener, listenerOpts);
    elem.addEventListener("keydown", proxListener, listenerOpts);
  }
  let curLogLevel = LogLevel.Info;
  const consPrefix = `[${scriptInfo$1.name}]`;
  const consPrefixDbg = `[${scriptInfo$1.name}/#DEBUG]`;
  const logs = [];
  const getLogsTxt = () => {
    const getVal = (val, primaryScope = true) => {
      if (typeof val === "undefined") return primaryScope ? "[undefined]" : "(undefined)";
      if (val === null) return primaryScope ? "[null]" : "(null)";
      if (Array.isArray(val)) return `[Array (${val.length}) <${val.map(v => getVal(v, false)).join(", ")}>]`;
      if (val instanceof Element) return `[Element <${val.tagName.toLowerCase()}${val.id ? ` id="${val.id}"` : ""}${val.className ? ` class="${val.className}"` : ""}>]`;
      if (typeof val === "function") return val.name ? `[Function <${val.name}()>]` : "[anonymous function()]";
      if (val instanceof CoreUtils.DatedError) return `[${val.name} (@ ${val.date.toISOString()}): ${val.message}]`;
      if (val instanceof Error) return `[${val.name}: ${val.message}]`;
      if (val instanceof Date) return `[Date <${val.toISOString()}>]`;
      if (typeof val === "object") {
        try {
          if (val.constructor?.name === "Object") return JSON.stringify(val);
          return `[Object <${val.constructor?.name ?? "(unknown)"}>]`;
        } catch {
          return "toString" in val ? val.toString() : `[Object <${val?.constructor?.name ?? "(unknown)"}>]`;
        }
      }
      return primaryScope ? `${val}` : `"${val}"`;
    };
    const longestLogType = Math.max(...logs.map(([type]) => type.length));
    return logs.reduce((acc, [type, time, ...args]) => {
      if (args.length === 0) return acc;
      const timestamp = new Date(time).toISOString();
      try {
        return `[${timestamp}] ${`[${type}]`.padEnd(longestLogType + 2, " ")} ${args.map(a => getVal(a)).join(" ")}\n${acc}`;
      } catch {
        return `[${timestamp}] ${`[${type}]`.padEnd(longestLogType + 2, " ")} ${args.map(a => typeof a === "object" && a && "toString" in a ? a.toString() : String(a)).join(" ")}\n${acc}`;
      }
    }, "");
  };
  function setLogLevel(level) {
    curLogLevel = level;
    setGlobalProp("logLevel", level);
    if (curLogLevel !== level) log("Set the log level to", LogLevel[level]);
  }
  function getLogLevel(args) {
    const minLogLvl = 0, maxLogLvl = 1;
    const lastArg = args.at(-1);
    if (typeof lastArg === "number" && lastArg >= 0 && lastArg <= Object.keys(LogLevel).length / 2 - 1) return CoreUtils.clamp(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
    return LogLevel.Debug;
  }
  function log(...args) {
    if (curLogLevel <= getLogLevel(args)) console.log(consPrefix, ...args);
    logs.push([ "LOG", Date.now(), ...args ]);
  }
  function info(...args) {
    if (curLogLevel <= getLogLevel(args)) console.info(consPrefix, ...args);
    logs.push([ "INFO", Date.now(), ...args ]);
  }
  function warn(...args) {
    console.warn(consPrefix, ...args);
    logs.push([ "WARN", Date.now(), ...args ]);
  }
  const showErrToast = CoreUtils.debounce((errName, ...args) => showIconToast({
    message: t("generic_error_toast_encountered_error_type", errName),
    subtitle: t("generic_error_toast_click_for_details"),
    icon: "icon-error",
    iconFill: "var(--bytm-error-col)",
    onClick: () => getErrorDialog(errName, Array.isArray(args) ? args : []).open()
  }), 1e3);
  function error(...args) {
    console.error(consPrefix, ...args);
    logs.push([ "ERROR", Date.now(), ...args ]);
    try {
      getFeature("showToastOnGenericError") && showErrToast(args.find(a => a instanceof Error)?.name ?? t("error"), ...args);
    } catch (e) {
      console.error(consPrefix, "Error while showing error toast:", e);
      logs.push([ "ERROR", Date.now(), "Error while showing error toast:", e ]);
    }
  }
  function errorNoToast(...args) {
    console.error(consPrefix, ...args);
    logs.push([ "ERROR", Date.now(), ...args ]);
  }
  function dbg(...args) {
    console.log(consPrefixDbg, ...args);
    logs.push([ "DBG", Date.now(), ...args ]);
  }
  function getErrorDialog(errName, args) {
    return new MarkdownDialog({
      id: "generic-error",
      height: 400,
      width: 500,
      small: true,
      destroyOnClose: true,
      renderHeader() {
        const header = document.createElement("h2");
        header.classList.add("bytm-dialog-title");
        header.role = "heading";
        header.ariaLevel = "1";
        header.tabIndex = 0;
        header.textContent = header.ariaLabel = errName;
        return header;
      },
      renderFooter() {
        const footer = document.createElement("div");
        footer.classList.add("bytm-dialog-footer", "align-right");
        const dlLogsBtn = document.createElement("button");
        dlLogsBtn.type = "button";
        dlLogsBtn.textContent = dlLogsBtn.ariaLabel = t("download_log_file");
        onInteraction(dlLogsBtn, () => {
          downloadFile(`bytm-log-${(new Date).toISOString()}.log`, getLogsTxt(), "text/plain");
        });
        footer.appendChild(dlLogsBtn);
        return footer;
      },
      body: `${args.length > 0 ? args.join(" ") : t("generic_error_dialog_message")}  \n  \n${t("generic_error_dialog_open_console_note", packageJson.bugs.url)}`
    });
  }
  class LyricsError extends CoreUtils.DatedError {
    constructor(message, opts) {
      super(message, opts);
      this.name = "LyricsError";
    }
  }
  class PluginError extends CoreUtils.DatedError {
    constructor(message, opts) {
      super(message, opts);
      this.name = "PluginError";
    }
  }
  let discardBeforeUnloadOverride;
  function enableDiscardBeforeUnload() {
    discardBeforeUnloadOverride = true;
    info("Disabled popup before leaving the site");
  }
  function disableDiscardBeforeUnload() {
    discardBeforeUnloadOverride = false;
    info("Enabled popup before leaving the site");
  }
  async function initBeforeUnloadHook() {
    try {
      UserUtils.interceptWindowEvent("beforeunload", () => typeof discardBeforeUnloadOverride !== "undefined" ? discardBeforeUnloadOverride : getFeature("disableBeforeUnloadPopup"));
    } catch (err) {
      error("Error in beforeunload hook:", err);
    }
  }
  async function initAutoCloseToasts() {
    const animTimeout = 300;
    addSelectorListener("popupContainer", "ytmusic-notification-action-renderer", {
      all: true,
      continuous: true,
      listener: async toastContElems => {
        try {
          if (!getFeature("autoCloseToasts")) return;
          for (const toastContElem of toastContElems) {
            const toastElem = toastContElem.querySelector("tp-yt-paper-toast#toast");
            if (!toastElem || !toastElem.hasAttribute("allow-click-through")) continue;
            if (toastElem.classList.contains("bytm-closing")) continue;
            toastElem.classList.add("bytm-closing");
            const closeTimeout = Math.max(getFeature("closeToastsTimeout") * 1e3 + animTimeout, animTimeout);
            await CoreUtils.pauseFor(closeTimeout);
            toastElem.classList.remove("paper-toast-open");
            toastElem.addEventListener("transitionend", () => {
              toastElem.classList.remove("bytm-closing");
              toastElem.style.display = "none";
              if (toastElem.parentNode) {
                clearNode(toastElem);
                log(`Automatically closed toast after ${getFeature("closeToastsTimeout") * 1e3}ms`);
              }
            }, {
              once: true
            });
          }
        } catch (err) {
          error("Error in automatic toast closing:", err);
        }
      }
    });
    log("Initialized automatic toast closing");
  }
  let initialAutoScrollToActiveSong = true;
  let prevVidMaxTime = Infinity;
  let prevTime = -1;
  async function initAutoScrollToActiveSong() {
    CoreUtils.createRecurringTask({
      timeout: 50,
      async task() {
        const vidEl = await waitVideoElementReady();
        prevTime = vidEl.currentTime ?? -1;
        prevVidMaxTime = vidEl.duration ?? Infinity;
      }
    });
    siteEvents.on("watchIdChanged", (_, oldId) => {
      if (!oldId) return;
      const isManualChange = prevTime < prevVidMaxTime - 1;
      if ([ "videoChangeManual", "videoChangeAll" ].includes(getFeature("autoScrollToActiveSongMode")) && isManualChange) scrollToCurrentSongInQueue(); else if ([ "videoChangeAuto", "videoChangeAll" ].includes(getFeature("autoScrollToActiveSongMode")) && !isManualChange) scrollToCurrentSongInQueue();
    });
    if (getFeature("autoScrollToActiveSongMode") !== "never" && initialAutoScrollToActiveSong) {
      initialAutoScrollToActiveSong = false;
      scrollToCurrentSongInQueue();
    }
  }
  async function initRememberVideoTime() {
    if (getFeature("rememberSongTimeSites") !== "all" && getFeature("rememberSongTimeSites") !== getDomain()) return;
    const remTimesRaw = await GM.getValue("bytm-remember-times");
    if (!remTimesRaw) await GM.setValue("bytm-remember-times", "[]");
    let remTimeEntries;
    try {
      remTimeEntries = JSON.parse(String(remTimesRaw ?? "[]"));
    } catch (err) {
      error("Error parsing stored video time data, defaulting to empty cache:", err);
      await GM.setValue("bytm-remember-times", "[]");
      remTimeEntries = [];
    }
    if (remTimeEntries.some(e => "watchID" in e)) {
      remTimeEntries = remTimeEntries.filter(e => "id" in e);
      await GM.setValue("bytm-remember-times", JSON.stringify(remTimeEntries));
      log(`Removed ${remTimeEntries.length} ${CoreUtils.autoPlural("entry", remTimeEntries)} with an outdated format from the video time cache`);
    }
    log(`Initialized video time restoring with ${remTimeEntries.length} initial ${CoreUtils.autoPlural("entry", remTimeEntries)}:`, remTimeEntries);
    await remTimeTryRestoreTime();
    try {
      if (!UserUtils.isDomLoaded()) document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop, {
        once: true
      }); else remTimeStartUpdateLoop();
    } catch (err) {
      error("Error in video time remembering update loop:", err);
    }
  }
  function remTimeTryRestoreTime(force = false) {
    return new Promise(async (resolve, reject) => {
      try {
        const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
        if (location.pathname.startsWith("/watch")) {
          let videoID = getWatchId();
          if (!videoID) {
            const thumbEl = document.querySelector("ytmusic-player-bar .thumbnail-image-wrapper img[src]");
            if (thumbEl && thumbEl.src.includes("/vi/")) videoID = thumbEl.src.split("/vi/")[1].split("/")[0];
          }
          if (!videoID) {
            error("Could not determine the video ID of the current video - not restoring time");
            return resolve(false);
          }
          if (initialParams$1.has("t") && !force) {
            info("Not restoring song time because the page was loaded with the '&t' parameter", LogLevel.Info);
            return resolve(false);
          }
          const entry = remVids.find(entry => entry.id === videoID);
          if (entry) {
            if (Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1e3) {
              await remTimeDeleteEntry(entry.id);
              return resolve(false);
            } else if (isNaN(Number(entry.time)) || entry.time < 0) {
              warn("Invalid time in remembered song time entry:", entry);
              return resolve(false);
            } else {
              let vidElem;
              const doRestoreTime = async () => {
                if (!vidElem) vidElem = await waitVideoElementReady();
                const vidRestoreTime = entry.time - getFeature("rememberSongTimeReduction", 0);
                vidElem.currentTime = CoreUtils.clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
                await remTimeDeleteEntry(entry.id);
                info(`Restored ${getDomain() === "ytm" ? getCurrentMediaType() : "video"} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
                return resolve(true);
              };
              if (!UserUtils.isDomLoaded()) document.addEventListener("DOMContentLoaded", doRestoreTime, {
                once: true
              }); else doRestoreTime();
            }
          }
        }
        return resolve(false);
      } catch (err) {
        error("Uncaught error when trying to restore video time:", err);
        return reject(err);
      }
    });
  }
  let lastSongTime = -1;
  let remVidCheckTimeout;
  async function remTimeStartUpdateLoop() {
    const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
    if (location.pathname.startsWith("/watch")) {
      const id = getWatchId();
      const songTime = await getVideoTime() ?? 0;
      if (id && songTime !== lastSongTime) {
        lastSongTime = songTime;
        const paused = getVideoElement()?.paused ?? false;
        if (songTime > getFeature("rememberSongTimeMinPlayTime") && !paused) {
          const entry = {
            id: id,
            time: songTime,
            updated: Date.now()
          };
          await remTimeUpsertEntry(entry);
        } else if (!paused) {
          const entry = remVids.find(entry => entry.id === id);
          if (entry && songTime <= entry.time) await remTimeUpsertEntry({
            ...entry,
            time: songTime,
            updated: Date.now()
          });
        }
      }
    }
    const expiredEntries = remVids.filter(entry => Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1e3);
    for (const entry of expiredEntries) await remTimeDeleteEntry(entry.id);
    if (remVidCheckTimeout) clearTimeout(remVidCheckTimeout);
    remVidCheckTimeout = setTimeout(remTimeStartUpdateLoop, 250);
  }
  async function remTimeUpsertEntry(data, force = false) {
    const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
    const foundIdx = remVids.findIndex(entry => entry.id === data.id);
    if (foundIdx > -1 && !force && data.time <= remVids[foundIdx].time) return;
    if (foundIdx >= 0) remVids[foundIdx] = data; else remVids.push(data);
    await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
  }
  async function remTimeDeleteEntry(videoID) {
    const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]")).filter(entry => entry.id !== videoID);
    await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
  }
  let curSongTitle;
  let isDragging = false;
  let lastClick = 0;
  const lastInteractionTimeout = 5e3;
  document.addEventListener("dragstart", () => isDragging = true);
  document.addEventListener("dragend", () => isDragging = false);
  document.addEventListener("mousedown", () => isDragging = true);
  document.addEventListener("mouseup", () => isDragging = false);
  document.addEventListener("click", () => lastClick = Date.now());
  let isInFullscreen = false;
  siteEvents.on("fullscreenToggled", val => isInFullscreen = val);
  async function initStillThere() {
    siteEvents.on("songTitleChanged", newTitle => curSongTitle = newTitle);
    let firstCheck = true;
    let obs;
    const checkStillThere = youThereCont => {
      const dialogCont = youThereCont.closest("tp-yt-paper-dialog");
      if (!dialogCont) return warn('Could not find the dialog container to dismiss the "Are you still there?" popup');
      const doCheck = () => {
        if (!getFeature("yesImStillThere") || !dialogCont || dialogCont.hasAttribute("aria-hidden") || getComputedStyle(dialogCont).display === "none") return;
        const btn = youThereCont.querySelector(".actions button");
        if (!btn) return warn('Could not find the "Yes" button to dismiss the "Are you still there?" popup');
        btn.click();
        if (obs) {
          obs.disconnect();
          obs = undefined;
        }
        info('Automatically dismissed the "Are you still here?" dialog on the song', curSongTitle, LogLevel.Info);
      };
      if (firstCheck) {
        firstCheck = false;
        doCheck();
      }
      if (obs) return;
      obs = new MutationObserver(doCheck);
      obs.observe(dialogCont, {
        childList: true,
        subtree: true,
        attributes: true
      });
      getFeature("yesImStillThere") && dbg('Checked for "Are you still there?" popup and set up observer to dismiss it');
    };
    addSelectorListener("popupContainer", "tp-yt-paper-dialog ytmusic-you-there-renderer", {
      listener: el => checkStillThere(el)
    });
    siteEvents.on("watchIdChanged", () => {
      const youThereCont = document.querySelector("ytmusic-popup-container ytmusic-you-there-renderer");
      if (youThereCont) {
        checkStillThere(youThereCont);
        let i = 0;
        const iv = setInterval(() => {
          checkStillThere(youThereCont);
          i++;
          if (i > 10) clearInterval(iv);
        }, 1e3);
      }
    });
    const tryClick = () => {
      if (isInFullscreen) return warn('Fullscreen is active - not dispatching "Are you still there?" events');
      if (isDragging || Date.now() - lastClick < lastInteractionTimeout) return warn('Click is currently held down - not dispatching "Are you still there?" events');
      const navBar = document.querySelector("ytmusic-nav-bar .center-content");
      navBar?.dispatchEvent(new MouseEvent("click", {
        altitudeAngle: 1 + Math.random(),
        cancelable: true,
        clientX: 975,
        clientY: 13,
        composed: true,
        explicitOriginalTarget: navBar,
        isPrimary: true,
        isTrusted: true,
        layerX: 615,
        layerY: 13,
        movementX: 0,
        movementY: 0,
        offsetX: 615,
        offsetY: 13,
        originalTarget: navBar,
        pageX: 975,
        pageY: 13,
        screenX: 975,
        screenY: 70,
        srcElement: navBar,
        target: navBar,
        timeStamp: 44955,
        x: 975,
        y: 13,
        view: UserUtils.getUnsafeWindow()
      }));
    };
    const tryMove = async () => {
      if (isInFullscreen) return warn('Fullscreen is active - not dispatching "Are you still there?" events');
      if (isDragging || Date.now() - lastClick < lastInteractionTimeout) return warn('Click is currently held down - not dispatching "Are you still there?" events');
      const incX = (Math.random() * 2 - 1) / 10, incY = (Math.random() * 2 - 1) / 10;
      const vidEl = getVideoElement();
      if (!vidEl) return;
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * CoreUtils.clamp(window.innerWidth, 100, Math.max(200, window.innerWidth) - 100);
        const y = Math.random() * CoreUtils.clamp(window.innerHeight, 100, Math.max(200, window.innerHeight) - 100);
        vidEl?.dispatchEvent(new MouseEvent("mousemove", {
          bubbles: true,
          cancelable: true,
          clientX: x + incX * i,
          clientY: y + incY * i,
          screenX: x + incX * i,
          screenY: y + incY * i,
          movementX: incX,
          movementY: incY,
          view: UserUtils.getUnsafeWindow()
        }));
        await CoreUtils.pauseFor(10);
      }
    };
    CoreUtils.setImmediateInterval(async () => {
      if (!getFeature("yesImStillThere")) return;
      tryClick();
      await tryMove();
    }, 3e4);
  }
  function constructUrlString(baseUrl, params) {
    return `${baseUrl}?${Object.entries(params).filter(([, v]) => v !== undefined).map(([k, v]) => `${k}${v === null ? "" : `=${encodeURIComponent(String(v))}`}`).join("&")}`;
  }
  function constructUrl(base, params) {
    return new URL(constructUrlString(base, params));
  }
  function sendRequest(details) {
    return new Promise((resolve, reject) => {
      const success = val => {
        getFeature("logHttp") && log(`HTTP request '${details.method ?? "GET"} ${details.url}' succeeded with status ${val.status}:`, getterifyObj(val));
        resolve(val);
      };
      const failure = err => {
        const errStr = `HTTP request '${details.method ?? "GET"} ${details.url}' failed:`;
        getFeature("logHttp") && error(errStr, err);
        reject(new Error(errStr, {
          cause: err
        }));
      };
      GM.xmlHttpRequest({
        timeout: 1e4,
        ...details,
        onload: success,
        onerror: failure,
        ontimeout: failure,
        onabort: failure
      });
    });
  }
  async function fetchCss(key) {
    try {
      const css = await (await CoreUtils.fetchAdvanced(await getResourceUrl(key))).text();
      return css ?? undefined;
    } catch (err) {
      error("Couldn't fetch CSS due to an error:", err);
      return undefined;
    }
  }
  const voteCache = new Map;
  const voteCacheTTL = 1e3 * 60 * 60;
  async function fetchVideoVotes(videoID) {
    try {
      if (voteCache.has(videoID)) {
        const cached = voteCache.get(videoID);
        if (Date.now() - cached.timestamp < voteCacheTTL) {
          info(`Returning cached video votes for video ID '${videoID}':`, cached);
          return cached;
        } else voteCache.delete(videoID);
      }
      const votesRaw = JSON.parse((await sendRequest({
        method: "GET",
        url: `https://returnyoutubedislikeapi.com/votes?videoId=${videoID}`
      })).response);
      if (!("id" in votesRaw) || !("likes" in votesRaw) || !("dislikes" in votesRaw) || !("rating" in votesRaw)) {
        error("Couldn't parse video votes due to an error:", votesRaw);
        return undefined;
      }
      const votesObj = {
        id: votesRaw.id,
        likes: votesRaw.likes,
        dislikes: votesRaw.dislikes,
        rating: CoreUtils.roundFixed(votesRaw.rating, 3),
        timestamp: Date.now()
      };
      voteCache.set(votesObj.id, votesObj);
      info(`Fetched video votes for watch ID '${videoID}':`, votesObj);
      return votesObj;
    } catch (err) {
      error("Couldn't fetch video votes due to an error:", err);
      return undefined;
    }
  }
  async function fetchITunesAlbumInfo(artist, album) {
    try {
      const url = constructUrlString("https://itunes.apple.com/search", {
        country: "us",
        limit: 20,
        entity: "album",
        term: `${artist} ${album}`
      });
      log(`Fetching iTunes album info for '${artist} - ${album}' with URL: ${url}`);
      const req = await sendRequest({
        method: "GET",
        url: url
      });
      const json = JSON.parse(req.response);
      if (!("resultCount" in json) || !("results" in json)) {
        error("Couldn't parse iTunes album info due to an error:", json);
        return [];
      }
      if (json.resultCount === 0) return [];
      const filteredResults = json.results.filter(result => {
        if (!("collectionType" in result) || !("collectionName" in result) || !("artistName" in result) || !("collectionId" in result) || !("artworkUrl60" in result) || !("artworkUrl100" in result)) return false;
        return result.collectionType === "Album" && result.collectionName && result.artistName && result.collectionId && result.artworkUrl60 && result.artworkUrl100;
      }).map(result => ({
        ...result,
        collectionName: result.collectionName.trim().replace(/ - (Single|EP|LP|Album|Soundtrack|Compilation|Mixtape|Remix|Live|Version|Edition|Reissue|Anniversary Edition|Deluxe Edition|Box Set|Set|Collection|Discography)$/, "")
      }));
      return filteredResults;
    } catch (err) {
      error("Couldn't fetch iTunes album info due to an error:", err);
      return [];
    }
  }
  function createRipple(rippleElement, properties) {
    const props = {
      speed: "normal",
      ...properties
    };
    const rippleEl = rippleElement ?? document.createElement("div");
    "additionalProps" in props && Object.assign(rippleEl, props.additionalProps);
    rippleEl.classList.add("bytm-ripple", props.speed);
    const updateRippleWidth = () => rippleEl.style.setProperty("--bytm-ripple-cont-width", `${rippleEl.clientWidth}px`);
    rippleEl.addEventListener(props?.triggerEvent ?? "mousedown", e => {
      updateRippleWidth();
      const x = e.clientX - rippleEl.getBoundingClientRect().left;
      const y = e.clientY - rippleEl.getBoundingClientRect().top;
      const rippleAreaEl = document.createElement("span");
      rippleAreaEl.classList.add("bytm-ripple-area");
      rippleAreaEl.style.left = `${Math.round(x)}px`;
      rippleAreaEl.style.top = `${Math.round(y)}px`;
      if (rippleEl.firstChild) rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild); else rippleEl.appendChild(rippleAreaEl);
      rippleAreaEl.addEventListener("animationend", () => rippleAreaEl.remove());
    });
    updateRippleWidth();
    return rippleEl;
  }
  async function createLongBtn({title: title, text: text, iconPosition: iconPosition, ripple: ripple, ...rest}) {
    if ([ "href", "onClick", "onToggle" ].every(key => !(key in rest))) throw new TypeError("Either 'href', 'onClick' or 'onToggle' must be provided");
    let btnElem;
    if ("href" in rest && rest.href) {
      btnElem = document.createElement("a");
      btnElem.href = rest.href;
      btnElem.role = "button";
      btnElem.target = "_blank";
      btnElem.rel = "noopener noreferrer";
    } else btnElem = document.createElement("div");
    if ("toggle" in rest && rest.toggle) {
      btnElem.classList.add("bytm-toggle");
      if ("toggleInitialState" in rest && rest.toggleInitialState) btnElem.classList.add("toggled");
    }
    onInteraction(btnElem, evt => {
      if ("onClick" in rest) rest.onClick(evt);
      if ("toggle" in rest && rest.toggle && (rest.togglePredicate ?? (() => true))(evt)) rest.onToggle(btnElem.classList.toggle("toggled"), evt);
    });
    btnElem.classList.add("bytm-generic-btn", "long");
    btnElem.ariaLabel = btnElem.title = title;
    btnElem.tabIndex = 0;
    btnElem.role = "button";
    const imgElem = document.createElement("src" in rest ? "img" : "div");
    imgElem.classList.add("bytm-generic-btn-img", iconPosition ?? "left");
    if ("src" in rest) imgElem.src = rest.src; else setInnerHtml(imgElem, await resourceAsString(rest.resourceName));
    const txtElem = document.createElement("span");
    txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
    txtElem.textContent = txtElem.ariaLabel = text;
    iconPosition === "left" || !iconPosition && btnElem.appendChild(imgElem);
    btnElem.appendChild(txtElem);
    iconPosition === "right" && btnElem.appendChild(imgElem);
    return ripple ? createRipple(btnElem, {
      speed: "normal"
    }) : btnElem;
  }
  class ExImDialog extends BytmDialog {
    constructor(options) {
      super({
        renderHeader: () => ExImDialog.renderHeader(options),
        renderBody: () => ExImDialog.renderBody(options),
        renderFooter: undefined,
        closeOnBgClick: true,
        closeOnEscPress: true,
        closeBtnEnabled: true,
        unmountOnClose: true,
        small: true,
        ...options
      });
    }
    static async renderHeader(opts) {
      const headerEl = document.createElement("h2");
      headerEl.classList.add("bytm-menu-title");
      headerEl.role = "heading";
      headerEl.ariaLevel = "1";
      headerEl.tabIndex = 0;
      headerEl.textContent = headerEl.ariaLabel = await CoreUtils.consumeStringGen(opts.title);
      return headerEl;
    }
    static async renderBody(opts) {
      const panesCont = document.createElement("div");
      panesCont.classList.add("bytm-exim-dialog-panes-cont");
      const exportPane = document.createElement("div");
      exportPane.classList.add("bytm-exim-dialog-pane", "export");
      {
        const descEl = document.createElement("p");
        descEl.classList.add("bytm-exim-dialog-desc");
        descEl.role = "note";
        descEl.tabIndex = 0;
        descEl.textContent = descEl.ariaLabel = await CoreUtils.consumeStringGen(opts.descExport);
        const dataEl = document.createElement("textarea");
        dataEl.classList.add("bytm-exim-dialog-data");
        dataEl.readOnly = true;
        dataEl.tabIndex = 0;
        dataEl.value = t("click_to_reveal");
        onInteraction(dataEl, async () => {
          dataEl.value = await CoreUtils.consumeStringGen(opts.exportData);
          dataEl.setSelectionRange(0, dataEl.value.length);
        });
        const exportCenterBtnCont = document.createElement("div");
        exportCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");
        const copyBtn = await createLongBtn({
          title: t("copy_to_clipboard"),
          text: t("copy"),
          resourceName: "icon-copy",
          ripple: true,
          async onClick({shiftKey: shiftKey}) {
            const copyData = shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData;
            copyToClipboard(await CoreUtils.consumeStringGen(copyData));
            await showToast({
              message: t("copied_to_clipboard")
            });
          }
        });
        exportCenterBtnCont.appendChild(copyBtn);
        exportPane.append(descEl, dataEl, exportCenterBtnCont);
      }
      const importPane = document.createElement("div");
      importPane.classList.add("bytm-exim-dialog-pane", "import");
      {
        const descEl = document.createElement("p");
        descEl.classList.add("bytm-exim-dialog-desc");
        descEl.role = "note";
        descEl.tabIndex = 0;
        descEl.textContent = descEl.ariaLabel = await CoreUtils.consumeStringGen(opts.descImport);
        const dataEl = document.createElement("textarea");
        dataEl.classList.add("bytm-exim-dialog-data");
        dataEl.tabIndex = 0;
        const importCenterBtnCont = document.createElement("div");
        importCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");
        const importBtn = await createLongBtn({
          title: t("start_import_tooltip"),
          text: t("import"),
          resourceName: "icon-upload",
          ripple: true,
          onClick: () => opts.onImport(dataEl.value)
        });
        importCenterBtnCont.appendChild(importBtn);
        importPane.append(descEl, dataEl, importCenterBtnCont);
      }
      panesCont.append(exportPane, importPane);
      return panesCont;
    }
  }
  async function createCircularBtn({title: title, ripple: ripple = true, ...rest}) {
    let btnElem;
    if ("href" in rest && rest.href) {
      btnElem = document.createElement("a");
      btnElem.href = rest.href;
      btnElem.role = "button";
      btnElem.target = "_blank";
      btnElem.rel = "noopener noreferrer";
    } else if ("onClick" in rest && rest.onClick) {
      btnElem = document.createElement("div");
      rest.onClick && onInteraction(btnElem, e => rest.onClick(e));
    } else throw new TypeError("Either 'href' or 'onClick' must be provided");
    btnElem.classList.add("bytm-generic-btn");
    btnElem.ariaLabel = btnElem.title = title;
    btnElem.tabIndex = 0;
    btnElem.role = "button";
    if ("src" in rest || "resourceName" in rest && !rest.resourceName.startsWith("icon-")) {
      const imgElem = document.createElement("img");
      imgElem.classList.add("bytm-generic-btn-img");
      imgElem.src = "src" in rest ? await rest.src : await getResourceUrl(rest.resourceName);
      btnElem.appendChild(imgElem);
    } else if ("resourceName" in rest && rest.resourceName.startsWith("icon-")) {
      setInnerHtml(btnElem, await resourceAsString(rest.resourceName));
      btnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
    }
    return ripple ? createRipple(btnElem) : btnElem;
  }
  let autoLikeDialog = null;
  let autoLikeExImDialog = null;
  async function getAutoLikeDialog() {
    if (!autoLikeDialog) {
      await initAutoLikeStore();
      autoLikeDialog = new BytmDialog({
        id: "auto-like-channels",
        width: 700,
        height: 1200,
        closeBtnEnabled: true,
        closeOnBgClick: true,
        closeOnEscPress: true,
        destroyOnClose: true,
        removeListenersOnDestroy: false,
        small: true,
        verticalAlign: "top",
        renderHeader: renderHeader$3,
        renderBody: renderBody$3,
        renderFooter: renderFooter$1
      });
      siteEvents.on("autoLikeChannelsUpdated", async () => {
        try {
          if (autoLikeExImDialog?.isOpen()) autoLikeExImDialog.unmount();
          if (autoLikeDialog?.isOpen()) {
            autoLikeDialog.unmount();
            await autoLikeDialog.open();
            log("Auto-like channels updated, refreshed dialog");
          }
        } catch (err) {
          error("Couldn't refresh auto-like channels dialog:", err);
        }
      });
      autoLikeDialog.on("open", () => document.querySelector(".bytm-auto-like-channels-searchbar")?.focus());
      autoLikeDialog.on("close", () => emitSiteEvent("autoLikeChannelsUpdated"));
    }
    if (!autoLikeExImDialog) {
      autoLikeExImDialog = new ExImDialog({
        id: "auto-like-channels-export-import",
        width: 800,
        height: 600,
        exportData: async () => await compressionSupported() ? await CoreUtils.compress(JSON.stringify(autoLikeStore.getData()), compressionFormat$1, "string") : JSON.stringify(autoLikeStore.getData()),
        exportDataSpecial: () => JSON.stringify(autoLikeStore.getData()),
        async onImport(data) {
          try {
            const parsed = await tryToDecompressAndParse(data);
            log("Trying to import auto-like data:", parsed);
            if (!parsed || typeof parsed !== "object") return await showPrompt({
              type: "alert",
              message: t("import_error.invalid")
            });
            if (!parsed.channels || typeof parsed.channels !== "object" || Object.keys(parsed.channels).length === 0) return await showPrompt({
              type: "alert",
              message: t("import_error.no_data")
            });
            await autoLikeStore.setData(parsed);
            emitSiteEvent("autoLikeChannelsUpdated");
            showToast({
              message: t("import_success")
            });
            autoLikeExImDialog?.unmount();
          } catch (err) {
            error("Couldn't import auto-like channels data:", err);
          }
        },
        title: () => t("auto_like_export_import_title"),
        descImport: () => t("auto_like_import_desc"),
        descExport: () => t("auto_like_export_desc")
      });
    }
    return autoLikeDialog;
  }
  async function renderHeader$3() {
    const headerEl = document.createElement("h2");
    headerEl.classList.add("bytm-dialog-title");
    headerEl.role = "heading";
    headerEl.ariaLevel = "1";
    headerEl.tabIndex = 0;
    headerEl.textContent = headerEl.ariaLabel = t("auto_like_channels_dialog_title");
    return headerEl;
  }
  async function renderBody$3() {
    const contElem = document.createElement("div");
    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("bytm-auto-like-channels-desc");
    descriptionEl.textContent = descriptionEl.ariaLabel = t("auto_like_channels_dialog_desc");
    descriptionEl.tabIndex = 0;
    contElem.appendChild(descriptionEl);
    const searchCont = document.createElement("div");
    searchCont.classList.add("bytm-auto-like-channels-search-cont");
    contElem.appendChild(searchCont);
    const searchContLeftSideEl = document.createElement("div");
    searchContLeftSideEl.classList.add("left-side");
    searchCont.appendChild(searchContLeftSideEl);
    const searchContRightSideEl = document.createElement("div");
    searchContRightSideEl.tabIndex = 0;
    searchContRightSideEl.classList.add("right-side");
    searchCont.appendChild(searchContRightSideEl);
    const searchbarEl = document.createElement("input");
    const updateCountElem = () => {
      const count = searchbarEl.value.trim().length === 0 ? autoLikeStore.getData().channels.length : document.querySelectorAll(".bytm-auto-like-channel-row:not(.hidden)").length;
      searchContRightSideEl.innerText = searchContRightSideEl.ariaLabel = tp("auto_like_channels_entries_count", count, count);
    };
    siteEvents.on("autoLikeChannelsUpdated", updateCountElem);
    updateCountElem();
    searchbarEl.classList.add("bytm-auto-like-channels-searchbar");
    searchbarEl.placeholder = searchbarEl.ariaDescription = t("search_placeholder");
    searchbarEl.type = searchbarEl.role = "search";
    searchbarEl.tabIndex = 0;
    searchbarEl.autofocus = true;
    searchbarEl.autocomplete = searchbarEl.autocapitalize = "off";
    searchbarEl.spellcheck = false;
    searchbarEl.addEventListener("input", CoreUtils.debounce(() => {
      const searchVal = searchbarEl.value.trim().toLowerCase();
      const rows = document.querySelectorAll(".bytm-auto-like-channel-row");
      for (const row of rows) {
        const sanit = str => str?.trim().toLowerCase().replace(/\s/g, "");
        const name = sanit(row.querySelector(".bytm-auto-like-channel-name")?.textContent) ?? "";
        const id = sanit(row.querySelector(".bytm-auto-like-channel-id")?.textContent) ?? "";
        row.classList.toggle("hidden", !name.includes(searchVal) && !id.includes(searchVal));
      }
      updateCountElem();
    }, 300));
    searchContLeftSideEl.appendChild(searchbarEl);
    const searchClearEl = document.createElement("button");
    searchClearEl.classList.add("bytm-auto-like-channels-search-clear");
    searchClearEl.title = searchClearEl.ariaLabel = t("search_clear");
    searchClearEl.tabIndex = 0;
    searchClearEl.innerText = "×";
    onInteraction(searchClearEl, () => {
      searchbarEl.value = "";
      searchbarEl.dispatchEvent(new Event("input"));
    });
    searchContLeftSideEl.appendChild(searchClearEl);
    const channelListCont = document.createElement("div");
    channelListCont.id = "bytm-auto-like-channels-list";
    const setChannelEnabled = CoreUtils.debounce((id, enabled) => {
      autoLikeStore.setData({
        channels: autoLikeStore.getData().channels.map(ch => ch.id === id ? {
          ...ch,
          enabled: enabled
        } : ch)
      });
    }, 100);
    const sortedChannels = autoLikeStore.getData().channels.sort((a, b) => a.name.localeCompare(b.name));
    for (const {name: chanName, id: chanId, enabled: enabled} of sortedChannels) {
      const rowElem = document.createElement("div");
      rowElem.classList.add("bytm-auto-like-channel-row");
      const leftCont = document.createElement("div");
      leftCont.classList.add("bytm-auto-like-channel-row-left-cont");
      const nameLabelEl = document.createElement("label");
      nameLabelEl.ariaLabel = nameLabelEl.title = chanName;
      nameLabelEl.htmlFor = `bytm-auto-like-channel-list-toggle-${chanId}`;
      nameLabelEl.classList.add("bytm-auto-like-channel-name-label");
      const chanHref = !chanId.startsWith("@") && getDomain() === "ytm" ? `https://music.youtube.com/channel/${chanId}` : `https://youtube.com/${chanId.startsWith("@") ? chanId : `channel/${chanId}`}`;
      const nameElem = document.createElement("a");
      nameElem.classList.add("bytm-auto-like-channel-name", "bytm-link");
      nameElem.ariaLabel = nameElem.textContent = chanName;
      nameElem.href = chanHref;
      nameElem.target = "_blank";
      nameElem.rel = "noopener noreferrer";
      nameElem.tabIndex = 0;
      const idElem = document.createElement("a");
      idElem.classList.add("bytm-auto-like-channel-id", "bytm-link");
      idElem.textContent = idElem.title = chanId;
      idElem.href = chanHref;
      idElem.target = "_blank";
      idElem.rel = "noopener noreferrer";
      idElem.tabIndex = 0;
      nameLabelEl.appendChild(nameElem);
      nameLabelEl.appendChild(idElem);
      const toggleElem = await createToggleInput({
        id: `auto-like-channel-list-${chanId}`,
        labelPos: "off",
        initialValue: enabled,
        onChange: en => setChannelEnabled(chanId, en)
      });
      toggleElem.classList.add("bytm-auto-like-channel-toggle");
      toggleElem.title = toggleElem.ariaLabel = t("auto_like_channel_toggle_tooltip", chanName);
      const btnCont = document.createElement("div");
      btnCont.classList.add("bytm-auto-like-channel-row-btn-cont");
      const editBtn = await createCircularBtn({
        resourceName: "icon-edit",
        title: t("edit_entry"),
        async onClick() {
          const newNamePr = (await showPrompt({
            type: "prompt",
            message: t("auto_like_channel_edit_name_prompt"),
            defaultValue: chanName
          }))?.trim();
          if (!newNamePr || newNamePr.length === 0) return;
          const newName = newNamePr.length > 0 ? newNamePr : chanName;
          const newIdPr = (await showPrompt({
            type: "prompt",
            message: t("auto_like_channel_edit_id_prompt"),
            defaultValue: chanId
          }))?.trim();
          if (!newIdPr || newIdPr.length === 0) return;
          const newId = newIdPr.length > 0 ? getChannelIdFromPrompt(newIdPr) ?? chanId : chanId;
          await autoLikeStore.setData({
            channels: autoLikeStore.getData().channels.map(ch => ch.id === chanId ? {
              ...ch,
              name: newName,
              id: newId
            } : ch)
          });
          emitSiteEvent("autoLikeChannelsUpdated");
        }
      });
      btnCont.appendChild(editBtn);
      const removeBtn = await createCircularBtn({
        resourceName: "icon-delete",
        title: t("remove_entry"),
        onClick() {
          autoLikeStore.setData({
            channels: autoLikeStore.getData().channels.filter(ch => ch.id !== chanId)
          });
          rowElem.remove();
          emitSiteEvent("autoLikeChannelsUpdated");
        }
      });
      btnCont.appendChild(removeBtn);
      leftCont.appendChild(toggleElem);
      leftCont.appendChild(nameLabelEl);
      rowElem.appendChild(leftCont);
      rowElem.appendChild(btnCont);
      channelListCont.appendChild(rowElem);
    }
    contElem.appendChild(channelListCont);
    return contElem;
  }
  function renderFooter$1() {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("bytm-auto-like-channels-footer-wrapper");
    const addNewBtnElem = document.createElement("button");
    addNewBtnElem.classList.add("bytm-btn");
    addNewBtnElem.textContent = t("new_entry");
    addNewBtnElem.ariaLabel = addNewBtnElem.title = t("new_entry_tooltip");
    wrapperEl.appendChild(addNewBtnElem);
    const rightBtnsCont = document.createElement("div");
    rightBtnsCont.classList.add("bytm-flex-row");
    const deleteAllBtnElem = document.createElement("button");
    deleteAllBtnElem.classList.add("bytm-btn");
    deleteAllBtnElem.textContent = t("delete_all");
    deleteAllBtnElem.ariaLabel = deleteAllBtnElem.title = t("auto_like_delete_all_tooltip");
    rightBtnsCont.appendChild(deleteAllBtnElem);
    const importExportBtnElem = document.createElement("button");
    importExportBtnElem.classList.add("bytm-btn");
    importExportBtnElem.textContent = t("export_import");
    importExportBtnElem.ariaLabel = importExportBtnElem.title = t("auto_like_export_or_import_tooltip");
    rightBtnsCont.appendChild(importExportBtnElem);
    wrapperEl.appendChild(rightBtnsCont);
    onInteraction(addNewBtnElem, () => addAutoLikeEntryPrompts());
    onInteraction(deleteAllBtnElem, () => deleteAllAutoLikeChannelsPrompt());
    onInteraction(importExportBtnElem, () => openImportExportAutoLikeChannelsDialog());
    return wrapperEl;
  }
  async function openImportExportAutoLikeChannelsDialog() {
    await (autoLikeExImDialog?.open());
  }
  async function deleteAllAutoLikeChannelsPrompt() {
    const confirm = await showPrompt({
      type: "confirm",
      message: t("auto_like_delete_all_confirm")
    });
    if (!confirm) return;
    await autoLikeStore.setData({
      channels: []
    });
    emitSiteEvent("autoLikeChannelsUpdated");
    const unsub = autoLikeDialog?.on("clear", async () => {
      unsub?.();
      await (autoLikeDialog?.open());
    });
    autoLikeDialog?.unmount();
  }
  async function addAutoLikeEntryPrompts() {
    await autoLikeStore.loadData();
    const idPrompt = (await showPrompt({
      type: "prompt",
      message: t("add_auto_like_channel_id_prompt")
    }))?.trim();
    if (!idPrompt) return;
    const id = parseChannelIdFromUrl(idPrompt) ?? (isValidChannelId(idPrompt) ? idPrompt : null);
    if (!id || id.length <= 0) return await showPrompt({
      type: "alert",
      message: t("add_auto_like_channel_invalid_id")
    });
    let overwriteName = false;
    const hasChannelEntry = autoLikeStore.getData().channels.find(ch => ch.id === id);
    if (hasChannelEntry) {
      if (!await showPrompt({
        type: "confirm",
        message: t("add_auto_like_channel_already_exists_prompt_new_name")
      })) return;
      overwriteName = true;
    }
    const name = (await showPrompt({
      type: "prompt",
      message: t("add_auto_like_channel_name_prompt"),
      defaultValue: hasChannelEntry?.name
    }))?.trim();
    if (!name || name.length === 0) return;
    await autoLikeStore.setData(overwriteName ? {
      channels: autoLikeStore.getData().channels.map(ch => ch.id === id ? {
        ...ch,
        name: name
      } : ch)
    } : {
      channels: [ ...autoLikeStore.getData().channels, {
        id: id,
        name: name,
        enabled: true
      } ]
    });
    emitSiteEvent("autoLikeChannelsUpdated");
    const unsub = autoLikeDialog?.on("clear", async () => {
      unsub?.();
      await (autoLikeDialog?.open());
    });
    autoLikeDialog?.unmount();
  }
  function getChannelIdFromPrompt(promptStr) {
    const isId = promptStr.match(/^@?.+$/);
    const isUrl = promptStr.match(/^(?:https?:\/\/)?(?:www\.)?(?:music\.)?youtube\.com\/(?:channel\/|@)([a-zA-Z0-9_-]+)/);
    const id = (isId?.[0] || isUrl?.[1] || "").trim();
    return id.length > 0 ? id : null;
  }
  const autoLikeStore = new CoreUtils.DataStore({
    id: "bytm-auto-like-channels",
    formatVersion: 2,
    defaultData: {
      channels: []
    },
    engine: new UserUtils.GMStorageEngine,
    compressionFormat: compressionFormat$1,
    migrations: {
      2: oldData => ({
        channels: oldData.channels.map(ch => ({
          ...ch,
          id: isValidChannelId(ch.id.trim()) ? ch.id.trim() : `@${ch.id.trim()}`
        }))
      })
    }
  });
  let autoLikeStoreLoaded = false;
  async function initAutoLikeStore() {
    if (autoLikeStoreLoaded) return;
    autoLikeStoreLoaded = true;
    return autoLikeStore.loadData();
  }
  async function initAutoLike() {
    try {
      await initAutoLikeStore();
      if (getDomain() === "ytm") {
        let timeout;
        siteEvents.on("songTitleChanged", () => {
          const autoLikeTimeoutMs = getFeature("autoLikeTimeout", 5) * 1e3;
          timeout && clearTimeout(timeout);
          const ytmTryAutoLike = () => {
            const artistEls = document.querySelectorAll("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
            const channelIds = [ ...artistEls ].map(a => a.href.split("/").pop()).filter(a => typeof a === "string");
            const likeChan = autoLikeStore.getData().channels.find(ch => channelIds.includes(ch.id));
            if (!likeChan || !likeChan.enabled) return;
            if (artistEls.length === 0 || channelIds.length === 0) return error("Couldn't auto-like because the artist element couldn't be found");
            const {likeBtn: likeBtn, likeState: likeState} = getLikeDislikeBtns();
            if (!likeBtn) return error("Couldn't auto-like because the like button couldn't be found");
            if (!likeState || likeState === "INDIFFERENT") {
              likeBtn.click();
              getFeature("autoLikeShowToast") && showIconToast({
                message: t(`auto_liked_a_channels_${getCurrentMediaType()}`, likeChan.name),
                subtitle: t("auto_like_click_to_configure"),
                icon: "icon-auto_like",
                onClick: () => getAutoLikeDialog().then(dlg => dlg.open())
              }).catch(e => error("Error while showing auto-like toast:", e));
              info(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id}) - permalink: https://${getDomain() === "ytm" ? "music.youtube.com/watch?v=" : "youtu.be/"}${new URL(location.href).searchParams.get("v")}`);
            } else info("Skipping auto-like, because the like state is currently set to", likeState);
          };
          timeout = setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs);
          siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs));
        });
        const recreateBtn = (headerCont, chanId) => {
          const titleCont = headerCont.querySelector("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, ytmusic-immersive-header-renderer .ytmusic-immersive-header-renderer yt-formatted-string.title");
          if (!titleCont) return;
          const checkBtn = () => setTimeout(() => {
            if (!document.querySelector(".bytm-auto-like-toggle-btn")) recreateBtn(headerCont, chanId);
          }, 250);
          const chanName = titleCont.querySelector("yt-formatted-string, span.yt-core-attributed-string")?.textContent ?? null;
          log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
          const buttonsCont = headerCont.querySelector(".buttons");
          if (buttonsCont) {
            const lastBtn = buttonsCont.querySelector("ytmusic-subscribe-button-renderer");
            const chanName = document.querySelector(".ytmusic-immersive-header-renderer > h1 > yt-formatted-string")?.textContent ?? document.querySelector('ytmusic-immersive-header-renderer .content-container yt-formatted-string[role="heading"]')?.textContent ?? null;
            lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName).then(checkBtn);
          } else {
            const shareBtnEl = headerCont.querySelector("ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type");
            const chanName = headerCont.querySelector("ytmusic-visual-header-renderer .content-container h2 yt-formatted-string")?.textContent ?? null;
            shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName).then(checkBtn);
          }
        };
        const tryAddBtnYTM = () => {
          if (getFeature("autoLikeChannelToggleBtn") && location.pathname.match(/\/channel\/.+/)) {
            const chanId = getCurrentChannelId();
            if (!chanId) return error("Couldn't extract channel ID from URL");
            document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach(btn => clearNode(btn));
            addSelectorListener("browseResponse", "ytmusic-browse-response #header.ytmusic-browse-response", {
              listener: el => recreateBtn(el, chanId)
            });
          }
        };
        siteEvents.on("pathChanged", () => tryAddBtnYTM());
        tryAddBtnYTM();
      } else if (getDomain() === "yt") {
        addStyleFromResource("css-auto_like");
        let timeout;
        siteEvents.on("watchIdChanged", () => {
          const autoLikeTimeoutMs = getFeature("autoLikeTimeout", 5) * 1e3;
          timeout && clearTimeout(timeout);
          if (!location.pathname.startsWith("/watch")) return;
          const ytTryAutoLike = () => {
            addSelectorListener("ytWatchMetadata", "#owner ytd-channel-name yt-formatted-string a", {
              listener(chanElem) {
                const chanElemId = chanElem.href.split("/").pop()?.split("/")[0] ?? null;
                const likeChan = autoLikeStore.getData().channels.find(ch => ch.id === chanElemId);
                if (!likeChan || !likeChan.enabled) return;
                addSelectorListener("ytWatchMetadata", "#actions ytd-menu-renderer like-button-view-model button", {
                  listener(likeBtn) {
                    if (likeBtn.getAttribute("aria-pressed") !== "true") {
                      likeBtn.click();
                      getFeature("autoLikeShowToast") && showIconToast({
                        message: t("auto_liked_a_channels_video", likeChan.name),
                        subtitle: t("auto_like_click_to_configure"),
                        icon: "icon-auto_like",
                        onClick: () => getAutoLikeDialog().then(dlg => dlg.open())
                      }).catch(e => error("Error while showing auto-like toast:", e));
                      log(`Auto-liked video from channel '${likeChan.name}' (${likeChan.id})`);
                    }
                  }
                });
              }
            });
          };
          siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(ytTryAutoLike, autoLikeTimeoutMs));
          timeout = setTimeout(ytTryAutoLike, autoLikeTimeoutMs);
        });
        const tryAddBtnYT = () => {
          if (location.pathname.match(/(\/?@|\/?channel\/)\S+/)) {
            const chanId = getCurrentChannelId();
            if (!chanId) return error("Couldn't extract channel ID from URL");
            document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach(btn => clearNode(btn));
            const recreateBtn = headerCont => {
              const titleCont = headerCont.querySelector("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, yt-page-header-view-model yt-dynamic-text-view-model");
              if (!titleCont) return;
              const checkBtn = () => setTimeout(() => {
                if (!document.querySelector(".bytm-auto-like-toggle-btn")) recreateBtn(headerCont);
              }, 350);
              const chanName = titleCont.querySelector("yt-formatted-string, h1 > .yt-core-attributed-string")?.textContent ?? null;
              log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
              const buttonsCont = headerCont.querySelector("#inner-header-container #buttons, yt-flexible-actions-view-model");
              if (buttonsCont) {
                addSelectorListener("ytAppHeader", "#channel-header-container #other-buttons, yt-flexible-actions-view-model .yt-flexible-actions-view-model-wiz__action, yt-flexible-actions-view-model .ytFlexibleActionsViewModelAction", {
                  listener: otherBtns => addAutoLikeToggleBtn(otherBtns, chanId, chanName, [ "left-margin", "right-margin" ]).then(checkBtn)
                });
              } else if (titleCont) {
                const titleH1OrCont = titleCont.querySelector("h1") ?? titleCont;
                addAutoLikeToggleBtn(titleH1OrCont, chanId, chanName, titleH1OrCont !== titleCont ? [ "left-margin-xl" ] : []).then(checkBtn);
              }
            };
            addSelectorListener("ytAppHeader", "#channel-header-container, #page-header, #page-header-container", {
              listener: recreateBtn
            });
          }
        };
        siteEvents.on("pathChanged", () => tryAddBtnYT());
        tryAddBtnYT();
      }
      log("Initialized auto-like channels feature");
    } catch (err) {
      error("Error while auto-liking channel:", err);
    }
  }
  async function addAutoLikeToggleBtn(siblingEl, channelId, channelName, extraClasses) {
    const chan = autoLikeStore.getData().channels.find(ch => ch.id === channelId);
    log(`Adding auto-like toggle button for channel with ID '${channelId}' - current state:`, chan);
    siteEvents.on("autoLikeChannelsUpdated", async () => {
      const buttonEl = document.querySelector(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
      if (!buttonEl) return warn("Couldn't find auto-like toggle button for channel ID:", channelId);
      const enabled = autoLikeStore.getData().channels.find(ch => ch.id === channelId)?.enabled ?? false;
      if (enabled) buttonEl.classList.add("toggled"); else buttonEl.classList.remove("toggled");
      const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
      imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${enabled ? "_enabled" : ""}`));
    });
    const buttonEl = await createLongBtn({
      resourceName: `icon-auto_like${chan?.enabled ? "_enabled" : ""}`,
      text: t("auto_like"),
      title: t(`auto_like_button_tooltip${chan?.enabled ? "_enabled" : "_disabled"}`),
      toggle: true,
      toggleInitialState: chan?.enabled ?? false,
      togglePredicate({shiftKey: shiftKey, ctrlKey: ctrlKey}) {
        const shiftOrCtrl = shiftKey || ctrlKey;
        shiftOrCtrl && getAutoLikeDialog().then(dlg => dlg.open());
        return !shiftOrCtrl;
      },
      async onToggle(isToggled) {
        try {
          await autoLikeStore.loadData();
          buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${isToggled ? "_enabled" : "_disabled"}`);
          const chanId = sanitizeChannelId(buttonEl.dataset.channelId ?? channelId);
          const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
          imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${isToggled ? "_enabled" : ""}`));
          if (autoLikeStore.getData().channels.some(ch => ch.id === chanId)) {
            await autoLikeStore.setData({
              channels: autoLikeStore.getData().channels.map(ch => ch.id === chanId ? {
                ...ch,
                enabled: isToggled
              } : ch)
            });
          } else {
            await autoLikeStore.setData({
              channels: [ ...autoLikeStore.getData().channels, {
                id: chanId,
                name: channelName ?? "",
                enabled: isToggled
              } ]
            });
          }
          emitSiteEvent("autoLikeChannelsUpdated");
          showIconToast({
            message: isToggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
            subtitle: t("auto_like_click_to_configure"),
            icon: `icon-auto_like${isToggled ? "_enabled" : ""}`,
            onClick: () => getAutoLikeDialog().then(dlg => dlg.open())
          }).catch(e => error("Error while showing auto-like toast:", e));
          log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${isToggled ? "enabled" : "disabled"}`);
        } catch (err) {
          error("Error while toggling auto-like channel:", err);
        }
      }
    });
    buttonEl.classList.add(...[ "bytm-auto-like-toggle-btn", ...extraClasses ?? [] ]);
    buttonEl.dataset.channelId = channelId;
    siblingEl.insertAdjacentElement("afterend", createRipple(buttonEl));
  }
  const geniUrlRatelimitTimeframe = 30;
  let currentSongTitle = "";
  async function addPlayerBarLyricsBtn() {
    addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
      listener: addActualLyricsBtn
    });
  }
  async function addActualLyricsBtn(likeContainer) {
    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
    if (!songTitleElem) return warn("Couldn't find song title element");
    currentSongTitle = songTitleElem.title;
    const onMutation = async mutations => {
      for await (const mut of mutations) {
        const newTitle = mut.target.title;
        if (newTitle !== currentSongTitle && newTitle.length > 0) {
          const lyricsBtn = document.querySelector("#bytm-player-bar-lyrics-btn");
          if (!lyricsBtn) continue;
          lyricsBtn.style.cursor = "wait";
          lyricsBtn.style.pointerEvents = "none";
          setInnerHtml(lyricsBtn, await resourceAsString("icon-spinner"));
          lyricsBtn.querySelector("svg")?.classList.add("bytm-generic-btn-img", "bytm-spinner");
          currentSongTitle = newTitle;
          const url = await getCurrentLyricsUrl();
          lyricsBtn.dataset.state = url ? "ready" : "error";
          setInnerHtml(lyricsBtn, await resourceAsString("icon-lyrics"));
          lyricsBtn.querySelector("svg")?.classList.add("bytm-generic-btn-img");
          if (!url) {
            let artist, song;
            if ("mediaSession" in navigator && navigator.mediaSession.metadata) {
              artist = navigator.mediaSession.metadata.artist;
              song = navigator.mediaSession.metadata.title;
            }
            const query = artist && song ? "?q=" + encodeURIComponent(sanitizeArtists(artist) + " - " + sanitizeSong(song)) : "";
            setInnerHtml(lyricsBtn, await resourceAsString("icon-error"));
            lyricsBtn.querySelector("svg")?.classList.add("bytm-generic-btn-img");
            lyricsBtn.ariaLabel = lyricsBtn.title = t("lyrics_not_found_click_open_search");
            lyricsBtn.style.cursor = "pointer";
            lyricsBtn.style.pointerEvents = "all";
            lyricsBtn.style.display = "inline-flex";
            lyricsBtn.style.visibility = "visible";
            lyricsBtn.href = `https://genius.com/search${query}`;
            continue;
          }
          lyricsBtn.href = url;
          lyricsBtn.ariaLabel = lyricsBtn.title = t("open_current_lyrics");
          lyricsBtn.style.cursor = "pointer";
          lyricsBtn.style.visibility = "visible";
          lyricsBtn.style.display = "inline-flex";
          lyricsBtn.style.pointerEvents = "initial";
        }
      }
    };
    const obs = new MutationObserver(onMutation);
    obs.observe(songTitleElem, {
      attributes: true,
      attributeFilter: [ "title" ]
    });
    const lyricsBtnElem = await createLyricsBtn(undefined);
    lyricsBtnElem.id = "bytm-player-bar-lyrics-btn";
    getCurrentLyricsUrl().then(url => {
      url && addGeniusUrlToLyricsBtn(lyricsBtnElem, url);
    });
    log("Inserted lyrics button into media controls bar");
    const thumbToggleElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
    if (thumbToggleElem) thumbToggleElem.insertAdjacentElement("afterend", lyricsBtnElem); else likeContainer.insertAdjacentElement("afterend", lyricsBtnElem);
  }
  const parensRegex = /\(.+\)/gm;
  const squareParensRegex = /\[.+\]/gm;
  function sanitizeSong(songName) {
    if (typeof songName !== "string") return songName;
    const sanitized = songName.replace(parensRegex, "").replace(squareParensRegex, "");
    return sanitizeUnicode(sanitized);
  }
  function sanitizeArtists(artists) {
    artists = artists.split(/\s*\u2022\s*/gimu)[0];
    if (artists.match(/&/)) artists = artists.split(/\s*&\s*/gm)[0];
    if (artists.match(/,/)) artists = artists.split(/,\s*/gm)[0];
    if (artists.match(/(f(ea)?t\.?|Remix|Edit|Flip|Cover|Night\s?Core|Bass\s?Boost|pro?d\.?\W)/i)) artists = artists.replace(parensRegex, "").replace(squareParensRegex, "");
    return sanitizeUnicode(artists);
  }
  const singleQuotesRegex = /[‘’‛‹›]/gm;
  const doubleQuotesRegex = /[“”„‟«»]/gm;
  const commaRegex = /[,，、]/gm;
  const periodRegex = /[.。．]/gm;
  function sanitizeUnicode(str) {
    return str.replace(singleQuotesRegex, "'").replace(doubleQuotesRegex, '"').replace(commaRegex, ",").replace(periodRegex, ".").trim();
  }
  async function getCurrentLyricsUrl() {
    try {
      const isVideo = getCurrentMediaType() === "video";
      const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
      const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string :first-child");
      if (!songTitleElem || !songMetaElem) return undefined;
      const songNameRaw = songTitleElem.title;
      let songName = songNameRaw;
      let artistName = songMetaElem.textContent;
      if (isVideo) {
        if (songName.includes("-")) {
          const split = splitVideoTitle(songName);
          songName = split.song;
          artistName = split.artist;
        }
      }
      if (!artistName) return undefined;
      const url = await fetchLyricsUrlTop(sanitizeArtists(artistName), sanitizeSong(songName));
      if (url) {
        emitInterface("bytm:lyricsLoaded", {
          type: "current",
          artists: artistName,
          title: songName,
          url: url
        });
      }
      return url;
    } catch (err) {
      getFeature("errorOnLyricsNotFound") && error("Couldn't resolve lyrics URL:", err);
      return undefined;
    }
  }
  async function fetchLyricsUrlTop(artist, song) {
    try {
      const path = (await fetchLyricsUrls(artist, song))?.[0]?.path;
      return path ? resolveLyricsUrl(path) : undefined;
    } catch (err) {
      getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
      return undefined;
    }
  }
  async function fetchLyricsUrls(artist, song) {
    try {
      const cacheEntry = getLyricsCacheEntry(artist, song);
      if (cacheEntry) {
        info(`Found lyrics path in cache: ${cacheEntry.path}`);
        return [ cacheEntry ];
      }
      const fetchUrl = constructUrl(`${getFeature("geniUrlBase")}/search`, {
        disableFuzzy: null,
        source: `${scriptInfo$1.name} v${scriptInfo$1.version}${mode$1 === "development" ? "-dev" : ""}`,
        q: `${artist} ${song}`
      });
      log("Requesting lyrics from geniURL:", String(fetchUrl));
      const token = getFeature("geniUrlToken");
      const fetchRes = await CoreUtils.fetchAdvanced(fetchUrl, {
        ...token ? {
          headers: {
            Authorization: `Bearer ${token}`
          }
        } : {}
      });
      if (fetchRes.status === 429) {
        const waitSeconds = Number(fetchRes.headers.get("Retry-After") ?? geniUrlRatelimitTimeframe);
        await showPrompt({
          type: "alert",
          message: tp("lyrics_rate_limited", waitSeconds, waitSeconds)
        });
        return undefined;
      } else if (fetchRes.status < 200 || fetchRes.status >= 300) {
        getFeature("errorOnLyricsNotFound") && error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL - status: ${fetchRes.status} - response: ${(await fetchRes.json()).message ?? await fetchRes.text() ?? "(none)"}`));
        return undefined;
      }
      const result = await fetchRes.json();
      if (typeof result === "object" && result.error || !result || !result.all) {
        getFeature("errorOnLyricsNotFound") && error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL: ${result.message}`));
        return undefined;
      }
      const allResults = result.all;
      if (allResults.length === 0) {
        warn("No lyrics URL found for the provided song");
        return undefined;
      }
      const allResultsSan = allResults.filter(({meta: meta, path: path}) => (meta.title || meta.fullTitle) && meta.artists && path).map(({meta: meta, path: path}) => ({
        meta: {
          ...meta,
          title: sanitizeSong(String(meta.title ?? meta.fullTitle)),
          artists: sanitizeArtists(String(meta.artists))
        },
        path: path
      }));
      const topRes = allResultsSan[0];
      topRes && addLyricsCacheEntryBest(topRes.meta.artists, topRes.meta.title, topRes.path);
      return allResultsSan.map(r => ({
        artist: r.meta.primaryArtist.name,
        song: r.meta.title,
        path: r.path
      }));
    } catch (err) {
      getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
      return undefined;
    }
  }
  async function addGeniusUrlToLyricsBtn(btnElem, geniusUrl) {
    btnElem.href = geniusUrl;
    btnElem.ariaLabel = btnElem.title = t("open_lyrics");
    btnElem.style.visibility = "visible";
    btnElem.style.display = "inline-flex";
  }
  async function createLyricsBtn(geniusUrl, hideIfLoading = true) {
    const linkElem = document.createElement("a");
    linkElem.classList.add("ytmusic-player-bar", "bytm-generic-btn");
    linkElem.dataset.state = "loading";
    linkElem.role = "button";
    linkElem.target = "_blank";
    linkElem.rel = "noopener noreferrer";
    linkElem.style.visibility = "hidden";
    linkElem.style.display = "none";
    linkElem.ariaLabel = linkElem.title = t("lyrics_loading");
    onInteraction(linkElem, e => {
      const url = linkElem.href ?? geniusUrl;
      if (!url || e instanceof MouseEvent) return;
      if (!e.ctrlKey && !e.altKey) openInTab(url);
    }, {
      preventDefault: false,
      stopPropagation: false
    });
    setInnerHtml(linkElem, await resourceAsString("icon-lyrics"));
    linkElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
    onInteraction(linkElem, async e => {
      const isModKey = e.ctrlKey || e.altKey, isInvState = [ "error", "loading" ].includes(linkElem.dataset.state ?? "");
      if (isModKey && !isInvState || !(isModKey || e.shiftKey) && isInvState) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const search = await showPrompt({
          type: "prompt",
          message: t("open_lyrics_search_prompt"),
          defaultValue: currentSongTitle
        });
        if (search && search.length > 0) openInTab(`https://genius.com/search?q=${encodeURIComponent(search)}`);
      }
    }, {
      preventDefault: false,
      stopPropagation: false
    });
    return linkElem;
  }
  function splitVideoTitle(title) {
    const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
    return {
      artist: artist,
      song: rest.join("-")
    };
  }
  let featHelpDialog = null;
  let curFeatKey = null;
  async function getFeatHelpDialog({featKey: featKey}) {
    curFeatKey = featKey;
    if (!featHelpDialog) {
      featHelpDialog = new BytmDialog({
        id: "feat-help",
        width: 600,
        height: 400,
        closeBtnEnabled: true,
        closeOnBgClick: true,
        closeOnEscPress: true,
        small: true,
        renderHeader: renderHeader$2,
        renderBody: renderBody$2
      });
      featHelpDialog.on("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
      featHelpDialog.on("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));
    }
    return featHelpDialog;
  }
  async function renderHeader$2() {
    const headerEl = document.createElement("div");
    headerEl.id = "bytm-feat-help-dialog-header";
    headerEl.classList.add("bytm-flex-row");
    setInnerHtml(headerEl, await resourceAsString("icon-help"));
    return headerEl;
  }
  async function renderBody$2() {
    const contElem = document.createElement("div");
    const localeObj = localesJson?.[getLocale()];
    let featText = t(`feature_desc.${curFeatKey}`);
    const isLtr = localeObj?.textDir !== "rtl";
    if (localeObj && !localeObj.sentenceTerminators.every(termChar => featText[isLtr ? "endsWith" : "startsWith"](termChar))) featText = `${isLtr ? featText : ""}${localeObj.sentenceTerminatorNeutral}${!isLtr ? featText : ""}`;
    const featDescElem = document.createElement("h3");
    featDescElem.role = "subheading";
    featDescElem.tabIndex = 0;
    featDescElem.textContent = featDescElem.title = featText;
    featDescElem.id = "bytm-feat-help-dialog-desc";
    const helpTextElem = document.createElement("div");
    helpTextElem.id = "bytm-feat-help-dialog-text";
    helpTextElem.tabIndex = 0;
    const helpText = featInfo[curFeatKey]?.helpText?.();
    helpTextElem.textContent = helpTextElem.title = helpText ?? t(`feature_helptext.${curFeatKey}`);
    contElem.appendChild(featDescElem);
    contElem.appendChild(helpTextElem);
    return contElem;
  }
  let otherHotkeyInputActive = false;
  const reservedKeys = [ "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " " ];
  function createHotkeyInput({initialValue: initialValue, onChange: onChange, createTitle: createTitle}) {
    const initialHotkey = initialValue;
    let currentHotkey;
    if (!createTitle) createTitle = value => value;
    const wrapperElem = document.createElement("div");
    wrapperElem.classList.add("bytm-hotkey-wrapper");
    const infoElem = document.createElement("span");
    infoElem.classList.add("bytm-hotkey-info");
    const inputElem = document.createElement("button");
    inputElem.role = "button";
    inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    if (typeof initialValue?.code === "string") getHkInputContent(initialValue).then(content => {
      inputElem.innerText = content;
    }); else inputElem.innerText = t("hotkey_input_click_to_change");
    inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));
    const resetElem = document.createElement("span");
    resetElem.classList.add("bytm-hotkey-reset", "bytm-link", "bytm-hidden");
    resetElem.role = "button";
    resetElem.tabIndex = 0;
    resetElem.textContent = `(${t("reset")})`;
    resetElem.ariaLabel = resetElem.title = t("hotkey_input_click_to_reset_tooltip");
    const deactivate = (force = false) => {
      if (!otherHotkeyInputActive && !force) return;
      emitSiteEvent("hotkeyInputActive", false);
      otherHotkeyInputActive = false;
      const curHk = currentHotkey ?? initialValue;
      if (typeof curHk?.code === "string") {
        getHkInputContent(curHk).then(content => {
          inputElem.innerText = content;
        });
      } else inputElem.innerText = t("hotkey_input_click_to_change");
      inputElem.dataset.state = infoElem.dataset.state = "inactive";
      inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(curHk));
      setInnerHtml(infoElem, curHk ? getHotkeyModifiersHtml(curHk) : "");
    };
    const activate = () => {
      if (otherHotkeyInputActive) return;
      emitSiteEvent("hotkeyInputActive", true);
      otherHotkeyInputActive = true;
      inputElem.innerText = "< ... >";
      inputElem.dataset.state = infoElem.dataset.state = "active";
      inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");
    };
    const remountAC = new AbortController;
    siteEvents.once("recreateCfgMenu", () => remountAC.abort());
    window.addEventListener("bytm:dialogClosed:cfg-menu", () => inputElem.dataset.state === "active" && deactivate(true), {
      signal: remountAC.signal
    });
    onInteraction(resetElem, async e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      onChange(initialValue);
      currentHotkey = initialValue;
      deactivate();
      inputElem.innerText = await getHkInputContent(initialValue);
      setInnerHtml(infoElem, getHotkeyModifiersHtml(initialValue));
      resetElem.classList.add("bytm-hidden");
      inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));
    });
    if (initialValue) setInnerHtml(infoElem, getHotkeyModifiersHtml(initialValue));
    let lastKeyDown;
    document.addEventListener("keypress", async e => {
      if (inputElem.dataset.state === "inactive") return;
      if (lastKeyDown?.code === e.code && lastKeyDown?.shift === e.shiftKey && lastKeyDown?.ctrl === e.ctrlKey && lastKeyDown?.alt === e.altKey) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      const hotkey = {
        code: e.code,
        shift: e.shiftKey,
        ctrl: e.ctrlKey,
        alt: e.altKey
      };
      inputElem.innerText = await getHkInputContent(hotkey);
      inputElem.dataset.state = infoElem.dataset.state = "inactive";
      setInnerHtml(infoElem, getHotkeyModifiersHtml(hotkey));
      inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");
      onChange(hotkey);
      currentHotkey = hotkey;
    }, {
      signal: remountAC.signal
    });
    document.addEventListener("keydown", async e => {
      if (reservedKeys.filter(k => k !== "Tab").includes(e.code)) return;
      if (inputElem.dataset.state !== "active") return;
      if (e.code === "Tab" || e.code === " " || e.code === "Space" || e.code === "Escape" || e.code === "Enter") {
        deactivate();
        return;
      }
      if ([ "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight" ].includes(e.code)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      const hotkey = {
        code: e.code,
        shift: e.shiftKey,
        ctrl: e.ctrlKey,
        alt: e.altKey
      };
      const keyChanged = initialHotkey?.code !== hotkey.code || initialHotkey?.shift !== hotkey.shift || initialHotkey?.ctrl !== hotkey.ctrl || initialHotkey?.alt !== hotkey.alt;
      lastKeyDown = hotkey;
      onChange(hotkey);
      currentHotkey = hotkey;
      if (keyChanged) {
        deactivate();
        resetElem.classList.remove("bytm-hidden");
      } else resetElem.classList.add("bytm-hidden");
      inputElem.innerText = await getHkInputContent(hotkey);
      inputElem.dataset.state = infoElem.dataset.state = "inactive";
      setInnerHtml(infoElem, getHotkeyModifiersHtml(hotkey));
    }, {
      signal: remountAC.signal
    });
    const unsub = siteEvents.on("cfgMenuClosed", deactivate);
    remountAC.signal.addEventListener("abort", () => unsub());
    inputElem.addEventListener("click", () => {
      if (inputElem.dataset.state === "inactive") activate(); else deactivate();
    }, {
      signal: remountAC.signal
    });
    inputElem.addEventListener("keydown", e => {
      if (reservedKeys.includes(e.code)) return;
      if (inputElem.dataset.state === "inactive") activate();
    }, {
      signal: remountAC.signal
    });
    wrapperElem.appendChild(resetElem);
    wrapperElem.appendChild(infoElem);
    wrapperElem.appendChild(inputElem);
    return wrapperElem;
  }
  function getHotkeyModifiersHtml(hotkey) {
    const modifiers = [];
    hotkey.ctrl && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_modifier_ctrl")}</kbd>`);
    hotkey.shift && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_modifier_shift")}</kbd>`);
    hotkey.alt && modifiers.push(`<kbd class="bytm-kbd">${getOS() === "mac" ? t("hotkey_modifier_mac_option") : t("hotkey_modifier_alt")}</kbd>`);
    return `<div class="bytm-hotkey-input-modifier-container" style="display: flex; align-items: center;">\n  <span>\n    ${modifiers.reduce((a, c) => `${a ? a + " " : ""}${c}`, "")}\n  </span>\n  <span style="padding: 0px 5px; height: 20px;">\n    ${modifiers.length > 0 ? "+" : ""}\n  </span>\n</div>`;
  }
  async function getHkInputContent(hotkey) {
    const trimCode = ({code: code}) => {
      if (/^Key[A-Z].+$/.test(code)) return code.slice(3);
      if (/^Digit[0-9].+$/.test(code)) return code.slice(5);
      return code.trim();
    };
    const keyCodeTrKey = `key_code.${hotkey.code}`;
    const keyStr = await hasKey(keyCodeTrKey) ? t(keyCodeTrKey) : trimCode(hotkey);
    return keyStr;
  }
  function hotkeyToString(hotkey, padding = false) {
    if (!hotkey) return t("hotkey_input_none_selected");
    let str = "";
    const p = padding ? " " : "";
    if (hotkey.ctrl) str += `${t("hotkey_modifier_ctrl")}${p}+${p}`;
    if (hotkey.shift) str += `${t("hotkey_modifier_shift")}${p}+${p}`;
    if (hotkey.alt) str += `${getOS() === "mac" ? t("hotkey_modifier_mac_option") : t("hotkey_modifier_alt")}${p}+${p}`;
    str += hotkey.code;
    return str;
  }
  let isCfgMenuDoneMounting = false;
  let isCfgMenuMounting = false;
  let isCfgMenuOpen = false;
  const scrollIndicatorOffsetThreshold = 30;
  let scrollIndicatorEnabled = true;
  let initLocale;
  let initConfig$1;
  let hiddenCopiedTxtTimeout;
  async function mountCfgMenu() {
    try {
      if (isCfgMenuMounting || isCfgMenuDoneMounting) return;
      isCfgMenuMounting = true;
      const startTs = Date.now();
      BytmDialog.initDialogs();
      initLocale = getFeature("locale");
      initConfig$1 = getFeatures();
      const initLangReloadText = t("lang_changed_prompt_reload");
      const backgroundElem = document.createElement("div");
      backgroundElem.id = "bytm-cfg-menu-bg";
      backgroundElem.classList.add("bytm-menu-bg");
      backgroundElem.ariaLabel = backgroundElem.title = t("close_menu_tooltip");
      backgroundElem.style.visibility = "hidden";
      backgroundElem.style.display = "none";
      backgroundElem.addEventListener("click", e => {
        if (isCfgMenuOpen && e.target?.id === "bytm-cfg-menu-bg") closeCfgMenu(e);
      });
      document.body.addEventListener("keydown", e => {
        if (isCfgMenuOpen && e.key === "Escape" && (BytmDialog.getCurrentDialogId() === "cfg-menu" || BytmDialog.getCurrentDialogId() === null)) closeCfgMenu(e);
      });
      const menuContainer = document.createElement("div");
      menuContainer.ariaLabel = menuContainer.title = "";
      menuContainer.classList.add("bytm-menu");
      menuContainer.id = "bytm-cfg-menu";
      const headerElem = document.createElement("div");
      headerElem.classList.add("bytm-menu-header");
      const titleLogoHeaderCont = document.createElement("div");
      titleLogoHeaderCont.classList.add("bytm-menu-title-logo-header-cont");
      const titleCont = document.createElement("div");
      titleCont.classList.add("bytm-menu-titlecont");
      titleCont.role = "heading";
      titleCont.ariaLevel = "1";
      const titleLogoElem = document.createElement("img");
      const logoSrc = await getResourceUrl(`img-logo${mode$1 === "development" ? "_dev" : ""}`);
      titleLogoElem.classList.add("bytm-cfg-menu-logo", "bytm-no-select");
      titleLogoElem.tabIndex = 0;
      titleLogoElem.role = "button";
      if (logoSrc) titleLogoElem.src = logoSrc;
      onInteraction(titleLogoElem, e => {
        e.preventDefault();
        e.stopPropagation();
        const clicks = Number(titleLogoElem.dataset?.clicks ?? "0");
        if (clicks === 2) {
          titleLogoElem.classList.add("somersault");
          titleLogoElem.dataset.clicks = "0";
        } else {
          titleLogoElem.classList.add("bounce");
          titleLogoElem.dataset.clicks = String(clicks + 1);
        }
        titleLogoElem.addEventListener("animationend", () => {
          titleLogoElem.classList.remove("bounce", "somersault");
        }, {
          once: true
        });
      });
      titleLogoHeaderCont.appendChild(titleLogoElem);
      const titleElem = document.createElement("h1");
      titleElem.classList.add("bytm-menu-title");
      const titleTextElem = document.createElement("div");
      titleTextElem.textContent = t("config_menu_title", scriptInfo$1.name);
      titleElem.appendChild(titleTextElem);
      const linksCont = document.createElement("div");
      linksCont.id = "bytm-menu-linkscont";
      linksCont.role = "navigation";
      const linkTitlesShort = {
        github: "GitHub",
        greasyfork: "GreasyFork",
        openuserjs: "OpenUserJS",
        discord: "Discord"
      };
      const addLink = (imgSrc, href, title, titleKey) => {
        const anchorElem = document.createElement("a");
        anchorElem.classList.add("bytm-menu-link", "bytm-no-select");
        anchorElem.rel = "noopener noreferrer";
        anchorElem.href = href;
        anchorElem.target = "_blank";
        anchorElem.tabIndex = 0;
        anchorElem.role = "button";
        anchorElem.ariaLabel = anchorElem.title = title;
        const extendedAnchorEl = document.createElement("a");
        extendedAnchorEl.classList.add("bytm-menu-link", "extended-link", "bytm-no-select");
        extendedAnchorEl.rel = "noopener noreferrer";
        extendedAnchorEl.href = href;
        extendedAnchorEl.target = "_blank";
        extendedAnchorEl.tabIndex = -1;
        extendedAnchorEl.textContent = linkTitlesShort[titleKey];
        extendedAnchorEl.ariaLabel = extendedAnchorEl.title = title;
        const imgElem = document.createElement("img");
        imgElem.classList.add("bytm-menu-img");
        imgElem.src = imgSrc;
        anchorElem.appendChild(imgElem);
        anchorElem.appendChild(extendedAnchorEl);
        linksCont.appendChild(anchorElem);
      };
      const links = [ [ "github", await getResourceUrl("img-github"), packageJson.homepage, t("open_github", scriptInfo$1.name), "github" ], [ "greasyfork", await getResourceUrl("img-greasyfork"), packageJson.hosts.greasyfork, t("open_greasyfork", scriptInfo$1.name), "greasyfork" ], [ "openuserjs", await getResourceUrl("img-openuserjs"), packageJson.hosts.openuserjs, t("open_openuserjs", scriptInfo$1.name), "openuserjs" ] ];
      const hostLink = links.find(([name]) => name === host$1);
      const otherLinks = links.filter(([name]) => name !== host$1);
      const reorderedLinks = hostLink ? [ hostLink, ...otherLinks ] : links;
      for (const [, ...args] of reorderedLinks) addLink(...args);
      addLink(await getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");
      const closeElem = document.createElement("img");
      closeElem.classList.add("bytm-menu-close");
      closeElem.role = "button";
      closeElem.tabIndex = 0;
      closeElem.src = await getResourceUrl("img-close");
      closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
      onInteraction(closeElem, e => closeCfgMenu(e));
      titleCont.appendChild(titleElem);
      titleCont.appendChild(linksCont);
      titleLogoHeaderCont.appendChild(titleCont);
      headerElem.appendChild(titleLogoHeaderCont);
      headerElem.appendChild(closeElem);
      const footerCont = document.createElement("div");
      footerCont.classList.add("bytm-menu-footer-cont");
      const leftSideFooterCont = document.createElement("div");
      leftSideFooterCont.id = "bytm-menu-footer-left-side-cont";
      const reloadFooterEl = document.createElement("div");
      reloadFooterEl.id = "bytm-menu-footer-reload-hint";
      reloadFooterEl.classList.add("bytm-menu-footer", "hidden");
      reloadFooterEl.setAttribute("aria-hidden", "true");
      reloadFooterEl.textContent = t("reload_hint");
      reloadFooterEl.role = "alert";
      reloadFooterEl.ariaLive = "polite";
      const reloadEl = document.createElement("button");
      reloadEl.classList.add("bytm-btn");
      reloadEl.style.marginLeft = "10px";
      reloadEl.textContent = t("reload_now");
      reloadEl.ariaLabel = reloadEl.title = t("reload_tooltip");
      reloadEl.addEventListener("click", () => {
        closeCfgMenu();
        reloadTab();
      });
      const reloadAllEl = document.createElement("button");
      reloadAllEl.classList.add("bytm-btn");
      reloadAllEl.style.marginLeft = "10px";
      reloadAllEl.textContent = t("reload_all_tabs_now");
      reloadAllEl.ariaLabel = reloadAllEl.title = t("reload_all_tabs_tooltip", scriptInfo$1.name);
      reloadAllEl.addEventListener("click", () => {
        closeCfgMenu();
        reloadAllTabs();
      });
      reloadFooterEl.appendChild(reloadEl);
      reloadFooterEl.appendChild(reloadAllEl);
      leftSideFooterCont.appendChild(reloadFooterEl);
      const exportDataSpecial = () => JSON.stringify({
        formatVersion: cfgFormatVersion,
        data: getFeatures()
      });
      const exImDlg = new ExImDialog({
        id: "config-export-import",
        width: 800,
        height: 600,
        exportData: async () => await compressionSupported() ? await CoreUtils.compress(JSON.stringify({
          formatVersion: cfgFormatVersion,
          data: getFeatures()
        }), compressionFormat$1, "string") : exportDataSpecial(),
        exportDataSpecial: exportDataSpecial,
        async onImport(data) {
          try {
            if (!data || data.trim().length === 0) return;
            const parsed = await tryToDecompressAndParse(data.trim());
            log("Trying to import configuration:", parsed);
            if (!parsed || typeof parsed !== "object") return await showPrompt({
              type: "alert",
              message: t("import_error.invalid")
            });
            if (typeof parsed.formatVersion !== "number") return await showPrompt({
              type: "alert",
              message: t("import_error.no_format_version")
            });
            if (typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0) return await showPrompt({
              type: "alert",
              message: t("import_error.no_data")
            });
            if (parsed.formatVersion < cfgFormatVersion) {
              let newData = structuredClone(parsed.data);
              const sortedMigrations = Object.entries(cfgMigrations).sort(([a], [b]) => Number(a) - Number(b));
              let curFmtVer = Number(parsed.formatVersion);
              for (const [fmtVer, migrationFunc] of sortedMigrations) {
                const ver = Number(fmtVer);
                if (curFmtVer < cfgFormatVersion && curFmtVer < ver) {
                  try {
                    const migRes = structuredClone(migrationFunc(newData));
                    newData = await migRes;
                    curFmtVer = ver;
                  } catch (err) {
                    error(`Error while running migration function for format version ${fmtVer}:`, err);
                  }
                }
              }
              parsed.formatVersion = curFmtVer;
              parsed.data = newData;
            } else if (parsed.formatVersion !== cfgFormatVersion) return await showPrompt({
              type: "alert",
              message: t("import_error.wrong_format_version", cfgFormatVersion, parsed.formatVersion)
            });
            await setFeatures({
              ...getFeatures(),
              ...parsed.data
            });
            if (await showPrompt({
              type: "confirm",
              message: t("import_success_confirm_reload")
            })) {
              log("Reloading tab after importing configuration");
              return reloadTab();
            }
            exImDlg.unmount();
            emitSiteEvent("rebuildCfgMenu", parsed.data);
          } catch (err) {
            warn("Couldn't import configuration:", err);
            await showPrompt({
              type: "alert",
              message: t("import_error.invalid")
            });
          }
        },
        title: () => t("bytm_config_export_import_title"),
        descImport: () => t("bytm_config_import_desc"),
        descExport: () => t("bytm_config_export_desc")
      });
      const exportImportBtn = document.createElement("button");
      exportImportBtn.classList.add("bytm-btn");
      exportImportBtn.textContent = exportImportBtn.ariaLabel = exportImportBtn.title = t("export_import");
      onInteraction(exportImportBtn, async () => await exImDlg.open());
      const buttonsCont = document.createElement("div");
      buttonsCont.classList.add("bytm-menu-footer-buttons-cont");
      buttonsCont.appendChild(exportImportBtn);
      footerCont.appendChild(leftSideFooterCont);
      footerCont.appendChild(buttonsCont);
      const bodyCont = document.createElement("div");
      bodyCont.id = "bytm-cfg-menu-main-body";
      const featureCfg = getFeatures();
      const featureCfgWithCategories = Object.entries(featInfo).reduce((acc, [key, {category: category}]) => {
        if (!acc[category]) acc[category] = {};
        acc[category][key] = featureCfg[key];
        return acc;
      }, {});
      const sidenavCont = document.createElement("nav");
      sidenavCont.classList.add("bytm-menu-sidenav");
      sidenavCont.id = "bytm-cfg-menu-sidenav";
      sidenavCont.tabIndex = 0;
      sidenavCont.ariaLabel = t("cfg_menu_sidenav_label");
      bodyCont.appendChild(sidenavCont);
      const createSidenavHeader = (headerId, selected = false, isExtraInfoHeader = false) => {
        try {
          const headerElem = document.createElement("h2");
          headerElem.id = `bytm-menu-nav-header-${headerId}`;
          headerElem.classList.add("bytm-menu-sidenav-header", "bytm-no-select");
          selected && headerElem.classList.add("selected");
          headerElem.role = "radio";
          headerElem.ariaChecked = String(selected);
          headerElem.tabIndex = 0;
          headerElem.ariaLevel = "2";
          headerElem.textContent = t(`feature_category.${headerId}`, {
            scriptName: scriptInfo$1.name
          });
          headerElem.title = headerElem.ariaLabel = t(`cfg_menu_feature_category${isExtraInfoHeader ? "_info" : ""}_header_tooltip`, t(`feature_category.${headerId}`, {
            scriptName: scriptInfo$1.name
          }));
          onInteraction(headerElem, e => {
            const selectedHeader = sidenavCont.querySelector(".bytm-menu-sidenav-header.selected");
            if (selectedHeader) {
              selectedHeader.classList.remove("selected");
              selectedHeader.ariaChecked = "false";
            }
            headerElem.classList.add("selected");
            headerElem.ariaChecked = "true";
            const catElem = featuresCont.querySelector(`#bytm-ftconf-category-${headerId}`);
            if (catElem) {
              document.querySelectorAll("#bytm-menu-opts .bytm-ftconf-category").forEach(el => {
                el.classList.add("hidden");
                el.setAttribute("aria-hidden", "true");
                el.setAttribute("inert", "true");
              });
              catElem.classList.remove("hidden");
              catElem.removeAttribute("aria-hidden");
              catElem.removeAttribute("inert");
              if (e.type.startsWith("key")) setTimeout(() => catElem.focus(), 10);
            }
            checkToggleScrollIndicator();
            emitSiteEvent("configHeaderSelected", headerId);
            document.querySelector("#bytm-menu-top-anchor")?.scrollIntoView({
              behavior: "instant"
            });
          });
          return headerElem;
        } catch (err) {
          error(`Error while creating sidenav header for category '${headerId}':`, err);
        }
      };
      const sidenavTopSectionCont = document.createElement("section");
      sidenavTopSectionCont.classList.add("bytm-menu-sidenav-section", "bytm-ignored-input");
      sidenavTopSectionCont.id = "bytm-cfg-menu-sidenav-top-section";
      sidenavTopSectionCont.role = "radiogroup";
      sidenavTopSectionCont.tabIndex = 0;
      sidenavTopSectionCont.ariaLabel = t("cfg_menu_sidenav_top_section_label", {
        scriptName: scriptInfo$1.name
      });
      let firstCatHeader = true;
      for (const category of Object.keys(featureCfgWithCategories)) {
        const catGroupIdx = groupedCategories.findIndex(group => group.includes(category));
        const catIdx = catGroupIdx >= 0 ? groupedCategories[catGroupIdx].findIndex(cat => cat === category) : undefined;
        if (catGroupIdx > 0 && catIdx === 0) {
          const hrElem = document.createElement("hr");
          hrElem.classList.add("bytm-hr");
          sidenavTopSectionCont.appendChild(hrElem);
        }
        const headerElem = createSidenavHeader(category, firstCatHeader);
        headerElem && sidenavTopSectionCont.appendChild(headerElem);
        firstCatHeader = false;
      }
      sidenavCont.appendChild(sidenavTopSectionCont);
      const sidenavBtmSectionCont = document.createElement("section");
      sidenavBtmSectionCont.classList.add("bytm-menu-sidenav-section", "bytm-ignored-input");
      sidenavBtmSectionCont.id = "bytm-cfg-menu-sidenav-bottom-section";
      sidenavBtmSectionCont.role = "radiogroup";
      sidenavBtmSectionCont.tabIndex = 0;
      sidenavBtmSectionCont.ariaLabel = t("cfg_menu_sidenav_bottom_section_label", {
        scriptName: scriptInfo$1.name
      });
      const extraInfoCategoryIDs = [ "about", "changelog" ];
      for (const id of extraInfoCategoryIDs) {
        const headerElem = createSidenavHeader(id, firstCatHeader, true);
        headerElem && sidenavBtmSectionCont.appendChild(headerElem);
      }
      sidenavCont.appendChild(sidenavBtmSectionCont);
      siteEvents.once("cfgMenuMounted", () => {
        document.querySelectorAll("#bytm-ftconf-category-about a, #bytm-ftconf-category-changelog a").forEach(linkEl => {
          linkEl.target = "_blank";
        });
        document.querySelector("#bytm-ftconf-category-changelog details")?.setAttribute("open", "true");
      });
      const featuresCont = document.createElement("div");
      featuresCont.id = "bytm-menu-opts";
      const topAnchor = document.createElement("div");
      topAnchor.id = "bytm-menu-top-anchor";
      featuresCont.appendChild(topAnchor);
      const onCfgChange = async (key, initialVal, newVal) => {
        const ftInfo = featInfo?.[key];
        const valueHidden = ftInfo && "valueHidden" in ftInfo && ftInfo.valueHidden === true;
        if ([ "number", "slider" ].includes(ftInfo.type)) {
          if ("min" in ftInfo || "max" in ftInfo) newVal = CoreUtils.clamp(Number(newVal), "min" in ftInfo ? Number(ftInfo.min) : -Infinity, "max" in ftInfo ? Number(ftInfo.max) : Infinity);
          if ("step" in ftInfo) newVal = Math.round(Number(newVal) / Number(ftInfo.step)) * Number(ftInfo.step);
        }
        try {
          const fmt = val => typeof val === "object" ? JSON.stringify(val) : String(val);
          info(`Feature config changed at key '${key}'${valueHidden ? "" : `, from value '${fmt(initialVal)}' to '${fmt(newVal)}'`}`);
          const featConf = structuredClone(getFeatures());
          featConf[key] = newVal;
          const changedKeys = initConfig$1 ? Object.keys(featConf).filter(k => typeof featConf[k] !== "object" && featConf[k] !== initConfig$1[k]) : [];
          const requiresReload = changedKeys.some(k => featInfo[k]?.reloadRequired !== false);
          await setFeatures(featConf);
          featInfo[key]?.change?.(newVal, initialVal);
          if (requiresReload) {
            reloadFooterEl.classList.remove("hidden");
            reloadFooterEl.removeAttribute("aria-hidden");
          } else {
            reloadFooterEl.classList.add("hidden");
            reloadFooterEl.setAttribute("aria-hidden", "true");
          }
          if (initLocale !== featConf.locale) {
            await initTranslations(featConf.locale);
            setLocale(featConf.locale);
            const newText = t("lang_changed_prompt_reload");
            const newLangEmoji = localesJson[featConf.locale]?.emoji ? `${localesJson[featConf.locale].emoji} ` : "";
            const initLangEmoji = localesJson[initLocale]?.emoji ? `${localesJson[initLocale].emoji} ` : "";
            const confirmText = newText !== initLangReloadText ? `${newLangEmoji}${newText}\n\n\n${initLangEmoji}${initLangReloadText}` : newText;
            const isLocalesTextDifferent = t("reload_now") !== tl(initLocale, "reload_now");
            const getReloadAllBtn = async dialog => {
              const reloadAllBtn = document.createElement("button");
              reloadAllBtn.id = "bytm-prompt-dialog-reload-all";
              reloadAllBtn.classList.add("bytm-prompt-dialog-button");
              reloadAllBtn.textContent = `${t("reload_all_tabs_now")}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_all_tabs_now")}` : ""}`;
              reloadAllBtn.ariaLabel = reloadAllBtn.title = `${t("reload_all_tabs_tooltip", scriptInfo$1.name)}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_all_tabs_tooltip", scriptInfo$1.name)}` : ""}`;
              reloadAllBtn.tabIndex = 0;
              reloadAllBtn.addEventListener("click", () => {
                dialog.emitResolve(dialog.type === "confirm" ? true : document.querySelector("#bytm-prompt-dialog-input")?.value?.trim() ?? null);
                dialog.close();
                reloadAllTabs();
              }, {
                once: true
              });
              return reloadAllBtn;
            };
            if (await showPrompt({
              type: "confirm",
              message: confirmText,
              confirmBtnText: () => `${t("reload_now")}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_now")}` : ""}`,
              confirmBtnTooltip: () => `${t("reload_tooltip")}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_tooltip")}` : ""}`,
              denyBtnText: type => `${t(type === "alert" ? "prompt_close" : "prompt_cancel")}${isLocalesTextDifferent ? ` / ${tl(initLocale, type === "alert" ? "prompt_close" : "prompt_cancel")}` : ""}`,
              denyBtnTooltip: type => `${t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")}${isLocalesTextDifferent ? ` / ${tl(initLocale, type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")}` : ""}`,
              extraButtons: [ getReloadAllBtn ],
              extraButtonsPosition: "between",
              dialogOptions: {
                width: 650,
                height: 800
              }
            })) {
              closeCfgMenu();
              log("Reloading tab after changing language");
              await reloadTab();
            }
          } else if (getLocale() !== featConf.locale) setLocale(featConf.locale);
        } catch (err) {
          error("Error while reacting to config change:", err);
        } finally {
          emitSiteEvent("configOptionChanged", ...valueHidden ? [ key, undefined, undefined ] : [ key, initialVal, newVal ]);
        }
      };
      const confChanged = CoreUtils.debounce(onCfgChange, 333);
      const fmtVal = (v, key) => {
        try {
          const renderValue = typeof featInfo?.[key]?.renderValue === "function" ? featInfo[key].renderValue : undefined;
          const retVal = (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
          return renderValue ? renderValue(retVal) : retVal;
        } catch {
          return String(v).trim();
        }
      };
      const createCategoryContainer = category => {
        const categoryCont = document.createElement("div");
        categoryCont.id = `bytm-ftconf-category-${category}`;
        categoryCont.classList.add("bytm-ftconf-category");
        categoryCont.tabIndex = 0;
        categoryCont.setAttribute("aria-describedby", `bytm-ftconf-category-${category}-header`);
        categoryCont.setAttribute("aria-label", t(`feature_category.${category}`, {
          scriptName: scriptInfo$1.name
        }));
        return categoryCont;
      };
      let currentGroup;
      let groupCont;
      let firstCategory = true;
      for (const category in featureCfgWithCategories) {
        const featObj = featureCfgWithCategories[category];
        const categoryCont = createCategoryContainer(category);
        if (firstCategory) {
          categoryCont.removeAttribute("inert");
          categoryCont.removeAttribute("aria-hidden");
        } else {
          categoryCont.classList.add("hidden");
          categoryCont.setAttribute("inert", "true");
          categoryCont.setAttribute("aria-hidden", "true");
        }
        for (const featKey in featObj) {
          const ftInfo = featInfo[featKey];
          if (!ftInfo || "hidden" in ftInfo && ftInfo.hidden === true) continue;
          if (ftInfo.advanced && !featureCfg.advancedMode) continue;
          if (currentGroup && groupCont && currentGroup !== ftInfo.group) {
            categoryCont.appendChild(groupCont);
            groupCont = undefined;
          }
          currentGroup = ftInfo.group ?? undefined;
          if (currentGroup && (!groupCont || groupCont.dataset.group !== currentGroup)) {
            groupCont = document.createElement("div");
            groupCont.id = `bytm-ftconf-group-${currentGroup}`;
            groupCont.classList.add("bytm-ftconf-group");
            groupCont.dataset.group = currentGroup;
            const groupHeader = document.createElement("h3");
            groupHeader.id = `bytm-ftconf-group-${currentGroup}-header`;
            groupHeader.classList.add("bytm-ftconf-group-header");
            groupHeader.textContent = groupHeader.ariaLabel = t(`feature_group_header.${currentGroup}`, {
              scriptName: scriptInfo$1.name
            });
            groupHeader.tabIndex = 0;
            groupHeader.role = "heading";
            groupHeader.ariaLevel = "3";
            groupCont.appendChild(groupHeader);
          }
          const {type: type, default: ftDefault} = ftInfo;
          const step = "step" in ftInfo ? ftInfo.step : undefined;
          const val = featureCfg[featKey];
          const initialVal = val ?? ftDefault;
          const ftConfElem = document.createElement("div");
          ftConfElem.classList.add("bytm-ftitem");
          {
            const featLeftSideElem = document.createElement("div");
            featLeftSideElem.classList.add("bytm-ftitem-leftside");
            if (mode$1 === "development") {
              const defVal = fmtVal(ftDefault, featKey);
              const extraTxts = [ `default: ${defVal.length === 0 ? "(undefined)" : defVal}` ];
              "min" in ftInfo && extraTxts.push(`min: ${ftInfo.min}`);
              "max" in ftInfo && extraTxts.push(`max: ${ftInfo.max}`);
              "step" in ftInfo && extraTxts.push(`step: ${ftInfo.step}`);
              const rel = "reloadRequired" in ftInfo && ftInfo.reloadRequired !== false ? "reload required - " : "";
              const adv = ftInfo.advanced ? "advanced feature - " : "";
              ftConfElem.title = `[Dev] ${ftInfo.category} > ${ftInfo.group} > ${featKey}${extraTxts.length > 0 ? `\n${extraTxts.join(" - ")}` : ""}\n(${rel}${adv}since v${ftInfo.since})`;
            }
            if (!await hasKeyFor("en-US", `feature_desc.${featKey}`)) {
              error(`Missing en-US translation with key "feature_desc.${featKey}" for feature description, skipping this config menu feature...`);
              continue;
            }
            const textElem = document.createElement("span");
            textElem.id = `bytm-ftitem-text-${featKey}`;
            textElem.classList.add("bytm-ftitem-text", "bytm-ellipsis-wrap");
            textElem.textContent = textElem.title = textElem.ariaLabel = t(`feature_desc.${featKey}`);
            const adornContent = await resolveAdornments(featInfo, featKey);
            let adornmentElem;
            if (adornContent && adornContent.length > 0) {
              const adornHtml = adornContent.join(" ");
              adornmentElem = document.createElement("span");
              adornmentElem.id = `bytm-ftitem-${featKey}-adornment`;
              adornmentElem.classList.add("bytm-ftitem-adornment");
              setInnerHtml(adornmentElem, adornHtml);
            }
            let helpElem;
            const hasHelpTextFunc = typeof featInfo[featKey]?.helpText === "function";
            const helpTextVal = hasHelpTextFunc && featInfo[featKey].helpText();
            if (await hasKey(`feature_helptext.${featKey}`) || helpTextVal && await hasKey(helpTextVal)) {
              const helpElemImgHtml = await resourceAsString("icon-help");
              if (helpElemImgHtml) {
                helpElem = document.createElement("div");
                helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
                helpElem.ariaLabel = helpElem.title = t("feature_help_button_tooltip", t(`feature_desc.${featKey}`));
                helpElem.role = "button";
                helpElem.tabIndex = 0;
                setInnerHtml(helpElem, helpElemImgHtml);
                onInteraction(helpElem, async e => {
                  e.preventDefault();
                  e.stopPropagation();
                  await (await getFeatHelpDialog({
                    featKey: featKey
                  })).open();
                });
              } else {
                error(`Couldn't create help button SVG element for feature '${featKey}'`);
              }
            }
            adornmentElem && featLeftSideElem.appendChild(adornmentElem);
            featLeftSideElem.appendChild(textElem);
            helpElem && featLeftSideElem.appendChild(helpElem);
            ftConfElem.appendChild(featLeftSideElem);
          }
          {
            let inputType = "text";
            let inputTag = "input";
            switch (type) {
             case "toggle":
              inputTag = undefined;
              inputType = undefined;
              break;

             case "slider":
              inputType = "range";
              break;

             case "number":
              inputType = "number";
              break;

             case "text":
              inputType = "text";
              break;

             case "select":
              inputTag = "select";
              inputType = undefined;
              break;

             case "hotkey":
              inputTag = undefined;
              inputType = undefined;
              break;

             case "button":
              inputTag = undefined;
              inputType = undefined;
              break;
            }
            const inputElemId = `bytm-ftconf-${featKey}-input`;
            const ctrlElem = document.createElement("span");
            ctrlElem.classList.add("bytm-ftconf-ctrl");
            ctrlElem.title = "";
            let advCopyHiddenCont;
            if ((getFeature("advancedMode") || mode$1 === "development") && ftInfo.valueHidden) {
              const advCopyHintElem = document.createElement("span");
              advCopyHintElem.classList.add("bytm-ftconf-adv-copy-hint");
              advCopyHintElem.textContent = t("copied");
              advCopyHintElem.role = "status";
              advCopyHintElem.style.display = "none";
              const advCopyHiddenBtn = document.createElement("button");
              advCopyHiddenBtn.classList.add("bytm-ftconf-adv-copy-btn", "bytm-btn");
              advCopyHiddenBtn.tabIndex = 0;
              advCopyHiddenBtn.textContent = t("copy_hidden");
              advCopyHiddenBtn.ariaLabel = advCopyHiddenBtn.title = t("copy_hidden_tooltip");
              const copyHiddenInteraction = e => {
                e.preventDefault();
                e.stopPropagation();
                copyToClipboard(getFeatures()[featKey] ?? "");
                advCopyHintElem.style.display = "inline";
                if (typeof hiddenCopiedTxtTimeout === "undefined") {
                  hiddenCopiedTxtTimeout = setTimeout(() => {
                    advCopyHintElem.style.display = "none";
                    hiddenCopiedTxtTimeout = undefined;
                  }, 3e3);
                }
              };
              onInteraction(advCopyHiddenBtn, e => copyHiddenInteraction(e));
              advCopyHiddenCont = document.createElement("span");
              advCopyHiddenCont.appendChild(advCopyHintElem);
              advCopyHiddenCont.appendChild(advCopyHiddenBtn);
            }
            advCopyHiddenCont && ctrlElem.appendChild(advCopyHiddenCont);
            if (inputTag) {
              const isNumericInput = [ "number", "slider" ].includes(type);
              const inputElem = document.createElement(inputTag);
              inputElem.classList.add("bytm-ftconf-input");
              inputElem.id = inputElemId;
              inputElem.ariaLabel = t(`feature_desc.${featKey}`);
              if (inputType) inputElem.type = inputType;
              if ("min" in ftInfo && typeof ftInfo.min !== "undefined") inputElem.min = String(ftInfo.min);
              if ("max" in ftInfo && typeof ftInfo.max !== "undefined") inputElem.max = String(ftInfo.max);
              if (typeof initialVal !== "undefined") inputElem.value = String(initialVal);
              if (type === "text" && ftInfo.valueHidden) {
                inputElem.type = "password";
                inputElem.autocomplete = "off";
              }
              if (isNumericInput && step) inputElem.step = String(step);
              if (type === "toggle" && typeof initialVal !== "undefined") inputElem.checked = Boolean(initialVal);
              const getUnitTxt = val => "unit" in ftInfo && typeof ftInfo.unit === "string" ? ftInfo.unit : "unit" in ftInfo && typeof ftInfo.unit === "function" ? ftInfo.unit(Number(val)) : "";
              let labelElem;
              let lastDisplayedVal;
              if (type === "slider") {
                labelElem = document.createElement("label");
                labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
                labelElem.textContent = `${fmtVal(initialVal, featKey)}${getUnitTxt(inputElem.value)}`;
                inputElem.addEventListener("input", () => {
                  if (labelElem && lastDisplayedVal !== inputElem.value) {
                    labelElem.textContent = `${fmtVal(inputElem.value, featKey)}${getUnitTxt(inputElem.value)}`;
                    lastDisplayedVal = inputElem.value;
                  }
                });
              } else if (type === "select") {
                const ftOpts = typeof ftInfo.options === "function" ? ftInfo.options() : ftInfo.options;
                for (const {value: value, label: label} of ftOpts) {
                  const optionElem = document.createElement("option");
                  optionElem.value = String(value);
                  optionElem.textContent = `${label}${mode$1 === "development" ? ` [${value}]` : ""}`;
                  if (value === initialVal) optionElem.selected = true;
                  inputElem.appendChild(optionElem);
                }
              }
              if (type === "text") {
                let lastValue = inputElem.value && inputElem.value.length > 0 ? inputElem.value : ftInfo.default;
                const textInputUpdate = () => {
                  let v = String(inputElem.value).trim();
                  if (type === "text" && ftInfo.normalize) v = inputElem.value = ftInfo.normalize(String(v));
                  if (v === lastValue) return;
                  lastValue = v;
                  if (v === "") v = ftInfo.default;
                  if (typeof initialVal !== "undefined") confChanged(featKey, initialVal, v);
                };
                siteEvents.once("cfgMenuClosed", () => {
                  textInputUpdate();
                });
                inputElem.addEventListener("blur", () => textInputUpdate());
                inputElem.addEventListener("keydown", e => e.key === "Tab" && textInputUpdate());
              } else {
                inputElem.addEventListener("input", () => {
                  let v = String(inputElem.value).trim();
                  if ([ "number", "slider" ].includes(type) || v.match(/^-?\d+$/)) v = Number(v);
                  if (typeof initialVal !== "undefined") confChanged(featKey, initialVal, type !== "toggle" ? v : inputElem.checked);
                });
              }
              if (labelElem) {
                labelElem.id = `bytm-ftconf-${featKey}-label`;
                labelElem.htmlFor = inputElemId;
                ctrlElem.appendChild(labelElem);
              }
              inputElem.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
              inputElem.setAttribute("aria-labelledby", labelElem?.id ?? `bytm-ftitem-text-${featKey}`);
              const hasMinOrMax = "min" in ftInfo && typeof ftInfo.min === "number" || "max" in ftInfo && typeof ftInfo.max === "number";
              const hasStep = "step" in ftInfo && typeof ftInfo.step === "number";
              if (isNumericInput) {
                inputElem.addEventListener("blur", () => {
                  let v = Number(inputElem.value);
                  if (hasMinOrMax && !isNaN(v)) {
                    if ("min" in ftInfo && typeof ftInfo.min === "number" && v < ftInfo.min) v = ftInfo.min;
                    if ("max" in ftInfo && typeof ftInfo.max === "number" && v > ftInfo.max) v = ftInfo.max;
                  }
                  if (hasStep && !isNaN(v)) v = Math.round(v / Number(ftInfo.step)) * Number(ftInfo.step);
                  if (!isNaN(v)) inputElem.value = String(v);
                });
              }
              ctrlElem.appendChild(inputElem);
              if (type === "number" && "unit" in ftInfo && [ "function", "string" ].includes(typeof ftInfo.unit)) {
                const afterInputUnitEl = document.createElement("span");
                afterInputUnitEl.classList.add("bytm-ftconf-unit");
                afterInputUnitEl.textContent = getUnitTxt(inputElem.value);
                ctrlElem.appendChild(afterInputUnitEl);
              }
            } else {
              let customInputEl;
              switch (type) {
               case "hotkey":
                customInputEl = createHotkeyInput({
                  initialValue: typeof initialVal === "object" ? initialVal : undefined,
                  onChange: hotkey => confChanged(featKey, initialVal, hotkey),
                  createTitle: value => t("hotkey_input_click_to_change_tooltip", t(`feature_desc.${featKey}`), value)
                });
                break;

               case "toggle":
                customInputEl = await createToggleInput({
                  initialValue: Boolean(initialVal),
                  onChange: checked => confChanged(featKey, initialVal, checked),
                  id: `ftconf-${featKey}`,
                  labelPos: "left"
                });
                break;

               case "button":
                customInputEl = document.createElement("button");
                customInputEl.classList.add("bytm-btn");
                customInputEl.tabIndex = 0;
                customInputEl.textContent = await hasKey(`feature_btn.${featKey}`) ? t(`feature_btn.${featKey}`) : t("trigger_btn_action");
                customInputEl.ariaLabel = customInputEl.title = t(`feature_desc.${featKey}`);
                onInteraction(customInputEl, async () => {
                  if (customInputEl.disabled) return;
                  const startTs = Date.now();
                  const res = ftInfo.click();
                  customInputEl.disabled = true;
                  customInputEl.classList.add("bytm-busy");
                  customInputEl.textContent = await hasKey(`feature_btn.${featKey}_running`) ? t(`feature_btn.${featKey}_running`) : t("trigger_btn_action_running");
                  if (res instanceof Promise) await res;
                  const finalize = async () => {
                    customInputEl.disabled = false;
                    customInputEl.classList.remove("bytm-busy");
                    customInputEl.textContent = await hasKey(`feature_btn.${featKey}`) ? t(`feature_btn.${featKey}`) : t("trigger_btn_action");
                  };
                  const rTime = CoreUtils.randRange(200, 400);
                  if (Date.now() - startTs < rTime) setTimeout(finalize, rTime - (Date.now() - startTs)); else finalize();
                });
                break;
              }
              if (customInputEl && !customInputEl.hasAttribute("aria-label")) customInputEl.ariaLabel = t(`feature_desc.${featKey}`);
              customInputEl?.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
              if (customInputEl?.getAttribute("aria-labelledby") === null) {
                const lbl = customInputEl?.querySelector("label");
                customInputEl?.setAttribute("aria-labelledby", lbl && lbl.id.length > 0 ? lbl.id : `bytm-ftitem-text-${featKey}`);
              }
              ctrlElem.appendChild(customInputEl);
            }
            ftConfElem.appendChild(ctrlElem);
          }
          if (groupCont) groupCont.appendChild(ftConfElem); else categoryCont.appendChild(ftConfElem);
        }
        if (currentGroup && groupCont) {
          categoryCont.appendChild(groupCont);
          groupCont = undefined;
        }
        featuresCont.appendChild(categoryCont);
        firstCategory = false;
      }
      const extraInfoCategoryElements = {
        about: async () => {
          const aboutTextCont = document.createElement("p");
          aboutTextCont.id = "bytm-cfg-menu-about-text-cont";
          aboutTextCont.classList.add("bytm-markdown-container");
          const aboutTrParams = CoreUtils.pureObj({
            scriptName: scriptInfo$1.name,
            scriptVersion: packageJson.version,
            buildNumber: buildNumber$1,
            buildDate: new Date(buildTimestamp).toLocaleString(getLocale(), {
              dateStyle: "medium"
            }),
            buildBrowseLink: `https://github.com/${repo}/tree/${buildNumber$1}`,
            authorName: packageJson.author.name,
            authorLink: packageJson.author.url,
            githubLink: scriptInfo$1.namespace,
            greasyforkLink: packageJson.hosts.greasyfork,
            openuserjsLink: packageJson.hosts.openuserjs,
            fundingLink: packageJson.funding.url,
            discordLink: "https://dc.sv443.net/",
            currentYear: (new Date).getFullYear(),
            licenseName: packageJson.license,
            licenseUrl: `https://github.com/${repo}/blob/${branch$1}/LICENSE.txt`,
            contributorsLink: packageJson.specialThanksUrl
          });
          setInnerHtml(aboutTextCont, await parseMarkdown(t("about_bytm_content_markdown", aboutTrParams)));
          return [ aboutTextCont ];
        },
        changelog: async () => {
          const mdContElem = document.createElement("div");
          mdContElem.id = "bytm-cfg-menu-changelog-md-cont";
          mdContElem.classList.add("bytm-markdown-container");
          setInnerHtml(mdContElem, await getChangelogHtmlWithDetails());
          siteEvents.once("cfgMenuMounted", () => {
            const detailsElems = mdContElem.querySelectorAll("details");
            detailsElems.forEach(el => {
              el.addEventListener("toggle", () => checkToggleScrollIndicator());
            });
          });
          return [ mdContElem ];
        }
      };
      for (const category of extraInfoCategoryIDs) {
        const categoryCont = createCategoryContainer(category);
        categoryCont.classList.add("bytm-ftconf-extra-info-category", "hidden");
        categoryCont.setAttribute("inert", "true");
        categoryCont.setAttribute("aria-hidden", "true");
        const infoElems = await extraInfoCategoryElements[category]();
        infoElems.forEach(el => categoryCont.appendChild(el));
        featuresCont.appendChild(categoryCont);
      }
      siteEvents.on("rebuildCfgMenu", newConfig => {
        for (const ftKey in featInfo) {
          const ftElem = document.querySelector(`#bytm-ftconf-${ftKey}-input`);
          const labelElem = document.querySelector(`#bytm-ftconf-${ftKey}-label`);
          if (!ftElem) continue;
          const ftInfo = featInfo[ftKey];
          const value = newConfig[ftKey];
          if (ftInfo.type === "toggle") ftElem.checked = Boolean(value); else ftElem.value = String(value);
          if (!labelElem) continue;
          const unitTxt = "unit" in ftInfo && typeof ftInfo.unit === "string" ? ftInfo.unit : "unit" in ftInfo && typeof ftInfo.unit === "function" ? ftInfo.unit(Number(ftElem.value)) : "";
          if (ftInfo.type === "slider") labelElem.textContent = `${fmtVal(Number(value), ftKey)}${unitTxt}`;
        }
        info("Rebuilt config menu");
      });
      const scrollIndicator = document.createElement("img");
      scrollIndicator.id = "bytm-menu-scroll-indicator";
      scrollIndicator.classList.add("bytm-no-select");
      scrollIndicator.src = await getResourceUrl("icon-arrow_down");
      scrollIndicator.role = "button";
      scrollIndicator.ariaLabel = scrollIndicator.title = t("scroll_to_bottom");
      featuresCont.appendChild(scrollIndicator);
      scrollIndicator.addEventListener("click", () => {
        const bottomAnchor = document.querySelector("#bytm-menu-bottom-anchor");
        bottomAnchor?.scrollIntoView({
          behavior: "smooth"
        });
      });
      featuresCont.addEventListener("scroll", evt => {
        const scrollPos = evt.target?.scrollTop ?? 0;
        const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
        if (!scrollIndicator) return;
        if (scrollIndicatorEnabled && scrollPos > scrollIndicatorOffsetThreshold && !scrollIndicator.classList.contains("bytm-hidden")) {
          scrollIndicator.classList.add("bytm-hidden");
        } else if (scrollIndicatorEnabled && scrollPos <= scrollIndicatorOffsetThreshold && scrollIndicator.classList.contains("bytm-hidden")) {
          scrollIndicator.classList.remove("bytm-hidden");
        }
      });
      const bottomAnchor = document.createElement("div");
      bottomAnchor.id = "bytm-menu-bottom-anchor";
      featuresCont.appendChild(bottomAnchor);
      bodyCont.appendChild(featuresCont);
      menuContainer.appendChild(headerElem);
      menuContainer.appendChild(bodyCont);
      const modeItems = [];
      mode$1 === "development" && modeItems.push([ "dev", "dev_mode", "img-logo_dev" ]);
      getFeature("advancedMode") && modeItems.push([ "advanced", "advanced_mode", "icon-advanced_mode_large" ]);
      if (modeItems.length > 0) {
        const modeDisplayCont = document.createElement("div");
        modeDisplayCont.id = "bytm-menu-mode-display-cont";
        for (const [id, trKey, resourceKey] of modeItems) {
          const isSvg = resourceKey.startsWith("icon-");
          const modeElTooltip = t(`active_mode_tooltip_${trKey}`, {
            scriptHandler: GM_info.scriptHandler ?? "(your userscript manager extension)"
          });
          const modeDispWrapperEl = document.createElement("div");
          modeDispWrapperEl.classList.add("bytm-menu-mode-display-wrapper");
          modeDispWrapperEl.title = modeDispWrapperEl.ariaLabel = modeElTooltip;
          let transitionEnded = false;
          const enterDisp = () => {
            transitionEnded = false;
            modeDispWrapperEl.classList.add("expand");
          };
          modeDispWrapperEl.addEventListener("mouseenter", enterDisp);
          modeDisplayCont.addEventListener("focusin", enterDisp);
          const leaveDisp = () => {
            modeDispWrapperEl.addEventListener("transitionend", () => {
              transitionEnded = true;
            }, {
              once: true,
              capture: true
            });
          };
          modeDispWrapperEl.addEventListener("mouseleave", leaveDisp);
          const leaveCont = () => {
            if (transitionEnded) modeDispWrapperEl.classList.remove("expand"); else modeDispWrapperEl.addEventListener("transitionend", () => {
              modeDispWrapperEl.classList.remove("expand");
            }, {
              once: true,
              capture: true
            });
          };
          modeDisplayCont.addEventListener("mouseleave", leaveCont);
          modeDisplayCont.addEventListener("focusout", leaveCont);
          if (isSvg) {
            const modeDisplayWrapperEl = document.createElement("span");
            modeDisplayWrapperEl.id = `bytm-menu-mode-display-${id}`;
            modeDisplayWrapperEl.classList.add("bytm-menu-mode-display", "bytm-no-select");
            modeDisplayWrapperEl.tabIndex = 0;
            modeDisplayWrapperEl.role = "img";
            modeDisplayWrapperEl.title = modeDisplayWrapperEl.ariaLabel = modeElTooltip;
            const svgContent = await resourceAsString(resourceKey);
            if (!svgContent) {
              error(`Couldn't create mode display element for mode '${id}' because the resource '${resourceKey}' couldn't be loaded.`);
              continue;
            }
            setInnerHtml(modeDisplayWrapperEl, svgContent);
            modeDispWrapperEl.appendChild(modeDisplayWrapperEl);
          } else {
            const modeDisplayEl = document.createElement("img");
            modeDisplayEl.id = `bytm-menu-mode-display-${id}`;
            modeDisplayEl.classList.add("bytm-menu-mode-display", "bytm-no-select");
            modeDisplayEl.tabIndex = 0;
            modeDisplayEl.role = "img";
            modeDisplayEl.title = modeDisplayEl.ariaLabel = modeDisplayEl.alt = modeElTooltip;
            modeDisplayEl.src = await getResourceUrl(resourceKey);
            modeDispWrapperEl.appendChild(modeDisplayEl);
          }
          const labelEl = document.createElement("span");
          labelEl.classList.add("bytm-menu-mode-display-label");
          labelEl.textContent = t(trKey);
          modeDispWrapperEl.appendChild(labelEl);
          modeDisplayCont.appendChild(modeDispWrapperEl);
        }
        leftSideFooterCont.insertAdjacentElement("afterbegin", modeDisplayCont);
      }
      menuContainer.appendChild(footerCont);
      backgroundElem.appendChild(menuContainer);
      (document.querySelector("#bytm-dialog-container") ?? document.body).appendChild(backgroundElem);
      window.addEventListener("resize", CoreUtils.debounce(checkToggleScrollIndicator, 250));
      isCfgMenuOpen = false;
      document.body.classList.remove("bytm-disable-scroll");
      document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
      backgroundElem.style.visibility = "hidden";
      backgroundElem.style.display = "none";
      log(`Mounted config menu element in ${Date.now() - startTs}ms`);
      isCfgMenuMounting = false;
      isCfgMenuDoneMounting = true;
      forceEmitSiteEvent("cfgMenuMounted");
      window.addEventListener("bytm:dialogOpened", evt => {
        if (!isCfgMenuOpen) return;
        const dlg = evt?.detail;
        if (dlg instanceof BytmDialog) {
          menuContainer.setAttribute("aria-hidden", "true");
          menuContainer.setAttribute("inert", "true");
        }
      });
      window.addEventListener("bytm:dialogClosed", () => {
        if (!isCfgMenuOpen) return;
        if (!openDialogs.some(id => id !== "cfg-menu")) {
          menuContainer.removeAttribute("aria-hidden");
          menuContainer.removeAttribute("inert");
        }
      });
      siteEvents.once("recreateCfgMenu", async () => {
        const bgElem = document.querySelector("#bytm-cfg-menu-bg");
        if (!bgElem) {
          error("Couldn't remount config menu because the background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
          return;
        }
        bgElem.addEventListener("transitionend", async () => {
          closeCfgMenu(undefined, false);
          bgElem.remove();
          isCfgMenuMounting = isCfgMenuDoneMounting = false;
          await mountCfgMenu();
          const bgElemNew = document.querySelector("#bytm-cfg-menu-bg");
          if (bgElemNew) {
            bgElemNew.classList.add("bytm-remounting");
            setTimeout(() => {
              bgElemNew.addEventListener("transitionend", () => {
                bgElemNew.classList.remove("bytm-remounting", "bytm-remounted");
              }, {
                once: true
              });
              openCfgMenu();
              bgElemNew.classList.add("bytm-remounted");
            }, 1);
          }
        }, {
          once: true
        });
        bgElem.classList.add("bytm-remounting");
      });
    } catch (err) {
      error("Error while creating and mounting config menu:", err);
      closeCfgMenu();
    }
  }
  async function openCfgMenu() {
    try {
      if (isCfgMenuOpen) return;
      if (!isCfgMenuDoneMounting) {
        if (isCfgMenuMounting) return void siteEvents.once("cfgMenuMounted", () => openCfgMenu()); else await mountCfgMenu();
      }
      isCfgMenuOpen = true;
      document.body.classList.add("bytm-disable-scroll");
      document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.setAttribute("inert", "true");
      const menuBg = document.querySelector("#bytm-cfg-menu-bg");
      setCurrentDialogId("cfg-menu");
      openDialogs.unshift("cfg-menu");
      emitInterface("bytm:dialogOpened", undefined);
      emitInterface("bytm:dialogOpened:cfg-menu", undefined);
      if (!menuBg) {
        warn("Couldn't open config menu because background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
        closeCfgMenu();
        return;
      }
      menuBg.style.visibility = "visible";
      menuBg.style.display = "block";
      checkToggleScrollIndicator();
      const kbdElems = menuBg.querySelectorAll("kbd");
      for (const kbdElem of kbdElems) {
        kbdElem.classList.add("bytm-kbd");
        kbdElem.addEventListener("selectstart", e => e.preventDefault());
      }
    } catch (err) {
      error("Error while opening config menu:", err);
    }
  }
  function closeCfgMenu(evt, enableScroll = true) {
    if (!isCfgMenuOpen) return;
    isCfgMenuOpen = false;
    evt?.bubbles && evt.stopPropagation();
    if (enableScroll && !openDialogs.some(id => id !== "cfg-menu")) {
      document.body.classList.remove("bytm-disable-scroll");
      document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
    }
    const menuBg = document.querySelector("#bytm-cfg-menu-bg");
    clearTimeout(hiddenCopiedTxtTimeout);
    const cfgIdx = openDialogs.indexOf("cfg-menu");
    if (cfgIdx > -1) openDialogs.splice(cfgIdx, 1);
    setCurrentDialogId(openDialogs?.[0] ?? null);
    emitInterface("bytm:dialogClosed", undefined);
    emitInterface("bytm:dialogClosed:cfg-menu", undefined);
    if (!menuBg) return warn("Couldn't close config menu because background element couldn't be found. The config menu is considered closed but might still be open. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
    menuBg.querySelectorAll(".bytm-ftconf-adv-copy-hint")?.forEach(el => el.style.display = "none");
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
  }
  function checkToggleScrollIndicator() {
    const featuresCont = document.querySelector("#bytm-menu-opts");
    const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
    if (featuresCont && scrollIndicator) {
      const verticalScroll = UserUtils.isScrollable(featuresCont).vertical;
      const underThreshold = featuresCont.scrollHeight - featuresCont.clientHeight <= scrollIndicatorOffsetThreshold;
      if (!underThreshold && verticalScroll && !scrollIndicatorEnabled) {
        scrollIndicatorEnabled = true;
        scrollIndicator.classList.remove("bytm-hidden");
      }
      if (!verticalScroll && scrollIndicatorEnabled || underThreshold) {
        scrollIndicatorEnabled = false;
        scrollIndicator.classList.add("bytm-hidden");
      }
    }
  }
  let logoExchanged = false, improveLogoCalled = false, bytmLogoUrl;
  async function addWatermark() {
    const watermarkEl = document.createElement("a");
    watermarkEl.role = "button";
    watermarkEl.id = "bytm-watermark";
    watermarkEl.classList.add("style-scope", "ytmusic-nav-bar", "bytm-no-select");
    watermarkEl.textContent = scriptInfo$1.name;
    watermarkEl.ariaLabel = watermarkEl.title = t("open_menu_tooltip", scriptInfo$1.name);
    watermarkEl.tabIndex = 0;
    (async () => {
      bytmLogoUrl = await getResourceUrl(mode$1 === "development" ? "img-logo_dev" : "img-logo");
      UserUtils.preloadImages([ bytmLogoUrl ]);
      const watermarkOpenMenu = e => {
        e.stopImmediatePropagation();
        if (!e.shiftKey && !e.ctrlKey || logoExchanged) openCfgMenu();
        if (!logoExchanged && (e.shiftKey || e.ctrlKey)) exchangeLogo();
      };
      onInteraction(watermarkEl, e => watermarkOpenMenu(e), {
        preventDefault: true,
        stopPropagation: true,
        capture: true
      });
      addSelectorListener("navBar", "ytmusic-logo a", {
        listener(logoElem) {
          logoElem.appendChild(watermarkEl);
          log("Added watermark element");
        }
      });
    })();
  }
  function improveLogo() {
    return new Promise(async resolve => {
      try {
        if (improveLogoCalled) return;
        improveLogoCalled = true;
        const res = await CoreUtils.fetchAdvanced("https://music.youtube.com/img/on_platform_logo_dark.svg");
        const svg = await res.text();
        addSelectorListener("navBar", "ytmusic-logo > a", {
          listener: logoElem => {
            logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
            setInnerHtml(logoElem, svg);
            logoElem.querySelectorAll("svg > g > path").forEach(el => el.classList.add("bytm-mod-logo-remove"));
            log("Swapped logo to inline SVG");
            resolve();
          }
        });
      } catch (err) {
        error("Couldn't improve logo due to an error:", err);
      }
    });
  }
  function exchangeLogo() {
    if (logoExchanged) return;
    addSelectorListener("navBar", ".bytm-mod-logo", {
      listener: async logoElem => {
        if (logoElem.classList.contains("bytm-logo-exchanged") || !bytmLogoUrl) return;
        logoExchanged = true;
        logoElem.classList.add("bytm-logo-exchanged");
        const newLogo = document.createElement("img");
        newLogo.classList.add("bytm-mod-logo-img");
        newLogo.src = bytmLogoUrl;
        logoElem.insertBefore(newLogo, logoElem.querySelector("svg"));
        bytmLogoUrl && document.head.querySelectorAll('link[rel="icon"]').forEach((e, i) => {
          if (i !== 0) {
            e.remove();
            return;
          }
          e.sizes = "48x48";
          e.type = "image/png";
          e.href = bytmLogoUrl;
        });
        setTimeout(() => {
          logoElem.querySelectorAll(".bytm-mod-logo-remove").forEach(e => e.remove());
        }, 1e3);
      }
    });
  }
  async function addConfigMenuOptionYTM(container) {
    const cfgOptElem = document.createElement("div");
    cfgOptElem.classList.add("bytm-cfg-menu-option");
    const cfgOptItemElem = document.createElement("div");
    cfgOptItemElem.classList.add("bytm-cfg-menu-option-item");
    cfgOptItemElem.role = "button";
    cfgOptItemElem.tabIndex = 0;
    cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo$1.name);
    onInteraction(cfgOptItemElem, async e => {
      const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button button");
      settingsBtnElem?.click();
      if (!e.shiftKey && !e.ctrlKey || logoExchanged) openCfgMenu();
      if (!logoExchanged && (e.shiftKey || e.ctrlKey)) exchangeLogo();
    });
    const cfgOptIconElem = document.createElement("img");
    cfgOptIconElem.classList.add("bytm-cfg-menu-option-icon");
    cfgOptIconElem.src = await getResourceUrl(mode$1 === "development" ? "img-logo_dev" : "img-logo");
    const cfgOptTextElem = document.createElement("div");
    cfgOptTextElem.classList.add("bytm-cfg-menu-option-text");
    cfgOptTextElem.textContent = t("config_menu_option", scriptInfo$1.name);
    cfgOptItemElem.appendChild(cfgOptIconElem);
    cfgOptItemElem.appendChild(cfgOptTextElem);
    cfgOptElem.appendChild(cfgOptItemElem);
    container.appendChild(cfgOptElem);
    log("Added BYTM-Configuration button to menu popover");
  }
  async function addConfigMenuOptionYT(container) {
    const cfgOptWrapperElem = document.createElement("div");
    cfgOptWrapperElem.classList.add("bytm-yt-cfg-menu-option", "darkreader-ignore");
    cfgOptWrapperElem.role = "button";
    cfgOptWrapperElem.tabIndex = 0;
    cfgOptWrapperElem.ariaLabel = cfgOptWrapperElem.title = t("open_menu_tooltip", scriptInfo$1.name);
    const cfgOptElem = document.createElement("div");
    cfgOptElem.classList.add("bytm-yt-cfg-menu-option-inner");
    const cfgOptImgElem = document.createElement("img");
    cfgOptImgElem.classList.add("bytm-yt-cfg-menu-option-icon");
    cfgOptImgElem.src = await getResourceUrl(mode$1 === "development" ? "img-logo_dev" : "img-logo");
    const cfgOptItemElem = document.createElement("div");
    cfgOptItemElem.classList.add("bytm-yt-cfg-menu-option-item");
    cfgOptItemElem.textContent = scriptInfo$1.name;
    cfgOptElem.appendChild(cfgOptImgElem);
    cfgOptElem.appendChild(cfgOptItemElem);
    cfgOptWrapperElem.appendChild(cfgOptElem);
    onInteraction(cfgOptWrapperElem, () => openCfgMenu());
    const firstChild = container?.firstElementChild;
    if (firstChild) container.insertBefore(cfgOptWrapperElem, firstChild); else return error("Couldn't add config menu option to YT titlebar - couldn't find container element");
  }
  async function addAnchorImprovements() {
    try {
      await addStyleFromResource("css-anchor_improvements");
    } catch (err) {
      error("Couldn't add anchor improvements CSS due to an error:", err);
    }
    try {
      const preventDefault = e => e.preventDefault();
      const addListItemAnchors = items => {
        for (const item of items) {
          if (item.classList.contains("bytm-anchor-improved")) continue;
          item.classList.add("bytm-anchor-improved");
          const thumbnailElem = item.querySelector(".left-items");
          const titleElem = item.querySelector(".title-column .title a");
          if (!thumbnailElem || !titleElem) continue;
          const anchorElem = document.createElement("a");
          anchorElem.classList.add("bytm-anchor", "bytm-carousel-shelf-anchor");
          anchorElem.href = titleElem?.href ?? "#";
          anchorElem.target = "_self";
          anchorElem.role = "button";
          anchorElem.addEventListener("click", preventDefault);
          UserUtils.addParent(thumbnailElem, anchorElem);
        }
      };
      addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
        continuous: true,
        all: true,
        listener: addListItemAnchors
      });
      addSelectorListener("body", 'ytmusic-tab-renderer[page-type="MUSIC_PAGE_TYPE_TRACK_RELATED"] ytmusic-responsive-list-item-renderer', {
        continuous: true,
        all: true,
        listener: addListItemAnchors
      });
      addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
        continuous: true,
        all: true,
        listener: addListItemAnchors
      });
      addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
        continuous: true,
        all: true,
        listener: addListItemAnchors
      });
    } catch (err) {
      error("Couldn't improve carousel shelf anchors due to an error:", err);
    }
    try {
      const addSidebarAnchors = sidebarCont => {
        const items = sidebarCont.parentNode.querySelectorAll("ytmusic-guide-entry-renderer tp-yt-paper-item");
        improveSidebarAnchors(items);
        return items.length;
      };
      addSelectorListener("sideBar", "#contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
        listener: sidebarCont => {
          const itemsAmt = addSidebarAnchors(sidebarCont);
          log(`Added anchors around ${itemsAmt} sidebar ${CoreUtils.autoPlural("item", itemsAmt)}`);
        }
      });
      addSelectorListener("body", "ytmusic-nav-bar", {
        listener(navBar) {
          let miniSidebarCont = document.querySelector("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");
          const mut = new MutationObserver(() => setTimeout(() => {
            if (navBar.hasAttribute("guide-collapsed") && !navBar.classList.contains("bytm-mini-sidebar-anchors-added")) {
              miniSidebarCont = document.querySelector("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");
              if (!miniSidebarCont) return error("Couldn't find mini sidebar element while adding anchors");
              improveMiniSidebarAnchors();
            }
          }, 50));
          const improveMiniSidebarAnchors = () => {
            const itemsAmt = addSidebarAnchors(miniSidebarCont);
            navBar.classList.add("bytm-mini-sidebar-anchors-added");
            log(`Added anchors around ${itemsAmt} mini sidebar ${CoreUtils.autoPlural("item", itemsAmt)}`);
            mut.disconnect();
          };
          if (miniSidebarCont) improveMiniSidebarAnchors();
          mut.observe(navBar, {
            attributes: true
          });
        }
      });
    } catch (err) {
      error("Couldn't add anchors to sidebar items due to an error:", err);
    }
    try {
      const checkCurrentList = () => {
        addSelectorListener("sidePanel", "ytmusic-player-queue #contents, ytmusic-player-queue #automix-contents", {
          all: true,
          listener(songLists) {
            songLists.forEach(songListEl => {
              const items = songListEl.querySelectorAll("ytmusic-player-queue-item");
              if (!items.length) return;
              const itemsAmt = improveSongListClickArea(items);
              itemsAmt > 0 && log(`Improved clickable area of ${itemsAmt} current song list ${CoreUtils.autoPlural("item", itemsAmt)}`);
            });
          }
        });
      };
      siteEvents.on("queueChanged", () => checkCurrentList());
      siteEvents.on("autoplayQueueChanged", () => checkCurrentList());
      const genericSongListListener = songLists => {
        songLists.forEach(songListEl => {
          const items = songListEl.querySelectorAll("ytmusic-responsive-list-item-renderer, .card-content-container");
          if (!items.length) return;
          const itemsAmt = improveSongListClickArea(items);
          itemsAmt > 0 && log(`Improved clickable area of ${itemsAmt} song list ${CoreUtils.autoPlural("item", itemsAmt)}`);
        });
      };
      const pathChangedUnsub = siteEvents.on("pathChanged", path => {
        if (path.includes("/search")) {
          pathChangedUnsub();
          addSelectorListener("searchPage", `ytmusic-shelf-renderer #contents,\nytmusic-card-shelf-renderer .card-container`, {
            continuous: true,
            all: true,
            debounce: 200,
            listener: genericSongListListener
          });
        }
      });
      addSelectorListener("browseResponse", `ytmusic-playlist-shelf-renderer #contents,\nytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents\nytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents`, {
        continuous: true,
        all: true,
        debounce: 200,
        listener: genericSongListListener
      });
    } catch (err) {
      error("Couldn't add anchors to song list items due to an error:", err);
    }
  }
  const sidebarPaths = [ "/", "/explore", "/library" ];
  function improveSidebarAnchors(sidebarItems) {
    sidebarItems.forEach((item, i) => {
      const anchorElem = document.createElement("a");
      anchorElem.classList.add("bytm-anchor", "bytm-no-select");
      anchorElem.role = "button";
      anchorElem.target = "_self";
      anchorElem.href = sidebarPaths[i] ?? "#";
      anchorElem.ariaLabel = anchorElem.title = t("middle_click_open_tab");
      anchorElem.addEventListener("click", e => {
        e.preventDefault();
      });
      UserUtils.addParent(item, anchorElem);
    });
  }
  function improveSongListClickArea(items) {
    let itemsAmt = 0;
    items.forEach(item => {
      if (item.classList.contains("bytm-click-area-improved")) return;
      item.classList.add("bytm-click-area-improved");
      item.addEventListener("click", e => {
        const tgt = e.target;
        if (!tgt) return;
        const conditions = [ el => el.tagName.toLowerCase() === "yt-formatted-string", el => el.classList.contains("yt-formatted-string"), el => el.tagName.toLowerCase() === "ytmusic-player-queue-item", el => el.classList.contains("ytmusic-player-queue-item"), el => el.tagName.toLowerCase() === "ytmusic-responsive-list-item-renderer", el => el.classList.contains("ytmusic-responsive-list-item-renderer"), el => el.classList.contains("ytmusic-card-shelf-renderer") ];
        const antiConditions = [ el => el.tagName.toLowerCase() === "a", el => Boolean(el.getAttribute("href")?.length), el => el.classList.contains("bytm-anchor"), el => el.classList.contains("multi-select-overlay") ];
        if (conditions.some(cnd => cnd(tgt)) && antiConditions.every(acnd => !acnd(tgt))) item.querySelector("ytmusic-play-button-renderer")?.click();
      });
      itemsAmt++;
    });
    return itemsAmt;
  }
  async function initRemShareTrackParam() {
    const removeSiParam = inputElem => {
      try {
        if (getFeature("removeShareTrackingParamSites") !== getDomain() && getFeature("removeShareTrackingParamSites") !== "all") return;
        if (!inputElem.value.match(/(&|\?)si=/i)) return;
        const url = new URL(inputElem.value);
        url.searchParams.delete("si");
        inputElem.value = String(url);
        log(`Removed tracking parameter from share link -> ${url}`);
      } catch (err) {
        warn("Couldn't remove tracking parameter from share link due to error:", err);
      }
    };
    const [sharePanelSel, inputSel] = (() => {
      switch (getDomain()) {
       case "ytm":
        return [ "tp-yt-paper-dialog ytmusic-unified-share-panel-renderer", "input#share-url" ];

       case "yt":
        return [ "yt-unified-share-panel-renderer", "input#share-url" ];
      }
    })();
    addSelectorListener("body", sharePanelSel, {
      listener: sharePanelEl => {
        const obs = new MutationObserver(() => {
          const inputElem = sharePanelEl.querySelector(inputSel);
          inputElem && removeSiParam(inputElem);
        });
        obs.observe(sharePanelEl, {
          childList: true,
          subtree: true,
          characterData: true,
          attributeFilter: [ "aria-hidden", "aria-checked", "checked" ]
        });
      }
    });
  }
  async function fixSpacing() {
    if (!await addStyleFromResource("css-fix_spacing")) error("Couldn't fix spacing");
  }
  async function initAboveQueueBtns() {
    setTimeout(async () => {
      const {scrollToActiveSongBtn: scrollToActiveSongBtn, clearQueueBtn: clearQueueBtn} = getFeatures();
      if (!await addStyleFromResource("css-above_queue_btns")) error("Couldn't add CSS for above queue buttons"); else if (getFeature("aboveQueueBtnsSticky")) addStyleFromResource("css-above_queue_btns_sticky");
      const contBtns = [ {
        condition: scrollToActiveSongBtn,
        id: "scroll-to-active",
        resourceName: "icon-skip_to",
        titleKey: "scroll_to_playing",
        interaction: async evt => scrollToCurrentSongInQueue(evt)
      }, {
        condition: clearQueueBtn,
        id: "clear-queue",
        resourceName: "icon-clear_list",
        titleKey: "clear_list",
        async interaction(evt) {
          try {
            if (evt.shiftKey || await showPrompt({
              type: "confirm",
              message: t("clear_list_confirm")
            })) {
              const url = new URL(location.href);
              url.searchParams.delete("list");
              url.searchParams.set("time_continue", String(await getVideoTime(0)));
              location.assign(url);
            }
          } catch (err) {
            error("Couldn't clear queue due to an error:", err);
          }
        }
      } ];
      if (!contBtns.some(b => Boolean(b.condition))) return;
      addSelectorListener("sidePanel", "ytmusic-tab-renderer ytmusic-queue-header-renderer #buttons", {
        async listener(rightBtnsEl) {
          try {
            const aboveQueueBtnCont = document.createElement("div");
            aboveQueueBtnCont.id = "bytm-above-queue-btn-cont";
            UserUtils.addParent(rightBtnsEl, aboveQueueBtnCont);
            const headerEl = rightBtnsEl.closest("ytmusic-queue-header-renderer");
            if (!headerEl) return error("Couldn't find queue header element while adding above queue buttons");
            siteEvents.on("fullscreenToggled", isFullscreen => {
              headerEl.classList[isFullscreen ? "add" : "remove"]("hidden");
            });
            const wrapperElem = document.createElement("div");
            wrapperElem.id = "bytm-above-queue-btn-wrapper";
            for (const item of contBtns) {
              if (Boolean(item.condition) === false) continue;
              const btnElem = await createCircularBtn({
                resourceName: item.resourceName,
                onClick: item.interaction,
                title: t(item.titleKey)
              });
              btnElem.id = `bytm-${item.id}-btn`;
              btnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-above-queue-btn");
              wrapperElem.appendChild(btnElem);
            }
            rightBtnsEl.insertAdjacentElement("beforebegin", wrapperElem);
          } catch (err) {
            error("Couldn't add above queue buttons due to an error:", err);
          }
        }
      });
    }, 1);
  }
  const artCacheStore = new CoreUtils.DataStore({
    id: "bytm-artwork-cache",
    migrateIds: [ "album-art-cache" ],
    formatVersion: 1,
    engine: new UserUtils.GMStorageEngine,
    compressionFormat: compressionFormat$1,
    memoryCache: false,
    defaultData: {
      entries: []
    }
  });
  async function deleteExpiredAlbumArtCacheEntries() {
    const ttl = 1e3 * 60 * 60 * 24 * getFeature("thumbnailOverlayAlbumArtCacheTTL");
    const cacheData = await artCacheStore.loadData();
    const expiredEntries = cacheData.entries.filter(e => Date.now() - e.created > ttl);
    if (expiredEntries.length > 0) {
      log(`Deleting ${expiredEntries.length} expired album art cache entries`);
      artCacheStore.setData({
        entries: cacheData.entries.filter(en => !expiredEntries.some(ex => ex.videoId === en.videoId))
      });
    }
  }
  var ThumbOvlState;
  (function(ThumbOvlState) {
    ThumbOvlState[ThumbOvlState["Off"] = 0] = "Off";
    ThumbOvlState[ThumbOvlState["YT"] = 1] = "YT";
    ThumbOvlState[ThumbOvlState["AM"] = 2] = "AM";
  })(ThumbOvlState || (ThumbOvlState = {}));
  let overlayState = ThumbOvlState.Off;
  async function initThumbnailOverlay() {
    const toggleBtnShown = getFeature("thumbnailOverlayToggleBtnShown");
    if (getFeature("thumbnailOverlayBehavior") === "never" && !toggleBtnShown) return;
    deleteExpiredAlbumArtCacheEntries();
    waitVideoElementReady().then(() => {
      const playerSelector = "ytmusic-player#player";
      const playerEl = document.querySelector(playerSelector);
      if (!playerEl) return error("Couldn't find video player element while adding thumbnail overlay");
      const updateOverlayVisibility = async (isManual = false) => {
        if (!UserUtils.isDomLoaded()) return;
        const isVideo = getCurrentMediaType() === "video";
        const defaultBehavior = getFeature("thumbnailOverlayBehavior");
        const prefState = getFeature("thumbnailOverlayPreferredSource") === "am" ? ThumbOvlState.AM : ThumbOvlState.YT;
        if (!isManual && overlayState === ThumbOvlState.Off) overlayState = defaultBehavior === "videosOnly" && isVideo || defaultBehavior === "songsOnly" && !isVideo || defaultBehavior === "always" ? prefState : ThumbOvlState.Off; else if (!isManual && overlayState !== prefState) overlayState = prefState;
        if (getCurrentMediaType() === "video" && overlayState === ThumbOvlState.AM) overlayState = ThumbOvlState.YT;
        const overlayElem = document.querySelector("#bytm-thumbnail-overlay");
        const thumbElem = document.querySelector("#bytm-thumbnail-overlay-img");
        const indicatorElem = document.querySelector("#bytm-thumbnail-overlay-indicator");
        const ovlShown = overlayState !== ThumbOvlState.Off;
        if (overlayElem) overlayElem.style.display = ovlShown ? "block" : "none";
        if (thumbElem) thumbElem.ariaHidden = String(!ovlShown);
        if (indicatorElem) {
          indicatorElem.style.display = ovlShown ? "block" : "none";
          indicatorElem.ariaHidden = String(!ovlShown);
        }
        if (getFeature("thumbnailOverlayToggleBtnShown")) {
          addSelectorListener("playerBarMiddleButtons", "#bytm-thumbnail-overlay-toggle", {
            async listener(toggleBtnElem) {
              const toggleBtnIconElem = toggleBtnElem.querySelector("svg");
              if (toggleBtnIconElem) {
                let key = `icon-image${overlayState === ThumbOvlState.YT ? "_filled_yt" : overlayState === ThumbOvlState.AM ? "_filled_am" : ""}`;
                if (getCurrentMediaType() === "video" && overlayState !== ThumbOvlState.Off) key = "icon-image_filled";
                setInnerHtml(toggleBtnElem, await resourceAsString(key));
                toggleBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
              }
              if (toggleBtnElem) toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay.toggle_btn_tooltip-${ThumbOvlState[overlayState]}`);
            }
          });
        }
      };
      const applyThumbUrl = async videoID => {
        try {
          const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
          if (toggleBtnElem?.dataset.albumArtworkUrl?.startsWith("http") && ((!toggleBtnElem.dataset.albumArtworkRes || toggleBtnElem.dataset.albumArtworkRes.length === 0) && toggleBtnElem.dataset.albumArtworkRes === String(getFeature("thumbnailOverlayITunesImgRes")))) return openInTab(toggleBtnElem.dataset.albumArtworkUrl, false);
          const setThumbOverlayUrl = (ytThumbUrl, amThumbUrl) => {
            const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
            const thumbImgElem = document.querySelector("#bytm-thumbnail-overlay-img");
            const thumbUrl = overlayState === ThumbOvlState.AM && amThumbUrl ? amThumbUrl : ytThumbUrl;
            if (toggleBtnElem) {
              toggleBtnElem.dataset.albumArtworkUrl = thumbUrl;
              toggleBtnElem.dataset.albumArtworkRes = String(getFeature("thumbnailOverlayITunesImgRes"));
            }
            if (toggleBtnElem?.href !== "" && toggleBtnElem?.href === thumbUrl && thumbImgElem?.src === thumbUrl) return;
            if (toggleBtnElem) toggleBtnElem.href = thumbUrl;
            if (thumbImgElem) {
              thumbImgElem.dataset.videoId = videoID;
              thumbImgElem.src = thumbUrl;
              thumbImgElem.dataset.mediaType = getCurrentMediaType();
            }
            log("Applied thumbnail URL to overlay:", thumbUrl);
          };
          let bestNativeThumbUrl;
          const ac = new AbortController;
          getBestThumbnailUrl(videoID).then(url => {
            if (ac.signal.aborted ? undefined : bestNativeThumbUrl = url) setThumbOverlayUrl(url);
          }).catch(() => void 0);
          addSelectorListener("playerBarInfo", ".subtitle > yt-formatted-string a, .subtitle > yt-formatted-string span", {
            async listener() {
              if (ac.signal.aborted) return;
              const [primaryArtist, albumName] = (() => {
                const parent = document.querySelector(".content-info-wrapper .subtitle yt-formatted-string");
                if (!parent) return [ undefined, undefined ];
                const children = [ ...parent.querySelectorAll("a, span") ];
                const splitList = children.reduce((acc, el) => {
                  if (el.tagName === "SPAN" && el.innerText.includes("•")) {
                    acc.push([]);
                    return acc;
                  }
                  acc[acc.length - 1].push(el);
                  return acc;
                }, [ [] ]);
                if (splitList.length < 2) return [ undefined, undefined ];
                const firstArtistLink = splitList[0].find(el => el.tagName === "A");
                const firstArtistName = splitList[0].find(el => !el.innerText.match(/^\s*•\s*$/));
                return [ (firstArtistLink ?? firstArtistName)?.innerText, splitList[1].find(el => el.tagName === "A")?.innerText ];
              })();
              const iTunesAlbum = primaryArtist && albumName ? await getBestITunesAlbumMatch(videoID, primaryArtist, albumName) : undefined;
              const imgRes = getFeature("thumbnailOverlayITunesImgRes", featInfo.thumbnailOverlayITunesImgRes.default);
              const iTunesUrl = iTunesAlbum?.artworkUrl100 ?? iTunesAlbum?.artworkUrl60;
              iTunesUrl && !ac.signal.aborted && ac.abort();
              const thumbUrl = iTunesUrl?.replace(/(100x100|60x60)/, `${imgRes}x${imgRes}`) ?? bestNativeThumbUrl ?? await getBestThumbnailUrl(videoID);
              if (thumbUrl) {
                log(`Successfully resolved artwork${albumName ? ` for '${primaryArtist} - ${albumName}'` : ". Couldn't find album name, defaulting to best available YT thumbnail"}: ${thumbUrl}`);
                setThumbOverlayUrl(bestNativeThumbUrl ?? thumbUrl, thumbUrl);
              } else warn(`Couldn't get thumbnail URL for album '${primaryArtist} - ${albumName}' or video with ID '${videoID}'`);
            }
          });
        } catch (err) {
          error("Couldn't apply thumbnail URL to overlay due to an error:", err);
        }
      };
      const createElements = async () => {
        try {
          const overlayElem = document.createElement("div");
          overlayElem.id = "bytm-thumbnail-overlay";
          overlayElem.title = "";
          overlayElem.classList.add("bytm-no-select");
          overlayElem.style.display = "none";
          let indicatorElem;
          if (getFeature("thumbnailOverlayShowIndicator")) {
            indicatorElem = document.createElement("img");
            indicatorElem.id = "bytm-thumbnail-overlay-indicator";
            indicatorElem.src = await getResourceUrl("icon-image");
            indicatorElem.role = "presentation";
            indicatorElem.title = indicatorElem.ariaLabel = t("thumbnail_overlay.indicator_tooltip");
            indicatorElem.ariaHidden = "true";
            indicatorElem.style.display = "none";
            indicatorElem.style.opacity = String(getFeature("thumbnailOverlayIndicatorOpacity") / 100);
          }
          const thumbImgElem = document.createElement("img");
          thumbImgElem.id = "bytm-thumbnail-overlay-img";
          thumbImgElem.role = "presentation";
          thumbImgElem.ariaHidden = "true";
          overlayElem.appendChild(thumbImgElem);
          playerEl.appendChild(overlayElem);
          indicatorElem && playerEl.appendChild(indicatorElem);
          siteEvents.on("watchIdChanged", async videoId => {
            overlayState = ThumbOvlState.Off;
            return await Promise.allSettled([ applyThumbUrl(videoId), updateOverlayVisibility() ]);
          });
          const params = new URL(location.href).searchParams;
          if (params.has("v")) {
            applyThumbUrl(params.get("v"));
            updateOverlayVisibility();
          }
          if (toggleBtnShown) {
            const toggleBtnElem = createRipple(document.createElement("a"));
            toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
            toggleBtnElem.role = "button";
            toggleBtnElem.tabIndex = 0;
            toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");
            toggleBtnElem.dataset.state = ThumbOvlState[overlayState];
            onInteraction(toggleBtnElem, e => {
              if (e.shiftKey) return openInTab(toggleBtnElem.href, false);
              const ovlMax = Object.keys(ThumbOvlState).length / 2 - 1;
              overlayState = overflowVal(overlayState + (e.ctrlKey || e.altKey ? -1 : 1), 0, ovlMax);
              if (getCurrentMediaType() === "video" && overlayState === ThumbOvlState.AM) overlayState = ThumbOvlState.Off;
              toggleBtnElem.dataset.state = ThumbOvlState[overlayState];
              applyThumbUrl(new URL(location.href).searchParams.get("v"));
              updateOverlayVisibility(true);
            });
            setInnerHtml(toggleBtnElem, await resourceAsString("icon-image"));
            toggleBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
            addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
              listener: likeContainer => likeContainer.insertAdjacentElement("afterend", toggleBtnElem)
            });
          }
          log("Added thumbnail overlay");
        } catch (err) {
          error("Couldn't create thumbnail overlay elements due to an error:", err);
        }
      };
      addSelectorListener("mainPanel", playerSelector, {
        listener(playerEl) {
          if (playerEl.getAttribute("player-ui-state") === "INACTIVE") {
            const obs = new MutationObserver(() => {
              if (playerEl.getAttribute("player-ui-state") === "INACTIVE") return;
              createElements();
              obs.disconnect();
            });
            obs.observe(playerEl, {
              attributes: true,
              attributeFilter: [ "player-ui-state" ]
            });
          } else createElements();
        }
      });
    });
  }
  async function getBestITunesAlbumMatch(videoId, artistsRaw, albumRaw) {
    if (overlayState === ThumbOvlState.AM) {
      const cacheEntry = (await artCacheStore.loadData()).entries.find(e => e.videoId === videoId);
      if (cacheEntry) {
        log(`Found cached album artwork for video ID ${videoId}:`, cacheEntry);
        return {
          artworkUrl60: cacheEntry.url.replace(/100x100/, "60x60"),
          artworkUrl100: cacheEntry.url.replace(/60x60/, "100x100")
        };
      }
    }
    const doFetchITunesAlbum = async (artist, album) => {
      const albumObjs = await fetchITunesAlbumInfo(artist, album);
      if (albumObjs && albumObjs.length > 0) {
        const bestMatch = albumObjs.find(al => (sanitizeArtists(al.artistName).toLowerCase() === artist.toLowerCase() || sanitizeArtists(al.artistName) === artistsRaw) && (sanitizeSong(al.collectionName).toLowerCase() === sanitizeSong(album).toLowerCase() || sanitizeSong(al.collectionCensoredName).toLowerCase() === sanitizeSong(album).toLowerCase()));
        return [ bestMatch, albumObjs[0] ];
      }
      return [ undefined, albumObjs[0] ];
    };
    const artist = sanitizeArtists(artistsRaw);
    let [bestMatch, fallback] = await doFetchITunesAlbum(artist, albumRaw);
    if (!bestMatch) [bestMatch, fallback] = await doFetchITunesAlbum(artist, albumRaw);
    const match = bestMatch ?? fallback;
    if (match) {
      const entries = (await artCacheStore.loadData()).entries;
      if (!entries.some(e => e.videoId === videoId)) {
        const entry = {
          videoId: videoId,
          url: match.artworkUrl100,
          created: Date.now()
        };
        entries.push(entry);
        log(`Added album artwork template URL for '${artist} - ${albumRaw}' (or video with ID '${videoId}') to cache:`, match.artworkUrl100);
        emitInterface("bytm:artworkCacheEntryAdded", {
          album: albumRaw,
          artist: artist,
          entry: entry
        });
        await artCacheStore.setData({
          entries: entries
        });
      }
    } else warn(`The iTunes API yielded no album info for '${artist} - ${albumRaw}', defaulting to regular YT thumbnail`);
    return match;
  }
  async function initHideCursorOnIdle() {
    addSelectorListener("mainPanel", "ytmusic-player#player", {
      listener(vidContainer) {
        const overlaySelector = "ytmusic-player #song-media-window";
        const overlayElem = document.querySelector(overlaySelector);
        if (!overlayElem) return warn("Couldn't find overlay element while initializing cursor hiding");
        let lastMouseoverElement = null;
        document.body.addEventListener("mouseover", e => {
          const tgt = e.target;
          if (!tgt) return;
          lastMouseoverElement = tgt;
        });
        let isFullscreen = false;
        let cursorHideTimer;
        let hideTransTimer;
        let hidePlayerBarTimer;
        const hidePlayerBar = () => {
          if (lastMouseoverElement && lastMouseoverElement.closest("ytmusic-player-bar")) return;
          if (getFeature("hidePlayerBarOnIdleInFullscreen") && isFullscreen) {
            const playerBar = document.querySelector("ytmusic-player-bar");
            if (playerBar) {
              hidePlayerBarTimer = setTimeout(() => {
                if (playerBar.classList.contains("hidden")) playerBar.style.display = "none";
                hidePlayerBarTimer = undefined;
              }, 300);
              playerBar.classList.add("hidden");
            }
          }
        };
        const hide = () => {
          if (!getFeature("hideCursorOnIdle")) return;
          if (vidContainer.classList.contains("bytm-cursor-hidden")) return;
          if (lastMouseoverElement && lastMouseoverElement.closest("ytmusic-player-bar")) return;
          overlayElem.style.opacity = ".000001 !important";
          hideTransTimer = setTimeout(() => {
            overlayElem.style.display = "none";
            vidContainer.style.cursor = "none";
            vidContainer.classList.add("bytm-cursor-hidden");
            hideTransTimer = undefined;
            hidePlayerBar();
          }, 200);
        };
        const showPlayerBar = () => {
          const playerBar = document.querySelector("ytmusic-player-bar");
          if (playerBar && playerBar.classList.contains("hidden")) {
            if (hidePlayerBarTimer !== undefined) {
              clearTimeout(hidePlayerBarTimer);
              hidePlayerBarTimer = undefined;
            }
            playerBar.style.display = "";
            playerBar.classList.remove("hidden");
          }
        };
        siteEvents.on("fullscreenToggled", fsEnabled => {
          isFullscreen = fsEnabled;
          if (!getFeature("hidePlayerBarOnIdleInFullscreen")) return;
          if (!fsEnabled) showPlayerBar(); else if ((!lastMouseoverElement || !lastMouseoverElement.closest("ytmusic-player-bar")) && vidContainer.classList.contains("bytm-cursor-hidden")) hidePlayerBar();
        });
        const show = () => {
          hideTransTimer && clearTimeout(hideTransTimer);
          if (!vidContainer.classList.contains("bytm-cursor-hidden")) return;
          vidContainer.classList.remove("bytm-cursor-hidden");
          vidContainer.style.cursor = "initial";
          overlayElem.style.display = "initial";
          overlayElem.style.opacity = "1 !important";
          showPlayerBar();
        };
        const cursorHideTimerCb = () => cursorHideTimer = setTimeout(hide, getFeature("hideCursorOnIdleDelay") * 1e3);
        const onMove = () => {
          cursorHideTimer && clearTimeout(cursorHideTimer);
          show();
          cursorHideTimerCb();
        };
        vidContainer.addEventListener("mousemove", CoreUtils.debounce(onMove, 150), {
          capture: true
        });
        vidContainer.addEventListener("mouseleave", () => {
          cursorHideTimer && clearTimeout(cursorHideTimer);
          hideTransTimer && clearTimeout(hideTransTimer);
          hide();
        }, {
          capture: true
        });
        vidContainer.addEventListener("click", e => {
          if (e.target?.closest("#themesongControlButtonsContainer")) return;
          show();
          cursorHideTimerCb();
          setTimeout(hide, 3e3);
        }, {
          capture: true
        });
        log("Initialized cursor hiding on idle");
      }
    });
  }
  async function fixHdrIssues() {
    if (!await addStyleFromResource("css-fix_hdr")) error("Couldn't load stylesheet to fix HDR issues"); else log("Fixed HDR issues");
  }
  async function initShowVotes() {
    addSelectorListener("playerBar", ".middle-controls-buttons ytmusic-like-button-renderer", {
      async listener(voteCont) {
        try {
          const videoID = getWatchId();
          if (!videoID) {
            await siteEvents.once("watchIdChanged");
            return initShowVotes();
          }
          const voteObj = await fetchVideoVotes(videoID);
          if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj)) return error("Couldn't fetch votes from the Return YouTube Dislike API");
          if (getFeature("showVotes")) {
            addVoteNumbers(voteCont, voteObj);
            siteEvents.on("watchIdChanged", async videoID => {
              const labelLikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.likes");
              const labelDislikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.dislikes");
              if (!labelLikes || !labelDislikes) return error("Couldn't find vote label elements while updating like and dislike counts");
              if (labelLikes.dataset.watchId === videoID && labelDislikes.dataset.watchId === videoID) return log("Vote labels already updated for this video");
              const voteObj = await fetchVideoVotes(videoID);
              if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj)) return error("Couldn't fetch votes from the Return YouTube Dislike API");
              const likesLabelText = tp("vote_label_likes", voteObj.likes, formatNumber(voteObj.likes, "long"));
              const dislikesLabelText = tp("vote_label_dislikes", voteObj.dislikes, formatNumber(voteObj.dislikes, "long"));
              labelLikes.dataset.watchId = getWatchId() ?? "";
              labelLikes.textContent = formatNumber(voteObj.likes);
              labelLikes.title = labelLikes.ariaLabel = likesLabelText;
              labelDislikes.textContent = formatNumber(voteObj.dislikes);
              labelDislikes.title = labelDislikes.ariaLabel = dislikesLabelText;
              labelDislikes.dataset.watchId = getWatchId() ?? "";
              addSelectorListener("playerBar", "ytmusic-like-button-renderer#like-button-renderer", {
                listener: bar => upsertVoteBtnLabels(bar, likesLabelText, dislikesLabelText)
              });
            });
          }
        } catch (err) {
          error("Couldn't initialize show votes feature due to an error:", err);
        }
      }
    });
  }
  function addVoteNumbers(voteCont, voteObj) {
    const likeBtn = voteCont.querySelector("#button-shape-like");
    const dislikeBtn = voteCont.querySelector("#button-shape-dislike");
    if (!likeBtn || !dislikeBtn) return error("Couldn't find like or dislike button while adding vote numbers");
    const likeBtnCont = document.createElement("div");
    likeBtnCont.id = "bytm-like-btn-cont";
    UserUtils.addParent(likeBtn, likeBtnCont);
    const dislikeBtnCont = document.createElement("div");
    dislikeBtnCont.id = "bytm-dislike-btn-cont";
    UserUtils.addParent(dislikeBtn, dislikeBtnCont);
    const createLabel = (amount, type) => {
      const label = document.createElement("span");
      label.classList.add("bytm-vote-label", "bytm-no-select", type);
      label.textContent = String(formatNumber(amount));
      label.title = label.ariaLabel = tp(`vote_label_${type}`, amount, formatNumber(amount, "long"));
      label.dataset.watchId = getWatchId() ?? "";
      label.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        (type === "likes" ? likeBtn : dislikeBtn).querySelector("button")?.click();
      });
      return label;
    };
    const updateLabels = async () => {
      const {likeState: likeState} = getLikeDislikeBtns();
      const voteObj = await fetchVideoVotes(getWatchId());
      if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj)) return error("Couldn't fetch votes from the Return YouTube Dislike API");
      const likeLbl = voteCont.querySelector(".bytm-vote-label.likes");
      const dislikeLbl = voteCont.querySelector(".bytm-vote-label.dislikes");
      const likeNum = voteObj.likes + (likeState === "LIKE" ? 1 : 0);
      const dislikeNum = voteObj.dislikes + (likeState === "DISLIKE" ? 1 : 0);
      if (likeLbl) {
        likeLbl.textContent = String(formatNumber(likeNum));
        likeLbl.title = likeLbl.ariaLabel = tp("vote_label_likes", likeNum, formatNumber(likeNum, "long"));
      }
      if (dislikeLbl) {
        dislikeLbl.textContent = String(formatNumber(dislikeNum));
        dislikeLbl.title = dislikeLbl.ariaLabel = tp("vote_label_dislikes", dislikeNum, formatNumber(dislikeNum, "long"));
      }
    };
    const {btnRenderer: btnRenderer} = getLikeDislikeBtns();
    if (btnRenderer) {
      const rendererObs = new MutationObserver(() => updateLabels());
      rendererObs.observe(btnRenderer, {
        attributes: true,
        attributeFilter: [ "like-status" ],
        childList: false,
        subtree: false
      });
      siteEvents.on("pathChanged", () => {
        rendererObs.disconnect();
        updateLabels();
      });
    }
    addStyleFromResource("css-show_votes").catch(e => error("Couldn't add CSS for show votes feature due to an error:", e));
    const likeLblEl = createLabel(voteObj.likes, "likes");
    likeBtn.insertAdjacentElement("afterend", likeLblEl);
    const dislikeLblEl = createLabel(voteObj.dislikes, "dislikes");
    dislikeBtn.insertAdjacentElement("afterend", dislikeLblEl);
    upsertVoteBtnLabels(voteCont, likeLblEl.title, dislikeLblEl.title);
    log("Added vote number labels to like and dislike buttons");
    forceEmitSiteEvent("voteLabelsAdded");
  }
  function upsertVoteBtnLabels(parentEl, likesLabelText, dislikesLabelText) {
    const likeBtn = parentEl.querySelector("#button-shape-like button");
    const dislikeBtn = parentEl.querySelector("#button-shape-dislike button");
    if (likeBtn) likeBtn.title = likeBtn.ariaLabel = likesLabelText;
    if (dislikeBtn) dislikeBtn.title = dislikeBtn.ariaLabel = dislikesLabelText;
  }
  async function initSwapLikeDislikeBtns() {
    const err = err => error('Couldn\'t initialize "swap like and dislike buttons" feature due to an error' + err ? ":" : "", err);
    try {
      if (!getFeature("swapLikeDislikeButtons")) return;
      if (await addStyleFromResource("css-swap_like_dislike_btns")) log('Initialized "swap like and dislike buttons" feature'); else err();
    } catch (e) {
      err(e);
    }
  }
  async function initWatchPageFullSize() {
    if (!await addStyleFromResource("css-watch_page_full_size")) error("Couldn't load stylesheet to make watch page full size"); else log("Made watch page full size");
  }
  async function initTruncatePlayerBarSubtitles() {
    if (!await addStyleFromResource("css-truncate_player_bar_subtitles")) error("Couldn't load stylesheet to truncate player bar subtitles"); else log("Truncated player bar subtitles");
  }
  var formatVersion = 0;
  var domains = [ {
    id: "ytm",
    name: "YouTube Music",
    nameShort: "YT Music",
    abbr: "YTM",
    hostnames: [ "music.youtube.com" ]
  }, {
    id: "yt",
    name: "YouTube",
    nameShort: "YT",
    abbr: "YT",
    hostnames: [ "www.youtube.com", "youtube.com", "youtu.be", "m.youtube.com" ]
  } ];
  var alerts = [];
  var selectors = {};
  var defaultStaticData = {
    formatVersion: formatVersion,
    domains: domains,
    alerts: alerts,
    selectors: selectors
  };
  const remoteDataUrl = `https://raw.githubusercontent.com/${repo}/refs/heads/main/assets/data.json`;
  const staticDataFormatVersion = 0;
  let staticData;
  async function getStaticData() {
    try {
      if (staticData) return staticData;
      const res = await CoreUtils.fetchAdvanced(remoteDataUrl, {
        timeout: 1e4
      });
      if (res.ok) {
        const data = await res.json();
        if (isStaticData(data)) {
          info("Successfully fetched remote static data:", data);
          return staticData = data;
        } else warn("Remote static data is in an unsupported format, falling back to bundled data:", getterifyObj(defaultStaticData));
      }
      return staticData = defaultStaticData;
    } catch (e) {
      warn(`Failed to fetch remote static data from '${remoteDataUrl}' due to a non-fatal error:`, e);
      info("Falling back to the bundled static data:", getterifyObj(defaultStaticData));
      return staticData = defaultStaticData;
    }
  }
  function getDefaultStaticData() {
    return defaultStaticData;
  }
  function isStaticData(data) {
    return typeof data === "object" && data !== null && "formatVersion" in data && typeof data.formatVersion === "number" && data.formatVersion === staticDataFormatVersion && "domains" in data && typeof data.domains === "object" && Array.isArray(data.domains) && "selectors" in data && typeof data.selectors === "object" && "alerts" in data && typeof data.alerts === "object" && Array.isArray(data.alerts);
  }
  const alertsStore = new CoreUtils.DataStore({
    id: "bytm-alerts",
    defaultData: {
      dismissed: []
    },
    formatVersion: 0,
    engine: new UserUtils.GMStorageEngine,
    memoryCache: false,
    compressionFormat: null
  });
  async function checkActiveAlerts({alerts: alerts}, alertsData) {
    const activeAlerts = alerts.filter(alert => isAlertActive(alert, alertsData));
    for (const alert of activeAlerts) {
      const dlg = createAlertDialog(alert);
      await dlg.open();
      await dlg.once("close");
      alertsData = await alertsStore.loadData();
      await alertsStore.setData({
        dismissed: [ alert.id, ...alertsData.dismissed ]
      });
    }
  }
  function isAlertActive(alert, alertsData) {
    if (alertsData.dismissed.includes(alert.id)) return false;
    if (alert.domains.length === 0) return false;
    if (!alert.domains.includes(getDomain())) return false;
    if (alert.versionMin && compareVersions.compareVersions(alert.versionMin, scriptInfo$1.version) > 0) return false;
    if (alert.versionMax && compareVersions.compareVersions(alert.versionMax, scriptInfo$1.version) < 0) return false;
    const now = new Date;
    if (alert.dateMin && new Date(alert.dateMin) > now) return false;
    if (alert.dateMax && new Date(alert.dateMax) < now) return false;
    return true;
  }
  function createAlertDialog(alert) {
    return new MarkdownDialog({
      id: "static-data-alert",
      height: 500,
      width: 600,
      small: true,
      destroyOnClose: true,
      closeOnBgClick: !alert.important,
      closeOnEscPress: !alert.important,
      async renderHeader() {
        const headerEl = document.createElement("div");
        headerEl.id = "bytm-static-data-alert-dialog-header";
        headerEl.classList.add("bytm-flex-row");
        setInnerHtml(headerEl, await resourceAsString("icon-alert"));
        const header = document.createElement("h2");
        header.classList.add("bytm-dialog-title");
        header.role = "heading";
        header.ariaLevel = "1";
        header.tabIndex = 0;
        header.textContent = header.ariaLabel = resolveTranslatable(alert.title);
        headerEl.appendChild(header);
        return headerEl;
      },
      renderFooter() {
        const footer = document.createElement("div");
        footer.classList.add("bytm-dialog-footer", "align-right");
        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.textContent = closeBtn.ariaLabel = t("prompt_dismiss");
        onInteraction(closeBtn, () => {
          const titleCloseBtn = document.querySelector("#bytm-md-static-data-alert-dialog .bytm-dialog-close");
          if (titleCloseBtn) titleCloseBtn.click(); else warn("Couldn't find the alert dialog's close button to trigger a click on it, closing the dialog won't work properly:", titleCloseBtn);
        });
        footer.appendChild(closeBtn);
        return footer;
      },
      body: resolveTranslatable(alert.message),
      modifyBodyElements(_bw, mdCont) {
        mdCont.ariaLive = "polite";
        mdCont.ariaAtomic = "true";
      }
    });
  }
  async function initStaticData() {
    const staticData = await getStaticData();
    const alertsData = await alertsStore.loadData();
    await Promise.all([ checkActiveAlerts(staticData, alertsData) ]);
  }
  let serializer;
  let fullSerializer;
  const getSerializerStores = () => [ configStore, autoLikeStore, alertsStore ];
  const getSerializerStoresFull = () => [ ...getSerializerStores(), artCacheStore, lyricsCacheStore, resourceCacheStore ];
  function getDSSerializer(full = false) {
    if (!full) return serializer ?? (serializer = new CoreUtils.DataStoreSerializer(getSerializerStores(), {
      addChecksum: true,
      ensureIntegrity: true
    })); else return fullSerializer ?? (fullSerializer = new CoreUtils.DataStoreSerializer(getSerializerStoresFull(), {
      addChecksum: true,
      ensureIntegrity: true
    }));
  }
  async function downloadData(useEncoding = true, full = false) {
    const serializer = getDSSerializer(full);
    const fileName = t(`data_export_file_name${full ? "_full" : ""}`, {
      scriptName: scriptInfo$1.name,
      version: packageJson.version,
      date: (new Date).toISOString()
    });
    const data = JSON.stringify(JSON.parse(await serializer.serialize(useEncoding)), undefined, 2);
    downloadFile(fileName, data, "application/json");
  }
  const broadcastTxID = CoreUtils.randomId(10, 36);
  const broadcastEngDSOpts = {
    id: "bytm-broadcast",
    encodeData: [ null, d => d ],
    decodeData: [ null, d => d ]
  };
  const broadcastEng = new UserUtils.GMStorageEngine({
    dataStoreOptions: broadcastEngDSOpts
  });
  const receivedNonces = new Set;
  function initBroadcast() {
    if ("addValueChangeListener" in GM) {
      GM.addValueChangeListener(broadcastEngDSOpts.id, (_name, _oldData, newData, isRemote) => {
        try {
          if (typeof newData === "string" && newData.trim().startsWith("{") && newData.trim().endsWith("}")) newData = JSON.parse(newData);
        } catch (e) {
          warn("Failed to parse broadcast packet as object:", newData, e);
        }
        if (isRemote && typeof newData === "object" && newData !== null && "packet" in newData && newData.packet !== null) relayBroadcastPacket(newData.packet);
      });
    } else error(`${GM_info.scriptHandler} doesn't have GM.addValueChangeListener support, inter-session communication will not work!`);
    getSerializerStoresFull().forEach(store => {
      store.on("updateData", CoreUtils.debounce(() => {
        emitBroadcast({
          type: "dataStoreUpdate",
          data: {
            id: store.id
          }
        });
        getFeature("logEvents") && log(`Emitted broadcast packet for updated DataStore with ID "${store.id}"`);
      }, 100));
    });
    siteEvents.on("broadcast", handleBroadcastPacket);
    info(`Initialized broadcast module with TxID "${broadcastTxID}"`);
  }
  async function handleBroadcastPacket(type, {from: from, to: to, packet: packet}) {
    if (from === broadcastTxID) return;
    if (Array.isArray(to) && !to.includes(broadcastTxID)) return;
    switch (type) {
     case "dataStoreUpdate":
      {
        const data = packet.data;
        try {
          await (getSerializerStoresFull().find(s => s.id === data.id)?.loadData());
          if (data.id === configStore.id) emitSiteEvent("configChanged", configStore.getData());
          getFeature("logEvents") && log(`Received "dataStoreUpdate" packet for DataStore with ID "${data.id}", reloaded data for that store`);
        } catch (err) {
          log(`Error while handling "dataStoreUpdate" packet for DataStore with ID "${data.id}":`, err);
        }
        break;
      }

     case "reloadTabs":
      await reloadTab();
      break;

     case "discoverSessions":
      emitBroadcast({
        type: "discoverSessionsReply",
        data: {
          sessionId: getSessionId(),
          title: document.title,
          domain: getDomain(),
          initTime: initTime
        }
      }, [ from ]);
      getFeature("logEvents") && log(`Replied to "discoverSessions" packet from session "${from}" with this session's TxID "${broadcastTxID}"`);
      break;
    }
  }
  async function emitBroadcast(packet, to) {
    const nonce = Date.now() % 16777215 + Math.random();
    return await broadcastEng.setValue(broadcastEngDSOpts.id, JSON.stringify({
      packet: {
        from: broadcastTxID,
        to: to,
        packet: packet,
        nonce: nonce
      }
    }));
  }
  function isValidTransitBroadcastPacket(obj) {
    return typeof obj === "object" && obj !== null && typeof obj.from === "string" && (obj.to === undefined || Array.isArray(obj.to) && obj.to.every(id => typeof id === "string")) && typeof obj.packet === "object" && obj.packet !== null && typeof obj.packet.type === "string" && (typeof obj.packet.data === "object" && obj.packet.data !== null || obj.packet.data === undefined) && typeof obj.nonce === "number";
  }
  function relayBroadcastPacket(packet) {
    if (!isValidTransitBroadcastPacket(packet)) return warn("Received invalid broadcast packet, ignoring:", packet);
    if (receivedNonces.has(packet.nonce)) return warn("Received broadcast packet with nonce that was already received, ignoring:", packet);
    if (receivedNonces.size >= 10) {
      const oldestNonce = receivedNonces.values().next().value;
      oldestNonce && receivedNonces.delete(oldestNonce);
    }
    receivedNonces.add(packet.nonce);
    if (packet.from === broadcastTxID || Array.isArray(packet.to) && !packet.to.includes(broadcastTxID ?? "")) return;
    if (getFeature("logEvents")) log(`Received broadcast packet of type "${packet.packet.type}" from session "${packet.from}":`, packet);
    const packetClean = CoreUtils.pureObj(packet);
    forceEmitSiteEvent("broadcast", packet.packet.type, packetClean);
    forceEmitSiteEvent(`broadcast:${packet.packet.type}`, packetClean);
  }
  let domain;
  function getDomain() {
    const staticData = getDefaultStaticData();
    const staticDomainInfo = staticData.domains.find(dom => dom.hostnames.some(hn => location.hostname === hn));
    if (domain) return domain; else if (staticDomainInfo) return domain = staticDomainInfo.id; else throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
  }
  function getSessionId() {
    try {
      if (!sessionStorageAvailable$1) throw new Error("Session storage unavailable");
      let sesId = window.sessionStorage.getItem("_bytm-session-id");
      if (!sesId) window.sessionStorage.setItem("_bytm-session-id", sesId = CoreUtils.randomId(10, 36));
      return sesId;
    } catch (err) {
      warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
      return null;
    }
  }
  let isCompressionSupported;
  async function compressionSupported() {
    if (typeof isCompressionSupported === "boolean") return isCompressionSupported;
    try {
      await CoreUtils.compress(".", compressionFormat$1, "string");
      return isCompressionSupported = true;
    } catch {
      return isCompressionSupported = false;
    }
  }
  function getWatchId() {
    const {searchParams: searchParams, pathname: pathname} = new URL(location.href);
    return pathname.includes("/watch") ? searchParams.get("v") : null;
  }
  function getCurrentChannelId() {
    return parseChannelIdFromUrl(location.href);
  }
  function parseChannelIdFromUrl(url) {
    try {
      const {pathname: pathname} = url instanceof URL ? url : new URL(url);
      if (pathname.includes("/channel/")) return sanitizeChannelId(pathname.split("/channel/")[1].split("/")[0]); else if (pathname.includes("/@")) return sanitizeChannelId(pathname.split("/@")[1].split("/")[0]); else return null;
    } catch {
      return null;
    }
  }
  function sanitizeChannelId(channelId) {
    channelId = String(channelId).trim();
    return isValidChannelId(channelId) || channelId.startsWith("@") ? channelId : `@${channelId}`;
  }
  function isValidChannelId(channelId) {
    return channelId.match(/^(UC|@)[a-zA-Z0-9_-]+$/) !== null;
  }
  function getThumbnailUrl(videoID, qualityOrIndex = "maxresdefault") {
    return `https://img.youtube.com/vi/${videoID}/${qualityOrIndex}.jpg`;
  }
  async function getBestThumbnailUrl(videoID) {
    try {
      const priorityList = [ "maxresdefault", "sddefault", "hqdefault", 0 ];
      for (const quality of priorityList) {
        let response;
        const url = getThumbnailUrl(videoID, quality);
        try {
          response = await sendRequest({
            url: url,
            method: "HEAD",
            timeout: 6e3
          });
        } catch (err) {
          error(`Error while sending HEAD request to thumbnail URL for video ID '${videoID}' with quality '${quality}':`, err);
        }
        if (response && response.status < 300 && response.status >= 200) return url;
      }
    } catch (err) {
      throw new Error(`Couldn't get thumbnail URL for video ID '${videoID}': ${err}`, {
        cause: err
      });
    }
  }
  function openInTab(href, background = false) {
    try {
      UserUtils.openInNewTab(href, background);
    } catch {
      window.open(href, "_blank", "noopener noreferrer");
    }
  }
  async function tryToDecompressAndParse(input) {
    let parsed;
    const val = await CoreUtils.consumeStringGen(input);
    try {
      parsed = JSON.parse(val);
    } catch {
      try {
        parsed = JSON.parse(await CoreUtils.decompress(val, compressionFormat$1, "string"));
      } catch (err) {
        error("Couldn't decompress and parse data.", err);
        return null;
      }
    }
    await CoreUtils.pauseFor(CoreUtils.randRange(400, 800));
    return parsed;
  }
  function getOS() {
    if (navigator.userAgent.match(/mac(\s?os|intel)/i)) return "mac";
    return "other";
  }
  function formatNumber(num, notation) {
    return num.toLocaleString(getLocale(), (notation ?? getFeature("numbersFormat")) === "short" ? {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1
    } : {
      style: "decimal",
      maximumFractionDigits: 0
    });
  }
  const reloadTabStore = new CoreUtils.DataStore({
    id: "bytm-reload-tab",
    engine: new UserUtils.GMStorageEngine,
    formatVersion: 0,
    compressionFormat: null,
    memoryCache: false,
    defaultData: {
      entries: []
    }
  });
  const reloadTabEntryMaxTTL = 1e3 * 60 * 60 * 24;
  async function getReloadTabData(sessionId, deleteAfterRead = true) {
    try {
      if (!sessionId) sessionId = getSessionId();
      const data = await reloadTabStore.loadData();
      let entries = [ ...data.entries ];
      const sesEntry = entries.find(e => e.sessionId === sessionId) ?? null;
      entries = data.entries.filter(e => deleteAfterRead && sesEntry ? e.sessionId !== sessionId : true);
      entries = entries.filter(e => Date.now() - e.timestamp < reloadTabEntryMaxTTL);
      await reloadTabStore.setData({
        ...data,
        entries: entries
      });
      return sesEntry;
    } catch (err) {
      error("Couldn't get reload tab data, sessionStorage might be unavailable:", err);
      return null;
    }
  }
  const reloadTabVideoTimeThreshold = 3;
  async function reloadTab() {
    const win = UserUtils.getUnsafeWindow();
    try {
      enableDiscardBeforeUnload();
      if ((getVideoElement()?.readyState ?? 0) > 0) {
        const time = await getVideoTime(0) ?? 0;
        const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider");
        const volume = sliderElem ? Number(sliderElem.value) : Math.round(getVideoElement().volume * 100);
        const url = new URL(win.location.href);
        if (!isNaN(time) && time > reloadTabVideoTimeThreshold) url.searchParams.set("time_continue", String(time));
        if (!isNaN(volume) && volume > 0) {
          const reloadTabData = await reloadTabStore.loadData();
          if (reloadTabData.entries.find(e => e.sessionId === getSessionId())) reloadTabData.entries = reloadTabData.entries.filter(e => e.sessionId !== getSessionId());
          reloadTabData.entries.push({
            sessionId: getSessionId(),
            timestamp: Date.now(),
            volume: volume,
            time: !isNaN(time) && time > reloadTabVideoTimeThreshold ? time : null
          });
          await reloadTabStore.setData(reloadTabData);
        }
        return win.location.replace(url);
      }
      win.location.reload();
    } catch (err) {
      error("Couldn't save video time and volume before reloading tab:", err);
      win.location.reload();
    }
  }
  async function reloadAllTabs(reloadSelf = true, toTxIDs) {
    info(`Emitting broadcast to reload ${"all tabs"}${reloadSelf ? ", then self-reloading" : ""}.`);
    emitBroadcast({
      type: "reloadTabs"
    }, toTxIDs);
    return reloadSelf ? await (async () => {
      await CoreUtils.pauseFor(30);
      return await reloadTab();
    })() : undefined;
  }
  function scrollToCurrentSongInQueue(evt) {
    addSelectorListener("sidePanel", 'ytmusic-player-queue ytmusic-player-queue-item[play-button-state="loading"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state="playing"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state="paused"]', {
      listener(activeItem) {
        activeItem.scrollIntoView({
          behavior: evt?.shiftKey ? "instant" : "smooth",
          block: evt?.ctrlKey || evt?.altKey ? "start" : "center",
          inline: "center"
        });
        log("Scrolled to active song in queue:", activeItem);
      }
    });
  }
  function overflowVal(value, minOrMax, max) {
    const min = typeof max === "number" ? minOrMax : 0;
    max = typeof max === "number" ? max : minOrMax;
    if (min > max) throw new RangeError('Parameter "min" can\'t be bigger than "max"');
    if (isNaN(value) || isNaN(min) || isNaN(max) || !isFinite(value) || !isFinite(min) || !isFinite(max)) return NaN;
    if (value >= min && value <= max) return value;
    const range = max - min + 1;
    const wrappedValue = ((value - min) % range + range) % range + min;
    return wrappedValue;
  }
  function getterifyObj(obj) {
    const newObj = {};
    for (const key in obj) {
      Object.defineProperty(newObj, key, {
        get: () => obj[key],
        enumerable: true,
        configurable: true
      });
    }
    return newObj;
  }
  let verSessions;
  async function initVersionSessionCounter() {
    verSessions = JSON.parse(await GM.getValue("bytm-version-session-counter", "{}"));
    if (typeof verSessions !== "object" || verSessions === null) verSessions = {};
    if (typeof verSessions?.[scriptInfo$1.version] !== "object" || typeof verSessions?.[scriptInfo$1.version]?.count !== "number") verSessions[scriptInfo$1.version] = {
      count: 1
    }; else verSessions[scriptInfo$1.version].count++;
    await GM.setValue("bytm-version-session-counter", JSON.stringify(verSessions));
    return verSessions[scriptInfo$1.version].count;
  }
  function getVersionSessionCount(version = scriptInfo$1.version) {
    if (!verSessions) throw new Error("Version session counter not initialized yet, call initVersionSessionCounter() first");
    if (typeof verSessions[version] !== "object" || typeof verSessions[version].count !== "number") return 0;
    return verSessions[version].count;
  }
  async function getResourceUrl(name) {
    const resObjOrStr = resourcesJson.resources?.[name];
    if (typeof resObjOrStr === "object" || typeof resObjOrStr === "string") {
      const pathName = typeof resObjOrStr === "object" && "path" in resObjOrStr ? resObjOrStr?.path : resObjOrStr;
      const ghRef = typeof resObjOrStr === "object" && "ref" in resObjOrStr ? resObjOrStr?.ref : buildNumber$1;
      if (pathName) {
        return pathName.startsWith("http") ? pathName : (() => {
          let path = pathName;
          if (path.startsWith("/")) path = path.slice(1); else path = `assets/${path}`;
          switch (assetSource) {
           case "jsdelivr":
            return `https://cdn.jsdelivr.net/gh/${repo}@${ghRef}/${path}`;

           case "github":
            return `https://raw.githubusercontent.com/${repo}/${ghRef}/${path}`;

           case "local":
            return `http://localhost:${devServerPort}/${path}`;
          }
        })();
      }
    }
    warn(`Couldn't get blob URL nor external URL for the resource '${name}', attempting to use base64-encoded data: URI fallback`);
    return await GM.getResourceUrl(name, false);
  }
  const resourceCacheTTL = 1e3 * 60 * 60 * 24 * 7;
  const resourceCacheKey = mode$1 === "development" ? scriptInfo$1.version : buildNumber$1;
  const resourceCacheStore = new CoreUtils.DataStore({
    id: "bytm-resource-cache",
    formatVersion: 0,
    engine: new UserUtils.GMStorageEngine,
    compressionFormat: compressionFormat$1,
    defaultData: {
      resources: {},
      created: Date.now(),
      cacheKey: resourceCacheKey
    }
  });
  const cachedResourcePrefixes = [ "doc-", "icon-", "img-", "style-", "trans-" ];
  async function initResourceCache() {
    await resourceCacheStore.loadData();
  }
  async function resourceCacheHas(key) {
    if (resourceCacheStore.getData().cacheKey !== resourceCacheKey) {
      await resourceCacheStore.saveDefaultData();
      return false;
    }
    const val = resourceCacheGet(key);
    return val !== undefined && val !== null && val.length > 0;
  }
  function resourceCacheGet(key) {
    return resourceCacheStore.getData().resources[key] ?? null;
  }
  async function resourceCacheSet(key, val) {
    const data = resourceCacheStore.getData();
    data.resources[key] = val;
    data.created = Date.now();
    return await resourceCacheStore.setData(data);
  }
  async function resourceAsString(resourceKey) {
    if (typeof isCompressionSupported === "undefined") await compressionSupported();
    if (Date.now() - resourceCacheStore.getData().created > resourceCacheTTL) await resourceCacheStore.saveDefaultData(); else if (await resourceCacheHas(resourceKey)) return resourceCacheGet(resourceKey);
    const resourceUrl = await getResourceUrl(resourceKey);
    try {
      if (!resourceUrl) throw new Error(`Couldn't find URL for resource '${resourceKey}'`);
      const res = await CoreUtils.fetchAdvanced(resourceUrl);
      if (!res.ok) throw new Error(`Couldn't fetch resource '${resourceKey}' at URL '${resourceUrl}' with status ${res.status} (${res.statusText})`);
      const str = await res.text();
      if (cachedResourcePrefixes.some(prefix => resourceKey.startsWith(prefix))) await resourceCacheSet(resourceKey, str);
      return str;
    } catch (err) {
      error(`Couldn't fetch resource '${resourceKey}' as string from URL '${resourceUrl}' due to an error:`, err);
      return null;
    }
  }
  function getPreferredLocale() {
    const sanEq = (str1, str2) => str1.trim().toLowerCase() === str2.trim().toLowerCase();
    const allNavLangs = [ ...new Set([ navigator.language, ...navigator.languages ]) ].map(v => v.replace(/_/g, "-"));
    for (const navLang of allNavLangs) {
      const resolvedLoc = Object.entries(localesJson).find(([key, {altLocales: altLocales}]) => sanEq(key, navLang) || altLocales.find(altLoc => sanEq(altLoc, navLang)))?.[0];
      if (resolvedLoc) return resolvedLoc.trim();
      const navLangTrimmed = navLang.split("-")[0];
      const resolvedFallbackLang = Object.entries(localesJson).find(([key, {altLocales: altLocales}]) => sanEq(key.split("-")[0], navLangTrimmed) || altLocales.find(al => sanEq(al.split("-")[0], navLangTrimmed)))?.[0];
      if (resolvedFallbackLang) return resolvedFallbackLang.trim();
    }
    return "en-US";
  }
  async function parseMarkdown(mdString, sanitize = true) {
    const mdHtml = await marked.marked.parse(mdString, {
      async: true,
      breaks: true,
      gfm: true,
      silent: true
    });
    return sanitize ? sanitizeHtml(mdHtml) : mdHtml;
  }
  async function getChangelogMd() {
    const clRes = await CoreUtils.fetchAdvanced(changelogUrl);
    log("Fetched changelog:", clRes);
    return await clRes.text();
  }
  async function getChangelogHtmlWithDetails() {
    try {
      const changelogMd = await getChangelogMd();
      let changelogHtml = await parseMarkdown(changelogMd, false);
      const getVerId = verStr => verStr.trim().replace(/[._#\s-]/g, "");
      changelogHtml = changelogHtml.replace(/<div\s+class="split">\s?<\/div>(\s+)?\n?(\s+)?<br(\s\/)?>/gm, '</details>\n<br>\n<details class="bytm-changelog-version-details">');
      const h2Matches = Array.from(changelogHtml.matchAll(/<h2(\s+id=".+")?>([\d\w\s.]+)<\/h2>/gm));
      for (const [fullMatch, , verStr] of h2Matches) changelogHtml = changelogHtml.replace(fullMatch, `<summary tab-index="0"><h2 id="${getVerId(verStr)}" role="subheading" aria-level="1">${verStr}</h2></summary>`);
      changelogHtml = `<details class="bytm-changelog-version-details">${changelogHtml}</details>`;
      return sanitizeHtml(changelogHtml);
    } catch (err) {
      error("Couldn't fetch or parse changelog:", err);
      return `Error while preparing changelog: ${err}`;
    }
  }
  let pluginListDialog = null;
  async function getPluginListDialog() {
    return pluginListDialog ?? (pluginListDialog = new BytmDialog({
      id: "plugin-list",
      width: 900,
      height: 600,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      destroyOnClose: true,
      small: true,
      renderHeader: renderHeader$1,
      renderBody: renderBody$1
    }));
  }
  async function renderHeader$1() {
    const titleElem = document.createElement("h2");
    titleElem.id = "bytm-plugin-list-title";
    titleElem.classList.add("bytm-dialog-title");
    titleElem.role = "heading";
    titleElem.ariaLevel = "1";
    titleElem.tabIndex = 0;
    titleElem.textContent = t("plugin_list.title");
    return titleElem;
  }
  async function renderBody$1() {
    const listContainerEl = document.createElement("div");
    listContainerEl.id = "bytm-plugin-list-container";
    const registeredPlugins = getRegisteredPlugins();
    if (registeredPlugins.length === 0) {
      const noPluginsEl = document.createElement("div");
      noPluginsEl.classList.add("bytm-plugin-list-no-plugins");
      noPluginsEl.tabIndex = 0;
      setInnerHtml(noPluginsEl, t("plugin_list.no_plugins", `<a class="bytm-link" href="${packageJson.homepage}#plugins" target="_blank" rel="noopener noreferrer">`, "</a>"));
      noPluginsEl.title = noPluginsEl.ariaLabel = t("plugin_list.no_plugins_tooltip");
      listContainerEl.appendChild(noPluginsEl);
      return listContainerEl;
    }
    for (const [, {def: {plugin: plugin, intents: intentsRaw}}] of registeredPlugins) {
      const rowEl = document.createElement("div");
      rowEl.classList.add("bytm-plugin-list-row");
      const leftEl = document.createElement("div");
      leftEl.classList.add("bytm-plugin-list-row-left");
      rowEl.appendChild(leftEl);
      const headerWrapperEl = document.createElement("div");
      headerWrapperEl.classList.add("bytm-plugin-list-row-header-wrapper");
      leftEl.appendChild(headerWrapperEl);
      if (plugin.iconUrl) {
        const iconEl = document.createElement("img");
        iconEl.classList.add("bytm-plugin-list-row-icon");
        iconEl.src = plugin.iconUrl;
        iconEl.alt = "";
        headerWrapperEl.appendChild(iconEl);
      }
      const headerEl = document.createElement("div");
      headerEl.classList.add("bytm-plugin-list-row-header");
      headerWrapperEl.appendChild(headerEl);
      const titleEl = document.createElement("div");
      titleEl.classList.add("bytm-plugin-list-row-title");
      titleEl.tabIndex = 0;
      titleEl.textContent = titleEl.title = titleEl.ariaLabel = plugin.name;
      headerEl.appendChild(titleEl);
      const verEl = document.createElement("span");
      verEl.classList.add("bytm-plugin-list-row-version");
      verEl.textContent = verEl.title = verEl.ariaLabel = `v${plugin.version}`;
      titleEl.appendChild(verEl);
      const namespaceEl = document.createElement("div");
      namespaceEl.classList.add("bytm-plugin-list-row-namespace");
      namespaceEl.tabIndex = 0;
      namespaceEl.textContent = namespaceEl.title = namespaceEl.ariaLabel = plugin.namespace;
      headerEl.appendChild(namespaceEl);
      const descEl = document.createElement("p");
      descEl.classList.add("bytm-plugin-list-row-desc");
      descEl.tabIndex = 0;
      descEl.textContent = descEl.title = descEl.ariaLabel = plugin.description[getLocale()] ?? plugin.description["en-US"];
      leftEl.appendChild(descEl);
      const linksList = document.createElement("div");
      linksList.classList.add("bytm-plugin-list-row-links-list");
      leftEl.appendChild(linksList);
      let linkElCreated = false;
      for (const key in plugin.homepage) {
        const url = plugin.homepage[key];
        if (!url) continue;
        if (linkElCreated) {
          const bulletEl = document.createElement("span");
          bulletEl.classList.add("bytm-plugin-list-row-links-list-bullet");
          bulletEl.textContent = "•";
          linksList.appendChild(bulletEl);
        }
        linkElCreated = true;
        const linkEl = document.createElement("a");
        linkEl.id = `bytm-plugin-list-row-link-${key}`;
        linkEl.classList.add("bytm-plugin-list-row-link", "bytm-link");
        linkEl.href = url;
        linkEl.tabIndex = 0;
        linkEl.target = "_blank";
        linkEl.rel = "noopener noreferrer";
        linkEl.textContent = linkEl.title = linkEl.ariaLabel = t(`plugin_link.type_${key}`);
        linksList.appendChild(linkEl);
      }
      const pluginIdentifier = `${plugin.namespace}/${plugin.name}`;
      const devPluginIdentifier = `${packageJson.namespace}+${devPluginId}/${t("dev_plugin.name")}`;
      const isDevPlugin = Boolean(pluginIdentifier === devPluginIdentifier && getPluginInfo(devPluginToken, devPluginIdentifier));
      const intentsBitSet = Array.isArray(intentsRaw) ? intentsRaw.reduce((acc, intent) => acc | intent, 0) : typeof intentsRaw === "number" ? intentsRaw : 0;
      const intentsAmount = Object.keys(PluginIntent).length / 2;
      const intentsArr = CoreUtils.bitSetHas(intentsBitSet, PluginIntent.FullAccess) ? [ PluginIntent.FullAccess ] : typeof intentsBitSet === "number" && intentsBitSet > 0 ? (() => {
        const arr = [];
        for (let i = 0; i < intentsAmount; i++) if (intentsBitSet & 2 ** i) arr.push(2 ** i);
        return arr;
      })() : [];
      if (!isDevPlugin) {
        if (intentsArr.length !== 0) {
          const rightEl = document.createElement("div");
          rightEl.classList.add("bytm-plugin-list-row-right");
          rowEl.appendChild(rightEl);
          const permissionsHeaderEl = document.createElement("div");
          permissionsHeaderEl.classList.add("bytm-plugin-list-row-permissions-header");
          permissionsHeaderEl.tabIndex = 0;
          permissionsHeaderEl.textContent = permissionsHeaderEl.title = permissionsHeaderEl.ariaLabel = t("plugin_list.permissions_header");
          rightEl.appendChild(permissionsHeaderEl);
          for (const intent of intentsArr) {
            const intentEl = document.createElement("div");
            intentEl.classList.add("bytm-plugin-list-row-intent-item");
            intentEl.tabIndex = 0;
            intentEl.textContent = t(`plugin_intent.name_${PluginIntent[intent]}`);
            intentEl.title = intentEl.ariaLabel = t(`plugin_intent.description_${PluginIntent[intent]}`);
            rightEl.appendChild(intentEl);
          }
        }
      } else {
        const devPluginNoteEl = document.createElement("div");
        devPluginNoteEl.classList.add("bytm-plugin-list-row-right", "is-dev-plugin");
        devPluginNoteEl.tabIndex = 0;
        devPluginNoteEl.title = devPluginNoteEl.ariaLabel = t("plugin_list.dev_plugin_note");
        const infoIcon = '<span class="bytm-dev-plugin-note-info-icon">🛈</span>';
        setInnerHtml(devPluginNoteEl, `${activeLocaleDir === "ltr" ? `${infoIcon} ` : ""}${t("plugin_list.dev_plugin_note")}${activeLocaleDir === "rtl" ? ` ${infoIcon}` : ""}`);
        rowEl.appendChild(devPluginNoteEl);
      }
      listContainerEl.appendChild(rowEl);
    }
    return listContainerEl;
  }
  const ignoreInputTagNames = [ "INPUT", "TEXTAREA", "SELECT", "BUTTON", "A" ];
  const ignoreInputIds = [ "contenteditable-root", "volume-slider", "bytm-cfg-menu-sidenav" ];
  const ignoreInputClassNames = [ "bytm-ignored-input", "cbTitleTextBox" ];
  const unIgnoreInputClassNames = [ "bytm-generic-btn", "bytm-btn" ];
  function isIgnoredInputElement(el) {
    if (!el) el = document.activeElement;
    if (!el) return false;
    const isIgnored = el !== document.body && (ignoreInputTagNames.includes(el.tagName.toUpperCase()) || ignoreInputIds.includes(el.id) || ignoreInputClassNames.some(cls => el.classList.contains(cls)));
    const isUnignored = unIgnoreInputClassNames.some(cls => el.classList.contains(cls));
    return isIgnored && !isUnignored;
  }
  let sliderEl;
  async function initArrowKeySkip() {
    addSelectorListener("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
      listener: el => sliderEl = el
    });
    document.addEventListener("keydown", evt => {
      if (!getFeature("arrowKeySupport") || isIgnoredInputElement()) return;
      if ([ "ArrowUp", "ArrowDown" ].includes(evt.code) && getDomain() === "ytm") return handleVolumeKeyPress(evt);
      if (![ "ArrowLeft", "ArrowRight" ].includes(evt.code)) return;
      const allowedClasses = [ "bytm-generic-btn", "yt-spec-button-shape-next" ];
      if (isIgnoredInputElement() && !allowedClasses.some(cls => document.activeElement?.classList.contains(cls))) return info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);
      evt.preventDefault();
      evt.stopImmediatePropagation();
      let skipBy = getFeature("arrowKeySkipBy", featInfo.arrowKeySkipBy.default);
      if (evt.code === "ArrowLeft") skipBy *= -1;
      log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
      const vidElem = getVideoElement();
      if (vidElem && vidElem.readyState > 0) vidElem.currentTime = CoreUtils.clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
    });
    log("Added arrow key press listener");
  }
  function handleVolumeKeyPress(evt) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    if (!getVideoElement()) return warn("Couldn't find video element, so the keypress is ignored");
    if (!sliderEl) return warn("Couldn't find volume slider element, so the keypress is ignored");
    const step = Number(sliderEl.step);
    const newVol = CoreUtils.clamp(Number(sliderEl.value) + (evt.code === "ArrowUp" ? 1 : -1) * CoreUtils.clamp(getFeature("arrowKeyVolumeStep", featInfo.arrowKeyVolumeStep.default), isNaN(step) ? 5 : step, 100), 0, 100);
    if (newVol !== Number(sliderEl.value)) {
      sliderEl.value = String(newVol);
      sliderEl.dispatchEvent(new Event("change", {
        bubbles: true
      }));
      log(`Captured key '${evt.code}' - changed volume to ${newVol}%`);
    }
  }
  async function initFrameSkip() {
    document.addEventListener("keydown", async evt => {
      if (!getFeature("frameSkip") || isIgnoredInputElement() || ![ "Comma", "Period" ].includes(evt.code)) return;
      const vid = getVideoElement();
      if (!vid || vid.readyState === 0) return warn("Could not find video element or it hasn't loaded yet, so the keypress is ignored");
      if (!getFeature("frameSkipWhilePlaying") && (vid.playbackRate === 0 || !vid.paused)) return;
      evt.preventDefault();
      evt.stopImmediatePropagation();
      const newTime = vid.currentTime + getFeature("frameSkipAmount") * (evt.code === "Comma" ? -1 : 1);
      vid.currentTime = CoreUtils.clamp(newTime, 0, vid.duration);
      log(`Captured key '${evt.code}' and skipped to ${Math.floor(newTime / 60)}m ${(newTime % 60).toFixed(1)}s (${Math.floor(newTime * 1e3 % 1e3)}ms)`);
    });
    log("Added frame skip key press listener");
  }
  const lastKeyPress = [ 0, "" ];
  async function initNumKeysSkip() {
    document.addEventListener("keydown", async e => {
      const doublePressTime = getFeature("numKeysSkipToTimeDoublePress");
      if (!getFeature("numKeysSkipToTime") && (getDomain() === "ytm" || getDomain() === "yt" && doublePressTime === 0) || isIgnoredInputElement()) return;
      if (!e.key.trim().match(/^[0-9]$/)) return;
      const vidElem = await waitVideoElementReady();
      const newVidTime = vidElem.duration / (10 / Number(e.key));
      if (doublePressTime > 0) {
        if (getDomain() === "yt") {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
        const videoTime = await getVideoTime();
        const dpBuffer = getFeature("numKeysSkipToTimeDoublePressBuffer");
        const vidTimeIsClose = dpBuffer > 0 && videoTime ? Math.abs(videoTime - newVidTime) < dpBuffer : false;
        const vidTimeAtStartOrEnd = CoreUtils.valsWithin(videoTime ?? -Infinity, vidElem.duration, 1) || CoreUtils.valsWithin(videoTime ?? Infinity, 0, 1);
        if (lastKeyPress[1] !== e.key || Date.now() - lastKeyPress[0] > doublePressTime) {
          lastKeyPress[0] = Date.now();
          lastKeyPress[1] = e.key;
          if (!vidTimeIsClose && !vidTimeAtStartOrEnd) return;
        }
        if (Date.now() - lastKeyPress[0] > doublePressTime) {
          lastKeyPress[0] = Date.now();
          lastKeyPress[1] = e.key;
          if (!vidTimeIsClose && !vidTimeAtStartOrEnd) return;
        }
      } else if (getDomain() === "yt") return;
      if (!vidElem || vidElem.readyState === 0) return warn("Could not find video element, so the keypress is ignored");
      if (!isNaN(newVidTime)) {
        log(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
        vidElem.currentTime = newVidTime;
      }
    }, {
      capture: true
    });
    log("Added number key press listener");
  }
  async function initHotkeys() {
    const promises = [];
    if (getDomain() === "ytm") promises.push(initLyricsHotkey());
    promises.push(initLikeDislikeHotkeys());
    promises.push(initSiteSwitch());
    promises.push(initProxyHotkeys());
    promises.push(initSkipToRemTimeHotkey());
    promises.push(initSearchBarHotkeys());
    return await Promise.allSettled(promises);
  }
  function hotkeyMatches(evt, hk) {
    if (typeof hk !== "object" || typeof hk.code !== "string") return false;
    return evt.code === hk.code && evt.shiftKey === hk.shift && evt.ctrlKey === hk.ctrl && evt.altKey === hk.alt;
  }
  function preventBubble(evt) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
  }
  const videoTimeThreshold = 3;
  let siteSwitchEnabled = true;
  async function initSiteSwitch() {
    const domain = getDomain();
    document.addEventListener("keydown", e => {
      if (!getFeature("switchBetweenSites")) return;
      if (isIgnoredInputElement()) return;
      if (siteSwitchEnabled) {
        if (hotkeyMatches(e, getFeature("switchSitesNewTabHotkey"))) switchSite(domain === "yt" ? "ytm" : "yt", true); else if (hotkeyMatches(e, getFeature("switchSitesHotkey"))) switchSite(domain === "yt" ? "ytm" : "yt");
      }
    }, {
      capture: true
    });
    siteEvents.on("hotkeyInputActive", hkInputActive => {
      if (!getFeature("switchBetweenSites")) return;
      siteSwitchEnabled = !hkInputActive;
    });
    log("Initialized site switch listener");
  }
  async function switchSite(newDomain, inNewTab = false) {
    try {
      if (![ "/watch", "/playlist" ].some(v => location.pathname.startsWith(v))) return warn("Not on a supported page, so the site switch is ignored");
      let subdomain;
      if (newDomain === "ytm") subdomain = "music"; else if (newDomain === "yt") subdomain = "www";
      if (!subdomain) throw new Error(`Unrecognized domain '${newDomain}'`);
      enableDiscardBeforeUnload();
      const {pathname: pathname, search: search, hash: hash} = new URL(location.href);
      const time = await getVideoTime(0);
      log(`Found video time of ${time} seconds`);
      const cleanSearch = search.split("&").filter(param => !param.match(/^\??(t|time_continue)=/)).join("&");
      const newSearch = typeof time === "number" && time > videoTimeThreshold ? cleanSearch.includes("?") ? `${cleanSearch.startsWith("?") ? cleanSearch : "?" + cleanSearch}&time_continue=${time}` : `?time_continue=${time}` : cleanSearch;
      const newUrl = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;
      info(`Switching to domain '${newDomain}' at ${newUrl}`);
      if (inNewTab) UserUtils.openInNewTab(newUrl, true); else location.assign(newUrl);
    } catch (err) {
      error("Error while switching site:", err);
    }
  }
  async function initLikeDislikeHotkeys() {
    document.addEventListener("keydown", e => {
      if (!getFeature("likeDislikeHotkeys")) return;
      if (isIgnoredInputElement()) return;
      const {likeBtn: likeBtn, dislikeBtn: dislikeBtn, likeState: likeState} = getLikeDislikeBtns();
      if (hotkeyMatches(e, getFeature("likeHotkey"))) {
        preventBubble(e);
        if (!getFeature("likeDislikeHotkeysToggle") && likeState === "LIKE") return;
        likeBtn?.click();
      } else if (hotkeyMatches(e, getFeature("dislikeHotkey"))) {
        preventBubble(e);
        if (!getFeature("likeDislikeHotkeysToggle") && likeState === "DISLIKE") return;
        dislikeBtn?.click();
      }
    }, {
      capture: true
    });
  }
  async function initLyricsHotkey() {
    document.addEventListener("keydown", e => {
      if (!getFeature("currentLyricsHotkeyEnabled")) return;
      if (isIgnoredInputElement()) return;
      if (hotkeyMatches(e, getFeature("currentLyricsHotkey")) && location.pathname.startsWith("/watch")) {
        preventBubble(e);
        const lyricsBtn = document.getElementById("bytm-player-bar-lyrics-btn");
        lyricsBtn?.click();
      }
    }, {
      capture: true
    });
  }
  async function initSkipToRemTimeHotkey() {
    document.addEventListener("keydown", async e => {
      if (!getFeature("skipToRemTimeHotkeyEnabled")) return;
      if (isIgnoredInputElement()) return;
      if (hotkeyMatches(e, getFeature("skipToRemTimeHotkey"))) {
        preventBubble(e);
        await remTimeTryRestoreTime(true);
      }
    }, {
      capture: true
    });
  }
  async function initSearchBarHotkeys() {
    const getSearchBarInput = () => document.querySelector(getDomain() === "ytm" ? "ytmusic-search-box input" : "yt-searchbox input");
    const checkFocusHotkey = e => {
      if (isIgnoredInputElement() || !getFeature("focusSearchBarHotkeyEnabled")) return;
      preventBubble(e);
      getSearchBarInput()?.focus();
      log("Focused on the search bar");
    };
    const checkClearHotkey = e => {
      if (!getFeature("clearSearchBarHotkeyEnabled")) return;
      preventBubble(e);
      const inputEl = getSearchBarInput();
      if (inputEl) {
        inputEl.value = "";
        inputEl.dispatchEvent(new Event("input", {
          bubbles: true
        }));
      }
    };
    document.addEventListener("keydown", e => {
      hotkeyMatches(e, getFeature("focusSearchBarHotkey")) && checkFocusHotkey(e);
      hotkeyMatches(e, getFeature("clearSearchBarHotkey")) && checkClearHotkey(e);
    }, {
      capture: true
    });
  }
  let lastProxyHkTime = 0;
  const proxyHotkeys = {
    rebindNextAndPrevious: [ {
      hkFeatKey: "nextHotkey",
      preventKey: "KeyJ",
      domains: [ "ytm" ],
      onPress: () => dispatchProxyKey({
        code: "KeyJ",
        key: "j",
        keyCode: 74,
        which: 74
      })
    }, {
      hkFeatKey: "previousHotkey",
      preventKey: "KeyK",
      domains: [ "ytm" ],
      onPress: () => dispatchProxyKey({
        code: "KeyK",
        key: "k",
        keyCode: 75,
        which: 75
      })
    } ],
    rebindPlayPause: [ {
      hkFeatKey: "playPauseHotkey",
      preventKey: "Space",
      domains: [ "ytm" ],
      onPress: () => dispatchProxyKey({
        code: "Space",
        key: " ",
        keyCode: 32,
        which: 32
      })
    } ],
    themeSongVisualizerHotkeyEnabled: [ {
      hkFeatKey: "themeSongVisualizerHotkey",
      domains: [ "ytm" ],
      onPress: e => {
        const toggleEl = document.querySelector("#ts-visualizer-toggle");
        if (toggleEl) {
          preventBubble(e);
          toggleEl.click();
        }
      }
    } ]
  };
  async function initProxyHotkeys() {
    document.addEventListener("keydown", e => {
      if (isIgnoredInputElement()) return;
      for (const [featKey, proxyGroup] of Object.entries(proxyHotkeys)) {
        if (getFeature(featKey) !== true) continue;
        for (const {hkFeatKey: hkFeatKey, onPress: onPress, domains: domains, ...rest} of proxyGroup) {
          if (!domains.includes(getDomain())) continue;
          const nowTs = Date.now();
          if (nowTs - lastProxyHkTime < 15) continue;
          if ("preventKey" in rest && e.code === rest.preventKey) preventBubble(e);
          if (hotkeyMatches(e, getFeature(hkFeatKey))) {
            lastProxyHkTime = nowTs;
            !e.defaultPrevented && e.preventDefault();
            e.bubbles && e.stopImmediatePropagation();
            onPress(e);
          }
        }
      }
    }, {
      capture: true
    });
  }
  function dispatchProxyKey(hkProps) {
    document.body.dispatchEvent(new KeyboardEvent("keydown", {
      ...hkProps,
      bubbles: true,
      cancelable: true,
      view: UserUtils.getUnsafeWindow()
    }));
    log("Dispatched proxy hotkey:", hkProps);
  }
  async function disableDarkReader() {
    if (getFeature("disableDarkReaderSites") !== getDomain() && getFeature("disableDarkReaderSites") !== "all") return;
    const metaElem = document.createElement("meta");
    metaElem.name = "darkreader-lock";
    metaElem.id = "bytm-disable-dark-reader";
    document.head.appendChild(metaElem);
    info("Disabled Dark Reader");
  }
  async function fixSponsorBlock() {
    try {
      return addStyleFromResource("css-fix_sponsorblock");
    } catch (err) {
      error("Failed to fix SponsorBlock styling:", err);
    }
  }
  async function fixPlayerPageTheming() {
    try {
      return addStyleFromResource("css-fix_playerpage_theming");
    } catch (err) {
      error("Failed to fix BetterYTM player page theming:", err);
    }
  }
  async function fixThemeSong() {
    try {
      const cssVarName = (() => {
        switch (getFeature("themeSongLightness")) {
         default:
         case "darker":
          return "--ts-palette-darkmuted-hex";

         case "normal":
          return "--ts-palette-muted-hex";

         case "lighter":
          return "--ts-palette-lightmuted-hex";
        }
      })();
      document.documentElement.style.setProperty("--bytm-themesong-bg-accent-col", `var(${cssVarName})`);
    } catch (err) {
      error("Failed to set ThemeSong integration color lightness:", err);
    }
  }
  async function setThemeSongVisualizerOpacity() {
    if (!await addStyleFromResource("css-themesong_visualizer_opacity", css => css.replace("_INSERT_OPACITY_VALUE_", (getFeature("themeSongVisualizerOpacity") / 100).toFixed(2)))) error("Couldn't add ThemeSong visualizer opacity style"); else log("Set ThemeSong visualizer opacity to " + getFeature("themeSongVisualizerOpacity") + "%");
  }
  const songListSelector = `ytmusic-playlist-shelf-renderer #contents,\nytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents\nytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,\nytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents`;
  let isCheckboxChecked = false;
  async function initQueueButtons() {
    const multiSelectObs = new MutationObserver(() => {
      const multiSelectEl = document.querySelector('ytmusic-dialog[dialog-type="multiSelectMenuBar"]');
      const newIsCheckboxChecked = Boolean(multiSelectEl) && !multiSelectEl?.hasAttribute("aria-hidden");
      if (newIsCheckboxChecked === isCheckboxChecked) return;
      isCheckboxChecked = newIsCheckboxChecked;
      const allSongLists = document.querySelectorAll(songListSelector);
      allSongLists.forEach(list => {
        list.dataset.anyCheckboxChecked = String(isCheckboxChecked);
      });
    });
    multiSelectObs.observe(document.body, {
      childList: true,
      subtree: true,
      attributeFilter: [ "dialog-type", "aria-hidden" ]
    });
    const tryAddCurrentQueueBtns = parentSelector => {
      if (getFeature("listButtonsPlacement") !== "currentQueue" && getFeature("listButtonsPlacement") !== "everywhere") return;
      const parent = document.querySelector(parentSelector);
      if (!parent) return warn("Couldn't find current queue parent element to add queue buttons to");
      const queueItems = parent.querySelectorAll("ytmusic-player-queue-item");
      let amt = 0;
      for (const queueItm of queueItems) {
        if (!queueItm.classList.contains("bytm-has-queue-btns")) {
          addQueueButtons(queueItm, undefined, "currentQueue");
          amt++;
        }
      }
      if (amt > 0) log(`Added buttons to ${amt} new queue ${CoreUtils.autoPlural("item", amt)}`);
    };
    siteEvents.on("queueChanged", () => tryAddCurrentQueueBtns("ytmusic-player-queue #contents"));
    siteEvents.on("autoplayQueueChanged", () => tryAddCurrentQueueBtns("ytmusic-player-queue #automix-contents"));
    const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
    if (queueItems.length > 0) {
      queueItems.forEach(itm => addQueueButtons(itm, undefined, "currentQueue"));
      log(`Added buttons to ${queueItems.length} existing "current song queue" ${CoreUtils.autoPlural("item", queueItems)}`);
    }
    const tryAddGenericListQueueBtns = listElem => {
      const queueItems = listElem.querySelectorAll("ytmusic-responsive-list-item-renderer");
      if (queueItems.length === 0) return;
      let addedBtnsCount = 0;
      queueItems.forEach(itm => {
        if (itm.classList.contains("bytm-has-btns")) return;
        itm.classList.add("bytm-has-btns");
        addQueueButtons(itm, ".flex-columns", "genericList", [ "bytm-generic-list-queue-btn-container" ], "afterParent");
        addedBtnsCount++;
      });
      addedBtnsCount > 0 && log(`Added buttons to ${addedBtnsCount} new "generic song list" ${CoreUtils.autoPlural("item", addedBtnsCount)} in list`, listElem);
    };
    const doSongListsChecks = songLists => {
      for (const list of songLists) {
        if (getFeature("listButtonsPlacement") === "everywhere" || getFeature("listButtonsPlacement") === "genericLists") tryAddGenericListQueueBtns(list);
        if (getFeature("swapLikeDislikeButtons")) checkSwapLikeDislikeBtns(list);
      }
    };
    addSelectorListener("body", songListSelector, {
      all: true,
      debounce: Math.floor(1e3 / 6),
      listener: doSongListsChecks
    });
    siteEvents.on("pathChanged", () => {
      const songLists = document.querySelectorAll(songListSelector);
      if (songLists.length > 0) doSongListsChecks(songLists);
    });
  }
  function checkSwapLikeDislikeBtns(songList) {
    if (!getFeature("swapLikeDislikeButtons")) return;
    songList.querySelectorAll("ytmusic-like-button-renderer #button-shape-dislike").forEach(dislikeBtn => {
      const parent = dislikeBtn.parentElement;
      if (!parent || parent.classList.contains("bytm-swapped-like-dislike")) return;
      const likeBtn = parent.querySelector("#button-shape-like");
      if (likeBtn) {
        parent.classList.add("bytm-swapped-like-dislike");
        transplantElement(dislikeBtn, likeBtn);
      }
    });
  }
  async function addQueueButtons(queueItem, containerParentSelector = ".song-info", listType = "currentQueue", classes = [], insertPosition = "child") {
    const queueBtnsCont = document.createElement("div");
    queueBtnsCont.classList.add(...[ "bytm-queue-btn-container", ...classes ]);
    const [lyricsIconUrl, deleteIconUrl, spinnerIconUrl] = await Promise.all([ "icon-lyrics", "icon-delete", "icon-spinner" ].map(icon => getResourceUrl(icon)));
    await UserUtils.preloadImages([ lyricsIconUrl, deleteIconUrl, spinnerIconUrl ]);
    let lyricsBtnElem;
    if (getFeature("lyricsQueueButton")) {
      lyricsBtnElem = await createLyricsBtn(undefined, false);
      lyricsBtnElem.classList.add("bytm-song-list-item-btn");
      lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
      lyricsBtnElem.style.display = "inline-flex";
      lyricsBtnElem.style.visibility = "initial";
      lyricsBtnElem.style.pointerEvents = "initial";
      lyricsBtnElem.role = "link";
      lyricsBtnElem.tabIndex = 0;
      onInteraction(lyricsBtnElem, async e => {
        const thumbSrc = queueItem.querySelector("yt-img-shadow img")?.src;
        const isVideo = thumbSrc ? thumbSrc.includes("ytimg.com/vi/") : true;
        let song, artist;
        if (listType === "currentQueue") {
          const songInfo = queueItem.querySelector(".song-info");
          if (!songInfo) return error("Couldn't find song info element in queue item", queueItem);
          const [songEl, artistEl] = songInfo.querySelectorAll("yt-formatted-string");
          song = songEl?.textContent;
          artist = artistEl?.textContent;
        } else if (listType === "genericList") {
          const songEl = queueItem.querySelector(".title-column yt-formatted-string a");
          let artistEl = null;
          if (location.pathname.startsWith("/playlist")) artistEl = document.querySelector("ytmusic-detail-header-renderer .metadata .subtitle-container yt-formatted-string a");
          if (!artistEl || !artistEl.textContent) artistEl = queueItem.querySelector(".secondary-flex-columns yt-formatted-string:first-child a");
          song = songEl?.textContent;
          artist = artistEl?.textContent;
          if (!artist) {
            artistEl = document.querySelector("ytmusic-responsive-header-renderer .strapline a.yt-formatted-string[href]");
            artist = artistEl?.textContent;
          }
        } else return error("Invalid list type:", listType);
        if (song && isVideo && song.includes("-")) {
          artist = song.split("-")[0]?.trim();
          song = song.split("-").slice(1).join("-").trim();
        }
        if (!song || !artist) return error("Couldn't get song or artist name from queue item - song:", song, "- artist:", artist);
        let lyricsUrl;
        const artistsSan = sanitizeArtists(artist);
        const songSan = sanitizeSong(song);
        const splitTitle = splitVideoTitle(songSan);
        const cachedLyricsEntry = songSan.includes("-") ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song) : getLyricsCacheEntry(artistsSan, songSan);
        e.preventDefault();
        e.stopImmediatePropagation();
        if (cachedLyricsEntry) lyricsUrl = resolveLyricsUrl(cachedLyricsEntry.path); else if (!queueItem.hasAttribute("data-bytm-loading")) {
          const imgEl = lyricsBtnElem?.querySelector("img, svg");
          if (!cachedLyricsEntry) {
            queueItem.setAttribute("data-bytm-loading", "");
            if (imgEl) {
              if (imgEl.tagName === "IMG") {
                imgEl.src = await getResourceUrl("icon-spinner");
                imgEl?.classList.add("bytm-spinner");
              } else if (lyricsBtnElem) {
                setInnerHtml(lyricsBtnElem, await resourceAsString("icon-spinner"));
                lyricsBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img", "bytm-spinner");
              }
            }
          }
          const cachedPath = cachedLyricsEntry?.path;
          lyricsUrl = cachedPath ? resolveLyricsUrl(cachedPath) : await fetchLyricsUrlTop(artistsSan, songSan);
          if (lyricsUrl) {
            emitInterface("bytm:lyricsLoaded", {
              type: "queue",
              artists: artist,
              title: song,
              url: lyricsUrl
            });
          }
          if (lyricsBtnElem) lyricsBtnElem.dataset.state = lyricsUrl ? "ready" : "error";
          const resetImgElem = async () => {
            if (imgEl) {
              if (imgEl.tagName === "IMG") {
                imgEl.src = lyricsIconUrl;
                imgEl?.classList.remove("bytm-spinner");
              } else if (lyricsBtnElem) {
                setInnerHtml(lyricsBtnElem, await resourceAsString("icon-lyrics"));
                lyricsBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
              }
            }
          };
          if (!cachedLyricsEntry) {
            queueItem.removeAttribute("data-bytm-loading");
            setTimeout(() => resetImgElem(), 100);
          }
          if (!lyricsUrl) {
            resetImgElem();
            if (await showPrompt({
              type: "confirm",
              message: t("lyrics_not_found_confirm_open_search")
            })) openInTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
            return;
          }
        }
        lyricsUrl && openInTab(lyricsUrl);
      }, {
        capture: true
      });
    }
    let deleteBtnElem;
    if (getFeature("deleteFromQueueButton")) {
      deleteBtnElem = document.createElement("a");
      deleteBtnElem.ariaLabel = deleteBtnElem.title = listType === "currentQueue" ? t("remove_from_queue") : t("delete_from_list");
      deleteBtnElem.classList.add("ytmusic-player-bar", "bytm-delete-from-queue", "bytm-generic-btn", "bytm-song-list-item-btn");
      deleteBtnElem.role = "button";
      deleteBtnElem.tabIndex = 0;
      deleteBtnElem.style.visibility = "initial";
      const delImgElem = document.createElement("img");
      delImgElem.classList.add("bytm-generic-btn-img");
      delImgElem.src = deleteIconUrl;
      onInteraction(deleteBtnElem, async e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        delImgElem.src = spinnerIconUrl;
        delImgElem.classList.add("bytm-spinner");
        let queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
        try {
          const dotsBtnElem = queueItem.querySelector('ytmusic-menu-renderer yt-button-shape[id="button-shape"] button');
          if (dotsBtnElem) {
            if (queuePopupCont) queuePopupCont.setAttribute("data-bytm-hidden", "true");
            dotsBtnElem.click();
          } else {
            info("Couldn't find three dots button in queue item, trying to open the context menu manually");
            queueItem.dispatchEvent(new MouseEvent("contextmenu", {
              bubbles: true,
              cancelable: false
            }));
          }
          queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
          queuePopupCont?.setAttribute("data-bytm-hidden", "true");
          await CoreUtils.pauseFor(15);
          delImgElem.src = deleteIconUrl;
          delImgElem.classList.remove("bytm-spinner");
          const removeFromQueueOrPlaylistBtn = queuePopupCont?.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
          const removeFromQueueBtnOptional = queuePopupCont?.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(4)");
          let removeFromQueueBtn;
          if (removeFromQueueBtnOptional && removeFromQueueBtnOptional?.previousElementSibling === removeFromQueueOrPlaylistBtn) removeFromQueueBtn = removeFromQueueBtnOptional; else if (removeFromQueueOrPlaylistBtn) removeFromQueueBtn = removeFromQueueOrPlaylistBtn;
          removeFromQueueBtn?.click();
          if (removeFromQueueBtn && listType === "genericList") {
            await CoreUtils.pauseFor(200);
            clearInner(queueItem);
            queueItem.remove();
          }
          if (!removeFromQueueBtn) {
            error("Couldn't find 'remove from queue' button in queue item three dots menu.\nPlease make sure all autoplay restrictions on your browser's side are disabled for this page.");
            dotsBtnElem?.click();
            delImgElem.src = await getResourceUrl("icon-error");
            if (deleteBtnElem) deleteBtnElem.ariaLabel = deleteBtnElem.title = listType === "currentQueue" ? t("couldnt_remove_from_queue") : t("couldnt_delete_from_list");
          }
        } catch (err) {
          error("Couldn't remove song from queue due to error:", err);
        } finally {
          queuePopupCont?.removeAttribute("data-bytm-hidden");
        }
      });
      deleteBtnElem.appendChild(delImgElem);
    }
    lyricsBtnElem && queueBtnsCont.appendChild(createRipple(lyricsBtnElem));
    deleteBtnElem && queueBtnsCont.appendChild(createRipple(deleteBtnElem));
    const parentEl = queueItem.querySelector(containerParentSelector);
    if (insertPosition === "child") parentEl?.appendChild(queueBtnsCont); else if (insertPosition === "beforeParent") parentEl?.before(queueBtnsCont); else if (insertPosition === "afterParent") parentEl?.after(queueBtnsCont);
    queueItem.classList.add("bytm-has-queue-btns");
  }
  async function addTrackNumbers() {
    (async () => {
      const promises = [];
      try {
        const where = getFeature("songListTrackNumbers");
        if (where === "genericLists" || where === "everywhere") promises.push(addStyleFromResource("css-track_numbers_song_lists"));
        if (where === "currentQueue" || where === "everywhere") promises.push(addStyleFromResource("css-track_numbers_current_queue"));
      } catch (err) {
        error("Couldn't add track numbers style:", err);
      }
      await Promise.allSettled(promises);
    })();
  }
  class ExampleError extends CoreUtils.DatedError {
    constructor(message, options) {
      super(message, options);
      this.name = "ExampleError";
    }
  }
  const adornments = {
    alert: async title => await getAdornHtml("bytm-warning-icon", title, "icon-error", 'role="alert"', title),
    experimental: async () => await getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental", undefined, t("experimental_feature")),
    ytmOnly: async () => await getAdornHtml("bytm-ytm-only-icon", t("feature_only_works_on_ytm"), "icon-ytm", undefined, t("feature_only_works_on_ytm")),
    globe: async () => await getAdornHtml("bytm-locale-icon", undefined, "icon-globe_small"),
    reload: async () => getFeature("advancedMode") ? await getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload", undefined, t("feature_requires_reload")) : undefined,
    advanced: async () => await getAdornHtml("bytm-advanced-mode-icon", t("advanced_feature"), "icon-advanced_mode", undefined, t("advanced_feature")),
    newFeature: async () => await getAdornHtml("bytm-new-feature-icon", t("feature_is_new"), "icon-new", undefined, t("feature_is_new"))
  };
  const adornmentOrder = new Map([ [ adornments.alert, 0 ], [ adornments.experimental, 1 ], [ adornments.ytmOnly, 2 ], [ adornments.globe, 3 ], [ adornments.reload, 4 ], [ adornments.advanced, 5 ], [ adornments.newFeature, 6 ] ]);
  async function getAdornHtml(className, title, resource, extraAttributes, clickDialogText) {
    title = title ? await CoreUtils.consumeStringGen(title) : undefined;
    extraAttributes = extraAttributes ? await CoreUtils.consumeStringGen(extraAttributes) : undefined;
    const id = CoreUtils.randomId(8, 36);
    if (clickDialogText) {
      siteEvents.once("cfgMenuMounted", () => {
        const elem = document.getElementById(`bytm-adornment-${id}`);
        if (!elem) return;
        elem.addEventListener("click", () => showPrompt({
          type: "alert",
          message: String(clickDialogText)
        }));
      });
    }
    return `<span id="bytm-adornment-${id}" class="${className} bytm-adorn-icon" ${title ? `title="${title}" aria-label="${title}"` : ""}${extraAttributes ? ` ${extraAttributes}` : ""}>${await resourceAsString(resource) ?? ""}</span>`;
  }
  async function resolveAdornments(ftInfo, featKey) {
    const feat = ftInfo[featKey];
    let adorns = feat.adornments;
    if (typeof adorns === "function") adorns = adorns();
    const isDev = mode$1 === "development";
    const resolvedAdorns = adorns ? [ ...adorns ] : [];
    if (feat.since && compareVersions.compare(feat.since, scriptInfo$1.version, isDev ? ">" : ">=") && (getVersionSessionCount() < newFeatureAdornmentMaxSessionCount || isDev)) resolvedAdorns.push(adornments.newFeature);
    const sortedAdorns = resolvedAdorns.sort((a, b) => {
      const aIdx = adornmentOrder.has(a) ? adornmentOrder.get(a) : 0;
      const bIdx = adornmentOrder.has(b) ? adornmentOrder.get(b) : 0;
      return aIdx - bIdx;
    });
    const htmlStrings = await Promise.all(sortedAdorns.map(adorn => typeof adorn === "function" ? adorn() : adorn));
    return htmlStrings.filter(Boolean);
  }
  const removeEmoji = str => str.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, "").trim();
  const options = {
    siteSelection: () => [ {
      value: "all",
      label: t("site_selection_both_sites")
    }, {
      value: "yt",
      label: t("site_selection_only_yt")
    }, {
      value: "ytm",
      label: t("site_selection_only_ytm")
    } ],
    siteSelectionOrNone: () => [ {
      value: "all",
      label: t("site_selection_both_sites")
    }, {
      value: "yt",
      label: t("site_selection_only_yt")
    }, {
      value: "ytm",
      label: t("site_selection_only_ytm")
    }, {
      value: "none",
      label: t("site_selection_none")
    } ],
    locale: () => Object.entries(localesJson).reduce((a, [locale, {name: name, emoji: emoji}]) => [ ...a, {
      value: locale,
      label: `${emoji} ${name}`
    } ], []).sort((a, b) => removeEmoji(a.label).localeCompare(removeEmoji(b.label))),
    colorLightness: () => [ {
      value: "darker",
      label: t("color_lightness.darker")
    }, {
      value: "normal",
      label: t("color_lightness.normal")
    }, {
      value: "lighter",
      label: t("color_lightness.lighter")
    } ],
    thumbOverlaySources: () => [ {
      value: "am",
      label: t("thumbnail_overlay.source_am")
    }, {
      value: "yt",
      label: t("thumbnail_overlay.source_yt")
    } ],
    songListType: () => [ {
      value: "currentQueue",
      label: t("list_button_placement_queue_only")
    }, {
      value: "genericLists",
      label: t("list_button_placement_generic_lists")
    }, {
      value: "everywhere",
      label: t("list_button_placement_everywhere")
    } ]
  };
  const groupedCategories = [ [ "general", "layout", "songLists", "lyrics", "volume" ], [ "behavior", "autoLike", "input", "hotkeys" ], [ "integrations", "plugins" ] ];
  const featInfo = {
    locale: {
      type: "select",
      category: "general",
      group: "locale",
      supportedSites: [ "ytm", "yt" ],
      since: "1.0.0",
      options: options.locale,
      default: getPreferredLocale(),
      adornments: [ adornments.globe, adornments.reload ]
    },
    localeFallback: {
      type: "toggle",
      category: "general",
      group: "locale",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      default: true,
      advanced: true,
      adornments: [ adornments.advanced, adornments.reload ]
    },
    initTimeout: {
      type: "number",
      category: "general",
      group: "bytmInternal",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      min: mode$1 === "development" ? 100 : 1e3,
      max: 1e4,
      default: 3e3,
      step: 100,
      unit: "ms",
      advanced: true,
      adornments: [ adornments.advanced, adornments.reload ]
    },
    defaultObserverDebounce: {
      type: "number",
      category: "general",
      group: "bytmInternal",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      min: 10,
      default: 150,
      max: 1e3,
      step: 5,
      unit: "ms",
      advanced: true,
      adornments: [ adornments.advanced, adornments.reload ]
    },
    versionCheck: {
      type: "toggle",
      category: "general",
      group: "versionCheck",
      supportedSites: [ "ytm", "yt" ],
      since: "1.1.0",
      default: true,
      adornments: [ adornments.reload ]
    },
    checkVersionNow: {
      type: "button",
      category: "general",
      group: "versionCheck",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      click: () => doVersionCheck(true)
    },
    numbersFormat: {
      type: "select",
      category: "general",
      group: "numbersFormat",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      options: () => [ {
        value: "long",
        label: `${formatNumber(12345678, "long")} (${t("votes_format_long")})`
      }, {
        value: "short",
        label: `${formatNumber(12345678, "short")} (${t("votes_format_short")})`
      } ],
      default: "short",
      reloadRequired: false
    },
    toastDuration: {
      type: "slider",
      category: "general",
      group: "toasts",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      min: 0,
      max: 15,
      default: 4,
      step: .5,
      renderValue: val => Number(val) === 0 ? t("toggled_off") : `${val}s`,
      reloadRequired: false,
      change: newVal => newVal === 0 ? closeToast() : showIconToast({
        message: t("example_toast"),
        iconSrc: getResourceUrl(`img-logo${mode$1 === "development" ? "_dev" : ""}`)
      }).then(() => getFeature("toastDuration") === 0 ? closeToast() : void 0)
    },
    showToastOnGenericError: {
      type: "toggle",
      category: "general",
      group: "toasts",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0-preview.1",
      default: true,
      advanced: true,
      reloadRequired: false,
      adornments: [ adornments.advanced ],
      change: newVal => newVal ? error("Test error", new ExampleError("Example")) : void 0
    },
    resetConfig: {
      type: "button",
      category: "general",
      group: "resetData",
      supportedSites: [ "ytm", "yt" ],
      since: "3.0.0",
      click: promptResetConfig,
      adornments: [ adornments.reload ]
    },
    resetEverything: {
      type: "button",
      category: "general",
      group: "resetData",
      supportedSites: [ "ytm", "yt" ],
      since: "2.2.0",
      click: async () => {
        if (await showPrompt({
          type: "confirm",
          message: t("reset_everything_confirm")
        })) {
          await getDSSerializer(true).resetStoresData();
          const gmKeys = await GM.listValues();
          await Promise.allSettled(gmKeys.map(key => GM.deleteValue(key)));
          await reloadTab();
        }
      },
      advanced: true,
      adornments: [ adornments.advanced, adornments.reload ]
    },
    logLevel: {
      type: "select",
      category: "general",
      group: "logging",
      supportedSites: [ "ytm", "yt" ],
      since: "1.0.0",
      options: () => [ {
        value: LogLevel.Debug,
        label: t("log_level_debug")
      }, {
        value: LogLevel.Info,
        label: t("log_level_info")
      } ],
      default: LogLevel.Info,
      advanced: true,
      adornments: [ adornments.advanced, adornments.reload ]
    },
    logEvents: {
      type: "toggle",
      category: "general",
      group: "logging",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: mode$1 === "development",
      advanced: true,
      adornments: [ adornments.advanced, adornments.reload ]
    },
    logHttp: {
      type: "toggle",
      category: "general",
      group: "logging",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: mode$1 === "development",
      advanced: true,
      adornments: [ adornments.advanced, adornments.reload ]
    },
    advancedMode: {
      type: "toggle",
      category: "general",
      group: "advancedMode",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      default: false,
      change: (newVal, initVal) => initVal !== newVal && emitSiteEvent("recreateCfgMenu")
    },
    watermarkEnabled: {
      type: "toggle",
      category: "layout",
      group: "watermarkEnabled",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    removeShareTrackingParam: {
      type: "toggle",
      category: "layout",
      group: "removeShareTrackingParam",
      supportedSites: [ "ytm", "yt" ],
      since: "1.0.0",
      default: true,
      adornments: [ adornments.reload ]
    },
    removeShareTrackingParamSites: {
      type: "select",
      category: "layout",
      group: "removeShareTrackingParam",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      options: options.siteSelection,
      default: "all",
      advanced: true,
      reloadRequired: false,
      adornments: [ adornments.advanced ]
    },
    fixSpacing: {
      type: "toggle",
      category: "layout",
      group: "fixLayout",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      advanced: true,
      adornments: [ adornments.ytmOnly, adornments.advanced, adornments.reload ]
    },
    truncatePlayerBarSubtitles: {
      type: "toggle",
      category: "layout",
      group: "fixLayout",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    thumbnailOverlayBehavior: {
      type: "select",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      options: () => [ {
        value: "songsOnly",
        label: t("thumbnail_overlay.behavior_songs_only")
      }, {
        value: "videosOnly",
        label: t("thumbnail_overlay.behavior_videos_only")
      }, {
        value: "always",
        label: t("thumbnail_overlay.behavior_always")
      }, {
        value: "never",
        label: t("thumbnail_overlay.behavior_never")
      } ],
      default: "songsOnly",
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    thumbnailOverlayToggleBtnShown: {
      type: "toggle",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    thumbnailOverlayITunesImgRes: {
      type: "slider",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: 2e3,
      min: 100,
      max: 3e3,
      step: 100,
      renderValue: n => `${n}x${n}`,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    thumbnailOverlayAlbumArtCacheMaxSize: {
      type: "slider",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: 1e4,
      min: 500,
      max: 25e3,
      step: 500,
      unit: val => ` ${tp("unit_entries", val)}`,
      renderValue: val => formatNumber(Number(val), "long"),
      reloadRequired: false,
      advanced: true,
      adornments: [ adornments.advanced, adornments.ytmOnly ]
    },
    thumbnailOverlayAlbumArtCacheTTL: {
      type: "slider",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: 30,
      min: 5,
      max: 100,
      step: 1,
      unit: val => ` ${tp("unit_days", val)}`,
      renderValue: val => formatNumber(Number(val), "long"),
      reloadRequired: false,
      advanced: true,
      adornments: [ adornments.advanced, adornments.ytmOnly ]
    },
    thumbnailOverlayShowIndicator: {
      type: "toggle",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    thumbnailOverlayIndicatorOpacity: {
      type: "slider",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      min: 5,
      max: 100,
      step: 5,
      default: 25,
      unit: "%",
      advanced: true,
      adornments: [ adornments.ytmOnly, adornments.advanced, adornments.reload ]
    },
    thumbnailOverlayPreferredSource: {
      type: "select",
      category: "layout",
      group: "thumbnailOverlay",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: "am",
      options: options.thumbOverlaySources,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    fixHdrIssues: {
      type: "toggle",
      category: "layout",
      group: "fixHdrIssues",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: true,
      advanced: true,
      adornments: [ adornments.ytmOnly, adornments.advanced, adornments.reload ]
    },
    showVotes: {
      type: "toggle",
      category: "layout",
      group: "votes",
      supportedSites: [ "ytm" ],
      since: "2.1.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    swapLikeDislikeButtons: {
      type: "toggle",
      category: "layout",
      group: "votes",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: false,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    watchPageFullSize: {
      type: "toggle",
      category: "layout",
      group: "watchPageFullSize",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    lyricsQueueButton: {
      type: "toggle",
      category: "songLists",
      group: "queueButtons",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    deleteFromQueueButton: {
      type: "toggle",
      category: "songLists",
      group: "queueButtons",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    listButtonsPlacement: {
      type: "select",
      category: "songLists",
      group: "queueButtons",
      supportedSites: [ "ytm" ],
      since: "1.1.0",
      options: options.songListType,
      default: "everywhere",
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    scrollToActiveSongBtn: {
      type: "toggle",
      category: "songLists",
      group: "aboveQueueButtons",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    clearQueueBtn: {
      type: "toggle",
      category: "songLists",
      group: "aboveQueueButtons",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    aboveQueueBtnsSticky: {
      type: "toggle",
      category: "songLists",
      group: "aboveQueueButtons",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: true,
      advanced: true,
      adornments: [ adornments.ytmOnly, adornments.advanced, adornments.reload ]
    },
    songListTrackNumbersEnabled: {
      type: "toggle",
      category: "songLists",
      group: "songListTrackNumbers",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    songListTrackNumbers: {
      type: "select",
      category: "songLists",
      group: "songListTrackNumbers",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      options: options.songListType,
      default: "genericLists",
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    geniusLyrics: {
      type: "toggle",
      category: "lyrics",
      group: "geniusLyrics",
      supportedSites: [ "ytm" ],
      since: "0.2.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    errorOnLyricsNotFound: {
      type: "toggle",
      category: "lyrics",
      group: "geniusLyrics",
      supportedSites: [ "ytm" ],
      since: "2.1.0-preview.1",
      default: false,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    geniUrlBase: {
      type: "text",
      category: "lyrics",
      group: "geniURL",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: "https://api.sv443.net/geniurl",
      normalize: val => val.trim().replace(/\/+$/, ""),
      advanced: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly, adornments.advanced ]
    },
    geniUrlToken: {
      type: "text",
      category: "lyrics",
      group: "geniURL",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      valueHidden: true,
      default: "",
      normalize: val => val.trim(),
      advanced: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly, adornments.advanced ]
    },
    lyricsCacheMaxSize: {
      type: "slider",
      category: "lyrics",
      group: "lyricsCache",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: 1e4,
      min: 1e3,
      max: 25e3,
      step: 500,
      unit: val => ` ${tp("unit_entries", val)}`,
      renderValue: val => formatNumber(Number(val), "long"),
      advanced: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly, adornments.advanced ]
    },
    lyricsCacheTTL: {
      type: "slider",
      category: "lyrics",
      group: "lyricsCache",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: 30,
      min: 5,
      max: 100,
      step: 1,
      unit: val => ` ${tp("unit_days", val)}`,
      renderValue: val => formatNumber(Number(val), "long"),
      advanced: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly, adornments.advanced ]
    },
    clearLyricsCache: {
      type: "button",
      category: "lyrics",
      group: "lyricsCache",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      async click() {
        const entries = getLyricsCache().length;
        const formattedEntries = entries.toLocaleString(getLocale(), {
          style: "decimal",
          maximumFractionDigits: 0
        });
        if (await showPrompt({
          type: "confirm",
          message: tp("lyrics_clear_cache_confirm_prompt", entries, formattedEntries)
        })) {
          await clearLyricsCache();
          await showPrompt({
            type: "alert",
            message: t("lyrics_clear_cache_success")
          });
        }
      },
      advanced: true,
      adornments: [ adornments.ytmOnly, adornments.advanced ]
    },
    volumeSliderExponential: {
      type: "select",
      category: "volume",
      group: "volumeSlider",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      options: () => [ {
        value: "linear",
        label: t("volume_mapping.linear")
      }, {
        value: "x^2",
        label: t("volume_mapping.x2")
      }, {
        value: "x^3",
        label: t("volume_mapping.x3")
      }, {
        value: "x^4",
        label: t("volume_mapping.x4")
      }, {
        value: "x^5",
        label: t("volume_mapping.x5")
      } ],
      default: "linear",
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    volumeSliderExponentialLabelType: {
      type: "select",
      category: "volume",
      group: "volumeSlider",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      options: () => [ {
        value: "positionBased",
        label: t("volume_label_mapped_type.positionBased")
      }, {
        value: "valueBased",
        label: t("volume_label_mapped_type.valueBased")
      }, {
        value: "both",
        label: t("volume_label_mapped_type.both")
      } ],
      default: "valueBased",
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    volumeSliderLabel: {
      type: "toggle",
      category: "volume",
      group: "volumeSlider",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    volumeSliderSize: {
      type: "number",
      category: "volume",
      group: "volumeSlider",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      min: 50,
      max: 500,
      step: 1,
      default: 150,
      unit: "px",
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    volumeSliderStep: {
      type: "slider",
      category: "volume",
      group: "volumeSlider",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      min: 1,
      max: 25,
      default: 2,
      unit: "%",
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    volumeSliderScrollStep: {
      type: "slider",
      category: "volume",
      group: "volumeSlider",
      supportedSites: [ "ytm" ],
      since: "1.1.0",
      min: 1,
      max: 25,
      default: 4,
      unit: "%",
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    volumeSharedBetweenTabs: {
      type: "toggle",
      category: "volume",
      group: "volumeSharedBetweenTabs",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: false,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    setInitialTabVolume: {
      type: "toggle",
      category: "volume",
      group: "initialTabVolume",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: false,
      adornments: () => getFeature("volumeSharedBetweenTabs") ? [ adornments.ytmOnly, adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload ] : [ adornments.ytmOnly, adornments.reload ]
    },
    initialTabVolumeLevel: {
      type: "number",
      category: "volume",
      group: "initialTabVolume",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      min: 0,
      max: 100,
      step: 1,
      default: 100,
      unit: "%",
      renderValue: value => {
        if (getFeature("volumeSliderExponential") !== "linear") {
          const expMapped = (expVolFn(Number(value) / 100) * 100).toFixed(1);
          const fixedPtVal = [ "0.0", "100.0" ].includes(expMapped) ? expMapped.slice(0, -2) : expMapped;
          return `${value}% (${fixedPtVal}%)`;
        }
        return `${value}%`;
      },
      adornments: () => getFeature("volumeSharedBetweenTabs") ? [ adornments.ytmOnly, adornments.reload, adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")) ] : [ adornments.ytmOnly, adornments.reload ]
    },
    disableBeforeUnloadPopup: {
      type: "toggle",
      category: "behavior",
      group: "disableBeforeUnloadPopup",
      supportedSites: [ "ytm", "yt" ],
      since: "1.0.0",
      default: false,
      reloadRequired: false
    },
    autoCloseToasts: {
      type: "toggle",
      category: "behavior",
      group: "autoCloseToasts",
      supportedSites: [ "ytm", "yt" ],
      since: "3.0.0",
      default: true,
      reloadRequired: false
    },
    closeToastsTimeout: {
      type: "slider",
      category: "behavior",
      group: "autoCloseToasts",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      min: .5,
      max: 30,
      step: .5,
      default: 3,
      unit: "s",
      reloadRequired: false
    },
    rememberSongTime: {
      type: "toggle",
      category: "behavior",
      group: "rememberSongTime",
      supportedSites: [ "ytm", "yt" ],
      since: "1.1.0",
      default: true,
      helpText: () => tp("feature_helptext.rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
      adornments: [ adornments.reload ]
    },
    rememberSongTimeSites: {
      type: "select",
      category: "behavior",
      group: "rememberSongTime",
      supportedSites: [ "ytm", "yt" ],
      since: "1.1.0",
      options: options.siteSelection,
      default: "all",
      adornments: [ adornments.reload ]
    },
    rememberSongTimeDuration: {
      type: "number",
      category: "behavior",
      group: "rememberSongTime",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      min: 1,
      max: 60 * 60 * 24 * 7,
      step: 1,
      default: 180,
      unit: "s",
      reloadRequired: false
    },
    rememberSongTimeReduction: {
      type: "number",
      category: "behavior",
      group: "rememberSongTime",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      min: 0,
      step: .01,
      default: .2,
      unit: "s",
      reloadRequired: false
    },
    rememberSongTimeMinPlayTime: {
      type: "slider",
      category: "behavior",
      group: "rememberSongTime",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      min: 1,
      max: 30,
      step: .5,
      default: 5,
      unit: "s",
      reloadRequired: false
    },
    hideCursorOnIdle: {
      type: "toggle",
      category: "behavior",
      group: "hideCursorOnIdle",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      default: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    hideCursorOnIdleDelay: {
      type: "slider",
      category: "behavior",
      group: "hideCursorOnIdle",
      supportedSites: [ "ytm" ],
      since: "2.0.0",
      min: .5,
      max: 10,
      step: .25,
      default: 3,
      unit: "s",
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    hidePlayerBarOnIdleInFullscreen: {
      type: "toggle",
      category: "behavior",
      group: "hideCursorOnIdle",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    yesImStillThere: {
      category: "behavior",
      group: "yesImStillThere",
      type: "toggle",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    autoScrollToActiveSongMode: {
      type: "select",
      category: "behavior",
      group: "autoScrollToActiveSongMode",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      options: () => [ {
        value: "never",
        label: t("auto_scroll_to_active_song_mode.never")
      }, {
        value: "initialPageLoad",
        label: t("auto_scroll_to_active_song_mode.initial_page_load")
      }, {
        value: "videoChangeAll",
        label: t("auto_scroll_to_active_song_mode.video_change_all")
      }, {
        value: "videoChangeManual",
        label: t("auto_scroll_to_active_song_mode.video_change_manual")
      }, {
        value: "videoChangeAuto",
        label: t("auto_scroll_to_active_song_mode.video_change_auto")
      } ],
      default: "videoChangeManual",
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    autoLikeChannels: {
      type: "toggle",
      category: "autoLike",
      group: "autoLikeChannels",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      default: true,
      adornments: [ adornments.reload ]
    },
    autoLikeOpenMgmtDialog: {
      type: "button",
      category: "autoLike",
      group: "autoLikeChannels",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      click: () => getAutoLikeDialog().then(d => d.open())
    },
    autoLikeChannelToggleBtn: {
      type: "toggle",
      category: "autoLike",
      group: "autoLikeChannels",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      default: true,
      reloadRequired: false,
      advanced: true,
      adornments: [ adornments.advanced ]
    },
    autoLikeTimeout: {
      type: "slider",
      category: "autoLike",
      group: "autoLikeChannels",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      min: 3,
      max: 30,
      step: .5,
      default: 5,
      unit: "s",
      reloadRequired: false
    },
    autoLikeShowToast: {
      type: "toggle",
      category: "autoLike",
      group: "autoLikeChannels",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0",
      default: true,
      reloadRequired: false
    },
    arrowKeySupport: {
      type: "toggle",
      category: "input",
      group: "arrowKeySupport",
      supportedSites: [ "ytm" ],
      since: "0.1.0",
      default: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    arrowKeySkipBy: {
      type: "number",
      category: "input",
      group: "arrowKeySupport",
      supportedSites: [ "ytm" ],
      since: "1.1.0",
      min: .1,
      step: .1,
      default: 5,
      unit: "s",
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    arrowKeyVolumeStep: {
      type: "slider",
      category: "input",
      group: "arrowKeySupport",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      min: 1,
      max: 25,
      step: 1,
      default: 2,
      unit: "%",
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    frameSkip: {
      type: "toggle",
      category: "input",
      group: "frameSkip",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    frameSkipWhilePlaying: {
      type: "toggle",
      category: "input",
      group: "frameSkip",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: false,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    frameSkipAmount: {
      type: "number",
      category: "input",
      group: "frameSkip",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      min: 0,
      step: 1e-4,
      default: .0166,
      unit: "s",
      reloadRequired: false,
      advanced: true,
      adornments: [ adornments.ytmOnly, adornments.advanced ]
    },
    anchorImprovements: {
      type: "toggle",
      category: "input",
      group: "anchorImprovements",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    numKeysSkipToTime: {
      type: "toggle",
      category: "input",
      group: "numKeysSkipToTime",
      supportedSites: [ "ytm" ],
      since: "1.0.0",
      default: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    numKeysSkipToTimeDoublePress: {
      type: "slider",
      category: "input",
      group: "numKeysSkipToTime",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: 0,
      min: 0,
      max: 3e3,
      step: 100,
      renderValue: value => String(Number(value) === 0 ? t("toggled_off") : `${value}ms`),
      reloadRequired: false
    },
    numKeysSkipToTimeDoublePressBuffer: {
      type: "slider",
      category: "input",
      group: "numKeysSkipToTime",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: 5,
      min: 0,
      max: 30,
      step: .5,
      renderValue: value => String(Number(value) === 0 ? t("toggled_off") : `${formatNumber(Number(value), "short")}s`),
      reloadRequired: false,
      advanced: true,
      adornments: [ adornments.advanced ]
    },
    switchBetweenSites: {
      type: "toggle",
      category: "hotkeys",
      group: "switchBetweenSites",
      supportedSites: [ "ytm", "yt" ],
      since: "0.2.0",
      default: true,
      reloadRequired: false
    },
    switchSitesHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "switchBetweenSites",
      supportedSites: [ "ytm", "yt" ],
      since: "1.1.0",
      default: {
        code: "F9",
        shift: false,
        ctrl: false,
        alt: false
      },
      reloadRequired: false
    },
    switchSitesNewTabHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "switchBetweenSites",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: {
        code: "F9",
        shift: false,
        ctrl: true,
        alt: false
      },
      reloadRequired: false
    },
    likeDislikeHotkeys: {
      type: "toggle",
      category: "hotkeys",
      group: "likeDislikeHotkeys",
      supportedSites: [ "ytm", "yt" ],
      since: "3.0.0",
      default: true,
      reloadRequired: false
    },
    likeDislikeHotkeysToggle: {
      type: "toggle",
      category: "hotkeys",
      group: "likeDislikeHotkeys",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: false,
      reloadRequired: false
    },
    likeHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "likeDislikeHotkeys",
      supportedSites: [ "ytm", "yt" ],
      since: "3.0.0",
      default: {
        code: "KeyL",
        shift: true,
        ctrl: false,
        alt: false
      },
      reloadRequired: false
    },
    dislikeHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "likeDislikeHotkeys",
      supportedSites: [ "ytm", "yt" ],
      since: "3.0.0",
      default: {
        code: "KeyD",
        shift: true,
        ctrl: false,
        alt: false
      },
      reloadRequired: false
    },
    currentLyricsHotkeyEnabled: {
      type: "toggle",
      category: "hotkeys",
      group: "currentLyricsHotkeyEnabled",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: true,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    currentLyricsHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "currentLyricsHotkeyEnabled",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: {
        code: "KeyO",
        shift: false,
        ctrl: false,
        alt: false
      },
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    skipToRemTimeHotkeyEnabled: {
      type: "toggle",
      category: "hotkeys",
      group: "skipToRemTimeHotkeyEnabled",
      supportedSites: [ "ytm", "yt" ],
      since: "3.0.0",
      default: true,
      reloadRequired: false,
      change: newVal => newVal && !getFeature("rememberSongTime") && showIconToast({
        icon: "icon-error",
        iconFill: "var(--bytm-error-col)",
        message: t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"),
        duration: 20,
        onClick: () => getErrorDialog(t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"), [ t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled") ]).open()
      }),
      adornments: () => !getFeature("rememberSongTime") ? [ () => adornments.alert(t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled").replace(/"/g, "'")) ] : []
    },
    skipToRemTimeHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "skipToRemTimeHotkeyEnabled",
      supportedSites: [ "ytm", "yt" ],
      since: "3.0.0",
      default: {
        code: "KeyR",
        shift: false,
        ctrl: false,
        alt: true
      },
      reloadRequired: false
    },
    focusSearchBarHotkeyEnabled: {
      type: "toggle",
      category: "hotkeys",
      group: "focusSearchBarHotkey",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: true,
      reloadRequired: false
    },
    focusSearchBarHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "focusSearchBarHotkey",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: {
        code: "KeyF",
        shift: true,
        ctrl: false,
        alt: false
      },
      reloadRequired: false
    },
    clearSearchBarHotkeyEnabled: {
      type: "toggle",
      category: "hotkeys",
      group: "clearSearchBarHotkey",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: true,
      reloadRequired: false
    },
    clearSearchBarHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "clearSearchBarHotkey",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: {
        code: "Delete",
        shift: true,
        ctrl: false,
        alt: false
      },
      reloadRequired: false
    },
    rebindNextAndPrevious: {
      type: "toggle",
      category: "hotkeys",
      group: "rebindNextAndPrevious",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: false,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    nextHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "rebindNextAndPrevious",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: {
        code: "KeyN",
        shift: true,
        ctrl: false,
        alt: false
      },
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    previousHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "rebindNextAndPrevious",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: {
        code: "KeyP",
        shift: true,
        ctrl: false,
        alt: false
      },
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    rebindPlayPause: {
      type: "toggle",
      category: "hotkeys",
      group: "rebindPlayPause",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: false,
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    playPauseHotkey: {
      type: "hotkey",
      category: "hotkeys",
      group: "rebindPlayPause",
      supportedSites: [ "ytm" ],
      since: "3.0.0",
      default: {
        code: "Pause",
        shift: false,
        ctrl: false,
        alt: false
      },
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    disableDarkReaderSites: {
      type: "select",
      category: "integrations",
      group: "darkReader",
      supportedSites: [ "ytm", "yt" ],
      since: "2.0.0",
      options: options.siteSelectionOrNone,
      default: "all",
      adornments: [ adornments.reload ]
    },
    sponsorBlockIntegration: {
      type: "toggle",
      category: "integrations",
      group: "sponsorBlock",
      supportedSites: [ "ytm" ],
      since: "2.1.0-preview.1",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    themeSongIntegration: {
      type: "toggle",
      category: "integrations",
      group: "themeSong",
      supportedSites: [ "ytm" ],
      since: "2.1.0-preview.1",
      default: false,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    themeSongLightness: {
      type: "select",
      category: "integrations",
      group: "themeSong",
      supportedSites: [ "ytm" ],
      since: "2.1.0-preview.1",
      options: options.colorLightness,
      default: "darker",
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    themeSongVisualizerOpacity: {
      type: "number",
      category: "integrations",
      group: "themeSongVisualizer",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: 100,
      min: 0,
      max: 100,
      step: 1,
      unit: "%",
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    themeSongVisualizerHotkeyEnabled: {
      type: "toggle",
      category: "integrations",
      group: "themeSongVisualizer",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: false,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    themeSongVisualizerHotkey: {
      type: "hotkey",
      category: "integrations",
      group: "themeSongVisualizer",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: {
        code: "KeyV",
        shift: true,
        ctrl: true,
        alt: false
      },
      reloadRequired: false,
      adornments: [ adornments.ytmOnly ]
    },
    removeThumbnailRatingBar: {
      type: "toggle",
      category: "integrations",
      group: "thumbnailRatingBar",
      supportedSites: [ "ytm" ],
      since: "3.1.0",
      default: true,
      adornments: [ adornments.ytmOnly, adornments.reload ]
    },
    openPluginList: {
      type: "button",
      category: "plugins",
      group: "pluginList",
      supportedSites: [ "ytm", "yt" ],
      since: "2.1.0-preview.1",
      default: undefined,
      click: () => getPluginListDialog().then(d => d.open())
    },
    openPluginDiscoverySite: {
      type: "button",
      category: "plugins",
      group: "pluginList",
      supportedSites: [ "ytm", "yt" ],
      since: "3.1.0",
      default: undefined,
      click: () => UserUtils.openInNewTab(packageJson.pluginDiscoveryUrl)
    }
  };
  const cfgFormatVersion = 11;
  const cfgDefaultData = CoreUtils.pureObj(Object.keys(featInfo).filter(ftKey => featInfo?.[ftKey] && "default" in featInfo[ftKey] && featInfo[ftKey].default !== undefined).reduce((acc, key) => {
    acc[key] = featInfo?.[key] && "default" in featInfo[key] ? featInfo?.[key]?.default : undefined;
    return acc;
  }, {}));
  const cfgMigrations = {
    2: oldData => {
      if (typeof oldData !== "object" || oldData === null) return cfgDefaultData;
      const queueBtnsEnabled = Boolean(oldData.queueButtons);
      delete oldData.queueButtons;
      return {
        ...oldData,
        deleteFromQueueButton: queueBtnsEnabled,
        lyricsQueueButton: queueBtnsEnabled
      };
    },
    3: oldData => useNewDefaults(oldData, [ "removeShareTrackingParam", "numKeysSkipToTime", "fixSpacing", "scrollToActiveSongBtn", "logLevel" ]),
    4: oldData => {
      const oldSwitchSitesHotkey = oldData.switchSitesHotkey;
      return {
        ...useNewDefaults(oldData, [ "rememberSongTime", "rememberSongTimeSites", "volumeSliderScrollStep", "locale", "versionCheck" ]),
        arrowKeySkipBy: 10,
        switchSitesHotkey: {
          code: oldSwitchSitesHotkey.key ?? "F9",
          shift: Boolean(oldSwitchSitesHotkey.shift ?? false),
          ctrl: Boolean(oldSwitchSitesHotkey.ctrl ?? false),
          alt: Boolean(oldSwitchSitesHotkey.meta ?? false)
        },
        listButtonsPlacement: "queueOnly"
      };
    },
    5: oldData => useNewDefaults(oldData, [ "localeFallback", "geniUrlBase", "geniUrlToken", "lyricsCacheMaxSize", "lyricsCacheTTL", "clearLyricsCache", "advancedMode", "checkVersionNow", "advancedLyricsFilter", "rememberSongTimeDuration", "rememberSongTimeReduction", "rememberSongTimeMinPlayTime", "volumeSharedBetweenTabs", "setInitialTabVolume", "initialTabVolumeLevel", "thumbnailOverlayBehavior", "thumbnailOverlayToggleBtnShown", "thumbnailOverlayShowIndicator", "thumbnailOverlayIndicatorOpacity", "thumbnailOverlayImageFit", "removeShareTrackingParamSites", "fixHdrIssues", "clearQueueBtn", "closeToastsTimeout", "disableDarkReaderSites" ]),
    6: oldData => {
      const newData = useNewDefaultsIfUnchanged(useNewDefaults(oldData, [ "autoLikeChannels", "autoLikeChannelToggleBtn", "autoLikeTimeout", "autoLikeShowToast", "autoLikeOpenMgmtDialog", "showVotes", "numbersFormat", "toastDuration", "initTimeout", "volumeSliderLabel" ]), [ {
        key: "rememberSongTimeSites",
        oldDefault: "ytm"
      }, {
        key: "volumeSliderScrollStep",
        oldDefault: 10
      } ]);
      "removeUpgradeTab" in newData && delete newData.removeUpgradeTab;
      "advancedLyricsFilter" in newData && delete newData.advancedLyricsFilter;
      return newData;
    },
    7: oldData => {
      const newData = useNewDefaultsIfUnchanged(useNewDefaults(oldData, [ "showToastOnGenericError", "sponsorBlockIntegration", "themeSongIntegration", "themeSongLightness", "errorOnLyricsNotFound", "openPluginList" ]), [ {
        key: "toastDuration",
        oldDefault: 3
      } ]);
      newData.arrowKeySkipBy = CoreUtils.clamp(newData.arrowKeySkipBy, .5, 30);
      return newData;
    },
    8: oldData => {
      if ("showVotesFormat" in oldData) {
        oldData.numbersFormat = oldData.showVotesFormat;
        delete oldData.showVotesFormat;
      }
      return useNewDefaults(oldData, [ "autoLikeChannels" ]);
    },
    9: oldData => {
      oldData.locale = oldData.locale.replace("_", "-");
      if (oldData.locale === "ja-JA") oldData.locale = "ja-JP";
      if (oldData.locale === "en-GB") oldData.locale = "en-GB";
      return useNewDefaults(oldData, [ "resetEverything" ]);
    },
    10: oldData => {
      oldData.closeToastsTimeout = CoreUtils.clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
      oldData.lyricsCacheMaxSize = CoreUtils.clamp(oldData.lyricsCacheMaxSize, featInfo.lyricsCacheMaxSize.min, featInfo.lyricsCacheMaxSize.max);
      oldData.autoCloseToasts = oldData.closeToastsTimeout > 0;
      oldData.closeToastsTimeout = CoreUtils.clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
      if ("thumbnailOverlayImageFit" in oldData) delete oldData.thumbnailOverlayImageFit;
      return useNewDefaultsIfUnchanged(useNewDefaults(oldData, [ "aboveQueueBtnsSticky", "autoScrollToActiveSongMode", "frameSkip", "frameSkipWhilePlaying", "frameSkipAmount", "watchPageFullSize", "arrowKeyVolumeStep", "likeDislikeHotkeys", "likeHotkey", "dislikeHotkey", "currentLyricsHotkeyEnabled", "currentLyricsHotkey", "skipToRemTimeHotkeyEnabled", "skipToRemTimeHotkey", "rebindNextAndPrevious", "nextHotkey", "previousHotkey", "rebindPlayPause", "playPauseHotkey", "thumbnailOverlayITunesImgRes" ]), [ {
        key: "lyricsCacheMaxSize",
        oldDefault: 2e3
      } ]);
    },
    11: oldData => {
      const newCfg = useNewDefaultsIfUnchanged(useNewDefaults(oldData, [ "thumbnailOverlayPreferredSource", "swapLikeDislikeButtons", "thumbnailOverlayAlbumArtCacheTTL", "thumbnailOverlayAlbumArtCacheMaxSize", "focusSearchBarHotkeyEnabled", "focusSearchBarHotkey", "clearSearchBarHotkeyEnabled", "clearSearchBarHotkey", "songListTrackNumbersEnabled", "songListTrackNumbers", "yesImStillThere", "removeThumbnailRatingBar", "numKeysSkipToTimeDoublePress", "numKeysSkipToTimeDoublePressBuffer", "volumeSliderExponential", "volumeSliderExponentialLabelType", "likeDislikeHotkeysToggle", "openPluginDiscoverySite", "hidePlayerBarOnIdleInFullscreen", "themeSongVisualizerOpacity", "themeSongVisualizerHotkeyEnabled", "themeSongVisualizerHotkey", "truncatePlayerBarSubtitles", "logHttp", "switchSitesNewTabHotkey" ]), [ {
        key: "thumbnailOverlayAlbumArtCacheMaxSize",
        oldDefault: 2e3
      }, {
        key: "thumbnailOverlayITunesImgRes",
        oldDefault: 1500
      }, {
        key: "thumbnailOverlayIndicatorOpacity",
        oldDefault: 40
      }, {
        key: "lyricsCacheMaxSize",
        oldDefault: 5e3
      }, {
        key: "rememberSongTimeMinPlayTime",
        oldDefault: 10
      }, {
        key: "hideCursorOnIdleDelay",
        oldDefault: 2
      }, {
        key: "initTimeout",
        oldDefault: 8
      }, {
        key: "rememberSongTimeDuration",
        oldDefault: 60
      }, {
        key: "frameSkipAmount",
        oldDefault: .0417
      } ]);
      artCacheStore.deleteData().then(() => {
        info("Cleared album artwork cache due to improvements in the way album artworks are resolved, which made a large portion of the cached artworks wrong.");
      });
      if (newCfg.initTimeout <= 10) newCfg.initTimeout *= 1e3;
      return useNewRanges(newCfg, [ "initTimeout", "thumbnailOverlayITunesImgRes" ]);
    }
  };
  function useNewDefaults(baseData, resetKeys) {
    const newData = structuredClone({
      ...cfgDefaultData,
      ...baseData ?? {}
    });
    for (const key of resetKeys) newData[key] = featInfo?.[key]?.default;
    return newData;
  }
  function useNewDefaultsIfUnchanged(oldData, oldDefaults) {
    const newData = structuredClone(oldData);
    for (const {key: key, oldDefault: oldDefault} of oldDefaults) {
      const defaultVal = featInfo?.[key]?.default;
      if (newData[key] === oldDefault) newData[key] = defaultVal;
    }
    return newData;
  }
  function useNewRanges(config, keys) {
    const newCfg = structuredClone(config);
    for (const key of keys) {
      const info = featInfo[key];
      if (info && "min" in info && "max" in info) newCfg[key] = clampNewRange(newCfg, key);
    }
    return newCfg;
  }
  function clampNewRange(config, key) {
    const val = config[key];
    const info = featInfo[key];
    return CoreUtils.clamp(val, info.min, info.max);
  }
  const configStore = new CoreUtils.DataStore({
    id: "bytm-config",
    formatVersion: cfgFormatVersion,
    engine: new UserUtils.GMStorageEngine,
    defaultData: cfgDefaultData,
    migrations: cfgMigrations,
    compressionFormat: compressionFormat$1
  });
  async function initConfig() {
    const oldFmtVer = Number(await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-ver`, NaN));
    let oldDataHash;
    try {
      const oldData = await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-dat`, "{}");
      const oldDataObj = JSON.parse(oldData);
      if (oldDataObj !== null && typeof oldDataObj === "object" && Object.keys(oldDataObj).length > 0) oldDataHash = await CoreUtils.computeHash(JSON.stringify(oldDataObj), "sha256");
    } catch {}
    let data = fixCfgKeys(await configStore.loadData());
    if (oldDataHash && oldDataHash !== await CoreUtils.computeHash(JSON.stringify(data), "sha256")) {
      if (await showPrompt({
        type: "confirm",
        message: t("config_data_changed_prompt_open_menu"),
        confirmBtnText: t("open"),
        confirmBtnTooltip: t("open_menu_tooltip"),
        denyBtnText: t("prompt_close"),
        denyBtnTooltip: t("click_to_close_tooltip")
      })) window.addEventListener("bytm:allReady", () => openCfgMenu(), {
        once: true
      });
    }
    log(`Initialized feature config DataStore with version ${configStore.formatVersion}`);
    if (isNaN(oldFmtVer)) warn("  ⚠️ - Config data was initialized with default values"); else if (oldFmtVer !== configStore.formatVersion) {
      try {
        await configStore.setData(data = fixCfgKeys(data));
        info(`  ⚠️ - Config data was migrated from version ${oldFmtVer} to ${configStore.formatVersion}`);
      } catch (err) {
        error("  ⚠️ - Config data migration failed, falling back to default data:", err);
        await configStore.setData(data = configStore.defaultData);
      }
    }
    emitInterface("bytm:configReady");
    return structuredClone(data);
  }
  function fixCfgKeys(cfg) {
    const newCfg = structuredClone(cfg);
    const passedKeys = Object.keys(cfg);
    const defaultKeys = Object.keys(cfgDefaultData);
    const missingKeys = defaultKeys.filter(k => !passedKeys.includes(k));
    if (missingKeys.length > 0) {
      for (const key of missingKeys) newCfg[key] = cfgDefaultData[key];
    }
    const extraKeys = passedKeys.filter(k => !defaultKeys.includes(k));
    if (extraKeys.length > 0) {
      for (const key of extraKeys) delete newCfg[key];
    }
    return newCfg;
  }
  function getFeatures() {
    return configStore.getData();
  }
  function getFeature(key, defaultVal) {
    const val = configStore.getData()[key];
    return val !== undefined ? val : defaultVal;
  }
  function setFeatures(featureConf) {
    const res = configStore.setData(featureConf);
    emitSiteEvent("configChanged", getFeaturesNoHidden());
    info("Saved new feature config:", getFeaturesNoHidden());
    return res;
  }
  function getFeaturesNoHidden(featureCfg) {
    const feats = structuredClone({
      ...getFeatures()
    });
    for (const ftKey of Object.keys(feats)) {
      const info = featInfo[ftKey];
      if (info && "valueHidden" in info && info.valueHidden) feats[ftKey] = undefined;
    }
    return feats;
  }
  function setDefaultFeatures() {
    const res = configStore.saveDefaultData();
    emitSiteEvent("configChanged", getFeaturesNoHidden());
    info("Reset feature config to its default values");
    return res;
  }
  async function promptResetConfig() {
    if (await showPrompt({
      type: "confirm",
      message: t("reset_config_confirm")
    })) {
      closeCfgMenu();
      enableDiscardBeforeUnload();
      await setDefaultFeatures();
      await reloadTab();
    }
  }
  async function clearConfig() {
    await configStore.deleteData();
    info("Deleted config from persistent storage");
  }
  const {mode: mode, branch: branch, host: host, buildNumber: buildNumber, compressionFormat: compressionFormat, scriptInfo: scriptInfo, initialParams: initialParams, sessionStorageAvailable: sessionStorageAvailable} = constants;
  const {autoPlural: autoPlural, NanoEmitter: NanoEmitter, pureObj: pureObj} = CoreUtils__namespace;
  const {getUnsafeWindow: getUnsafeWindow} = UserUtils__namespace;
  const globalFuncs = pureObj({
    getPluginInfo: getPluginInfo,
    getInternals: getInternals,
    getDomain: getDomain,
    getResourceUrl: getResourceUrl,
    resourceAsString: resourceAsString,
    getSessionId: getSessionId,
    reloadTab: reloadTab,
    setInnerHtml: setInnerHtml,
    addSelectorListener: addSelectorListener,
    onInteraction: onInteraction,
    getVideoTime: getVideoTime,
    getThumbnailUrl: getThumbnailUrl,
    getBestThumbnailUrl: getBestThumbnailUrl,
    fetchITunesAlbumInfo: fetchITunesAlbumInfo,
    waitVideoElementReady: waitVideoElementReady,
    getVideoElement: getVideoElement,
    getVideoSelector: getVideoSelector,
    getCurrentMediaType: getCurrentMediaType,
    getLikeDislikeBtns: getLikeDislikeBtns,
    isIgnoredInputElement: isIgnoredInputElement,
    onSiteEvent: siteEvents.on.bind(siteEvents),
    onceSiteEvent: siteEvents.once.bind(siteEvents),
    onMultiSiteEvents: siteEvents.onMulti.bind(siteEvents),
    setLocale: setLocaleInterface,
    getLocale: getLocale,
    hasKey: hasKey,
    hasKeyFor: hasKeyFor,
    t: t,
    tp: tp,
    tl: tl,
    tlp: tlp,
    getFeatures: getFeaturesInterface,
    saveFeatures: saveFeaturesInterface,
    getDefaultFeatures: () => structuredClone(cfgDefaultData),
    fetchLyricsUrlTop: fetchLyricsUrlTop,
    getLyricsCacheEntry: getLyricsCacheEntry,
    sanitizeArtists: sanitizeArtists,
    sanitizeSong: sanitizeSong,
    getAutoLikeData: getAutoLikeDataInterface,
    saveAutoLikeData: saveAutoLikeDataInterface,
    fetchVideoVotes: fetchVideoVotes,
    createHotkeyInput: createHotkeyInput,
    createToggleInput: createToggleInput,
    createCircularBtn: createCircularBtn,
    createRipple: createRipple,
    showToast: showToast,
    showIconToast: showIconToast,
    showPrompt: showPromptInterface,
    formatNumber: formatNumber
  });
  function initInterface() {
    const props = {
      mode: mode,
      branch: branch,
      host: host,
      buildNumber: buildNumber,
      initialParams: initialParams,
      compressionFormat: compressionFormat,
      sessionStorageAvailable: sessionStorageAvailable,
      ...scriptInfo,
      ...globalFuncs,
      NanoEmitter: NanoEmitter,
      BytmDialog: BytmDialog,
      ExImDialog: ExImDialog,
      MarkdownDialog: MarkdownDialog,
      getBytmDialog: getBytmDialog,
      getExImDialog: getExImDialog,
      getMarkdownDialog: getMarkdownDialog,
      CoreUtils: CoreUtils__namespace,
      UserUtils: UserUtils__namespace,
      compareVersions: compareVersions__namespace
    };
    for (const [key, value] of Object.entries(props)) setGlobalProp(key, value);
    setGlobalProp("sessionId", getSessionId());
    log("Initialized BYTM interface");
  }
  function setGlobalProp(key, value) {
    const win = getUnsafeWindow();
    if (typeof win.BYTM !== "object") win.BYTM = pureObj({});
    win.BYTM[key] = value;
  }
  function emitInterface(type, ...detail) {
    try {
      unsafeWindow.dispatchEvent(new CustomEvent(type, {
        detail: detail?.[0] ?? undefined
      }));
      emitOnPlugins(type, undefined, ...detail);
      if (getFeature("logEvents")) {
        detail.length > 0 && detail?.[0] ? log(`Emitted interface event '${type}' with data:`, ...detail) : log(`Emitted interface event '${type}' (without data)`);
      }
    } catch (err) {
      error(`Couldn't emit interface event '${type}' due to an error:\n`, err);
    }
  }
  const registeredPlugins = new Map;
  const registeredPluginTokens = new Map;
  let pluginsInitialized = false;
  function preInitPlugins() {
    emitInterface("bytm:preInitPlugin", registerPlugin);
  }
  function initPlugins() {
    emitInterface("bytm:registerPlugin", registerPlugin);
    registerDevPlugin();
    window.addEventListener("bytm:ready", () => {
      pluginsInitialized = true;
      if (registeredPlugins.size > 0) info(`Registered ${registeredPlugins.size} ${autoPlural("plugin", registeredPlugins.size)}${mode === "development" ? " (including dev plugin)" : ""}`); else log("No plugins registered");
    }, {
      once: true
    });
  }
  function registerPlugin(def) {
    try {
      if (pluginsInitialized) throw new PluginError(`Failed to register plugin '${getPluginKey(def)}': BYTM interface has already been initialized - plugins can only be registered after the 'bytm:registerPlugin' event and before the 'bytm:ready' event`);
      const plKey = getPluginKey(def);
      if (registeredPlugins.has(plKey)) throw new PluginError(`Failed to register plugin '${plKey}': Plugin with the same name and namespace is already registered`);
      const validationErrors = validatePluginDef(def);
      if (validationErrors) throw new PluginError(`Failed to register plugin${def?.plugin?.name ? ` '${def?.plugin?.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`);
      const events = new NanoEmitter({
        publicEmit: true
      });
      const token = crypto.randomUUID();
      registeredPlugins.set(plKey, {
        def: def,
        events: events
      });
      registeredPluginTokens.set(plKey, token);
      const permissionInt = defToIntentsBitSet(def);
      const permissions = {
        int: permissionInt,
        array: parseBitSetEnumArray(permissionInt, PluginIntent)
      };
      info(`Successfully registered plugin '${plKey}'`);
      setTimeout(() => emitOnPlugins("pluginRegistered", d => sameDef(d, def), pluginDefToInfo(def)), 0);
      return {
        info: getPluginInfo(token, def),
        events: events,
        token: token,
        permissions: permissions
      };
    } catch (err) {
      error(`Failed to register plugin '${getPluginKey(def)}':`, err instanceof PluginError ? err : new PluginError(String(err)));
      throw err;
    }
  }
  let devPluginToken;
  const devPluginId = CoreUtils__namespace.randomId(8, 36, true, true);
  function registerDevPlugin() {
    if (mode !== "development") return;
    try {
      const description = [ "de-DE", "en-US", "es-ES", "fr-FR", "hi-IN", "ja-JP", "pt-BR", "zh-CN" ].reduce((acc, loc) => ({
        ...acc,
        [loc]: t("dev_plugin.description")
      }), {});
      const {token: token, events: events} = registerPlugin({
        plugin: {
          name: t("dev_plugin.name"),
          namespace: `${packageJson.namespace}+${devPluginId}`,
          version: packageJson.version,
          description: description,
          homepage: {
            source: packageJson.homepage,
            changelog: `${packageJson.homepage}/blob/${branch}/changelog.md`,
            bug: packageJson.bugs.url,
            greasyfork: packageJson.hosts.greasyfork,
            openuserjs: packageJson.hosts.openuserjs,
            other: packageJson.hosts.github
          },
          iconUrl: "https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_dev_128.png"
        },
        intents: PluginIntent.FullAccess
      });
      devPluginToken = token;
      setGlobalProp("devPluginEvents", events);
    } catch (err) {
      error("Failed to register dev plugin:", err instanceof PluginError ? err : new PluginError(String(err), {
        cause: err
      }));
    }
  }
  function getRegisteredPlugins() {
    return [ ...registeredPlugins.entries() ];
  }
  function getPluginKey(plugin) {
    return `${plugin.plugin.namespace}/${plugin.plugin.name}`;
  }
  function pluginDefToInfo(plugin) {
    return plugin ? {
      name: plugin.plugin.name,
      namespace: plugin.plugin.namespace,
      version: plugin.plugin.version
    } : undefined;
  }
  function sameDef(def1, def2) {
    return getPluginKey(def1) === getPluginKey(def2);
  }
  function emitOnPlugins(event, predicate = true, ...data) {
    for (const {def: def, events: events} of registeredPlugins.values()) if (typeof predicate === "boolean" ? predicate : predicate(def)) events.emit(event, ...data);
  }
  function getPlugin(...args) {
    return typeof args[0] === "string" && typeof args[1] === "undefined" ? registeredPlugins.get(args[0]) : args.length === 2 ? registeredPlugins.get(`${args[1]}/${args[0]}`) : registeredPlugins.get(getPluginKey(args[0]));
  }
  function getPluginInfo(...args) {
    if (resolveToken(args[0]) === undefined) return undefined;
    return pluginDefToInfo(registeredPlugins.get(typeof args[1] === "string" && typeof args[2] === "undefined" ? args[1] : args.length === 2 ? getPluginKey(args[1]) : `${args[2]}/${args[1]}`)?.def);
  }
  function pluginHasPerms(...args) {
    const plugin = typeof args[0] === "string" && typeof args[1] === "string" ? getPlugin(args[0], args[1]) : getPlugin(args[0]);
    if (!plugin) return false;
    const asArray = value => Array.isArray(value) ? value : [ value ];
    const perms = (typeof args[0] === "string" && typeof args[1] === "string" ? asArray(args[2]) : asArray(args[1])) ?? [];
    if (!Array.isArray(perms)) throw new TypeError("The second argument must be an array of PluginIntent values");
    const pluginIntents = defToIntentsBitSet(plugin.def);
    return UserUtils__namespace.bitSetHas(pluginIntents, PluginIntent.FullAccess) || perms.every(perm => CoreUtils__namespace.bitSetHas(pluginIntents, perm));
  }
  function defToIntentsBitSet(def) {
    if (Array.isArray(def.intents)) return def.intents.reduce((acc, intent) => acc | intent, 0); else if (typeof def.intents === "number") return def.intents; else return 0;
  }
  function parseBitSetEnumArray(bitSet, enumRef) {
    const result = [];
    for (const [, val] of Object.entries(enumRef)) if ((typeof val === "number" || typeof val === "bigint") && CoreUtils__namespace.bitSetHas(bitSet, val)) result.push(val);
    return result;
  }
  function validatePluginDef(pluginDef) {
    const errors = [];
    const addNoPropErr = (jsonPath, type) => errors.push(t("plugin_validation_error_no_property", jsonPath, type));
    const addInvalidPropErr = (jsonPath, value, examples) => errors.push(tp("plugin_validation_error_invalid_property", examples, jsonPath, value, `'${examples.join("', '")}'`));
    typeof pluginDef.plugin !== "object" && addNoPropErr("plugin", "object");
    const {plugin: plugin} = pluginDef;
    !plugin?.name && addNoPropErr("plugin.name", "string");
    !plugin?.namespace && addNoPropErr("plugin.namespace", "string");
    if (typeof plugin?.version !== "string") addNoPropErr("plugin.version", "MAJOR.MINOR.PATCH"); else if (!compareVersions__namespace.validateStrict(plugin.version)) addInvalidPropErr("plugin.version", plugin.version, [ "0.0.1", "2.5.21-rc.1" ]);
    return errors.length > 0 ? errors : undefined;
  }
  function resolveToken(token) {
    return typeof token === "string" && token.length > 0 ? [ ...registeredPluginTokens.entries() ].find(([k, t]) => registeredPlugins.has(k) && token === t)?.[0] ?? undefined : undefined;
  }
  function setLocaleInterface(token, locale) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteTranslations)) return;
    setLocale(locale);
    emitInterface("bytm:setLocale", {
      pluginId: pluginId,
      locale: locale
    });
  }
  function getFeaturesInterface(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.ReadFeatureConfig)) return undefined;
    const hiddenAccess = pluginHasPerms(pluginId, PluginIntent.SeeHiddenConfigValues);
    const features = hiddenAccess ? getFeatures() : getFeaturesNoHidden();
    return features;
  }
  function saveFeaturesInterface(token, features) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteFeatureConfig)) return;
    setFeatures(features);
  }
  function getAutoLikeDataInterface(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.ReadAutoLikeData)) return;
    return autoLikeStore.getData();
  }
  function saveAutoLikeDataInterface(token, data) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteAutoLikeData)) return;
    return autoLikeStore.setData(data);
  }
  function getBytmDialog(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
    return BytmDialog;
  }
  function getExImDialog(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
    return ExImDialog;
  }
  function getMarkdownDialog(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
    return MarkdownDialog;
  }
  function showPromptInterface(token, ...args) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
    return showPrompt(...args);
  }
  function getInternals(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.InternalAccess)) return undefined;
    return {
      constants: constants,
      emitInterface: emitInterface,
      emitSiteEvent: emitSiteEvent,
      siteEvents: siteEvents,
      addSelectorListener: addSelectorListener,
      showPrompt: showPrompt,
      setGlobalProp: setGlobalProp,
      enableDiscardBeforeUnload: enableDiscardBeforeUnload,
      disableDiscardBeforeUnload: disableDiscardBeforeUnload
    };
  }
  const globservers = {};
  let globserversReady = false;
  function addSelectorListener(observerName, selector, options) {
    try {
      if (!globserversReady) {
        window.addEventListener("bytm:observersReady", () => addSelectorListener(observerName, selector, options), {
          once: true
        });
        return;
      }
      globservers[observerName].addListener(selector, options);
    } catch (err) {
      error(`Couldn't add listener to globserver '${observerName}':`, err);
    }
  }
  function initObservers(cfg) {
    const defaultObserverOptions = {
      disableOnNoListeners: false,
      enableOnAddListener: false,
      defaultDebounce: cfg.defaultObserverDebounce,
      defaultDebounceType: "immediate"
    };
    try {
      globservers.body = new UserUtils.SelectorObserver(document.body, {
        ...defaultObserverOptions,
        subtree: false
      });
      globservers.body.enable();
      const bytmDialogContainerSelector = "#bytm-dialog-container";
      globservers.bytmDialogContainer = new UserUtils.SelectorObserver(bytmDialogContainerSelector, {
        ...defaultObserverOptions,
        defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 1.5),
        subtree: true
      });
      globservers.bytmDialogContainer.enable();
      switch (getDomain()) {
       case "ytm":
        {
          const browseResponseSelector = "ytmusic-browse-response";
          globservers.browseResponse = new UserUtils.SelectorObserver(browseResponseSelector, {
            ...defaultObserverOptions,
            defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
            subtree: true
          });
          globservers.body.addListener(browseResponseSelector, {
            listener: () => globservers.browseResponse.enable()
          });
          const searchPageSelector = "ytmusic-search-page";
          globservers.searchPage = new UserUtils.SelectorObserver(searchPageSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(searchPageSelector, {
            listener: () => globservers.searchPage.enable()
          });
          const navBarSelector = "ytmusic-nav-bar";
          globservers.navBar = new UserUtils.SelectorObserver(navBarSelector, {
            ...defaultObserverOptions,
            subtree: false
          });
          globservers.body.addListener(navBarSelector, {
            listener: () => globservers.navBar.enable()
          });
          const mainPanelSelector = "ytmusic-player-page #main-panel";
          globservers.mainPanel = new UserUtils.SelectorObserver(mainPanelSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(mainPanelSelector, {
            listener: () => globservers.mainPanel.enable()
          });
          const sidebarSelector = "ytmusic-app-layout tp-yt-app-drawer";
          globservers.sideBar = new UserUtils.SelectorObserver(sidebarSelector, {
            ...defaultObserverOptions,
            attributes: true,
            childList: true,
            subtree: true
          });
          globservers.body.addListener(sidebarSelector, {
            listener: () => globservers.sideBar.enable()
          });
          const sidePanelSelector = "#side-panel";
          globservers.sidePanel = new UserUtils.SelectorObserver(sidePanelSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(sidePanelSelector, {
            listener: () => globservers.sidePanel.enable()
          });
          const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
          globservers.playerBar = new UserUtils.SelectorObserver(playerBarSelector, {
            ...defaultObserverOptions
          });
          globservers.body.addListener(playerBarSelector, {
            listener: () => {
              globservers.playerBar.enable();
            }
          });
          const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
          globservers.playerBarInfo = new UserUtils.SelectorObserver(playerBarInfoSelector, {
            ...defaultObserverOptions,
            attributes: true,
            attributeFilter: [ "title" ]
          });
          globservers.playerBar.addListener(playerBarInfoSelector, {
            listener: () => globservers.playerBarInfo.enable()
          });
          const playerBarMiddleButtonsSelector = ".middle-controls .middle-controls-buttons";
          globservers.playerBarMiddleButtons = new UserUtils.SelectorObserver(playerBarMiddleButtonsSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.playerBar.addListener(playerBarMiddleButtonsSelector, {
            listener: () => globservers.playerBarMiddleButtons.enable()
          });
          const playerBarRightControls = "#right-controls";
          globservers.playerBarRightControls = new UserUtils.SelectorObserver(playerBarRightControls, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.playerBar.addListener(playerBarRightControls, {
            listener: () => globservers.playerBarRightControls.enable()
          });
          const popupContainerSelector = "ytmusic-app ytmusic-popup-container";
          globservers.popupContainer = new UserUtils.SelectorObserver(popupContainerSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(popupContainerSelector, {
            listener: () => globservers.popupContainer.enable()
          });
          break;
        }

       case "yt":
        {
          const ytGuideSelector = "#content tp-yt-app-drawer#guide #guide-inner-content";
          globservers.ytGuide = new UserUtils.SelectorObserver(ytGuideSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(ytGuideSelector, {
            listener: () => globservers.ytGuide.enable()
          });
          const ytdBrowseSelector = "ytd-app ytd-page-manager ytd-browse";
          globservers.ytdBrowse = new UserUtils.SelectorObserver(ytdBrowseSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(ytdBrowseSelector, {
            listener: () => globservers.ytdBrowse.enable()
          });
          const ytAppHeaderSelector = "#header ytd-app-header, #header ytd-tabbed-page-header";
          globservers.ytAppHeader = new UserUtils.SelectorObserver(ytAppHeaderSelector, {
            ...defaultObserverOptions,
            defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
            subtree: true
          });
          globservers.ytdBrowse.addListener(ytAppHeaderSelector, {
            listener: () => globservers.ytAppHeader.enable()
          });
          const ytWatchFlexySelector = "ytd-app ytd-watch-flexy";
          globservers.ytWatchFlexy = new UserUtils.SelectorObserver(ytWatchFlexySelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(ytWatchFlexySelector, {
            listener: () => globservers.ytWatchFlexy.enable()
          });
          const ytWatchMetadataSelector = "#columns #primary-inner ytd-watch-metadata";
          globservers.ytWatchMetadata = new UserUtils.SelectorObserver(ytWatchMetadataSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.ytWatchFlexy.addListener(ytWatchMetadataSelector, {
            listener: () => globservers.ytWatchMetadata.enable()
          });
          const mastheadSelector = "#content ytd-masthead#masthead";
          globservers.ytMasthead = new UserUtils.SelectorObserver(mastheadSelector, {
            ...defaultObserverOptions,
            subtree: true
          });
          globservers.body.addListener(mastheadSelector, {
            listener: () => globservers.ytMasthead.enable()
          });
        }
      }
      globserversReady = true;
      emitInterface("bytm:observersReady");
      UserUtils.getUnsafeWindow().BYTM.globservers = globservers;
    } catch (err) {
      error("Failed to initialize observers:", err);
    }
  }
  function getVideoSelector() {
    return getDomain() === "ytm" ? "ytmusic-player video" : "#player-container ytd-player video";
  }
  function getVideoElement() {
    return document.querySelector(getVideoSelector());
  }
  let vidElemReady = false;
  function getVideoTime(precision = 2) {
    return new Promise(async res => {
      if (!vidElemReady) {
        await waitVideoElementReady();
        vidElemReady = true;
      }
      const resolveWithVal = time => res(time && !isNaN(time) ? Number(precision <= 0 ? Math.floor(time) : time.toFixed(precision)) : null);
      try {
        if (getDomain() === "ytm") {
          const vidElem = getVideoElement();
          if (vidElem && vidElem.readyState > 0) return resolveWithVal(vidElem.currentTime);
          addSelectorListener("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
            listener: pbEl => resolveWithVal(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
          });
        } else if (getDomain() === "yt") {
          const vidElem = getVideoElement();
          if (vidElem && vidElem.readyState > 0) return resolveWithVal(vidElem.currentTime);
          ytForceShowVideoTime();
          const pbSelector = '.ytp-chrome-bottom div.ytp-progress-bar[role="slider"]';
          let videoTime = -1;
          const mut = new MutationObserver(() => {
            videoTime = Number(document.querySelector(pbSelector).getAttribute("aria-valuenow"));
          });
          const observe = progElem => {
            mut.observe(progElem, {
              attributes: true,
              attributeFilter: [ "aria-valuenow" ]
            });
            if (videoTime >= 0 && !isNaN(videoTime)) {
              resolveWithVal(Math.floor(videoTime));
              mut.disconnect();
            } else setTimeout(() => {
              resolveWithVal(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
              mut.disconnect();
            }, 500);
          };
          addSelectorListener("body", pbSelector, {
            listener: observe
          });
        }
      } catch (err) {
        error("Couldn't get video time due to error:", err);
        res(null);
      }
    });
  }
  function ytForceShowVideoTime() {
    const player = document.querySelector("#movie_player");
    if (!player) return false;
    const defaultProps = {
      view: UserUtils.getUnsafeWindow(),
      bubbles: true,
      cancelable: false
    };
    player.dispatchEvent(new MouseEvent("mouseenter", defaultProps));
    const {x: x, y: y, width: width, height: height} = player.getBoundingClientRect();
    const screenY = Math.round(y + height / 2);
    const screenX = x + Math.min(50, Math.round(width / 3));
    player.dispatchEvent(new MouseEvent("mousemove", {
      ...defaultProps,
      screenY: screenY,
      screenX: screenX,
      movementX: 5,
      movementY: 0
    }));
    return true;
  }
  function waitVideoElementReady() {
    return new Promise(async (res, rej) => {
      try {
        if (!UserUtils.isDomLoaded()) await UserUtils.onDomLoad();
        const vidEl = getVideoElement();
        if (vidEl && (vidEl?.readyState ?? 0) === 4) return res(vidEl);
        if (!location.pathname.startsWith("/watch")) await siteEvents.once("watchIdChanged");
        addSelectorListener("body", getVideoSelector(), {
          listener(vidElem) {
            if (vidElem.readyState === 4) res(vidElem); else vidElem.addEventListener("canplay", () => res(vidElem), {
              once: true
            });
          }
        });
      } catch (err) {
        rej(err);
      }
    });
  }
  function getLikeDislikeBtns() {
    let btnRenderer;
    let likeBtn;
    let dislikeBtn;
    let likeState;
    switch (getDomain()) {
     case "ytm":
      {
        btnRenderer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer") ?? undefined;
        likeBtn = btnRenderer?.querySelector("#button-shape-like button") ?? undefined;
        dislikeBtn = btnRenderer?.querySelector("#button-shape-dislike button") ?? undefined;
        const likeStateRaw = btnRenderer?.getAttribute("like-status")?.toUpperCase();
        likeState = [ "LIKE", "DISLIKE", "INDIFFERENT" ].includes(likeStateRaw ?? "") ? likeStateRaw : "INDIFFERENT";
        break;
      }

     case "yt":
      {
        btnRenderer = document.querySelector("ytd-watch-metadata segmented-like-dislike-button-view-model") ?? undefined;
        likeBtn = btnRenderer?.querySelector("like-button-view-model button") ?? undefined;
        dislikeBtn = btnRenderer?.querySelector("dislike-button-view-model button") ?? undefined;
        if (likeBtn?.getAttribute("aria-pressed") === "true") likeState = "LIKE"; else if (dislikeBtn?.getAttribute("aria-pressed") === "true") likeState = "DISLIKE"; else if (likeBtn || dislikeBtn) likeState = "INDIFFERENT";
        if (!btnRenderer && !likeBtn && !dislikeBtn) {
          btnRenderer = document.querySelector("reel-action-bar-view-model") ?? undefined;
          likeBtn = btnRenderer?.querySelector("like-button-view-model button") ?? undefined;
          dislikeBtn = btnRenderer?.querySelector("dislike-button-view-model button") ?? undefined;
        }
        const liked = likeBtn?.getAttribute("aria-pressed") === "true";
        const disliked = dislikeBtn?.getAttribute("aria-pressed") === "true";
        if (likeBtn && dislikeBtn) likeState = liked ? "LIKE" : disliked ? "DISLIKE" : "INDIFFERENT";
        break;
      }
    }
    return {
      likeBtn: likeBtn,
      dislikeBtn: dislikeBtn,
      btnRenderer: btnRenderer,
      likeState: likeState
    };
  }
  async function addStyle(css, ref, transform = c => c) {
    if (!UserUtils.isDomLoaded()) throw new Error("DOM has not finished loading yet");
    const elem = UserUtils.addGlobalStyle(await transform(await CoreUtils.consumeStringGen(css)));
    elem.id = `bytm-style-${ref ?? CoreUtils.randomId(6, 36)}`;
    return elem;
  }
  async function addStyleFromResource(key, transform = c => c) {
    try {
      const css = await fetchCss(key);
      if (css) {
        await addStyle(String(transform(css)), key.slice(4));
        return true;
      }
    } catch (err) {
      error(`Couldn't add style from resource "${key}":`, err);
      return false;
    }
  }
  function setGlobalCssVar(name, value) {
    document.documentElement.style.setProperty(`--bytm-global-${name.toLowerCase().trim()}`, String(value));
  }
  function setGlobalCssVars(vars) {
    for (const [name, value] of Object.entries(vars)) setGlobalCssVar(name, value);
  }
  function clearInner(element) {
    while (element.hasChildNodes()) clearNode(element.firstChild);
  }
  function clearNode(element) {
    while (element.hasChildNodes()) clearNode(element.firstChild);
    element.parentNode.removeChild(element);
  }
  function getCurrentMediaType() {
    if (getDomain() === "yt") return "video";
    const songImgElem = document.querySelector("ytmusic-player #song-image");
    if (!songImgElem) throw new Error("Couldn't find the song image element. Use this function only after awaiting `waitVideoElementReady()`!");
    return window.getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
  }
  function copyToClipboard(text) {
    try {
      GM.setClipboard(String(text));
    } catch {
      showPrompt({
        type: "alert",
        message: t("copy_to_clipboard_error", String(text))
      });
    }
  }
  const trustedTypesSupported = typeof window?.trustedTypes?.createPolicy === "function";
  let ttPolicy;
  const tempTargetAttrName = `data-tmp-target-${CoreUtils.randomId(6, 36)}`;
  DOMPurify.addHook("beforeSanitizeAttributes", node => {
    if (node.tagName === "A") {
      if (!node.hasAttribute("target")) node.setAttribute("target", "_self");
      if (node.hasAttribute("target")) node.setAttribute(tempTargetAttrName, node.getAttribute("target"));
    }
  });
  DOMPurify.addHook("afterSanitizeAttributes", node => {
    if (node.tagName === "A" && node.hasAttribute(tempTargetAttrName)) {
      node.setAttribute("target", node.getAttribute(tempTargetAttrName));
      node.removeAttribute(tempTargetAttrName);
      if (node.getAttribute("target") === "_blank") node.setAttribute("rel", "noopener noreferrer");
    }
  });
  function sanitizeHtml(html, returnTrustedType = trustedTypesSupported) {
    return DOMPurify.sanitize(String(html), {
      RETURN_TRUSTED_TYPE: returnTrustedType
    });
  }
  function setInnerHtml(element, html) {
    if (!html) html = "";
    if (!ttPolicy && trustedTypesSupported) {
      ttPolicy = window.trustedTypes.createPolicy("bytm-sanitize-html", {
        createHTML: html => sanitizeHtml(html, true)
      });
    }
    element.innerHTML = ttPolicy?.createHTML(html) ?? sanitizeHtml(html, false);
  }
  function downloadFile(fileName, data, mimeType = "text/plain") {
    const blob = data instanceof Blob ? data : new Blob([ data ], {
      type: mimeType
    });
    const a = document.createElement("a");
    a.classList.add("bytm-hidden");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    return new Promise(res => {
      setTimeout(() => {
        a.remove();
        res();
      }, 1);
    });
  }
  function transplantElement(element, target, position = "afterend") {
    const inserted = target.insertAdjacentElement(position, element);
    if (!inserted) throw new Error(`Failed to transplant element at position "${position}"`);
    return element;
  }
  let welcomeDialog = null;
  async function getWelcomeDialog() {
    if (!welcomeDialog) {
      welcomeDialog = new BytmDialog({
        id: "welcome",
        width: 700,
        height: 500,
        closeBtnEnabled: true,
        closeOnBgClick: false,
        closeOnEscPress: true,
        destroyOnClose: true,
        renderHeader: renderHeader,
        renderBody: renderBody,
        renderFooter: renderFooter
      });
      welcomeDialog.on("render", retranslateWelcomeMenu);
    }
    return welcomeDialog;
  }
  async function renderHeader() {
    const titleWrapperElem = document.createElement("div");
    titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";
    const titleLogoElem = document.createElement("img");
    titleLogoElem.id = "bytm-welcome-menu-title-logo";
    titleLogoElem.classList.add("bytm-no-select");
    titleLogoElem.src = await getResourceUrl(mode$1 === "development" ? "img-logo_dev" : "img-logo");
    const titleElem = document.createElement("h2");
    titleElem.id = "bytm-welcome-menu-title";
    titleElem.classList.add("bytm-dialog-title");
    titleElem.role = "heading";
    titleElem.ariaLevel = "1";
    titleElem.tabIndex = 0;
    titleWrapperElem.appendChild(titleLogoElem);
    titleWrapperElem.appendChild(titleElem);
    return titleWrapperElem;
  }
  async function renderBody() {
    const contentWrapper = document.createElement("div");
    contentWrapper.id = "bytm-welcome-menu-content-wrapper";
    const localeCont = document.createElement("div");
    localeCont.id = "bytm-welcome-menu-locale-cont";
    const localeImg = document.createElement("img");
    localeImg.id = "bytm-welcome-menu-locale-img";
    localeImg.classList.add("bytm-no-select");
    localeImg.src = await getResourceUrl("icon-globe");
    const localeSelectElem = document.createElement("select");
    localeSelectElem.id = "bytm-welcome-menu-locale-select";
    for (const [locale, {name: name}] of Object.entries(localesJson)) {
      const localeOptionElem = document.createElement("option");
      localeOptionElem.value = locale;
      localeOptionElem.textContent = name;
      localeSelectElem.appendChild(localeOptionElem);
    }
    localeSelectElem.value = getFeature("locale");
    localeSelectElem.addEventListener("change", async () => {
      const selectedLocale = localeSelectElem.value;
      const feats = Object.assign({}, getFeatures());
      feats.locale = selectedLocale;
      setFeatures(feats);
      await initTranslations(selectedLocale);
      setLocale(selectedLocale);
      retranslateWelcomeMenu();
    });
    localeCont.appendChild(localeImg);
    localeCont.appendChild(localeSelectElem);
    contentWrapper.appendChild(localeCont);
    const textCont = document.createElement("div");
    textCont.id = "bytm-welcome-menu-text-cont";
    const textElem = document.createElement("p");
    textElem.id = "bytm-welcome-menu-text";
    const textElems = [];
    const line1Elem = document.createElement("span");
    line1Elem.id = "bytm-welcome-text-line1";
    line1Elem.tabIndex = 0;
    textElems.push(line1Elem);
    const br1Elem = document.createElement("br");
    textElems.push(br1Elem);
    const line2Elem = document.createElement("span");
    line2Elem.id = "bytm-welcome-text-line2";
    line2Elem.tabIndex = 0;
    textElems.push(line2Elem);
    const br2Elem = document.createElement("br");
    textElems.push(br2Elem);
    const br3Elem = document.createElement("br");
    textElems.push(br3Elem);
    const line3Elem = document.createElement("span");
    line3Elem.id = "bytm-welcome-text-line3";
    line3Elem.tabIndex = 0;
    textElems.push(line3Elem);
    const br4Elem = document.createElement("br");
    textElems.push(br4Elem);
    const line4Elem = document.createElement("span");
    line4Elem.id = "bytm-welcome-text-line4";
    line4Elem.tabIndex = 0;
    textElems.push(line4Elem);
    const br5Elem = document.createElement("br");
    textElems.push(br5Elem);
    const br6Elem = document.createElement("br");
    textElems.push(br6Elem);
    const line5Elem = document.createElement("span");
    line5Elem.id = "bytm-welcome-text-line5";
    line5Elem.tabIndex = 0;
    textElems.push(line5Elem);
    textElems.forEach(elem => textElem.appendChild(elem));
    textCont.appendChild(textElem);
    contentWrapper.appendChild(textCont);
    return contentWrapper;
  }
  function retranslateWelcomeMenu() {
    const getLink = href => [ `<a href="${href}" class="bytm-link" target="_blank" rel="noopener noreferrer">`, "</a>" ];
    const changes = {
      "#bytm-welcome-menu-title": e => e.textContent = e.ariaLabel = t("welcome_menu_title", scriptInfo$1.name),
      "#bytm-welcome-menu-open-cfg": e => {
        e.textContent = e.ariaLabel = t("config_menu");
        e.ariaLabel = e.title = t("open_config_menu_tooltip");
      },
      "#bytm-welcome-menu-footer-close": e => {
        e.textContent = e.ariaLabel = t("close");
        e.ariaLabel = e.title = t("close_menu_tooltip");
      },
      "#bytm-welcome-text-line1": e => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_1")),
      "#bytm-welcome-text-line2": e => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_2", scriptInfo$1.name)),
      "#bytm-welcome-text-line3": e => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_3", scriptInfo$1.name, ...getLink(`${packageJson.hosts.greasyfork}/feedback`), ...getLink(packageJson.hosts.openuserjs))),
      "#bytm-welcome-text-line4": e => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_4", ...getLink(packageJson.funding.url))),
      "#bytm-welcome-text-line5": e => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_5", ...getLink(packageJson.bugs.url)))
    };
    for (const [selector, fn] of Object.entries(changes)) {
      const el = document.querySelector(selector);
      if (!el) {
        warn(`Couldn't find element in welcome menu with selector '${selector}'`);
        continue;
      }
      fn(el);
    }
  }
  async function renderFooter() {
    const footerCont = document.createElement("div");
    footerCont.id = "bytm-welcome-menu-footer-cont";
    const openCfgElem = document.createElement("button");
    openCfgElem.id = "bytm-welcome-menu-open-cfg";
    openCfgElem.classList.add("bytm-btn");
    openCfgElem.addEventListener("click", () => {
      welcomeDialog?.close();
      openCfgMenu();
    });
    const closeBtnElem = document.createElement("button");
    closeBtnElem.id = "bytm-welcome-menu-footer-close";
    closeBtnElem.classList.add("bytm-btn");
    closeBtnElem.addEventListener("click", async () => {
      welcomeDialog?.close();
    });
    const leftButtonsCont = document.createElement("div");
    leftButtonsCont.id = "bytm-menu-footer-left-buttons-cont";
    leftButtonsCont.appendChild(openCfgElem);
    footerCont.appendChild(leftButtonsCont);
    footerCont.appendChild(closeBtnElem);
    return footerCont;
  }
  {
    const [styleGradient, gradientContBg] = (() => {
      switch (mode$1) {
       case "production":
        return [ "background: rgb(165, 57, 36); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(165, 57, 36) 100%);", "rgb(165, 57, 36)" ];

       case "development":
        return [ "background: rgb(72, 66, 178); background: linear-gradient(90deg, rgb(38, 160, 172) 0%, rgb(33, 48, 158) 40%, rgb(72, 66, 178) 100%);", "rgb(72, 66, 178)" ];
      }
    })();
    const styleCommon = "color: #fff; font-size: 1.3rem;";
    const poweredBy = `Powered by:\n─ Lots of ambition and dedication\n─ My song metadata API: https://api.sv443.net/geniurl\n─ My core utility library: https://github.com/Sv443-Network/CoreUtils\n─ My DOM utility library: https://github.com/Sv443-Network/UserUtils\n─ This library for semver comparison: https://github.com/omichelsen/compare-versions\n─ This TrustedTypes-compatible HTML sanitization library: https://github.com/cure53/DOMPurify\n─ This markdown parser library: https://github.com/markedjs/marked\n─ This tiny event listener library: https://github.com/ai/nanoevents\n─ TypeScript and the tslib runtime: https://github.com/microsoft/TypeScript\n─ The Cousine font: https://fonts.google.com/specimen/Cousine`;
    console.log(`%c${scriptInfo$1.name}%cv${scriptInfo$1.version}%c • ${scriptInfo$1.namespace}%c\n\nBuild #${buildNumber$1}${mode$1 === "development" ? " (dev mode)" : ""}\n\n%c${poweredBy}`, `${styleCommon} ${styleGradient} font-weight: bold; padding-left: 6px; padding-right: 6px;`, `${styleCommon} background-color: ${gradientContBg}; padding-left: 8px; padding-right: 8px;`, "color: #fff; font-size: 1.2rem;", "padding: initial; font-size: 0.9rem;", "padding: initial; font-size: 1rem;");
  }
  const initTimings = {
    _comments: [ `This is a performance report generated by ${scriptInfo$1.name} (${packageJson.homepage})`, "It shows the amount of time (in ms) it took to complete various stages of the initialization process.", "- The 'start' property is a 13-digit epoch timestamp representing the time at which the script started running.", "- The timings in the 'durations' property are generic measurements of how long certain phases are. These measurements do not start at the 'start' property timestamp.", "- The timings in the 'featureDurations' property are measurements of how long it took for each individual feature entrypoint to initialize, starting from the beginning of the feature initialization phase - also refer to 'featuresAllReady_deferred' in the 'durations' property." ],
    meta: {
      version: scriptInfo$1.version,
      domain: getDomain(),
      userAgent: navigator.userAgent,
      scriptHandler: GM.info?.scriptHandler ?? "unknown",
      scriptHandlerVersion: GM.info?.version ?? "unknown",
      isIncognito: GM.info?.isIncognito ?? undefined,
      sandboxMode: GM.info?.sandboxMode ?? undefined,
      injectInto: GM.info?.injectInto ?? undefined,
      isFirstPartyIsolation: GM.info?.isFirstPartyIsolation ?? undefined
    },
    start: 0,
    durations: {},
    featureDurations: {}
  };
  function measureInitDuration(name) {
    const start = Date.now();
    return () => {
      if (typeof initTimings.durations !== "object") initTimings.durations = {};
      initTimings.durations[name] = Date.now() - start;
    };
  }
  function preInit() {
    try {
      initTimings.start = Date.now();
      const unsupportedHandlers = [ "FireMonkey" ];
      if (unsupportedHandlers.includes(GM.info?.scriptHandler ?? "")) return alert(`BetterYTM does not work when using ${GM.info?.scriptHandler ?? "(unknown)"} as the userscript manager extension and will be disabled.\nIt's highly recommended you use either ViolentMonkey, TamperMonkey or GreaseMonkey.`);
      setLogLevel(defaultLogLevel);
      initBroadcast();
      initInterface();
      preInitPlugins();
      if (getDomain() === "ytm") initBeforeUnloadHook();
      initTimings.preInitEnd = Date.now() - initTimings.start;
      init();
    } catch (err) {
      return error("Fatal pre-init error:", err);
    }
  }
  async function init() {
    try {
      const domain = getDomain();
      const endCfgDur = measureInitDuration("initConfig");
      const features = await initConfig();
      endCfgDur();
      setLogLevel(features.logLevel);
      info("Session ID:", getSessionId());
      const endResCacheDur = measureInitDuration("initResourceCache");
      await initResourceCache();
      endResCacheDur();
      const endLyrCacheDur = measureInitDuration("initLyricsCache");
      await initLyricsCache();
      endLyrCacheDur();
      const initLoc = features.locale ?? "en-US";
      await initTranslations(initLoc);
      initLoc !== "en-US" && await initTranslations("en-US");
      setLocale(initLoc);
      try {
        initPlugins();
      } catch (err) {
        error("Plugin loading error:", err);
        emitInterface("bytm:fatalError", "Error while loading plugins");
      }
      if (features.disableBeforeUnloadPopup && domain === "ytm") enableDiscardBeforeUnload();
      if (features.rememberSongTime) initRememberVideoTime();
      if (!UserUtils.isDomLoaded()) document.addEventListener("DOMContentLoaded", () => onDomLoad(), {
        once: true
      }); else onDomLoad();
    } catch (err) {
      error("Fatal error:", err);
      alert(`${scriptInfo$1.name} encountered a fatal error during initialization and will not work correctly, if at all.\nFor information on what caused this error, please refer to the JS console.\n\n${assetSource === "local" ? `⚠️ The assetSource constant is set to "local", so this is likely due to the development server not running. This can be confirmed if there are NetworkErrors in the console when fetching ${scriptInfo$1.name} resources.\nPlease run "pnpm dev" or "pnpm serve" in the project directory and reload the page.` : `Please report this bug using the issue tracker on GitHub:\n${packageJson.bugs.url}\n\nFor now, you can try reinstalling the script or downgrading to a previous version that worked for you.`}${mode$1 === "development" ? `\n\n⚠️ You're running a development version of the script, so it might just be in a broken state at the moment. Either downgrade to the latest stable release, or check back later on the following page for an updated version:\n${packageJson.devVersionUrl}` : ""}`);
    }
  }
  async function onDomLoad() {
    initTimings.domLoaded = Date.now() - initTimings.start;
    const domain = getDomain();
    const feats = getFeatures();
    const ftInit = [];
    document.body.classList.add(`bytm-dom-${domain}`);
    initExponentialVolume();
    try {
      setTimeout(() => {
        const endInitGlobalDur = measureInitDuration("initGlobals_deferred");
        initGlobalCss();
        initObservers(feats);
        Promise.allSettled([ injectCssBundle(), initVersionCheck() ]).then(() => endInitGlobalDur());
        initSiteEvents();
        mountCfgMenu();
      }, 0);
    } catch (err) {
      error("Encountered error in feature pre-init:", err);
    }
    info(`DOM loaded and feature pre-init finished, now initializing all feature entrypoints for domain "${domain}"...`, LogLevel.Info);
    try {
      if (typeof await GM.getValue("bytm-installed") !== "string") {
        const dlg = await getWelcomeDialog();
        dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({
          timestamp: Date.now(),
          version: scriptInfo$1.version
        })));
        info("Showing welcome menu");
        await dlg.open();
        await dlg.once("close");
      }
      const endStaticDataDur = measureInitDuration("initStaticData");
      initStaticData().then(() => endStaticDataDur());
      await initVersionSessionCounter();
      if (domain === "ytm") {
        ftInit.push([ "addWatermark", (async () => {
          await improveLogo();
          if (feats.watermarkEnabled) await addWatermark();
        })() ]);
        if (feats.fixSpacing) ftInit.push([ "fixSpacing", fixSpacing() ]);
        if (feats.truncatePlayerBarSubtitles) ftInit.push([ "truncatePlayerBarSubtitles", initTruncatePlayerBarSubtitles() ]);
        ftInit.push([ "thumbnailOverlay", initThumbnailOverlay() ]);
        if (feats.hideCursorOnIdle) ftInit.push([ "hideCursorOnIdle", initHideCursorOnIdle() ]);
        if (feats.fixHdrIssues) ftInit.push([ "fixHdrIssues", fixHdrIssues() ]);
        if (feats.showVotes) ftInit.push([ "showVotes", initShowVotes() ]);
        if (feats.swapLikeDislikeButtons) ftInit.push([ "swapLikeDislikeBtns", initSwapLikeDislikeBtns() ]);
        if (feats.watchPageFullSize) ftInit.push([ "watchPageFullSize", initWatchPageFullSize() ]);
        ftInit.push([ "volumeFeatures", initVolumeFeatures() ]);
        if (feats.lyricsQueueButton || feats.deleteFromQueueButton) ftInit.push([ "queueButtons", initQueueButtons() ]);
        ftInit.push([ "aboveQueueButtons", initAboveQueueBtns() ]);
        if (feats.songListTrackNumbersEnabled) ftInit.push([ "songListTrackNumbers", addTrackNumbers() ]);
        if (feats.closeToastsTimeout > 0) ftInit.push([ "autoCloseToasts", initAutoCloseToasts() ]);
        ftInit.push([ "autoScrollToActiveSongMode", initAutoScrollToActiveSong() ]);
        ftInit.push([ "yesImStillThere", initStillThere() ]);
        ftInit.push([ "arrowKeySkip", initArrowKeySkip() ]);
        ftInit.push([ "frameSkip", initFrameSkip() ]);
        if (feats.anchorImprovements) ftInit.push([ "anchorImprovements", addAnchorImprovements() ]);
        if (feats.geniusLyrics) ftInit.push([ "playerBarLyricsBtn", addPlayerBarLyricsBtn() ]);
        if (feats.sponsorBlockIntegration) ftInit.push([ "sponsorBlockIntegration", fixSponsorBlock() ]);
        const hideThemeSongLogo = addStyleFromResource("css-hide_themesong_logo");
        if (feats.themeSongVisualizerOpacity !== 100) ftInit.push([ "themeSongVisualizerOpacity", setThemeSongVisualizerOpacity() ]);
        if (feats.themeSongIntegration) ftInit.push([ "themeSongIntegration", Promise.allSettled([ fixThemeSong(), hideThemeSongLogo ]) ]); else ftInit.push([ "themeSongIntegration", Promise.allSettled([ fixPlayerPageTheming(), hideThemeSongLogo ]) ]);
        if (feats.removeThumbnailRatingBar) ftInit.push([ "removeThumbnailRatingBar", (async () => void await addStyleFromResource("css-remove_thumb_rating_bar"))() ]);
      }
      try {
        if (domain === "ytm") {
          addSelectorListener("popupContainer", "tp-yt-iron-dropdown #contentWrapper ytmusic-multi-page-menu-renderer #container", {
            listener: addConfigMenuOptionYTM
          });
        } else if (domain === "yt") {
          addSelectorListener("ytGuide", "#sections ytd-guide-section-renderer:nth-child(6) #items ytd-guide-entry-renderer:nth-child(1)", {
            listener: el => el.parentElement && addConfigMenuOptionYT(el.parentElement)
          });
        }
      } catch (err) {
        error("Couldn't add config menu option:", err);
      }
      if ([ "ytm", "yt" ].includes(domain)) {
        if (feats.removeShareTrackingParamSites) ftInit.push([ "initRemShareTrackParam", initRemShareTrackParam() ]);
        ftInit.push([ "hotkeys", initHotkeys() ]);
        if (feats.autoLikeChannels) ftInit.push([ "autoLikeChannels", initAutoLike() ]);
        ftInit.push([ "numKeysSkip", initNumKeysSkip() ]);
        if (feats.disableDarkReaderSites !== "none") ftInit.push([ "disableDarkReaderSites", disableDarkReader() ]);
      }
      emitInterface("bytm:featureInitStarted");
      const initStartTs = Date.now();
      const initTimeout = feats.initTimeout > 0 ? feats.initTimeout : 8e3;
      const initializedFeats = [];
      const endFeatInitDur = measureInitDuration("featuresAllReady_deferred");
      (() => Promise.race([ CoreUtils.pauseFor(initTimeout), Promise.allSettled(ftInit.map(([name, prom]) => new Promise(async res => {
        const v = await prom;
        initTimings.featureDurations = {
          ...initTimings.featureDurations ?? {},
          [name]: Date.now() - initStartTs
        };
        initializedFeats.push(name);
        emitInterface("bytm:featureInitialized", name);
        emitInterface(`bytm:featureInitialized:${name}`);
        res(v);
      }))) ]).then(() => {
        endFeatInitDur();
        emitInterface("bytm:allReady");
        initTimings.allReady = Date.now() - initStartTs;
        if (initializedFeats.length < ftInit.length) {
          errorNoToast(`Only ${initializedFeats.length} out of ${ftInit.length} feature entrypoints initialized within the limit of ${initTimeout}ms. These ones have timed out:${ftInit.reduce((a, [name]) => initializedFeats.includes(name) ? a : `${a}\n- ${name}`, "")}`);
        } else info(`Done initializing ${initializedFeats.length} / ${ftInit.length} feature entrypoints after ${Math.floor(Date.now() - initStartTs)}ms`);
      }))();
      UserUtils.getUnsafeWindow().dispatchEvent(new Event("resize", {
        bubbles: true,
        cancelable: true
      }));
      preloadResources();
      initTimings.ready = Date.now() - initTimings.start;
      emitInterface("bytm:ready");
      try {
        registerDevCommands();
      } catch (e) {
        warn("Couldn't register dev menu commands:", e);
      }
      try {
        runDevTreatments();
      } catch (e) {
        warn("Couldn't run dev treatments:", e);
      }
    } catch (err) {
      error("Feature error:", err);
      emitInterface("bytm:fatalError", "Error while initializing features");
    } finally {
      initTimings.postInitEnd = Date.now() - initTimings.start;
    }
  }
  async function preloadResources() {
    const preloadAssetRegex = new RegExp(resourcesJson.preloadAssetPattern);
    const urlPromises = Object.keys(resourcesJson.resources).filter(k => preloadAssetRegex.test(k)).map(k => getResourceUrl(k));
    const urls = await Promise.all(urlPromises);
    if (urls.length > 0) info("Preloading", urls.length, "resources:", urls); else info("No resources to preload");
    await UserUtils.preloadImages(urls);
  }
  async function injectCssBundle() {
    if (!await addStyleFromResource("css-bundle")) error("Couldn't inject CSS bundle due to an error");
  }
  function initGlobalCss() {
    try {
      initFonts();
      const applyVars = () => {
        setGlobalCssVars({
          "inner-height": `${window.innerHeight}px`,
          "outer-height": `${window.outerHeight}px`,
          "inner-width": `${window.innerWidth}px`,
          "outer-width": `${window.outerWidth}px`
        });
      };
      window.addEventListener("resize", applyVars);
      applyVars();
    } catch (err) {
      error("Couldn't initialize global CSS:", err);
    }
  }
  async function initFonts() {
    const fonts = {
      "Cousine": {
        woff: await getResourceUrl("font-cousine_woff"),
        woff2: await getResourceUrl("font-cousine_woff2"),
        truetype: await getResourceUrl("font-cousine_ttf")
      }
    };
    let css = "";
    for (const [fontName, urls] of Object.entries(fonts)) css += `@font-face {\n  font-family: "${fontName}";\n  src: ${Object.entries(urls).map(([type, url]) => `url("${url}") format("${type}")`).join(", ")};\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}`;
    addStyle(css, "fonts");
  }
  function registerDevCommands() {
    const isDev = mode$1 === "development";
    const isAdv = getFeature("advancedMode");
    const isAny = isDev || isAdv;
    const isLtr = localesJson?.[getLocale()]?.textDir !== "rtl";
    const getCmdName = (emoji, key) => isLtr ? `${emoji} ${t(key)}` : `${t(key)} ${emoji}`;
    GM.registerMenuCommand(getCmdName("⚙️", "menu_command.open_cfg_menu"), () => openCfgMenu());
    GM.registerMenuCommand(getCmdName("♻️", "menu_command.reset_config"), async () => {
      const message = "Reset the configuration to its default values?\nThis will automatically reload the page.";
      try {
        if (await showPrompt({
          type: "confirm",
          message: message,
          confirmBtnText: "Reset"
        })) {
          await clearConfig();
          await reloadTab();
        }
      } catch {
        if (confirm(message)) {
          await clearConfig();
          await reloadTab();
        }
      }
    });
    isAny && GM.registerMenuCommand(getCmdName("🔍", "menu_command.gm_storage_list_decompressed"), async () => {
      const keys = await GM.listValues();
      dbg(`GM values (${keys.length}):`);
      if (keys.length === 0) dbg("  No values found.");
      const values = {};
      let longestKey = 0;
      const decodeError = (key, err) => error(`  "${key}"${" ".repeat(longestKey - key.length)} -> [!!!!!] Decoding Error: ${err}`);
      for (const key of keys) {
        try {
          const isDatKey = key.startsWith("__ds-") && key.endsWith("-dat");
          const dsID = isDatKey ? key.substring(5, key.length - 4) : null;
          const isEncoded = isDatKey ? String(await GM.getValue(`__ds-${dsID}-enf`, "null")) !== "null" : false;
          const val = await GM.getValue(key, undefined);
          values[key] = typeof val !== "undefined" && isEncoded ? await CoreUtils.decompress(val, compressionFormat$1, "string") : val;
          longestKey = Math.max(longestKey, key.length);
        } catch (err) {
          decodeError(key, err);
        }
      }
      for (const [key, finalVal] of Object.entries(values)) {
        try {
          const isEncoded = key.startsWith("__ds-") ? String(await GM.getValue(`__ds-${key.substring(5)}-enc`, "null")) !== "null" : false;
          const lengthStr = String(finalVal).length > 50 ? `(${String(finalVal).length} chars) ` : "";
          dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
        } catch (err) {
          decodeError(key, err);
        }
      }
    });
    isAny && GM.registerMenuCommand(getCmdName("📋", "menu_command.gm_storage_list_raw"), async () => {
      const keys = await GM.listValues();
      dbg(`GM values (${keys.length}):`);
      if (keys.length === 0) dbg("  No values found.");
      const values = {};
      let longestKey = 0;
      for (const key of keys) {
        const val = await GM.getValue(key, undefined);
        values[key] = val;
        longestKey = Math.max(longestKey, key.length);
      }
      for (const [key, val] of Object.entries(values)) {
        const lengthStr = String(val).length >= 16 ? `(${String(val).length} chars) ` : "";
        dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -> ${lengthStr}${val}`);
      }
    });
    isAny && GM.registerMenuCommand(getCmdName("🗑️", "menu_command.gm_storage_delete_all"), async () => {
      const keys = await GM.listValues();
      if (await showPrompt({
        type: "confirm",
        message: `Clear all ${keys.length} GM values?\nSee console for details.`,
        confirmBtnText: "Clear"
      })) {
        dbg(`Clearing ${keys.length} GM values:`);
        if (keys.length === 0) dbg("  No values found.");
        for (const key of keys) {
          await GM.deleteValue(key);
          dbg(`  Deleted ${key}`);
        }
      }
    });
    isDev && GM.registerMenuCommand(getCmdName("🕐", "menu_command.reset_install_timestamp"), async () => {
      await GM.deleteValue("bytm-installed");
      dbg("Reset install time.");
    });
    isAny && GM.registerMenuCommand(getCmdName("🔢", "menu_command.reset_version_session_counter"), async () => {
      const verSesCount = await GM.getValue("bytm-version-session-counter", "{}");
      await GM.deleteValue("bytm-version-session-counter");
      dbg("Reset version session counter. Was previously:", verSesCount);
    });
    isAny && GM.registerMenuCommand(getCmdName("👂", "menu_command.list_selectorobserver_listeners"), async () => {
      const lines = [];
      let listenersAmt = 0;
      for (const [obsName, obs] of Object.entries(globservers)) {
        const listeners = obs.getAllListeners();
        lines.push(`- "${obsName}" (${listeners.size} listeners):`);
        [ ...listeners ].forEach(([k, v]) => {
          listenersAmt += v.length;
          lines.push(`    [${v.length}] ${k}`);
          v.forEach(({all: all, continuous: continuous}, i) => {
            lines.push(`        ${v.length > 1 && i !== v.length - 1 ? "├" : "└"}> ${continuous ? "continuous" : "single-shot"}${all ? ", multiple" : ""}`);
          });
        });
      }
      dbg(`Showing currently active listeners for ${Object.keys(globservers).length} SelectorObserver instances with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
    });
    isAny && GM.registerMenuCommand(getCmdName("🗜️", "menu_command.compress_or_decompress_text"), async () => {
      const showFinalPrompt = async (type, initial, result) => {
        await showPrompt({
          type: "alert",
          message: `${type === "compress" ? "Compressed" : "Decompressed"} value (${initial.length} chars -> ${result.length} chars):\n${result}`,
          extraButtons: [ dlg => {
            const btn = document.createElement("button");
            btn.textContent = btn.ariaLabel = "Copy and close";
            btn.addEventListener("click", async () => {
              copyToClipboard(result);
              dlg.emitResolve(result);
              dlg.close();
            });
            return btn;
          } ],
          extraButtonsPosition: "before"
        });
      };
      const showErr = async (type, err) => {
        const errMsg = `Error while trying to ${type === "compress" ? "" : "de"}compress`;
        error(errMsg, err);
        await showPrompt({
          type: "alert",
          message: `${errMsg}:\n${err instanceof Error ? `${err.name}: ${err.message}` : String(err)}`
        });
      };
      await showPrompt({
        type: "prompt",
        message: "Enter text to compress or decompress:",
        textarea: true,
        confirmBtnEnabled: false,
        extraButtons: [ dlg => {
          const btn = document.createElement("button");
          btn.textContent = btn.ariaLabel = "Compress";
          btn.addEventListener("click", async () => {
            const val = dlg.getInputValue();
            try {
              if (val && val.length > 0) {
                const result = await CoreUtils.compress(val, compressionFormat$1);
                dlg.emitResolve(result);
                dlg.close();
                await showFinalPrompt("compress", val, result);
              }
            } catch (e) {
              dlg.close();
              showErr("compress", e);
            }
          });
          return btn;
        }, dlg => {
          const btn = document.createElement("button");
          btn.textContent = btn.ariaLabel = "Decompress";
          btn.addEventListener("click", async () => {
            const val = dlg.getInputValue();
            try {
              if (val && val.length > 0) {
                const result = await CoreUtils.decompress(val, compressionFormat$1);
                dlg.emitResolve(result);
                await showFinalPrompt("decompress", val, result);
                dlg.close();
              }
            } catch (e) {
              dlg.close();
              showErr("decompress", e);
            }
          });
          return btn;
        } ],
        extraButtonsPosition: "before"
      });
    });
    isAny && GM.registerMenuCommand(getCmdName("📤", "menu_command.export_config"), () => downloadData(false));
    isAny && GM.registerMenuCommand(getCmdName("💾", "menu_command.export_full"), () => downloadData(false, true));
    isAny && GM.registerMenuCommand(getCmdName("📥", "menu_command.import_full"), async () => {
      const input = await showPrompt({
        type: "prompt",
        message: "Paste the content of the exported file to import data:",
        confirmBtnText: "Import",
        textarea: true
      });
      if (input && input.length > 0) {
        await getDSSerializer(true).deserialize(input);
        if (await showPrompt({
          type: "confirm",
          message: "Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?",
          confirmBtnText: "Reload"
        })) await reloadTab();
      }
    });
    isDev && GM.registerMenuCommand(getCmdName("💥", "menu_command.throw_example_error"), () => error("Test error thrown by user command:", new SyntaxError("Test error")));
    isAny && GM.registerMenuCommand(getCmdName("⏱️", "menu_command.get_performance_report"), () => {
      downloadFile(`${scriptInfo$1.name} Performance Report @ ${(new Date).toISOString()}.json`, JSON.stringify(initTimings, null, 2), "application/json");
    });
    isAny && GM.registerMenuCommand(getCmdName("🧪", "menu_command.toggle_dev_treatments"), async () => {
      const val = !await GM.getValue("bytm-dev-treatments", false);
      await GM.setValue("bytm-dev-treatments", val);
      if (await showPrompt({
        type: "confirm",
        message: `Dev treatments are now ${val ? "enabled" : "disabled"}.\nDo you want to reload the page?`,
        confirmBtnText: "Reload",
        denyBtnText: "nothxbye"
      })) await reloadTab();
    });
    isDev && GM.registerMenuCommand(getCmdName("🔑", "menu_command.get_dev_plugin_token"), () => showPrompt({
      type: "alert",
      message: devPluginToken ? `Developer plugin token:\n${devPluginToken}` : "Dev plugin not registered yet.",
      extraButtons: [ dlg => {
        const btn = document.createElement("button");
        btn.textContent = btn.ariaLabel = "Copy and close";
        btn.addEventListener("click", async () => {
          devPluginToken && copyToClipboard(devPluginToken);
          dlg.emitResolve(devPluginToken ?? null);
          dlg.close();
        });
        return btn;
      } ],
      extraButtonsPosition: "before"
    }));
    GM.registerMenuCommand(getCmdName("📄", "menu_command.download_log_file"), () => {
      downloadFile(`bytm-log-${(new Date).toISOString()}.log`, getLogsTxt(), "text/plain");
    });
    isDev && GM.registerMenuCommand(getCmdName("🗂️", "menu_command.collect_sessions"), () => {
      const sessions = [ [ broadcastTxID, {
        sessionId: getSessionId(),
        title: document.title,
        domain: getDomain(),
        initTime: initTime
      } ] ];
      const unsub = siteEvents.on("broadcast:discoverSessionsReply", ({from: from, packet: packet}) => {
        sessions.push([ from, packet.data ]);
      });
      dbg("Collecting session info from open tabs...");
      setTimeout(() => {
        const columns = [ "#", "Self?", "Session ID:", "TxID:", "Domain:", "Initialized:", "Session Title:" ];
        const columnAlign = [ "left", "left", "left", "left", "left", "right", "left" ];
        const columnStyle = "color: #db3; font-weight: bold;";
        const resetStyle = "color: inherit; font-weight: inherit;";
        const styles = [];
        for (let i = 0; i < columns.length; i++) styles.push(columnStyle, resetStyle);
        console.log(`[${scriptInfo$1.name}/#DEBUG] Collected information from ${sessions.length} open ${CoreUtils.autoPlural("tab", sessions)}:\n${CoreUtils.createTable([ columns, ...sessions.map(([txID, {sessionId: sessionId, title: title, domain: domain, initTime: initTime}], i) => {
          const initSince = CoreUtils.secsToTimeStr(Math.floor((Date.now() - initTime) / 1e3)).padStart(5, "0");
          return [ i + 1, txID === broadcastTxID ? "Yes" : "No", sessionId, txID, domain, `${initSince} ago`, title ];
        }) ], {
          columnAlign: columnAlign,
          applyCellStyle(i) {
            if (i === 0) return [ "%c", "%c" ];
          }
        })}`, ...styles);
        unsub();
      }, 300);
      emitBroadcast({
        type: "discoverSessions"
      });
    });
    isAdv && GM.registerMenuCommand(getCmdName("🔄", "menu_command.reload_all_tabs"), async () => {
      await showPrompt({
        type: "confirm",
        message: "Reload all open tabs that are running BetterYTM?",
        confirmBtnText: "Reload"
      }) && await reloadAllTabs();
    });
    log("Registered dev menu commands");
  }
  async function runDevTreatments() {
    if (mode$1 !== "development" || !await GM.getValue("bytm-dev-treatments", false)) return;
  }
  preInit();
})(CoreUtils, UserUtils, DOMPurify, marked, compareVersions);
