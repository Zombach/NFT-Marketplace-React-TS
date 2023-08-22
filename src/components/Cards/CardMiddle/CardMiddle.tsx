import './CardMiddle.scss';
import { ReactComponent as Avatar } from './assets/Avatar.svg';
import { CardMarketplace } from '@resources/moq/Marketplace';
import { ReactComponent as Clock } from './assets/Clock.svg';
import { ReactComponent as Ethereum } from '../assets/Ethereum.svg';
import { ReactComponent as Heart } from '../assets/Heart.svg';
import React, { type FC } from 'react';

interface CardMiddleFragmentProps {
  card: CardMarketplace;
}

export const CardMiddle: FC<CardMiddleFragmentProps> = (props) => {
  const { card } = props;

  return (
    <div className="middle-card">
      <div className="top-section">
        <img src={card.nftImage} alt="" />
        <div className="time-badge">
          <Clock />
          {String(card.time.toLocaleTimeString())}
        </div>
      </div>
      <div className="bottom-section">
        <p className="bottom-section-header">{card.nftName}</p>
        <div className="user-container">
          <Avatar />
          <span className="user-name">{card.userName}</span>
        </div>
        <div className="cost-likes-container">
          <div className="price-container">
            <Ethereum />
            <div>
              <p className="price">{card.price}</p>
              <p className="price-bnb">{card.priceBnB}</p>
            </div>
          </div>
          <div>
            <button className="likes-btn">
              <Heart />
              <span>{card.like}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMiddle;
