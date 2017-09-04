import {
  ThinCrustDough,
  MarinaraSauce,
  ReggianoCheese,
  Garlic,
  Onion,
  Mushroom,
  RedPepper,
  SlicedPepperoni,
  FreshClams,
  Dough,
  Sauce,
  Cheese,
  Veggies,
  Pepperoni,
  Clams,
  Eggplant,
  Spinach,
  BlackOlives,
  PlumTomatoSauce,
  ThickCrustDough,
  MozzarellaCheese,
  FrozenClams,
} from './Ingredients'

export interface PizzaIngredientFactory {
  createDough(): Dough
  createSauce(): Sauce
  createCheese(): Cheese
  createVeggies(): Veggies[]
  createPepperoni(): Pepperoni
  createClams(): Clams
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThinCrustDough()
  }

  public createSauce(): Sauce {
    return new MarinaraSauce()
  }

  public createCheese(): Cheese {
    return new ReggianoCheese()
  }

  public createVeggies(): Veggies[] {
    return [new Garlic(), new Onion(), new RedPepper(), new Mushroom()]
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }

  public createClams(): Clams {
    return new FreshClams()
  }
}


export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThickCrustDough()
  }

  public createSauce(): Sauce {
    return new PlumTomatoSauce()
  }

  public createCheese(): Cheese {
    return new MozzarellaCheese()
  }

  public createVeggies(): Veggies[] {
    return [new BlackOlives(), new Spinach(), new Eggplant()]
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }

  public createClams(): Clams {
    return new FrozenClams()
  }
}

