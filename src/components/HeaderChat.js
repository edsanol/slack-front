import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/components/HeaderChat.scss';

export const HeaderChat = () => {
  const { activeChat, users } = useSelector((state) => state.socketReducer);

  const userData = users.filter((user) => user._id === activeChat);

  return (
    <div className="chat__header">
      <div className="chat__header-left">
        {/* <span className="online"></span> */}
        {/* TODO: Majorar la presentación al ingresar y mostrar imagen y estado del usuario */}
        <h2>
          {activeChat && userData.length > 0
            ? userData[0].fullName
            : 'Welcome to Slack'}
        </h2>
        {/* <p>&#x1f60a;</p> */}
      </div>
      <div className="chat__header-right"></div>
    </div>
  );
};
