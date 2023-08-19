import './Footer.scss';
import { ReactComponent as Background } from './assets/Background.svg';
import { ReactComponent as Delimiter } from './assets/Delimiter.svg';
import AboutUs from './components/AboutUs/AboutUs';
import Copyright from './components/Copyright/Copyright';
import Links from './components/Links/Links';
import React, { type FC } from 'react';
import SocialNetwork from './components/SocialNetwork/SocialNetwork';
import Subscribe from './components/Subscribe/Subscribe';
import Trust from './components/Trust/Trust';

export const Footer: FC = () => {
  return (
    <div className="footer">
      <Background className="background" />
      <Delimiter className="delimiter" />
      <div className="left">
        <AboutUs />
        <Subscribe />
        <Trust />
      </div>
      <div className="right">
        <Links />
        <SocialNetwork />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
