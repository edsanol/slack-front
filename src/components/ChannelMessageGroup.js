import React from 'react';

export const ChannelMessageGroup = () => {
  const channelsGroup = [
    {
      id: 1,
      channel: 'Grupo Slack',
    },
    {
      id: 1,
      channel: 'Grupo Trello',
    },
  ];
  return (
    <>
      {channelsGroup.map((e) => {
        return (
          <li className="list-channels-dropdown">
            <span>#</span>
            <div key={e.id} className="list-channels-name">
              {e.channel}
            </div>
          </li>
        );
      })}
    </>
  );
};
