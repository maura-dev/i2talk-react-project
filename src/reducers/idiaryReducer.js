import { GET_NOTES, DELETE_NOTE, ADD_NOTE, EDIT_NOTE} from '../actions/types';

const initialState={

	notes:[
			{
			id: 1,
			time: new Date().toDateString(),
			message:"My name is Maureen, I live in Lagos"
			},

			{
			id:2,
			time: new Date().toDateString(),
			message:"We have a presentation today"
			}

		]
}

export default function(state=initialState, action){
	switch (action.type){
    case GET_NOTES:
      return {...state};

    case DELETE_NOTE:
      return {
      	...state,
      	notes: state.notes.filter(note=> note.id!==action.payload)
      }

      case ADD_NOTE:
      return {
      	...state,
  		notes:[action.payload, ...state.notes]
      }

      /*case SEARCHED_NOTES:
      return {
        ...state,
        notes: state.notes.filter(note=> note.id!==action.payload)
      }*/

      case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note=>
           note.id===action.payload.id ? (note=action.payload) : note 
          )
      }
    default:
      return state;
  }
}