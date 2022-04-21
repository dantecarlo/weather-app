import axios from 'axios'

export const geolocationAPI = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/locations'
})

export const getGeolocation = ({ address = '' }) => {
  try {
    if (address === '') return undefined
    return geolocationAPI.get(`/onelineaddress?address=${address}&benchmark=2020&format=json`)
  } catch (error) {
    throw new Error(`${error}`)
  }
}
