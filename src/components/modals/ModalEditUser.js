import React from 'react';
import '../../assets/styles/components/modals/ModalEditUser.scss';

export const ModalEditUser = () => {
  return (
    <article className="modal-user-edit">
      <h1 className="title">Modificar tu perfil</h1>
      <div className="container-edit-input">
        <div className="container-input containerA">
          <div className="subcontainer-input">
            <p>Nombre completo</p>
            <input type="text" />
          </div>
          <div className="subcontainer-input">
            <p>Nombre de Slack</p>
            <input type="text" />
            <p>
              Este podría ser tu nombre o un apodo; como quieras que la gente
              serefiera a ti en Slack.
            </p>
          </div>
          <div className="subcontainer-input">
            <p>Qué hago</p>
            <input type="text" />
          </div>
          <div className="subcontainer-input">
            <p>Número de teléfono</p>
            <input type="text" />
          </div>
        </div>
        <div className="container-submit-image containerB">
          <div>
            <p>Foto de perfil</p>
            <img
              src="https://images.cults3d.com/yPjnhYzpd_6MZRbXv91lHSk1-Do=/516x516/https://files.cults3d.com/uploaders/19014637/illustration-file/357d0404-63e6-4ef4-91b0-e4dec1bb02ee/4f73455cebdd51062bf02270fc22110a.jpg"
              alt="imagen de perfil"
            />
          </div>
          <div className="button-edit">
            <button className="button-upload button-transparent">
              Subir foto
            </button>
            <button className="button-delete">Eliminar foto</button>
          </div>
        </div>
      </div>
      <footer className="button-footer">
        <button className="button-submit button-transparent">Cancelar</button>
        <button className="button-submit button-save">Guardar cambios</button>
      </footer>
    </article>
  );
};
