import {ADD_USER} from './types'

export const AddLogin = (userData) => {
  return {type: ADD_USER, payload: userData}
}