import React from 'react';
import rectangle7 from '../assets/images/Rectangle-6.png';
import rectangle5 from '../assets/images/Rectangle-5.png';
import bandera from '../assets/images/mexico.png';
import rectangle8 from '../assets/images/Rectangle-7.png';
export const ThreadChatMessage = () => {
  return (
    <>
      <div className="thread-container">
        <div className="div-thread-chat-container">
          <div>
            <img
              className="img-thread-chat-user-img"
              src={rectangle7}
              alt="img7"
            />
          </div>
          <div>
            <div className="div-thread-box-chat">
              <h2 className="h2-thread-chat-user-name">Hyejin</h2>
              <img
                className="img-thread-chat-user-description"
                src={bandera}
                alt="img7"
              />
              <div className="div-thread-chat-date">7 days ago</div>
            </div>
            <div>
              <p className="p-thread-chat-text-message">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta)
              </p>
            </div>
          </div>
        </div>

        <div className="div-thread-chat-container-2">
          <div>
            <img
              className="img-thread-chat-user-img"
              src={rectangle5}
              alt="img7"
            />
          </div>
          <div>
            <div className="div-thread-box-chat">
              <h2 className="h2-thread-chat-user-name">Kin whoo</h2>
              <img
                className="img-thread-chat-user-description"
                src={bandera}
                alt="img7"
              />
              <div className="div-thread-chat-date">7 days ago</div>
            </div>
            <div className="div-thread-chat-reply-container">
              <p className="p-thread-chat-text-message">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de
                <p className="div-thread-url">
                  https://youtube.com/sfsdfsdf/sdfs/sdf/
                </p>
                <div className="thread-url-reply-container">
                  <h2>Device Atlas</h2>
                  <h3>The Most Popular Cell Phone</h3>
                  <p>
                    m Ipsum es simplemente el texto de relleno de las imprentas
                    y archivos de texto.
                  </p>
                  <div className="thread-date-data">
                    <p className="div-thread-chat-date">Dec 3ed. 2022</p>
                    <h4>(32KB) ⌵ </h4>
                  </div>

                  <img
                    className="img-thread-chat-reply-img"
                    src={rectangle8}
                    alt="img7"
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
