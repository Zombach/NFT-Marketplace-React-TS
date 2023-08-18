import './Footer.scss';
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
      <SocialNetwork />
      <Links />
      <Trust />
      <Copyright />
      <Subscribe />
      <AboutUs />
    </div>
  );
};

export default Footer;
