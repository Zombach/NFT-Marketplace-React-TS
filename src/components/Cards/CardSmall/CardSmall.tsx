import './CardSmall.scss';
import { ReactComponent as Icon } from '../../../pages/Creators/CardsRender/HeaderCardSmall/assets/info.svg';
import HeaderCardSmall from '@pages/Creators/CardsRender/HeaderCardSmall/HeaderCardSmall';
import React, { type FC } from 'react';
import UserInfo from './components/UserInfo/UserInfo';
import type { CardSmall as Model } from '@models/CardModels/CardModels';

interface CardSmallProps {
  number: number;
  model: Model;
}

export const CardSmall: FC<CardSmallProps> = ({ number, model }) => {
  const { userId, userName, avatar, volume, sales, items, followers, follow } = model;
  return (
    <div className="card-small">
      <div className="user-info-block">
        <span className="number">{number + 1}</span>
        <div className="user-info-block-right">
          <UserInfo userId={userId} userName={userName} avatar={avatar}></UserInfo>
          <button className="follow">
            <span className="follow-text">{follow ? 'Follow' : 'Unsubscribe'}</span>
          </button>
        </div>
      </div>
      <div className="user-extra-info-box">
        <div className="user-extra-info">
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
          <span className="">{volume}</span>
          <span className="">{sales}</span>
          <span className="">{items}</span>
          <span className="">{followers}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
