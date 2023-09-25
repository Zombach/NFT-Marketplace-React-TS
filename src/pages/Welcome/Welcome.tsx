import './Welcome.scss';
import { ReactComponent as Delimiter } from './assets/delimiter.svg';
import React, { type FC } from 'react';
import SignUp from './components/SignUp/SignUp';
import monkeyBnb from './assets/monkeyBnb.png';

export const Welcome: FC = () => {
  return (
    <div className="welcome">
      <SignUp className="sign-up" />
      <Delimiter className="delimiter" />
      <div className="right">
        <img src={monkeyBnb} alt="monkey" />
      </div>
    </div>
  );
};

export default Welcome;
