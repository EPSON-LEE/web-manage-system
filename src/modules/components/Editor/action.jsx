import axios from 'axios'
import * as T from './actionTypes'

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

export let addArticle = (data) => async (dispatch, getState) => {
  //   getState() 可以拿到store中的state
  //   console.log(getState())
    dispatch(loading())
  try {
      let response = await post(data)
      await dispatch(saveList(response))
  } catch(err) {
      dispatch(error())
  }
}

const get = () => {
    return axios.get('http://localhost:3000/api')
}

const post = (data) => {
  return axios.post('http://localhost:3000/blog', data)
}