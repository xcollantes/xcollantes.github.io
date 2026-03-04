export function parseCommand(input: string): {
  command: string
  args: string[]
} {
  const trimmed = input.trim()
  if (!trimmed) return { command: "", args: [] }

  const parts = trimmed.split(/\s+/)
  return {
    command: parts[0].toLowerCase(),
    args: parts.slice(1),
  }
}
