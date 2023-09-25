import './Header.scss';
import { ReactComponent as Ellipse } from './assets/ellipseWhite.svg';
import { ReactComponent as HamburgerMenu } from './assets/hamburgerMenu.svg';
import { ReactComponent as Lock } from './assets/lock.svg';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Search } from './assets/search.svg';
import CartModal from '@components/Cart/components/CartModal/CartModal';
import ModalWindow from '@components/Modals/ModalWindow/ModalWindow';
import NavLinks from './components/NavLinks/NavLinks';
import React, { useState } from 'react';

export const Header = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandle = () => {
    setIsOpen(true);
  };

  return (
    <div id="header">
      <div className="left column">
        <Logo className="logo" />
        <NavLinks />
      </div>
      <div className="right column">
        <button className="background">
          <Search className="logo" />
        </button>
        <div className="icon">
          <button className="background">
            <Search className="logo" />
          </button>
          <div className="icon">
            <button className="background">
              <Lock className="logo" />
            </button>
            <a href="signUp" className="sign-in">
              Sign in
            </a>
          </div>
          <div className="burger-menu">
            <Ellipse className="logo ellipse" />
            <HamburgerMenu className="logo burger" onClick={onClickHandle} />
          </div>
        </div>
      </div>
      <ModalWindow isOpen={modalIsOpen} content={<CartModal onClose={() => setIsOpen(false)} />} />
    </div>
  );
};
