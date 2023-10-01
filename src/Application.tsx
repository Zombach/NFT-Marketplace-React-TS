import './Application.scss';
import { type FC } from 'react';
import { Header } from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Routes from '@components/Routes';
import ScrollToTop from './ScrollToTop';
import UserProvider from '@components/Contexts/UserContext';

export const Application: FC = () => {
  return (
    <UserProvider>
      <div className="application">
        <Header></Header>
        <ScrollToTop></ScrollToTop>
        <Routes />
        <Footer></Footer>
      </div>
    </UserProvider>
  );
};
