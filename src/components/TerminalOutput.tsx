"use client"

import { OutputLine } from "@/types"
import { TerminalLine } from "./TerminalLine"

interface TerminalOutputProps {
  lines: OutputLine[]
}

export function TerminalOutput({ lines }: TerminalOutputProps) {
  return (
    <div>
      {lines.map((line) => (
        <TerminalLine key={line.id} line={line} />
      ))}
    </div>
  )
}
