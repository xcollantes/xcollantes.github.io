import { FileNode } from "@/types"
import { fileSystem } from "@/data/portfolio"

export function resolvePath(
  currentPath: string,
  target: string
): string | null {
  const segments = getAbsoluteSegments(currentPath, target)
  const node = getNodeBySegments(segments)
  if (!node) return null
  return segments.length === 0 ? "~" : "~/" + segments.join("/")
}

export function getNode(
  currentPath: string,
  target?: string
): FileNode | null {
  if (!target) {
    const segments = pathToSegments(currentPath)
    return getNodeBySegments(segments)
  }
  const segments = getAbsoluteSegments(currentPath, target)
  return getNodeBySegments(segments)
}

export function listDirectory(
  currentPath: string,
  target?: string
): FileNode[] | null {
  const node = getNode(currentPath, target)
  if (!node || node.type !== "directory") return null
  return node.children || []
}

export function readFile(
  currentPath: string,
  target: string
): string[] | null {
  const node = getNode(currentPath, target)
  if (!node || node.type !== "file") return null
  return node.content || []
}

export function getCompletions(
  currentPath: string,
  partial: string
): string[] {
  const lastSlash = partial.lastIndexOf("/")
  let dirPart = ""
  let prefix = ""

  if (lastSlash >= 0) {
    dirPart = partial.slice(0, lastSlash) || "/"
    prefix = partial.slice(lastSlash + 1)
  } else {
    prefix = partial
  }

  const dirTarget = dirPart || undefined
  const children = listDirectory(currentPath, dirTarget)
  if (!children) return []

  const matches = children
    .filter((c) => c.name.startsWith(prefix))
    .map((c) => {
      const name = c.type === "directory" ? c.name + "/" : c.name
      return dirPart ? dirPart + "/" + name : name
    })

  return matches
}

function pathToSegments(path: string): string[] {
  if (path === "~" || path === "/") return []
  const cleaned = path.replace(/^~\/?/, "")
  return cleaned.split("/").filter(Boolean)
}

function getAbsoluteSegments(
  currentPath: string,
  target: string
): string[] {
  if (target === "~" || target === "/") return []

  let segments: string[]
  if (target.startsWith("~") || target.startsWith("/")) {
    segments = pathToSegments(target)
  } else {
    segments = [...pathToSegments(currentPath), ...target.split("/").filter(Boolean)]
  }

  const resolved: string[] = []
  for (const seg of segments) {
    if (seg === ".") continue
    if (seg === "..") {
      resolved.pop()
    } else {
      resolved.push(seg)
    }
  }
  return resolved
}

function getNodeBySegments(segments: string[]): FileNode | null {
  let node: FileNode = fileSystem
  for (const seg of segments) {
    if (node.type !== "directory" || !node.children) return null
    const child = node.children.find((c) => c.name === seg)
    if (!child) return null
    node = child
  }
  return node
}
