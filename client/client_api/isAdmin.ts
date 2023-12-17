import request from 'superagent'

const baseURL = '/api/v1/isAdmin'

export async function checkIsAdmin(token: string) {
  const response = await request
    .get(`${baseURL}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return response.body
}
