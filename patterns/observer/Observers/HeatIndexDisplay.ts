import { Observer, DisplayElement } from './Interfaces'
import { Subject } from '../Subject/WeatherData'
import { HeatIndexCalculator } from './Utils'

export default class HeatIndexDisplay implements Observer, DisplayElement {
  name = 'Head Index Display'
  private heatIndex: number
  private weatherData: Subject

  public HeatIndexDisplay(weatherData: Subject): void {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  public display(): void {
    console.log(`Head Index is ${this.heatIndex}`)
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.heatIndex = new HeatIndexCalculator().computeHeatIndex(temp, humidity)
    this.display()
  }
}
