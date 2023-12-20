import { Link, Outlet } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function Layout() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
      <Link to={`/`}>
        <h1>Rent a car!</h1>
      </Link>

      <IfAuthenticated>
        <main>
          <Outlet />
        </main>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <h3>Please Sign In to book your next adventure!</h3>
      </IfNotAuthenticated>
    </>
  )
}

export default Layout
