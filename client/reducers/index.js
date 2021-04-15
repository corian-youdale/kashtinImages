import { combineReducers } from 'redux'

import photos from './photos'
import albums from './albums'

export default combineReducers({
    photos,
    albums,
})