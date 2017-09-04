import {
  CheesePizza,
  PepperoniPizza,
  ClamPizza,
  VeggiePizza
} from './Pizzas'
import { NYPizzaIngredientFactory, PizzaIngredientFactory, ChicagoPizzaIngredientFactory } from './IngredientFactory'
import { Pizza } from './Pizzas'

export type PizzaType = 'cheese' | 'pepperoni' | 'clam' | 'veggie'

abstract class PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    let pizza: Pizza
    let ingredientFactory: PizzaIngredientFactory
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
    const ingredientFactory = new NYPizzaIngredientFactory()
    let pizza: Pizza
    switch (type) {
      case 'cheese':
        pizza = new CheesePizza(ingredientFactory)
        pizza.setName('New York Style Cheese Pizza')
        return pizza
      case 'pepperoni':
        pizza = new PepperoniPizza(ingredientFactory)
        pizza.setName('New York Style Pepperoni Pizza')
        return pizza
      case 'clam':
        pizza = new ClamPizza(ingredientFactory)
        pizza.setName('New York Style Clam Pizza')
        return pizza
      case 'veggie':
        pizza = new VeggiePizza(ingredientFactory)
        pizza.setName('New York Style Veggie Pizza')
        return pizza
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
    const ingredientFactory = new ChicagoPizzaIngredientFactory()
    let pizza: Pizza
    switch (type) {
      case 'cheese':
        pizza = new CheesePizza(ingredientFactory)
        pizza.setName('Chicago Style Cheese Pizza')
        return pizza
      case 'pepperoni':
        pizza = new PepperoniPizza(ingredientFactory)
        pizza.setName('Chicago Style Pepperoni Pizza')
        return pizza
      case 'clam':
        pizza = new ClamPizza(ingredientFactory)
        pizza.setName('Chicago Style Clam Pizza')
        return pizza
      case 'veggie':
        pizza = new VeggiePizza(ingredientFactory)
        pizza.setName('Chicago Style Veggie Pizza')
        return pizza
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
