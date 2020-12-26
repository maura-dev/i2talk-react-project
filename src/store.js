import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

 const initialState = {};

 const middleware = [thunk];

// const rootReducer = combineReducers({
//   Cities: citiesReducer,
//   Users: loginReducer,
//   UserLogin: loginReducer,
//   modalView: modalReducer,
//   demo: demoReducer
// })

const store = createStore (rootReducer, initialState, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;