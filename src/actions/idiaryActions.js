import {GET_NOTES} from './types'
import {ADD_NOTE} from './types'
import {DELETE_NOTE} from './types'
import {EDIT_NOTE} from './types'
//import {SEARCH_NOTE} from './types'

export const GetNotes = () => {
  return {type: GET_NOTES}
}

export const DeleteNote = (id) => {
  return {type: DELETE_NOTE, payload: id}
}

export const AddNote = (newNote) => {
  return {type: 'ADD_NOTE', payload: newNote}
}

export const EditNote = (newNote) => {
  return {type: 'EDIT_NOTE', payload:newNote }
}

/*export const SearchedNotes = (data) => {
  return {type: 'SEARCH_NOTE', payload: data}
}*/