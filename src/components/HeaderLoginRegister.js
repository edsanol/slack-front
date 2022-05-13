import React from 'react';
import logoSlack from '../assets/img/logo-slack.svg'
import '../assets/styles/components/HeaderLoginRegister.scss';
import { ButtonGoogle } from './ButtonGoogle'

export const HeaderLoginRegister = ({ title, text }) => {
  return (
    <header className="headerForm">
      <img
        className="headerForm__logo-slack"
        src={logoSlack}
        alt="slack icon"
      />
      <h1 className="headerForm__title">{title}</h1>
      <p className="headerForm__subtitle">
        Te sugerimos que uses la
        <strong>dirección de correo electrónico que usas en el trabajo.</strong>
      </p>

      <ButtonGoogle />
      
      <div className="headerForm__decoration">
        <div className="headerForm__decoration-line"></div>
        <p className="headerForm__decoration-text">{text}</p>
        <div className="headerForm__decoration-line"></div>
      </div>
    </header>
  );
};
