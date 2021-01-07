import { GET_REMINDER, ADD_REMINDER } from '../actions/types';

const initialState = {
	reminders:[
    {
			id: 1,
			time: "12/1/2021 11:15",
			remindNote:"My name is Maureen, I live in Lagos"
		},
  ]
}

export default function (state = initialState, action){
	switch (action.type){
    case GET_REMINDER:
      return {...state};

    case ADD_REMINDER:
      return {
        ...state,
        reminders:[action.payload, ...state.reminders]
      }

      // case EDIT_REMINDER:
      // return {
      //   ...state,
      //   reminders: state.reminders.map(reminder=>
      //     reminder.id === action.payload.id ? (reminder = action.payload ) : reminder
      //   )
      // }
    default:
      return state;
  }
}