import React from 'react';
import '../assets/styles/components/ReactionChat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../store/actions';

export const ReactionChat = () => {
  const dispatch = useDispatch();
  const OpenCloseThread = useSelector((state) => state.hiddenView);

  const handleClickThreadShow = () => {
    OpenCloseThread === 'hiddenAll'
      ? dispatch(changeView('showThread'))
      : dispatch(changeView('hiddenAll'));
  };
  return (
    <div className="reaction__div-chat">
      <i className="bx bx-smile"></i>
      <i className="bx bx-message-rounded-dots"></i>
      <div type="button" onClick={handleClickThreadShow}>
        <i className="bx bx-message-rounded-dots"></i>
      </div>
    </div>
  );
};
