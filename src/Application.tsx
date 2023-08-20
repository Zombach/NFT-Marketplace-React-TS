import './Application.scss';
import { type FC } from 'react';
import Routes from '@components/Routes';

export const Application: FC = () => {
  return (
    <div className="application">
      <header />
      <Routes />
      <footer />
    </div>
  );
};
