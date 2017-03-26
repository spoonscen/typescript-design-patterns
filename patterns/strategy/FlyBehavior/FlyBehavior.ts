export interface FlyBehavior {
  fly: () => void
}

export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log(`I'm Flying!!`)
  }
}

export class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log(`I can't fly`)
  }
}

export class FlyRocketPowered implements FlyBehavior {
  public fly(): void {
    console.log(`I'm flying with a rocket!`)
  }
}
