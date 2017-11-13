import { Command } from '../types'
import { CeilingFan } from '../Recievers'

export class CeilingFanHighCommand implements Command {
  ceilingFan: CeilingFan
  previousSpeed: number
  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.previousSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.high()
  }

  public undo(): void {
    if (this.previousSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high()
    } else if (this.previousSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium()
    } else if (this.previousSpeed === CeilingFan.LOW) {
      this.ceilingFan.low()
    } else if (this.previousSpeed === CeilingFan.OFF) {
      this.ceilingFan.off()
    }
  }
}

export class CeilingFanMediumCommand implements Command {
  ceilingFan: CeilingFan
  previousSpeed: number
  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.previousSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.medium()
  }

  public undo(): void {
    if (this.previousSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high()
    } else if (this.previousSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium()
    } else if (this.previousSpeed === CeilingFan.LOW) {
      this.ceilingFan.low()
    } else if (this.previousSpeed === CeilingFan.OFF) {
      this.ceilingFan.off()
    }
  }
}

export class CeilingFanLowCommand implements Command {
  ceilingFan: CeilingFan
  previousSpeed: number
  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.previousSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.low()
  }

  public undo(): void {
    if (this.previousSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high()
    } else if (this.previousSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium()
    } else if (this.previousSpeed === CeilingFan.LOW) {
      this.ceilingFan.low()
    } else if (this.previousSpeed === CeilingFan.OFF) {
      this.ceilingFan.off()
    }
  }
}



export class CeilingFanOffCommand implements Command {
  ceilingFan: CeilingFan
  previousSpeed: number
  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.ceilingFan.off()
  }

  public undo(): void {
    if (this.previousSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high()
    } else if (this.previousSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium()
    } else if (this.previousSpeed === CeilingFan.LOW) {
      this.ceilingFan.low()
    } else if (this.previousSpeed === CeilingFan.OFF) {
      this.ceilingFan.off()
    }
  }
}
