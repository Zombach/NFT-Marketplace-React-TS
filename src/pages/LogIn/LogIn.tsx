import './LogIn.scss';
import EmailPassword from './components/EmailPassword/EmailPassword';
import React, { type FC } from 'react';
//import { ReactComponent as Background } from './assets/Background.svg';

export const LogIn: FC = () => {
  return (
    <div>
      <EmailPassword />
    </div>
  );
};

export default LogIn;
