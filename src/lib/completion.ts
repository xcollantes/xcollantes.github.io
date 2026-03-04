import { getCompletions } from "./fileSystem"

const COMMANDS = [
  "help", "ls", "cd", "cat", "pwd", "clear",
  "whoami", "history", "sudo", "vim", "exit", "neofetch",
]

export function tabComplete(
  input: string,
  currentPath: string
): string | null {
  const trimmed = input.trimStart()
  const spaceIndex = trimmed.indexOf(" ")

  if (spaceIndex < 0) {
    const matches = COMMANDS.filter((c) => c.startsWith(trimmed))
    if (matches.length === 1) return matches[0] + " "
    return null
  }

  const command = trimmed.slice(0, spaceIndex)
  const argPart = trimmed.slice(spaceIndex + 1)

  if (["ls", "cd", "cat"].includes(command)) {
    const completions = getCompletions(currentPath, argPart)
    if (completions.length === 1) {
      return command + " " + completions[0]
    }
  }

  return null
}
