import './Footer.scss';
import { ReactComponent as Background } from './assets/Background.svg';
import { ReactComponent as Delimiter } from './assets/Delimiter.svg';
import AboutUs from './AboutUs/AboutUs';
import Copyright from './Copyright/Copyright';
import Links from './Links/Links';
import React, { type FC } from 'react';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import Subscribe from './Subscribe/Subscribe';
import Trust from './Trust/Trust';

export const Footer: FC = () => {
  return (
    <div className="footer">
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
