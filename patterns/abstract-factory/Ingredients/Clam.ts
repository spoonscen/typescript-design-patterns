import Ingredient from './Ingredient'

export class FrozenClams extends Ingredient {
  constructor() {
    super()
    this.type = 'Frozen Clams'
  }
}
export class Calamari extends Ingredient {
  constructor() {
    super()
    this.type = 'Calamari'
  }
}
export class FreshClams extends Ingredient {
  constructor() {
    super()
    this.type = 'Fresh Clams'
  }
}

export type Clams = FreshClams | Calamari | FrozenClams
