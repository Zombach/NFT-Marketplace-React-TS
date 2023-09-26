import './ProductSection.scss';
import { CardMarketplace } from '@resources/moq/Marketplace';
import { FC } from 'react';
import { product } from '@resources/moq/Products';
import AuthoredBy from '@components/AuthoredBy/AuthoredBy';
import ProductActions from '../ProductActions/ProductActions';
import ProductPriceBlock from '../ProductPriceBlock/ProductPriceBlock';

interface ProductSectionProps {
  product: CardMarketplace;
}

export const ProductSection: FC<ProductSectionProps> = (props) => {
  const { product } = props;

  return (
    <section className="product-section">
      <img className="product-img" src={product.nftImage} alt=""></img>
      <div className="product-section-right-part">
        <h2>{product.nftName}</h2>
        <AuthoredBy srcAvatar={product.avatar} username={product.userName}></AuthoredBy>
        <ProductPriceBlock product={product} lastSalePrice={product.price} ethereumBidPrice={product.priceBnB}></ProductPriceBlock>
        <ProductActions></ProductActions>
      </div>
    </section>
  );
};

export default ProductSection;
