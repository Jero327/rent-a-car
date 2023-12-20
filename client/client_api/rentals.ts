import request from 'superagent'

const baseURL = '/api/v1/rentals'

interface newRental {
  carProducts_id: number
  start_date: string
  end_date: string
  start_location: string
  end_location: string
}

export async function addRental(newRental: newRental, token: string) {
  await request
    .post(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newRental)
}
