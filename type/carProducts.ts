export interface newCarProduct {
  rego_number: string
  model_id: number
  location_id: number
  daily_rate: number
  is_available: boolean
}

export interface carProduct extends newCarProduct {
  id: number
}

export interface updatedCarProduct {
  rego_number: string
  model_id: number
  location_id: number
  daily_rate: number
  is_available: boolean
}

export interface carProductData {
  id: number
  rego_number: string
  model: string
  location: string
  daily_rate: number
  is_available: boolean
}

export interface searchCarProductsData {
  id: number
  daily_rate: number
  model: string
  make: string
  year: number
  fuel_type: string
  location: string
}
