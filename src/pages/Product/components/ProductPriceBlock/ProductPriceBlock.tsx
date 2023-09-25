import './ProductPriceBlock.scss';
import { CardMarketplace } from '@resources/moq/Marketplace';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { FC, useState } from 'react';
import { ModalWindow } from '@components/Modals/ModalWindow/ModalWindow';
import { Product, addToCart } from '@components/Cart/CartSlice';
import { useDispatch } from 'react-redux';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import CartModal from '@components/Cart/components/CartModal/CartModal';
import PriceCard from '../PriceCard/PriceCard';

export interface AuthoredByProps {
  product: CardMarketplace;
  lastSalePrice: number | string;
  ethereumBidPrice: number | string;
}

export const ProductPriceBlock: FC<AuthoredByProps> = ({ product, lastSalePrice, ethereumBidPrice }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandle = () => {
    dispatch(addToCart(product as Product));
    setIsOpen(true);
  };

  return (
    <div className="product-price-block thin-block-border">
      <div className="product-price-block-top">
        <PriceCard title="Price" price={product.price} bottomText={`≈ $${product.price.toString()}`}></PriceCard>
        <PriceCard title="Highest floor bid" price={ethereumBidPrice} bottomText={product.userName}></PriceCard>
      </div>
      <div className="last-price">
        <span>Last sale price:</span>
        <EthereumPrice value={lastSalePrice}></EthereumPrice>
      </div>
      <div className="product-price-buttons">
        <ButtonBox
          onClick={() => onClickHandle()}
          buttonClassName="buy-button primary-btn"
          text={`Buy now for ${product.price.toString()} BNB`}></ButtonBox>
        <ButtonBox buttonClassName="bid-button primary-2-btn" text="Place bid"></ButtonBox>
      </div>
      <ModalWindow onClose={() => setIsOpen(false)} isOpen={modalIsOpen} content={<CartModal onClose={() => setIsOpen(false)} />} />
    </div>
  );
};

export default ProductPriceBlock;
