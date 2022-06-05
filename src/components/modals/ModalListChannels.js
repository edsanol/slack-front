import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/components/modals/ModalMembersChannel.scss';
import { ListChannels } from '../ListChannels';

export const ModalListChannels = ({setOpened}) => {
  const inputStyle = {
    fontFamily: "'Lato', FontAwesome",
  };

  const channels = useSelector((state) => state.channelReducer.channels);

  return (
    <section className="modalMembers">
      <div className="modalMembers__header">
        <h2>Channels explorer</h2>
      </div>

      <div className="modalMembers__div-search">
        <p className="modalMembers__p-add">Add channel</p>
        <input
          type="text"
          className="modalMembers__input"
          placeholder="       &#xf002;     Search members"
          style={inputStyle}
        />
      </div>
      <div className="modalMembers__div-listPeople">
        {channels.map((data) => (
          <ListChannels
            key={data._id}
            name={data.name}
            description={data.description}
            users={data.users}
            channelId={data._id}
            setOpened={setOpened}
          />
        ))}
      </div>
    </section>
  );
};
