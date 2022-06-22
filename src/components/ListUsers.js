import React from 'react';
import '../assets/styles/components/ListUsers.scss';

export const ListUsers = ({ name, image, email, phone }) => {
  return (
    <div className="list-users__container">
      <img src={image} alt="user" />
      <div>
        <h2>{name}</h2>
        <p>
          <span>{`${email} ▪️ `}</span> {phone}
        </p>
      </div>
    </div>
  );
};
