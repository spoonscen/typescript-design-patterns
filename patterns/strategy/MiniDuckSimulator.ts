import { Duck } from './Duck/Duck'
import { FlyNoWay, FlyWithWings, FlyRocketPowered } from './FlyBehavior/FlyBehavior'
import { Quack, Squeak } from './QuackBehavior/QuackBehavior'

class ModelDuck extends Duck {
  flyBehavior = new FlyNoWay()
  quackBehavior = new Quack()

  public display(): void {
    console.log(`I'm a model duck`)
  }
}

class Mallard extends Duck {
  flyBehavior = new FlyWithWings()
  quackBehavior = new Quack()

  public display(): void {
    console.log(`I'm a mallard`)
  }
}

class RubberDuckie extends Duck {
  flyBehavior = new FlyNoWay()
  quackBehavior = new Squeak()

  public display(): void {
    console.log(`I'm a rubber duckie!`)
  }
}

export class MiniDuckSimulator {
  public run(): void {
    const mallard = new Mallard()
    mallard.performFly()
    mallard.performQuack()
    mallard.display()

    const modelDuck = new ModelDuck()
    modelDuck.performFly()
    modelDuck.setFlyBehavior(new FlyRocketPowered())
    modelDuck.performFly()
    modelDuck.display()

    const rubberDuckie = new RubberDuckie()
    rubberDuckie.performFly()
    rubberDuckie.performQuack()
    rubberDuckie.display()
  }
}

new MiniDuckSimulator().run()
