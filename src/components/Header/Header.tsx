import './Header.scss';
import { ReactComponent as Ellipse } from './assets/ellipseWhite.svg';
import { useState } from 'react';

import { ReactComponent as HamburgerMenu } from './assets/hamburgerMenu.svg';
import { ReactComponent as Backet } from './assets/basket.svg';
import { ReactComponent as Lock } from './assets/lock.svg';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Search } from './assets/search.svg';
import NavLinks from './components/NavLinks/NavLinks';
import ModalWindow from '@components/Modals/ModalWindow/ModalWindow';
import CartModal from '@components/Cart/components/CartModal/CartModal';

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandle = () => {
    setIsOpen(true);
  };

  return (
    <div className="head">
      <div id="header">
        <div className={menuActive ? 'left column active' : 'left column'}>
          <Logo className="logo desktop-only" />
          <NavLinks />
        </div>
        <div className="mobile-only">
          <Logo className="logo" />
        </div>
        <div className={menuActive ? 'right column active' : 'right column'}>
          <button className="background">
            <Search className="logo" />
          </button>
          <div className="icon ">
            <button className="background">
              <Lock className="logo" />
            </button>
            <a href="signUp" className="sign-in">
              Sign in
            </a>
          </div>
          <div className="burger-menu desktop-only">
            <Ellipse className="logo ellipse" />
            <HamburgerMenu className="logo burger" />
          </div>
        </div>
        <div className="menu mobile-only">
          <button onClick={onClickHandle}>
            <Backet className="logo backet" />
          </button>
          <button className="burger-menu" onClick={() => setMenuActive(!menuActive)}>
            <Ellipse className="logo ellipse" />
            <HamburgerMenu className="logo burger" />
          </button>
        </div>
      </div>
      <ModalWindow onClose={() => setIsOpen(false)} isOpen={modalIsOpen} content={<CartModal onClose={() => setIsOpen(false)} />} />
    </div>
  );
};
