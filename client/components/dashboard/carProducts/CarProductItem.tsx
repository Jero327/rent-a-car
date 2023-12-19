import { useAuth0 } from '@auth0/auth0-react'
import { carProductData, newCarProduct } from '../../../../type/carProducts'
import { removeCarProduct, updateCarProduct } from '../../../client_api/carProducts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { model } from '../../../../type/carModels'
import { location } from '../../../../type/locations'
import { getAllModels } from '../../../client_api/models'
import { getAllLocations } from '../../../client_api/locations'

function CarProductItem(props: carProductData) {
  const [isEdit, setIsEdit] = useState(false)

  async function retriveModels() {
    const accessToken = await getAccessTokenSilently()
    return await getAllModels(accessToken)
  }

  const { data: modelsData } = useQuery({
    queryKey: ['models'],
    queryFn: retriveModels,
  })

  async function retriveLocations() {
    const accessToken = await getAccessTokenSilently()
    return await getAllLocations(accessToken)
  }

  const { data: locationsData } = useQuery({
    queryKey: ['locations'],
    queryFn: retriveLocations,
  })

  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  async function deleteCarProduct() {
    const accessToken = await getAccessTokenSilently()
    await removeCarProduct(props.id, accessToken)
  }

  const mutation = useMutation({
    mutationFn: () => deleteCarProduct(),
    onSuccess: () => queryClient.invalidateQueries(['carProducts']),
  })

  function handleDelete() {
    mutation.mutate()
  }

  async function insertCarProduct(c: newCarProduct) {
    const accessToken = await getAccessTokenSilently()
    await updateCarProduct(props.id, c, accessToken)
  }

  const editMutation = useMutation({
    mutationFn: (c: newCarProduct) => insertCarProduct(c),
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

    editMutation.mutate(newCarProduct)
    setIsEdit(false)
  }

  function handleEdit() {
    setIsEdit(true)
  }

  return (
    <>
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <label>
            Rego number:
            <input name="rego_number" type="text" defaultValue={props.rego_number} required></input>
          </label>
          <label>
            Model:
            <select name="model">
              {modelsData.map((m: model) => (
                <option key={m.id} value={m.id} selected={m.name===props.model?true:false}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Location:
            <select name="location">
              {locationsData.map((l: location) => (
                <option key={l.id} value={l.id} selected={l.name===props.location?true:false}>
                  {l.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Daily rate:
            <input name="daily_rate" type="number" defaultValue={props.daily_rate} required></input>
          </label>
          <label>
            Available?
            <input name="is_available" type="checkbox" defaultChecked={props.is_available?true:false}></input>
          </label>
          <input type="submit" value="Update"></input>
        </form>
      ) : (
        <li>
          id: {props.id}
          <br />
          rego_number: {props.rego_number}
          <br />
          daily_rate: {props.daily_rate}
          <br />
          location: {props.location}
          <br />
          model: {props.model}
          <br />
          is_available: {props.is_available ? <>yes</> : <>no</>}
          <br />
          <button onClick={handleEdit}>EDIT</button>
          <button onClick={handleDelete}>DELETE</button>
        </li>
      )}
    </>
  )
}

export default CarProductItem
