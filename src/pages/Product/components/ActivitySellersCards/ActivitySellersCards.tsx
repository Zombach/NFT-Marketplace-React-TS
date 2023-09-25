import './ActivitySellersCards.scss';
import { FC } from 'react';
import { SellersCardsProps } from '@components/Sellers/Sellers';
import SellerCard from '@components/Cards/SellerCard/SellerCard';

export const ActivitySellersCards: FC<SellersCardsProps> = ({ sellers }) => {
  return sellers.map((seller, i) => (
    <SellerCard
      key={i}
      id={seller.id}
      avatar={seller.avatar}
      username={seller.username}
      lastBidPrice={seller.lastBidPrice}
      rightBottom={<span>≈ ${seller.lastBidPrice}</span>}
      sellerInfoBottom={
        <div className="recent-bid">
          <span className="time">{seller.lastBidTime}</span>
          <span>/</span>
          <span className="floor-bid">Floor bid</span>
        </div>
      }></SellerCard>
  ));
};

export default ActivitySellersCards;
