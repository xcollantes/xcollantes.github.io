import { OutputLine } from "@/types"

let lineId = 0

export function makeOutput(
  lines: string[],
  type: OutputLine["type"] = "output"
): OutputLine[] {
  return lines.map((text) => ({
    id: `line-${++lineId}`,
    text,
    type,
  }))
}

export function makeError(message: string): OutputLine[] {
  return makeOutput([message], "error")
}

export function makeInputLine(
  prompt: string,
  command: string
): OutputLine {
  return {
    id: `line-${++lineId}`,
    text: `${prompt}${command}`,
    type: "input",
  }
}
