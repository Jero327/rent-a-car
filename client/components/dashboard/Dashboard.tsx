import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <h1>This is Dashboard HomePage</h1>
      <Link to={`/dashboard/models`}>Manage Models</Link>
      <Outlet />
    </>
  )
}

export default Dashboard
