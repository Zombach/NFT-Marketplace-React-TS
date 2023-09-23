import './Footer.scss';
import { ReactComponent as Delimiter } from './assets/delimiter.svg';
import { checkOnDesktopOnly, checkOnMobileOnly } from '@src/helpers';
import AboutUs from './components/AboutUs/AboutUs';
import Copyright from './components/Copyright/Copyright';
import Links from './components/Links/Links';
import React, { type FC } from 'react';
import SocialNetwork from './components/SocialNetwork/SocialNetwork';
import Subscribe from './components/Subscribe/Subscribe';
import Trust from './components/Trust/Trust';

export const Footer: FC = () => {
  return (
    <>
      <Delimiter className="delimiter" />
      <div className="footer">
        <div className="left">
          <AboutUs />
          <Subscribe />
          {checkOnDesktopOnly() && <Trust />}
        </div>
        <div className="right">
          <Links />
          <SocialNetwork />
          {checkOnMobileOnly() && <Trust />}
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default Footer;
