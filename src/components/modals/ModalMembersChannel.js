import React from 'react';
import '../../assets/styles/components/modals/ModalMembersChannel.scss';
import { ListMemberModals } from '../../components/ListMemberModals';
import member1 from '../../assets/img/member1.png';
import member2 from '../../assets/img/member2.png';
import member3 from '../../assets/img/member3.png';
import member4 from '../../assets/img/member4.png';
import member5 from '../../assets/img/member5.png';
import member6 from '../../assets/img/member6.png';

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
        <ListMemberModals
          img={member1}
          user={'20'}
          description={'Graphic Designer'}
        />
        <ListMemberModals img={member2} user={'2Jydiane'} description={''} />
        <ListMemberModals
          img={member3}
          user={'23920d'}
          description={'UI Designer'}
        />
        <ListMemberModals
          img={member4}
          user={'2Jydiane'}
          description={'UI Designer'}
        />
        <ListMemberModals
          img={member5}
          user={'23920d'}
          description={'UI Designer'}
        />
        <ListMemberModals
          img={member6}
          user={'2151a'}
          description={'UX Designer'}
        />
        <ListMemberModals
          img={member1}
          user={'2Jydiane'}
          description={'UXUI Designer'}
        />
        <ListMemberModals img={member2} user={'23920d'} description={''} />
      </div>
    </section>
  );
};
