import './ProductSection.scss';
import { FC } from 'react';
import AuthoredBy from '@components/AuthoredBy/AuthoredBy';
import AvatarMock from '@components/Avatar/assets/avatar-mock.jpg';
import ProductActions from '../ProductActions/ProductActions';
import ProductImg from './assets/product-mock.svg';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

export const ProductSection: FC = () => {
  return (
    <section className="product-section">
      <img src={ProductImg} alt=""></img>
      <div className="product-section-right-part">
        <h2>Bored Ape Yacht Club</h2>
        <AuthoredBy srcAvatar={AvatarMock} username="@username"></AuthoredBy>
        <ProductPriceBlock ethereumPrice={123} dollarPrice={1600} username={'@vitaxaOv'} lastSalePrice={50} ethereumBidPrice={50}></ProductPriceBlock>
        <ProductActions></ProductActions>
      </div>
    </section>
  );
};

export default ProductSection;
