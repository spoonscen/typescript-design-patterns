import {
  NoCommand,
  LightOnCommand,
  LightOffCommand,
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
  CeilingFanOffCommand,
  StereoOnWithCDCommand,
  StereoOffWithCDCommand,
  MacroCommand
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
    const ceilingFan: CeilingFan = new CeilingFan('Living Room')
    const garageDoor: GarageDoor = new GarageDoor()
    const stereo: Stereo = new Stereo()

    const stereoOn: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo)
    const stereoOff: StereoOffWithCDCommand = new StereoOffWithCDCommand(stereo)
    const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight)
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight)


    const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan)
    const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan)
    const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan)

    remoteControl.setCommand(0, ceilingFanHigh, ceilingFanOff)
    remoteControl.setCommand(1, ceilingFanMedium, ceilingFanOff)

    remoteControl.onButtonWasPushed(0)
    remoteControl.offButtonWasPushed(0)
    remoteControl.log()
    remoteControl.undoButtonWasPushed()

    remoteControl.onButtonWasPushed(1)
    remoteControl.log()
    remoteControl.undoButtonWasPushed()

    const partyOn = new MacroCommand([livingRoomLightOn, stereoOn])
    const partyOff = new MacroCommand([livingRoomLightOff, stereoOff])
    remoteControl.setCommand(2, partyOn, partyOff)
    remoteControl.log()
    remoteControl.onButtonWasPushed(2)
    remoteControl.offButtonWasPushed(2)
    remoteControl.undoButtonWasPushed()


    // Instead of creating Command classes for each action, you can use lambda functions to acheive the same decoupling
    // unfortunately javascript does not have the same functionality when it comes to replacing classes with lambdas like in java.
    // so we need to mock out the class with an execute method
    remoteControl.setCommand(3, { execute: () => garageDoor.up() }, { execute: () => garageDoor.down() })

  }
}

new RemoteLoader().main()
