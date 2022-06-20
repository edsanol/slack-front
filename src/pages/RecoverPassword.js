import React, { useState } from 'react';
import { HeaderRecoverChangePassword } from '../components/HeaderRecoverChangePassword';
import { InputLoginRegister } from '../components/InputLoginRegister';
import { forgotPasswordAction } from '../store/actions/actionUsers';
import { ButtonFormLoginRegister } from '../components/ButtonFormLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const RecoverPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    dispatch(forgotPasswordAction(email));
    setEmail('');
  };

  return (
    <>
      <HeaderRecoverChangePassword
        title={'Restablecer tu contraseña'}
        text={
          'Para restablecer la contraseña, introduce la dirección de correo que usas para conectarte a'
        }
        textSlack={' Slack'}
      />

      <main className="mainForm">
        <form className="mainForm__form" action="" onSubmit={onSubmit}>
          <label htmlFor="name" className="mainForm__form-label">
            Email
          </label>
          <input
            className="mainForm__form-input"
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Ingresa tu email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="button-form-login-register">
            Recuperar contraseña
          </button>
        </form>
      </main>
      <FooterLoginRegister />
      <ToastContainer />
    </>
  );
};
