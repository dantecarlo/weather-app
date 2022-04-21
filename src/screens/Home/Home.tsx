import { useState } from 'react'
import { getGeolocation } from 'services/geolocation.api'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'

import { geolocationAdapter } from 'adapters'
import { getGrid, getWeather } from 'services/weather.api'
import { useQuery } from 'react-query'
import { girdAdapter, weatherAdapter } from 'adapters/weather.adapter'
import SearchBar from '../../components/Shared/SearchBar/SearchBar'
import { StyledHomeContainer, StyledSpinner, StyledCardsContainer } from './Home.styles'
import WeatherCard from '../../components/Home/WeatherCard/WeatherCard'

const Home = () => {
  const [t] = useTranslation('global')
  const { enqueueSnackbar } = useSnackbar()

  const [searchAddress, setSearchAddress] = useState('')

  const {
    data: geoDataAPI,
    isFetching: isGeoFetching,
    error: geoError,
    isError: isGeoError
  } = useQuery(['geolocations', searchAddress], () => getGeolocation({ address: searchAddress }))

  const { addressData } =
    !isGeoFetching && geoDataAPI ? geolocationAdapter(geoDataAPI) : { addressData: undefined }

  const {
    data: gridDataAPI,
    isFetching: isGridFetching,
    error: gridError,
    isError: isGridError
  } = useQuery(['grid', addressData], () => {
    if (addressData) {
      return getGrid({
        latitude: addressData[0].coordinates.y,
        longitude: addressData[0].coordinates.x
      })
    }
    return undefined
  })

  const { gridId, gridX, gridY } =
    !isGridFetching && gridDataAPI
      ? girdAdapter(gridDataAPI)
      : { gridId: undefined, gridX: undefined, gridY: undefined }

  const {
    data: weatherDataAPI,
    isFetching: isWeatherFetching,
    isError: isWeatherError,
    error: weatherError
  } = useQuery(['weather', gridDataAPI], () => {
    if (gridId && gridX && gridY) {
      return getWeather({
        gridId,
        gridX,
        gridY
      })
    }
    return undefined
  })

  const { weatherData } =
    !isWeatherFetching && weatherDataAPI
      ? weatherAdapter(weatherDataAPI)
      : { weatherData: undefined }

  if (isGeoError) {
    enqueueSnackbar(`${geoError}`, {
      variant: 'error'
    })
  }

  if (isGridError) {
    enqueueSnackbar(`${gridError}`, {
      variant: 'error'
    })
  }

  if (isWeatherError) {
    enqueueSnackbar(`${weatherError}`, {
      variant: 'error'
    })
  }

  console.log('weatherData', weatherData)

  return (
    <StyledHomeContainer>
      <SearchBar onSearch={setSearchAddress} placeholder={t('screen.Home.searchBarPlaceholder')} />
      {(isGeoFetching || isGridFetching || isWeatherFetching) && <StyledSpinner />}
      <StyledCardsContainer>
        {weatherData &&
          weatherData.map((days: any, index: number) => {
            const cardKey = `card-key-${index}`
            return <WeatherCard weatherData={days} key={cardKey} />
          })}
      </StyledCardsContainer>
    </StyledHomeContainer>
  )
}

export default Home
