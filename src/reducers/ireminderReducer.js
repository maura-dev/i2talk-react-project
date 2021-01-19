import { GET_REMINDERS, ADD_REMINDER, DELETE_REMINDER, EDIT_REMINDER } from '../actions/types';

export default function (state = [], action){
	switch (action.type){
    case GET_REMINDERS:
      return action.payload;

    case ADD_REMINDER:
      return [action.payload, ...state ]

    case DELETE_REMINDER:
      return state.filter(
        reminder => reminder.ID !== action.payload
      )

    case EDIT_REMINDER:
      return state.map(reminder =>
        reminder.ID === action.payload.ID ? (reminder = action.payload ) : reminder
      )
    default:
      return state;
  }
}