"use client"

import { useCallback } from "react"
import { TerminalState } from "@/types"

type HistoryDispatch = (action: {
  type: "NAVIGATE_HISTORY"
  direction: string
  index: number
  input: string
}) => void

export function useCommandHistory(
  state: TerminalState,
  dispatch: HistoryDispatch
) {
  const navigateUp = useCallback(() => {
    const { commandHistory, historyIndex } = state
    if (commandHistory.length === 0) return

    const newIndex =
      historyIndex < 0
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1)

    dispatch({
      type: "NAVIGATE_HISTORY",
      direction: "up",
      index: newIndex,
      input: commandHistory[newIndex],
    })
  }, [state, dispatch])

  const navigateDown = useCallback(() => {
    const { commandHistory, historyIndex } = state
    if (historyIndex < 0) return

    const newIndex = historyIndex + 1
    if (newIndex >= commandHistory.length) {
      dispatch({
        type: "NAVIGATE_HISTORY",
        direction: "down",
        index: -1,
        input: "",
      })
    } else {
      dispatch({
        type: "NAVIGATE_HISTORY",
        direction: "down",
        index: newIndex,
        input: commandHistory[newIndex],
      })
    }
  }, [state, dispatch])

  return { navigateUp, navigateDown }
}
