import axios from 'axios'

export const weatherAPI = axios.create({
  baseURL: 'https://api.weather.gov'
})

export const getGrid = ({ longitude = 0, latitude = 0 }) => {
  try {
    return weatherAPI.get(`/points/${latitude},${longitude}`)
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getWeather = ({ gridX = 0, gridY = 0, gridId = 'TOP' }) => {
  try {
    return weatherAPI.get(`/gridpoints/${gridId}/${gridX},${gridY}/forecast`)
  } catch (error) {
    throw new Error(`${error}`)
  }
}
