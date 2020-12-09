import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import citiesReducer from './cityReducer';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import demoReducer from './demoReducer';

// const initialState = {};

// const middleware = {thunk};
const rootReducer = combineReducers({
  Cities: citiesReducer,
  Users: loginReducer,
  UserLogin: loginReducer,
  modalView: modalReducer,
  demo: demoReducer
})

const store = createStore (rootReducer, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;