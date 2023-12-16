import { newCarProduct, updatedCarProduct } from '../../../type/carProducts'
import db from '../connection'

export async function getAllCarProducts() {
  const res = await db('carProducts').select()
  return res.reverse()
}

export async function deleteCarProduct(carProductId: number) {
  await db('carProducts').where('id', carProductId).del()
}

export async function addCarProduct(newCarProduct: newCarProduct) {
  await db('carProducts').insert(newCarProduct)
}

export async function editCarProduct(
  carProductId: number,
  updatedCarProduct: updatedCarProduct
) {
  await db('carProducts').where('id', carProductId).update(updatedCarProduct)
}
