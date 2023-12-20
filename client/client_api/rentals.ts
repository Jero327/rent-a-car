import request from 'superagent'
import { newRental } from '../../type/rentals'

const baseURL = '/api/v1/rentals'

export async function addRental(newRental: newRental, token: string) {
  await request
    .post(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newRental)
}
