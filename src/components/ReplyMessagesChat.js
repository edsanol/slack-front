import React from 'react';
import '../assets//styles/components/ReplyMessagesChat.scss';
import rectangle5 from '../assets/images/Rectangle-5.png';
export const ReplyMessagesChat = ({ setHiddenThread, setHiddenHelp }) => {
  
  const handleClickThreadShow = () => {
    setHiddenHelp(false);
    setHiddenThread(true);
  };

  return (
    <div className="div-reply-messages">
      <img className="img-reply-users" src={rectangle5} alt="img" />
      <img className="img-reply-users" src={rectangle5} alt="img" />
      <img className="img-reply-users" src={rectangle5} alt="img" />
      <p
        className="p-replies-users"
        type="button"
        onClick={handleClickThreadShow}>
        8 replies
      </p>
      <p className="p-replies-data">Last reply today at 3:12 AM</p>
    </div>
  );
};
