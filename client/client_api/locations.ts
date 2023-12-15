import request from 'superagent'
import { newLocation } from '../../type/locations'

const baseURL = '/api/v1/locations'

export async function getAllLocations(token: string) {
  const response = await request
    .get(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return response.body
}

export async function addLocation(newLocation: newLocation, token: string) {
  await request
    .post(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newLocation)
}

export async function removeLocation(locationId: number, token: string) {
  await request
    .delete(`${baseURL}/${locationId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
}

export async function updateLocation(
  locationId: number,
  newLocation: newLocation,
  token: string
) {
  await request
    .put(`${baseURL}/${locationId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newLocation)
}
