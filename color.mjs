const COLORCODE = {
  "black": 30,
  "red": 31,
  "green": 32,
  "yellow": 33,
  "blue": 34,
  "magenta": 35,
  "cyan": 36,
  "white": 37
}

export const styleText = (color, text) => {
  return `\x1b[${COLORCODE[color]}m${text}\x1b[0m`;
}

