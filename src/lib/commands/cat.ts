import { CommandHandler } from "./types"
import { makeOutput, makeError } from "./utils"
import { readFile, getNode } from "../fileSystem"

export const cat: CommandHandler = (args, context) => {
  if (args.length === 0) {
    return { output: makeError("cat: missing file operand") }
  }

  const target = args[0]
  const node = getNode(context.currentPath, target)

  if (!node) {
    return { output: makeError(`cat: ${target}: No such file or directory`) }
  }

  if (node.type === "directory") {
    return { output: makeError(`cat: ${target}: Is a directory`) }
  }

  const content = readFile(context.currentPath, target)
  if (!content) {
    return { output: makeError(`cat: ${target}: No such file`) }
  }

  return { output: makeOutput(content) }
}
