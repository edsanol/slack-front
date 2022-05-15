import React from 'react';
import '../assets/styles/pages/Login.scss'
import { InputLoginRegister } from '../components/InputLoginRegister';
import { HeaderLoginRegister } from '../components/HeaderLoginRegister';
import { ButtonFormLoginRegister } from '../components/ButtonFormLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';

export const Login = () => {
  return (
    <>
      
      <HeaderLoginRegister title={'Conectarse a Slack'} text={'O'} />

      <main className="mainForm">
        <form className="mainForm__form" action="">
          <InputLoginRegister
            label={'Email'}
            placeholder={'Ingresa tu email'}
            type={'email'}
            name={'email'}
            id={'email'}
          />
          <InputLoginRegister
            label={'Contraseña'}
            placeholder={'Ingresa tu contraseña'}
            type={'password'}
            name={'password'}
            id={'password'}
          />
          <ButtonFormLoginRegister buttonText={'Conectarse a traves de correo electrónico'}/>
        </form>
        <div className="mainForm__link">
          <p className="pin__magic">
            Te enviaremos un código mágico por correo electrónico para que
            puedas conectarte sin contraseña. Si lo prefieres, también puedesㅤ
            <a href="#header">conectarte de forma manual.</a>
          </p>
        </div>
      </main>

      <FooterLoginRegister />
    </>
  );
};
