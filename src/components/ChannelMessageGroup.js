import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getActiveChatAction,
} from '../store/actions/actionsSocket';

export const ChannelMessageGroup = ({ name, channelId }) => {
  const dispatch = useDispatch();
  const { socket, activeChat } = useSelector((state) => state.socketReducer);

  const onClickChannel = () => {
    dispatch(getActiveChatAction(channelId));
    socket.emit('getMessagesChannel', channelId);
  };

  return (
    <li
      className={`list-channels-dropdown ${
        activeChat === channelId ? 'list-channel-isActive' : ''
      }`}
      type="button"
      onClick={onClickChannel}>
      <span>#</span>
      <div className="list-channels-name">{name}</div>
    </li>
  );
};
