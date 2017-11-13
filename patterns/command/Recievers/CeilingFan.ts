export class CeilingFan {
  public static readonly HIGH: number = 3
  public static readonly MEDIUM: number = 2
  public static readonly LOW: number = 1
  public static readonly OFF: number = 0
  public location: string
  public previousSpeed: number
  private speed: number

  constructor(location: string) {
    this.location = location
    this.speed = CeilingFan.OFF
  }

  public on = (): void => {
    console.log(`${this.location} ceiling fan on`)
  }
  public high = (): void => {
    console.log(`${this.location} ceiling fan on high`)
    this.speed = CeilingFan.HIGH
  }
  public medium = (): void => {
    console.log(`${this.location} ceiling fan on medium`)
    this.speed = CeilingFan.MEDIUM
  }
  public low = (): void => {
    console.log(`${this.location} ceiling fan on low`)
    this.speed = CeilingFan.LOW
  }
  public off = (): void => {
    console.log(`${this.location} ceiling fan off`)
    this.speed = CeilingFan.OFF
  }
  public getSpeed = (): number => {
    return this.speed
  }

}
