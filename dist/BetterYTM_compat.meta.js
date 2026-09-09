// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           3.1.0
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-or-later
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@893e5691/assets/images/logo/logo_dev_48.png
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
// @antifeature       tracking Some of the used services will temporarily log your IP address and the songs you listen to. These features can be disabled on first launch or in the config menu.
// @antifeature:de-DE tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos, die du anschaust, protokollieren. Diese Funktionen können beim ersten Start oder jederzeit im Konfigurationsmenü ausgeschaltet werden.
// @antifeature:de    tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos, die du anschaust, protokollieren. Diese Funktionen können beim ersten Start oder jederzeit im Konfigurationsmenü ausgeschaltet werden.
// @antifeature:de-AT tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos, die du anschaust, protokollieren. Diese Funktionen können beim ersten Start oder jederzeit im Konfigurationsmenü ausgeschaltet werden.
// @antifeature:de-BE tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos, die du anschaust, protokollieren. Diese Funktionen können beim ersten Start oder jederzeit im Konfigurationsmenü ausgeschaltet werden.
// @antifeature:de-CH tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos, die du anschaust, protokollieren. Diese Funktionen können beim ersten Start oder jederzeit im Konfigurationsmenü ausgeschaltet werden.
// @antifeature:de-LI tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos, die du anschaust, protokollieren. Diese Funktionen können beim ersten Start oder jederzeit im Konfigurationsmenü ausgeschaltet werden.
// @antifeature:de-LU tracking Manche der benutzten Services werden temporär deine IP Adresse und die Videos, die du anschaust, protokollieren. Diese Funktionen können beim ersten Start oder jederzeit im Konfigurationsmenü ausgeschaltet werden.
// @antifeature:en-US tracking Some of the used services will temporarily log your IP address and the songs you listen to. These features can be disabled on first launch or in the config menu.
// @antifeature:en    tracking Some of the used services will temporarily log your IP address and the songs you listen to. These features can be disabled on first launch or in the config menu.
// @antifeature:en-CA tracking Some of the used services will temporarily log your IP address and the songs you listen to. These features can be disabled on first launch or in the config menu.
// @antifeature:es-ES tracking Algunos de los servicios utilizados registrarán temporalmente tu dirección IP y las canciones que escuches. Estas funciones se pueden desactivar al iniciar la aplicación por primera vez o en el menú de configuración.
// @antifeature:es    tracking Algunos de los servicios utilizados registrarán temporalmente tu dirección IP y las canciones que escuches. Estas funciones se pueden desactivar al iniciar la aplicación por primera vez o en el menú de configuración.
// @antifeature:es-MX tracking Algunos de los servicios utilizados registrarán temporalmente tu dirección IP y las canciones que escuches. Estas funciones se pueden desactivar al iniciar la aplicación por primera vez o en el menú de configuración.
// @antifeature:fr-FR tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les morceaux que vous écoutez. Ces fonctionnalités peuvent être désactivées lors du premier lancement ou dans le menu de configuration.
// @antifeature:fr    tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les morceaux que vous écoutez. Ces fonctionnalités peuvent être désactivées lors du premier lancement ou dans le menu de configuration.
// @antifeature:fr-CA tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les morceaux que vous écoutez. Ces fonctionnalités peuvent être désactivées lors du premier lancement ou dans le menu de configuration.
// @antifeature:fr-BE tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les morceaux que vous écoutez. Ces fonctionnalités peuvent être désactivées lors du premier lancement ou dans le menu de configuration.
// @antifeature:fr-CH tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les morceaux que vous écoutez. Ces fonctionnalités peuvent être désactivées lors du premier lancement ou dans le menu de configuration.
// @antifeature:fr-LU tracking Certains des services utilisés enregistreront temporairement votre adresse IP et les morceaux que vous écoutez. Ces fonctionnalités peuvent être désactivées lors du premier lancement ou dans le menu de configuration.
// @antifeature:hi-IN tracking कुछ उपयोग की गई सेवाएँ अस्थायी रूप से आपका आईपी पता और आपके द्वारा सुने जाने वाले गीतों को लॉग करेंगी। इन सुविधाओं को पहली बार लॉन्च करते समय या कॉन्फ़िग मेनू में अक्षम किया जा सकता है।
// @antifeature:hi    tracking कुछ उपयोग की गई सेवाएँ अस्थायी रूप से आपका आईपी पता और आपके द्वारा सुने जाने वाले गीतों को लॉग करेंगी। इन सुविधाओं को पहली बार लॉन्च करते समय या कॉन्फ़िग मेनू में अक्षम किया जा सकता है।
// @antifeature:hi-NP tracking कुछ उपयोग की गई सेवाएँ अस्थायी रूप से आपका आईपी पता और आपके द्वारा सुने जाने वाले गीतों को लॉग करेंगी। इन सुविधाओं को पहली बार लॉन्च करते समय या कॉन्फ़िग मेनू में अक्षम किया जा सकता है।
// @antifeature:ja-JP tracking 一部のサービスでは、利用者のIPアドレスや再生した楽曲が一時的に記録される場合があります。これらの機能は、初回起動時または設定メニューから無効にすることができます。
// @antifeature:ja    tracking 一部のサービスでは、利用者のIPアドレスや再生した楽曲が一時的に記録される場合があります。これらの機能は、初回起動時または設定メニューから無効にすることができます。
// @antifeature:pt-BR tracking Alguns dos serviços utilizados registrarão temporariamente seu endereço IP e as músicas que você ouvir. Esses recursos podem ser desativados na primeira vez que o aplicativo for iniciado ou no menu de configurações.
// @antifeature:pt    tracking Alguns dos serviços utilizados registrarão temporariamente seu endereço IP e as músicas que você ouvir. Esses recursos podem ser desativados na primeira vez que o aplicativo for iniciado ou no menu de configurações.
// @antifeature:pt-PT tracking Alguns dos serviços utilizados registrarão temporariamente seu endereço IP e as músicas que você ouvir. Esses recursos podem ser desativados na primeira vez que o aplicativo for iniciado ou no menu de configurações.
// @antifeature:tr-TR tracking Kullanılan hizmetlerin bazıları, IP adresinizi ve dinlediğiniz şarkıları geçici olarak kaydeder. Bu özellikler, uygulamayı ilk kez başlattığınızda veya ayarlar menüsünden devre dışı bırakılabilir.
// @antifeature:tr    tracking Kullanılan hizmetlerin bazıları, IP adresinizi ve dinlediğiniz şarkıları geçici olarak kaydeder. Bu özellikler, uygulamayı ilk kez başlattığınızda veya ayarlar menüsünden devre dışı bırakılabilir.
// @antifeature:zh-CN tracking 部分已使用的服务会暂时记录您的 IP 地址以及您收听的歌曲。这些功能可在首次启动时或通过设置菜单进行禁用。
// @antifeature:zh    tracking 部分已使用的服务会暂时记录您的 IP 地址以及您收听的歌曲。这些功能可在首次启动时或通过设置菜单进行禁用。
// @antifeature:zh-TW tracking 部分已使用的服务会暂时记录您的 IP 地址以及您收听的歌曲。这些功能可在首次启动时或通过设置菜单进行禁用。
// @antifeature:zh-HK tracking 部分已使用的服务会暂时记录您的 IP 地址以及您收听的歌曲。这些功能可在首次启动时或通过设置菜单进行禁用。
// @antifeature:zh-SG tracking 部分已使用的服务会暂时记录您的 IP 地址以及您收听的歌曲。这些功能可在首次启动时或通过设置菜单进行禁用。
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
  │ Build Time:    │ Wed, 09 Sep 2026 15:24:58 GMT │ (UTC timestamp of when the script was built)                               │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Build Number:  │ 893e5691                      │ (8-character SHA of the previous Git commit)                               │
  ├────────────────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────┤
  │ Build UID:     │ hYqWTCZt4D48                  │ (Random string appended to URLs to force-refresh cached assets)            │
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

