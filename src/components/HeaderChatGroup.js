import React from 'react'
import rectangle from '../assets/images/Rectangle.png';
import rectangle1 from '../assets/images/Rectangle-1.png';
import rectangle2 from '../assets/images/Rectangle-2.png';
import '../assets/styles/components/HeaderChatGroup.scss';

export const HeaderChatGroup = () => {
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
        <div className="chat__header-right-users">
          <img className="img-right1" src={rectangle} alt="user" />
          <img className="img-right2" src={rectangle1} alt="user" />
          <img className="img-right3" src={rectangle2} alt="user" />
        </div>
        <i className='bx bx-user-plus'></i>
        <i className="bx bx-info-circle"></i>
      </div>
    </div>
  );
}

