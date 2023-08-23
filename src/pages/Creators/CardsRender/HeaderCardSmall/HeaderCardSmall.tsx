import './HeaderCardSmall.scss';
import { ReactComponent as Icon } from './assets/info.svg';
import React, { type FC } from 'react';

export const HeaderCardSmall: FC = () => {
  return (
    <div className="header-card">
      <span className="text creator">Creator</span>
      <span className="text volume">Volume (USD)</span>
      <Icon className="icon" />
      <span className="text sales">Sales</span>
      <Icon className="icon" />
      <span className="text items">Items</span>
      <Icon className="icon" />
      <span className="text followers">Followers</span>
      <Icon className="icon" />
    </div>
  );
};

export default HeaderCardSmall;
