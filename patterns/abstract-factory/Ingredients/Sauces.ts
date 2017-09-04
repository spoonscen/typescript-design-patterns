import Ingredient from './Ingredient'

export class MarinaraSauce extends Ingredient {
  constructor() {
    super()
    this.type = 'Marinara'
  }
}
export class BruschettaSauce extends Ingredient {
  constructor() {
    super()
    this.type = 'Bruschetta'
  }
}
export class PlumTomatoSauce extends Ingredient {
  constructor() {
    super()
    this.type = 'Plum Tomato'
  }
}

export type Sauce = MarinaraSauce | BruschettaSauce | PlumTomatoSauce
