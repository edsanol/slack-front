const initialState = {
  messageId: '',
  threadMessages: [],
};

export const threadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE_ID':
      return {
        ...state,
        messageId: action.payload,
      };
    case 'NEW_THREAD_MESSAGE':
      if (state.messageId === action.payload.to) {
        return {
          ...state,
          threadMessages: [...state.threadMessages, action.payload],
        };
      } else {
        return state;
      }
    case 'GET_THREAD_MESSAGE_DB':
      return {
        ...state,
        threadMessages: [...action.payload],
      };
    case 'LOGOUT_RESET_THREAD':
      return {
        messageId: '',
        threadMessages: [],
      };
    default:
      return state;
  }
};
