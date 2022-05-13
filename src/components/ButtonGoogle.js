import React from 'react';
import '../assets/styles/components/ButtonGoogle.scss'
import iconGoogle from '../assets/icon/icon-google.svg'

export const ButtonGoogle = () => {
  return (
    <button className="buttonGoogle-login-google">
      <img
        className="buttonGoogle__logo-google"
        src={iconGoogle}
        alt="google icon"
      />
      Continuar con Google
    </button>
  );
}
