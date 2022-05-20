import React from 'react';
import listUsersJson from '../assets/mocks/users.json';

export const DirectMessageUser = () => {
  const directMessageUser = listUsersJson

  return (
    <>
      {directMessageUser.map((e) => {
        return (
          <li key={e.id} className="list-user-dropdown-direct">
            <div className="div-direct-message-user">
              <img src={e.avatar} alt="rec1" />
              <div className="list-channels-name-directs">{e.name}</div>
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
