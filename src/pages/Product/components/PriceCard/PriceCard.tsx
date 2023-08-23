import './PriceCard.scss';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { FC } from 'react';

interface PriceCardProps {
  title: string;
  price: number | string;
  bottomText: string;
}

export const PriceCard: FC<PriceCardProps> = (props) => {
  const { title, price, bottomText } = props;
  return (
    <div className="price-card">
      <span className="price-card-title ">{title}</span>
      <EthereumPrice value={price}>{bottomText}</EthereumPrice>
    </div>
  );
};

export default PriceCard;
