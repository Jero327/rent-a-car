import express from "express"

import * as db from '../db/db_functions/locations'
import { validateAccessToken } from "../auth0"
import checkAdmin from "./checkAdmin"

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    // checkAdmin(req)
    const response = await db.getAllLocations()
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:locationId', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
    const locationId = Number(req.params.locationId)
    await db.deleteLocation(locationId)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
     const newLocation = req.body
     await db.addLocation(newLocation)

     res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.put('/:locationId', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
    const locationId = Number(req.params.locationId)
    const updatedLocation = req.body
    await db.editLocation(locationId, updatedLocation)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router