import express from 'express'

import * as db from '../db/db_functions/rentals'
import { validateAccessToken } from '../auth0'
import checkAdmin from './checkAdmin'

const router = express.Router()

router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub as string
  try {
    const newRental = { ...req.body, user_id: auth0Id }
    await db.addRental(newRental)

    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub as string
  try {
    const response = await db.getRentalsInfo(auth0Id)

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/allrentalsinfo', validateAccessToken, async (req, res) => {
  checkAdmin(req)
  
  try {
    const response = await db.getAllRentalsInfo()

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
