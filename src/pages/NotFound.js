import React from 'react';
import '../assets/styles/pages/NotFound.scss';
import logoSlack from '../assets/img/logo-slack-notfound.svg';
import sadEmoji from '../assets/img/sad-emoji.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div>
            <img src={logoSlack} className="nav__logo" alt="logo-slack" />
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/login" className="nav__link">
                  Inicio
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/register" className="nav__link">
                  Registro
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home">
          <div className="home__container container">
            <div className="home__data">
              <h1 className="home__title">ERROR 404</h1>
              <p className="home__description">
                No podemos encontrar la página <br /> que estás buscando.
              </p>
              <Link to="/login" className="home__button">
                Inicio
              </Link>
            </div>

            <div className="home__img">
              <img src={sadEmoji} alt="emoji" />
              <div className="home__shadow"></div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
};
