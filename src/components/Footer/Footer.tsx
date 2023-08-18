import './Footer.scss';
import React, { type FC } from 'react';
import SocialNetwork from './SocialNetwork/SocialNetwork';

export const Footer: FC = () => {
  return (
    <div className="footer">
      <SocialNetwork />
    </div>
  );
};

export default Footer;
