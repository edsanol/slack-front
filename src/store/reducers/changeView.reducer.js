const initialState = {
  hiddenView: 'hiddenAll',
};

export const changeViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        hiddenView: action.payload,
      };
    default:
      return state;
  }
};
