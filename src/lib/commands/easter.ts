import { CommandHandler } from "./types"
import { makeOutput } from "./utils"

export const easter: CommandHandler = () => {
  return {
    output: makeOutput([
      "Easter egg commands:",
      "",
      "  sudo",
      "  vim",
      "  exit",
      "  docker",
      "  borg",
      "  python",
      "  df",
      "  neofetch",
      "  rickroll",
      "  linkedin",
      "  github",
      "  blog",
      "  website",
    ]),
  }
}

export const sudo: CommandHandler = () => {
  return { output: makeOutput(["Nice try. 😏"]) }
}

export const vim: CommandHandler = () => {
  return { output: makeOutput(["Why would you do this to yourself? Use cat instead."]) }
}

export const exit: CommandHandler = () => {
  return { output: makeOutput(["There is no escape. Try 'help' instead."]) }
}

export const docker: CommandHandler = () => {
  const whale = [
    "",
    "                     ##         .            ",
    "               ## ## ##        ==            ",
    "            ## ## ## ## ##    ===             ",
    "        /\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\\___/ ===         ",
    "   ~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~  ",
    "        \\______ o           __/              ",
    "          \\    \\         __/                 ",
    "           \\____\\_______/                    ",
    "",
    "    docker: command not found.",
    "    ...but here's a whale anyway. 🐳",
    "",
  ]
  return { output: makeOutput(whale, "info") }
}

export const borg: CommandHandler = () => {
  const enterprise = [
    "",
    "    _",
    "    _______________________   ________.--'-`--._____",
    "   |____==================_)  \\_'===================`",
    "          _,--___.-|__|-.______|=====/  `---'",
    "          `---------._          ~~~~~|",
    "                      `-._ -  -  - ,'",
    "                          \\_____,-'",
    "",
    "    Resistance is futile.",
    "",
  ]
  return { output: makeOutput(enterprise, "info") }
}

export const df: CommandHandler = () => {
  return {
    output: makeOutput([
      "Filesystem           Size      Used   Avail  Use%   Mounted on",
      "/dev/portfolio        1YB      42ZB   958ZB   10%   /luck",
      "/dev/skills           8YB     7.9YB   0.1YB   20%   /skill",
      "/dev/experience    1337YB    1336YB     1YB   15%   /concentrated-power",
      "/dev/projects        42YB      13YB    29YB    5%   /pleasure",
      "/dev/ambition           ∞        ∞       ∞   100%   /remember-the-name",
    ]),
  }
}

export const python: CommandHandler = () => {
  return {
    output: makeOutput([
      "",
      "                .-.\\",
      "               /  aa\\",
      "               \\ -,_)",
      "          _..._| \  `-<",
      "     {} .\\__.' |",
      "    {} (        /`\\",
      "    {}(`'------'  /",
      "    |\\/;._______.\\'",
      "    ; \\           /",
      "  '-'-.......-'",
      "-------------------------------------------------",
      "",
      "    Python 3.12.0 (xsh terminal)",
      "    >>> import antigravity",
      "    >>> import this",
      "    >>> from __future__ import braces",
      "    >>> from __future__ import barry_as_FLUFL",
      "",
    ], "info"),
  }
}

export const linkedin: CommandHandler = () => {
  return {
    output: makeOutput(["Opening LinkedIn profile..."]),
    openUrl: "https://linkedin.com/in/xcollantes",
  }
}

export const github: CommandHandler = () => {
  return {
    output: makeOutput(["Opening GitHub profile..."]),
    openUrl: "https://github.com/xcollantes",
  }
}

export const blog: CommandHandler = () => {
  return {
    output: makeOutput(["Opening Substack..."]),
    openUrl: "https://xcollantes.substack.com",
  }
}

export const website: CommandHandler = () => {
  return {
    output: makeOutput(["Opening portfolio site..."]),
    openUrl: "https://xaviercollantes.dev",
  }
}

export const rickroll: CommandHandler = () => {
  return {
    output: makeOutput([
      "",
      "    Never gonna give you up,",
      "    Never gonna let you down...",
      "",
      "    🎵 You know the rules and so do I 🎵",
      "",
    ]),
    openUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  }
}

export const neofetch: CommandHandler = () => {
  return {
    output: makeOutput([
      "",
      "  ██╗  ██╗ ██████╗    visitor@xavier",
      "  ╚██╗██╔╝██╔════╝    ──────────────",
      "   ╚███╔╝ ██║         OS: TerminalOS",
      "   ██╔██╗ ██║         Shell: xsh 1.0",
      "  ██╔╝ ██╗╚██████╗    Theme: Dracula",
      "  ╚═╝  ╚═╝ ╚═════╝    Terminal: web",
      "                       Uptime: since you arrived",
      "",
    ]),
  }
}
