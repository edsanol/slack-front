import React from 'react';
import rectangle7 from '../assets/images/Rectangle-6.png';
import bandera from '../assets/images/mexico.png';

import { ReplyMessagesChat } from './ReplyMessagesChat';
import { ChatCountLike } from './ChatCountLike';

export const BoxChatMessage = () => {
  return (
    <>
      <div className="div-box-chat-container">
        <div className="">
          <img className="img-chat-user-img" src={rectangle7} alt="img7" />
        </div>
        <div>
          <div className="div-box-chat">
            <h2 className="h2-chat-user-name">Hyejin</h2>
            <img
              className="img-chat-user-description"
              src={bandera}
              alt="img7"
            />
            <div className="div-chat-fecha">6:49 PM</div>
          </div>
          <div>
            <p className="p-chat-text-message">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólPageMaker, el cual incluye
              versiones de Lorem Ipsum.{' '}
            </p>
            <ReplyMessagesChat />
            {/* <ChatCountLike /> */}
          </div>
        </div>
      </div>
    </>
  );
};
