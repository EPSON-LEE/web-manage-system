import {applyMiddleware, createStore,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import root from './containers/About/reducers.jsx'

const store = createStore(
    root,
    applyMiddleware(thunk)
  )
export default store