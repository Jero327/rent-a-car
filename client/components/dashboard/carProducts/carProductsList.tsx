import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAllCarProducts } from '../../../client_api/carProducts'
import { carProduct } from '../../../../type/carProducts'

function CarProductsList() {
  const { getAccessTokenSilently } = useAuth0()

  async function retriveCarProducts() {
    const accessToken = await getAccessTokenSilently()
    return await getAllCarProducts(accessToken)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['carProducts'],
    queryFn: retriveCarProducts,
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
                {data.map((c: carProduct) => (
                  <>{c.rego_number}</>
                ))}
              </ul>
            </>
          ) : (
            <div>Please add your first carProduct</div>
          )}
        </ul>
      </div>
    </>
  )
}

export default CarProductsList
