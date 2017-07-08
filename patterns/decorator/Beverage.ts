export type Size = 'Tall' | 'Grande' | 'Venti'
export abstract class Beverage {
  description: string = 'Unknown Beverage'
  size: Size = 'Tall'

  public setSize(size: Size): void {
    this.size = size
  }

  public getSize(): string {
    return this.size
  }

  public getDescription(): string {
    return this.description
  }

  public abstract cost(): number
}

export class Espresso extends Beverage {
  public description: string = 'Espresso'

  public cost(): number {
    return 1.99
  }
}

export class HouseBlend extends Beverage {
  public description: string = 'House Blend Coffee'

  public cost(): number {
    return .89
  }
}
export class DarkRoast extends Beverage {
  public description: string = 'Dark Roast Coffee'

  public cost(): number {
    return .89
  }
}
export class Decaf extends Beverage {
  public description: string = 'Decaf Coffee'

  public cost(): number {
    return .89
  }
}
