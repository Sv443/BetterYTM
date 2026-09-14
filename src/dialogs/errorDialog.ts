import { t } from "@util/translations.ts";
import { onInteraction } from "@util/input.ts";
import { downloadFile } from "@util/dom.ts";
import { Logger } from "@util/Logger.ts";
import { MarkdownDialog } from "@comp/MarkdownDialog.ts";
import packageJson from "@root/package.json" with { type: "json" };

/**
 * The dialog shown when a generic error is logged.  
 * Lives here rather than in {@linkcode "@util/logging.ts"} so that the logger - which almost every
 * module imports - doesn't drag the component and translation layers into everyone's dependencies.
 */

export function getErrorDialog(errName: string, args: unknown[]) {
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
        downloadFile(`bytm-log-${new Date().toISOString()}.log`, Logger.serializeLogs(), "text/plain");
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
  
${t("generic_error_dialog_open_console_note", packageJson.bugs.url)}`,
  });
}
