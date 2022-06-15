import React from 'react';
import '../assets/styles/components/ReactionChat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { LikeMessageAction } from '../store/actions/actionsLikes';

export const ReactionChat = ({ messageId, likes }) => {
  const dispatch = useDispatch();
  const OpenCloseThread = useSelector(
    (state) => state.changeViewReducer.hiddenView
  );

  const handleClickThreadShow = () => {
    OpenCloseThread === 'hiddenAll'
      ? dispatch(actionsChangeView('showThread'))
      : dispatch(actionsChangeView('hiddenAll'));
  };

  const giveOfRemoveLike = () => {
    dispatch(LikeMessageAction(messageId));
  };

  const { user } = useSelector((state) => state.userReducer);
  const verifiLikeToUser = likes.map((e) => e.userId === user._id);
  return (
    <div className="reaction__div-chat">
      <div
        className={
          verifiLikeToUser.includes(true) ? 'button_like_container' : ''
        }>
        <i onClick={giveOfRemoveLike} className="bx bx-like"></i>
      </div>

      <div type="button" onClick={handleClickThreadShow}>
        <i className="bx bx-message-rounded-dots"></i>
      </div>
    </div>
  );
};
