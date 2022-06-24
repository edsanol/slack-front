import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { getActiveChatAction } from '../store/actions/actionsSocket';

export const ChannelMessageGroup = ({ name, channelId, premium }) => {
  const [notification, setNotification] = useState(false);
  const [notificationFlag, setNotificationFlag] = useState('');
  const dispatch = useDispatch();
  const { socket, activeChat, messageToChannel } = useSelector(
    (state) => state.socketReducer
  );

  useEffect(() => {
    setNotificationFlag(messageToChannel)
    if (notificationFlag === channelId && activeChat !== channelId) {
      setNotification(true);
    }
    dispatch(actionsChangeView('hiddenAll'));
  }, [messageToChannel, channelId, dispatch]);

  useEffect(() => {
    if (activeChat === channelId) {
      setNotification(false);
      setNotificationFlag('');
    }
  }, [activeChat, channelId]);

  const onClickChannel = () => {
    dispatch(getActiveChatAction(channelId));
    dispatch(actionsChangeView('hiddenAll'));
    socket.emit('getMessagesChannel', channelId);
  };

  return (
    <li
      className={`${
        premium ? 'list-channels-dropdown-lock' : 'list-channels-dropdown'
      } ${activeChat === channelId ? 'list-channel-isActive' : ''}`}
      type="button"
      onClick={onClickChannel}>
      <span>{premium ? <i className="bx bxs-lock" id="lock"></i> : '#'}</span>
      <div className="list-channels-name">
        {name}
        <span className={`${notification ? 'newMessage' : ''}`}></span>
      </div>
    </li>
  );
};
