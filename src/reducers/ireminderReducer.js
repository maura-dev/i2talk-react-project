import { TOGGLE_EDIT, GET_REMINDERS, ADD_REMINDER, DELETE_REMINDER, EDIT_REMINDER } from '../actions/types';

const initialState = {
  editForm: false,
	reminders: []
}

export default function (state = initialState, action){
	switch (action.type){
    case TOGGLE_EDIT:
      return {
        ...state,
        editForm: !state.editForm
      };

    case GET_REMINDERS:
      return {
        ...state,
        reminders: action.payload
      };

    case ADD_REMINDER:
      return {
        ...state,
        reminders: [action.payload, ...state.reminders]
      }

    case DELETE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.filter(
          reminder => reminder.ID !== action.payload
        )
      }

    case EDIT_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map(reminder =>
          reminder.id === action.payload.id ? (reminder = action.payload ) : reminder
        )
      }
    default:
      return state;
  }
}