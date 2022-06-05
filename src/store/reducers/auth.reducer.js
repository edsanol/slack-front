const initialState = {
  uid: null,
  checking: true,
  loggedIn: false,
  name: null,
  email: null,
  image: null,
  description: null,
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
        // image: action.payload.image,
        // description: action.payload.description,
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
    // case 'RELOGIN_USER':
    //   return {
    //     ...state,
    //     checking: false,
    //     loggedIn: true,
    //     uid: action.payload._id,
    //     name: action.payload.name,
    //     email: action.payload.email,
    //   };
    case 'LOGOUT_USER':
      return {
        ...state,
        checking: false,
        loggedIn: false,
        uid: null,
        name: null,
        email: null,
        image: null,
        description: null,
        workspaceId: null,
      };

    default:
      return state;
  }
};
