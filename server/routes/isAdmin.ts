import express from 'express'

import { validateAccessToken } from '../auth0'

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    if (req.auth?.payload.permissions[0] === 'admin') {
      console.log(req.auth?.payload.permissions)
      const response = 'isAdmin'
      res.status(200).json(response)
    } else {
      const response = 'isNotAdmin'
      res.status(403).json(response)}
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
