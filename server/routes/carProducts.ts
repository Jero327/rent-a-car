import express from 'express'

import * as db from '../db/db_functions/carProducts'
import { validateAccessToken } from '../auth0'

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    const response = await db.getAllCarProducts()
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:carProductId', validateAccessToken, async (req, res) => {
  try {
    const carProductId = Number(req.params.carProductId)
    await db.deleteCarProduct(carProductId)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const newCarProduct = req.body
    await db.addCarProduct(newCarProduct)

    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.put('/:carProductId', validateAccessToken, async (req, res) => {
  try {
    const carProductId = Number(req.params.carProductId)
    const updatedCarProduct = req.body
    await db.editCarProduct(carProductId, updatedCarProduct)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
