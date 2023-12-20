import { useSearchParams } from "react-router-dom"

function Search() {
  const [searchParams] = useSearchParams()
  const pick_up = searchParams.get('pick_up')
  const pick_up_time = searchParams.get('pick_up_time')
  const drop = searchParams.get('drop')
  const drop_time = searchParams.get('drop_time')
  console.log(pick_up)
  console.log(pick_up_time)
  console.log(drop)
  console.log(drop_time)

  return(<><h2>This is search result page</h2></>)
}

export default Search