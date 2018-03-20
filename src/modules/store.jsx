import {applyMiddleware, createStore,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import root from './containers/About/reducers.jsx'

const store = createStore(
    root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
export default store