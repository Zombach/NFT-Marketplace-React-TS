import '../Card.scss';
import './CardBig.scss';
import { CardCollections } from '@resources/moq/Collections';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { Link } from 'react-router-dom';
import Avatar from '@components/Avatar/Avatar';
import React, { type FC } from 'react';

interface CardBigFragmentProps {
  card: CardCollections;
}

export const CardBig: FC<CardBigFragmentProps> = (props) => {
  const { card } = props;

  return (
    <div className="card-container">
      <div className="top-section">
        <img src={card.nftImage} alt="" />
        <Avatar className="big-avatar" src={card.avatar} />
      </div>
      <div className="card-bottom-section">
        <div className="collection-title">
          <Link to={`/collections/${card.id}`}>
            <p className="collection-name">{card.collectionName}</p>
          </Link>
          <p className="sub-title">{card.owners}</p>
        </div>
        <div className="volume-floor-container">
          <EthereumPrice value={card.totalVolume} title="Total volume" />
          <EthereumPrice value={card.floor} title="Floor" />
        </div>
      </div>
    </div>
  );
};

export default CardBig;
