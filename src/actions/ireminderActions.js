import {GET_REMINDER} from './types';
import {ADD_REMINDER} from './types';

export const getReminder = () => {
  return {type: GET_REMINDER}
}

export const addReminder = (newReminder) => {
  return {type: ADD_REMINDER, payload: newReminder}
}
