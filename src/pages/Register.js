import React, { useEffect } from 'react';
import '../assets/styles/pages/Register.scss';
import { useForm } from 'react-hook-form';
import { HeaderLoginRegister } from '../components/HeaderLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { useDispatch, useSelector } from 'react-redux'
import { getWorkspaceAction, registerUserAction } from '../store/actions/actionsAuth';

export const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const workspaceid = useSelector(state => state.authReducer.workspaceId)

  const onSubmit = (data) => {
    const { fullName, email, password } = data;
    dispatch(registerUserAction({fullName, email, password, workspaceid }))
  };

  useEffect(() => {
    const workspace = () => dispatch(getWorkspaceAction())
    workspace()
  }, [dispatch])

  return (
    <>
      <HeaderLoginRegister title={'Registrarse'} text={'O BIEN'} />

      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullName" className="mainForm__form-label">
            Nombre y Apellido
          </label>
          <input
            className="mainForm__form-input"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Ingresa tu nombre y apellido"
            {...register('fullName', {
              required: true,
              pattern: /^[a-z\d A-Z\d]{6,30}$/i,
            })}
          />
          {errors.nombre?.type === 'required' && (
            <p className="input__error">⚠ El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === 'pattern' && (
            <p className="input__error">
              ⚠ Ingresa un nombre de minimo 6 carácteres y maximo 30
            </p>
          )}
          <label htmlFor="email" className="mainForm__form-label">
            Email
          </label>
          <input
            className="mainForm__form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu email"
            {...register('email', {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <p className="input__error">⚠ El campo email es requerido</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="input__error">⚠ El formato del email es incorrecto</p>
          )}
          <label htmlFor="name" className="mainForm__form-label">
            Contraseña
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.password?.type === 'required' && (
            <p className="input__error">⚠ El campo contraseña es requerido</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="input__error">
              ⚠ La contraseña debe tener minimo 8 carácteres
            </p>
          )}
          {errors.password?.type === 'pattern' && (
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

        <div className="mainForm__link">
          <p>¿Ya estás usando Slack?</p>
          <a href="#header">
            Iniciar sesión en un espacio de trabajo existente
          </a>
        </div>
      </main>

      <FooterLoginRegister />
    </>
  );
};
