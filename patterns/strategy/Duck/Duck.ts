import { FlyBehavior } from '../FlyBehavior/FlyBehavior'
import { QuackBehavior } from '../QuackBehavior/QuackBehavior'

export abstract class Duck {
  flyBehavior: FlyBehavior
  quackBehavior: QuackBehavior

  public abstract display(): void

  public setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb
  }

  public setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb
  }

  public performFly(): void {
    this.flyBehavior.fly()
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }

  public swim(): void {
    console.log('All ducks float, even decoys!')
  }

}
