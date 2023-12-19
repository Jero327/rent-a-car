import { useAuth0 } from '@auth0/auth0-react'
import { getAllLocations } from '../client_api/locations'
import { useQuery } from '@tanstack/react-query'
import { location } from '../../type/locations'

function Booking() {
  const { getAccessTokenSilently } = useAuth0()
  async function retriveLocations() {
    const accessToken = await getAccessTokenSilently()
    return await getAllLocations(accessToken)
  }

  const {
    data: locationsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: retriveLocations,
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Something wrong!</div>

  return (
    <>
      <h2>This is Booking page.</h2>
      <br />
      <br />
      <form>
        <label>
          Pick up:
          <select name="pick_up">
            <option selected disabled hidden>
              Select a Location
            </option>
            {locationsData?.map((l: location) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Pick up Time:
          <input name="pick_up_time" type="date" required></input>
        </label>
        <label>
          Return:
          <select name="return">
            <option selected disabled hidden>
              Select a Location
            </option>
            {locationsData?.map((l: location) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Return Time:
          <input name="return_time" type="date" required></input>
        </label>
        <input type="submit" value="Find my car"></input>
      </form>
    </>
  )
}

export default Booking
