import '../Card.scss';
import './CardBig.scss';
import { CardCollections } from '@resources/moq/Collections';
import { ReactComponent as EthereumIcon } from '../../assets/ethereum-black.svg';
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
          <p className="collection-name">{card.collectionName}</p>
          <p className="sub-title">{card.owners}</p>
        </div>
        <div className="volume-floor-container">
          <div className="total-volume-container">
            <EthereumIcon />
            <div className="volume">
              <p className="sub-title">Total volume</p>
              <p className="volume-price">{card.totalVolume}</p>
            </div>
          </div>
          <div className="total-floor-container">
            <EthereumIcon />
            <div className="floor">
              <p className="sub-title">Floor</p>
              <p className="floor-price">{card.floor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBig;
