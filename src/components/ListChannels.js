import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/components/ListChannels.scss';
import { addUserToChannelAction } from '../store/actions/actionsChannel';

export const ListChannels = ({
  name,
  description,
  users,
  channelId,
  setOpened,
}) => {
  const memberInChannel = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const handleClickJoin = (e) => {
    e.preventDefault();
    dispatch(addUserToChannelAction({ channelId, memberInChannel }));
    setOpened(false);
  };

  return (
    <div className="list-channels__container">
      <h2>{name}</h2>
      <p>
        <span>{`${users.length} members ▪️ `}</span> {description}
      </p>
      {users.includes(memberInChannel) ? (
        <button className="btn__list-channels">Salir</button>
      ) : (
        <button className="btn__list-channels" onClick={handleClickJoin}>
          Unirse
        </button>
      )}
    </div>
  );
};
