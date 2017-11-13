export class Light {
  room: string
  constructor(room: string) {
    this.room = room
  }

  public on(): void {
    console.log(`${this.room} Light is on`)
  }
  public off(): void {
    console.log(`${this.room} Light is off`)
  }
}
