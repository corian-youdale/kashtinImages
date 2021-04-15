const express = require('express')
const router = express.Router()

const db = require('../db/photosDb')


router.get('/', (req, res) => {
    db.getAllPhotos()
        .then((photos) => {
            res.json(photos)
        })
})

module.exports = router