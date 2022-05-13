import React from 'react';
import '../assets//styles/components/ChatCountLike.scss';
import like from '../assets/images/like.png';

export const ChatCountLike = () => {
  return (
    <div className="span-like-count">
      <img className="img-like-style" src={like} alt="like" />
      <p className="p-like-count">2</p>
    </div>
  );
};
