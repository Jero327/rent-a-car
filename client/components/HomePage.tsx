import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function HomePage() {
  return (
    <>
      <h2>This is HomePage.</h2>
      <Link to={`/dashboard`}>Admin Page</Link>
      <br />

      <IfAuthenticated>
        <Link to={`/mybooking`}>My Booking</Link>
        <br />
        <Link to={`/booking`}>Book Now</Link>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <h3>Please Sign In to book your next adventure!</h3>
      </IfNotAuthenticated>
    </>
  )
}

export default HomePage
