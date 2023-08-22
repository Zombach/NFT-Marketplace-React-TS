import './SocialNetwork.scss';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as GitHub } from './assets/github.svg';
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Linkedin } from './assets/linked-in.svg';
import { ReactComponent as Pinterest } from './assets/pinterest.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
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
