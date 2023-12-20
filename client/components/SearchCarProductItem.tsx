import { useState } from 'react'
import { searchCarProductsData } from '../../type/carProducts'

function SearchCarProductItem(props: searchCarProductsData) {
  const [confirm, setConfirm] = useState(false)
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
          <button>Confirm</button>
        </>
      ) : (
        <button onClick={() => setConfirm(true)}>Book</button>
      )}
    </li>
  )
}

export default SearchCarProductItem
