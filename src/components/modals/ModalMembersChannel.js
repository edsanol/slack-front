import React from 'react';
import '../../assets/styles/components/modals/ModalMembersChannel.scss';
import { ListMemberModals } from '../../components/ListMemberModals';

export const ModalMembersChannel = () => {
  const inputStyle = {
    fontFamily: "'Lato', FontAwesome",
  };
  return (
    <section className="modalMembers">
      <div className="modalMembers__header">
        <h2>1,141 members in #talks</h2>
      </div>

      <div className="modalMembers__div-search">
        <p className="modalMembers__p-add">Add people</p>
        <input
          type="text"
          className="modalMembers__input"
          placeholder="       &#xf002;     Search members"
          style={inputStyle}
        />
      </div>
      <div className="modalMembers__div-listPeople">
        <ListMemberModals />
      </div>
    </section>
  );
};
