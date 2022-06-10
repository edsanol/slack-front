const initialState = {
  socket: null,
  online: '',
  users: [],
  activeChat: null,
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
    default:
      return state;
  }
};
