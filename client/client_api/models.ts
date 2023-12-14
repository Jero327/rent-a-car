import request from "superagent";

const baseURL = '/api/v1/models'

export async function getAllModels() {
  const response = await request.get(`${baseURL}`)
  return response.body
}