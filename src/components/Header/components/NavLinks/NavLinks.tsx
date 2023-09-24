import './NavLinks.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export const NavLinks = () => {
  return (
    <div className="link mobile-nav">
      <Link to="/" className="link-text">
        Home
      </Link>
      <div className="desktop-only">/</div>
      <Link to="/marketplace" className="link-text">
        Marketplace
      </Link>
      <div className="desktop-only">/</div>
      <Link to="/collections" className="link-text">
        Collections
      </Link>
      <div className="desktop-only">/</div>
      <Link to="/creators" className="link-text">
        Creators
      </Link>
    </div>
  );
};
export default NavLinks;
