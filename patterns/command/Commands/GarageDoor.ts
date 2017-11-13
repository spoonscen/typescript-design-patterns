import { Command } from '../types'
import { GarageDoor } from '../Recievers'

export class GarageDoorOpenCommand implements Command {
  garageDoor: GarageDoor

  public constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  public execute(): void {
    this.garageDoor.up()
    this.garageDoor.lightOn()
  }
}
export class GarageDoorClosedCommand implements Command {
  garageDoor: GarageDoor

  public constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  public execute(): void {
    this.garageDoor.down()
    this.garageDoor.lightOff()
  }
}
