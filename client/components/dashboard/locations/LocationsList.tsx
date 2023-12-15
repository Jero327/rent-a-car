import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAllLocations } from '../../../client_api/locations'
import { location } from '../../../../type/locations'
import LocationItem from './LocationItem'

function LocationsList() {
  const { getAccessTokenSilently } = useAuth0()

  async function retriveLocations() {
    const accessToken = await getAccessTokenSilently()
    return await getAllLocations(accessToken)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['locations'],
    queryFn: retriveLocations,
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Something wrong!</div>

  return (
    <>
      <div>
        <ul>
          {data.length > 0 ? (
            <>
              <ul>
                {data.map((location: location) => (
                  <LocationItem key={location.id} {...location} />
                ))}
              </ul>
            </>
          ) : (
            <div>Please add your first location</div>
          )}
        </ul>
      </div>
    </>
  )
}

export default LocationsList
