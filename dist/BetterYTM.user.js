// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           3.1.0
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-or-later
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@ce7ce8ed/assets/images/logo/logo_dev_48.png
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @match             https://m.youtube.com/*
// @match             https://youtube-nocookie.com/*
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
// @description:tr-TR YouTube Music™ ve YouTube™ için yapılandırılabilir sayfa düzeni ve kullanıcı deneyimi iyileştirmeleri
// @description:tr    YouTube Music™ ve YouTube™ için yapılandırılabilir sayfa düzeni ve kullanıcı deneyimi iyileştirmeleri
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
// @antifeature:tr-TR tracking Kullanılan bazı servisler IP adresinizi ve dinlediğiniz şarkıları geçici olarak kaydedebilir. Bu özellikleri ayarlardan kapatabilirsiniz.
// @antifeature:tr    tracking Kullanılan bazı servisler IP adresinizi ve dinlediğiniz şarkıları geçici olarak kaydedebilir. Bu özellikleri ayarlardan kapatabilirsiniz.
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
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/refs/heads/main/dist/BetterYTM.meta.js
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
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/coreutils@3.8.0/dist/CoreUtils.umd.js
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/userutils@11.0.0/dist/UserUtils.umd.js
// @require           https://cdn.jsdelivr.net/npm/marked@17.0.4/lib/marked.umd.js
// @require           https://cdn.jsdelivr.net/npm/compare-versions@6.1.1/lib/umd/index.js
// @require           https://cdn.jsdelivr.net/npm/dompurify@3.3.3
// ==/UserScript==
/*
  ▄▄▄      ▄   ▄         ▄   ▄▄▄▄▄▄   ▄
  █  █ ▄▄  █   █   ▄▄  ▄ ▄█ █  █  █▀▄▀█
  █▀▀▄ █▄█ █▀  █▀  █▄█ █▀  █   █  █   █
  █▄▄▀ ▀▄▄ ▀▄▄ ▀▄▄ ▀▄▄ █   █   █  █   █

          Made with ❤️ by Sv443
  I welcome every contribution on GitHub!
    https://github.com/Sv443/BetterYTM

  You can install the latest in-development version here:
  https://github.com/Sv443/BetterYTM/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen


  Build Information:

  ┌────────────────┬───────────────────────────────┬────────────────────────────────────────────────────────────────────────────┐
  │ Build Mode:    │ development                   │ (Affects default config values, GM menu commands, and dev tooltips)        │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Build Time:    │ Fri, 04 Sep 2026 15:59:13 GMT │ (UTC timestamp of when the script was built)                               │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Build Number:  │ ce7ce8ed                      │ (8-character SHA of the previous Git commit)                               │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Build UID:     │ WXcBghIFofsy                  │ (Random string appended to URLs to force-refresh cached assets)            │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Asset Source:  │ jsdelivr                      │ (Where all assets like image files, styles, JSONs, etc. are loaded from)   │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Source Branch: │ develop                       │ (Branch used when targeting anything on the Git repo, like loading assets) │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Compatibility: │ loose                         │ (Whether dependencies are baked into the script to improve compatibility)  │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Host Platform: │ github                        │ (The platform distributing this build - affects the config menu slightly)  │
  └────────────────┴───────────────────────────────┴────────────────────────────────────────────────────────────────────────────┘

  Notes:
    - These values are integral to how BetterYTM works. They get "injected" at build time and become a permanent part of the code.
      Depending on where you installed the script and which version of it, they might be vastly different.
    - To modify these values yourself, edit the userscript, search for a variable named 'rawConsts' and edit the variables below that line.
      Beware that this makes it really easy to break the script, so back up the code by copying it first. Reload any page running BetterYTM to test your changes.
    - Refer to the file 'src/vite-env.d.ts' in BetterYTM's source code for a list of possible values.
*/

/* Disclaimer: I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */


(function(_sv443_network_coreutils, _sv443_network_userutils, dompurify, compare_versions, marked) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	_sv443_network_coreutils = __toESM(_sv443_network_coreutils, 1);
	_sv443_network_userutils = __toESM(_sv443_network_userutils, 1);
	dompurify = __toESM(dompurify, 1);
	compare_versions = __toESM(compare_versions, 1);
	var resources_default = {
		externalAssetPattern: "^(css|doc|font|icon|img|trans)-",
		preloadAssetPattern: "^(icon|img)-",
		resources: {
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
				"path": "data.json",
				"ref": "main",
				"integrity": false
			},
			"doc-license": {
				"path": "/LICENSE.txt",
				"ref": "$BRANCH",
				"integrity": false
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
			"icon-shield_info": "icons/shield_info.svg",
			"icon-shield_question": "icons/shield_question.svg",
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
			"trans-tr-TR": "translations/tr-TR.json",
			"trans-zh-CN": "translations/zh-CN.json"
		}
	};
	//#endregion
	//#region assets/locales.json
	var locales_default = {
		"de-DE": {
			"name": "Deutsch (Deutschland)",
			"nameEnglish": "German (Germany)",
			"emoji": "🇩🇪",
			"userscriptDesc": "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™",
			"authors": ["Sv443"],
			"altLocales": [
				"de",
				"de-AT",
				"de-BE",
				"de-CH",
				"de-LI",
				"de-LU"
			],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": ".",
			"sentenceTerminators": [
				".",
				"!",
				"?"
			]
		},
		"en-US": {
			"name": "English (United States)",
			"nameEnglish": "English (United States)",
			"emoji": "🇺🇸",
			"userscriptDesc": "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
			"authors": ["Sv443"],
			"altLocales": ["en", "en-CA"],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": ".",
			"sentenceTerminators": [
				".",
				"!",
				"?"
			]
		},
		"en-GB": {
			"name": "English (Great Britain)",
			"nameEnglish": "English (Great Britain)",
			"emoji": "🇬🇧",
			"userscriptDesc": "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
			"authors": ["Sv443"],
			"altLocales": [
				"en-AU",
				"en-IE",
				"en-NZ",
				"en-ZA"
			],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": ".",
			"sentenceTerminators": [
				".",
				"!",
				"?"
			]
		},
		"es-ES": {
			"name": "Español (España)",
			"nameEnglish": "Spanish (Spain)",
			"emoji": "🇪🇸",
			"userscriptDesc": "Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™",
			"authors": ["Sv443"],
			"altLocales": ["es", "es-MX"],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": ".",
			"sentenceTerminators": [
				".",
				"!",
				"?"
			]
		},
		"fr-FR": {
			"name": "Français (France)",
			"nameEnglish": "French (France)",
			"emoji": "🇫🇷",
			"userscriptDesc": "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™",
			"authors": ["Sv443"],
			"altLocales": [
				"fr",
				"fr-CA",
				"fr-BE",
				"fr-CH",
				"fr-LU"
			],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": ".",
			"sentenceTerminators": [
				".",
				"!",
				"?"
			]
		},
		"hi-IN": {
			"name": "हिंदी (भारत)",
			"nameEnglish": "Hindi (India)",
			"emoji": "🇮🇳",
			"userscriptDesc": "YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार",
			"authors": ["Sv443"],
			"altLocales": ["hi", "hi-NP"],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": "।",
			"sentenceTerminators": [
				"।",
				".",
				"!",
				"?"
			]
		},
		"ja-JP": {
			"name": "日本語 (日本)",
			"nameEnglish": "Japanese (Japan)",
			"emoji": "🇯🇵",
			"userscriptDesc": "YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上",
			"authors": ["Sv443"],
			"altLocales": ["ja"],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": "。",
			"sentenceTerminators": [
				"。",
				"！",
				"？",
				".",
				"!",
				"?"
			]
		},
		"pt-BR": {
			"name": "Português (Brasil)",
			"nameEnglish": "Portuguese (Brazil)",
			"emoji": "🇧🇷",
			"userscriptDesc": "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™",
			"authors": ["Sv443"],
			"altLocales": ["pt", "pt-PT"],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": ".",
			"sentenceTerminators": [
				".",
				"!",
				"?"
			]
		},
		"tr-TR": {
			"name": "Türkçe (Türkiye)",
			"nameEnglish": "Turkish (Turkey)",
			"emoji": "🇹🇷",
			"userscriptDesc": "YouTube Music™ ve YouTube™ için yapılandırılabilir sayfa düzeni ve kullanıcı deneyimi iyileştirmeleri",
			"authors": ["kcangny"],
			"altLocales": ["tr"],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": ".",
			"sentenceTerminators": [
				".",
				"!",
				"?"
			]
		},
		"zh-CN": {
			"name": "中文（简化，中国）",
			"nameEnglish": "Chinese (Simplified, China)",
			"emoji": "🇨🇳",
			"userscriptDesc": "YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进",
			"authors": ["Sv443"],
			"altLocales": [
				"zh",
				"zh-TW",
				"zh-HK",
				"zh-SG"
			],
			"textDir": "ltr",
			"sentenceTerminatorNeutral": "。",
			"sentenceTerminators": [
				"。",
				"！",
				"？",
				".",
				"!",
				"?"
			]
		}
	};
	//#endregion
	//#region src/types.ts
	var LogLevel = /* @__PURE__ */ function(LogLevel) {
		LogLevel[LogLevel["Debug"] = 0] = "Debug";
		LogLevel[LogLevel["Info"] = 1] = "Info";
		return LogLevel;
	}({});
	/**
	* Intents (permissions) BYTM has to grant your plugin for it to be able to access certain features.  
	* TODO: this feature is unfinished, but you should still specify the intents your plugin needs.  
	* Never request more permissions than you need, as this is a bad practice and can lead to your plugin being rejected.
	*/
	var PluginIntent = /* @__PURE__ */ function(PluginIntent) {
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
		return PluginIntent;
	}({});
	//#endregion
	//#region src/constants.ts
	var constants_exports = /* @__PURE__ */ __exportAll({
		assetSource: () => assetSource,
		branch: () => branch$1,
		buildNumber: () => buildNumber$1,
		buildTimestamp: () => buildTimestamp,
		changelogUrl: () => changelogUrl,
		compressionFormat: () => compressionFormat$1,
		defaultLogLevel: () => defaultLogLevel,
		devServerPort: () => devServerPort,
		host: () => host$1,
		initTime: () => initTime,
		initialParams: () => initialParams$1,
		mode: () => mode$1,
		newFeatureAdornmentMaxSessionCount: () => 20,
		platformNames: () => platformNames,
		rawConsts: () => rawConsts,
		repo: () => repo,
		scriptInfo: () => scriptInfo$1,
		sessionStorageAvailable: () => sessionStorageAvailable$1
	});
	/**
	* Check below this variable for the constant variables used throughout BetterYTM.  
	* Edit them however you want, but note that it's really easy to mess something up here and make the script stop working, so it's recommended to back up the code first.  
	* Reload the page to apply changes and refer to your browser's JavaScript console (usually F12, Ctrl+Shift+K or Ctrl+Shift+I) for any errors with your changes.  
	* @deprecated This object was reworked when the build process was migrated to vite.
	*/
	var rawConsts = {};
	/** Path of the GitHub repo - not a URL nor a hostname nor a URL path. To be used in the construction of various GitHub-targeting URLs. */
	var repo = "Sv443/BetterYTM";
	/** The mode in which the script was built (production or development). */
	var mode$1 = "development";
	/** The branch to use in various URLs that point to the GitHub repo. */
	var branch$1 = "develop";
	/** Which host the userscript was installed from. */
	var host$1 = "github";
	/** The build number of the userscript. */
	var buildNumber$1 = "ce7ce8ed";
	/** When the script was built, as a UNIX timestamp. */
	var buildTimestamp = 1788537553167;
	/** The source of the assets - github, jsdelivr or local. */
	var assetSource = "jsdelivr";
	/** The port of the dev server. */
	var devServerPort = 8710;
	/** URL to the changelog file */
	var changelogUrl = `https://raw.githubusercontent.com/${repo}/develop/changelog.md?build=${buildNumber$1}`;
	/** The URL search parameters at the earliest possible time */
	var initialParams$1 = new URL(location.href).searchParams;
	/** Timestamp of when the script was initialized. */
	var initTime = Date.now();
	/** Names of platforms by key of {@linkcode host} */
	var platformNames = (0, _sv443_network_coreutils.pureObj)({
		github: "GitHub",
		greasyfork: "Greasy Fork",
		openuserjs: "OpenUserJS"
	});
	/** Default compression format used throughout BYTM */
	var compressionFormat$1 = "deflate-raw";
	/** Whether sessionStorage is available and working */
	var sessionStorageAvailable$1 = typeof sessionStorage?.setItem === "function" && (() => {
		try {
			const key = `_bytm_test_${(0, _sv443_network_coreutils.randomId)(6, 36, false, true)}`;
			sessionStorage.setItem(key, "test");
			sessionStorage.removeItem(key);
			return true;
		} catch {
			return false;
		}
	})();
	/**
	* Fallback and initial value of how much info should be logged to the devtools console  
	* 0 = Debug (show everything) or 1 = Info (show only important stuff)
	*/
	var defaultLogLevel = LogLevel.Debug;
	/** Info about the userscript, parsed from the userscript header (injected by src/tools/post-build.ts) */
	var scriptInfo$1 = (0, _sv443_network_coreutils.pureObj)({
		name: GM_info.script.name,
		version: GM_info.script.version,
		namespace: GM_info.script.namespace
	});
	//#endregion
	//#region src/utils/translations.ts
	/** Contains the identifiers of all initialized and loaded translation locales */
	var initializedLocales = /* @__PURE__ */ new Set();
	/** The currently active locale */
	var activeLocale = "en-US";
	/** The current locale's text direction */
	var activeLocaleDir = "ltr";
	_sv443_network_userutils.tr.addTransform(_sv443_network_userutils.tr.transforms.percent);
	_sv443_network_userutils.tr.addTransform(_sv443_network_userutils.tr.transforms.templateLiteral);
	/** Used to check which keys are unused. */
	var devMarkTrKeyUsed = async (key) => {};
	/** Initializes the translations for the given locale if they haven't been initialized yet. */
	async function initTranslations(locale) {
		if (initializedLocales.has(locale)) return;
		initializedLocales.add(locale);
		try {
			const transFile = await fetchTranslationResource(locale);
			let fallbackTrans = {};
			if (getFeature("localeFallback")) {
				_sv443_network_userutils.tr.setFallbackLanguage("en-US");
				fallbackTrans = await fetchTranslationResource("en-US");
			}
			const baseTransFile = typeof transFile?.meta === "object" && "base" in transFile.meta && typeof transFile.meta.base === "string" ? await fetchTranslationResource(transFile.meta.base) : void 0;
			const { meta: { authors: _authors, ...meta }, ...trans } = {
				...fallbackTrans ?? {},
				...baseTransFile ?? {},
				...transFile
			};
			_sv443_network_userutils.tr.addTranslations(locale, {
				...meta,
				...trans
			});
			loggers.translation.info(`Loaded translations for locale '${locale}'`);
		} catch (err) {
			const errStr = `Couldn't load translations for locale '${locale}'`;
			loggers.translation.error(errStr, err);
			throw new Error(errStr, { cause: err });
		}
	}
	/** Fetches the JSON translations file of the passed locale. */
	async function fetchTranslationResource(locale) {
		const res = await (0, _sv443_network_coreutils.fetchAdvanced)(await getResourceUrl(`trans-${locale}`));
		const bodyTxt = await res.text();
		getFeature("logHttp") && loggers.translation.log(`Fetched translation resource for locale '${locale}' with status ${res.status}`);
		if (res.status < 200 || res.status >= 300) throw new Error(`Failed to fetch translation resource for locale '${locale}'`);
		return JSON.parse(bodyTxt);
	}
	/** Sets the new locale to use in translations. */
	function setLocale(locale) {
		activeLocale = locale;
		activeLocaleDir = locales_default[locale]?.textDir ?? "ltr";
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
		devMarkTrKeyUsed(key);
		if (!initializedLocales.has(locale)) await initTranslations(locale);
		return typeof _sv443_network_userutils.tr.getTranslations(locale)?.[key] === "string";
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
		if (locale === "en-US") hasKeyFor(locale, key).then((hasKey) => !hasKey && loggers.translation.warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);
		devMarkTrKeyUsed(key);
		return _sv443_network_userutils.tr.for(locale, key, ...args);
	}
	/**
	* Returns the translated string for the given {@linkcode key} in the given {@linkcode locale} with an added pluralization identifier based on the passed {@linkcode num}  
	* Also inserts the passed positional {@linkcode args} at the 1-indexed `%n` placeholders.  
	* Tries to fall back to the non-pluralized syntax if no translation was found.
	*/
	function tlp(locale, key, num, ...args) {
		if (typeof num !== "number") num = num.length;
		const tlKey = `${key}-${num === 1 ? "1" : "n"}`;
		devMarkTrKeyUsed(tlKey);
		if (locale === "en-US") hasKeyFor(locale, tlKey).then((hasKey) => !hasKey && loggers.translation.warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);
		const trans = tl(locale, tlKey, ...args);
		if (trans === key) return t(key, ...args);
		return trans;
	}
	/** Creates a {@linkcode Translatable} object with the translations for the given key and arguments. */
	function createTranslatable(key, args = []) {
		return Object.keys(locales_default).reduce((acc, locale) => {
			acc[locale] = tl(locale, key, ...args);
			return acc;
		}, {});
	}
	/** Returns the appropriate translation for the given {@linkcode Translatable} object based on the current locale. Falls back to `en-US` */
	function resolveTranslatable(trnsl) {
		return trnsl[getLocale()] ?? trnsl["en-US"] ?? `<MISSING TRANSLATIONS: ${JSON.stringify(trnsl)}>`;
	}
	//#endregion
	//#region src/components/BytmDialog.ts
	/** Whether the dialog system has been initialized */
	var dialogsInitialized = false;
	/** Container element for all BytmDialog elements */
	var dialogContainer;
	/** ID of the last opened (top-most) dialog */
	var currentDialogId = null;
	/** IDs of all currently open dialogs, top-most first */
	var openDialogs = [];
	/** TODO: remove as soon as config menu is migrated to use BytmDialog */
	var setCurrentDialogId = (id) => currentDialogId = id;
	/** Creates and manages a modal dialog element */
	var BytmDialog = class BytmDialog extends _sv443_network_coreutils.NanoEmitter {
		options;
		id;
		dialogOpen = false;
		dialogMounted = false;
		constructor(options) {
			super();
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
		/** Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM */
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
				if (dialogContainer) dialogContainer.appendChild(bgElem);
				else document.addEventListener("DOMContentLoaded", () => dialogContainer?.appendChild(bgElem), { once: true });
			} catch (e) {
				return loggers.dialog.error("Failed to render dialog content:", e);
			}
			this.attachListeners(bgElem);
			this.events.emit("render");
			return bgElem;
		}
		/** Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call */
		unmount() {
			this.close();
			this.dialogMounted = false;
			const clearSelectors = [`#bytm-${this.id}-dialog-bg`];
			for (const sel of clearSelectors) {
				const elem = document.querySelector(sel);
				elem?.hasChildNodes() && clearInner(elem);
				document.querySelector(sel)?.remove();
			}
			this.events.emit("clear");
		}
		/** Clears the DOM of the dialog and then renders it again */
		async remount() {
			this.unmount();
			await this.mount();
		}
		/** Returns true if the dialog is currently mounted */
		isMounted() {
			return this.dialogMounted;
		}
		/**
		* Opens the dialog - also mounts it if it hasn't been mounted yet  
		* Prevents default action and immediate propagation of the passed event
		*/
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
			if (!dialogBg) return loggers.dialog.warn(`Couldn't find background element for dialog with ID '${this.id}'`);
			dialogBg.style.visibility = "visible";
			dialogBg.style.display = "block";
			currentDialogId = this.id;
			openDialogs.unshift(this.id);
			this.events.emit("open");
			emitInterface("bytm:dialogOpened", this);
			emitInterface(`bytm:dialogOpened:${this.id}`, this);
			return dialogBg;
		}
		/** Closes the dialog - prevents default action and immediate propagation of the passed event */
		close(e) {
			e?.preventDefault();
			e?.stopImmediatePropagation();
			if (!this.isOpen()) return;
			this.dialogOpen = false;
			const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
			if (!dialogBg) return loggers.dialog.warn(`Couldn't find background element for dialog with ID '${this.id}'`);
			dialogBg.style.visibility = "hidden";
			dialogBg.style.display = "none";
			const oidx = openDialogs.indexOf(this.id);
			if (oidx > -1) openDialogs.splice(oidx, 1);
			currentDialogId = openDialogs[0] ?? null;
			this.events.emit("close");
			emitInterface("bytm:dialogClosed", this);
			emitInterface(`bytm:dialogClosed:${this.id}`, this);
			if (this.options.destroyOnClose) this.destroy();
			else if (this.options.unmountOnClose) this.unmount();
			this.removeBgInert();
		}
		/** Returns true if the dialog is currently open */
		isOpen() {
			return this.dialogOpen;
		}
		/** Clears the DOM of the dialog and removes all event listeners */
		destroy() {
			this.unmount();
			this.events.emit("destroy");
			this.options.removeListenersOnDestroy && this.unsubscribeAll();
		}
		/** Initializes the dialog system */
		static initDialogs() {
			if (dialogsInitialized) return;
			dialogsInitialized = true;
			const createContainer = () => {
				const bytmDialogCont = dialogContainer = document.createElement("div");
				bytmDialogCont.id = "bytm-dialog-container";
				document.body.appendChild(bytmDialogCont);
			};
			if (!(0, _sv443_network_userutils.isDomLoaded)()) document.addEventListener("DOMContentLoaded", createContainer, { once: true });
			else createContainer();
		}
		/** Returns the ID of the top-most dialog (the dialog that has been opened last) */
		static getCurrentDialogId() {
			return currentDialogId;
		}
		/** Returns the IDs of all currently open dialogs, top-most first */
		static getOpenDialogs() {
			return openDialogs;
		}
		/** Sets this dialog and the body to be inert and makes sure the top-most dialog is not inert. If no other dialogs are open, the body is not set to be inert. */
		removeBgInert() {
			if (currentDialogId) if (currentDialogId === "cfg-menu") document.querySelector("#bytm-cfg-menu-bg")?.removeAttribute("inert");
			else document.querySelector(`#bytm-${currentDialogId}-dialog-bg`)?.removeAttribute("inert");
			if (openDialogs.length === 0) {
				document.body.classList.remove("bytm-disable-scroll");
				document.querySelector(getSelector("generic", "app"))?.removeAttribute("inert");
			}
			document.querySelector(`#bytm-${this.id}-dialog-bg`)?.setAttribute("inert", "true");
		}
		/** Sets this dialog to be not inert and the body and all other dialogs to be inert */
		setBgInert() {
			for (const dialogId of openDialogs) if (dialogId !== this.id) if (dialogId === "cfg-menu") document.querySelector("#bytm-cfg-menu-bg")?.setAttribute("inert", "true");
			else document.querySelector(`#bytm-${dialogId}-dialog-bg`)?.setAttribute("inert", "true");
			document.body.classList.add("bytm-disable-scroll");
			document.querySelector(getSelector("generic", "app"))?.setAttribute("inert", "true");
			document.querySelector(`#bytm-${this.id}-dialog-bg`)?.removeAttribute("inert");
		}
		/** Called on every {@linkcode mount()} to attach all generic event listeners */
		attachListeners(bgElem) {
			if (this.options.closeOnBgClick) bgElem.addEventListener("click", (e) => {
				if (this.isOpen() && e.target?.id === `bytm-${this.id}-dialog-bg`) this.close(e);
			});
			if (this.options.closeOnEscPress) document.body.addEventListener("keydown", (e) => {
				if (e.key === "Escape" && this.isOpen() && BytmDialog.getCurrentDialogId() === this.id) this.close(e);
			});
		}
		/** Returns the dialog content element and all its children */
		async getDialogContent() {
			const header = this.options.renderHeader?.(this);
			const footer = this.options.renderFooter?.(this);
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
				onInteraction(closeBtnEl, (e) => this.close(e));
				headerWrapperEl.appendChild(closeBtnEl);
			}
			dialogWrapperEl.appendChild(headerWrapperEl);
			const dialogBodyElem = document.createElement("div");
			dialogBodyElem.id = `bytm-${this.id}-dialog-body`;
			dialogBodyElem.classList.add("bytm-dialog-body");
			this.options.small && dialogBodyElem.classList.add("small");
			dialogBodyElem.appendChild(await this.options.renderBody(this));
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
	};
	//#endregion
	//#region src/utils/Logger.ts
	/** Mapping of predefined {@linkcode LogCategory} entries. */
	var loggerCategoryMapping = {
		uncategorized: "Uncategorized",
		autoLike: "AutoLike",
		behavior: "Behavior",
		broadcast: "Broadcast",
		command: "Command",
		configMenu: "ConfigMenu",
		data: "Data",
		debug: "Debug",
		dialog: "Dialog",
		feature: "Feature",
		hotkey: "Hotkey",
		init: "Init",
		input: "Input",
		integration: "Integration",
		layout: "Layout",
		lyrics: "Lyrics",
		misc: "Misc",
		performance: "Performance",
		plugin: "Plugin",
		observer: "Observer",
		siteEvent: "SiteEvent",
		translation: "Translation",
		volume: "Volume",
		xhr: "XHR"
	};
	/**
	* Class used for all kinds of ephemeral logging. Log data does *not* persist across sessions.  
	* Each log has a category, severity, timestamp, and arguments, so that they can be filtered, serialized and displayed neatly.  
	*   
	* All instances share a single static log store accessible via {@linkcode Logger.logs}.  
	* Custom logging infrastructure should push new log lines using the static method {@linkcode Logger.pushLog()}, so that a BYTM log download will include the custom logs as well.
	*/
	var Logger = class Logger {
		category;
		/** Current log level applied across all Logger instances. */
		static curLogLevel = LogLevel.Info;
		/** Shared log history across all Logger instances. */
		static logs = [];
		/** Total log lines ever pushed (including truncated ones). */
		static logLines = 0;
		/** Max number of log lines kept in the {@linkcode Logger.logs} memory. */
		static maxLogLines = 2500;
		/** Common prefix for each console line. Allows easy filtering of log lines. */
		conPrefix;
		/** Common prefix for each console line of type DEBUG (using the method {@linkcode Logger.dbg()}). Allows easy filtering of debug info. */
		conPrefixDbg;
		/** Callback that gets called when the {@linkcode Logger.error()} method is called. This is used for showing a toast notification for each error. */
		onError;
		/**
		* Class used for all kinds of logging.  
		* Each log has a category, severity, timestamp, and arguments, so that they can be filtered and displayed neatly.  
		* All instances share a single static log store accessible via {@linkcode Logger.logs}.
		*/
		constructor(category, options) {
			this.category = category;
			this.conPrefix = `[${scriptInfo$1.name}/${category}]`;
			this.conPrefixDbg = `[${scriptInfo$1.name}/${category}/#DEBUG#]`;
			this.onError = options?.onError ?? null;
		}
		/**
		* Pushes a new line to the globally shared log memory (the {@linkcode Logger.logs} array).  
		* Also increases the log line counter {@linkcode Logger.logLines} and truncates logs if they are above {@linkcode Logger.maxLogLines}.  
		* When adding custom logging systems, this method should be used to make BetterYTM aware of the custom logs.
		*/
		static pushLog(category, type, time, ...args) {
			Logger.logs.push([
				category,
				type,
				time ?? Date.now(),
				...args
			]);
			Logger.logLines++;
			if (Logger.logs.length > Logger.maxLogLines) Logger.logs.shift();
		}
		/** Converts a value to a string for log serialization. */
		static serializeLogVal(val, primaryScope = true) {
			if (typeof val === "undefined") return primaryScope ? "[undefined]" : "(undefined)";
			if (val === null) return primaryScope ? "[null]" : "(null)";
			if (Array.isArray(val)) return `[Array (${val.length}) <${val.map((v) => Logger.serializeLogVal(v, false)).join(", ")}>]`;
			if (val instanceof Element) return Logger.serializeElement(val);
			if (typeof val === "function") return val.name ? `[Function <${val.name}()>]` : "[anonymous function()]";
			if (val instanceof _sv443_network_coreutils.DatedError) return `[${val.name} (@ ${val.date.toISOString()}): ${val.message}]`;
			if (val instanceof Error) return `[${val.name}: ${val.message}]`;
			if (val instanceof Date) return `[Date (@ ${val.toISOString()})]`;
			if (val instanceof Response) return `[Response ${val.status} (${val.url})]`;
			if (val instanceof Map) return `[Map (${val.size}) <${Array.from(val.entries()).map(([k, v]) => `${Logger.serializeLogVal(k, false)} => ${Logger.serializeLogVal(v, false)}`).join(", ")}>]`;
			if (val instanceof Set) return `[Set (${val.size}) <${Array.from(val.values()).map((v) => Logger.serializeLogVal(v, false)).join(", ")}>]`;
			if (val instanceof Blob) return `[Blob (${val.type}, ${val.size} bytes)]`;
			if (val instanceof File) return `[File (${val.name}, ${val.type}, ${val.size} bytes)]`;
			if (val instanceof BytmDialog) return `[BytmDialog #${val.id}${val.isOpen() ? " (is open)" : ""}]`;
			if (typeof val === "object") {
				const unknownObj = `[Object <${val.constructor?.name ?? "(unknown)"}>]`;
				try {
					if (val.constructor?.name === "Object" || val.constructor === void 0) return JSON.stringify(val);
					return unknownObj;
				} catch {
					return "toString" in val ? val.toString() : unknownObj;
				}
			}
			return primaryScope ? `${val}` : `"${val}"`;
		}
		/** Extracts the log level from the last item of spread args, splicing it out if found. Returns `LogLevel.Debug` if no explicit level is given. */
		static getLogLevel(args) {
			const minLogLvl = 0, maxLogLvl = 1;
			const lastArg = args.at(-1);
			if (typeof lastArg === "number" && lastArg >= 0 && lastArg <= Object.keys(LogLevel).length / 2 - 1) return (0, _sv443_network_coreutils.clamp)(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
			return LogLevel.Debug;
		}
		/** Returns a string representation of all logs, formatted for downloading as a file. */
		static serializeLogs() {
			const longestLogType = Math.max(...Logger.logs.map(([, type]) => type.length));
			return (Logger.logs.length >= Logger.maxLogLines ? `// Note: there were more than ${Logger.maxLogLines} lines, so the ${Logger.logLines - Logger.maxLogLines} oldest lines were truncated.\n\n` : "") + [...Logger.logs].reverse().reduce((acc, [category, type, time, ...args]) => {
				if (args.length === 0) return acc;
				const timestamp = new Date(time).toISOString().replace("T", " ; ").replace("Z", "");
				const typeTag = `[${type}]`.padEnd(longestLogType + 2, " ");
				const longestCategory = Math.max(...Object.values(loggerCategoryMapping).map((v) => v.length));
				const categoryTag = `[${category}]`.padEnd(longestCategory + 2, " ");
				const filteredArgs = Object.values(LogLevel).filter((v) => typeof v === "number").includes(args.at(-1)) ? args.slice(0, args.length - 1) : args;
				try {
					return `[${timestamp}] ${typeTag} ${categoryTag} ${filteredArgs.map((a) => Logger.serializeLogVal(a)).join(" ")}\n${acc}`;
				} catch {
					return `[${timestamp}] ${typeTag} ${categoryTag} ${filteredArgs.map((a) => typeof a === "object" && a && "toString" in a ? a.toString() : String(a)).join(" ")}\n${acc}`;
				}
			}, "");
		}
		/** Serializes an element in a way where it can actually be traced back on the page. */
		static serializeElement(val) {
			const sibIdx = !val.parentElement ? "(root)" : [...val.parentElement.childNodes].findIndex((el) => el === val);
			return `[Element <${val.tagName.toLowerCase()}${val.id ? ` id="${val.id}"` : ""}${val.className ? ` class="${val.className}"` : ""} sibling-idx="${sibIdx}">]`;
		}
		/**
		* Logs all passed values to the console, as long as the log level is sufficient.  
		* @param args Last parameter is log level (0 = Debug, any other value = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert it to a string if it shouldn't be.
		*/
		log(...args) {
			Logger.pushLog(this.category, "LOG", Date.now(), ...args);
			if (Logger.curLogLevel <= Logger.getLogLevel(args)) console.log(this.conPrefix, ...args);
		}
		/**
		* Logs all passed values to the console as info, as long as the log level is sufficient.  
		* @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert it to a string if it shouldn't be.
		*/
		info(...args) {
			Logger.pushLog(this.category, "INFO", Date.now(), ...args);
			if (Logger.curLogLevel <= Logger.getLogLevel(args)) console.info(this.conPrefix, ...args);
		}
		/** Logs all passed values to the console as a warning, no matter the log level. */
		warn(...args) {
			Logger.pushLog(this.category, "WARN", Date.now(), ...args);
			console.warn(this.conPrefix, ...args);
		}
		/** Logs all passed values to the console as an error, no matter the log level. */
		error(...args) {
			Logger.pushLog(this.category, "ERROR", Date.now(), ...args);
			console.error(this.conPrefix, ...args);
			try {
				this.onError?.(...args);
			} catch (e) {
				Logger.pushLog(this.category, "ERROR", Date.now(), "Error while showing error toast:", e);
				console.error(this.conPrefix, "Error while showing error toast:", e);
			}
		}
		/** Logs all passed values to the console as an error, no matter the log level. Doesn't show an error toast. */
		errorNoToast(...args) {
			Logger.pushLog(this.category, "ERROR", Date.now(), ...args);
			console.error(this.conPrefix, ...args);
		}
		/** Logs all passed values to the console with a debug-specific prefix. */
		dbg(...args) {
			Logger.pushLog(this.category, "DBG", Date.now(), ...args);
			console.log(this.conPrefixDbg, ...args);
		}
	};
	//#endregion
	//#region src/observers.ts
	/** Global SelectorObserver instances usable throughout the script for improved performance */
	var globservers = {};
	/** Whether all observers have been initialized */
	var globserversReady = false;
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
		} catch (err) {
			loggers.observer.error(`Couldn't add listener to globserver '${observerName}':`, err);
		}
	}
	/** Returns a proxy function that enables and bootstraps the SelectorObserver instance. */
	function getEnableObsFn(observerName) {
		return () => {
			const observer = globservers[observerName];
			observer.enable();
			loggers.observer.log(`Enabled SelectorObserver instance '${observerName}' with base element:`, observer.baseElement);
		};
	}
	/** Call after DOM load to initialize all SelectorObserver instances */
	function initObservers(cfg) {
		/** Options that are applied to every SelectorObserver instance */
		const defaultObserverOptions = {
			disableOnNoListeners: false,
			enableOnAddListener: false,
			defaultDebounce: cfg.defaultObserverDebounce,
			defaultDebounceType: "immediate"
		};
		for (const observer of Object.values(globservers)) observer.on("enabled", () => loggers.observer.info("Observer enabled for base element", observer.baseElement));
		try {
			globservers.body = new _sv443_network_userutils.SelectorObserver(document.body, {
				...defaultObserverOptions,
				defaultDebounce: (0, _sv443_network_userutils.clamp)(defaultObserverOptions.defaultDebounce, 100, 500),
				subtree: false
			});
			globservers.body.enable();
			globservers.bytmDialogContainer = new _sv443_network_userutils.SelectorObserver(getSelector("observer", "bytmDialogContainer"), {
				...defaultObserverOptions,
				defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 1.5),
				subtree: true
			});
			globservers.bytmDialogContainer.enable();
			switch (getDomain()) {
				case "ytm": {
					const browseResponseSelector = getSelector("observer", "browseResponse");
					globservers.browseResponse = new _sv443_network_userutils.SelectorObserver(browseResponseSelector, {
						...defaultObserverOptions,
						defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
						subtree: true
					});
					globservers.body.addListener(browseResponseSelector, { listener: getEnableObsFn("browseResponse") });
					const searchPageSelector = getSelector("observer", "searchPage");
					globservers.searchPage = new _sv443_network_userutils.SelectorObserver(searchPageSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(searchPageSelector, { listener: getEnableObsFn("searchPage") });
					const navBarSelector = getSelector("observer", "navBar");
					globservers.navBar = new _sv443_network_userutils.SelectorObserver(navBarSelector, {
						...defaultObserverOptions,
						subtree: false
					});
					globservers.body.addListener(navBarSelector, { listener: getEnableObsFn("navBar") });
					const mainPanelSelector = getSelector("observer", "mainPanel");
					globservers.mainPanel = new _sv443_network_userutils.SelectorObserver(mainPanelSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(mainPanelSelector, { listener: getEnableObsFn("mainPanel") });
					const sidebarSelector = getSelector("observer", "sideBar");
					globservers.sideBar = new _sv443_network_userutils.SelectorObserver(sidebarSelector, {
						...defaultObserverOptions,
						attributes: true,
						childList: true,
						subtree: true
					});
					globservers.body.addListener(sidebarSelector, { listener: getEnableObsFn("sideBar") });
					const sidePanelSelector = getSelector("observer", "sidePanel");
					globservers.sidePanel = new _sv443_network_userutils.SelectorObserver(sidePanelSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(sidePanelSelector, { listener: getEnableObsFn("sidePanel") });
					const playerBarSelector = getSelector("observer", "playerBar");
					globservers.playerBar = new _sv443_network_userutils.SelectorObserver(playerBarSelector, { ...defaultObserverOptions });
					globservers.body.addListener(playerBarSelector, { listener: () => {
						globservers.playerBar.enable();
					} });
					const playerBarInfoSelector = getSelector("observer", "playerBarInfo");
					globservers.playerBarInfo = new _sv443_network_userutils.SelectorObserver(playerBarInfoSelector, {
						...defaultObserverOptions,
						attributes: true,
						attributeFilter: ["title"]
					});
					globservers.playerBar.addListener(playerBarInfoSelector, { listener: getEnableObsFn("playerBarInfo") });
					const playerBarMiddleButtonsSelector = getSelector("observer", "playerBarMiddleButtons");
					globservers.playerBarMiddleButtons = new _sv443_network_userutils.SelectorObserver(playerBarMiddleButtonsSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.playerBar.addListener(playerBarMiddleButtonsSelector, { listener: getEnableObsFn("playerBarMiddleButtons") });
					const playerBarRightControls = getSelector("observer", "playerBarRightControls");
					globservers.playerBarRightControls = new _sv443_network_userutils.SelectorObserver(playerBarRightControls, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.playerBar.addListener(playerBarRightControls, { listener: getEnableObsFn("playerBarRightControls") });
					const popupContainerSelector = getSelector("observer", "popupContainer");
					globservers.popupContainer = new _sv443_network_userutils.SelectorObserver(popupContainerSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(popupContainerSelector, { listener: getEnableObsFn("popupContainer") });
					break;
				}
				case "yt": {
					const ytGuideSelector = getSelector("observer", "ytGuide");
					globservers.ytGuide = new _sv443_network_userutils.SelectorObserver(ytGuideSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(ytGuideSelector, { listener: getEnableObsFn("ytGuide") });
					const ytdBrowseSelector = getSelector("observer", "ytdBrowse");
					globservers.ytdBrowse = new _sv443_network_userutils.SelectorObserver(ytdBrowseSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(ytdBrowseSelector, { listener: getEnableObsFn("ytdBrowse") });
					const ytAppHeaderSelector = getSelector("observer", "ytAppHeader");
					globservers.ytAppHeader = new _sv443_network_userutils.SelectorObserver(ytAppHeaderSelector, {
						...defaultObserverOptions,
						defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
						subtree: true
					});
					globservers.ytdBrowse.addListener(ytAppHeaderSelector, { listener: getEnableObsFn("ytAppHeader") });
					const ytWatchFlexySelector = getSelector("observer", "ytWatchFlexy");
					globservers.ytWatchFlexy = new _sv443_network_userutils.SelectorObserver(ytWatchFlexySelector, {
						...defaultObserverOptions,
						defaultDebounce: (0, _sv443_network_userutils.clamp)(Math.floor(defaultObserverOptions.defaultDebounce * 3), 100, 300),
						subtree: true
					});
					globservers.body.addListener(ytWatchFlexySelector, { listener: getEnableObsFn("ytWatchFlexy") });
					const ytWatchMetadataSelector = getSelector("observer", "ytWatchMetadata");
					globservers.ytWatchMetadata = new _sv443_network_userutils.SelectorObserver(ytWatchMetadataSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.ytWatchFlexy.addListener(ytWatchMetadataSelector, { listener: getEnableObsFn("ytWatchMetadata") });
					const mastheadSelector = getSelector("observer", "ytMasthead");
					globservers.ytMasthead = new _sv443_network_userutils.SelectorObserver(mastheadSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(mastheadSelector, { listener: getEnableObsFn("ytMasthead") });
				}
			}
			if (getFeature("verboseObservers")) for (const [name, obs] of Object.entries(globservers)) {
				const baseElem = typeof obs.baseElement === "string" ? `'${obs.baseElement}'` : Logger.serializeElement(obs.baseElement);
				obs.on("checked", () => {
					loggers.debug.log(`SelectorObserver with name '${name}' and base element ${baseElem} is checking for elements.`, LogLevel.Info);
				});
				obs.on("found", (data) => {
					const elements = data.elements instanceof NodeList ? [...data.elements].map((e) => Logger.serializeElement(e)).join(", ") : data.elements;
					loggers.debug.info(`SelectorObserver with name '${name}' and base element ${baseElem} found element(s):`, elements, LogLevel.Info);
				});
			}
			globserversReady = true;
			emitInterface("bytm:observersReady");
		} catch (err) {
			loggers.observer.error("Failed to initialize observers:", err);
		}
	}
	//#endregion
	//#region src/siteEvents.ts
	/** Array of all site events. */
	var allSiteEvents = [
		"configChanged",
		"configHeaderSelected",
		"configOptionChanged",
		"rebuildCfgMenu",
		"recreateCfgMenu",
		"cfgMenuClosed",
		"welcomeMenuClosed",
		"hotkeyInputActive",
		"queueChanged",
		"autoplayQueueChanged",
		"songTitleChanged",
		"watchIdChanged",
		"pathChanged",
		"fullscreenToggled",
		"updateVolumeSliderLabel",
		"autoLikeChannelsUpdated",
		"voteLabelsAdded",
		"broadcast"
	];
	/** EventEmitter instance that is used to detect various changes to the site and userscript */
	var siteEvents = new _sv443_network_coreutils.NanoEmitter({ publicEmit: true });
	var observers = [];
	var lastVidId = null;
	var lastPathname = null;
	var lastFullscreen;
	/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
	function initSiteEvents() {
		try {
			if (getDomain() === "ytm") {
				const queueObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
					if (addedNodes.length > 0 || removedNodes.length > 0) {
						loggers.siteEvent.info(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
						emitSiteEvent("queueChanged", target);
					}
				});
				addSelectorListener("sidePanel", "#contents.ytmusic-player-queue", { listener: (el) => {
					queueObs.observe(el, { childList: true });
				} });
				const autoplayObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
					if (addedNodes.length > 0 || removedNodes.length > 0) {
						loggers.siteEvent.info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
						emitSiteEvent("autoplayQueueChanged", target);
					}
				});
				addSelectorListener("sidePanel", "ytmusic-player-queue #automix-contents", { listener: (el) => {
					autoplayObs.observe(el, { childList: true });
				} });
				let lastTitle = null;
				addSelectorListener("playerBarInfo", "yt-formatted-string.title", {
					continuous: true,
					listener: (titleElem) => {
						const oldTitle = lastTitle;
						const newTitle = titleElem.textContent;
						if (newTitle === lastTitle || !newTitle) return;
						lastTitle = newTitle;
						loggers.siteEvent.info(`Detected song change - old title: "${oldTitle}" - new title: "${newTitle}"`);
						emitSiteEvent("songTitleChanged", newTitle, oldTitle);
						runIntervalChecks();
					}
				});
				loggers.siteEvent.info("Successfully initialized SiteEvents observers");
				observers = observers.concat([queueObs, autoplayObs]);
				const playerFullscreenObs = new MutationObserver(([{ target }]) => {
					const isFullscreen = target.getAttribute("player-ui-state")?.toUpperCase() === "FULLSCREEN";
					if (lastFullscreen !== isFullscreen || typeof lastFullscreen === "undefined") {
						emitSiteEvent("fullscreenToggled", isFullscreen);
						lastFullscreen = isFullscreen;
					}
				});
				const registerFullScreenObs = () => addSelectorListener("mainPanel", "ytmusic-player#player", { listener: (el) => {
					playerFullscreenObs.observe(el, { attributeFilter: ["player-ui-state"] });
				} });
				if (globserversReady) registerFullScreenObs();
				else window.addEventListener("bytm:observersReady", registerFullScreenObs, { once: true });
			}
			(0, _sv443_network_coreutils.createRecurringTask)({
				timeout: 150,
				task: runIntervalChecks
			});
			if (getDomain() === "ytm") addSelectorListener("mainPanel", "ytmusic-player #song-video #movie_player .ytp-title-text > a", { listener(el) {
				new MutationObserver(([{ target }]) => {
					if (!target || !target?.href?.includes("/watch")) return;
					checkVideoIdChange(new URL(target.href).searchParams.get("v"));
				}).observe(el, { attributeFilter: ["href"] });
			} });
			getDomain() === "ytm" && (0, _sv443_network_coreutils.createRecurringTask)({
				timeout: 250,
				task: () => checkVideoIdChange()
			});
		} catch (err) {
			loggers.siteEvent.error("Couldn't initialize site event observers due to an error:\n", err);
		}
	}
	var bytmReady = false;
	window.addEventListener("bytm:allReady", () => bytmReady = true, { once: true });
	/** Emits a site event with the given key and arguments - if `bytm:allReady` has not been emitted yet, all events will be queued until it is */
	function emitSiteEvent(key, ...args) {
		try {
			const logEmit = () => {
				if (getFeature("logEvents")) args.length > 0 ? loggers.siteEvent.log(`Emitted site event 'bytm:siteEvent:${key}' with ${args.length} ${(0, _sv443_network_coreutils.autoPlural)("argument", args)}:`, ...args) : loggers.siteEvent.log(`Emitted site event 'bytm:siteEvent:${key}' (without data)`);
			};
			if (!bytmReady) {
				const startTs = Date.now();
				window.addEventListener("bytm:ready", () => {
					bytmReady = true;
					forceEmitSiteEvent(key, ...args);
					logEmit();
					if (Date.now() - startTs > 500) loggers.siteEvent.warn(`Slow siteEvent '${key}'! - took ${Date.now() - startTs}ms from initial emit to "bytm:ready"`);
				}, { once: true });
				return;
			} else {
				forceEmitSiteEvent(key, ...args);
				logEmit();
			}
		} catch (err) {
			loggers.siteEvent.error(`Couldn't emit site event "${key}" due to an error:\n`, err);
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
		} catch (err) {
			loggers.siteEvent.error(`Couldn't emit site event "${key}" due to an error:\n`, err);
		}
	}
	/** Checks if the watch ID has changed and emits a `watchIdChanged` siteEvent if it has */
	function checkVideoIdChange(newID) {
		newID ??= new URL(location.href).searchParams.get("v");
		if (newID && newID !== lastVidId) {
			loggers.siteEvent.info(`Detected watch ID change - old ID: "${lastVidId}" - new ID: "${newID}"`);
			emitSiteEvent("watchIdChanged", newID, lastVidId);
			lastVidId = newID;
		}
	}
	/** Periodically called to check for changes in the URL and emit associated siteEvents */
	function runIntervalChecks() {
		if (!lastVidId) checkVideoIdChange();
		if (location.pathname !== lastPathname) {
			emitSiteEvent("pathChanged", String(location.pathname), lastPathname);
			lastPathname = String(location.pathname);
		}
	}
	//#endregion
	//#region src/utils/input.ts
	var interactionKeys = [
		"Enter",
		" ",
		"Space"
	];
	/**
	* Adds generic, accessible interaction listeners to the passed element.  
	* All listeners have the default behavior prevented and stop propagation (for keyboard events this only applies as long as the captured key is included in {@linkcode interactionKeys}).
	* @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
	*/
	function onInteraction(elem, listener, listenerOptions) {
		const { preventDefault = true, stopPropagation = true, ...listenerOpts } = listenerOptions ?? {};
		const proxListener = (e) => {
			if (e instanceof KeyboardEvent) if (interactionKeys.includes(e.key)) {
				preventDefault && e.preventDefault();
				stopPropagation && e.stopPropagation();
			} else return;
			else if (e instanceof MouseEvent) {
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
	//#endregion
	//#region src/dialogs/prompt.ts
	var promptDialog = null;
	var promptDialogId = "prompt";
	/**
	* This is a custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions.  
	* It supports various customizations - see {@linkcode showPrompt()} for details.
	*/
	var PromptDialog = class extends BytmDialog {
		type;
		constructor(props) {
			super({
				id: promptDialogId,
				width: 500,
				height: 400,
				destroyOnClose: true,
				closeBtnEnabled: true,
				closeOnBgClick: true,
				closeOnEscPress: true,
				small: true,
				...props.dialogOptions,
				renderHeader: () => this.renderHeader(props),
				renderBody: () => this.renderBody(props),
				renderFooter: () => this.renderFooter(props)
			});
			this.type = props.type;
			const unsub = this.on("render", () => {
				if (this.options.destroyOnClose) unsub();
				setTimeout(() => this.focusOnRender(), 25);
			});
		}
		/** Emits the "resolve" event with the specified value. Should be called every time the dialog is about to be closed. */
		emitResolve(val) {
			this.events.emit("resolve", val);
		}
		/** Returns the current value of the text input field if the dialog type is "prompt", null if it's empty, and undefined for other dialog types. */
		getInputValue() {
			if (this.type !== "prompt") return void 0;
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
				} else inputElem.type = "text";
				inputElem.autofocus = true;
				inputElem.autocomplete = "off";
				inputElem.spellcheck = false;
				inputElem.value = "defaultValue" in rest && rest.defaultValue ? await (0, _sv443_network_coreutils.consumeStringGen)(rest.defaultValue) : "";
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
			const buttonsWrapper = document.createElement("div");
			buttonsWrapper.id = "bytm-prompt-dialog-button-wrapper";
			const buttonsCont = document.createElement("div");
			buttonsCont.id = "bytm-prompt-dialog-buttons-cont";
			const confirmBtn = (type === "confirm" || type === "prompt") && ("confirmBtnEnabled" in rest && rest.confirmBtnEnabled === false ? void 0 : document.createElement("button"));
			if (confirmBtn) {
				const { confirmBtnText, confirmBtnTooltip } = rest;
				confirmBtn.id = "bytm-prompt-dialog-confirm";
				confirmBtn.classList.add("bytm-prompt-dialog-button", "bytm-btn");
				confirmBtn.textContent = await this.consumePromptStringGen(type, confirmBtnText, t("prompt_confirm"));
				confirmBtn.ariaLabel = confirmBtn.title = await this.consumePromptStringGen(type, confirmBtnTooltip, t("click_to_confirm_tooltip"));
				confirmBtn.tabIndex = 0;
				if (type === "confirm") confirmBtn.autofocus = true;
				confirmBtn.addEventListener("click", () => {
					this.emitResolve(type === "confirm" ? true : document.querySelector("#bytm-prompt-dialog-input")?.value?.trim() ?? null);
					promptDialog?.close();
				}, { once: true });
			}
			const closeBtn = rest.denyBtnEnabled === false ? void 0 : document.createElement("button");
			if (closeBtn) {
				closeBtn.id = "bytm-prompt-dialog-close";
				closeBtn.classList.add("bytm-prompt-dialog-button", "bytm-btn");
				closeBtn.textContent = await this.consumePromptStringGen(type, rest.denyBtnText, t(type === "alert" ? "prompt_close" : "prompt_cancel"));
				closeBtn.ariaLabel = closeBtn.title = await this.consumePromptStringGen(type, rest.denyBtnTooltip, t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip"));
				closeBtn.tabIndex = 0;
				if (type === "alert") closeBtn.autofocus = true;
				closeBtn.addEventListener("click", () => {
					this.emitResolve({
						alert: true,
						confirm: false,
						prompt: null
					}[type]);
					promptDialog?.close();
				}, { once: true });
			}
			const { extraButtons = [], extraButtonsPosition = "between" } = rest;
			const isMac = getOS() === "mac";
			const appendExtraButtons = async () => {
				for (const getBtnFn of extraButtons) {
					const btn = await getBtnFn(this);
					if (btn instanceof HTMLElement) {
						buttonsCont.appendChild(btn);
						if (btn instanceof HTMLButtonElement) btn.classList.add("bytm-prompt-dialog-button");
					}
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
		/** Converts a {@linkcode PromptStringGen} (stringifiable value or sync or async function that returns a stringifiable value) to a string - uses {@linkcode fallback} as a fallback */
		async consumePromptStringGen(curPromptType, stringGen, fallback) {
			if (typeof stringGen === "function") return await stringGen(curPromptType);
			return String(stringGen ?? fallback);
		}
		/** Called on render to focus on the confirm or cancel button or text input, depending on prompt type */
		focusOnRender() {
			const inputElem = document.querySelector("#bytm-prompt-dialog-input");
			if (inputElem) return inputElem.focus();
			let captureEnterKey = true;
			document.addEventListener("keydown", (e) => {
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
	};
	/** Custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions */
	function showPrompt({ type, ...rest }) {
		return new Promise((resolve) => {
			if (BytmDialog.getOpenDialogs().includes(promptDialogId)) promptDialog?.close();
			promptDialog = new PromptDialog({
				type,
				...rest
			});
			promptDialog.once("open", () => document.querySelector(`#bytm-prompt-dialog-${type === "alert" ? "close" : "confirm"}`)?.focus());
			promptDialog.once("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
			promptDialog.once("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));
			let resolveVal;
			const tryResolve = () => resolve(typeof resolveVal !== "undefined" ? resolveVal : false);
			let closeUnsub;
			const resolveUnsub = promptDialog.on("resolve", (val) => {
				resolveUnsub();
				if (resolveVal !== void 0) return;
				resolveVal = val;
				tryResolve();
				closeUnsub?.();
			});
			closeUnsub = promptDialog.on("close", () => {
				closeUnsub();
				if (resolveVal !== void 0) return;
				resolveVal = type === "alert";
				if (type === "prompt") resolveVal = null;
				tryResolve();
				resolveUnsub();
			});
			promptDialog.open();
		});
	}
	//#endregion
	//#region src/components/ripple.ts
	/**
	* Creates an element with a ripple effect on click.
	* @param rippleElement If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
	* @returns The passed element or the newly created element with the ripple effect.
	*/
	function createRipple(rippleElement, properties) {
		const props = {
			speed: "normal",
			...properties
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
			if (rippleEl.firstChild) rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild);
			else rippleEl.appendChild(rippleAreaEl);
			rippleAreaEl.addEventListener("animationend", () => rippleAreaEl.remove());
		});
		updateRippleWidth();
		return rippleEl;
	}
	//#endregion
	//#region src/components/longButton.ts
	/**
	* Creates a generic, circular, long button element with an icon and text.  
	* Has classes for the enabled and disabled states for easier styling.  
	* If `href` is provided, the button will be an anchor element.  
	* If `onClick` or `onToggle` is provided, the button will be a div element.  
	* Provide either `resourceName` or `src` to specify the icon inside the button.
	*/
	async function createLongBtn({ title, text, iconPosition, ripple, ...rest }) {
		if ([
			"href",
			"onClick",
			"onToggle"
		].every((key) => !(key in rest))) throw new TypeError("Either 'href', 'onClick' or 'onToggle' must be provided");
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
		onInteraction(btnElem, (evt) => {
			if ("onClick" in rest) rest.onClick(evt);
			if ("toggle" in rest && rest.toggle && (rest.togglePredicate ?? (() => true))(evt)) rest.onToggle(btnElem.classList.toggle("toggled"), evt);
		});
		btnElem.classList.add("bytm-generic-btn", "long");
		btnElem.ariaLabel = btnElem.title = title;
		btnElem.tabIndex = 0;
		btnElem.role = "button";
		const imgElem = document.createElement("src" in rest ? "img" : "div");
		imgElem.classList.add("bytm-generic-btn-img", iconPosition ?? "left");
		if ("src" in rest) imgElem.src = rest.src;
		else setInnerHtml(imgElem, await resourceAsString(rest.resourceName));
		const txtElem = document.createElement("span");
		txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
		txtElem.textContent = txtElem.ariaLabel = text;
		iconPosition === "left" || !iconPosition && btnElem.appendChild(imgElem);
		btnElem.appendChild(txtElem);
		iconPosition === "right" && btnElem.appendChild(imgElem);
		return ripple ? createRipple(btnElem, { speed: "normal" }) : btnElem;
	}
	//#endregion
	//#region src/components/ExImDialog.ts
	/** Generic dialog for exporting and importing any string of data */
	var ExImDialog = class ExImDialog extends BytmDialog {
		constructor(options) {
			super({
				renderHeader: () => ExImDialog.renderHeader(options),
				renderBody: () => ExImDialog.renderBody(options),
				renderFooter: void 0,
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
			headerEl.textContent = headerEl.ariaLabel = await (0, _sv443_network_coreutils.consumeStringGen)(opts.title);
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
				descEl.textContent = descEl.ariaLabel = await (0, _sv443_network_coreutils.consumeStringGen)(opts.descExport);
				const dataEl = document.createElement("textarea");
				dataEl.classList.add("bytm-exim-dialog-data");
				dataEl.readOnly = true;
				dataEl.tabIndex = 0;
				dataEl.value = t("click_to_reveal");
				onInteraction(dataEl, async () => {
					dataEl.value = await (0, _sv443_network_coreutils.consumeStringGen)(opts.exportData);
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
						copyToClipboard(await (0, _sv443_network_coreutils.consumeStringGen)(shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData));
						await showToast({ message: t("copied_to_clipboard") });
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
				descEl.textContent = descEl.ariaLabel = await (0, _sv443_network_coreutils.consumeStringGen)(opts.descImport);
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
	};
	//#endregion
	//#region src/components/toggleInput.ts
	/** Creates a simple toggle element */
	async function createToggleInput({ onChange, initialValue = false, id = (0, _sv443_network_coreutils.randomId)(6, 36), labelPos = "left" }) {
		const wrapperEl = document.createElement("div");
		wrapperEl.classList.add("bytm-toggle-wrapper", "bytm-no-select");
		wrapperEl.role = "switch";
		wrapperEl.tabIndex = 0;
		wrapperEl.ariaChecked = String(initialValue);
		const labelEl = labelPos !== "off" ? document.createElement("label") : void 0;
		if (labelEl) {
			labelEl.id = `bytm-toggle-label-${id}`;
			labelEl.classList.add("bytm-toggle-label");
			labelEl.textContent = t(`toggled_${initialValue ? "on" : "off"}`);
			if (id) labelEl.htmlFor = `bytm-toggle-${id}`;
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
		const handleToggle = (e) => {
			e.preventDefault();
			e.stopPropagation();
			onChange(checkboxEl.checked);
			if (labelEl) labelEl.textContent = t(`toggled_${checkboxEl.checked ? "on" : "off"}`);
			wrapperEl.ariaChecked = String(checkboxEl.checked);
		};
		checkboxEl.addEventListener("change", handleToggle, { capture: true });
		wrapperEl.addEventListener("keydown", (e) => {
			if ([
				"Space",
				" ",
				"Enter"
			].includes(e.code)) {
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
	}
	//#endregion
	//#region src/components/circularButton.ts
	/**
	* Creates a generic, circular button element.  
	* If `href` is provided, the button will be an anchor element.  
	* If `onClick` is provided, the button will be a div element.  
	* Provide either `resourceName` or `src` to specify the icon inside the button.
	*/
	async function createCircularBtn({ title, ripple = true, modifyElement, ...rest }) {
		let btnElem;
		if ("href" in rest && rest.href) {
			btnElem = document.createElement("a");
			btnElem.href = rest.href;
			btnElem.role = "button";
			btnElem.target = "_blank";
			btnElem.rel = "noopener noreferrer";
		} else if ("onClick" in rest && rest.onClick) {
			btnElem = document.createElement("div");
			rest.onClick && onInteraction(btnElem, (e) => rest.onClick(e));
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
		const rippleElem = ripple ? createRipple(btnElem) : btnElem;
		if (modifyElement) await modifyElement(btnElem);
		return rippleElem;
	}
	//#endregion
	//#region src/dialogs/autoLike.ts
	var autoLikeDialog = null;
	var autoLikeExImDialog = null;
	/** Creates and/or returns the auto-like dialog */
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
				renderHeader: renderHeader$5,
				renderBody: renderBody$5,
				renderFooter: renderFooter$2
			});
			siteEvents.on("autoLikeChannelsUpdated", async () => {
				try {
					if (autoLikeExImDialog?.isOpen()) autoLikeExImDialog.unmount();
					if (autoLikeDialog?.isOpen()) {
						autoLikeDialog.unmount();
						await autoLikeDialog.open();
						loggers.dialog.log("Auto-like channels updated, refreshed dialog");
					}
				} catch (err) {
					loggers.dialog.error("Couldn't refresh auto-like channels dialog:", err);
				}
			});
			autoLikeDialog.on("open", () => document.querySelector(".bytm-auto-like-channels-searchbar")?.focus());
			autoLikeDialog.on("close", () => emitSiteEvent("autoLikeChannelsUpdated"));
		}
		if (!autoLikeExImDialog) autoLikeExImDialog = new ExImDialog({
			id: "auto-like-channels-export-import",
			width: 800,
			height: 600,
			exportData: async () => await compressionSupported() ? await (0, _sv443_network_coreutils.compress)(JSON.stringify(autoLikeStore.getData()), compressionFormat$1, "string") : JSON.stringify(autoLikeStore.getData()),
			exportDataSpecial: () => JSON.stringify(autoLikeStore.getData()),
			async onImport(data) {
				try {
					const parsed = await tryToDecompressAndParse(data);
					loggers.dialog.log("Trying to import auto-like data:", parsed);
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
					showToast({ message: t("import_success") });
					autoLikeExImDialog?.unmount();
				} catch (err) {
					loggers.dialog.error("Couldn't import auto-like channels data:", err);
				}
			},
			title: () => t("auto_like_export_import_title"),
			descImport: () => t("auto_like_import_desc"),
			descExport: () => t("auto_like_export_desc")
		});
		return autoLikeDialog;
	}
	async function renderHeader$5() {
		const headerEl = document.createElement("h2");
		headerEl.classList.add("bytm-dialog-title");
		headerEl.role = "heading";
		headerEl.ariaLevel = "1";
		headerEl.tabIndex = 0;
		headerEl.textContent = headerEl.ariaLabel = t("auto_like_channels_dialog_title");
		return headerEl;
	}
	async function renderBody$5() {
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
		searchbarEl.addEventListener("input", (0, _sv443_network_coreutils.debounce)(() => {
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
		searchClearEl.classList.add("bytm-auto-like-channels-search-clear", "bytm-btn");
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
		const setChannelEnabled = (0, _sv443_network_coreutils.debounce)((id, enabled) => {
			autoLikeStore.setData({ channels: autoLikeStore.getData().channels.map((ch) => ch.id === id ? {
				...ch,
				enabled
			} : ch) });
		}, 100);
		const sortedChannels = autoLikeStore.getData().channels.sort((a, b) => a.name.localeCompare(b.name));
		for (const { name: chanName, id: chanId, enabled } of sortedChannels) {
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
				onChange: (en) => setChannelEnabled(chanId, en)
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
					await autoLikeStore.setData({ channels: autoLikeStore.getData().channels.map((ch) => ch.id === chanId ? {
						...ch,
						name: newName,
						id: newId
					} : ch) });
					emitSiteEvent("autoLikeChannelsUpdated");
				}
			});
			btnCont.appendChild(editBtn);
			const removeBtn = await createCircularBtn({
				resourceName: "icon-delete",
				title: t("remove_entry"),
				onClick() {
					autoLikeStore.setData({ channels: autoLikeStore.getData().channels.filter((ch) => ch.id !== chanId) });
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
	function renderFooter$2() {
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
	async function deleteAllAutoLikeChannelsPrompt() {
		if (!await showPrompt({
			type: "confirm",
			message: t("auto_like_delete_all_confirm")
		})) return;
		await autoLikeStore.setData({ channels: [] });
		emitSiteEvent("autoLikeChannelsUpdated");
		const unsub = autoLikeDialog?.on("clear", async () => {
			unsub?.();
			await autoLikeDialog?.open();
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
		const hasChannelEntry = autoLikeStore.getData().channels.find((ch) => ch.id === id);
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
		await autoLikeStore.setData(overwriteName ? { channels: autoLikeStore.getData().channels.map((ch) => ch.id === id ? {
			...ch,
			name
		} : ch) } : { channels: [...autoLikeStore.getData().channels, {
			id,
			name,
			enabled: true
		}] });
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
	}
	//#endregion
	//#region src/features/autoLike.ts
	/** DataStore instance for all auto-liked channels */
	var autoLikeStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-auto-like-channels",
		formatVersion: 2,
		defaultData: { channels: [] },
		engine: new _sv443_network_userutils.GMStorageEngine(),
		compressionFormat: compressionFormat$1,
		migrations: { 2: (oldData) => ({ channels: oldData.channels.map((ch) => ({
			...ch,
			id: isValidChannelId(ch.id.trim()) ? ch.id.trim() : `@${ch.id.trim()}`
		})) }) },
		nanoEmitterOptions: {
			publicEmit: false,
			catchUpEvents: ["loadData"]
		}
	});
	var autoLikeStoreLoaded = false;
	/** Inits the auto-like DataStore instance */
	async function initAutoLikeStore() {
		if (autoLikeStoreLoaded) return;
		autoLikeStoreLoaded = true;
		return autoLikeStore.loadData();
	}
	/** Initializes the auto-like feature */
	async function initAutoLike() {
		try {
			await initAutoLikeStore();
			if (getDomain() === "ytm") {
				let timeout;
				siteEvents.on("songTitleChanged", () => {
					const autoLikeTimeoutMs = getFeature("autoLikeTimeout", 5) * 1e3;
					timeout && clearTimeout(timeout);
					const ytmTryAutoLike = () => {
						const artistEls = document.querySelectorAll(getSelector("watchPage", "channelName"));
						const channelIds = [...artistEls].map((a) => a.href.split("/").pop()).filter((a) => typeof a === "string");
						const likeChan = autoLikeStore.getData().channels.find((ch) => channelIds.includes(ch.id));
						if (!likeChan || !likeChan.enabled) return;
						if (artistEls.length === 0 || channelIds.length === 0) return loggers.autoLike.error("Couldn't auto-like because the artist element couldn't be found");
						const { likeBtn, likeState } = getLikeDislikeBtns();
						if (!likeBtn) return loggers.autoLike.error("Couldn't auto-like because the like button couldn't be found");
						if (!likeState || likeState === "INDIFFERENT") {
							likeBtn.click();
							getFeature("autoLikeShowToast") && showIconToast({
								message: t(`auto_liked_a_channels_${getCurrentMediaType()}`, likeChan.name),
								subtitle: t("auto_like_click_to_configure"),
								icon: "icon-auto_like",
								onClick: () => getAutoLikeDialog().then((dlg) => dlg.open())
							}).catch((e) => loggers.autoLike.error("Error while showing auto-like toast:", e));
							loggers.autoLike.info(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id}) - permalink: https://${getDomain() === "ytm" ? "music.youtube.com/watch?v=" : "youtu.be/"}${new URL(location.href).searchParams.get("v")}`, LogLevel.Info);
						} else loggers.autoLike.info("Skipping auto-like, because the like state is currently set to", likeState);
					};
					timeout = setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs);
					siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs));
				});
				const recreateBtn = (headerCont, chanId) => {
					const titleCont = headerCont.querySelector(getSelector("autoLike", "titleContainer"));
					if (!titleCont) return;
					const checkBtn = () => setTimeout(() => {
						if (!document.querySelector(".bytm-auto-like-toggle-btn")) recreateBtn(headerCont, chanId);
					}, 250);
					const chanName = titleCont.querySelector(getSelector("autoLike", "titleContainerChannelName"))?.textContent ?? null;
					loggers.autoLike.log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
					const buttonsCont = headerCont.querySelector(".buttons");
					if (buttonsCont) {
						const lastBtn = buttonsCont.querySelector(getSelector("autoLike", "titleContainerButtonsContainerLastButton"));
						const chanName = document.querySelector(getSelector("autoLike", "channelName_global"))?.textContent ?? document.querySelector(getSelector("autoLike", "channelNameFallback_global"))?.textContent ?? null;
						lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName).then(checkBtn);
					} else {
						const shareBtnEl = headerCont.querySelector(getSelector("autoLike", "titleContainerButtonsContainerShareButton"));
						const chanName = headerCont.querySelector(getSelector("autoLike", "titleContainerChannelNameAlternate"))?.textContent ?? null;
						shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName).then(checkBtn);
					}
				};
				const tryAddBtnYTM = () => {
					if (getFeature("autoLikeChannelToggleBtn") && location.pathname.match(/\/channel\/.+/)) {
						const chanId = getCurrentChannelId();
						if (!chanId) return loggers.autoLike.error("Couldn't extract channel ID from URL");
						document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
						addSelectorListener("browseResponse", getSelector("generic", "browseResponseHeader_sub_browseResponse"), { listener: (el) => recreateBtn(el, chanId) });
					}
				};
				siteEvents.on("pathChanged", () => tryAddBtnYTM());
				tryAddBtnYTM();
			} else if (getDomain() === "yt") {
				addStyleFromResource("css-auto_like");
				let timeout;
				let listenerActive = false;
				const checkYTAutoLike = () => {
					const autoLikeTimeoutMs = getFeature("autoLikeTimeout", 5) * 1e3;
					timeout && clearTimeout(timeout);
					if (!location.pathname.startsWith("/watch")) return;
					const ytTryAutoLike = () => {
						if (listenerActive) return;
						listenerActive = true;
						addSelectorListener("ytWatchMetadata", getSelector("watchPage", "channelName"), { listener(chanElem) {
							const chanElemId = chanElem.hasAttribute("href") ? chanElem.href.split("/").pop()?.split("/")[0] ?? null : getCurrentChannelId();
							const likeChan = autoLikeStore.getData().channels.find((ch) => ch.id === chanElemId);
							if (!likeChan || !likeChan.enabled) {
								listenerActive = false;
								return;
							}
							addSelectorListener("ytWatchMetadata", getSelector("watchPage", "likeBtn"), { listener(likeBtn) {
								listenerActive = false;
								if (likeBtn.getAttribute("aria-pressed") !== "true") {
									likeBtn.click();
									getFeature("autoLikeShowToast") && showIconToast({
										message: t("auto_liked_a_channels_video", likeChan.name),
										subtitle: t("auto_like_click_to_configure"),
										icon: "icon-auto_like",
										onClick: () => getAutoLikeDialog().then((dlg) => dlg.open())
									}).catch((e) => loggers.autoLike.error("Error while showing auto-like toast:", e));
									loggers.autoLike.log(`Auto-liked video from channel '${likeChan.name}' (${likeChan.id})`);
								}
							} });
						} });
					};
					siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(ytTryAutoLike, autoLikeTimeoutMs));
					timeout = setTimeout(ytTryAutoLike, autoLikeTimeoutMs);
				};
				if (location.pathname.startsWith("/watch")) checkYTAutoLike();
				siteEvents.on("watchIdChanged", () => checkYTAutoLike());
				const tryAddBtnYT = () => {
					if (location.pathname.match(/(\/?@|\/?channel\/)\S+/)) {
						const chanId = getCurrentChannelId();
						if (!chanId) return loggers.autoLike.error("Couldn't extract channel ID from URL");
						document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
						const recreateBtn = (headerCont) => {
							const titleCont = headerCont.querySelector(getSelector("autoLike", "titleContainer"));
							if (!titleCont) return;
							const checkBtn = () => setTimeout(() => {
								if (!document.querySelector(".bytm-auto-like-toggle-btn")) recreateBtn(headerCont);
							}, 350);
							const chanName = titleCont.querySelector(getSelector("autoLike", "titleContainerChannelName"))?.textContent ?? null;
							loggers.autoLike.log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
							if (headerCont.querySelector(getSelector("autoLike", "titleContainerButtonsContainer"))) addSelectorListener("ytAppHeader", getSelector("autoLike", "titleContainerOtherButtons_sub_ytAppHeader"), { listener: (otherBtns) => addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin", "right-margin"]).then(checkBtn) });
							else if (titleCont) {
								const titleH1OrCont = titleCont.querySelector("h1") ?? titleCont;
								addAutoLikeToggleBtn(titleH1OrCont, chanId, chanName, titleH1OrCont !== titleCont ? ["left-margin-xl"] : []).then(checkBtn);
							}
						};
						addSelectorListener("ytAppHeader", getSelector("generic", "pageHeaderContainer_sub_ytAppHeader"), { listener: recreateBtn });
					}
				};
				siteEvents.on("pathChanged", () => tryAddBtnYT());
				tryAddBtnYT();
			}
			loggers.autoLike.log("Initialized auto-like channels feature");
		} catch (err) {
			loggers.autoLike.error("Error while auto-liking channel:", err);
		}
	}
	/** Adds a toggle button to enable or disable auto-liking videos from a channel */
	async function addAutoLikeToggleBtn(siblingEl, channelId, channelName, extraClasses) {
		const chan = autoLikeStore.getData().channels.find((ch) => ch.id === channelId);
		loggers.autoLike.log(`Adding auto-like toggle button for channel with ID '${channelId}' and name '${channelName}' - current state:`, chan);
		siteEvents.on("autoLikeChannelsUpdated", async () => {
			const buttonEl = document.querySelector(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
			if (!buttonEl) return loggers.autoLike.warn("Couldn't find auto-like toggle button for channel ID:", channelId);
			const enabled = autoLikeStore.getData().channels.find((ch) => ch.id === channelId)?.enabled ?? false;
			if (enabled) buttonEl.classList.add("toggled");
			else buttonEl.classList.remove("toggled");
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
					if (autoLikeStore.getData().channels.some((ch) => ch.id === chanId)) await autoLikeStore.setData({ channels: autoLikeStore.getData().channels.map((ch) => ch.id === chanId ? {
						...ch,
						enabled: isToggled
					} : ch) });
					else await autoLikeStore.setData({ channels: [...autoLikeStore.getData().channels, {
						id: chanId,
						name: channelName ?? "",
						enabled: isToggled
					}] });
					emitSiteEvent("autoLikeChannelsUpdated");
					showIconToast({
						message: isToggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
						subtitle: t("auto_like_click_to_configure"),
						icon: `icon-auto_like${isToggled ? "_enabled" : ""}`,
						onClick: () => getAutoLikeDialog().then((dlg) => dlg.open())
					}).catch((e) => loggers.autoLike.error("Error while showing auto-like toast:", e));
					loggers.autoLike.log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${isToggled ? "enabled" : "disabled"}`);
				} catch (err) {
					loggers.autoLike.error("Error while toggling auto-like channel:", err);
				}
			}
		});
		buttonEl.classList.add(...["bytm-auto-like-toggle-btn", ...extraClasses ?? []]);
		buttonEl.dataset.channelId = channelId;
		siblingEl.insertAdjacentElement("afterend", createRipple(buttonEl));
	}
	//#endregion
	//#region src/utils/xhr.ts
	/**
	* Constructs a URL from a base URL (which may already contain query parameters and/or a hash) and a record of query parameters.  
	* The query parameters already present in {@linkcode baseUrl} are merged with {@linkcode params}, with {@linkcode params} taking precedence on key conflicts.  
	* If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.  
	* All values will be stringified using their `toString()` method and then URI-encoded.
	* @returns Returns a string instead of a URL object
	*/
	function constructUrlString(baseUrl, params) {
		const [baseAndQuery, hash] = baseUrl.split("#");
		const [base, query] = baseAndQuery.split("?");
		const mergedParams = /* @__PURE__ */ new Map();
		if (query) for (const part of query.split("&")) {
			if (part.length === 0) continue;
			const [k, v] = part.split("=");
			mergedParams.set(decodeURIComponent(k), v === void 0 ? null : decodeURIComponent(v));
		}
		for (const [k, v] of Object.entries(params)) mergedParams.set(k, v);
		const queryString = [...mergedParams.entries()].filter(([, v]) => v !== void 0).map(([k, v]) => `${k}${v === null ? "" : `=${encodeURIComponent(String(v))}`}`).join("&");
		return `${base}${queryString.length > 0 ? `?${queryString}` : ""}${hash !== void 0 ? `#${hash}` : ""}`;
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
	* Ignores [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), contrary to {@linkcode fetch()} and {@linkcode fetchAdvanced()}.
	*/
	function sendRequest(details) {
		return new Promise((resolve, reject) => {
			const success = (val) => {
				getFeature("logHttp") && loggers.xhr.log(`HTTP request '${details.method ?? "GET"} ${details.url}' succeeded with status ${val.status}:`, getterifyObj(val));
				resolve(val);
			};
			const failure = (err) => {
				const errStr = `HTTP request '${details.method ?? "GET"} ${details.url}' failed:`;
				getFeature("logHttp") && loggers.xhr.error(errStr, err);
				reject(new Error(errStr, { cause: err }));
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
	/** Fetches a CSS file from the specified resource with a key starting with `css-` */
	async function fetchCss(key) {
		try {
			return await (await (0, _sv443_network_coreutils.fetchAdvanced)(await getResourceUrl(key))).text() ?? void 0;
		} catch (err) {
			loggers.xhr.error("Couldn't fetch CSS due to an error:", err);
			return;
		}
	}
	/** Cache for the vote data of YouTube videos to prevent some unnecessary requests */
	var voteCache = /* @__PURE__ */ new Map();
	/** Time-to-live for the vote cache in milliseconds */
	var voteCacheTTL = 1e3 * 60 * 60;
	/**
	* Fetches the votes object for a YouTube video from the [Return YouTube Dislike API.](https://returnyoutubedislike.com/docs)
	* @param videoID The video ID of the video
	*/
	async function fetchVideoVotes(videoID) {
		try {
			if (!videoID) return;
			if (voteCache.has(videoID)) {
				const cached = voteCache.get(videoID);
				if (Date.now() - cached.timestamp < voteCacheTTL) {
					loggers.xhr.info(`Returning cached video votes for video ID '${videoID}':`, cached);
					return cached;
				} else voteCache.delete(videoID);
			}
			const votesRaw = JSON.parse((await sendRequest({
				method: "GET",
				url: `https://returnyoutubedislikeapi.com/votes?videoId=${videoID}`
			})).response);
			if (!("id" in votesRaw) || !("likes" in votesRaw) || !("dislikes" in votesRaw) || !("rating" in votesRaw)) {
				loggers.xhr.error("Couldn't parse video votes due to an error:", votesRaw);
				return;
			}
			const votesObj = {
				id: votesRaw.id,
				likes: votesRaw.likes,
				dislikes: votesRaw.dislikes,
				rating: (0, _sv443_network_coreutils.roundFixed)(votesRaw.rating, 3),
				timestamp: Date.now()
			};
			voteCache.set(votesObj.id, votesObj);
			loggers.xhr.info(`Fetched video votes for watch ID '${videoID}':`, votesObj);
			return votesObj;
		} catch (err) {
			loggers.xhr.error("Couldn't fetch video votes due to an error:", err);
			return;
		}
	}
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
				term: `${artist} ${album}`
			});
			loggers.xhr.log(`Fetching iTunes album info for '${artist} - ${album}' with URL: ${url}`);
			const req = await sendRequest({
				method: "GET",
				url
			});
			const json = JSON.parse(req.response);
			if (!("resultCount" in json) || !("results" in json)) {
				loggers.xhr.error("Couldn't parse iTunes album info due to an error:", json);
				return [];
			}
			if (json.resultCount === 0) return [];
			return json.results.filter((result) => {
				if (!("collectionType" in result) || !("collectionName" in result) || !("artistName" in result) || !("collectionId" in result) || !("artworkUrl60" in result) || !("artworkUrl100" in result)) return false;
				return result.collectionType === "Album" && result.collectionName && result.artistName && result.collectionId && result.artworkUrl60 && result.artworkUrl100;
			}).map((result) => {
				return {
					...result,
					collectionName: result.collectionName.trim().replace(/ - (Single|EP|LP|Album|Soundtrack|Compilation|Mixtape|Remix|Live|Version|Edition|Reissue|Anniversary Edition|Deluxe Edition|Box Set|Set|Collection|Discography)$/, "")
				};
			});
		} catch (err) {
			loggers.xhr.error("Couldn't fetch iTunes album info due to an error:", err);
			return [];
		}
	}
	//#endregion
	//#region src/features/lyrics.ts
	/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
	var geniUrlRatelimitTimeframe = 30;
	var currentSongTitle = "";
	/** Adds a lyrics button to the player bar */
	async function addPlayerBarLyricsBtn() {
		addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: addActualLyricsBtn });
	}
	/** Actually adds the lyrics button after the like button renderer has been verified to exist */
	async function addActualLyricsBtn(likeContainer) {
		const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
		if (!songTitleElem) return loggers.lyrics.warn("Couldn't find song title element");
		currentSongTitle = songTitleElem.title;
		const onMutation = async (mutations) => {
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
		new MutationObserver(onMutation).observe(songTitleElem, {
			attributes: true,
			attributeFilter: ["title"]
		});
		const lyricsBtnElem = await createLyricsBtn(void 0);
		lyricsBtnElem.id = "bytm-player-bar-lyrics-btn";
		getCurrentLyricsUrl().then((url) => {
			url && addGeniusUrlToLyricsBtn(lyricsBtnElem, url);
		});
		loggers.lyrics.log("Inserted lyrics button into media controls bar");
		const thumbToggleElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
		if (thumbToggleElem) thumbToggleElem.insertAdjacentElement("afterend", lyricsBtnElem);
		else likeContainer.insertAdjacentElement("afterend", lyricsBtnElem);
	}
	var parensRegex = /\(.+\)/gm;
	var squareParensRegex = /\[.+\]/gm;
	/** Removes everything in parentheses from the passed song name */
	function sanitizeSong(songName) {
		if (typeof songName !== "string") return songName;
		return sanitizeUnicode(songName.replace(parensRegex, "").replace(squareParensRegex, ""));
	}
	/**
	* Removes the secondary artists (if they exist) from the passed artists string.  
	* Intelligently splits at commas and bullet (•) characters, and removes everything after the first ampersand (&) or feat.
	*/
	function sanitizeArtists(artists) {
		artists = artists.split(/\s*\u2022\s*/gimu)[0];
		if (artists.match(/&/)) artists = artists.split(/\s*&\s*/gm)[0];
		if (artists.match(/,/)) artists = artists.split(/,\s*/gm)[0];
		if (artists.match(/(f(ea)?t\.?|Remix|Edit|Flip|Cover|Night\s?Core|Bass\s?Boost|pro?d\.?\W)/i)) artists = artists.replace(parensRegex, "").replace(squareParensRegex, "");
		return sanitizeUnicode(artists);
	}
	var singleQuotesRegex = /[‘’‛‹›]/gm;
	var doubleQuotesRegex = /[“”„‟«»]/gm;
	var commaRegex = /[,，、]/gm;
	var periodRegex = /[.。．]/gm;
	function sanitizeUnicode(str) {
		return str.replace(singleQuotesRegex, "'").replace(doubleQuotesRegex, "\"").replace(commaRegex, ",").replace(periodRegex, ".").trim();
	}
	/** Returns the lyrics URL from genius for the currently selected song */
	async function getCurrentLyricsUrl() {
		try {
			const isVideo = getCurrentMediaType() === "video";
			const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
			const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string :first-child");
			if (!songTitleElem || !songMetaElem) return void 0;
			let songName = songTitleElem.title;
			let artistName = songMetaElem.textContent;
			if (isVideo) {
				if (songName.includes("-")) {
					const split = splitVideoTitle(songName);
					songName = split.song;
					artistName = split.artist;
				}
			}
			if (!artistName) return void 0;
			const url = await fetchLyricsUrlTop(sanitizeArtists(artistName), sanitizeSong(songName));
			if (url) emitInterface("bytm:lyricsLoaded", {
				type: "current",
				artists: artistName,
				title: songName,
				url
			});
			return url;
		} catch (err) {
			getFeature("errorOnLyricsNotFound") && loggers.lyrics.error("Couldn't resolve lyrics URL:", err);
			return;
		}
	}
	/** Fetches the top lyrics URL result from geniURL - **the passed parameters need to be sanitized first!** */
	async function fetchLyricsUrlTop(artist, song) {
		try {
			const path = (await fetchLyricsUrls(artist, song))?.[0]?.path;
			return path ? resolveLyricsUrl(path) : void 0;
		} catch (err) {
			getFeature("errorOnLyricsNotFound") && loggers.lyrics.error("Couldn't get lyrics URL due to error:", err);
			return;
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
				loggers.lyrics.info(`Found lyrics path in cache: ${cacheEntry.path}`);
				return [cacheEntry];
			}
			const fetchUrl = String(constructUrl(`${getFeature("geniUrlBase")}/search`, {
				disableFuzzy: null,
				source: `${scriptInfo$1.name} v${scriptInfo$1.version}-dev`,
				q: `${artist} ${song}`
			}));
			loggers.lyrics.log("Requesting lyrics from geniURL:", fetchUrl);
			const token = getFeature("geniUrlToken");
			const fetchRes = await (0, _sv443_network_coreutils.fetchAdvanced)(fetchUrl, { ...token ? { headers: { Authorization: `Bearer ${token}` } } : {} });
			if (fetchRes.status === 429) {
				const waitSeconds = Number(fetchRes.headers.get("Retry-After") ?? geniUrlRatelimitTimeframe);
				await showPrompt({
					type: "alert",
					message: tp("lyrics_rate_limited", waitSeconds, waitSeconds)
				});
				return;
			} else if (fetchRes.status < 200 || fetchRes.status >= 300) {
				getFeature("errorOnLyricsNotFound") && loggers.lyrics.error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL - status: ${fetchRes.status} - response: ${(await fetchRes.json()).message ?? await fetchRes.text() ?? "(none)"}`));
				return;
			}
			const result = await fetchRes.json();
			if (typeof result === "object" && result.error || !result || !result.all) {
				getFeature("errorOnLyricsNotFound") && loggers.lyrics.error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL: ${result.message}`));
				return;
			}
			const allResults = result.all;
			if (allResults.length === 0) {
				loggers.lyrics.warn("No lyrics URL found for the provided song");
				return;
			}
			const allResultsSan = allResults.filter(({ meta, path }) => (meta.title || meta.fullTitle) && meta.artists && path).map(({ meta, path }) => ({
				meta: {
					...meta,
					title: sanitizeSong(String(meta.title ?? meta.fullTitle)),
					artists: sanitizeArtists(String(meta.artists))
				},
				path
			}));
			const topRes = allResultsSan[0];
			topRes && addLyricsCacheEntryBest(topRes.meta.artists, topRes.meta.title, topRes.path);
			return allResultsSan.map((r) => ({
				artist: r.meta.primaryArtist.name,
				song: r.meta.title,
				path: r.path
			}));
		} catch (err) {
			getFeature("errorOnLyricsNotFound") && loggers.lyrics.error("Couldn't get lyrics URL due to error:", err);
			return;
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
		linkElem.dataset.state = geniusUrl ? "ready" : "loading";
		linkElem.role = "button";
		linkElem.target = "_blank";
		linkElem.rel = "noopener noreferrer";
		linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
		linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";
		if (geniusUrl) linkElem.href = geniusUrl;
		linkElem.ariaLabel = linkElem.title = geniusUrl ? t("open_lyrics") : t("lyrics_loading");
		onInteraction(linkElem, (e) => {
			const url = linkElem.href ?? geniusUrl;
			if (!url || e instanceof MouseEvent) return;
			if (!e.ctrlKey && !e.altKey) openInTab(url);
		}, {
			preventDefault: false,
			stopPropagation: false
		});
		setInnerHtml(linkElem, await resourceAsString("icon-lyrics"));
		linkElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
		onInteraction(linkElem, async (e) => {
			const isModKey = e.ctrlKey || e.altKey, isInvState = ["error", "loading"].includes(linkElem.dataset.state ?? "");
			if (isModKey && !isInvState || !(isModKey || e.shiftKey) && isInvState) {
				e.preventDefault();
				e.stopImmediatePropagation();
				await promptLyricsSearch();
			}
		}, {
			preventDefault: false,
			stopPropagation: false
		});
		return linkElem;
	}
	/** Prompts to search for lyrics. Uses the song/video title as the default value. */
	async function promptLyricsSearch() {
		const search = await showPrompt({
			type: "prompt",
			message: t("open_lyrics_search_prompt"),
			defaultValue: currentSongTitle
		});
		if (search && search.length > 0) openInTab(`https://genius.com/search?q=${encodeURIComponent(search)}`);
	}
	/** Splits a video title that contains a hyphen into an artist and song */
	function splitVideoTitle(title) {
		const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
		return {
			artist,
			song: rest.join("-")
		};
	}
	/**
	* Tries to rearrange the passed song and artist items until a fitting lyrics URL is fetched.  
	* Can send quite a lot of requests, so use this sparingly and prefer not to use it in an automatic context!  
	*   
	* Example:  
	* `bruteForceLyricsInfo(["Song Name (Foo Remix)"], ["Artist Name", "Alternative Artist Name"])` would get split into `[["Song Name", "(Foo Remix)"], ["Artist Name", "Alternative Artist Name"]]` and combined in these ways (in priority order):
	* 1. `Artist Name - Song Name (Foo Remix)`
	* 2. `Alt.Artist Name - Song Name (Foo Remix)`
	* - if `songName` doesn't contain hyphen:
	*   1. `Artist Name - Song Name`
	*   2. `Alt.Artist Name - Song Name`
	* - if `songName` contains hyphen:
	*   1. `Song Name` (barely sanitized)
	*/
	function fuzzyFetchLyricsInfo(songName, artistNames) {}
	//#endregion
	//#region src/dialogs/featHelp.ts
	var featHelpDialog = null;
	var curFeatKey = null;
	/** Creates or modifies the help dialog for a specific feature and returns it */
	async function getFeatHelpDialog({ featKey }) {
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
				renderHeader: renderHeader$4,
				renderBody: renderBody$4
			});
			featHelpDialog.on("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
			featHelpDialog.on("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));
		}
		return featHelpDialog;
	}
	async function renderHeader$4() {
		const headerEl = document.createElement("div");
		headerEl.id = "bytm-feat-help-dialog-header";
		headerEl.classList.add("bytm-flex-row");
		setInnerHtml(headerEl, await resourceAsString("icon-help"));
		return headerEl;
	}
	async function renderBody$4() {
		const contElem = document.createElement("div");
		const localeObj = locales_default?.[getLocale()];
		let featText = t(`feature_desc.${curFeatKey}`);
		const isLtr = localeObj?.textDir !== "rtl";
		if (localeObj && !localeObj.sentenceTerminators.every((termChar) => featText[isLtr ? "endsWith" : "startsWith"](termChar))) featText = `${isLtr ? featText : ""}${localeObj.sentenceTerminatorNeutral}${!isLtr ? featText : ""}`;
		const featDescElem = document.createElement("h3");
		featDescElem.role = "subheading";
		featDescElem.tabIndex = 0;
		featDescElem.textContent = featDescElem.title = featText;
		featDescElem.id = "bytm-feat-help-dialog-desc";
		const helpTextElem = document.createElement("div");
		helpTextElem.id = "bytm-feat-help-dialog-text";
		helpTextElem.tabIndex = 0;
		helpTextElem.textContent = helpTextElem.title = featInfo[curFeatKey]?.helpText?.() ?? t(`feature_helptext.${curFeatKey}`);
		contElem.appendChild(featDescElem);
		contElem.appendChild(helpTextElem);
		return contElem;
	}
	//#endregion
	//#region src/components/hotkeyInput.ts
	var otherHotkeyInputActive = false;
	var reservedKeys = [
		"ShiftLeft",
		"ShiftRight",
		"ControlLeft",
		"ControlRight",
		"AltLeft",
		"AltRight",
		"Meta",
		"Tab",
		"Space",
		" "
	];
	/** Creates a hotkey input element */
	function createHotkeyInput({ initialValue, onChange, createTitle }) {
		const initialHotkey = initialValue;
		let currentHotkey;
		if (!createTitle) createTitle = (value) => value;
		const wrapperElem = document.createElement("div");
		wrapperElem.classList.add("bytm-hotkey-wrapper");
		const infoElem = document.createElement("span");
		infoElem.classList.add("bytm-hotkey-info");
		const inputElem = document.createElement("button");
		inputElem.role = "button";
		inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
		inputElem.dataset.state = infoElem.dataset.state = "inactive";
		if (typeof initialValue?.code === "string") getHkInputContent(initialValue).then((content) => {
			inputElem.innerText = content;
		});
		else inputElem.innerText = t("hotkey_input_click_to_change");
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
			if (typeof curHk?.code === "string") getHkInputContent(curHk).then((content) => {
				inputElem.innerText = content;
			});
			else inputElem.innerText = t("hotkey_input_click_to_change");
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
		if (initialValue) setInnerHtml(infoElem, getHotkeyModifiersHtml(initialValue));
		let lastKeyDown;
		document.addEventListener("keypress", async (e) => {
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
		}, { signal: remountAC.signal });
		document.addEventListener("keydown", async (e) => {
			if (reservedKeys.filter((k) => k !== "Tab").includes(e.code)) return;
			if (inputElem.dataset.state !== "active") return;
			if (e.code === "Tab" || e.code === " " || e.code === "Space" || e.code === "Escape" || e.code === "Enter") {
				deactivate();
				return;
			}
			if ([
				"ShiftLeft",
				"ShiftRight",
				"ControlLeft",
				"ControlRight",
				"AltLeft",
				"AltRight"
			].includes(e.code)) return;
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
		}, { signal: remountAC.signal });
		const unsub = siteEvents.on("cfgMenuClosed", deactivate);
		remountAC.signal.addEventListener("abort", () => unsub());
		inputElem.addEventListener("click", () => {
			if (inputElem.dataset.state === "inactive") activate();
			else deactivate();
		}, { signal: remountAC.signal });
		inputElem.addEventListener("keydown", (e) => {
			if (reservedKeys.includes(e.code)) return;
			if (inputElem.dataset.state === "inactive") activate();
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
			if (/^Key[A-Z].+$/.test(code)) return code.slice(3);
			if (/^Digit[0-9].+$/.test(code)) return code.slice(5);
			return code.trim();
		};
		const keyCodeTrKey = `key_code.${hotkey.code}`;
		return await hasKey(keyCodeTrKey) ? t(keyCodeTrKey) : trimCode(hotkey);
	}
	/** Converts a hotkey object to a string, with optional whitespace padding between symbols */
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
	var package_default = {
		name: "@sv443/betterytm",
		userscriptName: "BetterYTM",
		version: "3.1.0",
		description: "Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™",
		license: "AGPL-3.0-or-later",
		licenseUrl: "https://github.com/Sv443/BetterYTM/blob/main/LICENSE.txt",
		homepage: "https://github.com/Sv443/BetterYTM",
		namespace: "https://github.com/Sv443/BetterYTM",
		pluginDiscoveryUrl: "https://github.com/Sv443/BetterYTM/blob/main/README.md#plugins",
		specialThanksUrl: "https://github.com/Sv443/BetterYTM/blob/main/README.md#special-thanks",
		devVersionUrl: "https://github.com/Sv443/BetterYTM/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen",
		main: "./src/index.ts",
		type: "module",
		author: {
			"name": "Sv443",
			"url": "https://github.com/Sv443"
		},
		contributors: [
			{
				"name": "indierodo",
				"url": "https://github.com/indierodo",
				"contributions": ["Track numbers feature"]
			},
			{
				"name": "cryeprecision",
				"url": "https://github.com/cryeprecision",
				"contributions": ["Exponential volume slider feature"]
			},
			{
				"name": "kcangny",
				"url": "https://github.com/kcangny",
				"contributions": ["Turkish translations"]
			},
			{
				"name": "canarado",
				"url": "https://github.com/canarado",
				"contributions": ["Version checking code"]
			}
		],
		bugs: { "url": "https://github.com/Sv443/BetterYTM/issues" },
		funding: {
			"type": "github",
			"url": "https://github.com/sponsors/Sv443"
		},
		scripts: {
			"dev": "concurrently \"cross-env BYTM_ASSET_SOURCE=local BYTM_GEN_META=false vite build --watch\" \"pnpm serve -S -L\"",
			"dev-cdn": "concurrently \"cross-env BYTM_GEN_META=false vite build --watch\" \"pnpm serve\"",
			"build-dev": "pnpm build-dev-base && pnpm build-dev-compat",
			"build-dev-base": "cross-env BYTM_MODE=development BYTM_BRANCH=develop vite build",
			"build-dev-compat": "cross-env BYTM_MODE=development BYTM_BRANCH=develop BYTM_COMPAT_MODE=strict BYTM_SUFFIX=_compat vite build",
			"build-prod": "pnpm build-prod-gh && pnpm build-prod-gf && pnpm build-prod-oujs && pnpm build-prod-compat",
			"build-prod-gh": "cross-env BYTM_MODE=production BYTM_BRANCH=main vite build",
			"build-prod-gf": "cross-env BYTM_MODE=production BYTM_BRANCH=main BYTM_HOST=greasyfork BYTM_SUFFIX=_gf vite build",
			"build-prod-oujs": "cross-env BYTM_MODE=production BYTM_BRANCH=main BYTM_HOST=openuserjs BYTM_SUFFIX=_oujs vite build",
			"build-prod-compat": "cross-env BYTM_MODE=production BYTM_BRANCH=main BYTM_COMPAT_MODE=strict BYTM_SUFFIX=_compat vite build",
			"build-local-base": "cross-env BYTM_ASSET_SOURCE=local BYTM_GEN_META=false vite build",
			"build-prod-base": "cross-env BYTM_MODE=production BYTM_BRANCH=main vite build",
			"preview": "cross-env BYTM_MODE=production BYTM_BRANCH=main BYTM_ASSET_SOURCE=local vite build && pnpm serve -S -L -X=10",
			"serve": "node --no-warnings=ExperimentalWarning ./src/tools/serve.ts",
			"lint": "eslint . && tsc --noEmit",
			"tr": "node --no-warnings=ExperimentalWarning ./src/tools/tr.ts",
			"tr-changed": "node --no-warnings=ExperimentalWarning ./src/tools/tr-changed.ts",
			"tr-progress": "node --no-warnings=ExperimentalWarning ./src/tools/tr-progress.ts",
			"tr-format": "node --no-warnings=ExperimentalWarning ./src/tools/tr-format.ts",
			"tr-prep": "pnpm tr-format -p",
			"gen-readme": "node --no-warnings=ExperimentalWarning ./src/tools/gen-readme.ts",
			"alias-imports": "node --no-warnings=ExperimentalWarning ./src/tools/alias-imports.ts",
			"node-ts": "node --import tsx --no-warnings=ExperimentalWarning --enable-source-maps",
			"invisible": "node --no-warnings=ExperimentalWarning --enable-source-maps src/tools/run-invisible.mjs",
			"change": "changeset",
			"changeset-version": "node src/tools/changeset-version.mjs",
			"knip": "knip",
			"typedoc": "typedoc",
			"storybook": "storybook dev -p 6006",
			"build-storybook": "storybook build"
		},
		engines: {
			"node": ">=22",
			"pnpm": ">=10"
		},
		repository: {
			"type": "git",
			"url": "git+https://github.com/Sv443/BetterYTM.git"
		},
		hosts: {
			"github": "https://github.com/Sv443/BetterYTM",
			"greasyfork": "https://greasyfork.org/en/scripts/475682-betterytm",
			"openuserjs": "https://openuserjs.org/scripts/Sv443/BetterYTM"
		},
		updates: {
			"github": "https://github.com/Sv443/BetterYTM/releases",
			"greasyfork": "https://greasyfork.org/en/scripts/475682-betterytm",
			"openuserjs": "https://openuserjs.org/scripts/Sv443/BetterYTM"
		},
		dependencies: {
			"@sv443-network/coreutils": "3.8.0",
			"@sv443-network/userutils": "11.0.0",
			"compare-versions": "6.1.1",
			"dompurify": "3.3.3",
			"marked": "17.0.4",
			"tslib": "2.8.1"
		},
		devDependencies: {
			"@changesets/cli": "2.30.0",
			"@chromatic-com/storybook": "5.0.1",
			"@eslint/eslintrc": "3.3.5",
			"@eslint/js": "10.0.1",
			"@storybook/addon-essentials": "8.6.14",
			"@storybook/addon-interactions": "8.6.14",
			"@storybook/addon-links": "10.2.19",
			"@storybook/blocks": "8.6.14",
			"@storybook/html-vite": "10.2.19",
			"@storybook/html": "10.2.19",
			"@storybook/test": "8.6.15",
			"@types/cors": "2.8.19",
			"@types/express": "5.0.6",
			"@types/node": "24.12.0",
			"@types/tampermonkey": "5.0.5",
			"@typescript-eslint/eslint-plugin": "8.57.0",
			"@typescript-eslint/parser": "8.57.0",
			"@typescript-eslint/utils": "8.57.0",
			"comment-json": "5.0.0",
			"concurrently": "9.2.1",
			"cors": "2.8.6",
			"cross-env": "7.0.3",
			"dotenv": "17.3.1",
			"eslint-plugin-storybook": "10.2.19",
			"eslint": "10.0.3",
			"express": "5.2.1",
			"globals": "17.4.0",
			"kleur": "4.1.5",
			"knip": "5.86.0",
			"nanoevents": "9.1.0",
			"pnpm": "10.32.1",
			"storybook-dark-mode": "5.0.0",
			"storybook": "10.2.19",
			"terser": "5.47.1",
			"tsx": "4.21.0",
			"typedoc-plugin-markdown": "4.10.0",
			"typedoc": "0.28.17",
			"typescript-eslint": "8.57.0",
			"typescript": "5.9.3",
			"vite": "8.0.11"
		},
		browserslist: [
			"last 1 version",
			"> 1%",
			"not dead"
		]
	};
	//#endregion
	//#region src/menu/menu.ts
	/** Whether the config menu has finished mounting and can be opened with {@linkcode openCfgMenu()} */
	var isCfgMenuDoneMounting = false;
	/** Whether the config menu is currently mounting. Subsequent calls to {@linkcode mountCfgMenu()} will wait until the menu has finished mounting. */
	var isCfgMenuMounting = false;
	var isCfgMenuOpen = false;
	/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
	var scrollIndicatorOffsetThreshold = 30;
	var scrollIndicatorEnabled = true;
	/** Locale at the point of initializing the config menu */
	var initLocale;
	/** Stringified config at the point of initializing the config menu */
	var initConfig$1;
	/** Timeout id for the "copied" text in the hidden value copy button */
	var hiddenCopiedTxtTimeout;
	/**
	* Adds an element to open the BetterYTM menu  
	* TODO: replace with new menu using BytmDialog - see https://github.com/Sv443/BetterYTM/issues/23
	*/
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
			backgroundElem.addEventListener("click", (e) => {
				if (isCfgMenuOpen && e.target?.id === "bytm-cfg-menu-bg") closeCfgMenu(e);
			});
			document.body.addEventListener("keydown", (e) => {
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
			const focusContentBtn = getFeature("configMenuFocusContentButtonEnabled") ? await createCircularBtn({
				title: t("config_menu_focus_content_button_tooltip"),
				resourceName: "icon-arrow_down",
				onClick() {
					document.querySelector(".bytm-ftconf-category:not(.hidden)")?.focus();
				}
			}) : void 0;
			if (focusContentBtn) {
				focusContentBtn.id = "bytm-menu-focus-content";
				focusContentBtn.role = "button";
				focusContentBtn.tabIndex = 0;
			}
			const titleLogoElem = document.createElement("img");
			const logoSrc = await getResourceUrl(`img-logo_dev`);
			titleLogoElem.classList.add("bytm-cfg-menu-logo", "bytm-no-select");
			titleLogoElem.tabIndex = 0;
			titleLogoElem.role = "button";
			titleLogoElem.alt = t("config_menu_title_logo_tooltip", { scriptName: scriptInfo$1.name });
			if (logoSrc) titleLogoElem.src = logoSrc;
			onInteraction(titleLogoElem, (e) => {
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
				greasyfork: "Greasy Fork",
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
			const links = [
				[
					"github",
					await getResourceUrl("img-github"),
					package_default.homepage,
					t("open_github", scriptInfo$1.name),
					"github"
				],
				[
					"greasyfork",
					await getResourceUrl("img-greasyfork"),
					package_default.hosts.greasyfork,
					t("open_greasyfork", scriptInfo$1.name),
					"greasyfork"
				],
				[
					"openuserjs",
					await getResourceUrl("img-openuserjs"),
					package_default.hosts.openuserjs,
					t("open_openuserjs", scriptInfo$1.name),
					"openuserjs"
				]
			];
			const hostLink = links.find(([name]) => name === host$1);
			const otherLinks = links.filter(([name]) => name !== host$1);
			const reorderedLinks = hostLink ? [hostLink, ...otherLinks] : links;
			for (const [, ...args] of reorderedLinks) addLink(...args);
			addLink(await getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");
			const headerRightSideElem = document.createElement("div");
			headerRightSideElem.id = "bytm-menu-header-right-side";
			const closeElem = document.createElement("img");
			closeElem.classList.add("bytm-menu-close");
			closeElem.role = "button";
			closeElem.tabIndex = 0;
			closeElem.src = await getResourceUrl("img-close");
			closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
			onInteraction(closeElem, (e) => closeCfgMenu(e));
			headerRightSideElem.appendChild(linksCont);
			headerRightSideElem.appendChild(closeElem);
			titleCont.appendChild(titleElem);
			focusContentBtn && titleCont.appendChild(focusContentBtn);
			titleLogoHeaderCont.appendChild(titleCont);
			headerElem.appendChild(titleLogoHeaderCont);
			headerElem.appendChild(headerRightSideElem);
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
			const exportDataSpecial = () => JSON.stringify({
				formatVersion: 12,
				data: getFeatures()
			});
			const exImDlg = new ExImDialog({
				id: "config-export-import",
				width: 800,
				height: 600,
				exportData: async () => await compressionSupported() ? await (0, _sv443_network_coreutils.compress)(JSON.stringify({
					formatVersion: 12,
					data: getFeatures()
				}), compressionFormat$1, "string") : exportDataSpecial(),
				exportDataSpecial,
				async onImport(data) {
					try {
						if (!data || data.trim().length === 0) return;
						const parsed = await tryToDecompressAndParse(data.trim());
						loggers.configMenu.log("Trying to import configuration:", parsed);
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
						if (parsed.formatVersion < 12) {
							let newData = structuredClone(parsed.data);
							const sortedMigrations = Object.entries(cfgMigrations).sort(([a], [b]) => Number(a) - Number(b));
							let curFmtVer = Number(parsed.formatVersion);
							for (const [fmtVer, migrationFunc] of sortedMigrations) {
								const ver = Number(fmtVer);
								if (curFmtVer < 12 && curFmtVer < ver) try {
									newData = await structuredClone(migrationFunc(newData));
									curFmtVer = ver;
								} catch (err) {
									loggers.configMenu.error(`Error while running migration function for format version ${fmtVer}:`, err);
								}
							}
							parsed.formatVersion = curFmtVer;
							parsed.data = newData;
						} else if (parsed.formatVersion !== 12) return await showPrompt({
							type: "alert",
							message: t("import_error.wrong_format_version", 12, parsed.formatVersion)
						});
						await setFeatures({
							...getFeatures(),
							...parsed.data
						});
						if (await showPrompt({
							type: "confirm",
							message: t("import_success_confirm_reload")
						})) {
							loggers.configMenu.log("Reloading tab after importing configuration");
							return reloadTab();
						}
						exImDlg.unmount();
						emitSiteEvent("rebuildCfgMenu", parsed.data);
					} catch (err) {
						loggers.configMenu.warn("Couldn't import configuration:", err);
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
			const featureCfgWithCategories = Object.entries(featInfo).reduce((acc, [key, { category }]) => {
				if (!acc[category]) acc[category] = {};
				acc[category][key] = featureCfg[key];
				return acc;
			}, {});
			const sidenavCont = document.createElement("nav");
			sidenavCont.classList.add("bytm-menu-sidenav");
			sidenavCont.id = "bytm-cfg-menu-sidenav";
			sidenavCont.tabIndex = -1;
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
							if (e.type.startsWith("key")) setTimeout(() => catElem.focus(), 10);
						}
						checkToggleScrollIndicator();
						emitSiteEvent("configHeaderSelected", headerId);
						document.querySelector("#bytm-menu-top-anchor")?.scrollIntoView({ behavior: "instant" });
					});
					return headerElem;
				} catch (err) {
					loggers.configMenu.error(`Error while creating sidenav header for category '${headerId}':`, err);
				}
			};
			const sidenavTopSectionCont = document.createElement("section");
			sidenavTopSectionCont.classList.add("bytm-menu-sidenav-section", "bytm-ignored-input");
			sidenavTopSectionCont.id = "bytm-cfg-menu-sidenav-top-section";
			sidenavTopSectionCont.tabIndex = -1;
			let firstCatHeader = true;
			for (const category of Object.keys(featureCfgWithCategories)) {
				const catGroupIdx = groupedCategories.findIndex((group) => group.includes(category));
				const catIdx = catGroupIdx >= 0 ? groupedCategories[catGroupIdx].findIndex((cat) => cat === category) : void 0;
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
			sidenavBtmSectionCont.tabIndex = -1;
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
				if (["number", "slider"].includes(ftInfo.type)) {
					if ("min" in ftInfo || "max" in ftInfo) newVal = (0, _sv443_network_coreutils.clamp)(Number(newVal), "min" in ftInfo ? Number(ftInfo.min) : -Infinity, "max" in ftInfo ? Number(ftInfo.max) : Infinity);
					if ("step" in ftInfo) newVal = Math.round(Number(newVal) / Number(ftInfo.step)) * Number(ftInfo.step);
				}
				try {
					const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
					loggers.configMenu.info(`Feature config changed at key '${key}'${valueHidden ? "" : `, from value '${fmt(initialVal)}' to '${fmt(newVal)}'`}`);
					const featConf = structuredClone(getFeatures());
					featConf[key] = newVal;
					const changedKeys = initConfig$1 ? Object.keys(featConf).filter((k) => typeof featConf[k] !== "object" && featConf[k] !== initConfig$1[k]) : [];
					const requiresReload = changedKeys.some((k) => featInfo[k]?.reloadRequired !== false);
					const promptMenuRemount = changedKeys.some((k) => featInfo[k]?.reloadMenuPrompt === true);
					await setFeatures(featConf);
					featInfo[key]?.change?.(newVal, initialVal);
					if (requiresReload) {
						reloadFooterEl.classList.remove("hidden");
						reloadFooterEl.removeAttribute("aria-hidden");
					} else {
						reloadFooterEl.classList.add("hidden");
						reloadFooterEl.setAttribute("aria-hidden", "true");
					}
					if (promptMenuRemount) await showPrompt({
						type: "confirm",
						message: t("feature_changed_remount_config_menu"),
						confirmBtnText: t("reopen"),
						confirmBtnTooltip: t("reopen")
					}) && emitSiteEvent("recreateCfgMenu");
					if (initLocale !== featConf.locale) {
						await initTranslations(featConf.locale);
						setLocale(featConf.locale);
						const newText = t("lang_changed_prompt_reload");
						const newLangEmoji = locales_default[featConf.locale]?.emoji ? `${locales_default[featConf.locale].emoji} ` : "";
						const initLangEmoji = locales_default[initLocale]?.emoji ? `${locales_default[initLocale].emoji} ` : "";
						const confirmText = newText !== initLangReloadText ? `${newLangEmoji}${newText}\n\n\n${initLangEmoji}${initLangReloadText}` : newText;
						const isLocalesTextDifferent = t("reload_now") !== tl(initLocale, "reload_now");
						const getReloadAllBtn = async (dialog) => {
							const reloadAllBtn = document.createElement("button");
							reloadAllBtn.classList.add("bytm-btn");
							reloadAllBtn.id = "bytm-prompt-dialog-reload-all";
							reloadAllBtn.textContent = `${t("reload_all_tabs_now")}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_all_tabs_now")}` : ""}`;
							reloadAllBtn.ariaLabel = reloadAllBtn.title = `${t("reload_all_tabs_tooltip", scriptInfo$1.name)}${isLocalesTextDifferent ? ` / ${tl(initLocale, "reload_all_tabs_tooltip", scriptInfo$1.name)}` : ""}`;
							reloadAllBtn.tabIndex = 0;
							reloadAllBtn.addEventListener("click", () => {
								dialog.emitResolve(dialog.type === "confirm" ? true : document.querySelector("#bytm-prompt-dialog-input")?.value?.trim() ?? null);
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
								height: 800
							}
						})) {
							closeCfgMenu();
							loggers.configMenu.log("Reloading tab after changing language");
							await reloadTab();
						}
					} else if (getLocale() !== featConf.locale) setLocale(featConf.locale);
				} catch (err) {
					loggers.configMenu.error("Error while reacting to config change:", err);
				} finally {
					emitSiteEvent("configOptionChanged", ...valueHidden ? [
						key,
						void 0,
						void 0
					] : [
						key,
						initialVal,
						newVal
					]);
				}
			};
			/** Call whenever the feature config is changed */
			const confChanged = (0, _sv443_network_coreutils.debounce)(onCfgChange, 333);
			/**
			* Formats the value `v` based on the provided `key` using the `featInfo` object.  
			* If a custom `renderValue` function is defined for the `key`, it will be used to format the value.  
			* If no custom `renderValue` function is defined, the value will be converted to a string and trimmed.  
			* If the value is an object, it will be converted to a JSON string representation.  
			* If an error occurs during formatting (like when passing objects with circular references), the original value will be returned as a string (trimmed).
			*/
			const fmtVal = (v, key) => {
				try {
					const renderValue = typeof featInfo?.[key]?.renderValue === "function" ? featInfo[key].renderValue : void 0;
					const retVal = (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
					return renderValue ? renderValue(retVal) : retVal;
				} catch {
					return String(v).trim();
				}
			};
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
						groupCont = void 0;
					}
					currentGroup = ftInfo.group ?? void 0;
					if (currentGroup && (!groupCont || groupCont.dataset.group !== currentGroup)) {
						groupCont = document.createElement("div");
						groupCont.id = `bytm-ftconf-group-${currentGroup}`;
						groupCont.classList.add("bytm-ftconf-group");
						groupCont.dataset.group = currentGroup;
						const groupHeader = document.createElement("h3");
						groupHeader.id = `bytm-ftconf-group-${currentGroup}-header`;
						groupHeader.classList.add("bytm-ftconf-group-header");
						groupHeader.textContent = groupHeader.ariaLabel = t(`feature_group_header.${currentGroup}`, { scriptName: scriptInfo$1.name });
						groupHeader.tabIndex = 0;
						groupHeader.role = "heading";
						groupHeader.ariaLevel = "3";
						groupCont.appendChild(groupHeader);
					}
					const { type, default: ftDefault } = ftInfo;
					const step = "step" in ftInfo ? ftInfo.step : void 0;
					const initialVal = featureCfg[featKey] ?? ftDefault;
					const ftConfElem = document.createElement("div");
					ftConfElem.classList.add("bytm-ftitem");
					{
						const featLeftSideElem = document.createElement("div");
						featLeftSideElem.classList.add("bytm-ftitem-leftside");
						{
							const defVal = fmtVal(ftDefault, featKey);
							const extraTxts = [`default: ${defVal.length === 0 ? "(undefined)" : defVal}`];
							"min" in ftInfo && extraTxts.push(`min: ${ftInfo.min}`);
							"max" in ftInfo && extraTxts.push(`max: ${ftInfo.max}`);
							"step" in ftInfo && extraTxts.push(`step: ${ftInfo.step}`);
							const rel = "reloadRequired" in ftInfo && ftInfo.reloadRequired !== false ? "reload required - " : "";
							const adv = ftInfo.advanced ? "advanced feature - " : "";
							ftConfElem.title = `[Dev] ${ftInfo.category} > ${ftInfo.group} > ${featKey}${extraTxts.length > 0 ? `\n${extraTxts.join(" - ")}` : ""}\n(${rel}${adv}since v${ftInfo.since})`;
						}
						if (!await hasKeyFor("en-US", `feature_desc.${featKey}`)) {
							loggers.configMenu.error(`Missing en-US translation with key "feature_desc.${featKey}" for feature description, skipping this config menu feature...`);
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
						const helpTextVal = typeof featInfo[featKey]?.helpText === "function" && featInfo[featKey].helpText();
						if (await hasKey(`feature_helptext.${featKey}`) || helpTextVal && await hasKey(helpTextVal)) {
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
									await (await getFeatHelpDialog({ featKey })).open();
								});
							} else loggers.configMenu.error(`Couldn't create help button SVG element for feature '${featKey}'`);
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
								inputTag = void 0;
								inputType = void 0;
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
								inputType = void 0;
								break;
							case "hotkey":
								inputTag = void 0;
								inputType = void 0;
								break;
							case "button":
								inputTag = void 0;
								inputType = void 0;
								break;
						}
						const inputElemId = `bytm-ftconf-${featKey}-input`;
						const ctrlElem = document.createElement("span");
						ctrlElem.classList.add("bytm-ftconf-ctrl");
						ctrlElem.title = "";
						let advCopyHiddenCont;
						if (getFeature("advancedMode"), ftInfo.valueHidden) {
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
								if (typeof hiddenCopiedTxtTimeout === "undefined") hiddenCopiedTxtTimeout = setTimeout(() => {
									advCopyHintElem.style.display = "none";
									hiddenCopiedTxtTimeout = void 0;
								}, 3e3);
							};
							onInteraction(advCopyHiddenBtn, (e) => copyHiddenInteraction(e));
							advCopyHiddenCont = document.createElement("span");
							advCopyHiddenCont.appendChild(advCopyHintElem);
							advCopyHiddenCont.appendChild(advCopyHiddenBtn);
						}
						advCopyHiddenCont && ctrlElem.appendChild(advCopyHiddenCont);
						if (inputTag) {
							const isNumericInput = ["number", "slider"].includes(type);
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
							const getUnitTxt = (val) => "unit" in ftInfo && typeof ftInfo.unit === "string" ? ftInfo.unit : "unit" in ftInfo && typeof ftInfo.unit === "function" ? ftInfo.unit(Number(val)) : "";
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
								for (const { value, label } of ftOpts) {
									const optionElem = document.createElement("option");
									optionElem.value = String(value);
									optionElem.textContent = `${label}${` [${value}]`}`;
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
								inputElem.addEventListener("keydown", (e) => e.key === "Tab" && textInputUpdate());
							} else inputElem.addEventListener("input", () => {
								let v = String(inputElem.value).trim();
								if (["number", "slider"].includes(type) || v.match(/^-?\d+$/)) v = Number(v);
								if (typeof initialVal !== "undefined") confChanged(featKey, initialVal, type !== "toggle" ? v : inputElem.checked);
							});
							if (labelElem) {
								labelElem.id = `bytm-ftconf-${featKey}-label`;
								labelElem.htmlFor = inputElemId;
								ctrlElem.appendChild(labelElem);
							}
							inputElem.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
							inputElem.setAttribute("aria-labelledby", labelElem?.id ?? `bytm-ftitem-text-${featKey}`);
							if (isNumericInput) {
								const hasMinOrMax = "min" in ftInfo && typeof ftInfo.min === "number" || "max" in ftInfo && typeof ftInfo.max === "number";
								const hasStep = "step" in ftInfo && typeof ftInfo.step === "number";
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
							if (type === "number" && "unit" in ftInfo && ["function", "string"].includes(typeof ftInfo.unit)) {
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
										initialValue: typeof initialVal === "object" ? initialVal : void 0,
										onChange: (hotkey) => confChanged(featKey, initialVal, hotkey),
										createTitle: (value) => t("hotkey_input_click_to_change_tooltip", t(`feature_desc.${featKey}`), value)
									});
									break;
								case "toggle":
									customInputEl = await createToggleInput({
										initialValue: Boolean(initialVal),
										onChange: (checked) => confChanged(featKey, initialVal, checked),
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
										const rTime = (0, _sv443_network_coreutils.randRange)(200, 400);
										if (Date.now() - startTs < rTime) setTimeout(finalize, rTime - (Date.now() - startTs));
										else finalize();
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
					if (groupCont) groupCont.appendChild(ftConfElem);
					else categoryCont.appendChild(ftConfElem);
				}
				if (currentGroup && groupCont) {
					categoryCont.appendChild(groupCont);
					groupCont = void 0;
				}
				featuresCont.appendChild(categoryCont);
				firstCategory = false;
			}
			const extraInfoCategoryElements = {
				about: async () => {
					const aboutTextCont = document.createElement("p");
					aboutTextCont.id = "bytm-cfg-menu-about-text-cont";
					aboutTextCont.classList.add("bytm-markdown-container");
					setInnerHtml(aboutTextCont, await parseMarkdown(t("about_bytm_content_markdown", (0, _sv443_network_coreutils.pureObj)({
						scriptName: scriptInfo$1.name,
						scriptVersion: package_default.version,
						buildNumber: buildNumber$1,
						buildDate: new Date(buildTimestamp).toLocaleString(getLocale(), { dateStyle: "medium" }),
						buildBrowseLink: `https://github.com/${repo}/tree/${buildNumber$1}`,
						authorName: package_default.author.name,
						authorLink: package_default.author.url,
						githubLink: scriptInfo$1.namespace,
						greasyforkLink: package_default.hosts.greasyfork,
						openuserjsLink: package_default.hosts.openuserjs,
						fundingLink: package_default.funding.url,
						issuesLink: package_default.bugs.url,
						discordLink: "https://dc.sv443.net/",
						currentYear: (/* @__PURE__ */ new Date()).getFullYear(),
						licenseName: package_default.license,
						licenseUrl: `https://github.com/${repo}/blob/${branch$1}/LICENSE.txt`,
						contributorsLink: package_default.specialThanksUrl
					}))));
					return [aboutTextCont];
				},
				changelog: async () => {
					const mdContElem = document.createElement("div");
					mdContElem.id = "bytm-cfg-menu-changelog-md-cont";
					mdContElem.classList.add("bytm-markdown-container");
					setInnerHtml(mdContElem, await getChangelogHtmlWithDetails());
					siteEvents.once("cfgMenuMounted", () => {
						mdContElem.querySelectorAll("details").forEach((el) => {
							el.addEventListener("toggle", () => checkToggleScrollIndicator());
						});
					});
					return [mdContElem];
				}
			};
			for (const category of extraInfoCategoryIDs) {
				const categoryCont = createCategoryContainer(category);
				categoryCont.classList.add("bytm-ftconf-extra-info-category", "hidden");
				categoryCont.setAttribute("inert", "true");
				categoryCont.setAttribute("aria-hidden", "true");
				(await extraInfoCategoryElements[category]()).forEach((el) => categoryCont.appendChild(el));
				featuresCont.appendChild(categoryCont);
			}
			siteEvents.on("rebuildCfgMenu", (newConfig) => {
				for (const ftKey in featInfo) {
					const ftElem = document.querySelector(`#bytm-ftconf-${ftKey}-input`);
					const labelElem = document.querySelector(`#bytm-ftconf-${ftKey}-label`);
					if (!ftElem) continue;
					const ftInfo = featInfo[ftKey];
					const value = newConfig[ftKey];
					if (ftInfo.type === "toggle") ftElem.checked = Boolean(value);
					else ftElem.value = String(value);
					if (!labelElem) continue;
					const unitTxt = "unit" in ftInfo && typeof ftInfo.unit === "string" ? ftInfo.unit : "unit" in ftInfo && typeof ftInfo.unit === "function" ? ftInfo.unit(Number(ftElem.value)) : "";
					if (ftInfo.type === "slider") labelElem.textContent = `${fmtVal(Number(value), ftKey)}${unitTxt}`;
				}
				loggers.configMenu.info("Rebuilt config menu");
			});
			const scrollIndicator = document.createElement("img");
			scrollIndicator.id = "bytm-menu-scroll-indicator";
			scrollIndicator.classList.add("bytm-no-select");
			scrollIndicator.src = await getResourceUrl("icon-arrow_down");
			scrollIndicator.role = "button";
			scrollIndicator.ariaLabel = scrollIndicator.title = t("scroll_to_bottom");
			featuresCont.appendChild(scrollIndicator);
			scrollIndicator.addEventListener("click", () => {
				document.querySelector("#bytm-menu-bottom-anchor")?.scrollIntoView({ behavior: "smooth" });
			});
			featuresCont.addEventListener("scroll", (evt) => {
				const scrollPos = evt.target?.scrollTop ?? 0;
				const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
				if (!scrollIndicator) return;
				if (scrollIndicatorEnabled && scrollPos > scrollIndicatorOffsetThreshold && !scrollIndicator.classList.contains("bytm-hidden")) scrollIndicator.classList.add("bytm-hidden");
				else if (scrollIndicatorEnabled && scrollPos <= scrollIndicatorOffsetThreshold && scrollIndicator.classList.contains("bytm-hidden")) scrollIndicator.classList.remove("bytm-hidden");
			});
			const bottomAnchor = document.createElement("div");
			bottomAnchor.id = "bytm-menu-bottom-anchor";
			featuresCont.appendChild(bottomAnchor);
			bodyCont.appendChild(featuresCont);
			menuContainer.appendChild(headerElem);
			menuContainer.appendChild(bodyCont);
			const modeItems = [];
			modeItems.push([
				"dev",
				"dev_mode",
				"img-logo_dev"
			]);
			getFeature("advancedMode") && modeItems.push([
				"advanced",
				"advanced_mode",
				"icon-advanced_mode_large"
			]);
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
						}, {
							once: true,
							capture: true
						});
					};
					modeDispWrapperEl.addEventListener("mouseleave", leaveDisp);
					const leaveCont = () => {
						if (transitionEnded) modeDispWrapperEl.classList.remove("expand");
						else modeDispWrapperEl.addEventListener("transitionend", () => {
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
							loggers.configMenu.error(`Couldn't create mode display element for mode '${id}' because the resource '${resourceKey}' couldn't be loaded.`);
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
			window.addEventListener("resize", (0, _sv443_network_coreutils.debounce)(checkToggleScrollIndicator, 250), { passive: true });
			isCfgMenuOpen = false;
			document.body.classList.remove("bytm-disable-scroll");
			document.querySelector(getSelector("generic", "app"))?.removeAttribute("inert");
			backgroundElem.style.visibility = "hidden";
			backgroundElem.style.display = "none";
			loggers.configMenu.log(`Mounted config menu element in ${Date.now() - startTs}ms`);
			isCfgMenuMounting = false;
			isCfgMenuDoneMounting = true;
			forceEmitSiteEvent("cfgMenuMounted");
			window.addEventListener("bytm:dialogOpened", (evt) => {
				if (!isCfgMenuOpen) return;
				if (evt?.detail instanceof BytmDialog) {
					menuContainer.setAttribute("aria-hidden", "true");
					menuContainer.setAttribute("inert", "true");
				}
			});
			window.addEventListener("bytm:dialogClosed", () => {
				if (!isCfgMenuOpen) return;
				if (!openDialogs.some((id) => id !== "cfg-menu")) {
					menuContainer.removeAttribute("aria-hidden");
					menuContainer.removeAttribute("inert");
				}
			});
			siteEvents.once("recreateCfgMenu", async () => {
				const bgElem = document.querySelector("#bytm-cfg-menu-bg");
				if (!bgElem) {
					loggers.configMenu.error("Couldn't remount config menu because the background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
					return;
				}
				bgElem.addEventListener("transitionend", async () => {
					closeCfgMenu(void 0, false);
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
		} catch (err) {
			loggers.configMenu.error("Error while creating and mounting config menu:", err);
			closeCfgMenu();
		}
	}
	/** Opens the config menu if it is closed */
	async function openCfgMenu() {
		try {
			if (isCfgMenuOpen) return;
			if (!isCfgMenuDoneMounting) if (isCfgMenuMounting) return void siteEvents.once("cfgMenuMounted", () => openCfgMenu());
			else await mountCfgMenu();
			isCfgMenuOpen = true;
			document.body.classList.add("bytm-disable-scroll");
			document.querySelector(getSelector("generic", "app"))?.setAttribute("inert", "true");
			const menuBg = document.querySelector("#bytm-cfg-menu-bg");
			setCurrentDialogId("cfg-menu");
			openDialogs.unshift("cfg-menu");
			emitInterface("bytm:dialogOpened", void 0);
			emitInterface("bytm:dialogOpened:cfg-menu", void 0);
			if (!menuBg) {
				loggers.configMenu.warn("Couldn't open config menu because background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
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
		} catch (err) {
			loggers.configMenu.error("Error while opening config menu:", err);
		}
	}
	/** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
	function closeCfgMenu(evt, enableScroll = true) {
		if (!isCfgMenuOpen) return;
		isCfgMenuOpen = false;
		evt?.bubbles && evt.stopPropagation();
		if (enableScroll && !openDialogs.some((id) => id !== "cfg-menu")) {
			document.body.classList.remove("bytm-disable-scroll");
			document.querySelector(getSelector("generic", "app"))?.removeAttribute("inert");
		}
		const menuBg = document.querySelector("#bytm-cfg-menu-bg");
		clearTimeout(hiddenCopiedTxtTimeout);
		const cfgIdx = openDialogs.indexOf("cfg-menu");
		if (cfgIdx > -1) openDialogs.splice(cfgIdx, 1);
		setCurrentDialogId(openDialogs?.[0] ?? null);
		emitInterface("bytm:dialogClosed", void 0);
		emitInterface("bytm:dialogClosed:cfg-menu", void 0);
		if (!menuBg) return loggers.configMenu.warn("Couldn't close config menu because background element couldn't be found. The config menu is considered closed but might still be open. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
		menuBg.querySelectorAll(".bytm-ftconf-adv-copy-hint")?.forEach((el) => el.style.display = "none");
		menuBg.style.visibility = "hidden";
		menuBg.style.display = "none";
	}
	/** Checks if the features container is scrollable and toggles the scroll indicator accordingly */
	function checkToggleScrollIndicator() {
		const featuresCont = document.querySelector("#bytm-menu-opts");
		const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
		if (featuresCont && scrollIndicator) {
			const verticalScroll = (0, _sv443_network_userutils.isScrollable)(featuresCont).vertical;
			/** If true, the indicator's threshold is under the available scrollable space and so it should be disabled */
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
	//#endregion
	//#region src/features/layout.ts
	var logoExchanged = false, improveLogoCalled = false, bytmLogoUrl;
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
			bytmLogoUrl = await getResourceUrl("img-logo_dev");
			(0, _sv443_network_userutils.preloadImages)([bytmLogoUrl]);
			const watermarkOpenMenu = (e) => {
				e.stopImmediatePropagation();
				if (!e.shiftKey && !e.ctrlKey || logoExchanged) openCfgMenu();
				if (!logoExchanged && (e.shiftKey || e.ctrlKey)) exchangeLogo();
			};
			onInteraction(watermarkEl, (e) => watermarkOpenMenu(e), {
				preventDefault: true,
				stopPropagation: true,
				capture: true
			});
			addSelectorListener("navBar", "ytmusic-logo a", { listener(logoElem) {
				logoElem.appendChild(watermarkEl);
				loggers.layout.log("Added watermark element");
			} });
		})();
	}
	/** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
	function improveLogo() {
		return new Promise(async (resolve) => {
			try {
				if (improveLogoCalled) return;
				improveLogoCalled = true;
				const svg = await (await (0, _sv443_network_coreutils.fetchAdvanced)("https://music.youtube.com/img/on_platform_logo_dark.svg")).text();
				addSelectorListener("navBar", "ytmusic-logo > a", { listener: (logoElem) => {
					logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
					setInnerHtml(logoElem, svg);
					logoElem.querySelectorAll("svg > g > path").forEach((el) => el.classList.add("bytm-mod-logo-remove"));
					loggers.layout.log("Swapped logo to inline SVG");
					resolve();
				} });
			} catch (err) {
				loggers.layout.error("Couldn't improve logo due to an error:", err);
			}
		});
	}
	/** Exchanges the default YTM logo into BetterYTM's logo with a sick ash animation */
	function exchangeLogo() {
		if (logoExchanged) return;
		addSelectorListener("navBar", ".bytm-mod-logo", { listener: async (logoElem) => {
			if (logoElem.classList.contains("bytm-logo-exchanged") || !bytmLogoUrl) return;
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
				logoElem.querySelectorAll(".bytm-mod-logo-remove").forEach((e) => e.remove());
			}, 1e3);
		} });
	}
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
			document.querySelector("ytmusic-nav-bar ytmusic-settings-button button")?.click();
			if (!e.shiftKey && !e.ctrlKey || logoExchanged) openCfgMenu();
			if (!logoExchanged && (e.shiftKey || e.ctrlKey)) exchangeLogo();
		});
		const cfgOptIconElem = document.createElement("img");
		cfgOptIconElem.classList.add("bytm-cfg-menu-option-icon");
		cfgOptIconElem.src = await getResourceUrl("img-logo_dev");
		const cfgOptTextElem = document.createElement("div");
		cfgOptTextElem.classList.add("bytm-cfg-menu-option-text");
		cfgOptTextElem.textContent = t("config_menu_option", scriptInfo$1.name);
		cfgOptItemElem.appendChild(cfgOptIconElem);
		cfgOptItemElem.appendChild(cfgOptTextElem);
		cfgOptElem.appendChild(cfgOptItemElem);
		container.appendChild(cfgOptElem);
		loggers.layout.log("Added BYTM-Configuration button to menu popover");
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
		cfgOptImgElem.src = await getResourceUrl("img-logo_dev");
		const cfgOptItemElem = document.createElement("div");
		cfgOptItemElem.classList.add("bytm-yt-cfg-menu-option-item");
		cfgOptItemElem.textContent = scriptInfo$1.name;
		cfgOptElem.appendChild(cfgOptImgElem);
		cfgOptElem.appendChild(cfgOptItemElem);
		cfgOptWrapperElem.appendChild(cfgOptElem);
		onInteraction(cfgOptWrapperElem, () => openCfgMenu());
		const firstChild = container?.firstElementChild;
		if (firstChild) container.insertBefore(cfgOptWrapperElem, firstChild);
		else return loggers.layout.error("Couldn't add config menu option to YT titlebar - couldn't find container element");
	}
	/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
	async function addAnchorImprovements() {
		try {
			await addStyleFromResource("css-anchor_improvements");
		} catch (err) {
			loggers.layout.error("Couldn't add anchor improvements CSS due to an error:", err);
		}
		try {
			const preventDefault = (e) => e.preventDefault();
			/** Adds anchor improvements to &lt;ytmusic-responsive-list-item-renderer&gt; */
			const addListItemAnchors = (items) => {
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
					(0, _sv443_network_userutils.addParent)(thumbnailElem, anchorElem);
				}
			};
			addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
				continuous: true,
				all: true,
				listener: addListItemAnchors
			});
			addSelectorListener("body", "ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
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
			loggers.layout.error("Couldn't improve carousel shelf anchors due to an error:", err);
		}
		try {
			const addSidebarAnchors = (sidebarCont) => {
				const items = sidebarCont.parentNode.querySelectorAll("ytmusic-guide-entry-renderer tp-yt-paper-item");
				improveSidebarAnchors(items);
				return items.length;
			};
			addSelectorListener("sideBar", "#contentContainer #guide-content #items ytmusic-guide-entry-renderer", { listener: (sidebarCont) => {
				const itemsAmt = addSidebarAnchors(sidebarCont);
				loggers.layout.log(`Added anchors around ${itemsAmt} sidebar ${(0, _sv443_network_coreutils.autoPlural)("item", itemsAmt)}`);
			} });
			addSelectorListener("body", "ytmusic-nav-bar", { listener(navBar) {
				let miniSidebarCont = document.querySelector("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");
				const mut = new MutationObserver(() => setTimeout(() => {
					if (navBar.hasAttribute("guide-collapsed") && !navBar.classList.contains("bytm-mini-sidebar-anchors-added")) {
						miniSidebarCont = document.querySelector("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");
						if (!miniSidebarCont) return loggers.layout.error("Couldn't find mini sidebar element while adding anchors");
						improveMiniSidebarAnchors();
					}
				}, 50));
				const improveMiniSidebarAnchors = () => {
					const itemsAmt = addSidebarAnchors(miniSidebarCont);
					navBar.classList.add("bytm-mini-sidebar-anchors-added");
					loggers.layout.log(`Added anchors around ${itemsAmt} mini sidebar ${(0, _sv443_network_coreutils.autoPlural)("item", itemsAmt)}`);
					mut.disconnect();
				};
				if (miniSidebarCont) improveMiniSidebarAnchors();
				mut.observe(navBar, { attributes: true });
			} });
		} catch (err) {
			loggers.layout.error("Couldn't add anchors to sidebar items due to an error:", err);
		}
		try {
			const checkCurrentList = () => {
				addSelectorListener("sidePanel", "ytmusic-player-queue #contents, ytmusic-player-queue #automix-contents", {
					all: true,
					listener(songLists) {
						songLists.forEach((songListEl) => {
							const items = songListEl.querySelectorAll("ytmusic-player-queue-item");
							if (!items.length) return;
							const itemsAmt = improveSongListClickArea(items);
							itemsAmt > 0 && loggers.layout.log(`Improved clickable area of ${itemsAmt} current song list ${(0, _sv443_network_coreutils.autoPlural)("item", itemsAmt)}`);
						});
					}
				});
			};
			siteEvents.on("queueChanged", () => checkCurrentList());
			siteEvents.on("autoplayQueueChanged", () => checkCurrentList());
			const genericSongListListener = (songLists) => {
				songLists.forEach((songListEl) => {
					const items = songListEl.querySelectorAll("ytmusic-responsive-list-item-renderer, .card-content-container");
					if (!items.length) return;
					const itemsAmt = improveSongListClickArea(items);
					itemsAmt > 0 && loggers.layout.log(`Improved clickable area of ${itemsAmt} song list ${(0, _sv443_network_coreutils.autoPlural)("item", itemsAmt)}`);
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
						listener: genericSongListListener
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
				listener: genericSongListListener
			});
		} catch (err) {
			loggers.layout.error("Couldn't add anchors to song list items due to an error:", err);
		}
	}
	var sidebarPaths = [
		"/",
		"/explore",
		"/library"
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
			(0, _sv443_network_userutils.addParent)(item, anchorElem);
		});
	}
	function improveSongListClickArea(items) {
		let itemsAmt = 0;
		items.forEach((item) => {
			if (item.classList.contains("bytm-click-area-improved")) return;
			item.classList.add("bytm-click-area-improved");
			item.addEventListener("click", (e) => {
				const tgt = e.target;
				if (!tgt) return;
				if ([
					(el) => el.tagName.toLowerCase() === "yt-formatted-string",
					(el) => el.classList.contains("yt-formatted-string"),
					(el) => el.tagName.toLowerCase() === "ytmusic-player-queue-item",
					(el) => el.classList.contains("ytmusic-player-queue-item"),
					(el) => el.tagName.toLowerCase() === "ytmusic-responsive-list-item-renderer",
					(el) => el.classList.contains("ytmusic-responsive-list-item-renderer"),
					(el) => el.classList.contains("ytmusic-card-shelf-renderer")
				].some((cnd) => cnd(tgt)) && [
					(el) => el.tagName.toLowerCase() === "a",
					(el) => Boolean(el.getAttribute("href")?.length),
					(el) => el.classList.contains("bytm-anchor"),
					(el) => el.classList.contains("multi-select-overlay")
				].every((acnd) => !acnd(tgt))) item.querySelector("ytmusic-play-button-renderer")?.click();
			});
			itemsAmt++;
		});
		return itemsAmt;
	}
	var trackParams = ["si", "is"];
	var trackParamRegex = new RegExp(`(?:&|\\?)(?:${trackParams.join("|")})=`, "i");
	/** Removes the ?si tracking parameter from share URLs */
	async function initRemShareTrackParam() {
		const removeSiParam = (inputElem) => {
			try {
				if (getFeature("removeShareTrackingParamSites") !== getDomain() && getFeature("removeShareTrackingParamSites") !== "all") return;
				if (!inputElem.value.match(trackParamRegex)) return;
				const url = new URL(inputElem.value);
				for (const p of trackParams) url.searchParams.delete(p);
				inputElem.value = String(url);
				loggers.layout.log(`Removed tracking parameter from share link: ${url}`);
			} catch (err) {
				loggers.layout.warn("Couldn't remove tracking parameter from share link due to error:", err);
			}
		};
		const [sharePanelSel, inputSel] = (() => {
			switch (getDomain()) {
				case "ytm": return ["tp-yt-paper-dialog ytmusic-unified-share-panel-renderer", "input#share-url"];
				case "yt": return ["yt-unified-share-panel-renderer", "input#share-url"];
			}
		})();
		addSelectorListener("body", sharePanelSel, { listener: (sharePanelEl) => {
			new MutationObserver(() => {
				const inputElem = sharePanelEl.querySelector(inputSel);
				inputElem && removeSiParam(inputElem);
			}).observe(sharePanelEl, {
				childList: true,
				subtree: true,
				characterData: true,
				attributeFilter: [
					"aria-hidden",
					"aria-checked",
					"checked"
				]
			});
		} });
	}
	/** Applies global CSS to fix various spacings */
	async function fixSpacing() {
		if (!await addStyleFromResource("css-fix_spacing")) loggers.layout.error("Couldn't fix spacing");
	}
	async function initAboveQueueBtns() {
		setTimeout(async () => {
			const { scrollToActiveSongBtn, clearQueueBtn } = getFeatures();
			if (!await addStyleFromResource("css-above_queue_btns")) loggers.layout.error("Couldn't add CSS for above queue buttons");
			else if (getFeature("aboveQueueBtnsSticky")) addStyleFromResource("css-above_queue_btns_sticky");
			const contBtns = [{
				condition: scrollToActiveSongBtn,
				id: "scroll-to-active",
				resourceName: "icon-skip_to",
				titleKey: "scroll_to_playing",
				interaction: async (evt) => scrollToCurrentSongInQueue(evt)
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
						loggers.layout.error("Couldn't clear queue due to an error:", err);
					}
				}
			}];
			if (!contBtns.some((b) => Boolean(b.condition))) return;
			addSelectorListener("sidePanel", "ytmusic-tab-renderer ytmusic-queue-header-renderer #buttons", { async listener(rightBtnsEl) {
				try {
					const aboveQueueBtnCont = document.createElement("div");
					aboveQueueBtnCont.id = "bytm-above-queue-btn-cont";
					(0, _sv443_network_userutils.addParent)(rightBtnsEl, aboveQueueBtnCont);
					const headerEl = rightBtnsEl.closest("ytmusic-queue-header-renderer");
					if (!headerEl) return loggers.layout.error("Couldn't find queue header element while adding above queue buttons");
					siteEvents.on("fullscreenToggled", (isFullscreen) => {
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
					loggers.layout.error("Couldn't add above queue buttons due to an error:", err);
				}
			} });
		}, 1);
	}
	/** Album artwork cache */
	var artCacheStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-artwork-cache",
		migrateIds: ["album-art-cache"],
		formatVersion: 1,
		engine: new _sv443_network_userutils.GMStorageEngine(),
		compressionFormat: compressionFormat$1,
		memoryCache: false,
		defaultData: { entries: [] },
		nanoEmitterOptions: {
			publicEmit: false,
			catchUpEvents: ["loadData"]
		}
	});
	async function deleteExpiredAlbumArtCacheEntries() {
		const ttl = 1e3 * 60 * 60 * 24 * getFeature("thumbnailOverlayAlbumArtCacheTTL");
		const cacheData = await artCacheStore.loadData();
		const expiredEntries = cacheData.entries.filter((e) => Date.now() - e.created > ttl);
		if (expiredEntries.length > 0) {
			loggers.layout.log(`Deleting ${expiredEntries.length} expired album art cache entries`);
			artCacheStore.setData({ entries: cacheData.entries.filter((en) => !expiredEntries.some((ex) => ex.videoId === en.videoId)) });
		}
	}
	var ThumbOvlState = /* @__PURE__ */ function(ThumbOvlState) {
		ThumbOvlState[ThumbOvlState["Off"] = 0] = "Off";
		ThumbOvlState[ThumbOvlState["YT"] = 1] = "YT";
		ThumbOvlState[ThumbOvlState["AM"] = 2] = "AM";
		return ThumbOvlState;
	}({});
	/** Changed when the toggle button is pressed - used to change the state of "showOverlay" */
	var overlayState = ThumbOvlState.Off;
	async function initThumbnailOverlay() {
		if (!getFeature("thumbnailOverlayEnabled")) return;
		deleteExpiredAlbumArtCacheEntries();
		waitVideoElementReady().then(() => {
			const playerSelector = "ytmusic-player#player";
			const playerEl = document.querySelector(playerSelector);
			if (!playerEl) return loggers.layout.error("Couldn't find video player element while adding thumbnail overlay");
			/** Checks and updates the overlay and toggle button states based on the current song type (yt video or ytm song) */
			const updateOverlayVisibility = async (isManual = false) => {
				if (!(0, _sv443_network_userutils.isDomLoaded)()) return;
				const isVideo = getCurrentMediaType() === "video";
				const defaultBehavior = getFeature("thumbnailOverlayBehavior");
				const prefState = getFeature("thumbnailOverlayPreferredSource") === "am" ? ThumbOvlState.AM : ThumbOvlState.YT;
				if (!isManual && overlayState === ThumbOvlState.Off) overlayState = defaultBehavior === "videosOnly" && isVideo || defaultBehavior === "songsOnly" && !isVideo || defaultBehavior === "always" ? prefState : ThumbOvlState.Off;
				else if (!isManual && overlayState !== prefState) overlayState = prefState;
				if (getCurrentMediaType() === "video" && overlayState === ThumbOvlState.AM) overlayState = ThumbOvlState.YT;
				const overlayElem = document.querySelector("#bytm-thumbnail-overlay");
				const thumbElem = document.querySelector("#bytm-thumbnail-overlay-img");
				const thumbBgElem = document.querySelector("#bytm-thumbnail-overlay-bg-img");
				const indicatorElem = document.querySelector("#bytm-thumbnail-overlay-indicator");
				const ovlShown = overlayState !== ThumbOvlState.Off;
				if (overlayElem) overlayElem.style.display = ovlShown ? "block" : "none";
				if (thumbElem) thumbElem.ariaHidden = String(!ovlShown);
				if (thumbBgElem) thumbBgElem.ariaHidden = String(!ovlShown);
				if (indicatorElem) {
					indicatorElem.style.display = ovlShown ? "block" : "none";
					indicatorElem.ariaHidden = String(!ovlShown);
				}
				if (getFeature("thumbnailOverlayToggleBtnShown")) addSelectorListener("playerBarMiddleButtons", "#bytm-thumbnail-overlay-toggle", { async listener(toggleBtnElem) {
					if (toggleBtnElem.querySelector("svg")) {
						let key = `icon-image${overlayState === ThumbOvlState.YT ? "_filled_yt" : overlayState === ThumbOvlState.AM ? "_filled_am" : ""}`;
						if (getCurrentMediaType() === "video" && overlayState !== ThumbOvlState.Off) key = "icon-image_filled";
						setInnerHtml(toggleBtnElem, await resourceAsString(key));
						toggleBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
					}
					if (toggleBtnElem) toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay.toggle_btn_tooltip-${ThumbOvlState[overlayState]}`);
				} });
			};
			/** Retrieves the best thumbnail URL for the given video ID and applies it to the DOM */
			const applyThumbUrl = async (videoID) => {
				try {
					const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
					if (toggleBtnElem?.dataset.albumArtworkUrl?.startsWith("http") && (!toggleBtnElem.dataset.albumArtworkRes || toggleBtnElem.dataset.albumArtworkRes.length === 0) && toggleBtnElem.dataset.albumArtworkRes === String(getFeature("thumbnailOverlayITunesImgRes"))) return openInTab(toggleBtnElem.dataset.albumArtworkUrl, false);
					/** Call to pass the YT and AM artwork URLs to the DOM elements */
					const setThumbOverlayUrl = (ytThumbUrl, amThumbUrl) => {
						const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
						const thumbImgElem = document.querySelector("#bytm-thumbnail-overlay-img");
						const thumbImgBgElem = document.querySelector("#bytm-thumbnail-overlay-bg-img");
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
						if (thumbImgBgElem) {
							thumbImgBgElem.dataset.videoId = videoID;
							thumbImgBgElem.src = thumbUrl;
							thumbImgBgElem.dataset.mediaType = getCurrentMediaType();
						}
						loggers.layout.log("Applied thumbnail URL to overlay:", thumbUrl);
					};
					let bestNativeThumbUrl;
					const ac = new AbortController();
					getBestThumbnailUrl(videoID).then((url) => {
						if (ac.signal.aborted ? void 0 : bestNativeThumbUrl = url) setThumbOverlayUrl(url);
					}).catch(() => void 0);
					addSelectorListener("playerBarInfo", ".subtitle > yt-formatted-string a, .subtitle > yt-formatted-string span", { async listener() {
						if (ac.signal.aborted) return;
						const [primaryArtist, albumName] = (() => {
							const parent = document.querySelector(".content-info-wrapper .subtitle yt-formatted-string");
							if (!parent) return [void 0, void 0];
							const splitList = [...parent.querySelectorAll("a, span")].reduce((acc, el) => {
								if (el.tagName === "SPAN" && el.innerText.includes("•")) {
									acc.push([]);
									return acc;
								}
								acc[acc.length - 1].push(el);
								return acc;
							}, [[]]);
							if (splitList.length < 2) return [void 0, void 0];
							const firstArtistLink = splitList[0].find((el) => el.tagName === "A");
							const firstArtistName = splitList[0].find((el) => !el.innerText.match(/^\s*•\s*$/));
							return [(firstArtistLink ?? firstArtistName)?.innerText, splitList[1].find((el) => el.tagName === "A")?.innerText];
						})();
						const iTunesAlbum = primaryArtist && albumName ? await getBestITunesAlbumMatch(videoID, primaryArtist, albumName) : void 0;
						const imgRes = getFeature("thumbnailOverlayITunesImgRes", featInfo.thumbnailOverlayITunesImgRes.default);
						const iTunesUrl = iTunesAlbum?.artworkUrl100 ?? iTunesAlbum?.artworkUrl60;
						iTunesUrl && !ac.signal.aborted && ac.abort();
						const thumbUrl = iTunesUrl?.replace(/(100x100|60x60)/, `${imgRes}x${imgRes}`) ?? bestNativeThumbUrl ?? await getBestThumbnailUrl(videoID);
						if (thumbUrl) {
							loggers.layout.log(`Successfully resolved artwork${albumName ? ` for '${primaryArtist} - ${albumName}'` : ". Couldn't find album name, defaulting to best available YT thumbnail"}: ${thumbUrl}`);
							setThumbOverlayUrl(bestNativeThumbUrl ?? thumbUrl, thumbUrl);
						} else loggers.layout.warn(`Couldn't get thumbnail URL for album '${primaryArtist} - ${albumName}' or video with ID '${videoID}'`);
					} });
				} catch (err) {
					loggers.layout.error("Couldn't apply thumbnail URL to overlay due to an error:", err);
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
					thumbImgElem.classList.add("bytm-thumbnail-overlay-img");
					thumbImgElem.role = "presentation";
					thumbImgElem.ariaHidden = "true";
					overlayElem.appendChild(thumbImgElem);
					playerEl.appendChild(overlayElem);
					indicatorElem && playerEl.appendChild(indicatorElem);
					siteEvents.on("watchIdChanged", async (videoId) => {
						overlayState = ThumbOvlState.Off;
						return await Promise.allSettled([applyThumbUrl(videoId), updateOverlayVisibility()]);
					});
					const params = new URL(location.href).searchParams;
					if (params.has("v")) {
						applyThumbUrl(params.get("v"));
						updateOverlayVisibility();
					}
					if (getFeature("thumbnailOverlayToggleBtnShown")) {
						const toggleBtnElem = createRipple(document.createElement("a"));
						toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
						toggleBtnElem.role = "button";
						toggleBtnElem.tabIndex = 0;
						toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");
						toggleBtnElem.dataset.state = ThumbOvlState[overlayState];
						onInteraction(toggleBtnElem, (e) => {
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
						addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: (likeContainer) => likeContainer.insertAdjacentElement("afterend", toggleBtnElem) });
					}
					loggers.layout.log("Added thumbnail overlay");
				} catch (err) {
					loggers.layout.error("Couldn't create thumbnail overlay elements due to an error:", err);
				}
			};
			addSelectorListener("mainPanel", playerSelector, { listener(playerEl) {
				if (playerEl.getAttribute("player-ui-state") === "INACTIVE") {
					const obs = new MutationObserver(() => {
						if (playerEl.getAttribute("player-ui-state") === "INACTIVE") return;
						createElements();
						obs.disconnect();
					});
					obs.observe(playerEl, {
						attributes: true,
						attributeFilter: ["player-ui-state"]
					});
				} else createElements();
			} });
		});
	}
	/** Resolves with the best iTunes album match for the given artist and album name (not sanitized) */
	async function getBestITunesAlbumMatch(videoId, artistsRaw, albumRaw) {
		if (overlayState === ThumbOvlState.AM) {
			const cacheEntry = (await artCacheStore.loadData()).entries.find((e) => e.videoId === videoId);
			if (cacheEntry) {
				loggers.layout.log(`Found cached album artwork for video ID ${videoId}:`, cacheEntry);
				return {
					artworkUrl60: cacheEntry.url.replace(/100x100/, "60x60"),
					artworkUrl100: cacheEntry.url.replace(/60x60/, "100x100")
				};
			}
		}
		/** Fetches the album info from the iTunes API and returns the best match as well as the first result as a fallback in a tuple */
		const doFetchITunesAlbum = async (artist, album) => {
			const albumObjs = await fetchITunesAlbumInfo(artist, album);
			if (albumObjs && albumObjs.length > 0) return [albumObjs.find((al) => (sanitizeArtists(al.artistName).toLowerCase() === artist.toLowerCase() || sanitizeArtists(al.artistName) === artistsRaw) && (sanitizeSong(al.collectionName).toLowerCase() === sanitizeSong(album).toLowerCase() || sanitizeSong(al.collectionCensoredName).toLowerCase() === sanitizeSong(album).toLowerCase())), albumObjs[0]];
			return [void 0, albumObjs[0]];
		};
		const artist = sanitizeArtists(artistsRaw);
		let [bestMatch, fallback] = await doFetchITunesAlbum(artist, albumRaw);
		if (!bestMatch) [bestMatch, fallback] = await doFetchITunesAlbum(artist, albumRaw);
		const match = bestMatch ?? fallback;
		if (match) {
			const entries = (await artCacheStore.loadData()).entries;
			if (!entries.some((e) => e.videoId === videoId)) {
				const entry = {
					videoId,
					url: match.artworkUrl100,
					created: Date.now()
				};
				entries.push(entry);
				loggers.layout.log(`Added album artwork template URL for '${artist} - ${albumRaw}' (or video with ID '${videoId}') to cache:`, match.artworkUrl100);
				emitInterface("bytm:artworkCacheEntryAdded", {
					album: albumRaw,
					artist,
					entry
				});
				await artCacheStore.setData({ entries });
			}
		} else loggers.layout.warn(`The iTunes API yielded no album info for '${artist} - ${albumRaw}', defaulting to regular YT thumbnail`);
		return match;
	}
	async function initHideCursorOnIdle() {
		addSelectorListener("mainPanel", "ytmusic-player#player", { listener(vidContainer) {
			const overlayElem = document.querySelector("ytmusic-player #song-media-window");
			if (!overlayElem) return loggers.layout.warn("Couldn't find overlay element while initializing cursor hiding");
			/** Last element the mouse was hovered over */
			let lastMouseoverElement = null;
			document.body.addEventListener("mouseover", (e) => {
				const tgt = e.target;
				if (!tgt) return;
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
				if (lastMouseoverElement && lastMouseoverElement.closest("ytmusic-player-bar")) return;
				if (getFeature("hidePlayerBarOnIdleInFullscreen") && isFullscreen) {
					const playerBar = document.querySelector("ytmusic-player-bar");
					if (playerBar) {
						hidePlayerBarTimer = setTimeout(() => {
							if (playerBar.classList.contains("hidden")) playerBar.style.display = "none";
							hidePlayerBarTimer = void 0;
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
					hideTransTimer = void 0;
					hidePlayerBar();
				}, 200);
			};
			const showPlayerBar = () => {
				const playerBar = document.querySelector("ytmusic-player-bar");
				if (playerBar && playerBar.classList.contains("hidden")) {
					if (hidePlayerBarTimer !== void 0) {
						clearTimeout(hidePlayerBarTimer);
						hidePlayerBarTimer = void 0;
					}
					playerBar.style.display = "";
					playerBar.classList.remove("hidden");
				}
			};
			siteEvents.on("fullscreenToggled", (fsEnabled) => {
				isFullscreen = fsEnabled;
				if (!getFeature("hidePlayerBarOnIdleInFullscreen")) return;
				if (!fsEnabled) showPlayerBar();
				else if ((!lastMouseoverElement || !lastMouseoverElement.closest("ytmusic-player-bar")) && vidContainer.classList.contains("bytm-cursor-hidden")) hidePlayerBar();
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
			vidContainer.addEventListener("mousemove", (0, _sv443_network_coreutils.debounce)(onMove, 150), { capture: true });
			vidContainer.addEventListener("mouseleave", () => {
				cursorHideTimer && clearTimeout(cursorHideTimer);
				hideTransTimer && clearTimeout(hideTransTimer);
				hide();
			}, { capture: true });
			vidContainer.addEventListener("click", (e) => {
				if (e.target?.closest("#themesongControlButtonsContainer")) return;
				show();
				cursorHideTimerCb();
				setTimeout(hide, 3e3);
			}, { capture: true });
			loggers.layout.log("Initialized cursor hiding on idle");
		} });
	}
	/** Prevents visual issues when using HDR */
	async function fixHdrIssues() {
		if (!await addStyleFromResource("css-fix_hdr")) loggers.layout.error("Couldn't load stylesheet to fix HDR issues");
		else loggers.layout.log("Fixed HDR issues");
	}
	/** Shows the amount of likes and dislikes on the current song */
	async function initShowVotes() {
		addSelectorListener("playerBar", ".middle-controls-buttons ytmusic-like-button-renderer", { async listener(voteCont) {
			try {
				const videoID = getWatchId();
				if (!videoID) {
					await siteEvents.once("watchIdChanged");
					return initShowVotes();
				}
				const voteObj = await fetchVideoVotes(videoID);
				if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj)) return loggers.layout.error("Couldn't fetch votes from the Return YouTube Dislike API");
				if (getFeature("showVotes")) {
					addVoteNumbers(voteCont, voteObj);
					siteEvents.on("watchIdChanged", async (videoID) => {
						const labelLikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.likes");
						const labelDislikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.dislikes");
						if (!labelLikes || !labelDislikes) return loggers.layout.error("Couldn't find vote label elements while updating like and dislike counts");
						if (labelLikes.dataset.watchId === videoID && labelDislikes.dataset.watchId === videoID) return loggers.layout.log("Vote labels already updated for this video");
						const voteObj = await fetchVideoVotes(videoID);
						if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj)) return loggers.layout.error("Couldn't fetch votes from the Return YouTube Dislike API");
						const likesLabelText = tp("vote_label_likes", voteObj.likes, formatNumber(voteObj.likes, "long"));
						const dislikesLabelText = tp("vote_label_dislikes", voteObj.dislikes, formatNumber(voteObj.dislikes, "long"));
						labelLikes.dataset.watchId = getWatchId() ?? "";
						labelLikes.textContent = formatNumber(voteObj.likes);
						labelLikes.title = labelLikes.ariaLabel = likesLabelText;
						labelDislikes.textContent = formatNumber(voteObj.dislikes);
						labelDislikes.title = labelDislikes.ariaLabel = dislikesLabelText;
						labelDislikes.dataset.watchId = getWatchId() ?? "";
						addSelectorListener("playerBar", "ytmusic-like-button-renderer#like-button-renderer", { listener: (bar) => upsertVoteBtnLabels(bar, likesLabelText, dislikesLabelText) });
					});
				}
			} catch (err) {
				loggers.layout.error("Couldn't initialize show votes feature due to an error:", err);
			}
		} });
	}
	function addVoteNumbers(voteCont, voteObj) {
		const likeBtn = voteCont.querySelector("#button-shape-like");
		const dislikeBtn = voteCont.querySelector("#button-shape-dislike");
		if (!likeBtn || !dislikeBtn) return loggers.layout.error("Couldn't find like or dislike button while adding vote numbers");
		const likeBtnCont = document.createElement("div");
		likeBtnCont.id = "bytm-like-btn-cont";
		(0, _sv443_network_userutils.addParent)(likeBtn, likeBtnCont);
		const dislikeBtnCont = document.createElement("div");
		dislikeBtnCont.id = "bytm-dislike-btn-cont";
		(0, _sv443_network_userutils.addParent)(dislikeBtn, dislikeBtnCont);
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
			const videoID = getWatchId();
			if (!videoID) return;
			const voteObj = await fetchVideoVotes(videoID);
			if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj)) return loggers.layout.error("Couldn't fetch votes from the Return YouTube Dislike API");
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
				subtree: false
			});
			siteEvents.on("pathChanged", () => {
				rendererObs.disconnect();
				updateLabels();
			});
		}
		addStyleFromResource("css-show_votes").catch((e) => loggers.layout.error("Couldn't add CSS for show votes feature due to an error:", e));
		const likeLblEl = createLabel(voteObj.likes, "likes");
		likeBtn.insertAdjacentElement("afterend", likeLblEl);
		const dislikeLblEl = createLabel(voteObj.dislikes, "dislikes");
		dislikeBtn.insertAdjacentElement("afterend", dislikeLblEl);
		upsertVoteBtnLabels(voteCont, likeLblEl.title, dislikeLblEl.title);
		loggers.layout.log("Added vote number labels to like and dislike buttons");
		forceEmitSiteEvent("voteLabelsAdded");
	}
	/** Updates or inserts the labels on the native like and dislike buttons */
	function upsertVoteBtnLabels(parentEl, likesLabelText, dislikesLabelText) {
		const likeBtn = parentEl.querySelector("#button-shape-like button");
		const dislikeBtn = parentEl.querySelector("#button-shape-dislike button");
		if (likeBtn) likeBtn.title = likeBtn.ariaLabel = likesLabelText;
		if (dislikeBtn) dislikeBtn.title = dislikeBtn.ariaLabel = dislikesLabelText;
	}
	/** Swaps the like and dislike buttons on the watch page */
	async function initSwapLikeDislikeBtns() {
		const err = (err) => loggers.layout.error("Couldn't initialize \"swap like and dislike buttons\" feature due to an error" + err ? ":" : "", err);
		try {
			if (!getFeature("swapLikeDislikeButtons")) return;
			if (await addStyleFromResource("css-swap_like_dislike_btns")) loggers.layout.log("Initialized \"swap like and dislike buttons\" feature");
			else err();
		} catch (e) {
			err(e);
		}
	}
	/** Makes the watch page full size */
	async function initWatchPageFullSize() {
		if (!await addStyleFromResource("css-watch_page_full_size")) {
			loggers.layout.error("Couldn't load stylesheet to make watch page full size");
			return;
		}
		globservers.mainPanel.once("enabled", () => {
			const mainPanel = document.querySelector(globservers.mainPanel.baseElement);
			loggers.layout.log("Initialized watch page full size", mainPanel);
			if (mainPanel) {
				window.addEventListener("resize", (0, _sv443_network_coreutils.debounce)(() => {
					const headerHeight = document.querySelector("ytmusic-header-renderer")?.offsetHeight ?? 0;
					mainPanel.style.maxHeight = `calc(100vh - ${headerHeight}px - 50px)`;
					loggers.misc.dbg("Set main panel max height to", mainPanel.style.maxHeight);
				}, 200), { passive: true });
				window.dispatchEvent(new Event("resize"));
			}
		});
	}
	/** Truncates long subtitles in the player bar with an ellipsis */
	async function initTruncatePlayerBarSubtitles() {
		if (!await addStyleFromResource("css-truncate_player_bar_subtitles")) loggers.layout.error("Couldn't load stylesheet to truncate player bar subtitles");
		else loggers.layout.log("Truncated player bar subtitles");
	}
	//#endregion
	//#region src/serializers.ts
	/** Central serializer for all data stores */
	var serializer;
	/** Central serializer for all data stores, including the caches and other stores that have volatile enough data */
	var fullSerializer;
	/** Set of IDs of all {@linkcode DataStore} instances whose data has finished loading at least once. */
	var loadedStores = /* @__PURE__ */ new Set();
	/** Wraps an array of {@linkcode DataStore} instances to attach event listeners. */
	function wrapStores(stores) {
		for (const store of stores) store.once("loadData", () => loadedStores.add(store.id));
		return stores;
	}
	/**
	* Array of all {@linkcode DataStore} instances that are included in the crucial-data-only DataStoreSerializer instance.  
	* Call function to lazy-load stores, as import order is all kinds of messed up.  
	* This is only truly safe to call after `bytm:allReady`!
	*/
	var getSerializerStores = () => wrapStores([
		configStore,
		autoLikeStore,
		alertsStore,
		pluginPermissionsStore
	]);
	/**
	* Array of all {@linkcode DataStore} instances, including the caches and other stores that store volatile-ish data.  
	* Call function to lazy-load stores, as import order is all kinds of messed up.  
	* This is only truly safe to call after `bytm:allReady`!
	*/
	var getSerializerStoresFull = () => wrapStores([
		...getSerializerStores(),
		artCacheStore,
		lyricsCacheStore,
		resourceCacheStore
	]);
	/** Returns the DataStoreSerializer instance for all DataStore instances that manage crucial data. Doesn't include the full list of stores (caches, etc.) by default. */
	function getDSSerializer(full = false) {
		const dsOpts = {
			addChecksum: false,
			ensureIntegrity: false,
			stringifyData: false
		};
		if (!full) return serializer ??= new _sv443_network_coreutils.DataStoreSerializer(getSerializerStores(), dsOpts);
		else return fullSerializer ??= new _sv443_network_coreutils.DataStoreSerializer(getSerializerStoresFull(), dsOpts);
	}
	window.addEventListener("bytm:ready", async () => {
		const promises = [];
		const stores = getSerializerStoresFull();
		for (const store of stores) {
			if (loadedStores.has(store.id) || !store.memoryCache) continue;
			loadedStores.add(store.id);
			promises.push(store.loadData());
		}
		await Promise.all(promises);
		emitInterface("bytm:dataStoreSerializerLoaded");
		loggers.init.info(`Lazy-loaded all ${stores.length} DataStore instances.`);
	});
	/**
	* Downloads the current data stores as a single file.
	* @param useEncoding Whether to encode the data using the DataStoreSerializer's encoding method. Defaults to `true`.
	* @param full Whether to include all stores (the list returned by {@linkcode getSerializerStoresFull()}) or just the most important ones (the list returned by {@linkcode getSerializerStores()}). Defaults to `false`.
	*/
	async function downloadData(useEncoding = true, full = false) {
		const serializer = getDSSerializer(full);
		downloadFile(t(`data_export_file_name${full ? "_full" : ""}`, {
			scriptName: scriptInfo$1.name,
			version: package_default.version,
			date: (/* @__PURE__ */ new Date()).toISOString()
		}), JSON.stringify(JSON.parse(await serializer.serialize(useEncoding)), void 0, 2), "application/json");
	}
	//#endregion
	//#region src/components/MarkdownDialog.ts
	var MarkdownDialog = class MarkdownDialog extends BytmDialog {
		opts;
		constructor(options) {
			super({
				...options,
				id: `md-${options.id}`,
				renderBody: () => this.renderBody()
			});
			this.opts = options;
		}
		/** Parses the passed markdown string (supports GitHub flavor and HTML mixins) and returns it as an HTML string */
		static async parseMd(md, sanitize = false) {
			const parsed = await marked.marked.parse(md, {
				async: true,
				gfm: true,
				breaks: true
			});
			return sanitize ? sanitizeHtml(parsed) : parsed;
		}
		/** Renders the dialog body elements from a markdown string using what's set in `this.opts.body` */
		async renderBody() {
			const bodyEl = document.createElement("div");
			bodyEl.classList.add("bytm-md-dialog-body");
			const mdCont = await (0, _sv443_network_coreutils.consumeStringGen)(this.opts.body);
			const markdownEl = document.createElement("div");
			markdownEl.classList.add("bytm-markdown-dialog-content", "bytm-markdown-container");
			markdownEl.tabIndex = 0;
			setInnerHtml(markdownEl, await MarkdownDialog.parseMd(mdCont, this.opts.sanitizeBody));
			if (this.opts.modifyBodyElements) await this.opts.modifyBodyElements(bodyEl, markdownEl);
			bodyEl.appendChild(markdownEl);
			return bodyEl;
		}
	};
	//#endregion
	//#region src/interface.ts
	var { mode, branch, host, buildNumber, compressionFormat, scriptInfo, initialParams, sessionStorageAvailable } = constants_exports;
	var { autoPlural: autoPlural$4, NanoEmitter, pureObj: pureObj$2 } = _sv443_network_coreutils;
	var { getUnsafeWindow: getUnsafeWindow$6 } = _sv443_network_userutils;
	[...allSiteEvents.map((e) => `bytm:siteEvent:${e}`)];
	/**
	* All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`)  
	* If prefixed with /\*🔒\*\/, the function is authenticated and requires a token to be passed as the first argument.
	*/
	var globalFuncs = pureObj$2({
		getPluginInfo,
		getInternals,
		getDomain,
		getResourceUrl,
		resourceAsString,
		getSessionId,
		reloadTab,
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
		onSiteEvent: siteEvents.on.bind(siteEvents),
		onceSiteEvent: siteEvents.once.bind(siteEvents),
		onMultiSiteEvents: siteEvents.onMulti.bind(siteEvents),
		setLocale: setLocaleInterface,
		getLocale,
		hasKey,
		hasKeyFor,
		t,
		tp,
		tl,
		tlp,
		getFeatures: getFeaturesInterface,
		saveFeatures: saveFeaturesInterface,
		getDefaultFeatures: () => structuredClone(cfgDefaultData),
		sanitizeArtists,
		sanitizeSong,
		fetchLyricsUrlTop,
		fuzzyFetchLyricsInfo,
		getLyricsCacheEntry,
		getAutoLikeData: getAutoLikeDataInterface,
		saveAutoLikeData: saveAutoLikeDataInterface,
		fetchVideoVotes,
		createHotkeyInput,
		createToggleInput,
		createCircularBtn,
		createRipple,
		showToast,
		showIconToast,
		showPrompt: showPromptInterface,
		formatNumber
	});
	/** Initializes the BYTM interface */
	function preInitInterface() {
		const props = {
			sessionId: getSessionId(),
			mode,
			branch,
			host,
			buildNumber,
			initialParams,
			compressionFormat,
			sessionStorageAvailable,
			...scriptInfo,
			...globalFuncs,
			NanoEmitter,
			loggers,
			Logger,
			BytmDialog,
			ExImDialog,
			MarkdownDialog,
			getBytmDialog,
			getExImDialog,
			getMarkdownDialog,
			CoreUtils: _sv443_network_coreutils,
			UserUtils: _sv443_network_userutils,
			compareVersions: compare_versions
		};
		for (const [key, value] of Object.entries(props)) setGlobalProp(key, value);
		loggers.plugin.log("Initialized BYTM interface");
	}
	/** Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page! */
	function setGlobalProp(key, value) {
		const win = getUnsafeWindow$6();
		if (typeof win.BYTM !== "object") win.BYTM = pureObj$2({});
		win.BYTM[key] = value;
	}
	/** Emits an event on the BYTM interface */
	function emitInterface(type, ...detail) {
		try {
			unsafeWindow.dispatchEvent(new CustomEvent(type, { detail: detail?.[0] ?? void 0 }));
			emitOnPlugins(type, void 0, ...detail);
			if (getFeature("logEvents")) detail.length > 0 && detail?.[0] ? loggers.plugin.log(`Emitted interface event '${type}' with data:`, ...detail) : loggers.plugin.log(`Emitted interface event '${type}' (without data)`);
		} catch (err) {
			loggers.plugin.error(`Couldn't emit interface event '${type}' due to an error:\n`, err);
		}
	}
	/**
	* Stores information about plugins that have been registered and have had their intents granted (thus turning them into permissions).  
	* Maps a plugin key (see {@linkcode getPluginKey()}) to a tuple of granted permissions (index 0), at the point in time where the plugin requested the given intents (index 1).  
	* At init time, should the plugin register itself with an intent bitset that doesn't match the requested intents (tuple index 1), the plugin permission dialog should be shown again, since permissions need to be re-granted or reconfigured.
	*/
	var pluginPermissionsStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-plugin-permissions",
		engine: new _sv443_network_userutils.GMStorageEngine(),
		defaultData: {},
		formatVersion: 0,
		compressionFormat: null
	});
	/** Map of plugin key to all registered plugins */
	var registeredPlugins = /* @__PURE__ */ new Map();
	/** Map of plugin key to auth token for plugins that have been registered */
	var registeredPluginTokens = /* @__PURE__ */ new Map();
	var pluginsInitialized = false;
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
			if (registeredPlugins.size > 0) loggers.plugin.info(`Registered ${registeredPlugins.size} ${autoPlural$4("plugin", registeredPlugins.size)}${mode === "development" ? " (including dev plugin)" : ""}`, LogLevel.Info);
			else loggers.plugin.log("No plugins registered");
		}, { once: true });
	}
	/** Registers a plugin on the BYTM interface. */
	function registerPlugin(def) {
		try {
			if (pluginsInitialized) throw new PluginError(`Failed to register plugin '${getPluginKey(def)}': BYTM interface has already been initialized - plugins can only be registered after the 'bytm:registerPlugin' event and before the 'bytm:ready' event`);
			const plKey = getPluginKey(def);
			if (registeredPlugins.has(plKey)) throw new PluginError(`Failed to register plugin '${plKey}': Plugin with the same name and namespace is already registered`);
			const validationErrors = validatePluginDef(def);
			if (validationErrors) throw new PluginError(`Failed to register plugin${def?.plugin?.name ? ` '${def?.plugin?.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`);
			const events = new NanoEmitter({ publicEmit: true });
			const token = crypto.randomUUID();
			registeredPlugins.set(plKey, {
				def,
				events
			});
			registeredPluginTokens.set(plKey, token);
			const permissionInt = defToIntentsBitSet(def);
			const permissions = {
				int: permissionInt,
				array: parseBitSetEnumArray(permissionInt, PluginIntent)
			};
			loggers.plugin.info(`Successfully registered plugin '${plKey}'`, LogLevel.Info);
			setTimeout(() => emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def)), 0);
			return {
				info: getPluginInfo(token, def),
				events,
				token,
				permissions
			};
		} catch (err) {
			loggers.plugin.error(`Failed to register plugin '${getPluginKey(def)}':`, err instanceof PluginError ? err : new PluginError(String(err)));
			throw err;
		}
	}
	/** After the dev plugin is registered, this token can be used to access anything on the plugin interface */
	var devPluginToken;
	var devPluginId = _sv443_network_coreutils.randomId(8, 36, true, true);
	/** Registers a plugin that only exists in development mode to test the plugin system */
	function registerDevPlugin() {
		if (mode !== "development") return;
		try {
			const { token, events } = registerPlugin({
				plugin: {
					name: t("dev_plugin.name"),
					namespace: `${package_default.namespace}+${devPluginId}`,
					version: package_default.version,
					description: createTranslatable("dev_plugin.description"),
					homepage: {
						source: package_default.homepage,
						changelog: `${package_default.homepage}/blob/${branch}/changelog.md`,
						bug: package_default.bugs.url,
						greasyfork: package_default.hosts.greasyfork,
						openuserjs: package_default.hosts.openuserjs,
						other: package_default.hosts.github
					},
					iconUrl: "https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_dev_128.png"
				},
				intents: PluginIntent.FullAccess
			});
			devPluginToken = token;
			setGlobalProp("devPluginEvents", events);
		} catch (err) {
			loggers.plugin.error("Failed to register dev plugin:", err instanceof PluginError ? err : new PluginError(String(err), { cause: err }));
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
		return plugin ? {
			name: plugin.plugin.name,
			namespace: plugin.plugin.namespace,
			version: plugin.plugin.version
		} : void 0;
	}
	/** Checks whether two plugins are the same, given their resolvable definition objects */
	function sameDef(def1, def2) {
		return getPluginKey(def1) === getPluginKey(def2);
	}
	/** Emits an event on all plugins that match the predicate (all plugins by default) */
	function emitOnPlugins(event, predicate = true, ...data) {
		for (const { def, events } of registeredPlugins.values()) if (typeof predicate === "boolean" ? predicate : predicate(def)) events.emit(event, ...data);
	}
	/**
	* @private FOR INTERNAL USE ONLY!  
	* Returns the internal plugin def and events objects, or undefined if it doesn't exist.
	*/
	function getPlugin(...args) {
		return typeof args[0] === "string" && typeof args[1] === "undefined" ? registeredPlugins.get(args[0]) : args.length === 2 ? registeredPlugins.get(`${args[1]}/${args[0]}`) : registeredPlugins.get(getPluginKey(args[0]));
	}
	/**
	* Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered.  
	* This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
	* @public Intended for general use in plugins.
	*/
	function getPluginInfo(...args) {
		if (resolveToken(args[0]) === void 0) return void 0;
		return pluginDefToInfo(registeredPlugins.get(typeof args[1] === "string" && typeof args[2] === "undefined" ? args[1] : args.length === 2 ? getPluginKey(args[1]) : `${args[2]}/${args[1]}`)?.def);
	}
	/**
	* @private FOR INTERNAL USE ONLY!  
	* Whether the given plugin has the given granted intents.
	*/
	function pluginHasPerms(...args) {
		const plugin = typeof args[0] === "string" && typeof args[1] === "string" ? getPlugin(args[0], args[1]) : getPlugin(args[0]);
		if (!plugin) return false;
		const asArray = (value) => Array.isArray(value) ? value : [value];
		const perms = (typeof args[0] === "string" && typeof args[1] === "string" ? asArray(args[2]) : asArray(args[1])) ?? [];
		if (!Array.isArray(perms)) throw new TypeError("The second argument must be an array of PluginIntent values");
		const pluginIntents = defToIntentsBitSet(plugin.def);
		return _sv443_network_userutils.bitSetHas(pluginIntents, PluginIntent.FullAccess) || perms.every((perm) => _sv443_network_coreutils.bitSetHas(pluginIntents, perm));
	}
	/** Converts the intents from a PluginDef object into a bit set value. */
	function defToIntentsBitSet(def) {
		if (Array.isArray(def.intents)) return def.intents.reduce((acc, intent) => acc | intent, 0);
		else if (typeof def.intents === "number") return def.intents;
		else return 0;
	}
	/** Iterates over the {@linkcode enumRef} and returns an array of all intents that are set in the passed {@linkcode bitSet} value. */
	function parseBitSetEnumArray(bitSet, enumRef) {
		const result = [];
		for (const [, val] of Object.entries(enumRef)) if ((typeof val === "number" || typeof val === "bigint") && _sv443_network_coreutils.bitSetHas(bitSet, val)) result.push(val);
		return result;
	}
	/** Validates the passed PluginDef object and returns an array of errors - returns undefined if there were no errors - never returns an empty array */
	function validatePluginDef(pluginDef) {
		const errors = [];
		const addNoPropErr = (jsonPath, type) => errors.push(t("plugin_validation_error.no_property", jsonPath, type));
		const addInvalidPropErr = (jsonPath, value, examples) => errors.push(tp("plugin_validation_error.invalid_property", examples, jsonPath, value, `'${examples.join("', '")}'`));
		typeof pluginDef.plugin !== "object" && addNoPropErr("plugin", "object");
		const { plugin } = pluginDef;
		!plugin?.name && addNoPropErr("plugin.name", "string");
		!plugin?.namespace && addNoPropErr("plugin.namespace", "string");
		if (typeof plugin?.version !== "string") addNoPropErr("plugin.version", "MAJOR.MINOR.PATCH");
		else if (!compare_versions.validateStrict(plugin.version)) addInvalidPropErr("plugin.version", plugin.version, ["0.0.1", "2.5.21-rc.1"]);
		return errors.length > 0 ? errors : void 0;
	}
	/** Checks whether the passed token is a valid auth token for any registered plugin and returns the plugin ID, else returns undefined */
	function resolveToken(token) {
		return typeof token === "string" && token.length > 0 ? [...registeredPluginTokens.entries()].find(([k, t]) => registeredPlugins.has(k) && token === t)?.[0] ?? void 0 : void 0;
	}
	/**
	* Sets the new locale on the BYTM interface  
	* This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
	*/
	function setLocaleInterface(token, locale) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.WriteTranslations)) return;
		setLocale(locale);
		emitInterface("bytm:setLocale", {
			pluginId,
			locale
		});
	}
	/**
	* Returns the current feature config, with sensitive values replaced by `undefined`, unless the `SeeHiddenConfigValues` intent is granted.  
	* This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
	*/
	function getFeaturesInterface(token) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.ReadFeatureConfig)) return void 0;
		return pluginHasPerms(pluginId, PluginIntent.SeeHiddenConfigValues) ? getFeatures() : getFeaturesNoHidden();
	}
	/**
	* Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
	* This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
	*/
	function saveFeaturesInterface(token, features) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.WriteFeatureConfig)) return;
		setFeatures(features);
	}
	/**
	* Returns the auto-like data.  
	* This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
	*/
	function getAutoLikeDataInterface(token) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.ReadAutoLikeData)) return;
		return autoLikeStore.getData();
	}
	/**
	* Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.  
	* This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
	*/
	function saveAutoLikeDataInterface(token, data) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.WriteAutoLikeData)) return;
		return autoLikeStore.setData(data);
	}
	/** Returns the BytmDialog class, used to create BetterYTM's absolutely stunning and iconic and sexy and cool modal dialogs. */
	function getBytmDialog(token) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
		return BytmDialog;
	}
	/** Returns the ExImDialog class, used to create dialogs for importing and exporting serializable data. */
	function getExImDialog(token) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
		return ExImDialog;
	}
	/** Returns the MarkdownDialog class, used to create dialogs with custom rendered markdown content. */
	function getMarkdownDialog(token) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
		return MarkdownDialog;
	}
	/** Wrapper around {@linkcode showPrompt()} to check for the permission to show dialogs */
	function showPromptInterface(token, ...args) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs)) return;
		return showPrompt(...args);
	}
	/** Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins. */
	function getInternals(token) {
		const pluginId = resolveToken(token);
		if (pluginId === void 0 || !pluginHasPerms(pluginId, PluginIntent.InternalAccess)) return void 0;
		return {
			constants: constants_exports,
			globservers,
			getSerializerStores,
			getSerializerStoresFull,
			emitInterface,
			emitSiteEvent,
			siteEvents,
			addSelectorListener,
			showPrompt,
			setGlobalProp,
			enableDiscardBeforeUnload,
			disableDiscardBeforeUnload
		};
	}
	//#endregion
	//#region src/features/lyricsCache.ts
	var lyricsCacheStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-lyrics-cache",
		defaultData: { cache: [] },
		formatVersion: 2,
		engine: new _sv443_network_userutils.GMStorageEngine(),
		compressionFormat: compressionFormat$1,
		migrations: { 2: (oldData) => {
			oldData.cache = oldData.cache.map((entry) => ({
				artist: entry.artist,
				song: entry.song,
				path: "path" in entry ? entry.path : new URL(String("url" in entry ? entry.url : entry.path)).pathname,
				added: Math.floor(entry.added / 1e3),
				viewed: Math.floor(entry.viewed / 1e3)
			}));
			return oldData;
		} },
		nanoEmitterOptions: {
			publicEmit: false,
			catchUpEvents: ["loadData"]
		}
	});
	async function initLyricsCache() {
		const data = await lyricsCacheStore.loadData();
		loggers.lyrics.log(`Initialized lyrics cache (${data.cache.length} entries)`);
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
		const entry = cache.find((e) => e.artist === artist && e.song === song);
		if (entry && Date.now() - (entry?.added ?? 0) * 1e3 > getFeature("lyricsCacheTTL") * 1e3 * 60 * 60 * 24) {
			deleteLyricsCacheEntry(artist, song);
			return;
		}
		if (entry && refreshEntry) updateLyricsCacheEntry(artist, song);
		return entry;
	}
	/** Updates the "last viewed" timestamp of the cache entry for the passed artist and song */
	async function updateLyricsCacheEntry(artist, song) {
		const { cache } = lyricsCacheStore.getData();
		const idx = cache.findIndex((e) => e.artist === artist && e.song === song);
		if (idx !== -1) {
			const newEntry = cache.splice(idx, 1)[0];
			newEntry.viewed = Math.floor(Date.now() / 1e3);
			return await lyricsCacheStore.setData({ cache: [newEntry, ...cache] });
		}
	}
	/** Deletes the cache entry for the passed artist and song */
	async function deleteLyricsCacheEntry(artist, song) {
		const { cache } = lyricsCacheStore.getData();
		const idx = cache.findIndex((e) => e.artist === artist && e.song === song);
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
		if (getLyricsCacheEntry(artist, song, true)) return;
		const { cache } = lyricsCacheStore.getData();
		const entry = {
			artist,
			song,
			path,
			viewed: Math.floor(Date.now() / 1e3),
			added: Math.floor(Date.now() / 1e3)
		};
		cache.push(entry);
		cache.sort((a, b) => b.viewed - a.viewed);
		cache.splice(getFeature("lyricsCacheMaxSize"));
		loggers.lyrics.log("Added lyrics cache entry for best result:", entry);
		emitInterface("bytm:lyricsCacheEntryAdded", {
			entry,
			type: "best"
		});
		return lyricsCacheStore.setData({ cache });
	}
	//#endregion
	//#region src/dialogs/versionNotif.ts
	var verNotifDialog = null;
	/** Creates and/or returns the dialog to be shown when a new version is available */
	async function getVersionNotifDialog({ latestTag }) {
		if (!verNotifDialog) {
			const changelogMd = (await getChangelogMd()).split("<div class=\"split\">")[1];
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
				renderHeader: renderHeader$3,
				renderBody: () => renderBody$3({
					latestTag,
					changelogHtml
				})
			});
		}
		return verNotifDialog;
	}
	async function renderHeader$3() {
		const logoEl = document.createElement("img");
		logoEl.classList.add("bytm-dialog-header-img", "bytm-no-select");
		logoEl.src = await getResourceUrl("img-logo_dev");
		logoEl.alt = "BetterYTM logo";
		return logoEl;
	}
	var disableUpdateCheck = false;
	async function renderBody$3({ latestTag, changelogHtml }) {
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
		if (!getFeature("versionCheck")) disableUpdateCheck = true;
		const disableToggleEl = await createToggleInput({
			id: "disable-update-check",
			initialValue: disableUpdateCheck,
			labelPos: "off",
			onChange(checked) {
				disableUpdateCheck = checked;
				if (checked) btnClose.textContent = t("close_and_ignore_until_reenabled");
				else btnClose.textContent = t("close_and_ignore_for_24h");
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
			if (config.versionCheck && disableUpdateCheck) config.versionCheck = false;
			else if (!config.versionCheck && !disableUpdateCheck) config.versionCheck = true;
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
			window.open(package_default.updates[host$1]);
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
	//#endregion
	//#region src/features/versionCheck.ts
	/** Initializes the automatic version check feature. */
	async function initVersionCheck() {
		try {
			if (getFeature("versionCheck") === false) return loggers.misc.info("Version check is disabled");
			const lastCheck = await GM.getValue("bytm-version-check", 0);
			if (Date.now() - lastCheck < 1e3 * 60 * 60 * 24) return;
			await doVersionCheck(false);
		} catch (err) {
			loggers.misc.error("Version check failed:", err);
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
			url: `https://github.com/${repo}/releases/latest`
		});
		const noNewVerFound = () => notifyNoNewVerFound ? showPrompt({
			type: "alert",
			message: t("no_new_version_found")
		}) : void 0;
		let latestTag;
		const { hostname, pathname } = new URL(res.finalUrl);
		if (hostname === "github.com" && pathname.startsWith(`/Sv443/BetterYTM/releases/tag/`)) latestTag = pathname.split("/").pop()?.replace(/[a-zA-Z]/g, "");
		if (!latestTag || !(0, compare_versions.validateStrict)(latestTag)) return await noNewVerFound();
		loggers.misc.info("Version check results - current version:", scriptInfo$1.version, "- latest version:", latestTag, "- from URL:", res.finalUrl, LogLevel.Info);
		if ((0, compare_versions.compare)(scriptInfo$1.version, latestTag, "<")) {
			await (await getVersionNotifDialog({ latestTag })).open();
			return;
		}
		return await noNewVerFound();
	}
	//#endregion
	//#region src/features/volume.ts
	/** Initializes all volume-related features */
	async function initVolumeFeatures() {
		let listenerOnce = false;
		const onSliderElExists = async (type, sliderElem) => {
			const volSliderCont = document.createElement("div");
			volSliderCont.classList.add("bytm-vol-slider-cont");
			sliderElem.setAttribute("step", "1");
			if (getFeature("volumeSliderScrollStep") !== featInfo.volumeSliderScrollStep.default) initScrollStep(volSliderCont, sliderElem);
			(0, _sv443_network_userutils.addParent)(sliderElem, volSliderCont);
			if (getFeature("volumeSliderLabel")) await addVolumeSliderLabel(type, sliderElem, volSliderCont);
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
		addSelectorListener("playerBarRightControls", getSelector("volume", "volSlider_sub_playerBarRightControls"), { listener: (el) => onSliderElExists("normal", el) });
		let sizeSmOnce = false;
		const onResize = () => {
			if (sizeSmOnce || window.innerWidth >= 1150) return;
			sizeSmOnce = true;
			addSelectorListener("playerBarRightControls", getSelector("volume", "volSliderExpanded_sub_playerBarRightControls"), { listener: (el) => onSliderElExists("expand", el) });
		};
		window.addEventListener("resize", (0, _sv443_network_coreutils.debounce)(onResize, Math.floor(1e3 / 6)), { passive: true });
		waitVideoElementReady().then(onResize);
		onResize();
	}
	var { get: nativeGetVolume, set: nativeSetVolume } = Object.getOwnPropertyDescriptor((0, _sv443_network_userutils.getUnsafeWindow)().HTMLMediaElement.prototype, "volume") ?? {};
	/** Initializes the exponential volume scaling feature */
	function initExponentialVolume() {
		if (getDomain() !== "ytm" || getFeature("volumeSliderExponential") === "linear") return;
		Object.defineProperty((0, _sv443_network_userutils.getUnsafeWindow)().HTMLMediaElement.prototype, "volume", {
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
	/** Mapping for volume scaling - Maps [0, 1] to [0, 1] */
	function expVolFn(x) {
		switch (getFeature("volumeSliderExponential")) {
			case "x^2": return expVolClamp(Math.pow(expVolClamp(x), 2));
			case "x^3": return expVolClamp(Math.pow(expVolClamp(x), 3));
			case "x^4": return expVolClamp(Math.pow(expVolClamp(x), 4));
			case "x^5": return expVolClamp(Math.pow(expVolClamp(x), 5));
			default: return expVolClamp(x);
		}
	}
	/** Inverse mapping for volume scaling - Maps [0, 1] to [0, 1] */
	function expVolFnInv(y) {
		switch (getFeature("volumeSliderExponential")) {
			case "x^2": return expVolClamp(Math.pow(expVolClamp(y), 1 / 2));
			case "x^3": return expVolClamp(Math.pow(expVolClamp(y), 1 / 3));
			case "x^4": return expVolClamp(Math.pow(expVolClamp(y), 1 / 4));
			case "x^5": return expVolClamp(Math.pow(expVolClamp(y), 1 / 5));
			default: return expVolClamp(y);
		}
	}
	/** Initializes the volume slider scroll step feature */
	function initScrollStep(volSliderCont, sliderElem) {
		for (const evtName of [
			"wheel",
			"scroll",
			"mousewheel",
			"DOMMouseScroll"
		]) volSliderCont.addEventListener(evtName, (e) => {
			e.preventDefault();
			e.stopImmediatePropagation();
			const delta = Number(e.deltaY ?? e?.detail ?? 1);
			if (isNaN(delta)) return loggers.volume.warn("Invalid scroll delta:", delta);
			const volumeDir = -Math.sign(delta);
			const newVolume = String(Number(sliderElem.value) + getFeature("volumeSliderScrollStep") * volumeDir);
			sliderElem.value = newVolume;
			sliderElem.setAttribute("aria-valuenow", newVolume);
			sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
		}, { capture: true });
	}
	/** Adds a percentage label to the volume slider and tooltip */
	async function addVolumeSliderLabel(type, sliderElem, sliderContainer) {
		const labelContElem = document.createElement("div");
		labelContElem.classList.add("bytm-vol-slider-label");
		labelContElem.style.display = "none";
		labelContElem.setAttribute("aria-hidden", "true");
		if (getFeature("volumeSharedBetweenTabs")) {
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
			if (isNaN(val)) return String(val);
			val = (0, _sv443_network_coreutils.clamp)(val, 0, 100);
			const valAdjusted = (expVolFn(val / 100) * 100).toFixed(1);
			return ["0.0", "100.0"].includes(valAdjusted) ? valAdjusted.slice(0, -2) : valAdjusted;
		};
		const getLabel = (value) => {
			const step = Number(getFeature(sliderElem.hasAttribute("pressed") ? "volumeSliderStep" : "volumeSliderScrollStep", Number(sliderElem.step)));
			let label = `${Math.round(Number(value) / step) * step}%`;
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
		labelContElem.addEventListener("click", (e) => e.stopPropagation());
		labelContElem.addEventListener("keydown", (e) => [
			"Enter",
			"Space",
			" "
		].includes(e.key) && e.stopPropagation());
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
			if (!isNaN(Number(sliderElem.dataset.scrollVal)) && Number(sliderElem.dataset.scrollVal) % getFeature("volumeSliderStep") !== 0) sliderElem.dataset.scrollVal = "";
			const labelElem2 = document.querySelectorAll(".bytm-vol-slider-label div.label");
			for (const el of labelElem2) el.textContent = getLabel(sliderElem.value);
		};
		sliderElem.addEventListener("change", () => updateLabel());
		siteEvents.on("updateVolumeSliderLabel", () => updateLabel());
		siteEvents.on("configChanged", () => updateLabel());
		addSelectorListener("playerBarRightControls", getSelector("volume", type === "normal" ? "volSliderContainer_sub_playerBarRightControls" : "volSliderExpandedContainer_sub_playerBarRightControls"), { listener: (volumeCont) => volumeCont.appendChild(labelContElem) });
		let lastSliderVal = Number(sliderElem.value);
		/** Hide or show the ThemeSong media controls element when the volume slider is expanded */
		const setThemeSongContHidden = (hidden = true) => {
			document.querySelector(getSelector("integration", "themeSongPlayerBarControls"))?.classList[hidden ? "add" : "remove"]("bytm-hidden");
		};
		new MutationObserver(() => {
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
				}, { once: true });
				labelContElem.classList.remove("bytm-visible");
			}
			if (Number(sliderElem.value) !== lastSliderVal) {
				lastSliderVal = Number(sliderElem.value);
				updateLabel();
			}
		}).observe(sliderElem, { attributes: true });
	}
	/** Sets the volume slider to a set size */
	function setVolSliderSize() {
		const size = getFeature("volumeSliderSize");
		if (typeof size !== "number" || isNaN(Number(size))) return loggers.volume.error("Invalid volume slider size:", size);
		setGlobalCssVar("vol-slider-size", `${size}px`);
		addStyleFromResource("css-vol_slider_size");
	}
	/** Saves the shared volume level to persistent storage */
	async function sharedVolumeChanged(vol) {
		try {
			await GM.setValue("bytm-shared-volume", String(lastCheckedSharedVolume = ignoreVal = vol));
		} catch (err) {
			loggers.volume.error("Couldn't save shared volume level due to an error:", err);
		}
	}
	var ignoreVal = -1;
	var lastCheckedSharedVolume = -1;
	/** Only call once as this calls itself after a timeout! - Checks if the shared volume has changed and updates the volume slider accordingly */
	async function checkSharedVolume() {
		try {
			const vol = await GM.getValue("bytm-shared-volume");
			if (vol && lastCheckedSharedVolume !== Number(vol)) {
				if (ignoreVal === Number(vol)) return;
				lastCheckedSharedVolume = Number(vol);
				const sliderElem = document.querySelector(getSelector("volume", "volSlider_sub_playerBarRightControls"));
				if (sliderElem) {
					sliderElem.value = String(vol);
					sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
				}
			}
			setTimeout(checkSharedVolume, 333);
		} catch (err) {
			loggers.volume.error("Couldn't check for shared volume level due to an error:", err);
		}
	}
	/** Sets the volume slider to a set volume level when the session starts */
	async function setInitialTabVolume(sliderElem) {
		const reloadTabVol = Number((await getReloadTabData())?.volume);
		if ((isNaN(reloadTabVol) || reloadTabVol === 0) && !getFeature("setInitialTabVolume")) return;
		const vidElem = await waitVideoElementReady();
		const initialVol = Math.round(!isNaN(reloadTabVol) && reloadTabVol > 0 ? reloadTabVol : getFeature("initialTabVolumeLevel"));
		if (isNaN(initialVol) || initialVol < 0 || initialVol > 100) return;
		if (getFeature("volumeSharedBetweenTabs")) {
			lastCheckedSharedVolume = ignoreVal = initialVol;
			if (getFeature("volumeSharedBetweenTabs")) GM.setValue("bytm-shared-volume", String(initialVol)).catch((err) => loggers.volume.error("Couldn't save shared volume level due to an error:", err));
		}
		sliderElem.value = String(initialVol);
		vidElem.volume = initialVol / 100;
		sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
		const nonLinVol = getFeature("volumeSliderExponential") !== "linear";
		loggers.volume.log(`Set initial tab volume to ${initialVol}%${nonLinVol ? ` (${(expVolFn(initialVol / 100) * 100).toFixed(1)}%)` : ""}${reloadTabVol > 0 ? " from GM storage (reload)" : " from configuration (initial load)"}`);
	}
	//#endregion
	//#region src/dialogs/pluginList.ts
	var pluginListDialog = null;
	/** Creates and/or returns the plugin list dialog */
	async function getPluginListDialog() {
		return pluginListDialog ??= new BytmDialog({
			id: "plugin-list",
			width: 900,
			height: 600,
			closeBtnEnabled: true,
			closeOnBgClick: true,
			closeOnEscPress: true,
			destroyOnClose: true,
			small: true,
			renderHeader: renderHeader$2,
			renderBody: renderBody$2
		});
	}
	async function renderHeader$2() {
		const titleElem = document.createElement("h2");
		titleElem.id = "bytm-plugin-list-title";
		titleElem.classList.add("bytm-dialog-title");
		titleElem.role = "heading";
		titleElem.ariaLevel = "1";
		titleElem.tabIndex = 0;
		titleElem.textContent = t("plugin_list.title");
		return titleElem;
	}
	async function renderBody$2() {
		const listContainerEl = document.createElement("div");
		listContainerEl.id = "bytm-plugin-list-container";
		const registeredPlugins = getRegisteredPlugins();
		if (registeredPlugins.length === 0) {
			const noPluginsEl = document.createElement("div");
			noPluginsEl.classList.add("bytm-plugin-list-no-plugins");
			noPluginsEl.tabIndex = 0;
			setInnerHtml(noPluginsEl, t("plugin_list.no_plugins", `<a class="bytm-link" href="${package_default.homepage}#plugins" target="_blank" rel="noopener noreferrer">`, "</a>"));
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
			const devPluginIdentifier = `${package_default.namespace}+${devPluginId}/${t("dev_plugin.name")}`;
			const isDevPlugin = Boolean(pluginIdentifier === devPluginIdentifier && getPluginInfo(devPluginToken, devPluginIdentifier));
			const intentsBitSet = Array.isArray(intentsRaw) ? intentsRaw.reduce((acc, intent) => acc | intent, 0) : typeof intentsRaw === "number" ? intentsRaw : 0;
			const intentsAmount = Object.keys(PluginIntent).length / 2;
			const intentsArr = (0, _sv443_network_coreutils.bitSetHas)(intentsBitSet, PluginIntent.FullAccess) ? [PluginIntent.FullAccess] : typeof intentsBitSet === "number" && intentsBitSet > 0 ? (() => {
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
					permissionsHeaderEl.textContent = permissionsHeaderEl.title = t("plugin_list.permissions_header");
					rightEl.appendChild(permissionsHeaderEl);
					for (const intent of intentsArr) {
						const intentEl = document.createElement("div");
						intentEl.classList.add("bytm-plugin-list-row-intent-item");
						intentEl.tabIndex = 0;
						intentEl.textContent = t(`plugin_intent_name.${PluginIntent[intent]}`);
						intentEl.title = t(`plugin_intent_description.${PluginIntent[intent]}`);
						rightEl.appendChild(intentEl);
					}
				}
			} else {
				const devPluginNoteEl = document.createElement("div");
				devPluginNoteEl.classList.add("bytm-plugin-list-row-right", "is-dev-plugin");
				devPluginNoteEl.tabIndex = 0;
				devPluginNoteEl.title = t("plugin_list.dev_plugin_note");
				const infoIcon = "<span class=\"bytm-dev-plugin-note-info-icon\">🛈</span>";
				setInnerHtml(devPluginNoteEl, `${activeLocaleDir === "ltr" ? `${infoIcon} ` : ""}${t("plugin_list.dev_plugin_note")}${activeLocaleDir === "rtl" ? ` ${infoIcon}` : ""}`);
				rowEl.appendChild(devPluginNoteEl);
			}
			listContainerEl.appendChild(rowEl);
		}
		return listContainerEl;
	}
	//#endregion
	//#region src/dialogs/welcome.ts
	var welcomeDialog = null;
	/** Creates and/or returns the welcome dialog */
	async function getWelcomeDialog() {
		if (!welcomeDialog) {
			welcomeDialog = new BytmDialog({
				id: "welcome",
				width: 800,
				height: 600,
				closeBtnEnabled: true,
				closeOnBgClick: false,
				closeOnEscPress: true,
				destroyOnClose: true,
				renderHeader: renderHeader$1,
				renderBody: renderBody$1,
				renderFooter: renderFooter$1
			});
			welcomeDialog.on("render", retranslateWelcomeMenu);
			welcomeDialog.on("destroy", () => welcomeDialog = null);
		}
		return welcomeDialog;
	}
	async function renderHeader$1() {
		const titleWrapperElem = document.createElement("div");
		titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";
		const titleLogoElem = document.createElement("img");
		titleLogoElem.id = "bytm-welcome-menu-title-logo";
		titleLogoElem.classList.add("bytm-no-select");
		titleLogoElem.src = await getResourceUrl("img-logo_dev");
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
	async function renderBody$1() {
		const contentWrapper = document.createElement("div");
		contentWrapper.id = "bytm-welcome-menu-content-wrapper";
		const horSegmentCont = document.createElement("div");
		horSegmentCont.id = "bytm-welcome-menu-horizontal-segment-container";
		const getHorSegmentElements = async (imgKey) => {
			const segCont = document.createElement("div");
			segCont.classList.add("bytm-welcome-menu-segment-cont");
			const segImg = document.createElement("img");
			segImg.classList.add("bytm-welcome-menu-horizontal-segment-img", "bytm-no-select");
			segImg.src = await getResourceUrl(imgKey);
			return [segCont, segImg];
		};
		{
			const [localeCont, localeImg] = await getHorSegmentElements("icon-globe");
			localeImg.id = "bytm-welcome-menu-locale-img";
			const localeSelectElem = document.createElement("select");
			localeSelectElem.id = "bytm-welcome-menu-locale-select";
			localeSelectElem.classList.add("bytm-welcome-menu-select");
			for (const [locale, { name, emoji }] of Object.entries(locales_default)) {
				const optionElem = document.createElement("option");
				optionElem.value = locale;
				optionElem.textContent = `${emoji} ${name}`;
				localeSelectElem.appendChild(optionElem);
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
			localeImg.title = localeSelectElem.title = t("welcome_menu_language_tooltip");
			localeCont.appendChild(localeImg);
			localeCont.appendChild(localeSelectElem);
			horSegmentCont.appendChild(localeCont);
		}
		{
			const [privacyCont, privacyImg] = await getHorSegmentElements("icon-shield_question");
			privacyImg.id = "bytm-welcome-menu-privacy-img";
			const privacySelectElem = document.createElement("select");
			privacySelectElem.id = "bytm-welcome-menu-privacy-select";
			privacySelectElem.classList.add("bytm-welcome-menu-select");
			privacyImg.title = privacySelectElem.title = t("welcome_menu_privacy_tooltip");
			const options = [{
				value: "default",
				label: t("privacy_mode.default")
			}, {
				value: "enhanced",
				label: t("privacy_mode.enhanced")
			}];
			for (const { value, label } of options) {
				const optionElem = document.createElement("option");
				optionElem.id = `bytm-welcome-menu-privacy-option-${value}`;
				optionElem.value = value;
				optionElem.textContent = label;
				privacySelectElem.appendChild(optionElem);
			}
			let privacySelectDefaultVal = "default";
			for (const [, ftInfo] of Object.entries(featInfo)) if ("tags" in ftInfo && ftInfo.tags.includes("privacy") && typeof ftInfo.default === "boolean") privacySelectDefaultVal = Object.values(getFeaturesWithTags(["privacy"])).filter((v) => typeof v === "boolean").every((v) => !v) ? "enhanced" : "default";
			privacySelectElem.value = privacySelectDefaultVal;
			privacySelectElem.addEventListener("change", async () => {
				const isPrivacy = privacySelectElem.value === "enhanced";
				const modifiedConf = await configSetFeatsWithTags(["privacy"], {
					number: isPrivacy ? 0 : 1,
					toggle: !isPrivacy
				});
				forceEmitSiteEvent("recreateCfgMenu");
				loggers.init.log(`Toggled selection of privacy-sensitive features ${isPrivacy ? "off" : "on"} - modified config:`, modifiedConf, LogLevel.Info);
			});
			privacyCont.appendChild(privacyImg);
			privacyCont.appendChild(privacySelectElem);
			horSegmentCont.appendChild(privacyCont);
		}
		contentWrapper.appendChild(horSegmentCont);
		const hrElem = document.createElement("hr");
		hrElem.classList.add("bytm-hr");
		contentWrapper.appendChild(hrElem);
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
			"#bytm-welcome-text-line3": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_3", scriptInfo$1.name, ...getLink(`${package_default.hosts.greasyfork}/feedback`), ...getLink(package_default.hosts.openuserjs))),
			"#bytm-welcome-text-line4": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_4", ...getLink(package_default.funding.url))),
			"#bytm-welcome-text-line5": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_5", ...getLink(package_default.bugs.url))),
			"#bytm-welcome-menu-privacy-img": (e) => {
				e.title = t("welcome_menu_privacy_tooltip");
			},
			"#bytm-welcome-menu-privacy-select": (e) => {
				e.title = t("welcome_menu_privacy_tooltip");
			},
			"#bytm-welcome-menu-privacy-option-default": (e) => {
				e.textContent = t(`privacy_mode.${e.value}`);
			},
			"#bytm-welcome-menu-privacy-option-enhanced": (e) => {
				e.textContent = t(`privacy_mode.${e.value}`);
			},
			"#bytm-welcome-menu-locale-img": (e) => {
				e.title = t("welcome_menu_language_tooltip");
			},
			"#bytm-welcome-menu-locale-select": (e) => {
				e.title = t("welcome_menu_language_tooltip");
			}
		};
		for (const [selector, fn] of Object.entries(changes)) {
			const el = document.querySelector(selector);
			if (!el) {
				loggers.dialog.warn(`Couldn't find element in welcome menu with selector '${selector}'`);
				continue;
			}
			fn(el);
		}
	}
	async function renderFooter$1() {
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
	//#endregion
	//#region src/features/input.ts
	/** List of element tag names (uppercase) that, if focused, should make BYTM ignore keypresses */
	var ignoreInputTagNames = [
		"INPUT",
		"TEXTAREA",
		"SELECT",
		"BUTTON",
		"A"
	];
	/** List of element IDs that, if focused, should make BYTM ignore keypresses. */
	var ignoreInputIds = [
		"contenteditable-root",
		"volume-slider",
		"bytm-cfg-menu-sidenav"
	];
	/** List of element class names that, if focused, should make BYTM ignore keypresses. */
	var ignoreInputClassNames = ["bytm-ignored-input", "cbTitleTextBox"];
	/** If an element matches {@linkcode ignoreInputTagNames}, {@linkcode ignoreInputIds} or {@linkcode ignoreInputClassNames}, but also matches {@linkcode unIgnoreInputClassNames}, BYTM will not ignore keypresses when that element is focused. */
	var unIgnoreInputClassNames = ["bytm-generic-btn", "bytm-btn"];
	/** Returns true, if the given element (`document.activeElement` by default) is an input element that should make BYTM ignore keypresses */
	function isIgnoredInputElement(el) {
		if (!el) el = document.activeElement;
		if (!el) return false;
		const isIgnored = el !== document.body && (ignoreInputTagNames.includes(el.tagName.toUpperCase()) || ignoreInputIds.includes(el.id) || ignoreInputClassNames.some((cls) => el.classList.contains(cls)));
		const isUnignored = unIgnoreInputClassNames.some((cls) => el.classList.contains(cls));
		return isIgnored && !isUnignored;
	}
	var sliderEl;
	async function initArrowKeySkip() {
		addSelectorListener("playerBarRightControls", "tp-yt-paper-slider#volume-slider", { listener: (el) => sliderEl = el });
		document.addEventListener("keydown", (evt) => {
			if (!getFeature("arrowKeySupport") || isIgnoredInputElement()) return;
			if (["ArrowUp", "ArrowDown"].includes(evt.code) && getDomain() === "ytm") return handleVolumeKeyPress(evt);
			if (!["ArrowLeft", "ArrowRight"].includes(evt.code)) return;
			if (isIgnoredInputElement() && !["bytm-generic-btn", "yt-spec-button-shape-next"].some((cls) => document.activeElement?.classList.contains(cls))) return loggers.input.info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);
			evt.preventDefault();
			evt.stopImmediatePropagation();
			let skipBy = getFeature("arrowKeySkipBy", featInfo.arrowKeySkipBy.default);
			if (evt.code === "ArrowLeft") skipBy *= -1;
			loggers.input.log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
			const vidElem = getVideoElement();
			if (vidElem && vidElem.readyState > 0) vidElem.currentTime = (0, _sv443_network_coreutils.clamp)(vidElem.currentTime + skipBy, 0, vidElem.duration);
		});
		loggers.input.log("Added arrow key press listener");
	}
	function handleVolumeKeyPress(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		if (!getVideoElement()) return loggers.input.warn("Couldn't find video element, so the keypress is ignored");
		if (!sliderEl) return loggers.input.warn("Couldn't find volume slider element, so the keypress is ignored");
		const step = Number(sliderEl.step);
		const newVol = (0, _sv443_network_coreutils.clamp)(Number(sliderEl.value) + (evt.code === "ArrowUp" ? 1 : -1) * (0, _sv443_network_coreutils.clamp)(getFeature("arrowKeyVolumeStep", featInfo.arrowKeyVolumeStep.default), isNaN(step) ? 5 : step, 100), 0, 100);
		if (newVol !== Number(sliderEl.value)) {
			sliderEl.value = String(newVol);
			sliderEl.dispatchEvent(new Event("change", { bubbles: true }));
			loggers.input.log(`Captured key '${evt.code}' - changed volume to ${newVol}%`);
		}
	}
	/** Initializes the feature that lets users skip by a frame with the period and comma keys while the video is paused */
	async function initFrameSkip() {
		document.addEventListener("keydown", async (evt) => {
			if (!getFeature("frameSkip") || isIgnoredInputElement() || !["Comma", "Period"].includes(evt.code)) return;
			const vid = getVideoElement();
			if (!vid || vid.readyState === 0) return loggers.input.warn("Could not find video element or it hasn't loaded yet, so the keypress is ignored");
			if (!getFeature("frameSkipWhilePlaying") && (vid.playbackRate === 0 || !vid.paused)) return;
			evt.preventDefault();
			evt.stopImmediatePropagation();
			const newTime = vid.currentTime + getFeature("frameSkipAmount") * (evt.code === "Comma" ? -1 : 1);
			vid.currentTime = (0, _sv443_network_coreutils.clamp)(newTime, 0, vid.duration);
			loggers.input.log(`Captured key '${evt.code}' and skipped to ${Math.floor(newTime / 60)}m ${(newTime % 60).toFixed(1)}s (${Math.floor(newTime * 1e3 % 1e3)}ms)`);
		});
		loggers.input.log("Added frame skip key press listener");
	}
	var lastKeyPress = [0, ""];
	/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
	async function initNumKeysSkip() {
		document.addEventListener("keydown", async (e) => {
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
				const vidTimeAtStartOrEnd = (0, _sv443_network_coreutils.valsWithin)(videoTime ?? -Infinity, vidElem.duration, 1) || (0, _sv443_network_coreutils.valsWithin)(videoTime ?? Infinity, 0, 1);
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
			if (!vidElem || vidElem.readyState === 0) return loggers.input.warn("Could not find video element, so the keypress is ignored");
			if (!isNaN(newVidTime)) {
				loggers.input.log(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
				vidElem.currentTime = newVidTime;
			}
		}, { capture: true });
		loggers.input.log("Added number key press listener");
	}
	//#endregion
	//#region src/features/hotkeys.ts
	async function initHotkeys() {
		const promises = [];
		if (getDomain() === "ytm") promises.push(initOpenLyricsHotkey());
		promises.push(initSearchLyricsPromptHotkey(), initLikeDislikeHotkeys(), initSiteSwitchHotkey(), initProxyHotkeys(), initSkipToRemTimeHotkey(), initSearchBarHotkeys());
		return await Promise.allSettled(promises);
	}
	/** Checks whether the given keyboard event matches the given hotkey object. */
	function hotkeyMatches(evt, hk) {
		if (typeof hk !== "object" || typeof hk.code !== "string") return false;
		return evt.code === hk.code && evt.shiftKey === hk.shift && evt.ctrlKey === hk.ctrl && evt.altKey === hk.alt;
	}
	/** Prevents bubbling and the default action of the given event. */
	function preventBubble(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
	}
	/** Switch sites only if current video time is greater than this value. */
	var videoTimeThreshold = 3;
	/** Global flag that gets turned off by active hotkey input elements. */
	var siteSwitchEnabled = true;
	/** Initializes the site switch feature. */
	async function initSiteSwitchHotkey() {
		const domain = getDomain();
		document.addEventListener("keydown", (e) => {
			if (!getFeature("switchBetweenSites")) return;
			if (isIgnoredInputElement()) return;
			if (siteSwitchEnabled) {
				if (hotkeyMatches(e, getFeature("switchSitesNewTabHotkey"))) {
					preventBubble(e);
					switchSite(domain === "yt" ? "ytm" : "yt", true);
				} else if (hotkeyMatches(e, getFeature("switchSitesHotkey"))) {
					preventBubble(e);
					switchSite(domain === "yt" ? "ytm" : "yt");
				}
			}
		}, { capture: true });
		siteEvents.on("hotkeyInputActive", (hkInputActive) => {
			if (!getFeature("switchBetweenSites")) return;
			siteSwitchEnabled = !hkInputActive;
		});
		loggers.hotkey.log("Initialized site switch listener");
	}
	/** Switches to the other site (between YT and YTM). */
	async function switchSite(newDomain, inNewTab = false) {
		try {
			if (!["/watch", "/playlist"].some((v) => location.pathname.startsWith(v))) return loggers.hotkey.warn("Not on a supported page, so the site switch is ignored");
			let subdomain;
			if (newDomain === "ytm") subdomain = "music";
			else if (newDomain === "yt") subdomain = "www";
			if (!subdomain) throw new Error(`Unrecognized domain '${newDomain}'`);
			enableDiscardBeforeUnload();
			const { pathname, search, hash } = new URL(location.href);
			const time = await getVideoTime(0);
			loggers.hotkey.log(`Found video time of ${time} seconds`);
			const cleanSearch = search.split("&").filter((param) => !param.match(/^\??(t|time_continue)=/)).join("&");
			const newSearch = typeof time === "number" && time > videoTimeThreshold ? cleanSearch.includes("?") ? `${cleanSearch.startsWith("?") ? cleanSearch : "?" + cleanSearch}&time_continue=${time}` : `?time_continue=${time}` : cleanSearch;
			const newUrl = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;
			loggers.hotkey.info(`Switching to domain '${newDomain}' at ${newUrl}`);
			if (inNewTab) (0, _sv443_network_userutils.openInNewTab)(newUrl, true);
			else location.assign(newUrl);
		} catch (err) {
			loggers.hotkey.error("Error while switching site:", err);
		}
	}
	async function initLikeDislikeHotkeys() {
		document.addEventListener("keydown", (e) => {
			if (!getFeature("likeDislikeHotkeys")) return;
			if (isIgnoredInputElement()) return;
			const { likeBtn, dislikeBtn, likeState } = getLikeDislikeBtns();
			if (hotkeyMatches(e, getFeature("likeHotkey"))) {
				preventBubble(e);
				if (!getFeature("likeDislikeHotkeysToggle") && likeState === "LIKE") return;
				loggers.hotkey.log("Like hotkey pressed, liking the video...");
				likeBtn?.click();
			} else if (hotkeyMatches(e, getFeature("dislikeHotkey"))) {
				preventBubble(e);
				if (!getFeature("likeDislikeHotkeysToggle") && likeState === "DISLIKE") return;
				loggers.hotkey.log("Dislike hotkey pressed, disliking the video...");
				dislikeBtn?.click();
			}
		}, { capture: true });
	}
	async function initOpenLyricsHotkey() {
		document.addEventListener("keydown", (e) => {
			if (!getFeature("currentLyricsHotkeyEnabled")) return;
			if (isIgnoredInputElement()) return;
			if (hotkeyMatches(e, getFeature("currentLyricsHotkey")) && location.pathname.startsWith("/watch")) {
				preventBubble(e);
				const lyricsBtn = document.getElementById("bytm-player-bar-lyrics-btn");
				loggers.hotkey.log("Open song lyrics hotkey pressed, opening page...");
				lyricsBtn?.click();
			}
		}, { capture: true });
	}
	async function initSearchLyricsPromptHotkey() {
		document.addEventListener("keydown", async (e) => {
			if (!getFeature("lyricsSearchPromptHotkeyEnabled")) return;
			if (isIgnoredInputElement()) return;
			if (hotkeyMatches(e, getFeature("lyricsSearchPromptHotkey"))) {
				preventBubble(e);
				loggers.hotkey.log("Lyrics search prompt hotkey pressed, opening dialog...");
				await promptLyricsSearch();
			}
		}, { capture: true });
	}
	async function initSkipToRemTimeHotkey() {
		document.addEventListener("keydown", async (e) => {
			if (!getFeature("skipToRemTimeHotkeyEnabled")) return;
			if (isIgnoredInputElement()) return;
			if (hotkeyMatches(e, getFeature("skipToRemTimeHotkey"))) {
				preventBubble(e);
				loggers.hotkey.log("Skip to remembered time hotkey pressed, restoring video time...");
				await remTimeTryRestoreTime(true);
			}
		}, { capture: true });
	}
	async function initSearchBarHotkeys() {
		const getSearchBarInput = () => document.querySelector(getDomain() === "ytm" ? "ytmusic-search-box input" : "yt-searchbox input");
		const checkFocusHotkey = (e) => {
			if (isIgnoredInputElement() || !getFeature("focusSearchBarHotkeyEnabled")) return;
			preventBubble(e);
			getSearchBarInput()?.focus();
			loggers.hotkey.log("Focused on the search bar");
		};
		const checkClearHotkey = (e) => {
			if (!getFeature("clearSearchBarHotkeyEnabled")) return;
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
		}, { capture: true });
	}
	var lastProxyHkTime = 0;
	/** All proxy hotkey groups, identified by the feature key that toggles them off or on */
	var proxyHotkeys = {
		rebindNextAndPrevious: [{
			hkFeatKey: "nextHotkey",
			preventKey: "KeyJ",
			domains: ["ytm"],
			onPress: () => dispatchProxyKey({
				code: "KeyJ",
				key: "j",
				keyCode: 74,
				which: 74
			})
		}, {
			hkFeatKey: "previousHotkey",
			preventKey: "KeyK",
			domains: ["ytm"],
			onPress: () => dispatchProxyKey({
				code: "KeyK",
				key: "k",
				keyCode: 75,
				which: 75
			})
		}],
		rebindPlayPause: [{
			hkFeatKey: "playPauseHotkey",
			preventKey: "Space",
			domains: ["ytm"],
			onPress: () => dispatchProxyKey({
				code: "Space",
				key: " ",
				keyCode: 32,
				which: 32
			})
		}],
		themeSongVisualizerHotkeyEnabled: [{
			hkFeatKey: "themeSongVisualizerHotkey",
			domains: ["ytm"],
			onPress: (e) => {
				const toggleEl = document.querySelector("#ts-visualizer-toggle");
				if (toggleEl) {
					preventBubble(e);
					toggleEl.click();
				}
			}
		}]
	};
	/** Handles all proxy hotkeys, which trigger other hotkeys instead of their own actions */
	async function initProxyHotkeys() {
		document.addEventListener("keydown", (e) => {
			if (isIgnoredInputElement()) return;
			for (const [featKey, proxyGroup] of Object.entries(proxyHotkeys)) {
				if (getFeature(featKey) !== true) continue;
				for (const { hkFeatKey, onPress, domains, ...rest } of proxyGroup) {
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
		}, { capture: true });
	}
	function dispatchProxyKey(hkProps) {
		document.body.dispatchEvent(new KeyboardEvent("keydown", {
			...hkProps,
			bubbles: true,
			cancelable: true,
			view: (0, _sv443_network_userutils.getUnsafeWindow)()
		}));
		loggers.hotkey.log("Dispatched proxy hotkey:", hkProps);
	}
	//#endregion
	//#region src/features/integrations.ts
	/** Disables Dark Reader if it is present */
	async function disableDarkReader() {
		if (getFeature("disableDarkReaderSites") !== getDomain() && getFeature("disableDarkReaderSites") !== "all") return;
		const metaElem = document.createElement("meta");
		metaElem.name = "darkreader-lock";
		metaElem.id = "bytm-disable-dark-reader";
		document.head.appendChild(metaElem);
		loggers.integration.info("Disabled Dark Reader");
	}
	/** Fixes the z-index of the SponsorBlock panel */
	async function fixSponsorBlock() {
		try {
			return await addStyleFromResource("css-fix_sponsorblock");
		} catch (err) {
			loggers.integration.error("Failed to fix SponsorBlock styling:", err);
		}
	}
	/** Adjust the BetterYTM styles if ThemeSong is ***not*** used */
	async function fixPlayerPageTheming() {
		try {
			return await addStyleFromResource("css-fix_playerpage_theming");
		} catch (err) {
			loggers.integration.error("Failed to fix BetterYTM player page theming:", err);
		}
	}
	/** Sets the lightness of the theme color used by BYTM according to the configured lightness value */
	async function fixThemeSong() {
		try {
			const varNames = {
				darker: "--ts-palette-darkmuted-hex",
				normal: "--ts-palette-muted-hex",
				lighter: "--ts-palette-lightmuted-hex"
			};
			document.documentElement.style.setProperty("--bytm-themesong-bg-accent-col", `var(${varNames[getFeature("themeSongLightness")] ?? varNames.darker})`);
		} catch (err) {
			loggers.integration.error("Failed to set ThemeSong integration color lightness:", err);
		}
	}
	/** Sets the opacity of the ThemeSong visualizer according to the configured opacity value */
	async function setThemeSongVisualizerOpacity() {
		if (!await addStyleFromResource("css-themesong_visualizer_opacity", (css) => css.replace("_INSERT_OPACITY_VALUE_", (getFeature("themeSongVisualizerOpacity") / 100).toFixed(2)))) loggers.integration.error("Couldn't add ThemeSong visualizer opacity style");
		else loggers.integration.log(`Set ThemeSong visualizer opacity to ${getFeature("themeSongVisualizerOpacity")}%`);
	}
	//#endregion
	//#region src/features/songLists.ts
	/** Whether any song list item's checkbox is currently checked */
	var isCheckboxChecked = false;
	/** Initializes the queue buttons */
	async function initQueueButtons() {
		new MutationObserver(() => {
			const multiSelectEl = document.querySelector(getSelector("songLists", "queueMultiSelect"));
			const newIsCheckboxChecked = Boolean(multiSelectEl) && !multiSelectEl?.hasAttribute("aria-hidden");
			if (newIsCheckboxChecked === isCheckboxChecked) return;
			isCheckboxChecked = newIsCheckboxChecked;
			document.querySelectorAll(getSelector("songLists", "all")).forEach((list) => {
				list.dataset.anyCheckboxChecked = String(isCheckboxChecked);
			});
		}).observe(document.body, {
			childList: true,
			subtree: true,
			attributeFilter: ["dialog-type", "aria-hidden"]
		});
		/** Tries to add queue buttons to the current song queue items on the /watch page. */
		const tryAddCurrentQueueBtns = (parentSelector) => {
			if (getFeature("listButtonsPlacement") !== "currentQueue" && getFeature("listButtonsPlacement") !== "everywhere") return;
			const parent = document.querySelector(parentSelector);
			if (!parent) return loggers.layout.warn("Couldn't find current queue parent element to add queue buttons to");
			const queueItems = parent.querySelectorAll(getSelector("songLists", "queueItem"));
			let amt = 0;
			for (const queueItm of queueItems) if (!queueItm.classList.contains("bytm-has-queue-btns")) {
				addQueueButtons(queueItm, void 0, "currentQueue");
				amt++;
			}
			if (amt > 0) loggers.layout.log(`Added buttons to ${amt} new queue ${(0, _sv443_network_coreutils.autoPlural)("item", amt)}`);
		};
		siteEvents.on("queueChanged", () => tryAddCurrentQueueBtns(getSelector("songLists", "currentQueueContainer")));
		siteEvents.on("autoplayQueueChanged", () => tryAddCurrentQueueBtns(getSelector("songLists", "autoplayQueueContainer")));
		const queueItems = document.querySelectorAll(getSelector("songLists", "allCurrentQueueItems_global"));
		if (queueItems.length > 0) {
			queueItems.forEach((itm) => addQueueButtons(itm, void 0, "currentQueue"));
			loggers.layout.log(`Added buttons to ${queueItems.length} existing "current song queue" ${(0, _sv443_network_coreutils.autoPlural)("item", queueItems)}`);
		}
		/** Tries to add queue buttons to the items in generic song lists, like playlists, albums, artist pages, etc. */
		const tryAddGenericListQueueBtns = (listElem) => {
			const queueItems = listElem.querySelectorAll(getSelector("songLists", "allGenericListItems_sub_listContainer"));
			if (queueItems.length === 0) return;
			let addedBtnsCount = 0;
			queueItems.forEach((itm) => {
				if (itm.classList.contains("bytm-has-btns")) return;
				itm.classList.add("bytm-has-btns");
				addQueueButtons(itm, ".flex-columns", "genericList", ["bytm-generic-list-queue-btn-container"], "afterParent");
				addedBtnsCount++;
			});
			addedBtnsCount > 0 && loggers.layout.log(`Added buttons to ${addedBtnsCount} new "generic song list" ${(0, _sv443_network_coreutils.autoPlural)("item", addedBtnsCount)} in list`, listElem);
		};
		const doSongListsChecks = (songLists) => {
			for (const list of songLists) {
				if (getFeature("listButtonsPlacement") === "everywhere" || getFeature("listButtonsPlacement") === "genericLists") tryAddGenericListQueueBtns(list);
				if (getFeature("swapLikeDislikeButtons")) checkSwapLikeDislikeBtns(list);
			}
		};
		addSelectorListener("body", getSelector("songLists", "all"), {
			all: true,
			debounce: Math.floor(1e3 / 6),
			listener: doSongListsChecks
		});
		siteEvents.on("pathChanged", () => {
			const songLists = document.querySelectorAll(getSelector("songLists", "all"));
			if (songLists.length > 0) doSongListsChecks(songLists);
		});
	}
	/** Checks if the like and dislike buttons exist in the given song list and swaps them if the feature is enabled. */
	function checkSwapLikeDislikeBtns(songList) {
		if (!getFeature("swapLikeDislikeButtons")) return;
		songList.querySelectorAll(getSelector("watchPage", "dislikeBtn")).forEach((dislikeBtn) => {
			const parent = dislikeBtn.parentElement;
			if (!parent || parent.classList.contains("bytm-swapped-like-dislike")) return;
			const likeBtn = parent.querySelector(getSelector("watchPage", "likeBtn"));
			if (likeBtn) {
				parent.classList.add("bytm-swapped-like-dislike");
				transplantElement(dislikeBtn, likeBtn);
			}
		});
	}
	/**
	* Adds the buttons to each item in the current song queue.  
	* Also observes for changes to add new buttons to new items in the queue.
	* @param queueItem The element with tagname `ytmusic-player-queue-item` or `ytmusic-responsive-list-item-renderer` to add queue buttons to
	* @param listType The type of list the queue item is in
	* @param classes Extra CSS classes to apply to the container
	* @param insertPosition Where to insert the button container in relation to the parent element
	*/
	async function addQueueButtons(queueItem, containerParentSelector = void 0, listType = "currentQueue", classes = [], insertPosition = "child") {
		containerParentSelector ??= getSelector("songLists", "allCurrentQueueItemsSongInfo_global");
		const queueBtnsCont = document.createElement("div");
		queueBtnsCont.classList.add(...["bytm-queue-btn-container", ...classes]);
		const [lyricsIconUrl, deleteIconUrl, spinnerIconUrl] = await Promise.all([
			"icon-lyrics",
			"icon-delete",
			"icon-spinner"
		].map((icon) => getResourceUrl(icon)));
		await (0, _sv443_network_userutils.preloadImages)([
			lyricsIconUrl,
			deleteIconUrl,
			spinnerIconUrl
		]);
		let lyricsBtnElem;
		if (getFeature("lyricsQueueButton")) {
			lyricsBtnElem = await createLyricsBtn(void 0, false);
			lyricsBtnElem.classList.add("bytm-song-list-item-btn");
			lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
			lyricsBtnElem.style.display = "inline-flex";
			lyricsBtnElem.style.visibility = "initial";
			lyricsBtnElem.style.pointerEvents = "initial";
			lyricsBtnElem.role = "link";
			lyricsBtnElem.tabIndex = 0;
			onInteraction(lyricsBtnElem, async (e) => {
				const thumbSrc = queueItem.querySelector(getSelector("songLists", "queueItemThumbnailImg"))?.src;
				const isVideo = thumbSrc ? thumbSrc.includes("ytimg.com/vi/") : true;
				let song, artist;
				if (listType === "currentQueue") {
					const songInfo = queueItem.querySelector(getSelector("songLists", "allCurrentQueueItemsSongInfo_global"));
					if (!songInfo) return loggers.layout.error("Couldn't find song info element in queue item", queueItem);
					const [songEl, artistEl] = songInfo.querySelectorAll(getSelector("songLists", "currentQueueSongAndArtistNames"));
					song = songEl?.textContent;
					artist = artistEl?.textContent;
				} else if (listType === "genericList") {
					const songEl = queueItem.querySelector(getSelector("songLists", "genericListSongName"));
					let artistEl = null;
					if (location.pathname.startsWith("/playlist")) artistEl = document.querySelector(getSelector("songLists", "playlistPageArtistName"));
					if (!artistEl || !artistEl.textContent) artistEl = queueItem.querySelector(getSelector("songLists", "genericListArtistName"));
					song = songEl?.textContent;
					artist = artistEl?.textContent;
					if (!artist) {
						artistEl = document.querySelector(getSelector("songLists", "playlistPageArtistNameAlternate"));
						artist = artistEl?.textContent;
					}
				} else return loggers.layout.error("Invalid list type:", listType);
				if (song && isVideo && song.includes("-")) {
					artist = song.split("-")[0]?.trim();
					song = song.split("-").slice(1).join("-").trim();
				}
				if (!song || !artist) return loggers.layout.error("Couldn't get song or artist name from queue item - song:", song, "- artist:", artist);
				let lyricsUrl;
				const artistsSan = sanitizeArtists(artist);
				const songSan = sanitizeSong(song);
				const splitTitle = splitVideoTitle(songSan);
				const cachedLyricsEntry = songSan.includes("-") ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song) : getLyricsCacheEntry(artistsSan, songSan);
				e.preventDefault();
				e.stopImmediatePropagation();
				if (cachedLyricsEntry) lyricsUrl = resolveLyricsUrl(cachedLyricsEntry.path);
				else if (!queueItem.hasAttribute("data-bytm-loading")) {
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
					if (lyricsUrl) emitInterface("bytm:lyricsLoaded", {
						type: "queue",
						artists: artist,
						title: song,
						url: lyricsUrl
					});
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
			}, { capture: true });
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
			onInteraction(deleteBtnElem, async (e) => {
				e.preventDefault();
				e.stopImmediatePropagation();
				delImgElem.src = spinnerIconUrl;
				delImgElem.classList.add("bytm-spinner");
				let queuePopupCont = document.querySelector(getSelector("songLists", "queueItemPopoverContainer"));
				try {
					const dotsBtnElem = queueItem.querySelector(getSelector("songLists", "queueItemDotsBtn"));
					if (dotsBtnElem) {
						if (queuePopupCont) queuePopupCont.setAttribute("data-bytm-hidden", "true");
						dotsBtnElem.click();
					} else {
						loggers.layout.info("Couldn't find three dots button in queue item, trying to open the context menu manually");
						queueItem.dispatchEvent(new MouseEvent("contextmenu", {
							bubbles: true,
							cancelable: false
						}));
					}
					queuePopupCont = document.querySelector(getSelector("songLists", "queueItemPopoverContainer"));
					queuePopupCont?.setAttribute("data-bytm-hidden", "true");
					await (0, _sv443_network_coreutils.pauseFor)(15);
					delImgElem.src = deleteIconUrl;
					delImgElem.classList.remove("bytm-spinner");
					const removeFromQueueOrPlaylistBtn = queuePopupCont?.querySelector(getSelector("songLists", "queueItemPopoverRemoveFromListBtn"));
					const removeFromQueueBtnOptional = queuePopupCont?.querySelector(getSelector("songLists", "queueItemPopoverRemoveFromListBtnOptional"));
					let removeFromQueueBtn;
					if (removeFromQueueBtnOptional && removeFromQueueBtnOptional?.previousElementSibling === removeFromQueueOrPlaylistBtn) removeFromQueueBtn = removeFromQueueBtnOptional;
					else if (removeFromQueueOrPlaylistBtn) removeFromQueueBtn = removeFromQueueOrPlaylistBtn;
					removeFromQueueBtn?.click();
					if (removeFromQueueBtn && listType === "genericList") {
						await (0, _sv443_network_coreutils.pauseFor)(200);
						clearInner(queueItem);
						queueItem.remove();
					}
					if (!removeFromQueueBtn) {
						loggers.layout.error("Couldn't find 'remove from queue' button in queue item three dots menu.\nPlease make sure all autoplay restrictions on your browser's side are disabled for this page.");
						dotsBtnElem?.click();
						delImgElem.src = await getResourceUrl("icon-error");
						if (deleteBtnElem) deleteBtnElem.ariaLabel = deleteBtnElem.title = listType === "currentQueue" ? t("couldnt_remove_from_queue") : t("couldnt_delete_from_list");
					}
				} catch (err) {
					loggers.layout.error("Couldn't remove song from queue due to error:", err);
				} finally {
					queuePopupCont?.removeAttribute("data-bytm-hidden");
				}
			});
			deleteBtnElem.appendChild(delImgElem);
		}
		lyricsBtnElem && queueBtnsCont.appendChild(createRipple(lyricsBtnElem));
		deleteBtnElem && queueBtnsCont.appendChild(createRipple(deleteBtnElem));
		const parentEl = queueItem.querySelector(containerParentSelector);
		if (insertPosition === "child") parentEl?.appendChild(queueBtnsCont);
		else if (insertPosition === "beforeParent") parentEl?.before(queueBtnsCont);
		else if (insertPosition === "afterParent") parentEl?.after(queueBtnsCont);
		queueItem.classList.add("bytm-has-queue-btns");
	}
	/** Adds track numbers to each item in every song list */
	async function addTrackNumbers() {
		(async () => {
			const promises = [];
			try {
				const where = getFeature("songListTrackNumbers");
				if (where === "genericLists" || where === "everywhere") promises.push(addStyleFromResource("css-track_numbers_song_lists"));
				if (where === "currentQueue" || where === "everywhere") promises.push(addStyleFromResource("css-track_numbers_current_queue"));
			} catch (err) {
				loggers.layout.error("Couldn't add track numbers style:", err);
			}
			await Promise.allSettled(promises);
		})();
	}
	//#endregion
	//#region src/features/index.ts
	var ExampleError = class extends _sv443_network_coreutils.DatedError {
		constructor(message, options) {
			super(message, options);
			this.name = "ExampleError";
		}
	};
	/** Decoration elements that can be added next to the label */
	var adornments = {
		/** Indicates that the feature is important and should be used with caution. */
		alert: async (title) => await getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\"", title),
		/** Indicates that the feature is experimental and may be unstable. */
		experimental: async () => await getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental", void 0, t("experimental_feature")),
		/** Indicates that the feature only works on YT Music. */
		ytmOnly: async () => await getAdornHtml("bytm-ytm-only-icon", t("feature_only_works_on_ytm"), "icon-ytm", void 0, t("feature_only_works_on_ytm")),
		/** Indicates that the feature relates to language, as a language-independent way to find the translation option. */
		globe: async () => await getAdornHtml("bytm-locale-icon", void 0, "icon-globe_small"),
		/** Indicates that changing this feature requires a page reload to take effect. */
		reload: async () => await getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload", void 0, t("feature_requires_reload")),
		/** Indicates that the feature is only configurable in advanced mode. */
		advanced: async () => await getAdornHtml("bytm-advanced-mode-icon", t("advanced_feature"), "icon-advanced_mode", void 0, t("advanced_feature")),
		/** Don't use directly - gets added automatically for features with a `since` property matching the current version, and a session count below {@linkcode newFeatureAdornmentMaxSessionCount} to indicate the feature was recently added. */
		newFeature: async () => await getAdornHtml("bytm-new-feature-icon", t("feature_is_new"), "icon-new", void 0, t("feature_is_new")),
		/** Indicates a feature is privacy-sensitive as it may expose personally identifiable information about the user. */
		privacy: async () => await getAdornHtml("bytm-privacy-icon", t("feature_is_privacy_sensitive"), "icon-shield_info", void 0, t("feature_is_privacy_sensitive"))
	};
	/** Order of adornment elements in the {@linkcode combineAdornments()} function - lowest value first. */
	var adornOrder = new Map([
		[adornments.alert, 0],
		[adornments.experimental, 1],
		[adornments.ytmOnly, 2],
		[adornments.globe, 3],
		[adornments.reload, 4],
		[adornments.advanced, 5],
		[adornments.privacy, 6],
		[adornments.newFeature, 999]
	]);
	/** Creates an HTML string for the given adornment properties */
	async function getAdornHtml(className, title, resource, extraAttributes, clickDialogText) {
		title = title ? await (0, _sv443_network_coreutils.consumeStringGen)(title) : void 0;
		extraAttributes = extraAttributes ? await (0, _sv443_network_coreutils.consumeStringGen)(extraAttributes) : void 0;
		const id = (0, _sv443_network_coreutils.randomId)(8, 36);
		if (clickDialogText) siteEvents.once("cfgMenuMounted", () => {
			const elem = document.getElementById(`bytm-adornment-${id}`);
			if (!elem) return;
			elem.addEventListener("click", () => showPrompt({
				type: "alert",
				message: String(clickDialogText)
			}));
		});
		return `<span id="bytm-adornment-${id}" class="${className} bytm-adorn-icon" ${title ? `title="${title}" aria-label="${title}"` : ""}${extraAttributes ? ` ${extraAttributes}` : ""}>${await resourceAsString(resource) ?? ""}</span>`;
	}
	/**
	* Resolves the adornments property from a {@linkcode featInfo} entry and returns an array of HTML strings.  
	* Also adds conditional adornments like the "new feature" adornment.
	*/
	async function resolveAdornments(ftInfo, featKey) {
		const feat = ftInfo[featKey];
		let adorns = feat.adornments;
		if (typeof adorns === "function") adorns = adorns();
		const isDev = mode$1 === "development";
		const resolvedAdorns = adorns ? [...adorns] : [];
		if (feat.since && (0, compare_versions.compare)(feat.since, scriptInfo$1.version, isDev ? ">" : ">=") && (getVersionSessionCount() < 20 || isDev)) resolvedAdorns.push(adornments.newFeature);
		const sortedAdorns = resolvedAdorns.sort((a, b) => {
			return (adornOrder.has(a) ? adornOrder.get(a) : 0) - (adornOrder.has(b) ? adornOrder.get(b) : 0);
		});
		return (await Promise.all(sortedAdorns.map((adorn) => typeof adorn === "function" ? adorn() : adorn))).filter(Boolean);
	}
	var removeEmoji = (str) => str.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, "").trim();
	/** Common options for config items of type "select" */
	var options = {
		siteSelection: () => [
			{
				value: "all",
				label: t("site_selection_both_sites")
			},
			{
				value: "yt",
				label: t("site_selection_only_yt")
			},
			{
				value: "ytm",
				label: t("site_selection_only_ytm")
			}
		],
		siteSelectionOrNone: () => [
			{
				value: "all",
				label: t("site_selection_both_sites")
			},
			{
				value: "yt",
				label: t("site_selection_only_yt")
			},
			{
				value: "ytm",
				label: t("site_selection_only_ytm")
			},
			{
				value: "none",
				label: t("site_selection_none")
			}
		],
		locale: () => Object.entries(locales_default).reduce((a, [locale, { name, emoji }]) => [...a, {
			value: locale,
			label: `${emoji} ${name}`
		}], []).sort((a, b) => removeEmoji(a.label).localeCompare(removeEmoji(b.label))),
		colorLightness: () => [
			{
				value: "darker",
				label: t("color_lightness.darker")
			},
			{
				value: "normal",
				label: t("color_lightness.normal")
			},
			{
				value: "lighter",
				label: t("color_lightness.lighter")
			}
		],
		thumbOverlaySources: () => [{
			value: "am",
			label: t("thumbnail_overlay.source_am")
		}, {
			value: "yt",
			label: t("thumbnail_overlay.source_yt")
		}],
		songListType: () => [
			{
				value: "currentQueue",
				label: t("list_button_placement_queue_only")
			},
			{
				value: "genericLists",
				label: t("list_button_placement_generic_lists")
			},
			{
				value: "everywhere",
				label: t("list_button_placement_everywhere")
			}
		],
		alertMode: () => [
			{
				value: "never",
				label: t("alert_mode.never")
			},
			{
				value: "all",
				label: t("alert_mode.all")
			},
			{
				value: "importantOnly",
				label: t("alert_mode.important_only")
			}
		]
	};
	/** List of categories that are related to each other and can be grouped together in the config menu. */
	var groupedCategories = [
		[
			"general",
			"layout",
			"songLists",
			"lyrics",
			"volume"
		],
		[
			"behavior",
			"autoLike",
			"input",
			"hotkeys"
		],
		["integrations", "plugins"]
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
	* | `reloadRequired: boolean`                                          | If true (default), the page needs to be reloaded for the changes to take effect.                                                                    |
	* | `reloadMenuPrompt: boolean`                                        | If true, when the option is modified, shows a prompt to re-render the config menu - default is undefiled (false).                                   |
	* | `advanced: boolean`                                                | If true, the feature will only be shown if the advanced mode feature has been turned on.                                                            |
	* | `hidden: boolean`                                                  | If true, the feature will not be shown in the settings - default is undefined (false).                                                              |
	* | `valueHidden: boolean`                                             | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false).                       |
	* | `tags: LooseUnion<FeatureTag>[]`                                   | Array of extra tags for this feature. Used for bulk-editing features based on common tags, like when switching BYTM's privacy mode.                 |
	* | `normalize(val: unknown): unknown`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations.                    |
	* | `renderValue(val: string): string`                                 | If provided, is used to render the value's label in the config menu.                                                                                |
	* <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
	*/
	var featInfo = {
		locale: {
			type: "select",
			category: "general",
			group: "locale",
			supportedSites: ["ytm", "yt"],
			since: "1.0.0",
			options: options.locale,
			default: getPreferredLocale(),
			adornments: [adornments.globe, adornments.reload]
		},
		localeFallback: {
			type: "toggle",
			category: "general",
			group: "locale",
			supportedSites: ["ytm", "yt"],
			since: "2.0.0",
			default: true,
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		configMenuFocusContentButtonEnabled: {
			type: "toggle",
			category: "general",
			group: "accessibility",
			supportedSites: ["ytm", "yt"],
			since: "3.2.0",
			default: false,
			reloadMenuPrompt: true,
			reloadRequired: false
		},
		initTimeout: {
			type: "number",
			category: "general",
			group: "bytmInternal",
			supportedSites: ["ytm", "yt"],
			since: "2.1.0",
			min: 100,
			max: 1e4,
			default: 3e3,
			step: 100,
			unit: "ms",
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		defaultObserverDebounce: {
			type: "number",
			category: "general",
			group: "bytmInternal",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			min: 10,
			default: 150,
			max: 1e3,
			step: 5,
			unit: "ms",
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		verboseObservers: {
			type: "toggle",
			category: "general",
			group: "bytmInternal",
			supportedSites: ["ytm", "yt"],
			since: "3.2.0",
			default: false,
			advanced: true,
			reloadRequired: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		globalAlertMode: {
			type: "select",
			category: "general",
			group: "bytmInternal",
			supportedSites: ["ytm", "yt"],
			since: "3.2.0",
			options: options.alertMode,
			default: "all",
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		openWelcomeMenu: {
			type: "button",
			category: "general",
			group: "bytmInternal",
			supportedSites: ["ytm", "yt"],
			since: "3.2.0",
			default: void 0,
			click: async () => {
				closeCfgMenu();
				await (await getWelcomeDialog()).open();
			}
		},
		versionCheck: {
			type: "toggle",
			category: "general",
			group: "versionCheck",
			supportedSites: ["ytm", "yt"],
			since: "1.1.0",
			default: true,
			adornments: [adornments.reload]
		},
		checkVersionNow: {
			type: "button",
			category: "general",
			group: "versionCheck",
			supportedSites: ["ytm", "yt"],
			since: "2.0.0",
			default: void 0,
			click: () => doVersionCheck(true)
		},
		numbersFormat: {
			type: "select",
			category: "general",
			group: "numbersFormat",
			supportedSites: ["ytm", "yt"],
			since: "2.1.0",
			options: () => [{
				value: "long",
				label: `${formatNumber(12345678, "long")} (${t("votes_format_long")})`
			}, {
				value: "short",
				label: `${formatNumber(12345678, "short")} (${t("votes_format_short")})`
			}],
			default: "short",
			reloadRequired: false
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
			step: .5,
			renderValue: (val) => Number(val) === 0 ? t("toggled_off") : `${val}s`,
			reloadRequired: false,
			change: (newVal) => newVal === 0 ? closeToast() : showIconToast({
				message: t("example_toast"),
				iconSrc: getResourceUrl(`img-logo_dev`)
			}).then(() => getFeature("toastDuration") === 0 ? closeToast() : void 0)
		},
		showToastOnGenericError: {
			type: "toggle",
			category: "general",
			group: "toasts",
			supportedSites: ["ytm", "yt"],
			since: "2.1.0-preview.1",
			default: true,
			reloadRequired: false,
			change: (newVal) => newVal ? loggers.misc.error("Test error", new ExampleError("Example")) : void 0
		},
		resetConfig: {
			type: "button",
			category: "general",
			group: "resetData",
			supportedSites: ["ytm", "yt"],
			since: "3.0.0",
			default: void 0,
			click: promptResetConfig,
			adornments: [adornments.reload]
		},
		resetEverything: {
			type: "button",
			category: "general",
			group: "resetData",
			supportedSites: ["ytm", "yt"],
			since: "2.2.0",
			default: void 0,
			click: async () => {
				if (await showPrompt({
					type: "confirm",
					message: t("reset_everything_confirm")
				})) {
					await getDSSerializer(true).resetStoresData();
					const gmKeys = await GM.listValues();
					await Promise.allSettled(gmKeys.map((key) => GM.deleteValue(key)));
					await reloadTab();
				}
			},
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		logLevel: {
			type: "select",
			category: "general",
			group: "logging",
			supportedSites: ["ytm", "yt"],
			since: "1.0.0",
			options: () => [{
				value: LogLevel.Debug,
				label: t("log_level_debug")
			}, {
				value: LogLevel.Info,
				label: t("log_level_info")
			}],
			default: LogLevel.Info,
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		logEvents: {
			type: "toggle",
			category: "general",
			group: "logging",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: mode$1 === "development",
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		logHttp: {
			type: "toggle",
			category: "general",
			group: "logging",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: mode$1 === "development",
			advanced: true,
			adornments: [adornments.advanced, adornments.reload]
		},
		advancedMode: {
			type: "toggle",
			category: "general",
			group: "advancedMode",
			supportedSites: ["ytm", "yt"],
			since: "2.0.0",
			default: false,
			reloadMenuPrompt: true,
			reloadRequired: false
		},
		watermarkEnabled: {
			type: "toggle",
			category: "layout",
			group: "watermarkEnabled",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		removeShareTrackingParam: {
			type: "toggle",
			category: "layout",
			group: "removeShareTrackingParam",
			supportedSites: ["ytm", "yt"],
			since: "1.0.0",
			default: true,
			adornments: [adornments.reload]
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
			adornments: [adornments.advanced]
		},
		fixSpacing: {
			type: "toggle",
			category: "layout",
			group: "fixLayout",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			advanced: true,
			adornments: [
				adornments.ytmOnly,
				adornments.advanced,
				adornments.reload
			]
		},
		truncatePlayerBarSubtitles: {
			type: "toggle",
			category: "layout",
			group: "fixLayout",
			supportedSites: ["ytm"],
			since: "3.1.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		thumbnailOverlayEnabled: {
			type: "toggle",
			category: "layout",
			group: "thumbnailOverlay",
			supportedSites: ["ytm"],
			since: "3.2.0",
			tags: ["privacy", "network"],
			default: true,
			adornments: [
				adornments.ytmOnly,
				adornments.reload,
				adornments.privacy
			]
		},
		thumbnailOverlayBehavior: {
			type: "select",
			category: "layout",
			group: "thumbnailOverlay",
			supportedSites: ["ytm"],
			since: "2.0.0",
			options: () => [
				{
					value: "always",
					label: t("thumbnail_overlay.behavior_always")
				},
				{
					value: "never",
					label: t("thumbnail_overlay.behavior_never")
				},
				{
					value: "songsOnly",
					label: t("thumbnail_overlay.behavior_songs_only")
				},
				{
					value: "videosOnly",
					label: t("thumbnail_overlay.behavior_videos_only")
				}
			],
			default: "songsOnly",
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		thumbnailOverlayToggleBtnShown: {
			type: "toggle",
			category: "layout",
			group: "thumbnailOverlay",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		thumbnailOverlayITunesImgRes: {
			type: "slider",
			category: "layout",
			group: "thumbnailOverlay",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: 2e3,
			min: 100,
			max: 3e3,
			step: 100,
			renderValue: (n) => `${n}x${n}`,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		thumbnailOverlayAlbumArtCacheMaxSize: {
			type: "slider",
			category: "layout",
			group: "thumbnailOverlay",
			supportedSites: ["ytm"],
			since: "3.1.0",
			default: 1e4,
			min: 500,
			max: 25e3,
			step: 500,
			unit: (val) => ` ${tp("unit_entries", val)}`,
			renderValue: (val) => formatNumber(Number(val), "long"),
			reloadRequired: false,
			advanced: true,
			adornments: [adornments.advanced, adornments.ytmOnly]
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
			adornments: [adornments.advanced, adornments.ytmOnly]
		},
		thumbnailOverlayShowIndicator: {
			type: "toggle",
			category: "layout",
			group: "thumbnailOverlay",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
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
			adornments: [
				adornments.ytmOnly,
				adornments.advanced,
				adornments.reload
			]
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
			adornments: [adornments.ytmOnly]
		},
		fixHdrIssues: {
			type: "toggle",
			category: "layout",
			group: "fixHdrIssues",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: true,
			advanced: true,
			adornments: [
				adornments.ytmOnly,
				adornments.advanced,
				adornments.reload
			]
		},
		showVotes: {
			type: "toggle",
			category: "layout",
			group: "votes",
			supportedSites: ["ytm"],
			since: "2.1.0",
			tags: ["privacy", "network"],
			default: true,
			adornments: [
				adornments.ytmOnly,
				adornments.reload,
				adornments.privacy
			]
		},
		swapLikeDislikeButtons: {
			type: "toggle",
			category: "layout",
			group: "votes",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: false,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		watchPageFullSize: {
			type: "toggle",
			category: "layout",
			group: "watchPageFullSize",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		lyricsQueueButton: {
			type: "toggle",
			category: "songLists",
			group: "queueButtons",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		deleteFromQueueButton: {
			type: "toggle",
			category: "songLists",
			group: "queueButtons",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
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
			adornments: [adornments.ytmOnly]
		},
		scrollToActiveSongBtn: {
			type: "toggle",
			category: "songLists",
			group: "aboveQueueButtons",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		clearQueueBtn: {
			type: "toggle",
			category: "songLists",
			group: "aboveQueueButtons",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		aboveQueueBtnsSticky: {
			type: "toggle",
			category: "songLists",
			group: "aboveQueueButtons",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: true,
			advanced: true,
			adornments: [
				adornments.ytmOnly,
				adornments.advanced,
				adornments.reload
			]
		},
		songListTrackNumbersEnabled: {
			type: "toggle",
			category: "songLists",
			group: "songListTrackNumbers",
			supportedSites: ["ytm"],
			since: "3.1.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		songListTrackNumbers: {
			type: "select",
			category: "songLists",
			group: "songListTrackNumbers",
			supportedSites: ["ytm"],
			since: "3.1.0",
			options: options.songListType,
			default: "genericLists",
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		geniusLyrics: {
			type: "toggle",
			category: "lyrics",
			group: "geniusLyrics",
			supportedSites: ["ytm"],
			since: "0.2.0",
			tags: ["privacy", "network"],
			default: true,
			adornments: [
				adornments.ytmOnly,
				adornments.reload,
				adornments.privacy
			]
		},
		errorOnLyricsNotFound: {
			type: "toggle",
			category: "lyrics",
			group: "geniusLyrics",
			supportedSites: ["ytm"],
			since: "2.1.0-preview.1",
			default: false,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
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
			adornments: [adornments.ytmOnly, adornments.advanced]
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
			adornments: [adornments.ytmOnly, adornments.advanced]
		},
		lyricsCacheMaxSize: {
			type: "slider",
			category: "lyrics",
			group: "lyricsCache",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: 1e4,
			min: 1e3,
			max: 25e3,
			step: 500,
			unit: (val) => ` ${tp("unit_entries", val)}`,
			renderValue: (val) => formatNumber(Number(val), "long"),
			advanced: true,
			reloadRequired: false,
			adornments: [adornments.ytmOnly, adornments.advanced]
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
			adornments: [adornments.ytmOnly, adornments.advanced]
		},
		clearLyricsCache: {
			type: "button",
			category: "lyrics",
			group: "lyricsCache",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: void 0,
			async click() {
				const entries = getLyricsCache().length;
				if (await showPrompt({
					type: "confirm",
					message: tp("lyrics_clear_cache_confirm_prompt", entries, entries.toLocaleString(getLocale(), {
						style: "decimal",
						maximumFractionDigits: 0
					}))
				})) {
					await clearLyricsCache();
					await showPrompt({
						type: "alert",
						message: t("lyrics_clear_cache_success")
					});
				}
			},
			advanced: true,
			adornments: [adornments.ytmOnly, adornments.advanced]
		},
		volumeSliderExponential: {
			type: "select",
			category: "volume",
			group: "volumeSlider",
			supportedSites: ["ytm"],
			since: "3.1.0",
			options: () => [
				{
					value: "linear",
					label: t("volume_mapping.linear")
				},
				{
					value: "x^2",
					label: t("volume_mapping.x2")
				},
				{
					value: "x^3",
					label: t("volume_mapping.x3")
				},
				{
					value: "x^4",
					label: t("volume_mapping.x4")
				},
				{
					value: "x^5",
					label: t("volume_mapping.x5")
				}
			],
			default: "linear",
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		volumeSliderExponentialLabelType: {
			type: "select",
			category: "volume",
			group: "volumeSlider",
			supportedSites: ["ytm"],
			since: "3.1.0",
			options: () => [
				{
					value: "positionBased",
					label: t("volume_label_mapped_type.positionBased")
				},
				{
					value: "valueBased",
					label: t("volume_label_mapped_type.valueBased")
				},
				{
					value: "both",
					label: t("volume_label_mapped_type.both")
				}
			],
			default: "valueBased",
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		volumeSliderLabel: {
			type: "toggle",
			category: "volume",
			group: "volumeSlider",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
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
			adornments: [adornments.ytmOnly, adornments.reload]
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
			adornments: [adornments.ytmOnly, adornments.reload]
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
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		volumeSharedBetweenTabs: {
			type: "toggle",
			category: "volume",
			group: "volumeSharedBetweenTabs",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: false,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		setInitialTabVolume: {
			type: "toggle",
			category: "volume",
			group: "initialTabVolume",
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: false,
			adornments: () => getFeature("volumeSharedBetweenTabs") ? [
				adornments.ytmOnly,
				adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")),
				adornments.reload
			] : [adornments.ytmOnly, adornments.reload]
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
					return `${value}% (${["0.0", "100.0"].includes(expMapped) ? expMapped.slice(0, -2) : expMapped}%)`;
				}
				return `${value}%`;
			},
			adornments: () => getFeature("volumeSharedBetweenTabs") ? [
				adornments.ytmOnly,
				adornments.reload,
				adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'"))
			] : [adornments.ytmOnly, adornments.reload]
		},
		disableBeforeUnloadPopup: {
			type: "toggle",
			category: "behavior",
			group: "disableBeforeUnloadPopup",
			supportedSites: ["ytm", "yt"],
			since: "1.0.0",
			default: false,
			reloadRequired: false
		},
		autoCloseToasts: {
			type: "toggle",
			category: "behavior",
			group: "autoCloseToasts",
			supportedSites: ["ytm", "yt"],
			since: "3.0.0",
			default: true,
			reloadRequired: false
		},
		closeToastsTimeout: {
			type: "slider",
			category: "behavior",
			group: "autoCloseToasts",
			supportedSites: ["ytm", "yt"],
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
			supportedSites: ["ytm", "yt"],
			since: "1.1.0",
			default: true,
			helpText: () => tp("feature_helptext.rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
			adornments: [adornments.reload]
		},
		rememberSongTimeSites: {
			type: "select",
			category: "behavior",
			group: "rememberSongTime",
			supportedSites: ["ytm", "yt"],
			since: "1.1.0",
			options: options.siteSelection,
			default: "all",
			adornments: [adornments.reload]
		},
		rememberSongTimeDuration: {
			type: "number",
			category: "behavior",
			group: "rememberSongTime",
			supportedSites: ["ytm", "yt"],
			since: "2.0.0",
			min: 1,
			max: 3600 * 24 * 7,
			step: 1,
			default: 180,
			unit: "s",
			reloadRequired: false
		},
		rememberSongTimeReduction: {
			type: "number",
			category: "behavior",
			group: "rememberSongTime",
			supportedSites: ["ytm", "yt"],
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
			supportedSites: ["ytm", "yt"],
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
			supportedSites: ["ytm"],
			since: "2.0.0",
			default: true,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		hideCursorOnIdleDelay: {
			type: "slider",
			category: "behavior",
			group: "hideCursorOnIdle",
			supportedSites: ["ytm"],
			since: "2.0.0",
			min: .5,
			max: 10,
			step: .25,
			default: 3,
			unit: "s",
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		hidePlayerBarOnIdleInFullscreen: {
			type: "toggle",
			category: "behavior",
			group: "hideCursorOnIdle",
			supportedSites: ["ytm"],
			since: "3.1.0",
			default: true,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		yesImStillThere: {
			category: "behavior",
			group: "yesImStillThere",
			type: "toggle",
			supportedSites: ["ytm"],
			since: "3.1.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		autoScrollToActiveSongEnabled: {
			type: "toggle",
			category: "behavior",
			group: "autoScrollToActiveSong",
			supportedSites: ["ytm"],
			since: "3.2.0",
			default: true,
			adornments: [adornments.ytmOnly]
		},
		autoScrollToActiveSongMode: {
			type: "select",
			category: "behavior",
			group: "autoScrollToActiveSong",
			supportedSites: ["ytm"],
			since: "3.0.0",
			options: () => [
				{
					value: "initialPageLoad",
					label: t("auto_scroll_to_active_song_mode.initial_page_load")
				},
				{
					value: "videoChangeAll",
					label: t("auto_scroll_to_active_song_mode.video_change_all")
				},
				{
					value: "videoChangeManual",
					label: t("auto_scroll_to_active_song_mode.video_change_manual")
				},
				{
					value: "videoChangeAuto",
					label: t("auto_scroll_to_active_song_mode.video_change_auto")
				}
			],
			default: "videoChangeManual",
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		autoLikeChannels: {
			type: "toggle",
			category: "autoLike",
			group: "autoLikeChannels",
			supportedSites: ["ytm", "yt"],
			since: "2.1.0",
			default: true,
			adornments: [adornments.reload]
		},
		autoLikeOpenMgmtDialog: {
			type: "button",
			category: "autoLike",
			group: "autoLikeChannels",
			supportedSites: ["ytm", "yt"],
			since: "2.1.0",
			default: void 0,
			click: () => getAutoLikeDialog().then((d) => d.open())
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
			adornments: [adornments.advanced]
		},
		autoLikeTimeout: {
			type: "slider",
			category: "autoLike",
			group: "autoLikeChannels",
			supportedSites: ["ytm", "yt"],
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
			supportedSites: ["ytm", "yt"],
			since: "2.1.0",
			default: true,
			reloadRequired: false
		},
		arrowKeySupport: {
			type: "toggle",
			category: "input",
			group: "arrowKeySupport",
			supportedSites: ["ytm"],
			since: "0.1.0",
			default: true,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		arrowKeySkipBy: {
			type: "number",
			category: "input",
			group: "arrowKeySupport",
			supportedSites: ["ytm"],
			since: "1.1.0",
			min: .1,
			step: .1,
			default: 5,
			unit: "s",
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
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
			adornments: [adornments.ytmOnly]
		},
		frameSkip: {
			type: "toggle",
			category: "input",
			group: "frameSkip",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: true,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		frameSkipWhilePlaying: {
			type: "toggle",
			category: "input",
			group: "frameSkip",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: false,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		frameSkipAmount: {
			type: "number",
			category: "input",
			group: "frameSkip",
			supportedSites: ["ytm"],
			since: "3.0.0",
			min: 0,
			step: 1e-4,
			default: .0166,
			unit: "s",
			reloadRequired: false,
			advanced: true,
			adornments: [adornments.ytmOnly, adornments.advanced]
		},
		anchorImprovements: {
			type: "toggle",
			category: "input",
			group: "anchorImprovements",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		numKeysSkipToTime: {
			type: "toggle",
			category: "input",
			group: "numKeysSkipToTime",
			supportedSites: ["ytm"],
			since: "1.0.0",
			default: true,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		numKeysSkipToTimeDoublePress: {
			type: "slider",
			category: "input",
			group: "numKeysSkipToTime",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: 0,
			min: 0,
			max: 3e3,
			step: 100,
			renderValue: (value) => String(Number(value) === 0 ? t("toggled_off") : `${value}ms`),
			reloadRequired: false
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
			step: .5,
			renderValue: (value) => String(Number(value) === 0 ? t("toggled_off") : `${formatNumber(Number(value), "short")}s`),
			reloadRequired: false,
			advanced: true,
			adornments: [adornments.advanced]
		},
		switchBetweenSites: {
			type: "toggle",
			category: "hotkeys",
			group: "switchBetweenSites",
			supportedSites: ["ytm", "yt"],
			since: "0.2.0",
			default: true,
			reloadRequired: false
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
				alt: false
			},
			reloadRequired: false
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
				alt: false
			},
			reloadRequired: false
		},
		likeDislikeHotkeys: {
			type: "toggle",
			category: "hotkeys",
			group: "likeDislikeHotkeys",
			supportedSites: ["ytm", "yt"],
			since: "3.0.0",
			default: true,
			reloadRequired: false
		},
		likeDislikeHotkeysToggle: {
			type: "toggle",
			category: "hotkeys",
			group: "likeDislikeHotkeys",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: false,
			reloadRequired: false
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
				alt: false
			},
			reloadRequired: false
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
				alt: false
			},
			reloadRequired: false
		},
		currentLyricsHotkeyEnabled: {
			type: "toggle",
			category: "hotkeys",
			group: "currentLyricsHotkeyEnabled",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: true,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
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
				alt: false
			},
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		lyricsSearchPromptHotkeyEnabled: {
			type: "toggle",
			category: "hotkeys",
			group: "lyricsSearchPromptHotkeyEnabled",
			supportedSites: ["ytm", "yt"],
			since: "3.2.0",
			default: true,
			reloadRequired: false
		},
		lyricsSearchPromptHotkey: {
			type: "hotkey",
			category: "hotkeys",
			group: "lyricsSearchPromptHotkeyEnabled",
			supportedSites: ["ytm", "yt"],
			since: "3.2.0",
			default: {
				code: "KeyQ",
				shift: false,
				ctrl: false,
				alt: true
			},
			reloadRequired: false
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
				duration: 2e4,
				onClick: () => getErrorDialog(t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"), [t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled")]).open()
			}),
			adornments: () => !getFeature("rememberSongTime") ? [() => adornments.alert(t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled").replace(/"/g, "'"))] : []
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
				alt: true
			},
			reloadRequired: false
		},
		focusSearchBarHotkeyEnabled: {
			type: "toggle",
			category: "hotkeys",
			group: "focusSearchBarHotkey",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: true,
			reloadRequired: false
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
				alt: false
			},
			reloadRequired: false
		},
		clearSearchBarHotkeyEnabled: {
			type: "toggle",
			category: "hotkeys",
			group: "clearSearchBarHotkey",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: true,
			reloadRequired: false
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
				alt: false
			},
			reloadRequired: false
		},
		rebindNextAndPrevious: {
			type: "toggle",
			category: "hotkeys",
			group: "rebindNextAndPrevious",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: false,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
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
				alt: false
			},
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
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
				alt: false
			},
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		rebindPlayPause: {
			type: "toggle",
			category: "hotkeys",
			group: "rebindPlayPause",
			supportedSites: ["ytm"],
			since: "3.0.0",
			default: false,
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
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
				alt: false
			},
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		disableDarkReaderSites: {
			type: "select",
			category: "integrations",
			group: "darkReader",
			supportedSites: ["ytm", "yt"],
			since: "2.0.0",
			options: options.siteSelectionOrNone,
			default: "all",
			adornments: [adornments.reload]
		},
		sponsorBlockIntegration: {
			type: "toggle",
			category: "integrations",
			group: "sponsorBlock",
			supportedSites: ["ytm"],
			since: "2.1.0-preview.1",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		themeSongIntegration: {
			type: "toggle",
			category: "integrations",
			group: "themeSong",
			supportedSites: ["ytm"],
			since: "2.1.0-preview.1",
			default: false,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		themeSongLightness: {
			type: "select",
			category: "integrations",
			group: "themeSong",
			supportedSites: ["ytm"],
			since: "2.1.0-preview.1",
			options: options.colorLightness,
			default: "darker",
			adornments: [adornments.ytmOnly, adornments.reload]
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
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		themeSongVisualizerHotkeyEnabled: {
			type: "toggle",
			category: "integrations",
			group: "themeSongVisualizer",
			supportedSites: ["ytm"],
			since: "3.1.0",
			default: false,
			adornments: [adornments.ytmOnly, adornments.reload]
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
				alt: false
			},
			reloadRequired: false,
			adornments: [adornments.ytmOnly]
		},
		removeThumbnailRatingBar: {
			type: "toggle",
			category: "integrations",
			group: "thumbnailRatingBar",
			supportedSites: ["ytm"],
			since: "3.1.0",
			default: true,
			adornments: [adornments.ytmOnly, adornments.reload]
		},
		openPluginList: {
			type: "button",
			category: "plugins",
			group: "pluginList",
			supportedSites: ["ytm", "yt"],
			since: "2.1.0-preview.1",
			default: void 0,
			click: () => getPluginListDialog().then((d) => d.open())
		},
		openPluginDiscoverySite: {
			type: "button",
			category: "plugins",
			group: "pluginList",
			supportedSites: ["ytm", "yt"],
			since: "3.1.0",
			default: void 0,
			click: () => (0, _sv443_network_userutils.openInNewTab)(package_default.pluginDiscoveryUrl)
		}
	};
	/** Default feature config data using the current feature info object, used when no data is found in persistent storage or when the user resets the config */
	var cfgDefaultData = (0, _sv443_network_coreutils.pureObj)(Object.keys(featInfo).filter((ftKey) => featInfo?.[ftKey] && "default" in featInfo[ftKey] && featInfo[ftKey].default !== void 0).reduce((acc, key) => {
		acc[key] = featInfo?.[key] && "default" in featInfo[key] ? featInfo?.[key]?.default : void 0;
		return acc;
	}, {}));
	/**
	* Config data format migration functions.  
	* Each key is the version to migrate *to*, and the value is a function that takes the old data as an argument and returns the new data.  
	*   
	* Some helper functions are used to make writing migration functions easier and less error-prone:
	* - **When a new feature was added,** the migration function should use {@linkcode useNewDefaults()} to set the new feature to its default value, while keeping all other values from the old config.  
	* - **When a feature's default value was changed,** the migration function should use {@linkcode useNewDefaultsIfUnchanged()} to set the feature to its new default value, but only if the user hasn't changed it from its old default value. This way, a user's preference will be respected instead of being reset without their knowledge.
	* - **When a feature's valid value range was changed,** the migration function should use {@linkcode useNewRanges()} to clamp the feature's value to the new valid range. This only applies to numeric features with a `min` and `max` property defined in the {@linkcode featInfo} object.
	*/
	var cfgMigrations = {
		2: (oldData) => {
			if (typeof oldData !== "object" || oldData === null) return cfgDefaultData;
			const queueBtnsEnabled = Boolean(oldData.queueButtons);
			delete oldData.queueButtons;
			return {
				...oldData,
				deleteFromQueueButton: queueBtnsEnabled,
				lyricsQueueButton: queueBtnsEnabled
			};
		},
		3: (oldData) => useNewDefaults(oldData, [
			"removeShareTrackingParam",
			"numKeysSkipToTime",
			"fixSpacing",
			"scrollToActiveSongBtn",
			"logLevel"
		]),
		4: (oldData) => {
			const oldSwitchSitesHotkey = oldData.switchSitesHotkey;
			return {
				...useNewDefaults(oldData, [
					"rememberSongTime",
					"rememberSongTimeSites",
					"volumeSliderScrollStep",
					"locale",
					"versionCheck"
				]),
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
			"disableDarkReaderSites"
		]),
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
				"volumeSliderLabel"
			]), [{
				key: "rememberSongTimeSites",
				oldDefault: "ytm"
			}, {
				key: "volumeSliderScrollStep",
				oldDefault: 10
			}]);
			"removeUpgradeTab" in newData && delete newData.removeUpgradeTab;
			"advancedLyricsFilter" in newData && delete newData.advancedLyricsFilter;
			return newData;
		},
		7: (oldData) => {
			const newData = useNewDefaultsIfUnchanged(useNewDefaults(oldData, [
				"showToastOnGenericError",
				"sponsorBlockIntegration",
				"themeSongIntegration",
				"themeSongLightness",
				"errorOnLyricsNotFound",
				"openPluginList"
			]), [{
				key: "toastDuration",
				oldDefault: 3
			}]);
			newData.arrowKeySkipBy = (0, _sv443_network_coreutils.clamp)(newData.arrowKeySkipBy, .5, 30);
			return newData;
		},
		8: (oldData) => {
			if ("showVotesFormat" in oldData) {
				oldData.numbersFormat = oldData.showVotesFormat;
				delete oldData.showVotesFormat;
			}
			return useNewDefaults(oldData, ["autoLikeChannels"]);
		},
		9: (oldData) => {
			oldData.locale = oldData.locale.replace("_", "-");
			if (oldData.locale === "ja-JA") oldData.locale = "ja-JP";
			if (oldData.locale === "en-GB") oldData.locale = "en-GB";
			return useNewDefaults(oldData, ["resetEverything"]);
		},
		10: (oldData) => {
			oldData.closeToastsTimeout = (0, _sv443_network_coreutils.clamp)(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
			oldData.lyricsCacheMaxSize = (0, _sv443_network_coreutils.clamp)(oldData.lyricsCacheMaxSize, featInfo.lyricsCacheMaxSize.min, featInfo.lyricsCacheMaxSize.max);
			oldData.autoCloseToasts = oldData.closeToastsTimeout > 0;
			oldData.closeToastsTimeout = (0, _sv443_network_coreutils.clamp)(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
			if ("thumbnailOverlayImageFit" in oldData) delete oldData.thumbnailOverlayImageFit;
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
				"thumbnailOverlayITunesImgRes"
			]), [{
				key: "lyricsCacheMaxSize",
				oldDefault: 2e3
			}]);
		},
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
				"switchSitesNewTabHotkey"
			]), [
				{
					key: "thumbnailOverlayAlbumArtCacheMaxSize",
					oldDefault: 2e3
				},
				{
					key: "thumbnailOverlayITunesImgRes",
					oldDefault: 1500
				},
				{
					key: "thumbnailOverlayIndicatorOpacity",
					oldDefault: 40
				},
				{
					key: "lyricsCacheMaxSize",
					oldDefault: 5e3
				},
				{
					key: "rememberSongTimeMinPlayTime",
					oldDefault: 10
				},
				{
					key: "hideCursorOnIdleDelay",
					oldDefault: 2
				},
				{
					key: "initTimeout",
					oldDefault: 8
				},
				{
					key: "rememberSongTimeDuration",
					oldDefault: 60
				},
				{
					key: "frameSkipAmount",
					oldDefault: .0417
				}
			]);
			artCacheStore.deleteData().then(() => {
				loggers.data.info("Cleared album artwork cache due to improvements in the way album artworks are resolved, which made a large portion of the cached artworks wrong.", LogLevel.Info);
			});
			if (newCfg.initTimeout <= 10) newCfg.initTimeout = toClamped("initTimeout", newCfg.initTimeout * 1e3);
			return useNewRanges(newCfg, ["initTimeout", "thumbnailOverlayITunesImgRes"]);
		},
		12: (oldData) => {
			oldData.thumbnailOverlayEnabled = oldData.thumbnailOverlayBehavior !== "never";
			oldData.autoScrollToActiveSongEnabled = oldData.autoScrollToActiveSongMode !== "never";
			return useNewDefaults(oldData, [
				"configMenuFocusContentButtonEnabled",
				"lyricsSearchPromptHotkeyEnabled",
				"lyricsSearchPromptHotkey",
				"defaultObserverDebounce",
				"globalAlertMode",
				"openWelcomeMenu",
				"verboseObservers"
			]);
		}
	};
	/**
	* Uses the default config data ({@linkcode cfgDefaultData}) as the base, then overwrites all values with the passed {@linkcode config} (can be a partial object), then sets all feature values defined by {@linkcode resetKeys} to their default values.  
	* This function is basically used for migrations where new features have been introduced, or where some features absolutely NEED to be reset to their new default value, like for a breaking change.  
	* Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
	*/
	function useNewDefaults(config, resetKeys) {
		const newData = structuredClone({
			...cfgDefaultData,
			...config ?? {}
		});
		for (const key of resetKeys) newData[key] = featInfo?.[key]?.default;
		return newData;
	}
	/**
	* Uses {@linkcode config} as the base, then sets all keys provided in {@linkcode oldDefaults} to their old default values, as long as their current value is equal to the provided old default.  
	* This essentially means if someone has changed a feature's value from its old default value, that decision will be respected. Only if it has been left on its old default value, it will be set to the new default.  
	* This function is basically used for migrations where some features' default values have changed, but we don't want to upset users who have changed the value from its old default. May only be used for non-breaking changes.  
	* Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
	*/
	function useNewDefaultsIfUnchanged(config, oldDefaults) {
		const newData = structuredClone(config);
		for (const { key, oldDefault } of oldDefaults) {
			const defaultVal = featInfo?.[key]?.default;
			if (newData[key] === oldDefault) newData[key] = defaultVal;
		}
		return newData;
	}
	/**
	* Uses the passed config as the base, then clamps all numeric feature values defined by {@linkcode keys} to their defined min/max ranges.  
	* Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
	*/
	function useNewRanges(config, keys) {
		const newCfg = structuredClone(config);
		for (const key of keys) {
			const info = featInfo[key];
			if (info && "min" in info && "max" in info) newCfg[key] = clampNewRange(newCfg, key);
		}
		return newCfg;
	}
	/** Clamps the value of the given numeric feature key in the passed config object to its defined min/max range. */
	function clampNewRange(config, key) {
		const val = config[key];
		const info = featInfo[key];
		return (0, _sv443_network_coreutils.clamp)(val, info.min, "max" in info && typeof info.max === "number" ? info.max : Infinity);
	}
	/** Clamps the given numerical value using the given numerical feature's `min` and `max` props (see {@linkcode featInfo}) if they exist. Otherwise returns the given value as-is. */
	function toClamped(ftKey, newValue) {
		const ftInf = featInfo[ftKey];
		if ("min" in ftInf) return (0, _sv443_network_coreutils.clamp)(newValue, ftInf.min, "max" in ftInf ? ftInf.max : Infinity);
		return newValue;
	}
	var configStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-config",
		formatVersion: 12,
		engine: new _sv443_network_userutils.GMStorageEngine(),
		defaultData: cfgDefaultData,
		migrations: cfgMigrations,
		compressionFormat: compressionFormat$1,
		nanoEmitterOptions: {
			publicEmit: false,
			catchUpEvents: ["loadData"]
		}
	});
	/** Initializes the DataStore instance and loads persistent data into memory. Returns a copy of the config object. */
	async function initConfig() {
		const oldFmtVer = Number(await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-ver`, NaN));
		let oldDataHash;
		try {
			const oldData = await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-dat`, "{}");
			const oldDataObj = JSON.parse(oldData);
			if (oldDataObj !== null && typeof oldDataObj === "object" && Object.keys(oldDataObj).length > 0) oldDataHash = await (0, _sv443_network_coreutils.computeHash)(JSON.stringify(oldDataObj), "sha256");
		} catch {}
		let data = fixCfgKeys(await configStore.loadData());
		if (oldDataHash && oldDataHash !== await (0, _sv443_network_coreutils.computeHash)(JSON.stringify(data), "sha256")) {
			if (await showPrompt({
				type: "confirm",
				message: t("config_data_changed_prompt_open_menu"),
				confirmBtnText: t("open"),
				confirmBtnTooltip: t("open_menu_tooltip"),
				denyBtnText: t("prompt_close"),
				denyBtnTooltip: t("click_to_close_tooltip")
			})) window.addEventListener("bytm:allReady", () => openCfgMenu(), { once: true });
		}
		loggers.data.log(`Initialized feature config DataStore with version ${configStore.formatVersion}`);
		if (isNaN(oldFmtVer)) loggers.data.warn("  ⚠️ - Config data was initialized with default values");
		else if (oldFmtVer !== configStore.formatVersion) try {
			await configStore.setData(data = fixCfgKeys(data));
			loggers.data.info(`  ⚠️ - Config data was migrated from version ${oldFmtVer} to ${configStore.formatVersion}`);
		} catch (err) {
			loggers.data.error("  ⚠️ - Config data migration failed, falling back to default data:", err);
			await configStore.setData(data = configStore.defaultData);
		}
		emitInterface("bytm:configReady");
		return structuredClone(data);
	}
	/**
	* Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
	* Doesn't traverse nested objects.  
	* Returns a copy of the originally passed object if nothing needs to be fixed.
	*/
	function fixCfgKeys(cfg) {
		const newCfg = structuredClone(cfg);
		const currentKeys = Object.keys(newCfg);
		const defaultKeys = Object.keys(cfgDefaultData);
		for (const key of defaultKeys.filter((k) => !currentKeys.includes(k))) currentKeys.push(newCfg[key] = cfgDefaultData[key]);
		for (const key of currentKeys.filter((k) => !defaultKeys.includes(k))) delete newCfg[key];
		return newCfg;
	}
	/** Returns the current feature config from the in-memory cache as a copy */
	function getFeatures() {
		return configStore.getData();
	}
	/** Returns the value of the feature with the given key from the in-memory cache, as a copy */
	function getFeature(key, defaultVal) {
		const val = configStore.getData()[key];
		return val !== void 0 ? val : defaultVal;
	}
	/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
	function setFeatures(featureConf) {
		const res = configStore.setData(featureConf);
		emitSiteEvent("configChanged", getFeaturesNoHidden());
		loggers.data.info("Saved new feature config:", getFeaturesNoHidden());
		return res;
	}
	/** Returns the feature config with all hidden features removed, as a copy */
	function getFeaturesNoHidden(featureCfg) {
		const feats = structuredClone({ ...featureCfg ?? getFeatures() });
		for (const ftKey of Object.keys(feats)) {
			const info = featInfo[ftKey];
			if (info && "valueHidden" in info && info.valueHidden) feats[ftKey] = void 0;
		}
		return feats;
	}
	/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
	function setDefaultFeatures() {
		const res = configStore.saveDefaultData();
		emitSiteEvent("configChanged", getFeaturesNoHidden());
		loggers.data.info("Reset feature config to its default values");
		return res;
	}
	/** Shows a confirmation prompt to reset the config */
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
	/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
	async function clearConfig() {
		await configStore.deleteData();
		loggers.data.info("Deleted config from persistent storage");
	}
	/**
	* Sets all features in the config that match *all* the provided `tags` with the corresponding feature type value in the `setFeatureValues` object.  
	* Returns an object that maps modified feature keys to their new values.
	*/
	async function configSetFeatsWithTags(tags, setFeatureValues) {
		const modified = {};
		const features = getFeatures();
		for (const [ftKey, ftInfo] of Object.entries(featInfo)) {
			if (!("tags" in ftInfo) || "tags" in ftInfo && !tags.every((tag) => ftInfo.tags.includes(tag))) continue;
			if (typeof setFeatureValues[ftInfo.type] !== "undefined") features[ftKey] = modified[ftKey] = setFeatureValues[ftInfo.type];
		}
		await setFeatures(features);
		return modified;
	}
	/** Returns a subset of the feature config where each property's feature has *all* the given `tags`. */
	function getFeaturesWithTags(tags) {
		const feats = {};
		for (const [ftKey, ftInfo] of Object.entries(featInfo)) {
			if (!("tags" in ftInfo) || "tags" in ftInfo && !tags.every((tag) => ftInfo.tags.includes(tag))) continue;
			feats[ftKey] = getFeature(ftKey);
		}
		return feats;
	}
	//#endregion
	//#region src/features/behavior.ts
	var discardBeforeUnloadOverride;
	/** Disables the popup before leaving the site */
	function enableDiscardBeforeUnload() {
		discardBeforeUnloadOverride = true;
		loggers.behavior.info("Disabled popup before leaving the site");
	}
	/** (Re-)enables the popup before leaving the site */
	function disableDiscardBeforeUnload() {
		discardBeforeUnloadOverride = false;
		loggers.behavior.info("Enabled popup before leaving the site");
	}
	/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site */
	async function initBeforeUnloadHook() {
		try {
			(0, _sv443_network_userutils.interceptWindowEvent)("beforeunload", () => typeof discardBeforeUnloadOverride !== "undefined" ? discardBeforeUnloadOverride : getFeature("disableBeforeUnloadPopup"));
		} catch (err) {
			loggers.behavior.error("Error in beforeunload hook:", err);
		}
	}
	/** Closes toasts after a set amount of time */
	async function initAutoCloseToasts() {
		const animTimeout = 300;
		addSelectorListener("popupContainer", "ytmusic-notification-action-renderer", {
			all: true,
			continuous: true,
			listener: async (toastContElems) => {
				try {
					if (!getFeature("autoCloseToasts")) return;
					for (const toastContElem of toastContElems) {
						const toastElem = toastContElem.querySelector("tp-yt-paper-toast#toast");
						if (!toastElem || !toastElem.hasAttribute("allow-click-through")) continue;
						if (toastElem.classList.contains("bytm-closing")) continue;
						toastElem.classList.add("bytm-closing");
						await (0, _sv443_network_coreutils.pauseFor)(Math.max(getFeature("closeToastsTimeout") * 1e3 + animTimeout, animTimeout));
						toastElem.classList.remove("paper-toast-open");
						toastElem.addEventListener("transitionend", () => {
							toastElem.classList.remove("bytm-closing");
							toastElem.style.display = "none";
							if (toastElem.parentNode) {
								clearNode(toastElem);
								loggers.behavior.log(`Automatically closed toast after ${getFeature("closeToastsTimeout") * 1e3}ms`);
							}
						}, { once: true });
					}
				} catch (err) {
					loggers.behavior.error("Error in automatic toast closing:", err);
				}
			}
		});
		loggers.behavior.log("Initialized automatic toast closing");
	}
	var initialAutoScrollToActiveSong = true;
	var prevVidMaxTime = Infinity;
	var prevTime = -1;
	/** Initializes the autoScrollToActiveSong feature */
	async function initAutoScrollToActiveSong() {
		(0, _sv443_network_coreutils.createRecurringTask)({
			timeout: 50,
			async task() {
				const vidEl = await waitVideoElementReady();
				prevTime = vidEl.currentTime ?? -1;
				prevVidMaxTime = vidEl.duration ?? Infinity;
			}
		});
		siteEvents.on("watchIdChanged", (_, oldId) => {
			if (!oldId || !getFeature("autoScrollToActiveSongEnabled")) return;
			const isManualChange = prevTime < prevVidMaxTime - 1;
			if (["videoChangeManual", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && isManualChange) scrollToCurrentSongInQueue();
			else if (["videoChangeAuto", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && !isManualChange) scrollToCurrentSongInQueue();
		});
		if (getFeature("autoScrollToActiveSongEnabled") && initialAutoScrollToActiveSong) {
			initialAutoScrollToActiveSong = false;
			scrollToCurrentSongInQueue();
		}
	}
	/**
	* Remembers the time of the last played video and resumes playback from that time when the site is reloaded or the video is revisited.  
	* *Needs to be called **before** DOM is ready!*
	*/
	async function initRememberVideoTime() {
		if (getFeature("rememberSongTimeSites") !== "all" && getFeature("rememberSongTimeSites") !== getDomain()) return;
		const remTimesRaw = await GM.getValue("bytm-remember-times");
		if (!remTimesRaw) await GM.setValue("bytm-remember-times", "[]");
		let remTimeEntries;
		try {
			remTimeEntries = JSON.parse(String(remTimesRaw ?? "[]"));
		} catch (err) {
			loggers.behavior.error("Error parsing stored video time data, defaulting to empty cache:", err);
			await GM.setValue("bytm-remember-times", "[]");
			remTimeEntries = [];
		}
		if (remTimeEntries.some((e) => "watchID" in e)) {
			remTimeEntries = remTimeEntries.filter((e) => "id" in e);
			await GM.setValue("bytm-remember-times", JSON.stringify(remTimeEntries));
			loggers.behavior.log(`Removed ${remTimeEntries.length} ${(0, _sv443_network_coreutils.autoPlural)("entry", remTimeEntries)} with an outdated format from the video time cache`);
		}
		loggers.behavior.log(`Initialized video time restoring with ${remTimeEntries.length} initial ${(0, _sv443_network_coreutils.autoPlural)("entry", remTimeEntries)}:`, remTimeEntries);
		await remTimeTryRestoreTime();
		try {
			if (!(0, _sv443_network_userutils.isDomLoaded)()) document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop, { once: true });
			else remTimeStartUpdateLoop();
		} catch (err) {
			loggers.behavior.error("Error in video time remembering update loop:", err);
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
						if (thumbEl && thumbEl.src.includes("/vi/")) videoID = thumbEl.src.split("/vi/")[1].split("/")[0];
					}
					if (!videoID) {
						loggers.behavior.error("Could not determine the video ID of the current video - not restoring time");
						return resolve(false);
					}
					if (initialParams$1.has("t") && !force) {
						loggers.behavior.info("Not restoring song time because the page was loaded with the '&t' parameter", LogLevel.Info);
						return resolve(false);
					}
					const entry = remVids.find((entry) => entry.id === videoID);
					if (entry) if (Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1e3) {
						await remTimeDeleteEntry(entry.id);
						return resolve(false);
					} else if (isNaN(Number(entry.time)) || entry.time < 0) {
						loggers.behavior.warn("Invalid time in remembered song time entry:", entry);
						return resolve(false);
					} else {
						let vidElem;
						const doRestoreTime = async () => {
							if (!vidElem) vidElem = await waitVideoElementReady();
							const vidRestoreTime = entry.time - getFeature("rememberSongTimeReduction", 0);
							vidElem.currentTime = (0, _sv443_network_coreutils.clamp)(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
							await remTimeDeleteEntry(entry.id);
							loggers.behavior.info(`Restored ${getDomain() === "ytm" ? getCurrentMediaType() : "video"} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
							return resolve(true);
						};
						if (!(0, _sv443_network_userutils.isDomLoaded)()) document.addEventListener("DOMContentLoaded", doRestoreTime, { once: true });
						else doRestoreTime();
					}
				}
				return resolve(false);
			} catch (err) {
				loggers.behavior.error("Uncaught error when trying to restore video time:", err);
				return reject(err);
			}
		});
	}
	var lastSongTime = -1;
	var remVidCheckTimeout;
	/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
	async function remTimeStartUpdateLoop() {
		const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
		if (location.pathname.startsWith("/watch")) {
			const id = getWatchId();
			const songTime = await getVideoTime() ?? 0;
			if (id && songTime !== lastSongTime) {
				lastSongTime = songTime;
				const paused = getVideoElement()?.paused ?? false;
				if (songTime > getFeature("rememberSongTimeMinPlayTime") && !paused) await remTimeUpsertEntry({
					id,
					time: songTime,
					updated: Date.now()
				});
				else if (!paused) {
					const entry = remVids.find((entry) => entry.id === id);
					if (entry && songTime <= entry.time) await remTimeUpsertEntry({
						...entry,
						time: songTime,
						updated: Date.now()
					});
				}
			}
		}
		const expiredEntries = remVids.filter((entry) => Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1e3);
		for (const entry of expiredEntries) await remTimeDeleteEntry(entry.id);
		if (remVidCheckTimeout) clearTimeout(remVidCheckTimeout);
		remVidCheckTimeout = setTimeout(remTimeStartUpdateLoop, 250);
	}
	/** Updates an existing or inserts a new entry to be remembered */
	async function remTimeUpsertEntry(data, force = false) {
		const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]"));
		const foundIdx = remVids.findIndex((entry) => entry.id === data.id);
		if (foundIdx > -1 && !force && data.time <= remVids[foundIdx].time) return;
		if (foundIdx >= 0) remVids[foundIdx] = data;
		else remVids.push(data);
		await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
	}
	/** Deletes an entry in the "remember cache" */
	async function remTimeDeleteEntry(videoID) {
		const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]")).filter((entry) => entry.id !== videoID);
		await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
	}
	var curSongTitle;
	var isDragging = false;
	var lastClick = 0;
	var lastInteractionTimeout = 5e3;
	document.addEventListener("dragstart", () => isDragging = true);
	document.addEventListener("dragend", () => isDragging = false);
	document.addEventListener("mousedown", () => isDragging = true);
	document.addEventListener("mouseup", () => isDragging = false);
	document.addEventListener("click", () => lastClick = Date.now());
	var isInFullscreen = false;
	siteEvents.on("fullscreenToggled", (val) => isInFullscreen = val);
	/** Initializes the "Are you still there?" popup dismissing feature */
	async function initStillThere() {
		siteEvents.on("songTitleChanged", (newTitle) => curSongTitle = newTitle);
		let firstCheck = true;
		let obs;
		const checkStillThere = (youThereCont) => {
			const dialogCont = youThereCont.closest("tp-yt-paper-dialog");
			if (!dialogCont) return loggers.behavior.warn("Could not find the dialog container to dismiss the \"Are you still there?\" popup");
			const doCheck = () => {
				if (!getFeature("yesImStillThere") || !dialogCont || dialogCont.hasAttribute("aria-hidden") || getComputedStyle(dialogCont).display === "none") return;
				const btn = youThereCont.querySelector(".actions button");
				if (!btn) return loggers.behavior.warn("Could not find the \"Yes\" button to dismiss the \"Are you still there?\" popup");
				btn.click();
				if (obs) {
					obs.disconnect();
					obs = void 0;
				}
				loggers.behavior.info("Automatically dismissed the \"Are you still here?\" dialog on the song", curSongTitle, LogLevel.Info);
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
		};
		addSelectorListener("popupContainer", "tp-yt-paper-dialog ytmusic-you-there-renderer", { listener: (el) => checkStillThere(el) });
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
			if (isInFullscreen) return loggers.behavior.warn("Fullscreen is active - not dispatching \"Are you still there?\" events");
			if (isDragging || Date.now() - lastClick < lastInteractionTimeout) return loggers.behavior.warn("Click is currently held down - not dispatching \"Are you still there?\" events");
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
				view: (0, _sv443_network_userutils.getUnsafeWindow)()
			}));
		};
		const tryMove = async () => {
			if (isInFullscreen) return loggers.behavior.warn("Fullscreen is active - not dispatching \"Are you still there?\" events");
			if (isDragging || Date.now() - lastClick < lastInteractionTimeout) return loggers.behavior.warn("Click is currently held down - not dispatching \"Are you still there?\" events");
			const incX = (Math.random() * 2 - 1) / 10, incY = (Math.random() * 2 - 1) / 10;
			const vidEl = getVideoElement();
			if (!vidEl) return;
			for (let i = 0; i < 20; i++) {
				const x = Math.random() * (0, _sv443_network_coreutils.clamp)(window.innerWidth, 100, Math.max(200, window.innerWidth) - 100);
				const y = Math.random() * (0, _sv443_network_coreutils.clamp)(window.innerHeight, 100, Math.max(200, window.innerHeight) - 100);
				vidEl?.dispatchEvent(new MouseEvent("mousemove", {
					bubbles: true,
					cancelable: true,
					clientX: x + incX * i,
					clientY: y + incY * i,
					screenX: x + incX * i,
					screenY: y + incY * i,
					movementX: incX,
					movementY: incY,
					view: (0, _sv443_network_userutils.getUnsafeWindow)()
				}));
				await (0, _sv443_network_coreutils.pauseFor)(10);
			}
		};
		(0, _sv443_network_coreutils.setImmediateInterval)(async () => {
			if (!getFeature("yesImStillThere")) return;
			tryClick();
			await tryMove();
		}, 3e4);
	}
	//#endregion
	//#region src/utils/broadcast.ts
	/** Random ID used to identify the sender of packets emitted via broadcast, and to determine which packets should be received based on the `to` field of the transmitted packets. */
	var broadcastTxID = (0, _sv443_network_coreutils.randomId)(10, 36);
	var broadcastEngDSOpts = {
		id: "bytm-broadcast",
		encodeData: [null, (d) => d],
		decodeData: [null, (d) => d]
	};
	/**
	* DataStoreEngine instance used to push broadcast packets to other sessions using the `GM.addValueChangeListener` API.  
	* Refer to the {@linkcode BroadcastPacket} type for the packets sent through this channel.  
	* Doesn't need to be read from, as the packets are captured via `GM.addValueChangeListener`.
	*/
	var broadcastEng = new _sv443_network_userutils.GMStorageEngine({ dataStoreOptions: broadcastEngDSOpts });
	/** Which packets have already been received and processed. */
	var receivedNonces = /* @__PURE__ */ new Set();
	/** Initializes the broadcast module by setting up the necessary event listeners. */
	function initBroadcast() {
		if ("addValueChangeListener" in GM) GM.addValueChangeListener(broadcastEngDSOpts.id, (_name, _oldData, newData, isRemote) => {
			try {
				if (typeof newData === "string" && newData.trim().startsWith("{") && newData.trim().endsWith("}")) newData = JSON.parse(newData);
			} catch (e) {
				loggers.broadcast.warn("Failed to parse broadcast packet as object:", newData, e);
			}
			if (isRemote && typeof newData === "object" && newData !== null && "packet" in newData && newData.packet !== null) relayBroadcastPacket(newData.packet);
		});
		else loggers.broadcast.error(`${GM_info.scriptHandler} doesn't have GM.addValueChangeListener support, inter-session communication will not work!`);
		getSerializerStoresFull().forEach((store) => {
			store.on("updateData", (0, _sv443_network_coreutils.debounce)(() => {
				emitBroadcast({
					type: "dataStoreUpdate",
					data: { id: store.id }
				});
				getFeature("logEvents") && loggers.broadcast.log(`Emitted broadcast packet for updated DataStore with ID "${store.id}"`);
			}, 100));
		});
		siteEvents.on("broadcast", handleBroadcastPacket);
		loggers.broadcast.info(`Initialized broadcast module with TxID "${broadcastTxID}"`);
	}
	/** Called to parse and handle received broadcast packets. */
	async function handleBroadcastPacket(type, { from, to, packet }) {
		if (from === broadcastTxID) return;
		if (Array.isArray(to) && !to.includes(broadcastTxID)) return;
		switch (type) {
			case "dataStoreUpdate": {
				const data = packet.data;
				try {
					await getSerializerStoresFull().find((s) => s.id === data.id)?.loadData();
					if (data.id === configStore.id) emitSiteEvent("configChanged", configStore.getData());
					getFeature("logEvents") && loggers.broadcast.log(`Received "dataStoreUpdate" packet for DataStore with ID "${data.id}", reloaded data for that store`);
				} catch (err) {
					loggers.broadcast.log(`Error while handling "dataStoreUpdate" packet for DataStore with ID "${data.id}":`, err);
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
						buildNumber: buildNumber$1,
						version: scriptInfo$1.version,
						title: document.title,
						domain: getDomain(),
						initTime
					}
				}, [from]);
				getFeature("logEvents") && loggers.broadcast.log(`Replied to "discoverSessions" packet from session "${from}" with this session's TxID "${broadcastTxID}"`);
				break;
		}
	}
	/**
	* Emits a packet through BYTM's broadcast system to all other sessions that might be open, or only to specific sessions if the `to` parameter is provided.  
	* The packet will be wrapped in a {@linkcode BroadcastTransitPacket} that includes metadata about the sender and intended recipients.  
	* @param packet The actual packet to be sent, without the metadata. Use the {@linkcode BroadcastPacket} type for this parameter.
	* @param to Optional array of TxIDs to specify which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.
	*/
	async function emitBroadcast(packet, to) {
		const nonce = sliceNum(Date.now(), 4) + Math.random();
		return await broadcastEng.setValue(broadcastEngDSOpts.id, JSON.stringify({ packet: {
			from: broadcastTxID,
			to,
			packet,
			nonce
		} }));
	}
	/** Validates if the given object is a valid {@linkcode BroadcastTransitPacket} */
	function isValidTransitBroadcastPacket(obj) {
		return typeof obj === "object" && obj !== null && typeof obj.from === "string" && (obj.to === void 0 || Array.isArray(obj.to) && obj.to.every((id) => typeof id === "string")) && typeof obj.packet === "object" && obj.packet !== null && typeof obj.packet.type === "string" && (typeof obj.packet.data === "object" && obj.packet.data !== null || obj.packet.data === void 0) && typeof obj.nonce === "number";
	}
	/** Gets called when a broadcast packet is received to validate and relay it via {@linkcode siteEvents} */
	function relayBroadcastPacket(packet) {
		if (!isValidTransitBroadcastPacket(packet)) return loggers.broadcast.warn("Received invalid broadcast packet, ignoring:", packet);
		if (receivedNonces.has(packet.nonce)) return loggers.broadcast.warn("Received broadcast packet with nonce that was already received, ignoring:", packet);
		if (receivedNonces.size >= 10) {
			const oldestNonce = receivedNonces.values().next().value;
			oldestNonce && receivedNonces.delete(oldestNonce);
		}
		receivedNonces.add(packet.nonce);
		if (packet.from === broadcastTxID || Array.isArray(packet.to) && !packet.to.includes(broadcastTxID ?? "")) return;
		if (getFeature("logEvents")) loggers.broadcast.log(`Received broadcast packet of type "${packet.packet.type}" from session "${packet.from}":`, packet);
		const packetClean = (0, _sv443_network_coreutils.pureObj)(packet);
		forceEmitSiteEvent("broadcast", packet.packet.type, packetClean);
		forceEmitSiteEvent(`broadcast:${packet.packet.type}`, packetClean);
	}
	//#endregion
	//#region src/utils/misc.ts
	var domain;
	/**
	* Returns the current domain as a constant string representation
	* @throws Throws if script runs on an unexpected website
	*/
	function getDomain() {
		const staticDomainInfo = getDefaultStaticData().domains.find((dom) => dom.hostnames.some((hn) => location.hostname === hn));
		if (domain) return domain;
		else if (staticDomainInfo) return domain = staticDomainInfo.id;
		else throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
	}
	var initMs = Date.now();
	/** Returns the milliseconds since script init. */
	function millis() {
		return Date.now() - initMs;
	}
	/**
	* Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable.  
	* Note: as duplicated tabs will receive the same sessionStorage, this ID is not guaranteed to be entirely unique.
	*/
	function getSessionId() {
		try {
			if (!sessionStorageAvailable$1) throw new Error("Session storage unavailable");
			let sesId = window.sessionStorage.getItem("_bytm-session-id");
			if (!sesId) window.sessionStorage.setItem("_bytm-session-id", sesId = (0, _sv443_network_coreutils.randomId)(10, 36));
			return sesId;
		} catch (err) {
			loggers.misc.warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
			return null;
		}
	}
	var isCompressionSupported;
	/** Tests whether compression via the predefined {@linkcode compressionFormat} is supported (only on the first call, then returns the cached result) */
	async function compressionSupported() {
		if (typeof isCompressionSupported === "boolean") return isCompressionSupported;
		try {
			await (0, _sv443_network_coreutils.compress)(".", compressionFormat$1, "string");
			return isCompressionSupported = true;
		} catch {
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
	* First, tries to resolve it via `ytInitialPlayerResponse` on the domain `yt`, then tries to parse the URL (only works for channel pages on both YTM and YT).  
	* Returns `null` if the current page is not a channel page or there was an error parsing the URL.
	*/
	function getCurrentChannelId() {
		const iprID = getDomain() === "yt" && "ytInitialPlayerResponse" in (0, _sv443_network_userutils.getUnsafeWindow)() ? (0, _sv443_network_userutils.getUnsafeWindow)().ytInitialPlayerResponse?.videoDetails.channelId : null;
		if (iprID) return iprID;
		return parseChannelIdFromUrl(location.href);
	}
	/** Returns the channel ID from a URL or null if the URL is invalid */
	function parseChannelIdFromUrl(url) {
		try {
			const { pathname } = url instanceof URL ? url : new URL(url);
			if (pathname.includes("/channel/")) return sanitizeChannelId(pathname.split("/channel/")[1].split("/")[0]);
			else if (pathname.includes("/@")) return sanitizeChannelId(pathname.split("/@")[1].split("/")[0]);
			else return null;
		} catch {
			return null;
		}
	}
	/** Sanitizes a channel ID by adding a leading `@` if the ID doesn't start with `UC...` */
	function sanitizeChannelId(channelId) {
		channelId = String(channelId).trim();
		return isValidChannelId(channelId) || channelId.startsWith("@") ? channelId : `@${channelId}`;
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
			for (const quality of [
				"maxresdefault",
				"sddefault",
				"hqdefault",
				0
			]) {
				let response;
				const url = getThumbnailUrl(videoID, quality);
				try {
					response = await sendRequest({
						url,
						method: "HEAD",
						timeout: 6e3
					});
				} catch (err) {
					loggers.misc.error(`Error while sending HEAD request to thumbnail URL for video ID '${videoID}' with quality '${quality}':`, err);
				}
				if (response && response.status < 300 && response.status >= 200) return url;
			}
		} catch (err) {
			throw new Error(`Couldn't get thumbnail URL for video ID '${videoID}': ${err}`, { cause: err });
		}
	}
	/** Opens the given URL in a new tab, using GM.openInTab if available */
	function openInTab(href, background = false) {
		try {
			(0, _sv443_network_userutils.openInNewTab)(href, background);
		} catch {
			window.open(href, "_blank", "noopener noreferrer");
		}
	}
	/** Tries to parse an uncompressed or compressed input string as a JSON object */
	async function tryToDecompressAndParse(input) {
		let parsed;
		const val = await (0, _sv443_network_coreutils.consumeStringGen)(input);
		try {
			parsed = JSON.parse(val);
		} catch {
			try {
				parsed = JSON.parse(await (0, _sv443_network_coreutils.decompress)(val, compressionFormat$1, "string"));
			} catch (err) {
				loggers.misc.error("Couldn't decompress and parse data.", err);
				return null;
			}
		}
		await (0, _sv443_network_coreutils.pauseFor)((0, _sv443_network_coreutils.randRange)(400, 800));
		return parsed;
	}
	/** Very crude OS detection */
	function getOS() {
		if (navigator.userAgent.match(/mac(\s?os|intel)/i)) return "mac";
		return "other";
	}
	/** Formats a number based on the config or the passed {@linkcode notation} */
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
	var reloadTabStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-reload-tab",
		engine: new _sv443_network_userutils.GMStorageEngine(),
		formatVersion: 0,
		compressionFormat: null,
		memoryCache: false,
		defaultData: { entries: [] },
		nanoEmitterOptions: {
			publicEmit: false,
			catchUpEvents: ["loadData"]
		}
	});
	var reloadTabEntryMaxTTL = 1e3 * 60 * 60 * 24;
	/** Returns the "reload tab" data for the current session, or null if there is no data for the current session or sessionStorage is unavailable. */
	async function getReloadTabData(sessionId, deleteAfterRead = true) {
		try {
			if (!sessionId) sessionId = getSessionId();
			const data = await reloadTabStore.loadData();
			let entries = [...data.entries];
			const sesEntry = entries.find((e) => e.sessionId === sessionId) ?? null;
			entries = data.entries.filter((e) => deleteAfterRead && sesEntry ? e.sessionId !== sessionId : true);
			entries = entries.filter((e) => Date.now() - e.timestamp < reloadTabEntryMaxTTL);
			await reloadTabStore.setData({
				...data,
				entries
			});
			return sesEntry;
		} catch (err) {
			loggers.misc.error("Couldn't get reload tab data, sessionStorage might be unavailable:", err);
			return null;
		}
	}
	/** add `time_continue` param only if current video time is greater than this value */
	var reloadTabVideoTimeThreshold = 3;
	/** Reloads the own tab. If a video is currently playing, its time and volume will be preserved through the URL parameter `time_continue` and the {@linkcode reloadTabStore} DataStore (ID `bytm-reload-tab`) */
	async function reloadTab() {
		const win = (0, _sv443_network_userutils.getUnsafeWindow)();
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
					if (reloadTabData.entries.find((e) => e.sessionId === getSessionId())) reloadTabData.entries = reloadTabData.entries.filter((e) => e.sessionId !== getSessionId());
					reloadTabData.entries.push({
						sessionId: getSessionId(),
						timestamp: Date.now(),
						volume,
						time: !isNaN(time) && time > reloadTabVideoTimeThreshold ? time : null
					});
					await reloadTabStore.setData(reloadTabData);
				}
				return win.location.replace(url);
			}
			win.location.reload();
		} catch (err) {
			loggers.misc.error("Couldn't save video time and volume before reloading tab:", err);
			win.location.reload();
		}
	}
	/** Sends a broadcast packet to all open sessions to trigger a reload in all of them, including this one by default. */
	async function reloadAllTabs(reloadSelf = true, toTxIDs) {
		loggers.misc.info(`Emitting broadcast to reload ${toTxIDs && toTxIDs.length > 0 ? `${toTxIDs.length} ${(0, _sv443_network_coreutils.autoPlural)("tab", toTxIDs)}` : "all tabs"}${reloadSelf ? ", then self-reloading" : ""}.`);
		emitBroadcast({ type: "reloadTabs" }, toTxIDs);
		return reloadSelf ? await (async () => {
			await (0, _sv443_network_coreutils.pauseFor)(30);
			return await reloadTab();
		})() : void 0;
	}
	/** Scrolls to the currently playing queue item in the queue once it's available */
	function scrollToCurrentSongInQueue(evt) {
		addSelectorListener("sidePanel", "ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]", { listener(activeItem) {
			activeItem.scrollIntoView({
				behavior: evt?.shiftKey ? "instant" : "smooth",
				block: evt?.ctrlKey || evt?.altKey ? "start" : "center",
				inline: "center"
			});
			loggers.misc.log("Scrolled to active song in queue:", activeItem);
		} });
	}
	/** Makes the {@linkcode value} over- & underflow so it is always in a certain range */
	function overflowVal(value, minOrMax, max) {
		const min = typeof max === "number" ? minOrMax : 0;
		max = typeof max === "number" ? max : minOrMax;
		if (min > max) throw new RangeError("Parameter \"min\" can't be bigger than \"max\"");
		if (isNaN(value) || isNaN(min) || isNaN(max) || !isFinite(value) || !isFinite(min) || !isFinite(max)) return NaN;
		if (value >= min && value <= max) return value;
		const range = max - min + 1;
		return ((value - min) % range + range) % range + min;
	}
	/** Transforms an object's own properties into getters that return the original values. */
	function getterifyObj(obj) {
		const newObj = {};
		for (const key in obj) Object.defineProperty(newObj, key, {
			get: () => obj[key],
			enumerable: true,
			configurable: true
		});
		return newObj;
	}
	/** Slices digits off the beginning of the given number {@linkcode n} */
	function sliceNum(n, count) {
		return n % 10 ** (String(n).length - count);
	}
	var verSessions;
	/** Counts the number of launched sessions per userscript version and returns the current count, to enable time-based features like the "new feature" adornment icon */
	async function initVersionSessionCounter() {
		verSessions = JSON.parse(await GM.getValue("bytm-version-session-counter", "{}"));
		if (typeof verSessions !== "object" || verSessions === null) verSessions = {};
		if (typeof verSessions?.[scriptInfo$1.version] !== "object" || typeof verSessions?.[scriptInfo$1.version]?.count !== "number") verSessions[scriptInfo$1.version] = { count: 1 };
		else verSessions[scriptInfo$1.version].count++;
		await GM.setValue("bytm-version-session-counter", JSON.stringify(verSessions));
		return verSessions[scriptInfo$1.version].count;
	}
	/** Returns the number of sessions for the given version, or 0 if the version is not found in the session counter for whatever reason */
	function getVersionSessionCount(version = scriptInfo$1.version) {
		if (!verSessions) throw new Error("Version session counter not initialized yet, call initVersionSessionCounter() first");
		if (typeof verSessions[version] !== "object" || typeof verSessions[version].count !== "number") return 0;
		return verSessions[version].count;
	}
	/**
	* Returns the URL of a resource by its name, as defined in `assets/resources.json`, from the CDN the script was built for.  
	* Tries to fall back to a base64-encoded data: URI in GM resources if the CDN resource was not found.  
	* @param name The name / key of the resource as defined in `assets/resources.json` - you can use `as "_"` to make TypeScript shut up if the name can not be typed as `ResourceKey`
	* @param uncached Set to true to always fetch from the CDN URL instead of the GM resource cache
	*/
	async function getResourceUrl(name) {
		const resObjOrStr = resources_default.resources?.[name];
		if (typeof resObjOrStr === "object" || typeof resObjOrStr === "string") {
			const pathName = typeof resObjOrStr === "object" && "path" in resObjOrStr ? resObjOrStr?.path : resObjOrStr;
			const ghRef = typeof resObjOrStr === "object" && "ref" in resObjOrStr ? resObjOrStr?.ref : buildNumber$1;
			if (pathName) return pathName.startsWith("http") ? pathName : (() => {
				let path = pathName;
				if (path.startsWith("/")) path = path.slice(1);
				else path = `assets/${path}`;
				switch (assetSource) {
					case "jsdelivr": return `https://cdn.jsdelivr.net/gh/${repo}@${ghRef}/${path}`;
					case "github": return `https://raw.githubusercontent.com/${repo}/${ghRef}/${path}`;
					case "local": return `http://localhost:${devServerPort}/${path}`;
				}
			})();
		}
		loggers.misc.warn(`Couldn't get blob URL nor external URL for the resource '${name}', attempting to use base64-encoded data: URI fallback`);
		return await GM.getResourceUrl(name, false);
	}
	/** Collection of remote fetch attempts per resource, for inclusion in the performance report. */
	var resourceFetches = /* @__PURE__ */ new Map();
	function logResourceFetch(key) {
		resourceFetches.set(key, [...resourceFetches.get(key) ?? [], millis()]);
	}
	/** Max age for the resource cache, after its last modification, in milliseconds */
	var resourceCacheTTL = 1e3 * 60 * 60 * 24 * 7;
	var resourceCacheKey = scriptInfo$1.version;
	/** Cache for resources fetched via {@linkcode resourceAsString()} */
	var resourceCacheStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-resource-cache",
		formatVersion: 0,
		engine: new _sv443_network_userutils.GMStorageEngine(),
		compressionFormat: compressionFormat$1,
		defaultData: {
			resources: {},
			created: Date.now(),
			cacheKey: resourceCacheKey
		},
		nanoEmitterOptions: {
			publicEmit: false,
			catchUpEvents: ["loadData"]
		}
	});
	/** Resources with these prefixes are cached in the resource cache */
	var cachedResourcePrefixes = [
		"doc-",
		"icon-",
		"img-",
		"style-",
		"trans-"
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
		return val !== void 0 && val !== null && val.length > 0;
	}
	function resourceCacheGet(key) {
		return resourceCacheStore.getData().resources[key] ?? null;
	}
	async function resourceCacheSet(key, val) {
		const data = resourceCacheStore.getData();
		data.resources[key] = val;
		return await resourceCacheStore.setData(data);
	}
	/**
	* Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property.  
	* Caches the resulting string if the resource key starts with any item in {@linkcode cachedResourcePrefixes}
	*/
	async function resourceAsString(resourceKey) {
		if (typeof isCompressionSupported === "undefined") await compressionSupported();
		if (Date.now() - resourceCacheStore.getData().created > resourceCacheTTL) await resourceCacheStore.saveDefaultData();
		else if (await resourceCacheHas(resourceKey)) return resourceCacheGet(resourceKey);
		const resourceUrl = await getResourceUrl(resourceKey);
		try {
			if (!resourceUrl) throw new Error(`Couldn't find URL for resource '${resourceKey}'`);
			logResourceFetch(resourceKey);
			const res = await (0, _sv443_network_coreutils.fetchAdvanced)(resourceUrl);
			if (!res.ok) throw new Error(`Couldn't fetch resource '${resourceKey}' at URL '${resourceUrl}' with status ${res.status} (${res.statusText})`);
			const str = await res.text();
			if (cachedResourcePrefixes.some((prefix) => resourceKey.startsWith(prefix)) && !await resourceCacheHas(resourceKey)) await resourceCacheSet(resourceKey, str);
			return str;
		} catch (err) {
			loggers.misc.error(`Couldn't fetch resource '${resourceKey}' as string from URL '${resourceUrl}' due to an error:`, err);
			return null;
		}
	}
	/**
	* Resolves the preferred locale code, given the browser's language settings, as long as it is supported by the userscript directly or via the `altLocales` prop in `locales.json`  
	* Prioritizes any supported value of `navigator.language`, then `navigator.languages`, then goes over them again, trimming off the part after the hyphen, then falls back to `"en-US"`
	*/
	function getPreferredLocale() {
		/** Trimmed & case insensitive string equality check. */
		const sanEq = (str1, str2) => str1.trim().toLowerCase() === str2.trim().toLowerCase();
		const allNavLangs = [...new Set([navigator.language, ...navigator.languages])].map((v) => v.replace(/_/g, "-"));
		for (const navLang of allNavLangs) {
			const resolvedLoc = Object.entries(locales_default).find(([key, { altLocales }]) => sanEq(key, navLang) || altLocales.find((altLoc) => sanEq(altLoc, navLang)))?.[0];
			if (resolvedLoc) return resolvedLoc.trim();
			const navLangTrimmed = navLang.split("-")[0];
			const resolvedFallbackLang = Object.entries(locales_default).find(([key, { altLocales }]) => sanEq(key.split("-")[0], navLangTrimmed) || altLocales.find((al) => sanEq(al.split("-")[0], navLangTrimmed)))?.[0];
			if (resolvedFallbackLang) return resolvedFallbackLang.trim();
		}
		return "en-US";
	}
	/**
	* Parses a markdown string using marked and turns it into an HTML string with default settings.  
	* @param sanitize Sanitizes against XSS by default using DOMPurify in {@linkcode sanitizeHtml()} - set to false to disable.
	*/
	async function parseMarkdown(mdString, sanitize = true) {
		const mdHtml = await marked.marked.parse(mdString, {
			async: true,
			breaks: true,
			gfm: true,
			silent: true
		});
		return sanitize ? sanitizeHtml(mdHtml) : mdHtml;
	}
	/** Returns the content of the changelog markdown file */
	async function getChangelogMd() {
		const clRes = await (0, _sv443_network_coreutils.fetchAdvanced)(changelogUrl);
		loggers.misc.log("Fetched changelog:", clRes);
		return await clRes.text();
	}
	/** Returns the changelog as HTML with a details element for each version */
	async function getChangelogHtmlWithDetails() {
		try {
			let changelogHtml = await parseMarkdown(await getChangelogMd(), false);
			const getVerId = (verStr) => verStr.trim().replace(/[._#\s-]/g, "");
			changelogHtml = changelogHtml.replace(/<div\s+class="split">\s?<\/div>(\s+)?\n?(\s+)?<br(\s\/)?>/gm, "</details>\n<br>\n<details class=\"bytm-changelog-version-details\">");
			const h2Matches = Array.from(changelogHtml.matchAll(/<h2(\s+id=".+")?>([\d\w\s.]+)<\/h2>/gm));
			for (const [fullMatch, , verStr] of h2Matches) changelogHtml = changelogHtml.replace(fullMatch, `<summary tab-index="0"><h2 id="${getVerId(verStr)}" role="subheading" aria-level="1">${verStr}</h2></summary>`);
			changelogHtml = `<details class="bytm-changelog-version-details">${changelogHtml}</details>`;
			return sanitizeHtml(changelogHtml);
		} catch (err) {
			loggers.misc.error("Couldn't fetch or parse changelog:", err);
			return `Error while preparing changelog: ${err}`;
		}
	}
	//#endregion
	//#region src/components/toast.ts
	/** Max amount of seconds a toast can be shown for */
	var maxToastDuration = 15e3;
	/** Queue of future toasts to be shown */
	var toastQueue = [];
	/** Whether a toast is currently being shown */
	var showingToast = false;
	/** Timeout ID for the currently shown toast */
	var timeout;
	/**
	* Shows a toast message with an icon.  
	* @returns The toast element if it could be immediately shown, otherwise `void` (like when it was queued to be shown later)
	*/
	async function showIconToast({ duration, position = "tr", iconPos = "left", ...rest }) {
		if (typeof duration !== "number" || isNaN(duration)) duration = getFeature("toastDuration") * 1e3;
		if (duration <= 0) return loggers.dialog.info("Toast duration is <= 0, so it won't be shown");
		if (showingToast) return void toastQueue.push(() => showIconToast({
			duration,
			position,
			iconPos,
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
		showingToast = false;
		const elem = await showToast({
			duration,
			position,
			element: toastWrapper,
			title: "message" in rest ? rest.message : rest.title,
			onClick: rest.onClick
		});
		if (toastQueue.length > 0) return new Promise((resolve) => {
			elem?.addEventListener("transitionend", async () => {
				const nextToast = toastQueue.shift();
				showingToast = false;
				return resolve(void await nextToast());
			}, { once: true });
		});
		else {
			showingToast = false;
			return elem;
		}
	}
	/** Shows a toast message or element in the specified position (top right corner by default) and uses the default timeout from the config option `toastDuration` */
	async function showToast(arg) {
		const props = typeof arg === "string" ? {
			message: arg,
			duration: getFeature("toastDuration") * 1e3
		} : arg;
		const { duration: durationMs = getFeature("toastDuration") * 1e3, onClick, position = "tr", ...rest } = props;
		if (durationMs <= 0) return loggers.dialog.info("Toast duration is <= 0, so it won't be shown");
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
		toastElem.addEventListener("click", async (e) => {
			onClick?.(e);
			await closeToast();
		}, { once: true });
		if ("message" in rest) toastElem.title = toastElem.ariaLabel = toastElem.textContent = rest.message;
		else {
			toastElem.appendChild(rest.element);
			toastElem.title = toastElem.ariaLabel = rest.title;
		}
		document.body.appendChild(toastElem);
		(0, _sv443_network_coreutils.pauseFor)(100).then(() => {
			toastElem.classList.add("visible");
			if (durationMs < Number.POSITIVE_INFINITY && durationMs > 0) {
				timeout && clearTimeout(timeout);
				timeout = setTimeout(closeToast, (0, _sv443_network_coreutils.clamp)(durationMs, 250, maxToastDuration));
			}
		});
		if (toastQueue.length > 0) return new Promise((resolve) => {
			toastElem?.addEventListener("transitionend", async () => {
				const nextToast = toastQueue.shift();
				showingToast = false;
				return resolve(void await nextToast());
			}, { once: true });
		});
		else {
			showingToast = false;
			return toastElem;
		}
	}
	/** Closes the currently open toast */
	async function closeToast() {
		if (timeout) {
			clearTimeout(timeout);
			timeout = void 0;
		}
		const toastEls = document.querySelectorAll("#bytm-toast");
		if (toastEls.length === 0) return;
		await Promise.allSettled(Array.from(toastEls).map(async (toastEl) => {
			toastEl.addEventListener("transitionend", async () => toastEl.remove(), { once: true });
			toastEl.classList.remove("visible");
		}));
	}
	//#endregion
	//#region src/utils/logging.ts
	var showErrToast = (0, _sv443_network_coreutils.debounce)((errName, ...args) => showIconToast({
		message: t("generic_error_toast_encountered_error_type", errName),
		subtitle: t("generic_error_toast_click_for_details"),
		icon: "icon-error",
		iconFill: "var(--bytm-error-col)",
		onClick: () => getErrorDialog(errName, Array.isArray(args) ? args : []).open()
	}), 400);
	var loggerOpts = { onError(...args) {
		if (getFeature("showToastOnGenericError")) showErrToast(args.find((a) => a instanceof Error)?.name ?? t("error"), ...args);
	} };
	/** Pre-instantiated Logger instances, one per category. */
	var loggers = Object.entries(loggerCategoryMapping).reduce((a, [catId, catName]) => ({
		...a,
		[catId]: new Logger(catName, loggerOpts)
	}), {});
	/** Returns a string representation of all logs across all Logger instances, formatted for downloading as a file. */
	var serializeLogs = Logger.serializeLogs.bind(Logger);
	/** Sets the current log level across all Logger instances. 0 = Debug, 1 = Info */
	function setLogLevel(level) {
		setGlobalProp("logLevel", level);
		if (Logger.curLogLevel !== level) loggers.misc.log("Set the log level to", LogLevel[level]);
		Logger.curLogLevel = level;
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
			renderFooter(dlg) {
				const footer = document.createElement("div");
				footer.classList.add("bytm-dialog-footer", "align-right");
				const dlLogsBtn = document.createElement("button");
				dlLogsBtn.classList.add("bytm-btn");
				dlLogsBtn.textContent = dlLogsBtn.ariaLabel = t("download_log_file");
				onInteraction(dlLogsBtn, () => {
					downloadFile(`bytm-log-${(/* @__PURE__ */ new Date()).toISOString()}.log`, Logger.serializeLogs(), "text/plain");
				});
				const closeBtn = document.createElement("button");
				closeBtn.classList.add("bytm-btn");
				closeBtn.textContent = t("close");
				closeBtn.ariaLabel = t("close_menu_tooltip");
				onInteraction(closeBtn, () => dlg.close());
				footer.appendChild(dlLogsBtn);
				footer.appendChild(closeBtn);
				return footer;
			},
			body: `\
${args.length > 0 ? args.join(" ") : t("generic_error_dialog_message")}  
  
${t("generic_error_dialog_open_console_note", package_default.bugs.url)}`
		});
	}
	/** Error class for errors thrown by the lyrics fetching functions - extends {@linkcode DatedError} */
	var LyricsError = class extends _sv443_network_coreutils.DatedError {
		constructor(message, opts) {
			super(message, opts);
			this.name = "LyricsError";
		}
	};
	/** Error class for errors thrown by the plugin interface - extends {@linkcode DatedError} */
	var PluginError = class extends _sv443_network_coreutils.DatedError {
		constructor(message, opts) {
			super(message, opts);
			this.name = "PluginError";
		}
	};
	var data_default = {
		formatVersion: 0,
		domains: [{
			"id": "ytm",
			"name": "YouTube Music",
			"nameShort": "YT Music",
			"abbr": "YTM",
			"hostnames": ["music.youtube.com"]
		}, {
			"id": "yt",
			"name": "YouTube",
			"nameShort": "YT",
			"abbr": "YT",
			"hostnames": [
				"www.youtube.com",
				"youtube.com",
				"youtu.be",
				"m.youtube.com",
				"youtube-nocookie.com",
				"www.youtube-nocookie.com"
			]
		}],
		alerts: [],
		selectors: {
			"generic": {
				"app": {
					"yt": "ytd-app",
					"ytm": "ytmusic-app"
				},
				"video": {
					"yt": "ytd-player #shorts-player video, ytd-player #movie_player video",
					"ytm": "ytmusic-player video"
				},
				"pageHeaderContainer_sub_ytAppHeader": { "yt": "#channel-header-container, #page-header, #page-header-container" },
				"browseResponseHeader_sub_browseResponse": { "ytm": "ytmusic-browse-response #header.ytmusic-browse-response" }
			},
			"watchPage": {
				"channelName": {
					"yt": "/* regular: */ #owner ytd-channel-name yt-formatted-string a, /* collab vids: */ #owner ytd-video-owner-renderer yt-attributed-string a",
					"ytm": "ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]"
				},
				"votesRenderer": {
					"yt": "ytd-watch-metadata segmented-like-dislike-button-view-model",
					"ytm": ".middle-controls-buttons ytmusic-like-button-renderer"
				},
				"votesRendererShorts": { "yt": "reel-action-bar-view-model" },
				"likeBtn": {
					"yt": "#actions ytd-menu-renderer like-button-view-model button",
					"ytm": "ytmusic-like-button-renderer #button-shape-like"
				},
				"likeBtnShorts": { "yt": "like-button-view-model button" },
				"dislikeBtn": { "ytm": "ytmusic-like-button-renderer #button-shape-dislike" },
				"dislikeBtnShorts": { "yt": "dislike-button-view-model" },
				"likeBtnAlternate": {
					"yt": "like-button-view-model button",
					"ytm": "#button-shape-like button"
				},
				"dislikeBtnAlternate": {
					"yt": "dislike-button-view-model button",
					"ytm": "#button-shape-dislike button"
				},
				"progressBar": {
					"yt": ".ytp-chrome-bottom div.ytp-progress-bar[role=\"slider\"]",
					"ytm": "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar"
				},
				"videoPlayer": { "yt": "#movie_player" },
				"songImg": { "ytm": "ytmusic-player #song-image" }
			},
			"songLists": {
				"all": { "ytm": "ytmusic-playlist-shelf-renderer #contents, ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ALBUM\"] ytmusic-shelf-renderer #contents, ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ARTIST\"] ytmusic-shelf-renderer #contents, ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_PLAYLIST\"] ytmusic-shelf-renderer #contents ytmusic-section-list-renderer[page-type=\"MUSIC_PAGE_TYPE_ALBUM\"] ytmusic-shelf-renderer #contents, ytmusic-section-list-renderer[page-type=\"MUSIC_PAGE_TYPE_ARTIST\"] ytmusic-shelf-renderer #contents, ytmusic-section-list-renderer[page-type=\"MUSIC_PAGE_TYPE_PLAYLIST\"] ytmusic-shelf-renderer #contents" },
				"currentQueueContainer": { "ytm": "ytmusic-player-queue #contents" },
				"currentQueueSongAndArtistNames": { "ytm": "yt-formatted-string" },
				"autoplayQueueContainer": { "ytm": "ytmusic-player-queue #automix-contents" },
				"playlistPageArtistName": { "ytm": "ytmusic-detail-header-renderer .metadata .subtitle-container yt-formatted-string a" },
				"playlistPageArtistNameAlternate": { "ytm": "ytmusic-responsive-header-renderer .strapline a.yt-formatted-string[href]" },
				"genericListArtistName": { "ytm": ".secondary-flex-columns yt-formatted-string:first-child a" },
				"genericListSongName": { "ytm": ".title-column yt-formatted-string a" },
				"queueItem": { "ytm": "ytmusic-player-queue-item" },
				"queueItemThumbnailImg": { "ytm": "yt-img-shadow img" },
				"queueItemPopoverContainer": { "ytm": "ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown" },
				"queueItemPopoverRemoveFromListBtn": { "ytm": "tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)" },
				"queueItemPopoverRemoveFromListBtnOptional": { "ytm": "tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(4)" },
				"queueItemDotsBtn": { "ytm": "ytmusic-menu-renderer yt-button-shape[id=\"button-shape\"] button" },
				"queueMultiSelect": { "ytm": "ytmusic-dialog[dialog-type=\"multiSelectMenuBar\"]" },
				"allCurrentQueueItems_global": { "ytm": "#contents.ytmusic-player-queue > ytmusic-player-queue-item" },
				"allCurrentQueueItemsSongInfo_global": { "ytm": ".song-info" },
				"allGenericListItems_sub_listContainer": { "ytm": "ytmusic-responsive-list-item-renderer" }
			},
			"volume": {
				"volSlider_sub_playerBarRightControls": { "ytm": "tp-yt-paper-slider#volume-slider" },
				"volSliderExpanded_sub_playerBarRightControls": { "ytm": "ytmusic-player-expanding-menu tp-yt-paper-slider#expand-volume-slider" },
				"volSliderContainer_sub_playerBarRightControls": { "ytm": ".bytm-vol-slider-cont" },
				"volSliderExpandedContainer_sub_playerBarRightControls": { "ytm": "ytmusic-player-expanding-menu .bytm-vol-slider-cont" }
			},
			"integration": { "themeSongPlayerBarControls": { "ytm": "#ts-panel-container" } },
			"autoLike": {
				"titleContainer": {
					"yt": "ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, yt-page-header-view-model yt-dynamic-text-view-model, .ytPageHeaderViewModelHeadlineInfo > yt-dynamic-text-view-model",
					"ytm": "ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, ytmusic-immersive-header-renderer .ytmusic-immersive-header-renderer yt-formatted-string.title"
				},
				"titleContainerChannelName": {
					"yt": "yt-formatted-string, h1 > .yt-core-attributed-string, h1 > .ytAttributedStringHost, h1 > span",
					"ytm": "yt-formatted-string, span.yt-core-attributed-string"
				},
				"titleContainerChannelNameAlternate": { "ytm": "ytmusic-visual-header-renderer .content-container h2 yt-formatted-string" },
				"titleContainerButtonsContainer": { "yt": "#inner-header-container #buttons, yt-flexible-actions-view-model" },
				"titleContainerButtonsContainerLastButton": { "ytm": "ytmusic-subscribe-button-renderer" },
				"titleContainerButtonsContainerShareButton": { "ytm": "ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type" },
				"titleContainerOtherButtons_sub_ytAppHeader": { "yt": "#channel-header-container #other-buttons, yt-flexible-actions-view-model .yt-flexible-actions-view-model-wiz__action, yt-flexible-actions-view-model .ytFlexibleActionsViewModelAction" },
				"channelName_global": { "ytm": ".ytmusic-immersive-header-renderer > h1 > yt-formatted-string" },
				"channelNameFallback_global": { "ytm": "ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]" }
			},
			"observer": {
				"bytmDialogContainer": "#bytm-dialog-container",
				"browseResponse": { "ytm": "ytmusic-browse-response" },
				"searchPage": { "ytm": "ytmusic-search-page" },
				"navBar": { "ytm": "ytmusic-nav-bar" },
				"mainPanel": { "ytm": "ytmusic-player-page #main-panel" },
				"sideBar": { "ytm": "ytmusic-app-layout tp-yt-app-drawer" },
				"sidePanel": { "ytm": "#side-panel" },
				"playerBar": { "ytm": "ytmusic-app-layout ytmusic-player-bar.ytmusic-app" },
				"playerBarInfo": { "ytm": "ytmusic-app-layout ytmusic-player-bar.ytmusic-app .middle-controls .content-info-wrapper" },
				"playerBarMiddleButtons": { "ytm": ".middle-controls .middle-controls-buttons" },
				"playerBarRightControls": { "ytm": "#right-controls" },
				"popupContainer": { "ytm": "ytmusic-app ytmusic-popup-container" },
				"ytGuide": { "yt": "#content tp-yt-app-drawer#guide #guide-inner-content" },
				"ytdBrowse": { "yt": "ytd-app ytd-page-manager ytd-browse" },
				"ytAppHeader": { "yt": "#header ytd-app-header, #header ytd-tabbed-page-header" },
				"ytWatchFlexy": { "yt": "ytd-app ytd-watch-flexy" },
				"ytWatchMetadata": { "yt": "#columns #primary-inner ytd-watch-metadata" },
				"ytMasthead": { "yt": "#content ytd-masthead#masthead" }
			}
		}
	};
	//#endregion
	//#region src/utils/data.ts
	/** URL to the remote data JSON file on a CDN. */
	var remoteDataUrl = `https://raw.githubusercontent.com/${repo}/refs/heads/${branch$1}/assets/data.json`;
	var staticData;
	/** Loads the static data by fetching the remote JSON or falling back to the bundled JSON if the fetch fails. */
	async function getStaticData() {
		try {
			if (staticData) return staticData;
			loggers.data.info("Development mode is active. Initializing with static data.json:", data_default, LogLevel.Info);
			return staticData = data_default;
		} catch (e) {
			loggers.data.warn(`Failed to fetch remote static data from '${remoteDataUrl}' due to a recoverable error:`, e);
			loggers.data.info("Falling back to the bundled static data:", getterifyObj(data_default));
			return staticData = data_default;
		}
	}
	/** Returns the bundled static data JSON. Mainly used for synchronous access when the latest data isn't required. */
	function getDefaultStaticData() {
		return data_default;
	}
	/**
	* Returns the selector with the given ID.  
	* By default, the function throws an error if the given selector doesn't exist, or doesn't have a value for the current domain.
	*/
	function getSelector(group, id, throws) {
		const dom = getDomain();
		if (throws !== false) try {
			if (typeof staticData?.selectors !== "object") throw new _sv443_network_coreutils.DatedError("Static data hasn't been fetched yet.");
			const sel = staticData.selectors?.[group]?.[id];
			if (!["string", "object"].includes(typeof sel)) throw new _sv443_network_coreutils.DatedError(`Selector '${group}.${String(id)}' doesn't exist or is neither a string nor an object.`);
			if (typeof sel === "object" && dom !== null && !(dom in sel)) throw new _sv443_network_coreutils.DatedError(`Selector '${group}.${String(id)}' doesn't contain a value for the current domain '${dom}'.`);
			return typeof sel === "string" ? sel : sel[dom];
		} catch (e) {
			loggers.data.error(`Couldn't get selector '${group}.${String(id)}' due to error:`, e);
			throw e;
		}
		const sel = staticData?.selectors?.[group]?.[id];
		return typeof sel === "string" ? sel : sel?.[dom];
	}
	var alertsStore = new _sv443_network_coreutils.DataStore({
		id: "bytm-alerts",
		defaultData: { dismissed: [] },
		formatVersion: 0,
		engine: new _sv443_network_userutils.GMStorageEngine(),
		memoryCache: false,
		compressionFormat: null,
		nanoEmitterOptions: {
			publicEmit: false,
			catchUpEvents: ["loadData"]
		}
	});
	/** Checks if there are active alerts and shows a prompt for each of them. */
	async function checkActiveAlerts(alertMode, { alerts }, alertsData) {
		const activeAlerts = alerts.filter((alert) => isAlertActive(alert, alertsData));
		for (const alert of activeAlerts) {
			if (alertMode === "importantOnly" && !alert.important) continue;
			const dlg = createAlertDialog(alert);
			dlg.open();
			await dlg.once("close");
			alertsData = await alertsStore.loadData();
			await alertsStore.setData({ dismissed: [alert.id, ...alertsData.dismissed] });
		}
	}
	/** Checks whether the given alert is active based on its constraints and whether it was already dismissed. */
	function isAlertActive(alert, alertsData) {
		if (alertsData.dismissed.includes(alert.id)) return false;
		if (alert.domains.length === 0) return false;
		if (!alert.domains.includes(getDomain())) return false;
		if ("version" in alert && alert.version !== scriptInfo$1.version) return false;
		if ("versionMin" in alert && alert.versionMin && (0, compare_versions.compareVersions)(alert.versionMin, scriptInfo$1.version) > 0) return false;
		if ("versionMax" in alert && alert.versionMax && (0, compare_versions.compareVersions)(alert.versionMax, scriptInfo$1.version) < 0) return false;
		const now = /* @__PURE__ */ new Date();
		if (alert.dateMin && new Date(alert.dateMin) > now) return false;
		if (alert.dateMax && new Date(alert.dateMax) < now) return false;
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
				closeBtn.classList.add("bytm-btn");
				closeBtn.type = "button";
				closeBtn.textContent = closeBtn.ariaLabel = t("prompt_dismiss");
				onInteraction(closeBtn, () => {
					const titleCloseBtn = document.querySelector("#bytm-md-static-data-alert-dialog .bytm-dialog-close");
					if (titleCloseBtn) titleCloseBtn.click();
					else loggers.data.warn("Couldn't find the alert dialog's close button to trigger a click on it, closing the dialog won't work properly:", titleCloseBtn);
				});
				footer.appendChild(closeBtn);
				return footer;
			},
			body: resolveTranslatable(alert.message),
			sanitizeBody: true,
			modifyBodyElements(_bw, mdCont) {
				mdCont.ariaLive = "polite";
				mdCont.ariaAtomic = "true";
			}
		});
	}
	/** Initializes the static data by fetching it and performing necessary checks and actions. */
	async function initStaticData() {
		const [staticData, alertsData] = await Promise.all([getStaticData(), alertsStore.loadData()]);
		const alertMode = getFeature("globalAlertMode", "importantOnly");
		return await Promise.allSettled([...alertMode !== "never" ? [checkActiveAlerts(alertMode, staticData, alertsData)] : []]);
	}
	//#endregion
	//#region src/utils/dom.ts
	/** Returns the video element selector string based on the current domain */
	function getVideoSelector() {
		return getSelector("generic", "video");
	}
	/** Returns the video element based on the current domain */
	function getVideoElement() {
		return document.querySelector(getVideoSelector());
	}
	var vidElemReady = false;
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
			const resolveWithVal = (time) => res(time && !isNaN(time) ? Number(precision <= 0 ? Math.floor(time) : time.toFixed(precision)) : null);
			try {
				if (getDomain() === "ytm") {
					const vidElem = getVideoElement();
					if (vidElem && vidElem.readyState > 0) return resolveWithVal(vidElem.currentTime);
					addSelectorListener("playerBar", getSelector("watchPage", "progressBar"), { listener: (pbEl) => resolveWithVal(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null) });
				} else if (getDomain() === "yt") {
					const vidElem = getVideoElement();
					if (vidElem && vidElem.readyState > 0) return resolveWithVal(vidElem.currentTime);
					ytForceShowVideoTime();
					const pbSelector = getSelector("watchPage", "progressBar");
					let videoTime = -1;
					const mut = new MutationObserver(() => {
						videoTime = Number(document.querySelector(pbSelector).getAttribute("aria-valuenow"));
					});
					const observe = (progElem) => {
						mut.observe(progElem, {
							attributes: true,
							attributeFilter: ["aria-valuenow"]
						});
						if (videoTime >= 0 && !isNaN(videoTime)) {
							resolveWithVal(Math.floor(videoTime));
							mut.disconnect();
						} else setTimeout(() => {
							resolveWithVal(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
							mut.disconnect();
						}, 500);
					};
					addSelectorListener("body", pbSelector, { listener: observe });
				}
			} catch (err) {
				loggers.layout.error("Couldn't get video time due to error:", err);
				res(null);
			}
		});
	}
	/**
	* Sends events that force the video controls to become visible for about 3 seconds.  
	* This only works once (for some reason), then the page needs to be reloaded!
	*/
	function ytForceShowVideoTime() {
		const player = document.querySelector(getSelector("watchPage", "videoPlayer"));
		if (!player) return false;
		const defaultProps = {
			view: (0, _sv443_network_userutils.getUnsafeWindow)(),
			bubbles: true,
			cancelable: false
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
			movementY: 0
		}));
		return true;
	}
	/**
	* Waits for the DOM to be loaded and the video element to be in its readyState 4 or until the "canplay" event is emitted and then returns it.  
	* Could take a very long time to resolve if the `/watch` page isn't open.  
	* Resolves immediately if the video element is already ready.
	*/
	function waitVideoElementReady() {
		return new Promise(async (res, rej) => {
			try {
				if (!(0, _sv443_network_userutils.isDomLoaded)()) await (0, _sv443_network_userutils.onDomLoad)();
				const vidEl = getVideoElement();
				if (vidEl && (vidEl?.readyState ?? 0) === 4) return res(vidEl);
				if (!location.pathname.startsWith("/watch")) await siteEvents.once("watchIdChanged");
				addSelectorListener("body", getVideoSelector(), { listener(vidElem) {
					if (vidElem.readyState === 4) res(vidElem);
					else vidElem.addEventListener("canplay", () => res(vidElem), { once: true });
				} });
			} catch (err) {
				rej(err);
			}
		});
	}
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
				btnRenderer = document.querySelector(getSelector("watchPage", "votesRenderer")) ?? void 0;
				likeBtn = btnRenderer?.querySelector(getSelector("watchPage", "likeBtnAlternate")) ?? void 0;
				dislikeBtn = btnRenderer?.querySelector(getSelector("watchPage", "dislikeBtnAlternate")) ?? void 0;
				const likeStateRaw = btnRenderer?.getAttribute("like-status")?.toUpperCase();
				likeState = [
					"LIKE",
					"DISLIKE",
					"INDIFFERENT"
				].includes(likeStateRaw ?? "") ? likeStateRaw : "INDIFFERENT";
				break;
			}
			case "yt": {
				btnRenderer = document.querySelector(getSelector("watchPage", "votesRenderer")) ?? void 0;
				likeBtn = btnRenderer?.querySelector(getSelector("watchPage", "likeBtnAlternate")) ?? void 0;
				dislikeBtn = btnRenderer?.querySelector(getSelector("watchPage", "dislikeBtnAlternate")) ?? void 0;
				if (likeBtn?.getAttribute("aria-pressed") === "true") likeState = "LIKE";
				else if (dislikeBtn?.getAttribute("aria-pressed") === "true") likeState = "DISLIKE";
				else if (likeBtn || dislikeBtn) likeState = "INDIFFERENT";
				if (!btnRenderer && !likeBtn && !dislikeBtn) {
					btnRenderer = document.querySelector(getSelector("watchPage", "votesRendererShorts")) ?? void 0;
					likeBtn = btnRenderer?.querySelector(getSelector("watchPage", "likeBtnShorts")) ?? void 0;
					dislikeBtn = btnRenderer?.querySelector(getSelector("watchPage", "dislikeBtnShorts")) ?? void 0;
				}
				const liked = likeBtn?.getAttribute("aria-pressed") === "true";
				const disliked = dislikeBtn?.getAttribute("aria-pressed") === "true";
				if (likeBtn && dislikeBtn) likeState = liked ? "LIKE" : disliked ? "DISLIKE" : "INDIFFERENT";
				break;
			}
		}
		return {
			likeBtn,
			dislikeBtn,
			btnRenderer,
			likeState
		};
	}
	/**
	* Adds a style element to the DOM at runtime.
	* @param css The CSS stylesheet to add
	* @param ref A reference string to identify the style element - defaults to a random 5-character string - has to be compatible with the HTML id attribute
	* @param transform A function to transform the CSS before adding it to the DOM
	*/
	async function addStyle(css, ref, transform = (c) => c) {
		if (!(0, _sv443_network_userutils.isDomLoaded)()) throw new Error("DOM has not finished loading yet");
		const elem = (0, _sv443_network_userutils.addGlobalStyle)(await transform(await (0, _sv443_network_coreutils.consumeStringGen)(css)));
		elem.classList.add("bytm-style");
		elem.id = `bytm-style-${ref ?? (0, _sv443_network_coreutils.randomId)(6, 36)}`;
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
		} catch (err) {
			loggers.layout.error(`Couldn't add style from resource "${key}":`, err);
			return false;
		}
	}
	/** Sets a global CSS variable on the &lt;document&gt; element with the name `--bytm-global-${name}` */
	function setGlobalCssVar(name, value) {
		document.documentElement.style.setProperty(`--bytm-global-${name.toLowerCase().trim()}`, String(value));
	}
	/** Sets multiple global CSS variables on the &lt;document&gt; element with the name `--bytm-global-${name}` */
	function setGlobalCssVars(vars) {
		for (const [name, value] of Object.entries(vars)) setGlobalCssVar(name, value);
	}
	/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
	function clearInner(element) {
		while (element.hasChildNodes()) clearNode(element.firstChild);
	}
	/** Removes all child nodes of an element recursively and also removes the element itself */
	function clearNode(element) {
		while (element.hasChildNodes()) clearNode(element.firstChild);
		element.parentNode.removeChild(element);
	}
	/**
	* Returns an identifier for the currently playing media type on YTM ("song" or "video").  
	* Only works on YTM and will throw if {@linkcode waitVideoElementReady} hasn't been awaited yet.  
	* On YT, it will always return "video".
	*/
	function getCurrentMediaType() {
		if (getDomain() === "yt") return "video";
		const songImgElem = document.querySelector(getSelector("watchPage", "songImg"));
		if (!songImgElem) throw new Error("Couldn't find the song image element. Use this function only after awaiting `waitVideoElementReady()`!");
		return window.getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
	}
	/** Copies the provided text to the clipboard and shows an error message for manual copying if the grant `GM.setClipboard` is not given. */
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
	var trustedTypesSupported = typeof window?.trustedTypes?.createPolicy === "function";
	var ttPolicy;
	var tempTargetAttrName = `data-tmp-target-${(0, _sv443_network_coreutils.randomId)(6, 36)}`;
	dompurify.default.addHook("beforeSanitizeAttributes", (node) => {
		if (node.tagName === "A") {
			if (!node.hasAttribute("target")) node.setAttribute("target", "_self");
			if (node.hasAttribute("target")) node.setAttribute(tempTargetAttrName, node.getAttribute("target"));
		}
	});
	dompurify.default.addHook("afterSanitizeAttributes", (node) => {
		if (node.tagName === "A" && node.hasAttribute(tempTargetAttrName)) {
			node.setAttribute("target", node.getAttribute(tempTargetAttrName));
			node.removeAttribute(tempTargetAttrName);
			if (node.getAttribute("target") === "_blank") node.setAttribute("rel", "noopener noreferrer");
		}
	});
	/**
	* Sanitizes the provided HTML string with DOMPurify, including enhanced support for Trusted Types and a[target="_blank"] links.  
	* By default, automatically returns a TrustedHTML object if the browser supports it.
	*/
	function sanitizeHtml(html, returnTrustedType = trustedTypesSupported) {
		return dompurify.default.sanitize(String(html), { RETURN_TRUSTED_TYPE: returnTrustedType });
	}
	/**
	* Sets innerHTML directly on Firefox and Safari, while on Chromium a [Trusted Types policy](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) is used to set the HTML.  
	* If no HTML string is given, the element's innerHTML will be set to an empty string.
	*/
	function setInnerHtml(element, html) {
		if (!html) html = "";
		if (!ttPolicy && trustedTypesSupported) ttPolicy = window.trustedTypes.createPolicy("bytm-sanitize-html", { createHTML: (html) => sanitizeHtml(html, true) });
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
		if (!target.insertAdjacentElement(position, element)) throw new Error(`Failed to transplant element at position "${position}"`);
		return element;
	}
	//#endregion
	//#region src/dialogs/pluginPermissions.ts
	var pluginPermsDialog = null;
	/** Creates and/or returns the plugin permissions dialog */
	async function getPluginPermissionsDialog(plugin) {
		return pluginPermsDialog ??= new BytmDialog({
			id: "plugin-perms",
			width: 450,
			height: 700,
			closeBtnEnabled: true,
			closeOnBgClick: false,
			closeOnEscPress: true,
			destroyOnClose: true,
			small: true,
			renderHeader,
			renderBody: (dlg) => renderBody(dlg, plugin),
			renderFooter: (dlg) => renderFooter(dlg, plugin)
		});
	}
	async function renderHeader() {
		const titleElem = document.createElement("h2");
		titleElem.id = "bytm-plugin-perms-title";
		titleElem.classList.add("bytm-dialog-title");
		titleElem.role = "heading";
		titleElem.ariaLevel = "1";
		titleElem.tabIndex = 0;
		titleElem.textContent = t("plugin_permissions_dialog.title");
		return titleElem;
	}
	async function renderBody(permDlg, plugin) {
		const pluginKey = typeof plugin === "string" ? plugin : getPluginKey(plugin);
		const regPl = getRegisteredPlugins().find(([key]) => key === pluginKey);
		const permsListCont = document.createElement("div");
		permsListCont.id = "bytm-plugin-perms-container";
		if (!regPl) {
			await showPrompt({
				type: "alert",
				message: t("plugin_error.plugin_not_registered", { pluginKey })
			});
			permDlg.once("open", () => permDlg.close());
			return permsListCont;
		}
		const { def } = regPl[1];
		const intents = parseBitSetEnumArray(defToIntentsBitSet(def), PluginIntent);
		const descriptionElem = document.createElement("div");
		descriptionElem.id = "bytm-plugin-perms-description";
		descriptionElem.textContent = descriptionElem.title = t("plugin_permissions_dialog.description", { pluginName: def.plugin.name });
		permsListCont.appendChild(descriptionElem);
		const hrElem = document.createElement("hr");
		hrElem.classList.add("bytm-hr");
		permsListCont.appendChild(hrElem);
		for (const intent of intents) {
			const itemEl = document.createElement("div");
			itemEl.classList.add("bytm-plugin-perms-item");
			itemEl.tabIndex = 0;
			itemEl.title = t(`plugin_intent_description.${PluginIntent[intent]}`) + `\n[Dev] value: ${intent} - name: ${PluginIntent[intent]}`;
			const toggleEl = await createToggleInput({
				id: `plugin-intent-${intent}`,
				initialValue: true,
				labelPos: "off",
				onChange: () => void 0
			});
			const nameEl = document.createElement("div");
			nameEl.classList.add("bytm-plugin-perms-item-name");
			nameEl.textContent = t(`plugin_intent_name.${PluginIntent[intent]}`);
			itemEl.appendChild(toggleEl);
			itemEl.appendChild(nameEl);
			permsListCont.appendChild(itemEl);
		}
		return permsListCont;
	}
	async function renderFooter(permDlg, plugin) {
		const pluginKey = typeof plugin === "string" ? plugin : getPluginKey(plugin);
		const footerEl = document.createElement("div");
		footerEl.id = "bytm-plugin-perms-footer";
		footerEl.classList.add("bytm-dialog-footer", "align-right");
		const regPl = getRegisteredPlugins().find(([key]) => key === pluginKey);
		if (!regPl) throw new _sv443_network_coreutils.DatedError(`Couldn't render plugin permissions dialog footer because plugin ${typeof plugin === "string" ? plugin : JSON.stringify(plugin)} isn't registered yet.`);
		const { def } = regPl[1];
		const requestedIntents = defToIntentsBitSet(def);
		const confirmBtn = document.createElement("button");
		confirmBtn.classList.add("bytm-btn");
		confirmBtn.textContent = t("prompt_confirm");
		confirmBtn.title = t("click_to_confirm_tooltip");
		confirmBtn.autofocus = true;
		onInteraction(confirmBtn, async () => {
			let grantedPerms = 0;
			for (const [, v] of Object.entries(PluginIntent)) {
				if (typeof v !== "number") continue;
				const checked = document.querySelector(`#bytm-toggle-plugin-intent-${v}`)?.checked ?? false;
				grantedPerms = grantedPerms | (checked ? v : 0);
			}
			const permStore = pluginPermissionsStore.getData();
			permStore[pluginKey] = [grantedPerms, requestedIntents];
			await pluginPermissionsStore.setData(permStore);
			loggers.plugin.log(`Updated permissions for plugin '${pluginKey}' - requested:`, requestedIntents, "- granted:", grantedPerms);
			permDlg.close();
		});
		footerEl.appendChild(confirmBtn);
		const cancelBtn = document.createElement("button");
		cancelBtn.classList.add("bytm-btn");
		cancelBtn.textContent = t("prompt_cancel");
		cancelBtn.title = t("click_to_cancel_tooltip");
		onInteraction(cancelBtn, () => permDlg.close());
		footerEl.appendChild(cancelBtn);
		return footerEl;
	}
	//#endregion
	//#region src/index.ts
	{
		const [styleGradient, gradientContBg] = (() => {
			switch (mode$1) {
				case "production": return ["background: rgb(165, 57, 36); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(165, 57, 36) 100%);", "rgb(165, 57, 36)"];
				case "development": return ["background: rgb(72, 66, 178); background: linear-gradient(90deg, rgb(38, 160, 172) 0%, rgb(33, 48, 158) 40%, rgb(72, 66, 178) 100%);", "rgb(72, 66, 178)"];
			}
		})();
		const styleCommon = "color: #fff; font-size: 1.3rem;";
		console.log(`\
%c${scriptInfo$1.name}%cv${scriptInfo$1.version}%c • ${scriptInfo$1.namespace}%c

Build #${buildNumber$1} (dev mode)

%cPowered by:
─ Lots of ambition and dedication
─ My song metadata API: https://api.sv443.net/geniurl
─ My core utility library: https://github.com/Sv443-Network/CoreUtils
─ My DOM utility library: https://github.com/Sv443-Network/UserUtils
─ This library for semver comparison: https://github.com/omichelsen/compare-versions
─ This TrustedTypes-compatible HTML sanitization library: https://github.com/cure53/DOMPurify
─ This markdown parser library: https://github.com/markedjs/marked
─ This tiny event listener library: https://github.com/ai/nanoevents
─ TypeScript and the tslib runtime: https://github.com/microsoft/TypeScript
─ The Cousine font: https://fonts.google.com/specimen/Cousine`, `${styleCommon} ${styleGradient} font-weight: bold; padding-left: 6px; padding-right: 6px;`, `${styleCommon} background-color: ${gradientContBg}; padding-left: 8px; padding-right: 8px;`, "color: #fff; font-size: 1.2rem;", "padding: initial; font-size: 0.9rem;", "padding: initial; font-size: 1rem;");
	}
	var initTimings = {
		_comments: [
			`This is a performance report generated by ${scriptInfo$1.name} (${package_default.homepage})`,
			"It shows the amount of time (in ms) it took to complete various stages of the initialization process.",
			"- The 'start' property is a 13-digit epoch timestamp representing the time at which the script started running.",
			"- The timings in the 'durations' property are generic measurements of how long certain phases are. These measurements do not start at the 'start' property timestamp.",
			"- The timings in the 'featureDurations' property are measurements of how long it took for each individual feature entrypoint to initialize, starting from the beginning of the feature initialization phase - also refer to 'featuresAllReady_deferred' in the 'durations' property."
		],
		meta: {
			version: scriptInfo$1.version,
			buildNumber: buildNumber$1,
			buildTime: new Date(buildTimestamp).toISOString(),
			mode: mode$1,
			domain: getDomain(),
			userAgent: navigator.userAgent,
			scriptHandler: GM.info?.scriptHandler ?? "unknown",
			scriptHandlerVersion: GM.info?.version ?? "unknown",
			injectInto: GM.info?.injectInto ?? null,
			isIncognito: GM.info?.isIncognito ?? null,
			isFirstPartyIsolation: GM.info?.isFirstPartyIsolation ?? null,
			sandboxMode: GM.info?.sandboxMode ?? null
		},
		durations: {},
		featureStart: 0,
		featureDurations: {},
		start: 0,
		sinceStart: {},
		resources: {}
	};
	/**
	* Starts a timer for measuring the duration of a specific phase of the initialization process.  
	* Returns a function that, when called, will stop the timer and save the duration in the `initTimings` object under the specified name.
	*/
	function measureInitDuration(name) {
		const start = Date.now();
		return () => {
			if (typeof initTimings.durations !== "object") initTimings.durations = {};
			initTimings.durations[name] = Date.now() - start;
		};
	}
	/** Stuff that needs to be called ASAP */
	function preInit() {
		try {
			initTimings.start = Date.now();
			if (["FireMonkey"].includes(GM.info?.scriptHandler ?? "")) return alert(`⚠️⚠️⚠️\nBetterYTM does not work when using ${GM.info?.scriptHandler ?? "(unknown)"} as the userscript manager extension and will be disabled.\nIt's highly recommended you use either ViolentMonkey, TamperMonkey or GreaseMonkey.\n⚠️⚠️⚠️`);
			setLogLevel(defaultLogLevel);
			initBroadcast();
			preInitInterface();
			preInitPlugins();
			initPermTestPlugin();
			if (getDomain() === "ytm") initBeforeUnloadHook();
			if (typeof rawConsts !== "object") loggers.init.error("rawConsts is not an object??????? (this doesn't actually break the script, but it's still funny it happened)");
			initTimings.sinceStart.preInitEnd = Date.now() - initTimings.start;
			init();
		} catch (err) {
			return loggers.init.error("Fatal pre-init error:", err);
		}
	}
	async function init() {
		try {
			const domain = getDomain();
			const endCfgDur = measureInitDuration("initConfig");
			const features = await initConfig();
			endCfgDur();
			setLogLevel(features.logLevel);
			const sesId = getSessionId();
			loggers.init.info("Session started with ID:", sesId === null ? "(Error: sessionStorage not available)" : sesId, LogLevel.Info);
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
				loggers.init.error("Plugin loading error:", err);
				emitInterface("bytm:fatalError", "Error while loading plugins");
			}
			if (features.disableBeforeUnloadPopup && domain === "ytm") enableDiscardBeforeUnload();
			if (features.rememberSongTime) initRememberVideoTime();
			if (!(0, _sv443_network_userutils.isDomLoaded)()) document.addEventListener("DOMContentLoaded", () => onDomLoad(), { once: true });
			else onDomLoad();
		} catch (err) {
			loggers.init.error("Fatal error:", err);
			alert(`\
${scriptInfo$1.name} encountered a fatal error during initialization and will not work correctly, if at all.
For information on what caused this error, please refer to the JS console.

${`Please report this bug using the issue tracker on GitHub:\n${package_default.bugs.url}\n\nFor now, you can try reinstalling the script or downgrading to a previous version that worked for you.`}${`\n\n⚠️ You're running a development version of the script, so it might just be in a broken state at the moment. Either downgrade to the latest stable release, or check back later on the following page for an updated version:\n${package_default.devVersionUrl}`}`);
		}
	}
	/** Called when the DOM has finished loading and can be queried and altered by the userscript */
	async function onDomLoad() {
		initTimings.sinceStart.domLoaded = Date.now() - initTimings.start;
		const domain = getDomain();
		const feats = getFeatures();
		const ftInit = [];
		document.body.classList.add(`bytm-dom-${domain}`);
		initExponentialVolume();
		const endStaticDataDur = measureInitDuration("initStaticData");
		await initStaticData();
		endStaticDataDur();
		try {
			initObservers(feats);
			setTimeout(() => {
				const endInitGlobalDur = measureInitDuration("initGlobals_deferred");
				initGlobalCss();
				Promise.allSettled([injectCssBundle(), initVersionCheck()]).then(() => endInitGlobalDur());
				initSiteEvents();
				mountCfgMenu();
			}, 0);
		} catch (err) {
			loggers.init.error("Encountered error in pre-init:", err);
		}
		loggers.init.info(`DOM loaded and feature pre-init finished, now initializing all feature entrypoints for domain "${domain}"...`, LogLevel.Info);
		try {
			await initVersionSessionCounter();
			if (typeof await GM.getValue("bytm-installed") !== "string") {
				const dlg = await getWelcomeDialog();
				dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({
					timestamp: Date.now(),
					version: scriptInfo$1.version
				})));
				loggers.init.info("Showing welcome menu");
				await dlg.open();
				await dlg.once("close");
			}
			if (domain === "ytm") {
				ftInit.push(["addWatermark", (async () => {
					await improveLogo();
					if (feats.watermarkEnabled) await addWatermark();
				})()]);
				if (feats.fixSpacing) ftInit.push(["fixSpacing", fixSpacing()]);
				if (feats.truncatePlayerBarSubtitles) ftInit.push(["truncatePlayerBarSubtitles", initTruncatePlayerBarSubtitles()]);
				ftInit.push(["thumbnailOverlay", initThumbnailOverlay()]);
				if (feats.hideCursorOnIdle) ftInit.push(["hideCursorOnIdle", initHideCursorOnIdle()]);
				if (feats.fixHdrIssues) ftInit.push(["fixHdrIssues", fixHdrIssues()]);
				if (feats.showVotes) ftInit.push(["showVotes", initShowVotes()]);
				if (feats.swapLikeDislikeButtons) ftInit.push(["swapLikeDislikeBtns", initSwapLikeDislikeBtns()]);
				if (feats.watchPageFullSize) ftInit.push(["watchPageFullSize", initWatchPageFullSize()]);
				ftInit.push(["volumeFeatures", initVolumeFeatures()]);
				if (feats.lyricsQueueButton || feats.deleteFromQueueButton) ftInit.push(["queueButtons", initQueueButtons()]);
				ftInit.push(["aboveQueueButtons", initAboveQueueBtns()]);
				if (feats.songListTrackNumbersEnabled) ftInit.push(["songListTrackNumbers", addTrackNumbers()]);
				if (feats.closeToastsTimeout > 0) ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);
				ftInit.push(["autoScrollToActiveSong", initAutoScrollToActiveSong()]);
				ftInit.push(["yesImStillThere", initStillThere()]);
				ftInit.push(["arrowKeySkip", initArrowKeySkip()]);
				ftInit.push(["frameSkip", initFrameSkip()]);
				if (feats.anchorImprovements) ftInit.push(["anchorImprovements", addAnchorImprovements()]);
				if (feats.geniusLyrics) ftInit.push(["playerBarLyricsBtn", addPlayerBarLyricsBtn()]);
				if (feats.sponsorBlockIntegration) ftInit.push(["sponsorBlockIntegration", fixSponsorBlock()]);
				const hideThemeSongLogo = addStyleFromResource("css-hide_themesong_logo");
				if (feats.themeSongVisualizerOpacity !== 100) ftInit.push(["themeSongVisualizerOpacity", setThemeSongVisualizerOpacity()]);
				if (feats.themeSongIntegration) ftInit.push(["themeSongIntegration", Promise.allSettled([fixThemeSong(), hideThemeSongLogo])]);
				else ftInit.push(["themeSongIntegration", Promise.allSettled([fixPlayerPageTheming(), hideThemeSongLogo])]);
				if (feats.removeThumbnailRatingBar) ftInit.push(["removeThumbnailRatingBar", (async () => void await addStyleFromResource("css-remove_thumb_rating_bar"))()]);
			}
			try {
				if (domain === "ytm") addSelectorListener("popupContainer", "tp-yt-iron-dropdown #contentWrapper ytmusic-multi-page-menu-renderer #container", { listener: addConfigMenuOptionYTM });
				else if (domain === "yt") addSelectorListener("ytGuide", "#sections ytd-guide-section-renderer:nth-child(6) #items ytd-guide-entry-renderer:nth-child(1)", { listener: (el) => el.parentElement && addConfigMenuOptionYT(el.parentElement) });
			} catch (err) {
				loggers.init.error("Couldn't add config menu option:", err);
			}
			if (["ytm", "yt"].includes(domain)) {
				if (feats.removeShareTrackingParamSites) ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);
				ftInit.push(["hotkeys", initHotkeys()]);
				if (feats.autoLikeChannels) ftInit.push(["autoLikeChannels", initAutoLike()]);
				ftInit.push(["numKeysSkip", initNumKeysSkip()]);
				if (feats.disableDarkReaderSites !== "none") ftInit.push(["disableDarkReaderSites", disableDarkReader()]);
			}
			emitInterface("bytm:featureInitStarted");
			const initStartTs = initTimings.featureStart = Date.now();
			const initTimeout = feats.initTimeout > 0 ? feats.initTimeout : 8e3;
			const initializedFeats = [];
			const endFeatInitDur = measureInitDuration("featuresAllReady_deferred");
			Promise.race([(0, _sv443_network_coreutils.pauseFor)(initTimeout), Promise.allSettled(ftInit.map(([name, prom]) => new Promise(async (res) => {
				const v = await prom;
				initTimings.featureDurations = {
					...initTimings.featureDurations ?? {},
					[name]: Date.now() - initStartTs
				};
				initializedFeats.push(name);
				emitInterface("bytm:featureInitialized", name);
				emitInterface(`bytm:featureInitialized:${name}`);
				res(v);
			})))]).then(() => {
				endFeatInitDur();
				emitInterface("bytm:allReady");
				initTimings.sinceStart.allReady = Date.now() - initStartTs;
				if (initializedFeats.length < ftInit.length) loggers.init.errorNoToast(`Only ${initializedFeats.length} out of ${ftInit.length} feature entrypoints initialized within the limit of ${initTimeout}ms. These ones have timed out:${ftInit.reduce((a, [name]) => initializedFeats.includes(name) ? a : `${a}\n- ${name}`, "")}`);
				else loggers.init.info(`Done initializing ${initializedFeats.length} / ${ftInit.length} feature entrypoints in ${Math.floor(Date.now() - initStartTs)}ms`, LogLevel.Info);
			});
			(0, _sv443_network_userutils.getUnsafeWindow)().dispatchEvent(new Event("resize", {
				bubbles: true,
				cancelable: true
			}));
			preloadResources();
			initTimings.sinceStart.ready = Date.now() - initTimings.start;
			emitInterface("bytm:ready");
			try {
				registerDevCommands();
			} catch (e) {
				loggers.init.warn("Couldn't register dev menu commands:", e);
			}
			try {
				runDevTreatments();
			} catch (e) {
				loggers.init.warn("Couldn't run dev treatments:", e);
			}
		} catch (err) {
			loggers.init.error("Feature error:", err);
			emitInterface("bytm:fatalError", "Error while initializing features");
		} finally {
			initTimings.sinceStart.postInitEnd = Date.now() - initTimings.start;
		}
	}
	/** Preloads all resources that should be preloaded */
	async function preloadResources() {
		const preloadAssetRegex = new RegExp(resources_default.preloadAssetPattern);
		const urlPromises = Object.keys(resources_default.resources).filter((k) => preloadAssetRegex.test(k)).map((k) => getResourceUrl(k));
		const urls = await Promise.all(urlPromises);
		if (urls.length > 0) loggers.init.info("Preloading", urls.length, "resources:", urls);
		else loggers.init.info("No resources to preload");
		await (0, _sv443_network_userutils.preloadImages)(urls);
	}
	/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
	async function injectCssBundle() {
		if (!await addStyleFromResource("css-bundle")) loggers.init.error("Couldn't inject CSS bundle due to an error");
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
					"outer-width": `${window.outerWidth}px`
				});
			};
			window.addEventListener("resize", applyVars);
			applyVars();
		} catch (err) {
			loggers.init.error("Couldn't initialize global CSS:", err);
		}
	}
	async function initFonts() {
		const fonts = { "Cousine": {
			woff: await getResourceUrl("font-cousine_woff"),
			woff2: await getResourceUrl("font-cousine_woff2"),
			truetype: await getResourceUrl("font-cousine_ttf")
		} };
		let css = "";
		for (const [fontName, urls] of Object.entries(fonts)) css += `\
@font-face {
  font-family: "${fontName}";
  src: ${Object.entries(urls).map(([type, url]) => `url("${url}") format("${type}")`).join(", ")};
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;
		addStyle(css, "fonts");
	}
	/** Registers dev commands using `GM.registerMenuCommand` */
	function registerDevCommands() {
		const isDev = mode$1 === "development";
		const isAdv = getFeature("advancedMode");
		const isAny = isDev || isAdv;
		const isLtr = locales_default?.[getLocale()]?.textDir !== "rtl";
		const getCmdName = (emoji, key) => isLtr ? `${emoji} ${t(key)}` : `${t(key)} ${emoji}`;
		GM.registerMenuCommand(getCmdName("⚙️", "menu_command.open_cfg_menu"), () => openCfgMenu());
		GM.registerMenuCommand(getCmdName("♻️", "menu_command.reset_config"), async () => {
			const message = "Reset the configuration to its default values?\nThis will automatically reload the page.";
			try {
				if (await showPrompt({
					type: "confirm",
					message,
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
			loggers.command.log(`GM values (${keys.length}):`);
			if (keys.length === 0) loggers.command.log("  No values found.");
			const values = {};
			let longestKey = 0;
			const decodeError = (key, err) => loggers.command.error(`  "${key}"${" ".repeat(longestKey - key.length)} -> [!!!!!] Decoding Error: ${err}`);
			for (const key of keys) try {
				const isDatKey = key.startsWith("__ds-") && key.endsWith("-dat");
				/** Extracted DataStore ID */
				const dsID = isDatKey ? key.substring(5, key.length - 4) : null;
				/** Whether a -dat key is encoded. Assumes that compressionFormat never changes. */
				const isEncoded = isDatKey ? String(await GM.getValue(`__ds-${dsID}-enf`, "null")) !== "null" : false;
				const val = await GM.getValue(key, void 0);
				values[key] = typeof val !== "undefined" && isEncoded ? await (0, _sv443_network_coreutils.decompress)(val, "deflate-raw", "string") : val;
				longestKey = Math.max(longestKey, key.length);
			} catch (err) {
				decodeError(key, err);
			}
			for (const [key, finalVal] of Object.entries(values)) try {
				const isEncoded = key.startsWith("__ds-") ? String(await GM.getValue(`__ds-${key.substring(5)}-enc`, "null")) !== "null" : false;
				const lengthStr = String(finalVal).length > 50 ? `(${String(finalVal).length} chars) ` : "";
				loggers.command.log(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
			} catch (err) {
				decodeError(key, err);
			}
		});
		isAny && GM.registerMenuCommand(getCmdName("📋", "menu_command.gm_storage_list_raw"), async () => {
			const keys = await GM.listValues();
			loggers.command.log(`GM values (${keys.length}):`);
			if (keys.length === 0) loggers.command.log("  No values found.");
			const values = {};
			let longestKey = 0;
			for (const key of keys) {
				values[key] = await GM.getValue(key, void 0);
				longestKey = Math.max(longestKey, key.length);
			}
			for (const [key, val] of Object.entries(values)) {
				const lengthStr = String(val).length >= 16 ? `(${String(val).length} chars) ` : "";
				loggers.command.log(`  "${key}"${" ".repeat(longestKey - key.length)} -> ${lengthStr}${val}`);
			}
		});
		isAny && GM.registerMenuCommand(getCmdName("🗑️", "menu_command.gm_storage_delete_all"), async () => {
			const keys = await GM.listValues();
			if (await showPrompt({
				type: "confirm",
				message: `Clear all ${keys.length} GM values?\nSee console for details.`,
				confirmBtnText: "Clear"
			})) {
				loggers.command.log(`Clearing ${keys.length} GM values:`);
				if (keys.length === 0) loggers.command.log("  No values found.");
				for (const key of keys) {
					await GM.deleteValue(key);
					loggers.command.log(`  Deleted ${key}`);
				}
			}
		});
		isDev && GM.registerMenuCommand(getCmdName("🕐", "menu_command.reset_install_timestamp"), async () => {
			await GM.deleteValue("bytm-installed");
			loggers.command.log("Reset install time.");
		});
		isAny && GM.registerMenuCommand(getCmdName("🔢", "menu_command.reset_version_session_counter"), async () => {
			const verSesCount = await GM.getValue("bytm-version-session-counter", "{}");
			await GM.deleteValue("bytm-version-session-counter");
			loggers.command.log("Reset version session counter. Was previously:", verSesCount);
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
			loggers.command.log(`Showing currently active listeners for ${Object.keys(globservers).length} SelectorObserver instances with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
		});
		isAny && GM.registerMenuCommand(getCmdName("🗜️", "menu_command.compress_or_decompress_text"), async () => {
			const showFinalPrompt = async (type, initial, result) => {
				await showPrompt({
					type: "alert",
					message: `${type === "compress" ? "Compressed" : "Decompressed"} value (${initial.length} chars -> ${result.length} chars):\n${result}`,
					extraButtons: [(dlg) => {
						const btn = document.createElement("button");
						btn.classList.add("bytm-btn");
						btn.textContent = btn.ariaLabel = "Copy and close";
						btn.addEventListener("click", async () => {
							copyToClipboard(result);
							dlg.emitResolve(result);
							dlg.close();
						});
						return btn;
					}],
					extraButtonsPosition: "before"
				});
			};
			const showErr = async (type, err) => {
				const errMsg = `Error while trying to ${type === "compress" ? "" : "de"}compress`;
				loggers.command.error(errMsg, err);
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
				extraButtons: [(dlg) => {
					const btn = document.createElement("button");
					btn.textContent = btn.ariaLabel = "Compress";
					btn.addEventListener("click", async () => {
						const val = dlg.getInputValue();
						try {
							if (val && val.length > 0) {
								const result = await (0, _sv443_network_coreutils.compress)(val, "deflate-raw");
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
				}, (dlg) => {
					const btn = document.createElement("button");
					btn.classList.add("bytm-prompt-dialog-button");
					btn.textContent = btn.ariaLabel = "Decompress";
					btn.addEventListener("click", async () => {
						const val = dlg.getInputValue();
						try {
							if (val && val.length > 0) {
								const result = await (0, _sv443_network_coreutils.decompress)(val, "deflate-raw");
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
				}],
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
		isDev && GM.registerMenuCommand(getCmdName("💥", "menu_command.throw_example_error"), () => loggers.command.error("Test error thrown by user command:", new _sv443_network_coreutils.CustomError("ExampleError", "Test error")));
		isAny && GM.registerMenuCommand(getCmdName("⏱️", "menu_command.get_performance_report"), () => {
			initTimings.resources.fetchAttempts = [...resourceFetches.entries()].reduce((a, [key, vals]) => ({
				...a,
				[key]: vals
			}), {});
			downloadFile(`${scriptInfo$1.name} Performance Report @ ${(/* @__PURE__ */ new Date()).toISOString()}.json`, JSON.stringify(initTimings, null, 2), "application/json");
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
			message: devPluginToken ? `Developer plugin token for the current session:\n${devPluginToken}` : "Error: Dev plugin not registered yet.",
			extraButtons: [() => {
				const btn = document.createElement("button");
				btn.textContent = btn.ariaLabel = "Copy";
				btn.addEventListener("click", async () => {
					devPluginToken && copyToClipboard(devPluginToken);
				});
				return btn;
			}],
			extraButtonsPosition: "before"
		}));
		GM.registerMenuCommand(getCmdName("📄", "menu_command.download_log_file"), () => {
			downloadFile(`bytm-log-${(/* @__PURE__ */ new Date()).toISOString()}.log`, serializeLogs(), "text/plain");
		});
		isAny && GM.registerMenuCommand(getCmdName("🗂️", "menu_command.collect_sessions"), () => {
			const sessions = [[broadcastTxID, {
				sessionId: getSessionId(),
				buildNumber: "ce7ce8ed",
				version: scriptInfo$1.version,
				title: document.title,
				domain: getDomain(),
				initTime
			}]];
			const unsub = siteEvents.on("broadcast:discoverSessionsReply", ({ from, packet }) => {
				sessions.push([from, packet.data]);
			});
			loggers.command.log("Collecting session info from open tabs...");
			setTimeout(() => {
				const columns = [
					"#",
					"Self?",
					"Domain:",
					"Initialized:",
					"Session ID:",
					"TxID:",
					"Version:",
					"Build Number:",
					"Session Title:"
				];
				const columnAlign = [
					"right",
					"left",
					"left",
					"right",
					"left",
					"left",
					"left",
					"left",
					"left"
				];
				const styles = columns.reduce((a) => [
					...a,
					"color: #db3; font-weight: bold;",
					"color: inherit; font-weight: inherit;"
				], []);
				console.log(`${loggers.command.conPrefix} Collected information from ${sessions.length} open ${(0, _sv443_network_coreutils.autoPlural)("tab", sessions)}:\n${(0, _sv443_network_coreutils.createTable)([columns, ...sessions.map(([txID, { sessionId, version, buildNumber, title, domain, initTime }], i) => {
					const initSince = (0, _sv443_network_coreutils.secsToTimeStr)(Math.floor((Date.now() - initTime) / 1e3)).padStart(4, "0");
					return [
						i + 1,
						txID === broadcastTxID ? "Yes" : "No",
						domain,
						`${initSince} ago`,
						sessionId,
						txID,
						version,
						buildNumber,
						title
					].map((v) => String(v));
				})], {
					columnAlign,
					applyCellStyle(i) {
						if (i === 0) return ["%c", "%c"];
					}
				})}`, ...styles);
				unsub();
			}, 300);
			emitBroadcast({ type: "discoverSessions" });
		});
		isAny && GM.registerMenuCommand(getCmdName("🔄", "menu_command.reload_all_tabs"), async () => {
			await showPrompt({
				type: "confirm",
				message: "Reload all open tabs that are running BetterYTM?",
				confirmBtnText: "Reload"
			}) && await reloadAllTabs();
		});
		loggers.command.log("Registered dev menu commands");
	}
	async function runDevTreatments() {
		if (!await GM.getValue("bytm-dev-treatments", false)) return;
		loggers.init.log("Running dev treatments.");
	}
	function initPermTestPlugin() {
		const permTestDef = {
			plugin: {
				name: "PERMISSION TEST",
				namespace: package_default.namespace,
				version: package_default.version,
				license: {
					name: package_default.license,
					url: package_default.licenseUrl
				},
				description: { "en-US": "Dev plugin for testing plugin permissions." },
				homepage: { source: package_default.homepage }
			},
			intents: PluginIntent.ReadFeatureConfig | PluginIntent.WriteFeatureConfig | PluginIntent.SeeHiddenConfigValues | PluginIntent.CreateModalDialogs | PluginIntent.WriteTranslations
		};
		(0, _sv443_network_userutils.getUnsafeWindow)().addEventListener("bytm:registerPlugin", async ({ detail: register }) => {
			if (typeof register === "function") {
				const result = register(permTestDef);
				loggers.debug.log(">> Plugin permission test result:", result);
				(0, _sv443_network_userutils.getUnsafeWindow)().addEventListener("bytm:allReady", async () => {
					await (await getPluginPermissionsDialog(permTestDef)).open();
				});
			}
		});
	}
	preInit();
	//#endregion
})(CoreUtils, UserUtils, DOMPurify, compareVersions, marked);
