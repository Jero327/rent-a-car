import * as Path from 'node:path'
import express from 'express'

import models from './routes/models'
import locations from './routes/locations'
import carproducts from './routes/carProducts'
import isAdmin from './routes/isAdmin'

const server = express()

server.use(express.json())

server.use('/api/v1/models', models)
server.use('/api/v1/locations', locations)
server.use('/api/v1/carproducts', carproducts)
server.use('/api/v1/isAdmin', isAdmin)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
