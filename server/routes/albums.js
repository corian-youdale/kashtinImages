const express = require('express')
const router = express.Router()

const db = require('../db/albumsDb')


router.get('/album/:id', (req, res) => {
    db.getAlbum(req.params.id)
        .then((photos) => {
            res.json(photos)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Something is broken" })
        })
})

module.exports = router