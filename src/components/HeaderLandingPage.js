import React from 'react';
import '../assets/styles/components/HeaderLandingPage.scss';

export const HeaderLandingPage = () => {
  const inputStyle = {
    fontFamily: "'Lato', FontAwesome",
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__div-left">
          <div>
            <a href="#" className="header__a">
              <i className="bx bxs-circle"></i>
            </a>
          </div>
        </div>

        <div className="header__div-center">
          <div className="header__div-icons">
            <div>
              <a href="#" className="header__a-icons">
                <i className="bx bx-left-arrow-alt"></i>
              </a>
            </div>
            <div>
              <a href="#" className="header__a-icons">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <div>
              <a href="#" className="header__a-icons">
                <i className="bx bx-time"></i>
              </a>
            </div>
          </div>
          <div className="header__div-input">
            <input
              type="text"
              placeholder=" &#xf002;   Search DesignersKR"
              className="header__input-search"
              style={inputStyle}
            />
          </div>
          <a href="#" className="header__div-question">
            <p>?</p>
            <span className="header__span-badge"> </span>
          </a>
        </div>

        <div className="header__div-right">
          <div className="header__perfil">
            <span className="header__span-badge"> </span>
          </div>
          <div className="header__flag">
            <p>&#x262f;&#xfe0f;</p>
          </div>
        </div>
      </nav>
    </header>
  );
};
