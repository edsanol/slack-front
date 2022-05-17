import React from 'react';

export const ChannelMessageGroup = () => {
  const channelsGroup = [
    {
      id: 3,
      channel: 'Grupo Slack',
    },
    {
      id: 4,
      channel: 'Grupo Trello',
    },
  ];
  return (
    <>
      {channelsGroup.map((e) => {
        return (
          <li key={e.id} className="list-channels-dropdown">
            <span>#</span>
            <div className="list-channels-name">{e.channel}</div>
          </li>
        );
      })}
    </>
  );
};
