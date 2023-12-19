import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addCarProduct } from '../../../client_api/carProducts'
import { useAuth0 } from '@auth0/auth0-react'
import { newCarProduct } from '../../../../type/carProducts'

function AddCarProduct() {
  const { getAccessTokenSilently } = useAuth0()
  const [isAddCarProduct, setIsAddCarProduct] = useState(false)

  function handleAddNewCarProduct() {
    setIsAddCarProduct(!isAddCarProduct)
  }

  const queryClient = useQueryClient()

  async function insertCarProduct(c: newCarProduct) {
    const accessToken = await getAccessTokenSilently()
    await addCarProduct(c, accessToken)
  }

  const mutation = useMutation({
    mutationFn: (carProduct: newCarProduct) => insertCarProduct(carProduct),
    onSuccess: () => queryClient.invalidateQueries(['carProducts']),
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const rego_number = form.get('rego_number') as string
    const model = Number(form.get('model')) as number
    const location = Number(form.get('location')) as number
    const daily_rate = Number(form.get('daily_rate')) as number
    const is_available = form.get('is_available') === 'on'

    const newCarProduct = {
      rego_number: rego_number,
      model_id: model,
      location_id: location,
      daily_rate: daily_rate,
      is_available: is_available,
    }

    mutation.mutate(newCarProduct)
    e.currentTarget.reset()
  }

  return (
    <>
      <h2>This is add new car product page</h2>
      <button onClick={handleAddNewCarProduct}>Add new car product</button>
      <br />
      <br />
      {isAddCarProduct && (
        <form onSubmit={handleSubmit}>
          <label>
            Rego number:
            <input name="rego_number" type="text" required></input>
          </label>
          <label>
            Model:
            <input name="model" type="number" required></input>
          </label>
          <label>
            Location:
            <input name="location" type="number" required></input>
          </label>
          <label>
            Daily rate:
            <input name="daily_rate" type="number" required></input>
          </label>
          <label>
            Available?
            <input name="is_available" type="checkbox"></input>
          </label>
          <input type="submit" value="Add"></input>
        </form>
      )}
    </>
  )
}

export default AddCarProduct
