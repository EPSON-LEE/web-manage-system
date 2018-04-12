import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import root from './reducers'

const logger = createLogger();
const store = createStore(
    root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger)
  )
export default store