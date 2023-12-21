export interface newRental {
  carProducts_id: number
  user_id: string
  start_date: string
  end_date: string
  start_location: string
  end_location: string
}

export interface rental extends newRental {
  id: number
}

export interface myRentals {
  rentals_id: number
  start_date: string
  end_date: string
  start_location: string
  end_location: string
  daily_rate: number
  model: string
  make: string
  year: number
  fuel_type: string
}
