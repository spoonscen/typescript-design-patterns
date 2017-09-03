import {
  NewYorkStyleCheesePizza,
  NewYorkStyleVeggiePizza,
  NewYorkStylePepperoniPizza,
  NewYorkStyleClamPizza,
  ChicagoStyleCheesePizza,
  ChicagoStyleVeggiePizza,
  ChicagoStylePepperoniPizza,
  ChicagoStyleClamPizza,
  CaliforniaStyleCheesePizza,
  CaliforniaStylePepperoniPizza,
  CaliforniaStyleClamPizza,
  CaliforniaStyleVeggiePizza,
} from './Pizzas'
import { Pizza } from './Pizzas'

export type PizzaType = 'cheese' | 'pepperoni' | 'clam' | 'veggie'

abstract class PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    return
  }

  public orderPizza(type: PizzaType): Pizza {
    let pizza: Pizza
    pizza = this.createPizza(type)
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }
}


class NewYorkPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NewYorkStyleCheesePizza()
      case 'pepperoni':
        return new NewYorkStylePepperoniPizza()
      case 'clam':
        return new NewYorkStyleClamPizza()
      case 'veggie':
        return new NewYorkStyleVeggiePizza()
      default:
        throw new Error('unknown type')
    }
  }

  constructor() {
    super()
  }
}

class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new ChicagoStyleCheesePizza()
      case 'pepperoni':
        return new ChicagoStylePepperoniPizza()
      case 'clam':
        return new ChicagoStyleClamPizza()
      case 'veggie':
        return new ChicagoStyleVeggiePizza()
      default:
        throw new Error('unknown type')
    }
  }

  constructor() {
    super()
  }
}

class CaliforniaPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CaliforniaStyleCheesePizza()
      case 'pepperoni':
        return new CaliforniaStylePepperoniPizza()
      case 'clam':
        return new CaliforniaStyleClamPizza()
      case 'veggie':
        return new CaliforniaStyleVeggiePizza()
      default:
        throw new Error('unknown type')
    }
  }

  constructor() {
    super()
  }
}


const nyStore = new NewYorkPizzaStore()
const chicagoStore = new ChicagoPizzaStore()
let pizza: Pizza

pizza = nyStore.orderPizza('cheese')
console.log(`Ethan ordered a ${pizza.getName()} \n`)
pizza = chicagoStore.orderPizza('cheese')
console.log(`Joel ordered a ${pizza.getName()} \n`)
pizza = nyStore.orderPizza('veggie')
console.log(`Arlo ordered a ${pizza.getName()} \n`)
pizza = chicagoStore.orderPizza('veggie')
console.log(`Carrie ordered a ${pizza.getName()} \n`)
