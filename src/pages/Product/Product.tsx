import './Product.scss';
import { CardMarketplace, cards } from '@resources/moq/Marketplace';
import { CardsFragment } from '@src/pages/Marketplace/CardsFragment/CardsFragment';
import { CollectionsHeader } from '@components/CollectionsHeader/CollectionsHeader';
import { type FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ActivitySellersCards from './components/ActivitySellersCards/ActivitySellersCards';
import ProductSection from './components/ProductSection/ProductSection';
import Sellers from '@components/Sellers/Sellers';

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
      <Sellers title={'Activity'} countOnPage={4} SellersCards={ActivitySellersCards}></Sellers>
      <div className="market-place-section">
        <h2>More from the collection</h2>
        <CollectionsHeader />
        <CardsFragment cards={cards} isTable={isTable} />
      </div>
    </div>
  );
};

export default Product;
