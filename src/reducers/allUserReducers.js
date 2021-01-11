import { ADD_USER } from '../actions/types'

const initialState = {
  userData:{
    user: [],
    isLoggedIn: false
  }
}
export default function(state = initialState, action) {

  switch (action.type){
    case ADD_USER:
      return {
        ...state,
        userData:{
        user: [...state.userData.user, action.payload.user],
        isLoggedIn:action.payload.isLoggedIn
       }
      };
    default:
      return initialState;
  }
}
