import React from 'react';
import listChannelsJson from '../assets/mocks/channel.json';

export const ChannelMessageGroup = () => {
  const channelsGroup = listChannelsJson
  return (
    <>
      {channelsGroup.map((e, index) => {
        return (
          <li key={e.idChannel} className="list-channels-dropdown">
            <span>#</span>
            <div className="list-channels-name">
              {e.channel}
            </div>
          </li>
        );
      })}
    </>
  );
};
