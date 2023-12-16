import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Dashboard() {
  const { user, isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated) {
    loginWithRedirect()
    return null
  }

  return (
    <>
      <h1>This is Dashboard HomePage</h1>

      {user?.sub === 'auth0|657aa87d5284b2ee5d38be4b' ? (
        <>
          <h2>Admin User: {user.name}</h2>
          <Link to={`/dashboard/models`}>Manage Models</Link><br />
          <Link to={`/dashboard/locations`}>Manage Locations</Link>
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
