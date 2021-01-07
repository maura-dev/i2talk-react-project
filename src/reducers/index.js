import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
// import loginReducer from './loginReducer';
import usersReducer from './usersReducer';
import idiaryReducer from './idiaryReducer';
import ireminderReducer from './ireminderReducer';


const rootReducer = combineReducers({
  Users: usersReducer,
  notes: idiaryReducer,
  reminders: ireminderReducer
})

export default rootReducer;