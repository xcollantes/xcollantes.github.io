import { CommandHandler } from "./types"
import { makeOutput } from "./utils"

export const pwd: CommandHandler = (_args, context) => {
  return { output: makeOutput([context.currentPath]) }
}
