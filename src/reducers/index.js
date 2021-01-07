import { combineReducers } from 'redux';
//import thunk from 'redux-thunk';
import allUserReducers from './allUserReducers';
import usersReducer from './usersReducer';
import idiaryReducer from './idiaryReducer';


const rootReducer = combineReducers({
  Users: usersReducer,
  userData: allUserReducers,
  notes: idiaryReducer
})

export default rootReducer