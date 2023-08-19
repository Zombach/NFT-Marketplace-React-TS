import './Welcome.scss';
import { ReactComponent as Background } from './assets/Background.svg';
import { ReactComponent as Delimiter } from './assets/Delimiter.svg';
//import BnB from './components/BnB/BnB';
import { BnB } from './components/BnB/BnB';
import React, { type FC } from 'react';
import SignUp from './components/SignUp/SignUp';

export const Welcome: FC = () => {
  return (
    <div className="welcome">
      <Background className="background" />
      <div className="left">
        <SignUp />
      </div>
      <Delimiter className="delimiter" />
    </div>
  );
};

export default Welcome;

/*
      



      <div className="right">
        <BnB />
      </div>
*/
