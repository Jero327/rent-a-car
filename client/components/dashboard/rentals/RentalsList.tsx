import { useAuth0 } from '@auth0/auth0-react'
import { getAllRentals } from '../../../client_api/rentals'
import { useQuery } from '@tanstack/react-query'
import { allRentals } from '../../../../type/rentals'

function RentalsList() {
  const { getAccessTokenSilently } = useAuth0()

  async function retriveAllRentals() {
    const accessToken = await getAccessTokenSilently()
    return await getAllRentals(accessToken)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['retriveAllRentals'],
    queryFn: retriveAllRentals,
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Something wrong!</div>

  return (
    <>
      {data?.length > 0 ? (
        <ul>{data.map((r: allRentals) => r.rentals_id)}</ul>
      ) : (
        <>Currently, there are no rentals to display</>
      )}
    </>
  )
}

export default RentalsList
