import './HeaderCardSmall.scss';
import { ReactComponent as Icon } from './assets/info.svg';
import React, { type FC } from 'react';

export const HeaderCardSmall: FC = () => {
  return (
    <div className="header-card">
      <span className="text creator">Creator</span>
      <div className="user-extra-info-header">
        <div className="header-item">
          <span className="text volume">Volume (USD)</span>
          <Icon className="icon" />
        </div>
        <div className="header-item">
          <span className="text sales">Sales</span>
          <Icon className="icon" />
        </div>
        <div className="header-item">
          <span className="text items">Items</span>
          <Icon className="icon" />
        </div>
        <div className="header-item">
          <span className="text followers">Followers</span>
          <Icon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCardSmall;
