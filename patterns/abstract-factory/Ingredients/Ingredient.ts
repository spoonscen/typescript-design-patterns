abstract class Ingredient {
  type: string
  getType(): void {
    console.log(`${this.type}`)
  }
}

export default Ingredient
