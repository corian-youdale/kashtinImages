const connection = require('./connection')

// get all photos from one album
function getAlbum (id, db = connection) {
    return db('Photos')
        .join('Albums', 'Albums.id', 'Photos.album')
        .select('*')
        .where('Photos.album', id)
}

module.exports = {
    getAlbum
}