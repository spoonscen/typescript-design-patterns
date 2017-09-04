import Ingredient from './Ingredient'

export class Garlic extends Ingredient {
  constructor() {
    super()
    this.type = 'Garlic'
  }
}
export class Onion extends Ingredient {
  constructor() {
    super()
    this.type = 'Onion'
  }
}
export class Mushroom extends Ingredient {
  constructor() {
    super()
    this.type = 'Mushroom'
  }
}
export class RedPepper extends Ingredient {
  constructor() {
    super()
    this.type = 'Red Pepper'
  }
}

export class Eggplant extends Ingredient {
  constructor() {
    super()
    this.type = 'Egg Plant'
  }
}

export class Spinach extends Ingredient {
  constructor() {
    super()
    this.type = 'Spinach'
  }
}

export class BlackOlives extends Ingredient {
  constructor() {
    super()
    this.type = 'Black Olives'
  }
}

export type Veggies = Garlic | Onion | Mushroom | RedPepper | Eggplant | Spinach | BlackOlives
