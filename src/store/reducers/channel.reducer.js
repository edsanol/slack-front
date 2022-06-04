const initialState = {
  uid: null,
  name: null,
  description: null,
  channels: [],
};
export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CHANNEL':
      return {
        ...state,
        uid: action.payload.userId,
        name: action.payload.name,
        description: action.payload.description,
      };
    case 'GET_CHANNELS':
      return {
        ...state,
        channels: action.payload,
      };
    default:
      return state;
  }
};
