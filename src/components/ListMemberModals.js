import React from 'react';
import '../assets/styles/components/ListMemberModals.scss';
import listMembersJson from '../assets/mocks/list-member.json';
export const ListMemberModals = () => {
  const listMembers = listMembersJson;

  return (
    <>
      {listMembers.map((member) => {
        return (
          <div key={member.id} className="member__list">
            <div className="member__list-img">
              <img src={member.img} alt="" />
            </div>
            <div className="member__list-data">
              <h2>{member.user}</h2>
              <p>{member.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
