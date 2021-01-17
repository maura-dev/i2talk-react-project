// import {REMINDER_ITEM} from 'types';
import axios from 'axios'
import {GET_REMINDERS, ADD_REMINDER, DELETE_REMINDER, TOGGLE_EDIT} from './types';
import swal from '@sweetalert/with-react';


// get user details from local storage
const accessToken = localStorage.getItem("bearerToken");


export const ToggleEdit = () => {
  return {type: TOGGLE_EDIT}
}

// export const reminderItem = () => {
//   return {type: REMINDER_ITEM, payload: reminderId}
// }

export const getReminders = () => async dispatch => {
  console.log(accessToken)
  var config = {
    method: 'get',
    url: 'https://i2talk.live/api/ireminder',
    headers: { 
      'Authorization': `Bearer ${accessToken}` 
    }
  };
  await axios(config)
  .then((response) => {
    console.log(response.data)
    const res = response.data.data;
    return res;
  })
  .then(res => {
    dispatch({
      type: GET_REMINDERS,
      payload: res
    })
  })
  .catch((error) => {
    console.log (error);
  });
};

export const addReminder = (newReminder) => async dispatch => {
  var config = {
    method: 'post',
    url: 'https://i2talk.live/api/ireminder/add',
    headers: { 
      'Authorization': `Bearer ${accessToken}` 
    },
    data : newReminder
  };
  const res = await axios(config);
  dispatch({
    type: ADD_REMINDER,
    payload: res.data
  })
}

export const deleteReminder = ID => async dispatch => {
  var config = {
    method: 'delete',
    url: `https://i2talk.live/api/ireminder/delete/${ID}`,
    headers: {
      'Authorization': `Bearer ${accessToken}` 
    }
  };
  await axios(config)
  dispatch({
    type: DELETE_REMINDER,
    payload: ID
  });
  // .then((response) => {
  //   console.log(JSON.stringify(response.data));
  //   const res = response.data.message;
  //   swal( res, {
  //     icon: "success",
  //   });
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

// export const editReminder = (updReminder) => {
//   return {type: EDIT_REMINDER, payload:updReminder}
// }