import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAllModels } from '../../../client_api/models'
import { model } from '../../../../type/carModels'

function ModelsList() {
  const { getAccessTokenSilently } = useAuth0()

  async function retriveModels() {
    const accessToken = await getAccessTokenSilently()
    return await getAllModels(accessToken)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['models'],
    queryFn: retriveModels,
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
                {data.map((model: model) => (
                  <li key={model.id}>{model.name}</li>
                ))}
              </ul>
            </>
          ) : (
            <div>Please add your first model</div>
          )}
        </ul>
      </div>
    </>
  )
}

export default ModelsList
