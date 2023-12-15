import { useAuth0 } from '@auth0/auth0-react'
import { model } from '../../../../type/carModels'
import { removeModel } from '../../../client_api/models'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function ModelItem(props: model) {
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

  return (
    <>
      <li>
        Model: {props.name}<br />
        Make: {props.make}<br />
        Year: {props.year}<br />
        Fuel: {props.fuel_type}<br />
        <button>EDIT</button>
        <button onClick={handleDelete}>DELETE</button>
      </li>
    </>
  )
}

export default ModelItem
