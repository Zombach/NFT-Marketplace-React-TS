import './SellerCard.scss';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { FC } from 'react';
import Avatar from '@components/Avatar/Avatar';

export interface SellerCardProps {
  id: string;
  number?: number;
  avatar: string;
  username: string;
  lastBidPrice: string | number;
  rightBottom: string | React.ReactNode;
  sellerInfoBottom: React.ReactNode;
}

export const SellerCard: FC<SellerCardProps> = ({ number, avatar, username, lastBidPrice, rightBottom, sellerInfoBottom }) => {
  return (
    <div className="seller-card">
      <div className="seller-card-left">
        {number && <span className="number">{number}</span>}
        <Avatar src={avatar}></Avatar>
        <div className="seller-info">
          <span className="username">{username}</span>
          {sellerInfoBottom}
        </div>
      </div>
      <div className="seller-card-right">
        <EthereumPrice value={lastBidPrice}>{rightBottom}</EthereumPrice>
      </div>
    </div>
  );
};

export default SellerCard;
