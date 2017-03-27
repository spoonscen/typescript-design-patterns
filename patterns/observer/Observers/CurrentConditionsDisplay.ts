import { Observer, DisplayElement } from './Interfaces'
import { Subject } from '../Subject/WeatherData'

export default class CurrentConditionsDisplay implements Observer, DisplayElement {
  name = 'Current Conditions Display'
  private temperature: number
  private humidity: number
  private weatherData: Subject

  public CurrentConditionsDisplay(weatherData: Subject): void {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  public display(): void {
    console.log(`Current Conditions: ${this.temperature} F degrees and ${this.humidity}% humidity`)
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp
    this.humidity = humidity
    this.display()
  }
}
