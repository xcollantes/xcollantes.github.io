"use client"

import { useReducer, useCallback } from "react"
import { TerminalState, OutputLine } from "@/types"
import { parseCommand } from "@/lib/parser"
import { commands } from "@/lib/commands"
import { tabComplete } from "@/lib/completion"
import { makeError, makeInputLine } from "@/lib/commands/utils"
import { useCommandHistory } from "./useCommandHistory"

const MAX_OUTPUT_LINES = 1000
const MAX_HISTORY = 100
const MAX_INPUT_LENGTH = 500

const WELCOME_BANNER: OutputLine[] = [
  { id: "welcome-1", text: "", type: "system" },
  { id: "welcome-2", text: "  Welcome to Xavier's Terminal Portfolio", type: "system" },
  { id: "welcome-3", text: "  ──────────────────────────────────────", type: "system" },
  { id: "welcome-4", text: "  Type 'help' to see available commands.", type: "system" },
  { id: "welcome-5", text: "  Try 'ls' to explore or 'cat about.txt' to learn more.", type: "system" },
  { id: "welcome-6", text: "", type: "system" },
]

const initialState: TerminalState = {
  output: WELCOME_BANNER,
  currentPath: "~",
  commandHistory: [],
  historyIndex: -1,
  input: "",
}

function buildPrompt(path: string): string {
  return `visitor@xavier:${path}$ `
}

type Action =
  | { type: "EXECUTE_COMMAND"; command: string; result: OutputLine[] }
  | { type: "SET_INPUT"; input: string }
  | { type: "NAVIGATE_HISTORY"; direction: string; index: number; input: string }
  | { type: "CLEAR" }
  | { type: "SET_PATH"; path: string }
  | { type: "TAB_COMPLETE"; input: string }

function reducer(state: TerminalState, action: Action): TerminalState {
  switch (action.type) {
    case "EXECUTE_COMMAND": {
      const inputLine = makeInputLine(
        buildPrompt(state.currentPath),
        action.command
      )
      const newOutput = [...state.output, inputLine, ...action.result]
      const trimmedOutput = newOutput.length > MAX_OUTPUT_LINES
        ? newOutput.slice(-MAX_OUTPUT_LINES)
        : newOutput
      const newHistory = action.command.trim()
        ? [...state.commandHistory, action.command.trim()]
        : state.commandHistory
      const trimmedHistory = newHistory.length > MAX_HISTORY
        ? newHistory.slice(-MAX_HISTORY)
        : newHistory
      return {
        ...state,
        output: trimmedOutput,
        input: "",
        commandHistory: trimmedHistory,
        historyIndex: -1,
      }
    }
    case "SET_INPUT":
      return { ...state, input: action.input }
    case "NAVIGATE_HISTORY":
      return {
        ...state,
        historyIndex: action.index,
        input: action.input,
      }
    case "CLEAR":
      return { ...state, output: [], input: "" }
    case "SET_PATH":
      return { ...state, currentPath: action.path }
    case "TAB_COMPLETE":
      return { ...state, input: action.input }
    default:
      return state
  }
}

export function useTerminal() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { navigateUp, navigateDown } = useCommandHistory(state, dispatch)

  const executeCommand = useCallback(
    (input: string) => {
      const { command, args } = parseCommand(input)

      if (!command) {
        const inputLine = makeInputLine(
          buildPrompt(state.currentPath),
          ""
        )
        dispatch({
          type: "EXECUTE_COMMAND",
          command: "",
          result: [],
        })
        // Still add the empty input line
        return
      }

      const handler = commands[command]
      if (!handler) {
        dispatch({
          type: "EXECUTE_COMMAND",
          command: input,
          result: makeError(`${command}: command not found. Type 'help' for available commands.`),
        })
        return
      }

      let newPath = state.currentPath
      const context = {
        currentPath: state.currentPath,
        commandHistory: state.commandHistory,
        setPath: (path: string) => {
          newPath = path
        },
      }

      const result = handler(args, context)

      if (result.clear) {
        dispatch({ type: "CLEAR" })
        return
      }

      dispatch({
        type: "EXECUTE_COMMAND",
        command: input,
        result: result.output,
      })

      if (newPath !== state.currentPath) {
        dispatch({ type: "SET_PATH", path: newPath })
      }
    },
    [state.currentPath, state.commandHistory]
  )

  const setInput = useCallback((input: string) => {
    if (input.length > MAX_INPUT_LENGTH) return
    dispatch({ type: "SET_INPUT", input })
  }, [])

  const handleTab = useCallback(() => {
    const completed = tabComplete(state.input, state.currentPath)
    if (completed) {
      dispatch({ type: "TAB_COMPLETE", input: completed })
    }
  }, [state.input, state.currentPath])

  const prompt = buildPrompt(state.currentPath)

  return {
    state,
    prompt,
    executeCommand,
    setInput,
    handleTab,
    navigateUp,
    navigateDown,
  }
}
