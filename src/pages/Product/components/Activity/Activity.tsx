import './Activity.scss';
import { FC } from 'react';
import { Seller } from '@models/Seller';
import SellerCard from '@components/Cards/SellerCard/SellerCard';
import Sellers from '@components/Sellers/Sellers';

export const Activity: FC = () => {
  const getSellerCard = (seller: Seller, number: number) => {
    return (
      <SellerCard
        key={number}
        id={seller.id}
        avatar={seller.avatar}
        username={seller.username}
        lastBidPrice={seller.lastBidPrice}
        rightBottom={<span>≈ $140.05</span>}
        sellerInfoBottom={
          <div className="recent-bid">
            <span className="time">{seller.lastBidTime}</span>
            <span>/</span>
            <span className="floor-bid">Floor bid</span>
          </div>
        }></SellerCard>
    );
  };

  return <Sellers title={'Activity'} countOnPage={4} getSellerCard={getSellerCard}></Sellers>;
};

export default Activity;
