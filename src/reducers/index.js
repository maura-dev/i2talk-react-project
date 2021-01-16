import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import loginReducer from './loginReducer';
// import { combineReducers } from 'redux';
import allUserReducers from './allUserReducers';
import usersReducer from './usersReducer';
import idiaryReducer from './idiaryReducer';
import ireminderReducer from './ireminderReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  Users: usersReducer,
  reminders: ireminderReducer,
  editForm: ireminderReducer,
  reminder: ireminderReducer,
  userData: allUserReducers,
  notes: idiaryReducer,
  menu: menuReducer
})

export default rootReducer;