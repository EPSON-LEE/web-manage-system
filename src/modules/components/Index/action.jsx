import axios from 'axios'
import * as T from './actionTypes'

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
    //   getState() 可以拿到store中的state
    //   console.log(getState())
      dispatch(loading())
    try {
        let response = await get()
        await dispatch(saveList(response))
    } catch(err) {
        dispatch(error())
    }
}

export const saveList = (data) => {
    return {
        type: T.SAVE_REDUCER,
        payload: data
    }
}

export const loading = () => {
    return {
        type: T.LOADING
    }
}
export const error = () => {
    return {
        type: T.ERROR
    }
}

const get = () => {
    return axios.get('http://localhost:3000/api')
}