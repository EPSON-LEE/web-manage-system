import * as T from './actionTypes.jsx'

const initialState = {
  status: false,
  loading: true
}

export let articleEditor = (state = initialState, action) => {
    switch(action.type) {
      case T.SAVE_REDUCER:
      let status = action.payload.status === '200'
        return {
          ...state,
          loading: false,
          status: status
        }
      default:
        return state
    }
  }
