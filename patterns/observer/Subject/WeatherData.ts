import { Observer } from '../Observers/Interfaces'
import { remove } from 'lodash'

export interface Subject {
  registerObserver: (o: Observer) => void
  removeObserver: (o: Observer) => void
  notifyObservers: () => void
}

export class WeatherData implements Subject {
  private observers: Observer[] = []
  private temperature: number
  private humidity: number
  private pressure: number

  public registerObserver(o: Observer): void {
    this.observers.push(o)
  }

  public removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o)
    if (index >= 0) {
      remove(this.observers, o)
      console.log(`Removed: ${o.name}`)
    }
  }

  public notifyObservers(): void {
    this.observers.forEach(o => o.update(this.temperature, this.humidity, this.pressure))
  }

  public measurementsChanged(): void {
    this.notifyObservers()
  }

  public setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}
