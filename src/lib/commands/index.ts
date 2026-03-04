import { CommandHandler } from "./types"
import { help } from "./help"
import { ls } from "./ls"
import { cd } from "./cd"
import { cat } from "./cat"
import { pwd } from "./pwd"
import { clear } from "./clear"
import { whoami } from "./whoami"
import { history } from "./history"
import {
  easter, sudo, vim, exit, docker, borg, df, python,
  linkedin, github, blog, website, rickroll, neofetch,
} from "./easter"

export const commands: Record<string, CommandHandler> = {
  help,
  ls,
  cd,
  cat,
  pwd,
  clear,
  whoami,
  history,
  easter,
  sudo,
  vim,
  exit,
  docker,
  borg,
  df,
  python,
  linkedin,
  github,
  blog,
  website,
  rickroll,
  neofetch,
}
