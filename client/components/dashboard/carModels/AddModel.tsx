import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addModel } from '../../../client_api/models'
import { useAuth0 } from '@auth0/auth0-react'
import { newModel } from '../../../../type/carModels'

function AddModel() {
  const { getAccessTokenSilently } = useAuth0()
  const [isAddModel, setIsAddModel] = useState(false)

  function handleAddNewModel() {
    setIsAddModel(!isAddModel)
  }

  const queryClient = useQueryClient()

  async function insertModel(m: newModel) {
    const accessToken = await getAccessTokenSilently()
    await addModel(m, accessToken)
  }

  const mutation = useMutation({
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

    mutation.mutate(newModel)
    e.currentTarget.reset()
  }

  return (
    <>
      <h2>This is add new model page</h2>
      <button onClick={handleAddNewModel}>Add new model</button>
      <br />
      <br />
      {isAddModel && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" required></input>
          </label>
          <label>
            Make:
            <input name="make" type="text" required></input>
          </label>
          <label>
            Year:
            <input name="year" type="number" required></input>
          </label>
          <label>
            Fuel type:
            <input name="fuel_type" type="text" required></input>
          </label>
          <input type="submit" value="Add"></input>
        </form>
      )}
    </>
  )
}

export default AddModel
