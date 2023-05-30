export const col = {
  rst:        "\x1b[0m", fat:     "\x1b[1m",
  blink:      "\x1b[5m", dim:     "\x1b[2m",
  underscore: "\x1b[4m", reverse: "\x1b[7m",
  hidden:     "\x1b[8m",

  black: "\x1b[30m", red:     "\x1b[31m",
  green: "\x1b[32m", yellow:  "\x1b[33m",
  blue:  "\x1b[34m", magenta: "\x1b[35m",
  cyan:  "\x1b[36m", white:   "\x1b[37m",
  fgb: {
    black: "\x1b[1m\x1b[30m", red:     "\x1b[1m\x1b[31m",
    green: "\x1b[1m\x1b[32m", yellow:  "\x1b[1m\x1b[33m",
    blue:  "\x1b[1m\x1b[34m", magenta: "\x1b[1m\x1b[35m",
    cyan:  "\x1b[1m\x1b[36m", white:   "\x1b[1m\x1b[37m",
  },
  bg: {
    black: "\x1b[40m", red:     "\x1b[41m",
    green: "\x1b[42m", yellow:  "\x1b[43m",
    blue:  "\x1b[44m", magenta: "\x1b[45m",
    cyan:  "\x1b[46m", white:   "\x1b[47m",
    rst:   "\x1b[0m",
  }
};
