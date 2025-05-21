// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           2.2.0
// @description       Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-only
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@b457c651/assets/images/logo/logo_dev_48.png
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
// @description:de-DE Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de    Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-AT Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
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
// @connect           api.sv443.net
// @connect           github.com
// @connect           raw.githubusercontent.com
// @connect           youtube.com
// @connect           returnyoutubedislikeapi.com
// @noframes
// @updateURL         https://github.com/Sv443/BetterYTM/raw/refs/heads/main/dist/BetterYTM.meta.js
// @downloadURL       https://github.com/Sv443/BetterYTM/raw/refs/heads/main/dist/BetterYTM.user.js
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             GM.xmlHttpRequest
// @grant             GM.openInTab
// @grant             unsafeWindow
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/userutils@9.1.0/dist/index.global.js
// @require           https://cdn.jsdelivr.net/npm/marked@12.0.2/lib/marked.umd.js
// @require           https://cdn.jsdelivr.net/npm/compare-versions@6.1.1/lib/umd/index.js
// @require           https://cdn.jsdelivr.net/npm/dompurify@3.2.4
// @grant             GM.registerMenuCommand
// @grant             GM.listValues
// ==/UserScript==
