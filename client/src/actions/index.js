import { AUTH_USER, AUTH_ERROR } from './types'
import axios from 'axios'

export const signup = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token })
    localStorage.setItem('token', response.data.token)
    cb()
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: 'Email already in use.'})
  }
}

export const signin = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/signin', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token })
    localStorage.setItem('token', response.data.token)
    cb()
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials'})
  }
}

export const signout = () => dispatch => {
  localStorage.removeItem('token')
  dispatch({ type: AUTH_USER, payload: '' })
}