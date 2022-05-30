import React from 'react';
import { useDispatch } from 'react-redux';
import { changeView } from '../store/actions';
import '../assets/styles/components/ProfileLandingPage.scss';

export const ProfileLandingPage = () => {
  const dispatch = useDispatch();
  const handleClickProfileClose = () => {
    dispatch(changeView('hiddenAll'));
  };

  return (
    <div className="div-profile-container">
      <div className="div-profile-header">
        <h2>Perfil</h2>
        <div className="profile-header-icon">
          <i
            className="fa-solid fa-xmark"
            type="button"
            onClick={handleClickProfileClose}></i>
        </div>
      </div>

      <div className="div-profile-box-container">
        <section className="section-profile-box-image">
          {/* <figure className="figure-box-image"> */}
          <img
            className="profile-image"
            src="https://images.cults3d.com/yPjnhYzpd_6MZRbXv91lHSk1-Do=/516x516/https://files.cults3d.com/uploaders/19014637/illustration-file/357d0404-63e6-4ef4-91b0-e4dec1bb02ee/4f73455cebdd51062bf02270fc22110a.jpg"
            alt="imagen de perfil"
          />
          {/* </figure> */}
          <h2>Daniel</h2>
          <p>
            <a href=".">Añadir un título</a>
          </p>
        </section>
        <section className="section-profile-button">
          <i className="fa-solid fa-pen"></i>
          <p>Modificar tu perfil</p>
        </section>
        <section className="section-profile-slack">
          <p className="p-title">Nombre de Slack</p>
          <p className="p-name">daniel quispe</p>
          <div className="div-profile-slack-button" />
        </section>
      </div>
    </div>
  );
};
