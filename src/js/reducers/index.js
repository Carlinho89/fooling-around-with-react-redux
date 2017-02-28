import { combineReducers } from 'redux'

import interests from './interestReducer'
import user from './userReducer'

export default combineReducers({
  interests,
  user,
})
