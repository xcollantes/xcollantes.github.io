"use client"

interface CommandInputProps {
  prompt: string
  input: string
}

export function CommandInput({ prompt, input }: CommandInputProps) {
  return (
    <div className="flex whitespace-pre-wrap font-mono text-sm leading-tight">
      <span className="text-terminal-prompt">{prompt}</span>
      <span className="text-terminal-text">{input}</span>
      <span className="animate-blink inline-block w-[8px] h-[18px] bg-terminal-cursor ml-[1px] translate-y-[2px]" />
    </div>
  )
}
