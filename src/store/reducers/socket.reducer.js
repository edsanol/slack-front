const initialState = {
  socket: null,
  online: '',
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
      };
    default:
      return state;
  }
};
