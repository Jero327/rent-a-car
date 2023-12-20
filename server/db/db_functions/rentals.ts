import { newRental } from '../../../type/rentals'
import db from '../connection'

export async function addRental(newRental: newRental) {
  await db('rentals').insert(newRental)
}
