import React from 'react';
import '../assets/styles/components/ListMemberModals.scss';

export const ListMemberModals = ({ img, user, description }) => {
  return (
    <div className="member__list">
      <div className="member__img">
        <img src={img} alt="" />
      </div>
      <div className="member__data">
        <h2>{user}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
