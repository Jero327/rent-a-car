import request from "superagent";

const baseURL = '/api/v1/models'

export async function getAllModels(token: string) {
  const response = await request
    .get(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return response.body
}