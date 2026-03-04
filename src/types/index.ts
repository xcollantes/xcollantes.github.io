export interface FileNode {
  name: string
  type: "file" | "directory"
  children?: FileNode[]
  content?: string[]
}

export interface OutputLine {
  id: string
  text: string
  type: "input" | "output" | "error" | "system" | "info"
}

export interface TerminalState {
  output: OutputLine[]
  currentPath: string
  commandHistory: string[]
  historyIndex: number
  input: string
}

export type TerminalAction =
  | { type: "EXECUTE_COMMAND"; command: string; result: OutputLine[] }
  | { type: "SET_INPUT"; input: string }
  | { type: "NAVIGATE_HISTORY"; direction: "up" | "down" }
  | { type: "CLEAR" }
  | { type: "SET_PATH"; path: string }
  | { type: "TAB_COMPLETE"; input: string }
