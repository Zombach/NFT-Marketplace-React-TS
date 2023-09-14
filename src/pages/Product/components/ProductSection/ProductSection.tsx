import './ProductSection.scss';
import { FC } from 'react';
import { product } from '@resources/moq/Products';
import AuthoredBy from '@components/AuthoredBy/AuthoredBy';
import AvatarMock from '@components/Avatar/assets/avatar-mock.jpg';
import ProductActions from '../ProductActions/ProductActions';
import ProductImg from './assets/product-mock.svg';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

export const ProductSection: FC = () => {
  return (
    <section className="product-section">
      <img className="product-img" src={product.image} alt=""></img>
      <div className="product-section-right-part">
        <h2>{product.name}</h2>
        <AuthoredBy srcAvatar={product.userAvatar} username={product.username}></AuthoredBy>
        <ProductPriceBlock
          ethereumPrice={product.price}
          dollarPrice={product.price}
          username={product.username}
          lastSalePrice={product.lastPrice}
          ethereumBidPrice={product.bidPrice}></ProductPriceBlock>
        <ProductActions></ProductActions>
      </div>
    </section>
  );
};

export default ProductSection;
