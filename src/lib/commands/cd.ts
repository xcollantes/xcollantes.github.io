import { CommandHandler } from "./types"
import { makeError } from "./utils"
import { resolvePath, getNode } from "../fileSystem"

export const cd: CommandHandler = (args, context) => {
  const target = args[0] || "~"
  const resolved = resolvePath(context.currentPath, target)

  if (!resolved) {
    return { output: makeError(`cd: no such directory: ${target}`) }
  }

  const node = getNode(resolved)
  if (!node || node.type !== "directory") {
    return { output: makeError(`cd: not a directory: ${target}`) }
  }

  context.setPath(resolved)
  return { output: [] }
}
