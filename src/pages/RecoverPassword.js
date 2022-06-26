import React, { useState } from 'react';
import { HeaderRecoverChangePassword } from '../components/HeaderRecoverChangePassword';
import { forgotPasswordAction } from '../store/actions/actionUsers';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const RecoverPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotPasswordAction(email));
    setEmail('');
  };

  return (
    <>
      <HeaderRecoverChangePassword
        title={'Recover your password'}
        text={
          'To recover your password, enter the email address you use to connect to'
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
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="button-form-login-register">
            Recover password
          </button>
        </form>
        <div className="mainForm__link">
          <Link to="/auth/login">Go to login</Link>
        </div>
      </main>

      <FooterLoginRegister />
      <ToastContainer />
    </>
  );
};
