import { WeatherData } from './Subject/WeatherData'
import CurrentConditionsDisplay from './Observers/CurrentConditionsDisplay'
import StatisticsDisplay from './Observers/StatisticsDisplay'
import HeatIndexDisplay from './Observers/HeatIndexDisplay'
import ForcastDisplay from './Observers/ForcastDisplay'

export class WeatherStation {
  public run(): void {
    const weatherData = new WeatherData()
    const currentConditions = new CurrentConditionsDisplay()
    const statisticsDisplay = new StatisticsDisplay()
    const heatIndexDisplay = new HeatIndexDisplay()
    const forcastDisplay = new ForcastDisplay()

    forcastDisplay.ForcastDisplay(weatherData)
    currentConditions.CurrentConditionsDisplay(weatherData)
    statisticsDisplay.StatisticsDisplay(weatherData)
    heatIndexDisplay.HeatIndexDisplay(weatherData)

    weatherData.setMeasurements(80, 65, 30.4)
    weatherData.setMeasurements(82, 70, 29.2)
    weatherData.setMeasurements(78, 90, 29.2)
    weatherData.setMeasurements(38, 15, 36.4)
    weatherData.removeObserver(statisticsDisplay)
    weatherData.removeObserver(currentConditions)
    weatherData.removeObserver(heatIndexDisplay)
    weatherData.setMeasurements(78, 90, 29.2)
    weatherData.setMeasurements(38, 15, 36.4)
  }
}

new WeatherStation().run()
