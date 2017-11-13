import {
  NoCommand,
  LightOnCommand,
  LightOffCommand,
  AllLightsOnCommand,
  AllLightsOffCommand,
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
  CeilingFanLowCommand,
  CeilingFanOffCommand,
  GarageDoorOpenCommand,
  GarageDoorClosedCommand,
  StereoOnWithCDCommand,
  StereoOffWithCDCommand
} from './Commands'
import { Light, CeilingFan, GarageDoor, Stereo } from './Recievers'
import { Command } from './types'

export class RemoteControl {
  public onCommands: Command[] = new Array(7)
  public offCommands: Command[] = new Array(7)
  public undoCommand: Command

  public constructor() {
    const noCommand = new NoCommand()

    for (let ix: number = 0; ix < 7; ix++) {
      this.onCommands[ix] = noCommand
      this.offCommands[ix] = noCommand
    }

    this.undoCommand = noCommand
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.undo()
  }

  public log(): void {
    let logLine: string = '\n------- Remote Control -------\n'

    this.onCommands.forEach((_, ix) => {
      const onCommandName = this.getName(this.onCommands[ix].constructor)
      const offCommandName = this.getName(this.offCommands[ix].constructor)
      logLine += `Slot ${ix}: ${onCommandName} ${offCommandName} \n`// tslint:disable-same-line:no-unused-expression
    })
    logLine += `Undo: ${this.getName(this.undoCommand.constructor)} \n`
    console.log(logLine)
  }

  private getName(constructor: any): string {
    return constructor.name
  }
}

class RemoteLoader {
  main(): void {
    const remoteControl: RemoteControl = new RemoteControl()
    const livingRoomLight: Light = new Light('Living Room')
    const kitchenLight: Light = new Light('Kitchen Room')
    const ceilingFan: CeilingFan = new CeilingFan('Living Room')
    const garageDoor: GarageDoor = new GarageDoor()
    const stereo: Stereo = new Stereo()

    const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight)
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight)
    const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight)
    const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight)
    const allLightsOn: AllLightsOnCommand = new AllLightsOnCommand([livingRoomLight, kitchenLight])
    const allLightsOff: AllLightsOffCommand = new AllLightsOffCommand([livingRoomLight, kitchenLight])

    const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan)
    const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan)
    const ceilingFanLow: CeilingFanLowCommand = new CeilingFanLowCommand(ceilingFan)
    const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan)


    const garageDoorOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor)
    const garageDoorClosed: GarageDoorClosedCommand = new GarageDoorClosedCommand(garageDoor)

    const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo)
    const stereoOffWithCD: StereoOffWithCDCommand = new StereoOffWithCDCommand(stereo)


    remoteControl.setCommand(0, ceilingFanHigh, ceilingFanOff)
    remoteControl.setCommand(1, ceilingFanMedium, ceilingFanOff)

    remoteControl.onButtonWasPushed(0)
    remoteControl.offButtonWasPushed(0)
    remoteControl.log()
    remoteControl.undoButtonWasPushed()

    remoteControl.onButtonWasPushed(1)
    remoteControl.log()
    remoteControl.undoButtonWasPushed()


  }
}

new RemoteLoader().main()
