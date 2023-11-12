import express from "express"

import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await db.getAllCars()
    res.json(response)
  } catch (error) {
    console.error(error)
  }
})

export default router