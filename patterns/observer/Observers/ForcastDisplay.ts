import { Observer, DisplayElement } from './Interfaces'
import { Subject } from '../Subject/WeatherData'

export default class ForcastDisplay implements Observer, DisplayElement {
  name = 'Forcast Display'
  private currentPressure: number = 29.92
  private lastPressure: number
  private weatherData: Subject

  public ForcastDisplay(weatherData: Subject): void {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  public display(): void {
    if (this.currentPressure > this.lastPressure) {
      console.log('Forcast is: Improving weather on the way!')
    } else if (this.currentPressure === this.lastPressure) {
      console.log('Forcast is: More of the same')
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Forcast is: Watch out for cooler, rainy weather')
    }
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure
    this.display()
  }
}
