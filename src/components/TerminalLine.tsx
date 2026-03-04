"use client"

import { OutputLine } from "@/types"

interface TerminalLineProps {
  line: OutputLine
}

export function TerminalLine({ line }: TerminalLineProps) {
  const baseClass = "whitespace-pre-wrap break-all font-mono text-sm leading-6"

  if (line.type === "input") {
    return (
      <div className={`${baseClass} text-terminal-prompt`}>
        {line.text}
      </div>
    )
  }

  if (line.type === "error") {
    return (
      <div className={`${baseClass} text-terminal-error`}>
        {line.text}
      </div>
    )
  }

  if (line.type === "system") {
    return (
      <div className={`${baseClass} text-terminal-system`}>
        {line.text}
      </div>
    )
  }

  // Handle directory markers for ls output
  if (line.text.startsWith("\x1Bdir:")) {
    const dirName = line.text.slice(5)
    return (
      <div className={`${baseClass} text-terminal-dir font-bold`}>
        {dirName}
      </div>
    )
  }

  return (
    <div className={`${baseClass} text-terminal-text`}>
      {line.text}
    </div>
  )
}
