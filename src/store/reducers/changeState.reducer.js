const initialState = {
  stateView: true,
};

export const changeStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        stateView: action.payload,
      };
    default:
      return state;
  }
};
