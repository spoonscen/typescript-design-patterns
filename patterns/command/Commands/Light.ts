import { Command } from '../types'
import { Light } from '../Recievers'

export class LightOnCommand implements Command {
  light: Light

  public constructor(light: Light) {
    this.light = light
  }

  public execute(): void {
    this.light.on()
  }

  public undo(): void {
    this.light.off()
  }
}
export class LightOffCommand implements Command {
  light: Light

  public constructor(light: Light) {
    this.light = light
  }

  public execute(): void {
    this.light.off()
  }

  public undo(): void {
    this.light.on()
  }
}

export class AllLightsOnCommand implements Command {
  lights: Light[]

  public constructor(lights: Light[]) {
    this.lights = lights
  }

  public execute(): void {
    this.lights.forEach(light => light.on())
  }

  public undo(): void {
    this.lights.forEach(light => light.off())
  }
}

export class AllLightsOffCommand implements Command {
  lights: Light[]

  public constructor(lights: Light[]) {
    this.lights = lights
  }

  public execute(): void {
    this.lights.forEach(light => light.off())
  }
  public undo(): void {
    this.lights.forEach(light => light.on())
  }
}
