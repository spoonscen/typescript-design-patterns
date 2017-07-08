import { Beverage, Espresso, DarkRoast, HouseBlend, Decaf } from './Beverage'
import { Mocha, Whip, Soy }  from './Condiments'

class StarbuzzCoffee {
  public run(): void {
    const beverage: Beverage = new Espresso()
    console.log(`${beverage.getDescription()} $${beverage.cost()}`)

    let beverage2: Beverage = new DarkRoast()
    beverage2.setSize('Grande')
    beverage2 = new Mocha(beverage2)
    beverage2 = new Mocha(beverage2)
    beverage2 = new Whip(beverage2)
    console.log(`${beverage2.getDescription()} $${beverage2.cost()}`)

    let beverage3: Beverage = new HouseBlend()
    beverage3.setSize('Venti')
    beverage3 = new Soy(beverage3)
    beverage3 = new Mocha(beverage3)
    beverage3 = new Whip(beverage3)
    console.log(`${beverage3.getDescription()} $${beverage3.cost()}`)

    let beverage4: Beverage = new Decaf()
    beverage3.setSize('Tall')
    beverage4 = new Soy(beverage4)
    console.log(`${beverage4.getDescription()} $${beverage4.cost()}`)
  }
}

new StarbuzzCoffee().run()
