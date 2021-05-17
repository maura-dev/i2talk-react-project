import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

 const initialState = {};

 const middleware = [thunk];

// const rootReducer = combineReducers({
//   Cities: citiesReducer,
//   Users: loginReducer,
//   UserLogin: loginReducer,
//   modalView: modalReducer,
//   demo: demoReducer
// })

const store = createStore (rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;