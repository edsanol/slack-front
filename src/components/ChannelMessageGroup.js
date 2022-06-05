import React from 'react';

export const ChannelMessageGroup = ({ name }) => {
  return (
    <li className="list-channels-dropdown">
      <span>#</span>
      <div className="list-channels-name">{name}</div>
    </li>
  );
};
