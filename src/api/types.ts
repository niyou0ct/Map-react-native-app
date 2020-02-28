export type GeocodeAPIResponse = {
  results: GeocodeAPIResponseResult[]
  status: string
}

export type GeocodeAPIResponseResult = {
  address_components: {
    long_name: string
    short_name: string
    types: string[]
  }[]
  formatted_address: string
  geometry: {
    location: {
      lat: number
      lng: number
    }
    location_type: string
    viewport: {
      northeast: {
        lat: number
        lng: number
      }
      southwest: {
        lat: number
        lng: number
      }
    }
  }
  place_id: string
  plus_code: {
    compound_code: string
    global_code: string
  }
  types: string[]
}
