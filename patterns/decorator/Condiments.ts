import {Beverage, Size} from './Beverage'

export abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string
  public abstract getCostIncreaseBySize(size: Size): number
}

export class Mocha extends CondimentDecorator {
  beverage: Beverage
  size: Size
  constructor(beverage) {
    super()
    this.beverage = beverage
    this.size = beverage.getSize()
  }

  public getCostIncreaseBySize(size: Size): number {
    if (size === 'Tall') return .20
    if (size === 'Grande') return .30
    if (size === 'Venti') return .40
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`
  }

  public cost(): number {
    const { size, beverage } = this
    return beverage.cost() + this.getCostIncreaseBySize(size)
  }
}


export class Soy extends CondimentDecorator {
  beverage: Beverage

  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  public getCostIncreaseBySize(size: Size): number {
    if (size === 'Tall') return .20
    if (size === 'Grande') return .25
    if (size === 'Venti') return .30
  }


  public getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`
  }

  public cost(): number {
    const { size, beverage } = this
    return beverage.cost() + this.getCostIncreaseBySize(size)
  }
}

export class Whip extends CondimentDecorator {
  beverage: Beverage

  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  public getCostIncreaseBySize(size: Size): number {
    if (size === 'Tall') return .20
    if (size === 'Grande') return .25
    if (size === 'Venti') return .30
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Whip`
  }

  public cost(): number {
    const { size, beverage } = this
    return beverage.cost() + this.getCostIncreaseBySize(size)
  }
}
