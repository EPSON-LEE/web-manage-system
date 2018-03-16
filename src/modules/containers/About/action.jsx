import axios from 'axios'
import * as T from './actionType.jsx'
import store from '../../store.jsx'

export let openModal = () => {
    return {
      type: T.OPEN_MODAL,
      modalStatus: true
    }
  }
  
  export let shutModal = () => {
    return {
      type: T.SHUTDOWN_MODAL,
      modalStatus: false
    }
  }

  export let getList = () => async (dispatch, getState) => {
    try {
        let response = await get()
        await dispatch(saveReducer(response))
    } catch(err) {
        console.error(err)
    }
}

export const saveReducer = (data) => {
    return {
        type: T.SAVE_REDUCER,
        payload: data
    }
}

const get = () => {
    return axios.get('http://localhost:3000/api')
}

// export let getList = () => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/api')
//         // .then(response => response.join())
//         .then(json => dispatch(saveReducer(json)))
//     }
// }