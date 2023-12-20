import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Dashboard from './components/dashboard/Dashboard'
import Models from './components/dashboard/carModels/Models'
import Locations from './components/dashboard/locations/Locations'
import CarProducts from './components/dashboard/carProducts/CarProducts'
import Booking from './components/Book'
import Search from './components/Search'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="booking" element={<Booking />} />
    <Route path="search" element={<Search />} />
    <Route path="dashboard" element={<Dashboard />}>
      <Route path="models" element={<Models />} />
      <Route path="locations" element={<Locations />} />
      <Route path="carproducts" element={<CarProducts />} />
    </Route>
  </Route>
)
