const initialState = {
  user: [],
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_USER_ID':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
    }
}
