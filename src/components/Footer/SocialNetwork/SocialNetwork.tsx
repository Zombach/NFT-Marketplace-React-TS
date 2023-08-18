import './SocialNetwork.scss';
import { ReactComponent as Facebook } from './assets/Facebook.svg';
import { ReactComponent as GitHub } from './assets/GitHub.svg';
import { ReactComponent as Google } from './assets/Google.svg';
import { ReactComponent as Instagram } from './assets/Instagram.svg';
import { ReactComponent as Linkedin } from './assets/Linkedin.svg';
import { ReactComponent as Pinterest } from './assets/Pinterest.svg';
import { ReactComponent as Twitter } from './assets/Twitter.svg';
import React, { type FC } from 'react';

export const SocialNetwork: FC = () => {
  return (
    <div className="social-networks">
      <Instagram className="icon" />
      <Linkedin className="icon" />
      <Facebook className="icon" />
      <Twitter className="icon" />
      <GitHub className="icon" />
      <Google className="icon" />
      <Pinterest className="icon" />
    </div>
  );
};

export default SocialNetwork;
