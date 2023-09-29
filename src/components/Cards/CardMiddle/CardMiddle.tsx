import '../Card.scss';
import './CardMiddle.scss';
import { CardMarketplace } from '@resources/moq/Marketplace';
import { ReactComponent as Clock } from './assets/Clock.svg';
import { ReactComponent as Ethereum } from '../assets/Ethereum.svg';
import { ReactComponent as Heart } from '../assets/Heart.svg';
import { Link } from 'react-router-dom';
import { Product } from '@models/Product';
import Avatar from '@components/Avatar/Avatar';
import React, { type FC } from 'react';

interface CardMiddleFragmentProps {
  card: Product;
}

export const CardMiddle: FC<CardMiddleFragmentProps> = (props) => {
  const { card } = props;

  return (
    <div className="card-container middle">
      <div className="top-section">
        <img className="nft-img" src={card.img} alt="" />
      </div>
      <div className="bottom-section">
        <p className="bottom-section-header">
          <Link className="link" to={`/product/${card.id}`} state={card}>
            {card.name}
          </Link>
        </p>
        <Link className="link" to={`/creators/${card.creator.id}`}>
          <div className="user-container">
            <Avatar src={card.creator.avatar} className="small-avatar" />
            <span className="user-name">{card.creator.name}</span>
          </div>
        </Link>
        <div className="price-like-container">
          <div className="price-container">
            <Ethereum />
            <div>
              <p className="price">{card.price} BNB</p>
              <p className="sub-title">≈ ${card.price}</p>
            </div>
          </div>
          <button className="likes-btn">
            <Heart />
            <span>100</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMiddle;
