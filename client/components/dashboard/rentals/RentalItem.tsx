import { allRentals } from '../../../../type/rentals'

function RentalItem(props: allRentals) {
  return (
    <li>
      Rentals Id: {props.rentals_id}
      <br />
      User Id: {props.user_id}
      <br />
      Pick up: {props.start_date}
      <br />
      Return: {props.end_date}
      <br />
      From {props.start_location} to {props.end_location}
      <br />
      Rego number: {props.rego_number}
      <br />
      Rate: {props.daily_rate}
      <br />
      Model: {props.model}
      <br />
      Make: {props.make}
      <br />
      Year: {props.year}
      <br />
      Fuel: {props.fuel_type}
      <br />
      Available: {props.is_available ? <>yes</> : <>no</>}
    </li>
  )
}

export default RentalItem
