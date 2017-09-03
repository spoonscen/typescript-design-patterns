import { Pizza } from './Pizzas'

export abstract class PizzaFactory {
  static createPizza: () => Pizza
}

// Example SimpleFactory, no longer used
// export class SimplePizzaFactory implements PizzaFactory {
//   static createPizza(type: string): Pizza {
//     switch (type) {
//       case 'cheese':
//         return new CheesePizza()
//       case 'pepperoni':
//         return new PepperoniPizza()
//       case 'clam':
//         return new ClamPizza()
//       case 'veggie':
//         return new VeggiePizza()
//       default:
//         throw new Error('unknown type')
//     }
//   }
// }
