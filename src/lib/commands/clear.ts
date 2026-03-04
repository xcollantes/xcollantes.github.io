import { CommandHandler } from "./types"

export const clear: CommandHandler = () => {
  return { output: [], clear: true }
}
