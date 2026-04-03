// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           3.1.0-rc.1
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-or-later
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@93a674ca/assets/images/logo/logo_48.png
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
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/refs/heads/main/dist/BetterYTM.user.js
// @downloadURL       https://raw.githubusercontent.com/Sv443/BetterYTM/refs/heads/main/dist/BetterYTM.user.js
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


(function(CoreUtils,UserUtils,DOMPurify,marked,compareVersions){'use strict';function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var CoreUtils__namespace=/*#__PURE__*/_interopNamespaceDefault(CoreUtils);var UserUtils__namespace=/*#__PURE__*/_interopNamespaceDefault(UserUtils);var compareVersions__namespace=/*#__PURE__*/_interopNamespaceDefault(compareVersions);var preloadAssetPattern = "^(icon|img)-";
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
};var localesJson = {
	"de-DE": {
	name: "Deutsch (Deutschland)",
	nameEnglish: "German (Germany)",
	emoji: "🇩🇪",
	userscriptDesc: "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"de",
		"de-AT",
		"de-BE",
		"de-CH",
		"de-LI",
		"de-LU"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: ".",
	sentenceTerminators: [
		".",
		"!",
		"?"
	]
},
	"en-US": {
	name: "English (United States)",
	nameEnglish: "English (United States)",
	emoji: "🇺🇸",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"en",
		"en-CA"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: ".",
	sentenceTerminators: [
		".",
		"!",
		"?"
	]
},
	"en-GB": {
	name: "English (Great Britain)",
	nameEnglish: "English (Great Britain)",
	emoji: "🇬🇧",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"en-AU",
		"en-IE",
		"en-NZ",
		"en-ZA"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: ".",
	sentenceTerminators: [
		".",
		"!",
		"?"
	]
},
	"es-ES": {
	name: "Español (España)",
	nameEnglish: "Spanish (Spain)",
	emoji: "🇪🇸",
	userscriptDesc: "Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"es",
		"es-MX"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: ".",
	sentenceTerminators: [
		".",
		"!",
		"?"
	]
},
	"fr-FR": {
	name: "Français (France)",
	nameEnglish: "French (France)",
	emoji: "🇫🇷",
	userscriptDesc: "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"fr",
		"fr-CA",
		"fr-BE",
		"fr-CH",
		"fr-LU"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: ".",
	sentenceTerminators: [
		".",
		"!",
		"?"
	]
},
	"hi-IN": {
	name: "हिंदी (भारत)",
	nameEnglish: "Hindi (India)",
	emoji: "🇮🇳",
	userscriptDesc: "YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार",
	authors: [
		"Sv443"
	],
	altLocales: [
		"hi",
		"hi-NP"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: "।",
	sentenceTerminators: [
		"।",
		".",
		"!",
		"?"
	]
},
	"ja-JP": {
	name: "日本語 (日本)",
	nameEnglish: "Japanese (Japan)",
	emoji: "🇯🇵",
	userscriptDesc: "YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上",
	authors: [
		"Sv443"
	],
	altLocales: [
		"ja"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: "。",
	sentenceTerminators: [
		"。",
		"！",
		"？",
		".",
		"!",
		"?"
	]
},
	"pt-BR": {
	name: "Português (Brasil)",
	nameEnglish: "Portuguese (Brazil)",
	emoji: "🇧🇷",
	userscriptDesc: "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"pt",
		"pt-PT"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: ".",
	sentenceTerminators: [
		".",
		"!",
		"?"
	]
},
	"zh-CN": {
	name: "中文（简化，中国）",
	nameEnglish: "Chinese (Simplified, China)",
	emoji: "🇨🇳",
	userscriptDesc: "YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进",
	authors: [
		"Sv443"
	],
	altLocales: [
		"zh",
		"zh-TW",
		"zh-HK",
		"zh-SG"
	],
	textDir: "ltr",
	sentenceTerminatorNeutral: "。",
	sentenceTerminators: [
		"。",
		"！",
		"？",
		".",
		"!",
		"?"
	]
}
};// I know TS enums are impure but it doesn't really matter here, plus imo they are cooler than pure enums anyway
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
})(LogLevel || (LogLevel = {}));
//#region plugins
/**
 * Intents (permissions) BYTM has to grant your plugin for it to be able to access certain features.
 * TODO: this feature is unfinished, but you should still specify the intents your plugin needs.
 * Never request more permissions than you need, as this is a bad practice and can lead to your plugin being rejected.
 */
var PluginIntent;
(function (PluginIntent) {
    /** Plugin can read the feature configuration */
    PluginIntent[PluginIntent["ReadFeatureConfig"] = 1] = "ReadFeatureConfig";
    /** Plugin can write to the feature configuration */
    PluginIntent[PluginIntent["WriteFeatureConfig"] = 2] = "WriteFeatureConfig";
    /** Plugin has access to hidden config values */
    PluginIntent[PluginIntent["SeeHiddenConfigValues"] = 4] = "SeeHiddenConfigValues";
    /** Plugin can write to the lyrics cache */
    PluginIntent[PluginIntent["WriteLyricsCache"] = 8] = "WriteLyricsCache";
    /** Plugin can add new translations and overwrite existing ones */
    PluginIntent[PluginIntent["WriteTranslations"] = 16] = "WriteTranslations";
    /** Plugin can create modal dialogs */
    PluginIntent[PluginIntent["CreateModalDialogs"] = 32] = "CreateModalDialogs";
    /** Plugin can read auto-like data */
    PluginIntent[PluginIntent["ReadAutoLikeData"] = 64] = "ReadAutoLikeData";
    /** Plugin can write to auto-like data */
    PluginIntent[PluginIntent["WriteAutoLikeData"] = 128] = "WriteAutoLikeData";
    /** Plugin has access to deeply internal functions and instances */
    PluginIntent[PluginIntent["InternalAccess"] = 256] = "InternalAccess";
    /** Grants all other intents */
    PluginIntent[PluginIntent["FullAccess"] = 512] = "FullAccess";
})(PluginIntent || (PluginIntent = {}));/** Raw (unparsed) constants, injected by the script at `src/tools/post-build.ts` */
const rawConsts = {
    mode: "production",
    branch: "main",
    host: "github",
    buildNumber: "93a674ca",
    buildTimestamp: "1775247208913",
    assetSource: "jsdelivr",
    devServerPort: "8710",
};
/** Parses a raw constant or falls back to a default value */
const getConst = (constKey, defaultVal) => {
    const val = rawConsts[constKey];
    return (val.match(/^#{{.+}}$/) ? defaultVal : val);
};
/** Path to the GitHub repo */
const repo = "Sv443/BetterYTM";
/** The mode in which the script was built (production or development) */
const mode$1 = getConst("mode", "production");
/** The branch to use in various URLs that point to the GitHub repo */
const branch$1 = getConst("branch", "main");
/** Which host the userscript was installed from */
const host$1 = getConst("host", "github");
/** The build number of the userscript */
const buildNumber$1 = getConst("buildNumber", "!BUILD_ERROR!");
/** When the script was built, as a UNIX timestamp */
const buildTimestamp = Number(getConst("buildTimestamp", 0));
/** The source of the assets - github, jsdelivr or local */
const assetSource = getConst("assetSource", "jsdelivr");
/** The port of the dev server */
const devServerPort = Number(getConst("devServerPort", 8710));
/** URL to the changelog file */
const changelogUrl = assetSource === "local"
    ? `http://localhost:${devServerPort}/changelog.md?build=${buildNumber$1}`
    : `https://raw.githubusercontent.com/${repo}/${mode$1 === "development" ? "develop" : "main"}/changelog.md?build=${buildNumber$1}`;
/** The URL search parameters at the earliest possible time */
const initialParams$1 = new URL(location.href).searchParams;
/** Timestamp of when the script was initialized. */
const initTime = Date.now();
/** Names of platforms by key of {@linkcode host} */
const platformNames = CoreUtils.pureObj({
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS",
});
/** Default compression format used throughout BYTM */
const compressionFormat$1 = "deflate-raw";
/** Whether sessionStorage is available and working */
const sessionStorageAvailable$1 = typeof sessionStorage?.setItem === "function"
    && (() => {
        try {
            const key = `_bytm_test_${CoreUtils.randomId(6, 36, false, true)}`;
            sessionStorage.setItem(key, "test");
            sessionStorage.removeItem(key);
            return true;
        }
        catch {
            return false;
        }
    })();
/**
 * Fallback and initial value of how much info should be logged to the devtools console
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
const defaultLogLevel = mode$1 === "production" ? LogLevel.Info : LogLevel.Debug;
/** Info about the userscript, parsed from the userscript header (injected by src/tools/post-build.ts) */
const scriptInfo$1 = CoreUtils.pureObj({
    name: GM_info.script.name,
    version: GM_info.script.version,
    namespace: GM_info.script.namespace,
});
/** Maximum number of sessions per user to show the "new feature" adornment in the config menu. */
const newFeatureAdornmentMaxSessionCount = 20;var constants=/*#__PURE__*/Object.freeze({__proto__:null,assetSource:assetSource,branch:branch$1,buildNumber:buildNumber$1,buildTimestamp:buildTimestamp,changelogUrl:changelogUrl,compressionFormat:compressionFormat$1,defaultLogLevel:defaultLogLevel,devServerPort:devServerPort,host:host$1,initTime:initTime,initialParams:initialParams$1,mode:mode$1,newFeatureAdornmentMaxSessionCount:newFeatureAdornmentMaxSessionCount,platformNames:platformNames,repo:repo,scriptInfo:scriptInfo$1,sessionStorageAvailable:sessionStorageAvailable$1});const lyricsCacheStore = new CoreUtils.DataStore({
    id: "bytm-lyrics-cache",
    defaultData: {
        cache: [],
    },
    formatVersion: 2,
    engine: new UserUtils.GMStorageEngine(),
    compressionFormat: compressionFormat$1,
    migrations: {
        // 1 -> 2 (v3.1.0) - debulkify cache entry objects
        2: (oldData) => {
            oldData.cache = oldData.cache.map(entry => ({
                artist: entry.artist,
                song: entry.song,
                // @ts-expect-error
                path: "path" in entry ? entry.path : (new URL(String("url" in entry ? entry.url : entry.path)).pathname),
                added: Math.floor(entry.added / 1000),
                viewed: Math.floor(entry.viewed / 1000),
            }));
            return oldData;
        },
    }
});
async function initLyricsCache() {
    const data = await lyricsCacheStore.loadData();
    log(`Initialized lyrics cache (${data.cache.length} entries)`);
    emitInterface("bytm:lyricsCacheReady");
    return data;
}
/** Returns the full URL to the lyrics page on genius.com for the given path */
function resolveLyricsUrl(path) {
    const url = new URL("https://genius.com");
    url.pathname = path.startsWith("/") ? path : `/${path}`;
    return String(url);
}
/**
 * Returns the cache entry for the passed artist and song, or undefined if it doesn't exist yet
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param refreshEntry If true, the timestamp of the entry will be set to the current time
 */
function getLyricsCacheEntry(artist, song, refreshEntry = true) {
    const { cache } = lyricsCacheStore.getData();
    const entry = cache.find(e => e.artist === artist && e.song === song);
    if (entry && Date.now() - (entry?.added ?? 0) * 1000 > getFeature("lyricsCacheTTL") * 1000 * 60 * 60 * 24) {
        deleteLyricsCacheEntry(artist, song);
        return undefined;
    }
    if (entry && refreshEntry)
        updateLyricsCacheEntry(artist, song); // refresh view timestamp
    return entry;
}
/** Updates the "last viewed" timestamp of the cache entry for the passed artist and song */
async function updateLyricsCacheEntry(artist, song) {
    const { cache } = lyricsCacheStore.getData();
    const idx = cache.findIndex(e => e.artist === artist && e.song === song);
    if (idx !== -1) {
        const newEntry = cache.splice(idx, 1)[0];
        newEntry.viewed = Math.floor(Date.now() / 1000);
        return await lyricsCacheStore.setData({ cache: [newEntry, ...cache] });
    }
}
/** Deletes the cache entry for the passed artist and song */
async function deleteLyricsCacheEntry(artist, song) {
    const { cache } = lyricsCacheStore.getData();
    const idx = cache.findIndex(e => e.artist === artist && e.song === song);
    if (idx !== -1) {
        cache.splice(idx, 1);
        return await lyricsCacheStore.setData({ cache });
    }
}
/** Clears the lyrics cache locally and clears it in persistent storage */
async function clearLyricsCache() {
    emitInterface("bytm:lyricsCacheCleared");
    return await lyricsCacheStore.setData({ cache: [] });
}
/** Returns the full lyrics cache array */
function getLyricsCache() {
    return lyricsCacheStore.getData().cache;
}
/**
 * Adds the provided "best" (non-penalized) entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 */
async function addLyricsCacheEntryBest(artist, song, path) {
    // refresh entry if it exists and don't overwrite / duplicate it
    const cachedEntry = getLyricsCacheEntry(artist, song, true);
    if (cachedEntry)
        return;
    const { cache } = lyricsCacheStore.getData();
    const entry = {
        artist, song, path, viewed: Math.floor(Date.now() / 1000), added: Math.floor(Date.now() / 1000),
    };
    cache.push(entry);
    cache.sort((a, b) => b.viewed - a.viewed);
    // always keep the cache <= max size
    cache.splice(getFeature("lyricsCacheMaxSize"));
    log("Added lyrics cache entry for best result:", entry);
    emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "best" });
    return lyricsCacheStore.setData({ cache });
}/** Contains the identifiers of all initialized and loaded translation locales */
const initializedLocales = new Set();
/** The currently active locale */
let activeLocale = "en-US";
/** The current locale's text direction */
let activeLocaleDir = "ltr";
UserUtils.tr.addTransform(UserUtils.tr.transforms.percent);
UserUtils.tr.addTransform(UserUtils.tr.transforms.templateLiteral);
// let devUsedTrKeysStoreLoaded = false;
// const devUsedTrKeysStore = new DataStore<{
//   keys: string[];
// }>({
//   id: "bytm-dev-used-tr-keys",
//   engine: new GMStorageEngine(),
//   defaultData: { keys: [] },
//   formatVersion: 0,
//   compressionFormat: null,
// });
/** Used to check which keys are unused. */
const devMarkTrKeyUsed = async (key) => {
    // try {
    //   if(mode !== "development")
    //     return;
    //   if(!devUsedTrKeysStoreLoaded) {
    //     await devUsedTrKeysStore.loadData();
    //     devUsedTrKeysStoreLoaded = true;
    //   }
    //   const data = devUsedTrKeysStore.getData();
    //   const keysSet = new Set(data.keys);
    //   keysSet.add(key);
    //   data.keys = Array.from(keysSet);
    //   return await devUsedTrKeysStore.setData(data);
    // }
    // catch(e) {
    //   error("Failed to mark translation key as used", e);
    // }
};
/** Initializes the translations for the given locale if they haven't been initialized yet. */
async function initTranslations(locale) {
    if (initializedLocales.has(locale))
        return;
    initializedLocales.add(locale);
    try {
        const transFile = await fetchTranslationResource(locale);
        let fallbackTrans = {};
        if (getFeature("localeFallback")) {
            UserUtils.tr.setFallbackLanguage("en-US");
            fallbackTrans = await fetchTranslationResource("en-US");
        }
        // merge with base translations if specified
        const baseTransFile = typeof transFile?.meta === "object" && "base" in transFile.meta && typeof transFile.meta.base === "string"
            ? await fetchTranslationResource(transFile.meta.base)
            : undefined;
        const translations = {
            ...(fallbackTrans ?? {}),
            ...(baseTransFile ?? {}),
            ...transFile,
        };
        const { meta: { authors: _authors, ...meta }, ...trans } = translations;
        UserUtils.tr.addTranslations(locale, { ...meta, ...trans });
        info(`Loaded translations for locale '${locale}'`);
    }
    catch (err) {
        const errStr = `Couldn't load translations for locale '${locale}'`;
        error(errStr, err);
        throw new Error(errStr, { cause: err });
    }
}
/** Fetches the JSON translations file of the passed locale. */
async function fetchTranslationResource(locale) {
    const url = await getResourceUrl(`trans-${locale}`);
    const res = await CoreUtils.fetchAdvanced(url);
    const bodyTxt = await res.text();
    getFeature("logHttp") && log(`Fetched translation resource for locale '${locale}' with status ${res.status}`);
    if (res.status < 200 || res.status >= 300)
        throw new Error(`Failed to fetch translation resource for locale '${locale}'`);
    return JSON.parse(bodyTxt); // since en-US keys are merged in, this assertion is safe
}
/** Sets the new locale to use in translations. */
function setLocale(locale) {
    activeLocale = locale;
    activeLocaleDir = localesJson[locale]?.textDir ?? "ltr";
    setGlobalProp("locale", locale);
    emitInterface("bytm:setLocale", { locale });
}
/** Returns the currently set locale. */
function getLocale() {
    return activeLocale;
}
/** Returns whether the given translation key exists in the current locale. Loads the translations if they weren't yet. */
async function hasKey(key) {
    return await hasKeyFor(getLocale(), key);
}
/** Returns whether the given translation key exists in the given locale. Loads the translations if they weren't yet. */
async function hasKeyFor(locale, key) {
    devMarkTrKeyUsed();
    if (!initializedLocales.has(locale))
        await initTranslations(locale);
    return typeof UserUtils.tr.getTranslations(locale)?.[key] === "string";
}
/**
 * Returns the translated string for the given key, after optionally inserting positional arguments into 1-indexed `%n` placeholders.
 */
function t(key, ...args) {
    return tl(getLocale(), key, ...args);
}
/**
 * Returns the translated string for the given {@linkcode key} with an added pluralization identifier based on the passed {@linkcode num}
 * Also inserts the passed positional {@linkcode args} at the 1-indexed `%n` placeholders.
 * Tries to fall back to the non-pluralized syntax if no translation was found.
 */
function tp(key, num, ...args) {
    return tlp(getLocale(), key, num, ...args);
}
/** Returns the translated string for the given key in the specified locale, after optionally inserting positional arguments into 1-indexed `%n` placeholders. */
function tl(locale, key, ...args) {
    if (locale === "en-US")
        hasKeyFor(locale, key).then((hasKey) => !hasKey && warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);
    devMarkTrKeyUsed();
    return UserUtils.tr.for(locale, key, ...args);
}
/**
 * Returns the translated string for the given {@linkcode key} in the given {@linkcode locale} with an added pluralization identifier based on the passed {@linkcode num}
 * Also inserts the passed positional {@linkcode args} at the 1-indexed `%n` placeholders.
 * Tries to fall back to the non-pluralized syntax if no translation was found.
 */
function tlp(locale, key, num, ...args) {
    if (typeof num !== "number")
        num = num.length;
    const tlKey = `${key}-${num === 1 ? "1" : "n"}`;
    devMarkTrKeyUsed();
    if (locale === "en-US")
        hasKeyFor(locale, tlKey).then((hasKey) => !hasKey && warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);
    const trans = tl(locale, tlKey, ...args);
    if (trans === key)
        return t(key, ...args);
    return trans;
}
/** Returns the appropriate translation for the given translatable object based on the current locale. Falls back to `en-US` */
function resolveTranslatable(trnsl) {
    return trnsl[getLocale()] ?? trnsl["en-US"] ?? `<MISSING TRANSLATIONS: ${JSON.stringify(trnsl)}>`;
}//#region vars
/** Whether the dialog system has been initialized */
let dialogsInitialized = false;
/** Container element for all BytmDialog elements */
let dialogContainer;
// TODO: remove export as soon as config menu is migrated to use BytmDialog
/** ID of the last opened (top-most) dialog */
let currentDialogId = null;
/** IDs of all currently open dialogs, top-most first */
const openDialogs = [];
/** TODO: remove as soon as config menu is migrated to use BytmDialog */
const setCurrentDialogId = (id) => currentDialogId = id;
//#region BytmDialog class
/** Creates and manages a modal dialog element */
class BytmDialog extends CoreUtils.NanoEmitter {
    //#region constructor
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
            ...options,
        };
        this.id = options.id;
    }
    //#region pub:mount
    /** Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM */
    async mount() {
        if (this.dialogMounted)
            return;
        this.dialogMounted = true;
        const bgElem = document.createElement("div");
        bgElem.id = `bytm-${this.id}-dialog-bg`;
        bgElem.classList.add("bytm-dialog-bg");
        if (this.options.closeOnBgClick)
            bgElem.ariaLabel = bgElem.title = t("close_menu_tooltip");
        bgElem.style.setProperty("--bytm-dialog-width-max", `${this.options.width}px`);
        bgElem.style.setProperty("--bytm-dialog-height-max", `${this.options.height}px`);
        bgElem.style.visibility = "hidden";
        bgElem.style.display = "none";
        bgElem.inert = true;
        try {
            bgElem.appendChild(await this.getDialogContent());
            if (dialogContainer)
                dialogContainer.appendChild(bgElem);
            else
                document.addEventListener("DOMContentLoaded", () => dialogContainer?.appendChild(bgElem), { once: true });
        }
        catch (e) {
            return error("Failed to render dialog content:", e);
        }
        this.attachListeners(bgElem);
        this.events.emit("render");
        return bgElem;
    }
    //#region pub:unmount
    /** Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call */
    unmount() {
        this.close();
        this.dialogMounted = false;
        const clearSelectors = [
            `#bytm-${this.id}-dialog-bg`,
        ];
        for (const sel of clearSelectors) {
            const elem = document.querySelector(sel);
            elem?.hasChildNodes() && clearInner(elem);
            document.querySelector(sel)?.remove();
        }
        this.events.emit("clear");
    }
    //#region pub:remount
    /** Clears the DOM of the dialog and then renders it again */
    async remount() {
        this.unmount();
        await this.mount();
    }
    //#region pub:isMounted
    /** Returns true if the dialog is currently mounted */
    isMounted() {
        return this.dialogMounted;
    }
    //#region pub:open
    /**
     * Opens the dialog - also mounts it if it hasn't been mounted yet
     * Prevents default action and immediate propagation of the passed event
     */
    async open(e) {
        e?.preventDefault();
        e?.stopImmediatePropagation();
        if (this.isOpen())
            return;
        this.dialogOpen = true;
        if (openDialogs.includes(this.id)) {
            openDialogs.splice(openDialogs.indexOf(this.id), 1);
            currentDialogId = openDialogs[0] ?? null;
            this.removeBgInert();
            this.close();
            throw new Error(`A dialog with the same ID of '${this.id}' already exists and is open!`);
        }
        if (!this.isMounted())
            await this.mount();
        this.setBgInert();
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        if (!dialogBg)
            return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
        dialogBg.style.visibility = "visible";
        dialogBg.style.display = "block";
        currentDialogId = this.id;
        openDialogs.unshift(this.id);
        this.events.emit("open");
        emitInterface("bytm:dialogOpened", this);
        emitInterface(`bytm:dialogOpened:${this.id}`, this);
        return dialogBg;
    }
    //#region pub:close
    /** Closes the dialog - prevents default action and immediate propagation of the passed event */
    close(e) {
        e?.preventDefault();
        e?.stopImmediatePropagation();
        if (!this.isOpen())
            return;
        this.dialogOpen = false;
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        if (!dialogBg)
            return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
        dialogBg.style.visibility = "hidden";
        dialogBg.style.display = "none";
        const oidx = openDialogs.indexOf(this.id);
        if (oidx > -1)
            openDialogs.splice(oidx, 1);
        currentDialogId = openDialogs[0] ?? null;
        this.events.emit("close");
        emitInterface("bytm:dialogClosed", this);
        emitInterface(`bytm:dialogClosed:${this.id}`, this);
        if (this.options.destroyOnClose)
            this.destroy();
        // don't destroy *and* unmount at the same time
        else if (this.options.unmountOnClose)
            this.unmount();
        this.removeBgInert();
    }
    //#region pub:isOpen
    /** Returns true if the dialog is currently open */
    isOpen() {
        return this.dialogOpen;
    }
    //#region pub:destroy
    /** Clears the DOM of the dialog and removes all event listeners */
    destroy() {
        this.unmount();
        this.events.emit("destroy");
        this.options.removeListenersOnDestroy && this.unsubscribeAll();
    }
    //#region stat:initDialogs
    /** Initializes the dialog system */
    static initDialogs() {
        if (dialogsInitialized)
            return;
        dialogsInitialized = true;
        const createContainer = () => {
            const bytmDialogCont = dialogContainer = document.createElement("div");
            bytmDialogCont.id = "bytm-dialog-container";
            document.body.appendChild(bytmDialogCont);
        };
        if (!UserUtils.isDomLoaded())
            document.addEventListener("DOMContentLoaded", createContainer, { once: true });
        else
            createContainer();
    }
    //#region stat:getCurrentDialogId
    /** Returns the ID of the top-most dialog (the dialog that has been opened last) */
    static getCurrentDialogId() {
        return currentDialogId;
    }
    //#region stat:getOpenDialogs
    /** Returns the IDs of all currently open dialogs, top-most first */
    static getOpenDialogs() {
        return openDialogs;
    }
    //#region prot:removeBgInert
    /** Sets this dialog and the body to be inert and makes sure the top-most dialog is not inert. If no other dialogs are open, the body is not set to be inert. */
    removeBgInert() {
        // make sure the new top-most dialog is not inert
        if (currentDialogId) {
            // special treatment for the old config menu, as always
            if (currentDialogId === "cfg-menu")
                document.querySelector("#bytm-cfg-menu-bg")?.removeAttribute("inert");
            else
                document.querySelector(`#bytm-${currentDialogId}-dialog-bg`)?.removeAttribute("inert");
        }
        // remove the scroll lock and inert attribute on the body if no dialogs are open
        if (openDialogs.length === 0) {
            document.body.classList.remove("bytm-disable-scroll");
            document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
        }
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        dialogBg?.setAttribute("inert", "true");
    }
    //#region prot:setBgInert
    /** Sets this dialog to be not inert and the body and all other dialogs to be inert */
    setBgInert() {
        // make sure all other dialogs are inert
        for (const dialogId of openDialogs) {
            if (dialogId !== this.id) {
                // special treatment for the old config menu, as always
                if (dialogId === "cfg-menu")
                    document.querySelector("#bytm-cfg-menu-bg")?.setAttribute("inert", "true");
                else
                    document.querySelector(`#bytm-${dialogId}-dialog-bg`)?.setAttribute("inert", "true");
            }
        }
        // make sure body is inert and scroll is locked
        document.body.classList.add("bytm-disable-scroll");
        document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.setAttribute("inert", "true");
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        dialogBg?.removeAttribute("inert");
    }
    //#region prot:attachListeners
    /** Called on every {@linkcode mount()} to attach all generic event listeners */
    attachListeners(bgElem) {
        if (this.options.closeOnBgClick) {
            bgElem.addEventListener("click", (e) => {
                if (this.isOpen() && e.target?.id === `bytm-${this.id}-dialog-bg`)
                    this.close(e);
            });
        }
        if (this.options.closeOnEscPress) {
            document.body.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && this.isOpen() && BytmDialog.getCurrentDialogId() === this.id)
                    this.close(e);
            });
        }
    }
    //#region prot:getDialogContent
    /** Returns the dialog content element and all its children */
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
        if (this.options.verticalAlign !== "center")
            dialogWrapperEl.classList.add(`align-${this.options.verticalAlign}`);
        //#region >header
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
        }
        else {
            // insert element to pad the header height
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
            onInteraction(closeBtnEl, (e) => this.close(e));
            headerWrapperEl.appendChild(closeBtnEl);
        }
        dialogWrapperEl.appendChild(headerWrapperEl);
        //#region >body
        const dialogBodyElem = document.createElement("div");
        dialogBodyElem.id = `bytm-${this.id}-dialog-body`;
        dialogBodyElem.classList.add("bytm-dialog-body");
        this.options.small && dialogBodyElem.classList.add("small");
        dialogBodyElem.appendChild(await this.options.renderBody());
        dialogWrapperEl.appendChild(dialogBodyElem);
        //#region >footer
        if (footer) {
            const footerWrapper = document.createElement("div");
            footerWrapper.classList.add("bytm-dialog-footer-cont");
            this.options.small && footerWrapper.classList.add("small");
            dialogWrapperEl.appendChild(footerWrapper);
            footerWrapper.appendChild(await footer);
        }
        return dialogWrapperEl;
    }
}/** Creates a simple toggle element */
async function createToggleInput({ onChange, initialValue = false, id = CoreUtils.randomId(6, 36), labelPos = "left", }) {
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
        if (id)
            labelEl.htmlFor = `bytm-toggle-${id}`;
        wrapperEl.setAttribute("aria-labelledby", labelEl.id);
    }
    const toggleEl = document.createElement("label");
    toggleEl.classList.add("bytm-toggle");
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.checked = initialValue;
    checkboxEl.classList.add("bytm-toggle-checkbox");
    checkboxEl.tabIndex = -1;
    if (id)
        checkboxEl.id = `bytm-toggle-${id}`;
    const toggleSwitchEl = document.createElement("div");
    toggleSwitchEl.classList.add("bytm-toggle-switch");
    const handleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onChange(checkboxEl.checked);
        if (labelEl)
            labelEl.textContent = t(`toggled_${checkboxEl.checked ? "on" : "off"}`);
        wrapperEl.ariaChecked = String(checkboxEl.checked);
    };
    checkboxEl.addEventListener("change", handleToggle, { capture: true });
    wrapperEl.addEventListener("keydown", (e) => {
        if (["Space", " ", "Enter"].includes(e.code)) {
            e.preventDefault();
            e.stopPropagation();
            checkboxEl.checked = !checkboxEl.checked;
            handleToggle(e);
        }
    }, { capture: true });
    wrapperEl.addEventListener("click", (e) => {
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
}/** EventEmitter instance that is used to detect various changes to the site and userscript */
const siteEvents = new CoreUtils.NanoEmitter({
    publicEmit: true,
});
let observers = [];
let lastVidId = null;
let lastPathname = null;
let lastFullscreen;
/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
function initSiteEvents() {
    try {
        if (getDomain() === "ytm") {
            //#region queue
            // the queue container always exists so it doesn't need an extra init function
            const queueObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    info(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    emitSiteEvent("queueChanged", target);
                }
            });
            // only observe added or removed elements
            addSelectorListener("sidePanel", "#contents.ytmusic-player-queue", {
                listener: (el) => {
                    queueObs.observe(el, {
                        childList: true,
                    });
                },
            });
            const autoplayObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    emitSiteEvent("autoplayQueueChanged", target);
                }
            });
            addSelectorListener("sidePanel", "ytmusic-player-queue #automix-contents", {
                listener: (el) => {
                    autoplayObs.observe(el, {
                        childList: true,
                    });
                },
            });
            //#region player bar
            let lastTitle = null;
            addSelectorListener("playerBarInfo", "yt-formatted-string.title", {
                continuous: true,
                listener: (titleElem) => {
                    const oldTitle = lastTitle;
                    const newTitle = titleElem.textContent;
                    if (newTitle === lastTitle || !newTitle)
                        return;
                    lastTitle = newTitle;
                    info(`Detected song change - old title: "${oldTitle}" - new title: "${newTitle}"`);
                    emitSiteEvent("songTitleChanged", newTitle, oldTitle);
                    runIntervalChecks();
                },
            });
            info("Successfully initialized SiteEvents observers");
            observers = observers.concat([
                queueObs,
                autoplayObs,
            ]);
            //#region player
            const playerFullscreenObs = new MutationObserver(([{ target }]) => {
                const isFullscreen = target.getAttribute("player-ui-state")?.toUpperCase() === "FULLSCREEN";
                if (lastFullscreen !== isFullscreen || typeof lastFullscreen === "undefined") {
                    emitSiteEvent("fullscreenToggled", isFullscreen);
                    lastFullscreen = isFullscreen;
                }
            });
            const registerFullScreenObs = () => addSelectorListener("mainPanel", "ytmusic-player#player", {
                listener: (el) => {
                    playerFullscreenObs.observe(el, {
                        attributeFilter: ["player-ui-state"],
                    });
                },
            });
            if (globserversReady)
                registerFullScreenObs();
            else
                window.addEventListener("bytm:observersReady", registerFullScreenObs, { once: true });
        }
        CoreUtils.createRecurringTask({
            timeout: 150,
            task: runIntervalChecks,
        });
        if (getDomain() === "ytm") {
            addSelectorListener("mainPanel", "ytmusic-player #song-video #movie_player .ytp-title-text > a", {
                listener(el) {
                    const urlRefObs = new MutationObserver(([{ target }]) => {
                        if (!target || !target?.href?.includes("/watch"))
                            return;
                        const videoID = new URL(target.href).searchParams.get("v");
                        checkVideoIdChange(videoID);
                    });
                    urlRefObs.observe(el, {
                        attributeFilter: ["href"],
                    });
                }
            });
        }
        getDomain() === "ytm" && CoreUtils.createRecurringTask({
            timeout: 250,
            task: () => checkVideoIdChange(),
        });
    }
    catch (err) {
        error("Couldn't initialize site event observers due to an error:\n", err);
    }
}
let bytmReady = false;
window.addEventListener("bytm:allReady", () => bytmReady = true, { once: true });
// FIXME: not a big fan of delaying events until `bytm:allReady`, but changing it requires refactoring a lot of ugly code
/** Emits a site event with the given key and arguments - if `bytm:allReady` has not been emitted yet, all events will be queued until it is */
function emitSiteEvent(key, ...args) {
    try {
        const logEmit = () => {
            if (getFeature("logEvents")) {
                args.length > 0
                    ? log(`Emitted site event 'bytm:siteEvent:${key}' with ${args.length} ${CoreUtils.autoPlural("argument", args)}:`, ...args)
                    : log(`Emitted site event 'bytm:siteEvent:${key}' (without data)`);
            }
        };
        if (!bytmReady) {
            // log slow siteEvents that are emitted before `bytm:ready` to help identify bottlenecks in the initialization process
            const startTs = Date.now();
            window.addEventListener("bytm:ready", () => {
                bytmReady = true;
                forceEmitSiteEvent(key, ...args);
                logEmit();
                if (Date.now() - startTs > 500)
                    warn(`Slow siteEvent '${key}'! - took ${Date.now() - startTs}ms from initial emit to "bytm:ready"`);
            }, { once: true });
            return;
        }
        else {
            forceEmitSiteEvent(key, ...args);
            logEmit();
        }
    }
    catch (err) {
        error(`Couldn't emit site event "${key}" due to an error:\n`, err);
    }
}
/**
 * Forcefully emits a site event with the given key and arguments, even if `bytm:allReady` has not been emitted yet.
 * Temporary workaround for `bytm:allReady` event queueing issues in {@linkcode emitSiteEvent()}.
 */
function forceEmitSiteEvent(key, ...args) {
    try {
        siteEvents.emit(key, ...args);
        emitInterface(`bytm:siteEvent:${key}`, args);
    }
    catch (err) {
        error(`Couldn't emit site event "${key}" due to an error:\n`, err);
    }
}
//#region other
/** Checks if the watch ID has changed and emits a `watchIdChanged` siteEvent if it has */
function checkVideoIdChange(newID) {
    newID ?? (newID = new URL(location.href).searchParams.get("v"));
    if (newID && newID !== lastVidId) {
        info(`Detected watch ID change - old ID: "${lastVidId}" - new ID: "${newID}"`);
        emitSiteEvent("watchIdChanged", newID, lastVidId);
        lastVidId = newID;
    }
}
/** Periodically called to check for changes in the URL and emit associated siteEvents */
function runIntervalChecks() {
    if (!lastVidId)
        checkVideoIdChange();
    if (location.pathname !== lastPathname) {
        emitSiteEvent("pathChanged", String(location.pathname), lastPathname);
        lastPathname = String(location.pathname);
    }
}var version = "3.1.0-rc.1";
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
	updates: updates};let verNotifDialog = null;
/** Creates and/or returns the dialog to be shown when a new version is available */
async function getVersionNotifDialog({ latestTag, }) {
    if (!verNotifDialog) {
        const changelogMdFull = await getChangelogMd();
        // I messed up because this should be 0 so the changelog will always need to have an extra div at the top for backwards compatibility
        const changelogMd = changelogMdFull.split("<div class=\"split\">")[1];
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
            renderBody: () => renderBody$4({ latestTag, changelogHtml }),
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
async function renderBody$4({ latestTag, changelogHtml, }) {
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
    changelogEl.querySelectorAll("a").forEach((a) => {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
    });
    changelogDetailsEl.appendChild(changelogEl);
    wrapperEl.appendChild(changelogDetailsEl);
    const disableUpdCheckEl = document.createElement("div");
    disableUpdCheckEl.id = "bytm-disable-update-check-wrapper";
    if (!getFeature("versionCheck"))
        disableUpdateCheck = true;
    const disableToggleEl = await createToggleInput({
        id: "disable-update-check",
        initialValue: disableUpdateCheck,
        labelPos: "off",
        onChange(checked) {
            disableUpdateCheck = checked;
            if (checked)
                btnClose.textContent = t("close_and_ignore_until_reenabled");
            else
                btnClose.textContent = t("close_and_ignore_for_24h");
        },
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
        if (config.versionCheck && disableUpdateCheck)
            config.versionCheck = false;
        else if (!config.versionCheck && !disableUpdateCheck)
            config.versionCheck = true;
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
}//#region PromptDialog
let promptDialog = null;
const promptDialogId = "prompt-dialog";
/**
 * This is a custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions.
 * It supports various customizations - see {@linkcode showPrompt()} for details.
 */
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
            renderFooter: () => this.renderFooter(props),
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
    /** Emits the "resolve" event with the specified value - don't call unless the dialog is about to be closed. */
    emitResolve(val) {
        this.events.emit("resolve", val);
    }
    /** Returns the current value of the text input field if the dialog type is "prompt", null if it's empty, and undefined for other dialog types. */
    getInputValue() {
        if (this.type !== "prompt")
            return undefined;
        return document.querySelector("#bytm-dialog-container #bytm-prompt-dialog-input")?.value?.trim() ?? null;
    }
    async renderHeader({ type }) {
        const headerEl = document.createElement("div");
        headerEl.id = "bytm-prompt-dialog-header";
        setInnerHtml(headerEl, await resourceAsString(type === "alert" ? "icon-alert" : "icon-prompt"));
        return headerEl;
    }
    async renderBody({ type, message, ...rest }) {
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
            }
            else
                inputElem.type = "text";
            inputElem.autofocus = true;
            inputElem.autocomplete = "off";
            inputElem.spellcheck = false;
            inputElem.value = "defaultValue" in rest && rest.defaultValue
                ? await CoreUtils.consumeStringGen(rest.defaultValue)
                : "";
            // dont ask me why intersecting the input and textarea de-narrows the gd event type
            const inputEnterListener = (e) => {
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
    async renderFooter({ type, ...rest }) {
        // wrappers for alignment and spacing:
        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.id = "bytm-prompt-dialog-button-wrapper";
        const buttonsCont = document.createElement("div");
        buttonsCont.id = "bytm-prompt-dialog-buttons-cont";
        // confirm button (only for types "confirm" & "prompt"):
        const confirmBtn = (type === "confirm" || type === "prompt") && ("confirmBtnEnabled" in rest && rest.confirmBtnEnabled === false ? undefined : document.createElement("button"));
        if (confirmBtn && "confirmBtnEnabled" in rest) {
            confirmBtn.id = "bytm-prompt-dialog-confirm";
            confirmBtn.classList.add("bytm-prompt-dialog-button");
            confirmBtn.textContent = await this.consumePromptStringGen(type, rest.confirmBtnText, t("prompt_confirm"));
            confirmBtn.ariaLabel = confirmBtn.title = await this.consumePromptStringGen(type, rest.confirmBtnTooltip, t("click_to_confirm_tooltip"));
            confirmBtn.tabIndex = 0;
            if (type === "confirm")
                confirmBtn.autofocus = true;
            confirmBtn.addEventListener("click", () => {
                this.emitResolve(type === "confirm" ? true : (document.querySelector("#bytm-prompt-dialog-input"))?.value?.trim() ?? null);
                promptDialog?.close();
            }, { once: true });
        }
        // close/cancel button:
        const closeBtn = rest.denyBtnEnabled === false ? undefined : document.createElement("button");
        if (closeBtn) {
            closeBtn.id = "bytm-prompt-dialog-close";
            closeBtn.classList.add("bytm-prompt-dialog-button");
            closeBtn.textContent = await this.consumePromptStringGen(type, rest.denyBtnText, t(type === "alert" ? "prompt_close" : "prompt_cancel"));
            closeBtn.ariaLabel = closeBtn.title = await this.consumePromptStringGen(type, rest.denyBtnTooltip, t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip"));
            closeBtn.tabIndex = 0;
            if (type === "alert")
                closeBtn.autofocus = true;
            closeBtn.addEventListener("click", () => {
                const resVals = {
                    alert: true,
                    confirm: false,
                    prompt: null,
                };
                this.emitResolve(resVals[type]);
                promptDialog?.close();
            }, { once: true });
        }
        // extra buttons:
        const { extraButtons = [], extraButtonsPosition = "between" } = rest;
        const isMac = getOS() === "mac";
        const appendExtraButtons = async () => {
            for (const getBtnFn of extraButtons) {
                const btn = await getBtnFn(this);
                if (btn instanceof HTMLButtonElement)
                    buttonsCont.appendChild(btn);
            }
        };
        if (extraButtonsPosition === "before")
            await appendExtraButtons();
        // adjust order for Mac vs other OSes to match native dialogs
        if (!isMac) {
            confirmBtn && buttonsCont.appendChild(confirmBtn);
            if (extraButtonsPosition === "between")
                await appendExtraButtons();
            closeBtn && buttonsCont.appendChild(closeBtn);
        }
        else {
            closeBtn && buttonsCont.appendChild(closeBtn);
            if (extraButtonsPosition === "between")
                await appendExtraButtons();
            confirmBtn && buttonsCont.appendChild(confirmBtn);
        }
        if (extraButtonsPosition === "after")
            await appendExtraButtons();
        buttonsWrapper.appendChild(buttonsCont);
        return buttonsWrapper;
    }
    /** Converts a {@linkcode PromptStringGen} (stringifiable value or sync or async function that returns a stringifiable value) to a string - uses {@linkcode fallback} as a fallback */
    async consumePromptStringGen(curPromptType, stringGen, fallback) {
        if (typeof stringGen === "function")
            return await stringGen(curPromptType);
        return String(stringGen ?? fallback);
    }
    /** Called on render to focus on the confirm or cancel button or text input, depending on prompt type */
    focusOnRender() {
        const inputElem = document.querySelector("#bytm-prompt-dialog-input");
        if (inputElem)
            return inputElem.focus();
        let captureEnterKey = true;
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && captureEnterKey) {
                const confBtn = document.querySelector("#bytm-prompt-dialog-confirm");
                const closeBtn = document.querySelector("#bytm-prompt-dialog-close");
                if (confBtn || closeBtn) {
                    confBtn && "click" in confBtn
                        ? confBtn.click()
                        : closeBtn?.click();
                    captureEnterKey = false;
                }
            }
        }, { capture: true, once: true });
    }
}
/** Custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions */
function showPrompt({ type, ...rest }) {
    return new Promise((resolve) => {
        if (BytmDialog.getOpenDialogs().includes(promptDialogId))
            promptDialog?.close();
        promptDialog = new PromptDialog({ type, ...rest });
        // focus on the most relevant button when the dialog opens to allow using the enter key immediately
        promptDialog.once("open", () => document.querySelector(`#bytm-prompt-dialog-${type === "alert" ? "close" : "confirm"}`)?.focus());
        // make config menu inert while prompt dialog is open
        promptDialog.once("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
        promptDialog.once("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));
        let resolveVal;
        const tryResolve = () => resolve(typeof resolveVal !== "undefined" ? resolveVal : false);
        let closeUnsub; // eslint-disable-line prefer-const
        const resolveUnsub = promptDialog.on("resolve", (val) => {
            resolveUnsub();
            if (resolveVal !== undefined)
                return;
            resolveVal = val;
            tryResolve();
            closeUnsub?.();
        });
        closeUnsub = promptDialog.on("close", () => {
            closeUnsub();
            if (resolveVal !== undefined)
                return;
            resolveVal = type === "alert";
            if (type === "prompt")
                resolveVal = null;
            tryResolve();
            resolveUnsub();
        });
        promptDialog.open();
    });
}const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";
/** Initializes the version check feature */
async function initVersionCheck() {
    try {
        if (getFeature("versionCheck") === false)
            return info("Version check is disabled");
        const lastCheck = await GM.getValue("bytm-version-check", 0);
        if (Date.now() - lastCheck < 1000 * 60 * 60 * 24)
            return;
        await doVersionCheck(false);
    }
    catch (err) {
        error("Version check failed:", err);
    }
}
/**
 * Checks for a new version of the script and shows a dialog.
 * If {@linkcode notifyNoNewVerFound} is set to true, a dialog is also shown if no updates were found.
 */
async function doVersionCheck(notifyNoNewVerFound = false) {
    await GM.setValue("bytm-version-check", Date.now());
    const res = await sendRequest({
        method: "GET",
        url: releaseURL,
    });
    // TODO: small dialog for "no update found" message?
    const noNewVerFound = () => notifyNoNewVerFound ? showPrompt({ type: "alert", message: t("no_new_version_found") }) : undefined;
    const latestTag = res.finalUrl.split("/").pop()?.replace(/[a-zA-Z]/g, "");
    if (!latestTag)
        return await noNewVerFound();
    info("Version check - current version:", scriptInfo$1.version, "- latest version:", latestTag, LogLevel.Info);
    if (compareVersions.compare(scriptInfo$1.version, latestTag, "<")) {
        const dialog = await getVersionNotifDialog({ latestTag });
        await dialog.open();
        return;
    }
    return await noNewVerFound();
}//#region init vol features
/** Initializes all volume-related features */
async function initVolumeFeatures() {
    let listenerOnce = false;
    // sliderElem is not technically an input element but behaves pretty much the same
    const onSliderElExists = async (type, sliderElem) => {
        const volSliderCont = document.createElement("div");
        volSliderCont.classList.add("bytm-vol-slider-cont");
        sliderElem.setAttribute("step", "1");
        if (getFeature("volumeSliderScrollStep") !== featInfo.volumeSliderScrollStep.default)
            initScrollStep(volSliderCont, sliderElem);
        UserUtils.addParent(sliderElem, volSliderCont);
        if (getFeature("volumeSliderLabel"))
            await addVolumeSliderLabel(type, sliderElem, volSliderCont);
        const updateSliderVal = (step) => {
            if (step && step > 0) {
                const roundedValue = Math.round(Number(sliderElem.value) / step) * step;
                if (roundedValue !== Number(sliderElem.value)) {
                    sliderElem.value = sliderElem.dataset.scrollVal = String(roundedValue);
                    sliderElem.setAttribute("aria-valuenow", String(roundedValue));
                    sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
                    siteEvents.emit("updateVolumeSliderLabel");
                }
            }
        };
        sliderElem.addEventListener("mousedown", () => {
            sliderElem.dataset.dragging = "true";
        });
        sliderElem.addEventListener("mouseup", () => {
            delete sliderElem.dataset.dragging;
            if (getFeature("volumeSharedBetweenTabs"))
                sharedVolumeChanged(Number(sliderElem.value));
            updateSliderVal(getFeature("volumeSliderStep"));
        });
        sliderElem.addEventListener("scrollend", () => {
            if (getFeature("volumeSharedBetweenTabs"))
                sharedVolumeChanged(Number(sliderElem.value));
            updateSliderVal(getFeature("volumeSliderScrollStep"));
        });
        if (listenerOnce)
            return;
        listenerOnce = true;
        // the following are only run once:
        await setInitialTabVolume(sliderElem);
        if (typeof getFeature("volumeSliderSize") === "number")
            setVolSliderSize();
        if (getFeature("volumeSharedBetweenTabs"))
            checkSharedVolume();
    };
    addSelectorListener("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
        listener: (el) => onSliderElExists("normal", el),
    });
    let sizeSmOnce = false;
    const onResize = () => {
        if (sizeSmOnce || window.innerWidth >= 1150)
            return;
        sizeSmOnce = true;
        addSelectorListener("playerBarRightControls", "ytmusic-player-expanding-menu tp-yt-paper-slider#expand-volume-slider", {
            listener: (el) => onSliderElExists("expand", el),
        });
    };
    window.addEventListener("resize", CoreUtils.debounce(onResize, Math.floor(1000 / 6)));
    waitVideoElementReady().then(onResize);
    onResize();
}
//#region exponential volume
const { 
// eslint-disable-next-line @typescript-eslint/unbound-method
get: nativeGetVolume, 
// eslint-disable-next-line @typescript-eslint/unbound-method
set: nativeSetVolume
// @ts-expect-error - no idea why HTMLMediaElement wouldn't exist on Window
 } = Object.getOwnPropertyDescriptor(UserUtils.getUnsafeWindow().HTMLMediaElement.prototype, "volume") ?? {};
/** Initializes the exponential volume scaling feature */
function initExponentialVolume() {
    if (getDomain() !== "ytm" || getFeature("volumeSliderExponential") === "linear")
        return;
    // @ts-expect-error - see above
    Object.defineProperty(UserUtils.getUnsafeWindow().HTMLMediaElement.prototype, "volume", {
        get() {
            const actual = nativeGetVolume?.call(this);
            if (typeof actual !== "number" || isNaN(actual))
                return actual;
            return expVolFnInv(actual);
        },
        set(value) {
            if (typeof value !== "number" || isNaN(value))
                return nativeSetVolume?.call(this, value);
            return nativeSetVolume?.call(this, expVolFn(value));
        }
    });
}
function expVolClamp(x) {
    return Math.min(1, Math.max(0, x));
}
/** Mapping for volume scaling - Maps [0, 1] to [0, 1] */
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
/** Inverse mapping for volume scaling - Maps [0, 1] to [0, 1] */
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
//#region scroll step
/** Initializes the volume slider scroll step feature */
function initScrollStep(volSliderCont, sliderElem) {
    for (const evtName of ["wheel", "scroll", "mousewheel", "DOMMouseScroll"]) {
        volSliderCont.addEventListener(evtName, (e) => {
            e.preventDefault();
            // cancels all the other events that would be fired
            e.stopImmediatePropagation();
            const delta = Number(e.deltaY ?? e?.detail ?? 1);
            if (isNaN(delta))
                return warn("Invalid scroll delta:", delta);
            const volumeDir = -Math.sign(delta);
            const newVolume = String(Number(sliderElem.value) + (getFeature("volumeSliderScrollStep") * volumeDir));
            sliderElem.value = newVolume;
            sliderElem.setAttribute("aria-valuenow", newVolume);
            // make the site actually change the volume
            sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
        }, {
            // takes precedence over the slider's own event listener
            capture: true,
        });
    }
}
//#region volume slider label
/** Adds a percentage label to the volume slider and tooltip */
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
    /** Renders the given volume value in the range [0, 100] after adjusting for the configured exponential scaling. */
    const getAdjustedVolValue = (val) => {
        if (isNaN(val))
            return String(val);
        val = CoreUtils.clamp(val, 0, 100);
        const valAdjusted = (expVolFn(val / 100) * 100).toFixed(1);
        const fixedPtVal = ["0.0", "100.0"].includes(valAdjusted)
            ? valAdjusted.slice(0, -2)
            : valAdjusted;
        return fixedPtVal;
    };
    const getLabel = (value) => {
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
            }
            else if (lblType === "valueBased")
                label = `${fixedPtVal}%`;
        }
        return label;
    };
    const labelElem = document.createElement("div");
    labelElem.classList.add("label");
    labelElem.textContent = getLabel(sliderElem.value);
    labelContElem.appendChild(labelElem);
    // prevent video from minimizing
    labelContElem.addEventListener("click", (e) => e.stopPropagation());
    labelContElem.addEventListener("keydown", (e) => ["Enter", "Space", " "].includes(e.key) && e.stopPropagation());
    const getSliderTooltip = (slider) => t("volume_tooltip", { volumePercent: getAdjustedVolValue(Number(slider.value)) });
    const labelFull = getSliderTooltip(sliderElem);
    sliderContainer.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);
    const updateLabel = () => {
        const labelFull = getSliderTooltip(sliderElem);
        sliderContainer.setAttribute("title", labelFull);
        sliderElem.setAttribute("title", labelFull);
        sliderElem.setAttribute("aria-valuetext", labelFull);
        if (!isNaN(Number(sliderElem.dataset.scrollVal)) && Number(sliderElem.dataset.scrollVal) % getFeature("volumeSliderStep") !== 0)
            sliderElem.dataset.scrollVal = "";
        const labelElem2 = document.querySelectorAll(".bytm-vol-slider-label div.label");
        for (const el of labelElem2)
            el.textContent = getLabel(sliderElem.value);
    };
    sliderElem.addEventListener("change", () => updateLabel());
    siteEvents.on("updateVolumeSliderLabel", () => updateLabel());
    siteEvents.on("configChanged", () => updateLabel());
    addSelectorListener("playerBarRightControls", type === "normal" ? ".bytm-vol-slider-cont" : "ytmusic-player-expanding-menu .bytm-vol-slider-cont", {
        listener: (volumeCont) => volumeCont.appendChild(labelContElem),
    });
    let lastSliderVal = Number(sliderElem.value);
    /** Hide or show the ThemeSong media controls element when the volume slider is expanded */
    const setThemeSongContHidden = (hidden = true) => {
        const contEl = document.querySelector("#ts-panel-container");
        contEl?.classList[(hidden ? "add" : "remove")]("bytm-hidden");
    };
    // show label if hovering over slider or slider is focused
    const sliderHoverObserver = new MutationObserver(() => {
        if (sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem) {
            labelContElem.style.display = "initial";
            labelContElem.setAttribute("aria-hidden", "false");
            labelContElem.classList.add("bytm-visible");
            setThemeSongContHidden();
        }
        else if (labelContElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem) {
            labelContElem.addEventListener("transitionend", () => {
                labelContElem.style.display = "none";
                labelContElem.setAttribute("aria-hidden", "true");
                setThemeSongContHidden(false);
            }, { once: true });
            labelContElem.classList.remove("bytm-visible");
        }
        if (Number(sliderElem.value) !== lastSliderVal) {
            lastSliderVal = Number(sliderElem.value);
            updateLabel();
        }
    });
    sliderHoverObserver.observe(sliderElem, {
        attributes: true,
    });
}
//#region volume slider size
/** Sets the volume slider to a set size */
function setVolSliderSize() {
    const size = getFeature("volumeSliderSize");
    if (typeof size !== "number" || isNaN(Number(size)))
        return error("Invalid volume slider size:", size);
    setGlobalCssVar("vol-slider-size", `${size}px`);
    addStyleFromResource("css-vol_slider_size");
}
//#region shared volume
/** Saves the shared volume level to persistent storage */
async function sharedVolumeChanged(vol) {
    try {
        await GM.setValue("bytm-shared-volume", String(lastCheckedSharedVolume = ignoreVal = vol));
    }
    catch (err) {
        error("Couldn't save shared volume level due to an error:", err);
    }
}
let ignoreVal = -1;
let lastCheckedSharedVolume = -1;
/** Only call once as this calls itself after a timeout! - Checks if the shared volume has changed and updates the volume slider accordingly */
async function checkSharedVolume() {
    try {
        const vol = await GM.getValue("bytm-shared-volume");
        if (vol && lastCheckedSharedVolume !== Number(vol)) {
            if (ignoreVal === Number(vol))
                return;
            lastCheckedSharedVolume = Number(vol);
            const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider");
            if (sliderElem) {
                sliderElem.value = String(vol);
                sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
            }
        }
        setTimeout(checkSharedVolume, 333);
    }
    catch (err) {
        error("Couldn't check for shared volume level due to an error:", err);
    }
}
//#region initial volume
/** Sets the volume slider to a set volume level when the session starts */
async function setInitialTabVolume(sliderElem) {
    const reloadTabVol = Number((await getReloadTabData())?.volume);
    if ((isNaN(reloadTabVol) || reloadTabVol === 0) && !getFeature("setInitialTabVolume"))
        return;
    const vidElem = await waitVideoElementReady();
    const initialVol = Math.round(!isNaN(reloadTabVol) && reloadTabVol > 0 ? reloadTabVol : getFeature("initialTabVolumeLevel"));
    if (isNaN(initialVol) || initialVol < 0 || initialVol > 100)
        return;
    if (getFeature("volumeSharedBetweenTabs")) {
        lastCheckedSharedVolume = ignoreVal = initialVol;
        if (getFeature("volumeSharedBetweenTabs"))
            GM.setValue("bytm-shared-volume", String(initialVol)).catch((err) => error("Couldn't save shared volume level due to an error:", err));
    }
    sliderElem.value = String(initialVol);
    vidElem.volume = initialVol / 100;
    sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
    const nonLinVol = getFeature("volumeSliderExponential") !== "linear";
    log(`Set initial tab volume to ${initialVol}%${nonLinVol ? ` (${(expVolFn(initialVol / 100) * 100).toFixed(1)}%)` : ""}${reloadTabVol > 0 ? " from GM storage (reload)" : " from configuration (initial load)"}`);
}//#region vars
/** Max amount of seconds a toast can be shown for */
const maxToastDuration = 15000;
/** Queue of future toasts to be shown */
const toastQueue = [];
/** Whether a toast is currently being shown */
let showingToast = false;
/** Timeout ID for the currently shown toast */
let timeout;
// TODO:FIXME: no workis
//#region icon toast
/**
 * Shows a toast message with an icon.
 * @returns The toast element if it could be immediately shown, otherwise `void` (like when it was queued to be shown later)
 */
async function showIconToast({ duration, position = "tr", iconPos = "left", ...rest }) {
    if (typeof duration !== "number" || isNaN(duration))
        duration = getFeature("toastDuration") * 1000;
    if (duration <= 0)
        return info("Toast duration is <= 0, so it won't be shown");
    if (showingToast)
        return void toastQueue.push(() => showIconToast({ duration, position, iconPos, ...rest }));
    showingToast = true;
    const toastWrapper = document.createElement("div");
    toastWrapper.classList.add("bytm-toast-flex-wrapper");
    let toastIcon;
    if ("iconSrc" in rest) {
        toastIcon = document.createElement("img");
        toastIcon.classList.add("bytm-toast-icon", "img");
        toastIcon.src = await rest.iconSrc;
    }
    else {
        toastIcon = document.createElement("div");
        toastIcon.classList.add("bytm-toast-icon");
        const iconHtml = await resourceAsString(rest.icon);
        if (iconHtml)
            setInnerHtml(toastIcon, iconHtml);
        if ("iconFill" in rest && rest.iconFill)
            toastIcon.style.setProperty("--toast-icon-fill", rest.iconFill);
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
    }
    else
        toastMessage.appendChild(rest.element);
    iconPos === "left" && toastWrapper.appendChild(toastIcon);
    toastWrapper.appendChild(toastMessage);
    iconPos === "right" && toastWrapper.appendChild(toastIcon);
    const elem = await showToast({
        duration,
        position,
        element: toastWrapper,
        title: "message" in rest ? rest.message : rest.title,
        onClick: rest.onClick,
    });
    if (toastQueue.length > 0) {
        return new Promise(resolve => {
            elem?.addEventListener("transitionend", async () => {
                const nextToast = toastQueue.shift();
                showingToast = false;
                return resolve(void await nextToast());
            }, { once: true });
        });
    }
    else {
        showingToast = false;
        return elem;
    }
}
/** Shows a toast message or element in the specified position (top right corner by default) and uses the default timeout from the config option `toastDuration` */
async function showToast(arg) {
    const props = typeof arg === "string"
        ? {
            message: arg,
            duration: getFeature("toastDuration") * 1000,
        }
        : arg;
    const { duration: durationMs = getFeature("toastDuration") * 1000, onClick, position = "tr", ...rest } = props;
    if (durationMs <= 0)
        return info("Toast duration is <= 0, so it won't be shown");
    if (showingToast)
        return void toastQueue.push(() => showToast(props));
    showingToast = true;
    if (document.querySelector("#bytm-toast"))
        await closeToast();
    const toastElem = document.createElement("div");
    toastElem.classList.add(`pos-${position.toLowerCase()}`);
    onClick && toastElem.classList.add("clickable");
    toastElem.id = "bytm-toast";
    toastElem.role = "alert";
    toastElem.ariaLive = "polite";
    toastElem.ariaAtomic = "true";
    toastElem.addEventListener("click", async (e) => {
        onClick?.(e);
        await closeToast();
    }, { once: true });
    if ("message" in rest)
        toastElem.title = toastElem.ariaLabel = toastElem.textContent = rest.message;
    else {
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
            }, { once: true });
        });
    }
    else {
        showingToast = false;
        return toastElem;
    }
}
/** Closes the currently open toast */
async function closeToast() {
    if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
    }
    // query all for safety even though there should only be one at a time
    const toastEls = document.querySelectorAll("#bytm-toast");
    if (toastEls.length === 0)
        return;
    await Promise.allSettled(Array.from(toastEls).map(async (toastEl) => {
        toastEl.addEventListener("transitionend", async () => toastEl.remove(), { once: true });
        toastEl.classList.remove("visible");
    }));
}class MarkdownDialog extends BytmDialog {
    constructor(options) {
        super({
            ...options,
            id: `md-${options.id}`,
            renderBody: () => this.renderBody(),
        });
        Object.defineProperty(this, "opts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.opts = options;
    }
    /** Parses the passed markdown string (supports GitHub flavor and HTML mixins) and returns it as an HTML string */
    static async parseMd(md) {
        return await marked.marked.parse(md, {
            async: true,
            gfm: true,
            breaks: true,
        });
    }
    /** Renders the dialog body elements from a markdown string using what's set in `this.opts.body` */
    async renderBody() {
        const bodyEl = document.createElement("div");
        bodyEl.classList.add("bytm-md-dialog-body");
        const mdCont = await CoreUtils.consumeStringGen(this.opts.body);
        const markdownEl = document.createElement("div");
        markdownEl.classList.add("bytm-markdown-dialog-content", "bytm-markdown-container");
        markdownEl.tabIndex = 0;
        setInnerHtml(markdownEl, await MarkdownDialog.parseMd(mdCont));
        if (this.opts.modifyBodyElements)
            await this.opts.modifyBodyElements(bodyEl, markdownEl);
        bodyEl.appendChild(markdownEl);
        return bodyEl;
    }
}const interactionKeys = ["Enter", " ", "Space"];
/**
 * Adds generic, accessible interaction listeners to the passed element.
 * All listeners have the default behavior prevented and stop propagation (for keyboard events this only applies as long as the captured key is included in {@linkcode interactionKeys}).
 * @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
 */
function onInteraction(elem, listener, listenerOptions) {
    const { preventDefault = true, stopPropagation = true, ...listenerOpts } = listenerOptions ?? {};
    const proxListener = (e) => {
        if (e instanceof KeyboardEvent) {
            if (interactionKeys.includes(e.key)) {
                preventDefault && e.preventDefault();
                stopPropagation && e.stopPropagation();
            }
            else
                return;
        }
        else if (e instanceof MouseEvent) {
            preventDefault && e.preventDefault();
            stopPropagation && e.stopPropagation();
        }
        // clean up the other listener that isn't automatically removed if `once` is set
        listenerOpts?.once && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOpts);
        listenerOpts?.once && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOpts);
        listener(e);
    };
    elem.addEventListener("click", proxListener, listenerOpts);
    elem.addEventListener("keydown", proxListener, listenerOpts);
}//#region logging fns
let curLogLevel = LogLevel.Info;
/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${scriptInfo$1.name}]`;
const consPrefixDbg = `[${scriptInfo$1.name}/#DEBUG]`;
/** In dev mode, all logs are stored in this array for exporting */
const logs = [];
/** Returns a string representation of the {@linkcode logs}, formatted for downloading as a file */
const getLogsTxt = () => {
    /** Converts a value to a string for logging. */
    const getVal = (val, primaryScope = true) => {
        if (typeof val === "undefined")
            return primaryScope ? "[undefined]" : "(undefined)";
        if (val === null)
            return primaryScope ? "[null]" : "(null)";
        if (Array.isArray(val))
            return `[Array (${val.length}) <${val.map((v) => getVal(v, false)).join(", ")}>]`;
        if (val instanceof Element)
            return `[Element <${val.tagName.toLowerCase()}${val.id ? ` id="${val.id}"` : ""}${val.className ? ` class="${val.className}"` : ""}>]`;
        if (typeof val === "function")
            return val.name ? `[Function <${val.name}()>]` : "[anonymous function()]";
        if (val instanceof CoreUtils.DatedError)
            return `[${val.name} (@ ${val.date.toISOString()}): ${val.message}]`;
        if (val instanceof Error)
            return `[${val.name}: ${val.message}]`;
        if (val instanceof Date)
            return `[Date <${val.toISOString()}>]`;
        if (typeof val === "object") {
            try {
                if (val.constructor?.name === "Object")
                    return JSON.stringify(val);
                return `[Object <${val.constructor?.name ?? "(unknown)"}>]`;
            }
            catch {
                // @ts-expect-error
                return "toString" in val ? val.toString() : `[Object <${val?.constructor?.name ?? "(unknown)"}>]`;
            }
        }
        return primaryScope ? `${val}` : `"${val}"`;
    };
    const longestLogType = Math.max(...logs.map(([type]) => type.length));
    return logs.reduce((acc, [type, time, ...args]) => {
        if (args.length === 0)
            return acc;
        const timestamp = new Date(time).toISOString();
        try {
            return `[${timestamp}] ${`[${type}]`.padEnd(longestLogType + 2, " ")} ${args.map(a => getVal(a)).join(" ")}\n${acc}`;
        }
        catch {
            return `[${timestamp}] ${`[${type}]`.padEnd(longestLogType + 2, " ")} ${args.map(a => (typeof a === "object" && a && "toString" in a) ? a.toString() : String(a)).join(" ")}\n${acc}`;
        }
    }, "");
};
/** Sets the current log level. 0 = Debug, 1 = Info */
function setLogLevel(level) {
    curLogLevel = level;
    setGlobalProp("logLevel", level);
    if (curLogLevel !== level)
        log("Set the log level to", LogLevel[level]);
}
/** Extracts the log level from the last item from spread arguments - returns 0 if the last item is not a number or too low or high */
function getLogLevel(args) {
    const minLogLvl = 0, maxLogLvl = 1;
    const lastArg = args.at(-1);
    if (typeof lastArg === "number" && lastArg >= 0 && lastArg <= (Object.keys(LogLevel).length / 2) - 1)
        return CoreUtils.clamp(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
    return LogLevel.Debug;
}
/**
 * Logs all passed values to the console, as long as the log level is sufficient.
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.
 */
function log(...args) {
    if (curLogLevel <= getLogLevel(args))
        console.log(consPrefix, ...args);
    logs.push(["LOG", Date.now(), ...args]);
}
/**
 * Logs all passed values to the console as info, as long as the log level is sufficient.
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.
 */
function info(...args) {
    if (curLogLevel <= getLogLevel(args))
        console.info(consPrefix, ...args);
    logs.push(["INFO", Date.now(), ...args]);
}
/** Logs all passed values to the console as a warning, no matter the log level. */
function warn(...args) {
    console.warn(consPrefix, ...args);
    logs.push(["WARN", Date.now(), ...args]);
}
const showErrToast = CoreUtils.debounce((errName, ...args) => showIconToast({
    message: t("generic_error_toast_encountered_error_type", errName),
    subtitle: t("generic_error_toast_click_for_details"),
    icon: "icon-error",
    iconFill: "var(--bytm-error-col)",
    onClick: () => getErrorDialog(errName, Array.isArray(args) ? args : []).open(),
}), 1000);
/** Logs all passed values to the console as an error, no matter the log level. */
function error(...args) {
    console.error(consPrefix, ...args);
    logs.push(["ERROR", Date.now(), ...args]);
    try {
        getFeature("showToastOnGenericError") && showErrToast(args.find(a => a instanceof Error)?.name ?? t("error"), ...args);
    }
    catch (e) {
        console.error(consPrefix, "Error while showing error toast:", e);
        logs.push(["ERROR", Date.now(), "Error while showing error toast:", e]);
    }
}
/** Logs all passed values to the console as an error, no matter the log level. Doesn't show an error toast. */
function errorNoToast(...args) {
    console.error(consPrefix, ...args);
    logs.push(["ERROR", Date.now(), ...args]);
}
/** Logs all passed values to the console with a debug-specific prefix */
function dbg(...args) {
    console.log(consPrefixDbg, ...args);
    logs.push(["DBG", Date.now(), ...args]);
}
//#region error dialog
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
                downloadFile(`bytm-log-${new Date().toISOString()}.log`, getLogsTxt(), "text/plain");
            });
            footer.appendChild(dlLogsBtn);
            return footer;
        },
        body: `\
${args.length > 0 ? args.join(" ") : t("generic_error_dialog_message")}  
  
${t("generic_error_dialog_open_console_note", packageJson.bugs.url)}`,
    });
}
//#region error classes
/** Error class for errors thrown by the lyrics fetching functions - extends {@linkcode DatedError} */
class LyricsError extends CoreUtils.DatedError {
    constructor(message, opts) {
        super(message, opts);
        this.name = "LyricsError";
    }
}
/** Error class for errors thrown by the plugin interface - extends {@linkcode DatedError} */
class PluginError extends CoreUtils.DatedError {
    constructor(message, opts) {
        super(message, opts);
        this.name = "PluginError";
    }
}//#region beforeunload popup
let discardBeforeUnloadOverride;
/** Disables the popup before leaving the site */
function enableDiscardBeforeUnload() {
    discardBeforeUnloadOverride = true;
    info("Disabled popup before leaving the site");
}
/** (Re-)enables the popup before leaving the site */
function disableDiscardBeforeUnload() {
    discardBeforeUnloadOverride = false;
    info("Enabled popup before leaving the site");
}
/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site */
async function initBeforeUnloadHook() {
    try {
        UserUtils.interceptWindowEvent("beforeunload", () => typeof discardBeforeUnloadOverride !== "undefined" ? discardBeforeUnloadOverride : getFeature("disableBeforeUnloadPopup"));
    }
    catch (err) {
        error("Error in beforeunload hook:", err);
    }
}
//#region auto close toasts
/** Closes toasts after a set amount of time */
async function initAutoCloseToasts() {
    const animTimeout = 300;
    addSelectorListener("popupContainer", "ytmusic-notification-action-renderer", {
        all: true,
        continuous: true,
        listener: async (toastContElems) => {
            try {
                if (!getFeature("autoCloseToasts"))
                    return;
                for (const toastContElem of toastContElems) {
                    const toastElem = toastContElem.querySelector("tp-yt-paper-toast#toast");
                    if (!toastElem || !toastElem.hasAttribute("allow-click-through"))
                        continue;
                    if (toastElem.classList.contains("bytm-closing"))
                        continue;
                    toastElem.classList.add("bytm-closing");
                    const closeTimeout = Math.max(getFeature("closeToastsTimeout") * 1000 + animTimeout, animTimeout);
                    await CoreUtils.pauseFor(closeTimeout);
                    toastElem.classList.remove("paper-toast-open");
                    toastElem.addEventListener("transitionend", () => {
                        toastElem.classList.remove("bytm-closing");
                        toastElem.style.display = "none";
                        if (toastElem.parentNode) {
                            clearNode(toastElem);
                            log(`Automatically closed toast after ${getFeature("closeToastsTimeout") * 1000}ms`);
                        }
                    }, { once: true });
                }
            }
            catch (err) {
                error("Error in automatic toast closing:", err);
            }
        },
    });
    log("Initialized automatic toast closing");
}
//#region auto scroll to active
let initialAutoScrollToActiveSong = true;
let prevVidMaxTime = Infinity;
let prevTime = -1;
/** Initializes the autoScrollToActiveSong feature */
async function initAutoScrollToActiveSong() {
    CoreUtils.createRecurringTask({
        timeout: 50,
        async task() {
            // since tasks don't overlap, this will pause until the element is ready
            const vidEl = await waitVideoElementReady();
            prevTime = vidEl.currentTime ?? -1;
            prevVidMaxTime = vidEl.duration ?? Infinity;
        },
    });
    // TODO: refactor to trigger on queue changes instead of watchID
    siteEvents.on("watchIdChanged", (_, oldId) => {
        if (!oldId)
            return;
        const isManualChange = prevTime < prevVidMaxTime - 1;
        if (["videoChangeManual", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && isManualChange)
            scrollToCurrentSongInQueue();
        else if (["videoChangeAuto", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && !isManualChange)
            scrollToCurrentSongInQueue();
    });
    if (getFeature("autoScrollToActiveSongMode") !== "never" && initialAutoScrollToActiveSong) {
        initialAutoScrollToActiveSong = false;
        scrollToCurrentSongInQueue();
    }
}
/**
 * Remembers the time of the last played video and resumes playback from that time when the site is reloaded or the video is revisited.
 * *Needs to be called **before** DOM is ready!*
 */
async function initRememberVideoTime() {
    if (getFeature("rememberSongTimeSites") !== "all" && getFeature("rememberSongTimeSites") !== getDomain())
        return;
    const remTimesRaw = await GM.getValue("bytm-remember-times");
    if (!remTimesRaw)
        await GM.setValue("bytm-remember-times", "[]");
    let remTimeEntries;
    try {
        remTimeEntries = JSON.parse(String(remTimesRaw ?? "[]"));
    }
    catch (err) {
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
        if (!UserUtils.isDomLoaded())
            document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop, { once: true });
        else
            remTimeStartUpdateLoop();
    }
    catch (err) {
        error("Error in video time remembering update loop:", err);
    }
}
/** Tries to restore the time of the currently playing video. Resolves to a boolean. Only rejects on caught error */
function remTimeTryRestoreTime(force = false) {
    return new Promise(async (resolve, reject) => {
        try {
            const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
            if (location.pathname.startsWith("/watch")) {
                let videoID = getWatchId();
                if (!videoID) {
                    const thumbEl = document.querySelector("ytmusic-player-bar .thumbnail-image-wrapper img[src]");
                    if (thumbEl && thumbEl.src.includes("/vi/"))
                        videoID = thumbEl.src.split("/vi/")[1].split("/")[0];
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
                    if (Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1000) {
                        await remTimeDeleteEntry(entry.id);
                        return resolve(false);
                    }
                    else if (isNaN(Number(entry.time)) || entry.time < 0) {
                        warn("Invalid time in remembered song time entry:", entry);
                        return resolve(false);
                    }
                    else {
                        let vidElem;
                        const doRestoreTime = async () => {
                            if (!vidElem)
                                vidElem = await waitVideoElementReady();
                            const vidRestoreTime = entry.time - (getFeature("rememberSongTimeReduction", 0));
                            vidElem.currentTime = CoreUtils.clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
                            await remTimeDeleteEntry(entry.id);
                            info(`Restored ${getDomain() === "ytm" ? getCurrentMediaType() : "video"} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
                            return resolve(true);
                        };
                        if (!UserUtils.isDomLoaded())
                            document.addEventListener("DOMContentLoaded", doRestoreTime, { once: true });
                        else
                            doRestoreTime();
                    }
                }
            }
            return resolve(false);
        }
        catch (err) {
            error("Uncaught error when trying to restore video time:", err);
            return reject(err);
        }
    });
}
let lastSongTime = -1;
let remVidCheckTimeout;
/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
async function remTimeStartUpdateLoop() {
    const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
    if (location.pathname.startsWith("/watch")) {
        const id = getWatchId();
        const songTime = await getVideoTime() ?? 0;
        if (id && songTime !== lastSongTime) {
            lastSongTime = songTime;
            const paused = getVideoElement()?.paused ?? false;
            // don't immediately update to reduce race conditions and only update if the video is playing
            // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
            if (songTime > getFeature("rememberSongTimeMinPlayTime") && !paused) {
                const entry = {
                    id,
                    time: songTime,
                    updated: Date.now(),
                };
                await remTimeUpsertEntry(entry);
            }
            // if the song is rewound to the beginning, update the entry accordingly
            else if (!paused) {
                const entry = remVids.find(entry => entry.id === id);
                if (entry && songTime <= entry.time)
                    await remTimeUpsertEntry({ ...entry, time: songTime, updated: Date.now() });
            }
        }
    }
    const expiredEntries = remVids.filter(entry => Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1000);
    for (const entry of expiredEntries)
        await remTimeDeleteEntry(entry.id);
    // for no overlapping calls and better error handling:
    if (remVidCheckTimeout)
        clearTimeout(remVidCheckTimeout);
    remVidCheckTimeout = setTimeout(remTimeStartUpdateLoop, 250);
}
/** Updates an existing or inserts a new entry to be remembered */
async function remTimeUpsertEntry(data, force = false) {
    const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
    const foundIdx = remVids.findIndex(entry => entry.id === data.id);
    // only upsert when no previous entry exists or its time is lower than the provided data
    if (foundIdx > -1 && !force && data.time <= remVids[foundIdx].time)
        return;
    if (foundIdx >= 0)
        remVids[foundIdx] = data;
    else
        remVids.push(data);
    await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
}
/** Deletes an entry in the "remember cache" */
async function remTimeDeleteEntry(videoID) {
    const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"))
        .filter(entry => entry.id !== videoID);
    await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
}
//#region dismiss "are you still there"
let curSongTitle;
let isDragging = false;
let lastClick = 0;
const lastInteractionTimeout = 5000;
document.addEventListener("dragstart", () => isDragging = true);
document.addEventListener("dragend", () => isDragging = false);
document.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("click", () => lastClick = Date.now());
let isInFullscreen = false;
siteEvents.on("fullscreenToggled", (val) => isInFullscreen = val);
// TODO:FIXME: disable movement events while in fullscreen
/** Initializes the "Are you still there?" popup dismissing feature */
async function initStillThere() {
    siteEvents.on("songTitleChanged", (newTitle) => curSongTitle = newTitle);
    let firstCheck = true;
    let obs;
    const checkStillThere = (youThereCont) => {
        const dialogCont = youThereCont.closest("tp-yt-paper-dialog");
        if (!dialogCont)
            return warn("Could not find the dialog container to dismiss the \"Are you still there?\" popup");
        const doCheck = () => {
            if (!getFeature("yesImStillThere") || !dialogCont || dialogCont.hasAttribute("aria-hidden") || getComputedStyle(dialogCont).display === "none")
                return;
            const btn = youThereCont.querySelector(".actions button");
            if (!btn)
                return warn("Could not find the \"Yes\" button to dismiss the \"Are you still there?\" popup");
            btn.click();
            if (obs) {
                obs.disconnect();
                obs = undefined;
            }
            info("Automatically dismissed the \"Are you still here?\" dialog on the song", curSongTitle, LogLevel.Info);
        };
        if (firstCheck) {
            firstCheck = false;
            doCheck();
        }
        if (obs)
            return;
        obs = new MutationObserver(doCheck);
        obs.observe(dialogCont, {
            childList: true,
            subtree: true,
            attributes: true,
        });
        getFeature("yesImStillThere") && dbg("Checked for \"Are you still there?\" popup and set up observer to dismiss it");
    };
    addSelectorListener("popupContainer", "tp-yt-paper-dialog ytmusic-you-there-renderer", {
        listener: (el) => checkStillThere(el),
    });
    siteEvents.on("watchIdChanged", () => {
        const youThereCont = document.querySelector("ytmusic-popup-container ytmusic-you-there-renderer");
        if (youThereCont) {
            checkStillThere(youThereCont);
            let i = 0;
            const iv = setInterval(() => {
                checkStillThere(youThereCont);
                i++;
                if (i > 10)
                    clearInterval(iv);
            }, 1000);
        }
    });
    // dispatch on interval
    const tryClick = () => {
        if (isInFullscreen)
            return warn("Fullscreen is active - not dispatching \"Are you still there?\" events");
        if (isDragging || Date.now() - lastClick < lastInteractionTimeout)
            return warn("Click is currently held down - not dispatching \"Are you still there?\" events");
        // click the navbar
        const navBar = document.querySelector("ytmusic-nav-bar .center-content");
        navBar?.dispatchEvent(new MouseEvent("click", {
            // @ts-expect-error
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
            // see https://github.com/Sv443/BetterYTM/issues/18
            view: UserUtils.getUnsafeWindow(),
        }));
    };
    const tryMove = async () => {
        if (isInFullscreen)
            return warn("Fullscreen is active - not dispatching \"Are you still there?\" events");
        if (isDragging || Date.now() - lastClick < lastInteractionTimeout)
            return warn("Click is currently held down - not dispatching \"Are you still there?\" events");
        // dispatch mousemoves with random vector for a second
        const incX = (Math.random() * 2 - 1) / 10, incY = (Math.random() * 2 - 1) / 10;
        const vidEl = getVideoElement();
        if (!vidEl)
            return;
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
                // see https://github.com/Sv443/BetterYTM/issues/18
                view: UserUtils.getUnsafeWindow(),
            }));
            await CoreUtils.pauseFor(10);
        }
    };
    CoreUtils.setImmediateInterval(async () => {
        if (!getFeature("yesImStillThere"))
            return;
        tryClick();
        await tryMove();
    }, 30000);
}//#region misc
/**
 * Constructs a URL from a base URL and a record of query parameters.
 * If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.
 * All values will be stringified using their `toString()` method and then URI-encoded.
 * @returns Returns a string instead of a URL object
 */
function constructUrlString(baseUrl, params) {
    return `${baseUrl}?${Object.entries(params)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => `${k}${v === null ? "" : `=${encodeURIComponent(String(v))}`}`)
        .join("&")}`;
}
/**
 * Constructs a URL object from a base URL and a record of query parameters.
 * If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.
 * All values will be stringified and then URI-encoded.
 * @returns Returns a URL object instead of a string
 */
function constructUrl(base, params) {
    return new URL(constructUrlString(base, params));
}
/**
 * Sends a request with the specified parameters and returns the response as a Promise.
 * Ignores [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), contrary to fetch and fetchAdvanced.
 */
function sendRequest(details) {
    return new Promise((resolve, reject) => {
        const success = (val) => {
            getFeature("logHttp") && log(`HTTP request '${details.method ?? "GET"} ${details.url}' succeeded with status ${val.status}:`, getterifyObj(val));
            resolve(val);
        };
        const failure = (err) => {
            const errStr = `HTTP request '${details.method ?? "GET"} ${details.url}' failed:`;
            getFeature("logHttp") && error(errStr, err);
            reject(new Error(errStr, { cause: err }));
        };
        GM.xmlHttpRequest({
            timeout: 10000,
            ...details,
            onload: success,
            onerror: failure,
            ontimeout: failure,
            onabort: failure,
        });
    });
}
//#region css
/** Fetches a CSS file from the specified resource with a key starting with `css-` */
async function fetchCss(key) {
    try {
        const css = await (await CoreUtils.fetchAdvanced(await getResourceUrl(key))).text();
        return css ?? undefined;
    }
    catch (err) {
        error("Couldn't fetch CSS due to an error:", err);
        return undefined;
    }
}
//#region RYD
/** Cache for the vote data of YouTube videos to prevent some unnecessary requests */
const voteCache = new Map();
/** Time-to-live for the vote cache in milliseconds */
const voteCacheTTL = 1000 * 60 * 60;
/**
 * Fetches the votes object for a YouTube video from the [Return YouTube Dislike API.](https://returnyoutubedislike.com/docs)
 * @param videoID The video ID of the video
 */
async function fetchVideoVotes(videoID) {
    try {
        if (voteCache.has(videoID)) {
            const cached = voteCache.get(videoID);
            if (Date.now() - cached.timestamp < voteCacheTTL) {
                info(`Returning cached video votes for video ID '${videoID}':`, cached);
                return cached;
            }
            else
                voteCache.delete(videoID);
        }
        const votesRaw = JSON.parse((await sendRequest({
            method: "GET",
            url: `https://returnyoutubedislikeapi.com/votes?videoId=${videoID}`,
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
            timestamp: Date.now(),
        };
        voteCache.set(votesObj.id, votesObj);
        info(`Fetched video votes for watch ID '${videoID}':`, votesObj);
        return votesObj;
    }
    catch (err) {
        error("Couldn't fetch video votes due to an error:", err);
        return undefined;
    }
}
//#region iTunes album info
/**
 * Fetches all album info objects from the Apple Music / iTunes API endpoint at `https://itunes.apple.com/search?country=us&limit=5&entity=album&term=$ARTIST%20$SONG`
 * Never throws, just returns an empty array on failure.
 */
async function fetchITunesAlbumInfo(artist, album) {
    try {
        const url = constructUrlString("https://itunes.apple.com/search", {
            country: "us",
            limit: 20,
            entity: "album",
            term: `${artist} ${album}`,
        });
        log(`Fetching iTunes album info for '${artist} - ${album}' with URL: ${url}`);
        const req = await sendRequest({
            method: "GET",
            url,
        });
        const json = JSON.parse(req.response);
        if (!("resultCount" in json) || !("results" in json)) {
            error("Couldn't parse iTunes album info due to an error:", json);
            return [];
        }
        if (json.resultCount === 0)
            return [];
        const filteredResults = json.results
            // filter out invalid results
            .filter((result) => {
            if (!("collectionType" in result) || !("collectionName" in result) || !("artistName" in result) || !("collectionId" in result) || !("artworkUrl60" in result) || !("artworkUrl100" in result))
                return false;
            return result.collectionType === "Album" && result.collectionName && result.artistName && result.collectionId && result.artworkUrl60 && result.artworkUrl100;
        })
            // trim album name (" - Single", " - EP", etc.)
            .map((result) => {
            return {
                ...result,
                collectionName: result.collectionName.trim().replace(/ - (Single|EP|LP|Album|Soundtrack|Compilation|Mixtape|Remix|Live|Version|Edition|Reissue|Anniversary Edition|Deluxe Edition|Box Set|Set|Collection|Discography)$/, ""),
            };
        });
        return filteredResults;
    }
    catch (err) {
        error("Couldn't fetch iTunes album info due to an error:", err);
        return [];
    }
}/**
 * Creates an element with a ripple effect on click.
 * @param rippleElement If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
function createRipple(rippleElement, properties) {
    const props = {
        speed: "normal",
        ...properties,
    };
    const rippleEl = rippleElement ?? document.createElement("div");
    "additionalProps" in props && Object.assign(rippleEl, props.additionalProps);
    rippleEl.classList.add("bytm-ripple", props.speed);
    const updateRippleWidth = () => rippleEl.style.setProperty("--bytm-ripple-cont-width", `${rippleEl.clientWidth}px`);
    rippleEl.addEventListener(props?.triggerEvent ?? "mousedown", (e) => {
        updateRippleWidth();
        const x = e.clientX - rippleEl.getBoundingClientRect().left;
        const y = e.clientY - rippleEl.getBoundingClientRect().top;
        const rippleAreaEl = document.createElement("span");
        rippleAreaEl.classList.add("bytm-ripple-area");
        rippleAreaEl.style.left = `${Math.round(x)}px`;
        rippleAreaEl.style.top = `${Math.round(y)}px`;
        if (rippleEl.firstChild)
            rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild);
        else
            rippleEl.appendChild(rippleAreaEl);
        rippleAreaEl.addEventListener("animationend", () => rippleAreaEl.remove());
    });
    updateRippleWidth();
    return rippleEl;
}/**
 * Creates a generic, circular, long button element with an icon and text.
 * Has classes for the enabled and disabled states for easier styling.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` or `onToggle` is provided, the button will be a div element.
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
async function createLongBtn({ title, text, iconPosition, ripple, ...rest }) {
    if (["href", "onClick", "onToggle"].every((key) => !(key in rest)))
        throw new TypeError("Either 'href', 'onClick' or 'onToggle' must be provided");
    let btnElem;
    if ("href" in rest && rest.href) {
        btnElem = document.createElement("a");
        btnElem.href = rest.href;
        btnElem.role = "button";
        btnElem.target = "_blank";
        btnElem.rel = "noopener noreferrer";
    }
    else
        btnElem = document.createElement("div");
    if ("toggle" in rest && rest.toggle) {
        btnElem.classList.add("bytm-toggle");
        if ("toggleInitialState" in rest && rest.toggleInitialState)
            btnElem.classList.add("toggled");
    }
    onInteraction(btnElem, (evt) => {
        if ("onClick" in rest)
            rest.onClick(evt);
        if ("toggle" in rest && rest.toggle && (rest.togglePredicate ?? (() => true))(evt))
            rest.onToggle(btnElem.classList.toggle("toggled"), evt);
    });
    btnElem.classList.add("bytm-generic-btn", "long");
    btnElem.ariaLabel = btnElem.title = title;
    btnElem.tabIndex = 0;
    btnElem.role = "button";
    const imgElem = document.createElement("src" in rest ? "img" : "div");
    imgElem.classList.add("bytm-generic-btn-img", iconPosition ?? "left");
    if ("src" in rest)
        imgElem.src = rest.src;
    else
        setInnerHtml(imgElem, await resourceAsString(rest.resourceName));
    const txtElem = document.createElement("span");
    txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
    txtElem.textContent = txtElem.ariaLabel = text;
    iconPosition === "left" || !iconPosition && btnElem.appendChild(imgElem);
    btnElem.appendChild(txtElem);
    iconPosition === "right" && btnElem.appendChild(imgElem);
    return ripple ? createRipple(btnElem, { speed: "normal" }) : btnElem;
}//#region class
/** Generic dialog for exporting and importing any string of data */
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
            ...options,
        });
    }
    //#region header
    static async renderHeader(opts) {
        const headerEl = document.createElement("h2");
        headerEl.classList.add("bytm-menu-title");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        headerEl.tabIndex = 0;
        headerEl.textContent = headerEl.ariaLabel = await CoreUtils.consumeStringGen(opts.title);
        return headerEl;
    }
    //#region body
    static async renderBody(opts) {
        const panesCont = document.createElement("div");
        panesCont.classList.add("bytm-exim-dialog-panes-cont");
        //#region export
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
                async onClick({ shiftKey }) {
                    const copyData = shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData;
                    copyToClipboard(await CoreUtils.consumeStringGen(copyData));
                    await showToast({ message: t("copied_to_clipboard") });
                },
            });
            exportCenterBtnCont.appendChild(copyBtn);
            exportPane.append(descEl, dataEl, exportCenterBtnCont);
        }
        //#region import
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
                onClick: () => opts.onImport(dataEl.value),
            });
            importCenterBtnCont.appendChild(importBtn);
            importPane.append(descEl, dataEl, importCenterBtnCont);
        }
        panesCont.append(exportPane, importPane);
        return panesCont;
    }
}/**
 * Creates a generic, circular button element.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` is provided, the button will be a div element.
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
async function createCircularBtn({ title, ripple = true, ...rest }) {
    let btnElem;
    if ("href" in rest && rest.href) {
        btnElem = document.createElement("a");
        btnElem.href = rest.href;
        btnElem.role = "button";
        btnElem.target = "_blank";
        btnElem.rel = "noopener noreferrer";
    }
    else if ("onClick" in rest && rest.onClick) {
        btnElem = document.createElement("div");
        rest.onClick && onInteraction(btnElem, (e) => rest.onClick(e));
    }
    else
        throw new TypeError("Either 'href' or 'onClick' must be provided");
    btnElem.classList.add("bytm-generic-btn");
    btnElem.ariaLabel = btnElem.title = title;
    btnElem.tabIndex = 0;
    btnElem.role = "button";
    if ("src" in rest || ("resourceName" in rest && !rest.resourceName.startsWith("icon-"))) {
        const imgElem = document.createElement("img");
        imgElem.classList.add("bytm-generic-btn-img");
        imgElem.src = "src" in rest
            ? await rest.src
            : await getResourceUrl(rest.resourceName);
        btnElem.appendChild(imgElem);
    }
    else if ("resourceName" in rest && rest.resourceName.startsWith("icon-")) {
        setInnerHtml(btnElem, await resourceAsString(rest.resourceName));
        btnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
    }
    return ripple ? createRipple(btnElem) : btnElem;
}let autoLikeDialog = null;
let autoLikeExImDialog = null;
// TODO:FIXME: dialog isnt properly closed?
// to reproduce: open dialog, create new entry, confirm with enter, close dialog -> cfg menu is still inert and dialog is still open for some reason
/** Creates and/or returns the import dialog */
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
            renderFooter: renderFooter$1,
        });
        siteEvents.on("autoLikeChannelsUpdated", async () => {
            try {
                if (autoLikeExImDialog?.isOpen())
                    autoLikeExImDialog.unmount();
                if (autoLikeDialog?.isOpen()) {
                    autoLikeDialog.unmount();
                    await autoLikeDialog.open();
                    log("Auto-like channels updated, refreshed dialog");
                }
            }
            catch (err) {
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
            // try to compress the data if possible
            exportData: async () => await compressionSupported()
                ? await CoreUtils.compress(JSON.stringify(autoLikeStore.getData()), compressionFormat$1, "string")
                : JSON.stringify(autoLikeStore.getData()),
            // copy plain when shift-clicking the copy button
            exportDataSpecial: () => JSON.stringify(autoLikeStore.getData()),
            async onImport(data) {
                try {
                    const parsed = await tryToDecompressAndParse(data);
                    log("Trying to import auto-like data:", parsed);
                    if (!parsed || typeof parsed !== "object")
                        return await showPrompt({ type: "alert", message: t("import_error.invalid") });
                    if (!parsed.channels || typeof parsed.channels !== "object" || Object.keys(parsed.channels).length === 0)
                        return await showPrompt({ type: "alert", message: t("import_error.no_data") });
                    await autoLikeStore.setData(parsed);
                    emitSiteEvent("autoLikeChannelsUpdated");
                    showToast({ message: t("import_success") });
                    autoLikeExImDialog?.unmount();
                }
                catch (err) {
                    error("Couldn't import auto-like channels data:", err);
                }
            },
            title: () => t("auto_like_export_import_title"),
            descImport: () => t("auto_like_import_desc"),
            descExport: () => t("auto_like_export_desc"),
        });
    }
    return autoLikeDialog;
}
//#region header
async function renderHeader$3() {
    const headerEl = document.createElement("h2");
    headerEl.classList.add("bytm-dialog-title");
    headerEl.role = "heading";
    headerEl.ariaLevel = "1";
    headerEl.tabIndex = 0;
    headerEl.textContent = headerEl.ariaLabel = t("auto_like_channels_dialog_title");
    return headerEl;
}
//#region body
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
        const count = searchbarEl.value.trim().length === 0
            ? autoLikeStore.getData().channels.length
            : document.querySelectorAll(".bytm-auto-like-channel-row:not(.hidden)").length;
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
            const sanit = (str) => str?.trim().toLowerCase().replace(/\s/g, "");
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
            channels: autoLikeStore.getData().channels
                .map((ch) => ch.id === id ? { ...ch, enabled } : ch),
        });
    }, 100);
    const sortedChannels = autoLikeStore
        .getData().channels
        .sort((a, b) => a.name.localeCompare(b.name));
    for (const { name: chanName, id: chanId, enabled } of sortedChannels) {
        const rowElem = document.createElement("div");
        rowElem.classList.add("bytm-auto-like-channel-row");
        const leftCont = document.createElement("div");
        leftCont.classList.add("bytm-auto-like-channel-row-left-cont");
        const nameLabelEl = document.createElement("label");
        nameLabelEl.ariaLabel = nameLabelEl.title = chanName;
        nameLabelEl.htmlFor = `bytm-auto-like-channel-list-toggle-${chanId}`;
        nameLabelEl.classList.add("bytm-auto-like-channel-name-label");
        const chanHref = (!chanId.startsWith("@") && getDomain() === "ytm")
            ? `https://music.youtube.com/channel/${chanId}`
            : `https://youtube.com/${chanId.startsWith("@") ? chanId : `channel/${chanId}`}`;
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
            onChange: (en) => setChannelEnabled(chanId, en),
        });
        toggleElem.classList.add("bytm-auto-like-channel-toggle");
        toggleElem.title = toggleElem.ariaLabel = t("auto_like_channel_toggle_tooltip", chanName);
        const btnCont = document.createElement("div");
        btnCont.classList.add("bytm-auto-like-channel-row-btn-cont");
        const editBtn = await createCircularBtn({
            resourceName: "icon-edit",
            title: t("edit_entry"),
            async onClick() {
                const newNamePr = (await showPrompt({ type: "prompt", message: t("auto_like_channel_edit_name_prompt"), defaultValue: chanName }))?.trim();
                if (!newNamePr || newNamePr.length === 0)
                    return;
                const newName = newNamePr.length > 0 ? newNamePr : chanName;
                const newIdPr = (await showPrompt({ type: "prompt", message: t("auto_like_channel_edit_id_prompt"), defaultValue: chanId }))?.trim();
                if (!newIdPr || newIdPr.length === 0)
                    return;
                const newId = newIdPr.length > 0 ? getChannelIdFromPrompt(newIdPr) ?? chanId : chanId;
                await autoLikeStore.setData({
                    channels: autoLikeStore.getData().channels
                        .map((ch) => ch.id === chanId ? { ...ch, name: newName, id: newId } : ch),
                });
                emitSiteEvent("autoLikeChannelsUpdated");
            },
        });
        btnCont.appendChild(editBtn);
        const removeBtn = await createCircularBtn({
            resourceName: "icon-delete",
            title: t("remove_entry"),
            onClick() {
                autoLikeStore.setData({
                    channels: autoLikeStore.getData().channels.filter((ch) => ch.id !== chanId),
                });
                rowElem.remove();
                emitSiteEvent("autoLikeChannelsUpdated");
            },
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
//#region footer
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
    await autoLikeExImDialog?.open();
}
// #region delete all prompt
async function deleteAllAutoLikeChannelsPrompt() {
    const confirm = await showPrompt({
        type: "confirm",
        message: t("auto_like_delete_all_confirm"),
    });
    if (!confirm)
        return;
    await autoLikeStore.setData({ channels: [] });
    emitSiteEvent("autoLikeChannelsUpdated");
    const unsub = autoLikeDialog?.on("clear", async () => {
        unsub?.();
        await autoLikeDialog?.open();
    });
    autoLikeDialog?.unmount();
}
//#region add prompt
async function addAutoLikeEntryPrompts() {
    await autoLikeStore.loadData();
    const idPrompt = (await showPrompt({ type: "prompt", message: t("add_auto_like_channel_id_prompt") }))?.trim();
    if (!idPrompt)
        return;
    const id = parseChannelIdFromUrl(idPrompt) ?? (isValidChannelId(idPrompt) ? idPrompt : null);
    if (!id || id.length <= 0)
        return await showPrompt({ type: "alert", message: t("add_auto_like_channel_invalid_id") });
    let overwriteName = false;
    const hasChannelEntry = autoLikeStore.getData().channels.find((ch) => ch.id === id);
    if (hasChannelEntry) {
        if (!await showPrompt({ type: "confirm", message: t("add_auto_like_channel_already_exists_prompt_new_name") }))
            return;
        overwriteName = true;
    }
    const name = (await showPrompt({ type: "prompt", message: t("add_auto_like_channel_name_prompt"), defaultValue: hasChannelEntry?.name }))?.trim();
    if (!name || name.length === 0)
        return;
    await autoLikeStore.setData(overwriteName
        ? {
            channels: autoLikeStore.getData().channels
                .map((ch) => ch.id === id ? { ...ch, name } : ch),
        }
        : {
            channels: [
                ...autoLikeStore.getData().channels,
                { id, name, enabled: true },
            ],
        });
    emitSiteEvent("autoLikeChannelsUpdated");
    const unsub = autoLikeDialog?.on("clear", async () => {
        unsub?.();
        await autoLikeDialog?.open();
    });
    autoLikeDialog?.unmount();
}
function getChannelIdFromPrompt(promptStr) {
    const isId = promptStr.match(/^@?.+$/);
    const isUrl = promptStr.match(/^(?:https?:\/\/)?(?:www\.)?(?:music\.)?youtube\.com\/(?:channel\/|@)([a-zA-Z0-9_-]+)/);
    const id = (isId?.[0] || isUrl?.[1] || "").trim();
    return id.length > 0 ? id : null;
}// TODO:FIXME: race condition: multiple buttons can appear on YT channel pages, with both the @ID format as well as UC... (extraneous)
//#region store
/** DataStore instance for all auto-liked channels */
const autoLikeStore = new CoreUtils.DataStore({
    id: "bytm-auto-like-channels",
    formatVersion: 2,
    defaultData: {
        channels: [],
    },
    engine: new UserUtils.GMStorageEngine(),
    compressionFormat: compressionFormat$1,
    migrations: {
        // 1 -> 2 (v2.1-pre) - add @ prefix to channel IDs if missing
        2: (oldData) => ({
            channels: oldData.channels.map((ch) => ({
                ...ch,
                id: isValidChannelId(ch.id.trim())
                    ? ch.id.trim()
                    : `@${ch.id.trim()}`,
            })),
        }),
    },
});
let autoLikeStoreLoaded = false;
/** Inits the auto-like DataStore instance */
async function initAutoLikeStore() {
    if (autoLikeStoreLoaded)
        return;
    autoLikeStoreLoaded = true;
    return autoLikeStore.loadData();
}
//#region init auto-like
/** Initializes the auto-like feature */
async function initAutoLike() {
    try {
        await initAutoLikeStore();
        //#region ytm
        if (getDomain() === "ytm") {
            let timeout;
            siteEvents.on("songTitleChanged", () => {
                const autoLikeTimeoutMs = (getFeature("autoLikeTimeout", 5)) * 1000;
                timeout && clearTimeout(timeout);
                const ytmTryAutoLike = () => {
                    const artistEls = document.querySelectorAll("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
                    const channelIds = [...artistEls].map(a => a.href.split("/").pop()).filter(a => typeof a === "string");
                    const likeChan = autoLikeStore.getData().channels.find((ch) => channelIds.includes(ch.id));
                    if (!likeChan || !likeChan.enabled)
                        return;
                    if (artistEls.length === 0 || channelIds.length === 0)
                        return error("Couldn't auto-like because the artist element couldn't be found");
                    const { likeBtn, likeState } = getLikeDislikeBtns();
                    if (!likeBtn)
                        return error("Couldn't auto-like because the like button couldn't be found");
                    if (!likeState || likeState === "INDIFFERENT") {
                        likeBtn.click();
                        getFeature("autoLikeShowToast") && showIconToast({
                            message: t(`auto_liked_a_channels_${getCurrentMediaType()}`, likeChan.name),
                            subtitle: t("auto_like_click_to_configure"),
                            icon: "icon-auto_like",
                            onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
                        }).catch(e => error("Error while showing auto-like toast:", e));
                        info(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id}) - permalink: https://${getDomain() === "ytm" ? "music.youtube.com/watch?v=" : "youtu.be/"}${new URL(location.href).searchParams.get("v")}`);
                    }
                    else
                        info("Skipping auto-like, because the like state is currently set to", likeState);
                };
                timeout = setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs);
                siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs));
            });
            const recreateBtn = (headerCont, chanId) => {
                const titleCont = headerCont.querySelector("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, ytmusic-immersive-header-renderer .ytmusic-immersive-header-renderer yt-formatted-string.title");
                if (!titleCont)
                    return;
                const checkBtn = () => setTimeout(() => {
                    if (!document.querySelector(".bytm-auto-like-toggle-btn"))
                        recreateBtn(headerCont, chanId);
                }, 250);
                const chanName = titleCont.querySelector("yt-formatted-string, span.yt-core-attributed-string")?.textContent ?? null;
                log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
                const buttonsCont = headerCont.querySelector(".buttons");
                if (buttonsCont) {
                    const lastBtn = buttonsCont.querySelector("ytmusic-subscribe-button-renderer");
                    const chanName = document.querySelector(".ytmusic-immersive-header-renderer > h1 > yt-formatted-string")?.textContent
                        ?? document.querySelector("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")?.textContent
                        ?? null;
                    lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName).then(checkBtn);
                }
                else {
                    // some channels don't have a subscribe button and instead only have a "share" button for some bullshit reason
                    const shareBtnEl = headerCont.querySelector("ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type");
                    const chanName = headerCont.querySelector("ytmusic-visual-header-renderer .content-container h2 yt-formatted-string")?.textContent ?? null;
                    shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName).then(checkBtn);
                }
            };
            const tryAddBtnYTM = () => {
                if (getFeature("autoLikeChannelToggleBtn") && location.pathname.match(/\/channel\/.+/)) {
                    const chanId = getCurrentChannelId();
                    if (!chanId)
                        return error("Couldn't extract channel ID from URL");
                    document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
                    addSelectorListener("browseResponse", "ytmusic-browse-response #header.ytmusic-browse-response", {
                        listener: (el) => recreateBtn(el, chanId),
                    });
                }
            };
            siteEvents.on("pathChanged", () => tryAddBtnYTM());
            tryAddBtnYTM();
        }
        //#region yt
        // TODO:FIXME: doesnt work with new yt ui
        else if (getDomain() === "yt") {
            addStyleFromResource("css-auto_like");
            let timeout;
            siteEvents.on("watchIdChanged", () => {
                const autoLikeTimeoutMs = (getFeature("autoLikeTimeout", 5)) * 1000;
                timeout && clearTimeout(timeout);
                if (!location.pathname.startsWith("/watch"))
                    return;
                const ytTryAutoLike = () => {
                    addSelectorListener("ytWatchMetadata", "#owner ytd-channel-name yt-formatted-string a", {
                        listener(chanElem) {
                            const chanElemId = chanElem.href.split("/").pop()?.split("/")[0] ?? null;
                            const likeChan = autoLikeStore.getData().channels.find((ch) => ch.id === chanElemId);
                            if (!likeChan || !likeChan.enabled)
                                return;
                            addSelectorListener("ytWatchMetadata", "#actions ytd-menu-renderer like-button-view-model button", {
                                listener(likeBtn) {
                                    if (likeBtn.getAttribute("aria-pressed") !== "true") {
                                        likeBtn.click();
                                        getFeature("autoLikeShowToast") && showIconToast({
                                            message: t("auto_liked_a_channels_video", likeChan.name),
                                            subtitle: t("auto_like_click_to_configure"),
                                            icon: "icon-auto_like",
                                            onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
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
                    if (!chanId)
                        return error("Couldn't extract channel ID from URL");
                    document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
                    const recreateBtn = (headerCont) => {
                        const titleCont = headerCont.querySelector("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, yt-page-header-view-model yt-dynamic-text-view-model");
                        if (!titleCont)
                            return;
                        const checkBtn = () => setTimeout(() => {
                            if (!document.querySelector(".bytm-auto-like-toggle-btn"))
                                recreateBtn(headerCont);
                        }, 350);
                        const chanName = titleCont.querySelector("yt-formatted-string, h1 > .yt-core-attributed-string")?.textContent ?? null;
                        log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
                        const buttonsCont = headerCont.querySelector("#inner-header-container #buttons, yt-flexible-actions-view-model");
                        if (buttonsCont) {
                            addSelectorListener("ytAppHeader", "#channel-header-container #other-buttons, yt-flexible-actions-view-model .yt-flexible-actions-view-model-wiz__action, yt-flexible-actions-view-model .ytFlexibleActionsViewModelAction", {
                                listener: (otherBtns) => addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin", "right-margin"]).then(checkBtn),
                            });
                        }
                        else if (titleCont) {
                            const titleH1OrCont = titleCont.querySelector("h1") ?? titleCont;
                            addAutoLikeToggleBtn(titleH1OrCont, chanId, chanName, titleH1OrCont !== titleCont ? ["left-margin-xl"] : []).then(checkBtn);
                        }
                    };
                    addSelectorListener("ytAppHeader", "#channel-header-container, #page-header, #page-header-container", {
                        listener: recreateBtn,
                    });
                }
            };
            siteEvents.on("pathChanged", () => tryAddBtnYT());
            tryAddBtnYT();
        }
        log("Initialized auto-like channels feature");
    }
    catch (err) {
        error("Error while auto-liking channel:", err);
    }
}
//#region toggle btn
/** Adds a toggle button to enable or disable auto-liking videos from a channel */
async function addAutoLikeToggleBtn(siblingEl, channelId, channelName, extraClasses) {
    const chan = autoLikeStore.getData().channels.find((ch) => ch.id === channelId);
    log(`Adding auto-like toggle button for channel with ID '${channelId}' - current state:`, chan);
    siteEvents.on("autoLikeChannelsUpdated", async () => {
        const buttonEl = document.querySelector(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
        if (!buttonEl)
            return warn("Couldn't find auto-like toggle button for channel ID:", channelId);
        const enabled = autoLikeStore.getData().channels.find((ch) => ch.id === channelId)?.enabled ?? false;
        if (enabled)
            buttonEl.classList.add("toggled");
        else
            buttonEl.classList.remove("toggled");
        const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
        imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${enabled ? "_enabled" : ""}`));
    });
    const buttonEl = await createLongBtn({
        resourceName: `icon-auto_like${chan?.enabled ? "_enabled" : ""}`,
        text: t("auto_like"),
        title: t(`auto_like_button_tooltip${chan?.enabled ? "_enabled" : "_disabled"}`),
        toggle: true,
        toggleInitialState: chan?.enabled ?? false,
        togglePredicate({ shiftKey, ctrlKey }) {
            const shiftOrCtrl = shiftKey || ctrlKey;
            shiftOrCtrl && getAutoLikeDialog().then((dlg) => dlg.open());
            return !shiftOrCtrl;
        },
        async onToggle(isToggled) {
            try {
                await autoLikeStore.loadData();
                buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${isToggled ? "_enabled" : "_disabled"}`);
                const chanId = sanitizeChannelId(buttonEl.dataset.channelId ?? channelId);
                const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
                imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${isToggled ? "_enabled" : ""}`));
                if (autoLikeStore.getData().channels.some((ch) => ch.id === chanId)) {
                    await autoLikeStore.setData({
                        channels: autoLikeStore.getData().channels
                            .map((ch) => ch.id === chanId ? { ...ch, enabled: isToggled } : ch),
                    });
                }
                else {
                    await autoLikeStore.setData({
                        channels: [
                            ...autoLikeStore.getData().channels,
                            { id: chanId, name: channelName ?? "", enabled: isToggled },
                        ],
                    });
                }
                emitSiteEvent("autoLikeChannelsUpdated");
                showIconToast({
                    message: isToggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
                    subtitle: t("auto_like_click_to_configure"),
                    icon: `icon-auto_like${isToggled ? "_enabled" : ""}`,
                    onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
                }).catch(e => error("Error while showing auto-like toast:", e));
                log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${isToggled ? "enabled" : "disabled"}`);
            }
            catch (err) {
                error("Error while toggling auto-like channel:", err);
            }
        }
    });
    buttonEl.classList.add(...["bytm-auto-like-toggle-btn", ...(extraClasses ?? [])]);
    buttonEl.dataset.channelId = channelId;
    siblingEl.insertAdjacentElement("afterend", createRipple(buttonEl));
}/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;
//#region media control bar
let currentSongTitle = "";
/** Adds a lyrics button to the player bar */
async function addPlayerBarLyricsBtn() {
    addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: addActualLyricsBtn });
}
/** Actually adds the lyrics button after the like button renderer has been verified to exist */
async function addActualLyricsBtn(likeContainer) {
    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
    if (!songTitleElem)
        return warn("Couldn't find song title element");
    currentSongTitle = songTitleElem.title;
    const onMutation = async (mutations) => {
        for await (const mut of mutations) {
            const newTitle = mut.target.title;
            if (newTitle !== currentSongTitle && newTitle.length > 0) {
                const lyricsBtn = document.querySelector("#bytm-player-bar-lyrics-btn");
                if (!lyricsBtn)
                    continue;
                lyricsBtn.style.cursor = "wait";
                lyricsBtn.style.pointerEvents = "none";
                setInnerHtml(lyricsBtn, await resourceAsString("icon-spinner"));
                lyricsBtn.querySelector("svg")?.classList.add("bytm-generic-btn-img", "bytm-spinner");
                currentSongTitle = newTitle;
                const url = await getCurrentLyricsUrl(); // can take a second or two
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
    // since YT and YTM don't reload the page on video change, MutationObserver needs to be used to watch for changes in the video title
    const obs = new MutationObserver(onMutation);
    obs.observe(songTitleElem, { attributes: true, attributeFilter: ["title"] });
    const lyricsBtnElem = await createLyricsBtn(undefined);
    lyricsBtnElem.id = "bytm-player-bar-lyrics-btn";
    // run parallel so the element is inserted as soon as possible
    getCurrentLyricsUrl().then(url => {
        url && addGeniusUrlToLyricsBtn(lyricsBtnElem, url);
    });
    log("Inserted lyrics button into media controls bar");
    const thumbToggleElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
    if (thumbToggleElem)
        thumbToggleElem.insertAdjacentElement("afterend", lyricsBtnElem);
    else
        likeContainer.insertAdjacentElement("afterend", lyricsBtnElem);
}
//#region lyrics utils
const parensRegex = /\(.+\)/gm;
const squareParensRegex = /\[.+\]/gm;
/** Removes everything in parentheses from the passed song name */
function sanitizeSong(songName) {
    if (typeof songName !== "string")
        return songName;
    // trim right after the song name:
    const sanitized = songName
        .replace(parensRegex, "")
        .replace(squareParensRegex, "");
    return sanitizeUnicode(sanitized);
}
/**
 * Removes the secondary artists (if they exist) from the passed artists string.
 * Intelligently splits at commas and bullet (•) characters, and removes everything after the first ampersand (&) or feat.
 */
function sanitizeArtists(artists) {
    artists = artists.split(/\s*\u2022\s*/gmiu)[0]; // split at &bull; (•) character
    if (artists.match(/&/))
        artists = artists.split(/\s*&\s*/gm)[0];
    if (artists.match(/,/))
        artists = artists.split(/,\s*/gm)[0];
    if (artists.match(/(f(ea)?t\.?|Remix|Edit|Flip|Cover|Night\s?Core|Bass\s?Boost|pro?d\.?\W)/i))
        artists = artists
            .replace(parensRegex, "")
            .replace(squareParensRegex, "");
    return sanitizeUnicode(artists);
}
const singleQuotesRegex = /[‘’‛‹›]/gm;
const doubleQuotesRegex = /[“”„‟«»]/gm;
const commaRegex = /[,，、]/gm;
const periodRegex = /[.。．]/gm;
function sanitizeUnicode(str) {
    return str
        // replace unicode symbols:
        .replace(singleQuotesRegex, "'")
        .replace(doubleQuotesRegex, "\"")
        .replace(commaRegex, ",")
        .replace(periodRegex, ".")
        .trim();
}
/** Returns the lyrics URL from genius for the currently selected song */
async function getCurrentLyricsUrl() {
    try {
        // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
        const isVideo = getCurrentMediaType() === "video";
        const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
        const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string :first-child");
        if (!songTitleElem || !songMetaElem)
            return undefined;
        const songNameRaw = songTitleElem.title;
        let songName = songNameRaw;
        let artistName = songMetaElem.textContent;
        if (isVideo) {
            // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
            if (songName.includes("-")) {
                const split = splitVideoTitle(songName);
                songName = split.song;
                artistName = split.artist;
            }
        }
        if (!artistName)
            return undefined;
        const url = await fetchLyricsUrlTop(sanitizeArtists(artistName), sanitizeSong(songName));
        if (url) {
            emitInterface("bytm:lyricsLoaded", {
                type: "current",
                artists: artistName,
                title: songName,
                url,
            });
        }
        return url;
    }
    catch (err) {
        getFeature("errorOnLyricsNotFound") && error("Couldn't resolve lyrics URL:", err);
        return undefined;
    }
}
/** Fetches the top lyrics URL result from geniURL - **the passed parameters need to be sanitized first!** */
async function fetchLyricsUrlTop(artist, song) {
    try {
        const path = (await fetchLyricsUrls(artist, song))?.[0]?.path;
        return path ? resolveLyricsUrl(path) : undefined;
    }
    catch (err) {
        getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
        return undefined;
    }
}
/**
 * Fetches the 5 best matching lyrics URLs from geniURL using a combo exact-ish and fuzzy search
 * **the passed parameters need to be sanitized first!**
 */
async function fetchLyricsUrls(artist, song) {
    try {
        const cacheEntry = getLyricsCacheEntry(artist, song);
        if (cacheEntry) {
            info(`Found lyrics path in cache: ${cacheEntry.path}`);
            return [cacheEntry];
        }
        const fetchUrl = constructUrl(`${getFeature("geniUrlBase")}/search`, {
            disableFuzzy: null, // value-less param
            source: `${scriptInfo$1.name} v${scriptInfo$1.version}${mode$1 === "development" ? "-dev" : ""}`,
            q: `${artist} ${song}`,
        });
        log("Requesting lyrics from geniURL:", String(fetchUrl));
        const token = getFeature("geniUrlToken");
        const fetchRes = await CoreUtils.fetchAdvanced(fetchUrl, {
            ...(token ? {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            } : {}),
        });
        if (fetchRes.status === 429) {
            const waitSeconds = Number(fetchRes.headers.get("Retry-After") ?? geniUrlRatelimitTimeframe);
            await showPrompt({ type: "alert", message: tp("lyrics_rate_limited", waitSeconds, waitSeconds) });
            return undefined;
        }
        else if (fetchRes.status < 200 || fetchRes.status >= 300) {
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
        const allResultsSan = allResults
            .filter(({ meta, path }) => (meta.title || meta.fullTitle) && meta.artists && path)
            .map(({ meta, path }) => ({
            meta: {
                ...meta,
                title: sanitizeSong(String(meta.title ?? meta.fullTitle)),
                artists: sanitizeArtists(String(meta.artists)),
            },
            path,
        }));
        const topRes = allResultsSan[0];
        topRes && addLyricsCacheEntryBest(topRes.meta.artists, topRes.meta.title, topRes.path);
        return allResultsSan.map(r => ({
            artist: r.meta.primaryArtist.name,
            song: r.meta.title,
            path: r.path,
        }));
    }
    catch (err) {
        getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
        return undefined;
    }
}
/** Adds the genius URL to the passed lyrics button element if it was previously instantiated with an undefined URL */
async function addGeniusUrlToLyricsBtn(btnElem, geniusUrl) {
    btnElem.href = geniusUrl;
    btnElem.ariaLabel = btnElem.title = t("open_lyrics");
    btnElem.style.visibility = "visible";
    btnElem.style.display = "inline-flex";
}
/** Creates the base lyrics button element */
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
    onInteraction(linkElem, (e) => {
        const url = linkElem.href ?? geniusUrl;
        if (!url || e instanceof MouseEvent)
            return;
        if (!e.ctrlKey && !e.altKey)
            openInTab(url);
    }, {
        preventDefault: false,
        stopPropagation: false,
    });
    setInnerHtml(linkElem, await resourceAsString("icon-lyrics"));
    linkElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
    onInteraction(linkElem, async (e) => {
        const isModKey = e.ctrlKey || e.altKey, isInvState = ["error", "loading"].includes(linkElem.dataset.state ?? "");
        if ((isModKey && !isInvState) || (!(isModKey || e.shiftKey) && isInvState)) {
            e.preventDefault();
            e.stopImmediatePropagation();
            // const search = await showPrompt({ type: "prompt", message: t("open_lyrics_search_prompt") });
            const search = await showPrompt({
                type: "prompt",
                message: t("open_lyrics_search_prompt"),
                defaultValue: currentSongTitle,
            });
            if (search && search.length > 0)
                openInTab(`https://genius.com/search?q=${encodeURIComponent(search)}`);
        }
    }, {
        preventDefault: false,
        stopPropagation: false,
    });
    return linkElem;
}
/** Splits a video title that contains a hyphen into an artist and song */
function splitVideoTitle(title) {
    const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
    return { artist, song: rest.join("-") };
}let featHelpDialog = null;
let curFeatKey = null;
/** Creates or modifies the help dialog for a specific feature and returns it */
async function getFeatHelpDialog({ featKey, }) {
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
            renderBody: renderBody$2,
        });
        // make config menu inert while help dialog is open
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
    // insert sentence terminator if not present, to improve flow with screenreaders
    let featText = t(`feature_desc.${curFeatKey}`);
    const isLtr = localeObj?.textDir !== "rtl";
    if (localeObj && !(localeObj.sentenceTerminators.every((termChar) => featText[isLtr ? "endsWith" : "startsWith"](termChar))))
        featText = `${isLtr ? featText : ""}${localeObj.sentenceTerminatorNeutral}${!isLtr ? featText : ""}`;
    const featDescElem = document.createElement("h3");
    featDescElem.role = "subheading";
    featDescElem.tabIndex = 0;
    featDescElem.textContent = featDescElem.title = featText;
    featDescElem.id = "bytm-feat-help-dialog-desc";
    const helpTextElem = document.createElement("div");
    helpTextElem.id = "bytm-feat-help-dialog-text";
    helpTextElem.tabIndex = 0;
    // @ts-expect-error
    const helpText = featInfo[curFeatKey]?.helpText?.();
    helpTextElem.textContent = helpTextElem.title = helpText ?? t(`feature_helptext.${curFeatKey}`);
    contElem.appendChild(featDescElem);
    contElem.appendChild(helpTextElem);
    return contElem;
}let otherHotkeyInputActive = false;
const reservedKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " "];
/** Creates a hotkey input element */
function createHotkeyInput({ initialValue, onChange, createTitle }) {
    const initialHotkey = initialValue;
    let currentHotkey;
    if (!createTitle)
        createTitle = (value) => value;
    const wrapperElem = document.createElement("div");
    wrapperElem.classList.add("bytm-hotkey-wrapper");
    const infoElem = document.createElement("span");
    infoElem.classList.add("bytm-hotkey-info");
    const inputElem = document.createElement("button");
    inputElem.role = "button";
    inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    if (typeof initialValue?.code === "string")
        getHkInputContent(initialValue).then(content => {
            inputElem.innerText = content;
        });
    else
        inputElem.innerText = t("hotkey_input_click_to_change");
    inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));
    const resetElem = document.createElement("span");
    resetElem.classList.add("bytm-hotkey-reset", "bytm-link", "bytm-hidden");
    resetElem.role = "button";
    resetElem.tabIndex = 0;
    resetElem.textContent = `(${t("reset")})`;
    resetElem.ariaLabel = resetElem.title = t("hotkey_input_click_to_reset_tooltip");
    const deactivate = (force = false) => {
        if (!otherHotkeyInputActive && !force)
            return;
        emitSiteEvent("hotkeyInputActive", false);
        otherHotkeyInputActive = false;
        const curHk = currentHotkey ?? initialValue;
        if (typeof curHk?.code === "string") {
            getHkInputContent(curHk).then(content => {
                inputElem.innerText = content;
            });
        }
        else
            inputElem.innerText = t("hotkey_input_click_to_change");
        inputElem.dataset.state = infoElem.dataset.state = "inactive";
        inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(curHk));
        setInnerHtml(infoElem, curHk ? getHotkeyModifiersHtml(curHk) : "");
    };
    const activate = () => {
        if (otherHotkeyInputActive)
            return;
        emitSiteEvent("hotkeyInputActive", true);
        otherHotkeyInputActive = true;
        inputElem.innerText = "< ... >";
        inputElem.dataset.state = infoElem.dataset.state = "active";
        inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");
    };
    // bandaid fix for the legacy config menu
    const remountAC = new AbortController();
    siteEvents.once("recreateCfgMenu", () => remountAC.abort());
    window.addEventListener("bytm:dialogClosed:cfg-menu", () => inputElem.dataset.state === "active" && deactivate(true), { signal: remountAC.signal });
    onInteraction(resetElem, async (e) => {
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
    if (initialValue)
        setInnerHtml(infoElem, getHotkeyModifiersHtml(initialValue));
    let lastKeyDown;
    document.addEventListener("keypress", async (e) => {
        if (inputElem.dataset.state === "inactive")
            return;
        if (lastKeyDown?.code === e.code && lastKeyDown?.shift === e.shiftKey && lastKeyDown?.ctrl === e.ctrlKey && lastKeyDown?.alt === e.altKey)
            return;
        e.preventDefault();
        e.stopImmediatePropagation();
        const hotkey = {
            code: e.code,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
        };
        inputElem.innerText = await getHkInputContent(hotkey);
        inputElem.dataset.state = infoElem.dataset.state = "inactive";
        setInnerHtml(infoElem, getHotkeyModifiersHtml(hotkey));
        inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");
        onChange(hotkey);
        currentHotkey = hotkey;
    }, { signal: remountAC.signal });
    document.addEventListener("keydown", async (e) => {
        if (reservedKeys.filter(k => k !== "Tab").includes(e.code))
            return;
        if (inputElem.dataset.state !== "active")
            return;
        if (e.code === "Tab" || e.code === " " || e.code === "Space" || e.code === "Escape" || e.code === "Enter") {
            deactivate();
            return;
        }
        if (["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight"].includes(e.code))
            return;
        e.preventDefault();
        e.stopImmediatePropagation();
        const hotkey = {
            code: e.code,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
        };
        const keyChanged = initialHotkey?.code !== hotkey.code || initialHotkey?.shift !== hotkey.shift || initialHotkey?.ctrl !== hotkey.ctrl || initialHotkey?.alt !== hotkey.alt;
        lastKeyDown = hotkey;
        onChange(hotkey);
        currentHotkey = hotkey;
        if (keyChanged) {
            deactivate();
            resetElem.classList.remove("bytm-hidden");
        }
        else
            resetElem.classList.add("bytm-hidden");
        inputElem.innerText = await getHkInputContent(hotkey);
        inputElem.dataset.state = infoElem.dataset.state = "inactive";
        setInnerHtml(infoElem, getHotkeyModifiersHtml(hotkey));
    }, { signal: remountAC.signal });
    const unsub = siteEvents.on("cfgMenuClosed", deactivate);
    remountAC.signal.addEventListener("abort", () => unsub());
    inputElem.addEventListener("click", () => {
        if (inputElem.dataset.state === "inactive")
            activate();
        else
            deactivate();
    }, { signal: remountAC.signal });
    inputElem.addEventListener("keydown", (e) => {
        if (reservedKeys.includes(e.code))
            return;
        if (inputElem.dataset.state === "inactive")
            activate();
    }, { signal: remountAC.signal });
    wrapperElem.appendChild(resetElem);
    wrapperElem.appendChild(infoElem);
    wrapperElem.appendChild(inputElem);
    return wrapperElem;
}
/** Returns HTML for the hotkey modifier keys info element */
function getHotkeyModifiersHtml(hotkey) {
    const modifiers = [];
    hotkey.ctrl && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_modifier_ctrl")}</kbd>`);
    hotkey.shift && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_modifier_shift")}</kbd>`);
    hotkey.alt && modifiers.push(`<kbd class="bytm-kbd">${getOS() === "mac" ? t("hotkey_modifier_mac_option") : t("hotkey_modifier_alt")}</kbd>`);
    return `\
<div class="bytm-hotkey-input-modifier-container" style="display: flex; align-items: center;">
  <span>
    ${modifiers.reduce((a, c) => `${a ? a + " " : ""}${c}`, "")}
  </span>
  <span style="padding: 0px 5px; height: 20px;">
    ${modifiers.length > 0 ? "+" : ""}
  </span>
</div>`;
}
async function getHkInputContent(hotkey) {
    const trimCode = ({ code }) => {
        if (/^Key[A-Z].+$/.test(code))
            return code.slice(3);
        if (/^Digit[0-9].+$/.test(code))
            return code.slice(5);
        return code.trim();
    };
    const keyCodeTrKey = `key_code.${hotkey.code}`;
    const keyStr = await hasKey(keyCodeTrKey)
        ? t(keyCodeTrKey)
        : trimCode(hotkey);
    return keyStr;
}
/** Converts a hotkey object to a string, with optional whitespace padding between symbols */
function hotkeyToString(hotkey, padding = false) {
    if (!hotkey)
        return t("hotkey_input_none_selected");
    let str = "";
    const p = padding ? " " : "";
    if (hotkey.ctrl)
        str += `${t("hotkey_modifier_ctrl")}${p}+${p}`;
    if (hotkey.shift)
        str += `${t("hotkey_modifier_shift")}${p}+${p}`;
    if (hotkey.alt)
        str += `${getOS() === "mac" ? t("hotkey_modifier_mac_option") : t("hotkey_modifier_alt")}${p}+${p}`;
    str += hotkey.code;
    return str;
}//#region >> create menu
/** Whether the config menu has finished mounting and can be opened with {@linkcode openCfgMenu()} */
let isCfgMenuDoneMounting = false;
/** Whether the config menu is currently mounting. Subsequent calls to {@linkcode mountCfgMenu()} will wait until the menu has finished mounting. */
let isCfgMenuMounting = false;
let isCfgMenuOpen = false;
/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
/** Locale at the point of initializing the config menu */
let initLocale;
/** Stringified config at the point of initializing the config menu */
let initConfig$1;
/** Timeout id for the "copied" text in the hidden value copy button */
let hiddenCopiedTxtTimeout;
/**
 * Adds an element to open the BetterYTM menu
 * TODO: replace with new menu using BytmDialog - see https://github.com/Sv443/BetterYTM/issues/23
 */
async function mountCfgMenu() {
    try {
        if (isCfgMenuMounting || isCfgMenuDoneMounting)
            return;
        isCfgMenuMounting = true;
        const startTs = Date.now();
        BytmDialog.initDialogs();
        initLocale = getFeature("locale");
        initConfig$1 = getFeatures();
        const initLangReloadText = t("lang_changed_prompt_reload");
        //#region > bg & container
        const backgroundElem = document.createElement("div");
        backgroundElem.id = "bytm-cfg-menu-bg";
        backgroundElem.classList.add("bytm-menu-bg");
        backgroundElem.ariaLabel = backgroundElem.title = t("close_menu_tooltip");
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
        backgroundElem.addEventListener("click", (e) => {
            if (isCfgMenuOpen && e.target?.id === "bytm-cfg-menu-bg")
                closeCfgMenu(e);
        });
        document.body.addEventListener("keydown", (e) => {
            if (isCfgMenuOpen && e.key === "Escape" && (BytmDialog.getCurrentDialogId() === "cfg-menu" || BytmDialog.getCurrentDialogId() === null))
                closeCfgMenu(e);
        });
        const menuContainer = document.createElement("div");
        menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
        menuContainer.classList.add("bytm-menu");
        menuContainer.id = "bytm-cfg-menu";
        //#region > title bar
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
        if (logoSrc)
            titleLogoElem.src = logoSrc;
        onInteraction(titleLogoElem, (e) => {
            e.preventDefault();
            e.stopPropagation();
            const clicks = Number(titleLogoElem.dataset?.clicks ?? "0");
            if (clicks === 2) {
                titleLogoElem.classList.add("somersault");
                titleLogoElem.dataset.clicks = "0";
            }
            else {
                titleLogoElem.classList.add("bounce");
                titleLogoElem.dataset.clicks = String(clicks + 1);
            }
            titleLogoElem.addEventListener("animationend", () => {
                titleLogoElem.classList.remove("bounce", "somersault");
            }, { once: true });
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
            discord: "Discord",
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
        const links = [
            ["github", await getResourceUrl("img-github"), packageJson.homepage, t("open_github", scriptInfo$1.name), "github"],
            ["greasyfork", await getResourceUrl("img-greasyfork"), packageJson.hosts.greasyfork, t("open_greasyfork", scriptInfo$1.name), "greasyfork"],
            ["openuserjs", await getResourceUrl("img-openuserjs"), packageJson.hosts.openuserjs, t("open_openuserjs", scriptInfo$1.name), "openuserjs"],
        ];
        const hostLink = links.find(([name]) => name === host$1);
        const otherLinks = links.filter(([name]) => name !== host$1);
        const reorderedLinks = hostLink ? [hostLink, ...otherLinks] : links;
        for (const [, ...args] of reorderedLinks)
            addLink(...args);
        addLink(await getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.role = "button";
        closeElem.tabIndex = 0;
        closeElem.src = await getResourceUrl("img-close");
        closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
        onInteraction(closeElem, (e) => closeCfgMenu(e));
        titleCont.appendChild(titleElem);
        titleCont.appendChild(linksCont);
        titleLogoHeaderCont.appendChild(titleCont);
        headerElem.appendChild(titleLogoHeaderCont);
        headerElem.appendChild(closeElem);
        //#region > footer
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
        /** For copying plain when shift-clicking the copy button or when compression is not supported */
        const exportDataSpecial = () => JSON.stringify({ formatVersion: cfgFormatVersion, data: getFeatures() });
        const exImDlg = new ExImDialog({
            id: "config-export-import",
            width: 800,
            height: 600,
            // try to compress the data if possible
            exportData: async () => await compressionSupported()
                ? await CoreUtils.compress(JSON.stringify({ formatVersion: cfgFormatVersion, data: getFeatures() }), compressionFormat$1, "string")
                : exportDataSpecial(),
            exportDataSpecial,
            async onImport(data) {
                try {
                    if (!data || data.trim().length === 0)
                        return;
                    const parsed = await tryToDecompressAndParse(data.trim());
                    log("Trying to import configuration:", parsed);
                    if (!parsed || typeof parsed !== "object")
                        return await showPrompt({ type: "alert", message: t("import_error.invalid") });
                    if (typeof parsed.formatVersion !== "number")
                        return await showPrompt({ type: "alert", message: t("import_error.no_format_version") });
                    if (typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0)
                        return await showPrompt({ type: "alert", message: t("import_error.no_data") });
                    if (parsed.formatVersion < cfgFormatVersion) {
                        let newData = structuredClone(parsed.data);
                        const sortedMigrations = Object.entries(cfgMigrations)
                            .sort(([a], [b]) => Number(a) - Number(b));
                        let curFmtVer = Number(parsed.formatVersion);
                        for (const [fmtVer, migrationFunc] of sortedMigrations) {
                            const ver = Number(fmtVer);
                            if (curFmtVer < cfgFormatVersion && curFmtVer < ver) {
                                try {
                                    const migRes = structuredClone(migrationFunc(newData));
                                    newData = await migRes;
                                    curFmtVer = ver;
                                }
                                catch (err) {
                                    error(`Error while running migration function for format version ${fmtVer}:`, err);
                                }
                            }
                        }
                        parsed.formatVersion = curFmtVer;
                        parsed.data = newData;
                    }
                    else if (parsed.formatVersion !== cfgFormatVersion)
                        return await showPrompt({ type: "alert", message: t("import_error.wrong_format_version", cfgFormatVersion, parsed.formatVersion) });
                    await setFeatures({ ...getFeatures(), ...parsed.data });
                    if (await showPrompt({ type: "confirm", message: t("import_success_confirm_reload") })) {
                        log("Reloading tab after importing configuration");
                        return reloadTab();
                    }
                    exImDlg.unmount();
                    emitSiteEvent("rebuildCfgMenu", parsed.data);
                }
                catch (err) {
                    warn("Couldn't import configuration:", err);
                    await showPrompt({ type: "alert", message: t("import_error.invalid") });
                }
            },
            title: () => t("bytm_config_export_import_title"),
            descImport: () => t("bytm_config_import_desc"),
            descExport: () => t("bytm_config_export_desc"),
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
        //#region > main body
        const bodyCont = document.createElement("div");
        bodyCont.id = "bytm-cfg-menu-main-body";
        //#region load cfg & resolve categories
        const featureCfg = getFeatures();
        const featureCfgWithCategories = Object.entries(featInfo)
            .reduce((acc, [key, { category }]) => {
            if (!acc[category])
                acc[category] = {};
            acc[category][key] = featureCfg[key];
            return acc;
        }, {});
        //#region > sidenav
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
                headerElem.textContent = t(`feature_category.${headerId}`, { scriptName: scriptInfo$1.name });
                headerElem.title = headerElem.ariaLabel = t(`cfg_menu_feature_category${isExtraInfoHeader ? "_info" : ""}_header_tooltip`, t(`feature_category.${headerId}`, { scriptName: scriptInfo$1.name }));
                onInteraction(headerElem, (e) => {
                    const selectedHeader = sidenavCont.querySelector(".bytm-menu-sidenav-header.selected");
                    if (selectedHeader) {
                        selectedHeader.classList.remove("selected");
                        selectedHeader.ariaChecked = "false";
                    }
                    headerElem.classList.add("selected");
                    headerElem.ariaChecked = "true";
                    const catElem = featuresCont.querySelector(`#bytm-ftconf-category-${headerId}`);
                    if (catElem) {
                        document.querySelectorAll("#bytm-menu-opts .bytm-ftconf-category").forEach((el) => {
                            el.classList.add("hidden");
                            el.setAttribute("aria-hidden", "true");
                            el.setAttribute("inert", "true");
                        });
                        catElem.classList.remove("hidden");
                        catElem.removeAttribute("aria-hidden");
                        catElem.removeAttribute("inert");
                        if (e.type.startsWith("key"))
                            setTimeout(() => catElem.focus(), 10);
                    }
                    checkToggleScrollIndicator();
                    emitSiteEvent("configHeaderSelected", headerId);
                    document.querySelector("#bytm-menu-top-anchor")?.scrollIntoView({
                        behavior: "instant",
                    });
                });
                return headerElem;
            }
            catch (err) {
                error(`Error while creating sidenav header for category '${headerId}':`, err);
            }
        };
        // top section:
        const sidenavTopSectionCont = document.createElement("section");
        sidenavTopSectionCont.classList.add("bytm-menu-sidenav-section", "bytm-ignored-input");
        sidenavTopSectionCont.id = "bytm-cfg-menu-sidenav-top-section";
        sidenavTopSectionCont.role = "radiogroup";
        sidenavTopSectionCont.tabIndex = 0;
        sidenavTopSectionCont.ariaLabel = t("cfg_menu_sidenav_top_section_label", { scriptName: scriptInfo$1.name });
        // settings category headers:
        let firstCatHeader = true;
        for (const category of Object.keys(featureCfgWithCategories)) {
            const catGroupIdx = groupedCategories.findIndex((group) => group.includes(category));
            const catIdx = catGroupIdx >= 0
                ? groupedCategories[catGroupIdx].findIndex((cat) => cat === category)
                : undefined;
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
        // bottom section:
        const sidenavBtmSectionCont = document.createElement("section");
        sidenavBtmSectionCont.classList.add("bytm-menu-sidenav-section", "bytm-ignored-input");
        sidenavBtmSectionCont.id = "bytm-cfg-menu-sidenav-bottom-section";
        sidenavBtmSectionCont.role = "radiogroup";
        sidenavBtmSectionCont.tabIndex = 0;
        sidenavBtmSectionCont.ariaLabel = t("cfg_menu_sidenav_bottom_section_label", { scriptName: scriptInfo$1.name });
        // extra info headers:
        const extraInfoCategoryIDs = ["about", "changelog"];
        for (const id of extraInfoCategoryIDs) {
            const headerElem = createSidenavHeader(id, firstCatHeader, true);
            headerElem && sidenavBtmSectionCont.appendChild(headerElem);
        }
        sidenavCont.appendChild(sidenavBtmSectionCont);
        siteEvents.once("cfgMenuMounted", () => {
            document.querySelectorAll("#bytm-ftconf-category-about a, #bytm-ftconf-category-changelog a").forEach((linkEl) => {
                linkEl.target = "_blank";
            });
            document.querySelector("#bytm-ftconf-category-changelog details")
                ?.setAttribute("open", "true");
        });
        //#region > feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        const topAnchor = document.createElement("div");
        topAnchor.id = "bytm-menu-top-anchor";
        featuresCont.appendChild(topAnchor);
        const onCfgChange = async (key, initialVal, newVal) => {
            const ftInfo = featInfo?.[key];
            const valueHidden = ftInfo && "valueHidden" in ftInfo && ftInfo.valueHidden === true;
            if (["number", "slider"].includes(ftInfo.type)) {
                // clamp newVal to min/max if those exist for this feature:
                if (("min" in ftInfo || "max" in ftInfo))
                    newVal = CoreUtils.clamp(Number(newVal), "min" in ftInfo ? Number(ftInfo.min) : -Infinity, "max" in ftInfo ? Number(ftInfo.max) : Infinity);
                // round newVal to step if the feature has that property:
                if ("step" in ftInfo)
                    newVal = Math.round(Number(newVal) / Number(ftInfo.step)) * Number(ftInfo.step);
            }
            try {
                const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
                info(`Feature config changed at key '${key}'${valueHidden ? "" : `, from value '${fmt(initialVal)}' to '${fmt(newVal)}'`}`);
                const featConf = structuredClone(getFeatures());
                // @ts-expect-error
                featConf[key] = newVal;
                const changedKeys = initConfig$1 ? Object.keys(featConf).filter((k) => typeof featConf[k] !== "object"
                    && featConf[k] !== initConfig$1[k]) : [];
                const requiresReload = 
                // @ts-expect-error
                changedKeys.some((k) => featInfo[k]?.reloadRequired !== false);
                await setFeatures(featConf);
                // @ts-expect-error
                featInfo[key]?.change?.(newVal, initialVal);
                if (requiresReload) {
                    reloadFooterEl.classList.remove("hidden");
                    reloadFooterEl.removeAttribute("aria-hidden");
                }
                else {
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
                    const getReloadAllBtn = async (dialog) => {
                        const reloadAllBtn = document.createElement("button");
                        reloadAllBtn.id = "bytm-prompt-dialog-reload-all";
                        reloadAllBtn.classList.add("bytm-prompt-dialog-button");
                        reloadAllBtn.textContent = `${t("reload_all_tabs_now")}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_all_tabs_now")}` : ""}`;
                        reloadAllBtn.ariaLabel = reloadAllBtn.title = `${t("reload_all_tabs_tooltip", scriptInfo$1.name)}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_all_tabs_tooltip", scriptInfo$1.name)}` : ""}`;
                        reloadAllBtn.tabIndex = 0;
                        reloadAllBtn.addEventListener("click", () => {
                            dialog.emitResolve(dialog.type === "confirm" ? true : (document.querySelector("#bytm-prompt-dialog-input"))?.value?.trim() ?? null);
                            dialog.close();
                            reloadAllTabs();
                        }, { once: true });
                        return reloadAllBtn;
                    };
                    if (await showPrompt({
                        type: "confirm",
                        message: confirmText,
                        confirmBtnText: () => `${t("reload_now")}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_now")}` : ""}`,
                        confirmBtnTooltip: () => `${t("reload_tooltip")}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_tooltip")}` : ""}`,
                        denyBtnText: (type) => `${t(type === "alert" ? "prompt_close" : "prompt_cancel")}${isLocalesTextDifferent ? ` / ${tl(initLocale, type === "alert" ? "prompt_close" : "prompt_cancel")}` : ""}`,
                        denyBtnTooltip: (type) => `${t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")}${isLocalesTextDifferent ? ` / ${tl(initLocale, type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")}` : ""}`,
                        extraButtons: [getReloadAllBtn],
                        extraButtonsPosition: "between",
                        dialogOptions: {
                            width: 650,
                            height: 800,
                        },
                    })) {
                        closeCfgMenu();
                        log("Reloading tab after changing language");
                        await reloadTab();
                    }
                }
                else if (getLocale() !== featConf.locale)
                    setLocale(featConf.locale);
            }
            catch (err) {
                error("Error while reacting to config change:", err);
            }
            finally {
                // @ts-expect-error
                emitSiteEvent("configOptionChanged", ...(valueHidden
                    ? [key, undefined, undefined]
                    : [key, initialVal, newVal]));
            }
        };
        /** Call whenever the feature config is changed */
        const confChanged = CoreUtils.debounce(onCfgChange, 333);
        /**
         * Formats the value `v` based on the provided `key` using the `featInfo` object.
         * If a custom `renderValue` function is defined for the `key`, it will be used to format the value.
         * If no custom `renderValue` function is defined, the value will be converted to a string and trimmed.
         * If the value is an object, it will be converted to a JSON string representation.
         * If an error occurs during formatting (like when passing objects with circular references), the original value will be returned as a string (trimmed).
         */
        const fmtVal = (v, key) => {
            try {
                // @ts-expect-error
                const renderValue = typeof featInfo?.[key]?.renderValue === "function" ? featInfo[key].renderValue : undefined;
                const retVal = (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
                return renderValue ? renderValue(retVal) : retVal;
            }
            catch {
                // absolute last resort fallback because stringify throws on circular refs
                return String(v).trim();
            }
        };
        //#region category conts & feat ctrls
        const createCategoryContainer = (category) => {
            const categoryCont = document.createElement("div");
            categoryCont.id = `bytm-ftconf-category-${category}`;
            categoryCont.classList.add("bytm-ftconf-category");
            categoryCont.tabIndex = 0;
            categoryCont.setAttribute("aria-describedby", `bytm-ftconf-category-${category}-header`);
            categoryCont.setAttribute("aria-label", t(`feature_category.${category}`, { scriptName: scriptInfo$1.name }));
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
            }
            else {
                categoryCont.classList.add("hidden");
                categoryCont.setAttribute("inert", "true");
                categoryCont.setAttribute("aria-hidden", "true");
            }
            for (const featKey in featObj) {
                const ftInfo = featInfo[featKey];
                if (!ftInfo || ("hidden" in ftInfo && ftInfo.hidden === true))
                    continue;
                if (ftInfo.advanced && !featureCfg.advancedMode)
                    continue;
                // handle groups:
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
                        scriptName: scriptInfo$1.name,
                    });
                    groupHeader.tabIndex = 0;
                    groupHeader.role = "heading";
                    groupHeader.ariaLevel = "3";
                    groupCont.appendChild(groupHeader);
                }
                const { type, default: ftDefault } = ftInfo;
                const step = "step" in ftInfo ? ftInfo.step : undefined;
                const val = featureCfg[featKey];
                const initialVal = val ?? ftDefault;
                const ftConfElem = document.createElement("div");
                ftConfElem.classList.add("bytm-ftitem");
                {
                    const featLeftSideElem = document.createElement("div");
                    featLeftSideElem.classList.add("bytm-ftitem-leftside");
                    // dev tooltip
                    if (mode$1 === "development") {
                        const defVal = fmtVal(ftDefault, featKey);
                        const extraTxts = [
                            `default: ${defVal.length === 0 ? "(undefined)" : defVal}`,
                        ];
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
                    // @ts-expect-error shhhh its fine
                    const hasHelpTextFunc = typeof featInfo[featKey]?.helpText === "function";
                    // @ts-expect-error
                    const helpTextVal = hasHelpTextFunc && featInfo[featKey].helpText();
                    if (await hasKey(`feature_helptext.${featKey}`) || (helpTextVal && await hasKey(helpTextVal))) {
                        const helpElemImgHtml = await resourceAsString("icon-help");
                        if (helpElemImgHtml) {
                            helpElem = document.createElement("div");
                            helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
                            helpElem.ariaLabel = helpElem.title = t("feature_help_button_tooltip", t(`feature_desc.${featKey}`));
                            helpElem.role = "button";
                            helpElem.tabIndex = 0;
                            setInnerHtml(helpElem, helpElemImgHtml);
                            onInteraction(helpElem, async (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                await (await getFeatHelpDialog({ featKey: featKey })).open();
                            });
                        }
                        else {
                            error(`Couldn't create help button SVG element for feature '${featKey}'`);
                        }
                    }
                    adornmentElem && featLeftSideElem.appendChild(adornmentElem);
                    featLeftSideElem.appendChild(textElem);
                    helpElem && featLeftSideElem.appendChild(helpElem);
                    ftConfElem.appendChild(featLeftSideElem);
                } // end left side element
                //#region input elements
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
                    // to prevent dev mode title from propagating:
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
                        const copyHiddenInteraction = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            copyToClipboard(getFeatures()[featKey] ?? "");
                            advCopyHintElem.style.display = "inline";
                            if (typeof hiddenCopiedTxtTimeout === "undefined") {
                                hiddenCopiedTxtTimeout = setTimeout(() => {
                                    advCopyHintElem.style.display = "none";
                                    hiddenCopiedTxtTimeout = undefined;
                                }, 3000);
                            }
                        };
                        onInteraction(advCopyHiddenBtn, (e) => copyHiddenInteraction(e));
                        advCopyHiddenCont = document.createElement("span");
                        advCopyHiddenCont.appendChild(advCopyHintElem);
                        advCopyHiddenCont.appendChild(advCopyHiddenBtn);
                    }
                    advCopyHiddenCont && ctrlElem.appendChild(advCopyHiddenCont);
                    if (inputTag) {
                        // standard input element:
                        const isNumericInput = ["number", "slider"].includes(type);
                        const inputElem = document.createElement(inputTag);
                        inputElem.classList.add("bytm-ftconf-input");
                        inputElem.id = inputElemId;
                        inputElem.ariaLabel = t(`feature_desc.${featKey}`);
                        if (inputType)
                            inputElem.type = inputType;
                        if ("min" in ftInfo && typeof ftInfo.min !== "undefined")
                            inputElem.min = String(ftInfo.min);
                        if ("max" in ftInfo && typeof ftInfo.max !== "undefined")
                            inputElem.max = String(ftInfo.max);
                        if (typeof initialVal !== "undefined")
                            inputElem.value = String(initialVal);
                        if (type === "text" && ftInfo.valueHidden) {
                            inputElem.type = "password";
                            inputElem.autocomplete = "off";
                        }
                        if (isNumericInput && step)
                            inputElem.step = String(step);
                        if (type === "toggle" && typeof initialVal !== "undefined")
                            inputElem.checked = Boolean(initialVal);
                        const getUnitTxt = (val) => ("unit" in ftInfo && typeof ftInfo.unit === "string"
                            ? ftInfo.unit
                            : ("unit" in ftInfo && typeof ftInfo.unit === "function"
                                ? ftInfo.unit(Number(val))
                                : ""));
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
                        }
                        else if (type === "select") {
                            const ftOpts = typeof ftInfo.options === "function"
                                ? ftInfo.options()
                                : ftInfo.options;
                            for (const { value, label } of ftOpts) {
                                const optionElem = document.createElement("option");
                                optionElem.value = String(value);
                                optionElem.textContent = `${label}${mode$1 === "development" ? ` [${value}]` : ""}`;
                                if (value === initialVal)
                                    optionElem.selected = true;
                                inputElem.appendChild(optionElem);
                            }
                        }
                        if (type === "text") {
                            let lastValue = inputElem.value && inputElem.value.length > 0 ? inputElem.value : ftInfo.default;
                            const textInputUpdate = () => {
                                let v = String(inputElem.value).trim();
                                if (type === "text" && ftInfo.normalize)
                                    v = inputElem.value = ftInfo.normalize(String(v));
                                if (v === lastValue)
                                    return;
                                lastValue = v;
                                if (v === "")
                                    v = ftInfo.default;
                                if (typeof initialVal !== "undefined")
                                    confChanged(featKey, initialVal, v);
                            };
                            siteEvents.once("cfgMenuClosed", () => {
                                textInputUpdate();
                            });
                            inputElem.addEventListener("blur", () => textInputUpdate());
                            inputElem.addEventListener("keydown", (e) => e.key === "Tab" && textInputUpdate());
                        }
                        else {
                            inputElem.addEventListener("input", () => {
                                let v = String(inputElem.value).trim();
                                if (["number", "slider"].includes(type) || v.match(/^-?\d+$/))
                                    v = Number(v);
                                if (typeof initialVal !== "undefined")
                                    confChanged(featKey, initialVal, (type !== "toggle" ? v : inputElem.checked));
                            });
                        }
                        if (labelElem) {
                            labelElem.id = `bytm-ftconf-${featKey}-label`;
                            labelElem.htmlFor = inputElemId;
                            ctrlElem.appendChild(labelElem);
                        }
                        inputElem.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
                        inputElem.setAttribute("aria-labelledby", labelElem?.id ?? `bytm-ftitem-text-${featKey}`);
                        // after input, clamp the value between min and max and round it to step:
                        const hasMinOrMax = ("min" in ftInfo && typeof ftInfo.min === "number" || "max" in ftInfo && typeof ftInfo.max === "number");
                        const hasStep = "step" in ftInfo && typeof ftInfo.step === "number";
                        if (isNumericInput) {
                            inputElem.addEventListener("blur", () => {
                                let v = Number(inputElem.value);
                                if (hasMinOrMax && !isNaN(v)) {
                                    if ("min" in ftInfo && typeof ftInfo.min === "number" && v < ftInfo.min)
                                        v = ftInfo.min;
                                    if ("max" in ftInfo && typeof ftInfo.max === "number" && v > ftInfo.max)
                                        v = ftInfo.max;
                                }
                                if (hasStep && !isNaN(v))
                                    v = Math.round(v / Number(ftInfo.step)) * Number(ftInfo.step);
                                if (!isNaN(v))
                                    inputElem.value = String(v);
                            });
                        }
                        ctrlElem.appendChild(inputElem);
                        // add unit element for number inputs if ftInfo has a unit property:
                        if (type === "number" && "unit" in ftInfo && ["function", "string"].includes(typeof ftInfo.unit)) {
                            const afterInputUnitEl = document.createElement("span");
                            afterInputUnitEl.classList.add("bytm-ftconf-unit");
                            afterInputUnitEl.textContent = getUnitTxt(inputElem.value);
                            ctrlElem.appendChild(afterInputUnitEl);
                        }
                    }
                    else {
                        // custom input element:
                        let customInputEl;
                        switch (type) {
                            case "hotkey":
                                customInputEl = createHotkeyInput({
                                    initialValue: typeof initialVal === "object" ? initialVal : undefined,
                                    onChange: (hotkey) => confChanged(featKey, initialVal, hotkey),
                                    createTitle: (value) => t("hotkey_input_click_to_change_tooltip", t(`feature_desc.${featKey}`), value),
                                });
                                break;
                            case "toggle":
                                customInputEl = await createToggleInput({
                                    initialValue: Boolean(initialVal),
                                    onChange: (checked) => confChanged(featKey, initialVal, checked),
                                    id: `ftconf-${featKey}`,
                                    labelPos: "left",
                                });
                                break;
                            case "button":
                                customInputEl = document.createElement("button");
                                customInputEl.classList.add("bytm-btn");
                                customInputEl.tabIndex = 0;
                                customInputEl.textContent = await hasKey(`feature_btn.${featKey}`) ? t(`feature_btn.${featKey}`) : t("trigger_btn_action");
                                customInputEl.ariaLabel = customInputEl.title = t(`feature_desc.${featKey}`);
                                onInteraction(customInputEl, async () => {
                                    if (customInputEl.disabled)
                                        return;
                                    const startTs = Date.now();
                                    const res = ftInfo.click();
                                    customInputEl.disabled = true;
                                    customInputEl.classList.add("bytm-busy");
                                    customInputEl.textContent = await hasKey(`feature_btn.${featKey}_running`) ? t(`feature_btn.${featKey}_running`) : t("trigger_btn_action_running");
                                    if (res instanceof Promise)
                                        await res;
                                    const finalize = async () => {
                                        customInputEl.disabled = false;
                                        customInputEl.classList.remove("bytm-busy");
                                        customInputEl.textContent = await hasKey(`feature_btn.${featKey}`) ? t(`feature_btn.${featKey}`) : t("trigger_btn_action");
                                    };
                                    // artificial timeout ftw
                                    const rTime = CoreUtils.randRange(200, 400);
                                    if (Date.now() - startTs < rTime)
                                        setTimeout(finalize, rTime - (Date.now() - startTs));
                                    else
                                        finalize();
                                });
                                break;
                        }
                        if (customInputEl && !customInputEl.hasAttribute("aria-label"))
                            customInputEl.ariaLabel = t(`feature_desc.${featKey}`);
                        customInputEl?.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
                        if (customInputEl?.getAttribute("aria-labelledby") === null) {
                            // try to find a label element to link to for a11y, else default to the text element
                            const lbl = customInputEl?.querySelector("label");
                            customInputEl?.setAttribute("aria-labelledby", lbl && lbl.id.length > 0 ? lbl.id : `bytm-ftitem-text-${featKey}`);
                        }
                        ctrlElem.appendChild(customInputEl);
                    }
                    ftConfElem.appendChild(ctrlElem);
                } // end right side element
                if (groupCont)
                    groupCont.appendChild(ftConfElem); // groupCont gets appended to categoryCont at the top of the last category features iteration with the same group name
                else
                    categoryCont.appendChild(ftConfElem);
            }
            if (currentGroup && groupCont) {
                categoryCont.appendChild(groupCont);
                groupCont = undefined;
            }
            featuresCont.appendChild(categoryCont);
            firstCategory = false;
        } // end for(const category in featureCfgWithCategories)
        //#region extra info categories
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
                        dateStyle: "medium",
                    }),
                    buildBrowseLink: `https://github.com/${repo}/tree/${buildNumber$1}`,
                    authorName: packageJson.author.name,
                    authorLink: packageJson.author.url,
                    githubLink: scriptInfo$1.namespace,
                    greasyforkLink: packageJson.hosts.greasyfork,
                    openuserjsLink: packageJson.hosts.openuserjs,
                    fundingLink: packageJson.funding.url,
                    discordLink: "https://dc.sv443.net/",
                    currentYear: new Date().getFullYear(),
                    licenseName: packageJson.license,
                    licenseUrl: `https://github.com/${repo}/blob/${branch$1}/LICENSE.txt`,
                    contributorsLink: packageJson.specialThanksUrl,
                });
                setInnerHtml(aboutTextCont, await parseMarkdown(t("about_bytm_content_markdown", aboutTrParams)));
                return [aboutTextCont];
            },
            changelog: async () => {
                const mdContElem = document.createElement("div");
                mdContElem.id = "bytm-cfg-menu-changelog-md-cont";
                mdContElem.classList.add("bytm-markdown-container");
                setInnerHtml(mdContElem, await getChangelogHtmlWithDetails());
                siteEvents.once("cfgMenuMounted", () => {
                    const detailsElems = mdContElem.querySelectorAll("details");
                    detailsElems.forEach((el) => {
                        el.addEventListener("toggle", () => checkToggleScrollIndicator());
                    });
                });
                return [mdContElem];
            },
        };
        for (const category of extraInfoCategoryIDs) {
            const categoryCont = createCategoryContainer(category);
            categoryCont.classList.add("bytm-ftconf-extra-info-category", "hidden");
            categoryCont.setAttribute("inert", "true");
            categoryCont.setAttribute("aria-hidden", "true");
            const infoElems = await extraInfoCategoryElements[category]();
            infoElems.forEach((el) => categoryCont.appendChild(el));
            featuresCont.appendChild(categoryCont);
        }
        //#region reset inputs on external change
        siteEvents.on("rebuildCfgMenu", (newConfig) => {
            for (const ftKey in featInfo) {
                const ftElem = document.querySelector(`#bytm-ftconf-${ftKey}-input`);
                const labelElem = document.querySelector(`#bytm-ftconf-${ftKey}-label`);
                if (!ftElem)
                    continue;
                const ftInfo = featInfo[ftKey];
                const value = newConfig[ftKey];
                if (ftInfo.type === "toggle")
                    ftElem.checked = Boolean(value);
                else
                    ftElem.value = String(value);
                if (!labelElem)
                    continue;
                const unitTxt = ("unit" in ftInfo && typeof ftInfo.unit === "string"
                    ? ftInfo.unit
                    : ("unit" in ftInfo && typeof ftInfo.unit === "function"
                        ? ftInfo.unit(Number(ftElem.value))
                        : ""));
                if (ftInfo.type === "slider")
                    labelElem.textContent = `${fmtVal(Number(value), ftKey)}${unitTxt}`;
            }
            info("Rebuilt config menu");
        });
        //#region scroll indicator
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
                behavior: "smooth",
            });
        });
        featuresCont.addEventListener("scroll", (evt) => {
            const scrollPos = evt.target?.scrollTop ?? 0;
            const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
            if (!scrollIndicator)
                return;
            if (scrollIndicatorEnabled && scrollPos > scrollIndicatorOffsetThreshold && !scrollIndicator.classList.contains("bytm-hidden")) {
                scrollIndicator.classList.add("bytm-hidden");
            }
            else if (scrollIndicatorEnabled && scrollPos <= scrollIndicatorOffsetThreshold && scrollIndicator.classList.contains("bytm-hidden")) {
                scrollIndicator.classList.remove("bytm-hidden");
            }
        });
        const bottomAnchor = document.createElement("div");
        bottomAnchor.id = "bytm-menu-bottom-anchor";
        featuresCont.appendChild(bottomAnchor);
        bodyCont.appendChild(featuresCont);
        //#region finalize
        menuContainer.appendChild(headerElem);
        menuContainer.appendChild(bodyCont);
        const modeItems = [];
        mode$1 === "development" && modeItems.push(["dev", "dev_mode", "img-logo_dev"]);
        getFeature("advancedMode") && modeItems.push(["advanced", "advanced_mode", "icon-advanced_mode_large"]);
        if (modeItems.length > 0) {
            const modeDisplayCont = document.createElement("div");
            modeDisplayCont.id = "bytm-menu-mode-display-cont";
            for (const [id, trKey, resourceKey] of modeItems) {
                const isSvg = resourceKey.startsWith("icon-");
                const modeElTooltip = t(`active_mode_tooltip_${trKey}`, { scriptHandler: GM_info.scriptHandler ?? "(your userscript manager extension)" });
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
                    }, { once: true, capture: true });
                };
                modeDispWrapperEl.addEventListener("mouseleave", leaveDisp);
                const leaveCont = () => {
                    if (transitionEnded)
                        modeDispWrapperEl.classList.remove("expand");
                    else
                        modeDispWrapperEl.addEventListener("transitionend", () => {
                            modeDispWrapperEl.classList.remove("expand");
                        }, { once: true, capture: true });
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
                }
                else {
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
        // ensure stuff is reset if menu was opened before being added
        isCfgMenuOpen = false;
        document.body.classList.remove("bytm-disable-scroll");
        document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
        log(`Mounted config menu element in ${Date.now() - startTs}ms`);
        isCfgMenuMounting = false;
        isCfgMenuDoneMounting = true;
        forceEmitSiteEvent("cfgMenuMounted");
        // ensure menu container is inert when BytmDialog instances are stacked on top:
        window.addEventListener("bytm:dialogOpened", (evt) => {
            if (!isCfgMenuOpen)
                return;
            const dlg = evt?.detail;
            if (dlg instanceof BytmDialog) {
                menuContainer.setAttribute("aria-hidden", "true");
                menuContainer.setAttribute("inert", "true");
            }
        });
        window.addEventListener("bytm:dialogClosed", () => {
            if (!isCfgMenuOpen)
                return;
            // restore menu container once no BytmDialogs remain stacked on top
            if (!openDialogs.some(id => id !== "cfg-menu")) {
                menuContainer.removeAttribute("aria-hidden");
                menuContainer.removeAttribute("inert");
            }
        });
        // remount if siteEvent recreateCfgMenu emitted:
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
                        }, { once: true });
                        openCfgMenu();
                        bgElemNew.classList.add("bytm-remounted");
                    }, 1);
                }
            }, { once: true });
            bgElem.classList.add("bytm-remounting");
        });
    }
    catch (err) {
        error("Error while creating and mounting config menu:", err);
        closeCfgMenu();
    }
}
// #region open
/** Opens the config menu if it is closed */
async function openCfgMenu() {
    try {
        if (isCfgMenuOpen)
            return;
        if (!isCfgMenuDoneMounting) {
            if (isCfgMenuMounting)
                return void siteEvents.once("cfgMenuMounted", () => openCfgMenu());
            else
                await mountCfgMenu();
        }
        isCfgMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-cfg-menu-bg");
        setCurrentDialogId("cfg-menu");
        openDialogs.unshift("cfg-menu");
        // since this menu doesn't have a BytmDialog instance, it's undefined here
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
            kbdElem.addEventListener("selectstart", (e) => e.preventDefault());
        }
    }
    catch (err) {
        error("Error while opening config menu:", err);
    }
}
// #region close
/** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeCfgMenu(evt, enableScroll = true) {
    if (!isCfgMenuOpen)
        return;
    isCfgMenuOpen = false;
    evt?.bubbles && evt.stopPropagation();
    if (enableScroll && !openDialogs.some(id => id !== "cfg-menu")) {
        document.body.classList.remove("bytm-disable-scroll");
        document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
    }
    const menuBg = document.querySelector("#bytm-cfg-menu-bg");
    clearTimeout(hiddenCopiedTxtTimeout);
    const cfgIdx = openDialogs.indexOf("cfg-menu");
    if (cfgIdx > -1)
        openDialogs.splice(cfgIdx, 1);
    setCurrentDialogId(openDialogs?.[0] ?? null);
    // since this menu doesn't have a BytmDialog instance, it's undefined here
    emitInterface("bytm:dialogClosed", undefined);
    emitInterface("bytm:dialogClosed:cfg-menu", undefined);
    if (!menuBg)
        return warn("Couldn't close config menu because background element couldn't be found. The config menu is considered closed but might still be open. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
    menuBg.querySelectorAll(".bytm-ftconf-adv-copy-hint")?.forEach((el) => el.style.display = "none");
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
}
// #region chk scroll indicator
/** Checks if the features container is scrollable and toggles the scroll indicator accordingly */
function checkToggleScrollIndicator() {
    const featuresCont = document.querySelector("#bytm-menu-opts");
    const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
    // disable scroll indicator if container doesn't scroll
    if (featuresCont && scrollIndicator) {
        const verticalScroll = UserUtils.isScrollable(featuresCont).vertical;
        /** If true, the indicator's threshold is under the available scrollable space and so it should be disabled */
        const underThreshold = featuresCont.scrollHeight - featuresCont.clientHeight <= scrollIndicatorOffsetThreshold;
        if (!underThreshold && verticalScroll && !scrollIndicatorEnabled) {
            scrollIndicatorEnabled = true;
            scrollIndicator.classList.remove("bytm-hidden");
        }
        if ((!verticalScroll && scrollIndicatorEnabled) || underThreshold) {
            scrollIndicatorEnabled = false;
            scrollIndicator.classList.add("bytm-hidden");
        }
    }
}//#region cfg menu btns
let logoExchanged = false, improveLogoCalled = false, bytmLogoUrl;
/** Adds a watermark beneath the logo */
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
        UserUtils.preloadImages([bytmLogoUrl]);
        const watermarkOpenMenu = (e) => {
            e.stopImmediatePropagation();
            if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
                openCfgMenu();
            if (!logoExchanged && (e.shiftKey || e.ctrlKey))
                exchangeLogo();
        };
        // TODO:FIXME: space and enter dont work fsr
        onInteraction(watermarkEl, (e) => watermarkOpenMenu(e), { preventDefault: true, stopPropagation: true, capture: true });
        addSelectorListener("navBar", "ytmusic-logo a", {
            listener(logoElem) {
                logoElem.appendChild(watermarkEl);
                log("Added watermark element");
            },
        });
    })();
}
/** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
function improveLogo() {
    return new Promise(async (resolve) => {
        try {
            if (improveLogoCalled)
                return;
            improveLogoCalled = true;
            const res = await CoreUtils.fetchAdvanced("https://music.youtube.com/img/on_platform_logo_dark.svg");
            const svg = await res.text();
            addSelectorListener("navBar", "ytmusic-logo > a", {
                listener: (logoElem) => {
                    logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
                    setInnerHtml(logoElem, svg);
                    logoElem.querySelectorAll("svg > g > path").forEach((el) => el.classList.add("bytm-mod-logo-remove"));
                    log("Swapped logo to inline SVG");
                    resolve();
                },
            });
        }
        catch (err) {
            error("Couldn't improve logo due to an error:", err);
        }
    });
}
/** Exchanges the default YTM logo into BetterYTM's logo with a sick ash animation */
function exchangeLogo() {
    if (logoExchanged)
        return;
    addSelectorListener("navBar", ".bytm-mod-logo", {
        listener: async (logoElem) => {
            if (logoElem.classList.contains("bytm-logo-exchanged") || !bytmLogoUrl)
                return;
            logoExchanged = true;
            logoElem.classList.add("bytm-logo-exchanged");
            const newLogo = document.createElement("img");
            newLogo.classList.add("bytm-mod-logo-img");
            newLogo.src = bytmLogoUrl;
            logoElem.insertBefore(newLogo, logoElem.querySelector("svg"));
            bytmLogoUrl && document.head.querySelectorAll("link[rel=\"icon\"]").forEach((e, i) => {
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
            }, 1000);
        },
    });
}
//#region cfg menu options
/** Called whenever the avatar popover menu exists on YTM to add a BYTM config menu button to the user menu popover */
async function addConfigMenuOptionYTM(container) {
    const cfgOptElem = document.createElement("div");
    cfgOptElem.classList.add("bytm-cfg-menu-option");
    const cfgOptItemElem = document.createElement("div");
    cfgOptItemElem.classList.add("bytm-cfg-menu-option-item");
    cfgOptItemElem.role = "button";
    cfgOptItemElem.tabIndex = 0;
    cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo$1.name);
    onInteraction(cfgOptItemElem, async (e) => {
        const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button button");
        settingsBtnElem?.click();
        if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
            openCfgMenu();
        if (!logoExchanged && (e.shiftKey || e.ctrlKey))
            exchangeLogo();
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
/** Called whenever the titlebar (masthead) exists on YT to add a BYTM config menu button */
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
    if (firstChild)
        container.insertBefore(cfgOptWrapperElem, firstChild);
    else
        return error("Couldn't add config menu option to YT titlebar - couldn't find container element");
}
//#region anchor improvements
/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
async function addAnchorImprovements() {
    try {
        await addStyleFromResource("css-anchor_improvements");
    }
    catch (err) {
        error("Couldn't add anchor improvements CSS due to an error:", err);
    }
    //#region carousel shelves
    try {
        const preventDefault = (e) => e.preventDefault();
        /** Adds anchor improvements to &lt;ytmusic-responsive-list-item-renderer&gt; */
        const addListItemAnchors = (items) => {
            for (const item of items) {
                if (item.classList.contains("bytm-anchor-improved"))
                    continue;
                item.classList.add("bytm-anchor-improved");
                const thumbnailElem = item.querySelector(".left-items");
                const titleElem = item.querySelector(".title-column .title a");
                if (!thumbnailElem || !titleElem)
                    continue;
                const anchorElem = document.createElement("a");
                anchorElem.classList.add("bytm-anchor", "bytm-carousel-shelf-anchor");
                anchorElem.href = titleElem?.href ?? "#";
                anchorElem.target = "_self";
                anchorElem.role = "button";
                anchorElem.addEventListener("click", preventDefault);
                UserUtils.addParent(thumbnailElem, anchorElem);
            }
        };
        // home page
        addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
        // related tab in /watch
        addSelectorListener("body", "ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
        // playlists
        addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
        // generic shelves
        addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
    }
    catch (err) {
        error("Couldn't improve carousel shelf anchors due to an error:", err);
    }
    //#region sidebar
    try {
        const addSidebarAnchors = (sidebarCont) => {
            const items = sidebarCont.parentNode.querySelectorAll("ytmusic-guide-entry-renderer tp-yt-paper-item");
            improveSidebarAnchors(items);
            return items.length;
        };
        addSelectorListener("sideBar", "#contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
            listener: (sidebarCont) => {
                const itemsAmt = addSidebarAnchors(sidebarCont);
                log(`Added anchors around ${itemsAmt} sidebar ${CoreUtils.autoPlural("item", itemsAmt)}`);
            },
        });
        addSelectorListener("body", "ytmusic-nav-bar", {
            listener(navBar) {
                let miniSidebarCont = document.querySelector("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");
                const mut = new MutationObserver(() => setTimeout(() => {
                    if (navBar.hasAttribute("guide-collapsed") && !navBar.classList.contains("bytm-mini-sidebar-anchors-added")) {
                        miniSidebarCont = document.querySelector("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");
                        if (!miniSidebarCont)
                            return error("Couldn't find mini sidebar element while adding anchors");
                        improveMiniSidebarAnchors();
                    }
                }, 50));
                const improveMiniSidebarAnchors = () => {
                    const itemsAmt = addSidebarAnchors(miniSidebarCont);
                    navBar.classList.add("bytm-mini-sidebar-anchors-added");
                    log(`Added anchors around ${itemsAmt} mini sidebar ${CoreUtils.autoPlural("item", itemsAmt)}`);
                    mut.disconnect();
                };
                if (miniSidebarCont)
                    improveMiniSidebarAnchors();
                mut.observe(navBar, {
                    attributes: true,
                });
            },
        });
    }
    catch (err) {
        error("Couldn't add anchors to sidebar items due to an error:", err);
    }
    //#region current song list
    try {
        const checkCurrentList = () => {
            addSelectorListener("sidePanel", "ytmusic-player-queue #contents, ytmusic-player-queue #automix-contents", {
                all: true,
                listener(songLists) {
                    songLists.forEach((songListEl) => {
                        const items = songListEl.querySelectorAll("ytmusic-player-queue-item");
                        if (!items.length)
                            return;
                        const itemsAmt = improveSongListClickArea(items);
                        itemsAmt > 0 && log(`Improved clickable area of ${itemsAmt} current song list ${CoreUtils.autoPlural("item", itemsAmt)}`);
                    });
                },
            });
        };
        siteEvents.on("queueChanged", () => checkCurrentList());
        siteEvents.on("autoplayQueueChanged", () => checkCurrentList());
        const genericSongListListener = (songLists) => {
            songLists.forEach((songListEl) => {
                const items = songListEl.querySelectorAll("ytmusic-responsive-list-item-renderer, .card-content-container");
                if (!items.length)
                    return;
                const itemsAmt = improveSongListClickArea(items);
                itemsAmt > 0 && log(`Improved clickable area of ${itemsAmt} song list ${CoreUtils.autoPlural("item", itemsAmt)}`);
            });
        };
        const pathChangedUnsub = siteEvents.on("pathChanged", (path) => {
            if (path.includes("/search")) {
                pathChangedUnsub();
                addSelectorListener("searchPage", `\
ytmusic-shelf-renderer #contents,
ytmusic-card-shelf-renderer .card-container`, {
                    continuous: true,
                    all: true,
                    debounce: 200,
                    listener: genericSongListListener,
                });
            }
        });
        addSelectorListener("browseResponse", `\
ytmusic-playlist-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents
ytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents`, {
            continuous: true,
            all: true,
            debounce: 200,
            listener: genericSongListListener,
        });
    }
    catch (err) {
        error("Couldn't add anchors to song list items due to an error:", err);
    }
}
const sidebarPaths = [
    "/",
    "/explore",
    "/library",
];
/**
 * Adds anchors to the sidebar items so they can be opened in a new tab
 * @param sidebarItem
 */
function improveSidebarAnchors(sidebarItems) {
    sidebarItems.forEach((item, i) => {
        const anchorElem = document.createElement("a");
        anchorElem.classList.add("bytm-anchor", "bytm-no-select");
        anchorElem.role = "button";
        anchorElem.target = "_self";
        anchorElem.href = sidebarPaths[i] ?? "#";
        anchorElem.ariaLabel = anchorElem.title = t("middle_click_open_tab");
        anchorElem.addEventListener("click", (e) => {
            e.preventDefault();
        });
        UserUtils.addParent(item, anchorElem);
    });
}
//#region song list click area
function improveSongListClickArea(items) {
    let itemsAmt = 0;
    items.forEach((item) => {
        if (item.classList.contains("bytm-click-area-improved"))
            return;
        item.classList.add("bytm-click-area-improved");
        item.addEventListener("click", (e) => {
            const tgt = e.target;
            if (!tgt)
                return;
            const conditions = [
                (el) => el.tagName.toLowerCase() === "yt-formatted-string",
                (el) => el.classList.contains("yt-formatted-string"),
                (el) => el.tagName.toLowerCase() === "ytmusic-player-queue-item",
                (el) => el.classList.contains("ytmusic-player-queue-item"),
                (el) => el.tagName.toLowerCase() === "ytmusic-responsive-list-item-renderer",
                (el) => el.classList.contains("ytmusic-responsive-list-item-renderer"),
                (el) => el.classList.contains("ytmusic-card-shelf-renderer"),
            ];
            const antiConditions = [
                (el) => el.tagName.toLowerCase() === "a",
                (el) => Boolean(el.getAttribute("href")?.length),
                (el) => el.classList.contains("bytm-anchor"),
                (el) => el.classList.contains("multi-select-overlay"),
            ];
            if (conditions.some((cnd) => cnd(tgt)) && antiConditions.every((acnd) => !acnd(tgt)))
                item.querySelector("ytmusic-play-button-renderer")?.click();
        });
        itemsAmt++;
    });
    return itemsAmt;
}
//#region share track param
// TODO:FIXME: stopped working on YT
/** Removes the ?si tracking parameter from share URLs */
async function initRemShareTrackParam() {
    const removeSiParam = (inputElem) => {
        try {
            if (getFeature("removeShareTrackingParamSites") !== getDomain() && getFeature("removeShareTrackingParamSites") !== "all")
                return;
            if (!inputElem.value.match(/(&|\?)si=/i))
                return;
            const url = new URL(inputElem.value);
            url.searchParams.delete("si");
            inputElem.value = String(url);
            log(`Removed tracking parameter from share link -> ${url}`);
        }
        catch (err) {
            warn("Couldn't remove tracking parameter from share link due to error:", err);
        }
    };
    const [sharePanelSel, inputSel] = (() => {
        switch (getDomain()) {
            case "ytm": return ["tp-yt-paper-dialog ytmusic-unified-share-panel-renderer", "input#share-url"];
            case "yt": return ["yt-unified-share-panel-renderer", "input#share-url"];
        }
    })();
    addSelectorListener("body", sharePanelSel, {
        listener: (sharePanelEl) => {
            const obs = new MutationObserver(() => {
                const inputElem = sharePanelEl.querySelector(inputSel);
                inputElem && removeSiParam(inputElem);
            });
            obs.observe(sharePanelEl, {
                childList: true,
                subtree: true,
                characterData: true,
                attributeFilter: ["aria-hidden", "aria-checked", "checked"],
            });
        },
    });
}
//#region fix spacing
/** Applies global CSS to fix various spacings */
async function fixSpacing() {
    if (!await addStyleFromResource("css-fix_spacing"))
        error("Couldn't fix spacing");
}
//#region ab.queue btns
async function initAboveQueueBtns() {
    setTimeout(async () => {
        const { scrollToActiveSongBtn, clearQueueBtn } = getFeatures();
        if (!await addStyleFromResource("css-above_queue_btns"))
            error("Couldn't add CSS for above queue buttons");
        else if (getFeature("aboveQueueBtnsSticky"))
            addStyleFromResource("css-above_queue_btns_sticky");
        const contBtns = [
            {
                condition: scrollToActiveSongBtn,
                id: "scroll-to-active",
                resourceName: "icon-skip_to",
                titleKey: "scroll_to_playing",
                interaction: async (evt) => scrollToCurrentSongInQueue(evt),
            },
            {
                condition: clearQueueBtn,
                id: "clear-queue",
                resourceName: "icon-clear_list",
                titleKey: "clear_list",
                async interaction(evt) {
                    try {
                        if (evt.shiftKey || await showPrompt({ type: "confirm", message: t("clear_list_confirm") })) {
                            const url = new URL(location.href);
                            url.searchParams.delete("list");
                            url.searchParams.set("time_continue", String(await getVideoTime(0)));
                            location.assign(url);
                        }
                    }
                    catch (err) {
                        error("Couldn't clear queue due to an error:", err);
                    }
                },
            },
        ];
        if (!contBtns.some(b => Boolean(b.condition)))
            return;
        addSelectorListener("sidePanel", "ytmusic-tab-renderer ytmusic-queue-header-renderer #buttons", {
            async listener(rightBtnsEl) {
                try {
                    const aboveQueueBtnCont = document.createElement("div");
                    aboveQueueBtnCont.id = "bytm-above-queue-btn-cont";
                    UserUtils.addParent(rightBtnsEl, aboveQueueBtnCont);
                    const headerEl = rightBtnsEl.closest("ytmusic-queue-header-renderer");
                    if (!headerEl)
                        return error("Couldn't find queue header element while adding above queue buttons");
                    siteEvents.on("fullscreenToggled", (isFullscreen) => {
                        headerEl.classList[isFullscreen ? "add" : "remove"]("hidden");
                    });
                    const wrapperElem = document.createElement("div");
                    wrapperElem.id = "bytm-above-queue-btn-wrapper";
                    for (const item of contBtns) {
                        if (Boolean(item.condition) === false)
                            continue;
                        const btnElem = await createCircularBtn({
                            resourceName: item.resourceName,
                            onClick: item.interaction,
                            title: t(item.titleKey),
                        });
                        btnElem.id = `bytm-${item.id}-btn`;
                        btnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-above-queue-btn");
                        wrapperElem.appendChild(btnElem);
                    }
                    rightBtnsEl.insertAdjacentElement("beforebegin", wrapperElem);
                }
                catch (err) {
                    error("Couldn't add above queue buttons due to an error:", err);
                }
            },
        });
    }, 1);
}
/** Album artwork cache */
const artCacheStore = new CoreUtils.DataStore({
    id: "bytm-artwork-cache",
    migrateIds: ["album-art-cache"],
    formatVersion: 1,
    engine: new UserUtils.GMStorageEngine(),
    compressionFormat: compressionFormat$1,
    memoryCache: false,
    defaultData: {
        entries: [],
    },
});
async function deleteExpiredAlbumArtCacheEntries() {
    const ttl = 1000 * 60 * 60 * 24 * getFeature("thumbnailOverlayAlbumArtCacheTTL");
    const cacheData = await artCacheStore.loadData();
    const expiredEntries = cacheData.entries.filter((e) => Date.now() - e.created > ttl);
    if (expiredEntries.length > 0) {
        log(`Deleting ${expiredEntries.length} expired album art cache entries`);
        artCacheStore.setData({
            entries: cacheData.entries.filter((en) => !expiredEntries.some((ex) => ex.videoId === en.videoId)),
        });
    }
}
var ThumbOvlState;
(function (ThumbOvlState) {
    ThumbOvlState[ThumbOvlState["Off"] = 0] = "Off";
    ThumbOvlState[ThumbOvlState["YT"] = 1] = "YT";
    ThumbOvlState[ThumbOvlState["AM"] = 2] = "AM";
})(ThumbOvlState || (ThumbOvlState = {}));
/** Changed when the toggle button is pressed - used to change the state of "showOverlay" */
let overlayState = ThumbOvlState.Off;
async function initThumbnailOverlay() {
    const toggleBtnShown = getFeature("thumbnailOverlayToggleBtnShown");
    if (getFeature("thumbnailOverlayBehavior") === "never" && !toggleBtnShown)
        return;
    deleteExpiredAlbumArtCacheEntries();
    // so the script init doesn't keep waiting until a /watch page is loaded
    waitVideoElementReady().then(() => {
        const playerSelector = "ytmusic-player#player";
        const playerEl = document.querySelector(playerSelector);
        if (!playerEl)
            return error("Couldn't find video player element while adding thumbnail overlay");
        /** Checks and updates the overlay and toggle button states based on the current song type (yt video or ytm song) */
        const updateOverlayVisibility = async (isManual = false) => {
            if (!UserUtils.isDomLoaded())
                return;
            const isVideo = getCurrentMediaType() === "video";
            const defaultBehavior = getFeature("thumbnailOverlayBehavior");
            const prefState = getFeature("thumbnailOverlayPreferredSource") === "am" ? ThumbOvlState.AM : ThumbOvlState.YT;
            if (!isManual && overlayState === ThumbOvlState.Off)
                overlayState = (defaultBehavior === "videosOnly" && isVideo) || (defaultBehavior === "songsOnly" && !isVideo) || (defaultBehavior === "always")
                    ? prefState
                    : ThumbOvlState.Off;
            else if (!isManual && overlayState !== prefState)
                overlayState = prefState;
            if (getCurrentMediaType() === "video" && overlayState === ThumbOvlState.AM)
                overlayState = ThumbOvlState.YT;
            const overlayElem = document.querySelector("#bytm-thumbnail-overlay");
            const thumbElem = document.querySelector("#bytm-thumbnail-overlay-img");
            const indicatorElem = document.querySelector("#bytm-thumbnail-overlay-indicator");
            const ovlShown = overlayState !== ThumbOvlState.Off;
            if (overlayElem)
                overlayElem.style.display = ovlShown ? "block" : "none";
            if (thumbElem)
                thumbElem.ariaHidden = String(!ovlShown);
            if (indicatorElem) {
                indicatorElem.style.display = ovlShown ? "block" : "none";
                indicatorElem.ariaHidden = String(!ovlShown);
            }
            if (getFeature("thumbnailOverlayToggleBtnShown")) {
                addSelectorListener("playerBarMiddleButtons", "#bytm-thumbnail-overlay-toggle", {
                    async listener(toggleBtnElem) {
                        const toggleBtnIconElem = toggleBtnElem.querySelector("svg");
                        if (toggleBtnIconElem) {
                            let key = `icon-image${overlayState === ThumbOvlState.YT
                                ? "_filled_yt"
                                : overlayState === ThumbOvlState.AM
                                    ? "_filled_am"
                                    : ""}`;
                            if (getCurrentMediaType() === "video" && overlayState !== ThumbOvlState.Off)
                                key = "icon-image_filled";
                            setInnerHtml(toggleBtnElem, await resourceAsString(key));
                            toggleBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
                        }
                        if (toggleBtnElem)
                            toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay.toggle_btn_tooltip-${ThumbOvlState[overlayState]}`);
                    },
                });
            }
        };
        // TODO:FIXME: sometimes when switching videos, the cache gets bypassed and the API is called anyways
        // example: https://music.youtube.com/watch?v=Q6W6Lm3MgGA&list=PLed0zlh3c4e1jxK6QgkFnFhXgnKJswo3A
        /** Retrieves the best thumbnail URL for the given video ID and applies it to the DOM */
        const applyThumbUrl = async (videoID) => {
            try {
                const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
                if (toggleBtnElem?.dataset.albumArtworkUrl?.startsWith("http")
                    && ((!toggleBtnElem.dataset.albumArtworkRes || toggleBtnElem.dataset.albumArtworkRes.length === 0)
                        && toggleBtnElem.dataset.albumArtworkRes === String(getFeature("thumbnailOverlayITunesImgRes"))))
                    return openInTab(toggleBtnElem.dataset.albumArtworkUrl, false);
                /** Call to pass the YT and AM artwork URLs to the DOM elements */
                const setThumbOverlayUrl = (ytThumbUrl, amThumbUrl) => {
                    const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
                    const thumbImgElem = document.querySelector("#bytm-thumbnail-overlay-img");
                    const thumbUrl = overlayState === ThumbOvlState.AM && amThumbUrl ? amThumbUrl : ytThumbUrl;
                    if (toggleBtnElem) {
                        toggleBtnElem.dataset.albumArtworkUrl = thumbUrl;
                        toggleBtnElem.dataset.albumArtworkRes = String(getFeature("thumbnailOverlayITunesImgRes"));
                    }
                    if (toggleBtnElem?.href !== "" && toggleBtnElem?.href === thumbUrl && thumbImgElem?.src === thumbUrl)
                        return;
                    if (toggleBtnElem)
                        toggleBtnElem.href = thumbUrl;
                    if (thumbImgElem) {
                        thumbImgElem.dataset.videoId = videoID;
                        thumbImgElem.src = thumbUrl;
                        thumbImgElem.dataset.mediaType = getCurrentMediaType();
                    }
                    log("Applied thumbnail URL to overlay:", thumbUrl);
                };
                let bestNativeThumbUrl;
                const ac = new AbortController();
                getBestThumbnailUrl(videoID).then((url) => {
                    if (ac.signal.aborted ? undefined : (bestNativeThumbUrl = url))
                        setThumbOverlayUrl(url);
                }).catch(() => void 0);
                addSelectorListener("playerBarInfo", ".subtitle > yt-formatted-string a, .subtitle > yt-formatted-string span", {
                    async listener() {
                        if (ac.signal.aborted)
                            return;
                        const [primaryArtist, albumName] = (() => {
                            // format: <span><a>Artist1</a><span> & </span><a>Artist2</a><span> • </span><a>Album Name</a><span> • </span><span>Year</span>
                            // sometimes artists and album are only wrapped by a <span>, sometimes there's a single artist, sometimes two or more
                            const parent = document.querySelector(".content-info-wrapper .subtitle yt-formatted-string");
                            if (!parent)
                                return [undefined, undefined];
                            const children = [...parent.querySelectorAll("a, span")];
                            const splitList = children.reduce((acc, el) => {
                                if (el.tagName === "SPAN" && el.innerText.includes("•")) {
                                    acc.push([]);
                                    return acc;
                                }
                                acc[acc.length - 1].push(el);
                                return acc;
                            }, [[]]);
                            if (splitList.length < 2)
                                return [undefined, undefined];
                            const firstArtistLink = splitList[0].find((el) => el.tagName === "A");
                            const firstArtistName = splitList[0].find((el) => !el.innerText.match(/^\s*•\s*$/));
                            return [
                                (firstArtistLink ?? firstArtistName)?.innerText,
                                splitList[1].find((el) => el.tagName === "A")?.innerText,
                            ];
                        })();
                        const iTunesAlbum = primaryArtist && albumName
                            ? await getBestITunesAlbumMatch(videoID, primaryArtist, albumName)
                            : undefined;
                        const imgRes = getFeature("thumbnailOverlayITunesImgRes", featInfo.thumbnailOverlayITunesImgRes.default);
                        const iTunesUrl = (iTunesAlbum?.artworkUrl100 ?? iTunesAlbum?.artworkUrl60);
                        iTunesUrl && !ac.signal.aborted && ac.abort();
                        const thumbUrl = iTunesUrl?.replace(/(100x100|60x60)/, `${imgRes}x${imgRes}`)
                            ?? bestNativeThumbUrl
                            ?? await getBestThumbnailUrl(videoID);
                        if (thumbUrl) {
                            log(`Successfully resolved artwork${albumName
                                ? ` for '${primaryArtist} - ${albumName}'`
                                : ". Couldn't find album name, defaulting to best available YT thumbnail"}: ${thumbUrl}`);
                            setThumbOverlayUrl(bestNativeThumbUrl ?? thumbUrl, thumbUrl);
                        }
                        else
                            warn(`Couldn't get thumbnail URL for album '${primaryArtist} - ${albumName}' or video with ID '${videoID}'`);
                    },
                });
            }
            catch (err) {
                error("Couldn't apply thumbnail URL to overlay due to an error:", err);
            }
        };
        const createElements = async () => {
            try {
                // overlay
                const overlayElem = document.createElement("div");
                overlayElem.id = "bytm-thumbnail-overlay";
                overlayElem.title = ""; // prevent child titles from propagating
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
                siteEvents.on("watchIdChanged", async (videoId) => {
                    overlayState = ThumbOvlState.Off;
                    return await Promise.allSettled([
                        applyThumbUrl(videoId),
                        updateOverlayVisibility(),
                    ]);
                });
                const params = new URL(location.href).searchParams;
                if (params.has("v")) {
                    applyThumbUrl(params.get("v"));
                    updateOverlayVisibility();
                }
                // toggle button
                if (toggleBtnShown) {
                    const toggleBtnElem = createRipple(document.createElement("a"));
                    toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
                    toggleBtnElem.role = "button";
                    toggleBtnElem.tabIndex = 0;
                    toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");
                    toggleBtnElem.dataset.state = ThumbOvlState[overlayState];
                    onInteraction(toggleBtnElem, (e) => {
                        if (e.shiftKey)
                            return openInTab(toggleBtnElem.href, false);
                        const ovlMax = Object.keys(ThumbOvlState).length / 2 - 1;
                        overlayState = overflowVal(overlayState + (e.ctrlKey || e.altKey ? -1 : 1), 0, ovlMax);
                        if (getCurrentMediaType() === "video" && overlayState === ThumbOvlState.AM)
                            overlayState = ThumbOvlState.Off;
                        toggleBtnElem.dataset.state = ThumbOvlState[overlayState];
                        applyThumbUrl(new URL(location.href).searchParams.get("v"));
                        updateOverlayVisibility(true);
                    });
                    setInnerHtml(toggleBtnElem, await resourceAsString("icon-image"));
                    toggleBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
                    addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
                        listener: (likeContainer) => likeContainer.insertAdjacentElement("afterend", toggleBtnElem),
                    });
                }
                log("Added thumbnail overlay");
            }
            catch (err) {
                error("Couldn't create thumbnail overlay elements due to an error:", err);
            }
        };
        addSelectorListener("mainPanel", playerSelector, {
            listener(playerEl) {
                if (playerEl.getAttribute("player-ui-state") === "INACTIVE") {
                    const obs = new MutationObserver(() => {
                        if (playerEl.getAttribute("player-ui-state") === "INACTIVE")
                            return;
                        createElements();
                        obs.disconnect();
                    });
                    obs.observe(playerEl, {
                        attributes: true,
                        attributeFilter: ["player-ui-state"],
                    });
                }
                else
                    createElements();
            },
        });
    });
}
/** Resolves with the best iTunes album match for the given artist and album name (not sanitized) */
async function getBestITunesAlbumMatch(videoId, artistsRaw, albumRaw) {
    if (overlayState === ThumbOvlState.AM) {
        const cacheEntry = (await artCacheStore.loadData()).entries.find((e) => e.videoId === videoId);
        if (cacheEntry) {
            log(`Found cached album artwork for video ID ${videoId}:`, cacheEntry);
            return {
                artworkUrl60: cacheEntry.url.replace(/100x100/, "60x60"),
                artworkUrl100: cacheEntry.url.replace(/60x60/, "100x100"),
            };
        }
    }
    /** Fetches the album info from the iTunes API and returns the best match as well as the first result as a fallback in a tuple */
    const doFetchITunesAlbum = async (artist, album) => {
        const albumObjs = await fetchITunesAlbumInfo(artist, album);
        if (albumObjs && albumObjs.length > 0) {
            const bestMatch = albumObjs.find((al) => ((sanitizeArtists(al.artistName).toLowerCase() === artist.toLowerCase()
                || sanitizeArtists(al.artistName) === artistsRaw) && (sanitizeSong(al.collectionName).toLowerCase() === sanitizeSong(album).toLowerCase()
                || sanitizeSong(al.collectionCensoredName).toLowerCase() === sanitizeSong(album).toLowerCase())));
            return [bestMatch, albumObjs[0]];
        }
        return [undefined, albumObjs[0]];
    };
    const artist = sanitizeArtists(artistsRaw);
    let [bestMatch, fallback] = await doFetchITunesAlbum(artist, albumRaw);
    if (!bestMatch)
        [bestMatch, fallback] = await doFetchITunesAlbum(artist, albumRaw);
    const match = bestMatch ?? fallback;
    if (match) {
        const entries = (await artCacheStore.loadData()).entries;
        if (!entries.some((e) => e.videoId === videoId)) {
            const entry = {
                videoId,
                url: match.artworkUrl100,
                created: Date.now(),
            };
            entries.push(entry);
            log(`Added album artwork template URL for '${artist} - ${albumRaw}' (or video with ID '${videoId}') to cache:`, match.artworkUrl100);
            emitInterface("bytm:artworkCacheEntryAdded", { album: albumRaw, artist, entry });
            await artCacheStore.setData({ entries });
        }
    }
    else
        warn(`The iTunes API yielded no album info for '${artist} - ${albumRaw}', defaulting to regular YT thumbnail`);
    return match;
}
//#region idle hide cursor
async function initHideCursorOnIdle() {
    addSelectorListener("mainPanel", "ytmusic-player#player", {
        listener(vidContainer) {
            const overlaySelector = "ytmusic-player #song-media-window";
            const overlayElem = document.querySelector(overlaySelector);
            if (!overlayElem)
                return warn("Couldn't find overlay element while initializing cursor hiding");
            /** Last element the mouse was hovered over */
            let lastMouseoverElement = null;
            document.body.addEventListener("mouseover", (e) => {
                const tgt = e.target;
                if (!tgt)
                    return;
                lastMouseoverElement = tgt;
            });
            let isFullscreen = false;
            /** Timer after which the cursor is hidden */
            let cursorHideTimer;
            /** Timer for the opacity transition while switching to the hidden state */
            let hideTransTimer;
            /** Timer for the player bar slide-down animation */
            let hidePlayerBarTimer;
            const hidePlayerBar = () => {
                // cancel hide if cursor is somewhere within playerBar
                if (lastMouseoverElement && lastMouseoverElement.closest("ytmusic-player-bar"))
                    return;
                if (getFeature("hidePlayerBarOnIdleInFullscreen") && isFullscreen) {
                    const playerBar = document.querySelector("ytmusic-player-bar");
                    if (playerBar) {
                        hidePlayerBarTimer = setTimeout(() => {
                            if (playerBar.classList.contains("hidden"))
                                playerBar.style.display = "none";
                            hidePlayerBarTimer = undefined;
                        }, 300);
                        playerBar.classList.add("hidden");
                    }
                }
            };
            const hide = () => {
                if (!getFeature("hideCursorOnIdle"))
                    return;
                if (vidContainer.classList.contains("bytm-cursor-hidden"))
                    return;
                // cancel hide if cursor is somewhere within playerBar
                if (lastMouseoverElement && lastMouseoverElement.closest("ytmusic-player-bar"))
                    return;
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
            siteEvents.on("fullscreenToggled", (fsEnabled) => {
                isFullscreen = fsEnabled;
                if (!getFeature("hidePlayerBarOnIdleInFullscreen"))
                    return;
                if (!fsEnabled)
                    showPlayerBar();
                else if ((!lastMouseoverElement || !lastMouseoverElement.closest("ytmusic-player-bar")) && vidContainer.classList.contains("bytm-cursor-hidden"))
                    hidePlayerBar();
            });
            const show = () => {
                hideTransTimer && clearTimeout(hideTransTimer);
                if (!vidContainer.classList.contains("bytm-cursor-hidden"))
                    return;
                vidContainer.classList.remove("bytm-cursor-hidden");
                vidContainer.style.cursor = "initial";
                overlayElem.style.display = "initial";
                overlayElem.style.opacity = "1 !important";
                showPlayerBar();
            };
            const cursorHideTimerCb = () => cursorHideTimer = setTimeout(hide, getFeature("hideCursorOnIdleDelay") * 1000);
            const onMove = () => {
                cursorHideTimer && clearTimeout(cursorHideTimer);
                show();
                cursorHideTimerCb();
            };
            vidContainer.addEventListener("mousemove", CoreUtils.debounce(onMove, 150), { capture: true });
            vidContainer.addEventListener("mouseleave", () => {
                cursorHideTimer && clearTimeout(cursorHideTimer);
                hideTransTimer && clearTimeout(hideTransTimer);
                hide();
            }, { capture: true });
            vidContainer.addEventListener("click", (e) => {
                if (e.target?.closest("#themesongControlButtonsContainer"))
                    return;
                show();
                cursorHideTimerCb();
                setTimeout(hide, 3000);
            }, { capture: true });
            log("Initialized cursor hiding on idle");
        },
    });
}
//#region fix HDR
/** Prevents visual issues when using HDR */
async function fixHdrIssues() {
    if (!await addStyleFromResource("css-fix_hdr"))
        error("Couldn't load stylesheet to fix HDR issues");
    else
        log("Fixed HDR issues");
}
//#region show vote nums
/** Shows the amount of likes and dislikes on the current song */
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
                if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
                    return error("Couldn't fetch votes from the Return YouTube Dislike API");
                if (getFeature("showVotes")) {
                    addVoteNumbers(voteCont, voteObj);
                    siteEvents.on("watchIdChanged", async (videoID) => {
                        const labelLikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.likes");
                        const labelDislikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.dislikes");
                        if (!labelLikes || !labelDislikes)
                            return error("Couldn't find vote label elements while updating like and dislike counts");
                        if (labelLikes.dataset.watchId === videoID && labelDislikes.dataset.watchId === videoID)
                            return log("Vote labels already updated for this video");
                        const voteObj = await fetchVideoVotes(videoID);
                        if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
                            return error("Couldn't fetch votes from the Return YouTube Dislike API");
                        const likesLabelText = tp("vote_label_likes", voteObj.likes, formatNumber(voteObj.likes, "long"));
                        const dislikesLabelText = tp("vote_label_dislikes", voteObj.dislikes, formatNumber(voteObj.dislikes, "long"));
                        labelLikes.dataset.watchId = getWatchId() ?? "";
                        labelLikes.textContent = formatNumber(voteObj.likes);
                        labelLikes.title = labelLikes.ariaLabel = likesLabelText;
                        labelDislikes.textContent = formatNumber(voteObj.dislikes);
                        labelDislikes.title = labelDislikes.ariaLabel = dislikesLabelText;
                        labelDislikes.dataset.watchId = getWatchId() ?? "";
                        addSelectorListener("playerBar", "ytmusic-like-button-renderer#like-button-renderer", {
                            listener: (bar) => upsertVoteBtnLabels(bar, likesLabelText, dislikesLabelText),
                        });
                    });
                }
            }
            catch (err) {
                error("Couldn't initialize show votes feature due to an error:", err);
            }
        }
    });
}
function addVoteNumbers(voteCont, voteObj) {
    const likeBtn = voteCont.querySelector("#button-shape-like");
    const dislikeBtn = voteCont.querySelector("#button-shape-dislike");
    if (!likeBtn || !dislikeBtn)
        return error("Couldn't find like or dislike button while adding vote numbers");
    // wrap buttons in a container
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
        label.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            (type === "likes" ? likeBtn : dislikeBtn).querySelector("button")?.click();
        });
        return label;
    };
    /** Called when the like/dislike state toggles to apply the adjusted numbers */
    const updateLabels = async () => {
        const { likeState } = getLikeDislikeBtns();
        const voteObj = await fetchVideoVotes(getWatchId());
        if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
            return error("Couldn't fetch votes from the Return YouTube Dislike API");
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
    const { btnRenderer } = getLikeDislikeBtns();
    if (btnRenderer) {
        const rendererObs = new MutationObserver(() => updateLabels());
        rendererObs.observe(btnRenderer, {
            attributes: true,
            attributeFilter: ["like-status"],
            childList: false,
            subtree: false,
        });
        siteEvents.on("pathChanged", () => {
            rendererObs.disconnect();
            updateLabels();
        });
    }
    addStyleFromResource("css-show_votes")
        .catch((e) => error("Couldn't add CSS for show votes feature due to an error:", e));
    const likeLblEl = createLabel(voteObj.likes, "likes");
    likeBtn.insertAdjacentElement("afterend", likeLblEl);
    const dislikeLblEl = createLabel(voteObj.dislikes, "dislikes");
    dislikeBtn.insertAdjacentElement("afterend", dislikeLblEl);
    upsertVoteBtnLabels(voteCont, likeLblEl.title, dislikeLblEl.title);
    log("Added vote number labels to like and dislike buttons");
    forceEmitSiteEvent("voteLabelsAdded");
}
/** Updates or inserts the labels on the native like and dislike buttons */
function upsertVoteBtnLabels(parentEl, likesLabelText, dislikesLabelText) {
    const likeBtn = parentEl.querySelector("#button-shape-like button");
    const dislikeBtn = parentEl.querySelector("#button-shape-dislike button");
    if (likeBtn)
        likeBtn.title = likeBtn.ariaLabel = likesLabelText;
    if (dislikeBtn)
        dislikeBtn.title = dislikeBtn.ariaLabel = dislikesLabelText;
}
//#region swap like&dislike btns
/** Swaps the like and dislike buttons on the watch page */
async function initSwapLikeDislikeBtns() {
    const err = (err) => error("Couldn't initialize \"swap like and dislike buttons\" feature due to an error" + err ? ":" : "", err);
    try {
        if (!getFeature("swapLikeDislikeButtons"))
            return;
        if (await addStyleFromResource("css-swap_like_dislike_btns"))
            log("Initialized \"swap like and dislike buttons\" feature");
        else
            err();
    }
    catch (e) {
        err(e);
    }
}
//#region watch page full size
/** Makes the watch page full size */
async function initWatchPageFullSize() {
    if (!await addStyleFromResource("css-watch_page_full_size"))
        error("Couldn't load stylesheet to make watch page full size");
    else
        log("Made watch page full size");
}
//#region truncate player bar subtitles
/** Truncates long subtitles in the player bar with an ellipsis */
async function initTruncatePlayerBarSubtitles() {
    if (!await addStyleFromResource("css-truncate_player_bar_subtitles"))
        error("Couldn't load stylesheet to truncate player bar subtitles");
    else
        log("Truncated player bar subtitles");
}var formatVersion = 0;
var domains = [
	{
		id: "ytm",
		name: "YouTube Music",
		nameShort: "YT Music",
		abbr: "YTM",
		hostnames: [
			"music.youtube.com"
		]
	},
	{
		id: "yt",
		name: "YouTube",
		nameShort: "YT",
		abbr: "YT",
		hostnames: [
			"www.youtube.com",
			"youtube.com",
			"youtu.be",
			"m.youtube.com"
		]
	}
];
var alerts = [
];
var selectors = {
};
var defaultStaticData = {
	formatVersion: formatVersion,
	domains: domains,
	alerts: alerts,
	selectors: selectors
};//#region vars
/** URL to the remote data JSON file on a CDN. */
const remoteDataUrl = `https://raw.githubusercontent.com/${repo}/refs/heads/main/assets/data.json`;
/** Current format version of the static data JSON. If the fetched data has a different format version, it will be rejected and the bundled data will be used instead. */
const staticDataFormatVersion = 0;
let staticData;
//#region get data
/** Loads the static data by fetching the remote JSON or falling back to the bundled JSON if the fetch fails. */
async function getStaticData() {
    try {
        if (staticData)
            return staticData;
        const res = await CoreUtils.fetchAdvanced(remoteDataUrl, {
            timeout: 10000,
        });
        if (res.ok) {
            const data = await res.json();
            if (isStaticData(data)) {
                info("Successfully fetched remote static data:", data);
                return staticData = data;
            }
            else
                warn("Remote static data is in an unsupported format, falling back to bundled data:", getterifyObj(defaultStaticData));
        }
        return staticData = defaultStaticData;
    }
    catch (e) {
        warn(`Failed to fetch remote static data from '${remoteDataUrl}' due to a non-fatal error:`, e);
        info("Falling back to the bundled static data:", getterifyObj(defaultStaticData));
        return staticData = defaultStaticData;
    }
}
/** Returns the bundled static data JSON. Mainly used for synchronous access when the latest data isn't required. */
function getDefaultStaticData() {
    return defaultStaticData;
}
//#region validate
/** Checks whether the given data matches the expected structure of the static data JSON at `assets/data.json`. */
function isStaticData(data) {
    return typeof data === "object"
        && data !== null
        // format version
        && "formatVersion" in data
        && typeof data.formatVersion === "number"
        && data.formatVersion === staticDataFormatVersion
        // domains
        && "domains" in data
        && typeof data.domains === "object"
        && Array.isArray(data.domains)
        // selectors
        && "selectors" in data
        && typeof data.selectors === "object"
        // alerts
        && "alerts" in data
        && typeof data.alerts === "object"
        && Array.isArray(data.alerts);
}
const alertsStore = new CoreUtils.DataStore({
    id: "bytm-alerts",
    defaultData: {
        dismissed: [],
    },
    formatVersion: 0,
    engine: new UserUtils.GMStorageEngine(),
    memoryCache: false,
    compressionFormat: null,
});
/** Checks if there are active alerts and shows a prompt for each of them. */
async function checkActiveAlerts({ alerts }, alertsData) {
    const activeAlerts = alerts.filter(alert => isAlertActive(alert, alertsData));
    for (const alert of activeAlerts) {
        const dlg = createAlertDialog(alert);
        await dlg.open();
        await dlg.once("close");
        alertsData = await alertsStore.loadData();
        await alertsStore.setData({
            dismissed: [alert.id, ...alertsData.dismissed],
        });
    }
}
/** Checks whether the given alert is active based on its constraints and whether it was already dismissed. */
function isAlertActive(alert, alertsData) {
    // check if dismissed
    if (alertsData.dismissed.includes(alert.id))
        return false;
    // check domain constraints
    if (alert.domains.length === 0)
        return false;
    if (!alert.domains.includes(getDomain()))
        return false;
    // check version constraints
    if (alert.versionMin && compareVersions.compareVersions(alert.versionMin, scriptInfo$1.version) > 0)
        return false;
    if (alert.versionMax && compareVersions.compareVersions(alert.versionMax, scriptInfo$1.version) < 0)
        return false;
    // check date constraints
    const now = new Date();
    if (alert.dateMin && new Date(alert.dateMin) > now)
        return false;
    if (alert.dateMax && new Date(alert.dateMax) < now)
        return false;
    return true;
}
/** Creates an alert dialog for the given alert data. */
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
                if (titleCloseBtn)
                    titleCloseBtn.click();
                else
                    warn("Couldn't find the alert dialog's close button to trigger a click on it, closing the dialog won't work properly:", titleCloseBtn);
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
//#region use data
/** Initializes the static data by fetching it and performing necessary checks and actions. */
async function initStaticData() {
    const staticData = await getStaticData();
    const alertsData = await alertsStore.loadData();
    await Promise.all([
        checkActiveAlerts(staticData, alertsData),
    ]);
}/** Central serializer for all data stores */
let serializer;
/** Central serializer for all data stores, including the caches and other stores that have volatile enough data */
let fullSerializer;
/** Array of all data stores that are included in the DataStoreSerializer instance */
const getSerializerStores = () => [
    configStore,
    autoLikeStore,
    alertsStore,
];
/** Array of all data stores, including the caches and other stores that have volatile enough data */
const getSerializerStoresFull = () => [
    ...getSerializerStores(),
    artCacheStore,
    lyricsCacheStore,
    resourceCacheStore,
];
/** Returns the serializer for all data stores. Doesn't include the full list of stores by default. */
function getDSSerializer(full = false) {
    if (!full)
        return serializer ?? (serializer = new CoreUtils.DataStoreSerializer(getSerializerStores(), {
            addChecksum: true,
            ensureIntegrity: true,
        }));
    else
        return fullSerializer ?? (fullSerializer = new CoreUtils.DataStoreSerializer(getSerializerStoresFull(), {
            addChecksum: true,
            ensureIntegrity: true,
        }));
}
/**
 * Downloads the current data stores as a single file.
 * @param useEncoding Whether to encode the data using the DataStoreSerializer's encoding method. Defaults to `true`.
 * @param full Whether to include all stores (the list returned by {@linkcode getSerializerStoresFull()}) or just the most important ones (the list returned by {@linkcode getSerializerStores()}). Defaults to `false`.
 */
async function downloadData(useEncoding = true, full = false) {
    const serializer = getDSSerializer(full);
    const fileName = t(`data_export_file_name${full ? "_full" : ""}`, {
        scriptName: scriptInfo$1.name,
        version: packageJson.version,
        date: new Date().toISOString(),
    });
    const data = JSON.stringify(JSON.parse(await serializer.serialize(useEncoding)), undefined, 2);
    downloadFile(fileName, data, "application/json");
}// module that facilitates inter-session (tab) communication via broadcast packets
//#region vars
/** Random ID used to identify the sender of packets emitted via broadcast, and to determine which packets should be received based on the `to` field of the transmitted packets. */
const broadcastTxID = CoreUtils.randomId(10, 36);
const broadcastEngDSOpts = {
    id: "bytm-broadcast",
    encodeData: [null, (d) => d],
    decodeData: [null, (d) => d],
};
/**
 * DataStoreEngine instance used to push broadcast packets to other sessions using the `GM.addValueChangeListener` API.
 * Refer to the {@linkcode BroadcastPacket} type for the packets sent through this channel.
 * Doesn't need to be read from, as the packets are captured via `GM.addValueChangeListener`.
 */
const broadcastEng = new UserUtils.GMStorageEngine({ dataStoreOptions: broadcastEngDSOpts });
/** Which packets have already been received and processed. */
const receivedNonces = new Set();
//#region init
/** Initializes the broadcast module by setting up the necessary event listeners. */
function initBroadcast() {
    if ("addValueChangeListener" in GM) {
        // sadly only supported by TM and VM
        // see also https://violentmonkey.github.io/api/gm/#gm_addvaluechangelistener
        GM.addValueChangeListener(broadcastEngDSOpts.id, (_name, _oldData, newData, isRemote) => {
            try {
                if (typeof newData === "string" && newData.trim().startsWith("{") && newData.trim().endsWith("}"))
                    newData = JSON.parse(newData);
            }
            catch (e) {
                warn("Failed to parse broadcast packet as object:", newData, e);
            }
            if (isRemote && typeof newData === "object" && newData !== null && "packet" in newData && newData.packet !== null)
                relayBroadcastPacket(newData.packet);
        });
    }
    else
        error(`${GM_info.scriptHandler} doesn't have GM.addValueChangeListener support, inter-session communication will not work!`);
    // broadcast DataStore data update packets:
    getSerializerStoresFull().forEach(store => {
        store.on("updateData", CoreUtils.debounce(() => {
            emitBroadcast({
                type: "dataStoreUpdate",
                data: {
                    id: store.id,
                },
            });
            getFeature("logEvents") && log(`Emitted broadcast packet for updated DataStore with ID "${store.id}"`);
        }, 100));
    });
    // receive and handle broadcast packets:
    siteEvents.on("broadcast", handleBroadcastPacket);
    info(`Initialized broadcast module with TxID "${broadcastTxID}"`);
}
//#region handlers
/** Called to parse and handle received broadcast packets. */
async function handleBroadcastPacket(type, { from, to, packet }) {
    // ignore own sent packets:
    if (from === broadcastTxID)
        return;
    // ignore packets not intended for this session:
    if (Array.isArray(to) && !to.includes(broadcastTxID))
        return;
    switch (type) {
        // update local DataStore data when a "dataStoreUpdate" packet is received:
        case "dataStoreUpdate": {
            const data = packet.data;
            try {
                await getSerializerStoresFull()
                    .find(s => s.id === data.id)
                    ?.loadData();
                if (data.id === configStore.id)
                    emitSiteEvent("configChanged", configStore.getData());
                getFeature("logEvents") && log(`Received "dataStoreUpdate" packet for DataStore with ID "${data.id}", reloaded data for that store`);
            }
            catch (err) {
                log(`Error while handling "dataStoreUpdate" packet for DataStore with ID "${data.id}":`, err);
            }
            break;
        }
        // reload this tab
        case "reloadTabs":
            await reloadTab();
            break;
        // reply to "discoverSessions" packets with a "discoverSessionsReply" packet:
        case "discoverSessions":
            emitBroadcast({
                type: "discoverSessionsReply",
                data: {
                    sessionId: getSessionId(),
                    title: document.title,
                    domain: getDomain(),
                    initTime,
                },
            }, [from]);
            getFeature("logEvents") && log(`Replied to "discoverSessions" packet from session "${from}" with this session's TxID "${broadcastTxID}"`);
            break;
    }
}
//#region emit
/**
 * Emits a packet through BYTM's broadcast system to all other sessions that might be open, or only to specific sessions if the `to` parameter is provided.
 * The packet will be wrapped in a {@linkcode BroadcastTransitPacket} that includes metadata about the sender and intended recipients.
 * @param packet The actual packet to be sent, without the metadata. Use the {@linkcode BroadcastPacket} type for this parameter.
 * @param to Optional array of TxIDs to specify which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.
 */
async function emitBroadcast(packet, to) {
    // use the 6 least significant Date.now bytes plus random floating point number for truly unique random nonces:
    const nonce = Date.now() % 0xFFFFFF + Math.random();
    return await broadcastEng.setValue(broadcastEngDSOpts.id, JSON.stringify({
        packet: {
            from: broadcastTxID,
            to,
            packet,
            nonce,
        }
    }));
}
//#region validate
/** Validates if the given object is a valid {@linkcode BroadcastTransitPacket} */
function isValidTransitBroadcastPacket(obj) {
    return typeof obj === "object"
        && obj !== null
        // from
        && typeof obj.from === "string"
        // to
        && (obj.to === undefined || (Array.isArray(obj.to) && obj.to.every((id) => typeof id === "string")))
        // packet
        && typeof obj.packet === "object"
        && obj.packet !== null
        // packet.type
        && typeof obj.packet.type === "string"
        && (
        // packet.data
        (typeof obj.packet.data === "object" && obj.packet.data !== null)
            || obj.packet.data === undefined)
        // nonce
        && typeof obj.nonce === "number";
}
//#region relay packet
/** Gets called when a broadcast packet is received to validate and relay it via {@linkcode siteEvents} */
function relayBroadcastPacket(packet) {
    if (!isValidTransitBroadcastPacket(packet))
        return warn("Received invalid broadcast packet, ignoring:", packet);
    // if packet was already processed, ignore it
    if (receivedNonces.has(packet.nonce))
        return warn("Received broadcast packet with nonce that was already received, ignoring:", packet);
    // remove oldest entry to prevent any potential memory leaks
    if (receivedNonces.size >= 10) {
        const oldestNonce = receivedNonces.values().next().value;
        oldestNonce && receivedNonces.delete(oldestNonce);
    }
    receivedNonces.add(packet.nonce);
    // if packet is not intended for this session, ignore it
    if (packet.from === broadcastTxID || (Array.isArray(packet.to) && !packet.to.includes(broadcastTxID ?? "")))
        return;
    if (getFeature("logEvents"))
        log(`Received broadcast packet of type "${packet.packet.type}" from session "${packet.from}":`, packet);
    const packetClean = CoreUtils.pureObj(packet); // remove prototype chain
    // broadcasts work like interrupts, so they are allowed to be emitted even before "bytm:ready"
    forceEmitSiteEvent("broadcast", packet.packet.type, packetClean);
    forceEmitSiteEvent(`broadcast:${packet.packet.type}`, packetClean); // love dealing with TS mapped type shenanigans
}//#region misc
let domain;
/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
function getDomain() {
    const staticData = getDefaultStaticData();
    const staticDomainInfo = staticData.domains.find(dom => dom.hostnames.some(hn => location.hostname === hn));
    if (domain)
        return domain;
    else if (staticDomainInfo)
        return domain = staticDomainInfo.id;
    else
        throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}
/**
 * Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable.
 * Note: as duplicated tabs will receive the same sessionStorage, this ID is not guaranteed to be entirely unique.
 */
function getSessionId() {
    try {
        if (!sessionStorageAvailable$1)
            throw new Error("Session storage unavailable");
        let sesId = window.sessionStorage.getItem("_bytm-session-id");
        if (!sesId)
            window.sessionStorage.setItem("_bytm-session-id", sesId = CoreUtils.randomId(10, 36));
        return sesId;
    }
    catch (err) {
        warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
        return null;
    }
}
let isCompressionSupported;
/** Tests whether compression via the predefined {@linkcode compressionFormat} is supported (only on the first call, then returns the cached result) */
async function compressionSupported() {
    if (typeof isCompressionSupported === "boolean")
        return isCompressionSupported;
    try {
        await CoreUtils.compress(".", compressionFormat$1, "string");
        return isCompressionSupported = true;
    }
    catch {
        return isCompressionSupported = false;
    }
}
/** Returns the watch ID of the current video or null if not on a video page */
function getWatchId() {
    const { searchParams, pathname } = new URL(location.href);
    return pathname.includes("/watch") ? searchParams.get("v") : null;
}
/**
 * Returns the ID of the current channel in the format `@User` or `UC...` from URLs with the path `/@User`, `/@User/videos`, `/channel/UC...` or `/channel/UC.../videos`
 * Returns null if the current page is not a channel page or there was an error parsing the URL
 */
function getCurrentChannelId() {
    return parseChannelIdFromUrl(location.href);
}
/** Returns the channel ID from a URL or null if the URL is invalid */
function parseChannelIdFromUrl(url) {
    try {
        const { pathname } = url instanceof URL ? url : new URL(url);
        if (pathname.includes("/channel/"))
            return sanitizeChannelId(pathname.split("/channel/")[1].split("/")[0]);
        else if (pathname.includes("/@"))
            return sanitizeChannelId(pathname.split("/@")[1].split("/")[0]);
        else
            return null;
    }
    catch {
        return null;
    }
}
/** Sanitizes a channel ID by adding a leading `@` if the ID doesn't start with `UC...` */
function sanitizeChannelId(channelId) {
    channelId = String(channelId).trim();
    return isValidChannelId(channelId) || channelId.startsWith("@")
        ? channelId
        : `@${channelId}`;
}
/** Tests whether a string is a valid channel ID in the format `@User` or `UC...` */
function isValidChannelId(channelId) {
    return channelId.match(/^(UC|@)[a-zA-Z0-9_-]+$/) !== null;
}
/** Returns the thumbnail URL for a video with either a given quality identifier or index */
function getThumbnailUrl(videoID, qualityOrIndex = "maxresdefault") {
    return `https://img.youtube.com/vi/${videoID}/${qualityOrIndex}.jpg`;
}
/** Returns the best available thumbnail URL for a video with the given video ID */
async function getBestThumbnailUrl(videoID) {
    try {
        const priorityList = ["maxresdefault", "sddefault", "hqdefault", 0];
        for (const quality of priorityList) {
            let response;
            const url = getThumbnailUrl(videoID, quality);
            try {
                response = await sendRequest({ url, method: "HEAD", timeout: 6000 });
            }
            catch (err) {
                error(`Error while sending HEAD request to thumbnail URL for video ID '${videoID}' with quality '${quality}':`, err);
            }
            if (response && response.status < 300 && response.status >= 200)
                return url;
        }
    }
    catch (err) {
        throw new Error(`Couldn't get thumbnail URL for video ID '${videoID}': ${err}`, { cause: err });
    }
}
/** Opens the given URL in a new tab, using GM.openInTab if available */
function openInTab(href, background = false) {
    try {
        UserUtils.openInNewTab(href, background);
    }
    catch {
        window.open(href, "_blank", "noopener noreferrer");
    }
}
/** Tries to parse an uncompressed or compressed input string as a JSON object */
async function tryToDecompressAndParse(input) {
    let parsed;
    const val = await CoreUtils.consumeStringGen(input);
    try {
        parsed = JSON.parse(val);
    }
    catch {
        try {
            parsed = JSON.parse(await CoreUtils.decompress(val, compressionFormat$1, "string"));
        }
        catch (err) {
            error("Couldn't decompress and parse data.", err);
            return null;
        }
    }
    // artificial timeout to allow animations to finish and because dumb monkey brains *expect* a delay
    await CoreUtils.pauseFor(CoreUtils.randRange(400, 800));
    return parsed;
}
/** Very crude OS detection */
function getOS() {
    if (navigator.userAgent.match(/mac(\s?os|intel)/i))
        return "mac";
    return "other";
}
/** Formats a number based on the config or the passed {@linkcode notation} */
function formatNumber(num, notation) {
    return num.toLocaleString(getLocale(), (notation ?? getFeature("numbersFormat")) === "short"
        ? {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 1,
        }
        : {
            style: "decimal",
            maximumFractionDigits: 0,
        });
}
const reloadTabStore = new CoreUtils.DataStore({
    id: "bytm-reload-tab",
    engine: new UserUtils.GMStorageEngine(),
    formatVersion: 0,
    compressionFormat: null,
    memoryCache: false,
    defaultData: {
        entries: [],
    },
});
const reloadTabEntryMaxTTL = 1000 * 60 * 60 * 24;
/** Returns the "reload tab" data for the current session, or null if there is no data for the current session or sessionStorage is unavailable. */
async function getReloadTabData(sessionId, deleteAfterRead = true) {
    try {
        if (!sessionId)
            sessionId = getSessionId();
        const data = await reloadTabStore.loadData();
        let entries = [...data.entries];
        const sesEntry = entries.find(e => e.sessionId === sessionId) ?? null;
        entries = data.entries.filter(e => deleteAfterRead && sesEntry ? e.sessionId !== sessionId : true);
        // filter out expired and own entries
        entries = entries.filter(e => Date.now() - e.timestamp < reloadTabEntryMaxTTL);
        await reloadTabStore.setData({
            ...data,
            entries,
        });
        return sesEntry;
    }
    catch (err) {
        error("Couldn't get reload tab data, sessionStorage might be unavailable:", err);
        return null;
    }
}
/** add `time_continue` param only if current video time is greater than this value */
const reloadTabVideoTimeThreshold = 3;
/** Reloads the tab. If a video is currently playing, its time and volume will be preserved through the URL parameter `time_continue` and the `bytm-reload-tab` DataStore */
async function reloadTab() {
    const win = UserUtils.getUnsafeWindow();
    try {
        enableDiscardBeforeUnload();
        if ((getVideoElement()?.readyState ?? 0) > 0) {
            const time = await getVideoTime(0) ?? 0;
            // read from the slider element directly - avoids the expVolFnInv getter transform giving wrong values
            const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider");
            const volume = sliderElem ? Number(sliderElem.value) : Math.round(getVideoElement().volume * 100);
            const url = new URL(win.location.href);
            if (!isNaN(time) && time > reloadTabVideoTimeThreshold)
                url.searchParams.set("time_continue", String(time));
            if (!isNaN(volume) && volume > 0) {
                const reloadTabData = await reloadTabStore.loadData();
                if (reloadTabData.entries.find(e => e.sessionId === getSessionId()))
                    reloadTabData.entries = reloadTabData.entries.filter(e => e.sessionId !== getSessionId());
                reloadTabData.entries.push({
                    sessionId: getSessionId(),
                    timestamp: Date.now(),
                    volume,
                    time: !isNaN(time) && time > reloadTabVideoTimeThreshold ? time : null,
                });
                await reloadTabStore.setData(reloadTabData);
            }
            return win.location.replace(url);
        }
        win.location.reload();
    }
    catch (err) {
        error("Couldn't save video time and volume before reloading tab:", err);
        win.location.reload();
    }
}
/** Sends a broadcast packet to all open sessions to trigger a reload in all of them, including this one by default. */
async function reloadAllTabs(reloadSelf = true, toTxIDs) {
    info(`Emitting broadcast to reload ${"all tabs"}${reloadSelf ? ", then self-reloading" : ""}.`);
    emitBroadcast({
        type: "reloadTabs",
    }, toTxIDs);
    return reloadSelf
        ? await (async () => {
            await CoreUtils.pauseFor(30); // broadcast is synchronous, but we might still be working on something in our async queue
            return await reloadTab();
        })()
        : undefined;
}
/** Scrolls to the currently playing queue item in the queue once it's available */
function scrollToCurrentSongInQueue(evt) {
    addSelectorListener("sidePanel", "ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]", {
        listener(activeItem) {
            activeItem.scrollIntoView({
                behavior: evt?.shiftKey ? "instant" : "smooth",
                block: evt?.ctrlKey || evt?.altKey ? "start" : "center",
                inline: "center",
            });
            log("Scrolled to active song in queue:", activeItem);
        }
    });
}
/** Makes the {@linkcode value} over- & underflow so it is always in a certain range */
function overflowVal(value, minOrMax, max) {
    const min = typeof max === "number" ? minOrMax : 0;
    max = typeof max === "number" ? max : minOrMax;
    if (min > max)
        throw new RangeError("Parameter \"min\" can't be bigger than \"max\"");
    if (isNaN(value) || isNaN(min) || isNaN(max) || !isFinite(value) || !isFinite(min) || !isFinite(max))
        return NaN;
    if (value >= min && value <= max)
        return value;
    const range = max - min + 1;
    const wrappedValue = ((value - min) % range + range) % range + min;
    return wrappedValue;
}
/** Transforms an object's own properties into getters that return the original values. */
function getterifyObj(obj) {
    const newObj = {};
    for (const key in obj) {
        Object.defineProperty(newObj, key, {
            get: () => obj[key],
            enumerable: true,
            configurable: true,
        });
    }
    return newObj;
}
let verSessions;
/** Counts the number of launched sessions per userscript version and returns the current count, to enable time-based features like the "new feature" adornment icon */
async function initVersionSessionCounter() {
    verSessions = JSON.parse(await GM.getValue("bytm-version-session-counter", "{}"));
    if (typeof verSessions !== "object" || verSessions === null)
        verSessions = {};
    if (typeof verSessions?.[scriptInfo$1.version] !== "object" || typeof verSessions?.[scriptInfo$1.version]?.count !== "number")
        verSessions[scriptInfo$1.version] = { count: 1 };
    else
        verSessions[scriptInfo$1.version].count++;
    await GM.setValue("bytm-version-session-counter", JSON.stringify(verSessions));
    return verSessions[scriptInfo$1.version].count;
}
/** Returns the number of sessions for the given version, or 0 if the version is not found in the session counter for whatever reason */
function getVersionSessionCount(version = scriptInfo$1.version) {
    if (!verSessions)
        throw new Error("Version session counter not initialized yet, call initVersionSessionCounter() first");
    if (typeof verSessions[version] !== "object" || typeof verSessions[version].count !== "number")
        return 0;
    return verSessions[version].count;
}
//#region resources
/**
 * Returns the URL of a resource by its name, as defined in `assets/resources.json`, from the CDN the script was built for.
 * Tries to fall back to a base64-encoded data: URI in GM resources if the CDN resource was not found.
 * @param name The name / key of the resource as defined in `assets/resources.json` - you can use `as "_"` to make TypeScript shut up if the name can not be typed as `ResourceKey`
 * @param uncached Set to true to always fetch from the CDN URL instead of the GM resource cache
 */
async function getResourceUrl(name) {
    const resObjOrStr = resourcesJson.resources?.[name];
    if (typeof resObjOrStr === "object" || typeof resObjOrStr === "string") {
        const pathName = typeof resObjOrStr === "object" && "path" in resObjOrStr ? resObjOrStr?.path : resObjOrStr;
        const ghRef = typeof resObjOrStr === "object" && "ref" in resObjOrStr ? resObjOrStr?.ref : buildNumber$1;
        if (pathName) {
            return pathName.startsWith("http")
                ? pathName
                : (() => {
                    let path = pathName;
                    if (path.startsWith("/"))
                        path = path.slice(1);
                    else
                        path = `assets/${path}`;
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
    // @ts-expect-error VM and TM have the second parameter to return the b64 URI, GM doesn't
    return await GM.getResourceUrl(name, false);
}
/** Max age for the resource cache, after its last modification, in milliseconds */
const resourceCacheTTL = 1000 * 60 * 60 * 24 * 7; // 7 days
const resourceCacheKey = mode$1 === "development" ? scriptInfo$1.version : buildNumber$1;
/** Cache for resources fetched via {@linkcode resourceAsString()} */
const resourceCacheStore = new CoreUtils.DataStore({
    id: "bytm-resource-cache",
    formatVersion: 0,
    engine: new UserUtils.GMStorageEngine(),
    compressionFormat: compressionFormat$1,
    defaultData: {
        resources: {},
        created: Date.now(),
        cacheKey: resourceCacheKey,
    },
});
/** Resources with these prefixes are cached in the resource cache */
const cachedResourcePrefixes = [
    "doc-", // random documents
    "icon-", // SVG icons
    "img-", // images
    "style-", // dynamic stylesheets
    "trans-", // translations
];
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
/**
 * Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property.
 * Caches the resulting string if the resource key starts with any item in {@linkcode cachedResourcePrefixes}
 */
async function resourceAsString(resourceKey) {
    if (typeof isCompressionSupported === "undefined")
        await compressionSupported(); // init variable
    if (Date.now() - resourceCacheStore.getData().created > resourceCacheTTL)
        await resourceCacheStore.saveDefaultData();
    else if (await resourceCacheHas(resourceKey))
        return resourceCacheGet(resourceKey);
    const resourceUrl = await getResourceUrl(resourceKey);
    try {
        if (!resourceUrl)
            throw new Error(`Couldn't find URL for resource '${resourceKey}'`);
        const res = await CoreUtils.fetchAdvanced(resourceUrl);
        if (!res.ok)
            throw new Error(`Couldn't fetch resource '${resourceKey}' at URL '${resourceUrl}' with status ${res.status} (${res.statusText})`);
        const str = await res.text();
        if (cachedResourcePrefixes.some(prefix => resourceKey.startsWith(prefix)))
            await resourceCacheSet(resourceKey, str);
        return str;
    }
    catch (err) {
        error(`Couldn't fetch resource '${resourceKey}' as string from URL '${resourceUrl}' due to an error:`, err);
        return null;
    }
}
//#region preferred locale
/**
 * Resolves the preferred locale code, given the browser's language settings, as long as it is supported by the userscript directly or via the `altLocales` prop in `locales.json`
 * Prioritizes any supported value of `navigator.language`, then `navigator.languages`, then goes over them again, trimming off the part after the hyphen, then falls back to `"en-US"`
 */
function getPreferredLocale() {
    /** Trimmed & case insensitive string equality check. */
    const sanEq = (str1, str2) => str1.trim().toLowerCase() === str2.trim().toLowerCase();
    const allNavLangs = [...new Set([navigator.language, ...navigator.languages])]
        .map((v) => v.replace(/_/g, "-"));
    for (const navLang of allNavLangs) {
        const resolvedLoc = Object.entries(localesJson)
            .find(([key, { altLocales }]) => sanEq(key, navLang) || altLocales.find(altLoc => sanEq(altLoc, navLang)))?.[0];
        if (resolvedLoc)
            return resolvedLoc.trim();
        const navLangTrimmed = navLang.split("-")[0];
        const resolvedFallbackLang = Object.entries(localesJson)
            .find(([key, { altLocales }]) => sanEq(key.split("-")[0], navLangTrimmed) || altLocales.find(al => sanEq(al.split("-")[0], navLangTrimmed)))?.[0];
        if (resolvedFallbackLang)
            return resolvedFallbackLang.trim();
    }
    return "en-US";
}
// #region markdown
/**
 * Parses a markdown string using marked and turns it into an HTML string with default settings.
 * @param sanitize Sanitizes against XSS by default using DOMPurify in {@linkcode sanitizeHtml()} - set to false to disable.
 */
async function parseMarkdown(mdString, sanitize = true) {
    const mdHtml = await marked.marked.parse(mdString, {
        async: true,
        breaks: true,
        gfm: true,
        silent: true,
    });
    return sanitize ? sanitizeHtml(mdHtml) : mdHtml;
}
// #region changelog
/** Returns the content of the changelog markdown file */
async function getChangelogMd() {
    const clRes = await CoreUtils.fetchAdvanced(changelogUrl);
    log("Fetched changelog:", clRes);
    return await clRes.text();
}
/** Returns the changelog as HTML with a details element for each version */
async function getChangelogHtmlWithDetails() {
    try {
        const changelogMd = await getChangelogMd();
        let changelogHtml = await parseMarkdown(changelogMd, false);
        const getVerId = (verStr) => verStr.trim().replace(/[._#\s-]/g, "");
        changelogHtml = changelogHtml.replace(/<div\s+class="split">\s?<\/div>(\s+)?\n?(\s+)?<br(\s\/)?>/gm, "</details>\n<br>\n<details class=\"bytm-changelog-version-details\">");
        const h2Matches = Array.from(changelogHtml.matchAll(/<h2(\s+id=".+")?>([\d\w\s.]+)<\/h2>/gm));
        for (const [fullMatch, , verStr] of h2Matches)
            changelogHtml = changelogHtml.replace(fullMatch, `<summary tab-index="0"><h2 id="${getVerId(verStr)}" role="subheading" aria-level="1">${verStr}</h2></summary>`);
        changelogHtml = `<details class="bytm-changelog-version-details">${changelogHtml}</details>`;
        return sanitizeHtml(changelogHtml);
    }
    catch (err) {
        error("Couldn't fetch or parse changelog:", err);
        return `Error while preparing changelog: ${err}`;
    }
}let pluginListDialog = null;
/** Creates and/or returns the import dialog */
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
        renderBody: renderBody$1,
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
    for (const [, { def: { plugin, intents: intentsRaw } }] of registeredPlugins) {
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
            if (!url)
                continue;
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
        const isDevPlugin = Boolean(pluginIdentifier === devPluginIdentifier
            && getPluginInfo(devPluginToken, devPluginIdentifier));
        const intentsBitSet = Array.isArray(intentsRaw) ? intentsRaw.reduce((acc, intent) => acc | intent, 0) : typeof intentsRaw === "number" ? intentsRaw : 0;
        const intentsAmount = Object.keys(PluginIntent).length / 2;
        const intentsArr = CoreUtils.bitSetHas(intentsBitSet, PluginIntent.FullAccess)
            ? [PluginIntent.FullAccess]
            : (typeof intentsBitSet === "number" && intentsBitSet > 0 ? (() => {
                const arr = [];
                for (let i = 0; i < intentsAmount; i++)
                    if (intentsBitSet & (2 ** i))
                        arr.push(2 ** i);
                return arr;
            })() : []);
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
        }
        else {
            const devPluginNoteEl = document.createElement("div");
            devPluginNoteEl.classList.add("bytm-plugin-list-row-right", "is-dev-plugin");
            devPluginNoteEl.tabIndex = 0;
            devPluginNoteEl.title = devPluginNoteEl.ariaLabel = t("plugin_list.dev_plugin_note");
            const infoIcon = "<span class=\"bytm-dev-plugin-note-info-icon\">🛈</span>";
            setInnerHtml(devPluginNoteEl, `${activeLocaleDir === "ltr" ? `${infoIcon} ` : ""}${t("plugin_list.dev_plugin_note")}${activeLocaleDir === "rtl" ? ` ${infoIcon}` : ""}`);
            rowEl.appendChild(devPluginNoteEl);
        }
        listContainerEl.appendChild(rowEl);
    }
    return listContainerEl;
}//#region ignored input elements
/** List of element tag names (uppercase) that, if focused, should make BYTM ignore keypresses */
const ignoreInputTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];
/** List of element IDs that, if focused, should make BYTM ignore keypresses. */
const ignoreInputIds = [
    "contenteditable-root", // comment field on YT
    "volume-slider", // volume slider on YTM
    "bytm-cfg-menu-sidenav", // cfg menu sidenav
];
/** List of element class names that, if focused, should make BYTM ignore keypresses. */
const ignoreInputClassNames = [
    "bytm-ignored-input", // generic class for ignored inputs
    "cbTitleTextBox", // dearrow title input
];
/** If an element matches {@linkcode ignoreInputTagNames}, {@linkcode ignoreInputIds} or {@linkcode ignoreInputClassNames}, but also matches {@linkcode unIgnoreInputClassNames}, BYTM will not ignore keypresses when that element is focused. */
const unIgnoreInputClassNames = [
    "bytm-generic-btn", // BYTM's custom rounded buttons
    "bytm-btn", // default browser style buttons used by BYTM
];
/** Returns true, if the given element (`document.activeElement` by default) is an input element that should make BYTM ignore keypresses */
function isIgnoredInputElement(el) {
    if (!el)
        el = document.activeElement;
    if (!el)
        return false;
    const isIgnored = el !== document.body && ((ignoreInputTagNames.includes(el.tagName.toUpperCase()))
        || ignoreInputIds.includes(el.id)
        || ignoreInputClassNames.some((cls) => el.classList.contains(cls)));
    const isUnignored = unIgnoreInputClassNames.some((cls) => el.classList.contains(cls));
    return isIgnored && !isUnignored;
}
//#region arrow key skip
let sliderEl;
async function initArrowKeySkip() {
    addSelectorListener("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
        listener: (el) => sliderEl = el,
    });
    document.addEventListener("keydown", (evt) => {
        if (!getFeature("arrowKeySupport") || isIgnoredInputElement())
            return;
        if (["ArrowUp", "ArrowDown"].includes(evt.code) && getDomain() === "ytm")
            return handleVolumeKeyPress(evt);
        if (!["ArrowLeft", "ArrowRight"].includes(evt.code))
            return;
        const allowedClasses = ["bytm-generic-btn", "yt-spec-button-shape-next"];
        // discard the event when a (text) input is currently active, like when editing a playlist or writing a comment
        if (isIgnoredInputElement() && !allowedClasses.some((cls) => document.activeElement?.classList.contains(cls)))
            return info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);
        evt.preventDefault();
        evt.stopImmediatePropagation();
        let skipBy = getFeature("arrowKeySkipBy", featInfo.arrowKeySkipBy.default);
        if (evt.code === "ArrowLeft")
            skipBy *= -1;
        log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
        const vidElem = getVideoElement();
        if (vidElem && vidElem.readyState > 0)
            vidElem.currentTime = CoreUtils.clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
    });
    log("Added arrow key press listener");
}
function handleVolumeKeyPress(evt) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    if (!getVideoElement())
        return warn("Couldn't find video element, so the keypress is ignored");
    if (!sliderEl)
        return warn("Couldn't find volume slider element, so the keypress is ignored");
    const step = Number(sliderEl.step);
    const newVol = CoreUtils.clamp(Number(sliderEl.value)
        + (evt.code === "ArrowUp" ? 1 : -1)
            * CoreUtils.clamp((getFeature("arrowKeyVolumeStep", featInfo.arrowKeyVolumeStep.default)), isNaN(step) ? 5 : step, 100), 0, 100);
    if (newVol !== Number(sliderEl.value)) {
        sliderEl.value = String(newVol);
        sliderEl.dispatchEvent(new Event("change", { bubbles: true }));
        log(`Captured key '${evt.code}' - changed volume to ${newVol}%`);
    }
}
//#region frame skip
/** Initializes the feature that lets users skip by a frame with the period and comma keys while the video is paused */
async function initFrameSkip() {
    document.addEventListener("keydown", async (evt) => {
        if (!getFeature("frameSkip") || isIgnoredInputElement() || !["Comma", "Period"].includes(evt.code))
            return;
        const vid = getVideoElement();
        if (!vid || vid.readyState === 0)
            return warn("Could not find video element or it hasn't loaded yet, so the keypress is ignored");
        if (!getFeature("frameSkipWhilePlaying") && (vid.playbackRate === 0 || !vid.paused))
            return;
        evt.preventDefault();
        evt.stopImmediatePropagation();
        const newTime = vid.currentTime + getFeature("frameSkipAmount") * (evt.code === "Comma" ? -1 : 1);
        vid.currentTime = CoreUtils.clamp(newTime, 0, vid.duration);
        log(`Captured key '${evt.code}' and skipped to ${Math.floor(newTime / 60)}m ${(newTime % 60).toFixed(1)}s (${Math.floor(newTime * 1000 % 1000)}ms)`);
    });
    log("Added frame skip key press listener");
}
//#region num keys skip
const lastKeyPress = [0, ""];
/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
async function initNumKeysSkip() {
    document.addEventListener("keydown", async (e) => {
        const doublePressTime = getFeature("numKeysSkipToTimeDoublePress");
        if ((!getFeature("numKeysSkipToTime") && (getDomain() === "ytm" || (getDomain() === "yt" && doublePressTime === 0))) || isIgnoredInputElement())
            return;
        if (!e.key.trim().match(/^[0-9]$/))
            return;
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
                if (!vidTimeIsClose && !vidTimeAtStartOrEnd)
                    return;
            }
            if (Date.now() - lastKeyPress[0] > doublePressTime) {
                lastKeyPress[0] = Date.now();
                lastKeyPress[1] = e.key;
                if (!vidTimeIsClose && !vidTimeAtStartOrEnd)
                    return;
            }
        }
        else if (getDomain() === "yt")
            return; // no need to override default behavior if not for the double-press guard
        if (!vidElem || vidElem.readyState === 0)
            return warn("Could not find video element, so the keypress is ignored");
        if (!isNaN(newVidTime)) {
            log(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
            vidElem.currentTime = newVidTime;
        }
    }, { capture: true });
    log("Added number key press listener");
}//#region init
async function initHotkeys() {
    const promises = [];
    if (getDomain() === "ytm")
        promises.push(initLyricsHotkey());
    promises.push(initLikeDislikeHotkeys());
    promises.push(initSiteSwitch());
    promises.push(initProxyHotkeys());
    promises.push(initSkipToRemTimeHotkey());
    promises.push(initSearchBarHotkeys());
    return await Promise.allSettled(promises);
}
//#region utils
/** Checks whether the given keyboard event matches the given hotkey object. */
function hotkeyMatches(evt, hk) {
    if (typeof hk !== "object" || typeof hk.code !== "string")
        return false;
    return evt.code === hk.code
        && evt.shiftKey === hk.shift
        && evt.ctrlKey === hk.ctrl
        && evt.altKey === hk.alt;
}
/** Prevents bubbling and the default action of the given event. */
function preventBubble(evt) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
}
//#region site switch
/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;
let siteSwitchEnabled = true;
/** Initializes the site switch feature */
async function initSiteSwitch() {
    const domain = getDomain();
    document.addEventListener("keydown", (e) => {
        if (!getFeature("switchBetweenSites"))
            return;
        if (isIgnoredInputElement())
            return;
        if (siteSwitchEnabled) {
            if (hotkeyMatches(e, getFeature("switchSitesNewTabHotkey")))
                switchSite(domain === "yt" ? "ytm" : "yt", true);
            else if (hotkeyMatches(e, getFeature("switchSitesHotkey")))
                switchSite(domain === "yt" ? "ytm" : "yt");
        }
    }, { capture: true });
    siteEvents.on("hotkeyInputActive", (hkInputActive) => {
        if (!getFeature("switchBetweenSites"))
            return;
        siteSwitchEnabled = !hkInputActive;
    });
    log("Initialized site switch listener");
}
/** Switches to the other site (between YT and YTM) */
async function switchSite(newDomain, inNewTab = false) {
    try {
        if (!(["/watch", "/playlist"].some(v => location.pathname.startsWith(v))))
            return warn("Not on a supported page, so the site switch is ignored");
        let subdomain;
        if (newDomain === "ytm")
            subdomain = "music";
        else if (newDomain === "yt")
            subdomain = "www";
        if (!subdomain)
            throw new Error(`Unrecognized domain '${newDomain}'`);
        enableDiscardBeforeUnload();
        const { pathname, search, hash } = new URL(location.href);
        const time = await getVideoTime(0);
        log(`Found video time of ${time} seconds`);
        const cleanSearch = search.split("&")
            .filter((param) => !param.match(/^\??(t|time_continue)=/))
            .join("&");
        const newSearch = typeof time === "number" && time > videoTimeThreshold ?
            cleanSearch.includes("?")
                ? `${cleanSearch.startsWith("?")
                    ? cleanSearch
                    : "?" + cleanSearch}&time_continue=${time}`
                : `?time_continue=${time}`
            : cleanSearch;
        const newUrl = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;
        info(`Switching to domain '${newDomain}' at ${newUrl}`);
        if (inNewTab)
            UserUtils.openInNewTab(newUrl, true);
        else
            location.assign(newUrl);
    }
    catch (err) {
        error("Error while switching site:", err);
    }
}
//#region like/dislike
async function initLikeDislikeHotkeys() {
    document.addEventListener("keydown", (e) => {
        if (!getFeature("likeDislikeHotkeys"))
            return;
        if (isIgnoredInputElement())
            return;
        const { likeBtn, dislikeBtn, likeState } = getLikeDislikeBtns();
        if (hotkeyMatches(e, getFeature("likeHotkey"))) {
            preventBubble(e);
            if (!getFeature("likeDislikeHotkeysToggle") && likeState === "LIKE")
                return;
            likeBtn?.click();
        }
        else if (hotkeyMatches(e, getFeature("dislikeHotkey"))) {
            preventBubble(e);
            if (!getFeature("likeDislikeHotkeysToggle") && likeState === "DISLIKE")
                return;
            dislikeBtn?.click();
        }
    }, { capture: true });
}
//#region lyrics
async function initLyricsHotkey() {
    document.addEventListener("keydown", (e) => {
        if (!getFeature("currentLyricsHotkeyEnabled"))
            return;
        if (isIgnoredInputElement())
            return;
        if (hotkeyMatches(e, getFeature("currentLyricsHotkey")) && location.pathname.startsWith("/watch")) {
            preventBubble(e);
            const lyricsBtn = document.getElementById("bytm-player-bar-lyrics-btn");
            lyricsBtn?.click();
        }
    }, { capture: true });
}
//#region skip to remembered
async function initSkipToRemTimeHotkey() {
    document.addEventListener("keydown", async (e) => {
        if (!getFeature("skipToRemTimeHotkeyEnabled"))
            return;
        if (isIgnoredInputElement())
            return;
        if (hotkeyMatches(e, getFeature("skipToRemTimeHotkey"))) {
            preventBubble(e);
            await remTimeTryRestoreTime(true);
        }
    }, { capture: true });
}
//#region search bar
async function initSearchBarHotkeys() {
    const getSearchBarInput = () => document.querySelector(getDomain() === "ytm"
        ? "ytmusic-search-box input"
        : "yt-searchbox input");
    const checkFocusHotkey = (e) => {
        if (isIgnoredInputElement() || !getFeature("focusSearchBarHotkeyEnabled"))
            return;
        preventBubble(e);
        getSearchBarInput()?.focus();
        log("Focused on the search bar");
    };
    const checkClearHotkey = (e) => {
        if (!getFeature("clearSearchBarHotkeyEnabled"))
            return;
        preventBubble(e);
        const inputEl = getSearchBarInput();
        if (inputEl) {
            inputEl.value = "";
            inputEl.dispatchEvent(new Event("input", { bubbles: true }));
        }
    };
    document.addEventListener("keydown", (e) => {
        hotkeyMatches(e, getFeature("focusSearchBarHotkey")) && checkFocusHotkey(e);
        hotkeyMatches(e, getFeature("clearSearchBarHotkey")) && checkClearHotkey(e);
    }, {
        capture: true, // ensure precedence over YTM's own listeners
    });
}
let lastProxyHkTime = 0;
/** All proxy hotkey groups, identified by the feature key that toggles them off or on */
const proxyHotkeys = {
    rebindNextAndPrevious: [
        {
            hkFeatKey: "nextHotkey",
            preventKey: "KeyJ",
            domains: ["ytm"],
            onPress: () => dispatchProxyKey({
                code: "KeyJ",
                key: "j",
                keyCode: 74,
                which: 74,
            }),
        },
        {
            hkFeatKey: "previousHotkey",
            preventKey: "KeyK",
            domains: ["ytm"],
            onPress: () => dispatchProxyKey({
                code: "KeyK",
                key: "k",
                keyCode: 75,
                which: 75,
            }),
        },
    ],
    rebindPlayPause: [
        {
            hkFeatKey: "playPauseHotkey",
            preventKey: "Space",
            domains: ["ytm"],
            onPress: () => dispatchProxyKey({
                code: "Space",
                key: " ",
                keyCode: 32,
                which: 32,
            }),
        },
    ],
    themeSongVisualizerHotkeyEnabled: [
        {
            hkFeatKey: "themeSongVisualizerHotkey",
            domains: ["ytm"],
            onPress: (e) => {
                const toggleEl = document.querySelector("#ts-visualizer-toggle");
                if (toggleEl) {
                    preventBubble(e);
                    toggleEl.click();
                }
            },
        },
    ],
};
/** Handles all proxy hotkeys, which trigger other hotkeys instead of their own actions */
async function initProxyHotkeys() {
    document.addEventListener("keydown", (e) => {
        if (isIgnoredInputElement())
            return;
        for (const [featKey, proxyGroup] of Object.entries(proxyHotkeys)) {
            if (getFeature(featKey) !== true)
                continue;
            for (const { hkFeatKey, onPress, domains, ...rest } of proxyGroup) {
                if (!domains.includes(getDomain()))
                    continue;
                const nowTs = Date.now();
                // prevent hotkeys from triggering each other:
                if (nowTs - lastProxyHkTime < 15) // (holding keys makes them repeat every ~30ms, so this buffer should be adequate)
                    continue;
                if ("preventKey" in rest && e.code === rest.preventKey)
                    preventBubble(e);
                if (hotkeyMatches(e, getFeature(hkFeatKey))) {
                    lastProxyHkTime = nowTs;
                    !e.defaultPrevented && e.preventDefault();
                    e.bubbles && e.stopImmediatePropagation();
                    onPress(e);
                }
            }
        }
    }, {
        // ensure precedence over the page's own listeners:
        capture: true,
    });
}
function dispatchProxyKey(hkProps) {
    document.body.dispatchEvent(new KeyboardEvent("keydown", {
        ...hkProps,
        bubbles: true,
        cancelable: true,
        // see https://github.com/Sv443/BetterYTM/issues/18
        view: UserUtils.getUnsafeWindow(),
    }));
    log("Dispatched proxy hotkey:", hkProps);
}//#region Dark Reader
/** Disables Dark Reader if it is present */
async function disableDarkReader() {
    if (getFeature("disableDarkReaderSites") !== getDomain() && getFeature("disableDarkReaderSites") !== "all")
        return;
    const metaElem = document.createElement("meta");
    metaElem.name = "darkreader-lock";
    metaElem.id = "bytm-disable-dark-reader";
    document.head.appendChild(metaElem);
    info("Disabled Dark Reader");
}
//#region SponsorBlock
/** Fixes the z-index of the SponsorBlock panel */
async function fixSponsorBlock() {
    try {
        return addStyleFromResource("css-fix_sponsorblock");
    }
    catch (err) {
        error("Failed to fix SponsorBlock styling:", err);
    }
}
//#region ThemeSong
/** Adjust the BetterYTM styles if ThemeSong is ***not*** used */
async function fixPlayerPageTheming() {
    try {
        return addStyleFromResource("css-fix_playerpage_theming");
    }
    catch (err) {
        error("Failed to fix BetterYTM player page theming:", err);
    }
}
/** Sets the lightness of the theme color used by BYTM according to the configured lightness value */
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
    }
    catch (err) {
        error("Failed to set ThemeSong integration color lightness:", err);
    }
}
/** Sets the opacity of the ThemeSong visualizer according to the configured opacity value */
async function setThemeSongVisualizerOpacity() {
    if (!await addStyleFromResource("css-themesong_visualizer_opacity", (css) => css.replace("_INSERT_OPACITY_VALUE_", (getFeature("themeSongVisualizerOpacity") / 100).toFixed(2))))
        error("Couldn't add ThemeSong visualizer opacity style");
    else
        log("Set ThemeSong visualizer opacity to " + getFeature("themeSongVisualizerOpacity") + "%");
}const songListSelector = `\
ytmusic-playlist-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents
ytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents\
`;
/** Whether any song list item's checkbox is currently checked */
let isCheckboxChecked = false;
//#region init queue btns
/** Initializes the queue buttons */
async function initQueueButtons() {
    const multiSelectObs = new MutationObserver(() => {
        const multiSelectEl = document.querySelector("ytmusic-dialog[dialog-type=\"multiSelectMenuBar\"]");
        const newIsCheckboxChecked = Boolean(multiSelectEl) && !multiSelectEl?.hasAttribute("aria-hidden");
        if (newIsCheckboxChecked === isCheckboxChecked)
            return;
        isCheckboxChecked = newIsCheckboxChecked;
        const allSongLists = document.querySelectorAll(songListSelector);
        allSongLists.forEach((list) => {
            list.dataset.anyCheckboxChecked = String(isCheckboxChecked);
        });
    });
    multiSelectObs.observe(document.body, {
        childList: true,
        subtree: true,
        attributeFilter: ["dialog-type", "aria-hidden"],
    });
    /** Tries to add queue buttons to the current song queue items on the /watch page. */
    const tryAddCurrentQueueBtns = (parentSelector) => {
        if (getFeature("listButtonsPlacement") !== "currentQueue" && getFeature("listButtonsPlacement") !== "everywhere")
            return;
        const parent = document.querySelector(parentSelector);
        if (!parent)
            return warn("Couldn't find current queue parent element to add queue buttons to");
        const queueItems = parent.querySelectorAll("ytmusic-player-queue-item");
        let amt = 0;
        for (const queueItm of queueItems) {
            if (!queueItm.classList.contains("bytm-has-queue-btns")) {
                addQueueButtons(queueItm, undefined, "currentQueue");
                amt++;
            }
        }
        if (amt > 0)
            log(`Added buttons to ${amt} new queue ${CoreUtils.autoPlural("item", amt)}`);
    };
    // current queue
    siteEvents.on("queueChanged", () => tryAddCurrentQueueBtns("ytmusic-player-queue #contents"));
    siteEvents.on("autoplayQueueChanged", () => tryAddCurrentQueueBtns("ytmusic-player-queue #automix-contents"));
    const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
    if (queueItems.length > 0) {
        queueItems.forEach(itm => addQueueButtons(itm, undefined, "currentQueue"));
        log(`Added buttons to ${queueItems.length} existing "current song queue" ${CoreUtils.autoPlural("item", queueItems)}`);
    }
    /** Tries to add queue buttons to the items in generic song lists, like playlists, albums, artist pages, etc. */
    const tryAddGenericListQueueBtns = (listElem) => {
        const queueItems = listElem.querySelectorAll("ytmusic-responsive-list-item-renderer");
        if (queueItems.length === 0)
            return;
        let addedBtnsCount = 0;
        queueItems.forEach(itm => {
            if (itm.classList.contains("bytm-has-btns"))
                return;
            itm.classList.add("bytm-has-btns");
            addQueueButtons(itm, ".flex-columns", "genericList", ["bytm-generic-list-queue-btn-container"], "afterParent");
            addedBtnsCount++;
        });
        addedBtnsCount > 0 &&
            log(`Added buttons to ${addedBtnsCount} new "generic song list" ${CoreUtils.autoPlural("item", addedBtnsCount)} in list`, listElem);
    };
    const doSongListsChecks = (songLists) => {
        for (const list of songLists) {
            if (getFeature("listButtonsPlacement") === "everywhere" || getFeature("listButtonsPlacement") === "genericLists")
                tryAddGenericListQueueBtns(list);
            if (getFeature("swapLikeDislikeButtons"))
                checkSwapLikeDislikeBtns(list);
        }
    };
    addSelectorListener("body", songListSelector, {
        all: true,
        debounce: Math.floor(1000 / 6),
        listener: doSongListsChecks,
    });
    siteEvents.on("pathChanged", () => {
        const songLists = document.querySelectorAll(songListSelector);
        if (songLists.length > 0)
            doSongListsChecks(songLists);
    });
}
/** Checks if the like and dislike buttons exist in the given song list and swaps them if the feature is enabled. */
function checkSwapLikeDislikeBtns(songList) {
    if (!getFeature("swapLikeDislikeButtons"))
        return;
    songList.querySelectorAll("ytmusic-like-button-renderer #button-shape-dislike")
        .forEach((dislikeBtn) => {
        const parent = dislikeBtn.parentElement;
        if (!parent || parent.classList.contains("bytm-swapped-like-dislike"))
            return;
        const likeBtn = parent.querySelector("#button-shape-like");
        if (likeBtn) {
            parent.classList.add("bytm-swapped-like-dislike");
            transplantElement(dislikeBtn, likeBtn);
        }
    });
}
//#region add queue btns
/**
 * Adds the buttons to each item in the current song queue.
 * Also observes for changes to add new buttons to new items in the queue.
 * @param queueItem The element with tagname `ytmusic-player-queue-item` or `ytmusic-responsive-list-item-renderer` to add queue buttons to
 * @param listType The type of list the queue item is in
 * @param classes Extra CSS classes to apply to the container
 * @param insertPosition Where to insert the button container in relation to the parent element
 */
async function addQueueButtons(queueItem, containerParentSelector = ".song-info", listType = "currentQueue", classes = [], insertPosition = "child") {
    const queueBtnsCont = document.createElement("div");
    queueBtnsCont.classList.add(...["bytm-queue-btn-container", ...classes]);
    const [lyricsIconUrl, deleteIconUrl, spinnerIconUrl] = await Promise.all([
        "icon-lyrics",
        "icon-delete",
        "icon-spinner",
    ]
        .map((icon) => getResourceUrl(icon)));
    await UserUtils.preloadImages([lyricsIconUrl, deleteIconUrl, spinnerIconUrl]);
    //#region lyrics btn
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
        onInteraction(lyricsBtnElem, async (e) => {
            const thumbSrc = queueItem.querySelector("yt-img-shadow img")?.src;
            const isVideo = thumbSrc ? thumbSrc.includes("ytimg.com/vi/") : true;
            // TODO: if isVideo, use just the song title, not the artist name
            let song, artist;
            if (listType === "currentQueue") {
                const songInfo = queueItem.querySelector(".song-info");
                if (!songInfo)
                    return error("Couldn't find song info element in queue item", queueItem);
                const [songEl, artistEl] = songInfo.querySelectorAll("yt-formatted-string");
                song = songEl?.textContent;
                artist = artistEl?.textContent;
            }
            else if (listType === "genericList") {
                const songEl = queueItem.querySelector(".title-column yt-formatted-string a");
                let artistEl = null;
                if (location.pathname.startsWith("/playlist"))
                    artistEl = document.querySelector("ytmusic-detail-header-renderer .metadata .subtitle-container yt-formatted-string a");
                if (!artistEl || !artistEl.textContent)
                    artistEl = queueItem.querySelector(".secondary-flex-columns yt-formatted-string:first-child a");
                song = songEl?.textContent;
                artist = artistEl?.textContent;
                if (!artist) {
                    // new playlist design
                    artistEl = document.querySelector("ytmusic-responsive-header-renderer .strapline a.yt-formatted-string[href]");
                    artist = artistEl?.textContent;
                }
            }
            else
                return error("Invalid list type:", listType);
            // hate doing it like this but there's nothing else in the DOM indicating what format the title is in
            if (song && isVideo && song.includes("-")) {
                artist = song.split("-")[0]?.trim();
                song = song.split("-").slice(1).join("-").trim();
            }
            if (!song || !artist)
                return error("Couldn't get song or artist name from queue item - song:", song, "- artist:", artist);
            let lyricsUrl;
            const artistsSan = sanitizeArtists(artist);
            const songSan = sanitizeSong(song);
            const splitTitle = splitVideoTitle(songSan);
            const cachedLyricsEntry = songSan.includes("-")
                ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song)
                : getLyricsCacheEntry(artistsSan, songSan);
            e.preventDefault();
            e.stopImmediatePropagation();
            if (cachedLyricsEntry)
                lyricsUrl = resolveLyricsUrl(cachedLyricsEntry.path);
            else if (!queueItem.hasAttribute("data-bytm-loading")) {
                const imgEl = lyricsBtnElem?.querySelector("img, svg");
                if (!cachedLyricsEntry) {
                    queueItem.setAttribute("data-bytm-loading", "");
                    if (imgEl) {
                        if (imgEl.tagName === "IMG") {
                            imgEl.src = await getResourceUrl("icon-spinner");
                            imgEl?.classList.add("bytm-spinner");
                        }
                        else if (lyricsBtnElem) {
                            setInnerHtml(lyricsBtnElem, await resourceAsString("icon-spinner"));
                            lyricsBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img", "bytm-spinner");
                        }
                    }
                }
                const cachedPath = cachedLyricsEntry?.path;
                lyricsUrl = cachedPath
                    ? resolveLyricsUrl(cachedPath)
                    : await fetchLyricsUrlTop(artistsSan, songSan);
                if (lyricsUrl) {
                    emitInterface("bytm:lyricsLoaded", {
                        type: "queue",
                        artists: artist,
                        title: song,
                        url: lyricsUrl,
                    });
                }
                if (lyricsBtnElem)
                    lyricsBtnElem.dataset.state = lyricsUrl ? "ready" : "error";
                const resetImgElem = async () => {
                    if (imgEl) {
                        if (imgEl.tagName === "IMG") {
                            imgEl.src = lyricsIconUrl;
                            imgEl?.classList.remove("bytm-spinner");
                        }
                        else if (lyricsBtnElem) {
                            setInnerHtml(lyricsBtnElem, await resourceAsString("icon-lyrics"));
                            lyricsBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
                        }
                    }
                };
                if (!cachedLyricsEntry) {
                    queueItem.removeAttribute("data-bytm-loading");
                    // so the new image doesn't "blink"
                    setTimeout(() => resetImgElem(), 100);
                }
                if (!lyricsUrl) {
                    resetImgElem();
                    if (await showPrompt({ type: "confirm", message: t("lyrics_not_found_confirm_open_search") }))
                        openInTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
                    return;
                }
            }
            lyricsUrl && openInTab(lyricsUrl);
        }, {
            capture: true,
        });
    }
    //#region delete btn
    let deleteBtnElem;
    if (getFeature("deleteFromQueueButton")) {
        deleteBtnElem = document.createElement("a");
        deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("remove_from_queue") : t("delete_from_list"));
        deleteBtnElem.classList.add("ytmusic-player-bar", "bytm-delete-from-queue", "bytm-generic-btn", "bytm-song-list-item-btn");
        deleteBtnElem.role = "button";
        deleteBtnElem.tabIndex = 0;
        deleteBtnElem.style.visibility = "initial";
        const delImgElem = document.createElement("img");
        delImgElem.classList.add("bytm-generic-btn-img");
        delImgElem.src = deleteIconUrl;
        onInteraction(deleteBtnElem, async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            delImgElem.src = spinnerIconUrl;
            delImgElem.classList.add("bytm-spinner");
            // container of the queue item popup menu - element gets reused for every queue item
            let queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
            try {
                // three dots button to open the popup menu of a queue item
                const dotsBtnElem = queueItem.querySelector("ytmusic-menu-renderer yt-button-shape[id=\"button-shape\"] button");
                if (dotsBtnElem) {
                    if (queuePopupCont)
                        queuePopupCont.setAttribute("data-bytm-hidden", "true");
                    dotsBtnElem.click();
                }
                else {
                    info("Couldn't find three dots button in queue item, trying to open the context menu manually");
                    queueItem.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: false }));
                }
                queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                queuePopupCont?.setAttribute("data-bytm-hidden", "true");
                await CoreUtils.pauseFor(15);
                delImgElem.src = deleteIconUrl;
                delImgElem.classList.remove("bytm-spinner");
                const removeFromQueueOrPlaylistBtn = queuePopupCont?.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
                const removeFromQueueBtnOptional = queuePopupCont?.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(4)");
                let removeFromQueueBtn;
                // in regular queues, the 3rd item is "remove from queue"
                // in playlists, the 3rd item is "remove from playlist", and the 4th item is "remove from queue"
                if (removeFromQueueBtnOptional && removeFromQueueBtnOptional?.previousElementSibling === removeFromQueueOrPlaylistBtn)
                    removeFromQueueBtn = removeFromQueueBtnOptional;
                else if (removeFromQueueOrPlaylistBtn)
                    removeFromQueueBtn = removeFromQueueOrPlaylistBtn;
                removeFromQueueBtn?.click();
                // queue items aren't removed automatically outside of the current queue
                if (removeFromQueueBtn && listType === "genericList") {
                    await CoreUtils.pauseFor(200);
                    clearInner(queueItem);
                    queueItem.remove();
                }
                if (!removeFromQueueBtn) {
                    error("Couldn't find 'remove from queue' button in queue item three dots menu.\nPlease make sure all autoplay restrictions on your browser's side are disabled for this page.");
                    dotsBtnElem?.click();
                    delImgElem.src = await getResourceUrl("icon-error");
                    if (deleteBtnElem)
                        deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("couldnt_remove_from_queue") : t("couldnt_delete_from_list"));
                }
            }
            catch (err) {
                error("Couldn't remove song from queue due to error:", err);
            }
            finally {
                queuePopupCont?.removeAttribute("data-bytm-hidden");
            }
        });
        deleteBtnElem.appendChild(delImgElem);
    }
    lyricsBtnElem && queueBtnsCont.appendChild(createRipple(lyricsBtnElem));
    deleteBtnElem && queueBtnsCont.appendChild(createRipple(deleteBtnElem));
    const parentEl = queueItem.querySelector(containerParentSelector);
    if (insertPosition === "child")
        parentEl?.appendChild(queueBtnsCont);
    else if (insertPosition === "beforeParent")
        parentEl?.before(queueBtnsCont);
    else if (insertPosition === "afterParent")
        parentEl?.after(queueBtnsCont);
    queueItem.classList.add("bytm-has-queue-btns");
}
//#region track numbers
/** Adds track numbers to each item in every song list */
async function addTrackNumbers() {
    (async () => {
        const promises = [];
        try {
            const where = getFeature("songListTrackNumbers");
            if (where === "genericLists" || where === "everywhere")
                promises.push(addStyleFromResource("css-track_numbers_song_lists"));
            if (where === "currentQueue" || where === "everywhere")
                promises.push(addStyleFromResource("css-track_numbers_current_queue"));
        }
        catch (err) {
            error("Couldn't add track numbers style:", err);
        }
        await Promise.allSettled(promises);
    })();
}//#region misc
class ExampleError extends CoreUtils.DatedError {
    constructor(message, options) {
        super(message, options);
        this.name = "ExampleError";
    }
}
//#region adornments
/** Decoration elements that can be added next to the label */
const adornments = {
    /** Indicates that the feature is important and should be used with caution. */
    alert: async (title) => await getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\"", title),
    /** Indicates that the feature is experimental and may be unstable. */
    experimental: async () => await getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental", undefined, t("experimental_feature")),
    /** Indicates that the feature only works on YT Music. */
    ytmOnly: async () => await getAdornHtml("bytm-ytm-only-icon", t("feature_only_works_on_ytm"), "icon-ytm", undefined, t("feature_only_works_on_ytm")),
    /** Indicates that the feature relates to language, as a language-independent way to find the translation option. */
    globe: async () => await getAdornHtml("bytm-locale-icon", undefined, "icon-globe_small"),
    /** Indicates that changing this feature requires a page reload to take effect. */
    reload: async () => getFeature("advancedMode") ? await getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload", undefined, t("feature_requires_reload")) : undefined,
    /** Indicates that the feature is only configurable in advanced mode. */
    advanced: async () => await getAdornHtml("bytm-advanced-mode-icon", t("advanced_feature"), "icon-advanced_mode", undefined, t("advanced_feature")),
    /** Don't use directly - gets added automatically for features with a `since` property matching the current version, and a session count below {@linkcode newFeatureAdornmentMaxSessionCount} to indicate the feature was recently added. */
    newFeature: async () => await getAdornHtml("bytm-new-feature-icon", t("feature_is_new"), "icon-new", undefined, t("feature_is_new")),
};
/** Order of adornment elements in the {@linkcode combineAdornments()} function - lowest value first. */
const adornmentOrder = new Map([
    [adornments.alert, 0],
    [adornments.experimental, 1],
    [adornments.ytmOnly, 2],
    [adornments.globe, 3],
    [adornments.reload, 4],
    [adornments.advanced, 5],
    [adornments.newFeature, 6],
]);
/** Creates an HTML string for the given adornment properties */
async function getAdornHtml(className, title, resource, extraAttributes, clickDialogText) {
    title = title ? await CoreUtils.consumeStringGen(title) : undefined;
    extraAttributes = extraAttributes ? await CoreUtils.consumeStringGen(extraAttributes) : undefined;
    const id = CoreUtils.randomId(8, 36);
    if (clickDialogText) {
        siteEvents.once("cfgMenuMounted", () => {
            const elem = document.getElementById(`bytm-adornment-${id}`);
            if (!elem)
                return;
            elem.addEventListener("click", () => showPrompt({
                type: "alert",
                message: String(clickDialogText),
            }));
        });
    }
    return `<span id="bytm-adornment-${id}" class="${className} bytm-adorn-icon" ${title ? `title="${title}" aria-label="${title}"` : ""}${extraAttributes ? ` ${extraAttributes}` : ""}>${await resourceAsString(resource) ?? ""}</span>`;
}
/**
 * Resolves the adornments property from a {@linkcode featInfo} entry and returns an array of HTML strings.
 * Also adds conditional adornments like the "new feature" adornment.
 */
async function resolveAdornments(ftInfo, featKey) {
    const feat = ftInfo[featKey];
    let adorns = feat.adornments;
    if (typeof adorns === "function")
        adorns = adorns();
    const isDev = mode$1 === "development";
    const resolvedAdorns = adorns ? [...adorns] : [];
    if (feat.since && compareVersions.compare(feat.since, scriptInfo$1.version, isDev ? ">" : ">=") && (getVersionSessionCount() < newFeatureAdornmentMaxSessionCount || isDev))
        resolvedAdorns.push(adornments.newFeature);
    const sortedAdorns = resolvedAdorns.sort((a, b) => {
        const aIdx = adornmentOrder.has(a) ? adornmentOrder.get(a) : 0;
        const bIdx = adornmentOrder.has(b) ? adornmentOrder.get(b) : 0;
        return aIdx - bIdx;
    });
    const htmlStrings = await Promise.all(sortedAdorns.map(adorn => typeof adorn === "function" ? adorn() : adorn));
    return htmlStrings.filter(Boolean);
}
const removeEmoji = (str) => str.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, "").trim();
/** Common options for config items of type "select" */
const options = {
    siteSelection: () => [
        { value: "all", label: t("site_selection_both_sites") },
        { value: "yt", label: t("site_selection_only_yt") },
        { value: "ytm", label: t("site_selection_only_ytm") },
    ],
    siteSelectionOrNone: () => [
        { value: "all", label: t("site_selection_both_sites") },
        { value: "yt", label: t("site_selection_only_yt") },
        { value: "ytm", label: t("site_selection_only_ytm") },
        { value: "none", label: t("site_selection_none") },
    ],
    locale: () => Object.entries(localesJson)
        .reduce((a, [locale, { name, emoji }]) => ([...a, {
            value: locale,
            label: `${emoji} ${name}`,
        }]), [])
        .sort((a, b) => removeEmoji(a.label).localeCompare(removeEmoji(b.label))),
    colorLightness: () => [
        { value: "darker", label: t("color_lightness.darker") },
        { value: "normal", label: t("color_lightness.normal") },
        { value: "lighter", label: t("color_lightness.lighter") },
    ],
    thumbOverlaySources: () => [
        { value: "am", label: t("thumbnail_overlay.source_am") },
        { value: "yt", label: t("thumbnail_overlay.source_yt") },
    ],
    songListType: () => [
        { value: "currentQueue", label: t("list_button_placement_queue_only") },
        { value: "genericLists", label: t("list_button_placement_generic_lists") },
        { value: "everywhere", label: t("list_button_placement_everywhere") },
    ],
};
//#region # features
/** List of categories that are related to each other and can be grouped together in the config menu. */
const groupedCategories = [
    ["general", "layout", "songLists", "lyrics", "volume"],
    ["behavior", "autoLike", "input", "hotkeys"],
    ["integrations", "plugins"],
];
/**
 * Contains all possible features with their default values and other configuration.
 *
 * **Required props:**
 * <!--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property:                      | Description:                                                                                                                        |
 * | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
 * | `type: string`                 | Type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`.                         |
 * | `category: string`             | Category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`.                                            |
 * | `group: string`                | Shared group name for features related to each other - usually the name of the "main feature". Is used to group features in the config menu - don't use a single group across multiple categories! |
 * | `supportedSites: Domain[]`     | On which sites the feature is active - values can be `"yt"` or `"ytm"`.                                                             |
 * | `since: string`                | Semver version since when this feature key was added - adds a "new" adornment to the config menu item for a while.                  |
 * | `default: unknown`             | Default value of the feature - type of the value depends on the given `type`.                                                       |
 * <!--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 *
 *
 * **Optional props:**
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property:                                                          | Description:                                                                                                                                        |
 * | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------|
 * | `change(key: string, prevValue: unknown, newValue: unknown): void` | Function that will be called when the value is changed - can be used for any feature type to react to value changes at runtime.                     |
 * | `click(): void`                                                    | For type `button` only - function that will be called when the button is clicked.                                                                   |
 * | `helpText: string \| () => string`                                 | If undefined, translation with key `feature_helptext.<featKey>` will be used. If set, needs to be a function that returns an HTML string or the literal string itself that will be the help text for this feature - this is useful for pluralizing or inserting values into the translation at runtime. |
 * | `adornments: AdornFunc[] \| (() => AdornFunc[])`                   | Array of functions that return HTML strings that will be prepended to the label of the feature in the config menu - used to add icons.              |
 * | `unit: string \| (val: number) => string`                          | For types `number` or `slider` only - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added too! |
 * | `min: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `min` property of the HTML input element.                                       |
 * | `max: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `max` property of the HTML input element.                                       |
 * | `step: number`                                                     | For types `number` or `slider` only - Overwrites the default of the `step` property of the HTML input element.                                      |
 * | `options: SelectOption[] \| () => SelectOption[]`                  | For type `select` only - function that returns an array of objects with `value` and `label` properties.                                             |
 * | `reloadRequired: boolean`                                          | If true (default), the page needs to be reloaded for the changes to take effect.                                                                     |
 * | `advanced: boolean`                                                | If true, the feature will only be shown if the advanced mode feature has been turned on.                                                            |
 * | `hidden: boolean`                                                  | If true, the feature will not be shown in the settings - default is undefined (false).                                                              |
 * | `valueHidden: boolean`                                             | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false).                       |
 * | `normalize(val: unknown): unknown`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations.                    |
 * | `renderValue(val: string): string`                                 | If provided, is used to render the value's label in the config menu.                                                                                |
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 */
const featInfo = {
    //#region cat:general
    locale: {
        type: "select",
        category: "general",
        group: "locale",
        supportedSites: ["ytm", "yt"],
        since: "1.0.0",
        options: options.locale,
        default: getPreferredLocale(),
        adornments: [adornments.globe, adornments.reload],
    },
    localeFallback: {
        type: "toggle",
        category: "general",
        group: "locale",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        default: true,
        advanced: true,
        adornments: [adornments.advanced, adornments.reload],
    },
    initTimeout: {
        type: "number",
        category: "general",
        group: "bytmInternal",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        min: mode$1 === "development" ? 100 : 1000,
        max: 10000,
        default: 3000,
        step: 100,
        unit: "ms",
        advanced: true,
        adornments: [adornments.advanced, adornments.reload],
    },
    defaultObserverDebounce: {
        type: "number",
        category: "general",
        group: "bytmInternal",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        min: 10,
        default: 150,
        max: 1000,
        step: 5,
        unit: "ms",
        advanced: true,
        adornments: [adornments.advanced, adornments.reload],
    },
    versionCheck: {
        type: "toggle",
        category: "general",
        group: "versionCheck",
        supportedSites: ["ytm", "yt"],
        since: "1.1.0",
        default: true,
        adornments: [adornments.reload],
    },
    checkVersionNow: {
        type: "button",
        category: "general",
        group: "versionCheck",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        click: () => doVersionCheck(true),
    },
    numbersFormat: {
        type: "select",
        category: "general",
        group: "numbersFormat",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        options: () => [
            { value: "long", label: `${formatNumber(12345678, "long")} (${t("votes_format_long")})` },
            { value: "short", label: `${formatNumber(12345678, "short")} (${t("votes_format_short")})` },
        ],
        default: "short",
        reloadRequired: false,
    },
    toastDuration: {
        type: "slider",
        category: "general",
        group: "toasts",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        min: 0,
        max: 15,
        default: 4,
        step: 0.5,
        renderValue: (val) => Number(val) === 0 ? t("toggled_off") : `${val}s`,
        reloadRequired: false,
        change: (newVal) => newVal === 0
            ? closeToast()
            : showIconToast({
                message: t("example_toast"),
                iconSrc: getResourceUrl(`img-logo${mode$1 === "development" ? "_dev" : ""}`),
            }).then(() => getFeature("toastDuration") === 0 ? closeToast() : void 0),
    },
    showToastOnGenericError: {
        type: "toggle",
        category: "general",
        group: "toasts",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0-preview.1",
        default: true,
        advanced: true,
        reloadRequired: false,
        adornments: [adornments.advanced],
        change: (newVal) => newVal ? error("Test error", new ExampleError("Example")) : void 0,
    },
    resetConfig: {
        type: "button",
        category: "general",
        group: "resetData",
        supportedSites: ["ytm", "yt"],
        since: "3.0.0",
        click: promptResetConfig,
        adornments: [adornments.reload],
    },
    resetEverything: {
        type: "button",
        category: "general",
        group: "resetData",
        supportedSites: ["ytm", "yt"],
        since: "2.2.0",
        click: async () => {
            if (await showPrompt({
                type: "confirm",
                message: t("reset_everything_confirm"),
            })) {
                await getDSSerializer(true).resetStoresData();
                const gmKeys = await GM.listValues();
                await Promise.allSettled(gmKeys.map(key => GM.deleteValue(key)));
                await reloadTab();
            }
        },
        advanced: true,
        adornments: [adornments.advanced, adornments.reload],
    },
    logLevel: {
        type: "select",
        category: "general",
        group: "logging",
        supportedSites: ["ytm", "yt"],
        since: "1.0.0",
        options: () => [
            { value: LogLevel.Debug, label: t("log_level_debug") },
            { value: LogLevel.Info, label: t("log_level_info") },
        ],
        default: LogLevel.Info,
        advanced: true,
        adornments: [adornments.advanced, adornments.reload],
    },
    logEvents: {
        type: "toggle",
        category: "general",
        group: "logging",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: mode$1 === "development",
        advanced: true,
        adornments: [adornments.advanced, adornments.reload],
    },
    logHttp: {
        type: "toggle",
        category: "general",
        group: "logging",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: mode$1 === "development",
        advanced: true,
        adornments: [adornments.advanced, adornments.reload],
    },
    advancedMode: {
        type: "toggle",
        category: "general",
        group: "advancedMode",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        default: false,
        change: (newVal, initVal) => initVal !== newVal && emitSiteEvent("recreateCfgMenu"),
    },
    //#region cat:layout
    watermarkEnabled: {
        type: "toggle",
        category: "layout",
        group: "watermarkEnabled",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    removeShareTrackingParam: {
        type: "toggle",
        category: "layout",
        group: "removeShareTrackingParam",
        supportedSites: ["ytm", "yt"],
        since: "1.0.0",
        default: true,
        adornments: [adornments.reload],
    },
    removeShareTrackingParamSites: {
        type: "select",
        category: "layout",
        group: "removeShareTrackingParam",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        options: options.siteSelection,
        default: "all",
        advanced: true,
        reloadRequired: false,
        adornments: [adornments.advanced],
    },
    fixSpacing: {
        type: "toggle",
        category: "layout",
        group: "fixLayout",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        advanced: true,
        adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
    },
    truncatePlayerBarSubtitles: {
        type: "toggle",
        category: "layout",
        group: "fixLayout",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    thumbnailOverlayBehavior: {
        type: "select",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "2.0.0",
        options: () => [
            { value: "songsOnly", label: t("thumbnail_overlay.behavior_songs_only") },
            { value: "videosOnly", label: t("thumbnail_overlay.behavior_videos_only") },
            { value: "always", label: t("thumbnail_overlay.behavior_always") },
            { value: "never", label: t("thumbnail_overlay.behavior_never") },
        ],
        default: "songsOnly",
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    thumbnailOverlayToggleBtnShown: {
        type: "toggle",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    thumbnailOverlayITunesImgRes: {
        type: "slider",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: 2000,
        min: 100,
        max: 3000,
        step: 100,
        renderValue: (n) => `${n}x${n}`,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    thumbnailOverlayAlbumArtCacheMaxSize: {
        type: "slider",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: 10000,
        min: 500,
        max: 25000,
        step: 500,
        unit: (val) => ` ${tp("unit_entries", val)}`,
        renderValue: (val) => formatNumber(Number(val), "long"),
        reloadRequired: false,
        advanced: true,
        adornments: [adornments.advanced, adornments.ytmOnly],
    },
    thumbnailOverlayAlbumArtCacheTTL: {
        type: "slider",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: 30,
        min: 5,
        max: 100,
        step: 1,
        unit: (val) => ` ${tp("unit_days", val)}`,
        renderValue: (val) => formatNumber(Number(val), "long"),
        reloadRequired: false,
        advanced: true,
        adornments: [adornments.advanced, adornments.ytmOnly],
    },
    thumbnailOverlayShowIndicator: {
        type: "toggle",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    thumbnailOverlayIndicatorOpacity: {
        type: "slider",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "2.0.0",
        min: 5,
        max: 100,
        step: 5,
        default: 25,
        unit: "%",
        advanced: true,
        adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
    },
    thumbnailOverlayPreferredSource: {
        type: "select",
        category: "layout",
        group: "thumbnailOverlay",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: "am",
        options: options.thumbOverlaySources,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    fixHdrIssues: {
        type: "toggle",
        category: "layout",
        group: "fixHdrIssues",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: true,
        advanced: true,
        adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
    },
    showVotes: {
        type: "toggle",
        category: "layout",
        group: "votes",
        supportedSites: ["ytm"],
        since: "2.1.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    swapLikeDislikeButtons: {
        type: "toggle",
        category: "layout",
        group: "votes",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: false,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    watchPageFullSize: {
        type: "toggle",
        category: "layout",
        group: "watchPageFullSize",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    //#region cat:song lists
    lyricsQueueButton: {
        type: "toggle",
        category: "songLists",
        group: "queueButtons",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    deleteFromQueueButton: {
        type: "toggle",
        category: "songLists",
        group: "queueButtons",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    listButtonsPlacement: {
        type: "select",
        category: "songLists",
        group: "queueButtons",
        supportedSites: ["ytm"],
        since: "1.1.0",
        options: options.songListType,
        default: "everywhere",
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    scrollToActiveSongBtn: {
        type: "toggle",
        category: "songLists",
        group: "aboveQueueButtons",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    clearQueueBtn: {
        type: "toggle",
        category: "songLists",
        group: "aboveQueueButtons",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    aboveQueueBtnsSticky: {
        type: "toggle",
        category: "songLists",
        group: "aboveQueueButtons",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: true,
        advanced: true,
        adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
    },
    songListTrackNumbersEnabled: {
        type: "toggle",
        category: "songLists",
        group: "songListTrackNumbers",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    songListTrackNumbers: {
        type: "select",
        category: "songLists",
        group: "songListTrackNumbers",
        supportedSites: ["ytm"],
        since: "3.1.0",
        options: options.songListType,
        default: "genericLists",
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    //#region cat:lyrics
    geniusLyrics: {
        type: "toggle",
        category: "lyrics",
        group: "geniusLyrics",
        supportedSites: ["ytm"],
        since: "0.2.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    errorOnLyricsNotFound: {
        type: "toggle",
        category: "lyrics",
        group: "geniusLyrics",
        supportedSites: ["ytm"],
        since: "2.1.0-preview.1",
        default: false,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    geniUrlBase: {
        type: "text",
        category: "lyrics",
        group: "geniURL",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: "https://api.sv443.net/geniurl",
        normalize: (val) => val.trim().replace(/\/+$/, ""),
        advanced: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly, adornments.advanced],
    },
    geniUrlToken: {
        type: "text",
        category: "lyrics",
        group: "geniURL",
        supportedSites: ["ytm"],
        since: "2.0.0",
        valueHidden: true,
        default: "",
        normalize: (val) => val.trim(),
        advanced: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly, adornments.advanced],
    },
    lyricsCacheMaxSize: {
        type: "slider",
        category: "lyrics",
        group: "lyricsCache",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: 10000,
        min: 1000,
        max: 25000,
        step: 500,
        unit: (val) => ` ${tp("unit_entries", val)}`,
        renderValue: (val) => formatNumber(Number(val), "long"),
        advanced: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly, adornments.advanced],
    },
    lyricsCacheTTL: {
        type: "slider",
        category: "lyrics",
        group: "lyricsCache",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: 30,
        min: 5,
        max: 100,
        step: 1,
        unit: (val) => ` ${tp("unit_days", val)}`,
        renderValue: (val) => formatNumber(Number(val), "long"),
        advanced: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly, adornments.advanced],
    },
    clearLyricsCache: {
        type: "button",
        category: "lyrics",
        group: "lyricsCache",
        supportedSites: ["ytm"],
        since: "2.0.0",
        async click() {
            const entries = getLyricsCache().length;
            const formattedEntries = entries.toLocaleString(getLocale(), { style: "decimal", maximumFractionDigits: 0 });
            if (await showPrompt({ type: "confirm", message: tp("lyrics_clear_cache_confirm_prompt", entries, formattedEntries) })) {
                await clearLyricsCache();
                await showPrompt({ type: "alert", message: t("lyrics_clear_cache_success") });
            }
        },
        advanced: true,
        adornments: [adornments.ytmOnly, adornments.advanced],
    },
    //#region cat:volume
    volumeSliderExponential: {
        type: "select",
        category: "volume",
        group: "volumeSlider",
        supportedSites: ["ytm"],
        since: "3.1.0",
        options: () => [
            { value: "linear", label: t("volume_mapping.linear") },
            { value: "x^2", label: t("volume_mapping.x2") },
            { value: "x^3", label: t("volume_mapping.x3") },
            { value: "x^4", label: t("volume_mapping.x4") },
            { value: "x^5", label: t("volume_mapping.x5") }
        ],
        default: "linear",
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    volumeSliderExponentialLabelType: {
        type: "select",
        category: "volume",
        group: "volumeSlider",
        supportedSites: ["ytm"],
        since: "3.1.0",
        options: () => [
            { value: "positionBased", label: t("volume_label_mapped_type.positionBased") },
            { value: "valueBased", label: t("volume_label_mapped_type.valueBased") },
            { value: "both", label: t("volume_label_mapped_type.both") },
        ],
        default: "valueBased",
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    volumeSliderLabel: {
        type: "toggle",
        category: "volume",
        group: "volumeSlider",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    volumeSliderSize: {
        type: "number",
        category: "volume",
        group: "volumeSlider",
        supportedSites: ["ytm"],
        since: "1.0.0",
        min: 50,
        max: 500,
        step: 1,
        default: 150,
        unit: "px",
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    volumeSliderStep: {
        type: "slider",
        category: "volume",
        group: "volumeSlider",
        supportedSites: ["ytm"],
        since: "1.0.0",
        min: 1,
        max: 25,
        default: 2,
        unit: "%",
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    volumeSliderScrollStep: {
        type: "slider",
        category: "volume",
        group: "volumeSlider",
        supportedSites: ["ytm"],
        since: "1.1.0",
        min: 1,
        max: 25,
        default: 4,
        unit: "%",
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    volumeSharedBetweenTabs: {
        type: "toggle",
        category: "volume",
        group: "volumeSharedBetweenTabs",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: false,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    setInitialTabVolume: {
        type: "toggle",
        category: "volume",
        group: "initialTabVolume",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: false,
        adornments: () => getFeature("volumeSharedBetweenTabs")
            ? [adornments.ytmOnly, adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload]
            : [adornments.ytmOnly, adornments.reload],
    },
    initialTabVolumeLevel: {
        type: "number",
        category: "volume",
        group: "initialTabVolume",
        supportedSites: ["ytm"],
        since: "2.0.0",
        min: 0,
        max: 100,
        step: 1,
        default: 100,
        unit: "%",
        renderValue: (value) => {
            if (getFeature("volumeSliderExponential") !== "linear") {
                const expMapped = (expVolFn(Number(value) / 100) * 100).toFixed(1);
                const fixedPtVal = ["0.0", "100.0"].includes(expMapped)
                    ? expMapped.slice(0, -2)
                    : expMapped;
                return `${value}% (${fixedPtVal}%)`;
            }
            return `${value}%`;
        },
        adornments: () => getFeature("volumeSharedBetweenTabs")
            ? [adornments.ytmOnly, adornments.reload, adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'"))]
            : [adornments.ytmOnly, adornments.reload],
    },
    //#region cat:behavior
    disableBeforeUnloadPopup: {
        type: "toggle",
        category: "behavior",
        group: "disableBeforeUnloadPopup",
        supportedSites: ["ytm", "yt"],
        since: "1.0.0",
        default: false,
        reloadRequired: false,
    },
    autoCloseToasts: {
        type: "toggle",
        category: "behavior",
        group: "autoCloseToasts",
        supportedSites: ["ytm", "yt"],
        since: "3.0.0",
        default: true,
        reloadRequired: false,
    },
    closeToastsTimeout: {
        type: "slider",
        category: "behavior",
        group: "autoCloseToasts",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        min: 0.5,
        max: 30,
        step: 0.5,
        default: 3,
        unit: "s",
        reloadRequired: false,
    },
    rememberSongTime: {
        type: "toggle",
        category: "behavior",
        group: "rememberSongTime",
        supportedSites: ["ytm", "yt"],
        since: "1.1.0",
        default: true,
        helpText: () => tp("feature_helptext.rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
        adornments: [adornments.reload],
    },
    rememberSongTimeSites: {
        type: "select",
        category: "behavior",
        group: "rememberSongTime",
        supportedSites: ["ytm", "yt"],
        since: "1.1.0",
        options: options.siteSelection,
        default: "all",
        adornments: [adornments.reload],
    },
    rememberSongTimeDuration: {
        type: "number",
        category: "behavior",
        group: "rememberSongTime",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        min: 1,
        max: 60 * 60 * 24 * 7,
        step: 1,
        default: 180,
        unit: "s",
        reloadRequired: false,
    },
    rememberSongTimeReduction: {
        type: "number",
        category: "behavior",
        group: "rememberSongTime",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        min: 0,
        step: 0.01,
        default: 0.2,
        unit: "s",
        reloadRequired: false,
    },
    rememberSongTimeMinPlayTime: {
        type: "slider",
        category: "behavior",
        group: "rememberSongTime",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        min: 1,
        max: 30,
        step: 0.5,
        default: 5,
        unit: "s",
        reloadRequired: false,
    },
    hideCursorOnIdle: {
        type: "toggle",
        category: "behavior",
        group: "hideCursorOnIdle",
        supportedSites: ["ytm"],
        since: "2.0.0",
        default: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    hideCursorOnIdleDelay: {
        type: "slider",
        category: "behavior",
        group: "hideCursorOnIdle",
        supportedSites: ["ytm"],
        since: "2.0.0",
        min: 0.5,
        max: 10,
        step: 0.25,
        default: 3,
        unit: "s",
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    hidePlayerBarOnIdleInFullscreen: {
        type: "toggle",
        category: "behavior",
        group: "hideCursorOnIdle",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    yesImStillThere: {
        category: "behavior",
        group: "yesImStillThere",
        type: "toggle",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    autoScrollToActiveSongMode: {
        type: "select",
        category: "behavior",
        group: "autoScrollToActiveSongMode",
        supportedSites: ["ytm"],
        since: "3.0.0",
        options: () => [
            { value: "never", label: t("auto_scroll_to_active_song_mode.never") },
            { value: "initialPageLoad", label: t("auto_scroll_to_active_song_mode.initial_page_load") },
            { value: "videoChangeAll", label: t("auto_scroll_to_active_song_mode.video_change_all") },
            { value: "videoChangeManual", label: t("auto_scroll_to_active_song_mode.video_change_manual") },
            { value: "videoChangeAuto", label: t("auto_scroll_to_active_song_mode.video_change_auto") },
        ],
        default: "videoChangeManual",
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    //#region cat:autoLike
    autoLikeChannels: {
        type: "toggle",
        category: "autoLike",
        group: "autoLikeChannels",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        default: true,
        adornments: [adornments.reload],
    },
    autoLikeOpenMgmtDialog: {
        type: "button",
        category: "autoLike",
        group: "autoLikeChannels",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        click: () => getAutoLikeDialog().then(d => d.open()),
    },
    autoLikeChannelToggleBtn: {
        type: "toggle",
        category: "autoLike",
        group: "autoLikeChannels",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        default: true,
        reloadRequired: false,
        advanced: true,
        adornments: [adornments.advanced],
    },
    // TODO:
    // autoLikePlayerBarToggleBtn: {
    //   type: "toggle",
    //   category: "autoLike",
    //   group: "autoLikeChannels",
    //   supportedSites: ["ytm", "yt"],
    //   since: "x.x.x",
    //   default: false,
    //   adornments: [adornments.reload],
    // },
    autoLikeTimeout: {
        type: "slider",
        category: "autoLike",
        group: "autoLikeChannels",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        min: 3,
        max: 30,
        step: 0.5,
        default: 5,
        unit: "s",
        reloadRequired: false,
    },
    autoLikeShowToast: {
        type: "toggle",
        category: "autoLike",
        group: "autoLikeChannels",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0",
        default: true,
        reloadRequired: false,
    },
    //#region cat:input
    arrowKeySupport: {
        type: "toggle",
        category: "input",
        group: "arrowKeySupport",
        supportedSites: ["ytm"],
        since: "0.1.0",
        default: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    arrowKeySkipBy: {
        type: "number",
        category: "input",
        group: "arrowKeySupport",
        supportedSites: ["ytm"],
        since: "1.1.0",
        min: 0.1,
        step: 0.1,
        default: 5,
        unit: "s",
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    arrowKeyVolumeStep: {
        type: "slider",
        category: "input",
        group: "arrowKeySupport",
        supportedSites: ["ytm"],
        since: "3.0.0",
        min: 1,
        max: 25,
        step: 1,
        default: 2,
        unit: "%",
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    frameSkip: {
        type: "toggle",
        category: "input",
        group: "frameSkip",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    frameSkipWhilePlaying: {
        type: "toggle",
        category: "input",
        group: "frameSkip",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: false,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    frameSkipAmount: {
        type: "number",
        category: "input",
        group: "frameSkip",
        supportedSites: ["ytm"],
        since: "3.0.0",
        min: 0,
        step: 0.0001,
        default: 0.0166,
        unit: "s",
        reloadRequired: false,
        advanced: true,
        adornments: [adornments.ytmOnly, adornments.advanced],
    },
    anchorImprovements: {
        type: "toggle",
        category: "input",
        group: "anchorImprovements",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    numKeysSkipToTime: {
        type: "toggle",
        category: "input",
        group: "numKeysSkipToTime",
        supportedSites: ["ytm"],
        since: "1.0.0",
        default: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    numKeysSkipToTimeDoublePress: {
        type: "slider",
        category: "input",
        group: "numKeysSkipToTime",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: 0,
        min: 0,
        max: 3000,
        step: 100,
        renderValue: (value) => String(Number(value) === 0
            ? t("toggled_off")
            : `${value}ms`),
        reloadRequired: false,
    },
    numKeysSkipToTimeDoublePressBuffer: {
        type: "slider",
        category: "input",
        group: "numKeysSkipToTime",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: 5,
        min: 0,
        max: 30,
        step: 0.5,
        renderValue: (value) => String(Number(value) === 0
            ? t("toggled_off")
            : `${formatNumber(Number(value), "short")}s`),
        reloadRequired: false,
        advanced: true,
        adornments: [adornments.advanced],
    },
    //#region cat:hotkeys
    switchBetweenSites: {
        type: "toggle",
        category: "hotkeys",
        group: "switchBetweenSites",
        supportedSites: ["ytm", "yt"],
        since: "0.2.0",
        default: true,
        reloadRequired: false,
    },
    switchSitesHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "switchBetweenSites",
        supportedSites: ["ytm", "yt"],
        since: "1.1.0",
        default: {
            code: "F9",
            shift: false,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
    },
    switchSitesNewTabHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "switchBetweenSites",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: {
            code: "F9",
            shift: false,
            ctrl: true,
            alt: false,
        },
        reloadRequired: false,
    },
    likeDislikeHotkeys: {
        type: "toggle",
        category: "hotkeys",
        group: "likeDislikeHotkeys",
        supportedSites: ["ytm", "yt"],
        since: "3.0.0",
        default: true,
        reloadRequired: false,
    },
    likeDislikeHotkeysToggle: {
        type: "toggle",
        category: "hotkeys",
        group: "likeDislikeHotkeys",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: false,
        reloadRequired: false,
    },
    likeHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "likeDislikeHotkeys",
        supportedSites: ["ytm", "yt"],
        since: "3.0.0",
        default: {
            code: "KeyL",
            shift: true,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
    },
    dislikeHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "likeDislikeHotkeys",
        supportedSites: ["ytm", "yt"],
        since: "3.0.0",
        default: {
            code: "KeyD",
            shift: true,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
    },
    currentLyricsHotkeyEnabled: {
        type: "toggle",
        category: "hotkeys",
        group: "currentLyricsHotkeyEnabled",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: true,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    currentLyricsHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "currentLyricsHotkeyEnabled",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: {
            code: "KeyO",
            shift: false,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    skipToRemTimeHotkeyEnabled: {
        type: "toggle",
        category: "hotkeys",
        group: "skipToRemTimeHotkeyEnabled",
        supportedSites: ["ytm", "yt"],
        since: "3.0.0",
        default: true,
        reloadRequired: false,
        change: (newVal) => newVal && !getFeature("rememberSongTime") && showIconToast({
            icon: "icon-error",
            iconFill: "var(--bytm-error-col)",
            message: t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"),
            duration: 20,
            onClick: () => getErrorDialog(t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"), [t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled")]).open(),
        }),
        adornments: () => !getFeature("rememberSongTime")
            ? [() => adornments.alert(t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled").replace(/"/g, "'"))]
            : [],
    },
    skipToRemTimeHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "skipToRemTimeHotkeyEnabled",
        supportedSites: ["ytm", "yt"],
        since: "3.0.0",
        default: {
            code: "KeyR",
            shift: false,
            ctrl: false,
            alt: true,
        },
        reloadRequired: false,
    },
    focusSearchBarHotkeyEnabled: {
        type: "toggle",
        category: "hotkeys",
        group: "focusSearchBarHotkey",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: true,
        reloadRequired: false,
    },
    focusSearchBarHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "focusSearchBarHotkey",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: {
            code: "KeyF",
            shift: true,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
    },
    clearSearchBarHotkeyEnabled: {
        type: "toggle",
        category: "hotkeys",
        group: "clearSearchBarHotkey",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: true,
        reloadRequired: false,
    },
    clearSearchBarHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "clearSearchBarHotkey",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: {
            code: "Delete",
            shift: true,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
    },
    rebindNextAndPrevious: {
        type: "toggle",
        category: "hotkeys",
        group: "rebindNextAndPrevious",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: false,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    nextHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "rebindNextAndPrevious",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: {
            code: "KeyN",
            shift: true,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    previousHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "rebindNextAndPrevious",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: {
            code: "KeyP",
            shift: true,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    rebindPlayPause: {
        type: "toggle",
        category: "hotkeys",
        group: "rebindPlayPause",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: false,
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    playPauseHotkey: {
        type: "hotkey",
        category: "hotkeys",
        group: "rebindPlayPause",
        supportedSites: ["ytm"],
        since: "3.0.0",
        default: {
            code: "Pause",
            shift: false,
            ctrl: false,
            alt: false,
        },
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    //#region cat:integrations
    disableDarkReaderSites: {
        type: "select",
        category: "integrations",
        group: "darkReader",
        supportedSites: ["ytm", "yt"],
        since: "2.0.0",
        options: options.siteSelectionOrNone,
        default: "all",
        adornments: [adornments.reload],
    },
    sponsorBlockIntegration: {
        type: "toggle",
        category: "integrations",
        group: "sponsorBlock",
        supportedSites: ["ytm"],
        since: "2.1.0-preview.1",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    themeSongIntegration: {
        type: "toggle",
        category: "integrations",
        group: "themeSong",
        supportedSites: ["ytm"],
        since: "2.1.0-preview.1",
        default: false,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    themeSongLightness: {
        type: "select",
        category: "integrations",
        group: "themeSong",
        supportedSites: ["ytm"],
        since: "2.1.0-preview.1",
        options: options.colorLightness,
        default: "darker",
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    themeSongVisualizerOpacity: {
        type: "number",
        category: "integrations",
        group: "themeSongVisualizer",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: 100,
        min: 0,
        max: 100,
        step: 1,
        unit: "%",
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    themeSongVisualizerHotkeyEnabled: {
        type: "toggle",
        category: "integrations",
        group: "themeSongVisualizer",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: false,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    themeSongVisualizerHotkey: {
        type: "hotkey",
        category: "integrations",
        group: "themeSongVisualizer",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: {
            code: "KeyV",
            shift: true,
            ctrl: true,
            alt: false,
        },
        reloadRequired: false,
        adornments: [adornments.ytmOnly],
    },
    removeThumbnailRatingBar: {
        type: "toggle",
        category: "integrations",
        group: "thumbnailRatingBar",
        supportedSites: ["ytm"],
        since: "3.1.0",
        default: true,
        adornments: [adornments.ytmOnly, adornments.reload],
    },
    //#region cat:plugins
    openPluginList: {
        type: "button",
        category: "plugins",
        group: "pluginList",
        supportedSites: ["ytm", "yt"],
        since: "2.1.0-preview.1",
        default: undefined,
        click: () => getPluginListDialog().then(d => d.open()),
    },
    openPluginDiscoverySite: {
        type: "button",
        category: "plugins",
        group: "pluginList",
        supportedSites: ["ytm", "yt"],
        since: "3.1.0",
        default: undefined,
        click: () => UserUtils.openInNewTab(packageJson.pluginDiscoveryUrl),
    },
};//#region >> format version
/** If this number is incremented, the features object data will be migrated to the new format */
const cfgFormatVersion = 11;
//#region >> default data
/** Default feature config data using the current feature info object, used when no data is found in persistent storage or when the user resets the config */
const cfgDefaultData = CoreUtils.pureObj(Object.keys(featInfo)
    .filter((ftKey) => featInfo?.[ftKey] && "default" in featInfo[ftKey] && featInfo[ftKey].default !== undefined)
    .reduce((acc, key) => {
    acc[key] = featInfo?.[key] && "default" in featInfo[key]
        ? featInfo?.[key]?.default // TypeScript moments to relax and study to part 578
        : undefined;
    return acc;
}, {}));
//#region >> migrations
/**
 * Config data format migration functions.
 * Each key is the version to migrate *to*, and the value is a function that takes the old data as an argument and returns the new data.
 *
 * Some helper functions are used to make writing migration functions easier and less error-prone:
 * - **When a new feature was added,** the migration function should use {@linkcode useNewDefaults()} to set the new feature to its default value, while keeping all other values from the old config.
 * - **When a feature's default value was changed,** the migration function should use {@linkcode useNewDefaultsIfUnchanged()} to set the feature to its new default value, but only if the user hasn't changed it from its old default value. This way, a user's preference will be respected instead of being reset without their knowledge.
 * - **When a feature's valid value range was changed,** the migration function should use {@linkcode useNewRanges()} to clamp the feature's value to the new valid range. This only applies to numeric features with a `min` and `max` property defined in the {@linkcode featInfo} object.
 */
const cfgMigrations = {
    // 1 -> 2 (<=v1.0)
    2: (oldData) => {
        if (typeof oldData !== "object" || oldData === null)
            return cfgDefaultData;
        const queueBtnsEnabled = Boolean(oldData.queueButtons);
        delete oldData.queueButtons;
        return {
            ...oldData,
            deleteFromQueueButton: queueBtnsEnabled,
            lyricsQueueButton: queueBtnsEnabled,
        };
    },
    // 2 -> 3 (v1.0)
    3: (oldData) => useNewDefaults(oldData, [
        "removeShareTrackingParam",
        "numKeysSkipToTime",
        "fixSpacing",
        "scrollToActiveSongBtn",
        "logLevel",
    ]),
    // 3 -> 4 (v1.1)
    4: (oldData) => {
        const oldSwitchSitesHotkey = oldData.switchSitesHotkey;
        return {
            ...useNewDefaults(oldData, [
                "rememberSongTime",
                "rememberSongTimeSites",
                "volumeSliderScrollStep",
                "locale",
                "versionCheck",
            ]),
            arrowKeySkipBy: 10,
            switchSitesHotkey: {
                code: oldSwitchSitesHotkey.key ?? "F9",
                shift: Boolean(oldSwitchSitesHotkey.shift ?? false),
                ctrl: Boolean(oldSwitchSitesHotkey.ctrl ?? false),
                alt: Boolean(oldSwitchSitesHotkey.meta ?? false),
            },
            listButtonsPlacement: "queueOnly",
        };
    },
    // 4 -> 5 (v2.0)
    5: (oldData) => useNewDefaults(oldData, [
        "localeFallback",
        "geniUrlBase",
        "geniUrlToken",
        "lyricsCacheMaxSize",
        "lyricsCacheTTL",
        "clearLyricsCache",
        "advancedMode",
        "checkVersionNow",
        "advancedLyricsFilter",
        "rememberSongTimeDuration",
        "rememberSongTimeReduction",
        "rememberSongTimeMinPlayTime",
        "volumeSharedBetweenTabs",
        "setInitialTabVolume",
        "initialTabVolumeLevel",
        "thumbnailOverlayBehavior",
        "thumbnailOverlayToggleBtnShown",
        "thumbnailOverlayShowIndicator",
        "thumbnailOverlayIndicatorOpacity",
        "thumbnailOverlayImageFit",
        "removeShareTrackingParamSites",
        "fixHdrIssues",
        "clearQueueBtn",
        "closeToastsTimeout",
        "disableDarkReaderSites",
    ]),
    // 5 -> 6 (v2.1)
    6: (oldData) => {
        const newData = useNewDefaultsIfUnchanged(useNewDefaults(oldData, [
            "autoLikeChannels",
            "autoLikeChannelToggleBtn",
            "autoLikeTimeout",
            "autoLikeShowToast",
            "autoLikeOpenMgmtDialog",
            "showVotes",
            "numbersFormat",
            "toastDuration",
            "initTimeout",
            // forgot to add this to the migration when adding the feature way before so now will have to do:
            "volumeSliderLabel",
        ]), [
            { key: "rememberSongTimeSites", oldDefault: "ytm" }, // new: "all"
            { key: "volumeSliderScrollStep", oldDefault: 10 }, // new: 4
        ]);
        "removeUpgradeTab" in newData && delete newData.removeUpgradeTab;
        "advancedLyricsFilter" in newData && delete newData.advancedLyricsFilter;
        return newData;
    },
    // 6 -> 7 (v2.1-preview.1)
    7: (oldData) => {
        const newData = useNewDefaultsIfUnchanged(useNewDefaults(oldData, [
            "showToastOnGenericError",
            "sponsorBlockIntegration",
            "themeSongIntegration",
            "themeSongLightness",
            "errorOnLyricsNotFound",
            "openPluginList",
        ]), [
            { key: "toastDuration", oldDefault: 3 }, // new: 4
        ]);
        newData.arrowKeySkipBy = CoreUtils.clamp(newData.arrowKeySkipBy, 0.5, 30);
        return newData;
    },
    // 7 -> 8 (v2.1)
    8: (oldData) => {
        if ("showVotesFormat" in oldData) {
            oldData.numbersFormat = oldData.showVotesFormat;
            delete oldData.showVotesFormat;
        }
        return useNewDefaults(oldData, [
            "autoLikeChannels"
        ]);
    },
    // 8 -> 9 (v2.2)
    9: (oldData) => {
        oldData.locale = oldData.locale.replace("_", "-");
        if (oldData.locale === "ja-JA")
            oldData.locale = "ja-JP";
        if (oldData.locale === "en-GB")
            oldData.locale = "en-GB";
        return useNewDefaults(oldData, ["resetEverything"]);
    },
    // 9 -> 10 (v3.0)
    10: (oldData) => {
        oldData.closeToastsTimeout = CoreUtils.clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
        oldData.lyricsCacheMaxSize = CoreUtils.clamp(oldData.lyricsCacheMaxSize, featInfo.lyricsCacheMaxSize.min, featInfo.lyricsCacheMaxSize.max);
        oldData.autoCloseToasts = oldData.closeToastsTimeout > 0;
        oldData.closeToastsTimeout = CoreUtils.clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
        if ("thumbnailOverlayImageFit" in oldData)
            delete oldData.thumbnailOverlayImageFit;
        return useNewDefaultsIfUnchanged(useNewDefaults(oldData, [
            "aboveQueueBtnsSticky",
            "autoScrollToActiveSongMode",
            "frameSkip",
            "frameSkipWhilePlaying",
            "frameSkipAmount",
            "watchPageFullSize",
            "arrowKeyVolumeStep",
            "likeDislikeHotkeys",
            "likeHotkey",
            "dislikeHotkey",
            "currentLyricsHotkeyEnabled",
            "currentLyricsHotkey",
            "skipToRemTimeHotkeyEnabled",
            "skipToRemTimeHotkey",
            "rebindNextAndPrevious",
            "nextHotkey",
            "previousHotkey",
            "rebindPlayPause",
            "playPauseHotkey",
            "thumbnailOverlayITunesImgRes",
        ]), [
            { key: "lyricsCacheMaxSize", oldDefault: 2000 }, // new: 5000
        ]);
    },
    // 10 -> 11 (v3.1)
    11: (oldData) => {
        const newCfg = useNewDefaultsIfUnchanged(useNewDefaults(oldData, [
            "thumbnailOverlayPreferredSource",
            "swapLikeDislikeButtons",
            "thumbnailOverlayAlbumArtCacheTTL",
            "thumbnailOverlayAlbumArtCacheMaxSize",
            "focusSearchBarHotkeyEnabled",
            "focusSearchBarHotkey",
            "clearSearchBarHotkeyEnabled",
            "clearSearchBarHotkey",
            "songListTrackNumbersEnabled",
            "songListTrackNumbers",
            "yesImStillThere",
            "removeThumbnailRatingBar",
            "numKeysSkipToTimeDoublePress",
            "numKeysSkipToTimeDoublePressBuffer",
            "volumeSliderExponential",
            "volumeSliderExponentialLabelType",
            "likeDislikeHotkeysToggle",
            "openPluginDiscoverySite",
            "hidePlayerBarOnIdleInFullscreen",
            "themeSongVisualizerOpacity",
            "themeSongVisualizerHotkeyEnabled",
            "themeSongVisualizerHotkey",
            "truncatePlayerBarSubtitles",
            "logHttp",
            "switchSitesNewTabHotkey",
        ]), [
            { key: "thumbnailOverlayAlbumArtCacheMaxSize", oldDefault: 2000 }, // new: 10_000
            { key: "thumbnailOverlayITunesImgRes", oldDefault: 1500 }, // new: 2_000
            { key: "thumbnailOverlayIndicatorOpacity", oldDefault: 40 }, // new: 25
            { key: "lyricsCacheMaxSize", oldDefault: 5000 }, // new: 10_000
            { key: "rememberSongTimeMinPlayTime", oldDefault: 10 }, // new: 5
            { key: "hideCursorOnIdleDelay", oldDefault: 2 }, // new: 3
            { key: "initTimeout", oldDefault: 8 }, // new: 3_000
            { key: "rememberSongTimeDuration", oldDefault: 60 }, // new: 180
            { key: "frameSkipAmount", oldDefault: 0.0417 }, // new: 0.0166
        ]);
        // dont wanna make a whole new system just for this:
        artCacheStore.deleteData().then(() => {
            // no need to load data since artCacheStore.memoryCache === false
            info("Cleared album artwork cache due to improvements in the way album artworks are resolved, which made a large portion of the cached artworks wrong.");
        });
        // scale was changed from seconds to milliseconds
        if (newCfg.initTimeout <= 10)
            newCfg.initTimeout *= 1000;
        return useNewRanges(newCfg, [
            "initTimeout",
            "thumbnailOverlayITunesImgRes",
        ]);
    },
};
//#region migration helpers
/**
 * Uses the default config as the base, then overwrites all values with the passed {@linkcode baseData}, then sets all passed {@linkcode resetKeys} to their default values.
 * This function is basically used for migrations where new features have been introduced, or where some features absolutely NEED to be reset to their new default value, like for a breaking change.
 * Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
 */
function useNewDefaults(baseData, resetKeys) {
    const newData = structuredClone({ ...cfgDefaultData, ...(baseData ?? {}) });
    for (const key of resetKeys) // @ts-expect-error typescript funny moments part 0x1a4
        newData[key] = featInfo?.[key]?.default;
    return newData;
}
/**
 * Uses {@linkcode oldData} as the base, then sets all keys provided in {@linkcode oldDefaults} to their old default values, as long as their current value is equal to the provided old default.
 * This essentially means if someone has changed a feature's value from its old default value, that decision will be respected. Only if it has been left on its old default value, it will be set to the new default.
 * This function is basically used for migrations where some features' default values have changed, but we don't want to upset users who have changed the value from its old default. May only be used for non-breaking changes.
 * Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
 */
function useNewDefaultsIfUnchanged(oldData, oldDefaults) {
    const newData = structuredClone(oldData);
    for (const { key, oldDefault } of oldDefaults) {
        // @ts-expect-error we love TS
        const defaultVal = featInfo?.[key]?.default;
        if (newData[key] === oldDefault)
            newData[key] = defaultVal; // have you ever heard of the song "never gonna give you up" by rick astley?
    }
    return newData;
}
/**
 * Uses the passed config as the base, then clamps all numeric feature values to their defined min/max ranges.
 * Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
 */
function useNewRanges(config, keys) {
    const newCfg = structuredClone(config);
    for (const key of keys) {
        const info = featInfo[key];
        if (info && "min" in info && "max" in info)
            newCfg[key] = clampNewRange(newCfg, key);
    }
    return newCfg;
}
/** Clamps the value of the given numeric feature key in the passed config object to its defined min/max range. **/
function clampNewRange(config, key) {
    const val = config[key];
    const info = featInfo[key];
    return CoreUtils.clamp(val, info.min, info.max);
}
//#region >> store
const configStore = new CoreUtils.DataStore({
    id: "bytm-config",
    formatVersion: cfgFormatVersion,
    engine: new UserUtils.GMStorageEngine(),
    defaultData: cfgDefaultData,
    migrations: cfgMigrations,
    compressionFormat: compressionFormat$1,
});
//#region >> init
/** Initializes the DataStore instance and loads persistent data into memory. Returns a copy of the config object. */
async function initConfig() {
    const oldFmtVer = Number(await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-ver`, NaN));
    let oldDataHash;
    try {
        const oldData = await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-dat`, "{}");
        const oldDataObj = JSON.parse(oldData);
        // only show prompt if there is actual old data (not on the first initialization, resets, etc.)
        if (oldDataObj !== null && typeof oldDataObj === "object" && Object.keys(oldDataObj).length > 0)
            oldDataHash = await CoreUtils.computeHash(JSON.stringify(oldDataObj), "sha256");
    }
    catch {
    }
    // remove extraneous keys (persistent save is deferred to the next setData call)
    let data = fixCfgKeys(await configStore.loadData());
    // show prompt if config data was migrated
    if (oldDataHash && oldDataHash !== await CoreUtils.computeHash(JSON.stringify(data), "sha256")) {
        if (await showPrompt({
            type: "confirm",
            message: t("config_data_changed_prompt_open_menu"),
            confirmBtnText: t("open"),
            confirmBtnTooltip: t("open_menu_tooltip"),
            denyBtnText: t("prompt_close"),
            denyBtnTooltip: t("click_to_close_tooltip"),
        }))
            window.addEventListener("bytm:allReady", () => openCfgMenu(), { once: true });
    }
    log(`Initialized feature config DataStore with version ${configStore.formatVersion}`);
    if (isNaN(oldFmtVer))
        warn("  ⚠️ - Config data was initialized with default values");
    else if (oldFmtVer !== configStore.formatVersion) {
        try {
            await configStore.setData(data = fixCfgKeys(data));
            info(`  ⚠️ - Config data was migrated from version ${oldFmtVer} to ${configStore.formatVersion}`);
        }
        catch (err) {
            error("  ⚠️ - Config data migration failed, falling back to default data:", err);
            await configStore.setData(data = configStore.defaultData);
        }
    }
    emitInterface("bytm:configReady");
    return structuredClone(data);
}
//#region fix keys
/**
 * Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.
 * Returns a copy of the originally passed object if nothing needs to be fixed.
 */
function fixCfgKeys(cfg) {
    const newCfg = structuredClone(cfg);
    const passedKeys = Object.keys(cfg);
    const defaultKeys = Object.keys(cfgDefaultData);
    const missingKeys = defaultKeys.filter(k => !passedKeys.includes(k));
    if (missingKeys.length > 0) {
        for (const key of missingKeys)
            newCfg[key] = cfgDefaultData[key];
    }
    const extraKeys = passedKeys.filter(k => !defaultKeys.includes(k));
    if (extraKeys.length > 0) {
        for (const key of extraKeys)
            delete newCfg[key];
    }
    return newCfg;
}
//#region feature getters/setters
/** Returns the current feature config from the in-memory cache as a copy */
function getFeatures() {
    return configStore.getData();
}
/** Returns the value of the feature with the given key from the in-memory cache, as a copy */
function getFeature(key, defaultVal) {
    const val = configStore.getData()[key];
    return val !== undefined ? val : defaultVal;
}
/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
function setFeatures(featureConf) {
    const res = configStore.setData(featureConf);
    emitSiteEvent("configChanged", getFeaturesNoHidden());
    info("Saved new feature config:", getFeaturesNoHidden());
    return res;
}
/** Returns the feature config with all hidden features removed, as a copy */
function getFeaturesNoHidden(featureCfg) {
    const feats = structuredClone({ ...(getFeatures()) });
    for (const ftKey of Object.keys(feats)) {
        const info = featInfo[ftKey];
        if (info && "valueHidden" in info && info.valueHidden) // @ts-expect-error
            feats[ftKey] = undefined;
    }
    return feats;
}
/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
function setDefaultFeatures() {
    const res = configStore.saveDefaultData();
    emitSiteEvent("configChanged", getFeaturesNoHidden());
    info("Reset feature config to its default values");
    return res;
}
//#region reset config stuff
/** Shows a confirmation prompt to reset the config */
async function promptResetConfig() {
    if (await showPrompt({ type: "confirm", message: t("reset_config_confirm") })) {
        closeCfgMenu();
        enableDiscardBeforeUnload();
        await setDefaultFeatures();
        await reloadTab();
    }
}
/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
async function clearConfig() {
    await configStore.deleteData();
    info("Deleted config from persistent storage");
}const { mode, branch, host, buildNumber, compressionFormat, scriptInfo, initialParams, sessionStorageAvailable } = constants;
const { autoPlural, NanoEmitter, pureObj } = CoreUtils__namespace;
const { getUnsafeWindow } = UserUtils__namespace;
/**
 * All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`)
 * If prefixed with /\*🔒\*\/, the function is authenticated and requires a token to be passed as the first argument.
 */
const globalFuncs = pureObj({
    // meta:
    /*🔒*/ getPluginInfo,
    /*🔒*/ getInternals,
    // bytm-specific:
    getDomain,
    getResourceUrl,
    resourceAsString,
    getSessionId,
    reloadTab,
    // dom:
    setInnerHtml,
    addSelectorListener,
    onInteraction,
    getVideoTime,
    getThumbnailUrl,
    getBestThumbnailUrl,
    fetchITunesAlbumInfo,
    waitVideoElementReady,
    getVideoElement,
    getVideoSelector,
    getCurrentMediaType,
    getLikeDislikeBtns,
    isIgnoredInputElement,
    // site events:
    onSiteEvent: siteEvents.on.bind(siteEvents),
    onceSiteEvent: siteEvents.once.bind(siteEvents),
    onMultiSiteEvents: siteEvents.onMulti.bind(siteEvents),
    // translations:
    /*🔒*/ setLocale: setLocaleInterface,
    getLocale,
    hasKey,
    hasKeyFor,
    t,
    tp,
    tl,
    tlp,
    // feature config:
    /*🔒*/ getFeatures: getFeaturesInterface,
    /*🔒*/ saveFeatures: saveFeaturesInterface,
    getDefaultFeatures: () => structuredClone(cfgDefaultData),
    // lyrics:
    fetchLyricsUrlTop,
    getLyricsCacheEntry,
    // TODO:
    // getLyricsCache: getLyricsCacheInterface,
    // saveLyricsCache: saveLyricsCacheInterface,
    sanitizeArtists,
    sanitizeSong,
    // auto-like:
    /*🔒*/ getAutoLikeData: getAutoLikeDataInterface,
    /*🔒*/ saveAutoLikeData: saveAutoLikeDataInterface,
    fetchVideoVotes,
    // components:
    createHotkeyInput,
    createToggleInput,
    createCircularBtn,
    createRipple,
    showToast,
    showIconToast,
    /*🔒*/ showPrompt: showPromptInterface,
    // other:
    formatNumber,
});
/** Initializes the BYTM interface */
function initInterface() {
    const props = {
        // constants
        mode,
        branch,
        host,
        buildNumber,
        initialParams,
        compressionFormat,
        sessionStorageAvailable,
        // meta
        ...scriptInfo,
        // functions
        ...globalFuncs,
        // classes
        NanoEmitter,
        // dialogs legacy (TODO: remove in v4)
        BytmDialog,
        ExImDialog,
        MarkdownDialog,
        // dialogs
        getBytmDialog,
        getExImDialog,
        getMarkdownDialog,
        // libraries
        CoreUtils: CoreUtils__namespace,
        UserUtils: UserUtils__namespace,
        compareVersions: compareVersions__namespace,
    };
    for (const [key, value] of Object.entries(props))
        setGlobalProp(key, value);
    setGlobalProp("sessionId", getSessionId());
    log("Initialized BYTM interface");
}
/** Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page! */
function setGlobalProp(key, value) {
    // use unsafeWindow so the properties are available to plugins (outside of the userscript's scope)
    const win = getUnsafeWindow();
    if (typeof win.BYTM !== "object")
        win.BYTM = pureObj({});
    win.BYTM[key] = value;
}
/** Emits an event on the BYTM interface */
function emitInterface(type, ...detail) {
    try {
        unsafeWindow.dispatchEvent(new CustomEvent(type, { detail: detail?.[0] ?? undefined }));
        //@ts-expect-error
        emitOnPlugins(type, undefined, ...detail);
        if (getFeature("logEvents")) {
            detail.length > 0 && detail?.[0]
                ? log(`Emitted interface event '${type}' with data:`, ...detail)
                : log(`Emitted interface event '${type}' (without data)`);
        }
    }
    catch (err) {
        error(`Couldn't emit interface event '${type}' due to an error:\n`, err);
    }
}
//#region register plugins
/** Map of plugin ID and all registered plugins */
const registeredPlugins = new Map();
/** Map of plugin ID to auth token for plugins that have been registered */
const registeredPluginTokens = new Map();
let pluginsInitialized = false;
/** Pre-init for eager plugins that need to be initialized as soon as physically possible */
function preInitPlugins() {
    emitInterface("bytm:preInitPlugin", registerPlugin);
}
/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
function initPlugins() {
    emitInterface("bytm:registerPlugin", registerPlugin);
    registerDevPlugin();
    window.addEventListener("bytm:ready", () => {
        pluginsInitialized = true;
        if (registeredPlugins.size > 0)
            info(`Registered ${registeredPlugins.size} ${autoPlural("plugin", registeredPlugins.size)}${mode === "development" ? " (including dev plugin)" : ""}`);
        else
            log("No plugins registered");
    }, { once: true });
}
/** Registers a plugin on the BYTM interface. */
function registerPlugin(def) {
    try {
        if (pluginsInitialized)
            throw new PluginError(`Failed to register plugin '${getPluginKey(def)}': BYTM interface has already been initialized - plugins can only be registered after the 'bytm:registerPlugin' event and before the 'bytm:ready' event`);
        const plKey = getPluginKey(def);
        if (registeredPlugins.has(plKey))
            throw new PluginError(`Failed to register plugin '${plKey}': Plugin with the same name and namespace is already registered`);
        const validationErrors = validatePluginDef(def);
        if (validationErrors)
            throw new PluginError(`Failed to register plugin${def?.plugin?.name ? ` '${def?.plugin?.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`);
        const events = new NanoEmitter({ publicEmit: true });
        const token = crypto.randomUUID();
        registeredPlugins.set(plKey, {
            def: def,
            events,
        });
        registeredPluginTokens.set(plKey, token);
        // TODO: check perms and ask user for initial activation
        const permissionInt = defToIntentsBitSet(def);
        const permissions = {
            int: permissionInt,
            array: parseBitSetEnumArray(permissionInt, PluginIntent),
        };
        info(`Successfully registered plugin '${plKey}'`);
        setTimeout(() => emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def)), 0);
        return {
            info: getPluginInfo(token, def),
            events,
            token,
            permissions,
        };
    }
    catch (err) {
        error(`Failed to register plugin '${getPluginKey(def)}':`, err instanceof PluginError ? err : new PluginError(String(err)));
        throw err;
    }
}
/** After the dev plugin is registered, this token can be used to access anything on the plugin interface */
let devPluginToken;
const devPluginId = CoreUtils__namespace.randomId(8, 36, true, true);
/** Registers a plugin that only exists in development mode to test the plugin system */
function registerDevPlugin() {
    if (mode !== "development")
        return;
    try {
        const description = [
            "de-DE", "en-US", "es-ES", "fr-FR",
            "hi-IN", "ja-JP", "pt-BR", "zh-CN",
        ].reduce((acc, loc) => ({
            ...acc,
            [loc]: t("dev_plugin.description"),
        }), {});
        const { token, events } = registerPlugin({
            plugin: {
                name: t("dev_plugin.name"),
                namespace: `${packageJson.namespace}+${devPluginId}`,
                version: packageJson.version,
                description,
                homepage: {
                    source: packageJson.homepage,
                    changelog: `${packageJson.homepage}/blob/${branch}/changelog.md`,
                    bug: packageJson.bugs.url,
                    greasyfork: packageJson.hosts.greasyfork,
                    openuserjs: packageJson.hosts.openuserjs,
                    other: packageJson.hosts.github,
                },
                iconUrl: "https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_dev_128.png",
            },
            intents: PluginIntent.FullAccess,
        });
        devPluginToken = token;
        setGlobalProp("devPluginEvents", events);
    }
    catch (err) {
        error("Failed to register dev plugin:", err instanceof PluginError ? err : new PluginError(String(err), { cause: err }));
    }
}
/** Returns the registered plugins as an array of tuples with the items `[id: string, item: PluginItem]` */
function getRegisteredPlugins() {
    return [...registeredPlugins.entries()];
}
/** Returns the key for a given plugin definition */
function getPluginKey(plugin) {
    return `${plugin.plugin.namespace}/${plugin.plugin.name}`;
}
/** Converts a PluginDef object (full definition) into a PluginInfo object (restricted definition) or undefined, if undefined is passed */
function pluginDefToInfo(plugin) {
    return plugin
        ? {
            name: plugin.plugin.name,
            namespace: plugin.plugin.namespace,
            version: plugin.plugin.version,
        }
        : undefined;
}
/** Checks whether two plugins are the same, given their resolvable definition objects */
function sameDef(def1, def2) {
    return getPluginKey(def1) === getPluginKey(def2);
}
/** Emits an event on all plugins that match the predicate (all plugins by default) */
function emitOnPlugins(event, predicate = true, ...data) {
    for (const { def, events } of registeredPlugins.values())
        if (typeof predicate === "boolean" ? predicate : predicate(def))
            events.emit(event, ...data);
}
/**
 * @private FOR INTERNAL USE ONLY!
 * Returns the internal plugin def and events objects, or undefined if it doesn't exist.
 */
function getPlugin(...args) {
    return typeof args[0] === "string" && typeof args[1] === "undefined"
        ? registeredPlugins.get(args[0])
        : args.length === 2
            ? registeredPlugins.get(`${args[1]}/${args[0]}`)
            : registeredPlugins.get(getPluginKey(args[0]));
}
/**
 * Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 * @public Intended for general use in plugins.
 */
function getPluginInfo(...args) {
    if (resolveToken(args[0]) === undefined)
        return undefined;
    return pluginDefToInfo(registeredPlugins.get(typeof args[1] === "string" && typeof args[2] === "undefined"
        ? args[1]
        : args.length === 2
            ? getPluginKey(args[1])
            : `${args[2]}/${args[1]}`)?.def);
}
/**
 * @private FOR INTERNAL USE ONLY!
 * Whether the given plugin has the given granted intents.
 */
function pluginHasPerms(...args) {
    const plugin = typeof args[0] === "string" && typeof args[1] === "string"
        ? getPlugin(args[0], args[1])
        : getPlugin(args[0]);
    if (!plugin)
        return false;
    const asArray = (value) => Array.isArray(value) ? value : [value];
    const perms = (typeof args[0] === "string" && typeof args[1] === "string" ? asArray(args[2]) : asArray(args[1])) ?? [];
    if (!Array.isArray(perms))
        throw new TypeError("The second argument must be an array of PluginIntent values");
    const pluginIntents = defToIntentsBitSet(plugin.def);
    return UserUtils__namespace.bitSetHas(pluginIntents, PluginIntent.FullAccess) || perms.every((perm) => CoreUtils__namespace.bitSetHas(pluginIntents, perm));
}
/** Converts the intents from a PluginDef object into a bit set value. */
function defToIntentsBitSet(def) {
    if (Array.isArray(def.intents))
        return def.intents.reduce((acc, intent) => acc | intent, 0);
    else if (typeof def.intents === "number")
        return def.intents;
    else
        return 0;
}
/** Iterates over the {@linkcode enumRef} and returns an array of all intents that are set in the passed {@linkcode bitSet} value. */
function parseBitSetEnumArray(bitSet, enumRef) {
    const result = [];
    for (const [, val] of Object.entries(enumRef))
        if ((typeof val === "number" || typeof val === "bigint") && CoreUtils__namespace.bitSetHas(bitSet, val))
            result.push(val);
    return result;
}
/** Validates the passed PluginDef object and returns an array of errors - returns undefined if there were no errors - never returns an empty array */
function validatePluginDef(pluginDef) {
    const errors = [];
    const addNoPropErr = (jsonPath, type) => errors.push(t("plugin_validation_error_no_property", jsonPath, type));
    const addInvalidPropErr = (jsonPath, value, examples) => errors.push(tp("plugin_validation_error_invalid_property", examples, jsonPath, value, `'${examples.join("', '")}'`));
    // def.plugin and its properties:
    typeof pluginDef.plugin !== "object" && addNoPropErr("plugin", "object");
    const { plugin } = pluginDef;
    !plugin?.name && addNoPropErr("plugin.name", "string");
    !plugin?.namespace && addNoPropErr("plugin.namespace", "string");
    if (typeof plugin?.version !== "string")
        addNoPropErr("plugin.version", "MAJOR.MINOR.PATCH");
    else if (!compareVersions__namespace.validateStrict(plugin.version))
        addInvalidPropErr("plugin.version", plugin.version, ["0.0.1", "2.5.21-rc.1"]);
    return errors.length > 0 ? errors : undefined;
}
/** Checks whether the passed token is a valid auth token for any registered plugin and returns the plugin ID, else returns undefined */
function resolveToken(token) {
    return typeof token === "string" && token.length > 0
        ? [...registeredPluginTokens.entries()]
            .find(([k, t]) => registeredPlugins.has(k) && token === t)?.[0] ?? undefined
        : undefined;
}
//#region proxy funcs
/**
 * Sets the new locale on the BYTM interface
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function setLocaleInterface(token, locale) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteTranslations))
        return;
    setLocale(locale);
    emitInterface("bytm:setLocale", { pluginId, locale });
}
/**
 * Returns the current feature config, with sensitive values replaced by `undefined`, unless the `SeeHiddenConfigValues` intent is granted.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function getFeaturesInterface(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.ReadFeatureConfig))
        return undefined;
    const hiddenAccess = pluginHasPerms(pluginId, PluginIntent.SeeHiddenConfigValues);
    const features = hiddenAccess ? getFeatures() : getFeaturesNoHidden();
    return features;
}
/**
 * Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function saveFeaturesInterface(token, features) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteFeatureConfig))
        return;
    setFeatures(features);
}
/**
 * Returns the auto-like data.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function getAutoLikeDataInterface(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.ReadAutoLikeData))
        return;
    return autoLikeStore.getData();
}
/**
 * Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function saveAutoLikeDataInterface(token, data) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteAutoLikeData))
        return;
    return autoLikeStore.setData(data);
}
/** Returns the BytmDialog class, used to create BetterYTM's absolutely stunning and iconic and sexy and cool modal dialogs. */
function getBytmDialog(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
        return;
    return BytmDialog;
}
/** Returns the ExImDialog class, used to create dialogs for importing and exporting serializable data. */
function getExImDialog(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
        return;
    return ExImDialog;
}
/** Returns the MarkdownDialog class, used to create dialogs with custom rendered markdown content. */
function getMarkdownDialog(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
        return;
    return MarkdownDialog;
}
/** Wrapper around {@linkcode showPrompt()} to check for the permission to show dialogs */
function showPromptInterface(token, ...args) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
        return;
    return showPrompt(...args);
}
//#region internals
/** Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins. */
function getInternals(token) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.InternalAccess))
        return undefined;
    return {
        constants,
        emitInterface,
        emitSiteEvent,
        siteEvents,
        addSelectorListener,
        showPrompt,
        setGlobalProp,
        enableDiscardBeforeUnload,
        disableDiscardBeforeUnload,
    };
}//#region vars
/** Global SelectorObserver instances usable throughout the script for improved performance */
const globservers = {};
/** Whether all observers have been initialized */
let globserversReady = false;
//#region add listener func
/**
 * Interface function for adding listeners to the {@linkcode globservers}
 * If the observers haven't been initialized yet, the function will queue calls until the `bytm:observersReady` event is emitted
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 * @param options Options for the listener
 * @template TElem The type of the element that the listener will be attached to. If set to `0`, the default type `HTMLElement` will be used.
 * @template TDomain This restricts which observers are available with the current domain
 */
function addSelectorListener(observerName, selector, options) {
    try {
        if (!globserversReady) {
            window.addEventListener("bytm:observersReady", () => addSelectorListener(observerName, selector, options), { once: true });
            return;
        }
        globservers[observerName].addListener(selector, options);
    }
    catch (err) {
        error(`Couldn't add listener to globserver '${observerName}':`, err);
    }
}
//#region init
/** Call after DOM load to initialize all SelectorObserver instances */
function initObservers(cfg) {
    /** Options that are applied to every SelectorObserver instance */
    const defaultObserverOptions = {
        disableOnNoListeners: false, // keepalive for plugins and opportunistic features
        enableOnAddListener: false, // important because of strict init order
        defaultDebounce: cfg.defaultObserverDebounce,
        defaultDebounceType: "immediate",
    };
    try {
        //#region # both sites
        //#region body
        // -> the entire <body> element - use sparingly due to performance impacts!
        //    enabled immediately
        globservers.body = new UserUtils.SelectorObserver(document.body, {
            ...defaultObserverOptions,
            subtree: false,
        });
        globservers.body.enable();
        //#region bytmDialogContainer
        // -> the container for all BytmDialog instances
        //    enabled immediately
        const bytmDialogContainerSelector = "#bytm-dialog-container";
        globservers.bytmDialogContainer = new UserUtils.SelectorObserver(bytmDialogContainerSelector, {
            ...defaultObserverOptions,
            defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 1.5),
            subtree: true,
        });
        globservers.bytmDialogContainer.enable();
        switch (getDomain()) {
            case "ytm": {
                //#region # YTM only
                //#region browseResponse
                // -> for example the /channel/UC... page
                //    enabled by "body"
                const browseResponseSelector = "ytmusic-browse-response";
                globservers.browseResponse = new UserUtils.SelectorObserver(browseResponseSelector, {
                    ...defaultObserverOptions,
                    defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
                    subtree: true,
                });
                globservers.body.addListener(browseResponseSelector, {
                    listener: () => globservers.browseResponse.enable(),
                });
                //#region searchPage
                // -> the search page
                //    enabled by "body"
                const searchPageSelector = "ytmusic-search-page";
                globservers.searchPage = new UserUtils.SelectorObserver(searchPageSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(searchPageSelector, {
                    listener: () => globservers.searchPage.enable(),
                });
                //#region navBar
                // -> the navigation / title bar at the top of the page
                //    enabled by "body"
                const navBarSelector = "ytmusic-nav-bar";
                globservers.navBar = new UserUtils.SelectorObserver(navBarSelector, {
                    ...defaultObserverOptions,
                    subtree: false,
                });
                globservers.body.addListener(navBarSelector, {
                    listener: () => globservers.navBar.enable(),
                });
                //#region mainPanel
                // -> the main content panel - includes things like the video element
                //    enabled by "body"
                const mainPanelSelector = "ytmusic-player-page #main-panel";
                globservers.mainPanel = new UserUtils.SelectorObserver(mainPanelSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(mainPanelSelector, {
                    listener: () => globservers.mainPanel.enable(),
                });
                //#region sideBar
                // -> the sidebar on the left side of the page
                //    enabled by "body"
                const sidebarSelector = "ytmusic-app-layout tp-yt-app-drawer";
                globservers.sideBar = new UserUtils.SelectorObserver(sidebarSelector, {
                    ...defaultObserverOptions,
                    attributes: true,
                    childList: true,
                    subtree: true,
                });
                globservers.body.addListener(sidebarSelector, {
                    listener: () => globservers.sideBar.enable(),
                });
                //#region sidePanel
                // -> the side panel on the right side of the /watch page
                //    enabled by "body"
                const sidePanelSelector = "#side-panel";
                globservers.sidePanel = new UserUtils.SelectorObserver(sidePanelSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(sidePanelSelector, {
                    listener: () => globservers.sidePanel.enable(),
                });
                //#region playerBar
                // -> media controls bar at the bottom of the page
                //    enabled by "body"
                const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
                globservers.playerBar = new UserUtils.SelectorObserver(playerBarSelector, {
                    ...defaultObserverOptions,
                });
                globservers.body.addListener(playerBarSelector, {
                    listener: () => {
                        globservers.playerBar.enable();
                    },
                });
                //#region playerBarInfo
                // -> song title, artist, album, etc. inside the player bar
                //    enabled by "playerBar"
                const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
                globservers.playerBarInfo = new UserUtils.SelectorObserver(playerBarInfoSelector, {
                    ...defaultObserverOptions,
                    attributes: true,
                    attributeFilter: ["title"],
                });
                globservers.playerBar.addListener(playerBarInfoSelector, {
                    listener: () => globservers.playerBarInfo.enable(),
                });
                //#region playerBarMiddleButtons
                // -> the buttons inside the player bar (like, dislike, lyrics, etc.)
                //    enabled by "playerBar"
                const playerBarMiddleButtonsSelector = ".middle-controls .middle-controls-buttons";
                globservers.playerBarMiddleButtons = new UserUtils.SelectorObserver(playerBarMiddleButtonsSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.playerBar.addListener(playerBarMiddleButtonsSelector, {
                    listener: () => globservers.playerBarMiddleButtons.enable(),
                });
                //#region playerBarRightControls
                // -> the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
                //    enabled by "playerBar"
                const playerBarRightControls = "#right-controls";
                globservers.playerBarRightControls = new UserUtils.SelectorObserver(playerBarRightControls, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.playerBar.addListener(playerBarRightControls, {
                    listener: () => globservers.playerBarRightControls.enable(),
                });
                //#region popupContainer
                // -> the container for popups (e.g. the queue popup)
                //    enabled by "body"
                const popupContainerSelector = "ytmusic-app ytmusic-popup-container";
                globservers.popupContainer = new UserUtils.SelectorObserver(popupContainerSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(popupContainerSelector, {
                    listener: () => globservers.popupContainer.enable(),
                });
                break;
            }
            case "yt": {
                //#region # YT only
                //#region ytGuide
                // -> the left sidebar menu
                //    enabled by "body"
                const ytGuideSelector = "#content tp-yt-app-drawer#guide #guide-inner-content";
                globservers.ytGuide = new UserUtils.SelectorObserver(ytGuideSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(ytGuideSelector, {
                    listener: () => globservers.ytGuide.enable(),
                });
                //#region ytdBrowse
                // -> channel pages for example
                //    enabled by "body"
                const ytdBrowseSelector = "ytd-app ytd-page-manager ytd-browse";
                globservers.ytdBrowse = new UserUtils.SelectorObserver(ytdBrowseSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(ytdBrowseSelector, {
                    listener: () => globservers.ytdBrowse.enable(),
                });
                //#region ytAppHeader
                // -> header of the page
                //    enabled by "ytdBrowse"
                const ytAppHeaderSelector = "#header ytd-app-header, #header ytd-tabbed-page-header";
                globservers.ytAppHeader = new UserUtils.SelectorObserver(ytAppHeaderSelector, {
                    ...defaultObserverOptions,
                    defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
                    subtree: true,
                });
                globservers.ytdBrowse.addListener(ytAppHeaderSelector, {
                    listener: () => globservers.ytAppHeader.enable(),
                });
                //#region ytWatchFlexy
                // -> the main content of the /watch page
                //    enabled by "body"
                const ytWatchFlexySelector = "ytd-app ytd-watch-flexy";
                globservers.ytWatchFlexy = new UserUtils.SelectorObserver(ytWatchFlexySelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(ytWatchFlexySelector, {
                    listener: () => globservers.ytWatchFlexy.enable(),
                });
                //#region ytWatchMetadata
                // -> the metadata section of the /watch page (title, channel, views, description, buttons, etc. but not comments)
                //    enabled by "ytWatchFlexy"
                const ytWatchMetadataSelector = "#columns #primary-inner ytd-watch-metadata";
                globservers.ytWatchMetadata = new UserUtils.SelectorObserver(ytWatchMetadataSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.ytWatchFlexy.addListener(ytWatchMetadataSelector, {
                    listener: () => globservers.ytWatchMetadata.enable(),
                });
                //#region ytMasthead
                // -> the masthead (title bar) at the top of the page
                //    enabled by "body"
                const mastheadSelector = "#content ytd-masthead#masthead";
                globservers.ytMasthead = new UserUtils.SelectorObserver(mastheadSelector, {
                    ...defaultObserverOptions,
                    subtree: true,
                });
                globservers.body.addListener(mastheadSelector, {
                    listener: () => globservers.ytMasthead.enable(),
                });
            }
        }
        //#region finalize
        globserversReady = true;
        emitInterface("bytm:observersReady");
        //#DEBUG:
        UserUtils.getUnsafeWindow().BYTM.globservers = globservers;
    }
    catch (err) {
        error("Failed to initialize observers:", err);
    }
}//#region vid elem
/** Returns the video element selector string based on the current domain */
function getVideoSelector() {
    return getDomain() === "ytm"
        ? "ytmusic-player video"
        : "#player-container ytd-player video";
}
/** Returns the video element based on the current domain */
function getVideoElement() {
    return document.querySelector(getVideoSelector());
}
let vidElemReady = false;
//#region vid time
/**
 * Returns the current video time in seconds, with the given {@linkcode precision} (2 decimal digits by default).
 * Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work).
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
function getVideoTime(precision = 2) {
    return new Promise(async (res) => {
        if (!vidElemReady) {
            await waitVideoElementReady();
            vidElemReady = true;
        }
        const resolveWithVal = (time) => res(time && !isNaN(time)
            ? Number(precision <= 0 ? Math.floor(time) : time.toFixed(precision))
            : null);
        try {
            if (getDomain() === "ytm") {
                const vidElem = getVideoElement();
                if (vidElem && vidElem.readyState > 0)
                    return resolveWithVal(vidElem.currentTime);
                addSelectorListener("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
                    listener: (pbEl) => resolveWithVal(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
                });
            }
            else if (getDomain() === "yt") {
                const vidElem = getVideoElement();
                if (vidElem && vidElem.readyState > 0)
                    return resolveWithVal(vidElem.currentTime);
                // YT doesn't update the progress bar when it's hidden (contrary to YTM which never hides it)
                ytForceShowVideoTime();
                const pbSelector = ".ytp-chrome-bottom div.ytp-progress-bar[role=\"slider\"]";
                let videoTime = -1;
                const mut = new MutationObserver(() => {
                    // .observe() is only called when the element exists - no need to check for null
                    videoTime = Number(document.querySelector(pbSelector).getAttribute("aria-valuenow"));
                });
                const observe = (progElem) => {
                    mut.observe(progElem, {
                        attributes: true,
                        attributeFilter: ["aria-valuenow"],
                    });
                    if (videoTime >= 0 && !isNaN(videoTime)) {
                        resolveWithVal(Math.floor(videoTime));
                        mut.disconnect();
                    }
                    else
                        setTimeout(() => {
                            resolveWithVal(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
                            mut.disconnect();
                        }, 500);
                };
                addSelectorListener("body", pbSelector, { listener: observe });
            }
        }
        catch (err) {
            error("Couldn't get video time due to error:", err);
            res(null);
        }
    });
}
/**
 * Sends events that force the video controls to become visible for about 3 seconds.
 * This only works once (for some reason), then the page needs to be reloaded!
 */
function ytForceShowVideoTime() {
    const player = document.querySelector("#movie_player");
    if (!player)
        return false;
    const defaultProps = {
        // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18
        view: UserUtils.getUnsafeWindow(),
        bubbles: true,
        cancelable: false,
    };
    player.dispatchEvent(new MouseEvent("mouseenter", defaultProps));
    const { x, y, width, height } = player.getBoundingClientRect();
    const screenY = Math.round(y + height / 2);
    const screenX = x + Math.min(50, Math.round(width / 3));
    player.dispatchEvent(new MouseEvent("mousemove", {
        ...defaultProps,
        screenY,
        screenX,
        movementX: 5,
        movementY: 0,
    }));
    return true;
}
//#region vid ready
/**
 * Waits for the DOM to be loaded and the video element to be in its readyState 4 or until the "canplay" event is emitted and then returns it.
 * Could take a very long time to resolve if the `/watch` page isn't open.
 * Resolves immediately if the video element is already ready.
 */
function waitVideoElementReady() {
    return new Promise(async (res, rej) => {
        try {
            if (!UserUtils.isDomLoaded())
                await UserUtils.onDomLoad();
            const vidEl = getVideoElement();
            if (vidEl && (vidEl?.readyState ?? 0) === 4)
                return res(vidEl);
            if (!location.pathname.startsWith("/watch"))
                await siteEvents.once("watchIdChanged");
            addSelectorListener("body", getVideoSelector(), {
                listener(vidElem) {
                    // this is just after YT has finished doing their own shenanigans with the video time and volume
                    if (vidElem.readyState === 4)
                        res(vidElem);
                    else
                        vidElem.addEventListener("canplay", () => res(vidElem), { once: true });
                },
            });
        }
        catch (err) {
            rej(err);
        }
    });
}
//#region like/dislike btns
/**
 * Returns the like/dislike button elements based on the current domain and the current like state ("LIKE" / "DISLIKE" / "INDIFFERENT").
 * The btnRenderer element is a parent of both buttons.
 */
function getLikeDislikeBtns() {
    let btnRenderer;
    let likeBtn;
    let dislikeBtn;
    let likeState;
    switch (getDomain()) {
        case "ytm": {
            btnRenderer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer") ?? undefined;
            likeBtn = btnRenderer?.querySelector("#button-shape-like button") ?? undefined;
            dislikeBtn = btnRenderer?.querySelector("#button-shape-dislike button") ?? undefined;
            const likeStateRaw = btnRenderer?.getAttribute("like-status")?.toUpperCase();
            likeState = ["LIKE", "DISLIKE", "INDIFFERENT"].includes(likeStateRaw ?? "") ? likeStateRaw : "INDIFFERENT";
            break;
        }
        case "yt": {
            btnRenderer = document.querySelector("ytd-watch-metadata segmented-like-dislike-button-view-model") ?? undefined;
            likeBtn = btnRenderer?.querySelector("like-button-view-model button") ?? undefined;
            dislikeBtn = btnRenderer?.querySelector("dislike-button-view-model button") ?? undefined;
            if (likeBtn?.getAttribute("aria-pressed") === "true")
                likeState = "LIKE";
            else if (dislikeBtn?.getAttribute("aria-pressed") === "true")
                likeState = "DISLIKE";
            else if (likeBtn || dislikeBtn)
                likeState = "INDIFFERENT";
            // yt shorts:
            if (!btnRenderer && !likeBtn && !dislikeBtn) {
                btnRenderer = document.querySelector("reel-action-bar-view-model") ?? undefined;
                likeBtn = btnRenderer?.querySelector("like-button-view-model button") ?? undefined;
                dislikeBtn = btnRenderer?.querySelector("dislike-button-view-model button") ?? undefined;
            }
            const liked = likeBtn?.getAttribute("aria-pressed") === "true";
            const disliked = dislikeBtn?.getAttribute("aria-pressed") === "true";
            if (likeBtn && dislikeBtn)
                likeState = liked ? "LIKE" : disliked ? "DISLIKE" : "INDIFFERENT";
            break;
        }
    }
    return {
        likeBtn,
        dislikeBtn,
        btnRenderer,
        likeState,
    };
}
//#region css utils
/**
 * Adds a style element to the DOM at runtime.
 * @param css The CSS stylesheet to add
 * @param ref A reference string to identify the style element - defaults to a random 5-character string - has to be compatible with the HTML id attribute
 * @param transform A function to transform the CSS before adding it to the DOM
 */
async function addStyle(css, ref, transform = (c) => c) {
    if (!UserUtils.isDomLoaded())
        throw new Error("DOM has not finished loading yet");
    const elem = UserUtils.addGlobalStyle(await transform(await CoreUtils.consumeStringGen(css)));
    elem.id = `bytm-style-${ref ?? CoreUtils.randomId(6, 36)}`;
    return elem;
}
/**
 * Adds a global style element with the contents fetched from the specified resource starting with `css-`
 * The CSS can be transformed using the provided function before being added to the DOM.
 */
async function addStyleFromResource(key, transform = (c) => c) {
    try {
        const css = await fetchCss(key);
        if (css) {
            await addStyle(String(transform(css)), key.slice(4));
            return true;
        }
    }
    catch (err) {
        error(`Couldn't add style from resource "${key}":`, err);
        return false;
    }
}
/** Sets a global CSS variable on the &lt;document&gt; element with the name `--bytm-global-${name}` */
function setGlobalCssVar(name, value) {
    document.documentElement.style.setProperty(`--bytm-global-${name.toLowerCase().trim()}`, String(value));
}
/** Sets multiple global CSS variables on the &lt;document&gt; element with the name `--bytm-global-${name}` */
function setGlobalCssVars(vars) {
    for (const [name, value] of Object.entries(vars))
        setGlobalCssVar(name, value);
}
//#region other
/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
function clearInner(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
}
/** Removes all child nodes of an element recursively and also removes the element itself */
function clearNode(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
    element.parentNode.removeChild(element);
}
/**
 * Returns an identifier for the currently playing media type on YTM ("song" or "video").
 * Only works on YTM and will throw if {@linkcode waitVideoElementReady} hasn't been awaited yet.
 * On YT, it will always return "video".
 */
function getCurrentMediaType() {
    if (getDomain() === "yt")
        return "video";
    const songImgElem = document.querySelector("ytmusic-player #song-image");
    if (!songImgElem)
        throw new Error("Couldn't find the song image element. Use this function only after awaiting `waitVideoElementReady()`!");
    return window.getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
}
/** Copies the provided text to the clipboard and shows an error message for manual copying if the grant `GM.setClipboard` is not given. */
function copyToClipboard(text) {
    try {
        GM.setClipboard(String(text));
    }
    catch {
        showPrompt({ type: "alert", message: t("copy_to_clipboard_error", String(text)) });
    }
}
const trustedTypesSupported = typeof window?.trustedTypes?.createPolicy === "function";
let ttPolicy;
// workaround for supporting `target="_blank"` links without compromising security:
const tempTargetAttrName = `data-tmp-target-${CoreUtils.randomId(6, 36)}`;
DOMPurify.addHook("beforeSanitizeAttributes", (node) => {
    if (node.tagName === "A") {
        if (!node.hasAttribute("target"))
            node.setAttribute("target", "_self");
        if (node.hasAttribute("target"))
            node.setAttribute(tempTargetAttrName, node.getAttribute("target"));
    }
});
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.hasAttribute(tempTargetAttrName)) {
        node.setAttribute("target", node.getAttribute(tempTargetAttrName));
        node.removeAttribute(tempTargetAttrName);
        if (node.getAttribute("target") === "_blank")
            node.setAttribute("rel", "noopener noreferrer");
    }
});
/** Sanitizes the provided HTML string with DOMPurify, including enhanced support for Trusted Types and a[target="_blank"] links */
function sanitizeHtml(html, returnTrustedType = trustedTypesSupported) {
    return DOMPurify.sanitize(String(html), { RETURN_TRUSTED_TYPE: returnTrustedType });
}
/**
 * Sets innerHTML directly on Firefox and Safari, while on Chromium a [Trusted Types policy](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) is used to set the HTML.
 * If no HTML string is given, the element's innerHTML will be set to an empty string.
 */
function setInnerHtml(element, html) {
    if (!html)
        html = "";
    if (!ttPolicy && trustedTypesSupported) {
        ttPolicy = window.trustedTypes.createPolicy("bytm-sanitize-html", {
            createHTML: (html) => sanitizeHtml(html, true),
        });
    }
    element.innerHTML = ttPolicy?.createHTML(html) ?? sanitizeHtml(html, false);
}
/** Creates an invisible link element and clicks it to download the provided string or Blob data as a file */
function downloadFile(fileName, data, mimeType = "text/plain") {
    const blob = data instanceof Blob ? data : new Blob([data], { type: mimeType });
    const a = document.createElement("a");
    a.classList.add("bytm-hidden");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    return new Promise((res) => {
        setTimeout(() => {
            a.remove();
            res();
        }, 1);
    });
}
/**
 * Moves the given {@linkcode element} to the {@linkcode target} element with the specified {@linkcode position} (after the target element, as a sibling by default).
 * Doesn't mess with any attached event listeners or other properties of the element.
 * @returns Returns the moved element
 */
function transplantElement(element, target, position = "afterend") {
    const inserted = target.insertAdjacentElement(position, element);
    if (!inserted)
        throw new Error(`Failed to transplant element at position "${position}"`);
    return element;
}let welcomeDialog = null;
/** Creates and/or returns the import dialog */
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
            renderHeader,
            renderBody,
            renderFooter,
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
    // locale switcher
    const localeCont = document.createElement("div");
    localeCont.id = "bytm-welcome-menu-locale-cont";
    const localeImg = document.createElement("img");
    localeImg.id = "bytm-welcome-menu-locale-img";
    localeImg.classList.add("bytm-no-select");
    localeImg.src = await getResourceUrl("icon-globe");
    const localeSelectElem = document.createElement("select");
    localeSelectElem.id = "bytm-welcome-menu-locale-select";
    for (const [locale, { name }] of Object.entries(localesJson)) {
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
    // text
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
    textElems.forEach((elem) => textElem.appendChild(elem));
    textCont.appendChild(textElem);
    contentWrapper.appendChild(textCont);
    return contentWrapper;
}
/** Retranslates all elements inside the welcome menu */
function retranslateWelcomeMenu() {
    const getLink = (href) => {
        return [`<a href="${href}" class="bytm-link" target="_blank" rel="noopener noreferrer">`, "</a>"];
    };
    const changes = {
        "#bytm-welcome-menu-title": (e) => e.textContent = e.ariaLabel = t("welcome_menu_title", scriptInfo$1.name),
        "#bytm-welcome-menu-open-cfg": (e) => {
            e.textContent = e.ariaLabel = t("config_menu");
            e.ariaLabel = e.title = t("open_config_menu_tooltip");
        },
        "#bytm-welcome-menu-footer-close": (e) => {
            e.textContent = e.ariaLabel = t("close");
            e.ariaLabel = e.title = t("close_menu_tooltip");
        },
        "#bytm-welcome-text-line1": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_1")),
        "#bytm-welcome-text-line2": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_2", scriptInfo$1.name)),
        "#bytm-welcome-text-line3": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_3", scriptInfo$1.name, ...getLink(`${packageJson.hosts.greasyfork}/feedback`), ...getLink(packageJson.hosts.openuserjs))),
        "#bytm-welcome-text-line4": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_4", ...getLink(packageJson.funding.url))),
        "#bytm-welcome-text-line5": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_5", ...getLink(packageJson.bugs.url))),
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
}//#region cns. watermark
{
    // console watermark with sexy gradient
    const [styleGradient, gradientContBg] = (() => {
        switch (mode$1) {
            case "production": return ["background: rgb(165, 57, 36); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(165, 57, 36) 100%);", "rgb(165, 57, 36)"];
            case "development": return ["background: rgb(72, 66, 178); background: linear-gradient(90deg, rgb(38, 160, 172) 0%, rgb(33, 48, 158) 40%, rgb(72, 66, 178) 100%);", "rgb(72, 66, 178)"];
        }
    })();
    const styleCommon = "color: #fff; font-size: 1.3rem;";
    const poweredBy = `Powered by:
─ Lots of ambition and dedication
─ My song metadata API: https://api.sv443.net/geniurl
─ My core utility library: https://github.com/Sv443-Network/CoreUtils
─ My DOM utility library: https://github.com/Sv443-Network/UserUtils
─ This library for semver comparison: https://github.com/omichelsen/compare-versions
─ This TrustedTypes-compatible HTML sanitization library: https://github.com/cure53/DOMPurify
─ This markdown parser library: https://github.com/markedjs/marked
─ This tiny event listener library: https://github.com/ai/nanoevents
─ TypeScript and the tslib runtime: https://github.com/microsoft/TypeScript
─ The Cousine font: https://fonts.google.com/specimen/Cousine`;
    console.log(`\
%c${scriptInfo$1.name}%cv${scriptInfo$1.version}%c • ${scriptInfo$1.namespace}%c

Build #${buildNumber$1}${mode$1 === "development" ? " (dev mode)" : ""}

%c${poweredBy}`, `${styleCommon} ${styleGradient} font-weight: bold; padding-left: 6px; padding-right: 6px;`, `${styleCommon} background-color: ${gradientContBg}; padding-left: 8px; padding-right: 8px;`, "color: #fff; font-size: 1.2rem;", "padding: initial; font-size: 0.9rem;", "padding: initial; font-size: 1rem;");
}
//#region init timings
const initTimings = {
    _comments: [
        `This is a performance report generated by ${scriptInfo$1.name} (${packageJson.homepage})`,
        "It shows the amount of time (in ms) it took to complete various stages of the initialization process.",
        "- The 'start' property is a 13-digit epoch timestamp representing the time at which the script started running.",
        "- The timings in the 'durations' property are generic measurements of how long certain phases are. These measurements do not start at the 'start' property timestamp.",
        "- The timings in the 'featureDurations' property are measurements of how long it took for each individual feature entrypoint to initialize, starting from the beginning of the feature initialization phase - also refer to 'featuresAllReady_deferred' in the 'durations' property.",
    ],
    meta: {
        version: scriptInfo$1.version,
        domain: getDomain(),
        userAgent: navigator.userAgent,
        scriptHandler: GM.info?.scriptHandler ?? "unknown",
        scriptHandlerVersion: GM.info?.version ?? "unknown",
        isIncognito: GM.info?.isIncognito ?? undefined,
        sandboxMode: GM.info?.sandboxMode ?? undefined,
        // @ts-expect-error - Violentmonkey-only property
        injectInto: GM.info?.injectInto ?? undefined,
        isFirstPartyIsolation: GM.info?.isFirstPartyIsolation ?? undefined,
    },
    start: 0,
    durations: {},
    featureDurations: {},
};
/**
 * Starts a timer for measuring the duration of a specific phase of the initialization process.
 * Returns a function that, when called, will stop the timer and save the duration in the `initTimings` object under the specified name.
 */
function measureInitDuration(name) {
    const start = Date.now();
    return () => {
        if (typeof initTimings.durations !== "object")
            initTimings.durations = {};
        initTimings.durations[name] = Date.now() - start;
    };
}
//#region preInit
/** Stuff that needs to be called ASAP */
function preInit() {
    try {
        initTimings.start = Date.now();
        const unsupportedHandlers = [
            "FireMonkey",
        ];
        if (unsupportedHandlers.includes(GM.info?.scriptHandler ?? "")) // (translations not loaded yet)
            return alert(`BetterYTM does not work when using ${GM.info?.scriptHandler ?? "(unknown)"} as the userscript manager extension and will be disabled.\nIt's highly recommended you use either ViolentMonkey, TamperMonkey or GreaseMonkey.`);
        setLogLevel(defaultLogLevel);
        initBroadcast();
        initInterface();
        preInitPlugins();
        if (getDomain() === "ytm")
            initBeforeUnloadHook();
        initTimings.preInitEnd = Date.now() - initTimings.start;
        init();
    }
    catch (err) {
        return error("Fatal pre-init error:", err);
    }
}
//#region init
async function init() {
    try {
        const domain = getDomain();
        // feature config:
        const endCfgDur = measureInitDuration("initConfig");
        const features = await initConfig();
        endCfgDur();
        setLogLevel(features.logLevel);
        info("Session ID:", getSessionId());
        // resource cache:
        const endResCacheDur = measureInitDuration("initResourceCache");
        await initResourceCache();
        endResCacheDur();
        // lyrics cache:
        const endLyrCacheDur = measureInitDuration("initLyricsCache");
        await initLyricsCache();
        endLyrCacheDur();
        // translations:
        const initLoc = features.locale ?? "en-US";
        await initTranslations(initLoc);
        // since en-US always has the complete set of keys, it needs to always be loaded:
        initLoc !== "en-US" && await initTranslations("en-US");
        setLocale(initLoc);
        // plugins:
        try {
            initPlugins();
        }
        catch (err) {
            error("Plugin loading error:", err);
            emitInterface("bytm:fatalError", "Error while loading plugins");
        }
        // pre-DOM-load features:
        if (features.disableBeforeUnloadPopup && domain === "ytm")
            enableDiscardBeforeUnload();
        if (features.rememberSongTime)
            initRememberVideoTime();
        // wait for DOM load before continuing init:
        if (!UserUtils.isDomLoaded())
            document.addEventListener("DOMContentLoaded", () => onDomLoad(), { once: true });
        else
            onDomLoad();
    }
    catch (err) {
        error("Fatal error:", err);
        alert(`\
${scriptInfo$1.name} encountered a fatal error during initialization and will not work correctly, if at all.
For information on what caused this error, please refer to the JS console.

${assetSource === "local"
            ? `⚠️ The assetSource constant is set to "local", so this is likely due to the development server not running. This can be confirmed if there are NetworkErrors in the console when fetching ${scriptInfo$1.name} resources.\nPlease run "pnpm dev" or "pnpm serve" in the project directory and reload the page.`
            : `Please report this bug using the issue tracker on GitHub:\n${packageJson.bugs.url}\n\nFor now, you can try reinstalling the script or downgrading to a previous version that worked for you.`}${mode$1 === "development"
            ? `\n\n⚠️ You're running a development version of the script, so it might just be in a broken state at the moment. Either downgrade to the latest stable release, or check back later on the following page for an updated version:\n${packageJson.devVersionUrl}`
            : ""}`);
    }
}
//#region onDomLoad
/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function onDomLoad() {
    initTimings.domLoaded = Date.now() - initTimings.start;
    const domain = getDomain();
    const feats = getFeatures();
    const ftInit = [];
    // for being able to query styles based on domain (just prefix any CSS selector with ".bytm-dom-yt " or ".bytm-dom-ytm ")
    document.body.classList.add(`bytm-dom-${domain}`);
    // needs to run synchronously before any async volume-setting code (initVolumeFeatures) to avoid a microtask vs macrotask race condition
    initExponentialVolume();
    // initialize DOM globals:
    try {
        // run detached:
        setTimeout(() => {
            const endInitGlobalDur = measureInitDuration("initGlobals_deferred");
            initGlobalCss();
            initObservers(feats);
            Promise.allSettled([
                injectCssBundle(),
                initVersionCheck(),
            ]).then(() => endInitGlobalDur());
            initSiteEvents();
            mountCfgMenu();
        }, 0);
    }
    catch (err) {
        error("Encountered error in feature pre-init:", err);
    }
    info(`DOM loaded and feature pre-init finished, now initializing all feature entrypoints for domain "${domain}"...`, LogLevel.Info);
    try {
        //#region welcome dlg
        if (typeof await GM.getValue("bytm-installed") !== "string") {
            // open welcome menu with language selector
            const dlg = await getWelcomeDialog();
            dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo$1.version })));
            info("Showing welcome menu");
            await dlg.open();
            await dlg.once("close");
        }
        // initialize data.json and check for active alerts
        const endStaticDataDur = measureInitDuration("initStaticData");
        initStaticData().then(() => endStaticDataDur());
        await initVersionSessionCounter();
        if (domain === "ytm") {
            //#region (ytm) layout
            ftInit.push(["addWatermark", (async () => {
                    await improveLogo();
                    if (feats.watermarkEnabled)
                        await addWatermark();
                })()]);
            if (feats.fixSpacing)
                ftInit.push(["fixSpacing", fixSpacing()]);
            if (feats.truncatePlayerBarSubtitles)
                ftInit.push(["truncatePlayerBarSubtitles", initTruncatePlayerBarSubtitles()]);
            ftInit.push(["thumbnailOverlay", initThumbnailOverlay()]);
            if (feats.hideCursorOnIdle)
                ftInit.push(["hideCursorOnIdle", initHideCursorOnIdle()]);
            if (feats.fixHdrIssues)
                ftInit.push(["fixHdrIssues", fixHdrIssues()]);
            if (feats.showVotes)
                ftInit.push(["showVotes", initShowVotes()]);
            if (feats.swapLikeDislikeButtons)
                ftInit.push(["swapLikeDislikeBtns", initSwapLikeDislikeBtns()]);
            if (feats.watchPageFullSize)
                ftInit.push(["watchPageFullSize", initWatchPageFullSize()]);
            //#region (ytm) volume
            ftInit.push(["volumeFeatures", initVolumeFeatures()]);
            //#region (ytm) song lists
            if (feats.lyricsQueueButton || feats.deleteFromQueueButton)
                ftInit.push(["queueButtons", initQueueButtons()]);
            ftInit.push(["aboveQueueButtons", initAboveQueueBtns()]);
            if (feats.songListTrackNumbersEnabled)
                ftInit.push(["songListTrackNumbers", addTrackNumbers()]);
            //#region (ytm) behavior
            if (feats.closeToastsTimeout > 0)
                ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);
            ftInit.push(["autoScrollToActiveSongMode", initAutoScrollToActiveSong()]);
            ftInit.push(["yesImStillThere", initStillThere()]);
            //#region (ytm) input
            ftInit.push(["arrowKeySkip", initArrowKeySkip()]);
            ftInit.push(["frameSkip", initFrameSkip()]);
            if (feats.anchorImprovements)
                ftInit.push(["anchorImprovements", addAnchorImprovements()]);
            //#region (ytm) lyrics
            if (feats.geniusLyrics)
                ftInit.push(["playerBarLyricsBtn", addPlayerBarLyricsBtn()]);
            // #region (ytm) integrations
            if (feats.sponsorBlockIntegration)
                ftInit.push(["sponsorBlockIntegration", fixSponsorBlock()]);
            const hideThemeSongLogo = addStyleFromResource("css-hide_themesong_logo");
            if (feats.themeSongVisualizerOpacity !== 100)
                ftInit.push(["themeSongVisualizerOpacity", setThemeSongVisualizerOpacity()]);
            if (feats.themeSongIntegration)
                ftInit.push(["themeSongIntegration", Promise.allSettled([fixThemeSong(), hideThemeSongLogo])]);
            else
                ftInit.push(["themeSongIntegration", Promise.allSettled([fixPlayerPageTheming(), hideThemeSongLogo])]);
            if (feats.removeThumbnailRatingBar)
                ftInit.push(["removeThumbnailRatingBar", (async () => void await addStyleFromResource("css-remove_thumb_rating_bar"))()]);
        }
        //#region (ytm+yt) cfg menu
        try {
            if (domain === "ytm") {
                addSelectorListener("popupContainer", "tp-yt-iron-dropdown #contentWrapper ytmusic-multi-page-menu-renderer #container", {
                    listener: addConfigMenuOptionYTM,
                });
            }
            else if (domain === "yt") {
                addSelectorListener("ytGuide", "#sections ytd-guide-section-renderer:nth-child(6) #items ytd-guide-entry-renderer:nth-child(1)", {
                    listener: (el) => el.parentElement && addConfigMenuOptionYT(el.parentElement),
                });
            }
        }
        catch (err) {
            error("Couldn't add config menu option:", err);
        }
        if (["ytm", "yt"].includes(domain)) {
            //#region (ytm+yt) layout
            if (feats.removeShareTrackingParamSites)
                ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);
            //#region (ytm+yt) input
            ftInit.push(["hotkeys", initHotkeys()]);
            if (feats.autoLikeChannels)
                ftInit.push(["autoLikeChannels", initAutoLike()]);
            ftInit.push(["numKeysSkip", initNumKeysSkip()]);
            //#region (ytm+yt) integrations
            if (feats.disableDarkReaderSites !== "none")
                ftInit.push(["disableDarkReaderSites", disableDarkReader()]);
        }
        emitInterface("bytm:featureInitStarted");
        const initStartTs = Date.now();
        const initTimeout = feats.initTimeout > 0 ? feats.initTimeout : 8000;
        const initializedFeats = [];
        const endFeatInitDur = measureInitDuration("featuresAllReady_deferred");
        (() => Promise.race([
            CoreUtils.pauseFor(initTimeout),
            Promise.allSettled(ftInit.map(([name, prom]) => new Promise(async (res) => {
                const v = await prom;
                initTimings.featureDurations = {
                    ...(initTimings.featureDurations ?? {}),
                    [name]: Date.now() - initStartTs,
                };
                initializedFeats.push(name);
                emitInterface("bytm:featureInitialized", name);
                emitInterface(`bytm:featureInitialized:${name}`);
                res(v);
            }))),
        ]).then(() => {
            endFeatInitDur();
            emitInterface("bytm:allReady");
            initTimings.allReady = Date.now() - initStartTs;
            if (initializedFeats.length < ftInit.length) {
                errorNoToast(`Only ${initializedFeats.length} out of ${ftInit.length} feature entrypoints initialized within the limit of ${initTimeout}ms. These ones have timed out:${ftInit.reduce((a, [name]) => initializedFeats.includes(name) ? a : `${a}\n- ${name}`, "")}`);
            }
            else
                info(`Done initializing ${initializedFeats.length} / ${ftInit.length} feature entrypoints after ${Math.floor(Date.now() - initStartTs)}ms`);
        }))();
        // ensure site adjusts itself to new global CSS
        UserUtils.getUnsafeWindow().dispatchEvent(new Event("resize", { bubbles: true, cancelable: true }));
        // preload icons
        preloadResources();
        initTimings.ready = Date.now() - initTimings.start;
        emitInterface("bytm:ready");
        try {
            registerDevCommands();
        }
        catch (e) {
            warn("Couldn't register dev menu commands:", e);
        }
        try {
            runDevTreatments();
        }
        catch (e) {
            warn("Couldn't run dev treatments:", e);
        }
    }
    catch (err) {
        error("Feature error:", err);
        emitInterface("bytm:fatalError", "Error while initializing features");
    }
    finally {
        initTimings.postInitEnd = Date.now() - initTimings.start;
    }
}
//#region preload icons
/** Preloads all resources that should be preloaded */
async function preloadResources() {
    const preloadAssetRegex = new RegExp(resourcesJson.preloadAssetPattern);
    const urlPromises = Object.keys(resourcesJson.resources)
        .filter(k => preloadAssetRegex.test(k))
        .map(k => getResourceUrl(k));
    const urls = await Promise.all(urlPromises);
    if (urls.length > 0)
        info("Preloading", urls.length, "resources:", urls);
    else
        info("No resources to preload");
    await UserUtils.preloadImages(urls);
}
//#region css
/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
async function injectCssBundle() {
    if (!await addStyleFromResource("css-bundle"))
        error("Couldn't inject CSS bundle due to an error");
}
/** Initializes global CSS values */
function initGlobalCss() {
    try {
        initFonts();
        const applyVars = () => {
            setGlobalCssVars({
                "inner-height": `${window.innerHeight}px`,
                "outer-height": `${window.outerHeight}px`,
                "inner-width": `${window.innerWidth}px`,
                "outer-width": `${window.outerWidth}px`,
            });
        };
        window.addEventListener("resize", applyVars);
        applyVars();
    }
    catch (err) {
        error("Couldn't initialize global CSS:", err);
    }
}
async function initFonts() {
    const fonts = {
        "Cousine": {
            woff: await getResourceUrl("font-cousine_woff"),
            woff2: await getResourceUrl("font-cousine_woff2"),
            truetype: await getResourceUrl("font-cousine_ttf"),
        },
    };
    let css = "";
    for (const [fontName, urls] of Object.entries(fonts))
        css += `\
@font-face {
  font-family: "${fontName}";
  src: ${Object.entries(urls)
            .map(([type, url]) => `url("${url}") format("${type}")`)
            .join(", ")};
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;
    addStyle(css, "fonts");
}
//#region dev menu cmds
/** Registers dev commands using `GM.registerMenuCommand` */
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
                message,
                confirmBtnText: "Reset",
            })) {
                await clearConfig();
                await reloadTab();
            }
        }
        catch {
            // fallback if DOM isn't modifiable for some reason, like a fatal error during init
            if (confirm(message)) {
                await clearConfig();
                await reloadTab();
            }
        }
    });
    isAny && GM.registerMenuCommand(getCmdName("🔍", "menu_command.gm_storage_list_decompressed"), async () => {
        const keys = await GM.listValues();
        dbg(`GM values (${keys.length}):`);
        if (keys.length === 0)
            dbg("  No values found.");
        const values = {};
        let longestKey = 0;
        const decodeError = (key, err) => error(`  "${key}"${" ".repeat(longestKey - key.length)} -> [!!!!!] Decoding Error: ${err}`);
        for (const key of keys) {
            try {
                const isDatKey = key.startsWith("__ds-") && key.endsWith("-dat");
                /** Extracted DataStore ID */
                const dsID = isDatKey ? key.substring(5, key.length - 4) : null;
                /** Whether a -dat key is encoded. Assumes that compressionFormat never changes. */
                const isEncoded = isDatKey
                    ? String(await GM.getValue(`__ds-${dsID}-enf`, "null")) !== "null"
                    : false;
                const val = await GM.getValue(key, undefined);
                values[key] = typeof val !== "undefined" && isEncoded
                    ? await CoreUtils.decompress(val, compressionFormat$1, "string")
                    : val;
                longestKey = Math.max(longestKey, key.length);
            }
            catch (err) {
                decodeError(key, err);
            }
        }
        for (const [key, finalVal] of Object.entries(values)) {
            try {
                const isEncoded = key.startsWith("__ds-") ? String(await GM.getValue(`__ds-${key.substring(5)}-enc`, "null")) !== "null" : false;
                const lengthStr = String(finalVal).length > 50 ? `(${String(finalVal).length} chars) ` : "";
                dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
            }
            catch (err) {
                decodeError(key, err);
            }
        }
    });
    isAny && GM.registerMenuCommand(getCmdName("📋", "menu_command.gm_storage_list_raw"), async () => {
        const keys = await GM.listValues();
        dbg(`GM values (${keys.length}):`);
        if (keys.length === 0)
            dbg("  No values found.");
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
        if (await showPrompt({ type: "confirm", message: `Clear all ${keys.length} GM values?\nSee console for details.`, confirmBtnText: "Clear" })) {
            dbg(`Clearing ${keys.length} GM values:`);
            if (keys.length === 0)
                dbg("  No values found.");
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
            [...listeners].forEach(([k, v]) => {
                listenersAmt += v.length;
                lines.push(`    [${v.length}] ${k}`);
                v.forEach(({ all, continuous }, i) => {
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
                extraButtons: [
                    (dlg) => {
                        const btn = document.createElement("button");
                        btn.textContent = btn.ariaLabel = "Copy and close";
                        btn.addEventListener("click", async () => {
                            copyToClipboard(result);
                            dlg.emitResolve(result);
                            dlg.close();
                        });
                        return btn;
                    },
                ],
                extraButtonsPosition: "before",
            });
        };
        const showErr = async (type, err) => {
            const errMsg = `Error while trying to ${type === "compress" ? "" : "de"}compress`;
            error(errMsg, err);
            await showPrompt({
                type: "alert",
                message: `${errMsg}:\n${err instanceof Error ? `${err.name}: ${err.message}` : String(err)}`,
            });
        };
        await showPrompt({
            type: "prompt",
            message: "Enter text to compress or decompress:",
            textarea: true,
            confirmBtnEnabled: false,
            extraButtons: [
                (dlg) => {
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
                        }
                        catch (e) {
                            dlg.close();
                            showErr("compress", e);
                        }
                    });
                    return btn;
                },
                (dlg) => {
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
                        }
                        catch (e) {
                            dlg.close();
                            showErr("decompress", e);
                        }
                    });
                    return btn;
                },
            ],
            extraButtonsPosition: "before",
        });
    });
    isAny && GM.registerMenuCommand(getCmdName("📤", "menu_command.export_config"), () => downloadData(false));
    isAny && GM.registerMenuCommand(getCmdName("💾", "menu_command.export_full"), () => downloadData(false, true));
    isAny && GM.registerMenuCommand(getCmdName("📥", "menu_command.import_full"), async () => {
        const input = await showPrompt({
            type: "prompt",
            message: "Paste the content of the exported file to import data:",
            confirmBtnText: "Import",
            textarea: true,
        });
        if (input && input.length > 0) {
            await getDSSerializer(true).deserialize(input);
            if (await showPrompt({ type: "confirm", message: "Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?", confirmBtnText: "Reload" }))
                await reloadTab();
        }
    });
    isDev && GM.registerMenuCommand(getCmdName("💥", "menu_command.throw_example_error"), () => error("Test error thrown by user command:", new SyntaxError("Test error")));
    isAny && GM.registerMenuCommand(getCmdName("⏱️", "menu_command.get_performance_report"), () => {
        downloadFile(`${scriptInfo$1.name} Performance Report @ ${new Date().toISOString()}.json`, JSON.stringify(initTimings, null, 2), "application/json");
    });
    isAny && GM.registerMenuCommand(getCmdName("🧪", "menu_command.toggle_dev_treatments"), async () => {
        const val = !await GM.getValue("bytm-dev-treatments", false);
        await GM.setValue("bytm-dev-treatments", val);
        if (await showPrompt({ type: "confirm", message: `Dev treatments are now ${val ? "enabled" : "disabled"}.\nDo you want to reload the page?`, confirmBtnText: "Reload", denyBtnText: "nothxbye" }))
            await reloadTab();
    });
    isDev && GM.registerMenuCommand(getCmdName("🔑", "menu_command.get_dev_plugin_token"), () => showPrompt({
        type: "alert",
        message: devPluginToken ? `Developer plugin token:\n${devPluginToken}` : "Dev plugin not registered yet.",
        extraButtons: [
            (dlg) => {
                const btn = document.createElement("button");
                btn.textContent = btn.ariaLabel = "Copy and close";
                btn.addEventListener("click", async () => {
                    devPluginToken && copyToClipboard(devPluginToken);
                    dlg.emitResolve(devPluginToken ?? null);
                    dlg.close();
                });
                return btn;
            },
        ],
        extraButtonsPosition: "before",
    }));
    GM.registerMenuCommand(getCmdName("📄", "menu_command.download_log_file"), () => {
        downloadFile(`bytm-log-${new Date().toISOString()}.log`, getLogsTxt(), "text/plain");
    });
    // isDev && GM.registerMenuCommand("[TMP] Log used translation keys", async () => {
    //   const data = await GM.getValue("__ds-bytm-dev-used-tr-keys-dat", "{\"keys\":[]}");
    //   const obj = typeof data === "string" ? JSON.parse(data) as { keys: string[] } : data;
    //   const allTrKeys = Object.keys(await fetchLocaleJson("en-US"));
    //   // dbg(`${`${">".repeat(50)}\n`.repeat(3)}\nUsed translation keys (${obj.keys.length} of ${allTrKeys.length}):\n${obj.keys.map(k => `- ${k}`).join("\n")}`);
    //   const unusedKeys = [] as string[];
    //   for(const key of allTrKeys) {
    //     if(!obj.keys.includes(key) && key !== "meta")
    //       unusedKeys.push(key);
    //   }
    //   if(unusedKeys.length > 0)
    //     dbg(`${">".repeat(50)}\n>> Unused translation keys (${unusedKeys.length} of ${allTrKeys.length}):\n${unusedKeys.map(k => `- ${k}`).join("\n")}`);
    // });
    isDev && GM.registerMenuCommand(getCmdName("🗂️", "menu_command.collect_sessions"), () => {
        const sessions = [
            [broadcastTxID, {
                    sessionId: getSessionId(),
                    title: document.title,
                    domain: getDomain(),
                    initTime,
                }],
        ];
        const unsub = siteEvents.on("broadcast:discoverSessionsReply", ({ from, packet }) => {
            sessions.push([from, packet.data]);
        });
        dbg("Collecting session info from open tabs...");
        setTimeout(() => {
            const columns = ["#", "Self?", "Session ID:", "TxID:", "Domain:", "Initialized:", "Session Title:"];
            const columnAlign = ["left", "left", "left", "left", "left", "right", "left"];
            const columnStyle = "color: #db3; font-weight: bold;";
            const resetStyle = "color: inherit; font-weight: inherit;";
            const styles = [];
            for (let i = 0; i < columns.length; i++)
                styles.push(columnStyle, resetStyle);
            console.log(`[${scriptInfo$1.name}/#DEBUG] Collected information from ${sessions.length} open ${CoreUtils.autoPlural("tab", sessions)}:\n${CoreUtils.createTable([
                columns,
                ...sessions.map(([txID, { sessionId, title, domain, initTime }], i) => {
                    const initSince = CoreUtils.secsToTimeStr(Math.floor((Date.now() - initTime) / 1000)).padStart(5, "0");
                    return [
                        i + 1,
                        txID === broadcastTxID ? "Yes" : "No",
                        sessionId,
                        txID,
                        domain,
                        `${initSince} ago`,
                        title,
                    ];
                }),
            ], {
                columnAlign,
                applyCellStyle(i) {
                    if (i === 0)
                        return ["%c", "%c"];
                },
            })}`, ...styles);
            unsub();
        }, 300);
        emitBroadcast({
            type: "discoverSessions",
        });
    });
    isAdv && GM.registerMenuCommand(getCmdName("🔄", "menu_command.reload_all_tabs"), async () => {
        await showPrompt({
            type: "confirm",
            message: "Reload all open tabs that are running BetterYTM?",
            confirmBtnText: "Reload",
        }) && await reloadAllTabs();
    });
    log("Registered dev menu commands");
}
async function runDevTreatments() {
    if (mode$1 !== "development" || !await GM.getValue("bytm-dev-treatments", false))
        return;
    // const dlg = await getAllDataExImDialog();
    // await dlg.open();
}
preInit();})(CoreUtils,UserUtils,DOMPurify,marked,compareVersions);
