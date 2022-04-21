export interface IGeolocationAPI {
  data: Data
  status: number
  statusText: string
  headers: IGeolocationAPIHeaders
  config: Config
  request: Request
}

export interface Config {
  transitional: Transitional
  transformRequest: null[]
  transformResponse: null[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  headers: ConfigHeaders
  baseURL: string
  method: string
  url: string
}

export interface ConfigHeaders {
  Accept: string
}

export interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export interface Data {
  result: Result
}

export interface Result {
  input: Input
  addressMatches: AddressMatch[]
}

export interface AddressMatch {
  matchedAddress: string
  coordinates: Coordinates
  tigerLine: TigerLine
  addressComponents: { [key: string]: string }
}

export interface Coordinates {
  x: number
  y: number
}

export interface TigerLine {
  tigerLineId: string
  side: string
}

export interface Input {
  benchmark: Benchmark
  address: Address
}

export interface Address {
  address: string
}

export interface Benchmark {
  id: string
  benchmarkName: string
  benchmarkDescription: string
  isDefault: boolean
}

export interface IGeolocationAPIHeaders {
  'cache-control': string
  'content-language': string
  'content-type': string
}
