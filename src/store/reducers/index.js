import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { changeStateReducer } from './changeState.reducer';
import { changeViewReducer } from './changeView.reducer';

export default combineReducers({
  changeViewReducer,
  changeStateReducer,
  authReducer,
});
