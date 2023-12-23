import { newRental } from '../../../type/rentals'
import db from '../connection'

export async function addRental(newRental: newRental) {
  await db('rentals').insert(newRental)
}

export async function getRentalsInfo(userId: string) {
  const res = await db('rentals')
    .join('carProducts', 'rentals.carProducts_id', 'carProducts.id')
    .join('models', 'carProducts.model_id', 'models.id')
    .where('rentals.user_id', userId)
    .select(
      'rentals.id as rentals_id',
      'rentals.start_date as start_date',
      'rentals.end_date as end_date',
      'rentals.start_location as start_location',
      'rentals.end_location as end_location',
      'carProducts.daily_rate as daily_rate',
      'models.name as model',
      'models.make as make',
      'models.year as year',
      'models.fuel_type as fuel_type',
    )
  return res.reverse()
}

export async function getAllRentalsInfo() {
  const res = await db('rentals')
    .join('carProducts', 'rentals.carProducts_id', 'carProducts.id')
    .join('models', 'carProducts.model_id', 'models.id')
    .select(
      'rentals.id as rentals_id',
      'rentals.start_date as start_date',
      'rentals.end_date as end_date',
      'rentals.start_location as start_location',
      'rentals.end_location as end_location',
      'carProducts.daily_rate as daily_rate',
      'models.name as model',
      'models.make as make',
      'models.year as year',
      'models.fuel_type as fuel_type',
      'rentals.user_id',
      'carProducts.rego_number',
      'carProducts.is_available'
    )
  return res.reverse()
}
