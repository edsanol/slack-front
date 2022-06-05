import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { changeStateReducer } from './changeState.reducer';
import { changeViewReducer } from './changeView.reducer';
import { channelReducer } from './channel.reducer';

export default combineReducers({
  changeViewReducer,
  changeStateReducer,
  authReducer,
  channelReducer,
});
