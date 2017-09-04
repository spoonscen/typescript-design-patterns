import Ingredient from './Ingredient'

export class ReggianoCheese extends Ingredient {
  constructor() {
    super()
    this.type = 'Reggiano'
  }
}
export class MozzarellaCheese extends Ingredient {
  constructor() {
    super()
    this.type = 'Mozzarella'
  }
}
export class GoatCheese extends Ingredient {
  constructor() {
    super()
    this.type = 'Goat'
  }
}

export type Cheese = ReggianoCheese | MozzarellaCheese | GoatCheese
