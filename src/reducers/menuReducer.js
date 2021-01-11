import { TOGGLE_MENU } from '../actions/types';

const initialState = {
  menu: false
}

export default function(state = initialState, action) {

  switch (action.type){
    case TOGGLE_MENU:
      return {
        // ...state,
        menu: !state.menu
      };
    default:
      return state;
  }
}