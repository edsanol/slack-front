import React, { useEffect, useRef, useState } from 'react';
import bandera from '../assets/images/mexico.png';
import { ChatDate } from '../components/ChatDate';
import { ReactionChat } from '../components/ReactionChat';
import { ReplyMessagesChat } from './ReplyMessagesChat';
import { ChatCountLike } from './ChatCountLike';
import { timeDate } from '../helpers/timeDate';

export const BoxChatMessage = (props) => {
  const [isShown, setIsShown] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [props]);

  return (
    <div
      id="message"
      className="div-box-chat-container"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && <ReactionChat />}
      <ChatDate date={props.createdAt} />
      <div className="">
        <img className="img-chat-user-img" src={props.image} alt="img7" />
      </div>
      <div>
        <div className="div-box-chat">
          <h2 className="h2-chat-user-name">{props.fullName}</h2>
          {/* <img className="img-chat-user-description" src={bandera} alt="img7" /> */}
          <div className="div-chat-fecha">{timeDate(props.createdAt)}</div>
        </div>
        <div>
          <p
            className="p-chat-text-message"
            dangerouslySetInnerHTML={{ __html: props.message }}></p>
          {/* <ReplyMessagesChat /> */}
          {/* <ChatCountLike /> */}
        </div>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
