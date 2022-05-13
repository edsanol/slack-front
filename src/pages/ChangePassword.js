import React from 'react';
import { HeaderRecoverChangePassword } from '../components/HeaderRecoverChangePassword';
import { InputLoginRegister } from '../components/InputLoginRegister';
import { ButtonFormLoginRegister } from '../components/ButtonFormLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';

export const ChangePassword = () => {
  return (
    <>
      <HeaderRecoverChangePassword
        title={'Cambiar tu contraseña'}
        text={
          'Para cambiar la contraseña, introduce la contraseña que usas para conectarte a'
        }
        textSlack={" Slack"}
      />

      <main className="mainForm">
        <form className="mainForm__form" action="">
          <InputLoginRegister
            label={'Contraseña actual'}
            placeholder={'Ingresa la contraseña actual'}
            type={'password'}
            name={'password'}
            id={'password'}
          />
          <InputLoginRegister
            label={'Nueva contraseña'}
            placeholder={'Ingresa la nueva contraseña'}
            type={'password'}
            name={'password'}
            id={'password'}
          />
          <InputLoginRegister
            label={'Repite la contraseña'}
            placeholder={'Repite la nueva contraseña'}
            type={'password'}
            name={'password'}
            id={'password'}
          />
          <ButtonFormLoginRegister buttonText={'Cambiar la contraseña'}/>
        </form>
      </main>
      <FooterLoginRegister />
    </>
  );
};
