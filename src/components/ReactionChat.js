import React from 'react';
import '../assets/styles/components/ReactionChat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';

export const ReactionChat = () => {
  const dispatch = useDispatch();
  const OpenCloseThread = useSelector(
    (state) => state.changeViewReducer.hiddenView
  );

  const handleClickThreadShow = () => {
    OpenCloseThread === 'hiddenAll'
      ? dispatch(actionsChangeView('showThread'))
      : dispatch(actionsChangeView('hiddenAll'));
  };
  return (
    <div className="reaction__div-chat">
      <i className="bx bx-like"></i>
      <div type="button" onClick={handleClickThreadShow}>
        <i className="bx bx-message-rounded-dots"></i>
      </div>
    </div>
  );
};
