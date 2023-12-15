import { newLocation, updatedLocation } from '../../../type/locations'
import db from '../connection'

export async function getAllLocations() {
  const res = await db('locations').select()
  return res.reverse()
}

export async function deleteLocation(locationId: number) {
  await db('locations').where('id', locationId).del()
}

export async function addLocation(newLocation: newLocation) {
  await db('locations').insert(newLocation)
}

export async function editLocation(
  locationId: number,
  updatedLocation: updatedLocation
) {
  await db('locations').where('id', locationId).update(updatedLocation)
}
