<<<<<<< HEAD
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';
=======
import { combineReducers } from 'redux';
import citiesReducer from './cityReducer';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import demoReducer from './demoReducer';
import idiaryReducer from './idiaryReducer'
>>>>>>> e43d8ad6928fead241038699502d7cdea0ec0fdb


const rootReducer = combineReducers({
<<<<<<< HEAD
  Users: usersReducer
=======
  Cities: citiesReducer,
  Users: loginReducer,
  UserLogin: loginReducer,
  modalView: modalReducer,
  demo: demoReducer,
  notes: idiaryReducer
>>>>>>> e43d8ad6928fead241038699502d7cdea0ec0fdb
})

export default rootReducer