import { GET_NOTES } from '../actions/types'

const initialState={

	notes:[
			{
			time: new Date().toLocaleString(),
			message:"My name is Maureen, I live in Lagos"
			},

			{
			time: new Date().toLocaleString(),
			message:"We have a presentation today"
			}

		]
}

export default function(state=initialState, action){
	switch (action.type){
    case GET_NOTES:
      return {...state};

    /*case 'REMOVE_NUM':
      return state -= action.value;*/
    default:
      return state;
  }
}