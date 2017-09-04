import Ingredient from './Ingredient'

export class SlicedPepperoni extends Ingredient {
  constructor() {
    super()
    this.type = 'Pepperoni'
  }
}

export type Pepperoni = SlicedPepperoni
