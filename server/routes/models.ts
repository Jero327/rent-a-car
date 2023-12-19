import express from "express"

import * as db from '../db/db_functions/models'
import { validateAccessToken } from "../auth0"
import checkAdmin from "./checkAdmin"

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
    const response = await db.getAllModels()
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:modelId', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
    const modelId = Number(req.params.modelId)
    await db.deleteModel(modelId)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
     const newModel = req.body
     await db.addModel(newModel)

     res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.put('/:modelId', validateAccessToken, async (req, res) => {
  try {
    checkAdmin(req)
     const modelId = Number(req.params.modelId)
     const updatedModel = req.body
     await db.editModel(modelId, updatedModel)

     res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router