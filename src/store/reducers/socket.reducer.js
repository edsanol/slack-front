const initialState = {
  socket: null,
  online: '',
  users: [],
  activeChat: null,
  messages: [],
};

export const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
      return {
        ...state,
        socket: action.payload.socket,
        online: action.payload.online,
      };
    case 'SOCKET_DISCONNECTED':
      return {
        ...state,
        socket: null,
        online: 'disable',
        users: [],
        activeChat: null,
      };
    case 'GET_ALL_USER':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_ACTIVE_CHAT':
      if(state.activeChat === action.payload) return state;
      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };
    case 'NEW_MESSAGE':
      if(state.activeChat === action.payload.to || state.activeChat === action.payload.from) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
