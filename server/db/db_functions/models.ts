import db from '../connection'

export async function getAllModels() {
  return await db('models').select()
}