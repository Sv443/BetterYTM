// new translation management script
/**
 * Global Args:  
 * - `--locales|loc|languages|lang|l=<comma separated locale codes>` - which translation files to target.
 * 
 * Commands:  
 * - `tr delete|del|remove|rem|rm`  
 *   Removes the given keys from all translation files except en-US by default.  
 *   Args:  
 *   - `--keys|key|k=<comma separated keys>` - which keys to remove.
 * 
 * - `tr format|fmt|f`  
 *   Uses the en-US content as the base and adjusts the format of the given translation locales to follow it.
 * 
 * - `tr progress|prog|pgr|p`  
 *   Updates the file `assets/translations/README.md`
 */
const x = 0; void x;

import { parseArgs, styleText } from "node:util";
import { scheduleExit } from "@sv443-network/coreutils";
import { trDelete } from "./tr/tr-delete.ts";
import type { TrCommand } from "./tr/tr-types";

const { values: argv, positionals: argp } = parseArgs({ strict: false });

const commands = {
  delete: {
    names: ["delete", "del", "remove", "rem", "rm"],
    run: trDelete,
  },
} as const satisfies Record<string, TrCommand>;

async function run() {
  try {
    let foundCmd = false;
    for(const [id, { names, run }] of Object.entries(commands)) {
      if(names.find(n => n === argp[0])) {
        foundCmd = true;
        console.log(styleText("blue", `Running '${id}' command...`));
        await run(argv, argp);
      }
    }

    if(!foundCmd) {
      console.error(styleText("red", "Couldn't find a matching command."));
      return scheduleExit(1);
    }
  }
  catch(e) {
    console.error(styleText("red", "Command encountered an error:"), e);
    return scheduleExit(1);
  }
}

run();
