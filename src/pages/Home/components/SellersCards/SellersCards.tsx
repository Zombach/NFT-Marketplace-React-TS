import './SellersCards.scss';
import { FC } from 'react';
import { SellersCardsProps } from '@components/Sellers/Sellers';
import SellerCard from '@components/Cards/SellerCard/SellerCard';

export const SellersCards: FC<SellersCardsProps> = ({ sellers, skip }) => {
  return sellers.map((seller, i) => (
    <SellerCard
      number={i + 1 + skip}
      key={i}
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
  ));
};

export default SellersCards;
