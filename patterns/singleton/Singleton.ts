export class Singleton {
  private static uniqueInstance: Singleton

  static getInstance(): Singleton {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton()
    }
    return this.uniqueInstance
  }

  private constructor() { }
}

