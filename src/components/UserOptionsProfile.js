import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { ModalEditUser } from './modals/ModalEditUser';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeState } from '../store/actions/actionsChangeState';
import { logoutUser } from '../store/actions/actionsAuth';
import {
  disconnectActionsSocket,
  logoutResetStatemessage,
} from '../store/actions/actionsSocket';
import { Link } from 'react-router-dom';
import { logoutResetStateThread } from '../store/actions/actionsThread';
import { logoutResetUserReducer } from '../store/actions/actionUsers';

export const UserOptionsProfile = () => {
  const dispatch = useDispatch();
  const handleClickProfileShow = () => {
    dispatch(actionsChangeView('showProfile'));
  };

  const [changeState, setChangeState] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleChangeStatus = () => {
    setChangeState(!changeState);
    dispatch(actionsChangeState(changeState));
  };

  const stateOption = useSelector(
    (state) => state.changeStateReducer.stateView
  );
  const { fullName, image } = useSelector((state) => state.userReducer.user);
  const { socket } = useSelector((state) => state.socketReducer);

  const handleClickLogout = () => {
    dispatch(actionsChangeView('hiddenAll'));
    dispatch(disconnectActionsSocket());
    dispatch(logoutResetStateThread());
    dispatch(logoutResetStatemessage());
    dispatch(logoutResetUserReducer());
    dispatch(logoutUser());
    window.location.reload(true);
    socket.disconnect();
  };

  return (
    <div className="div-user-options-container">
      <div className="div-user-options-header">
        <img src={image} alt="image profile" />
        <div>
          <h2 className="">{fullName}</h2>
          <div className="state-container">
            <span
              className={
                stateOption
                  ? 'span-user-options-active'
                  : 'span-user-options-desactive'
              }></span>
            <p>{stateOption ? 'Active' : 'Away'}</p>
          </div>
        </div>
      </div>
      <Modal zIndex={1000} opened={opened} onClose={() => setOpened(false)}>
        {<ModalEditUser setOpened={setOpened} />}
      </Modal>
      <div className="div-user-options-body">
        <div className="hover-user-options" onClick={handleChangeStatus}>
          <p>
            Change your status to{' '}
            {stateOption ? <strong>Away</strong> : <strong>Active</strong>}
          </p>
        </div>
        <div className="hover-user-options">
          <p type="button" onClick={() => setOpened(true)}>
            Edit Profile
          </p>
        </div>
        <div className="hover-user-options" onClick={handleClickProfileShow}>
          <p>View Profile</p>
        </div>
        <div className="hover-user-options">
          <Link to="change-password">change Password</Link>
        </div>
      </div>

      <div className="div-user-options-logout">
        <div
          type="button"
          className="hover-user-options"
          onClick={handleClickLogout}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};
