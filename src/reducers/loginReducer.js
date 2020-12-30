const initialState = {
  user: []
}

const user = (state=initialState, action) => {
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

export default user;