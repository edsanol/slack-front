import React from 'react';
import '../assets/styles/pages/Login.scss';
import { useForm } from 'react-hook-form';
import { HeaderLoginRegister } from '../components/HeaderLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { loginUserAction } from '../store/actions/actionsAuth';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    dispatch(loginUserAction({ email, password }));
  };

  return (
    <>
      <HeaderLoginRegister title={'Conectarse a Slack'} text={'O'} />

      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="mainForm__form-label">
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
