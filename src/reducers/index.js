import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
// import loginReducer from './loginReducer';
import { combineReducers } from 'redux';
import allUserReducers from './allUserReducers';
import usersReducer from './usersReducer';
import idiaryReducer from './idiaryReducer';
import ireminderReducer from './ireminderReducer';


const rootReducer = combineReducers({
  Users: usersReducer,
  reminders: ireminderReducer,
  userData: allUserReducers,
  notes: idiaryReducer
})

export default rootReducer;