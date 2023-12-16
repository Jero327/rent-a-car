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
