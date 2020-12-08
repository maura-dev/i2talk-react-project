const initialState = {
  users: []
}

const users = (state=initialState, action) => {
  switch (action.type){
    case 'ADD':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return initialState;
  }
}

export default users;