import './Product.scss';
import { type FC } from 'react';
import ProductSection from './components/ProductSection/ProductSection';

export const Product: FC = () => {
  return (
    <div className="product-page">
      <ProductSection></ProductSection>
    </div>
  );
};

export default Product;
