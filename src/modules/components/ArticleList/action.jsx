import axios from 'axios'
import * as T from './actionTypes.jsx'

const loading = () => {
    return {
        type: T.LOADING
    }
}

export const saveList = (data) => {
    return {
        type: T.SAVE_REDUCER,
        payload: data
    }
}

export const error = () => {
    return {
        type: T.ERROR
    }
}

export let getList = () => async (dispatch, getState) => {
    //   getState() 可以拿到store中的state
    //   console.log(getState())
      dispatch(loading())
    try {
        let response = await axios.get('http://localhost:3000/Tasks')
        await dispatch(saveList(response))
    } catch(err) {
        dispatch(error())
    }
}