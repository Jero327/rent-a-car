import { useState } from 'react'
import { searchCarProductsData } from '../../type/carProducts'
import { addRental } from '../client_api/rentals'
import { useAuth0 } from '@auth0/auth0-react'

interface Props extends searchCarProductsData {
  start_date: string
  end_date: string
  start_location: string
  end_location: string
}

function SearchCarProductItem(props: Props) {
  const [confirm, setConfirm] = useState(false)
  const { getAccessTokenSilently } = useAuth0()

  const newRental = {
    carProducts_id: props.id,
    start_date: props.start_date,
    end_date: props.end_date,
    start_location: props.start_location,
    end_location: props.end_location
  }

  async function handleConfirm(){
    const accessToken = await getAccessTokenSilently()
    await addRental(newRental, accessToken)
  }

  return (
    <li>
      Model: {props.model}
      <br />
      Make: {props.make}
      <br />
      Daily_rate: {props.daily_rate}
      <br />
      Year: {props.year}
      <br />
      Fuel_type: {props.fuel_type}
      <br />
      {confirm ? (
        <>
          <button onClick={() => setConfirm(false)}>Cancell</button>
          <button onClick={handleConfirm}>Confirm</button>
        </>
      ) : (
        <button onClick={() => setConfirm(true)}>Book</button>
      )}
    </li>
  )
}

export default SearchCarProductItem
