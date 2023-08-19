import './Welcome.scss';
import { ReactComponent as Background } from './assets/Background.svg';
import { ReactComponent as Delimiter } from './assets/Delimiter.svg';
import BnB from './BnB/BnB';
import React, { type FC } from 'react';

export const Welcome: FC = () => {
  return (
    <div className="welcome">
      <Background className="welcome background" />
      <div className="welcome left">
        <p className="text-1">Welcome to BnB!</p>
        <p className="text-2">Already registered? Tap here to Log In</p>
      </div>
      <Delimiter className="welcome delimiter" />
      <div className="welcome right">
        <BnB />
      </div>
    </div>
  );
};

export default Welcome;
