import {GET_REMINDERS, ADD_REMINDER, DELETE_REMINDER, EDIT_REMINDER } from './types';

export const getReminders = (reminders) => {
  return {
    type: GET_REMINDERS,
    payload: reminders
  }
};

export const addReminder = data => {
  return {
    type: ADD_REMINDER,
    payload: data
  }
}

export const deleteReminder = ID => {
 return {
    type: DELETE_REMINDER,
    payload: ID
  }
}

export const editReminder = (data) => {
  return {
    type: EDIT_REMINDER, 
    payload: data
  }
}