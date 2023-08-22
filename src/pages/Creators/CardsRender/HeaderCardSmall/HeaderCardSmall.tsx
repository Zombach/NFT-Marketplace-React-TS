import './HeaderCardSmall.scss';
import { ReactComponent as Icon } from './assets/info.svg';
import React, { type FC } from 'react';

export const HeaderCardSmall: FC = () => {
  return (
    <div className="header-card">
      <p className="text creator">Creator</p>
      <p className="text volume">Volume (USD)</p>
      <Icon className="icon" />
      <p className="text sales">Sales</p>
      <Icon className="icon" />
      <p className="text items">Items</p>
      <Icon className="icon" />
      <p className="text followers">Followers</p>
      <Icon className="icon" />
    </div>
  );
};

export default HeaderCardSmall;
