import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { FC } from 'react'
import { IWeatherCard } from './WeatherCard.types'

const WeatherCard: FC<IWeatherCard> = ({ weatherData }) => {
  const { icon, name, shortForecast, temperature, temperatureUnit } = weatherData
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="weather image" height="140" image={icon} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6">
          {temperature}º {temperatureUnit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortForecast}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
