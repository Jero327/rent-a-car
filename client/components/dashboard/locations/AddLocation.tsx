import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addLocation } from '../../../client_api/locations'
import { useAuth0 } from '@auth0/auth0-react'
import { newLocation } from '../../../../type/locations'

function AddLocation() {
  const { getAccessTokenSilently } = useAuth0()
  const [isAddLocation, setIsAddLocation] = useState(false)

  function handleAddNewLocation() {
    setIsAddLocation(!isAddLocation)
  }

  const queryClient = useQueryClient()

  async function insertLocation(l: newLocation) {
    const accessToken = await getAccessTokenSilently()
    await addLocation(l, accessToken)
  }

  const mutation = useMutation({
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

    mutation.mutate(newLocation)
    e.currentTarget.reset()
  }

  return (
    <>
      <h2>This is add new location page</h2>
      <button onClick={handleAddNewLocation}>Add new location</button>
      <br />
      <br />
      {isAddLocation && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" required></input>
          </label>
          <input type="submit" value="Add"></input>
        </form>
      )}
    </>
  )
}

export default AddLocation
