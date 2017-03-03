import { combineReducers } from 'redux'

import interests from './interestReducer'
import user from './userReducer'

const instaMockReducer = combineReducers({
  interests,
  user,
})

export default instaMockReducer;
