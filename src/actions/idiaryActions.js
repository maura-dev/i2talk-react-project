import {GET_NOTES} from './types'
import {ADD_NOTE} from './types'
import {DELETE_NOTE} from './types'
import {EDIT_NOTE} from './types'
//import {SEARCH_NOTE} from './types'

export const GetNotes = (notes) => {
  return {type: GET_NOTES, notes: notes}
}

export const DeleteNote = (ID) => {
  return {type: DELETE_NOTE, payload: ID}
}

export const AddNote = (newNote) => {
  return {type: ADD_NOTE, payload: newNote}
}

export const EditNote = (editedNote) => {
  return {type: EDIT_NOTE, payload:editedNote }
}

/*export const SearchedNotes = (data) => {
  return {type: 'SEARCH_NOTE', payload: data}
}*/