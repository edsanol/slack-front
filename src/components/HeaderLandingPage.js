import React from 'react';
import '../assets/styles/components/HeaderLandingPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { PopoverComponent } from './PopoverComponent';

export const HeaderLandingPage = () => {

  const dispatch = useDispatch();
  const OpenCloseThread = useSelector(
    (state) => state.changeViewReducer.hiddenView
  );

  const handleClickHelpShow = () => {
    OpenCloseThread === 'hiddenAll'
      ? dispatch(actionsChangeView('showHelp'))
      : dispatch(actionsChangeView('hiddenAll'));
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__div-left">
          <div>
            <a href="#header" className="header__a">
              <i className="bx bxs-circle"></i>
            </a>
          </div>
        </div>

        <div className="header__div-center">
        </div>

        <div className="header__div-right">
          <div
            className="header__div-question"
            type="button"
            onClick={handleClickHelpShow}>
            <p>?</p>
            <span className="header__span-badge"> </span>
          </div>
          <PopoverComponent />
        </div>
      </nav>
    </header>
  );
};
