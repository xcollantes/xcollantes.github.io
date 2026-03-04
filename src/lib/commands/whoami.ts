import { CommandHandler } from "./types"
import { makeOutput } from "./utils"

export const whoami: CommandHandler = () => {
  return { output: makeOutput(["visitor"]) }
}
