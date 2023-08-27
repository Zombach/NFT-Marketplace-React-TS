import './LogIn.scss';
import { Header } from '@components/Header/Header';
import { ReactComponent as Line } from './assets/line.svg';
import EmailPassword from './components/EmailPassword/EmailPassword';
import Footer from '@components/Footer/Footer';

import { LogQR } from './components/LogQR/LogQR';
import React, { type FC } from 'react';
//import { ReactComponent as Background } from './assets/Background.svg';

export const LogIn: FC = () => {
  return (
    <div>
      <div className="flex-block">
        <EmailPassword />
        <Line />
        <LogQR />
      </div>
    </div>
  );
};

export default LogIn;
