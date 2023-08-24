import './Header.scss';
import { ReactComponent as Ellipse } from './assets/ellipse.svg';
import { ReactComponent as HamburgerMenu } from './assets/hamburgerMenu.svg';
import { ReactComponent as Lock } from './assets/lock.svg';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Search } from './assets/search.svg';
import Button from '@components/ButtonBox/ButtonBox';
import NavLink from './components/NavLink/NavLink';
import React from 'react';
import Svg from '@components/ButtonBox/components/SvgBox/SvgBox';

export const Header = () => {
  return (
    <div id="header">
      <div className="left column">
        <Svg SvgElement={Logo} />
        <NavLink />
      </div>
      <div className="right column">
        <Button SvgBox={<Search />} />
        <div className="icon">
          <Button SvgBox={<Lock />} />
          <a href="signUp" className="sign-in">
            Sign in
          </a>
        </div>
        <div className="burger-menu">
          <Ellipse className="logo ellipse" />
          <HamburgerMenu className="logo burger" />
        </div>
      </div>
    </div>
  );
};
