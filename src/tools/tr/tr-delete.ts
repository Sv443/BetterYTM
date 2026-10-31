import type { RunTrCmdFn, ValueArgs } from "@tool/tr/tr-types";

export const trDelete: RunTrCmdFn = (argv: ValueArgs, argp: string[]) => {
  console.log("del", argv, argp);
};
