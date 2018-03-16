import * as T from './actionType.jsx'
import { combineReducers } from 'redux'

let modalStatus = (state = {}, action) => {
    switch(action.type) {
      case T.OPEN_MODAL:
        return {
          ...state,
          modalStatus: action.modalStatus
        }
      case T.SHUTDOWN_MODAL:
        return {
          ...state,
          modalStatus: action.modalStatus
        }
      default:
        return state
    }
  }

  let async = (state = {}, action) => {
    switch(action.type) {
        case T.SAVE_REDUCER:
          return {
            ...state,
            data: action.payload.data
          }
        default:
          return state
      }
  }


  let root = combineReducers({
    modalStatus,
    async
  })
  
  export default root