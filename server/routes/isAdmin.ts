import express from 'express'

import { validateAccessToken } from '../auth0'
import checkAdmin from './checkAdmin'

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
    const response = 'isAdmin'
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
