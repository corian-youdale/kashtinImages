const connection = require('./connection')

function getAllPhotos (db = connection) {
    return db("Photos").select()
}


module.exports = {
    getAllPhotos,
}