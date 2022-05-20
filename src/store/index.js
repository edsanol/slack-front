import { legacy_createStore as createStore } from 'redux';

const initialState = {
  hiddenView: 'hiddenAll',
};

const reducer = (state = initialState, action) => {
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

export const store = createStore(reducer);
