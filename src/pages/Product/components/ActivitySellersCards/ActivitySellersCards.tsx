import './ActivitySellersCards.scss';
import { FC } from 'react';
import { SellersCardsProps } from '@components/Sellers/Sellers';
import SellerCard from '@components/Cards/SellerCard/SellerCard';

export const ActivitySellersCards: FC<SellersCardsProps> = ({ sellers }) => {
  return sellers.map((seller, i) => (
    <SellerCard
      key={i}
      id={seller.id.toString()}
      avatar={seller.avatar}
      username={seller.name}
      lastBidPrice={100}
      rightBottom={<span>≈ ${21}</span>}
      sellerInfoBottom={
        <div className="recent-bid">
          <span className="time">{21}</span>
          <span>/</span>
          <span className="floor-bid">Floor bid</span>
        </div>
      }></SellerCard>
  ));
};

export default ActivitySellersCards;
