import { combineReducers } from 'redux';
import { changeStateReducer } from './changeState.reducer';
import { changeViewReducer } from './changeView.reducer';

export default combineReducers({
  changeViewReducer,
  changeStateReducer,
});
