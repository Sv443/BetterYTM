// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           3.1.0
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-or-later
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@6bf3b0c8/assets/images/logo/logo_dev_48.png
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
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/refs/heads/main/dist/BetterYTM_compat.user.js
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

  - - - - - - [ Build Info ] - - - - - -
  Asset Source:    jsdelivr
  Build Mode:      development
  Build Time:      7/22/2026, 9:44:28 PM
  Build Number:    6bf3b0c8
  Build UID:       ykGYM5NmNp88
  Compatibility:   strict
  Target Branch:   develop
  Userscript Host: github

  Notes:
    - These values are integral to how BetterYTM works. They pertain to asset loading, default configs, cache invalidation, vite build config, and more.
    - Depending on where you installed the script and which version of it, the values might be vastly different.
    - To modify these values yourself, edit the userscript, search for 'rawConsts' and edit the values below that line.
      Beware that this makes it really easy to break the script, so back up the code by copying it first.

*/
