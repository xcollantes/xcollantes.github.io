import { CommandHandler } from "./types"
import { makeOutput } from "./utils"

export const sudo: CommandHandler = () => {
  return { output: makeOutput(["Nice try. 😏"]) }
}

export const vim: CommandHandler = () => {
  return { output: makeOutput(["Why would you do this to yourself? Use cat instead."]) }
}

export const exit: CommandHandler = () => {
  return { output: makeOutput(["There is no escape. Try 'help' instead."]) }
}

export const docker: CommandHandler = () => {
  const whale = [
    "",
    "                     ##         .            ",
    "               ## ## ##        ==            ",
    "            ## ## ## ## ##    ===             ",
    "        /\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\\___/ ===         ",
    "   ~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~  ",
    "        \\______ o           __/              ",
    "          \\    \\         __/                 ",
    "           \\____\\_______/                    ",
    "",
    "    docker: command not found.",
    "    ...but here's a whale anyway. 🐳",
    "",
  ]
  return { output: makeOutput(whale, "info") }
}

export const neofetch: CommandHandler = () => {
  return {
    output: makeOutput([
      "",
      "  ██╗  ██╗ ██████╗    visitor@xavier",
      "  ╚██╗██╔╝██╔════╝    ──────────────",
      "   ╚███╔╝ ██║         OS: TerminalOS",
      "   ██╔██╗ ██║         Shell: xsh 1.0",
      "  ██╔╝ ██╗╚██████╗    Theme: Dracula",
      "  ╚═╝  ╚═╝ ╚═════╝    Terminal: web",
      "                       Uptime: since you arrived",
      "",
    ]),
  }
}
