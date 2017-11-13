import { Command } from '../types'

export class NoCommand implements Command {
  execute() {
    return
  }
}
