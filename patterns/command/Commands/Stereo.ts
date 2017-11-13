import { Command } from '../types'
import { Stereo } from '../Recievers'
export class StereoOnWithCDCommand implements Command {
  stereo: Stereo

  public constructor(Stereo: Stereo) {
    this.stereo = Stereo
  }

  public execute(): void {
    this.stereo.on()
    this.stereo.setCd()
    this.stereo.setVolume(11)
  }

  public undo(): void {
    this.stereo.off()
  }
}
export class StereoOffWithCDCommand implements Command {
  stereo: Stereo

  public constructor(Stereo: Stereo) {
    this.stereo = Stereo
  }

  public execute(): void {
    this.stereo.off()
  }

  public undo(): void {
    this.stereo.on()
    this.stereo.setCd()
    this.stereo.setVolume(11)
  }
}
