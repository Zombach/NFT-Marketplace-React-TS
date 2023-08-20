import './Application.scss';
import { type FC } from 'react';
import Footer from '@components/Footer/Footer';
import Routes from '@components/Routes';

export const Application: FC = () => {
  return (
    <div className="application">
      <header />
      <Routes />
      <Footer />
    </div>
  );
};
