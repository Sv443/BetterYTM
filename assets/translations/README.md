<!--
  ‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️
  ‼️‼️‼️             THIS IS A GENERATED FILE             ‼️‼️‼️
  ‼️‼️‼️ all changes will be overwritten after next build ‼️‼️‼️
  ‼️‼️‼️ only edit in 'src/tools/tr-progress-template.md' ‼️‼️‼️
  ‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️
-->















## BetterYTM - Translations
To submit or edit a translation, please [follow this guide.](../../docs/contributing.md#translations)

<br>

### Translation progress:
| &nbsp; | Locale | Translated keys | Based on |
| :----: | ------ | --------------- | :------: |
|  | [`en-US`](./en-US.json) | `577` (default locale) |  |
| ✅ | [`de-DE`](./de-DE.json) | `577/577` (100%) | ─ |
|  | [`en-GB`](./en-GB.json) | `577/577` (100%) | `en-US` |
| ‼️ | [`es-ES`](./es-ES.json) | `503/577` (87.2%) | ─ |
| ‼️ | [`fr-FR`](./fr-FR.json) | `503/577` (87.2%) | ─ |
| ‼️ | [`hi-IN`](./hi-IN.json) | `503/577` (87.2%) | ─ |
| ‼️ | [`ja-JP`](./ja-JP.json) | `503/577` (87.2%) | ─ |
| ‼️ | [`pt-BR`](./pt-BR.json) | `503/577` (87.2%) | ─ |
| ‼️ | [`tr-TR`](./tr-TR.json) | `503/577` (87.2%) | ─ |
| ‼️ | [`zh-CN`](./zh-CN.json) | `503/577` (87.2%) | ─ |

> <sub>✅ Fully translated</sub><br>
> <sub>⚠ Almost fully translated</sub><br>
> <sub>‼️ Partially translated</sub><br>

<br>

> [!NOTE]  
> 
> If a translation is based on another translation, that means the keys from the base translation file are automatically applied if they are missing. This is used for locales that are very similar to each other, such as `en-GB` and `en-US`  
> This means to figure out which keys are untranslated, you will need to manually check against the base translation file.

<br>

### Missing keys:

<details><summary><code>es-ES</code> - 74 missing keys <i>(click to show)</i></summary><br>

| Key | English text |
| --- | ------------ |
| `config_menu_title_logo_tooltip` | `${scriptName} Logo` |
| `config_menu_focus_content_button_tooltip` | `Sets focus to the content of the menu.` |
| `reopen` | `Reopen` |
| `feature_changed_remount_config_menu` | `The changes you have made also affect the configuration menu.\nDo you want to reload it now? It will close and open again automatically.` |
| `clear` | `Clear` |
| `compress` | `Compress` |
| `decompress` | `Decompress` |
| `feature_is_privacy_sensitive` | `This feature is privacy-sensitive as it may expose personally identifiable information about you.` |
| `menu_command.reset_config.confirm` | `Reset the configuration to its default values?\nThis will automatically reload the page.` |
| `menu_command.gm_storage_delete_all.confirm` | `Clear all ${count} GM values?\nSee console for details.` |
| `menu_command.compress_or_decompress_text.alert.compressed` | `Compressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.alert.decompressed` | `Decompressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.prompt` | `Enter text to compress or decompress:` |
| `menu_command.import_full.prompt` | `Paste the content of the exported file to import data:` |
| `menu_command.import_full.confirm` | `Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?` |
| `menu_command.toggle_dev_treatments.confirm.enabled` | `Dev treatments are now enabled.\nDo you want to reload the page?` |
| `menu_command.toggle_dev_treatments.confirm.disabled` | `Dev treatments are now disabled.\nDo you want to reload the page?` |
| `menu_command.get_dev_plugin_token.alert.success` | `Developer plugin token for the current session:\n${devPluginToken}` |
| `menu_command.get_dev_plugin_token.alert.error` | `Error: Dev plugin not registered yet.\nPlease try again in a few seconds.` |
| `menu_command.unregister_all_plugins` | `Unregister all plugins` |
| `menu_command.reload_all_tabs.confirm` | `Reload all open tabs that are running ${scriptName}?` |
| `menu_command.get_performance_report.file_name` | `${scriptName} Performance Report @ ${dateTime}.json` |
| `menu_command.download_log_file.file_name` | `${scriptName} Log @ ${dateTime}.log` |
| `welcome_menu_language_tooltip` | `Change the language used throughout the script` |
| `welcome_menu_privacy_tooltip` | `Choose whether to turn off all privacy-sensitive features` |
| `privacy_mode.default.alert` | `Re-enabled all features that are on by default, including those that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.default` | `Standard Feature Selection` |
| `privacy_mode.enhanced.alert` | `Disabled all features that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.enhanced` | `Privacy-First` |
| `style_option.gradient` | `Gradient` |
| `style_option.opaque` | `Opaque` |
| `style_option.transparent` | `Transparent` |
| `interaction_lock_message` | `All keyboard and mouse interactions are currently locked.\nTo unlock them, press the hotkey ${hotkeyParts} or click the button below.` |
| `prompt_unregister` | `Unregister` |
| `click_to_unregister_tooltip` | `Click to unregister` |
| `plugin_list.no_permissions` | `Plugin has no permissions.` |
| `plugin_permissions_dialog.title` | `Plugin Permissions` |
| `plugin_permissions_dialog.description` | `The plugin '${pluginName}' is asking for all the permissions listed below. Hover your cursor over them for an explanation.\nNote that turning some of these permissions off may cause the plugin to stop working.` |
| `plugin_edit_permissions` | `Edit plugin permissions` |
| `plugin_unregister` | `Unregister plugin` |
| `plugin_intent_description.CreateModalDialogs` | `This plugin can create modal dialogs that take the focus away from the rest of the page.` |
| `plugin_intent_description.FullAccess` | `This plugin has unrestricted access to all functions and data and can fully act on BetterYTM's behalf.` |
| `plugin_error.plugin_not_registered` | `Error: the plugin '${pluginKey}' is not registered yet.` |
| `plugins_unregister_prompt-1` | `Are you sure you want to unregister the plugin? It will prompt to re-register itself when the page is reloaded, unless you manually uninstall it.` |
| `plugins_unregister_prompt-n` | `Are you sure you want to unregister ${pluginCount} plugins? They will prompt to re-register themselves when the page is reloaded, unless you manually uninstall them.` |
| `plugins_unregister_no_plugins_found` | `You haven't installed any plugins or they don't support this page.` |
| `plugins_unregistered_markdown-1` | `Successfully unregistered the following plugin:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for this plugin.` |
| `plugins_unregistered_markdown-n` | `Successfully unregistered the following plugins:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for these plugins.` |
| `cfg_menu_feature_category_header_tooltip` | `"${category}" Category` |
| `cfg_menu_feature_category_info_header_tooltip` | `"${section}" Section` |
| `feature_group_header.accessibility` | `Accessibility:` |
| `feature_group_header.searchableLists` | `Searchable Lists:` |
| `feature_group_header.lyricsSearchPromptHotkeyEnabled` | `Lyrics Search Dialog:` |
| `feature_group_header.interactionLockHotkey` | `Interaction Lock:` |
| `feature_desc.searchablePlaylistPopupsEnabled` | `Add a search bar to playlist popups` |
| `feature_desc.searchableSongListsEnabled` | `Add a search bar to generic song and video lists` |
| `feature_desc.volumeSliderLabelStyle` | `How to style the volume slider label` |
| `feature_desc.listButtonsStyle` | `How to style the buttons in the currently playing queue` |
| `feature_desc.aboveQueueHeaderStyle` | `How to style the header above the currently playing queue` |
| `feature_desc.songListTrackNumbersDomains` | `On which sites should the track numbers be shown?` |
| `feature_desc.lyricsSearchPromptHotkeyEnabled` | `Add a hotkey to open the lyrics search dialog` |
| `feature_desc.lyricsSearchPromptHotkey` | `Hotkey to open the lyrics search` |
| `feature_desc.interactionLockHotkeyEnabled` | `Add a hotkey to lock all interactions with the page` |
| `feature_desc.interactionLockHotkey` | `Hotkey to lock or unlock page interactions` |
| `feature_desc.interactionLockOverlayTimeout` | `How long to show an unlock hint for when an interaction is blocked - 0 to disable` |
| `feature_desc.verboseObservers` | `Log to the console whenever a document observer checks for and finds elements` |
| `feature_helptext.verboseObservers` | `This setting should only be enabled to debug the performance of BetterYTM features, as it will pollute the console a lot.` |
| `feature_desc.openWelcomeMenu` | `Open the welcome menu` |
| `feature_btn.openWelcomeMenu` | `Open` |
| `feature_btn.openWelcomeMenu_running` | `Opening...` |
| `feature_helptext.openWelcomeMenu` | `Closes the configuration menu and opens the welcome menu that was shown when you used BetterYTM for the first time.` |
| `feature_desc.configMenuFocusContentButtonEnabled` | `Add a button to the config menu title to set focus to the content` |
| `feature_desc.advancedMode` | `Show advanced settings` |
| `feature_helptext.advancedMode` | `After enabling this and reloading the menu, advanced settings that are hidden by default will be shown.\nThis is useful if you want to customize the script's behavior more deeply and don't care about an overcrowded menu.` |

<br></details>

<details><summary><code>fr-FR</code> - 74 missing keys <i>(click to show)</i></summary><br>

| Key | English text |
| --- | ------------ |
| `config_menu_title_logo_tooltip` | `${scriptName} Logo` |
| `config_menu_focus_content_button_tooltip` | `Sets focus to the content of the menu.` |
| `reopen` | `Reopen` |
| `feature_changed_remount_config_menu` | `The changes you have made also affect the configuration menu.\nDo you want to reload it now? It will close and open again automatically.` |
| `clear` | `Clear` |
| `compress` | `Compress` |
| `decompress` | `Decompress` |
| `feature_is_privacy_sensitive` | `This feature is privacy-sensitive as it may expose personally identifiable information about you.` |
| `menu_command.reset_config.confirm` | `Reset the configuration to its default values?\nThis will automatically reload the page.` |
| `menu_command.gm_storage_delete_all.confirm` | `Clear all ${count} GM values?\nSee console for details.` |
| `menu_command.compress_or_decompress_text.alert.compressed` | `Compressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.alert.decompressed` | `Decompressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.prompt` | `Enter text to compress or decompress:` |
| `menu_command.import_full.prompt` | `Paste the content of the exported file to import data:` |
| `menu_command.import_full.confirm` | `Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?` |
| `menu_command.toggle_dev_treatments.confirm.enabled` | `Dev treatments are now enabled.\nDo you want to reload the page?` |
| `menu_command.toggle_dev_treatments.confirm.disabled` | `Dev treatments are now disabled.\nDo you want to reload the page?` |
| `menu_command.get_dev_plugin_token.alert.success` | `Developer plugin token for the current session:\n${devPluginToken}` |
| `menu_command.get_dev_plugin_token.alert.error` | `Error: Dev plugin not registered yet.\nPlease try again in a few seconds.` |
| `menu_command.unregister_all_plugins` | `Unregister all plugins` |
| `menu_command.reload_all_tabs.confirm` | `Reload all open tabs that are running ${scriptName}?` |
| `menu_command.get_performance_report.file_name` | `${scriptName} Performance Report @ ${dateTime}.json` |
| `menu_command.download_log_file.file_name` | `${scriptName} Log @ ${dateTime}.log` |
| `welcome_menu_language_tooltip` | `Change the language used throughout the script` |
| `welcome_menu_privacy_tooltip` | `Choose whether to turn off all privacy-sensitive features` |
| `privacy_mode.default.alert` | `Re-enabled all features that are on by default, including those that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.default` | `Standard Feature Selection` |
| `privacy_mode.enhanced.alert` | `Disabled all features that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.enhanced` | `Privacy-First` |
| `style_option.gradient` | `Gradient` |
| `style_option.opaque` | `Opaque` |
| `style_option.transparent` | `Transparent` |
| `interaction_lock_message` | `All keyboard and mouse interactions are currently locked.\nTo unlock them, press the hotkey ${hotkeyParts} or click the button below.` |
| `prompt_unregister` | `Unregister` |
| `click_to_unregister_tooltip` | `Click to unregister` |
| `plugin_list.no_permissions` | `Plugin has no permissions.` |
| `plugin_permissions_dialog.title` | `Plugin Permissions` |
| `plugin_permissions_dialog.description` | `The plugin '${pluginName}' is asking for all the permissions listed below. Hover your cursor over them for an explanation.\nNote that turning some of these permissions off may cause the plugin to stop working.` |
| `plugin_edit_permissions` | `Edit plugin permissions` |
| `plugin_unregister` | `Unregister plugin` |
| `plugin_intent_description.CreateModalDialogs` | `This plugin can create modal dialogs that take the focus away from the rest of the page.` |
| `plugin_intent_description.FullAccess` | `This plugin has unrestricted access to all functions and data and can fully act on BetterYTM's behalf.` |
| `plugin_error.plugin_not_registered` | `Error: the plugin '${pluginKey}' is not registered yet.` |
| `plugins_unregister_prompt-1` | `Are you sure you want to unregister the plugin? It will prompt to re-register itself when the page is reloaded, unless you manually uninstall it.` |
| `plugins_unregister_prompt-n` | `Are you sure you want to unregister ${pluginCount} plugins? They will prompt to re-register themselves when the page is reloaded, unless you manually uninstall them.` |
| `plugins_unregister_no_plugins_found` | `You haven't installed any plugins or they don't support this page.` |
| `plugins_unregistered_markdown-1` | `Successfully unregistered the following plugin:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for this plugin.` |
| `plugins_unregistered_markdown-n` | `Successfully unregistered the following plugins:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for these plugins.` |
| `cfg_menu_feature_category_header_tooltip` | `"${category}" Category` |
| `cfg_menu_feature_category_info_header_tooltip` | `"${section}" Section` |
| `feature_group_header.accessibility` | `Accessibility:` |
| `feature_group_header.searchableLists` | `Searchable Lists:` |
| `feature_group_header.lyricsSearchPromptHotkeyEnabled` | `Lyrics Search Dialog:` |
| `feature_group_header.interactionLockHotkey` | `Interaction Lock:` |
| `feature_desc.searchablePlaylistPopupsEnabled` | `Add a search bar to playlist popups` |
| `feature_desc.searchableSongListsEnabled` | `Add a search bar to generic song and video lists` |
| `feature_desc.volumeSliderLabelStyle` | `How to style the volume slider label` |
| `feature_desc.listButtonsStyle` | `How to style the buttons in the currently playing queue` |
| `feature_desc.aboveQueueHeaderStyle` | `How to style the header above the currently playing queue` |
| `feature_desc.songListTrackNumbersDomains` | `On which sites should the track numbers be shown?` |
| `feature_desc.lyricsSearchPromptHotkeyEnabled` | `Add a hotkey to open the lyrics search dialog` |
| `feature_desc.lyricsSearchPromptHotkey` | `Hotkey to open the lyrics search` |
| `feature_desc.interactionLockHotkeyEnabled` | `Add a hotkey to lock all interactions with the page` |
| `feature_desc.interactionLockHotkey` | `Hotkey to lock or unlock page interactions` |
| `feature_desc.interactionLockOverlayTimeout` | `How long to show an unlock hint for when an interaction is blocked - 0 to disable` |
| `feature_desc.verboseObservers` | `Log to the console whenever a document observer checks for and finds elements` |
| `feature_helptext.verboseObservers` | `This setting should only be enabled to debug the performance of BetterYTM features, as it will pollute the console a lot.` |
| `feature_desc.openWelcomeMenu` | `Open the welcome menu` |
| `feature_btn.openWelcomeMenu` | `Open` |
| `feature_btn.openWelcomeMenu_running` | `Opening...` |
| `feature_helptext.openWelcomeMenu` | `Closes the configuration menu and opens the welcome menu that was shown when you used BetterYTM for the first time.` |
| `feature_desc.configMenuFocusContentButtonEnabled` | `Add a button to the config menu title to set focus to the content` |
| `feature_desc.advancedMode` | `Show advanced settings` |
| `feature_helptext.advancedMode` | `After enabling this and reloading the menu, advanced settings that are hidden by default will be shown.\nThis is useful if you want to customize the script's behavior more deeply and don't care about an overcrowded menu.` |

<br></details>

<details><summary><code>hi-IN</code> - 74 missing keys <i>(click to show)</i></summary><br>

| Key | English text |
| --- | ------------ |
| `config_menu_title_logo_tooltip` | `${scriptName} Logo` |
| `config_menu_focus_content_button_tooltip` | `Sets focus to the content of the menu.` |
| `reopen` | `Reopen` |
| `feature_changed_remount_config_menu` | `The changes you have made also affect the configuration menu.\nDo you want to reload it now? It will close and open again automatically.` |
| `clear` | `Clear` |
| `compress` | `Compress` |
| `decompress` | `Decompress` |
| `feature_is_privacy_sensitive` | `This feature is privacy-sensitive as it may expose personally identifiable information about you.` |
| `menu_command.reset_config.confirm` | `Reset the configuration to its default values?\nThis will automatically reload the page.` |
| `menu_command.gm_storage_delete_all.confirm` | `Clear all ${count} GM values?\nSee console for details.` |
| `menu_command.compress_or_decompress_text.alert.compressed` | `Compressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.alert.decompressed` | `Decompressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.prompt` | `Enter text to compress or decompress:` |
| `menu_command.import_full.prompt` | `Paste the content of the exported file to import data:` |
| `menu_command.import_full.confirm` | `Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?` |
| `menu_command.toggle_dev_treatments.confirm.enabled` | `Dev treatments are now enabled.\nDo you want to reload the page?` |
| `menu_command.toggle_dev_treatments.confirm.disabled` | `Dev treatments are now disabled.\nDo you want to reload the page?` |
| `menu_command.get_dev_plugin_token.alert.success` | `Developer plugin token for the current session:\n${devPluginToken}` |
| `menu_command.get_dev_plugin_token.alert.error` | `Error: Dev plugin not registered yet.\nPlease try again in a few seconds.` |
| `menu_command.unregister_all_plugins` | `Unregister all plugins` |
| `menu_command.reload_all_tabs.confirm` | `Reload all open tabs that are running ${scriptName}?` |
| `menu_command.get_performance_report.file_name` | `${scriptName} Performance Report @ ${dateTime}.json` |
| `menu_command.download_log_file.file_name` | `${scriptName} Log @ ${dateTime}.log` |
| `welcome_menu_language_tooltip` | `Change the language used throughout the script` |
| `welcome_menu_privacy_tooltip` | `Choose whether to turn off all privacy-sensitive features` |
| `privacy_mode.default.alert` | `Re-enabled all features that are on by default, including those that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.default` | `Standard Feature Selection` |
| `privacy_mode.enhanced.alert` | `Disabled all features that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.enhanced` | `Privacy-First` |
| `style_option.gradient` | `Gradient` |
| `style_option.opaque` | `Opaque` |
| `style_option.transparent` | `Transparent` |
| `interaction_lock_message` | `All keyboard and mouse interactions are currently locked.\nTo unlock them, press the hotkey ${hotkeyParts} or click the button below.` |
| `prompt_unregister` | `Unregister` |
| `click_to_unregister_tooltip` | `Click to unregister` |
| `plugin_list.no_permissions` | `Plugin has no permissions.` |
| `plugin_permissions_dialog.title` | `Plugin Permissions` |
| `plugin_permissions_dialog.description` | `The plugin '${pluginName}' is asking for all the permissions listed below. Hover your cursor over them for an explanation.\nNote that turning some of these permissions off may cause the plugin to stop working.` |
| `plugin_edit_permissions` | `Edit plugin permissions` |
| `plugin_unregister` | `Unregister plugin` |
| `plugin_intent_description.CreateModalDialogs` | `This plugin can create modal dialogs that take the focus away from the rest of the page.` |
| `plugin_intent_description.FullAccess` | `This plugin has unrestricted access to all functions and data and can fully act on BetterYTM's behalf.` |
| `plugin_error.plugin_not_registered` | `Error: the plugin '${pluginKey}' is not registered yet.` |
| `plugins_unregister_prompt-1` | `Are you sure you want to unregister the plugin? It will prompt to re-register itself when the page is reloaded, unless you manually uninstall it.` |
| `plugins_unregister_prompt-n` | `Are you sure you want to unregister ${pluginCount} plugins? They will prompt to re-register themselves when the page is reloaded, unless you manually uninstall them.` |
| `plugins_unregister_no_plugins_found` | `You haven't installed any plugins or they don't support this page.` |
| `plugins_unregistered_markdown-1` | `Successfully unregistered the following plugin:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for this plugin.` |
| `plugins_unregistered_markdown-n` | `Successfully unregistered the following plugins:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for these plugins.` |
| `cfg_menu_feature_category_header_tooltip` | `"${category}" Category` |
| `cfg_menu_feature_category_info_header_tooltip` | `"${section}" Section` |
| `feature_group_header.accessibility` | `Accessibility:` |
| `feature_group_header.searchableLists` | `Searchable Lists:` |
| `feature_group_header.lyricsSearchPromptHotkeyEnabled` | `Lyrics Search Dialog:` |
| `feature_group_header.interactionLockHotkey` | `Interaction Lock:` |
| `feature_desc.searchablePlaylistPopupsEnabled` | `Add a search bar to playlist popups` |
| `feature_desc.searchableSongListsEnabled` | `Add a search bar to generic song and video lists` |
| `feature_desc.volumeSliderLabelStyle` | `How to style the volume slider label` |
| `feature_desc.listButtonsStyle` | `How to style the buttons in the currently playing queue` |
| `feature_desc.aboveQueueHeaderStyle` | `How to style the header above the currently playing queue` |
| `feature_desc.songListTrackNumbersDomains` | `On which sites should the track numbers be shown?` |
| `feature_desc.lyricsSearchPromptHotkeyEnabled` | `Add a hotkey to open the lyrics search dialog` |
| `feature_desc.lyricsSearchPromptHotkey` | `Hotkey to open the lyrics search` |
| `feature_desc.interactionLockHotkeyEnabled` | `Add a hotkey to lock all interactions with the page` |
| `feature_desc.interactionLockHotkey` | `Hotkey to lock or unlock page interactions` |
| `feature_desc.interactionLockOverlayTimeout` | `How long to show an unlock hint for when an interaction is blocked - 0 to disable` |
| `feature_desc.verboseObservers` | `Log to the console whenever a document observer checks for and finds elements` |
| `feature_helptext.verboseObservers` | `This setting should only be enabled to debug the performance of BetterYTM features, as it will pollute the console a lot.` |
| `feature_desc.openWelcomeMenu` | `Open the welcome menu` |
| `feature_btn.openWelcomeMenu` | `Open` |
| `feature_btn.openWelcomeMenu_running` | `Opening...` |
| `feature_helptext.openWelcomeMenu` | `Closes the configuration menu and opens the welcome menu that was shown when you used BetterYTM for the first time.` |
| `feature_desc.configMenuFocusContentButtonEnabled` | `Add a button to the config menu title to set focus to the content` |
| `feature_desc.advancedMode` | `Show advanced settings` |
| `feature_helptext.advancedMode` | `After enabling this and reloading the menu, advanced settings that are hidden by default will be shown.\nThis is useful if you want to customize the script's behavior more deeply and don't care about an overcrowded menu.` |

<br></details>

<details><summary><code>ja-JP</code> - 74 missing keys <i>(click to show)</i></summary><br>

| Key | English text |
| --- | ------------ |
| `config_menu_title_logo_tooltip` | `${scriptName} Logo` |
| `config_menu_focus_content_button_tooltip` | `Sets focus to the content of the menu.` |
| `reopen` | `Reopen` |
| `feature_changed_remount_config_menu` | `The changes you have made also affect the configuration menu.\nDo you want to reload it now? It will close and open again automatically.` |
| `clear` | `Clear` |
| `compress` | `Compress` |
| `decompress` | `Decompress` |
| `feature_is_privacy_sensitive` | `This feature is privacy-sensitive as it may expose personally identifiable information about you.` |
| `menu_command.reset_config.confirm` | `Reset the configuration to its default values?\nThis will automatically reload the page.` |
| `menu_command.gm_storage_delete_all.confirm` | `Clear all ${count} GM values?\nSee console for details.` |
| `menu_command.compress_or_decompress_text.alert.compressed` | `Compressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.alert.decompressed` | `Decompressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.prompt` | `Enter text to compress or decompress:` |
| `menu_command.import_full.prompt` | `Paste the content of the exported file to import data:` |
| `menu_command.import_full.confirm` | `Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?` |
| `menu_command.toggle_dev_treatments.confirm.enabled` | `Dev treatments are now enabled.\nDo you want to reload the page?` |
| `menu_command.toggle_dev_treatments.confirm.disabled` | `Dev treatments are now disabled.\nDo you want to reload the page?` |
| `menu_command.get_dev_plugin_token.alert.success` | `Developer plugin token for the current session:\n${devPluginToken}` |
| `menu_command.get_dev_plugin_token.alert.error` | `Error: Dev plugin not registered yet.\nPlease try again in a few seconds.` |
| `menu_command.unregister_all_plugins` | `Unregister all plugins` |
| `menu_command.reload_all_tabs.confirm` | `Reload all open tabs that are running ${scriptName}?` |
| `menu_command.get_performance_report.file_name` | `${scriptName} Performance Report @ ${dateTime}.json` |
| `menu_command.download_log_file.file_name` | `${scriptName} Log @ ${dateTime}.log` |
| `welcome_menu_language_tooltip` | `Change the language used throughout the script` |
| `welcome_menu_privacy_tooltip` | `Choose whether to turn off all privacy-sensitive features` |
| `privacy_mode.default.alert` | `Re-enabled all features that are on by default, including those that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.default` | `Standard Feature Selection` |
| `privacy_mode.enhanced.alert` | `Disabled all features that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.enhanced` | `Privacy-First` |
| `style_option.gradient` | `Gradient` |
| `style_option.opaque` | `Opaque` |
| `style_option.transparent` | `Transparent` |
| `interaction_lock_message` | `All keyboard and mouse interactions are currently locked.\nTo unlock them, press the hotkey ${hotkeyParts} or click the button below.` |
| `prompt_unregister` | `Unregister` |
| `click_to_unregister_tooltip` | `Click to unregister` |
| `plugin_list.no_permissions` | `Plugin has no permissions.` |
| `plugin_permissions_dialog.title` | `Plugin Permissions` |
| `plugin_permissions_dialog.description` | `The plugin '${pluginName}' is asking for all the permissions listed below. Hover your cursor over them for an explanation.\nNote that turning some of these permissions off may cause the plugin to stop working.` |
| `plugin_edit_permissions` | `Edit plugin permissions` |
| `plugin_unregister` | `Unregister plugin` |
| `plugin_intent_description.CreateModalDialogs` | `This plugin can create modal dialogs that take the focus away from the rest of the page.` |
| `plugin_intent_description.FullAccess` | `This plugin has unrestricted access to all functions and data and can fully act on BetterYTM's behalf.` |
| `plugin_error.plugin_not_registered` | `Error: the plugin '${pluginKey}' is not registered yet.` |
| `plugins_unregister_prompt-1` | `Are you sure you want to unregister the plugin? It will prompt to re-register itself when the page is reloaded, unless you manually uninstall it.` |
| `plugins_unregister_prompt-n` | `Are you sure you want to unregister ${pluginCount} plugins? They will prompt to re-register themselves when the page is reloaded, unless you manually uninstall them.` |
| `plugins_unregister_no_plugins_found` | `You haven't installed any plugins or they don't support this page.` |
| `plugins_unregistered_markdown-1` | `Successfully unregistered the following plugin:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for this plugin.` |
| `plugins_unregistered_markdown-n` | `Successfully unregistered the following plugins:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for these plugins.` |
| `cfg_menu_feature_category_header_tooltip` | `"${category}" Category` |
| `cfg_menu_feature_category_info_header_tooltip` | `"${section}" Section` |
| `feature_group_header.accessibility` | `Accessibility:` |
| `feature_group_header.searchableLists` | `Searchable Lists:` |
| `feature_group_header.lyricsSearchPromptHotkeyEnabled` | `Lyrics Search Dialog:` |
| `feature_group_header.interactionLockHotkey` | `Interaction Lock:` |
| `feature_desc.searchablePlaylistPopupsEnabled` | `Add a search bar to playlist popups` |
| `feature_desc.searchableSongListsEnabled` | `Add a search bar to generic song and video lists` |
| `feature_desc.volumeSliderLabelStyle` | `How to style the volume slider label` |
| `feature_desc.listButtonsStyle` | `How to style the buttons in the currently playing queue` |
| `feature_desc.aboveQueueHeaderStyle` | `How to style the header above the currently playing queue` |
| `feature_desc.songListTrackNumbersDomains` | `On which sites should the track numbers be shown?` |
| `feature_desc.lyricsSearchPromptHotkeyEnabled` | `Add a hotkey to open the lyrics search dialog` |
| `feature_desc.lyricsSearchPromptHotkey` | `Hotkey to open the lyrics search` |
| `feature_desc.interactionLockHotkeyEnabled` | `Add a hotkey to lock all interactions with the page` |
| `feature_desc.interactionLockHotkey` | `Hotkey to lock or unlock page interactions` |
| `feature_desc.interactionLockOverlayTimeout` | `How long to show an unlock hint for when an interaction is blocked - 0 to disable` |
| `feature_desc.verboseObservers` | `Log to the console whenever a document observer checks for and finds elements` |
| `feature_helptext.verboseObservers` | `This setting should only be enabled to debug the performance of BetterYTM features, as it will pollute the console a lot.` |
| `feature_desc.openWelcomeMenu` | `Open the welcome menu` |
| `feature_btn.openWelcomeMenu` | `Open` |
| `feature_btn.openWelcomeMenu_running` | `Opening...` |
| `feature_helptext.openWelcomeMenu` | `Closes the configuration menu and opens the welcome menu that was shown when you used BetterYTM for the first time.` |
| `feature_desc.configMenuFocusContentButtonEnabled` | `Add a button to the config menu title to set focus to the content` |
| `feature_desc.advancedMode` | `Show advanced settings` |
| `feature_helptext.advancedMode` | `After enabling this and reloading the menu, advanced settings that are hidden by default will be shown.\nThis is useful if you want to customize the script's behavior more deeply and don't care about an overcrowded menu.` |

<br></details>

<details><summary><code>pt-BR</code> - 74 missing keys <i>(click to show)</i></summary><br>

| Key | English text |
| --- | ------------ |
| `config_menu_title_logo_tooltip` | `${scriptName} Logo` |
| `config_menu_focus_content_button_tooltip` | `Sets focus to the content of the menu.` |
| `reopen` | `Reopen` |
| `feature_changed_remount_config_menu` | `The changes you have made also affect the configuration menu.\nDo you want to reload it now? It will close and open again automatically.` |
| `clear` | `Clear` |
| `compress` | `Compress` |
| `decompress` | `Decompress` |
| `feature_is_privacy_sensitive` | `This feature is privacy-sensitive as it may expose personally identifiable information about you.` |
| `menu_command.reset_config.confirm` | `Reset the configuration to its default values?\nThis will automatically reload the page.` |
| `menu_command.gm_storage_delete_all.confirm` | `Clear all ${count} GM values?\nSee console for details.` |
| `menu_command.compress_or_decompress_text.alert.compressed` | `Compressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.alert.decompressed` | `Decompressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.prompt` | `Enter text to compress or decompress:` |
| `menu_command.import_full.prompt` | `Paste the content of the exported file to import data:` |
| `menu_command.import_full.confirm` | `Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?` |
| `menu_command.toggle_dev_treatments.confirm.enabled` | `Dev treatments are now enabled.\nDo you want to reload the page?` |
| `menu_command.toggle_dev_treatments.confirm.disabled` | `Dev treatments are now disabled.\nDo you want to reload the page?` |
| `menu_command.get_dev_plugin_token.alert.success` | `Developer plugin token for the current session:\n${devPluginToken}` |
| `menu_command.get_dev_plugin_token.alert.error` | `Error: Dev plugin not registered yet.\nPlease try again in a few seconds.` |
| `menu_command.unregister_all_plugins` | `Unregister all plugins` |
| `menu_command.reload_all_tabs.confirm` | `Reload all open tabs that are running ${scriptName}?` |
| `menu_command.get_performance_report.file_name` | `${scriptName} Performance Report @ ${dateTime}.json` |
| `menu_command.download_log_file.file_name` | `${scriptName} Log @ ${dateTime}.log` |
| `welcome_menu_language_tooltip` | `Change the language used throughout the script` |
| `welcome_menu_privacy_tooltip` | `Choose whether to turn off all privacy-sensitive features` |
| `privacy_mode.default.alert` | `Re-enabled all features that are on by default, including those that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.default` | `Standard Feature Selection` |
| `privacy_mode.enhanced.alert` | `Disabled all features that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.enhanced` | `Privacy-First` |
| `style_option.gradient` | `Gradient` |
| `style_option.opaque` | `Opaque` |
| `style_option.transparent` | `Transparent` |
| `interaction_lock_message` | `All keyboard and mouse interactions are currently locked.\nTo unlock them, press the hotkey ${hotkeyParts} or click the button below.` |
| `prompt_unregister` | `Unregister` |
| `click_to_unregister_tooltip` | `Click to unregister` |
| `plugin_list.no_permissions` | `Plugin has no permissions.` |
| `plugin_permissions_dialog.title` | `Plugin Permissions` |
| `plugin_permissions_dialog.description` | `The plugin '${pluginName}' is asking for all the permissions listed below. Hover your cursor over them for an explanation.\nNote that turning some of these permissions off may cause the plugin to stop working.` |
| `plugin_edit_permissions` | `Edit plugin permissions` |
| `plugin_unregister` | `Unregister plugin` |
| `plugin_intent_description.CreateModalDialogs` | `This plugin can create modal dialogs that take the focus away from the rest of the page.` |
| `plugin_intent_description.FullAccess` | `This plugin has unrestricted access to all functions and data and can fully act on BetterYTM's behalf.` |
| `plugin_error.plugin_not_registered` | `Error: the plugin '${pluginKey}' is not registered yet.` |
| `plugins_unregister_prompt-1` | `Are you sure you want to unregister the plugin? It will prompt to re-register itself when the page is reloaded, unless you manually uninstall it.` |
| `plugins_unregister_prompt-n` | `Are you sure you want to unregister ${pluginCount} plugins? They will prompt to re-register themselves when the page is reloaded, unless you manually uninstall them.` |
| `plugins_unregister_no_plugins_found` | `You haven't installed any plugins or they don't support this page.` |
| `plugins_unregistered_markdown-1` | `Successfully unregistered the following plugin:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for this plugin.` |
| `plugins_unregistered_markdown-n` | `Successfully unregistered the following plugins:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for these plugins.` |
| `cfg_menu_feature_category_header_tooltip` | `"${category}" Category` |
| `cfg_menu_feature_category_info_header_tooltip` | `"${section}" Section` |
| `feature_group_header.accessibility` | `Accessibility:` |
| `feature_group_header.searchableLists` | `Searchable Lists:` |
| `feature_group_header.lyricsSearchPromptHotkeyEnabled` | `Lyrics Search Dialog:` |
| `feature_group_header.interactionLockHotkey` | `Interaction Lock:` |
| `feature_desc.searchablePlaylistPopupsEnabled` | `Add a search bar to playlist popups` |
| `feature_desc.searchableSongListsEnabled` | `Add a search bar to generic song and video lists` |
| `feature_desc.volumeSliderLabelStyle` | `How to style the volume slider label` |
| `feature_desc.listButtonsStyle` | `How to style the buttons in the currently playing queue` |
| `feature_desc.aboveQueueHeaderStyle` | `How to style the header above the currently playing queue` |
| `feature_desc.songListTrackNumbersDomains` | `On which sites should the track numbers be shown?` |
| `feature_desc.lyricsSearchPromptHotkeyEnabled` | `Add a hotkey to open the lyrics search dialog` |
| `feature_desc.lyricsSearchPromptHotkey` | `Hotkey to open the lyrics search` |
| `feature_desc.interactionLockHotkeyEnabled` | `Add a hotkey to lock all interactions with the page` |
| `feature_desc.interactionLockHotkey` | `Hotkey to lock or unlock page interactions` |
| `feature_desc.interactionLockOverlayTimeout` | `How long to show an unlock hint for when an interaction is blocked - 0 to disable` |
| `feature_desc.verboseObservers` | `Log to the console whenever a document observer checks for and finds elements` |
| `feature_helptext.verboseObservers` | `This setting should only be enabled to debug the performance of BetterYTM features, as it will pollute the console a lot.` |
| `feature_desc.openWelcomeMenu` | `Open the welcome menu` |
| `feature_btn.openWelcomeMenu` | `Open` |
| `feature_btn.openWelcomeMenu_running` | `Opening...` |
| `feature_helptext.openWelcomeMenu` | `Closes the configuration menu and opens the welcome menu that was shown when you used BetterYTM for the first time.` |
| `feature_desc.configMenuFocusContentButtonEnabled` | `Add a button to the config menu title to set focus to the content` |
| `feature_desc.advancedMode` | `Show advanced settings` |
| `feature_helptext.advancedMode` | `After enabling this and reloading the menu, advanced settings that are hidden by default will be shown.\nThis is useful if you want to customize the script's behavior more deeply and don't care about an overcrowded menu.` |

<br></details>

<details><summary><code>tr-TR</code> - 74 missing keys <i>(click to show)</i></summary><br>

| Key | English text |
| --- | ------------ |
| `config_menu_title_logo_tooltip` | `${scriptName} Logo` |
| `config_menu_focus_content_button_tooltip` | `Sets focus to the content of the menu.` |
| `reopen` | `Reopen` |
| `feature_changed_remount_config_menu` | `The changes you have made also affect the configuration menu.\nDo you want to reload it now? It will close and open again automatically.` |
| `clear` | `Clear` |
| `compress` | `Compress` |
| `decompress` | `Decompress` |
| `feature_is_privacy_sensitive` | `This feature is privacy-sensitive as it may expose personally identifiable information about you.` |
| `menu_command.reset_config.confirm` | `Reset the configuration to its default values?\nThis will automatically reload the page.` |
| `menu_command.gm_storage_delete_all.confirm` | `Clear all ${count} GM values?\nSee console for details.` |
| `menu_command.compress_or_decompress_text.alert.compressed` | `Compressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.alert.decompressed` | `Decompressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.prompt` | `Enter text to compress or decompress:` |
| `menu_command.import_full.prompt` | `Paste the content of the exported file to import data:` |
| `menu_command.import_full.confirm` | `Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?` |
| `menu_command.toggle_dev_treatments.confirm.enabled` | `Dev treatments are now enabled.\nDo you want to reload the page?` |
| `menu_command.toggle_dev_treatments.confirm.disabled` | `Dev treatments are now disabled.\nDo you want to reload the page?` |
| `menu_command.get_dev_plugin_token.alert.success` | `Developer plugin token for the current session:\n${devPluginToken}` |
| `menu_command.get_dev_plugin_token.alert.error` | `Error: Dev plugin not registered yet.\nPlease try again in a few seconds.` |
| `menu_command.unregister_all_plugins` | `Unregister all plugins` |
| `menu_command.reload_all_tabs.confirm` | `Reload all open tabs that are running ${scriptName}?` |
| `menu_command.get_performance_report.file_name` | `${scriptName} Performance Report @ ${dateTime}.json` |
| `menu_command.download_log_file.file_name` | `${scriptName} Log @ ${dateTime}.log` |
| `welcome_menu_language_tooltip` | `Change the language used throughout the script` |
| `welcome_menu_privacy_tooltip` | `Choose whether to turn off all privacy-sensitive features` |
| `privacy_mode.default.alert` | `Re-enabled all features that are on by default, including those that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.default` | `Standard Feature Selection` |
| `privacy_mode.enhanced.alert` | `Disabled all features that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.enhanced` | `Privacy-First` |
| `style_option.gradient` | `Gradient` |
| `style_option.opaque` | `Opaque` |
| `style_option.transparent` | `Transparent` |
| `interaction_lock_message` | `All keyboard and mouse interactions are currently locked.\nTo unlock them, press the hotkey ${hotkeyParts} or click the button below.` |
| `prompt_unregister` | `Unregister` |
| `click_to_unregister_tooltip` | `Click to unregister` |
| `plugin_list.no_permissions` | `Plugin has no permissions.` |
| `plugin_permissions_dialog.title` | `Plugin Permissions` |
| `plugin_permissions_dialog.description` | `The plugin '${pluginName}' is asking for all the permissions listed below. Hover your cursor over them for an explanation.\nNote that turning some of these permissions off may cause the plugin to stop working.` |
| `plugin_edit_permissions` | `Edit plugin permissions` |
| `plugin_unregister` | `Unregister plugin` |
| `plugin_intent_description.CreateModalDialogs` | `This plugin can create modal dialogs that take the focus away from the rest of the page.` |
| `plugin_intent_description.FullAccess` | `This plugin has unrestricted access to all functions and data and can fully act on BetterYTM's behalf.` |
| `plugin_error.plugin_not_registered` | `Error: the plugin '${pluginKey}' is not registered yet.` |
| `plugins_unregister_prompt-1` | `Are you sure you want to unregister the plugin? It will prompt to re-register itself when the page is reloaded, unless you manually uninstall it.` |
| `plugins_unregister_prompt-n` | `Are you sure you want to unregister ${pluginCount} plugins? They will prompt to re-register themselves when the page is reloaded, unless you manually uninstall them.` |
| `plugins_unregister_no_plugins_found` | `You haven't installed any plugins or they don't support this page.` |
| `plugins_unregistered_markdown-1` | `Successfully unregistered the following plugin:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for this plugin.` |
| `plugins_unregistered_markdown-n` | `Successfully unregistered the following plugins:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for these plugins.` |
| `cfg_menu_feature_category_header_tooltip` | `"${category}" Category` |
| `cfg_menu_feature_category_info_header_tooltip` | `"${section}" Section` |
| `feature_group_header.accessibility` | `Accessibility:` |
| `feature_group_header.searchableLists` | `Searchable Lists:` |
| `feature_group_header.lyricsSearchPromptHotkeyEnabled` | `Lyrics Search Dialog:` |
| `feature_group_header.interactionLockHotkey` | `Interaction Lock:` |
| `feature_desc.searchablePlaylistPopupsEnabled` | `Add a search bar to playlist popups` |
| `feature_desc.searchableSongListsEnabled` | `Add a search bar to generic song and video lists` |
| `feature_desc.volumeSliderLabelStyle` | `How to style the volume slider label` |
| `feature_desc.listButtonsStyle` | `How to style the buttons in the currently playing queue` |
| `feature_desc.aboveQueueHeaderStyle` | `How to style the header above the currently playing queue` |
| `feature_desc.songListTrackNumbersDomains` | `On which sites should the track numbers be shown?` |
| `feature_desc.lyricsSearchPromptHotkeyEnabled` | `Add a hotkey to open the lyrics search dialog` |
| `feature_desc.lyricsSearchPromptHotkey` | `Hotkey to open the lyrics search` |
| `feature_desc.interactionLockHotkeyEnabled` | `Add a hotkey to lock all interactions with the page` |
| `feature_desc.interactionLockHotkey` | `Hotkey to lock or unlock page interactions` |
| `feature_desc.interactionLockOverlayTimeout` | `How long to show an unlock hint for when an interaction is blocked - 0 to disable` |
| `feature_desc.verboseObservers` | `Log to the console whenever a document observer checks for and finds elements` |
| `feature_helptext.verboseObservers` | `This setting should only be enabled to debug the performance of BetterYTM features, as it will pollute the console a lot.` |
| `feature_desc.openWelcomeMenu` | `Open the welcome menu` |
| `feature_btn.openWelcomeMenu` | `Open` |
| `feature_btn.openWelcomeMenu_running` | `Opening...` |
| `feature_helptext.openWelcomeMenu` | `Closes the configuration menu and opens the welcome menu that was shown when you used BetterYTM for the first time.` |
| `feature_desc.configMenuFocusContentButtonEnabled` | `Add a button to the config menu title to set focus to the content` |
| `feature_desc.advancedMode` | `Show advanced settings` |
| `feature_helptext.advancedMode` | `After enabling this and reloading the menu, advanced settings that are hidden by default will be shown.\nThis is useful if you want to customize the script's behavior more deeply and don't care about an overcrowded menu.` |

<br></details>

<details><summary><code>zh-CN</code> - 74 missing keys <i>(click to show)</i></summary><br>

| Key | English text |
| --- | ------------ |
| `config_menu_title_logo_tooltip` | `${scriptName} Logo` |
| `config_menu_focus_content_button_tooltip` | `Sets focus to the content of the menu.` |
| `reopen` | `Reopen` |
| `feature_changed_remount_config_menu` | `The changes you have made also affect the configuration menu.\nDo you want to reload it now? It will close and open again automatically.` |
| `clear` | `Clear` |
| `compress` | `Compress` |
| `decompress` | `Decompress` |
| `feature_is_privacy_sensitive` | `This feature is privacy-sensitive as it may expose personally identifiable information about you.` |
| `menu_command.reset_config.confirm` | `Reset the configuration to its default values?\nThis will automatically reload the page.` |
| `menu_command.gm_storage_delete_all.confirm` | `Clear all ${count} GM values?\nSee console for details.` |
| `menu_command.compress_or_decompress_text.alert.compressed` | `Compressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.alert.decompressed` | `Decompressed value (${initialLength} chars -> ${resultLength} chars):\n${result}` |
| `menu_command.compress_or_decompress_text.prompt` | `Enter text to compress or decompress:` |
| `menu_command.import_full.prompt` | `Paste the content of the exported file to import data:` |
| `menu_command.import_full.confirm` | `Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?` |
| `menu_command.toggle_dev_treatments.confirm.enabled` | `Dev treatments are now enabled.\nDo you want to reload the page?` |
| `menu_command.toggle_dev_treatments.confirm.disabled` | `Dev treatments are now disabled.\nDo you want to reload the page?` |
| `menu_command.get_dev_plugin_token.alert.success` | `Developer plugin token for the current session:\n${devPluginToken}` |
| `menu_command.get_dev_plugin_token.alert.error` | `Error: Dev plugin not registered yet.\nPlease try again in a few seconds.` |
| `menu_command.unregister_all_plugins` | `Unregister all plugins` |
| `menu_command.reload_all_tabs.confirm` | `Reload all open tabs that are running ${scriptName}?` |
| `menu_command.get_performance_report.file_name` | `${scriptName} Performance Report @ ${dateTime}.json` |
| `menu_command.download_log_file.file_name` | `${scriptName} Log @ ${dateTime}.log` |
| `welcome_menu_language_tooltip` | `Change the language used throughout the script` |
| `welcome_menu_privacy_tooltip` | `Choose whether to turn off all privacy-sensitive features` |
| `privacy_mode.default.alert` | `Re-enabled all features that are on by default, including those that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.default` | `Standard Feature Selection` |
| `privacy_mode.enhanced.alert` | `Disabled all features that may expose potentially sensitive information about you, like your IP address.` |
| `privacy_mode.enhanced` | `Privacy-First` |
| `style_option.gradient` | `Gradient` |
| `style_option.opaque` | `Opaque` |
| `style_option.transparent` | `Transparent` |
| `interaction_lock_message` | `All keyboard and mouse interactions are currently locked.\nTo unlock them, press the hotkey ${hotkeyParts} or click the button below.` |
| `prompt_unregister` | `Unregister` |
| `click_to_unregister_tooltip` | `Click to unregister` |
| `plugin_list.no_permissions` | `Plugin has no permissions.` |
| `plugin_permissions_dialog.title` | `Plugin Permissions` |
| `plugin_permissions_dialog.description` | `The plugin '${pluginName}' is asking for all the permissions listed below. Hover your cursor over them for an explanation.\nNote that turning some of these permissions off may cause the plugin to stop working.` |
| `plugin_edit_permissions` | `Edit plugin permissions` |
| `plugin_unregister` | `Unregister plugin` |
| `plugin_intent_description.CreateModalDialogs` | `This plugin can create modal dialogs that take the focus away from the rest of the page.` |
| `plugin_intent_description.FullAccess` | `This plugin has unrestricted access to all functions and data and can fully act on BetterYTM's behalf.` |
| `plugin_error.plugin_not_registered` | `Error: the plugin '${pluginKey}' is not registered yet.` |
| `plugins_unregister_prompt-1` | `Are you sure you want to unregister the plugin? It will prompt to re-register itself when the page is reloaded, unless you manually uninstall it.` |
| `plugins_unregister_prompt-n` | `Are you sure you want to unregister ${pluginCount} plugins? They will prompt to re-register themselves when the page is reloaded, unless you manually uninstall them.` |
| `plugins_unregister_no_plugins_found` | `You haven't installed any plugins or they don't support this page.` |
| `plugins_unregistered_markdown-1` | `Successfully unregistered the following plugin:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for this plugin.` |
| `plugins_unregistered_markdown-n` | `Successfully unregistered the following plugins:\n${pluginsList}\nReload all tabs now to fully revoke any and all access for these plugins.` |
| `cfg_menu_feature_category_header_tooltip` | `"${category}" Category` |
| `cfg_menu_feature_category_info_header_tooltip` | `"${section}" Section` |
| `feature_group_header.accessibility` | `Accessibility:` |
| `feature_group_header.searchableLists` | `Searchable Lists:` |
| `feature_group_header.lyricsSearchPromptHotkeyEnabled` | `Lyrics Search Dialog:` |
| `feature_group_header.interactionLockHotkey` | `Interaction Lock:` |
| `feature_desc.searchablePlaylistPopupsEnabled` | `Add a search bar to playlist popups` |
| `feature_desc.searchableSongListsEnabled` | `Add a search bar to generic song and video lists` |
| `feature_desc.volumeSliderLabelStyle` | `How to style the volume slider label` |
| `feature_desc.listButtonsStyle` | `How to style the buttons in the currently playing queue` |
| `feature_desc.aboveQueueHeaderStyle` | `How to style the header above the currently playing queue` |
| `feature_desc.songListTrackNumbersDomains` | `On which sites should the track numbers be shown?` |
| `feature_desc.lyricsSearchPromptHotkeyEnabled` | `Add a hotkey to open the lyrics search dialog` |
| `feature_desc.lyricsSearchPromptHotkey` | `Hotkey to open the lyrics search` |
| `feature_desc.interactionLockHotkeyEnabled` | `Add a hotkey to lock all interactions with the page` |
| `feature_desc.interactionLockHotkey` | `Hotkey to lock or unlock page interactions` |
| `feature_desc.interactionLockOverlayTimeout` | `How long to show an unlock hint for when an interaction is blocked - 0 to disable` |
| `feature_desc.verboseObservers` | `Log to the console whenever a document observer checks for and finds elements` |
| `feature_helptext.verboseObservers` | `This setting should only be enabled to debug the performance of BetterYTM features, as it will pollute the console a lot.` |
| `feature_desc.openWelcomeMenu` | `Open the welcome menu` |
| `feature_btn.openWelcomeMenu` | `Open` |
| `feature_btn.openWelcomeMenu_running` | `Opening...` |
| `feature_helptext.openWelcomeMenu` | `Closes the configuration menu and opens the welcome menu that was shown when you used BetterYTM for the first time.` |
| `feature_desc.configMenuFocusContentButtonEnabled` | `Add a button to the config menu title to set focus to the content` |
| `feature_desc.advancedMode` | `Show advanced settings` |
| `feature_helptext.advancedMode` | `After enabling this and reloading the menu, advanced settings that are hidden by default will be shown.\nThis is useful if you want to customize the script's behavior more deeply and don't care about an overcrowded menu.` |

<br></details>
