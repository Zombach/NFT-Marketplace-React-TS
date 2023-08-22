import './Application.scss';
import { type FC } from 'react';
import Routes from '@components/Routes';
import UserProvider from '@components/Contexts/UserContext';

export const Application: FC = () => {
  return (
    <UserProvider>
      <div className="application">
        <Routes />
      </div>
    </UserProvider>
  );
};
