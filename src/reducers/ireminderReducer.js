import { TOGGLE_EDIT, GET_REMINDER, ADD_REMINDER, EDIT_REMINDER } from '../actions/types';

const initialState = {
	reminders:[],
  editForm: false
}

export default function (state = initialState, action){
	switch (action.type){
    case TOGGLE_EDIT:
      return {
        ...state,
        editForm: !state.editForm,
      };

    case GET_REMINDER:
      return {
        ...state,
        reminders: action.payload
      };

    case ADD_REMINDER:
      return {
        ...state,
        reminders: [action.payload, ...state.reminders]
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