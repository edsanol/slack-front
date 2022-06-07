import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/components/modals/ModalMembersChannel.scss';
import { ListUsers } from '../ListUsers';

export const ModalListUsers = () => {
  const [newFilter, setNewFilter] = useState('');
  const inputStyle = {
    fontFamily: "'Lato', FontAwesome",
  };

  const allUsers = useSelector((state) => state.userReducer.users);

  // Filtro por nombre de usuarios
  const search = allUsers.filter(user => user.fullName.toLowerCase().includes(newFilter.toLowerCase()));

  return (
    <section className="modalMembers">
      <div className="modalMembers__header">
        <h2>Users explorer</h2>
      </div>

      <div className="modalMembers__div-search">
        <p className="modalMembers__p-add">Add new teammate</p>
        <input
          type="text"
          className="modalMembers__input"
          placeholder="       &#xf002;     Search members"
          style={inputStyle}
          value={newFilter}
          onChange={(e) => setNewFilter(e.target.value)}
        />
      </div>
      <div className="modalMembers__div-listPeople">
        {search.map((data) => (
          <ListUsers
            key={data._id}
            name={data.fullName}
            image={data.image}
            email={data.email}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};
