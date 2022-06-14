import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveChatAction } from '../store/actions/actionsSocket';

export const ChannelMessageGroup = ({ name, channelId }) => {
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();
  const { socket, activeChat, messageToChannel } = useSelector(
    (state) => state.socketReducer
  );

  useEffect(() => {
    if (messageToChannel === channelId && activeChat !== channelId) {
      setNotification(true);
    }
  }, [messageToChannel, channelId]);
  
  useEffect(() => {
    if (activeChat === channelId) {
      setNotification(false);
    }
  }, [activeChat, channelId]);

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
      <div className="list-channels-name">
        {name}
        <span className={`${notification ? 'newMessage' : ''}`}></span>
      </div>
    </li>
  );
};
