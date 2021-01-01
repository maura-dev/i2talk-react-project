import { ADD_USER } from './types';
import axios from 'axios';

export const addUser = user => async dispatch => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', user);
  dispatch ({
    type: ADD_USER,
    payload: res.data
  });
};