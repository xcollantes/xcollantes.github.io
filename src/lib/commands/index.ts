import { CommandHandler } from "./types"
import { help } from "./help"
import { ls } from "./ls"
import { cd } from "./cd"
import { cat } from "./cat"
import { pwd } from "./pwd"
import { clear } from "./clear"
import { whoami } from "./whoami"
import { history } from "./history"
import { sudo, vim, exit, docker, borg, df, python, neofetch } from "./easter"

export const commands: Record<string, CommandHandler> = {
  help,
  ls,
  cd,
  cat,
  pwd,
  clear,
  whoami,
  history,
  sudo,
  vim,
  exit,
  docker,
  borg,
  df,
  python,
  neofetch,
}
