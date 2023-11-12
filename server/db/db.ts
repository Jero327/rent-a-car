import db from './connection'

export async function getAllCars() {
  return await db('cars').select()
}