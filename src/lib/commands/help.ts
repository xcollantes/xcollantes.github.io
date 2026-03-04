import { CommandHandler } from "./types"
import { makeOutput } from "./utils"

export const help: CommandHandler = () => {
  return {
    output: makeOutput([
      "Available commands:",
      "",
      "  help              Show this help message",
      "  ls [path]         List directory contents",
      "  cd <path>         Change directory",
      "  cat <file>        Display file contents",
      "  pwd               Print working directory",
      "  clear             Clear the terminal",
      "  whoami            Display visitor info",
      "  history           Show command history",
      "",
      "Navigation:",
      "  Tab               Auto-complete commands and paths",
      "  Up/Down           Navigate command history",
      "  Ctrl+L            Clear screen",
      "  Ctrl+C            Cancel input",
    ]),
  }
}
