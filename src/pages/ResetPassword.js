import React from 'react';
import { HeaderRecoverChangePassword } from '../components/HeaderRecoverChangePassword';
import { useForm } from 'react-hook-form';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePasswordAction,
  resetPasswordAction,
} from '../store/actions/actionUsers';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../store/actions/actionsAuth';
import { disconnectActionsSocket } from '../store/actions/actionsSocket';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

export const ResetPassword = () => {
  const navigation = useNavigate();
  const params = window.location.pathname.split('/');
  const token = params[3];
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const { socket } = useSelector((state) => state.socketReducer);
  const passValidator = useSelector(
    (state) => state.userReducer.changePassword
  );

  const onSubmit = (data) => {
    const { newPassword, repeatPassword } = data;

    if (newPassword !== repeatPassword) {
      toast.error('Las contraseñas no coinciden', {
        position: 'bottom-right',
        theme: 'colored',
      });

      return;
    }

    dispatch(resetPasswordAction({ token, newPassword, repeatPassword }));
    navigation('/auth/login');
  };

  if (passValidator) {
    toast.success('Perfil actualizado', {
      position: 'bottom-right',
      theme: 'colored',
    });

    dispatch(disconnectActionsSocket());
    socket.disconnect();
    dispatch(logoutUser());
    window.location.reload(true);
  }

  return (
    <>
      <HeaderRecoverChangePassword
        title={'Cambiar tu contraseña'}
        text={
          'Para cambiar la contraseña, introduce la contraseña que usas para conectarte a'
        }
        textSlack={' Slack'}
      />

      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="newPassword" className="mainForm__form-label">
            Escribe tu nueva contraseña
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Ingresa tu nueva contraseña"
            {...register('newPassword', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.newPassword?.type === 'required' && (
            <p className="input__error">⚠ El campo contraseña es requerido</p>
          )}
          {errors.newPassword?.type === 'minLength' && (
            <p className="input__error">
              ⚠ La contraseña debe tener minimo 8 carácteres
            </p>
          )}
          {errors.newPassword?.type === 'pattern' && (
            <p className="input__error">
              ⚠ La contraseña debe tener por lo menos una letra mayúscula, una
              letra minúscula, un número o carácter especial y una longitud
              minima de 8 carácteres
            </p>
          )}
          <label htmlFor="repeatPassword" className="mainForm__form-label">
            Repite la contraseña
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repite la nueva contraseña"
            {...register('repeatPassword', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.repeatPassword?.type === 'required' && (
            <p className="input__error">⚠ El campo contraseña es requerido</p>
          )}
          {errors.repeatPassword?.type === 'minLength' && (
            <p className="input__error">
              ⚠ La contraseña debe tener minimo 8 carácteres
            </p>
          )}
          {errors.repeatPassword?.type === 'pattern' && (
            <p className="input__error">
              ⚠ La contraseña debe tener por lo menos una letra mayúscula, una
              letra minúscula, un número o carácter especial y una longitud
              minima de 8 carácteres
            </p>
          )}
          <input
            type="submit"
            value="Enviar"
            className="button-form-login-register"
          />
        </form>
      </main>
      <FooterLoginRegister />
      <ToastContainer />
    </>
  );
};
