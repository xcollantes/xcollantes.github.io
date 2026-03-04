"use client"

import { useRef, useEffect, useCallback } from "react"
import { useTerminal } from "@/hooks/useTerminal"
import { TerminalOutput } from "./TerminalOutput"
import { CommandInput } from "./CommandInput"

export function Terminal() {
  const {
    state,
    prompt,
    executeCommand,
    setInput,
    handleTab,
    navigateUp,
    navigateDown,
  } = useTerminal()

  const terminalRef = useRef<HTMLDivElement>(null)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [state.output])

  useEffect(() => {
    hiddenInputRef.current?.focus()
  }, [])

  const focusInput = useCallback(() => {
    hiddenInputRef.current?.focus()
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        executeCommand(state.input)
      } else if (e.key === "Tab") {
        e.preventDefault()
        handleTab()
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        navigateUp()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        navigateDown()
      } else if (e.key === "c" && e.ctrlKey) {
        e.preventDefault()
        setInput("")
      } else if (e.key === "l" && e.ctrlKey) {
        e.preventDefault()
        executeCommand("clear")
      }
    },
    [state.input, executeCommand, handleTab, navigateUp, navigateDown, setInput]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    },
    [setInput]
  )

  return (
    <div
      ref={terminalRef}
      onClick={focusInput}
      className="h-screen w-full bg-terminal-bg overflow-y-auto p-4 cursor-text"
    >
      <TerminalOutput lines={state.output} />
      <CommandInput prompt={prompt} input={state.input} />
      <input
        ref={hiddenInputRef}
        type="text"
        value={state.input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={500}
        className="absolute opacity-0 w-0 h-0"
        autoCapitalize="none"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        aria-label="Terminal input"
      />
    </div>
  )
}
