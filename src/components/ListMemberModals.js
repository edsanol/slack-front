import React from 'react';
import '../assets/styles/components/ListMemberModals.scss';
export const ListMemberModals = ({ name, image, email, occupation }) => {
  return (
    <>
      <div className="member__list">
        <div className="member__list-img">
          <img src={image} alt="" />
        </div>
        <div className="member__list-data">
          <h2>{name}</h2>
          <span>
            {email} ▪️ {occupation}
          </span>
        </div>
      </div>
    </>
  );
};
