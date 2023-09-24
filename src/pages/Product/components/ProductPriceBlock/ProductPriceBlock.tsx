import './ProductPriceBlock.scss';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { FC } from 'react';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import PriceCard from '../PriceCard/PriceCard';

export interface AuthoredByProps {
  ethereumPrice: number | string;
  dollarPrice: number | string;
  username: string;
  lastSalePrice: number | string;
  ethereumBidPrice: number | string;
}

export const ProductPriceBlock: FC<AuthoredByProps> = ({ ethereumPrice, username, lastSalePrice, dollarPrice, ethereumBidPrice }) => {
  return (
    <div className="product-price-block thin-block-border">
      <div className="product-price-block-top">
        <PriceCard title="Price" price={ethereumPrice} bottomText={`≈ $${dollarPrice.toString()}`}></PriceCard>
        <PriceCard title="Highest floor bid" price={ethereumBidPrice} bottomText={username}></PriceCard>
      </div>
      <div className="last-price">
        <span>Last sale price:</span>
        <EthereumPrice value={lastSalePrice}></EthereumPrice>
      </div>
      <div className="product-price-buttons">
        <ButtonBox buttonClassName="buy-button primary-btn" text="Buy now for 2.2 BNB"></ButtonBox>
        <ButtonBox buttonClassName="bid-button primary-2-btn" text="Place bid"></ButtonBox>
      </div>
    </div>
  );
};

export default ProductPriceBlock;
