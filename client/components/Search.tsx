import { useAuth0 } from '@auth0/auth0-react'
import { useSearchParams } from 'react-router-dom'
import { searchCarProducts } from '../client_api/carProducts'
import { useQuery } from '@tanstack/react-query'
import { searchCarProductsData } from '../../type/carProducts'
import SearchCarProductItem from './SearchCarProductItem'

function Search() {
  const { getAccessTokenSilently } = useAuth0()

  const [searchParams] = useSearchParams()
  const pick_up_id = Number(searchParams.get('pick_up')?.split('-')[0])
  const pick_up = searchParams.get('pick_up')?.split('-')[1] as string
  const pick_up_time = searchParams.get('pick_up_time') as string
  const drop = searchParams.get('drop') as string
  const drop_time = searchParams.get('drop_time') as string

  async function retriveSearchCarProductsData() {
    const accessToken = await getAccessTokenSilently()
    return await searchCarProducts(
      pick_up_id,
      accessToken,
      pick_up_time,
      drop_time
    )
  }

  const {
    data: searchCarProductsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['searchCarProductsData'],
    queryFn: retriveSearchCarProductsData,
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Something wrong!</div>

  return (
    <>
      <h2>This is search result page</h2>
      <h4>Pickup: {pick_up}</h4>
      <h5>{pick_up_time}</h5>
      <h4>Return: {drop}</h4>
      <h5>{drop_time}</h5>
      <ul>
        {searchCarProductsData?.map((s: searchCarProductsData) => (
          <SearchCarProductItem
            key={s.id}
            {...s}
            start_date={pick_up_time}
            end_date={drop_time}
            start_location={pick_up}
            end_location={drop}
          />
        ))}
      </ul>
    </>
  )
}

export default Search
