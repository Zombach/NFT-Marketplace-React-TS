import './Welcome.scss';
import { ReactComponent as Background } from './assets/Background.svg';
import { BnB } from './components/BnB/BnB';
import { ReactComponent as Delimiter } from './assets/Delimiter.svg';
import React, { type FC } from 'react';
import SignUp from './components/SignUp/SignUp';

export const Welcome: FC = () => {
  return (
    <div className="welcome">
      <Background className="background" />
      <div className="left">
        <SignUp className="sign-up" />
      </div>
      <Delimiter className="delimiter" />
      <div className="right">
        <BnB className="bnb" />
      </div>
    </div>
  );
};

export default Welcome;

/*      
      <div className="right">
        <BnB />
      </div>
*/
