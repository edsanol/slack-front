import React from 'react';
import cohete from '../assets/images/cohete.png';
import emoti from '../assets/images/emoti.png';
import notification from '../assets/images/notification.png';
import time from '../assets/images/time.png';
import user from '../assets/images/user.png';
import video from '../assets/images/video.png';
import { useDispatch } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';

export const HelpLandingPage = () => {
  const dispatch = useDispatch();

  const handleClickHelpClose = () => {
    dispatch(actionsChangeView('hiddenAll'));
  };

  return (
    <div className="div-help-container">
      <div className="div-help-header">
        <h2>Help</h2>
        <div className="help-header-icon">
          <div className="help-icon">
            <i className="fa-solid fa-keyboard"></i>
          </div>
          <div className="help-icon">
            <i className="fa-solid fa-gift"></i>
            <div className="help-icon-notification"></div>
          </div>
          <div className="help-icon">
            <i
              className="fa-solid fa-xmark"
              type="button"
              onClick={handleClickHelpClose}></i>
          </div>
        </div>
      </div>
      <div>
        <div className="input-help-containter">
          <input
            className="input-help-search"
            type="text"
            placeholder="Search the Help Center"
          />
        </div>

        <div className="div-help-box-container">
          <div className="div-help-boxes-selected">
            <div className="div-box-icon-select">
              <img className="img-cohete" src={cohete} alt="img" />
            </div>
            <div> 
              <h2>Quick start guide</h2>
              <p>Learn the basics and get to work in Slack</p>
            </div>
          </div>

          <div className="div-help-boxes-subtitles">
            <h2>Recommended articles</h2>
            <div className="help-link">
              <p>Visit Help Center</p>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>

          <div className="div-help-boxes">
            <div className="div-box-icon">
              <img className="img-notifications" src={notification} alt="img" />
            </div>
            <h2>Configure your Slack Notifications</h2>
          </div>

          <div className="div-help-boxes">
            <div className="div-box-icon">
              <img className="img-user" src={user} alt="img" />
            </div>
            <h2>Set your Slack status and availability</h2>
          </div>

          <div className="div-help-boxes">
            <div className="div-box-icon">
              <img className="img-time" src={time} alt="img" />
            </div>
            <h2>Set a reminder</h2>
          </div>
          <div className="div-help-boxes">
            <div className="div-box-icon">
              <img className="img-emoti" src={emoti} alt="img" />
            </div>
            <h2>Use emoji reactions</h2>
          </div>
          <div className="div-help-boxes">
            <div className="div-box-icon">
              <img className="img-video" src={video} alt="img" />
            </div>
            <h2>Slack video tutorials</h2>
          </div>
        </div>
      </div>
      <div className="help-footer-container">
        <div className="help-footer-subtitle">
          <h2>Help requests</h2>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
        <button className="button-help-footer">Contact Us</button>
      </div>
    </div>
  );
};
