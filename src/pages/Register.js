import React from 'react';
import '../assets/styles/pages/Register.scss';
import { useForm } from 'react-hook-form';
import { HeaderLoginRegister } from '../components/HeaderLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';

export const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <HeaderLoginRegister title={'Registrarse'} text={'O BIEN'} />

      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="mainForm__form-label">
            Nombre y Apellido
          </label>
          <input
            className="mainForm__form-input"
            type="text"
            name="name"
            id="name"
            placeholder="Ingresa tu nombre y apellido"
            {...register('nombre', {
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
