import * as T from './actionType.jsx'
import { combineReducers } from 'redux'

const initialState = {
  modalStatus: false,
  data: [],
  loading: false,
  error: false
}

let dataList = (state = initialState, action) => {
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
        case T.LOADING:
        return {
          ...state,
          loading: true
        }
      case T.SAVE_REDUCER:
        return {
          ...state,
          loading: false,
          data: action.payload.data
        }
      case T.ERROR: {
        return {
          ...state,
          loading: false,
          error: true
        }
      }
      default:
        return state
    }
  }


  let root = combineReducers({
    dataList
  })
  
  export default root