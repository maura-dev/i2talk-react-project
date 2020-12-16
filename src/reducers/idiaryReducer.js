import { GET_NOTES, DELETE_NOTE, ADD_NOTE} from '../actions/types'

const initialState={

	notes:[
			{
			id: 1,
			time: new Date().toLocaleString(),
			message:"My name is Maureen, I live in Lagos"
			},

			{
			id:2,
			time: new Date().toLocaleString(),
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

      /*case EDIT_NOTE:
      return {
      	...state,
  		notes:...state.notes, acti]
      }*/
    default:
      return state;
  }
}