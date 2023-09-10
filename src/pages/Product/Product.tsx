import './Product.scss';
import { Activity } from './components/Activity/Activity';
import { CardMarketplace, cards } from '@resources/moq/Marketplace';
import { CardsFragment } from '@src/pages/Marketplace/CardsFragment/CardsFragment';
import { CollectionsHeader } from '@components/CollectionsHeader/CollectionsHeader';
import { type FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductSection from './components/ProductSection/ProductSection';

export const Product: FC = () => {
  const location = useLocation();
  const [isTable, setIsTable] = useState<boolean>(false);
  const [product, setProduct] = useState<CardMarketplace>();

  useEffect(() => {
    if (location?.state) {
      setProduct(location?.state);
    }
  }, []);

  return (
    <div className="product-page">
      {product && <ProductSection product={product}></ProductSection>}
      <Activity></Activity>
      <div className="market-place-section">
        <h2>More from the collection</h2>
        <CollectionsHeader />
        <CardsFragment cards={cards} isTable={isTable} />
      </div>
    </div>
  );
};

export default Product;
