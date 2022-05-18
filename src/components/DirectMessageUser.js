import React from 'react';
import rectangle1 from '../assets/images/Rectangle-1.png';

export const DirectMessageUser = () => {
  const directMessageUser = [
    {
      user: 'Juan',
      state: true,
      img: rectangle1,
      id: 1,
    },
    {
      user: 'pepe',
      state: true,
      img: rectangle1,
      id: 2,
    },
  ];

  return (
    <>
      {directMessageUser.map((e) => {
        return (
          <li key={e.id} className="list-user-dropdown-direct">
            <div className="div-direct-message-user">
              <img src={e.img} alt="rec1" />
              <div className="list-channels-name-directs">{e.user}</div>
              <span
                className={
                  e.state ? 'span-user-active' : 'span-user-desactive'
                }></span>
            </div>
          </li>
        );
      })}
    </>
  );
};
