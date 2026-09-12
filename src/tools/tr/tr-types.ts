export type ValueArgs = {
  [longOption: string]: undefined | string | boolean | Array<string | boolean>;
};

export type RunTrCmdFn = (argv: ValueArgs, argp: string[]) => void | unknown | Promise<void | unknown>;

export type TrCommand = {
  /** The different names of this command. The first positional argument has to match one of these. */
  names: string[];
  /** Will be called to execute the command. */
  run: RunTrCmdFn;
};
