import './LogIn.scss';
import { ReactComponent as Line } from './assets/line.svg';
import { LogQR } from './components/LogQR/LogQR';
import EmailPassword from './components/EmailPassword/EmailPassword';
import React, { type FC } from 'react';

export const LogIn: FC = () => {
  return (
    <div className="login-section">
      <EmailPassword />
      <div className="desktop-only">
        <Line />
      </div>
      <LogQR />
    </div>
  );
};

export default LogIn;
