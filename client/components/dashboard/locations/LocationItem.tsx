import { useAuth0 } from '@auth0/auth0-react'
import { location, newLocation } from '../../../../type/locations'
import { removeLocation, updateLocation } from '../../../client_api/locations'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

function LocationItem(props: location) {
  const [isEdit, setIsEdit] = useState(false)
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  async function deleteLocation() {
    const accessToken = await getAccessTokenSilently()
    await removeLocation(props.id, accessToken)
  }

  const mutation = useMutation({
    mutationFn: () => deleteLocation(),
    onSuccess: () => queryClient.invalidateQueries(['locations']),
  })

  function handleDelete() {
    mutation.mutate()
  }

  async function insertLocation(l: newLocation) {
    const accessToken = await getAccessTokenSilently()
    await updateLocation(props.id, l, accessToken)
  }

  const editMutation = useMutation({
    mutationFn: (location: newLocation) => insertLocation(location),
    onSuccess: () => queryClient.invalidateQueries(['locations']),
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name') as string
    const newLocation = {
      name: name,
    }

    editMutation.mutate(newLocation)
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
            <input
              name="name"
              type="text"
              defaultValue={props.name}
              required
            ></input>
          </label>
          <input type="submit" value="Update"></input>
        </form>
      ) : (
        <li>
          Location: {props.name}<br />
          <button onClick={handleEdit}>EDIT</button>
          <button onClick={handleDelete}>DELETE</button>
        </li>
      )}
    </>
  )
}

export default LocationItem
