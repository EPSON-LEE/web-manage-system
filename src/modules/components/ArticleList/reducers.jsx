import * as T from './actionTypes.jsx'

const initialState = {
  load: false,
  article: []
}

export let articleList = (state = initialState, action) => {
    switch(action.type) {
      case T.LOADING:
        return {
          ...state,
          loading: true
        }
      case T.SAVE_REDUCER:
        return {
          ...state,
          article: action.payload.data,
          loading: false
        }
      default:
        return state
    }
  }
