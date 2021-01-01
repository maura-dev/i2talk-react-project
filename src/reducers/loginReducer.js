import { ADD_USER } from '../actions/types'

const initialState = {
  user: []
}
export default function(state = initialState, action) {

  switch (action.type){
    case 'ADD':
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    default:
      return initialState;
  }
}
