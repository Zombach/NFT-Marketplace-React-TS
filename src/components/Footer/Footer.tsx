import './Footer.scss';
import Copyright from './Copyright/Copyright';
import Links from './Links/Links';
import React, { type FC } from 'react';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import Trust from './Trust/Trust';

export const Footer: FC = () => {
  return (
    <div className="footer">
      <SocialNetwork />
      <Links />
      <Trust />
      <Copyright />
    </div>
  );
};

export default Footer;
