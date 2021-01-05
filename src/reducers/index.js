import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './loginReducer';
import usersReducer from './usersReducer';
import idiaryReducer from './idiaryReducer';


const rootReducer = combineReducers({
  Users: usersReducer,
  notes: idiaryReducer
})

export default rootReducer