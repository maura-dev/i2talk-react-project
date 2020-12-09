const initialState = 12;

const demoReducer = (state = initialState, action) => {

  switch (action.type){
    case 'ADD_NUM':
      return state += action.value;
    case 'REMOVE_NUM':
      return state -= action.value;
    default:
      return state;
  }
}

export default demoReducer;