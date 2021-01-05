import {ADD_USER} from './types'

export const AddLogin = (userDetails) => {
  return {type: 'ADD_USER', payload: userDetails}
}