import express from 'express'

import * as db from '../db/db_functions/rentals'
import { validateAccessToken } from '../auth0'

const router = express.Router()

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const newRental = req.body
    await db.addRental(newRental)

    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
