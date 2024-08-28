const initialState = {
  user: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  console.log('user reducera geldi', action);
  switch (action.type) {
    case 'LOGIN':
      return state;
    case 'REGISTER':
      return state;
    case 'LOGOUT':
      return state;
    default:
      return state;
  }
};

export default userReducer;
