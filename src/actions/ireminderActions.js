// import {REMINDER_ITEM} from 'types';
import {GET_REMINDER} from './types';
import {ADD_REMINDER} from './types';
import {TOGGLE_EDIT} from './types';

export const ToggleEdit = () => {
  return {type: TOGGLE_EDIT}
}

// export const reminderItem = () => {
//   return {type: REMINDER_ITEM, payload: reminderId}
// }

export const getReminder = () => {
  return {type: GET_REMINDER}
}

export const addReminder = (newReminder) => {
  return {type: ADD_REMINDER, payload: newReminder}
}

// export const editReminder = (updReminder) => {
//   return {type: EDIT_REMINDER, payload:updReminder}
// }