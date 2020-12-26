import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';

// const initialState = {};

// const middleware = {thunk};
const rootReducer = combineReducers({
  Users: usersReducer
})

const store = createStore (rootReducer, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;