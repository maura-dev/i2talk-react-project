// import {REMINDER_ITEM} from 'types';
import axios from 'axios'
import {GET_REMINDERS, ADD_REMINDER, DELETE_REMINDER, GET_REMINDER, EDIT_REMINDER } from './types';
import swal from '@sweetalert/with-react';




// get user details from local storage
const accessToken = localStorage.getItem("bearerToken");

export const getReminder = (ID) => async dispatch => {
  await axios
  dispatch ({
    type: GET_REMINDER, 
    payload: ID
  })
}

export const getReminders = () => async dispatch => {
  const response = await axios.get (
    'https://i2talk.live/api/ireminder', { 
      headers: { 
        'Authorization': `Bearer ${accessToken}`
      }
    }
  )
  const res = response.data.data;
  dispatch({
    type: GET_REMINDERS,
    payload: res
  })
};

export const addReminder = data => async dispatch => {
  var config = {
    method: 'post',
    url: 'https://i2talk.live/api/ireminder/add',
    headers: { 
      'Authorization': `Bearer ${accessToken}` 
    },
    data : data
  };
  const res = await axios(config)
  dispatch({
    type: ADD_REMINDER,
    payload: data
  })
  swal(res.data.message, {
    icon: "success",
  });
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