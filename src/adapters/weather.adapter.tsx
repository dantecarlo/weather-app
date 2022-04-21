export const girdAdapter = (gridAPIData: any) => ({
  gridId: gridAPIData.data.properties.gridId,
  gridX: gridAPIData.data.properties.gridX,
  gridY: gridAPIData.data.properties.gridY
})

export const weatherAdapter = (geolocationAPIData: any) => {
  console.log(geolocationAPIData.data.properties.periods)
  const weatherData = geolocationAPIData.data.properties.periods.filter(
    (days: any) => days?.isDaytime === true
  )

  return {
    weatherData
  }
}
