import './LogIn.scss';
import { type FC } from 'react';
import { ReactComponent as Line } from './assets/line.svg';
import { LogQR } from './components/LogQR/LogQR';
import EmailPassword from './components/EmailPassword/EmailPassword';

export const LogIn: FC = () => {
  return (
    <div className="login-section">
      <EmailPassword />
      <Line />
      <LogQR />
    </div>
  );
};

export default LogIn;
