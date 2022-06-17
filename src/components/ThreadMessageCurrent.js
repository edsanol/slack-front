import React from 'react';
import { timeDate } from '../helpers/timeDate';
export const ThreadMessageCurrent = ({ threadCurrent }) => {
  return (
    <>
      <div className="div-box-chat-container">
        <div className="">
          <img
            className="img-chat-user-img"
            src={threadCurrent[0].image}
            alt="img7"
          />
        </div>
        <div>
          <div className="div-box-chat">
            <h2 className="h2-chat-user-name">{threadCurrent[0].fullName}</h2>
            <div className="div-chat-fecha">
              {timeDate(threadCurrent[0].createdAt)}
            </div>
          </div>
          <div>
            <p
              className="p-chat-text-message"
              dangerouslySetInnerHTML={{
                __html: threadCurrent[0].message,
              }}></p>
          </div>
          <div className="div-info-thread-message-container">
            <p className="p-info-thread-message">
              {threadCurrent[0].thread.length > 0
                ? `message's thread`
                : 'start a thread on this message'}
            </p>
            <span>▼</span>
          </div>
        </div>
      </div>
    </>
  );
};
