const express = require('express')
const path = require('path')

const photoRoutes = require('./routes/photos')
const albumRoutes = require('./routes/albums')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use('/api/photosAPI', photoRoutes)
server.use('/api/albumsAPI', albumRoutes)

module.exports = server
