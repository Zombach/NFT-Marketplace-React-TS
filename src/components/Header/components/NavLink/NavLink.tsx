import React from 'react';
import './NavLink.scss';

export  const NavLink = () => {
    return (
      <div className="link">
        <a href="welcome" className="link-text">
          Art
        </a>
        <div>/</div>
        <a href="welcome" className="link-text">
          Community
        </a>
        <div>/</div>
        <a href="welcome" className="link-text">
          Magazine
        </a>
        <div>/</div>
        <a href="welcome" className="link-text">
          Shop
        </a>
      </div>
    );
};
export default NavLink;
