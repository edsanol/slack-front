import React, { useState } from 'react';
import rectangle7 from '../assets/images/Rectangle-6.png';
import bandera from '../assets/images/mexico.png';
import { ChatDate } from '../components/ChatDate';
import { ReactionChat } from '../components/ReactionChat';
import { ReplyMessagesChat } from './ReplyMessagesChat';
import { ChatCountLike } from './ChatCountLike';

export const BoxChatMessage = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="div-box-chat-container"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && <ReactionChat />}
      <ChatDate />
      <div className="">
        <img className="img-chat-user-img" src={props.avatar} alt="img7" />
      </div>
      <div>
        <div className="div-box-chat">
          <h2 className="h2-chat-user-name">{props.name}</h2>
          <img className="img-chat-user-description" src={bandera} alt="img7" />
          <div className="div-chat-fecha">{props.time}</div>
        </div>
        <div>
          <p className="p-chat-text-message">
            {props.comment}
          </p>
          <ReplyMessagesChat />
          <ChatCountLike />
        </div>
      </div>
    </div>
  );
};
