import React from 'react';
import rectangle1 from '../assets/images/Rectangle-1.png';

export const UserOptionsProfile = () => {
  const userProfile = [
    {
      id: 123,
      name: 'Peter Parker',
      img: rectangle1,
      state: true,
    },
  ];
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
      <div className="div-user-options-body">
        <div className="hover-user-options">
          <p>Editar Perfil</p>
        </div>
        <div className="hover-user-options">
          <p>Ver Perfil</p>
        </div>
        <div className="hover-user-options">
          <p>Preferencias</p>
        </div>
      </div>

      <div className="div-user-options-logout">
        <div className="hover-user-options">
          <p>Salir</p>
        </div>
      </div>
    </div>
  );
};
