import './LogIn.scss';
import { Header } from '@components/Header/Header';
import EmailPassword from './components/EmailPassword/EmailPassword';
import Footer from '@components/Footer/Footer';
import { ReactComponent as Line } from './assets/line.svg';

import React, { type FC } from 'react';
import { LogQR } from './components/LogQR/LogQR';
//import { ReactComponent as Background } from './assets/Background.svg';

export const LogIn: FC = () => {
  return (
    <div>
      <Header />
      <div className='flex-block'>
        <EmailPassword />
        <Line />
        <LogQR />
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
