import express from "express"

import * as db from '../db/db'
import { validateAccessToken } from "../auth0"

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    const response = await db.getAllCars()
    res.json(response)
  } catch (error) {
    console.error(error)
  }
})

export default router