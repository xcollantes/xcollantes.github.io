import { CommandHandler } from "./types"
import { makeOutput } from "./utils"

export const history: CommandHandler = (_args, context) => {
  const lines = context.commandHistory.map(
    (cmd, i) => `  ${i + 1}  ${cmd}`
  )
  if (lines.length === 0) {
    return { output: makeOutput(["No commands in history."]) }
  }
  return { output: makeOutput(lines) }
}
