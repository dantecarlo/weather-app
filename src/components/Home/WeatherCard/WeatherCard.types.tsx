export interface IWeatherData {
  detailedForecast: string
  endTime: string
  icon: string
  isDaytime: boolean
  name: string
  number: number
  shortForecast: string
  startTime: string
  temperature: number
  temperatureTrend: null | string
  temperatureUnit: string
  windDirection: string
  windSpeed: string
}

export interface IWeatherCard {
  weatherData: IWeatherData
}
