import React, { useEffect } from 'react';
import '../assets/styles/pages/Register.scss';
import { useForm } from 'react-hook-form';
import { HeaderLoginRegister } from '../components/HeaderLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWorkspaceAction,
  registerUserAction,
} from '../store/actions/actionsAuth';
import { Link } from 'react-router-dom';

export const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const workspaceid = useSelector((state) => state.authReducer.workspaceId);

  const onSubmit = (data) => {
    const { fullName, email, password } = data;
    dispatch(registerUserAction({ fullName, email, password, workspaceid }));
  };

  useEffect(() => {
    const workspace = () => dispatch(getWorkspaceAction());
    workspace();
  }, [dispatch]);

  return (
    <>
      <HeaderLoginRegister title={'Register'} text={'O'} />

      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullName" className="mainForm__form-label">
            Full Name
          </label>
          <input
            className="mainForm__form-input"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your first and last name"
            {...register('fullName', {
              required: true,
              pattern: /^[a-z\d A-Z\d]{6,30}$/i,
            })}
          />
          {errors.nombre?.type === 'required' && (
            <p className="input__error">⚠ The name field is required</p>
          )}
          {errors.nombre?.type === 'pattern' && (
            <p className="input__error">
              ⚠ Enter a name of minimum 6 characters and maximum 30
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
            placeholder="Enter your email"
            {...register('email', {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <p className="input__error">⚠ The email field is required</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="input__error">⚠ The email format is incorrect</p>
          )}
          <label htmlFor="name" className="mainForm__form-label">
            Password
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.password?.type === 'required' && (
            <p className="input__error">⚠ The password field is required</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="input__error">
              ⚠ The password must have at least 8 characters
            </p>
          )}
          {errors.password?.type === 'pattern' && (
            <p className="input__error">
              ⚠ The password must have at least one uppercase letter, one
              lowercase letter, a number or special character, and a length
              minimum of 8 characters
            </p>
          )}
          <input
            type="submit"
            value="Register"
            className="button-form-login-register"
          />
        </form>

        <div className="mainForm__link">
          <p>Already using Slack?</p>
          <Link to="/auth/login">Go to the login page to start</Link>
        </div>
      </main>

      <FooterLoginRegister />
    </>
  );
};
