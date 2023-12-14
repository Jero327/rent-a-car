import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Dashboard from './components/dashboard/Dashboard'
import Models from './components/dashboard/models/Models'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="dashboard" element={<Dashboard />}>
      <Route path="models" element={<Models />} />
    </Route>
  </Route>
)
