import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { checkIsAdmin } from '../../client_api/isAdmin'
import { useState } from 'react'

function Dashboard() {
  const [isAdmin, setIsAdmin] = useState('')

  const {
    user,
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated) {
    loginWithRedirect()
    return null
  }

  async function checkAdmin() {
    const accessToken = await getAccessTokenSilently()
    const res = await checkIsAdmin(accessToken)
    setIsAdmin(res)
  }

  checkAdmin()

  return (
    <>
      <h1>This is Dashboard HomePage</h1>

      {isAdmin === 'isAdmin' ? (
        <>
          <h2>Admin User: {user?.name}</h2>
          <Link to={`/dashboard/models`}>Manage Models</Link>
          <br />
          <Link to={`/dashboard/locations`}>Manage Locations</Link>
          <br />
          <Link to={`/dashboard/carproducts`}>Manage car products</Link>
          <Outlet />
        </>
      ) : (
        <>
          <div>Please use admin account to log in!</div>
        </>
      )}
    </>
  )
}

export default Dashboard
