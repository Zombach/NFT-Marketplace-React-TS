import './Product.scss';
import { type FC } from 'react';
import Avatar from '@components/Avatar/Avatar';
import AvatarMock from '@components/Avatar/assets/avatar-mock.jpg';
import PriceCard from './components/PriceCard/PriceCard';
import ProductImg from './assets/product-mock.svg';

export const Product: FC = () => {
  return (
    <div className="product-page">
      <section className="product-section">
        <img src={ProductImg} alt="productImage"></img>
        <div className="product-section-right-part">
          <h2>Bored Ape Yacht Club</h2>
          <div className="authored-by">
            <Avatar src={AvatarMock}></Avatar>
            <div>
              <span>created by: </span>
              <span>@marterium</span>
            </div>
          </div>
          <div className="product-price-block thin-block-border">
            <div className="product-price-block-top">
              <PriceCard title="Price" price={0.49} bottomText="≈ $140.05"></PriceCard>
              <PriceCard title="Highest floor bid" price={2.2} bottomText="by marterium"></PriceCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
