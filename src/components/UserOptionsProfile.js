import React, { useState } from 'react';
import rectangle1 from '../assets/images/Rectangle-1.png';
import { Modal, Group } from '@mantine/core';
import { ModalEditUser } from './modals/ModalEditUser';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { useDispatch } from 'react-redux';

export const UserOptionsProfile = ({ setShowProfile, showProfile }) => {
  const dispatch = useDispatch();
  const handleClickProfileShow = () => {
    dispatch(actionsChangeView('showProfile'));
  };

  const [changeState, setChangeState] = useState(true);
  const [opened, setOpened] = useState(false);
  const userProfile = [
    {
      id: 123,
      name: 'Peter Parker',
      img: rectangle1,
      state: changeState,
    },
  ];
  const handleChangeStatus = () => {
    setChangeState(!changeState);
  };

  return (
    <div className="div-user-options-container">
      <div>
        {userProfile.map((user) => (
          <div className="div-user-options-header" key={user.id}>
            <img src={user.img} alt="rec1" />
            <div>
              <h2 className="">{user.name}</h2>
              <div className="state-container">
                <span
                  className={
                    user.state
                      ? 'span-user-options-active'
                      : 'span-user-options-desactive'
                  }></span>
                <p>{user.state ? 'Disponible' : 'No disponible'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        {<ModalEditUser />}
      </Modal>
      <div className="div-user-options-body">
        <div className="hover-user-options" onClick={handleChangeStatus}>
          <p>
            Cambiar tu estado a{' '}
            {changeState ? (
              <strong>ausente</strong>
            ) : (
              <strong>disponible</strong>
            )}
          </p>
        </div>
        <div className="hover-user-options">
          <Group>
            <p type="button" onClick={() => setOpened(true)}>
              Editar Perfil
            </p>
          </Group>
        </div>
        <div className="hover-user-options" onClick={handleClickProfileShow}>
          <p>Ver Perfil</p>
        </div>
        {/* <div className="hover-user-options">
          <p>Preferencias</p>
        </div> */}
      </div>

      <div className="div-user-options-logout">
        <div className="hover-user-options">
          <p>Salir</p>
        </div>
      </div>
    </div>
  );
};
