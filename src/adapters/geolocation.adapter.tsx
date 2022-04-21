// eslint-disable-next-line import/prefer-default-export
export const geolocationAdapter = (geolocationAPIData: any) => ({
  addressData: geolocationAPIData.data.result.addressMatches
})
