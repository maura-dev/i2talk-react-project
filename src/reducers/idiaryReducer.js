import { GET_NOTES, DELETE_NOTE, ADD_NOTE, EDIT_NOTE} from '../actions/types';

//const initialState={}

export default function (state=[], action){
	switch (action.type){
    case GET_NOTES:
      return action.notes;

    case DELETE_NOTE:
      return state.filter(note=>note.ID!==action.payload)

    case ADD_NOTE:
      return [action.payload, ...state ]

    /*case SEARCHED_NOTES:
    return {
      ...state,
      notes: state.notes.filter(note=> note.id!==action.payload)
    }*/

    case EDIT_NOTE:
      return state.map(note=>
        note.ID===action.payload.ID ? (note=action.payload) : note 
      )
    
    default:
      return state;
  }
}