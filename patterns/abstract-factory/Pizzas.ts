import {
  Veggies,
  Cheese,
  Sauce,
  Dough,
  Pepperoni,
  Clams
} from './Ingredients'
import { PizzaIngredientFactory } from './IngredientFactory'
export abstract class Pizza {
  name: string

  dough: Dough
  sauce: Sauce
  veggies: Veggies[]
  cheese: Cheese
  pepperoni: Pepperoni
  clams: Clams

  abstract prepare(): void

  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }
  cut(): void {
    console.log('Cutting the pizza into diagonal slices')
  }
  box(): void {
    console.log('Placing pizza in offical PizzaStore box')
  }
  setName(name: string): void {
    this.name = name
  }
  public getName(): string {
    return this.name
  }
  public toString(): void {
    console.log(`Tossing ${this.dough.getType()}`)
    console.log(`Adding sauce ${this.sauce.getType()}`)
    console.log(`Adding veggies: ${this.veggies.join(', ')}`)
    console.log(`Adding cheese: ${this.cheese.getType()}`)
    console.log(`Adding pepperoni: ${this.pepperoni.getType()}`)
    console.log(`Adding clams: ${this.clams.getType()}`)
  }
}

export class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
  }
}

export class ClamPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.clams = this.ingredientFactory.createClams()
  }
}

export class PepperoniPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.clams = this.ingredientFactory.createPepperoni()
  }
}

export class VeggiePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.veggies = this.ingredientFactory.createVeggies()
  }
}
