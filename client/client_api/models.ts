import request from "superagent";
import { newModel } from "../../type/carModels";

const baseURL = '/api/v1/models'

export async function getAllModels(token: string) {
  const response = await request
    .get(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return response.body
}

export async function addModel(newModel: newModel, token: string) {
  await request
    .post(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newModel)
}
