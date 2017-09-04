import Ingredient from './Ingredient'

export class ThinCrustDough extends Ingredient {
  constructor() {
    super()
    this.type = 'Thin Crust Dough'
  }
}
export class ThickCrustDough extends Ingredient {
  constructor() {
    super()
    this.type = 'Thick Crust Dough'
  }
}
export class VeryThinCrustDough extends Ingredient {
  constructor() {
    super()
    this.type = 'Very Thin Crust Dough'
  }
}

export type Dough = VeryThinCrustDough | ThickCrustDough | ThinCrustDough
