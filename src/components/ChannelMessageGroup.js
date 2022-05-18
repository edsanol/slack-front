import React from 'react';

export const ChannelMessageGroup = () => {
  const channelsGroup = [
    {
      id: 1,
      channel: 'Grupo Slack',
    },
    {
      id: 2,
      channel: 'Grupo Trello',
    },
  ];
  return (
    <>
      {channelsGroup.map((e, index) => {
        return (
          <li key={e.id} className="list-channels-dropdown">
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
