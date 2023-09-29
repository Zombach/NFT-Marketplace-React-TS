import './ProductSection.scss';
import { CardMarketplace } from '@resources/moq/Marketplace';
import { FC } from 'react';
import { Product } from '@models/Product';
import AuthoredBy from '@components/AuthoredBy/AuthoredBy';
import ProductActions from '../ProductActions/ProductActions';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

interface ProductSectionProps {
  product: Product;
}

export const ProductSection: FC<ProductSectionProps> = (props) => {
  const { product } = props;

  return (
    <section className="product-section">
      <img className="product-img" src={product.img} alt=""></img>
      <div className="product-section-right-part">
        <h2>{product.name}</h2>
        <AuthoredBy srcAvatar={product.creator.avatar} username={product.creator.name}></AuthoredBy>
        <ProductPriceBlock product={product} lastSalePrice={product.price} ethereumBidPrice={product.price}></ProductPriceBlock>
        <ProductActions></ProductActions>
      </div>
    </section>
  );
};

export default ProductSection;
