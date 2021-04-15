import { getAllPhotosAPI } from '../apis/photosAPI'
import { getAlbumAPI } from '../apis/albumsAPI'

export const SET_PHOTOS = 'SET_PHOTOS'
export const SET_ALBUM_PHOTOS = 'SET_ALBUM_PHOTOS'

export function setPhotos (photos) {
  return {
    type: SET_PHOTOS,
    photos
  }
}

export function fetchPhotos () {
  return dispatch => {
    return getAllPhotosAPI()
    .then(photos => {
      dispatch(setPhotos(photos))
      return photos
    })
  }
}


export function setAlbumPhotos (photos) {
  return {
    type: SET_ALBUM_PHOTOS,
    photos
  }
}

export function fetchAlbumPhotos (album) {
  return dispatch => {
    return getAlbumAPI(album)
    .then(photos => {
      return dispatch(setAlbumPhotos(photos))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
