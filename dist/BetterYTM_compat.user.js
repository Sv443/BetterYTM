// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           3.1.0
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-or-later
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@03a74015/assets/images/logo/logo_dev_48.png
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
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/refs/heads/main/dist/BetterYTM_compat.meta.js
// @downloadURL       https://raw.githubusercontent.com/Sv443/BetterYTM/refs/heads/main/dist/BetterYTM_compat.user.js
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
  │ Build Time:    │ Fri, 04 Sep 2026 17:24:45 GMT │ (UTC timestamp of when the script was built)                               │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Build Number:  │ 03a74015                      │ (8-character SHA of the previous Git commit)                               │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Build UID:     │ CQ68etkRi59j                  │ (Random string appended to URLs to force-refresh cached assets)            │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Asset Source:  │ jsdelivr                      │ (Where all assets like image files, styles, JSONs, etc. are loaded from)   │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Source Branch: │ develop                       │ (Branch used when targeting anything on the Git repo, like loading assets) │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Compatibility: │ strict                        │ (Whether dependencies are baked into the script to improve compatibility)  │
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


(function() {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$1 = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$1(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$1(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp$1(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	//#region __vite-browser-external
	var require___vite_browser_external = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {};
	}));
	//#endregion
	//#region node_modules/.pnpm/@sv443-network+coreutils@3.8.0/node_modules/@sv443-network/coreutils/dist/CoreUtils.mjs
	var CoreUtils_exports = /* @__PURE__ */ __exportAll({
		BrowserStorageEngine: () => BrowserStorageEngine$1,
		ChecksumMismatchError: () => ChecksumMismatchError$1,
		CustomError: () => CustomError$1,
		DataStore: () => DataStore$1,
		DataStoreEngine: () => DataStoreEngine$1,
		DataStoreSerializer: () => DataStoreSerializer$1,
		DatedError: () => DatedError$1,
		Debouncer: () => Debouncer$1,
		FileStorageEngine: () => FileStorageEngine$1,
		IndexedDBStorageEngine: () => IndexedDBStorageEngine$1,
		MigrationError: () => MigrationError$1,
		NanoEmitter: () => NanoEmitter$2,
		NetworkError: () => NetworkError$1,
		PicoEmitter: () => PicoEmitter$1,
		ScriptContextError: () => ScriptContextError$1,
		ValidationError: () => ValidationError$1,
		abtoa: () => abtoa$1,
		atoab: () => atoab$1,
		autoPlural: () => autoPlural$2,
		bitSetHas: () => bitSetHas$1,
		capitalize: () => capitalize$1,
		clamp: () => clamp$1,
		compress: () => compress$1,
		computeHash: () => computeHash$1,
		consumeGen: () => consumeGen$1,
		consumeStringGen: () => consumeStringGen$1,
		createProgressBar: () => createProgressBar$1,
		createRecurringTask: () => createRecurringTask$1,
		createTable: () => createTable$1,
		darkenColor: () => darkenColor$1,
		debounce: () => debounce$1,
		decompress: () => decompress$1,
		defaultPbChars: () => defaultPbChars$1,
		defaultTableLineCharset: () => defaultTableLineCharset$1,
		digitCount: () => digitCount$1,
		fetchAdvanced: () => fetchAdvanced$1,
		formatNumber: () => formatNumber$2,
		getCallStack: () => getCallStack$1,
		getListLength: () => getListLength$1,
		getterifyObj: () => getterifyObj$2,
		hexToRgb: () => hexToRgb$1,
		insertValues: () => insertValues$1,
		joinArrayReadable: () => joinArrayReadable$1,
		lightenColor: () => lightenColor$1,
		mapRange: () => mapRange$1,
		overflowVal: () => overflowVal$2,
		pauseFor: () => pauseFor$1,
		pureObj: () => pureObj$2,
		randRange: () => randRange$1,
		randomId: () => randomId$1,
		randomItem: () => randomItem$1,
		randomItemIndex: () => randomItemIndex$1,
		randomizeArray: () => randomizeArray$1,
		rgbToHex: () => rgbToHex$1,
		roundFixed: () => roundFixed$1,
		scheduleExit: () => scheduleExit$1,
		secsToTimeStr: () => secsToTimeStr$1,
		setImmediateInterval: () => setImmediateInterval$1,
		setImmediateTimeoutLoop: () => setImmediateTimeoutLoop$1,
		takeRandomItem: () => takeRandomItem$1,
		takeRandomItemIndex: () => takeRandomItemIndex$1,
		truncStr: () => truncStr$1,
		valsWithin: () => valsWithin$1
	});
	function bitSetHas$1(bitSet, checkVal) {
		return (bitSet & checkVal) === checkVal;
	}
	function clamp$1(value, min, max) {
		if (typeof max !== "number") {
			max = min;
			min = 0;
		}
		return Math.max(Math.min(value, max), min);
	}
	function digitCount$1(num, withDecimals = true) {
		num = Number(!["string", "number"].includes(typeof num) ? String(num) : num);
		if (typeof num === "number" && isNaN(num)) return NaN;
		const [intPart, decPart] = num.toString().split(".");
		return (intPart === "0" ? 1 : Math.floor(Math.log10(Math.abs(Number(intPart))) + 1)) + (withDecimals && decPart ? decPart.length : 0);
	}
	function formatNumber$2(number, locale, format) {
		return number.toLocaleString(locale, format === "short" ? {
			notation: "compact",
			compactDisplay: "short",
			maximumFractionDigits: 1
		} : {
			style: "decimal",
			maximumFractionDigits: 0
		});
	}
	function mapRange$1(value, range1min, range1max, range2min, range2max) {
		if (typeof range2min === "undefined" || typeof range2max === "undefined") {
			range2max = range1max;
			range1max = range1min;
			range2min = range1min = 0;
		}
		if (Number(range1min) === 0 && Number(range2min) === 0) return value * (range2max / range1max);
		return (value - range1min) * ((range2max - range2min) / (range1max - range1min)) + range2min;
	}
	function overflowVal$2(value, minOrMax, max) {
		const min = typeof max === "number" ? minOrMax : 0;
		max = typeof max === "number" ? max : minOrMax;
		if (min > max) throw new RangeError(`Parameter "min" can't be bigger than "max"`);
		if (isNaN(value) || isNaN(min) || isNaN(max) || !isFinite(value) || !isFinite(min) || !isFinite(max)) return NaN;
		if (value >= min && value <= max) return value;
		const range = max - min + 1;
		return ((value - min) % range + range) % range + min;
	}
	function randRange$1(...args) {
		let min, max, enhancedEntropy = false;
		if (typeof args[0] === "number" && typeof args[1] === "number") [min, max] = args;
		else if (typeof args[0] === "number" && typeof args[1] !== "number") {
			min = 0;
			[max] = args;
		} else throw new TypeError(`Wrong parameter(s) provided - expected (number, boolean|undefined) or (number, number, boolean|undefined) but got (${args.map((a) => typeof a).join(", ")}) instead`);
		if (typeof args[2] === "boolean") enhancedEntropy = args[2];
		else if (typeof args[1] === "boolean") enhancedEntropy = args[1];
		min = Number(min);
		max = Number(max);
		if (isNaN(min) || isNaN(max)) return NaN;
		if (min > max) throw new TypeError(`Parameter "min" can't be bigger than "max"`);
		if (enhancedEntropy) {
			const uintArr = new Uint8Array(1);
			crypto.getRandomValues(uintArr);
			return Number(Array.from(uintArr, (v) => Math.round(mapRange$1(v, 0, 255, min, max)).toString(10)).join(""));
		} else return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function roundFixed$1(num, fractionDigits) {
		const scale = 10 ** fractionDigits;
		return Math.round(num * scale) / scale;
	}
	function valsWithin$1(a, b, dec = 1, withinRange = .5) {
		return Math.abs(roundFixed$1(a, dec) - roundFixed$1(b, dec)) <= withinRange;
	}
	function randomItem$1(array) {
		return randomItemIndex$1(array)[0];
	}
	function randomItemIndex$1(array) {
		if (array.length === 0) return [void 0, void 0];
		const idx = randRange$1(array.length - 1);
		return [array[idx], idx];
	}
	function randomizeArray$1(array) {
		const retArray = [...array];
		if (array.length === 0) return retArray;
		for (let i = retArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[retArray[i], retArray[j]] = [retArray[j], retArray[i]];
		}
		return retArray;
	}
	function takeRandomItem$1(arr) {
		var _a;
		return (_a = takeRandomItemIndex$1(arr)) == null ? void 0 : _a[0];
	}
	function takeRandomItemIndex$1(arr) {
		const [itm, idx] = randomItemIndex$1(arr);
		if (idx === void 0) return [void 0, void 0];
		arr.splice(idx, 1);
		return [itm, idx];
	}
	function darkenColor$1(color, percent, upperCase = false) {
		var _a;
		color = color.trim();
		const darkenRgb = (r2, g2, b2, percent2) => {
			r2 = Math.max(0, Math.min(255, r2 - r2 * percent2 / 100));
			g2 = Math.max(0, Math.min(255, g2 - g2 * percent2 / 100));
			b2 = Math.max(0, Math.min(255, b2 - b2 * percent2 / 100));
			return [
				r2,
				g2,
				b2
			];
		};
		let r, g, b, a;
		const isHexCol = color.match(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/);
		if (isHexCol) [r, g, b, a] = hexToRgb$1(color);
		else if (color.startsWith("rgb")) {
			const rgbValues = (_a = color.match(/\d+(\.\d+)?/g)) == null ? void 0 : _a.map(Number);
			if (!rgbValues) throw new TypeError("Invalid RGB/RGBA color format");
			[r, g, b, a] = rgbValues;
		} else throw new TypeError("Unsupported color format");
		[r, g, b] = darkenRgb(r, g, b, percent);
		if (isHexCol) return rgbToHex$1(r, g, b, a, color.startsWith("#"), upperCase);
		else if (color.startsWith("rgba")) return `rgba(${r}, ${g}, ${b}, ${a ?? NaN})`;
		else return `rgb(${r}, ${g}, ${b})`;
	}
	function hexToRgb$1(hex) {
		hex = (hex.startsWith("#") ? hex.slice(1) : hex).trim();
		const a = hex.length === 8 || hex.length === 4 ? parseInt(hex.slice(-(hex.length / 4)), 16) / (hex.length === 8 ? 255 : 15) : void 0;
		if (!isNaN(Number(a))) hex = hex.slice(0, -(hex.length / 4));
		if (hex.length === 3 || hex.length === 4) hex = hex.split("").map((c) => c + c).join("");
		const hexInt = parseInt(hex, 16);
		const r = hexInt >> 16 & 255;
		const g = hexInt >> 8 & 255;
		const b = hexInt & 255;
		return [
			clamp$1(r, 0, 255),
			clamp$1(g, 0, 255),
			clamp$1(b, 0, 255),
			typeof a === "number" ? clamp$1(a, 0, 1) : void 0
		];
	}
	function lightenColor$1(color, percent, upperCase = false) {
		return darkenColor$1(color, percent * -1, upperCase);
	}
	function rgbToHex$1(red, green, blue, alpha, withHash = true, upperCase = false) {
		const toHexVal = (n) => clamp$1(Math.round(n), 0, 255).toString(16).padStart(2, "0")[upperCase ? "toUpperCase" : "toLowerCase"]();
		return `${withHash ? "#" : ""}${toHexVal(red)}${toHexVal(green)}${toHexVal(blue)}${alpha ? toHexVal(alpha * 255) : ""}`;
	}
	function abtoa$1(buf) {
		return btoa(new Uint8Array(buf).reduce((data, byte) => data + String.fromCharCode(byte), ""));
	}
	function atoab$1(str) {
		return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
	}
	async function compress$1(input, compressionFormat, outputType = "string") {
		const byteArray = input instanceof Uint8Array ? input : new TextEncoder().encode((input == null ? void 0 : input.toString()) ?? String(input));
		const comp = new CompressionStream(compressionFormat);
		const writer = comp.writable.getWriter();
		writer.write(byteArray);
		writer.close();
		const uintArr = new Uint8Array(await new Response(comp.readable).arrayBuffer());
		return outputType === "arrayBuffer" ? uintArr : abtoa$1(uintArr);
	}
	async function decompress$1(input, compressionFormat, outputType = "string") {
		const byteArray = input instanceof Uint8Array ? input : atoab$1((input == null ? void 0 : input.toString()) ?? String(input));
		const decomp = new DecompressionStream(compressionFormat);
		const writer = decomp.writable.getWriter();
		writer.write(byteArray);
		writer.close();
		const uintArr = new Uint8Array(await new Response(decomp.readable).arrayBuffer());
		return outputType === "arrayBuffer" ? uintArr : new TextDecoder().decode(uintArr);
	}
	async function computeHash$1(input, algorithm = "SHA-256") {
		let data;
		if (typeof input === "string") data = new TextEncoder().encode(input);
		else data = input;
		const hashBuffer = await crypto.subtle.digest(algorithm, data);
		return Array.from(new Uint8Array(hashBuffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
	}
	function randomId$1(length = 16, radix = 16, enhancedEntropy = false, randomCase = true) {
		if (length < 1) throw new RangeError("The length argument must be at least 1");
		if (radix < 2 || radix > 36) throw new RangeError("The radix argument must be between 2 and 36");
		let arr = [];
		const caseArr = randomCase ? [0, 1] : [0];
		if (enhancedEntropy) {
			const uintArr = new Uint8Array(length);
			crypto.getRandomValues(uintArr);
			arr = Array.from(uintArr, (v) => mapRange$1(v, 0, 255, 0, radix).toString(radix).substring(0, 1));
		} else arr = Array.from({ length }, () => Math.floor(Math.random() * radix).toString(radix));
		if (!arr.some((v) => /[a-zA-Z]/.test(v))) return arr.join("");
		return arr.map((v) => caseArr[randRange$1(0, caseArr.length - 1, enhancedEntropy)] === 1 ? v.toUpperCase() : v).join("");
	}
	var DatedError$1 = class extends Error {
		date;
		constructor(message, options) {
			super(message, options);
			this.name = this.constructor.name;
			this.date = /* @__PURE__ */ new Date();
		}
	};
	var ChecksumMismatchError$1 = class extends DatedError$1 {
		constructor(message, options) {
			super(message, options);
			this.name = "ChecksumMismatchError";
		}
	};
	var CustomError$1 = class extends DatedError$1 {
		constructor(name, message, options) {
			super(message, options);
			this.name = name;
		}
	};
	var MigrationError$1 = class extends DatedError$1 {
		constructor(message, options) {
			super(message, options);
			this.name = "MigrationError";
		}
	};
	var ValidationError$1 = class extends DatedError$1 {
		constructor(message, options) {
			super(message, options);
			this.name = "ValidationError";
		}
	};
	var ScriptContextError$1 = class extends DatedError$1 {
		constructor(message, options) {
			super(message, options);
			this.name = "ScriptContextError";
		}
	};
	var NetworkError$1 = class extends DatedError$1 {
		constructor(message, options) {
			super(message, options);
			this.name = "NetworkError";
		}
	};
	async function consumeGen$1(valGen, ...args) {
		return await (typeof valGen === "function" ? valGen(...args) : valGen);
	}
	async function consumeStringGen$1(strGen, ...args) {
		return typeof strGen === "string" ? strGen : String(typeof strGen === "function" ? await strGen(...args) : strGen);
	}
	async function fetchAdvanced$1(input, options = {}) {
		const { timeout = 1e4, signal, ...restOpts } = options;
		const fetchOpts = { ...restOpts };
		if (signal) fetchOpts.signal = signal;
		let timeoutId;
		try {
			const fetchPromise = fetch(input, fetchOpts);
			if (timeout < 0) return await fetchPromise;
			const res = await Promise.race([fetchPromise, new Promise((_, reject) => {
				timeoutId = setTimeout(() => reject(new DOMException("The operation timed out.", "TimeoutError")), timeout);
			})]);
			clearTimeout(timeoutId);
			return res;
		} catch (err) {
			clearTimeout(timeoutId);
			throw new NetworkError$1("Error while calling fetch", { cause: err });
		}
	}
	function getListLength$1(listLike, zeroOnInvalid = true) {
		return "length" in listLike ? listLike.length : "size" in listLike ? listLike.size : "count" in listLike ? listLike.count : zeroOnInvalid ? 0 : NaN;
	}
	function pauseFor$1(time, signal, rejectOnAbort = false) {
		return new Promise((res, rej) => {
			const timeout = setTimeout(() => res(), time);
			signal?.addEventListener("abort", () => {
				clearTimeout(timeout);
				rejectOnAbort ? rej(new CustomError$1("AbortError", "The pause was aborted")) : res();
			});
		});
	}
	function pureObj$2(obj) {
		return Object.assign(/* @__PURE__ */ Object.create(null), obj ?? {});
	}
	function getterifyObj$2(obj, asCopy = false) {
		const newObj = {};
		for (const key in obj) Object.defineProperty(newObj, key, {
			get: () => obj[key],
			enumerable: true,
			configurable: true
		});
		return asCopy ? structuredClone(newObj) : newObj;
	}
	function setImmediateInterval$1(callback, interval, signal) {
		let intervalId;
		const cleanup = () => clearInterval(intervalId);
		const loop = () => {
			if (signal == null ? void 0 : signal.aborted) return cleanup();
			callback();
		};
		signal?.addEventListener("abort", cleanup);
		loop();
		intervalId = setInterval(loop, interval);
	}
	function setImmediateTimeoutLoop$1(callback, interval, signal) {
		let timeout;
		const cleanup = () => clearTimeout(timeout);
		const loop = async () => {
			if (signal == null ? void 0 : signal.aborted) return cleanup();
			await callback();
			timeout = setTimeout(loop, interval);
		};
		signal?.addEventListener("abort", cleanup);
		loop();
	}
	function scheduleExit$1(code = 0, timeout = 0) {
		if (timeout < 0) throw new TypeError("Timeout must be a non-negative number");
		let exit;
		if (typeof process !== "undefined" && "exit" in process && typeof process.exit === "function") exit = () => process.exit(code);
		else if (typeof Deno !== "undefined" && "exit" in Deno && typeof Deno.exit === "function") exit = () => Deno.exit(code);
		else throw new ScriptContextError$1("Cannot exit the process, no exit method available");
		setTimeout(exit, timeout);
	}
	function getCallStack$1(asArray, lines = Infinity) {
		if (typeof lines !== "number" || isNaN(lines) || lines < 0) throw new TypeError("lines parameter must be a non-negative number");
		try {
			throw new CustomError$1("GetCallStack", "Capturing a stack trace with CoreUtils.getCallStack(). If you see this anywhere, you can safely ignore it.");
		} catch (err) {
			const stack = (err.stack ?? "").split("\n").map((line) => line.trim()).slice(2, lines + 2);
			return asArray !== false ? stack : stack.join("\n");
		}
	}
	function createRecurringTask$1(options) {
		var _a;
		let iterations = 0;
		let aborted = false;
		(_a = options.signal) == null || _a.addEventListener("abort", () => {
			aborted = true;
		}, { once: true });
		const runRecurringTask = async (initial = false) => {
			var _a2;
			if (aborted) return;
			try {
				if ((options.immediate ?? true) || !initial) {
					iterations++;
					if (await ((_a2 = options.condition) == null ? void 0 : _a2.call(options, iterations - 1)) ?? true) {
						const val = await options.task(iterations - 1);
						if (options.onSuccess) await options.onSuccess(val, iterations - 1);
					}
				}
			} catch (err) {
				if (options.onError) await options.onError(err, iterations - 1);
				if (options.abortOnError) aborted = true;
				if (!options.onError && !options.abortOnError) throw err;
			}
			if (!aborted && (typeof options.maxIterations !== "number" || iterations < options.maxIterations)) setTimeout(runRecurringTask, options.timeout);
		};
		return runRecurringTask(true);
	}
	function autoPlural$2(term, num, pluralType = "auto") {
		if (typeof num !== "number") {
			if ("length" in num) num = num.length;
			else if ("size" in num) num = num.size;
			else if ("count" in num) num = num.count;
		}
		if (!["-s", "-ies"].includes(pluralType)) pluralType = "auto";
		if (isNaN(num)) num = 2;
		switch (pluralType === "auto" ? String(term).endsWith("y") ? "-ies" : "-s" : pluralType) {
			case "-s": return `${term}${num === 1 ? "" : "s"}`;
			case "-ies": return `${String(term).slice(0, -1)}${num === 1 ? "y" : "ies"}`;
		}
	}
	function capitalize$1(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
	var defaultPbChars$1 = {
		100: "█",
		75: "▓",
		50: "▒",
		25: "░",
		0: "─"
	};
	function createProgressBar$1(percentage, barLength, chars = defaultPbChars$1) {
		if (percentage < 0 || percentage > 100) throw new RangeError(`Percentage must be between 0 and 100, got ${percentage}`);
		if (barLength < 0) throw new RangeError(`Bar length must be non-negative, got ${barLength}`);
		if (percentage === 100) return chars[100].repeat(barLength);
		const filledLength = Math.floor(percentage / 100 * barLength);
		const remainingPercentage = percentage / 100 * barLength - filledLength;
		let lastBlock = "";
		if (remainingPercentage >= .75) lastBlock = chars[75];
		else if (remainingPercentage >= .5) lastBlock = chars[50];
		else if (remainingPercentage >= .25) lastBlock = chars[25];
		const filledBar = chars[100].repeat(filledLength);
		const emptyBar = chars[0].repeat(barLength - filledLength - (lastBlock ? 1 : 0));
		return `${filledBar}${lastBlock}${emptyBar}`;
	}
	function insertValues$1(input, ...values) {
		return input.replace(/%\d/gm, (match) => {
			var _a;
			return (_a = values[Number(match.substring(1)) - 1] ?? match) == null ? void 0 : _a.toString();
		});
	}
	function joinArrayReadable$1(array, separators = ", ", lastSeparator = " and ") {
		const arr = [...array];
		if (arr.length === 0) return "";
		else if (arr.length === 1) return String(arr[0]);
		else if (arr.length === 2) return arr.join(lastSeparator);
		const lastItm = lastSeparator + arr[arr.length - 1];
		arr.pop();
		return arr.join(separators) + lastItm;
	}
	function secsToTimeStr$1(seconds) {
		const isNegative = seconds < 0;
		const s = Math.abs(seconds);
		if (isNaN(s) || !isFinite(s)) throw new TypeError("The seconds argument must be a valid number");
		const hrs = Math.floor(s / 3600);
		const mins = Math.floor(s % 3600 / 60);
		const secs = Math.floor(s % 60);
		return (isNegative ? "-" : "") + [
			hrs ? hrs + ":" : "",
			String(mins).padStart(mins > 0 || hrs > 0 ? 2 : 1, "0"),
			":",
			String(secs).padStart(secs > 0 || mins > 0 || hrs > 0 || seconds === 0 ? 2 : 1, "0")
		].join("");
	}
	function truncStr$1(input, length, endStr = "...") {
		const str = (input == null ? void 0 : input.toString()) ?? String(input);
		const finalStr = str.length > length ? str.substring(0, length - endStr.length) + endStr : str;
		return finalStr.length > length ? finalStr.substring(0, length) : finalStr;
	}
	var defaultTableLineCharset$1 = {
		single: {
			horizontal: "─",
			vertical: "│",
			topLeft: "┌",
			topRight: "┐",
			bottomLeft: "└",
			bottomRight: "┘",
			leftT: "├",
			rightT: "┤",
			topT: "┬",
			bottomT: "┴",
			cross: "┼"
		},
		double: {
			horizontal: "═",
			vertical: "║",
			topLeft: "╔",
			topRight: "╗",
			bottomLeft: "╚",
			bottomRight: "╝",
			leftT: "╠",
			rightT: "╣",
			topT: "╦",
			bottomT: "╩",
			cross: "╬"
		},
		none: {
			horizontal: " ",
			vertical: " ",
			topLeft: " ",
			topRight: " ",
			bottomLeft: " ",
			bottomRight: " ",
			leftT: " ",
			rightT: " ",
			topT: " ",
			bottomT: " ",
			cross: " "
		}
	};
	function createTable$1(rows, options) {
		var _a;
		const opts = {
			columnAlign: "left",
			truncateAbove: Infinity,
			truncEndStr: "…",
			minPadding: 1,
			lineStyle: "single",
			applyCellStyle: () => void 0,
			applyLineStyle: () => void 0,
			lineCharset: defaultTableLineCharset$1,
			...options ?? {}
		};
		const defRange = (val, min, max) => clamp$1(typeof val !== "number" || isNaN(Number(val)) ? min : val, min, max);
		opts.truncateAbove = defRange(opts.truncateAbove, 0, Infinity);
		opts.minPadding = defRange(opts.minPadding, 0, Infinity);
		const lnCh = opts.lineCharset[opts.lineStyle];
		const stripAnsi = (str) => str.replace(/\u001b\[[0-9;]*m/g, "");
		const stringRows = rows.map((row) => row.map((cell) => String(cell)));
		const colCount = ((_a = rows[0]) == null ? void 0 : _a.length) ?? 0;
		if (colCount === 0 || stringRows.length === 0) return "";
		if (isFinite(opts.truncateAbove)) {
			const truncAnsi = (str, maxVisible, endStr) => {
				const limit = maxVisible - endStr.length;
				if (limit <= 0) return endStr.slice(0, maxVisible);
				let visible = 0;
				let result = "";
				let i = 0;
				let hasAnsi = false;
				while (i < str.length) {
					if (str[i] === "\x1B" && str[i + 1] === "[") {
						const seqEnd = str.indexOf("m", i + 2);
						if (seqEnd !== -1) {
							result += str.slice(i, seqEnd + 1);
							hasAnsi = true;
							i = seqEnd + 1;
							continue;
						}
					}
					if (visible === limit) {
						result += endStr;
						if (hasAnsi) result += "\x1B[0m";
						return result;
					}
					result += str[i];
					visible++;
					i++;
				}
				return result;
			};
			for (const row of stringRows) for (let j = 0; j < row.length; j++) if (stripAnsi(row[j] ?? "").length > opts.truncateAbove) row[j] = truncAnsi(row[j] ?? "", opts.truncateAbove, opts.truncEndStr);
		}
		const colWidths = Array.from({ length: colCount }, (_, j) => Math.max(0, ...stringRows.map((row) => stripAnsi(row[j] ?? "").length)));
		const applyLn = (i, j, ch) => {
			const [before = "", after = ""] = opts.applyLineStyle(i, j) ?? [];
			return `${before}${ch}${after}`;
		};
		const buildBorderRow = (lineIdx, leftCh, midCh, rightCh) => {
			let result = "";
			let j = 0;
			result += applyLn(lineIdx, j++, leftCh);
			for (let col = 0; col < colCount; col++) {
				const cellWidth = (colWidths[col] ?? 0) + opts.minPadding * 2;
				for (let ci = 0; ci < cellWidth; ci++) result += applyLn(lineIdx, j++, lnCh.horizontal);
				if (col < colCount - 1) result += applyLn(lineIdx, j++, midCh);
			}
			result += applyLn(lineIdx, j++, rightCh);
			return result;
		};
		const lines = [];
		for (let rowIdx = 0; rowIdx < stringRows.length; rowIdx++) {
			const row = stringRows[rowIdx] ?? [];
			const lineIdxBase = rowIdx * 3;
			if (opts.lineStyle !== "none") lines.push(rowIdx === 0 ? buildBorderRow(lineIdxBase, lnCh.topLeft, lnCh.topT, lnCh.topRight) : buildBorderRow(lineIdxBase, lnCh.leftT, lnCh.cross, lnCh.rightT));
			let contentLine = "";
			let j = 0;
			contentLine += applyLn(lineIdxBase + 1, j++, lnCh.vertical);
			for (let colIdx = 0; colIdx < colCount; colIdx++) {
				const cell = row[colIdx] ?? "";
				const visLen = stripAnsi(cell).length;
				const extra = (colWidths[colIdx] ?? 0) - visLen;
				const align = (Array.isArray(opts.columnAlign) ? opts.columnAlign[colIdx] : opts.columnAlign) ?? "left";
				let leftPad;
				let rightPad;
				switch (align) {
					case "right":
						leftPad = opts.minPadding + extra;
						rightPad = opts.minPadding;
						break;
					case "centerLeft":
						leftPad = opts.minPadding + Math.floor(extra / 2);
						rightPad = opts.minPadding + Math.ceil(extra / 2);
						break;
					case "centerRight":
						leftPad = opts.minPadding + Math.ceil(extra / 2);
						rightPad = opts.minPadding + Math.floor(extra / 2);
						break;
					default:
						leftPad = opts.minPadding;
						rightPad = opts.minPadding + extra;
				}
				const [cellBefore = "", cellAfter = ""] = opts.applyCellStyle(rowIdx, colIdx) ?? [];
				contentLine += " ".repeat(leftPad) + cellBefore + cell + cellAfter + " ".repeat(rightPad);
				contentLine += applyLn(lineIdxBase + 1, j++, lnCh.vertical);
			}
			lines.push(contentLine);
			if (opts.lineStyle !== "none" && rowIdx === stringRows.length - 1) lines.push(buildBorderRow(lineIdxBase + 2, lnCh.bottomLeft, lnCh.bottomT, lnCh.bottomRight));
		}
		return lines.join("\n");
	}
	var createNanoEvents$1 = () => ({
		emit(event, ...args) {
			for (let callbacks = this.events[event] || [], i = 0, length = callbacks.length; i < length; i++) callbacks[i](...args);
		},
		events: {},
		on(event, cb) {
			(this.events[event] ||= []).push(cb);
			return () => {
				var _a;
				this.events[event] = (_a = this.events[event]) == null ? void 0 : _a.filter((i) => cb !== i);
			};
		}
	});
	var PicoEmitter$1 = class {
		/**
		* The nanoevents emitter instance used internally.  
		* ⚠️ You should use the protected method `emitEvent()` instead of emitting directly through this, as it updates the catch-up memory for any events listed in `catchUpEvents`. Only use `this.events.emit()` if you're not using `catchUpEvents` or are doing manual memory management.
		*/
		events = createNanoEvents$1();
		eventUnsubscribes = [];
		emitterOptions;
		/** Stores the latest arguments for each emitted event that's listed in `catchUpEvents`. */
		catchUpMemory = /* @__PURE__ */ new Map();
		/**
		* ⚠️ You cannot instantiate `PicoEmitter` directly, it's only meant for extending in your own classes. If you want a standalone emitter, use `NanoEmitter` instead.
		*/
		constructor(options = {}) {
			this.emitterOptions = { ...options };
		}
		/**
		* Emits an event on this instance.  
		* You should use this over `this.events.emit()` in subclasses as it updates the catch-up memory for any event listed in `catchUpEvents`, so that listeners attached after emitting can still receive the latest value.
		*/
		emitEvent(event, ...args) {
			var _a;
			if ((_a = this.emitterOptions.catchUpEvents) == null ? void 0 : _a.includes(event)) this.catchUpMemory.set(event, args);
			this.events.emit(event, ...args);
		}
		/**
		* Subscribes to an event and calls the callback when it's emitted.  
		* If the event has already been emitted and is listed in `catchUpEvents`, the callback will be called immediately with the latest emitted arguments (catch-up behaviour).
		* @param event The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. \`event-${val}\` as "_")
		* @returns Returns a function that can be called to unsubscribe the event listener
		* @example ```ts
		* const emitter = new PicoEmitter<{
		*   foo: (bar: string) => void;
		* }>({
		*   publicEmit: true,
		* });
		* 
		* let i = 0;
		* const unsub = emitter.on("foo", (bar) => {
		*   // unsubscribe after 10 events:
		*   if(++i === 10) unsub();
		*   console.log(bar);
		* });
		* 
		* emitter.emit("foo", "bar");
		* ```
		*/
		on(event, cb) {
			let unsub;
			const unsubProxy = () => {
				if (!unsub) return;
				unsub();
				this.eventUnsubscribes = this.eventUnsubscribes.filter((u) => u !== unsub);
			};
			unsub = this.events.on(event, cb);
			this.eventUnsubscribes.push(unsub);
			const memory = this.catchUpMemory.get(event);
			if (memory) cb(...memory);
			return unsubProxy;
		}
		/**
		* Subscribes to an event and calls the callback or resolves the Promise only once when it's emitted.  
		* If the event has already been emitted and is listed in `catchUpEvents`, the callback will be called immediately with the latest emitted arguments (catch-up behaviour).
		* @param event The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. \`event-${val}\` as "_")
		* @param cb The callback to call when the event is emitted - if provided or not, the returned Promise will resolve with the event arguments
		* @returns Returns a Promise that resolves with the event arguments when the event is emitted
		* @example ```ts
		* const emitter = new PicoEmitter<{
		*   foo: (bar: string) => void;
		* }>();
		* 
		* // Promise syntax:
		* const [bar] = await emitter.once("foo");
		* console.log(bar);
		* 
		* // Callback syntax:
		* emitter.once("foo", (bar) => console.log(bar));
		* ```
		*/
		once(event, cb) {
			const memory = this.catchUpMemory.get(event);
			if (memory) {
				const args = memory;
				cb?.(...args);
				return Promise.resolve(args);
			}
			return new Promise((resolve) => {
				let unsub;
				const onceProxy = ((...args) => {
					cb?.(...args);
					unsub?.();
					resolve(args);
				});
				unsub = this.events.on(event, onceProxy);
				this.eventUnsubscribes.push(unsub);
			});
		}
		/**
		* Allows subscribing to multiple events and calling the callback only when one of, all of, or a subset of the events are emitted, either continuously or only once.  
		* If any of the events have already been emitted and are listed in `catchUpEvents`, the callback will be called immediately if the criteria are met, with the latest emitted arguments (catch-up behaviour).
		* @param options An object or array of objects with the following properties:  
		* `callback` (required) is the function that will be called when the conditions are met.  
		*   
		* Set `once` to true to call the callback only once for the first event (or set of events) that match the criteria, then stop listening.  
		* If `signal` is provided, the subscription will be canceled when the given signal is aborted.  
		*   
		* If `oneOf` is used, the callback will be called when any of the matching events are emitted.  
		* If `allOf` is used, the callback will be called after all of the matching events are emitted at least once, then any time any of them are emitted.  
		* If both `oneOf` and `allOf` are used together, the callback will be called when any of the `oneOf` events are emitted AND all of the `allOf` events have been emitted at least once.  
		* At least one of `oneOf` or `allOf` must be provided.  
		*   
		* @returns Returns a function that can be called to unsubscribe all listeners created by this call. Alternatively, pass an `AbortSignal` to all options objects to achieve the same effect or for finer control.
		*/
		onMulti(options) {
			const allUnsubs = [];
			const unsubAll = () => {
				for (const unsub of allUnsubs) unsub();
				allUnsubs.splice(0, allUnsubs.length);
				this.eventUnsubscribes = this.eventUnsubscribes.filter((u) => !allUnsubs.includes(u));
			};
			for (const opts of Array.isArray(options) ? options : [options]) {
				const { oneOf, allOf, once, signal, callback } = {
					allOf: [],
					oneOf: [],
					once: false,
					...opts
				};
				if (signal == null ? void 0 : signal.aborted) return unsubAll;
				if (oneOf.length === 0 && allOf.length === 0) throw new TypeError("PicoEmitter.onMulti(): Either `oneOf` or `allOf` or both must be provided in the options");
				const curEvtUnsubs = [];
				const checkUnsubAllEvt = (force = false) => {
					if (!(signal == null ? void 0 : signal.aborted) && !force) return;
					for (const unsub of curEvtUnsubs) unsub();
					curEvtUnsubs.splice(0, curEvtUnsubs.length);
					this.eventUnsubscribes = this.eventUnsubscribes.filter((u) => !curEvtUnsubs.includes(u));
				};
				const allOfEmitted = /* @__PURE__ */ new Set();
				const allOfConditionMet = () => allOf.length === 0 || allOfEmitted.size === allOf.length;
				for (const event of oneOf) {
					const unsub = this.events.on(event, ((...args) => {
						checkUnsubAllEvt();
						if (allOfConditionMet()) {
							callback(event, ...args);
							if (once) checkUnsubAllEvt(true);
						}
					}));
					curEvtUnsubs.push(unsub);
				}
				for (const event of allOf) {
					const unsub = this.events.on(event, ((...args) => {
						checkUnsubAllEvt();
						allOfEmitted.add(event);
						if (allOfConditionMet() && (oneOf.length === 0 || oneOf.includes(event))) {
							callback(event, ...args);
							if (once) checkUnsubAllEvt(true);
						}
					}));
					curEvtUnsubs.push(unsub);
				}
				allUnsubs.push(() => checkUnsubAllEvt(true));
			}
			return unsubAll;
		}
		/** Unsubscribes all event listeners from this instance. Also clears the event catch-up memory. */
		unsubscribeAll() {
			for (const unsub of this.eventUnsubscribes) unsub();
			this.eventUnsubscribes = [];
			this.catchUpMemory.clear();
		}
	};
	var NanoEmitter$2 = class extends PicoEmitter$1 {
		events = createNanoEvents$1();
		eventUnsubscribes = [];
		emitterOptions;
		/** Stores the last arguments for each event listed in `catchUpEvents` */
		catchUpMemory = /* @__PURE__ */ new Map();
		/** Creates a new instance of NanoEmitter - a lightweight event emitter with helper methods and a strongly typed event map */
		constructor(options = {}) {
			super(options);
			this.emitterOptions = {
				publicEmit: false,
				...options
			};
		}
		/**
		* Emits an event on this instance.  
		* - ⚠️ Needs `publicEmit` to be set to true in the NanoEmitter constructor or super() call!
		* @param event The event to emit
		* @param args The arguments to pass to the event listeners
		* @returns Returns true if `publicEmit` is true and the event was emitted successfully
		*/
		emit(event, ...args) {
			if (this.emitterOptions.publicEmit) {
				this.emitEvent(event, ...args);
				return true;
			}
			return false;
		}
		/** Unsubscribes all event listeners from this instance. Also clears the event catch-up memory. */
		unsubscribeAll() {
			super.unsubscribeAll();
		}
	};
	var dsFmtVer$1 = 1;
	var DataStore$1 = class extends NanoEmitter$2 {
		id;
		formatVersion;
		defaultData;
		encodeData;
		decodeData;
		compressionFormat = "deflate-raw";
		memoryCache;
		engine;
		keyPrefix;
		options;
		/**
		* Whether all first-init checks should be done.  
		* This includes migrating the internal DataStore format, migrating data from the UserUtils format, and anything similar.  
		* This is set to `true` by default. Create a subclass and set it to `false` before calling {@linkcode loadData()} if you want to explicitly skip these checks.
		*/
		firstInit = true;
		/** In-memory cached copy of the data that is saved in persistent storage used for synchronous read access. */
		cachedData;
		migrations;
		migrateIds = [];
		/**
		* Creates an instance of DataStore to manage a sync & async database that is cached in memory and persistently saved across sessions.  
		* Supports migrating data from older versions to newer ones and populating the cache with default data if no persistent data is found.  
		*   
		* - ⚠️ Make sure to call {@linkcode loadData()} at least once after creating an instance, or the returned data will be the same as `options.defaultData`
		* 
		* @template TData The type of the data that is saved in persistent storage for the currently set format version (will be automatically inferred from `defaultData` if not provided) - **This has to be a JSON-compatible object!** (no undefined, circular references, etc.)
		* @param opts The options for this DataStore instance
		*/
		constructor(opts) {
			super(opts.nanoEmitterOptions);
			this.id = opts.id;
			this.formatVersion = opts.formatVersion;
			this.defaultData = opts.defaultData;
			this.memoryCache = opts.memoryCache ?? true;
			this.cachedData = this.memoryCache ? opts.defaultData : {};
			this.migrations = opts.migrations;
			if (opts.migrateIds) this.migrateIds = Array.isArray(opts.migrateIds) ? opts.migrateIds : [opts.migrateIds];
			this.engine = typeof opts.engine === "function" ? opts.engine() : opts.engine;
			this.keyPrefix = opts.keyPrefix ?? "__ds-";
			this.options = opts;
			if ("encodeData" in opts && "decodeData" in opts && Array.isArray(opts.encodeData) && Array.isArray(opts.decodeData)) {
				this.encodeData = [opts.encodeData[0], opts.encodeData[1]];
				this.decodeData = [opts.decodeData[0], opts.decodeData[1]];
				this.compressionFormat = opts.encodeData[0] ?? null;
			} else if (opts.compressionFormat === null) {
				this.encodeData = void 0;
				this.decodeData = void 0;
				this.compressionFormat = null;
			} else {
				const fmt = typeof opts.compressionFormat === "string" ? opts.compressionFormat : "deflate-raw";
				this.compressionFormat = fmt;
				this.encodeData = [fmt, async (data) => await compress$1(data, fmt, "string")];
				this.decodeData = [fmt, async (data) => await decompress$1(data, fmt, "string")];
			}
			this.engine.setDataStoreOptions({
				id: this.id,
				encodeData: this.encodeData,
				decodeData: this.decodeData
			});
		}
		/**
		* Loads the data saved in persistent storage into the in-memory cache and also returns a copy of it.  
		* Automatically populates persistent storage with default data if it doesn't contain any data yet.  
		* Also runs all necessary migration functions if the data format has changed since the last time the data was saved.
		*/
		async loadData() {
			try {
				if (this.firstInit) {
					this.firstInit = false;
					const dsVer = Number(await this.engine.getValue("__ds_fmt_ver", 0));
					const oldData = await this.engine.getValue(`_uucfg-${this.id}`, null);
					if (oldData) {
						const oldVer = Number(await this.engine.getValue(`_uucfgver-${this.id}`, NaN));
						const oldEnc = await this.engine.getValue(`_uucfgenc-${this.id}`, null);
						const promises = [];
						const migrateFmt = (oldKey, newKey, value) => {
							promises.push(this.engine.setValue(newKey, value));
							promises.push(this.engine.deleteValue(oldKey));
						};
						migrateFmt(`_uucfg-${this.id}`, `${this.keyPrefix}${this.id}-dat`, oldData);
						if (!isNaN(oldVer)) migrateFmt(`_uucfgver-${this.id}`, `${this.keyPrefix}${this.id}-ver`, oldVer);
						if (typeof oldEnc === "boolean" || oldEnc === "true" || oldEnc === "false" || typeof oldEnc === "number" || oldEnc === "0" || oldEnc === "1") migrateFmt(`_uucfgenc-${this.id}`, `${this.keyPrefix}${this.id}-enf`, [
							0,
							"0",
							true,
							"true"
						].includes(oldEnc) ? this.compressionFormat ?? null : null);
						else {
							promises.push(this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat));
							promises.push(this.engine.deleteValue(`_uucfgenc-${this.id}`));
						}
						await Promise.allSettled(promises);
					}
					if (isNaN(dsVer) || dsVer < dsFmtVer$1) await this.engine.setValue("__ds_fmt_ver", dsFmtVer$1);
				}
				if (this.migrateIds.length > 0) {
					await this.migrateId(this.migrateIds);
					this.migrateIds = [];
				}
				const storedDataRaw = await this.engine.getValue(`${this.keyPrefix}${this.id}-dat`, null);
				const storedFmtVer = Number(await this.engine.getValue(`${this.keyPrefix}${this.id}-ver`, NaN));
				if (typeof storedDataRaw !== "string" && typeof storedDataRaw !== "object" || storedDataRaw === null || isNaN(storedFmtVer)) {
					await this.saveDefaultData(false);
					const data = this.engine.deepCopy(this.defaultData);
					this.emitEvent("loadData", data);
					return data;
				}
				const storedData = storedDataRaw ?? JSON.stringify(this.defaultData);
				const encodingFmt = String(await this.engine.getValue(`${this.keyPrefix}${this.id}-enf`, null));
				const isEncoded = encodingFmt !== "null" && encodingFmt !== "false" && encodingFmt !== "0" && encodingFmt !== "" && encodingFmt !== null;
				let parsed = typeof storedData === "string" ? await this.engine.deserializeData(storedData, isEncoded) : storedData;
				if (storedFmtVer < this.formatVersion && this.migrations) parsed = await this.runMigrations(parsed, storedFmtVer);
				const result = this.memoryCache ? this.cachedData = this.engine.deepCopy(parsed) : this.engine.deepCopy(parsed);
				this.emitEvent("loadData", result);
				return result;
			} catch (err) {
				const error = err instanceof Error ? err : new Error(String(err));
				console.warn("Error while parsing JSON data, resetting it to the default value.", err);
				this.emitEvent("error", error);
				await this.saveDefaultData();
				return this.defaultData;
			}
		}
		/**
		* Returns a copy of the data from the in-memory cache.  
		* Use {@linkcode loadData()} to get fresh data from persistent storage (usually not necessary since the cache should always exactly reflect persistent storage).  
		* ⚠️ Only available when `memoryCache` is `true` (default). When set to `false`, this produces a type and runtime error - use {@linkcode loadData()} instead.
		*/
		getData() {
			if (!this.memoryCache) throw new DatedError$1("In-memory cache is disabled for this DataStore instance, so getData() can't be used. Please use loadData() instead.");
			return this.engine.deepCopy(this.cachedData);
		}
		/** Saves the data synchronously to the in-memory cache and asynchronously to the persistent storage */
		setData(data) {
			const dataCopy = this.engine.deepCopy(data);
			if (this.memoryCache) {
				this.cachedData = data;
				this.emitEvent("updateDataSync", dataCopy);
			}
			return new Promise(async (resolve) => {
				const results = await Promise.allSettled([
					this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(data, this.encodingEnabled())),
					this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, this.formatVersion),
					this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat)
				]);
				if (results.every((r) => r.status === "fulfilled")) this.emitEvent("updateData", dataCopy);
				else {
					const error = /* @__PURE__ */ new Error("Error while saving data to persistent storage: " + results.map((r) => r.status === "rejected" ? r.reason : null).filter(Boolean).join("; "));
					console.error(error);
					this.emitEvent("error", error);
				}
				resolve();
			});
		}
		/**
		* Saves the default data passed in the constructor synchronously to the in-memory cache and asynchronously to persistent storage.
		* @param emitEvent Whether to emit the `setDefaultData` event - set to `false` to prevent event emission (used internally during initial population in {@linkcode loadData()})
		*/
		async saveDefaultData(emitEvent = true) {
			if (this.memoryCache) this.cachedData = this.defaultData;
			const results = await Promise.allSettled([
				this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(this.defaultData, this.encodingEnabled())),
				this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, this.formatVersion),
				this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat)
			]);
			if (results.every((r) => r.status === "fulfilled")) emitEvent && this.emitEvent("setDefaultData", this.defaultData);
			else {
				const error = /* @__PURE__ */ new Error("Error while saving default data to persistent storage: " + results.map((r) => r.status === "rejected" ? r.reason : null).filter(Boolean).join("; "));
				console.error(error);
				this.emitEvent("error", error);
			}
		}
		/**
		* Call this method to clear all persistently stored data associated with this DataStore instance, including the storage container (if supported by the DataStoreEngine).  
		* The in-memory cache will be left untouched, so you may still access the data with {@linkcode getData()}  
		* Calling {@linkcode loadData()} or {@linkcode setData()} after this method was called will recreate persistent storage with the cached or default data.
		*/
		async deleteData() {
			var _a, _b;
			await Promise.allSettled([
				this.engine.deleteValue(`${this.keyPrefix}${this.id}-dat`),
				this.engine.deleteValue(`${this.keyPrefix}${this.id}-ver`),
				this.engine.deleteValue(`${this.keyPrefix}${this.id}-enf`)
			]);
			await ((_b = (_a = this.engine).deleteStorage) == null ? void 0 : _b.call(_a));
			this.emitEvent("deleteData");
		}
		/** Returns whether encoding and decoding are enabled for this DataStore instance */
		encodingEnabled() {
			return Boolean(this.encodeData && this.decodeData) && this.compressionFormat !== null || Boolean(this.compressionFormat);
		}
		/**
		* Runs all necessary migration functions consecutively and saves the result to the in-memory cache and persistent storage and also returns it.  
		* This method is automatically called by {@linkcode loadData()} if the data format has changed since the last time the data was saved.  
		* Though calling this method manually is not necessary, it can be useful if you want to run migrations for special occasions like a user importing potentially outdated data that has been previously exported.  
		*   
		* If one of the migrations fails, the data will be reset to the default value if `resetOnError` is set to `true` (default). Otherwise, an error will be thrown and no data will be saved.
		*/
		async runMigrations(oldData, oldFmtVer, resetOnError = true) {
			if (!this.migrations) return oldData;
			let newData = oldData;
			const sortedMigrations = Object.entries(this.migrations).sort(([a], [b]) => Number(a) - Number(b));
			let lastFmtVer = oldFmtVer;
			for (let i = 0; i < sortedMigrations.length; i++) {
				const [fmtVer, migrationFunc] = sortedMigrations[i];
				const ver = Number(fmtVer);
				if (oldFmtVer < this.formatVersion && oldFmtVer < ver) try {
					const migRes = migrationFunc(newData);
					newData = migRes instanceof Promise ? await migRes : migRes;
					lastFmtVer = oldFmtVer = ver;
					const isFinal = ver >= this.formatVersion || i === sortedMigrations.length - 1;
					this.emitEvent("migrateData", ver, newData, isFinal);
				} catch (err) {
					const migError = new MigrationError$1(`Error while running migration function for format version '${fmtVer}'`, { cause: err });
					this.emitEvent("migrationError", ver, migError);
					this.emitEvent("error", migError);
					if (!resetOnError) throw migError;
					await this.saveDefaultData();
					return this.engine.deepCopy(this.defaultData);
				}
			}
			await Promise.allSettled([
				this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(newData, this.encodingEnabled())),
				this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, lastFmtVer),
				this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat)
			]);
			const result = this.memoryCache ? this.cachedData = this.engine.deepCopy(newData) : this.engine.deepCopy(newData);
			this.emitEvent("updateData", result);
			return result;
		}
		/**
		* Tries to migrate the currently saved persistent data from one or more old IDs to the ID set in the constructor.  
		* If no data exist for the old ID(s), nothing will be done, but some time may still pass trying to fetch the non-existent data.
		*/
		async migrateId(oldIds) {
			const ids = Array.isArray(oldIds) ? oldIds : [oldIds];
			await Promise.all(ids.map(async (id) => {
				const [data, fmtVer, isEncoded] = await (async () => {
					const [d, f, e] = await Promise.all([
						this.engine.getValue(`${this.keyPrefix}${id}-dat`, JSON.stringify(this.defaultData)),
						this.engine.getValue(`${this.keyPrefix}${id}-ver`, NaN),
						this.engine.getValue(`${this.keyPrefix}${id}-enf`, null)
					]);
					return [
						d,
						Number(f),
						Boolean(e) && String(e) !== "null"
					];
				})();
				if (data === void 0 || isNaN(fmtVer)) return;
				const parsed = await this.engine.deserializeData(data, isEncoded);
				await Promise.allSettled([
					this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(parsed, this.encodingEnabled())),
					this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, fmtVer),
					this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat),
					this.engine.deleteValue(`${this.keyPrefix}${id}-dat`),
					this.engine.deleteValue(`${this.keyPrefix}${id}-ver`),
					this.engine.deleteValue(`${this.keyPrefix}${id}-enf`)
				]);
				this.emitEvent("migrateId", id, this.id);
			}));
		}
	};
	var DataStoreEngine$1 = class {
		dataStoreOptions;
		constructor(options) {
			if (options) this.dataStoreOptions = options;
		}
		/** Called by DataStore on creation, to pass its options. Only call this if you are using this instance standalone! */
		setDataStoreOptions(dataStoreOptions) {
			this.dataStoreOptions = dataStoreOptions;
		}
		/** Serializes the given object to a string, optionally encoded with `options.encodeData` if {@linkcode useEncoding} is not set to false and the `encodeData` and `decodeData` options are set */
		async serializeData(data, useEncoding) {
			var _a, _b, _c, _d, _e;
			this.ensureDataStoreOptions();
			const stringData = JSON.stringify(data);
			if (!useEncoding || !((_a = this.dataStoreOptions) == null ? void 0 : _a.encodeData) || !((_b = this.dataStoreOptions) == null ? void 0 : _b.decodeData)) return stringData;
			const encRes = (_e = (_d = (_c = this.dataStoreOptions) == null ? void 0 : _c.encodeData) == null ? void 0 : _d[1]) == null ? void 0 : _e.call(_d, stringData);
			if (encRes instanceof Promise) return await encRes;
			return encRes;
		}
		/** Deserializes the given string to a JSON object, optionally decoded with `options.decodeData` if {@linkcode useEncoding} is set to true */
		async deserializeData(data, useEncoding) {
			var _a, _b, _c;
			this.ensureDataStoreOptions();
			let decRes = ((_a = this.dataStoreOptions) == null ? void 0 : _a.decodeData) && useEncoding ? (_c = (_b = this.dataStoreOptions.decodeData) == null ? void 0 : _b[1]) == null ? void 0 : _c.call(_b, data) : void 0;
			if (decRes instanceof Promise) decRes = await decRes;
			return JSON.parse(decRes ?? data);
		}
		/** Throws an error if the {@linkcode DataStoreOptions} are not set or invalid. Call in every method where {@linkcode DataStoreEngineDSOptions} needs to be present. */
		ensureDataStoreOptions() {
			if (!this.dataStoreOptions) throw new DatedError$1("DataStoreEngine must be initialized with DataStore options before use. If you are using this instance standalone, set them in the constructor or call `setDataStoreOptions()` with the DataStore options.");
			if (!this.dataStoreOptions.id) throw new DatedError$1("DataStoreEngine must be initialized with a valid DataStore ID");
		}
		/**
		* Copies a JSON-compatible object and loses all its internal references in the process.  
		* Uses [`structuredClone()`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) if available, otherwise falls back to `JSON.parse(JSON.stringify(obj))`.
		*/
		deepCopy(obj) {
			try {
				if ("structuredClone" in globalThis) return structuredClone(obj);
			} catch {}
			return JSON.parse(JSON.stringify(obj));
		}
	};
	var BrowserStorageEngine$1 = class extends DataStoreEngine$1 {
		options;
		/**
		* Creates an instance of `BrowserStorageEngine`.  
		*   
		* - ⚠️ Requires a DOM environment  
		* - ⚠️ Don't reuse engine instances, always create a new one for each {@linkcode DataStore} instance
		*/
		constructor(options) {
			super(options == null ? void 0 : options.dataStoreOptions);
			this.options = {
				type: "localStorage",
				...options
			};
		}
		/** Fetches a value from persistent storage */
		async getValue(name, defaultValue) {
			const val = this.options.type === "localStorage" ? globalThis.localStorage.getItem(name) : globalThis.sessionStorage.getItem(name);
			return typeof val === "undefined" ? defaultValue : val;
		}
		/** Sets a value in persistent storage */
		async setValue(name, value) {
			if (this.options.type === "localStorage") globalThis.localStorage.setItem(name, String(value));
			else globalThis.sessionStorage.setItem(name, String(value));
		}
		/** Deletes a value from persistent storage */
		async deleteValue(name) {
			if (this.options.type === "localStorage") globalThis.localStorage.removeItem(name);
			else globalThis.sessionStorage.removeItem(name);
		}
	};
	var fs$1;
	var FileStorageEngine$1 = class extends DataStoreEngine$1 {
		options;
		fileAccessQueue = Promise.resolve();
		/**
		* Creates an instance of `FileStorageEngine`.  
		*   
		* - ⚠️ Requires Node.js or Deno with Node compatibility (v1.31+)  
		* - ⚠️ Don't reuse engine instances, always create a new one for each {@linkcode DataStore} instance
		*/
		constructor(options) {
			super(options == null ? void 0 : options.dataStoreOptions);
			this.options = {
				filePath: (id) => `.ds-${id}`,
				...options
			};
		}
		/** Reads the file contents */
		async readFile() {
			var _a, _b, _c, _d;
			this.ensureDataStoreOptions();
			try {
				if (!fs$1) fs$1 = (_a = await Promise.resolve().then(() => /* @__PURE__ */ __toESM(require___vite_browser_external(), 1))) == null ? void 0 : _a.default;
				if (!fs$1) throw new ScriptContextError$1("FileStorageEngine requires Node.js or Deno with Node compatibility (v1.31+)", { cause: new DatedError$1("'node:fs/promises' module not available") });
				const path = typeof this.options.filePath === "string" ? this.options.filePath : this.options.filePath(this.dataStoreOptions.id, this.dataStoreOptions);
				const data = await fs$1.readFile(path, "utf-8");
				return data ? JSON.parse(await ((_d = (_c = (_b = this.dataStoreOptions) == null ? void 0 : _b.decodeData) == null ? void 0 : _c[1]) == null ? void 0 : _d.call(_c, data)) ?? data) : void 0;
			} catch {
				return;
			}
		}
		/** Overwrites the file contents */
		async writeFile(data) {
			var _a, _b, _c, _d;
			this.ensureDataStoreOptions();
			try {
				if (!fs$1) fs$1 = (_a = await Promise.resolve().then(() => /* @__PURE__ */ __toESM(require___vite_browser_external(), 1))) == null ? void 0 : _a.default;
				if (!fs$1) throw new ScriptContextError$1("FileStorageEngine requires Node.js or Deno with Node compatibility (v1.31+)", { cause: new DatedError$1("'node:fs/promises' module not available") });
				const path = typeof this.options.filePath === "string" ? this.options.filePath : this.options.filePath(this.dataStoreOptions.id, this.dataStoreOptions);
				await fs$1.mkdir(path.slice(0, path.lastIndexOf(path.includes("/") ? "/" : "\\")), { recursive: true });
				await fs$1.writeFile(path, await ((_d = (_c = (_b = this.dataStoreOptions) == null ? void 0 : _b.encodeData) == null ? void 0 : _c[1]) == null ? void 0 : _d.call(_c, JSON.stringify(data))) ?? JSON.stringify(data, void 0, 2), "utf-8");
			} catch (err) {
				console.error("Error writing file:", err);
			}
		}
		/** Fetches a value from persistent storage */
		async getValue(name, defaultValue) {
			const data = await this.readFile();
			if (!data) return defaultValue;
			const value = data == null ? void 0 : data[name];
			if (typeof value === "undefined") return defaultValue;
			if (typeof defaultValue === "string") {
				if (typeof value === "object" && value !== null) return JSON.stringify(value);
				if (typeof value === "string") return value;
				return String(value);
			}
			if (typeof value === "string") try {
				return JSON.parse(value);
			} catch {
				return defaultValue;
			}
			return value;
		}
		/** Sets a value in persistent storage */
		async setValue(name, value) {
			this.fileAccessQueue = this.fileAccessQueue.then(async () => {
				let data = await this.readFile();
				if (!data) data = {};
				let storeVal = value;
				if (typeof value === "string") try {
					if (value.startsWith("{") || value.startsWith("[")) {
						const parsed = JSON.parse(value);
						if (typeof parsed === "object" && parsed !== null) storeVal = parsed;
					}
				} catch {}
				data[name] = storeVal;
				await this.writeFile(data);
			}).catch((err) => {
				console.error("Error in setValue:", err);
				throw err;
			});
			await this.fileAccessQueue.catch(() => {});
		}
		/** Deletes a value from persistent storage */
		async deleteValue(name) {
			this.fileAccessQueue = this.fileAccessQueue.then(async () => {
				const data = await this.readFile();
				if (!data) return;
				delete data[name];
				await this.writeFile(data);
			}).catch((err) => {
				console.error("Error in deleteValue:", err);
				throw err;
			});
			await this.fileAccessQueue.catch(() => {});
		}
		/** Deletes the file that contains the data of this DataStore. */
		async deleteStorage() {
			var _a;
			this.ensureDataStoreOptions();
			try {
				if (!fs$1) fs$1 = (_a = await Promise.resolve().then(() => /* @__PURE__ */ __toESM(require___vite_browser_external(), 1))) == null ? void 0 : _a.default;
				if (!fs$1) throw new ScriptContextError$1("FileStorageEngine requires Node.js or Deno with Node compatibility (v1.31+)", { cause: new DatedError$1("'node:fs/promises' module not available") });
				const path = typeof this.options.filePath === "string" ? this.options.filePath : this.options.filePath(this.dataStoreOptions.id, this.dataStoreOptions);
				return await fs$1.unlink(path);
			} catch (err) {
				console.error("Error deleting file:", err);
			}
		}
	};
	var IndexedDBStorageEngine$1 = class extends DataStoreEngine$1 {
		options;
		/** Name of the IndexedDB object store that holds the key-value pairs */
		storeName;
		/** Cached handle to the opened database, populated lazily on the first call to {@linkcode getValue}, {@linkcode setValue} or {@linkcode deleteValue} */
		db;
		/** Resolves once the database has finished opening, so concurrent calls don't open it more than once */
		dbOpenPromise;
		/**
		* Creates an instance of `IndexedDBStorageEngine`, a {@linkcode DataStore} storage engine that uses the [IndexedDB API.](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
		* This allows even non-JSON-serializable data to be stored, like a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) or [Blob.](https://developer.mozilla.org/en-US/docs/Web/API/Blob)  
		*   
		* - ⚠️ Requires an environment with access to the [IndexedDB API.](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
		* - ⚠️ Don't reuse engine instances, always create a new one for each instance of stored data (or {@linkcode DataStore} instance).
		*/
		constructor(options) {
			super(options == null ? void 0 : options.dataStoreOptions);
			this.options = {
				dbStoreName: "keyval",
				dbPrefix: "__ds-",
				...options
			};
			this.storeName = this.options.dbStoreName;
		}
		/** Fetches a value from persistent storage. */
		async getValue(name, defaultValue) {
			const db = await this.openDb();
			const val = await new Promise((resolve, reject) => {
				const req = db.transaction(this.storeName, "readonly").objectStore(this.storeName).get(name);
				req.addEventListener("success", () => resolve(req.result));
				req.addEventListener("error", () => reject(req.error));
			});
			return typeof val === "undefined" ? defaultValue : val;
		}
		/** Sets a value in persistent storage. */
		async setValue(name, value) {
			const db = await this.openDb();
			await new Promise((resolve, reject) => {
				const tx = db.transaction(this.storeName, "readwrite");
				tx.objectStore(this.storeName).put(value, name);
				tx.addEventListener("complete", () => resolve());
				tx.addEventListener("error", () => reject(tx.error));
				tx.addEventListener("abort", () => reject(tx.error));
			});
		}
		/** Deletes a value from persistent storage. */
		async deleteValue(name) {
			const db = await this.openDb();
			await new Promise((resolve, reject) => {
				const tx = db.transaction(this.storeName, "readwrite");
				tx.objectStore(this.storeName).delete(name);
				tx.addEventListener("complete", () => resolve());
				tx.addEventListener("error", () => reject(tx.error));
				tx.addEventListener("abort", () => reject(tx.error));
			});
		}
		/** Lazily opens the {@linkcode IDBDatabase} for this DataStore's ID, or returns the cached instance from a previous call. */
		openDb() {
			this.ensureDataStoreOptions();
			if (this.db) return Promise.resolve(this.db);
			if (this.dbOpenPromise) return this.dbOpenPromise;
			if (typeof indexedDB === "undefined") throw new ScriptContextError$1("IndexedDBStorageEngine requires a DOM environment with access to the IndexedDB API", { cause: new DatedError$1("'indexedDB' is not available in the global scope") });
			return this.dbOpenPromise = new Promise((resolve, reject) => {
				const req = indexedDB.open(`${this.options.dbPrefix}${this.dataStoreOptions.id}`);
				req.addEventListener("upgradeneeded", () => {
					req.result.createObjectStore(this.storeName);
				});
				req.addEventListener("success", () => {
					this.db = req.result;
					resolve(req.result);
				});
				req.addEventListener("error", () => reject(req.error));
			});
		}
	};
	var DataStoreSerializer$1 = class _DataStoreSerializer extends PicoEmitter$1 {
		stores;
		options;
		/** Set of IDs of loaded stores. Is kept in sync via {@linkcode bindStoreEvents()}. */
		loadedStores = /* @__PURE__ */ new Set();
		/** Unsubscribe functions for the event listeners bound to each contained {@linkcode DataStore} instance, keyed by store ID. */
		storeEventUnsubs = /* @__PURE__ */ new Map();
		constructor(stores, options = {}) {
			super(options == null ? void 0 : options.picoEmitterOptions);
			if (!crypto || !crypto.subtle) throw new ScriptContextError$1("DataStoreSerializer has to run in a secure context (HTTPS) or in another environment that implements the subtleCrypto API!");
			this.stores = stores;
			this.options = {
				addChecksum: true,
				ensureIntegrity: true,
				remapIds: {},
				stringifyData: true,
				picoEmitterOptions: {},
				...options
			};
			for (const store of this.stores) this.bindStoreEvents(store);
		}
		/**
		* Subscribes to the relevant events of a single {@linkcode DataStore} instance and forwards them as this instance's own events, so that they're also emitted when a contained store is loaded, reset or deleted directly through its own instance instead of through this serializer.
		*/
		bindStoreEvents(store) {
			this.storeEventUnsubs.set(store.id, [
				store.on("loadData", () => {
					this.loadedStores.add(store.id);
					this.emitEvent("loadedStore", store);
					if (this.stores.every((s) => this.loadedStores.has(s.id))) this.emitEvent("loadedAllStores");
				}),
				store.on("setDefaultData", () => this.emitEvent("resetStores", [store])),
				store.on("deleteData", () => {
					this.loadedStores.delete(store.id);
					this.emitEvent("deletedStores", [store]);
				})
			]);
		}
		/** Unsubscribes from the events of all currently bound {@linkcode DataStore} instances. */
		unbindStoreEvents() {
			for (const unsubs of this.storeEventUnsubs.values()) for (const unsub of unsubs) unsub();
			this.storeEventUnsubs.clear();
		}
		/**
		* Calculates the checksum of a string or {@linkcode DataStoreData} object. By default, this uses {@linkcode computeHash()} with SHA-256, digested as a hex string.  
		* Override this in a subclass if a custom checksum method is needed for some reason.
		*/
		async calcChecksum(input, algorithm = "SHA-256") {
			try {
				return computeHash$1(typeof input === "string" ? input : JSON.stringify(input), algorithm);
			} catch (err) {
				throw new Error(`Failed to calculate checksum: ${err.message}`, { cause: err });
			}
		}
		/**
		* Serializes only a subset of the {@linkcode DataStore}s into a string.  
		* @param stores An array of store IDs or functions that take a store ID and return a boolean
		* @param useEncoding Whether to encode the data using each DataStore's `encodeData()` method
		* @param stringified Whether to return the result as a string or as an array of `SerializedDataStore` objects
		*/
		async serializePartial(stores, useEncoding = true, stringified = true) {
			var _a;
			const serData = [];
			const filteredStores = this.stores.filter((s) => typeof stores === "function" ? stores(s.id) : stores.includes(s.id));
			for (const storeInst of filteredStores) {
				const encoded = Boolean(useEncoding && storeInst.encodingEnabled() && ((_a = storeInst.encodeData) == null ? void 0 : _a[1]));
				const rawData = storeInst.memoryCache ? storeInst.getData() : await storeInst.loadData();
				const data = encoded ? await storeInst.encodeData[1](JSON.stringify(rawData)) : this.options.stringifyData ? JSON.stringify(rawData) : rawData;
				serData.push({
					id: storeInst.id,
					data,
					formatVersion: storeInst.formatVersion,
					encoded,
					checksum: this.options.addChecksum ? await this.calcChecksum(data) : void 0
				});
			}
			return stringified ? JSON.stringify(serData) : serData;
		}
		/**
		* Serializes the data stores into a string.  
		* @param useEncoding Whether to encode the data using each {@linkcode DataStore}'s `encodeData()` method
		* @param stringified Whether to return the result as a string or as an array of `SerializedDataStore` objects
		*/
		async serialize(useEncoding = true, stringified = true) {
			return this.serializePartial(this.stores.map((s) => s.id), useEncoding, stringified);
		}
		/**
		* Deserializes the data exported via {@linkcode serialize()} and imports only a subset into the DataStore instances.  
		* Also triggers the migration process if the data format has changed.
		*/
		async deserializePartial(stores, data) {
			const deserStores = typeof data === "string" ? JSON.parse(data) : data;
			if (!Array.isArray(deserStores) || !deserStores.every(_DataStoreSerializer.isSerializedDataStoreObj)) throw new TypeError("Invalid serialized data format! Expected an array of SerializedDataStore objects.");
			const resolveStoreId = (id) => {
				var _a;
				return ((_a = Object.entries(this.options.remapIds).find(([, v]) => v.includes(id))) == null ? void 0 : _a[0]) ?? id;
			};
			for (const storeData of deserStores) {
				const curStoreID = resolveStoreId(storeData.id);
				if (!(typeof stores === "function" ? stores(curStoreID) : stores.includes(curStoreID))) continue;
				const storeInst = this.stores.find((s) => s.id === curStoreID);
				if (!storeInst) throw new DatedError$1(`Can't deserialize data because no DataStore instance with the ID "${curStoreID}" was found! Make sure to provide it in the DataStoreSerializer constructor.`);
				if (this.options.ensureIntegrity && typeof storeData.checksum === "string") {
					const checksum = await this.calcChecksum(storeData.data);
					if (checksum !== storeData.checksum) throw new ChecksumMismatchError$1(`Checksum mismatch for DataStore with ID "${storeData.id}"!
Expected: ${storeData.checksum}
Has: ${checksum}`);
				}
				const decodedData = storeData.encoded && storeInst.encodingEnabled() ? await storeInst.decodeData[1](typeof storeData.data === "string" ? storeData.data : JSON.stringify(storeData.data)) : storeData.data;
				if (storeData.formatVersion && !isNaN(Number(storeData.formatVersion)) && Number(storeData.formatVersion) < storeInst.formatVersion) await storeInst.runMigrations(typeof decodedData === "string" ? JSON.parse(decodedData) : decodedData, Number(storeData.formatVersion), false);
				else await storeInst.setData(typeof decodedData === "string" ? JSON.parse(decodedData) : decodedData);
			}
		}
		/**
		* Deserializes the data exported via {@linkcode serialize()} and imports the data into all matching {@linkcode DataStore} instances.  
		* Also triggers the migration process if the data format has changed.
		*/
		async deserialize(data) {
			return this.deserializePartial(this.stores.map((s) => s.id), data);
		}
		/**
		* Loads the persistent data of the {@linkcode DataStore} instances into the in-memory cache.  
		* Also triggers the migration process if the data format has changed.
		* @param stores An array of store IDs or a function that takes the store IDs and returns a boolean - if omitted, all stores will be loaded
		* @returns Returns a PromiseSettledResult array with the results of each DataStore instance in the format `{ id: string, data: object }`
		*/
		async loadStoresData(stores) {
			return Promise.allSettled(this.getStoresFiltered(stores).map(async (store) => ({
				id: store.id,
				data: await store.loadData()
			})));
		}
		/**
		* Resets the persistent and in-memory data of the {@linkcode DataStore} instances to their default values.
		* @param stores An array of store IDs or a function that takes the store IDs and returns a boolean - if omitted, all stores will be affected
		*/
		async resetStoresData(stores) {
			return Promise.allSettled(this.getStoresFiltered(stores).map((store) => store.saveDefaultData()));
		}
		/**
		* Deletes the persistent data of the {@linkcode DataStore} instances.
		* Leaves the in-memory data untouched.
		* @param stores An array of store IDs or a function that takes the store IDs and returns a boolean - if omitted, all stores will be affected
		*/
		async deleteStoresData(stores) {
			return Promise.allSettled(this.getStoresFiltered(stores).map((store) => store.deleteData()));
		}
		/** Returns an array of the {@linkcode DataStore} instances managed by this DataStoreSerializer. */
		getStores() {
			return this.stores;
		}
		/**
		* Overwrites this DataStoreSerializer instance's stores.
		* @param stores Array of new stores for this instance to manage.
		* @param loadData Set to true to call {@linkcode DataStoreSerializer.loadStoresData()} for the overwritten stores before resolving.
		*/
		async setStores(stores, loadData = false) {
			this.unbindStoreEvents();
			this.stores = stores;
			this.loadedStores = /* @__PURE__ */ new Set();
			for (const store of this.stores) this.bindStoreEvents(store);
			if (loadData) await this.loadStoresData();
		}
		/** Returns the {@linkcode DataStore} instances whose IDs match the provided array or function. */
		getStoresFiltered(stores) {
			return this.stores.filter((s) => typeof stores === "undefined" ? true : Array.isArray(stores) ? stores.includes(s.id) : stores(s.id));
		}
		/** Checks if a given value is an array of SerializedDataStore objects. */
		static isSerializedDataStoreObjArray(obj) {
			return Array.isArray(obj) && obj.every((o) => typeof o === "object" && o !== null && "id" in o && "data" in o && "formatVersion" in o && "encoded" in o);
		}
		/** Checks if a given value is a SerializedDataStore object. */
		static isSerializedDataStoreObj(obj) {
			return typeof obj === "object" && obj !== null && "id" in obj && "data" in obj && "formatVersion" in obj && "encoded" in obj;
		}
	};
	var Debouncer$1 = class extends NanoEmitter$2 {
		/**
		* Creates a new debouncer with the specified timeout and edge type.
		* @param timeout Timeout in milliseconds between letting through calls - defaults to 200
		* @param type The edge type to use for the debouncer - see {@linkcode DebouncerType} for details or [the documentation for an explanation and diagram](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#debouncer) - defaults to "immediate"
		*/
		constructor(timeout = 200, type = "immediate", nanoEmitterOptions) {
			super(nanoEmitterOptions);
			this.timeout = timeout;
			this.type = type;
		}
		timeout;
		type;
		/** All registered listener functions and the time they were attached */
		listeners = [];
		/** The currently active timeout */
		activeTimeout;
		/** The latest queued call */
		queuedCall;
		/** Adds a listener function that will be called on timeout */
		addListener(fn) {
			this.listeners.push(fn);
		}
		/** Removes the listener with the specified function reference */
		removeListener(fn) {
			const idx = this.listeners.findIndex((l) => l === fn);
			idx !== -1 && this.listeners.splice(idx, 1);
		}
		/** Removes all listeners */
		removeAllListeners() {
			this.listeners = [];
		}
		/** Returns all registered listeners */
		getListeners() {
			return this.listeners;
		}
		/** Sets the timeout for the debouncer */
		setTimeout(timeout) {
			this.emitEvent("change", this.timeout = timeout, this.type);
		}
		/** Returns the current timeout */
		getTimeout() {
			return this.timeout;
		}
		/** Whether the timeout is currently active, meaning any latest call to the {@linkcode call()} method will be queued */
		isTimeoutActive() {
			return typeof this.activeTimeout !== "undefined";
		}
		/** Sets the edge type for the debouncer */
		setType(type) {
			this.emitEvent("change", this.timeout, this.type = type);
		}
		/** Returns the current edge type */
		getType() {
			return this.type;
		}
		/** Use this to call the debouncer with the specified arguments that will be passed to all listener functions registered with {@linkcode addListener()} */
		call(...args) {
			const cl = (...a) => {
				this.queuedCall = void 0;
				this.emitEvent("call", ...a);
				this.listeners.forEach((l) => l.call(this, ...a));
			};
			const setRepeatTimeout = () => {
				this.activeTimeout = setTimeout(() => {
					if (this.queuedCall) {
						this.queuedCall();
						setRepeatTimeout();
					} else this.activeTimeout = void 0;
				}, this.timeout);
			};
			switch (this.type) {
				case "immediate":
					if (typeof this.activeTimeout === "undefined") {
						cl(...args);
						setRepeatTimeout();
					} else this.queuedCall = () => cl(...args);
					break;
				case "idle":
					if (this.activeTimeout) clearTimeout(this.activeTimeout);
					this.activeTimeout = setTimeout(() => {
						cl(...args);
						this.activeTimeout = void 0;
					}, this.timeout);
					break;
				default: throw new TypeError(`Invalid debouncer type: ${this.type}`);
			}
		}
	};
	function debounce$1(fn, timeout = 200, type = "immediate", nanoEmitterOptions) {
		const debouncer = new Debouncer$1(timeout, type, nanoEmitterOptions);
		debouncer.addListener(fn);
		const func = ((...args) => debouncer.call(...args));
		func.debouncer = debouncer;
		return func;
	}
	//#endregion
	//#region node_modules/.pnpm/@sv443-network+userutils@11.0.0/node_modules/@sv443-network/userutils/dist/UserUtils.mjs
	var UserUtils_exports = /* @__PURE__ */ __exportAll({
		BrowserStorageEngine: () => BrowserStorageEngine,
		ChecksumMismatchError: () => ChecksumMismatchError,
		CustomError: () => CustomError,
		DataStore: () => DataStore,
		DataStoreEngine: () => DataStoreEngine,
		DataStoreSerializer: () => DataStoreSerializer,
		DatedError: () => DatedError,
		Debouncer: () => Debouncer,
		Dialog: () => Dialog,
		FileStorageEngine: () => FileStorageEngine,
		GMStorageEngine: () => GMStorageEngine,
		IndexedDBStorageEngine: () => IndexedDBStorageEngine,
		MigrationError: () => MigrationError,
		Mixins: () => Mixins,
		NanoEmitter: () => NanoEmitter$1,
		NetworkError: () => NetworkError,
		PicoEmitter: () => PicoEmitter,
		PlatformError: () => PlatformError,
		ScriptContextError: () => ScriptContextError,
		SelectorObserver: () => SelectorObserver,
		ValidationError: () => ValidationError,
		abtoa: () => abtoa,
		addGlobalStyle: () => addGlobalStyle,
		addParent: () => addParent,
		atoab: () => atoab,
		autoPlural: () => autoPlural$1,
		bitSetHas: () => bitSetHas,
		capitalize: () => capitalize,
		clamp: () => clamp,
		compress: () => compress,
		computeHash: () => computeHash,
		consumeGen: () => consumeGen,
		consumeStringGen: () => consumeStringGen,
		createProgressBar: () => createProgressBar,
		createRecurringTask: () => createRecurringTask,
		createTable: () => createTable,
		currentDialogId: () => currentDialogId$1,
		darkenColor: () => darkenColor,
		debounce: () => debounce,
		decompress: () => decompress,
		defaultDialogCss: () => defaultDialogCss,
		defaultPbChars: () => defaultPbChars,
		defaultStrings: () => defaultStrings,
		defaultTableLineCharset: () => defaultTableLineCharset,
		digitCount: () => digitCount,
		fetchAdvanced: () => fetchAdvanced,
		formatNumber: () => formatNumber$1,
		getCallStack: () => getCallStack,
		getListLength: () => getListLength,
		getSiblingsFrame: () => getSiblingsFrame,
		getUnsafeWindow: () => getUnsafeWindow$1,
		getterifyObj: () => getterifyObj$1,
		hexToRgb: () => hexToRgb,
		insertValues: () => insertValues,
		interceptEvent: () => interceptEvent,
		interceptWindowEvent: () => interceptWindowEvent,
		isDomLoaded: () => isDomLoaded,
		isScrollable: () => isScrollable,
		joinArrayReadable: () => joinArrayReadable,
		lightenColor: () => lightenColor,
		mapRange: () => mapRange,
		observeElementProp: () => observeElementProp,
		onDomLoad: () => onDomLoad$1,
		openDialogs: () => openDialogs$1,
		openInNewTab: () => openInNewTab,
		overflowVal: () => overflowVal$1,
		pauseFor: () => pauseFor,
		preloadImages: () => preloadImages,
		probeElementStyle: () => probeElementStyle,
		pureObj: () => pureObj$1,
		randRange: () => randRange,
		randomId: () => randomId,
		randomItem: () => randomItem,
		randomItemIndex: () => randomItemIndex,
		randomizeArray: () => randomizeArray,
		rgbToHex: () => rgbToHex,
		roundFixed: () => roundFixed,
		scheduleExit: () => scheduleExit,
		secsToTimeStr: () => secsToTimeStr,
		setImmediateInterval: () => setImmediateInterval,
		setImmediateTimeoutLoop: () => setImmediateTimeoutLoop,
		setInnerHtmlUnsafe: () => setInnerHtmlUnsafe,
		takeRandomItem: () => takeRandomItem,
		takeRandomItemIndex: () => takeRandomItemIndex,
		tr: () => tr,
		truncStr: () => truncStr,
		valsWithin: () => valsWithin,
		versions: () => versions
	});
	var __defProp = Object.defineProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	function bitSetHas(bitSet, checkVal) {
		return (bitSet & checkVal) === checkVal;
	}
	function clamp(value, min, max) {
		if (typeof max !== "number") {
			max = min;
			min = 0;
		}
		return Math.max(Math.min(value, max), min);
	}
	function digitCount(num, withDecimals = true) {
		num = Number(!["string", "number"].includes(typeof num) ? String(num) : num);
		if (typeof num === "number" && isNaN(num)) return NaN;
		const [intPart, decPart] = num.toString().split(".");
		return (intPart === "0" ? 1 : Math.floor(Math.log10(Math.abs(Number(intPart))) + 1)) + (withDecimals && decPart ? decPart.length : 0);
	}
	function formatNumber$1(number, locale, format) {
		return number.toLocaleString(locale, format === "short" ? {
			notation: "compact",
			compactDisplay: "short",
			maximumFractionDigits: 1
		} : {
			style: "decimal",
			maximumFractionDigits: 0
		});
	}
	function mapRange(value, range1min, range1max, range2min, range2max) {
		if (typeof range2min === "undefined" || typeof range2max === "undefined") {
			range2max = range1max;
			range1max = range1min;
			range2min = range1min = 0;
		}
		if (Number(range1min) === 0 && Number(range2min) === 0) return value * (range2max / range1max);
		return (value - range1min) * ((range2max - range2min) / (range1max - range1min)) + range2min;
	}
	function overflowVal$1(value, minOrMax, max) {
		const min = typeof max === "number" ? minOrMax : 0;
		max = typeof max === "number" ? max : minOrMax;
		if (min > max) throw new RangeError(`Parameter "min" can't be bigger than "max"`);
		if (isNaN(value) || isNaN(min) || isNaN(max) || !isFinite(value) || !isFinite(min) || !isFinite(max)) return NaN;
		if (value >= min && value <= max) return value;
		const range = max - min + 1;
		return ((value - min) % range + range) % range + min;
	}
	function randRange(...args) {
		let min, max, enhancedEntropy = false;
		if (typeof args[0] === "number" && typeof args[1] === "number") [min, max] = args;
		else if (typeof args[0] === "number" && typeof args[1] !== "number") {
			min = 0;
			[max] = args;
		} else throw new TypeError(`Wrong parameter(s) provided - expected (number, boolean|undefined) or (number, number, boolean|undefined) but got (${args.map((a) => typeof a).join(", ")}) instead`);
		if (typeof args[2] === "boolean") enhancedEntropy = args[2];
		else if (typeof args[1] === "boolean") enhancedEntropy = args[1];
		min = Number(min);
		max = Number(max);
		if (isNaN(min) || isNaN(max)) return NaN;
		if (min > max) throw new TypeError(`Parameter "min" can't be bigger than "max"`);
		if (enhancedEntropy) {
			const uintArr = new Uint8Array(1);
			crypto.getRandomValues(uintArr);
			return Number(Array.from(uintArr, (v) => Math.round(mapRange(v, 0, 255, min, max)).toString(10)).join(""));
		} else return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function roundFixed(num, fractionDigits) {
		const scale = 10 ** fractionDigits;
		return Math.round(num * scale) / scale;
	}
	function valsWithin(a, b, dec = 1, withinRange = .5) {
		return Math.abs(roundFixed(a, dec) - roundFixed(b, dec)) <= withinRange;
	}
	function randomItem(array) {
		return randomItemIndex(array)[0];
	}
	function randomItemIndex(array) {
		if (array.length === 0) return [void 0, void 0];
		const idx = randRange(array.length - 1);
		return [array[idx], idx];
	}
	function randomizeArray(array) {
		const retArray = [...array];
		if (array.length === 0) return retArray;
		for (let i = retArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[retArray[i], retArray[j]] = [retArray[j], retArray[i]];
		}
		return retArray;
	}
	function takeRandomItem(arr) {
		var _a;
		return (_a = takeRandomItemIndex(arr)) == null ? void 0 : _a[0];
	}
	function takeRandomItemIndex(arr) {
		const [itm, idx] = randomItemIndex(arr);
		if (idx === void 0) return [void 0, void 0];
		arr.splice(idx, 1);
		return [itm, idx];
	}
	function darkenColor(color, percent, upperCase = false) {
		var _a;
		color = color.trim();
		const darkenRgb = (r2, g2, b2, percent2) => {
			r2 = Math.max(0, Math.min(255, r2 - r2 * percent2 / 100));
			g2 = Math.max(0, Math.min(255, g2 - g2 * percent2 / 100));
			b2 = Math.max(0, Math.min(255, b2 - b2 * percent2 / 100));
			return [
				r2,
				g2,
				b2
			];
		};
		let r, g, b, a;
		const isHexCol = color.match(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/);
		if (isHexCol) [r, g, b, a] = hexToRgb(color);
		else if (color.startsWith("rgb")) {
			const rgbValues = (_a = color.match(/\d+(\.\d+)?/g)) == null ? void 0 : _a.map(Number);
			if (!rgbValues) throw new TypeError("Invalid RGB/RGBA color format");
			[r, g, b, a] = rgbValues;
		} else throw new TypeError("Unsupported color format");
		[r, g, b] = darkenRgb(r, g, b, percent);
		if (isHexCol) return rgbToHex(r, g, b, a, color.startsWith("#"), upperCase);
		else if (color.startsWith("rgba")) return `rgba(${r}, ${g}, ${b}, ${a != null ? a : NaN})`;
		else return `rgb(${r}, ${g}, ${b})`;
	}
	function hexToRgb(hex) {
		hex = (hex.startsWith("#") ? hex.slice(1) : hex).trim();
		const a = hex.length === 8 || hex.length === 4 ? parseInt(hex.slice(-(hex.length / 4)), 16) / (hex.length === 8 ? 255 : 15) : void 0;
		if (!isNaN(Number(a))) hex = hex.slice(0, -(hex.length / 4));
		if (hex.length === 3 || hex.length === 4) hex = hex.split("").map((c) => c + c).join("");
		const hexInt = parseInt(hex, 16);
		const r = hexInt >> 16 & 255;
		const g = hexInt >> 8 & 255;
		const b = hexInt & 255;
		return [
			clamp(r, 0, 255),
			clamp(g, 0, 255),
			clamp(b, 0, 255),
			typeof a === "number" ? clamp(a, 0, 1) : void 0
		];
	}
	function lightenColor(color, percent, upperCase = false) {
		return darkenColor(color, percent * -1, upperCase);
	}
	function rgbToHex(red, green, blue, alpha, withHash = true, upperCase = false) {
		const toHexVal = (n) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0")[upperCase ? "toUpperCase" : "toLowerCase"]();
		return `${withHash ? "#" : ""}${toHexVal(red)}${toHexVal(green)}${toHexVal(blue)}${alpha ? toHexVal(alpha * 255) : ""}`;
	}
	function abtoa(buf) {
		return btoa(new Uint8Array(buf).reduce((data, byte) => data + String.fromCharCode(byte), ""));
	}
	function atoab(str) {
		return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
	}
	async function compress(input, compressionFormat, outputType = "string") {
		var _a;
		const byteArray = input instanceof Uint8Array ? input : new TextEncoder().encode((_a = input == null ? void 0 : input.toString()) != null ? _a : String(input));
		const comp = new CompressionStream(compressionFormat);
		const writer = comp.writable.getWriter();
		writer.write(byteArray);
		writer.close();
		const uintArr = new Uint8Array(await new Response(comp.readable).arrayBuffer());
		return outputType === "arrayBuffer" ? uintArr : abtoa(uintArr);
	}
	async function decompress(input, compressionFormat, outputType = "string") {
		var _a;
		const byteArray = input instanceof Uint8Array ? input : atoab((_a = input == null ? void 0 : input.toString()) != null ? _a : String(input));
		const decomp = new DecompressionStream(compressionFormat);
		const writer = decomp.writable.getWriter();
		writer.write(byteArray);
		writer.close();
		const uintArr = new Uint8Array(await new Response(decomp.readable).arrayBuffer());
		return outputType === "arrayBuffer" ? uintArr : new TextDecoder().decode(uintArr);
	}
	async function computeHash(input, algorithm = "SHA-256") {
		let data;
		if (typeof input === "string") data = new TextEncoder().encode(input);
		else data = input;
		const hashBuffer = await crypto.subtle.digest(algorithm, data);
		return Array.from(new Uint8Array(hashBuffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
	}
	function randomId(length = 16, radix = 16, enhancedEntropy = false, randomCase = true) {
		if (length < 1) throw new RangeError("The length argument must be at least 1");
		if (radix < 2 || radix > 36) throw new RangeError("The radix argument must be between 2 and 36");
		let arr = [];
		const caseArr = randomCase ? [0, 1] : [0];
		if (enhancedEntropy) {
			const uintArr = new Uint8Array(length);
			crypto.getRandomValues(uintArr);
			arr = Array.from(uintArr, (v) => mapRange(v, 0, 255, 0, radix).toString(radix).substring(0, 1));
		} else arr = Array.from({ length }, () => Math.floor(Math.random() * radix).toString(radix));
		if (!arr.some((v) => /[a-zA-Z]/.test(v))) return arr.join("");
		return arr.map((v) => caseArr[randRange(0, caseArr.length - 1, enhancedEntropy)] === 1 ? v.toUpperCase() : v).join("");
	}
	var DatedError = class extends Error {
		constructor(message, options) {
			super(message, options);
			__publicField(this, "date");
			this.name = this.constructor.name;
			this.date = /* @__PURE__ */ new Date();
		}
	};
	var ChecksumMismatchError = class extends DatedError {
		constructor(message, options) {
			super(message, options);
			this.name = "ChecksumMismatchError";
		}
	};
	var CustomError = class extends DatedError {
		constructor(name, message, options) {
			super(message, options);
			this.name = name;
		}
	};
	var MigrationError = class extends DatedError {
		constructor(message, options) {
			super(message, options);
			this.name = "MigrationError";
		}
	};
	var ValidationError = class extends DatedError {
		constructor(message, options) {
			super(message, options);
			this.name = "ValidationError";
		}
	};
	var ScriptContextError = class extends DatedError {
		constructor(message, options) {
			super(message, options);
			this.name = "ScriptContextError";
		}
	};
	var NetworkError = class extends DatedError {
		constructor(message, options) {
			super(message, options);
			this.name = "NetworkError";
		}
	};
	async function consumeGen(valGen, ...args) {
		return await (typeof valGen === "function" ? valGen(...args) : valGen);
	}
	async function consumeStringGen(strGen, ...args) {
		return typeof strGen === "string" ? strGen : String(typeof strGen === "function" ? await strGen(...args) : strGen);
	}
	async function fetchAdvanced(input, options = {}) {
		const { timeout = 1e4, signal, ...restOpts } = options;
		const fetchOpts = { ...restOpts };
		if (signal) fetchOpts.signal = signal;
		let timeoutId;
		try {
			const fetchPromise = fetch(input, fetchOpts);
			if (timeout < 0) return await fetchPromise;
			const res = await Promise.race([fetchPromise, new Promise((_, reject) => {
				timeoutId = setTimeout(() => reject(new DOMException("The operation timed out.", "TimeoutError")), timeout);
			})]);
			clearTimeout(timeoutId);
			return res;
		} catch (err) {
			clearTimeout(timeoutId);
			throw new NetworkError("Error while calling fetch", { cause: err });
		}
	}
	function getListLength(listLike, zeroOnInvalid = true) {
		return "length" in listLike ? listLike.length : "size" in listLike ? listLike.size : "count" in listLike ? listLike.count : zeroOnInvalid ? 0 : NaN;
	}
	function pauseFor(time, signal, rejectOnAbort = false) {
		return new Promise((res, rej) => {
			const timeout = setTimeout(() => res(), time);
			signal?.addEventListener("abort", () => {
				clearTimeout(timeout);
				rejectOnAbort ? rej(new CustomError("AbortError", "The pause was aborted")) : res();
			});
		});
	}
	function pureObj$1(obj) {
		return Object.assign(/* @__PURE__ */ Object.create(null), obj != null ? obj : {});
	}
	function getterifyObj$1(obj, asCopy = false) {
		const newObj = {};
		for (const key in obj) Object.defineProperty(newObj, key, {
			get: () => obj[key],
			enumerable: true,
			configurable: true
		});
		return asCopy ? structuredClone(newObj) : newObj;
	}
	function setImmediateInterval(callback, interval, signal) {
		let intervalId;
		const cleanup = () => clearInterval(intervalId);
		const loop = () => {
			if (signal == null ? void 0 : signal.aborted) return cleanup();
			callback();
		};
		signal?.addEventListener("abort", cleanup);
		loop();
		intervalId = setInterval(loop, interval);
	}
	function setImmediateTimeoutLoop(callback, interval, signal) {
		let timeout;
		const cleanup = () => clearTimeout(timeout);
		const loop = async () => {
			if (signal == null ? void 0 : signal.aborted) return cleanup();
			await callback();
			timeout = setTimeout(loop, interval);
		};
		signal?.addEventListener("abort", cleanup);
		loop();
	}
	function scheduleExit(code = 0, timeout = 0) {
		if (timeout < 0) throw new TypeError("Timeout must be a non-negative number");
		let exit;
		if (typeof process !== "undefined" && "exit" in process && typeof process.exit === "function") exit = () => process.exit(code);
		else if (typeof Deno !== "undefined" && "exit" in Deno && typeof Deno.exit === "function") exit = () => Deno.exit(code);
		else throw new ScriptContextError("Cannot exit the process, no exit method available");
		setTimeout(exit, timeout);
	}
	function getCallStack(asArray, lines = Infinity) {
		var _a;
		if (typeof lines !== "number" || isNaN(lines) || lines < 0) throw new TypeError("lines parameter must be a non-negative number");
		try {
			throw new CustomError("GetCallStack", "Capturing a stack trace with CoreUtils.getCallStack(). If you see this anywhere, you can safely ignore it.");
		} catch (err) {
			const stack = ((_a = err.stack) != null ? _a : "").split("\n").map((line) => line.trim()).slice(2, lines + 2);
			return asArray !== false ? stack : stack.join("\n");
		}
	}
	function createRecurringTask(options) {
		var _a;
		let iterations = 0;
		let aborted = false;
		(_a = options.signal) == null || _a.addEventListener("abort", () => {
			aborted = true;
		}, { once: true });
		const runRecurringTask = async (initial = false) => {
			var _a3, _b;
			var _a2;
			if (aborted) return;
			try {
				if (((_a3 = options.immediate) != null ? _a3 : true) || !initial) {
					iterations++;
					if ((_b = await ((_a2 = options.condition) == null ? void 0 : _a2.call(options, iterations - 1))) != null ? _b : true) {
						const val = await options.task(iterations - 1);
						if (options.onSuccess) await options.onSuccess(val, iterations - 1);
					}
				}
			} catch (err) {
				if (options.onError) await options.onError(err, iterations - 1);
				if (options.abortOnError) aborted = true;
				if (!options.onError && !options.abortOnError) throw err;
			}
			if (!aborted && (typeof options.maxIterations !== "number" || iterations < options.maxIterations)) setTimeout(runRecurringTask, options.timeout);
		};
		return runRecurringTask(true);
	}
	function autoPlural$1(term, num, pluralType = "auto") {
		if (typeof num !== "number") {
			if ("length" in num) num = num.length;
			else if ("size" in num) num = num.size;
			else if ("count" in num) num = num.count;
		}
		if (!["-s", "-ies"].includes(pluralType)) pluralType = "auto";
		if (isNaN(num)) num = 2;
		switch (pluralType === "auto" ? String(term).endsWith("y") ? "-ies" : "-s" : pluralType) {
			case "-s": return `${term}${num === 1 ? "" : "s"}`;
			case "-ies": return `${String(term).slice(0, -1)}${num === 1 ? "y" : "ies"}`;
		}
	}
	function capitalize(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
	var defaultPbChars = {
		100: "█",
		75: "▓",
		50: "▒",
		25: "░",
		0: "─"
	};
	function createProgressBar(percentage, barLength, chars = defaultPbChars) {
		if (percentage < 0 || percentage > 100) throw new RangeError(`Percentage must be between 0 and 100, got ${percentage}`);
		if (barLength < 0) throw new RangeError(`Bar length must be non-negative, got ${barLength}`);
		if (percentage === 100) return chars[100].repeat(barLength);
		const filledLength = Math.floor(percentage / 100 * barLength);
		const remainingPercentage = percentage / 100 * barLength - filledLength;
		let lastBlock = "";
		if (remainingPercentage >= .75) lastBlock = chars[75];
		else if (remainingPercentage >= .5) lastBlock = chars[50];
		else if (remainingPercentage >= .25) lastBlock = chars[25];
		const filledBar = chars[100].repeat(filledLength);
		const emptyBar = chars[0].repeat(barLength - filledLength - (lastBlock ? 1 : 0));
		return `${filledBar}${lastBlock}${emptyBar}`;
	}
	function insertValues(input, ...values) {
		return input.replace(/%\d/gm, (match) => {
			var _a2;
			var _a;
			return (_a = (_a2 = values[Number(match.substring(1)) - 1]) != null ? _a2 : match) == null ? void 0 : _a.toString();
		});
	}
	function joinArrayReadable(array, separators = ", ", lastSeparator = " and ") {
		const arr = [...array];
		if (arr.length === 0) return "";
		else if (arr.length === 1) return String(arr[0]);
		else if (arr.length === 2) return arr.join(lastSeparator);
		const lastItm = lastSeparator + arr[arr.length - 1];
		arr.pop();
		return arr.join(separators) + lastItm;
	}
	function secsToTimeStr(seconds) {
		const isNegative = seconds < 0;
		const s = Math.abs(seconds);
		if (isNaN(s) || !isFinite(s)) throw new TypeError("The seconds argument must be a valid number");
		const hrs = Math.floor(s / 3600);
		const mins = Math.floor(s % 3600 / 60);
		const secs = Math.floor(s % 60);
		return (isNegative ? "-" : "") + [
			hrs ? hrs + ":" : "",
			String(mins).padStart(mins > 0 || hrs > 0 ? 2 : 1, "0"),
			":",
			String(secs).padStart(secs > 0 || mins > 0 || hrs > 0 || seconds === 0 ? 2 : 1, "0")
		].join("");
	}
	function truncStr(input, length, endStr = "...") {
		var _a;
		const str = (_a = input == null ? void 0 : input.toString()) != null ? _a : String(input);
		const finalStr = str.length > length ? str.substring(0, length - endStr.length) + endStr : str;
		return finalStr.length > length ? finalStr.substring(0, length) : finalStr;
	}
	var defaultTableLineCharset = {
		single: {
			horizontal: "─",
			vertical: "│",
			topLeft: "┌",
			topRight: "┐",
			bottomLeft: "└",
			bottomRight: "┘",
			leftT: "├",
			rightT: "┤",
			topT: "┬",
			bottomT: "┴",
			cross: "┼"
		},
		double: {
			horizontal: "═",
			vertical: "║",
			topLeft: "╔",
			topRight: "╗",
			bottomLeft: "╚",
			bottomRight: "╝",
			leftT: "╠",
			rightT: "╣",
			topT: "╦",
			bottomT: "╩",
			cross: "╬"
		},
		none: {
			horizontal: " ",
			vertical: " ",
			topLeft: " ",
			topRight: " ",
			bottomLeft: " ",
			bottomRight: " ",
			leftT: " ",
			rightT: " ",
			topT: " ",
			bottomT: " ",
			cross: " "
		}
	};
	function createTable(rows, options) {
		var _a2, _b, _c, _d, _e, _f, _g, _h;
		var _a;
		const opts = {
			columnAlign: "left",
			truncateAbove: Infinity,
			truncEndStr: "…",
			minPadding: 1,
			lineStyle: "single",
			applyCellStyle: () => void 0,
			applyLineStyle: () => void 0,
			lineCharset: defaultTableLineCharset,
			...options != null ? options : {}
		};
		const defRange = (val, min, max) => clamp(typeof val !== "number" || isNaN(Number(val)) ? min : val, min, max);
		opts.truncateAbove = defRange(opts.truncateAbove, 0, Infinity);
		opts.minPadding = defRange(opts.minPadding, 0, Infinity);
		const lnCh = opts.lineCharset[opts.lineStyle];
		const stripAnsi = (str) => str.replace(/\u001b\[[0-9;]*m/g, "");
		const stringRows = rows.map((row) => row.map((cell) => String(cell)));
		const colCount = (_a2 = (_a = rows[0]) == null ? void 0 : _a.length) != null ? _a2 : 0;
		if (colCount === 0 || stringRows.length === 0) return "";
		if (isFinite(opts.truncateAbove)) {
			const truncAnsi = (str, maxVisible, endStr) => {
				const limit = maxVisible - endStr.length;
				if (limit <= 0) return endStr.slice(0, maxVisible);
				let visible = 0;
				let result = "";
				let i = 0;
				let hasAnsi = false;
				while (i < str.length) {
					if (str[i] === "\x1B" && str[i + 1] === "[") {
						const seqEnd = str.indexOf("m", i + 2);
						if (seqEnd !== -1) {
							result += str.slice(i, seqEnd + 1);
							hasAnsi = true;
							i = seqEnd + 1;
							continue;
						}
					}
					if (visible === limit) {
						result += endStr;
						if (hasAnsi) result += "\x1B[0m";
						return result;
					}
					result += str[i];
					visible++;
					i++;
				}
				return result;
			};
			for (const row of stringRows) for (let j = 0; j < row.length; j++) if (stripAnsi((_b = row[j]) != null ? _b : "").length > opts.truncateAbove) row[j] = truncAnsi((_c = row[j]) != null ? _c : "", opts.truncateAbove, opts.truncEndStr);
		}
		const colWidths = Array.from({ length: colCount }, (_, j) => Math.max(0, ...stringRows.map((row) => {
			var _a3;
			return stripAnsi((_a3 = row[j]) != null ? _a3 : "").length;
		})));
		const applyLn = (i, j, ch) => {
			var _a3;
			const [before = "", after = ""] = (_a3 = opts.applyLineStyle(i, j)) != null ? _a3 : [];
			return `${before}${ch}${after}`;
		};
		const buildBorderRow = (lineIdx, leftCh, midCh, rightCh) => {
			var _a3;
			let result = "";
			let j = 0;
			result += applyLn(lineIdx, j++, leftCh);
			for (let col = 0; col < colCount; col++) {
				const cellWidth = ((_a3 = colWidths[col]) != null ? _a3 : 0) + opts.minPadding * 2;
				for (let ci = 0; ci < cellWidth; ci++) result += applyLn(lineIdx, j++, lnCh.horizontal);
				if (col < colCount - 1) result += applyLn(lineIdx, j++, midCh);
			}
			result += applyLn(lineIdx, j++, rightCh);
			return result;
		};
		const lines = [];
		for (let rowIdx = 0; rowIdx < stringRows.length; rowIdx++) {
			const row = (_d = stringRows[rowIdx]) != null ? _d : [];
			const lineIdxBase = rowIdx * 3;
			if (opts.lineStyle !== "none") lines.push(rowIdx === 0 ? buildBorderRow(lineIdxBase, lnCh.topLeft, lnCh.topT, lnCh.topRight) : buildBorderRow(lineIdxBase, lnCh.leftT, lnCh.cross, lnCh.rightT));
			let contentLine = "";
			let j = 0;
			contentLine += applyLn(lineIdxBase + 1, j++, lnCh.vertical);
			for (let colIdx = 0; colIdx < colCount; colIdx++) {
				const cell = (_e = row[colIdx]) != null ? _e : "";
				const visLen = stripAnsi(cell).length;
				const extra = ((_f = colWidths[colIdx]) != null ? _f : 0) - visLen;
				const align = (_g = Array.isArray(opts.columnAlign) ? opts.columnAlign[colIdx] : opts.columnAlign) != null ? _g : "left";
				let leftPad;
				let rightPad;
				switch (align) {
					case "right":
						leftPad = opts.minPadding + extra;
						rightPad = opts.minPadding;
						break;
					case "centerLeft":
						leftPad = opts.minPadding + Math.floor(extra / 2);
						rightPad = opts.minPadding + Math.ceil(extra / 2);
						break;
					case "centerRight":
						leftPad = opts.minPadding + Math.ceil(extra / 2);
						rightPad = opts.minPadding + Math.floor(extra / 2);
						break;
					default:
						leftPad = opts.minPadding;
						rightPad = opts.minPadding + extra;
				}
				const [cellBefore = "", cellAfter = ""] = (_h = opts.applyCellStyle(rowIdx, colIdx)) != null ? _h : [];
				contentLine += " ".repeat(leftPad) + cellBefore + cell + cellAfter + " ".repeat(rightPad);
				contentLine += applyLn(lineIdxBase + 1, j++, lnCh.vertical);
			}
			lines.push(contentLine);
			if (opts.lineStyle !== "none" && rowIdx === stringRows.length - 1) lines.push(buildBorderRow(lineIdxBase + 2, lnCh.bottomLeft, lnCh.bottomT, lnCh.bottomRight));
		}
		return lines.join("\n");
	}
	var createNanoEvents = () => ({
		emit(event, ...args) {
			for (let callbacks = this.events[event] || [], i = 0, length = callbacks.length; i < length; i++) callbacks[i](...args);
		},
		events: {},
		on(event, cb) {
			var _a;
			((_a = this.events)[event] || (_a[event] = [])).push(cb);
			return () => {
				var _a2;
				this.events[event] = (_a2 = this.events[event]) == null ? void 0 : _a2.filter((i) => cb !== i);
			};
		}
	});
	var PicoEmitter = class {
		/**
		* ⚠️ You cannot instantiate `PicoEmitter` directly, it's only meant for extending in your own classes. If you want a standalone emitter, use `NanoEmitter` instead.
		*/
		constructor(options = {}) {
			/**
			* The nanoevents emitter instance used internally.  
			* ⚠️ You should use the protected method `emitEvent()` instead of emitting directly through this, as it updates the catch-up memory for any events listed in `catchUpEvents`. Only use `this.events.emit()` if you're not using `catchUpEvents` or are doing manual memory management.
			*/
			__publicField(this, "events", createNanoEvents());
			__publicField(this, "eventUnsubscribes", []);
			__publicField(this, "emitterOptions");
			/** Stores the latest arguments for each emitted event that's listed in `catchUpEvents`. */
			__publicField(this, "catchUpMemory", /* @__PURE__ */ new Map());
			this.emitterOptions = { ...options };
		}
		/**
		* Emits an event on this instance.  
		* You should use this over `this.events.emit()` in subclasses as it updates the catch-up memory for any event listed in `catchUpEvents`, so that listeners attached after emitting can still receive the latest value.
		*/
		emitEvent(event, ...args) {
			var _a;
			if ((_a = this.emitterOptions.catchUpEvents) == null ? void 0 : _a.includes(event)) this.catchUpMemory.set(event, args);
			this.events.emit(event, ...args);
		}
		/**
		* Subscribes to an event and calls the callback when it's emitted.  
		* If the event has already been emitted and is listed in `catchUpEvents`, the callback will be called immediately with the latest emitted arguments (catch-up behaviour).
		* @param event The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. \`event-${val}\` as "_")
		* @returns Returns a function that can be called to unsubscribe the event listener
		* @example ```ts
		* const emitter = new PicoEmitter<{
		*   foo: (bar: string) => void;
		* }>({
		*   publicEmit: true,
		* });
		* 
		* let i = 0;
		* const unsub = emitter.on("foo", (bar) => {
		*   // unsubscribe after 10 events:
		*   if(++i === 10) unsub();
		*   console.log(bar);
		* });
		* 
		* emitter.emit("foo", "bar");
		* ```
		*/
		on(event, cb) {
			let unsub;
			const unsubProxy = () => {
				if (!unsub) return;
				unsub();
				this.eventUnsubscribes = this.eventUnsubscribes.filter((u) => u !== unsub);
			};
			unsub = this.events.on(event, cb);
			this.eventUnsubscribes.push(unsub);
			const memory = this.catchUpMemory.get(event);
			if (memory) cb(...memory);
			return unsubProxy;
		}
		/**
		* Subscribes to an event and calls the callback or resolves the Promise only once when it's emitted.  
		* If the event has already been emitted and is listed in `catchUpEvents`, the callback will be called immediately with the latest emitted arguments (catch-up behaviour).
		* @param event The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. \`event-${val}\` as "_")
		* @param cb The callback to call when the event is emitted - if provided or not, the returned Promise will resolve with the event arguments
		* @returns Returns a Promise that resolves with the event arguments when the event is emitted
		* @example ```ts
		* const emitter = new PicoEmitter<{
		*   foo: (bar: string) => void;
		* }>();
		* 
		* // Promise syntax:
		* const [bar] = await emitter.once("foo");
		* console.log(bar);
		* 
		* // Callback syntax:
		* emitter.once("foo", (bar) => console.log(bar));
		* ```
		*/
		once(event, cb) {
			const memory = this.catchUpMemory.get(event);
			if (memory) {
				const args = memory;
				cb?.(...args);
				return Promise.resolve(args);
			}
			return new Promise((resolve) => {
				let unsub;
				const onceProxy = ((...args) => {
					cb?.(...args);
					unsub?.();
					resolve(args);
				});
				unsub = this.events.on(event, onceProxy);
				this.eventUnsubscribes.push(unsub);
			});
		}
		/**
		* Allows subscribing to multiple events and calling the callback only when one of, all of, or a subset of the events are emitted, either continuously or only once.  
		* If any of the events have already been emitted and are listed in `catchUpEvents`, the callback will be called immediately if the criteria are met, with the latest emitted arguments (catch-up behaviour).
		* @param options An object or array of objects with the following properties:  
		* `callback` (required) is the function that will be called when the conditions are met.  
		*   
		* Set `once` to true to call the callback only once for the first event (or set of events) that match the criteria, then stop listening.  
		* If `signal` is provided, the subscription will be canceled when the given signal is aborted.  
		*   
		* If `oneOf` is used, the callback will be called when any of the matching events are emitted.  
		* If `allOf` is used, the callback will be called after all of the matching events are emitted at least once, then any time any of them are emitted.  
		* If both `oneOf` and `allOf` are used together, the callback will be called when any of the `oneOf` events are emitted AND all of the `allOf` events have been emitted at least once.  
		* At least one of `oneOf` or `allOf` must be provided.  
		*   
		* @returns Returns a function that can be called to unsubscribe all listeners created by this call. Alternatively, pass an `AbortSignal` to all options objects to achieve the same effect or for finer control.
		*/
		onMulti(options) {
			const allUnsubs = [];
			const unsubAll = () => {
				for (const unsub of allUnsubs) unsub();
				allUnsubs.splice(0, allUnsubs.length);
				this.eventUnsubscribes = this.eventUnsubscribes.filter((u) => !allUnsubs.includes(u));
			};
			for (const opts of Array.isArray(options) ? options : [options]) {
				const { oneOf, allOf, once, signal, callback } = {
					allOf: [],
					oneOf: [],
					once: false,
					...opts
				};
				if (signal == null ? void 0 : signal.aborted) return unsubAll;
				if (oneOf.length === 0 && allOf.length === 0) throw new TypeError("PicoEmitter.onMulti(): Either `oneOf` or `allOf` or both must be provided in the options");
				const curEvtUnsubs = [];
				const checkUnsubAllEvt = (force = false) => {
					if (!(signal == null ? void 0 : signal.aborted) && !force) return;
					for (const unsub of curEvtUnsubs) unsub();
					curEvtUnsubs.splice(0, curEvtUnsubs.length);
					this.eventUnsubscribes = this.eventUnsubscribes.filter((u) => !curEvtUnsubs.includes(u));
				};
				const allOfEmitted = /* @__PURE__ */ new Set();
				const allOfConditionMet = () => allOf.length === 0 || allOfEmitted.size === allOf.length;
				for (const event of oneOf) {
					const unsub = this.events.on(event, ((...args) => {
						checkUnsubAllEvt();
						if (allOfConditionMet()) {
							callback(event, ...args);
							if (once) checkUnsubAllEvt(true);
						}
					}));
					curEvtUnsubs.push(unsub);
				}
				for (const event of allOf) {
					const unsub = this.events.on(event, ((...args) => {
						checkUnsubAllEvt();
						allOfEmitted.add(event);
						if (allOfConditionMet() && (oneOf.length === 0 || oneOf.includes(event))) {
							callback(event, ...args);
							if (once) checkUnsubAllEvt(true);
						}
					}));
					curEvtUnsubs.push(unsub);
				}
				allUnsubs.push(() => checkUnsubAllEvt(true));
			}
			return unsubAll;
		}
		/** Unsubscribes all event listeners from this instance. Also clears the event catch-up memory. */
		unsubscribeAll() {
			for (const unsub of this.eventUnsubscribes) unsub();
			this.eventUnsubscribes = [];
			this.catchUpMemory.clear();
		}
	};
	var NanoEmitter$1 = class extends PicoEmitter {
		/** Creates a new instance of NanoEmitter - a lightweight event emitter with helper methods and a strongly typed event map */
		constructor(options = {}) {
			super(options);
			__publicField(this, "events", createNanoEvents());
			__publicField(this, "eventUnsubscribes", []);
			__publicField(this, "emitterOptions");
			/** Stores the last arguments for each event listed in `catchUpEvents` */
			__publicField(this, "catchUpMemory", /* @__PURE__ */ new Map());
			this.emitterOptions = {
				publicEmit: false,
				...options
			};
		}
		/**
		* Emits an event on this instance.  
		* - ⚠️ Needs `publicEmit` to be set to true in the NanoEmitter constructor or super() call!
		* @param event The event to emit
		* @param args The arguments to pass to the event listeners
		* @returns Returns true if `publicEmit` is true and the event was emitted successfully
		*/
		emit(event, ...args) {
			if (this.emitterOptions.publicEmit) {
				this.emitEvent(event, ...args);
				return true;
			}
			return false;
		}
		/** Unsubscribes all event listeners from this instance. Also clears the event catch-up memory. */
		unsubscribeAll() {
			super.unsubscribeAll();
		}
	};
	var dsFmtVer = 1;
	var DataStore = class extends NanoEmitter$1 {
		/**
		* Creates an instance of DataStore to manage a sync & async database that is cached in memory and persistently saved across sessions.  
		* Supports migrating data from older versions to newer ones and populating the cache with default data if no persistent data is found.  
		*   
		* - ⚠️ Make sure to call {@linkcode loadData()} at least once after creating an instance, or the returned data will be the same as `options.defaultData`
		* 
		* @template TData The type of the data that is saved in persistent storage for the currently set format version (will be automatically inferred from `defaultData` if not provided) - **This has to be a JSON-compatible object!** (no undefined, circular references, etc.)
		* @param opts The options for this DataStore instance
		*/
		constructor(opts) {
			var _a, _b, _c;
			super(opts.nanoEmitterOptions);
			__publicField(this, "id");
			__publicField(this, "formatVersion");
			__publicField(this, "defaultData");
			__publicField(this, "encodeData");
			__publicField(this, "decodeData");
			__publicField(this, "compressionFormat", "deflate-raw");
			__publicField(this, "memoryCache");
			__publicField(this, "engine");
			__publicField(this, "keyPrefix");
			__publicField(this, "options");
			/**
			* Whether all first-init checks should be done.  
			* This includes migrating the internal DataStore format, migrating data from the UserUtils format, and anything similar.  
			* This is set to `true` by default. Create a subclass and set it to `false` before calling {@linkcode loadData()} if you want to explicitly skip these checks.
			*/
			__publicField(this, "firstInit", true);
			/** In-memory cached copy of the data that is saved in persistent storage used for synchronous read access. */
			__publicField(this, "cachedData");
			__publicField(this, "migrations");
			__publicField(this, "migrateIds", []);
			this.id = opts.id;
			this.formatVersion = opts.formatVersion;
			this.defaultData = opts.defaultData;
			this.memoryCache = (_a = opts.memoryCache) != null ? _a : true;
			this.cachedData = this.memoryCache ? opts.defaultData : {};
			this.migrations = opts.migrations;
			if (opts.migrateIds) this.migrateIds = Array.isArray(opts.migrateIds) ? opts.migrateIds : [opts.migrateIds];
			this.engine = typeof opts.engine === "function" ? opts.engine() : opts.engine;
			this.keyPrefix = (_b = opts.keyPrefix) != null ? _b : "__ds-";
			this.options = opts;
			if ("encodeData" in opts && "decodeData" in opts && Array.isArray(opts.encodeData) && Array.isArray(opts.decodeData)) {
				this.encodeData = [opts.encodeData[0], opts.encodeData[1]];
				this.decodeData = [opts.decodeData[0], opts.decodeData[1]];
				this.compressionFormat = (_c = opts.encodeData[0]) != null ? _c : null;
			} else if (opts.compressionFormat === null) {
				this.encodeData = void 0;
				this.decodeData = void 0;
				this.compressionFormat = null;
			} else {
				const fmt = typeof opts.compressionFormat === "string" ? opts.compressionFormat : "deflate-raw";
				this.compressionFormat = fmt;
				this.encodeData = [fmt, async (data) => await compress(data, fmt, "string")];
				this.decodeData = [fmt, async (data) => await decompress(data, fmt, "string")];
			}
			this.engine.setDataStoreOptions({
				id: this.id,
				encodeData: this.encodeData,
				decodeData: this.decodeData
			});
		}
		/**
		* Loads the data saved in persistent storage into the in-memory cache and also returns a copy of it.  
		* Automatically populates persistent storage with default data if it doesn't contain any data yet.  
		* Also runs all necessary migration functions if the data format has changed since the last time the data was saved.
		*/
		async loadData() {
			var _a;
			try {
				if (this.firstInit) {
					this.firstInit = false;
					const dsVer = Number(await this.engine.getValue("__ds_fmt_ver", 0));
					const oldData = await this.engine.getValue(`_uucfg-${this.id}`, null);
					if (oldData) {
						const oldVer = Number(await this.engine.getValue(`_uucfgver-${this.id}`, NaN));
						const oldEnc = await this.engine.getValue(`_uucfgenc-${this.id}`, null);
						const promises = [];
						const migrateFmt = (oldKey, newKey, value) => {
							promises.push(this.engine.setValue(newKey, value));
							promises.push(this.engine.deleteValue(oldKey));
						};
						migrateFmt(`_uucfg-${this.id}`, `${this.keyPrefix}${this.id}-dat`, oldData);
						if (!isNaN(oldVer)) migrateFmt(`_uucfgver-${this.id}`, `${this.keyPrefix}${this.id}-ver`, oldVer);
						if (typeof oldEnc === "boolean" || oldEnc === "true" || oldEnc === "false" || typeof oldEnc === "number" || oldEnc === "0" || oldEnc === "1") migrateFmt(`_uucfgenc-${this.id}`, `${this.keyPrefix}${this.id}-enf`, [
							0,
							"0",
							true,
							"true"
						].includes(oldEnc) ? (_a = this.compressionFormat) != null ? _a : null : null);
						else {
							promises.push(this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat));
							promises.push(this.engine.deleteValue(`_uucfgenc-${this.id}`));
						}
						await Promise.allSettled(promises);
					}
					if (isNaN(dsVer) || dsVer < dsFmtVer) await this.engine.setValue("__ds_fmt_ver", dsFmtVer);
				}
				if (this.migrateIds.length > 0) {
					await this.migrateId(this.migrateIds);
					this.migrateIds = [];
				}
				const storedDataRaw = await this.engine.getValue(`${this.keyPrefix}${this.id}-dat`, null);
				const storedFmtVer = Number(await this.engine.getValue(`${this.keyPrefix}${this.id}-ver`, NaN));
				if (typeof storedDataRaw !== "string" && typeof storedDataRaw !== "object" || storedDataRaw === null || isNaN(storedFmtVer)) {
					await this.saveDefaultData(false);
					const data = this.engine.deepCopy(this.defaultData);
					this.emitEvent("loadData", data);
					return data;
				}
				const storedData = storedDataRaw != null ? storedDataRaw : JSON.stringify(this.defaultData);
				const encodingFmt = String(await this.engine.getValue(`${this.keyPrefix}${this.id}-enf`, null));
				const isEncoded = encodingFmt !== "null" && encodingFmt !== "false" && encodingFmt !== "0" && encodingFmt !== "" && encodingFmt !== null;
				let parsed = typeof storedData === "string" ? await this.engine.deserializeData(storedData, isEncoded) : storedData;
				if (storedFmtVer < this.formatVersion && this.migrations) parsed = await this.runMigrations(parsed, storedFmtVer);
				const result = this.memoryCache ? this.cachedData = this.engine.deepCopy(parsed) : this.engine.deepCopy(parsed);
				this.emitEvent("loadData", result);
				return result;
			} catch (err) {
				const error = err instanceof Error ? err : new Error(String(err));
				console.warn("Error while parsing JSON data, resetting it to the default value.", err);
				this.emitEvent("error", error);
				await this.saveDefaultData();
				return this.defaultData;
			}
		}
		/**
		* Returns a copy of the data from the in-memory cache.  
		* Use {@linkcode loadData()} to get fresh data from persistent storage (usually not necessary since the cache should always exactly reflect persistent storage).  
		* ⚠️ Only available when `memoryCache` is `true` (default). When set to `false`, this produces a type and runtime error - use {@linkcode loadData()} instead.
		*/
		getData() {
			if (!this.memoryCache) throw new DatedError("In-memory cache is disabled for this DataStore instance, so getData() can't be used. Please use loadData() instead.");
			return this.engine.deepCopy(this.cachedData);
		}
		/** Saves the data synchronously to the in-memory cache and asynchronously to the persistent storage */
		setData(data) {
			const dataCopy = this.engine.deepCopy(data);
			if (this.memoryCache) {
				this.cachedData = data;
				this.emitEvent("updateDataSync", dataCopy);
			}
			return new Promise(async (resolve) => {
				const results = await Promise.allSettled([
					this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(data, this.encodingEnabled())),
					this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, this.formatVersion),
					this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat)
				]);
				if (results.every((r) => r.status === "fulfilled")) this.emitEvent("updateData", dataCopy);
				else {
					const error = /* @__PURE__ */ new Error("Error while saving data to persistent storage: " + results.map((r) => r.status === "rejected" ? r.reason : null).filter(Boolean).join("; "));
					console.error(error);
					this.emitEvent("error", error);
				}
				resolve();
			});
		}
		/**
		* Saves the default data passed in the constructor synchronously to the in-memory cache and asynchronously to persistent storage.
		* @param emitEvent Whether to emit the `setDefaultData` event - set to `false` to prevent event emission (used internally during initial population in {@linkcode loadData()})
		*/
		async saveDefaultData(emitEvent = true) {
			if (this.memoryCache) this.cachedData = this.defaultData;
			const results = await Promise.allSettled([
				this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(this.defaultData, this.encodingEnabled())),
				this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, this.formatVersion),
				this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat)
			]);
			if (results.every((r) => r.status === "fulfilled")) emitEvent && this.emitEvent("setDefaultData", this.defaultData);
			else {
				const error = /* @__PURE__ */ new Error("Error while saving default data to persistent storage: " + results.map((r) => r.status === "rejected" ? r.reason : null).filter(Boolean).join("; "));
				console.error(error);
				this.emitEvent("error", error);
			}
		}
		/**
		* Call this method to clear all persistently stored data associated with this DataStore instance, including the storage container (if supported by the DataStoreEngine).  
		* The in-memory cache will be left untouched, so you may still access the data with {@linkcode getData()}  
		* Calling {@linkcode loadData()} or {@linkcode setData()} after this method was called will recreate persistent storage with the cached or default data.
		*/
		async deleteData() {
			var _a, _b;
			await Promise.allSettled([
				this.engine.deleteValue(`${this.keyPrefix}${this.id}-dat`),
				this.engine.deleteValue(`${this.keyPrefix}${this.id}-ver`),
				this.engine.deleteValue(`${this.keyPrefix}${this.id}-enf`)
			]);
			await ((_b = (_a = this.engine).deleteStorage) == null ? void 0 : _b.call(_a));
			this.emitEvent("deleteData");
		}
		/** Returns whether encoding and decoding are enabled for this DataStore instance */
		encodingEnabled() {
			return Boolean(this.encodeData && this.decodeData) && this.compressionFormat !== null || Boolean(this.compressionFormat);
		}
		/**
		* Runs all necessary migration functions consecutively and saves the result to the in-memory cache and persistent storage and also returns it.  
		* This method is automatically called by {@linkcode loadData()} if the data format has changed since the last time the data was saved.  
		* Though calling this method manually is not necessary, it can be useful if you want to run migrations for special occasions like a user importing potentially outdated data that has been previously exported.  
		*   
		* If one of the migrations fails, the data will be reset to the default value if `resetOnError` is set to `true` (default). Otherwise, an error will be thrown and no data will be saved.
		*/
		async runMigrations(oldData, oldFmtVer, resetOnError = true) {
			if (!this.migrations) return oldData;
			let newData = oldData;
			const sortedMigrations = Object.entries(this.migrations).sort(([a], [b]) => Number(a) - Number(b));
			let lastFmtVer = oldFmtVer;
			for (let i = 0; i < sortedMigrations.length; i++) {
				const [fmtVer, migrationFunc] = sortedMigrations[i];
				const ver = Number(fmtVer);
				if (oldFmtVer < this.formatVersion && oldFmtVer < ver) try {
					const migRes = migrationFunc(newData);
					newData = migRes instanceof Promise ? await migRes : migRes;
					lastFmtVer = oldFmtVer = ver;
					const isFinal = ver >= this.formatVersion || i === sortedMigrations.length - 1;
					this.emitEvent("migrateData", ver, newData, isFinal);
				} catch (err) {
					const migError = new MigrationError(`Error while running migration function for format version '${fmtVer}'`, { cause: err });
					this.emitEvent("migrationError", ver, migError);
					this.emitEvent("error", migError);
					if (!resetOnError) throw migError;
					await this.saveDefaultData();
					return this.engine.deepCopy(this.defaultData);
				}
			}
			await Promise.allSettled([
				this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(newData, this.encodingEnabled())),
				this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, lastFmtVer),
				this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat)
			]);
			const result = this.memoryCache ? this.cachedData = this.engine.deepCopy(newData) : this.engine.deepCopy(newData);
			this.emitEvent("updateData", result);
			return result;
		}
		/**
		* Tries to migrate the currently saved persistent data from one or more old IDs to the ID set in the constructor.  
		* If no data exist for the old ID(s), nothing will be done, but some time may still pass trying to fetch the non-existent data.
		*/
		async migrateId(oldIds) {
			const ids = Array.isArray(oldIds) ? oldIds : [oldIds];
			await Promise.all(ids.map(async (id) => {
				const [data, fmtVer, isEncoded] = await (async () => {
					const [d, f, e] = await Promise.all([
						this.engine.getValue(`${this.keyPrefix}${id}-dat`, JSON.stringify(this.defaultData)),
						this.engine.getValue(`${this.keyPrefix}${id}-ver`, NaN),
						this.engine.getValue(`${this.keyPrefix}${id}-enf`, null)
					]);
					return [
						d,
						Number(f),
						Boolean(e) && String(e) !== "null"
					];
				})();
				if (data === void 0 || isNaN(fmtVer)) return;
				const parsed = await this.engine.deserializeData(data, isEncoded);
				await Promise.allSettled([
					this.engine.setValue(`${this.keyPrefix}${this.id}-dat`, await this.engine.serializeData(parsed, this.encodingEnabled())),
					this.engine.setValue(`${this.keyPrefix}${this.id}-ver`, fmtVer),
					this.engine.setValue(`${this.keyPrefix}${this.id}-enf`, this.compressionFormat),
					this.engine.deleteValue(`${this.keyPrefix}${id}-dat`),
					this.engine.deleteValue(`${this.keyPrefix}${id}-ver`),
					this.engine.deleteValue(`${this.keyPrefix}${id}-enf`)
				]);
				this.emitEvent("migrateId", id, this.id);
			}));
		}
	};
	var DataStoreEngine = class {
		constructor(options) {
			__publicField(this, "dataStoreOptions");
			if (options) this.dataStoreOptions = options;
		}
		/** Called by DataStore on creation, to pass its options. Only call this if you are using this instance standalone! */
		setDataStoreOptions(dataStoreOptions) {
			this.dataStoreOptions = dataStoreOptions;
		}
		/** Serializes the given object to a string, optionally encoded with `options.encodeData` if {@linkcode useEncoding} is not set to false and the `encodeData` and `decodeData` options are set */
		async serializeData(data, useEncoding) {
			var _a, _b, _c, _d, _e;
			this.ensureDataStoreOptions();
			const stringData = JSON.stringify(data);
			if (!useEncoding || !((_a = this.dataStoreOptions) == null ? void 0 : _a.encodeData) || !((_b = this.dataStoreOptions) == null ? void 0 : _b.decodeData)) return stringData;
			const encRes = (_e = (_d = (_c = this.dataStoreOptions) == null ? void 0 : _c.encodeData) == null ? void 0 : _d[1]) == null ? void 0 : _e.call(_d, stringData);
			if (encRes instanceof Promise) return await encRes;
			return encRes;
		}
		/** Deserializes the given string to a JSON object, optionally decoded with `options.decodeData` if {@linkcode useEncoding} is set to true */
		async deserializeData(data, useEncoding) {
			var _a, _b, _c;
			this.ensureDataStoreOptions();
			let decRes = ((_a = this.dataStoreOptions) == null ? void 0 : _a.decodeData) && useEncoding ? (_c = (_b = this.dataStoreOptions.decodeData) == null ? void 0 : _b[1]) == null ? void 0 : _c.call(_b, data) : void 0;
			if (decRes instanceof Promise) decRes = await decRes;
			return JSON.parse(decRes != null ? decRes : data);
		}
		/** Throws an error if the {@linkcode DataStoreOptions} are not set or invalid. Call in every method where {@linkcode DataStoreEngineDSOptions} needs to be present. */
		ensureDataStoreOptions() {
			if (!this.dataStoreOptions) throw new DatedError("DataStoreEngine must be initialized with DataStore options before use. If you are using this instance standalone, set them in the constructor or call `setDataStoreOptions()` with the DataStore options.");
			if (!this.dataStoreOptions.id) throw new DatedError("DataStoreEngine must be initialized with a valid DataStore ID");
		}
		/**
		* Copies a JSON-compatible object and loses all its internal references in the process.  
		* Uses [`structuredClone()`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) if available, otherwise falls back to `JSON.parse(JSON.stringify(obj))`.
		*/
		deepCopy(obj) {
			try {
				if ("structuredClone" in globalThis) return structuredClone(obj);
			} catch (e) {}
			return JSON.parse(JSON.stringify(obj));
		}
	};
	var BrowserStorageEngine = class extends DataStoreEngine {
		/**
		* Creates an instance of `BrowserStorageEngine`.  
		*   
		* - ⚠️ Requires a DOM environment  
		* - ⚠️ Don't reuse engine instances, always create a new one for each {@linkcode DataStore} instance
		*/
		constructor(options) {
			super(options == null ? void 0 : options.dataStoreOptions);
			__publicField(this, "options");
			this.options = {
				type: "localStorage",
				...options
			};
		}
		/** Fetches a value from persistent storage */
		async getValue(name, defaultValue) {
			const val = this.options.type === "localStorage" ? globalThis.localStorage.getItem(name) : globalThis.sessionStorage.getItem(name);
			return typeof val === "undefined" ? defaultValue : val;
		}
		/** Sets a value in persistent storage */
		async setValue(name, value) {
			if (this.options.type === "localStorage") globalThis.localStorage.setItem(name, String(value));
			else globalThis.sessionStorage.setItem(name, String(value));
		}
		/** Deletes a value from persistent storage */
		async deleteValue(name) {
			if (this.options.type === "localStorage") globalThis.localStorage.removeItem(name);
			else globalThis.sessionStorage.removeItem(name);
		}
	};
	var fs;
	var FileStorageEngine = class extends DataStoreEngine {
		/**
		* Creates an instance of `FileStorageEngine`.  
		*   
		* - ⚠️ Requires Node.js or Deno with Node compatibility (v1.31+)  
		* - ⚠️ Don't reuse engine instances, always create a new one for each {@linkcode DataStore} instance
		*/
		constructor(options) {
			super(options == null ? void 0 : options.dataStoreOptions);
			__publicField(this, "options");
			__publicField(this, "fileAccessQueue", Promise.resolve());
			this.options = {
				filePath: (id) => `.ds-${id}`,
				...options
			};
		}
		/** Reads the file contents */
		async readFile() {
			var _a2;
			var _a, _b, _c, _d;
			this.ensureDataStoreOptions();
			try {
				if (!fs) fs = (_a = await Promise.resolve().then(() => /* @__PURE__ */ __toESM(require___vite_browser_external(), 1))) == null ? void 0 : _a.default;
				if (!fs) throw new ScriptContextError("FileStorageEngine requires Node.js or Deno with Node compatibility (v1.31+)", { cause: new DatedError("'node:fs/promises' module not available") });
				const path = typeof this.options.filePath === "string" ? this.options.filePath : this.options.filePath(this.dataStoreOptions.id, this.dataStoreOptions);
				const data = await fs.readFile(path, "utf-8");
				return data ? JSON.parse((_a2 = await ((_d = (_c = (_b = this.dataStoreOptions) == null ? void 0 : _b.decodeData) == null ? void 0 : _c[1]) == null ? void 0 : _d.call(_c, data))) != null ? _a2 : data) : void 0;
			} catch (e) {
				return;
			}
		}
		/** Overwrites the file contents */
		async writeFile(data) {
			var _a2;
			var _a, _b, _c, _d;
			this.ensureDataStoreOptions();
			try {
				if (!fs) fs = (_a = await Promise.resolve().then(() => /* @__PURE__ */ __toESM(require___vite_browser_external(), 1))) == null ? void 0 : _a.default;
				if (!fs) throw new ScriptContextError("FileStorageEngine requires Node.js or Deno with Node compatibility (v1.31+)", { cause: new DatedError("'node:fs/promises' module not available") });
				const path = typeof this.options.filePath === "string" ? this.options.filePath : this.options.filePath(this.dataStoreOptions.id, this.dataStoreOptions);
				await fs.mkdir(path.slice(0, path.lastIndexOf(path.includes("/") ? "/" : "\\")), { recursive: true });
				await fs.writeFile(path, (_a2 = await ((_d = (_c = (_b = this.dataStoreOptions) == null ? void 0 : _b.encodeData) == null ? void 0 : _c[1]) == null ? void 0 : _d.call(_c, JSON.stringify(data)))) != null ? _a2 : JSON.stringify(data, void 0, 2), "utf-8");
			} catch (err) {
				console.error("Error writing file:", err);
			}
		}
		/** Fetches a value from persistent storage */
		async getValue(name, defaultValue) {
			const data = await this.readFile();
			if (!data) return defaultValue;
			const value = data == null ? void 0 : data[name];
			if (typeof value === "undefined") return defaultValue;
			if (typeof defaultValue === "string") {
				if (typeof value === "object" && value !== null) return JSON.stringify(value);
				if (typeof value === "string") return value;
				return String(value);
			}
			if (typeof value === "string") try {
				return JSON.parse(value);
			} catch (e) {
				return defaultValue;
			}
			return value;
		}
		/** Sets a value in persistent storage */
		async setValue(name, value) {
			this.fileAccessQueue = this.fileAccessQueue.then(async () => {
				let data = await this.readFile();
				if (!data) data = {};
				let storeVal = value;
				if (typeof value === "string") try {
					if (value.startsWith("{") || value.startsWith("[")) {
						const parsed = JSON.parse(value);
						if (typeof parsed === "object" && parsed !== null) storeVal = parsed;
					}
				} catch (e) {}
				data[name] = storeVal;
				await this.writeFile(data);
			}).catch((err) => {
				console.error("Error in setValue:", err);
				throw err;
			});
			await this.fileAccessQueue.catch(() => {});
		}
		/** Deletes a value from persistent storage */
		async deleteValue(name) {
			this.fileAccessQueue = this.fileAccessQueue.then(async () => {
				const data = await this.readFile();
				if (!data) return;
				delete data[name];
				await this.writeFile(data);
			}).catch((err) => {
				console.error("Error in deleteValue:", err);
				throw err;
			});
			await this.fileAccessQueue.catch(() => {});
		}
		/** Deletes the file that contains the data of this DataStore. */
		async deleteStorage() {
			var _a;
			this.ensureDataStoreOptions();
			try {
				if (!fs) fs = (_a = await Promise.resolve().then(() => /* @__PURE__ */ __toESM(require___vite_browser_external(), 1))) == null ? void 0 : _a.default;
				if (!fs) throw new ScriptContextError("FileStorageEngine requires Node.js or Deno with Node compatibility (v1.31+)", { cause: new DatedError("'node:fs/promises' module not available") });
				const path = typeof this.options.filePath === "string" ? this.options.filePath : this.options.filePath(this.dataStoreOptions.id, this.dataStoreOptions);
				return await fs.unlink(path);
			} catch (err) {
				console.error("Error deleting file:", err);
			}
		}
	};
	var IndexedDBStorageEngine = class extends DataStoreEngine {
		/**
		* Creates an instance of `IndexedDBStorageEngine`, a {@linkcode DataStore} storage engine that uses the [IndexedDB API.](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
		* This allows even non-JSON-serializable data to be stored, like a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) or [Blob.](https://developer.mozilla.org/en-US/docs/Web/API/Blob)  
		*   
		* - ⚠️ Requires an environment with access to the [IndexedDB API.](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
		* - ⚠️ Don't reuse engine instances, always create a new one for each instance of stored data (or {@linkcode DataStore} instance).
		*/
		constructor(options) {
			super(options == null ? void 0 : options.dataStoreOptions);
			__publicField(this, "options");
			/** Name of the IndexedDB object store that holds the key-value pairs */
			__publicField(this, "storeName");
			/** Cached handle to the opened database, populated lazily on the first call to {@linkcode getValue}, {@linkcode setValue} or {@linkcode deleteValue} */
			__publicField(this, "db");
			/** Resolves once the database has finished opening, so concurrent calls don't open it more than once */
			__publicField(this, "dbOpenPromise");
			this.options = {
				dbStoreName: "keyval",
				dbPrefix: "__ds-",
				...options
			};
			this.storeName = this.options.dbStoreName;
		}
		/** Fetches a value from persistent storage. */
		async getValue(name, defaultValue) {
			const db = await this.openDb();
			const val = await new Promise((resolve, reject) => {
				const req = db.transaction(this.storeName, "readonly").objectStore(this.storeName).get(name);
				req.addEventListener("success", () => resolve(req.result));
				req.addEventListener("error", () => reject(req.error));
			});
			return typeof val === "undefined" ? defaultValue : val;
		}
		/** Sets a value in persistent storage. */
		async setValue(name, value) {
			const db = await this.openDb();
			await new Promise((resolve, reject) => {
				const tx = db.transaction(this.storeName, "readwrite");
				tx.objectStore(this.storeName).put(value, name);
				tx.addEventListener("complete", () => resolve());
				tx.addEventListener("error", () => reject(tx.error));
				tx.addEventListener("abort", () => reject(tx.error));
			});
		}
		/** Deletes a value from persistent storage. */
		async deleteValue(name) {
			const db = await this.openDb();
			await new Promise((resolve, reject) => {
				const tx = db.transaction(this.storeName, "readwrite");
				tx.objectStore(this.storeName).delete(name);
				tx.addEventListener("complete", () => resolve());
				tx.addEventListener("error", () => reject(tx.error));
				tx.addEventListener("abort", () => reject(tx.error));
			});
		}
		/** Lazily opens the {@linkcode IDBDatabase} for this DataStore's ID, or returns the cached instance from a previous call. */
		openDb() {
			this.ensureDataStoreOptions();
			if (this.db) return Promise.resolve(this.db);
			if (this.dbOpenPromise) return this.dbOpenPromise;
			if (typeof indexedDB === "undefined") throw new ScriptContextError("IndexedDBStorageEngine requires a DOM environment with access to the IndexedDB API", { cause: new DatedError("'indexedDB' is not available in the global scope") });
			return this.dbOpenPromise = new Promise((resolve, reject) => {
				const req = indexedDB.open(`${this.options.dbPrefix}${this.dataStoreOptions.id}`);
				req.addEventListener("upgradeneeded", () => {
					req.result.createObjectStore(this.storeName);
				});
				req.addEventListener("success", () => {
					this.db = req.result;
					resolve(req.result);
				});
				req.addEventListener("error", () => reject(req.error));
			});
		}
	};
	var DataStoreSerializer = class _DataStoreSerializer extends PicoEmitter {
		constructor(stores, options = {}) {
			super(options == null ? void 0 : options.picoEmitterOptions);
			__publicField(this, "stores");
			__publicField(this, "options");
			/** Set of IDs of loaded stores. Is kept in sync via {@linkcode bindStoreEvents()}. */
			__publicField(this, "loadedStores", /* @__PURE__ */ new Set());
			/** Unsubscribe functions for the event listeners bound to each contained {@linkcode DataStore} instance, keyed by store ID. */
			__publicField(this, "storeEventUnsubs", /* @__PURE__ */ new Map());
			if (!crypto || !crypto.subtle) throw new ScriptContextError("DataStoreSerializer has to run in a secure context (HTTPS) or in another environment that implements the subtleCrypto API!");
			this.stores = stores;
			this.options = {
				addChecksum: true,
				ensureIntegrity: true,
				remapIds: {},
				stringifyData: true,
				picoEmitterOptions: {},
				...options
			};
			for (const store of this.stores) this.bindStoreEvents(store);
		}
		/**
		* Subscribes to the relevant events of a single {@linkcode DataStore} instance and forwards them as this instance's own events, so that they're also emitted when a contained store is loaded, reset or deleted directly through its own instance instead of through this serializer.
		*/
		bindStoreEvents(store) {
			this.storeEventUnsubs.set(store.id, [
				store.on("loadData", () => {
					this.loadedStores.add(store.id);
					this.emitEvent("loadedStore", store);
					if (this.stores.every((s) => this.loadedStores.has(s.id))) this.emitEvent("loadedAllStores");
				}),
				store.on("setDefaultData", () => this.emitEvent("resetStores", [store])),
				store.on("deleteData", () => {
					this.loadedStores.delete(store.id);
					this.emitEvent("deletedStores", [store]);
				})
			]);
		}
		/** Unsubscribes from the events of all currently bound {@linkcode DataStore} instances. */
		unbindStoreEvents() {
			for (const unsubs of this.storeEventUnsubs.values()) for (const unsub of unsubs) unsub();
			this.storeEventUnsubs.clear();
		}
		/**
		* Calculates the checksum of a string or {@linkcode DataStoreData} object. By default, this uses {@linkcode computeHash()} with SHA-256, digested as a hex string.  
		* Override this in a subclass if a custom checksum method is needed for some reason.
		*/
		async calcChecksum(input, algorithm = "SHA-256") {
			try {
				return computeHash(typeof input === "string" ? input : JSON.stringify(input), algorithm);
			} catch (err) {
				throw new Error(`Failed to calculate checksum: ${err.message}`, { cause: err });
			}
		}
		/**
		* Serializes only a subset of the {@linkcode DataStore}s into a string.  
		* @param stores An array of store IDs or functions that take a store ID and return a boolean
		* @param useEncoding Whether to encode the data using each DataStore's `encodeData()` method
		* @param stringified Whether to return the result as a string or as an array of `SerializedDataStore` objects
		*/
		async serializePartial(stores, useEncoding = true, stringified = true) {
			var _a;
			const serData = [];
			const filteredStores = this.stores.filter((s) => typeof stores === "function" ? stores(s.id) : stores.includes(s.id));
			for (const storeInst of filteredStores) {
				const encoded = Boolean(useEncoding && storeInst.encodingEnabled() && ((_a = storeInst.encodeData) == null ? void 0 : _a[1]));
				const rawData = storeInst.memoryCache ? storeInst.getData() : await storeInst.loadData();
				const data = encoded ? await storeInst.encodeData[1](JSON.stringify(rawData)) : this.options.stringifyData ? JSON.stringify(rawData) : rawData;
				serData.push({
					id: storeInst.id,
					data,
					formatVersion: storeInst.formatVersion,
					encoded,
					checksum: this.options.addChecksum ? await this.calcChecksum(data) : void 0
				});
			}
			return stringified ? JSON.stringify(serData) : serData;
		}
		/**
		* Serializes the data stores into a string.  
		* @param useEncoding Whether to encode the data using each {@linkcode DataStore}'s `encodeData()` method
		* @param stringified Whether to return the result as a string or as an array of `SerializedDataStore` objects
		*/
		async serialize(useEncoding = true, stringified = true) {
			return this.serializePartial(this.stores.map((s) => s.id), useEncoding, stringified);
		}
		/**
		* Deserializes the data exported via {@linkcode serialize()} and imports only a subset into the DataStore instances.  
		* Also triggers the migration process if the data format has changed.
		*/
		async deserializePartial(stores, data) {
			const deserStores = typeof data === "string" ? JSON.parse(data) : data;
			if (!Array.isArray(deserStores) || !deserStores.every(_DataStoreSerializer.isSerializedDataStoreObj)) throw new TypeError("Invalid serialized data format! Expected an array of SerializedDataStore objects.");
			const resolveStoreId = (id) => {
				var _a2;
				var _a;
				return (_a2 = (_a = Object.entries(this.options.remapIds).find(([, v]) => v.includes(id))) == null ? void 0 : _a[0]) != null ? _a2 : id;
			};
			for (const storeData of deserStores) {
				const curStoreID = resolveStoreId(storeData.id);
				if (!(typeof stores === "function" ? stores(curStoreID) : stores.includes(curStoreID))) continue;
				const storeInst = this.stores.find((s) => s.id === curStoreID);
				if (!storeInst) throw new DatedError(`Can't deserialize data because no DataStore instance with the ID "${curStoreID}" was found! Make sure to provide it in the DataStoreSerializer constructor.`);
				if (this.options.ensureIntegrity && typeof storeData.checksum === "string") {
					const checksum = await this.calcChecksum(storeData.data);
					if (checksum !== storeData.checksum) throw new ChecksumMismatchError(`Checksum mismatch for DataStore with ID "${storeData.id}"!
Expected: ${storeData.checksum}
Has: ${checksum}`);
				}
				const decodedData = storeData.encoded && storeInst.encodingEnabled() ? await storeInst.decodeData[1](typeof storeData.data === "string" ? storeData.data : JSON.stringify(storeData.data)) : storeData.data;
				if (storeData.formatVersion && !isNaN(Number(storeData.formatVersion)) && Number(storeData.formatVersion) < storeInst.formatVersion) await storeInst.runMigrations(typeof decodedData === "string" ? JSON.parse(decodedData) : decodedData, Number(storeData.formatVersion), false);
				else await storeInst.setData(typeof decodedData === "string" ? JSON.parse(decodedData) : decodedData);
			}
		}
		/**
		* Deserializes the data exported via {@linkcode serialize()} and imports the data into all matching {@linkcode DataStore} instances.  
		* Also triggers the migration process if the data format has changed.
		*/
		async deserialize(data) {
			return this.deserializePartial(this.stores.map((s) => s.id), data);
		}
		/**
		* Loads the persistent data of the {@linkcode DataStore} instances into the in-memory cache.  
		* Also triggers the migration process if the data format has changed.
		* @param stores An array of store IDs or a function that takes the store IDs and returns a boolean - if omitted, all stores will be loaded
		* @returns Returns a PromiseSettledResult array with the results of each DataStore instance in the format `{ id: string, data: object }`
		*/
		async loadStoresData(stores) {
			return Promise.allSettled(this.getStoresFiltered(stores).map(async (store) => ({
				id: store.id,
				data: await store.loadData()
			})));
		}
		/**
		* Resets the persistent and in-memory data of the {@linkcode DataStore} instances to their default values.
		* @param stores An array of store IDs or a function that takes the store IDs and returns a boolean - if omitted, all stores will be affected
		*/
		async resetStoresData(stores) {
			return Promise.allSettled(this.getStoresFiltered(stores).map((store) => store.saveDefaultData()));
		}
		/**
		* Deletes the persistent data of the {@linkcode DataStore} instances.
		* Leaves the in-memory data untouched.
		* @param stores An array of store IDs or a function that takes the store IDs and returns a boolean - if omitted, all stores will be affected
		*/
		async deleteStoresData(stores) {
			return Promise.allSettled(this.getStoresFiltered(stores).map((store) => store.deleteData()));
		}
		/** Returns an array of the {@linkcode DataStore} instances managed by this DataStoreSerializer. */
		getStores() {
			return this.stores;
		}
		/**
		* Overwrites this DataStoreSerializer instance's stores.
		* @param stores Array of new stores for this instance to manage.
		* @param loadData Set to true to call {@linkcode DataStoreSerializer.loadStoresData()} for the overwritten stores before resolving.
		*/
		async setStores(stores, loadData = false) {
			this.unbindStoreEvents();
			this.stores = stores;
			this.loadedStores = /* @__PURE__ */ new Set();
			for (const store of this.stores) this.bindStoreEvents(store);
			if (loadData) await this.loadStoresData();
		}
		/** Returns the {@linkcode DataStore} instances whose IDs match the provided array or function. */
		getStoresFiltered(stores) {
			return this.stores.filter((s) => typeof stores === "undefined" ? true : Array.isArray(stores) ? stores.includes(s.id) : stores(s.id));
		}
		/** Checks if a given value is an array of SerializedDataStore objects. */
		static isSerializedDataStoreObjArray(obj) {
			return Array.isArray(obj) && obj.every((o) => typeof o === "object" && o !== null && "id" in o && "data" in o && "formatVersion" in o && "encoded" in o);
		}
		/** Checks if a given value is a SerializedDataStore object. */
		static isSerializedDataStoreObj(obj) {
			return typeof obj === "object" && obj !== null && "id" in obj && "data" in obj && "formatVersion" in obj && "encoded" in obj;
		}
	};
	var Debouncer = class extends NanoEmitter$1 {
		/**
		* Creates a new debouncer with the specified timeout and edge type.
		* @param timeout Timeout in milliseconds between letting through calls - defaults to 200
		* @param type The edge type to use for the debouncer - see {@linkcode DebouncerType} for details or [the documentation for an explanation and diagram](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#debouncer) - defaults to "immediate"
		*/
		constructor(timeout = 200, type = "immediate", nanoEmitterOptions) {
			super(nanoEmitterOptions);
			__publicField(this, "timeout");
			__publicField(this, "type");
			/** All registered listener functions and the time they were attached */
			__publicField(this, "listeners", []);
			/** The currently active timeout */
			__publicField(this, "activeTimeout");
			/** The latest queued call */
			__publicField(this, "queuedCall");
			this.timeout = timeout;
			this.type = type;
		}
		/** Adds a listener function that will be called on timeout */
		addListener(fn) {
			this.listeners.push(fn);
		}
		/** Removes the listener with the specified function reference */
		removeListener(fn) {
			const idx = this.listeners.findIndex((l) => l === fn);
			idx !== -1 && this.listeners.splice(idx, 1);
		}
		/** Removes all listeners */
		removeAllListeners() {
			this.listeners = [];
		}
		/** Returns all registered listeners */
		getListeners() {
			return this.listeners;
		}
		/** Sets the timeout for the debouncer */
		setTimeout(timeout) {
			this.emitEvent("change", this.timeout = timeout, this.type);
		}
		/** Returns the current timeout */
		getTimeout() {
			return this.timeout;
		}
		/** Whether the timeout is currently active, meaning any latest call to the {@linkcode call()} method will be queued */
		isTimeoutActive() {
			return typeof this.activeTimeout !== "undefined";
		}
		/** Sets the edge type for the debouncer */
		setType(type) {
			this.emitEvent("change", this.timeout, this.type = type);
		}
		/** Returns the current edge type */
		getType() {
			return this.type;
		}
		/** Use this to call the debouncer with the specified arguments that will be passed to all listener functions registered with {@linkcode addListener()} */
		call(...args) {
			const cl = (...a) => {
				this.queuedCall = void 0;
				this.emitEvent("call", ...a);
				this.listeners.forEach((l) => l.call(this, ...a));
			};
			const setRepeatTimeout = () => {
				this.activeTimeout = setTimeout(() => {
					if (this.queuedCall) {
						this.queuedCall();
						setRepeatTimeout();
					} else this.activeTimeout = void 0;
				}, this.timeout);
			};
			switch (this.type) {
				case "immediate":
					if (typeof this.activeTimeout === "undefined") {
						cl(...args);
						setRepeatTimeout();
					} else this.queuedCall = () => cl(...args);
					break;
				case "idle":
					if (this.activeTimeout) clearTimeout(this.activeTimeout);
					this.activeTimeout = setTimeout(() => {
						cl(...args);
						this.activeTimeout = void 0;
					}, this.timeout);
					break;
				default: throw new TypeError(`Invalid debouncer type: ${this.type}`);
			}
		}
	};
	function debounce(fn, timeout = 200, type = "immediate", nanoEmitterOptions) {
		const debouncer = new Debouncer(timeout, type, nanoEmitterOptions);
		debouncer.addListener(fn);
		const func = ((...args) => debouncer.call(...args));
		func.debouncer = debouncer;
		return func;
	}
	var rawConsts$1 = {
		coreUtilsVersion: "3.8.0",
		userUtilsVersion: "11.0.0"
	};
	function getConst(constKey, defaultVal) {
		const val = rawConsts$1[constKey];
		return val.match(/^#\{\{.+\}\}$/) ? defaultVal : val;
	}
	var versions = {
		/** Semver version string of the bundled library CoreUtils. */
		CoreUtils: getConst("coreUtilsVersion", "ERR:unknown"),
		/** Semver version string of UserUtils. */
		UserUtils: getConst("userUtilsVersion", "ERR:unknown")
	};
	function getUnsafeWindow$1() {
		try {
			return unsafeWindow;
		} catch (e) {
			return window;
		}
	}
	function addParent(element, newParent) {
		const oldParent = element.parentNode;
		if (!oldParent) throw new Error("Element doesn't have a parent node");
		oldParent.replaceChild(newParent, element);
		newParent.appendChild(element);
		return newParent;
	}
	function addGlobalStyle(style) {
		const styleElem = document.createElement("style");
		setInnerHtmlUnsafe(styleElem, style);
		document.head.appendChild(styleElem);
		return styleElem;
	}
	function openInNewTab(href, background, additionalProps) {
		try {
			if (typeof window.GM === "object") GM.openInTab(href, background);
		} catch (e) {
			const openElem = document.createElement("a");
			Object.assign(openElem, {
				className: "userutils-open-in-new-tab",
				target: "_blank",
				rel: "noopener noreferrer",
				tabIndex: -1,
				ariaHidden: "true",
				href,
				...additionalProps
			});
			Object.assign(openElem.style, {
				display: "none",
				pointerEvents: "none"
			});
			document.body.appendChild(openElem);
			openElem.click();
			setTimeout(() => {
				try {
					openElem.remove();
				} catch (e2) {}
			}, 0);
		}
	}
	function getSiblingsFrame(refElement, siblingAmount, refElementAlignment = "center-top", includeRef = true) {
		var _a, _b;
		const siblings = [...(_b = (_a = refElement.parentNode) == null ? void 0 : _a.childNodes) != null ? _b : []];
		const elemSiblIdx = siblings.indexOf(refElement);
		if (elemSiblIdx === -1) throw new Error("Element doesn't have a parent node");
		if (refElementAlignment === "top") return [...siblings.slice(elemSiblIdx + Number(!includeRef), elemSiblIdx + siblingAmount + Number(!includeRef))];
		else if (refElementAlignment.startsWith("center-")) {
			const halfAmount = (refElementAlignment === "center-bottom" ? Math.ceil : Math.floor)(siblingAmount / 2);
			const startIdx = Math.max(0, elemSiblIdx - halfAmount);
			const topOffset = Number(refElementAlignment === "center-top" && siblingAmount % 2 === 0 && includeRef);
			const btmOffset = Number(refElementAlignment === "center-bottom" && siblingAmount % 2 !== 0 && includeRef);
			const startIdxWithOffset = startIdx + topOffset + btmOffset;
			return [...siblings.filter((_, idx) => includeRef || idx !== elemSiblIdx).slice(startIdxWithOffset, startIdxWithOffset + siblingAmount)];
		} else if (refElementAlignment === "bottom") return [...siblings.slice(elemSiblIdx - siblingAmount + Number(includeRef), elemSiblIdx + Number(includeRef))];
		return [];
	}
	var ttPolicy$1;
	function setInnerHtmlUnsafe(element, html) {
		var _a, _b, _c;
		if (!ttPolicy$1 && typeof ((_a = window == null ? void 0 : window.trustedTypes) == null ? void 0 : _a.createPolicy) === "function") ttPolicy$1 = window.trustedTypes.createPolicy("_uu_set_innerhtml_unsafe", { createHTML: (unsafeHtml) => unsafeHtml });
		element.innerHTML = (_c = (_b = ttPolicy$1 == null ? void 0 : ttPolicy$1.createHTML) == null ? void 0 : _b.call(ttPolicy$1, html)) != null ? _c : html;
		return element;
	}
	var defaultDialogCss = `.uu-no-select {
  user-select: none;
}

.uu-dialog-bg {
  --uu-dialog-bg: #333333;
  --uu-dialog-bg-highlight: #252525;
  --uu-scroll-indicator-bg: rgba(10, 10, 10, 0.7);
  --uu-dialog-separator-color: #797979;
  --uu-dialog-border-radius: 10px;
}

.uu-dialog-bg {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
}

.uu-dialog {
  --uu-calc-dialog-height: calc(min(100vh - 40px, var(--uu-dialog-height-max)));
  position: absolute;
  display: flex;
  flex-direction: column;
  width: calc(min(100% - 60px, var(--uu-dialog-width-max)));
  border-radius: var(--uu-dialog-border-radius);
  height: auto;
  max-height: var(--uu-calc-dialog-height);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  color: #fff;
  background-color: var(--uu-dialog-bg);
}

.uu-dialog.align-top {
  top: 0;
  transform: translate(-50%, 40px);
}

.uu-dialog.align-bottom {
  top: 100%;
  transform: translate(-50%, -100%);
}

.uu-dialog-body {
  font-size: 1.5rem;
  padding: 20px;
}

.uu-dialog-body.small {
  padding: 15px;
}

#uu-dialog-opts {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 0px;
  overflow-y: auto;
}

.uu-dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 15px 20px 15px 20px;
  background-color: var(--uu-dialog-bg);
  border: 2px solid var(--uu-dialog-separator-color);
  border-style: none none solid none !important;
  border-radius: var(--uu-dialog-border-radius) var(--uu-dialog-border-radius) 0px 0px;
}

.uu-dialog-header.small {
  padding: 10px 15px;
  border-style: none none solid none !important;
}

.uu-dialog-header-pad {
  content: " ";
  min-height: 32px;
}

.uu-dialog-header-pad.small {
  min-height: 24px;
}

.uu-dialog-titlecont {
  display: flex;
  align-items: center;
}

.uu-dialog-titlecont-no-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.uu-dialog-title {
  position: relative;
  display: inline-block;
  font-size: 22px;
}

.uu-dialog-close {
  cursor: pointer;
}

.uu-dialog-header-img,
.uu-dialog-close
{
  width: 32px;
  height: 32px;
}

.uu-dialog-header-img.small,
.uu-dialog-close.small
{
  width: 24px;
  height: 24px;
}

.uu-dialog-footer {
  font-size: 17px;
  text-decoration: underline;
}

.uu-dialog-footer.hidden {
  display: none;
}

.uu-dialog-footer-cont {
  margin-top: 6px;
  padding: 15px 20px;
  background: var(--uu-dialog-bg);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--uu-dialog-bg) 30%, var(--uu-dialog-bg) 100%);
  border: 2px solid var(--uu-dialog-separator-color);
  border-style: solid none none none !important;
  border-radius: 0px 0px var(--uu-dialog-border-radius) var(--uu-dialog-border-radius);
}

.uu-dialog-footer-buttons-cont button:not(:last-of-type) {
  margin-right: 15px;
}`;
	var currentDialogId$1 = null;
	var openDialogs$1 = [];
	var defaultStrings = { closeDialogTooltip: "Click to close the dialog" };
	var Dialog = class _Dialog extends NanoEmitter$1 {
		constructor(options) {
			super();
			/** Options passed to the dialog in the constructor */
			__publicField(this, "options");
			/** ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules! */
			__publicField(this, "id");
			/** Strings used in the dialog (used for translations) */
			__publicField(this, "strings");
			__publicField(this, "dialogOpen", false);
			__publicField(this, "dialogMounted", false);
			const { strings, ...opts } = options;
			this.strings = {
				...defaultStrings,
				...strings != null ? strings : {}
			};
			this.options = {
				closeOnBgClick: true,
				closeOnEscPress: true,
				destroyOnClose: false,
				unmountOnClose: true,
				removeListenersOnDestroy: true,
				small: false,
				verticalAlign: "center",
				...opts
			};
			this.id = opts.id;
		}
		/** Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM */
		async mount() {
			var _a;
			if (this.dialogMounted) return;
			this.dialogMounted = true;
			if (!document.querySelector("style.uu-dialog-css")) addGlobalStyle((_a = this.options.dialogCss) != null ? _a : defaultDialogCss).classList.add("uu-dialog-css");
			const bgElem = document.createElement("div");
			bgElem.id = `uu-${this.id}-dialog-bg`;
			bgElem.classList.add("uu-dialog-bg");
			if (this.options.closeOnBgClick) bgElem.ariaLabel = bgElem.title = this.getString("closeDialogTooltip");
			bgElem.style.setProperty("--uu-dialog-width-max", `${this.options.width}px`);
			bgElem.style.setProperty("--uu-dialog-height-max", `${this.options.height}px`);
			bgElem.style.visibility = "hidden";
			bgElem.style.display = "none";
			bgElem.inert = true;
			bgElem.appendChild(await this.getDialogContent());
			document.body.appendChild(bgElem);
			this.attachListeners(bgElem);
			this.events.emit("render");
			return bgElem;
		}
		/** Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call */
		unmount() {
			var _a;
			this.close();
			this.dialogMounted = false;
			const clearSelectors = [`#uu-${this.id}-dialog-bg`, `#uu-style-dialog-${this.id}`];
			for (const sel of clearSelectors) (_a = document.querySelector(sel)) == null || _a.remove();
			this.events.emit("clear");
		}
		/** Clears the DOM of the dialog and then renders it again */
		async remount() {
			this.unmount();
			await this.mount();
		}
		/**
		* Opens the dialog - also mounts it if it hasn't been mounted yet  
		* Prevents default action and immediate propagation of the passed event
		*/
		async open(e) {
			var _a;
			e?.preventDefault();
			e?.stopImmediatePropagation();
			if (this.isOpen()) return;
			this.dialogOpen = true;
			if (openDialogs$1.includes(this.id)) throw new Error(`A dialog with the same ID of '${this.id}' already exists and is open!`);
			if (!this.isMounted()) await this.mount();
			const dialogBg = document.querySelector(`#uu-${this.id}-dialog-bg`);
			if (!dialogBg) return console.warn(`Couldn't find background element for dialog with ID '${this.id}'`);
			dialogBg.style.visibility = "visible";
			dialogBg.style.display = "block";
			dialogBg.inert = false;
			currentDialogId$1 = this.id;
			openDialogs$1.unshift(this.id);
			for (const dialogId of openDialogs$1) if (dialogId !== this.id) (_a = document.querySelector(`#uu-${dialogId}-dialog-bg`)) == null || _a.setAttribute("inert", "true");
			document.body.classList.remove("uu-no-select");
			document.body.setAttribute("inert", "true");
			this.events.emit("open");
			return dialogBg;
		}
		/** Closes the dialog - prevents default action and immediate propagation of the passed event */
		close(e) {
			var _a, _b;
			e?.preventDefault();
			e?.stopImmediatePropagation();
			if (!this.isOpen()) return;
			this.dialogOpen = false;
			const dialogBg = document.querySelector(`#uu-${this.id}-dialog-bg`);
			if (!dialogBg) return console.warn(`Couldn't find background element for dialog with ID '${this.id}'`);
			dialogBg.style.visibility = "hidden";
			dialogBg.style.display = "none";
			dialogBg.inert = true;
			openDialogs$1.splice(openDialogs$1.indexOf(this.id), 1);
			currentDialogId$1 = (_a = openDialogs$1[0]) != null ? _a : null;
			if (currentDialogId$1) (_b = document.querySelector(`#uu-${currentDialogId$1}-dialog-bg`)) == null || _b.removeAttribute("inert");
			if (openDialogs$1.length === 0) {
				document.body.classList.add("uu-no-select");
				document.body.removeAttribute("inert");
			}
			this.events.emit("close");
			if (this.options.destroyOnClose) this.destroy();
			else if (this.options.unmountOnClose) this.unmount();
		}
		/** Returns true if the dialog is currently open */
		isOpen() {
			return this.dialogOpen;
		}
		/** Returns true if the dialog is currently mounted */
		isMounted() {
			return this.dialogMounted;
		}
		/** Clears the DOM of the dialog and removes all event listeners */
		destroy() {
			this.unmount();
			this.events.emit("destroy");
			this.options.removeListenersOnDestroy && this.unsubscribeAll();
		}
		/** Returns the ID of the top-most dialog (the dialog that has been opened last) */
		static getCurrentDialogId() {
			return currentDialogId$1;
		}
		/** Returns the IDs of all currently open dialogs, top-most first */
		static getOpenDialogs() {
			return openDialogs$1;
		}
		getString(key) {
			var _a;
			return (_a = this.strings[key]) != null ? _a : defaultStrings[key];
		}
		/** Called once to attach all generic event listeners */
		attachListeners(bgElem) {
			if (this.options.closeOnBgClick) bgElem.addEventListener("click", (e) => {
				var _a;
				if (this.isOpen() && ((_a = e.target) == null ? void 0 : _a.id) === `uu-${this.id}-dialog-bg`) this.close(e);
			});
			if (this.options.closeOnEscPress) document.body.addEventListener("keydown", (e) => {
				if (e.key === "Escape" && this.isOpen() && _Dialog.getCurrentDialogId() === this.id) this.close(e);
			});
		}
		/**
		* Adds generic, accessible interaction listeners to the passed element.  
		* All listeners have the default behavior prevented and stop propagation (for keyboard events only as long as the captured key is valid).
		* @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
		*/
		onInteraction(elem, listener, listenerOptions) {
			const { preventDefault = true, stopPropagation = true, ...listenerOpts } = listenerOptions != null ? listenerOptions : {};
			const interactionKeys = [
				"Enter",
				" ",
				"Space"
			];
			const proxListener = (e) => {
				if (e instanceof KeyboardEvent) if (interactionKeys.includes(e.key)) {
					preventDefault && e.preventDefault();
					stopPropagation && e.stopPropagation();
				} else return;
				else if (e instanceof MouseEvent) {
					preventDefault && e.preventDefault();
					stopPropagation && e.stopPropagation();
				}
				listenerOpts != null && listenerOpts.once && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOpts);
				listenerOpts != null && listenerOpts.once && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOpts);
				listener(e);
			};
			elem.addEventListener("click", proxListener, listenerOpts);
			elem.addEventListener("keydown", proxListener, listenerOpts);
		}
		/** Returns the dialog content element and all its children */
		async getDialogContent() {
			var _a, _b, _c, _d;
			const header = (_b = (_a = this.options).renderHeader) == null ? void 0 : _b.call(_a);
			const footer = (_d = (_c = this.options).renderFooter) == null ? void 0 : _d.call(_c);
			const dialogWrapperEl = document.createElement("div");
			dialogWrapperEl.id = `uu-${this.id}-dialog`;
			dialogWrapperEl.classList.add("uu-dialog");
			dialogWrapperEl.ariaLabel = dialogWrapperEl.title = "";
			dialogWrapperEl.role = "dialog";
			dialogWrapperEl.setAttribute("aria-labelledby", `uu-${this.id}-dialog-title`);
			dialogWrapperEl.setAttribute("aria-describedby", `uu-${this.id}-dialog-body`);
			if (this.options.verticalAlign !== "center") dialogWrapperEl.classList.add(`align-${this.options.verticalAlign}`);
			const headerWrapperEl = document.createElement("div");
			headerWrapperEl.classList.add("uu-dialog-header");
			this.options.small && headerWrapperEl.classList.add("small");
			if (header) {
				const headerTitleWrapperEl = document.createElement("div");
				headerTitleWrapperEl.id = `uu-${this.id}-dialog-title`;
				headerTitleWrapperEl.classList.add("uu-dialog-title-wrapper");
				headerTitleWrapperEl.role = "heading";
				headerTitleWrapperEl.ariaLevel = "1";
				headerTitleWrapperEl.appendChild(header instanceof Promise ? await header : header);
				headerWrapperEl.appendChild(headerTitleWrapperEl);
			} else {
				const padEl = document.createElement("div");
				padEl.classList.add("uu-dialog-header-pad", this.options.small ? "small" : "");
				headerWrapperEl.appendChild(padEl);
			}
			if (this.options.renderCloseBtn) {
				const closeBtnEl = await this.options.renderCloseBtn();
				closeBtnEl.classList.add("uu-dialog-close");
				this.options.small && closeBtnEl.classList.add("small");
				closeBtnEl.tabIndex = 0;
				if (closeBtnEl.hasAttribute("alt")) closeBtnEl.setAttribute("alt", this.getString("closeDialogTooltip"));
				closeBtnEl.title = closeBtnEl.ariaLabel = this.getString("closeDialogTooltip");
				this.onInteraction(closeBtnEl, () => this.close());
				headerWrapperEl.appendChild(closeBtnEl);
			}
			dialogWrapperEl.appendChild(headerWrapperEl);
			const dialogBodyElem = document.createElement("div");
			dialogBodyElem.id = `uu-${this.id}-dialog-body`;
			dialogBodyElem.classList.add("uu-dialog-body");
			this.options.small && dialogBodyElem.classList.add("small");
			const body = this.options.renderBody();
			dialogBodyElem.appendChild(body instanceof Promise ? await body : body);
			dialogWrapperEl.appendChild(dialogBodyElem);
			if (footer) {
				const footerWrapper = document.createElement("div");
				footerWrapper.classList.add("uu-dialog-footer-cont");
				dialogWrapperEl.appendChild(footerWrapper);
				footerWrapper.appendChild(footer instanceof Promise ? await footer : footer);
			}
			return dialogWrapperEl;
		}
	};
	var PlatformError = class extends DatedError {
		constructor(message, options) {
			super(message, options);
			this.name = "PlatformError";
		}
	};
	function preloadImages(srcUrls, rejects = false) {
		const promises = srcUrls.map((src) => new Promise((res, rej) => {
			const image = new Image();
			image.addEventListener("load", () => res(image), { once: true });
			image.addEventListener("error", (evt) => rejects ? rej(evt) : res(image), { once: true });
			image.src = src;
		}));
		return Promise.allSettled(promises);
	}
	function observeElementProp(element, property, callback) {
		const elementPrototype = Object.getPrototypeOf(element);
		if (elementPrototype.hasOwnProperty(property)) {
			const descriptor = Object.getOwnPropertyDescriptor(elementPrototype, property);
			Object.defineProperty(element, property, {
				get: function() {
					var _a;
					return (_a = descriptor == null ? void 0 : descriptor.get) == null ? void 0 : _a.apply(this, arguments);
				},
				set: function() {
					var _a;
					const oldValue = this[property];
					(_a = descriptor == null ? void 0 : descriptor.set) == null || _a.apply(this, arguments);
					const newValue = this[property];
					if (typeof callback === "function") callback.bind(this, oldValue, newValue);
					return newValue;
				}
			});
		}
	}
	function isScrollable(element) {
		const { overflowX, overflowY } = getComputedStyle(element);
		return {
			vertical: (overflowY === "scroll" || overflowY === "auto") && element.scrollHeight > element.clientHeight,
			horizontal: (overflowX === "scroll" || overflowX === "auto") && element.scrollWidth > element.clientWidth
		};
	}
	function interceptEvent(eventObject, eventName, predicate = () => true) {
		var _a;
		if (typeof window.GM === "object" && ((_a = GM == null ? void 0 : GM.info) == null ? void 0 : _a.scriptHandler) && GM.info.scriptHandler === "FireMonkey" && (eventObject === window || eventObject === getUnsafeWindow$1())) throw new PlatformError("Intercepting window events is not supported on FireMonkey due to the isolated context the userscript is forced to run in.");
		if ("stackTraceLimit" in Error) {
			Error.stackTraceLimit = Math.max(Number(Error.stackTraceLimit), 100);
			if (isNaN(Number(Error.stackTraceLimit))) Error.stackTraceLimit = 100;
		}
		(function(original) {
			eventObject.__proto__.addEventListener = function(...args) {
				var _a2, _b;
				const origListener = typeof args[1] === "function" ? args[1] : (_b = (_a2 = args[1]) == null ? void 0 : _a2.handleEvent) != null ? _b : (() => void 0);
				args[1] = function(...a) {
					if (args[0] === eventName && predicate(Array.isArray(a) ? a[0] : a)) return;
					else return origListener.apply(this, a);
				};
				original.apply(this, args);
			};
		})(eventObject.__proto__.addEventListener);
	}
	function interceptWindowEvent(eventName, predicate = () => true) {
		return interceptEvent(getUnsafeWindow$1(), eventName, predicate);
	}
	function probeElementStyle(probeStyle, element, hideOffscreen = true, parentElement = document.body) {
		const el = element ? typeof element === "function" ? element() : element : document.createElement("span");
		if (hideOffscreen) {
			el.style.position = "absolute";
			el.style.left = "-9999px";
			el.style.top = "-9999px";
			el.style.zIndex = "-9999";
		}
		el.classList.add("_uu_probe_element");
		parentElement.appendChild(el);
		const result = probeStyle(window.getComputedStyle(el), el);
		setTimeout(() => el.remove(), 1);
		return result;
	}
	var domReady = document.readyState !== "loading";
	!domReady && document.addEventListener("DOMContentLoaded", () => domReady = true, { once: true });
	function isDomLoaded() {
		return domReady;
	}
	function onDomLoad$1(cb) {
		return new Promise((res) => {
			if (domReady) {
				cb?.();
				res();
			} else document.addEventListener("DOMContentLoaded", () => {
				cb?.();
				res();
			}, { once: true });
		});
	}
	var GMStorageEngine = class extends DataStoreEngine {
		/**
		* Creates an instance of `GMStorageEngine`.  
		*   
		* - ⚠️ Requires the grants `GM.getValue`, `GM.setValue`, `GM.deleteValue`, and `GM.listValues` in your userscript metadata.
		* - ⚠️ Don't reuse engine instances, always create a new one for each {@linkcode DataStore} instance.
		*/
		constructor(options) {
			super(options == null ? void 0 : options.dataStoreOptions);
			__publicField(this, "options");
			this.options = { ...options };
		}
		/** Fetches a value from persistent storage */
		async getValue(name, defaultValue) {
			try {
				if (!("GM" in globalThis)) throw new PlatformError("GM is not defined. Make sure to run this in a userscript environment and that the necessary grants are set.");
				const value = await globalThis.GM.getValue(name, defaultValue);
				return value === void 0 ? defaultValue : value;
			} catch (err) {
				console.error(`Error getting value for key "${name}":`, err);
				throw err;
			}
		}
		/** Sets a value in persistent storage */
		async setValue(name, value) {
			try {
				if (!("GM" in globalThis)) throw new PlatformError("GM is not defined. Make sure to run this in a userscript environment and that the necessary grants are set.");
				await globalThis.GM.setValue(name, value);
			} catch (err) {
				console.error(`Error setting value for key "${name}":`, err);
				throw err;
			}
		}
		/** Deletes a value from persistent storage */
		async deleteValue(name) {
			try {
				if (!("GM" in globalThis)) throw new PlatformError("GM is not defined. Make sure to run this in a userscript environment and that the necessary grants are set.");
				await globalThis.GM.deleteValue(name);
			} catch (err) {
				console.error(`Error deleting value for key "${name}":`, err);
				throw err;
			}
		}
	};
	var Mixins = class {
		/**
		* Creates a new Mixins instance.
		* @param config Configuration object to customize the behavior.
		*/
		constructor(config = {}) {
			/** List of all registered mixins */
			__publicField(this, "mixins", []);
			/** Default configuration object for mixins */
			__publicField(this, "defaultMixinCfg");
			/** Whether the priorities should auto-increment if not specified */
			__publicField(this, "autoIncPrioEnabled");
			/** The current auto-increment priority counter */
			__publicField(this, "autoIncPrioCounter", /* @__PURE__ */ new Map());
			var _a, _b, _c;
			this.defaultMixinCfg = pureObj$1({
				priority: (_a = config.defaultPriority) != null ? _a : 0,
				stopPropagation: (_b = config.defaultStopPropagation) != null ? _b : false,
				signal: config.defaultSignal
			});
			this.autoIncPrioEnabled = (_c = config.autoIncrementPriority) != null ? _c : false;
		}
		/**
		* Adds a mixin function to the given {@linkcode mixinKey}.  
		* If no priority is specified, it will be calculated via the protected method {@linkcode calcPriority()} based on the constructor configuration, or fall back to the default priority.
		* @param mixinKey The key to identify the mixin function.
		* @param mixinFn The function to be called to apply the mixin. The first argument is the input value, the second argument is the context object (if any).
		* @param config Configuration object to customize the mixin behavior, or just the priority if a number is passed.
		* @returns Returns a cleanup function, to be called when this mixin is no longer needed.
		*/
		add(mixinKey, mixinFn, config = pureObj$1({})) {
			const calcPrio = typeof config === "number" ? config : this.calcPriority(mixinKey, config);
			const mixin = pureObj$1({
				...this.defaultMixinCfg,
				key: mixinKey,
				fn: mixinFn,
				...typeof config === "object" ? config : {},
				...typeof calcPrio === "number" && !isNaN(calcPrio) ? { priority: calcPrio } : {}
			});
			this.mixins.push(mixin);
			const rem = () => {
				this.mixins = this.mixins.filter((m) => m !== mixin);
			};
			if (mixin.signal) mixin.signal.addEventListener("abort", rem, { once: true });
			return rem;
		}
		/** Returns a list of all added mixins with their keys and configuration objects, but not their functions */
		list() {
			return this.mixins.map(({ fn: _f, ...rest }) => rest);
		}
		/**
		* Applies all mixins with the given key to the input value, respecting the priority and stopPropagation settings.  
		* If additional context is set in the MixinMap, it will need to be passed as the third argument.  
		* @returns The modified value after all mixins have been applied. The method will return a Promise if at least one of the mixins is async. If all mixins are indicated to be synchronous in TS, but at least one of them turns out to be asynchronous, the return type will be a Promise. With `await`, this will not make a difference, but `.then().catch()` could be affected.
		*/
		resolve(mixinKey, inputValue, ...inputCtx) {
			const sortedMixins = [...this.mixins.filter((m) => m.key === mixinKey)].sort((a, b) => b.priority - a.priority);
			let result = inputValue;
			for (let i = 0; i < sortedMixins.length; i++) {
				const mixin = sortedMixins[i];
				result = mixin.fn(result, ...inputCtx);
				if (result instanceof Promise) return (async () => {
					result = await result;
					if (mixin.stopPropagation) return result;
					for (let j = i + 1; j < sortedMixins.length; j++) {
						const mixin2 = sortedMixins[j];
						result = await mixin2.fn(result, ...inputCtx);
						if (mixin2.stopPropagation) break;
					}
					return result;
				})();
				else if (mixin.stopPropagation) break;
			}
			return result;
		}
		/** Calculates the priority for a mixin based on the given configuration and the current auto-increment state of the instance */
		calcPriority(mixinKey, config) {
			var _a;
			if (config.priority !== void 0) return void 0;
			if (!this.autoIncPrioEnabled) return (_a = config.priority) != null ? _a : this.defaultMixinCfg.priority;
			if (!this.autoIncPrioCounter.has(mixinKey)) this.autoIncPrioCounter.set(mixinKey, this.defaultMixinCfg.priority);
			let prio = this.autoIncPrioCounter.get(mixinKey);
			while (this.mixins.some((m) => m.key === mixinKey && m.priority === prio)) prio++;
			this.autoIncPrioCounter.set(mixinKey, prio + 1);
			return prio;
		}
		/**
		* Removes all mixins with the given key.  
		* Note: this method is protected to avoid third-party code from removing mixins. If needed, you can extend the Mixins class and expose this method publicly.
		*/
		removeAll(mixinKey) {
			this.mixins.filter((m) => m.key === mixinKey);
			this.mixins = this.mixins.filter((m) => m.key !== mixinKey);
		}
	};
	var SelectorObserver = class extends PicoEmitter {
		constructor(baseElement, options = {}) {
			super(options == null ? void 0 : options.picoEmitterOptions);
			__publicField(this, "enabled", false);
			__publicField(this, "observer");
			__publicField(this, "observerOptions");
			__publicField(this, "customOptions");
			__publicField(this, "listenerMap");
			/** The base element (or its selector) to observe the children of - can be set in the constructor and is read-only afterward. */
			__publicField(this, "baseElement");
			/** The options that were set in the constructor - read-only afterward. */
			__publicField(this, "options");
			this.baseElement = baseElement;
			this.options = options;
			this.listenerMap = /* @__PURE__ */ new Map();
			const { defaultDebounce, defaultDebounceType, disableOnNoListeners, enableOnAddListener, ...observerOptions } = options;
			this.observerOptions = {
				childList: true,
				subtree: true,
				...observerOptions
			};
			this.customOptions = {
				defaultDebounce: defaultDebounce != null ? defaultDebounce : 0,
				defaultDebounceType: defaultDebounceType != null ? defaultDebounceType : "immediate",
				disableOnNoListeners: disableOnNoListeners != null ? disableOnNoListeners : false,
				enableOnAddListener: enableOnAddListener != null ? enableOnAddListener : true
			};
			if (typeof this.customOptions.checkInterval !== "number") this.observer = new MutationObserver(() => this.checkAllSelectors());
			else {
				this.checkAllSelectors();
				setInterval(() => this.checkAllSelectors(), this.customOptions.checkInterval);
			}
		}
		/** Call to check all selectors in the {@linkcode listenerMap} using {@linkcode checkSelector()} */
		checkAllSelectors() {
			if (!this.enabled || !isDomLoaded()) return;
			for (const [selector, listeners] of this.listenerMap.entries()) this.checkSelector(selector, listeners);
			this.emitEvent("checked");
		}
		/** Checks if the element(s) with the given {@linkcode selector} exist in the DOM and calls the respective {@linkcode listeners} accordingly */
		checkSelector(selector, listeners) {
			var _a;
			if (!this.enabled) return;
			const baseElement = typeof this.baseElement === "string" ? document.querySelector(this.baseElement) : this.baseElement;
			if (!baseElement) return;
			const all = listeners.some((listener) => listener.all);
			const one = listeners.some((listener) => !listener.all);
			const allElements = all ? baseElement.querySelectorAll(selector) : null;
			const oneElement = one ? baseElement.querySelector(selector) : null;
			for (const options of listeners) {
				if (options.all) {
					if (allElements && allElements.length > 0) {
						options.listener(allElements);
						this.emitEvent("found", {
							selector,
							elements: allElements
						});
						if (!options.continuous) this.removeListener(selector, options);
					}
				} else if (oneElement) {
					options.listener(oneElement);
					this.emitEvent("found", {
						selector,
						elements: oneElement
					});
					if (!options.continuous) this.removeListener(selector, options);
				}
				if (((_a = this.listenerMap.get(selector)) == null ? void 0 : _a.length) === 0) this.listenerMap.delete(selector);
				if (this.listenerMap.size === 0 && this.customOptions.disableOnNoListeners) this.disable();
			}
		}
		/**
		* Starts observing the children of the base element for changes to the given {@linkcode selector} according to the set {@linkcode options}
		* @param selector The selector to observe
		* @param options Options for the selector observation
		* @param options.listener Gets called whenever the selector was found in the DOM
		* @param [options.all] Whether to use `querySelectorAll()` instead - default is false
		* @param [options.continuous] Whether to call the listener continuously instead of just once - default is false
		* @param [options.debounce] Whether to debounce the listener to reduce calls to `querySelector` or `querySelectorAll` - set undefined or <=0 to disable (default)
		* @returns Returns a function that can be called to remove this listener more easily
		*/
		addListener(selector, options) {
			options = {
				all: false,
				continuous: false,
				debounce: 0,
				...options
			};
			if (options.debounce && options.debounce > 0 || this.customOptions.defaultDebounce && this.customOptions.defaultDebounce > 0) options.listener = debounce(options.listener, options.debounce || this.customOptions.defaultDebounce, options.debounceType || this.customOptions.defaultDebounceType);
			if (this.listenerMap.has(selector)) this.listenerMap.get(selector).push(options);
			else this.listenerMap.set(selector, [options]);
			if (this.enabled === false && this.customOptions.enableOnAddListener) this.enable();
			this.checkSelector(selector, [options]);
			return () => this.removeListener(selector, options);
		}
		/** Disables the observation of the child elements */
		disable() {
			var _a;
			if (!this.enabled) return;
			this.enabled = false;
			(_a = this.observer) == null || _a.disconnect();
			this.emitEvent("disabled");
		}
		/**
		* Enables or reenables the observation of the child elements.
		* @param immediatelyCheckSelectors Whether to immediately check if all previously registered selectors exist (default is true)
		* @returns Returns true when the observation was enabled, false otherwise (e.g. when the base element wasn't found)
		*/
		enable(immediatelyCheckSelectors = true) {
			var _a;
			const baseElement = typeof this.baseElement === "string" ? document.querySelector(this.baseElement) : this.baseElement;
			if (this.enabled || !baseElement) return false;
			this.enabled = true;
			(_a = this.observer) == null || _a.observe(baseElement, this.observerOptions);
			this.emitEvent("enabled");
			if (immediatelyCheckSelectors) this.checkAllSelectors();
			return true;
		}
		/** Returns whether the observation of the child elements is currently enabled */
		isEnabled() {
			return this.enabled;
		}
		/** Removes all listeners that have been registered with {@linkcode addListener()} */
		clearListeners() {
			this.listenerMap.clear();
		}
		/**
		* Removes all listeners for the given {@linkcode selector} that have been registered with {@linkcode addListener()}
		* @returns Returns true when all listeners for the associated selector were found and removed, false otherwise
		*/
		removeAllListeners(selector) {
			return this.listenerMap.delete(selector);
		}
		/**
		* Removes a single listener for the given {@linkcode selector} and {@linkcode options} that has been registered with {@linkcode addListener()}
		* @returns Returns true when the listener was found and removed, false otherwise
		*/
		removeListener(selector, options) {
			const listeners = this.listenerMap.get(selector);
			if (!listeners) return false;
			const index = listeners.indexOf(options);
			if (index > -1) {
				listeners.splice(index, 1);
				return true;
			}
			return false;
		}
		/** Returns all listeners that have been registered with {@linkcode addListener()} */
		getAllListeners() {
			return this.listenerMap;
		}
		/** Returns all listeners for the given {@linkcode selector} that have been registered with {@linkcode addListener()} */
		getListeners(selector) {
			return this.listenerMap.get(selector);
		}
	};
	var trans = {};
	var valTransforms = [];
	var fallbackLang;
	function translate(language, key, ...trArgs) {
		if (typeof language !== "string") language = fallbackLang != null ? fallbackLang : "";
		const trObj = trans[language];
		if (typeof language !== "string" || typeof trObj !== "object" || trObj === null) return fallbackLang && language !== fallbackLang ? translate(fallbackLang, key, ...trArgs) : key;
		const transformTrVal = (trKey, trValue) => {
			const tfs = valTransforms.filter(({ regex }) => new RegExp(regex).test(String(trValue)));
			if (tfs.length === 0) return String(trValue);
			let retStr = String(trValue);
			for (const tf of tfs) {
				const re = new RegExp(tf.regex);
				const matches = [];
				let execRes;
				while ((execRes = re.exec(trValue)) !== null) {
					if (matches.some((m) => m[0] === (execRes == null ? void 0 : execRes[0]) && m.index === (execRes == null ? void 0 : execRes.index))) break;
					matches.push(execRes);
				}
				retStr = String(tf.fn({
					language,
					trValue,
					currentValue: retStr,
					matches,
					trKey,
					trArgs
				}));
			}
			return retStr;
		};
		const keyParts = key.split(".");
		let value = trObj;
		for (const part of keyParts) {
			if (typeof value !== "object" || value === null) {
				value = void 0;
				break;
			}
			value = value == null ? void 0 : value[part];
		}
		if (typeof value === "string") return transformTrVal(key, value);
		value = trObj == null ? void 0 : trObj[key];
		if (typeof value === "string") return transformTrVal(key, value);
		return fallbackLang && language !== fallbackLang ? translate(fallbackLang, key, ...trArgs) : key;
	}
	function trFor(language, key, ...args) {
		const txt = translate(language, key, ...args);
		if (txt === key) return fallbackLang ? translate(fallbackLang, key, ...args) : key;
		return txt;
	}
	function useTr(language) {
		return (key, ...args) => translate(language, key, ...args);
	}
	function hasKey$1(language = fallbackLang != null ? fallbackLang : "", key) {
		return tr.for(language, key) !== key;
	}
	function addTranslations(language, translations) {
		trans[language] = JSON.parse(JSON.stringify(translations));
	}
	function getTranslations(language = fallbackLang != null ? fallbackLang : "") {
		return trans[language];
	}
	function getAllTranslations(asCopy = true) {
		return asCopy ? JSON.parse(JSON.stringify(trans)) : trans;
	}
	var deleteTranslations = (language) => {
		if (language in trans) {
			delete trans[language];
			return true;
		}
		return false;
	};
	function setFallbackLanguage(fallbackLanguage) {
		fallbackLang = fallbackLanguage;
	}
	function getFallbackLanguage() {
		return fallbackLang;
	}
	function addTransform(transform) {
		const [regex, fn] = transform;
		valTransforms.push({
			fn,
			regex
		});
	}
	function deleteTransform(patternOrFn) {
		const idx = valTransforms.findIndex((t) => typeof patternOrFn === "function" ? t.fn === patternOrFn : t.regex === patternOrFn);
		if (idx !== -1) {
			valTransforms.splice(idx, 1);
			return true;
		}
		return false;
	}
	var commonKeyedTransform = ({ matches, trArgs, trValue }, patternRegex, quickMatchPattern) => {
		let str = String(trValue);
		const someMatchKeyInArgs = (obj) => matches.some((match) => match[1] !== void 0 && match[1] in obj);
		const namedMapping = () => {
			if (!str.includes(quickMatchPattern) || typeof trArgs[0] === "undefined" || typeof trArgs[0] !== "object" || !someMatchKeyInArgs(trArgs[0])) return;
			for (const match of matches) {
				const repl = match[1] !== void 0 ? trArgs[0][match[1]] : void 0;
				if (typeof repl !== "undefined") str = str.replace(match[0], String(repl));
			}
		};
		const positionalMapping = () => {
			if (!patternRegex.test(str) || typeof trArgs[0] === "undefined") return;
			let matchNum = -1;
			for (const match of matches) {
				matchNum++;
				if (typeof trArgs[matchNum] !== "undefined") str = str.replace(match[0], String(trArgs[matchNum]));
			}
		};
		let notStringifiable = false;
		try {
			`${trArgs[0]}`;
		} catch (e) {
			notStringifiable = true;
		}
		if (trArgs[0] && typeof trArgs[0] === "object" && trArgs[0] !== null && (notStringifiable || String(trArgs[0]).startsWith("[object")) && someMatchKeyInArgs(trArgs[0])) namedMapping();
		else positionalMapping();
		return str;
	};
	var tr = {
		/**
		* Returns the translated text for the specified key in the specified language.  
		* If the key is not found in the specified previously registered translation, the key itself is returned.  
		*   
		* ⚠️ Remember to register a language with {@linkcode tr.addTranslations()} before using this function, otherwise it will always return the key itself.
		* @param language Language code or name to use for the translation
		* @param key Key of the translation to return
		* @param args Optional arguments to be passed to the translated text. They will replace placeholders in the format `%n`, where `n` is the 1-indexed argument number
		*/
		for: (...params) => trFor(...params),
		/**
		* Prepares a translation function for a specific language.
		* @example ```ts
		* tr.addTranslations("en", {
		*   hello: "Hello, %1!",
		* });
		* tr.addTransform(tr.transforms.percent);
		* const t = tr.useTr("en");
		* t("hello", "John"); // "Hello, John!"
		* ```
		*/
		use: (...params) => useTr(...params),
		/**
		* Checks if a translation exists given its {@linkcode key} in the specified {@linkcode language} or the set fallback language.  
		* If the given language was not registered with {@linkcode tr.addTranslations()}, this function will return `false`.  
		* @param key Key of the translation to check for
		* @param language Language code or name to check in - defaults to the currently active language (set by {@linkcode tr.setLanguage()})
		* @returns Whether the translation key exists in the specified language - always returns `false` if no language is given and no active language was set
		*/
		hasKey: (language = fallbackLang != null ? fallbackLang : "", key) => hasKey$1(language, key),
		/**
		* Registers a new language and its translations - if the language already exists, it will be wholly replaced by the new one. If merging is necessary, it will have to be done before calling this function.  
		*   
		* The translations are a key-value pair where the key is the translation key and the value is the translated text.  
		* The translations can also be infinitely nested objects, resulting in a dot-separated key.
		* @param language Arbitrary language code or name to register for these translations. These should ideally stick to a standard like [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) (the standard used by JavaScript), but could really be anything.
		* @param translations Translations for the specified language
		* @example ```ts
		* tr.addTranslations("en", {
		*   hello: "Hello, %1!",
		*   foo: {
		*     bar: "Foo bar",
		*   },
		* });
		* ```
		*/
		addTranslations,
		/**
		* Returns the translation object for the specified language or currently active one.  
		* If the language is not registered with {@linkcode tr.addTranslations()}, this function will return `undefined`.  
		* @param language Language code or name to get translations for - defaults to the currently active language (set by {@linkcode tr.setLanguage()})
		* @returns Translations for the specified language
		*/
		getTranslations,
		/**
		* Returns all translations currently loaded into memory, indexed by language.  
		* @param asCopy Set to `false` to get a reference to the actual translations object instead of a copy (default). Might be useful for modifying translations in-memory without using {@linkcode tr.addTranslations()} to replace the entire object.
		*/
		getAllTranslations,
		/**
		* Deletes the translations for the specified language from memory.  
		* @param language Language code or name to delete
		* @returns Whether the translations for the passed language were successfully deleted
		*/
		deleteTranslations,
		/**
		* The fallback language to use when a translation key is not found in the currently active language.  
		* Leave undefined to disable fallbacks and just return the translation key if translations are not found.
		*/
		setFallbackLanguage,
		/** Returns the fallback language set by {@linkcode tr.setFallbackLanguage()} */
		getFallbackLanguage,
		/**
		* Adds a transform function that gets called after resolving a translation for any language.  
		* Use it to enable dynamic values in translations, for example to insert custom global values from the application or to denote a section that could be encapsulated by rich text.  
		* Refer to the `transforms` property for some predefined transform functions that can be added via this method.
		* @example
		* ```ts
		* import { tr, type TrKeys } from "@sv443-network/userutils";
		* 
		* const transEn = {
		*    "headline": {
		*      "basic": "Hello, ${USERNAME}",
		*      "html": "Hello, ${USERNAME}<br><c=red>You have ${UNREAD_NOTIFS} unread notifications.</c>"
		*    }
		* } as const;
		* 
		* tr.addTranslations("en", transEn);
		* 
		* // replace ${PATTERN} with predefined values
		* tr.addTransform(/\$\{([A-Z_]+)\}/g, ({ matches }) => {
		*   switch(matches?.[1]) {
		*     default:
		*       return `[UNKNOWN: ${matches?.[1]}]`;
		*     // these would be grabbed from elsewhere in the application, like a DataStore, global state or variable:
		*     case "USERNAME":
		*       return "JohnDoe45";
		*     case "UNREAD_NOTIFS":
		*       return 5;
		*   }
		* });
		* 
		* // replace <c=red>...</c> with <span style="color: red;">...</span>
		* tr.addTransform(/<c=([a-z]+)>(.*?)<\/c>/g, ({ matches }) => {
		*   const color = matches?.[1];
		*   const content = matches?.[2];
		* 
		*   return `<span style="color: ${color};">${content}</span>`;
		* });
		* 
		* const t = tr.use<TrKeys<typeof transEn>>("en");
		* 
		* t("headline.basic"); // "Hello, JohnDoe45"
		* t("headline.html");  // "Hello, JohnDoe45<br><span style="color: red;">You have 5 unread notifications.</span>"
		* ```
		* @param args A tuple containing the regular expression to match and the transform function to call if the pattern is found in a translation string
		*/
		addTransform,
		/**
		* Deletes the first matching transform from the list of registered transforms.  
		* @param patternOrFn A reference to the regular expression of the transform function, a string matching the original pattern, or a reference to the transform function
		* @returns Returns true if the transform function was found and deleted, false if it wasn't found
		*/
		deleteTransform,
		/** Collection of predefined transform functions that can be added via {@linkcode tr.addTransform()} */
		transforms: {
			/**
			* This transform will replace placeholders matching `${key}` with the value of the passed argument(s).  
			* The arguments can be passed in keyed object form or positionally via the spread operator:
			* - Keyed: If the first argument is an object and `key` is found in it, the value will be used for the replacement.
			* - Positional: If the first argument is not an object or has a `toString()` method that returns something that doesn't start with `[object`, the values will be positionally inserted in the order they were passed.
			*   
			* @example ```ts
			* tr.addTranslations("en", {
			*  "greeting": "Hello, ${user}!\nYou have ${notifs} notifications.",
			* });
			* tr.addTransform(tr.transforms.templateLiteral);
			* 
			* const t = tr.use("en");
			* 
			* // both calls return the same result:
			* t("greeting", { user: "John", notifs: 5 }); // "Hello, John!\nYou have 5 notifications."
			* t("greeting", "John", 5);                   // "Hello, John!\nYou have 5 notifications."
			* 
			* // when a key isn't found in the object, it will be left as-is:
			* t("greeting", { user: "John" }); // "Hello, John!\nYou have ${notifs} notifications."
			* ```
			*/
			templateLiteral: [/\$\{([a-zA-Z0-9$_-]+)\}/gm, (tfProps) => commonKeyedTransform(tfProps, /\$\{.+\}/m, "${")],
			/**
			* This transform will replace placeholders matching `{{key}}` with the value of the passed argument(s).  
			* This format is commonly used in i18n libraries. Note that advanced syntax is not supported, only simple key replacement.  
			* The arguments can be passed in keyed object form or positionally via the spread operator:
			* - Keyed: If the first argument is an object and `key` is found in it, the value will be used for the replacement.
			* - Positional: If the first argument is not an object or has a `toString()` method that returns something that doesn't start with `[object`, the values will be positionally inserted in the order they were passed.
			*   
			* @example ```ts
			* tr.addTranslations("en", {
			*  "greeting": "Hello, {{user}}!\nYou have {{notifs}} notifications.",
			* });
			* tr.addTransform(tr.transforms.i18n);
			* 
			* const t = tr.use("en");
			* 
			* // both calls return the same result:
			* t("greeting", { user: "Alice", notifs: 5 }); // "Hello, Alice!\nYou have 5 notifications."
			* t("greeting", "Alice", 5);                   // "Hello, Alice!\nYou have 5 notifications."
			* 
			* // when a key isn't found in the object, it will be left as-is:
			* t("greeting", { user: "Alice" }); // "Hello, Alice!\nYou have {{notifs}} notifications."
			* ```
			*/
			i18n: [/\{\{([a-zA-Z0-9$_-]+)\}\}/gm, (tfProps) => commonKeyedTransform(tfProps, /\{\{.+\}\}/m, "{{")],
			/**
			* This transform will replace `%n` placeholders with the value of the passed arguments.  
			* The `%n` placeholders are 1-indexed, meaning `%1` will be replaced by the first argument (index 0), `%2` by the second (index 1), and so on.  
			* Objects will be stringified via `String()` before being inserted.  
			*   
			* @example ```ts
			* tr.addTranslations("en", {
			*  "greeting": "Hello, %1!\nYou have %2 notifications.",
			* });
			* tr.addTransform(tr.transforms.percent);
			* 
			* const t = tr.use("en");
			* 
			* // arguments are inserted in the order they're passed:
			* t("greeting", "Bob", 5); // "Hello, Bob!\nYou have 5 notifications."
			* 
			* // when a value isn't found, the placeholder will be left as-is:
			* t("greeting", "Bob"); // "Hello, Bob!\nYou have %2 notifications."
			* ```
			*/
			percent: [/%(\d+)/gm, ({ matches, trArgs, trValue }) => {
				let str = String(trValue);
				for (const match of matches) {
					const repl = trArgs == null ? void 0 : trArgs[Number(match[1]) - 1];
					if (typeof repl !== "undefined") str = str.replace(match[0], String(repl));
				}
				return str;
			}]
		}
	};
	//#endregion
	//#region node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.mjs
	/*! @license DOMPurify 3.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.3/LICENSE */
	var { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
	var { freeze, seal, create } = Object;
	var { apply, construct } = typeof Reflect !== "undefined" && Reflect;
	if (!freeze) freeze = function freeze(x) {
		return x;
	};
	if (!seal) seal = function seal(x) {
		return x;
	};
	if (!apply) apply = function apply(func, thisArg) {
		for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
		return func.apply(thisArg, args);
	};
	if (!construct) construct = function construct(Func) {
		for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
		return new Func(...args);
	};
	var arrayForEach = unapply(Array.prototype.forEach);
	var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
	var arrayPop = unapply(Array.prototype.pop);
	var arrayPush = unapply(Array.prototype.push);
	var arraySplice = unapply(Array.prototype.splice);
	var stringToLowerCase = unapply(String.prototype.toLowerCase);
	var stringToString = unapply(String.prototype.toString);
	var stringMatch = unapply(String.prototype.match);
	var stringReplace = unapply(String.prototype.replace);
	var stringIndexOf = unapply(String.prototype.indexOf);
	var stringTrim = unapply(String.prototype.trim);
	var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
	var regExpTest = unapply(RegExp.prototype.test);
	var typeErrorCreate = unconstruct(TypeError);
	/**
	* Creates a new function that calls the given function with a specified thisArg and arguments.
	*
	* @param func - The function to be wrapped and called.
	* @returns A new function that calls the given function with a specified thisArg and arguments.
	*/
	function unapply(func) {
		return function(thisArg) {
			if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
			for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
			return apply(func, thisArg, args);
		};
	}
	/**
	* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
	*
	* @param func - The constructor function to be wrapped and called.
	* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
	*/
	function unconstruct(Func) {
		return function() {
			for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
			return construct(Func, args);
		};
	}
	/**
	* Add properties to a lookup table
	*
	* @param set - The set to which elements will be added.
	* @param array - The array containing elements to be added to the set.
	* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
	* @returns The modified set with added elements.
	*/
	function addToSet(set, array) {
		let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
		if (setPrototypeOf) setPrototypeOf(set, null);
		let l = array.length;
		while (l--) {
			let element = array[l];
			if (typeof element === "string") {
				const lcElement = transformCaseFunc(element);
				if (lcElement !== element) {
					if (!isFrozen(array)) array[l] = lcElement;
					element = lcElement;
				}
			}
			set[element] = true;
		}
		return set;
	}
	/**
	* Clean up an array to harden against CSPP
	*
	* @param array - The array to be cleaned.
	* @returns The cleaned version of the array
	*/
	function cleanArray(array) {
		for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
		return array;
	}
	/**
	* Shallow clone an object
	*
	* @param object - The object to be cloned.
	* @returns A new object that copies the original.
	*/
	function clone(object) {
		const newObject = create(null);
		for (const [property, value] of entries(object)) if (objectHasOwnProperty(object, property)) if (Array.isArray(value)) newObject[property] = cleanArray(value);
		else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
		else newObject[property] = value;
		return newObject;
	}
	/**
	* This method automatically checks if the prop is function or getter and behaves accordingly.
	*
	* @param object - The object to look up the getter function in its prototype chain.
	* @param prop - The property name for which to find the getter function.
	* @returns The getter function found in the prototype chain or a fallback function.
	*/
	function lookupGetter(object, prop) {
		while (object !== null) {
			const desc = getOwnPropertyDescriptor(object, prop);
			if (desc) {
				if (desc.get) return unapply(desc.get);
				if (typeof desc.value === "function") return unapply(desc.value);
			}
			object = getPrototypeOf(object);
		}
		function fallbackValue() {
			return null;
		}
		return fallbackValue;
	}
	var html$1 = freeze([
		"a",
		"abbr",
		"acronym",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"bdi",
		"bdo",
		"big",
		"blink",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"center",
		"cite",
		"code",
		"col",
		"colgroup",
		"content",
		"data",
		"datalist",
		"dd",
		"decorator",
		"del",
		"details",
		"dfn",
		"dialog",
		"dir",
		"div",
		"dl",
		"dt",
		"element",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"font",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"map",
		"mark",
		"marquee",
		"menu",
		"menuitem",
		"meter",
		"nav",
		"nobr",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"search",
		"section",
		"select",
		"shadow",
		"slot",
		"small",
		"source",
		"spacer",
		"span",
		"strike",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"template",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"track",
		"tt",
		"u",
		"ul",
		"var",
		"video",
		"wbr"
	]);
	var svg$1 = freeze([
		"svg",
		"a",
		"altglyph",
		"altglyphdef",
		"altglyphitem",
		"animatecolor",
		"animatemotion",
		"animatetransform",
		"circle",
		"clippath",
		"defs",
		"desc",
		"ellipse",
		"enterkeyhint",
		"exportparts",
		"filter",
		"font",
		"g",
		"glyph",
		"glyphref",
		"hkern",
		"image",
		"inputmode",
		"line",
		"lineargradient",
		"marker",
		"mask",
		"metadata",
		"mpath",
		"part",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialgradient",
		"rect",
		"stop",
		"style",
		"switch",
		"symbol",
		"text",
		"textpath",
		"title",
		"tref",
		"tspan",
		"view",
		"vkern"
	]);
	var svgFilters = freeze([
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feDistantLight",
		"feDropShadow",
		"feFlood",
		"feFuncA",
		"feFuncB",
		"feFuncG",
		"feFuncR",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMergeNode",
		"feMorphology",
		"feOffset",
		"fePointLight",
		"feSpecularLighting",
		"feSpotLight",
		"feTile",
		"feTurbulence"
	]);
	var svgDisallowed = freeze([
		"animate",
		"color-profile",
		"cursor",
		"discard",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"foreignobject",
		"hatch",
		"hatchpath",
		"mesh",
		"meshgradient",
		"meshpatch",
		"meshrow",
		"missing-glyph",
		"script",
		"set",
		"solidcolor",
		"unknown",
		"use"
	]);
	var mathMl$1 = freeze([
		"math",
		"menclose",
		"merror",
		"mfenced",
		"mfrac",
		"mglyph",
		"mi",
		"mlabeledtr",
		"mmultiscripts",
		"mn",
		"mo",
		"mover",
		"mpadded",
		"mphantom",
		"mroot",
		"mrow",
		"ms",
		"mspace",
		"msqrt",
		"mstyle",
		"msub",
		"msup",
		"msubsup",
		"mtable",
		"mtd",
		"mtext",
		"mtr",
		"munder",
		"munderover",
		"mprescripts"
	]);
	var mathMlDisallowed = freeze([
		"maction",
		"maligngroup",
		"malignmark",
		"mlongdiv",
		"mscarries",
		"mscarry",
		"msgroup",
		"mstack",
		"msline",
		"msrow",
		"semantics",
		"annotation",
		"annotation-xml",
		"mprescripts",
		"none"
	]);
	var text = freeze(["#text"]);
	var html = freeze([
		"accept",
		"action",
		"align",
		"alt",
		"autocapitalize",
		"autocomplete",
		"autopictureinpicture",
		"autoplay",
		"background",
		"bgcolor",
		"border",
		"capture",
		"cellpadding",
		"cellspacing",
		"checked",
		"cite",
		"class",
		"clear",
		"color",
		"cols",
		"colspan",
		"controls",
		"controlslist",
		"coords",
		"crossorigin",
		"datetime",
		"decoding",
		"default",
		"dir",
		"disabled",
		"disablepictureinpicture",
		"disableremoteplayback",
		"download",
		"draggable",
		"enctype",
		"enterkeyhint",
		"exportparts",
		"face",
		"for",
		"headers",
		"height",
		"hidden",
		"high",
		"href",
		"hreflang",
		"id",
		"inert",
		"inputmode",
		"integrity",
		"ismap",
		"kind",
		"label",
		"lang",
		"list",
		"loading",
		"loop",
		"low",
		"max",
		"maxlength",
		"media",
		"method",
		"min",
		"minlength",
		"multiple",
		"muted",
		"name",
		"nonce",
		"noshade",
		"novalidate",
		"nowrap",
		"open",
		"optimum",
		"part",
		"pattern",
		"placeholder",
		"playsinline",
		"popover",
		"popovertarget",
		"popovertargetaction",
		"poster",
		"preload",
		"pubdate",
		"radiogroup",
		"readonly",
		"rel",
		"required",
		"rev",
		"reversed",
		"role",
		"rows",
		"rowspan",
		"spellcheck",
		"scope",
		"selected",
		"shape",
		"size",
		"sizes",
		"slot",
		"span",
		"srclang",
		"start",
		"src",
		"srcset",
		"step",
		"style",
		"summary",
		"tabindex",
		"title",
		"translate",
		"type",
		"usemap",
		"valign",
		"value",
		"width",
		"wrap",
		"xmlns",
		"slot"
	]);
	var svg = freeze([
		"accent-height",
		"accumulate",
		"additive",
		"alignment-baseline",
		"amplitude",
		"ascent",
		"attributename",
		"attributetype",
		"azimuth",
		"basefrequency",
		"baseline-shift",
		"begin",
		"bias",
		"by",
		"class",
		"clip",
		"clippathunits",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"cx",
		"cy",
		"d",
		"dx",
		"dy",
		"diffuseconstant",
		"direction",
		"display",
		"divisor",
		"dur",
		"edgemode",
		"elevation",
		"end",
		"exponent",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"filterunits",
		"flood-color",
		"flood-opacity",
		"font-family",
		"font-size",
		"font-size-adjust",
		"font-stretch",
		"font-style",
		"font-variant",
		"font-weight",
		"fx",
		"fy",
		"g1",
		"g2",
		"glyph-name",
		"glyphref",
		"gradientunits",
		"gradienttransform",
		"height",
		"href",
		"id",
		"image-rendering",
		"in",
		"in2",
		"intercept",
		"k",
		"k1",
		"k2",
		"k3",
		"k4",
		"kerning",
		"keypoints",
		"keysplines",
		"keytimes",
		"lang",
		"lengthadjust",
		"letter-spacing",
		"kernelmatrix",
		"kernelunitlength",
		"lighting-color",
		"local",
		"marker-end",
		"marker-mid",
		"marker-start",
		"markerheight",
		"markerunits",
		"markerwidth",
		"maskcontentunits",
		"maskunits",
		"max",
		"mask",
		"mask-type",
		"media",
		"method",
		"mode",
		"min",
		"name",
		"numoctaves",
		"offset",
		"operator",
		"opacity",
		"order",
		"orient",
		"orientation",
		"origin",
		"overflow",
		"paint-order",
		"path",
		"pathlength",
		"patterncontentunits",
		"patterntransform",
		"patternunits",
		"points",
		"preservealpha",
		"preserveaspectratio",
		"primitiveunits",
		"r",
		"rx",
		"ry",
		"radius",
		"refx",
		"refy",
		"repeatcount",
		"repeatdur",
		"restart",
		"result",
		"rotate",
		"scale",
		"seed",
		"shape-rendering",
		"slope",
		"specularconstant",
		"specularexponent",
		"spreadmethod",
		"startoffset",
		"stddeviation",
		"stitchtiles",
		"stop-color",
		"stop-opacity",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke",
		"stroke-width",
		"style",
		"surfacescale",
		"systemlanguage",
		"tabindex",
		"tablevalues",
		"targetx",
		"targety",
		"transform",
		"transform-origin",
		"text-anchor",
		"text-decoration",
		"text-rendering",
		"textlength",
		"type",
		"u1",
		"u2",
		"unicode",
		"values",
		"viewbox",
		"visibility",
		"version",
		"vert-adv-y",
		"vert-origin-x",
		"vert-origin-y",
		"width",
		"word-spacing",
		"wrap",
		"writing-mode",
		"xchannelselector",
		"ychannelselector",
		"x",
		"x1",
		"x2",
		"xmlns",
		"y",
		"y1",
		"y2",
		"z",
		"zoomandpan"
	]);
	var mathMl = freeze([
		"accent",
		"accentunder",
		"align",
		"bevelled",
		"close",
		"columnsalign",
		"columnlines",
		"columnspan",
		"denomalign",
		"depth",
		"dir",
		"display",
		"displaystyle",
		"encoding",
		"fence",
		"frame",
		"height",
		"href",
		"id",
		"largeop",
		"length",
		"linethickness",
		"lspace",
		"lquote",
		"mathbackground",
		"mathcolor",
		"mathsize",
		"mathvariant",
		"maxsize",
		"minsize",
		"movablelimits",
		"notation",
		"numalign",
		"open",
		"rowalign",
		"rowlines",
		"rowspacing",
		"rowspan",
		"rspace",
		"rquote",
		"scriptlevel",
		"scriptminsize",
		"scriptsizemultiplier",
		"selection",
		"separator",
		"separators",
		"stretchy",
		"subscriptshift",
		"supscriptshift",
		"symmetric",
		"voffset",
		"width",
		"xmlns"
	]);
	var xml = freeze([
		"xlink:href",
		"xml:id",
		"xlink:title",
		"xml:space",
		"xmlns:xlink"
	]);
	var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
	var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
	var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
	var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
	var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
	var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
	var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
	var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
	var DOCTYPE_NAME = seal(/^html$/i);
	var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
	var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
		__proto__: null,
		ARIA_ATTR,
		ATTR_WHITESPACE,
		CUSTOM_ELEMENT,
		DATA_ATTR,
		DOCTYPE_NAME,
		ERB_EXPR,
		IS_ALLOWED_URI,
		IS_SCRIPT_OR_DATA,
		MUSTACHE_EXPR,
		TMPLIT_EXPR
	});
	var NODE_TYPE = {
		element: 1,
		attribute: 2,
		text: 3,
		cdataSection: 4,
		entityReference: 5,
		entityNode: 6,
		progressingInstruction: 7,
		comment: 8,
		document: 9,
		documentType: 10,
		documentFragment: 11,
		notation: 12
	};
	var getGlobal = function getGlobal() {
		return typeof window === "undefined" ? null : window;
	};
	/**
	* Creates a no-op policy for internal use only.
	* Don't export this function outside this module!
	* @param trustedTypes The policy factory.
	* @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
	* @return The policy created (or null, if Trusted Types
	* are not supported or creating the policy failed).
	*/
	var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
		if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
		let suffix = null;
		const ATTR_NAME = "data-tt-policy-suffix";
		if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
		const policyName = "dompurify" + (suffix ? "#" + suffix : "");
		try {
			return trustedTypes.createPolicy(policyName, {
				createHTML(html) {
					return html;
				},
				createScriptURL(scriptUrl) {
					return scriptUrl;
				}
			});
		} catch (_) {
			console.warn("TrustedTypes policy " + policyName + " could not be created.");
			return null;
		}
	};
	var _createHooksMap = function _createHooksMap() {
		return {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: []
		};
	};
	function createDOMPurify() {
		let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
		const DOMPurify = (root) => createDOMPurify(root);
		DOMPurify.version = "3.3.3";
		DOMPurify.removed = [];
		if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
			DOMPurify.isSupported = false;
			return DOMPurify;
		}
		let { document } = window;
		const originalDocument = document;
		const currentScript = originalDocument.currentScript;
		const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window;
		const ElementPrototype = Element.prototype;
		const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
		const remove = lookupGetter(ElementPrototype, "remove");
		const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
		const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
		const getParentNode = lookupGetter(ElementPrototype, "parentNode");
		if (typeof HTMLTemplateElement === "function") {
			const template = document.createElement("template");
			if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
		}
		let trustedTypesPolicy;
		let emptyHTML = "";
		const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document;
		const { importNode } = originalDocument;
		let hooks = _createHooksMap();
		/**
		* Expose whether this browser supports running the full DOMPurify.
		*/
		DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
		const { MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, CUSTOM_ELEMENT } = EXPRESSIONS;
		let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
		/**
		* We consider the elements and attributes below to be safe. Ideally
		* don't add any new ones but feel free to remove unwanted ones.
		*/
		let ALLOWED_TAGS = null;
		const DEFAULT_ALLOWED_TAGS = addToSet({}, [
			...html$1,
			...svg$1,
			...svgFilters,
			...mathMl$1,
			...text
		]);
		let ALLOWED_ATTR = null;
		const DEFAULT_ALLOWED_ATTR = addToSet({}, [
			...html,
			...svg,
			...mathMl,
			...xml
		]);
		let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
			tagNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			allowCustomizedBuiltInElements: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: false
			}
		}));
		let FORBID_TAGS = null;
		let FORBID_ATTR = null;
		const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
			tagCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			}
		}));
		let ALLOW_ARIA_ATTR = true;
		let ALLOW_DATA_ATTR = true;
		let ALLOW_UNKNOWN_PROTOCOLS = false;
		let ALLOW_SELF_CLOSE_IN_ATTR = true;
		let SAFE_FOR_TEMPLATES = false;
		let SAFE_FOR_XML = true;
		let WHOLE_DOCUMENT = false;
		let SET_CONFIG = false;
		let FORCE_BODY = false;
		let RETURN_DOM = false;
		let RETURN_DOM_FRAGMENT = false;
		let RETURN_TRUSTED_TYPE = false;
		let SANITIZE_DOM = true;
		let SANITIZE_NAMED_PROPS = false;
		const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
		let KEEP_CONTENT = true;
		let IN_PLACE = false;
		let USE_PROFILES = {};
		let FORBID_CONTENTS = null;
		const DEFAULT_FORBID_CONTENTS = addToSet({}, [
			"annotation-xml",
			"audio",
			"colgroup",
			"desc",
			"foreignobject",
			"head",
			"iframe",
			"math",
			"mi",
			"mn",
			"mo",
			"ms",
			"mtext",
			"noembed",
			"noframes",
			"noscript",
			"plaintext",
			"script",
			"style",
			"svg",
			"template",
			"thead",
			"title",
			"video",
			"xmp"
		]);
		let DATA_URI_TAGS = null;
		const DEFAULT_DATA_URI_TAGS = addToSet({}, [
			"audio",
			"video",
			"img",
			"source",
			"image",
			"track"
		]);
		let URI_SAFE_ATTRIBUTES = null;
		const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
			"alt",
			"class",
			"for",
			"id",
			"label",
			"name",
			"pattern",
			"placeholder",
			"role",
			"summary",
			"title",
			"value",
			"style",
			"xmlns"
		]);
		const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
		const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
		const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
		let NAMESPACE = HTML_NAMESPACE;
		let IS_EMPTY_INPUT = false;
		let ALLOWED_NAMESPACES = null;
		const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
			MATHML_NAMESPACE,
			SVG_NAMESPACE,
			HTML_NAMESPACE
		], stringToString);
		let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
			"mi",
			"mo",
			"mn",
			"ms",
			"mtext"
		]);
		let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
		const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
			"title",
			"style",
			"font",
			"a",
			"script"
		]);
		let PARSER_MEDIA_TYPE = null;
		const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
		const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
		let transformCaseFunc = null;
		let CONFIG = null;
		const formElement = document.createElement("form");
		const isRegexOrFunction = function isRegexOrFunction(testValue) {
			return testValue instanceof RegExp || testValue instanceof Function;
		};
		/**
		* _parseConfig
		*
		* @param cfg optional config literal
		*/
		const _parseConfig = function _parseConfig() {
			let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (CONFIG && CONFIG === cfg) return;
			if (!cfg || typeof cfg !== "object") cfg = {};
			cfg = clone(cfg);
			PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
			transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
			ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
			ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
			ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
			URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
			DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
			FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
			FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
			FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
			USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
			ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
			ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
			ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
			ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
			SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
			SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
			WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
			RETURN_DOM = cfg.RETURN_DOM || false;
			RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
			RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
			FORCE_BODY = cfg.FORCE_BODY || false;
			SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
			SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
			KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
			IN_PLACE = cfg.IN_PLACE || false;
			IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
			NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
			MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
			HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
			CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
			if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
			if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
			if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
			if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
			if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
			if (USE_PROFILES) {
				ALLOWED_TAGS = addToSet({}, text);
				ALLOWED_ATTR = create(null);
				if (USE_PROFILES.html === true) {
					addToSet(ALLOWED_TAGS, html$1);
					addToSet(ALLOWED_ATTR, html);
				}
				if (USE_PROFILES.svg === true) {
					addToSet(ALLOWED_TAGS, svg$1);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.svgFilters === true) {
					addToSet(ALLOWED_TAGS, svgFilters);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.mathMl === true) {
					addToSet(ALLOWED_TAGS, mathMl$1);
					addToSet(ALLOWED_ATTR, mathMl);
					addToSet(ALLOWED_ATTR, xml);
				}
			}
			if (!objectHasOwnProperty(cfg, "ADD_TAGS")) EXTRA_ELEMENT_HANDLING.tagCheck = null;
			if (!objectHasOwnProperty(cfg, "ADD_ATTR")) EXTRA_ELEMENT_HANDLING.attributeCheck = null;
			if (cfg.ADD_TAGS) if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
			else {
				if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
				addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
			}
			if (cfg.ADD_ATTR) if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
			else {
				if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
				addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
			}
			if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
			if (cfg.FORBID_CONTENTS) {
				if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
				addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
			}
			if (cfg.ADD_FORBID_CONTENTS) {
				if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
				addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
			}
			if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
			if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
				"html",
				"head",
				"body"
			]);
			if (ALLOWED_TAGS.table) {
				addToSet(ALLOWED_TAGS, ["tbody"]);
				delete FORBID_TAGS.tbody;
			}
			if (cfg.TRUSTED_TYPES_POLICY) {
				if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
				emptyHTML = trustedTypesPolicy.createHTML("");
			} else {
				if (trustedTypesPolicy === void 0) trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
				if (trustedTypesPolicy !== null && typeof emptyHTML === "string") emptyHTML = trustedTypesPolicy.createHTML("");
			}
			if (freeze) freeze(cfg);
			CONFIG = cfg;
		};
		const ALL_SVG_TAGS = addToSet({}, [
			...svg$1,
			...svgFilters,
			...svgDisallowed
		]);
		const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
		/**
		* @param element a DOM element whose namespace is being checked
		* @returns Return false if the element has a
		*  namespace that a spec-compliant parser would never
		*  return. Return true otherwise.
		*/
		const _checkValidNamespace = function _checkValidNamespace(element) {
			let parent = getParentNode(element);
			if (!parent || !parent.tagName) parent = {
				namespaceURI: NAMESPACE,
				tagName: "template"
			};
			const tagName = stringToLowerCase(element.tagName);
			const parentTagName = stringToLowerCase(parent.tagName);
			if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
			if (element.namespaceURI === SVG_NAMESPACE) {
				if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
				if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
				return Boolean(ALL_SVG_TAGS[tagName]);
			}
			if (element.namespaceURI === MATHML_NAMESPACE) {
				if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
				if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
				return Boolean(ALL_MATHML_TAGS[tagName]);
			}
			if (element.namespaceURI === HTML_NAMESPACE) {
				if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
				if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
				return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
			}
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
			return false;
		};
		/**
		* _forceRemove
		*
		* @param node a DOM node
		*/
		const _forceRemove = function _forceRemove(node) {
			arrayPush(DOMPurify.removed, { element: node });
			try {
				getParentNode(node).removeChild(node);
			} catch (_) {
				remove(node);
			}
		};
		/**
		* _removeAttribute
		*
		* @param name an Attribute name
		* @param element a DOM node
		*/
		const _removeAttribute = function _removeAttribute(name, element) {
			try {
				arrayPush(DOMPurify.removed, {
					attribute: element.getAttributeNode(name),
					from: element
				});
			} catch (_) {
				arrayPush(DOMPurify.removed, {
					attribute: null,
					from: element
				});
			}
			element.removeAttribute(name);
			if (name === "is") if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
				_forceRemove(element);
			} catch (_) {}
			else try {
				element.setAttribute(name, "");
			} catch (_) {}
		};
		/**
		* _initDocument
		*
		* @param dirty - a string of dirty markup
		* @return a DOM, filled with the dirty markup
		*/
		const _initDocument = function _initDocument(dirty) {
			let doc = null;
			let leadingWhitespace = null;
			if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
			else {
				const matches = stringMatch(dirty, /^[\r\n\t ]+/);
				leadingWhitespace = matches && matches[0];
			}
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
			const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
			if (NAMESPACE === HTML_NAMESPACE) try {
				doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
			} catch (_) {}
			if (!doc || !doc.documentElement) {
				doc = implementation.createDocument(NAMESPACE, "template", null);
				try {
					doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
				} catch (_) {}
			}
			const body = doc.body || doc.documentElement;
			if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
			if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
			return WHOLE_DOCUMENT ? doc.documentElement : body;
		};
		/**
		* Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
		*
		* @param root The root element or node to start traversing on.
		* @return The created NodeIterator
		*/
		const _createNodeIterator = function _createNodeIterator(root) {
			return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
		};
		/**
		* _isClobbered
		*
		* @param element element to check for clobbering attacks
		* @return true if clobbered, false if safe
		*/
		const _isClobbered = function _isClobbered(element) {
			return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
		};
		/**
		* Checks whether the given object is a DOM node.
		*
		* @param value object to check whether it's a DOM node
		* @return true is object is a DOM node
		*/
		const _isNode = function _isNode(value) {
			return typeof Node === "function" && value instanceof Node;
		};
		function _executeHooks(hooks, currentNode, data) {
			arrayForEach(hooks, (hook) => {
				hook.call(DOMPurify, currentNode, data, CONFIG);
			});
		}
		/**
		* _sanitizeElements
		*
		* @protect nodeName
		* @protect textContent
		* @protect removeChild
		* @param currentNode to check for permission to exist
		* @return true if node was killed, false if left alive
		*/
		const _sanitizeElements = function _sanitizeElements(currentNode) {
			let content = null;
			_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
			if (_isClobbered(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			const tagName = transformCaseFunc(currentNode.nodeName);
			_executeHooks(hooks.uponSanitizeElement, currentNode, {
				tagName,
				allowedTags: ALLOWED_TAGS
			});
			if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
				_forceRemove(currentNode);
				return true;
			}
			if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
				_forceRemove(currentNode);
				return true;
			}
			if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
				_forceRemove(currentNode);
				return true;
			}
			if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
				if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
					if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
					if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
				}
				if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
					const parentNode = getParentNode(currentNode) || currentNode.parentNode;
					const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
					if (childNodes && parentNode) {
						const childCount = childNodes.length;
						for (let i = childCount - 1; i >= 0; --i) {
							const childClone = cloneNode(childNodes[i], true);
							childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
							parentNode.insertBefore(childClone, getNextSibling(currentNode));
						}
					}
				}
				_forceRemove(currentNode);
				return true;
			}
			if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
				_forceRemove(currentNode);
				return true;
			}
			if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
				content = currentNode.textContent;
				arrayForEach([
					MUSTACHE_EXPR,
					ERB_EXPR,
					TMPLIT_EXPR
				], (expr) => {
					content = stringReplace(content, expr, " ");
				});
				if (currentNode.textContent !== content) {
					arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
					currentNode.textContent = content;
				}
			}
			_executeHooks(hooks.afterSanitizeElements, currentNode, null);
			return false;
		};
		/**
		* _isValidAttribute
		*
		* @param lcTag Lowercase tag name of containing element.
		* @param lcName Lowercase attribute name.
		* @param value Attribute value.
		* @return Returns true if `value` is valid, otherwise false.
		*/
		const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
			if (FORBID_ATTR[lcName]) return false;
			if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
			if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName));
			else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName));
			else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag));
			else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) if (_isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)));
			else return false;
			else if (URI_SAFE_ATTRIBUTES[lcName]);
			else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, "")));
			else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]);
			else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, "")));
			else if (value) return false;
			return true;
		};
		/**
		* _isBasicCustomElement
		* checks if at least one dash is included in tagName, and it's not the first char
		* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
		*
		* @param tagName name of the tag of the node to sanitize
		* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
		*/
		const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
			return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT);
		};
		/**
		* _sanitizeAttributes
		*
		* @protect attributes
		* @protect nodeName
		* @protect removeAttribute
		* @protect setAttribute
		*
		* @param currentNode to sanitize
		*/
		const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
			_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
			const { attributes } = currentNode;
			if (!attributes || _isClobbered(currentNode)) return;
			const hookEvent = {
				attrName: "",
				attrValue: "",
				keepAttr: true,
				allowedAttributes: ALLOWED_ATTR,
				forceKeepAttr: void 0
			};
			let l = attributes.length;
			while (l--) {
				const { name, namespaceURI, value: attrValue } = attributes[l];
				const lcName = transformCaseFunc(name);
				const initValue = attrValue;
				let value = name === "value" ? initValue : stringTrim(initValue);
				hookEvent.attrName = lcName;
				hookEvent.attrValue = value;
				hookEvent.keepAttr = true;
				hookEvent.forceKeepAttr = void 0;
				_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
				value = hookEvent.attrValue;
				if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
					_removeAttribute(name, currentNode);
					value = SANITIZE_NAMED_PROPS_PREFIX + value;
				}
				if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (lcName === "attributename" && stringMatch(value, "href")) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (hookEvent.forceKeepAttr) continue;
				if (!hookEvent.keepAttr) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (SAFE_FOR_TEMPLATES) arrayForEach([
					MUSTACHE_EXPR,
					ERB_EXPR,
					TMPLIT_EXPR
				], (expr) => {
					value = stringReplace(value, expr, " ");
				});
				const lcTag = transformCaseFunc(currentNode.nodeName);
				if (!_isValidAttribute(lcTag, lcName, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") if (namespaceURI);
				else switch (trustedTypes.getAttributeType(lcTag, lcName)) {
					case "TrustedHTML":
						value = trustedTypesPolicy.createHTML(value);
						break;
					case "TrustedScriptURL":
						value = trustedTypesPolicy.createScriptURL(value);
						break;
				}
				if (value !== initValue) try {
					if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
					else currentNode.setAttribute(name, value);
					if (_isClobbered(currentNode)) _forceRemove(currentNode);
					else arrayPop(DOMPurify.removed);
				} catch (_) {
					_removeAttribute(name, currentNode);
				}
			}
			_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
		};
		/**
		* _sanitizeShadowDOM
		*
		* @param fragment to iterate over recursively
		*/
		const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
			let shadowNode = null;
			const shadowIterator = _createNodeIterator(fragment);
			_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
			while (shadowNode = shadowIterator.nextNode()) {
				_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
				_sanitizeElements(shadowNode);
				_sanitizeAttributes(shadowNode);
				if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM(shadowNode.content);
			}
			_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
		};
		DOMPurify.sanitize = function(dirty) {
			let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			let body = null;
			let importedNode = null;
			let currentNode = null;
			let returnNode = null;
			IS_EMPTY_INPUT = !dirty;
			if (IS_EMPTY_INPUT) dirty = "<!-->";
			if (typeof dirty !== "string" && !_isNode(dirty)) if (typeof dirty.toString === "function") {
				dirty = dirty.toString();
				if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
			} else throw typeErrorCreate("toString is not a function");
			if (!DOMPurify.isSupported) return dirty;
			if (!SET_CONFIG) _parseConfig(cfg);
			DOMPurify.removed = [];
			if (typeof dirty === "string") IN_PLACE = false;
			if (IN_PLACE) {
				if (dirty.nodeName) {
					const tagName = transformCaseFunc(dirty.nodeName);
					if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
				}
			} else if (dirty instanceof Node) {
				body = _initDocument("<!---->");
				importedNode = body.ownerDocument.importNode(dirty, true);
				if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
				else if (importedNode.nodeName === "HTML") body = importedNode;
				else body.appendChild(importedNode);
			} else {
				if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
				body = _initDocument(dirty);
				if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
			}
			if (body && FORCE_BODY) _forceRemove(body.firstChild);
			const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
			while (currentNode = nodeIterator.nextNode()) {
				_sanitizeElements(currentNode);
				_sanitizeAttributes(currentNode);
				if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM(currentNode.content);
			}
			if (IN_PLACE) return dirty;
			if (RETURN_DOM) {
				if (RETURN_DOM_FRAGMENT) {
					returnNode = createDocumentFragment.call(body.ownerDocument);
					while (body.firstChild) returnNode.appendChild(body.firstChild);
				} else returnNode = body;
				if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
				return returnNode;
			}
			let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
			if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
			if (SAFE_FOR_TEMPLATES) arrayForEach([
				MUSTACHE_EXPR,
				ERB_EXPR,
				TMPLIT_EXPR
			], (expr) => {
				serializedHTML = stringReplace(serializedHTML, expr, " ");
			});
			return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
		};
		DOMPurify.setConfig = function() {
			_parseConfig(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {});
			SET_CONFIG = true;
		};
		DOMPurify.clearConfig = function() {
			CONFIG = null;
			SET_CONFIG = false;
		};
		DOMPurify.isValidAttribute = function(tag, attr, value) {
			if (!CONFIG) _parseConfig({});
			return _isValidAttribute(transformCaseFunc(tag), transformCaseFunc(attr), value);
		};
		DOMPurify.addHook = function(entryPoint, hookFunction) {
			if (typeof hookFunction !== "function") return;
			arrayPush(hooks[entryPoint], hookFunction);
		};
		DOMPurify.removeHook = function(entryPoint, hookFunction) {
			if (hookFunction !== void 0) {
				const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
				return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
			}
			return arrayPop(hooks[entryPoint]);
		};
		DOMPurify.removeHooks = function(entryPoint) {
			hooks[entryPoint] = [];
		};
		DOMPurify.removeAllHooks = function() {
			hooks = _createHooksMap();
		};
		return DOMPurify;
	}
	var purify = createDOMPurify();
	//#endregion
	//#region node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/utils.js
	var semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
	var validateAndParse = (version) => {
		if (typeof version !== "string") throw new TypeError("Invalid argument expected string");
		const match = version.match(semver);
		if (!match) throw new Error(`Invalid argument not valid semver ('${version}' received)`);
		match.shift();
		return match;
	};
	var isWildcard = (s) => s === "*" || s === "x" || s === "X";
	var tryParse = (v) => {
		const n = parseInt(v, 10);
		return isNaN(n) ? v : n;
	};
	var forceType = (a, b) => typeof a !== typeof b ? [String(a), String(b)] : [a, b];
	var compareStrings = (a, b) => {
		if (isWildcard(a) || isWildcard(b)) return 0;
		const [ap, bp] = forceType(tryParse(a), tryParse(b));
		if (ap > bp) return 1;
		if (ap < bp) return -1;
		return 0;
	};
	var compareSegments = (a, b) => {
		for (let i = 0; i < Math.max(a.length, b.length); i++) {
			const r = compareStrings(a[i] || "0", b[i] || "0");
			if (r !== 0) return r;
		}
		return 0;
	};
	//#endregion
	//#region node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/compareVersions.js
	/**
	* Compare [semver](https://semver.org/) version strings to find greater, equal or lesser.
	* This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
	* @param v1 - First version to compare
	* @param v2 - Second version to compare
	* @returns Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
	*/
	var compareVersions = (v1, v2) => {
		const n1 = validateAndParse(v1);
		const n2 = validateAndParse(v2);
		const p1 = n1.pop();
		const p2 = n2.pop();
		const r = compareSegments(n1, n2);
		if (r !== 0) return r;
		if (p1 && p2) return compareSegments(p1.split("."), p2.split("."));
		else if (p1 || p2) return p1 ? -1 : 1;
		return 0;
	};
	//#endregion
	//#region node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/compare.js
	/**
	* Compare [semver](https://semver.org/) version strings using the specified operator.
	*
	* @param v1 First version to compare
	* @param v2 Second version to compare
	* @param operator Allowed arithmetic operator to use
	* @returns `true` if the comparison between the firstVersion and the secondVersion satisfies the operator, `false` otherwise.
	*
	* @example
	* ```
	* compare('10.1.8', '10.0.4', '>'); // return true
	* compare('10.0.1', '10.0.1', '='); // return true
	* compare('10.1.1', '10.2.2', '<'); // return true
	* compare('10.1.1', '10.2.2', '<='); // return true
	* compare('10.1.1', '10.2.2', '>='); // return false
	* ```
	*/
	var compare = (v1, v2, operator) => {
		assertValidOperator(operator);
		const res = compareVersions(v1, v2);
		return operatorResMap[operator].includes(res);
	};
	var operatorResMap = {
		">": [1],
		">=": [0, 1],
		"=": [0],
		"<=": [-1, 0],
		"<": [-1],
		"!=": [-1, 1]
	};
	var allowedOperators = Object.keys(operatorResMap);
	var assertValidOperator = (op) => {
		if (typeof op !== "string") throw new TypeError(`Invalid operator type, expected string but got ${typeof op}`);
		if (allowedOperators.indexOf(op) === -1) throw new Error(`Invalid operator, expected one of ${allowedOperators.join("|")}`);
	};
	//#endregion
	//#region node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/satisfies.js
	/**
	* Match [npm semver](https://docs.npmjs.com/cli/v6/using-npm/semver) version range.
	*
	* @param version Version number to match
	* @param range Range pattern for version
	* @returns `true` if the version number is within the range, `false` otherwise.
	*
	* @example
	* ```
	* satisfies('1.1.0', '^1.0.0'); // return true
	* satisfies('1.1.0', '~1.0.0'); // return false
	* ```
	*/
	var satisfies = (version, range) => {
		range = range.replace(/([><=]+)\s+/g, "$1");
		if (range.includes("||")) return range.split("||").some((r) => satisfies(version, r));
		else if (range.includes(" - ")) {
			const [a, b] = range.split(" - ", 2);
			return satisfies(version, `>=${a} <=${b}`);
		} else if (range.includes(" ")) return range.trim().replace(/\s{2,}/g, " ").split(" ").every((r) => satisfies(version, r));
		const m = range.match(/^([<>=~^]+)/);
		const op = m ? m[1] : "=";
		if (op !== "^" && op !== "~") return compare(version, range, op);
		const [v1, v2, v3, , vp] = validateAndParse(version);
		const [r1, r2, r3, , rp] = validateAndParse(range);
		const v = [
			v1,
			v2,
			v3
		];
		const r = [
			r1,
			r2 !== null && r2 !== void 0 ? r2 : "x",
			r3 !== null && r3 !== void 0 ? r3 : "x"
		];
		if (rp) {
			if (!vp) return false;
			if (compareSegments(v, r) !== 0) return false;
			if (compareSegments(vp.split("."), rp.split(".")) === -1) return false;
		}
		const nonZero = r.findIndex((v) => v !== "0") + 1;
		const i = op === "~" ? 2 : nonZero > 1 ? nonZero : 1;
		if (compareSegments(v.slice(0, i), r.slice(0, i)) !== 0) return false;
		if (compareSegments(v.slice(i), r.slice(i)) === -1) return false;
		return true;
	};
	//#endregion
	//#region node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/validate.js
	/**
	* Validate [semver](https://semver.org/) version strings.
	*
	* @param version Version number to validate
	* @returns `true` if the version number is a valid semver version number, `false` otherwise.
	*
	* @example
	* ```
	* validate('1.0.0-rc.1'); // return true
	* validate('1.0-rc.1'); // return false
	* validate('foo'); // return false
	* ```
	*/
	var validate = (version) => typeof version === "string" && /^[v\d]/.test(version) && semver.test(version);
	/**
	* Validate [semver](https://semver.org/) version strings strictly. Will not accept wildcards and version ranges.
	*
	* @param version Version number to validate
	* @returns `true` if the version number is a valid semver version number `false` otherwise
	*
	* @example
	* ```
	* validate('1.0.0-rc.1'); // return true
	* validate('1.0-rc.1'); // return false
	* validate('foo'); // return false
	* ```
	*/
	var validateStrict = (version) => typeof version === "string" && /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/.test(version);
	//#endregion
	//#region node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/index.js
	var esm_exports = /* @__PURE__ */ __exportAll({
		compare: () => compare,
		compareVersions: () => compareVersions,
		satisfies: () => satisfies,
		validate: () => validate,
		validateStrict: () => validateStrict
	});
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
	var buildNumber$1 = "03a74015";
	/** When the script was built, as a UNIX timestamp. */
	var buildTimestamp = 1788542685555;
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
	var platformNames = pureObj$2({
		github: "GitHub",
		greasyfork: "Greasy Fork",
		openuserjs: "OpenUserJS"
	});
	/** Default compression format used throughout BYTM */
	var compressionFormat$1 = "deflate-raw";
	/** Whether sessionStorage is available and working */
	var sessionStorageAvailable$1 = typeof sessionStorage?.setItem === "function" && (() => {
		try {
			const key = `_bytm_test_${randomId$1(6, 36, false, true)}`;
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
	var scriptInfo$1 = pureObj$2({
		name: GM_info.script.name,
		version: GM_info.script.version,
		namespace: GM_info.script.namespace
	});
	//#endregion
	//#region node_modules/.pnpm/marked@17.0.4/node_modules/marked/lib/marked.esm.js
	/**
	* marked v17.0.4 - a markdown parser
	* Copyright (c) 2018-2026, MarkedJS. (MIT License)
	* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
	* https://github.com/markedjs/marked
	*/
	/**
	* DO NOT EDIT THIS FILE
	* The code in this file is generated from files in ./src/
	*/
	function M() {
		return {
			async: !1,
			breaks: !1,
			extensions: null,
			gfm: !0,
			hooks: null,
			pedantic: !1,
			renderer: null,
			silent: !1,
			tokenizer: null,
			walkTokens: null
		};
	}
	var T = M();
	function G(u) {
		T = u;
	}
	var _ = { exec: () => null };
	function k(u, e = "") {
		let t = typeof u == "string" ? u : u.source, n = {
			replace: (r, i) => {
				let s = typeof i == "string" ? i : i.source;
				return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
			},
			getRegex: () => new RegExp(t, e)
		};
		return n;
	}
	var Re = (() => {
		try {
			return true;
		} catch {
			return !1;
		}
	})(), m = {
		codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
		outputLinkReplace: /\\([\[\]])/g,
		indentCodeCompensation: /^(\s+)(?:```)/,
		beginningSpace: /^\s+/,
		endingHash: /#$/,
		startingSpaceChar: /^ /,
		endingSpaceChar: / $/,
		nonSpaceChar: /[^ ]/,
		newLineCharGlobal: /\n/g,
		tabCharGlobal: /\t/g,
		multipleSpaceGlobal: /\s+/g,
		blankLine: /^[ \t]*$/,
		doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
		blockquoteStart: /^ {0,3}>/,
		blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
		blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
		listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
		listIsTask: /^\[[ xX]\] +\S/,
		listReplaceTask: /^\[[ xX]\] +/,
		listTaskCheckbox: /\[[ xX]\]/,
		anyLine: /\n.*\n/,
		hrefBrackets: /^<(.*)>$/,
		tableDelimiter: /[:|]/,
		tableAlignChars: /^\||\| *$/g,
		tableRowBlankLine: /\n[ \t]*$/,
		tableAlignRight: /^ *-+: *$/,
		tableAlignCenter: /^ *:-+: *$/,
		tableAlignLeft: /^ *:-+ *$/,
		startATag: /^<a /i,
		endATag: /^<\/a>/i,
		startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
		endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
		startAngleBracket: /^</,
		endAngleBracket: />$/,
		pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
		unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
		escapeTest: /[&<>"']/,
		escapeReplace: /[&<>"']/g,
		escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
		escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
		caret: /(^|[^\[])\^/g,
		percentDecode: /%25/g,
		findPipe: /\|/g,
		splitPipe: / \|/,
		slashPipe: /\\\|/g,
		carriageReturn: /\r\n|\r/g,
		spaceLine: /^ +$/gm,
		notSpaceStart: /^\S*/,
		endingNewline: /\n$/,
		listItemRegex: (u) => new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),
		nextBulletRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
		hrRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
		fencesBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}(?:\`\`\`|~~~)`),
		headingBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}#`),
		htmlBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}<(?:[a-z].*>|!--)`, "i"),
		blockquoteBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}>`)
	}, Te = /^(?:[ \t]*(?:\n|$))+/, Oe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, we = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, A = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ye = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, N = / {0,3}(?:[*+-]|\d{1,9}[.)])/, re = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, se = k(re).replace(/bull/g, N).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Pe = k(re).replace(/bull/g, N).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Q = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Se = /^[^\n]+/, j = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, $e = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", j).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), _e = k(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, N).getRegex(), q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", F = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Le = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", F).replace("tag", q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ie = k(Q).replace("hr", A).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex(), U = {
		blockquote: k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ie).getRegex(),
		code: Oe,
		def: $e,
		fences: we,
		heading: ye,
		hr: A,
		html: Le,
		lheading: se,
		list: _e,
		newline: Te,
		paragraph: ie,
		table: _,
		text: Se
	}, te = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", A).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex(), ze = {
		...U,
		lheading: Pe,
		table: te,
		paragraph: k(Q).replace("hr", A).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", te).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex()
	}, Ee = {
		...U,
		html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", F).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		heading: /^(#{1,6})(.*)(?:\n+|$)/,
		fences: _,
		lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		paragraph: k(Q).replace("hr", A).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", se).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
	}, Ie = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ae = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, oe = /^( {2,}|\\)\n(?!\s*$)/, Ce = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, v = /[\p{P}\p{S}]/u, K = /[\s\p{P}\p{S}]/u, ae = /[^\s\p{P}\p{S}]/u, Be = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, K).getRegex(), le = /(?!~)[\p{P}\p{S}]/u, De = /(?!~)[\s\p{P}\p{S}]/u, qe = /(?:[^\s\p{P}\p{S}]|~)/u, ue = /(?![*_])[\p{P}\p{S}]/u, ve = /(?![*_])[\s\p{P}\p{S}]/u, He = /(?:[^\s\p{P}\p{S}]|[*_])/u, Ge = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Re ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), pe = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ze = k(pe, "u").replace(/punct/g, v).getRegex(), Ne = k(pe, "u").replace(/punct/g, le).getRegex(), ce = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Qe = k(ce, "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, K).replace(/punct/g, v).getRegex(), je = k(ce, "gu").replace(/notPunctSpace/g, qe).replace(/punctSpace/g, De).replace(/punct/g, le).getRegex(), Fe = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, K).replace(/punct/g, v).getRegex(), Ue = k(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, ue).getRegex(), We = k("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, He).replace(/punctSpace/g, ve).replace(/punct/g, ue).getRegex(), Xe = k(/\\(punct)/, "gu").replace(/punct/g, v).getRegex(), Je = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ve = k(F).replace("(?:-->|$)", "-->").getRegex(), Ye = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ve).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), D = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, et = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", D).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), he = k(/^!?\[(label)\]\[(ref)\]/).replace("label", D).replace("ref", j).getRegex(), ke = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", j).getRegex(), tt = k("reflink|nolink(?!\\()", "g").replace("reflink", he).replace("nolink", ke).getRegex(), ne = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, W = {
		_backpedal: _,
		anyPunctuation: Xe,
		autolink: Je,
		blockSkip: Ge,
		br: oe,
		code: Ae,
		del: _,
		delLDelim: _,
		delRDelim: _,
		emStrongLDelim: Ze,
		emStrongRDelimAst: Qe,
		emStrongRDelimUnd: Fe,
		escape: Ie,
		link: et,
		nolink: ke,
		punctuation: Be,
		reflink: he,
		reflinkSearch: tt,
		tag: Ye,
		text: Ce,
		url: _
	}, nt = {
		...W,
		link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", D).getRegex(),
		reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", D).getRegex()
	}, Z = {
		...W,
		emStrongRDelimAst: je,
		emStrongLDelim: Ne,
		delLDelim: Ue,
		delRDelim: We,
		url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ne).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
		_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
		del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
		text: k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ne).getRegex()
	}, rt = {
		...Z,
		br: k(oe).replace("{2,}", "*").getRegex(),
		text: k(Z.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
	}, C = {
		normal: U,
		gfm: ze,
		pedantic: Ee
	}, z = {
		normal: W,
		gfm: Z,
		breaks: rt,
		pedantic: nt
	};
	var st = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	}, de = (u) => st[u];
	function O(u, e) {
		if (e) {
			if (m.escapeTest.test(u)) return u.replace(m.escapeReplace, de);
		} else if (m.escapeTestNoEncode.test(u)) return u.replace(m.escapeReplaceNoEncode, de);
		return u;
	}
	function X(u) {
		try {
			u = encodeURI(u).replace(m.percentDecode, "%");
		} catch {
			return null;
		}
		return u;
	}
	function J(u, e) {
		let n = u.replace(m.findPipe, (i, s, a) => {
			let o = !1, l = s;
			for (; --l >= 0 && a[l] === "\\";) o = !o;
			return o ? "|" : " |";
		}).split(m.splitPipe), r = 0;
		if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
		else for (; n.length < e;) n.push("");
		for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
		return n;
	}
	function E(u, e, t) {
		let n = u.length;
		if (n === 0) return "";
		let r = 0;
		for (; r < n;) {
			let i = u.charAt(n - r - 1);
			if (i === e && !t) r++;
			else if (i !== e && t) r++;
			else break;
		}
		return u.slice(0, n - r);
	}
	function ge(u, e) {
		if (u.indexOf(e[1]) === -1) return -1;
		let t = 0;
		for (let n = 0; n < u.length; n++) if (u[n] === "\\") n++;
		else if (u[n] === e[0]) t++;
		else if (u[n] === e[1] && (t--, t < 0)) return n;
		return t > 0 ? -2 : -1;
	}
	function fe(u, e = 0) {
		let t = e, n = "";
		for (let r of u) if (r === "	") {
			let i = 4 - t % 4;
			n += " ".repeat(i), t += i;
		} else n += r, t++;
		return n;
	}
	function me(u, e, t, n, r) {
		let i = e.href, s = e.title || null, a = u[1].replace(r.other.outputLinkReplace, "$1");
		n.state.inLink = !0;
		let o = {
			type: u[0].charAt(0) === "!" ? "image" : "link",
			raw: t,
			href: i,
			title: s,
			text: a,
			tokens: n.inlineTokens(a)
		};
		return n.state.inLink = !1, o;
	}
	function it(u, e, t) {
		let n = u.match(t.other.indentCodeCompensation);
		if (n === null) return e;
		let r = n[1];
		return e.split(`
`).map((i) => {
			let s = i.match(t.other.beginningSpace);
			if (s === null) return i;
			let [a] = s;
			return a.length >= r.length ? i.slice(r.length) : i;
		}).join(`
`);
	}
	var w = class {
		options;
		rules;
		lexer;
		constructor(e) {
			this.options = e || T;
		}
		space(e) {
			let t = this.rules.block.newline.exec(e);
			if (t && t[0].length > 0) return {
				type: "space",
				raw: t[0]
			};
		}
		code(e) {
			let t = this.rules.block.code.exec(e);
			if (t) {
				let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
				return {
					type: "code",
					raw: t[0],
					codeBlockStyle: "indented",
					text: this.options.pedantic ? n : E(n, `
`)
				};
			}
		}
		fences(e) {
			let t = this.rules.block.fences.exec(e);
			if (t) {
				let n = t[0], r = it(n, t[3] || "", this.rules);
				return {
					type: "code",
					raw: n,
					lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
					text: r
				};
			}
		}
		heading(e) {
			let t = this.rules.block.heading.exec(e);
			if (t) {
				let n = t[2].trim();
				if (this.rules.other.endingHash.test(n)) {
					let r = E(n, "#");
					(this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
				}
				return {
					type: "heading",
					raw: t[0],
					depth: t[1].length,
					text: n,
					tokens: this.lexer.inline(n)
				};
			}
		}
		hr(e) {
			let t = this.rules.block.hr.exec(e);
			if (t) return {
				type: "hr",
				raw: E(t[0], `
`)
			};
		}
		blockquote(e) {
			let t = this.rules.block.blockquote.exec(e);
			if (t) {
				let n = E(t[0], `
`).split(`
`), r = "", i = "", s = [];
				for (; n.length > 0;) {
					let a = !1, o = [], l;
					for (l = 0; l < n.length; l++) if (this.rules.other.blockquoteStart.test(n[l])) o.push(n[l]), a = !0;
					else if (!a) o.push(n[l]);
					else break;
					n = n.slice(l);
					let p = o.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
					r = r ? `${r}
${p}` : p, i = i ? `${i}
${c}` : c;
					let d = this.lexer.state.top;
					if (this.lexer.state.top = !0, this.lexer.blockTokens(c, s, !0), this.lexer.state.top = d, n.length === 0) break;
					let h = s.at(-1);
					if (h?.type === "code") break;
					if (h?.type === "blockquote") {
						let R = h, f = R.raw + `
` + n.join(`
`), S = this.blockquote(f);
						s[s.length - 1] = S, r = r.substring(0, r.length - R.raw.length) + S.raw, i = i.substring(0, i.length - R.text.length) + S.text;
						break;
					} else if (h?.type === "list") {
						let R = h, f = R.raw + `
` + n.join(`
`), S = this.list(f);
						s[s.length - 1] = S, r = r.substring(0, r.length - h.raw.length) + S.raw, i = i.substring(0, i.length - R.raw.length) + S.raw, n = f.substring(s.at(-1).raw.length).split(`
`);
						continue;
					}
				}
				return {
					type: "blockquote",
					raw: r,
					tokens: s,
					text: i
				};
			}
		}
		list(e) {
			let t = this.rules.block.list.exec(e);
			if (t) {
				let n = t[1].trim(), r = n.length > 1, i = {
					type: "list",
					raw: "",
					ordered: r,
					start: r ? +n.slice(0, -1) : "",
					loose: !1,
					items: []
				};
				n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
				let s = this.rules.other.listItemRegex(n), a = !1;
				for (; e;) {
					let l = !1, p = "", c = "";
					if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
					p = t[0], e = e.substring(p.length);
					let d = fe(t[2].split(`
`, 1)[0], t[1].length), h = e.split(`
`, 1)[0], R = !d.trim(), f = 0;
					if (this.options.pedantic ? (f = 2, c = d.trimStart()) : R ? f = t[1].length + 1 : (f = d.search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = d.slice(f), f += t[1].length), R && this.rules.other.blankLine.test(h) && (p += h + `
`, e = e.substring(h.length + 1), l = !0), !l) {
						let S = this.rules.other.nextBulletRegex(f), V = this.rules.other.hrRegex(f), Y = this.rules.other.fencesBeginRegex(f), ee = this.rules.other.headingBeginRegex(f), xe = this.rules.other.htmlBeginRegex(f), be = this.rules.other.blockquoteBeginRegex(f);
						for (; e;) {
							let H = e.split(`
`, 1)[0], I;
							if (h = H, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), I = h) : I = h.replace(this.rules.other.tabCharGlobal, "    "), Y.test(h) || ee.test(h) || xe.test(h) || be.test(h) || S.test(h) || V.test(h)) break;
							if (I.search(this.rules.other.nonSpaceChar) >= f || !h.trim()) c += `
` + I.slice(f);
							else {
								if (R || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || Y.test(d) || ee.test(d) || V.test(d)) break;
								c += `
` + h;
							}
							R = !h.trim(), p += H + `
`, e = e.substring(H.length + 1), d = I.slice(f);
						}
					}
					i.loose || (a ? i.loose = !0 : this.rules.other.doubleBlankLine.test(p) && (a = !0)), i.items.push({
						type: "list_item",
						raw: p,
						task: !!this.options.gfm && this.rules.other.listIsTask.test(c),
						loose: !1,
						text: c,
						tokens: []
					}), i.raw += p;
				}
				let o = i.items.at(-1);
				if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
				else return;
				i.raw = i.raw.trimEnd();
				for (let l of i.items) {
					if (this.lexer.state.top = !1, l.tokens = this.lexer.blockTokens(l.text, []), l.task) {
						if (l.text = l.text.replace(this.rules.other.listReplaceTask, ""), l.tokens[0]?.type === "text" || l.tokens[0]?.type === "paragraph") {
							l.tokens[0].raw = l.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), l.tokens[0].text = l.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
							for (let c = this.lexer.inlineQueue.length - 1; c >= 0; c--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[c].src)) {
								this.lexer.inlineQueue[c].src = this.lexer.inlineQueue[c].src.replace(this.rules.other.listReplaceTask, "");
								break;
							}
						}
						let p = this.rules.other.listTaskCheckbox.exec(l.raw);
						if (p) {
							let c = {
								type: "checkbox",
								raw: p[0] + " ",
								checked: p[0] !== "[ ]"
							};
							l.checked = c.checked, i.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = c.raw + l.tokens[0].raw, l.tokens[0].text = c.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(c)) : l.tokens.unshift({
								type: "paragraph",
								raw: c.raw,
								text: c.raw,
								tokens: [c]
							}) : l.tokens.unshift(c);
						}
					}
					if (!i.loose) {
						let p = l.tokens.filter((d) => d.type === "space");
						i.loose = p.length > 0 && p.some((d) => this.rules.other.anyLine.test(d.raw));
					}
				}
				if (i.loose) for (let l of i.items) {
					l.loose = !0;
					for (let p of l.tokens) p.type === "text" && (p.type = "paragraph");
				}
				return i;
			}
		}
		html(e) {
			let t = this.rules.block.html.exec(e);
			if (t) return {
				type: "html",
				block: !0,
				raw: t[0],
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: t[0]
			};
		}
		def(e) {
			let t = this.rules.block.def.exec(e);
			if (t) {
				let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
				return {
					type: "def",
					tag: n,
					raw: t[0],
					href: r,
					title: i
				};
			}
		}
		table(e) {
			let t = this.rules.block.table.exec(e);
			if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
			let n = J(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
				type: "table",
				raw: t[0],
				header: [],
				align: [],
				rows: []
			};
			if (n.length === r.length) {
				for (let a of r) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
				for (let a = 0; a < n.length; a++) s.header.push({
					text: n[a],
					tokens: this.lexer.inline(n[a]),
					header: !0,
					align: s.align[a]
				});
				for (let a of i) s.rows.push(J(a, s.header.length).map((o, l) => ({
					text: o,
					tokens: this.lexer.inline(o),
					header: !1,
					align: s.align[l]
				})));
				return s;
			}
		}
		lheading(e) {
			let t = this.rules.block.lheading.exec(e);
			if (t) return {
				type: "heading",
				raw: t[0],
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: t[1],
				tokens: this.lexer.inline(t[1])
			};
		}
		paragraph(e) {
			let t = this.rules.block.paragraph.exec(e);
			if (t) {
				let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
				return {
					type: "paragraph",
					raw: t[0],
					text: n,
					tokens: this.lexer.inline(n)
				};
			}
		}
		text(e) {
			let t = this.rules.block.text.exec(e);
			if (t) return {
				type: "text",
				raw: t[0],
				text: t[0],
				tokens: this.lexer.inline(t[0])
			};
		}
		escape(e) {
			let t = this.rules.inline.escape.exec(e);
			if (t) return {
				type: "escape",
				raw: t[0],
				text: t[1]
			};
		}
		tag(e) {
			let t = this.rules.inline.tag.exec(e);
			if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
				type: "html",
				raw: t[0],
				inLink: this.lexer.state.inLink,
				inRawBlock: this.lexer.state.inRawBlock,
				block: !1,
				text: t[0]
			};
		}
		link(e) {
			let t = this.rules.inline.link.exec(e);
			if (t) {
				let n = t[2].trim();
				if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
					if (!this.rules.other.endAngleBracket.test(n)) return;
					let s = E(n.slice(0, -1), "\\");
					if ((n.length - s.length) % 2 === 0) return;
				} else {
					let s = ge(t[2], "()");
					if (s === -2) return;
					if (s > -1) {
						let o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
						t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, o).trim(), t[3] = "";
					}
				}
				let r = t[2], i = "";
				if (this.options.pedantic) {
					let s = this.rules.other.pedanticHrefTitle.exec(r);
					s && (r = s[1], i = s[3]);
				} else i = t[3] ? t[3].slice(1, -1) : "";
				return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), me(t, {
					href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
					title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
				}, t[0], this.lexer, this.rules);
			}
		}
		reflink(e, t) {
			let n;
			if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
				let i = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
				if (!i) {
					let s = n[0].charAt(0);
					return {
						type: "text",
						raw: s,
						text: s
					};
				}
				return me(n, i, n[0], this.lexer, this.rules);
			}
		}
		emStrong(e, t, n = "") {
			let r = this.rules.inline.emStrongLDelim.exec(e);
			if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
			if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
				let s = [...r[0]].length - 1, a, o, l = s, p = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
				for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = c.exec(t)) != null;) {
					if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
					if (o = [...a].length, r[3] || r[4]) {
						l += o;
						continue;
					} else if ((r[5] || r[6]) && s % 3 && !((s + o) % 3)) {
						p += o;
						continue;
					}
					if (l -= o, l > 0) continue;
					o = Math.min(o, o + l + p);
					let d = [...r[0]][0].length, h = e.slice(0, s + r.index + d + o);
					if (Math.min(s, o) % 2) {
						let f = h.slice(1, -1);
						return {
							type: "em",
							raw: h,
							text: f,
							tokens: this.lexer.inlineTokens(f)
						};
					}
					let R = h.slice(2, -2);
					return {
						type: "strong",
						raw: h,
						text: R,
						tokens: this.lexer.inlineTokens(R)
					};
				}
			}
		}
		codespan(e) {
			let t = this.rules.inline.code.exec(e);
			if (t) {
				let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
				return r && i && (n = n.substring(1, n.length - 1)), {
					type: "codespan",
					raw: t[0],
					text: n
				};
			}
		}
		br(e) {
			let t = this.rules.inline.br.exec(e);
			if (t) return {
				type: "br",
				raw: t[0]
			};
		}
		del(e, t, n = "") {
			let r = this.rules.inline.delLDelim.exec(e);
			if (!r) return;
			if (!(r[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
				let s = [...r[0]].length - 1, a, o, l = s, p = this.rules.inline.delRDelim;
				for (p.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = p.exec(t)) != null;) {
					if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a || (o = [...a].length, o !== s)) continue;
					if (r[3] || r[4]) {
						l += o;
						continue;
					}
					if (l -= o, l > 0) continue;
					o = Math.min(o, o + l);
					let c = [...r[0]][0].length, d = e.slice(0, s + r.index + c + o), h = d.slice(s, -s);
					return {
						type: "del",
						raw: d,
						text: h,
						tokens: this.lexer.inlineTokens(h)
					};
				}
			}
		}
		autolink(e) {
			let t = this.rules.inline.autolink.exec(e);
			if (t) {
				let n, r;
				return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), {
					type: "link",
					raw: t[0],
					text: n,
					href: r,
					tokens: [{
						type: "text",
						raw: n,
						text: n
					}]
				};
			}
		}
		url(e) {
			let t;
			if (t = this.rules.inline.url.exec(e)) {
				let n, r;
				if (t[2] === "@") n = t[0], r = "mailto:" + n;
				else {
					let i;
					do
						i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
					while (i !== t[0]);
					n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
				}
				return {
					type: "link",
					raw: t[0],
					text: n,
					href: r,
					tokens: [{
						type: "text",
						raw: n,
						text: n
					}]
				};
			}
		}
		inlineText(e) {
			let t = this.rules.inline.text.exec(e);
			if (t) {
				let n = this.lexer.state.inRawBlock;
				return {
					type: "text",
					raw: t[0],
					text: t[0],
					escaped: n
				};
			}
		}
	};
	var x = class u {
		tokens;
		options;
		state;
		inlineQueue;
		tokenizer;
		constructor(e) {
			this.tokens = [], this.tokens.links = Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new w(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
				inLink: !1,
				inRawBlock: !1,
				top: !0
			};
			let t = {
				other: m,
				block: C.normal,
				inline: z.normal
			};
			this.options.pedantic ? (t.block = C.pedantic, t.inline = z.pedantic) : this.options.gfm && (t.block = C.gfm, this.options.breaks ? t.inline = z.breaks : t.inline = z.gfm), this.tokenizer.rules = t;
		}
		static get rules() {
			return {
				block: C,
				inline: z
			};
		}
		static lex(e, t) {
			return new u(t).lex(e);
		}
		static lexInline(e, t) {
			return new u(t).inlineTokens(e);
		}
		lex(e) {
			e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
			for (let t = 0; t < this.inlineQueue.length; t++) {
				let n = this.inlineQueue[t];
				this.inlineTokens(n.src, n.tokens);
			}
			return this.inlineQueue = [], this.tokens;
		}
		blockTokens(e, t = [], n = !1) {
			for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e;) {
				let r;
				if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
				if (r = this.tokenizer.space(e)) {
					e = e.substring(r.raw.length);
					let s = t.at(-1);
					r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
					continue;
				}
				if (r = this.tokenizer.code(e)) {
					e = e.substring(r.raw.length);
					let s = t.at(-1);
					s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
					continue;
				}
				if (r = this.tokenizer.fences(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.heading(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.hr(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.blockquote(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.list(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.html(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.def(e)) {
					e = e.substring(r.raw.length);
					let s = t.at(-1);
					s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
						href: r.href,
						title: r.title
					}, t.push(r));
					continue;
				}
				if (r = this.tokenizer.table(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.lheading(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				let i = e;
				if (this.options.extensions?.startBlock) {
					let s = Infinity, a = e.slice(1), o;
					this.options.extensions.startBlock.forEach((l) => {
						o = l.call({ lexer: this }, a), typeof o == "number" && o >= 0 && (s = Math.min(s, o));
					}), s < Infinity && s >= 0 && (i = e.substring(0, s + 1));
				}
				if (this.state.top && (r = this.tokenizer.paragraph(i))) {
					let s = t.at(-1);
					n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
					continue;
				}
				if (r = this.tokenizer.text(e)) {
					e = e.substring(r.raw.length);
					let s = t.at(-1);
					s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
					continue;
				}
				if (e) {
					let s = "Infinite loop on byte: " + e.charCodeAt(0);
					if (this.options.silent) {
						console.error(s);
						break;
					} else throw new Error(s);
				}
			}
			return this.state.top = !0, t;
		}
		inline(e, t = []) {
			return this.inlineQueue.push({
				src: e,
				tokens: t
			}), t;
		}
		inlineTokens(e, t = []) {
			let n = e, r = null;
			if (this.tokens.links) {
				let o = Object.keys(this.tokens.links);
				if (o.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) o.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
			}
			for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
			let i;
			for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
			n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
			let s = !1, a = "";
			for (; e;) {
				s || (a = ""), s = !1;
				let o;
				if (this.options.extensions?.inline?.some((p) => (o = p.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
				if (o = this.tokenizer.escape(e)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (o = this.tokenizer.tag(e)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (o = this.tokenizer.link(e)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (o = this.tokenizer.reflink(e, this.tokens.links)) {
					e = e.substring(o.raw.length);
					let p = t.at(-1);
					o.type === "text" && p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : t.push(o);
					continue;
				}
				if (o = this.tokenizer.emStrong(e, n, a)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (o = this.tokenizer.codespan(e)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (o = this.tokenizer.br(e)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (o = this.tokenizer.del(e, n, a)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (o = this.tokenizer.autolink(e)) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				if (!this.state.inLink && (o = this.tokenizer.url(e))) {
					e = e.substring(o.raw.length), t.push(o);
					continue;
				}
				let l = e;
				if (this.options.extensions?.startInline) {
					let p = Infinity, c = e.slice(1), d;
					this.options.extensions.startInline.forEach((h) => {
						d = h.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (p = Math.min(p, d));
					}), p < Infinity && p >= 0 && (l = e.substring(0, p + 1));
				}
				if (o = this.tokenizer.inlineText(l)) {
					e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), s = !0;
					let p = t.at(-1);
					p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : t.push(o);
					continue;
				}
				if (e) {
					let p = "Infinite loop on byte: " + e.charCodeAt(0);
					if (this.options.silent) {
						console.error(p);
						break;
					} else throw new Error(p);
				}
			}
			return t;
		}
	};
	var y = class {
		options;
		parser;
		constructor(e) {
			this.options = e || T;
		}
		space(e) {
			return "";
		}
		code({ text: e, lang: t, escaped: n }) {
			let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
			return r ? "<pre><code class=\"language-" + O(r) + "\">" + (n ? i : O(i, !0)) + `</code></pre>
` : "<pre><code>" + (n ? i : O(i, !0)) + `</code></pre>
`;
		}
		blockquote({ tokens: e }) {
			return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
		}
		html({ text: e }) {
			return e;
		}
		def(e) {
			return "";
		}
		heading({ tokens: e, depth: t }) {
			return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
		}
		hr(e) {
			return `<hr>
`;
		}
		list(e) {
			let t = e.ordered, n = e.start, r = "";
			for (let a = 0; a < e.items.length; a++) {
				let o = e.items[a];
				r += this.listitem(o);
			}
			let i = t ? "ol" : "ul", s = t && n !== 1 ? " start=\"" + n + "\"" : "";
			return "<" + i + s + `>
` + r + "</" + i + `>
`;
		}
		listitem(e) {
			return `<li>${this.parser.parse(e.tokens)}</li>
`;
		}
		checkbox({ checked: e }) {
			return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
		}
		paragraph({ tokens: e }) {
			return `<p>${this.parser.parseInline(e)}</p>
`;
		}
		table(e) {
			let t = "", n = "";
			for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
			t += this.tablerow({ text: n });
			let r = "";
			for (let i = 0; i < e.rows.length; i++) {
				let s = e.rows[i];
				n = "";
				for (let a = 0; a < s.length; a++) n += this.tablecell(s[a]);
				r += this.tablerow({ text: n });
			}
			return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
		}
		tablerow({ text: e }) {
			return `<tr>
${e}</tr>
`;
		}
		tablecell(e) {
			let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
			return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
		}
		strong({ tokens: e }) {
			return `<strong>${this.parser.parseInline(e)}</strong>`;
		}
		em({ tokens: e }) {
			return `<em>${this.parser.parseInline(e)}</em>`;
		}
		codespan({ text: e }) {
			return `<code>${O(e, !0)}</code>`;
		}
		br(e) {
			return "<br>";
		}
		del({ tokens: e }) {
			return `<del>${this.parser.parseInline(e)}</del>`;
		}
		link({ href: e, title: t, tokens: n }) {
			let r = this.parser.parseInline(n), i = X(e);
			if (i === null) return r;
			e = i;
			let s = "<a href=\"" + e + "\"";
			return t && (s += " title=\"" + O(t) + "\""), s += ">" + r + "</a>", s;
		}
		image({ href: e, title: t, text: n, tokens: r }) {
			r && (n = this.parser.parseInline(r, this.parser.textRenderer));
			let i = X(e);
			if (i === null) return O(n);
			e = i;
			let s = `<img src="${e}" alt="${O(n)}"`;
			return t && (s += ` title="${O(t)}"`), s += ">", s;
		}
		text(e) {
			return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : O(e.text);
		}
	};
	var $ = class {
		strong({ text: e }) {
			return e;
		}
		em({ text: e }) {
			return e;
		}
		codespan({ text: e }) {
			return e;
		}
		del({ text: e }) {
			return e;
		}
		html({ text: e }) {
			return e;
		}
		text({ text: e }) {
			return e;
		}
		link({ text: e }) {
			return "" + e;
		}
		image({ text: e }) {
			return "" + e;
		}
		br() {
			return "";
		}
		checkbox({ raw: e }) {
			return e;
		}
	};
	var b = class u {
		options;
		renderer;
		textRenderer;
		constructor(e) {
			this.options = e || T, this.options.renderer = this.options.renderer || new y(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
		}
		static parse(e, t) {
			return new u(t).parse(e);
		}
		static parseInline(e, t) {
			return new u(t).parseInline(e);
		}
		parse(e) {
			let t = "";
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				if (this.options.extensions?.renderers?.[r.type]) {
					let s = r, a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
					if (a !== !1 || ![
						"space",
						"hr",
						"heading",
						"code",
						"table",
						"blockquote",
						"list",
						"html",
						"def",
						"paragraph",
						"text"
					].includes(s.type)) {
						t += a || "";
						continue;
					}
				}
				let i = r;
				switch (i.type) {
					case "space":
						t += this.renderer.space(i);
						break;
					case "hr":
						t += this.renderer.hr(i);
						break;
					case "heading":
						t += this.renderer.heading(i);
						break;
					case "code":
						t += this.renderer.code(i);
						break;
					case "table":
						t += this.renderer.table(i);
						break;
					case "blockquote":
						t += this.renderer.blockquote(i);
						break;
					case "list":
						t += this.renderer.list(i);
						break;
					case "checkbox":
						t += this.renderer.checkbox(i);
						break;
					case "html":
						t += this.renderer.html(i);
						break;
					case "def":
						t += this.renderer.def(i);
						break;
					case "paragraph":
						t += this.renderer.paragraph(i);
						break;
					case "text":
						t += this.renderer.text(i);
						break;
					default: {
						let s = "Token with \"" + i.type + "\" type was not found.";
						if (this.options.silent) return console.error(s), "";
						throw new Error(s);
					}
				}
			}
			return t;
		}
		parseInline(e, t = this.renderer) {
			let n = "";
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (this.options.extensions?.renderers?.[i.type]) {
					let a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
					if (a !== !1 || ![
						"escape",
						"html",
						"link",
						"image",
						"strong",
						"em",
						"codespan",
						"br",
						"del",
						"text"
					].includes(i.type)) {
						n += a || "";
						continue;
					}
				}
				let s = i;
				switch (s.type) {
					case "escape":
						n += t.text(s);
						break;
					case "html":
						n += t.html(s);
						break;
					case "link":
						n += t.link(s);
						break;
					case "image":
						n += t.image(s);
						break;
					case "checkbox":
						n += t.checkbox(s);
						break;
					case "strong":
						n += t.strong(s);
						break;
					case "em":
						n += t.em(s);
						break;
					case "codespan":
						n += t.codespan(s);
						break;
					case "br":
						n += t.br(s);
						break;
					case "del":
						n += t.del(s);
						break;
					case "text":
						n += t.text(s);
						break;
					default: {
						let a = "Token with \"" + s.type + "\" type was not found.";
						if (this.options.silent) return console.error(a), "";
						throw new Error(a);
					}
				}
			}
			return n;
		}
	};
	var P = class {
		options;
		block;
		constructor(e) {
			this.options = e || T;
		}
		static passThroughHooks = new Set([
			"preprocess",
			"postprocess",
			"processAllTokens",
			"emStrongMask"
		]);
		static passThroughHooksRespectAsync = new Set([
			"preprocess",
			"postprocess",
			"processAllTokens"
		]);
		preprocess(e) {
			return e;
		}
		postprocess(e) {
			return e;
		}
		processAllTokens(e) {
			return e;
		}
		emStrongMask(e) {
			return e;
		}
		provideLexer() {
			return this.block ? x.lex : x.lexInline;
		}
		provideParser() {
			return this.block ? b.parse : b.parseInline;
		}
	};
	var B = class {
		defaults = M();
		options = this.setOptions;
		parse = this.parseMarkdown(!0);
		parseInline = this.parseMarkdown(!1);
		Parser = b;
		Renderer = y;
		TextRenderer = $;
		Lexer = x;
		Tokenizer = w;
		Hooks = P;
		constructor(...e) {
			this.use(...e);
		}
		walkTokens(e, t) {
			let n = [];
			for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
				case "table": {
					let i = r;
					for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
					for (let s of i.rows) for (let a of s) n = n.concat(this.walkTokens(a.tokens, t));
					break;
				}
				case "list": {
					let i = r;
					n = n.concat(this.walkTokens(i.items, t));
					break;
				}
				default: {
					let i = r;
					this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
						let a = i[s].flat(Infinity);
						n = n.concat(this.walkTokens(a, t));
					}) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
				}
			}
			return n;
		}
		use(...e) {
			let t = this.defaults.extensions || {
				renderers: {},
				childTokens: {}
			};
			return e.forEach((n) => {
				let r = { ...n };
				if (r.async = this.defaults.async || r.async || !1, n.extensions && (n.extensions.forEach((i) => {
					if (!i.name) throw new Error("extension name required");
					if ("renderer" in i) {
						let s = t.renderers[i.name];
						s ? t.renderers[i.name] = function(...a) {
							let o = i.renderer.apply(this, a);
							return o === !1 && (o = s.apply(this, a)), o;
						} : t.renderers[i.name] = i.renderer;
					}
					if ("tokenizer" in i) {
						if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
						let s = t[i.level];
						s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
					}
					"childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
				}), r.extensions = t), n.renderer) {
					let i = this.defaults.renderer || new y(this.defaults);
					for (let s in n.renderer) {
						if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
						if (["options", "parser"].includes(s)) continue;
						let a = s, o = n.renderer[a], l = i[a];
						i[a] = (...p) => {
							let c = o.apply(i, p);
							return c === !1 && (c = l.apply(i, p)), c || "";
						};
					}
					r.renderer = i;
				}
				if (n.tokenizer) {
					let i = this.defaults.tokenizer || new w(this.defaults);
					for (let s in n.tokenizer) {
						if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
						if ([
							"options",
							"rules",
							"lexer"
						].includes(s)) continue;
						let a = s, o = n.tokenizer[a], l = i[a];
						i[a] = (...p) => {
							let c = o.apply(i, p);
							return c === !1 && (c = l.apply(i, p)), c;
						};
					}
					r.tokenizer = i;
				}
				if (n.hooks) {
					let i = this.defaults.hooks || new P();
					for (let s in n.hooks) {
						if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
						if (["options", "block"].includes(s)) continue;
						let a = s, o = n.hooks[a], l = i[a];
						P.passThroughHooks.has(s) ? i[a] = (p) => {
							if (this.defaults.async && P.passThroughHooksRespectAsync.has(s)) return (async () => {
								let d = await o.call(i, p);
								return l.call(i, d);
							})();
							let c = o.call(i, p);
							return l.call(i, c);
						} : i[a] = (...p) => {
							if (this.defaults.async) return (async () => {
								let d = await o.apply(i, p);
								return d === !1 && (d = await l.apply(i, p)), d;
							})();
							let c = o.apply(i, p);
							return c === !1 && (c = l.apply(i, p)), c;
						};
					}
					r.hooks = i;
				}
				if (n.walkTokens) {
					let i = this.defaults.walkTokens, s = n.walkTokens;
					r.walkTokens = function(a) {
						let o = [];
						return o.push(s.call(this, a)), i && (o = o.concat(i.call(this, a))), o;
					};
				}
				this.defaults = {
					...this.defaults,
					...r
				};
			}), this;
		}
		setOptions(e) {
			return this.defaults = {
				...this.defaults,
				...e
			}, this;
		}
		lexer(e, t) {
			return x.lex(e, t ?? this.defaults);
		}
		parser(e, t) {
			return b.parse(e, t ?? this.defaults);
		}
		parseMarkdown(e) {
			return (n, r) => {
				let i = { ...r }, s = {
					...this.defaults,
					...i
				}, a = this.onError(!!s.silent, !!s.async);
				if (this.defaults.async === !0 && i.async === !1) return a(/* @__PURE__ */ new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
				if (typeof n > "u" || n === null) return a(/* @__PURE__ */ new Error("marked(): input parameter is undefined or null"));
				if (typeof n != "string") return a(/* @__PURE__ */ new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
				if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (async () => {
					let o = s.hooks ? await s.hooks.preprocess(n) : n, p = await (s.hooks ? await s.hooks.provideLexer() : e ? x.lex : x.lexInline)(o, s), c = s.hooks ? await s.hooks.processAllTokens(p) : p;
					s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
					let h = await (s.hooks ? await s.hooks.provideParser() : e ? b.parse : b.parseInline)(c, s);
					return s.hooks ? await s.hooks.postprocess(h) : h;
				})().catch(a);
				try {
					s.hooks && (n = s.hooks.preprocess(n));
					let l = (s.hooks ? s.hooks.provideLexer() : e ? x.lex : x.lexInline)(n, s);
					s.hooks && (l = s.hooks.processAllTokens(l)), s.walkTokens && this.walkTokens(l, s.walkTokens);
					let c = (s.hooks ? s.hooks.provideParser() : e ? b.parse : b.parseInline)(l, s);
					return s.hooks && (c = s.hooks.postprocess(c)), c;
				} catch (o) {
					return a(o);
				}
			};
		}
		onError(e, t) {
			return (n) => {
				if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
					let r = "<p>An error occurred:</p><pre>" + O(n.message + "", !0) + "</pre>";
					return t ? Promise.resolve(r) : r;
				}
				if (t) return Promise.reject(n);
				throw n;
			};
		}
	};
	var L = new B();
	function g(u, e) {
		return L.parse(u, e);
	}
	g.options = g.setOptions = function(u) {
		return L.setOptions(u), g.defaults = L.defaults, G(g.defaults), g;
	};
	g.getDefaults = M;
	g.defaults = T;
	g.use = function(...u) {
		return L.use(...u), g.defaults = L.defaults, G(g.defaults), g;
	};
	g.walkTokens = function(u, e) {
		return L.walkTokens(u, e);
	};
	g.parseInline = L.parseInline;
	g.Parser = b;
	g.parser = b.parse;
	g.Renderer = y;
	g.TextRenderer = $;
	g.Lexer = x;
	g.lexer = x.lex;
	g.Tokenizer = w;
	g.Hooks = P;
	g.parse = g;
	g.options;
	g.setOptions;
	g.use;
	g.walkTokens;
	g.parseInline;
	b.parse;
	x.lex;
	//#endregion
	//#region src/utils/translations.ts
	/** Contains the identifiers of all initialized and loaded translation locales */
	var initializedLocales = /* @__PURE__ */ new Set();
	/** The currently active locale */
	var activeLocale = "en-US";
	/** The current locale's text direction */
	var activeLocaleDir = "ltr";
	tr.addTransform(tr.transforms.percent);
	tr.addTransform(tr.transforms.templateLiteral);
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
				tr.setFallbackLanguage("en-US");
				fallbackTrans = await fetchTranslationResource("en-US");
			}
			const baseTransFile = typeof transFile?.meta === "object" && "base" in transFile.meta && typeof transFile.meta.base === "string" ? await fetchTranslationResource(transFile.meta.base) : void 0;
			const { meta: { authors: _authors, ...meta }, ...trans } = {
				...fallbackTrans ?? {},
				...baseTransFile ?? {},
				...transFile
			};
			tr.addTranslations(locale, {
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
		const res = await fetchAdvanced$1(await getResourceUrl(`trans-${locale}`));
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
		return typeof tr.getTranslations(locale)?.[key] === "string";
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
		return tr.for(locale, key, ...args);
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
	var BytmDialog = class BytmDialog extends NanoEmitter$2 {
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
			if (!isDomLoaded()) document.addEventListener("DOMContentLoaded", createContainer, { once: true });
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
			if (val instanceof DatedError$1) return `[${val.name} (@ ${val.date.toISOString()}): ${val.message}]`;
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
			if (typeof lastArg === "number" && lastArg >= 0 && lastArg <= Object.keys(LogLevel).length / 2 - 1) return clamp$1(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
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
			globservers.body = new SelectorObserver(document.body, {
				...defaultObserverOptions,
				defaultDebounce: clamp(defaultObserverOptions.defaultDebounce, 100, 500),
				subtree: false
			});
			globservers.body.enable();
			globservers.bytmDialogContainer = new SelectorObserver(getSelector("observer", "bytmDialogContainer"), {
				...defaultObserverOptions,
				defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 1.5),
				subtree: true
			});
			globservers.bytmDialogContainer.enable();
			switch (getDomain()) {
				case "ytm": {
					const browseResponseSelector = getSelector("observer", "browseResponse");
					globservers.browseResponse = new SelectorObserver(browseResponseSelector, {
						...defaultObserverOptions,
						defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
						subtree: true
					});
					globservers.body.addListener(browseResponseSelector, { listener: getEnableObsFn("browseResponse") });
					const searchPageSelector = getSelector("observer", "searchPage");
					globservers.searchPage = new SelectorObserver(searchPageSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(searchPageSelector, { listener: getEnableObsFn("searchPage") });
					const navBarSelector = getSelector("observer", "navBar");
					globservers.navBar = new SelectorObserver(navBarSelector, {
						...defaultObserverOptions,
						subtree: false
					});
					globservers.body.addListener(navBarSelector, { listener: getEnableObsFn("navBar") });
					const mainPanelSelector = getSelector("observer", "mainPanel");
					globservers.mainPanel = new SelectorObserver(mainPanelSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(mainPanelSelector, { listener: getEnableObsFn("mainPanel") });
					const sidebarSelector = getSelector("observer", "sideBar");
					globservers.sideBar = new SelectorObserver(sidebarSelector, {
						...defaultObserverOptions,
						attributes: true,
						childList: true,
						subtree: true
					});
					globservers.body.addListener(sidebarSelector, { listener: getEnableObsFn("sideBar") });
					const sidePanelSelector = getSelector("observer", "sidePanel");
					globservers.sidePanel = new SelectorObserver(sidePanelSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(sidePanelSelector, { listener: getEnableObsFn("sidePanel") });
					const playerBarSelector = getSelector("observer", "playerBar");
					globservers.playerBar = new SelectorObserver(playerBarSelector, { ...defaultObserverOptions });
					globservers.body.addListener(playerBarSelector, { listener: () => {
						globservers.playerBar.enable();
					} });
					const playerBarInfoSelector = getSelector("observer", "playerBarInfo");
					globservers.playerBarInfo = new SelectorObserver(playerBarInfoSelector, {
						...defaultObserverOptions,
						attributes: true,
						attributeFilter: ["title"]
					});
					globservers.playerBar.addListener(playerBarInfoSelector, { listener: getEnableObsFn("playerBarInfo") });
					const playerBarMiddleButtonsSelector = getSelector("observer", "playerBarMiddleButtons");
					globservers.playerBarMiddleButtons = new SelectorObserver(playerBarMiddleButtonsSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.playerBar.addListener(playerBarMiddleButtonsSelector, { listener: getEnableObsFn("playerBarMiddleButtons") });
					const playerBarRightControls = getSelector("observer", "playerBarRightControls");
					globservers.playerBarRightControls = new SelectorObserver(playerBarRightControls, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.playerBar.addListener(playerBarRightControls, { listener: getEnableObsFn("playerBarRightControls") });
					const popupContainerSelector = getSelector("observer", "popupContainer");
					globservers.popupContainer = new SelectorObserver(popupContainerSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(popupContainerSelector, { listener: getEnableObsFn("popupContainer") });
					break;
				}
				case "yt": {
					const ytGuideSelector = getSelector("observer", "ytGuide");
					globservers.ytGuide = new SelectorObserver(ytGuideSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(ytGuideSelector, { listener: getEnableObsFn("ytGuide") });
					const ytdBrowseSelector = getSelector("observer", "ytdBrowse");
					globservers.ytdBrowse = new SelectorObserver(ytdBrowseSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.body.addListener(ytdBrowseSelector, { listener: getEnableObsFn("ytdBrowse") });
					const ytAppHeaderSelector = getSelector("observer", "ytAppHeader");
					globservers.ytAppHeader = new SelectorObserver(ytAppHeaderSelector, {
						...defaultObserverOptions,
						defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
						subtree: true
					});
					globservers.ytdBrowse.addListener(ytAppHeaderSelector, { listener: getEnableObsFn("ytAppHeader") });
					const ytWatchFlexySelector = getSelector("observer", "ytWatchFlexy");
					globservers.ytWatchFlexy = new SelectorObserver(ytWatchFlexySelector, {
						...defaultObserverOptions,
						defaultDebounce: clamp(Math.floor(defaultObserverOptions.defaultDebounce * 3), 100, 300),
						subtree: true
					});
					globservers.body.addListener(ytWatchFlexySelector, { listener: getEnableObsFn("ytWatchFlexy") });
					const ytWatchMetadataSelector = getSelector("observer", "ytWatchMetadata");
					globservers.ytWatchMetadata = new SelectorObserver(ytWatchMetadataSelector, {
						...defaultObserverOptions,
						subtree: true
					});
					globservers.ytWatchFlexy.addListener(ytWatchMetadataSelector, { listener: getEnableObsFn("ytWatchMetadata") });
					const mastheadSelector = getSelector("observer", "ytMasthead");
					globservers.ytMasthead = new SelectorObserver(mastheadSelector, {
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
	var siteEvents = new NanoEmitter$2({ publicEmit: true });
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
			createRecurringTask$1({
				timeout: 150,
				task: runIntervalChecks
			});
			if (getDomain() === "ytm") addSelectorListener("mainPanel", "ytmusic-player #song-video #movie_player .ytp-title-text > a", { listener(el) {
				new MutationObserver(([{ target }]) => {
					if (!target || !target?.href?.includes("/watch")) return;
					checkVideoIdChange(new URL(target.href).searchParams.get("v"));
				}).observe(el, { attributeFilter: ["href"] });
			} });
			getDomain() === "ytm" && createRecurringTask$1({
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
				if (getFeature("logEvents")) args.length > 0 ? loggers.siteEvent.log(`Emitted site event 'bytm:siteEvent:${key}' with ${args.length} ${autoPlural$2("argument", args)}:`, ...args) : loggers.siteEvent.log(`Emitted site event 'bytm:siteEvent:${key}' (without data)`);
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
		"NumpadEnter",
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
				inputElem.value = "defaultValue" in rest && rest.defaultValue ? await consumeStringGen$1(rest.defaultValue) : "";
				const inputEnterListener = (e) => {
					if ("code" in e && ["Enter", "NumpadEnter"].includes(e.code)) {
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
				if (["Enter", "NumpadEnter"].includes(e.code) && captureEnterKey) {
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
			headerEl.textContent = headerEl.ariaLabel = await consumeStringGen$1(opts.title);
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
				descEl.textContent = descEl.ariaLabel = await consumeStringGen$1(opts.descExport);
				const dataEl = document.createElement("textarea");
				dataEl.classList.add("bytm-exim-dialog-data");
				dataEl.readOnly = true;
				dataEl.tabIndex = 0;
				dataEl.value = t("click_to_reveal");
				onInteraction(dataEl, async () => {
					dataEl.value = await consumeStringGen$1(opts.exportData);
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
						copyToClipboard(await consumeStringGen$1(shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData));
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
				descEl.textContent = descEl.ariaLabel = await consumeStringGen$1(opts.descImport);
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
	async function createToggleInput({ onChange, initialValue = false, id = randomId$1(6, 36), labelPos = "left" }) {
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
				"Enter",
				"NumpadEnter"
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
			exportData: async () => await compressionSupported() ? await compress$1(JSON.stringify(autoLikeStore.getData()), compressionFormat$1, "string") : JSON.stringify(autoLikeStore.getData()),
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
		searchbarEl.addEventListener("input", debounce$1(() => {
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
		const setChannelEnabled = debounce$1((id, enabled) => {
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
	var autoLikeStore = new DataStore$1({
		id: "bytm-auto-like-channels",
		formatVersion: 2,
		defaultData: { channels: [] },
		engine: new GMStorageEngine(),
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
			return await (await fetchAdvanced$1(await getResourceUrl(key))).text() ?? void 0;
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
				rating: roundFixed$1(votesRaw.rating, 3),
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
			const fetchRes = await fetchAdvanced$1(fetchUrl, { ...token ? { headers: { Authorization: `Bearer ${token}` } } : {} });
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
			if (e.code === "Tab" || e.code === "Escape" || interactionKeys.includes(e.code)) {
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
				exportData: async () => await compressionSupported() ? await compress$1(JSON.stringify({
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
					if ("min" in ftInfo || "max" in ftInfo) newVal = clamp$1(Number(newVal), "min" in ftInfo ? Number(ftInfo.min) : -Infinity, "max" in ftInfo ? Number(ftInfo.max) : Infinity);
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
			const confChanged = debounce$1(onCfgChange, 333);
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
										const rTime = randRange$1(200, 400);
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
					setInnerHtml(aboutTextCont, await parseMarkdown(t("about_bytm_content_markdown", pureObj$2({
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
			window.addEventListener("resize", debounce$1(checkToggleScrollIndicator, 250), { passive: true });
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
			const verticalScroll = isScrollable(featuresCont).vertical;
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
			preloadImages([bytmLogoUrl]);
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
				const svg = await (await fetchAdvanced$1("https://music.youtube.com/img/on_platform_logo_dark.svg")).text();
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
					addParent(thumbnailElem, anchorElem);
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
				loggers.layout.log(`Added anchors around ${itemsAmt} sidebar ${autoPlural$2("item", itemsAmt)}`);
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
					loggers.layout.log(`Added anchors around ${itemsAmt} mini sidebar ${autoPlural$2("item", itemsAmt)}`);
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
							itemsAmt > 0 && loggers.layout.log(`Improved clickable area of ${itemsAmt} current song list ${autoPlural$2("item", itemsAmt)}`);
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
					itemsAmt > 0 && loggers.layout.log(`Improved clickable area of ${itemsAmt} song list ${autoPlural$2("item", itemsAmt)}`);
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
			addParent(item, anchorElem);
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
					addParent(rightBtnsEl, aboveQueueBtnCont);
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
	var artCacheStore = new DataStore$1({
		id: "bytm-artwork-cache",
		migrateIds: ["album-art-cache"],
		formatVersion: 1,
		engine: new GMStorageEngine(),
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
				if (!isDomLoaded()) return;
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
			vidContainer.addEventListener("mousemove", debounce$1(onMove, 150), { capture: true });
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
		addParent(likeBtn, likeBtnCont);
		const dislikeBtnCont = document.createElement("div");
		dislikeBtnCont.id = "bytm-dislike-btn-cont";
		addParent(dislikeBtn, dislikeBtnCont);
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
				window.addEventListener("resize", debounce$1(() => {
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
		if (!full) return serializer ??= new DataStoreSerializer$1(getSerializerStores(), dsOpts);
		else return fullSerializer ??= new DataStoreSerializer$1(getSerializerStoresFull(), dsOpts);
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
			const parsed = await g.parse(md, {
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
			const mdCont = await consumeStringGen$1(this.opts.body);
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
	var { autoPlural, NanoEmitter, pureObj } = CoreUtils_exports;
	var { getUnsafeWindow } = UserUtils_exports;
	[...allSiteEvents.map((e) => `bytm:siteEvent:${e}`)];
	/**
	* All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`)  
	* If prefixed with /\*🔒\*\/, the function is authenticated and requires a token to be passed as the first argument.
	*/
	var globalFuncs = pureObj({
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
			CoreUtils: CoreUtils_exports,
			UserUtils: UserUtils_exports,
			compareVersions: esm_exports
		};
		for (const [key, value] of Object.entries(props)) setGlobalProp(key, value);
		loggers.plugin.log("Initialized BYTM interface");
	}
	/** Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page! */
	function setGlobalProp(key, value) {
		const win = getUnsafeWindow();
		if (typeof win.BYTM !== "object") win.BYTM = pureObj({});
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
	var pluginPermissionsStore = new DataStore$1({
		id: "bytm-plugin-permissions",
		engine: new GMStorageEngine(),
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
			if (registeredPlugins.size > 0) loggers.plugin.info(`Registered ${registeredPlugins.size} ${autoPlural("plugin", registeredPlugins.size)}${mode === "development" ? " (including dev plugin)" : ""}`, LogLevel.Info);
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
	var devPluginId = randomId$1(8, 36, true, true);
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
		return bitSetHas(pluginIntents, PluginIntent.FullAccess) || perms.every((perm) => bitSetHas$1(pluginIntents, perm));
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
		for (const [, val] of Object.entries(enumRef)) if ((typeof val === "number" || typeof val === "bigint") && bitSetHas$1(bitSet, val)) result.push(val);
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
		else if (!validateStrict(plugin.version)) addInvalidPropErr("plugin.version", plugin.version, ["0.0.1", "2.5.21-rc.1"]);
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
	var lyricsCacheStore = new DataStore$1({
		id: "bytm-lyrics-cache",
		defaultData: { cache: [] },
		formatVersion: 2,
		engine: new GMStorageEngine(),
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
		if (!latestTag || !validateStrict(latestTag)) return await noNewVerFound();
		loggers.misc.info("Version check results - current version:", scriptInfo$1.version, "- latest version:", latestTag, "- from URL:", res.finalUrl, LogLevel.Info);
		if (compare(scriptInfo$1.version, latestTag, "<")) {
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
			addParent(sliderElem, volSliderCont);
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
		window.addEventListener("resize", debounce$1(onResize, Math.floor(1e3 / 6)), { passive: true });
		waitVideoElementReady().then(onResize);
		onResize();
	}
	var { get: nativeGetVolume, set: nativeSetVolume } = Object.getOwnPropertyDescriptor(getUnsafeWindow$1().HTMLMediaElement.prototype, "volume") ?? {};
	/** Initializes the exponential volume scaling feature */
	function initExponentialVolume() {
		if (getDomain() !== "ytm" || getFeature("volumeSliderExponential") === "linear") return;
		Object.defineProperty(getUnsafeWindow$1().HTMLMediaElement.prototype, "volume", {
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
			val = clamp$1(val, 0, 100);
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
		labelContElem.addEventListener("keydown", (e) => interactionKeys.includes(e.key) && e.stopPropagation());
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
			const intentsArr = bitSetHas$1(intentsBitSet, PluginIntent.FullAccess) ? [PluginIntent.FullAccess] : typeof intentsBitSet === "number" && intentsBitSet > 0 ? (() => {
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
			if (vidElem && vidElem.readyState > 0) vidElem.currentTime = clamp$1(vidElem.currentTime + skipBy, 0, vidElem.duration);
		});
		loggers.input.log("Added arrow key press listener");
	}
	function handleVolumeKeyPress(evt) {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		if (!getVideoElement()) return loggers.input.warn("Couldn't find video element, so the keypress is ignored");
		if (!sliderEl) return loggers.input.warn("Couldn't find volume slider element, so the keypress is ignored");
		const step = Number(sliderEl.step);
		const newVol = clamp$1(Number(sliderEl.value) + (evt.code === "ArrowUp" ? 1 : -1) * clamp$1(getFeature("arrowKeyVolumeStep", featInfo.arrowKeyVolumeStep.default), isNaN(step) ? 5 : step, 100), 0, 100);
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
			vid.currentTime = clamp$1(newTime, 0, vid.duration);
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
				const vidTimeAtStartOrEnd = valsWithin$1(videoTime ?? -Infinity, vidElem.duration, 1) || valsWithin$1(videoTime ?? Infinity, 0, 1);
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
			if (inNewTab) openInNewTab(newUrl, true);
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
			view: getUnsafeWindow$1()
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
			if (amt > 0) loggers.layout.log(`Added buttons to ${amt} new queue ${autoPlural$2("item", amt)}`);
		};
		siteEvents.on("queueChanged", () => tryAddCurrentQueueBtns(getSelector("songLists", "currentQueueContainer")));
		siteEvents.on("autoplayQueueChanged", () => tryAddCurrentQueueBtns(getSelector("songLists", "autoplayQueueContainer")));
		const queueItems = document.querySelectorAll(getSelector("songLists", "allCurrentQueueItems_global"));
		if (queueItems.length > 0) {
			queueItems.forEach((itm) => addQueueButtons(itm, void 0, "currentQueue"));
			loggers.layout.log(`Added buttons to ${queueItems.length} existing "current song queue" ${autoPlural$2("item", queueItems)}`);
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
			addedBtnsCount > 0 && loggers.layout.log(`Added buttons to ${addedBtnsCount} new "generic song list" ${autoPlural$2("item", addedBtnsCount)} in list`, listElem);
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
		await preloadImages([
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
					await pauseFor$1(15);
					delImgElem.src = deleteIconUrl;
					delImgElem.classList.remove("bytm-spinner");
					const removeFromQueueOrPlaylistBtn = queuePopupCont?.querySelector(getSelector("songLists", "queueItemPopoverRemoveFromListBtn"));
					const removeFromQueueBtnOptional = queuePopupCont?.querySelector(getSelector("songLists", "queueItemPopoverRemoveFromListBtnOptional"));
					let removeFromQueueBtn;
					if (removeFromQueueBtnOptional && removeFromQueueBtnOptional?.previousElementSibling === removeFromQueueOrPlaylistBtn) removeFromQueueBtn = removeFromQueueBtnOptional;
					else if (removeFromQueueOrPlaylistBtn) removeFromQueueBtn = removeFromQueueOrPlaylistBtn;
					removeFromQueueBtn?.click();
					if (removeFromQueueBtn && listType === "genericList") {
						await pauseFor$1(200);
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
	var ExampleError = class extends DatedError$1 {
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
		title = title ? await consumeStringGen$1(title) : void 0;
		extraAttributes = extraAttributes ? await consumeStringGen$1(extraAttributes) : void 0;
		const id = randomId$1(8, 36);
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
		if (feat.since && compare(feat.since, scriptInfo$1.version, isDev ? ">" : ">=") && (getVersionSessionCount() < 20 || isDev)) resolvedAdorns.push(adornments.newFeature);
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
			click: () => openInNewTab(package_default.pluginDiscoveryUrl)
		}
	};
	/** Default feature config data using the current feature info object, used when no data is found in persistent storage or when the user resets the config */
	var cfgDefaultData = pureObj$2(Object.keys(featInfo).filter((ftKey) => featInfo?.[ftKey] && "default" in featInfo[ftKey] && featInfo[ftKey].default !== void 0).reduce((acc, key) => {
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
			newData.arrowKeySkipBy = clamp$1(newData.arrowKeySkipBy, .5, 30);
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
			oldData.closeToastsTimeout = clamp$1(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
			oldData.lyricsCacheMaxSize = clamp$1(oldData.lyricsCacheMaxSize, featInfo.lyricsCacheMaxSize.min, featInfo.lyricsCacheMaxSize.max);
			oldData.autoCloseToasts = oldData.closeToastsTimeout > 0;
			oldData.closeToastsTimeout = clamp$1(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);
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
		return clamp$1(val, info.min, "max" in info && typeof info.max === "number" ? info.max : Infinity);
	}
	/** Clamps the given numerical value using the given numerical feature's `min` and `max` props (see {@linkcode featInfo}) if they exist. Otherwise returns the given value as-is. */
	function toClamped(ftKey, newValue) {
		const ftInf = featInfo[ftKey];
		if ("min" in ftInf) return clamp$1(newValue, ftInf.min, "max" in ftInf ? ftInf.max : Infinity);
		return newValue;
	}
	var configStore = new DataStore$1({
		id: "bytm-config",
		formatVersion: 12,
		engine: new GMStorageEngine(),
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
			if (oldDataObj !== null && typeof oldDataObj === "object" && Object.keys(oldDataObj).length > 0) oldDataHash = await computeHash$1(JSON.stringify(oldDataObj), "sha256");
		} catch {}
		let data = fixCfgKeys(await configStore.loadData());
		if (oldDataHash && oldDataHash !== await computeHash$1(JSON.stringify(data), "sha256")) {
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
			interceptWindowEvent("beforeunload", () => typeof discardBeforeUnloadOverride !== "undefined" ? discardBeforeUnloadOverride : getFeature("disableBeforeUnloadPopup"));
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
						await pauseFor$1(Math.max(getFeature("closeToastsTimeout") * 1e3 + animTimeout, animTimeout));
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
		createRecurringTask$1({
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
			loggers.behavior.log(`Removed ${remTimeEntries.length} ${autoPlural$2("entry", remTimeEntries)} with an outdated format from the video time cache`);
		}
		loggers.behavior.log(`Initialized video time restoring with ${remTimeEntries.length} initial ${autoPlural$2("entry", remTimeEntries)}:`, remTimeEntries);
		await remTimeTryRestoreTime();
		try {
			if (!isDomLoaded()) document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop, { once: true });
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
							vidElem.currentTime = clamp$1(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
							await remTimeDeleteEntry(entry.id);
							loggers.behavior.info(`Restored ${getDomain() === "ytm" ? getCurrentMediaType() : "video"} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
							return resolve(true);
						};
						if (!isDomLoaded()) document.addEventListener("DOMContentLoaded", doRestoreTime, { once: true });
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
				view: getUnsafeWindow$1()
			}));
		};
		const tryMove = async () => {
			if (isInFullscreen) return loggers.behavior.warn("Fullscreen is active - not dispatching \"Are you still there?\" events");
			if (isDragging || Date.now() - lastClick < lastInteractionTimeout) return loggers.behavior.warn("Click is currently held down - not dispatching \"Are you still there?\" events");
			const incX = (Math.random() * 2 - 1) / 10, incY = (Math.random() * 2 - 1) / 10;
			const vidEl = getVideoElement();
			if (!vidEl) return;
			for (let i = 0; i < 20; i++) {
				const x = Math.random() * clamp$1(window.innerWidth, 100, Math.max(200, window.innerWidth) - 100);
				const y = Math.random() * clamp$1(window.innerHeight, 100, Math.max(200, window.innerHeight) - 100);
				vidEl?.dispatchEvent(new MouseEvent("mousemove", {
					bubbles: true,
					cancelable: true,
					clientX: x + incX * i,
					clientY: y + incY * i,
					screenX: x + incX * i,
					screenY: y + incY * i,
					movementX: incX,
					movementY: incY,
					view: getUnsafeWindow$1()
				}));
				await pauseFor$1(10);
			}
		};
		setImmediateInterval$1(async () => {
			if (!getFeature("yesImStillThere")) return;
			tryClick();
			await tryMove();
		}, 3e4);
	}
	//#endregion
	//#region src/utils/broadcast.ts
	/** Random ID used to identify the sender of packets emitted via broadcast, and to determine which packets should be received based on the `to` field of the transmitted packets. */
	var broadcastTxID = randomId$1(10, 36);
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
	var broadcastEng = new GMStorageEngine({ dataStoreOptions: broadcastEngDSOpts });
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
			store.on("updateData", debounce$1(() => {
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
		const packetClean = pureObj$2(packet);
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
			if (!sesId) window.sessionStorage.setItem("_bytm-session-id", sesId = randomId$1(10, 36));
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
			await compress$1(".", compressionFormat$1, "string");
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
		const iprID = getDomain() === "yt" && "ytInitialPlayerResponse" in getUnsafeWindow$1() ? getUnsafeWindow$1().ytInitialPlayerResponse?.videoDetails.channelId : null;
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
			openInNewTab(href, background);
		} catch {
			window.open(href, "_blank", "noopener noreferrer");
		}
	}
	/** Tries to parse an uncompressed or compressed input string as a JSON object */
	async function tryToDecompressAndParse(input) {
		let parsed;
		const val = await consumeStringGen$1(input);
		try {
			parsed = JSON.parse(val);
		} catch {
			try {
				parsed = JSON.parse(await decompress$1(val, compressionFormat$1, "string"));
			} catch (err) {
				loggers.misc.error("Couldn't decompress and parse data.", err);
				return null;
			}
		}
		await pauseFor$1(randRange$1(400, 800));
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
	var reloadTabStore = new DataStore$1({
		id: "bytm-reload-tab",
		engine: new GMStorageEngine(),
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
		const win = getUnsafeWindow$1();
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
		loggers.misc.info(`Emitting broadcast to reload ${toTxIDs && toTxIDs.length > 0 ? `${toTxIDs.length} ${autoPlural$2("tab", toTxIDs)}` : "all tabs"}${reloadSelf ? ", then self-reloading" : ""}.`);
		emitBroadcast({ type: "reloadTabs" }, toTxIDs);
		return reloadSelf ? await (async () => {
			await pauseFor$1(30);
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
	var resourceCacheStore = new DataStore$1({
		id: "bytm-resource-cache",
		formatVersion: 0,
		engine: new GMStorageEngine(),
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
			const res = await fetchAdvanced$1(resourceUrl);
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
		const mdHtml = await g.parse(mdString, {
			async: true,
			breaks: true,
			gfm: true,
			silent: true
		});
		return sanitize ? sanitizeHtml(mdHtml) : mdHtml;
	}
	/** Returns the content of the changelog markdown file */
	async function getChangelogMd() {
		const clRes = await fetchAdvanced$1(changelogUrl);
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
		pauseFor$1(100).then(() => {
			toastElem.classList.add("visible");
			if (durationMs < Number.POSITIVE_INFINITY && durationMs > 0) {
				timeout && clearTimeout(timeout);
				timeout = setTimeout(closeToast, clamp$1(durationMs, 250, maxToastDuration));
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
	var showErrToast = debounce$1((errName, ...args) => showIconToast({
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
	var LyricsError = class extends DatedError$1 {
		constructor(message, opts) {
			super(message, opts);
			this.name = "LyricsError";
		}
	};
	/** Error class for errors thrown by the plugin interface - extends {@linkcode DatedError} */
	var PluginError = class extends DatedError$1 {
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
			if (typeof staticData?.selectors !== "object") throw new DatedError$1("Static data hasn't been fetched yet.");
			const sel = staticData.selectors?.[group]?.[id];
			if (!["string", "object"].includes(typeof sel)) throw new DatedError$1(`Selector '${group}.${String(id)}' doesn't exist or is neither a string nor an object.`);
			if (typeof sel === "object" && dom !== null && !(dom in sel)) throw new DatedError$1(`Selector '${group}.${String(id)}' doesn't contain a value for the current domain '${dom}'.`);
			return typeof sel === "string" ? sel : sel[dom];
		} catch (e) {
			loggers.data.error(`Couldn't get selector '${group}.${String(id)}' due to error:`, e);
			throw e;
		}
		const sel = staticData?.selectors?.[group]?.[id];
		return typeof sel === "string" ? sel : sel?.[dom];
	}
	var alertsStore = new DataStore$1({
		id: "bytm-alerts",
		defaultData: { dismissed: [] },
		formatVersion: 0,
		engine: new GMStorageEngine(),
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
		if ("versionMin" in alert && alert.versionMin && compareVersions(alert.versionMin, scriptInfo$1.version) > 0) return false;
		if ("versionMax" in alert && alert.versionMax && compareVersions(alert.versionMax, scriptInfo$1.version) < 0) return false;
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
			view: getUnsafeWindow$1(),
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
				if (!isDomLoaded()) await onDomLoad$1();
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
		if (!isDomLoaded()) throw new Error("DOM has not finished loading yet");
		const elem = addGlobalStyle(await transform(await consumeStringGen$1(css)));
		elem.classList.add("bytm-style");
		elem.id = `bytm-style-${ref ?? randomId$1(6, 36)}`;
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
	var tempTargetAttrName = `data-tmp-target-${randomId$1(6, 36)}`;
	purify.addHook("beforeSanitizeAttributes", (node) => {
		if (node.tagName === "A") {
			if (!node.hasAttribute("target")) node.setAttribute("target", "_self");
			if (node.hasAttribute("target")) node.setAttribute(tempTargetAttrName, node.getAttribute("target"));
		}
	});
	purify.addHook("afterSanitizeAttributes", (node) => {
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
		return purify.sanitize(String(html), { RETURN_TRUSTED_TYPE: returnTrustedType });
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
		if (!regPl) throw new DatedError$1(`Couldn't render plugin permissions dialog footer because plugin ${typeof plugin === "string" ? plugin : JSON.stringify(plugin)} isn't registered yet.`);
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
			if (!isDomLoaded()) document.addEventListener("DOMContentLoaded", () => onDomLoad(), { once: true });
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
			Promise.race([pauseFor$1(initTimeout), Promise.allSettled(ftInit.map(([name, prom]) => new Promise(async (res) => {
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
			getUnsafeWindow$1().dispatchEvent(new Event("resize", {
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
		await preloadImages(urls);
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
				values[key] = typeof val !== "undefined" && isEncoded ? await decompress$1(val, "deflate-raw", "string") : val;
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
								const result = await compress$1(val, "deflate-raw");
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
								const result = await decompress$1(val, "deflate-raw");
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
		isDev && GM.registerMenuCommand(getCmdName("💥", "menu_command.throw_example_error"), () => loggers.command.error("Test error thrown by user command:", new CustomError$1("ExampleError", "Test error")));
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
				buildNumber: "03a74015",
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
				console.log(`${loggers.command.conPrefix} Collected information from ${sessions.length} open ${autoPlural$2("tab", sessions)}:\n${createTable$1([columns, ...sessions.map(([txID, { sessionId, version, buildNumber, title, domain, initTime }], i) => {
					const initSince = secsToTimeStr$1(Math.floor((Date.now() - initTime) / 1e3)).padStart(4, "0");
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
	async function initPermTestPlugin() {
		if (!await GM.getValue("bytm-dev-treatments", false)) return;
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
		getUnsafeWindow$1().addEventListener("bytm:registerPlugin", async ({ detail: register }) => {
			if (typeof register === "function") {
				const result = register(permTestDef);
				loggers.debug.log(">> Plugin permission test result:", result);
				getUnsafeWindow$1().addEventListener("bytm:allReady", async () => {
					await (await getPluginPermissionsDialog(permTestDef)).open();
				});
			}
		});
	}
	preInit();
	//#endregion
})();
