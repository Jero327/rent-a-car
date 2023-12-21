import request from 'superagent'
import { newCarProduct } from '../../type/carProducts'

const baseURL = '/api/v1/carproducts'

export async function getAllCarProducts(token: string) {
  const response = await request
    .get(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return response.body
}

export async function addCarProduct(newCarProduct: newCarProduct, token: string) {
  await request
    .post(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newCarProduct)
}

export async function removeCarProduct(carProductId: number, token: string) {
  await request
    .delete(`${baseURL}/${carProductId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
}

export async function updateCarProduct(
  carProductId: number,
  newCarProduct: newCarProduct,
  token: string
) {
  await request
    .put(`${baseURL}/${carProductId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newCarProduct)
}

export async function searchCarProducts(
  locationId: number,
  token: string,
  start_date: string,
  end_date: string
) {
  const response = await request
    .get(`${baseURL}/${locationId}/${start_date}/${end_date}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return response.body
}
