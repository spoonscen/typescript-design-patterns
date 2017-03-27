import { Observer, DisplayElement } from './Interfaces'
import { Subject } from '../Subject/WeatherData'

export default class StatisticsDisplay implements Observer, DisplayElement {
  name = 'Statistics Display'
  private allTemps: number[] = []
  private avgTemp: number
  private maxTemp: number
  private minTemp: number
  private weatherData: Subject

  public StatisticsDisplay(weatherData: Subject): void {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  public display(): void {
    console.log(`AVG/MIN/MAX temperature = ${this.avgTemp}/${this.maxTemp}/${this.minTemp}`)
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.allTemps.push(temp)
    this.avgTemp = (this.allTemps.reduce((a, b) => a + b, 0) / this.allTemps.length)
    this.maxTemp = Math.max(...this.allTemps)
    this.minTemp = Math.min(...this.allTemps)
    this.display()
  }
}
