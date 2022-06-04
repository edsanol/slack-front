const initialState = {
  uid: null,
  checking: true,
  loggedIn: false,
  name: null,
  email: null,
  workspaceId: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WORKSPACE_ID':
      return {
        ...state,
        workspaceId: action.payload,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        checking: false,
        loggedIn: true,
        uid: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        checking: false,
        loggedIn: true,
        uid: action.payload._id,
        name: action.payload.fullName,
        email: action.payload.email,
      };
    case 'FINISH_CHECKING':
      return {
        ...state,
        checking: false,
      };

    default:
      return state;
  }
};
