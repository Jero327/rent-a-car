import { useAuth0 } from "@auth0/auth0-react"
import { getRentals } from "../client_api/rentals"
import { useQuery } from "@tanstack/react-query"
import { myRentals } from "../../type/rentals"

function MyBooking() {
  const { getAccessTokenSilently } = useAuth0()

  async function retrieveMyBooking() {
    const accessToken = await getAccessTokenSilently()
    return await getRentals(accessToken)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['retrieveMyBooking'],
    queryFn: retrieveMyBooking,
  })

  if (isLoading) return <>Loading...</>

  if (error) return <>Something wrong</>

  return (
    <>
      <h2>This is my booking page</h2>

      <ul>
        {data?.map((m: myRentals) => (
          <li key={m.rentals_id}>
            <h4>Booking reference number: {m.rentals_id}</h4>
            <h4>
              Your {m.make} {m.model}({m.year}) is reserved
            </h4>
            <h4>Fuel type: {m.fuel_type}</h4>
            <h4>
              Pick up: {m.start_date} from {m.start_location}
            </h4>
            <h4>
              Return: {m.end_date} to {m.end_location}
            </h4>
            <h4>Daily rate: {m.daily_rate}</h4>
          </li>
        ))}
      </ul>

      {data?.length===0?<>No bookings yet...</>:null}
    </>
  )
}

export default MyBooking
