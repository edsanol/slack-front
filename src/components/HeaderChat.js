import React from 'react';
import '../assets/styles/components/HeaderChat.scss';

export const HeaderChat = () => {
  return (
    <div className="chat__header">
      <div className="chat__header-left">
        <span className="online"></span>
        <h2>
          hojae <span>&#x2b50;</span>
        </h2>
        <p>&#x1f60a;</p>
      </div>
      <div className="chat__header-right">
        <i className="bx bx-phone"></i>
        <i className="bx bx-info-circle"></i>
      </div>
    </div>
  );
};
