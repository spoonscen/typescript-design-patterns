import { Command } from '../types'

export class MacroCommand implements Command {
  commands: Command[]
  previousCommands: Command[]

  constructor(commands: Command[]) {
    this.commands = commands
  }

  public execute(): void {
    this.previousCommands = this.commands
    this.commands.forEach(command => {
      command.execute()
    })
  }

  public undo(): void {
    this.previousCommands.forEach(command => {
      command.undo()
    })
  }
}
