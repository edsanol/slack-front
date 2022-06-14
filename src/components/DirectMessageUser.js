import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getActiveChatAction,
  getMessagesAction,
} from '../store/actions/actionsSocket';

export const DirectMessageUser = ({ fullName, image, state, userId }) => {
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();
  const { activeChat, messageToDirectMessage } = useSelector(
    (state) => state.socketReducer
  );
  const myId = useSelector((state) => state.authReducer.uid);

  const handleClick = () => {
    dispatch(getActiveChatAction(userId));
    dispatch(getMessagesAction(userId));
    console.log(userId);
  };

  useEffect(() => {
    if (messageToDirectMessage === userId && myId !== userId) {
      setNotification(true);
    }
  }, [messageToDirectMessage, userId]);

  useEffect(() => {
    if (activeChat === userId) {
      setNotification(false);
    }
  }, [activeChat, userId]);

  return (
    <li className="list-user-dropdown-direct">
      <div
        className={`div-direct-message-user ${
          activeChat === userId ? 'list-user-isActive' : ''
        }`}
        onClick={handleClick}>
        <img src={image} alt={fullName} />

        <div className="list-channels-name-directs">
          {fullName}
          <span className={`${notification ? 'newMessageUser' : ''}`}></span>
        </div>
        <span
          className={
            state === 'enable' ? 'span-user-active' : 'span-user-desactive'
          }></span>
      </div>
    </li>
  );
};
