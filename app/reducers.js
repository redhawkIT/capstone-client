import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { entitiesReducer as db, queriesReducer as queries } from 'redux-query'
import {responsiveStateReducer as screen} from 'redux-responsive'

// import user from './services/authentication'

const rootReducer = combineReducers({
  //  redux-responsive (media query data in store)
  // react-router-redux
  //  redux-query (db === entities, queries stays the same)
  screen,
  routing,
  db,
  queries,
  //  Your reducers here
  // user
})

export default rootReducer
