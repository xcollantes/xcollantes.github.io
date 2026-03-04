import { OutputLine } from "@/types"

export interface CommandContext {
  currentPath: string
  commandHistory: string[]
  setPath: (path: string) => void
}

export interface CommandResult {
  output: OutputLine[]
  clear?: boolean
  openUrl?: string
}

export type CommandHandler = (
  args: string[],
  context: CommandContext
) => CommandResult
