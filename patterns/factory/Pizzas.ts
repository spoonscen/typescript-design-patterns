export abstract class Pizza {
  name: string
  dough: string
  sauce: string
  toppings: string[] = []

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    console.log(`Tossing ${this.dough}`)
    console.log(`Adding sauce ${this.sauce}`)
    console.log(`Adding toppings: ${this.toppings.join(', ')}`)
  }
  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }
  cut(): void {
    console.log('Cutting the pizza into diagonal slices')
  }
  box(): void {
    console.log('Placing pizza in offical PizzaStore box')
  }

  public getName(): string {
    return this.name
  }
}

export class NewYorkStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'NY Style Sauce and Cheese Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export class NewYorkStyleVeggiePizza extends NewYorkStyleCheesePizza {
  constructor() {
    super()
    this.toppings.push('peppers', 'onions', 'mushrooms')
  }
}

export class NewYorkStylePepperoniPizza extends NewYorkStyleCheesePizza {
  constructor() {
    super()
    this.toppings.push('pepperoni')
  }
}

export class NewYorkStyleClamPizza extends NewYorkStyleCheesePizza {
  constructor() {
    super()
    this.sauce = 'olive oil'
    this.toppings.push('clams', 'garlic')
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'Chicago Style Deep Dish Pizza'
    this.dough = 'Extra Thick Crust Dough'
    this.sauce = 'Plum Tomato Sauce'

    this.toppings.push('Shredded Mozzarella Cheese')
  }
  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}

export class ChicagoStyleVeggiePizza extends ChicagoStyleCheesePizza {
  constructor() {
    super()
    this.toppings.push('peppers', 'onions', 'mushrooms')
  }
}

export class ChicagoStylePepperoniPizza extends ChicagoStyleCheesePizza {
  constructor() {
    super()
    this.toppings.push('pepperoni')
  }
}

export class ChicagoStyleClamPizza extends ChicagoStyleCheesePizza {
  constructor() {
    super()
    this.sauce = 'olive oil'
    this.toppings.push('clams', 'garlic')
  }
}

export class CaliforniaStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'California Style Pizza'
    this.dough = 'Extra thin crust'
    this.sauce = 'Pesto'

    this.toppings.push('Shredded Mozzarella Cheese')
  }
  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}

export class CaliforniaStyleVeggiePizza extends CaliforniaStyleCheesePizza {
  constructor() {
    super()
    this.toppings.push('peppers', 'onions', 'mushrooms')
  }
}

export class CaliforniaStylePepperoniPizza extends CaliforniaStyleCheesePizza {
  constructor() {
    super()
    this.toppings.push('pepperoni')
  }
}

export class CaliforniaStyleClamPizza extends CaliforniaStyleCheesePizza {
  constructor() {
    super()
    this.sauce = 'olive oil'
    this.toppings.push('clams', 'garlic')
  }
}