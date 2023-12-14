export interface newModel {
  name: string
  make: string
  year: number
  fuel_type: string
}

export interface model extends newModel {
  id: number
}

export interface updatedModel {
  name: string
  make: string
  year: number
  fuel_type: string
}
