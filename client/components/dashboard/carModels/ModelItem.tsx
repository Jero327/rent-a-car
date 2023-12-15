import { useAuth0 } from '@auth0/auth0-react'
import { model, newModel } from '../../../../type/carModels'
import { removeModel, updateModel } from '../../../client_api/models'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

function ModelItem(props: model) {
  const [isEdit, setIsEdit] = useState(false)
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  async function deleteModel() {
    const accessToken = await getAccessTokenSilently()
    await removeModel(props.id, accessToken)
  }

  const mutation = useMutation({
    mutationFn: () => deleteModel(),
    onSuccess: () => queryClient.invalidateQueries(['models']),
  })

  function handleDelete() {
    mutation.mutate()
  }

  async function insertModel(m: newModel) {
    const accessToken = await getAccessTokenSilently()
    await updateModel(props.id, m, accessToken)
  }

  const editMutation = useMutation({
    mutationFn: (model: newModel) => insertModel(model),
    onSuccess: () => queryClient.invalidateQueries(['models']),
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name') as string
    const make = form.get('make') as string
    const year = Number(form.get('year')) as number
    const fuel_type = form.get('fuel_type') as string
    const newModel = {
      name: name,
      make: make,
      year: year,
      fuel_type: fuel_type,
    }

    editMutation.mutate(newModel)
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
              Name:
              <input name="name" type="text" defaultValue={props.name} required></input>
            </label>
            <label>
              Make:
              <input name="make" type="text" defaultValue={props.make} required></input>
            </label>
            <label>
              Year:
              <input name="year" type="number" defaultValue={props.year} required></input>
            </label>
            <label>
              Fuel type:
              <input name="fuel_type" type="text" defaultValue={props.fuel_type} required></input>
            </label>
            <input type="submit" value="Update"></input>
          </form>
      ) : (
        <li>
          Model: {props.name}
          <br />
          Make: {props.make}
          <br />
          Year: {props.year}
          <br />
          Fuel: {props.fuel_type}
          <br />
          <button onClick={handleEdit}>EDIT</button>
          <button onClick={handleDelete}>DELETE</button>
        </li>
      )}
    </>
  )
}

export default ModelItem
