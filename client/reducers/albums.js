import { SET_ALBUM_PHOTOS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_PHOTOS:
      return action.photos
    default:
      return state
  }
}

export default reducer
    