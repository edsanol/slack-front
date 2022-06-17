const initialState = {
  socket: null,
  online: '',
  users: [],
  activeChat: null,
  messages: [],
  messageToDirectMessage: null,
  messageToChannel: null,
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
        messages: [],
      };
    case 'GET_ALL_USER':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_ACTIVE_CHAT':
      if (state.activeChat === action.payload) return state;
      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };
    case 'NEW_MESSAGE':
      if (
        state.activeChat === action.payload.to ||
        state.activeChat === action.payload.from
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    case 'GET_MESSAGES':
      return {
        ...state,
        messages: [...action.payload],
      };

    case 'GIVE_OR_REMOVE_LIKE':
      const messages = state.messages.map((message) =>
        message._id === action.payload.messageId
          ? { ...message, likes: action.payload.likes }
          : message
      );
      return {
        ...state,
        messages,
      };

    case 'MESSAGE_TO_DIRECT_CHANNEL':
      return {
        ...state,
        messageToDirectMessage: action.payload,
      };
    case 'MESSAGE_TO_CHANNEL':
      return {
        ...state,
        messageToChannel: action.payload,
      };
    default:
      return state;
  }
};
