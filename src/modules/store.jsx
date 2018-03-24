import {applyMiddleware, createStore,combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import root from './containers/About/reducers.jsx'

const logger = createLogger();


const store = createStore(
    root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger)
  )
export default store