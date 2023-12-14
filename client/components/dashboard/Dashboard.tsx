import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <h1>This is Dashboard page</h1>
      <Link to={`/dashboard/models`}>models</Link>
      <Outlet />
    </>
  )
}

export default Dashboard
