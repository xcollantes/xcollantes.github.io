import { CommandHandler } from "./types"
import { makeOutput, makeError } from "./utils"
import { listDirectory } from "../fileSystem"

export const ls: CommandHandler = (args, context) => {
  const target = args[0]
  const children = listDirectory(context.currentPath, target)

  if (!children) {
    const path = target || context.currentPath
    return { output: makeError(`ls: cannot access '${path}': No such directory`) }
  }

  const entries = children.map((child) =>
    child.type === "directory" ? `\x1Bdir:${child.name}/` : child.name
  )

  if (entries.length === 0) {
    return { output: makeOutput(["(empty directory)"]) }
  }

  return { output: makeOutput(entries) }
}
