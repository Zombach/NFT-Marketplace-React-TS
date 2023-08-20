import './Header.scss';
import { NavLink } from './components/NavLink/NavLink';
import Ellipse from './assets/Ellipse.svg';
import HamburgerMenu from './assets/HamburgerMenu.svg';
import Lock from './assets/Lock.svg';
import React from 'react';
import Search from './assets/Search.svg';
import logo from './assets/logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="left column">
        <img src={logo} alt="header" className="logo" />
        <NavLink />
      </div>
      <div className="right column">
        <button className="background">
          <img src={Search} alt="Search" className="logo" />
        </button>
        <div className="icon">
          <button className="background">
            <img src={Lock} alt="Lock" className="logo" />
          </button>
          <a href="signUp" className="signIn">
            Sign in
          </a>
        </div>
        <div className="burgerMenu">
          <img src={Ellipse} alt="Ellipse" className="logo ellipse" />
          <img src={HamburgerMenu} alt="HamburgerMenu" className="logo burger" />
        </div>
      </div>
    </div>
  );
};
