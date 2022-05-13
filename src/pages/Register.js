import React from 'react';
import '../assets/styles/pages/Register.scss';
import { InputLoginRegister } from '../components/InputLoginRegister';
import { HeaderLoginRegister } from '../components/HeaderLoginRegister';
import { ButtonFormLoginRegister } from '../components/ButtonFormLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';

export const Register = () => {
  return (
    <>
      <HeaderLoginRegister title={'Registrarse'} text={'O BIEN'} />

      <main className="mainForm">
        <form className="mainForm__form" action="">
          <InputLoginRegister
            label={'Nombre y Apellido'}
            placeholder={'Ingresa tu nombre y apellido'}
            type={'text'}
            name={'name'}
            id={'name'}
          />
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
          <ButtonFormLoginRegister buttonText={'Registrarse'}/>
        </form>

        <div className="mainForm__link">
          <p>¿Ya estás usando Slack?</p>
          <a href="#header">Iniciar sesión en un espacio de trabajo existente</a>
        </div>
      </main>

      <FooterLoginRegister />
    </>
  );
};
