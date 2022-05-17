import React from 'react';
import { HeaderRecoverChangePassword } from '../components/HeaderRecoverChangePassword';
import { InputLoginRegister } from '../components/InputLoginRegister';
import { ButtonFormLoginRegister } from '../components/ButtonFormLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { UserOptionsProfile } from '../components/UserOptionsProfile';

export const RecoverPassword = () => {
  return (
    <>
      <UserOptionsProfile />
      {/* <HeaderRecoverChangePassword
        title={'Restablecer tu contraseña'}
        text={
          'Para restablecer la contraseña, introduce la dirección de correo que usas para conectarte a'
        }
        textSlack={" Slack"}
      />

      <main className="mainForm">
        <form className="mainForm__form" action="">
          <InputLoginRegister
            label={'Dirección de correo'}
            placeholder={'name@work-email.com'}
            type={'email'}
            name={'email'}
            id={'email'}
          />
          <ButtonFormLoginRegister buttonText={'Obtener un enlace para restablecer'}/>
        </form>
      </main>
      <FooterLoginRegister /> */}
    </>
  );
};
