import './SellersSection.scss';
import { FC } from 'react';
import { Seller } from '@models/Seller';
import SellerCard from '@components/Cards/SellerCard/SellerCard';
import Sellers from '@components/Sellers/Sellers';

export const SellersSection: FC = () => {
  const getSellerCard = (seller: Seller, number: number) => {
    return (
      <SellerCard
        number={number + 1}
        key={number}
        id={seller.id}
        avatar={seller.avatar}
        username={seller.username}
        lastBidPrice={seller.lastBidPrice}
        rightBottom={
          <div>
            <span className="currency-price">$2.8M</span>
            <span className="increase">+24.6%</span>
          </div>
        }
        sellerInfoBottom={<span className="floor-bottom">Floor: 1.05ETH</span>}></SellerCard>
    );
  };

  return <Sellers title={'Top Sellers'} countOnPage={10} getSellerCard={getSellerCard}></Sellers>;
};

export default SellersSection;
