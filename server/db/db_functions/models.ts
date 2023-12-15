import { newModel, updatedModel } from '../../../type/carModels'
import db from '../connection'

export async function getAllModels() {
  return await db('models').select()
}

export async function deleteModel(modelId: number) {
  await db('models').where('id', modelId).del()
}

export async function addModel(newModel: newModel) {
  await db('models').insert(newModel)
}

export async function editModel(modelId: number, updatedModel: updatedModel) {
  await db('models').where('id', modelId).update(updatedModel)
}
