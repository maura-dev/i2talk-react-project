import { combineReducers } from 'redux';
import citiesReducer from './cityReducer';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import demoReducer from './demoReducer';
import idiaryReducer from './idiaryReducer'


const rootReducer = combineReducers({
  Cities: citiesReducer,
  Users: loginReducer,
  UserLogin: loginReducer,
  modalView: modalReducer,
  demo: demoReducer,
  notes: idiaryReducer
})

export default rootReducer