import React from 'react';
import { useDispatch } from 'react-redux';
import { changeView } from '../store/actions';

export const ProfileLandingPage = () => {
  const dispatch = useDispatch();
  const handleClickProfileClose = () => {
    dispatch(changeView('hiddenAll'));
  };

  return (
    <div className="profile__div-container">
      <div className="main__profile-header">
        <div className="profile-header-left">
          <h2>Profile</h2>
          <p>@juan_perez</p>
        </div>
        <div className="profile-header-right">
          <button
            className="profile__header-right-button-close"
            onClick={handleClickProfileClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};
